import{j as e,M as m,p as d}from"./iframe-Cfvhm_I_.js";import{C as r}from"./Checkbox-DyqsEYiN.js";import{F as p}from"./Flex-Du-Nh_Ap.js";import{L as u}from"./Link-US0mgfvA.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-TxMGKc65.js";import"./utils-NKCPgaqN.js";import"./useObjectRef-vvR-D69_.js";import"./FieldError-Be30N9Ah.js";import"./Text-Du8qum6_.js";import"./useFocusable-FhjipBEG.js";import"./openLink-Bg6urkNK.js";import"./Form-BhZyqZKD.js";import"./Label-KioRYZe4.js";import"./Hidden-CJJ6f5wI.js";import"./useControlledState-B6ajkJKe.js";import"./useField-hSueKPpB.js";import"./useLabel-DsarJHVH.js";import"./useLabels-C81rtTWW.js";import"./useFocusRing-aQX9M6VZ.js";import"./usePress-vSFxZuki.js";import"./textSelection-B1IJ7lT8.js";import"./useToggle-C1hNg0k7.js";import"./useFormReset-DldKZg8u.js";import"./useToggleState-DAfSfjAS.js";import"./VisuallyHidden-CNfcrBpM.js";import"./index-DmQuIqXH.js";import"./getNodeText-hpdc6kBI.js";import"./useLink-BqWb2wOQ.js";const a=d.meta({title:"Backstage UI/Checkbox",component:r}),t=a.story({args:{children:"Accept terms and conditions"}}),i=t.extend({args:{isSelected:!0}}),o=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=t.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(u,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),n=a.story({...t.input,render:()=>e.jsxs(p,{direction:"column",gap:"2",children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{isSelected:!0,children:"Checked"}),e.jsx(r,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(r,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
