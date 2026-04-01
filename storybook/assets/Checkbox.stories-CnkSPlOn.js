import{j as e,M as m,p as d}from"./iframe-hODDjxEI.js";import{C as r}from"./Checkbox-CcPFqIAB.js";import{F as p}from"./Flex-BmjrVIlX.js";import{L as u}from"./Link-BVnD8l8J.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-DvWGiX1t.js";import"./utils-D5-4lykL.js";import"./useObjectRef-D0troa0o.js";import"./Form-BDhWZ5KK.js";import"./useFocusable-CZ6Grrdp.js";import"./openLink-DQgtmsfk.js";import"./usePress-DvE4E3s2.js";import"./textSelection-DAbFJioh.js";import"./useToggle-CtQ4pmEI.js";import"./useFormReset-RZxEMM3Y.js";import"./useToggleState-CRmvkFwm.js";import"./useControlledState-BSdZOyDa.js";import"./useFocusRing-Dhs0bEJR.js";import"./VisuallyHidden-CNPeICIa.js";import"./index-6zLbxaIr.js";import"./getNodeText-D4fXIuox.js";import"./useLink-CMAs8bDl.js";const a=d.meta({title:"Backstage UI/Checkbox",component:r}),t=a.story({args:{children:"Accept terms and conditions"}}),i=t.extend({args:{isSelected:!0}}),o=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=t.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(u,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),n=a.story({...t.input,render:()=>e.jsxs(p,{direction:"column",gap:"2",children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{isSelected:!0,children:"Checked"}),e.jsx(r,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(r,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...n.input.parameters?.docs?.source}}};const E=["Default","Selected","Indeterminate","WithLongText","AllVariants"];export{n as AllVariants,t as Default,o as Indeterminate,i as Selected,s as WithLongText,E as __namedExportsOrder};
