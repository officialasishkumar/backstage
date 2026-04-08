/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useAnalytics, useApiHolder } from '@backstage/core-plugin-api';
import { useTranslationRef } from '@backstage/frontend-plugin-api';
import {
  FieldExtensionOptions,
  FormProps,
  LayoutOptions,
  ReviewStepProps,
  TemplateParameterSchema,
} from '@backstage/plugin-scaffolder-react';
import { JsonObject, JsonValue } from '@backstage/types';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiStep from '@material-ui/core/Step';
import MuiStepLabel from '@material-ui/core/StepLabel';
import MuiStepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import { type IChangeEvent } from '@rjsf/core';
import { ErrorSchema } from '@rjsf/utils';
import { customizeValidator } from '@rjsf/validator-ajv8';
import ajvErrors from 'ajv-errors';
import { merge } from 'lodash';
import {
  ComponentType,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { scaffolderApiRef } from '../../../api';
import { scaffolderReactTranslationRef } from '../../../translation';
import { useFormDataFromQuery, useTemplateSchema } from '../../hooks';
import {
  useRenderedStep,
  extractDefaultsFromSchema,
  schemaHasTemplateExpressions,
  stripTemplateDefaults,
} from '../../hooks/useRenderedStep';
import { useTransformSchemaToProps } from '../../hooks/useTransformSchemaToProps';
import { extractSchemaFromStep } from '../../lib';
import { Form } from '../Form';
import { PasswordWidget } from '../PasswordWidget/PasswordWidget';
import { ReviewState, type ReviewStateProps } from '../ReviewState';
import {
  createAsyncValidators,
  type FormValidation,
} from './createAsyncValidators';
import { ErrorListTemplate } from './ErrorListTemplate';
import * as FieldOverrides from './FieldOverrides';
import { hasErrors } from './utils';

const validator = customizeValidator();
ajvErrors(validator.ajv);

/** @alpha */
export type BackstageTemplateStepperClassKey =
  | 'backButton'
  | 'footer'
  | 'formWrapper';

const useStyles = makeStyles(
  theme => ({
    backButton: {
      marginRight: theme.spacing(1),
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'right',
      marginTop: theme.spacing(2),
    },
    formWrapper: {
      padding: theme.spacing(2),
    },
  }),
  { name: 'BackstageTemplateStepper' },
);

/**
 * The Props for {@link Stepper} component
 * @alpha
 */
export type StepperProps = {
  manifest: TemplateParameterSchema;
  extensions: FieldExtensionOptions<any, any>[];
  /**
   * @deprecated This was only ever used for analytics tracking purposes, which
   * is now handled in the `<Workflow />` component. Passing it in will have no
   * effect.
   */
  templateName?: string;
  /**
   * When provided, enables nunjucks template expression rendering in the
   * parameter schema. Expressions like `$\{{ parameters.fieldName }}` will
   * be resolved against the current form data via backend calls.
   */
  templateRef?: string;
  formProps?: FormProps;
  initialState?: Record<string, JsonValue>;
  onCreate: (values: Record<string, JsonValue>) => Promise<void>;
  components?: {
    ReviewStepComponent?: ComponentType<ReviewStepProps>;
    ReviewStateComponent?: (props: ReviewStateProps) => JSX.Element;
    backButtonText?: ReactNode;
    createButtonText?: ReactNode;
    reviewButtonText?: ReactNode;
  };
  layouts?: LayoutOptions[];
};

/**
 * The `Stepper` component is the Wizard that is rendered when a user selects a template
 * @alpha
 */
export const Stepper = (stepperProps: StepperProps) => {
  const { t } = useTranslationRef(scaffolderReactTranslationRef);
  const { layouts = [], components = {}, onCreate, ...props } = stepperProps;
  const {
    ReviewStateComponent = ReviewState,
    ReviewStepComponent,
    backButtonText = t('stepper.backButtonText'),
    createButtonText = t('stepper.createButtonText'),
    reviewButtonText = t('stepper.reviewButtonText'),
  } = components;
  const analytics = useAnalytics();
  const { presentation, steps } = useTemplateSchema(props.manifest);
  const apiHolder = useApiHolder();
  const [activeStep, setActiveStep] = useState(0);
  const [isValidating, setIsValidating] = useState(false);
  const [initialState] = useFormDataFromQuery(props.initialState);
  const [stepsState, setStepsState] =
    useState<Record<string, JsonValue>>(initialState);

  const [errors, setErrors] = useState<undefined | FormValidation>();
  const styles = useStyles();

  // Template rendering support
  const { templateRef } = props;
  const scaffolderApi = templateRef
    ? apiHolder.get(scaffolderApiRef)
    : undefined;

  const appliedDefaults = useRef<Record<string, JsonValue>>({});

  const currentRawSchema = steps[activeStep]?.mergedSchema;

  const { renderedSchema, renderedDefaults } = useRenderedStep({
    scaffolderApi,
    templateRef,
    stepIndex: activeStep,
    formData: stepsState,
    rawSchema: currentRawSchema,
  });

  // When rendered defaults arrive, apply them to fields that haven't been
  // manually edited by the user. A field is considered user-modified if its
  // current value is non-empty and differs from the previously applied default.
  useEffect(() => {
    if (Object.keys(renderedDefaults).length === 0) return;

    const prevDefaults = appliedDefaults.current;
    appliedDefaults.current = renderedDefaults;

    setStepsState(current => {
      const updated = { ...current };
      let changed = false;
      for (const [key, value] of Object.entries(renderedDefaults)) {
        const currentVal = current[key];
        const wasSetByUs =
          currentVal === undefined ||
          currentVal === '' ||
          currentVal === prevDefaults[key];

        if (wasSetByUs && currentVal !== value) {
          updated[key] = value;
          changed = true;
        }
      }
      return changed ? updated : current;
    });
  }, [renderedDefaults]);

  // Build the effective step using the rendered schema when available.
  // When a step has template expressions but hasn't been rendered yet,
  // strip the literal ${{ }} defaults so RJSF doesn't populate them
  // as field values.
  const rawStep = steps[activeStep];
  const effectiveRawStep = useMemo(() => {
    if (!rawStep) return rawStep;

    if (renderedSchema) {
      const { uiSchema, schema } = extractSchemaFromStep(renderedSchema);
      const { title: _title, ...stepSchema } = schema;
      return {
        title: rawStep.title,
        description: rawStep.description,
        schema: stepSchema,
        uiSchema,
        mergedSchema: renderedSchema,
      };
    }

    if (
      currentRawSchema &&
      schemaHasTemplateExpressions(currentRawSchema as JsonObject)
    ) {
      const stripped = stripTemplateDefaults(rawStep.schema as JsonObject);
      return { ...rawStep, schema: stripped };
    }

    return rawStep;
  }, [renderedSchema, rawStep, currentRawSchema]);

  const backLabel =
    presentation?.buttonLabels?.backButtonText ?? backButtonText;
  const createLabel =
    presentation?.buttonLabels?.createButtonText ?? createButtonText;
  const reviewLabel =
    presentation?.buttonLabels?.reviewButtonText ?? reviewButtonText;

  const extensions = useMemo(() => {
    return Object.fromEntries(
      props.extensions.map(({ name, component }) => [name, component]),
    );
  }, [props.extensions]);

  const fields = useMemo(
    () => ({ ...FieldOverrides, ...extensions }),
    [extensions],
  );

  const validators = useMemo(() => {
    return Object.fromEntries(
      props.extensions.map(({ name, validation }) => [name, validation]),
    );
  }, [props.extensions]);

  const validation = useMemo(() => {
    return createAsyncValidators(steps[activeStep]?.mergedSchema, validators, {
      apiHolder,
    });
  }, [steps, activeStep, validators, apiHolder]);

  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, [setActiveStep]);

  const currentStep = useTransformSchemaToProps(effectiveRawStep ?? rawStep, {
    layouts,
  });

  const {
    formContext: propFormContext,
    uiSchema: propUiSchema,
    liveOmit: _shouldLiveOmit,
    omitExtraData: _shouldOmitExtraData,
    ...restFormProps
  } = props.formProps ?? {};

  const handleChange = useCallback(
    (e: IChangeEvent) =>
      setStepsState(current => ({ ...current, ...e.formData })),
    [],
  );

  const handleNext = useCallback(
    async ({ formData = {} }: { formData?: Record<string, JsonValue> }) => {
      // The validation should never throw, as the validators are wrapped in a try/catch.
      // This makes it fine to set and unset state without try/catch.
      setErrors(undefined);
      setIsValidating(true);

      const returnedValidation = await validation(formData);

      const mergedFormData = { ...stepsState, ...formData };
      setStepsState(current => ({
        ...current,
        ...formData,
      }));

      setIsValidating(false);

      if (hasErrors(returnedValidation)) {
        setErrors(returnedValidation);
      } else {
        setErrors(undefined);

        // Pre-render the next step's schema so it's ready when the form mounts
        const nextStepIndex = activeStep + 1;
        if (
          scaffolderApi?.renderStep &&
          templateRef &&
          nextStepIndex < steps.length &&
          schemaHasTemplateExpressions(
            steps[nextStepIndex].mergedSchema as JsonObject,
          )
        ) {
          try {
            const result = await scaffolderApi.renderStep({
              templateRef,
              stepIndex: nextStepIndex,
              formData: mergedFormData,
            });

            const schema = result.schema as JsonObject;
            const newDefaults = extractDefaultsFromSchema(schema);
            appliedDefaults.current = newDefaults;

            setStepsState(current => {
              const updated = { ...current };
              for (const [key, value] of Object.entries(newDefaults)) {
                if (updated[key] === undefined) {
                  updated[key] = value;
                }
              }
              return updated;
            });
          } catch {
            // Fall back to raw schema
          }
        }

        setActiveStep(prevActiveStep => {
          const stepNum = prevActiveStep + 1;
          analytics.captureEvent('click', `Next Step (${stepNum})`);
          return stepNum;
        });
      }
    },
    [
      validation,
      analytics,
      stepsState,
      scaffolderApi,
      templateRef,
      activeStep,
      steps,
    ],
  );

  useEffect(() => {
    const main = document.querySelector('main');
    if (main && typeof main.scrollTo === 'function') {
      main.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [activeStep]);

  const mergedUiSchema = merge({}, propUiSchema, currentStep?.uiSchema);

  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = useCallback(async () => {
    setIsCreating(true);
    analytics.captureEvent('click', `${createLabel}`);
    try {
      await onCreate(stepsState);
    } finally {
      setIsCreating(false);
    }
  }, [analytics, createLabel, onCreate, stepsState]);

  return (
    <>
      {isValidating && <LinearProgress variant="indeterminate" />}
      <MuiStepper
        activeStep={activeStep}
        alternativeLabel
        variant="elevation"
        style={{ overflowX: 'auto' }}
      >
        {steps.map((step, index) => {
          const isAllowedLabelClick = activeStep > index;
          return (
            <MuiStep key={index}>
              <MuiStepLabel
                aria-label={t('stepper.stepIndexLabel', { index: index + 1 })}
                style={{ cursor: isAllowedLabelClick ? 'pointer' : 'default' }}
                onClick={() => {
                  if (isAllowedLabelClick) setActiveStep(index);
                }}
              >
                {step.title}
              </MuiStepLabel>
            </MuiStep>
          );
        })}
        <MuiStep>
          <MuiStepLabel>{reviewLabel}</MuiStepLabel>
        </MuiStep>
      </MuiStepper>
      <div className={styles.formWrapper}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {activeStep < steps.length ? (
          <Form
            key={activeStep}
            validator={validator}
            extraErrors={errors as unknown as ErrorSchema}
            formData={stepsState}
            formContext={{ ...propFormContext, formData: stepsState }}
            schema={currentStep.schema}
            uiSchema={mergedUiSchema}
            onSubmit={handleNext}
            fields={fields}
            showErrorList="top"
            templates={{ ErrorListTemplate }}
            onChange={handleChange}
            widgets={{ password: PasswordWidget }}
            experimental_defaultFormStateBehavior={{
              allOf: 'populateDefaults',
            }}
            {...restFormProps}
          >
            <div className={styles.footer}>
              <Button
                onClick={handleBack}
                className={styles.backButton}
                disabled={activeStep < 1 || isValidating}
              >
                {backLabel}
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isValidating}
              >
                {activeStep === steps.length - 1
                  ? reviewLabel
                  : t('stepper.nextButtonText')}
              </Button>
            </div>
          </Form>
        ) : // TODO: potentially move away from this pattern, deprecate?
        ReviewStepComponent ? (
          <ReviewStepComponent
            disableButtons={isValidating}
            formData={stepsState}
            handleBack={handleBack}
            handleReset={() => {}}
            steps={steps}
            handleCreate={handleCreate}
          />
        ) : (
          <>
            <ReviewStateComponent formState={stepsState} schemas={steps} />
            <div className={styles.footer}>
              <Button
                onClick={handleBack}
                className={styles.backButton}
                disabled={activeStep < 1}
              >
                {backLabel}
              </Button>
              <Button
                disabled={isCreating}
                variant="contained"
                color="primary"
                onClick={handleCreate}
              >
                {createLabel}
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
