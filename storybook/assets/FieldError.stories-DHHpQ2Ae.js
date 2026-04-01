import{j as r,p as d}from"./iframe-hODDjxEI.js";import{$ as m}from"./Form-BDhWZ5KK.js";import{$ as o}from"./Input-4Jwjzq6V.js";import{$ as s}from"./TextField-CLi9ihnF.js";import{F as a}from"./FieldError-Lv9pU4Z0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusable-CZ6Grrdp.js";import"./useObjectRef-D0troa0o.js";import"./openLink-DQgtmsfk.js";import"./utils-D5-4lykL.js";import"./useFormReset-RZxEMM3Y.js";import"./useControlledState-BSdZOyDa.js";import"./useField-DPrjxZzX.js";import"./useLabel-B46Bw-tG.js";import"./useLabels-BV4gsZS7.js";import"./Hidden-8N8ie_vh.js";import"./useFocusRing-Dhs0bEJR.js";import"./FieldError-MZT2nGbC.js";import"./Text-C8Ktyk4e.js";import"./RSPContexts-DvWGiX1t.js";import"./Label-D0Co6EEj.js";const l=d.meta({title:"Backstage UI/FieldError",component:a}),e=l.story({render:()=>r.jsx(m,{validationErrors:{demo:"This is a server validation error."},children:r.jsxs(s,{name:"demo",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[r.jsx(o,{}),r.jsx(a,{})]})})}),i=l.story({render:()=>r.jsxs(s,{isInvalid:!0,validationBehavior:"aria",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[r.jsx(o,{}),r.jsx(a,{children:"This is a custom error message."})]})}),t=l.story({render:()=>r.jsxs(s,{isInvalid:!0,validationBehavior:"aria",validate:()=>"This field is invalid",style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[r.jsx(o,{}),r.jsx(a,{children:({validationErrors:n})=>n.length>0?n[0]:"Field is invalid"})]})});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
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
