import{j as e,M as m,p as d}from"./iframe-BHNZ12cl.js";import{C as r}from"./Checkbox-CvQeli9Z.js";import{F as p}from"./Flex-BhfaRmZD.js";import{L as u}from"./Link-Bej_gOiu.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-Dhd_LbTI.js";import"./utils-CQPyOtgw.js";import"./useObjectRef-Bnt8V-N5.js";import"./FieldError-PbqDaM5E.js";import"./Text-Q-eDP-yv.js";import"./useFocusable-CLpkwE70.js";import"./openLink-CKP5LQZU.js";import"./Form-DQdrpDrQ.js";import"./Label-BAgs-2mE.js";import"./Hidden-B7B9CjMT.js";import"./useControlledState-9G3DDK4r.js";import"./useField-RjLgMAou.js";import"./useLabel-C0iH1L-U.js";import"./useLabels-CWe-CY8Y.js";import"./useFocusRing-6nnOL3tn.js";import"./usePress-COIwaYSq.js";import"./textSelection-B7CuWglK.js";import"./useToggle-DKgz2g2R.js";import"./useFormReset-DrXXCTUU.js";import"./useToggleState-Coi-uODQ.js";import"./VisuallyHidden-CmgkboNX.js";import"./index-zV__z7rj.js";import"./getNodeText-DpFW9A5I.js";import"./useLink-U1dCOq42.js";const a=d.meta({title:"Backstage UI/Checkbox",component:r}),t=a.story({args:{children:"Accept terms and conditions"}}),i=t.extend({args:{isSelected:!0}}),o=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=t.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(u,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),n=a.story({...t.input,render:()=>e.jsxs(p,{direction:"column",gap:"2",children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{isSelected:!0,children:"Checked"}),e.jsx(r,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(r,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
