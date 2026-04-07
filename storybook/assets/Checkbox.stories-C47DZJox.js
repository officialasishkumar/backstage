import{j as e,M as m,p as d}from"./iframe-B7X4koWg.js";import{C as r}from"./Checkbox-Oa2Ontxg.js";import{F as p}from"./Flex-1NdTe7d2.js";import{L as u}from"./Link-ONVBQFV-.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-hTJeh7hB.js";import"./utils-DM4Cs4E4.js";import"./useObjectRef-Dytr15rV.js";import"./FieldError-CTIDDRqu.js";import"./Text-D6QIkrof.js";import"./useFocusable-DXe0eVGf.js";import"./openLink-DCeIGU84.js";import"./Form-Crap_ne8.js";import"./Label-DspYoU3I.js";import"./Hidden-C_FsWAz8.js";import"./useControlledState-CKxeOrzH.js";import"./useField-12MMfK-f.js";import"./useLabel-1bTO7hRM.js";import"./useLabels-usTeaknU.js";import"./useFocusRing-8S_5BKL2.js";import"./usePress-D1tLsiAY.js";import"./textSelection-DNm_N23y.js";import"./useToggle-acxv4cnq.js";import"./useFormReset-BpD_JXlP.js";import"./useToggleState-D3858fb5.js";import"./VisuallyHidden-CgwyMnte.js";import"./index-DsailFha.js";import"./getNodeText-BbYnfd8b.js";import"./useLink-a9rZ1Qf0.js";const a=d.meta({title:"Backstage UI/Checkbox",component:r}),t=a.story({args:{children:"Accept terms and conditions"}}),i=t.extend({args:{isSelected:!0}}),o=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=t.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(u,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),n=a.story({...t.input,render:()=>e.jsxs(p,{direction:"column",gap:"2",children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{isSelected:!0,children:"Checked"}),e.jsx(r,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(r,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
