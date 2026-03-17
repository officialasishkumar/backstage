import{p as s}from"./iframe-2DflYetR.js";import{S as a}from"./Switch-BZ8MI28G.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BYb0yjAr.js";import"./useObjectRef-Cs0Gc8Mi.js";import"./useFocusable-Dsi0twvX.js";import"./openLink-C7ML4eFc.js";import"./useToggleState-DpEufHqz.js";import"./useControlledState-CBRH9xWr.js";import"./useToggle-Cqk5rSur.js";import"./useFormReset-CbNVnjCt.js";import"./usePress-CcNCLpPj.js";import"./useFocusRing-Bl6bIQWd.js";import"./VisuallyHidden-BXN0soex.js";const e=s.meta({title:"Backstage UI/Switch",component:a}),t=e.story({args:{label:"Switch"}}),r=e.story({args:{...t.input.args,isDisabled:!0}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{code:`const Default = () => <Switch label="Switch" />;
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
})`,...r.input.parameters?.docs?.source}}};const h=["Default","Disabled"];export{t as Default,r as Disabled,h as __namedExportsOrder};
