import{j as e,M as m,p as d}from"./iframe-BwbkeUNF.js";import{C as r}from"./Checkbox-6Nim9_d7.js";import{F as p}from"./Flex-DRSz43_q.js";import{L as u}from"./Link-BIyh8llM.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-CF743Gjt.js";import"./utils-DTjexDOe.js";import"./useObjectRef-DjvHQg_I.js";import"./FieldError-Cq-J7TrI.js";import"./Text-4-OV3qAK.js";import"./useFocusable-DZhrPDt1.js";import"./openLink-BuoNKP2_.js";import"./Form-4lH-Wx6O.js";import"./Label-CjQoUC4C.js";import"./Hidden-B4sJPhyi.js";import"./useControlledState-4Ag57mvo.js";import"./useField-BBTetzMm.js";import"./useLabel-CGK6lBv3.js";import"./useLabels-DTg_imCw.js";import"./useFocusRing-BsUj4liY.js";import"./usePress-DrAuu34K.js";import"./textSelection-rD9BcpSo.js";import"./useToggle-DGGMMqdv.js";import"./useFormReset-BzBZr9VB.js";import"./useToggleState-B31-0AXq.js";import"./VisuallyHidden-CUr80uz3.js";import"./index-D_vIB89H.js";import"./getNodeText-MlTHN761.js";import"./useLink-91_x4yQi.js";const a=d.meta({title:"Backstage UI/Checkbox",component:r}),t=a.story({args:{children:"Accept terms and conditions"}}),i=t.extend({args:{isSelected:!0}}),o=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=t.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(u,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),n=a.story({...t.input,render:()=>e.jsxs(p,{direction:"column",gap:"2",children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{isSelected:!0,children:"Checked"}),e.jsx(r,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(r,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
