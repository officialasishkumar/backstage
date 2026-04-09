import{j as r,p as d}from"./iframe-BwbkeUNF.js";import{$ as m}from"./Form-4lH-Wx6O.js";import{$ as o}from"./Input-kcBHRlSv.js";import{$ as s}from"./TextField-D8Qe8sr0.js";import{F as a}from"./FieldError-0CSqbr4h.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusable-DZhrPDt1.js";import"./useObjectRef-DjvHQg_I.js";import"./openLink-BuoNKP2_.js";import"./utils-DTjexDOe.js";import"./useFormReset-BzBZr9VB.js";import"./useControlledState-4Ag57mvo.js";import"./useField-BBTetzMm.js";import"./useLabel-CGK6lBv3.js";import"./useLabels-DTg_imCw.js";import"./Hidden-B4sJPhyi.js";import"./useFocusRing-BsUj4liY.js";import"./FieldError-Cq-J7TrI.js";import"./Text-4-OV3qAK.js";import"./RSPContexts-CF743Gjt.js";import"./Label-CjQoUC4C.js";const l=d.meta({title:"Backstage UI/FieldError",component:a}),e=l.story({render:()=>r.jsx(m,{validationErrors:{demo:"This is a server validation error."},children:r.jsxs(s,{name:"demo",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[r.jsx(o,{}),r.jsx(a,{})]})})}),i=l.story({render:()=>r.jsxs(s,{isInvalid:!0,validationBehavior:"aria",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[r.jsx(o,{}),r.jsx(a,{children:"This is a custom error message."})]})}),t=l.story({render:()=>r.jsxs(s,{isInvalid:!0,validationBehavior:"aria",validate:()=>"This field is invalid",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[r.jsx(o,{}),r.jsx(a,{children:({validationErrors:n})=>n.length>0?n[0]:"Field is invalid"})]})});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Form validationErrors={{
    demo: 'This is a server validation error.'
  }}>
      <TextField name="demo" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
        <Input />
        <FieldError />
      </TextField>
    </Form>
})`,...e.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <TextField isInvalid validationBehavior="aria" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}>
      <Input />
      <FieldError>This is a custom error message.</FieldError>
    </TextField>
})`,...i.input.parameters?.docs?.source}}};t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <TextField isInvalid validationBehavior="aria" validate={() => 'This field is invalid'} style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }}>
      <Input />
      <FieldError>
        {({
        validationErrors
      }) => validationErrors.length > 0 ? validationErrors[0] : 'Field is invalid'}
      </FieldError>
    </TextField>
})`,...t.input.parameters?.docs?.source}}};const C=["WithServerValidation","WithCustomMessage","WithRenderProp"];export{i as WithCustomMessage,t as WithRenderProp,e as WithServerValidation,C as __namedExportsOrder};
