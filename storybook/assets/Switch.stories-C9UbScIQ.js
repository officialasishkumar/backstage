import{p as s}from"./iframe-_E948MVz.js";import{S as a}from"./Switch-pijZPAWS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BYaOdt30.js";import"./useObjectRef-CoZJDDT_.js";import"./useFocusable-B5TJG2QX.js";import"./useToggleState-D1AAi_dF.js";import"./useControlledState-DzOOwpbN.js";import"./useToggle-CLA-cvCv.js";import"./useFormReset-BdMxU05j.js";import"./usePress-D80V3VLG.js";import"./useFocusRing-DI-Dz2cv.js";import"./VisuallyHidden-DUYYBlLg.js";const e=s.meta({title:"Backstage UI/Switch",component:a}),t=e.story({args:{label:"Switch"}}),r=e.story({args:{...t.input.args,isDisabled:!0}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{code:`const Default = () => <Switch label="Switch" />;
`,...t.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Disabled = () => <Switch isDisabled />;
`,...r.input.parameters?.docs?.source}}};t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Switch'
  }
})`,...t.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    isDisabled: true
  }
})`,...r.input.parameters?.docs?.source}}};const w=["Default","Disabled"];export{t as Default,r as Disabled,w as __namedExportsOrder};
