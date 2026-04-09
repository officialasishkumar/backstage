import{j as e,M as m,p as d}from"./iframe-DeVvrktA.js";import{C as r}from"./Checkbox-9vvgS73Y.js";import{F as p}from"./Flex-CsnXrM2c.js";import{L as u}from"./Link-D8fubg7A.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-Dw3zgcwS.js";import"./utils-CE-z1EYB.js";import"./useObjectRef-BDCAKH9y.js";import"./FieldError-Cs5pALKh.js";import"./Text-C4ruOvUx.js";import"./useFocusable-CyP8oQTO.js";import"./openLink-DB0X2oCJ.js";import"./Form-Dbe-g-23.js";import"./Label-BsAmUuAr.js";import"./Hidden-CwlAxlLh.js";import"./useControlledState-CGhBmLiy.js";import"./useField-DP0xoDEN.js";import"./useLabel-lCZDMOjA.js";import"./useLabels-DroepvJv.js";import"./useFocusRing-BujH4uZU.js";import"./usePress-tFvrQuTt.js";import"./textSelection-D8Lmd9aD.js";import"./useToggle-9hMklvLg.js";import"./useFormReset-DlY4Y4So.js";import"./useToggleState-c8fQyeHa.js";import"./VisuallyHidden-BGlwNuIC.js";import"./index-Va6-8CM6.js";import"./getNodeText-D3O5DtlC.js";import"./useLink-BYSA2tFJ.js";const a=d.meta({title:"Backstage UI/Checkbox",component:r}),t=a.story({args:{children:"Accept terms and conditions"}}),i=t.extend({args:{isSelected:!0}}),o=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=t.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(u,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),n=a.story({...t.input,render:()=>e.jsxs(p,{direction:"column",gap:"2",children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{isSelected:!0,children:"Checked"}),e.jsx(r,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(r,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Accept terms and conditions'
  }
})`,...t.input.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Default.extend({
  args: {
    isSelected: true
  }
})`,...i.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Select all',
    isIndeterminate: true
  }
})`,...o.input.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Default.extend({
  args: {
    children: <>
        I agree to receive future communication from Spotify. You may
        unsubscribe from these communications at any time. Please review our{' '}
        <Link href="#">Privacy Policy</Link>
      </>
  },
  decorators: [Story => <MemoryRouter>
        <Story />
      </MemoryRouter>]
})`,...s.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  ...Default.input,
  render: () => <Flex direction="column" gap="2">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox isSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isSelected isDisabled>
        Checked & Disabled
      </Checkbox>
      <Checkbox isIndeterminate isDisabled>
        Indeterminate & Disabled
      </Checkbox>
    </Flex>
})`,...n.input.parameters?.docs?.source}}};const O=["Default","Selected","Indeterminate","WithLongText","AllVariants"];export{n as AllVariants,t as Default,o as Indeterminate,i as Selected,s as WithLongText,O as __namedExportsOrder};
