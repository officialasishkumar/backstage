import{p as h,j as e}from"./iframe-BfKy45FJ.js";import{S as t}from"./Skeleton-CQQG83jb.js";import{F as s}from"./Flex-D-5MCpdY.js";import"./preload-helper-PPVm8Dsz.js";const a=h.meta({title:"Backstage UI/Skeleton",component:t,argTypes:{rounded:{control:"boolean"},width:{control:"number"},height:{control:"number"}},args:{width:80,height:24,rounded:!1}}),n=a.story({args:{}}),r=a.story({args:{rounded:!0,width:48,height:48}}),o=a.story({render:()=>e.jsxs(s,{gap:"4",children:[e.jsx(t,{rounded:!0,width:48,height:48}),e.jsxs(s,{direction:"column",gap:"4",children:[e.jsx(t,{width:200,height:8}),e.jsx(t,{width:200,height:8}),e.jsx(t,{width:200,height:8}),e.jsxs(s,{gap:"4",children:[e.jsx(t,{width:"100%",height:8}),e.jsx(t,{width:"100%",height:8})]})]})]})}),i=a.story({render:()=>e.jsxs(s,{direction:"column",gap:"4",children:[e.jsx(t,{width:400,height:160}),e.jsx(t,{width:400,height:12}),e.jsx(t,{width:240,height:12})]})});n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const Default = () => <Skeleton width={80} height={24} rounded={false} />;
`,...n.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Rounded = () => <Skeleton width={48} height={48} rounded />;
`,...r.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Demo1 = () => (
  <Flex gap="4">
    <Skeleton rounded width={48} height={48} />
    <Flex direction="column" gap="4">
      <Skeleton width={200} height={8} />
      <Skeleton width={200} height={8} />
      <Skeleton width={200} height={8} />
      <Flex gap="4">
        <Skeleton width="100%" height={8} />
        <Skeleton width="100%" height={8} />
      </Flex>
    </Flex>
  </Flex>
);
`,...o.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const Demo2 = () => (
  <Flex direction="column" gap="4">
    <Skeleton width={400} height={160} />
    <Skeleton width={400} height={12} />
    <Skeleton width={240} height={12} />
  </Flex>
);
`,...i.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {}
})`,...n.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    rounded: true,
    width: 48,
    height: 48
  }
})`,...r.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Flex gap="4">
      <Skeleton rounded width={48} height={48} />
      <Flex direction="column" gap="4">
        <Skeleton width={200} height={8} />
        <Skeleton width={200} height={8} />
        <Skeleton width={200} height={8} />
        <Flex gap="4">
          <Skeleton width="100%" height={8} />
          <Skeleton width="100%" height={8} />
        </Flex>
      </Flex>
    </Flex>
})`,...o.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Flex direction="column" gap="4">
      <Skeleton width={400} height={160} />
      <Skeleton width={400} height={12} />
      <Skeleton width={240} height={12} />
    </Flex>
})`,...i.input.parameters?.docs?.source}}};const l=["Default","Rounded","Demo1","Demo2"];export{n as Default,o as Demo1,i as Demo2,r as Rounded,l as __namedExportsOrder};
