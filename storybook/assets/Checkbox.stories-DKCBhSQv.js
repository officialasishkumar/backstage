import{p as d,j as e}from"./iframe-CTqAPkqN.js";import{C as i}from"./Checkbox-Bm7P-LYT.js";import{M as m}from"./index-Bo89h57h.js";import{L as p}from"./Link-DUkAxgBP.js";import{F as u}from"./Flex-CPW6nXIz.js";import"./preload-helper-PPVm8Dsz.js";import"./RSPContexts-BROgVqHM.js";import"./utils-aRNJDvij.js";import"./useObjectRef-25klDtSD.js";import"./Form-ClANZCmo.js";import"./useFocusable-CFAlk-C5.js";import"./openLink-DuhEaLpg.js";import"./usePress-BYbvhl8q.js";import"./useToggle-BfeaCbWO.js";import"./useFormReset-DfFseZu5.js";import"./useToggleState-BanAb8UQ.js";import"./useControlledState-BtXIB91k.js";import"./useFocusRing-C1OsrxfZ.js";import"./VisuallyHidden-BCPVlqUP.js";import"./index-Ci12OFid.js";import"./getNodeText-BcHHrtrd.js";import"./useLink-C8utyvEQ.js";const a=d.meta({title:"Backstage UI/Checkbox",component:i}),r=a.story({args:{children:"Accept terms and conditions"}}),t=r.extend({args:{isSelected:!0}}),n=a.story({args:{children:"Select all",isIndeterminate:!0}}),s=r.extend({args:{children:e.jsxs(e.Fragment,{children:["I agree to receive future communication from Spotify. You may unsubscribe from these communications at any time. Please review our"," ",e.jsx(p,{href:"#",children:"Privacy Policy"})]})},decorators:[c=>e.jsx(m,{children:e.jsx(c,{})})]}),o=a.story({...r.input,render:()=>e.jsxs(u,{direction:"column",gap:"2",children:[e.jsx(i,{children:"Unchecked"}),e.jsx(i,{isSelected:!0,children:"Checked"}),e.jsx(i,{isIndeterminate:!0,children:"Indeterminate"}),e.jsx(i,{isDisabled:!0,children:"Disabled"}),e.jsx(i,{isSelected:!0,isDisabled:!0,children:"Checked & Disabled"}),e.jsx(i,{isIndeterminate:!0,isDisabled:!0,children:"Indeterminate & Disabled"})]})});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Checkbox>Accept terms and conditions</Checkbox>;
`,...r.input.parameters?.docs?.source}}};t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{code:`const Selected = () => <Checkbox isSelected />;
`,...t.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const Indeterminate = () => <Checkbox isIndeterminate>Select all</Checkbox>;
`,...n.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithLongText = () => (
  <Checkbox>
    (
    <>
      I agree to receive future communication from Spotify. You may unsubscribe
      from these communications at any time. Please review our{" "}
      <Link href="#">Privacy Policy</Link>
    </>
    )
  </Checkbox>
);
`,...s.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const AllVariants = () => (
  <Flex direction="column" gap="2">
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
);
`,...o.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Accept terms and conditions'
  }
})`,...r.input.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Default.extend({
  args: {
    isSelected: true
  }
})`,...t.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Select all',
    isIndeterminate: true
  }
})`,...n.input.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Default.extend({
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
})`,...s.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...o.input.parameters?.docs?.source}}};const T=["Default","Selected","Indeterminate","WithLongText","AllVariants"];export{o as AllVariants,r as Default,n as Indeterminate,t as Selected,s as WithLongText,T as __namedExportsOrder};
