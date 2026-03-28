import{r as j,R as $,ay as F,aw as C,j as t,p as T,M as D}from"./iframe-DIo-SVbu.js";import{$ as E,a as P,b as _}from"./utils-CYS9htll.js";import{b as z}from"./useObjectRef-CYY0dott.js";import{a as A}from"./useFocusable-Ci82QAhh.js";import{$ as N}from"./useLink-DJJweDtw.js";import{a as q,b as I}from"./useFocusRing-C43gnGmm.js";import{g as M}from"./getNodeText-BAY3DS08.js";import{T as a,r as b}from"./index-qzSKwXXE.js";import{B as W}from"./BUIProvider-CiWIfurT.js";import{F as k}from"./Flex-DIORzv8p.js";import"./preload-helper-PPVm8Dsz.js";import"./openLink-Cz27Urod.js";import"./usePress-jYtc8NtY.js";import"./textSelection-CDHWmXKz.js";const V=j.createContext(null),O=j.forwardRef(function(e,B){[e,B]=E(e,B,V);let i=e.href&&!e.isDisabled?"a":"span",{linkProps:S,isPressed:L}=N({...e,elementType:i},B),x=P[i],{hoverProps:R,isHovered:y}=q(e),{focusProps:g,isFocused:h,isFocusVisible:f}=I(),v=_({...e,defaultClassName:"react-aria-Link",values:{isCurrent:!!e["aria-current"],isDisabled:e.isDisabled||!1,isPressed:L,isHovered:y,isFocused:h,isFocusVisible:f}}),w=A(e,{global:!0});return delete w.onClick,$.createElement(x,{ref:B,slot:e.slot||void 0,...z(w,v,S,R,g),"data-focused":h||void 0,"data-hovered":y||void 0,"data-pressed":L||void 0,"data-focus-visible":f||void 0,"data-current":!!e["aria-current"]||void 0,"data-disabled":e.isDisabled||void 0},v.children)}),H={"bui-ButtonLink":"_bui-ButtonLink_ek4wo_20","bui-ButtonLinkContent":"_bui-ButtonLinkContent_ek4wo_168"},U=F()({styles:H,classNames:{root:"bui-ButtonLink",content:"bui-ButtonLinkContent"},bg:"consumer",analytics:!0,resolveHref:!0,propDefs:{noTrack:{},size:{dataAttribute:!0,default:"small"},variant:{dataAttribute:!0,default:"primary"},iconStart:{},iconEnd:{},children:{},className:{}}}),n=j.forwardRef((r,e)=>{const{ownProps:B,restProps:i,dataAttributes:S,analytics:L}=C(U,r),{classes:x,iconStart:R,iconEnd:y,children:g}=B,h=f=>{i.onPress?.(f);const v=i["aria-label"]??M(g)??String(i.href??"");L.captureEvent("click",v,{attributes:{to:String(i.href??"")}})};return t.jsx(O,{className:x.root,ref:e,...S,...i,onPress:h,children:t.jsxs("span",{className:x.content,children:[R,g,y]})})});n.displayName="ButtonLink";n.__docgenInfo={description:"@public",methods:[],displayName:"ButtonLink",props:{noTrack:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"T | Partial<Record<Breakpoint, T>>",elements:[{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Record<Breakpoint, T>"}],raw:"Partial<Record<Breakpoint, T>>"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"T | Partial<Record<Breakpoint, T>>",elements:[{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]}],raw:"Record<Breakpoint, T>"}],raw:"Partial<Record<Breakpoint, T>>"}]},description:""},iconStart:{required:!1,tsType:{name:"ReactElement"},description:""},iconEnd:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const p=T.meta({title:"Backstage UI/ButtonLink",component:n,decorators:[r=>t.jsx(D,{children:t.jsx(W,{children:t.jsx(r,{})})})],argTypes:{size:{control:"select",options:["small","medium"]},variant:{control:"select",options:["primary","secondary"]}}}),o=p.story({args:{children:"Button"}}),s=p.story({render:()=>t.jsxs(k,{align:"center",children:[t.jsx(n,{iconStart:t.jsx(a,{}),variant:"primary",href:"https://ui.backstage.io",target:"_blank",children:"Button"}),t.jsx(n,{iconStart:t.jsx(a,{}),variant:"secondary",href:"https://ui.backstage.io",target:"_blank",children:"Button"}),t.jsx(n,{iconStart:t.jsx(a,{}),variant:"tertiary",href:"https://ui.backstage.io",target:"_blank",children:"Button"})]})}),l=p.story({args:{children:"Button"},render:()=>t.jsxs(k,{align:"center",children:[t.jsx(n,{size:"small",iconStart:t.jsx(a,{}),children:"Small"}),t.jsx(n,{size:"medium",iconStart:t.jsx(a,{}),children:"Medium"})]})}),u=p.story({args:{children:"Button"},render:r=>t.jsxs(k,{align:"center",children:[t.jsx(n,{...r,iconStart:t.jsx(a,{})}),t.jsx(n,{...r,iconEnd:t.jsx(b,{})}),t.jsx(n,{...r,iconStart:t.jsx(a,{}),iconEnd:t.jsx(b,{})})]})}),c=p.story({args:{children:"Button"},render:r=>t.jsxs(k,{direction:"column",gap:"4",style:{width:"300px"},children:[t.jsx(n,{...r,iconStart:t.jsx(a,{})}),t.jsx(n,{...r,iconEnd:t.jsx(b,{})}),t.jsx(n,{...r,iconStart:t.jsx(a,{}),iconEnd:t.jsx(b,{})})]})}),d=p.story({render:()=>t.jsxs(k,{direction:"row",gap:"4",children:[t.jsx(n,{variant:"primary",isDisabled:!0,children:"Primary"}),t.jsx(n,{variant:"secondary",isDisabled:!0,children:"Secondary"}),t.jsx(n,{variant:"tertiary",isDisabled:!0,children:"Tertiary"})]})}),m=p.story({args:{children:"Button",variant:{initial:"primary",sm:"secondary"},size:{xs:"small",sm:"medium"}}});o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Default = () => <ButtonLink>Button</ButtonLink>;
`,...o.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Variants = () => (
  <Flex align="center">
    <ButtonLink
      iconStart={<RiCloudLine />}
      variant="primary"
      href="https://ui.backstage.io"
      target="_blank"
    >
      Button
    </ButtonLink>
    <ButtonLink
      iconStart={<RiCloudLine />}
      variant="secondary"
      href="https://ui.backstage.io"
      target="_blank"
    >
      Button
    </ButtonLink>
    <ButtonLink
      iconStart={<RiCloudLine />}
      variant="tertiary"
      href="https://ui.backstage.io"
      target="_blank"
    >
      Button
    </ButtonLink>
  </Flex>
);
`,...s.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const Sizes = () => (
  <Flex align="center">
    <ButtonLink size="small" iconStart={<RiCloudLine />}>
      Small
    </ButtonLink>
    <ButtonLink size="medium" iconStart={<RiCloudLine />}>
      Medium
    </ButtonLink>
  </Flex>
);
`,...l.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const WithIcons = () => (
  <Flex align="center">
    <ButtonLink iconStart={<RiCloudLine />}>Button</ButtonLink>
    <ButtonLink iconEnd={<RiArrowRightSLine />}>Button</ButtonLink>
    <ButtonLink iconStart={<RiCloudLine />} iconEnd={<RiArrowRightSLine />}>
      Button
    </ButtonLink>
  </Flex>
);
`,...u.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const FullWidth = () => (
  <Flex direction="column" gap="4" style={{ width: "300px" }}>
    <ButtonLink iconStart={<RiCloudLine />}>Button</ButtonLink>
    <ButtonLink iconEnd={<RiArrowRightSLine />}>Button</ButtonLink>
    <ButtonLink iconStart={<RiCloudLine />} iconEnd={<RiArrowRightSLine />}>
      Button
    </ButtonLink>
  </Flex>
);
`,...c.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const Disabled = () => (
  <Flex direction="row" gap="4">
    <ButtonLink variant="primary" isDisabled>
      Primary
    </ButtonLink>
    <ButtonLink variant="secondary" isDisabled>
      Secondary
    </ButtonLink>
    <ButtonLink variant="tertiary" isDisabled>
      Tertiary
    </ButtonLink>
  </Flex>
);
`,...d.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const Responsive = () => (
  <ButtonLink
    variant={{
      initial: "primary",
      sm: "secondary",
    }}
    size={{
      xs: "small",
      sm: "medium",
    }}
  >
    Button
  </ButtonLink>
);
`,...m.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Button'
  }
})`,...o.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Flex align="center">
      <ButtonLink iconStart={<RiCloudLine />} variant="primary" href="https://ui.backstage.io" target="_blank">
        Button
      </ButtonLink>
      <ButtonLink iconStart={<RiCloudLine />} variant="secondary" href="https://ui.backstage.io" target="_blank">
        Button
      </ButtonLink>
      <ButtonLink iconStart={<RiCloudLine />} variant="tertiary" href="https://ui.backstage.io" target="_blank">
        Button
      </ButtonLink>
    </Flex>
})`,...s.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Button'
  },
  render: () => <Flex align="center">
      <ButtonLink size="small" iconStart={<RiCloudLine />}>
        Small
      </ButtonLink>
      <ButtonLink size="medium" iconStart={<RiCloudLine />}>
        Medium
      </ButtonLink>
    </Flex>
})`,...l.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Button'
  },
  render: args => <Flex align="center">
      <ButtonLink {...args} iconStart={<RiCloudLine />} />
      <ButtonLink {...args} iconEnd={<RiArrowRightSLine />} />
      <ButtonLink {...args} iconStart={<RiCloudLine />} iconEnd={<RiArrowRightSLine />} />
    </Flex>
})`,...u.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Button'
  },
  render: args => <Flex direction="column" gap="4" style={{
    width: '300px'
  }}>
      <ButtonLink {...args} iconStart={<RiCloudLine />} />
      <ButtonLink {...args} iconEnd={<RiArrowRightSLine />} />
      <ButtonLink {...args} iconStart={<RiCloudLine />} iconEnd={<RiArrowRightSLine />} />
    </Flex>
})`,...c.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Flex direction="row" gap="4">
      <ButtonLink variant="primary" isDisabled>
        Primary
      </ButtonLink>
      <ButtonLink variant="secondary" isDisabled>
        Secondary
      </ButtonLink>
      <ButtonLink variant="tertiary" isDisabled>
        Tertiary
      </ButtonLink>
    </Flex>
})`,...d.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: 'Button',
    variant: {
      initial: 'primary',
      sm: 'secondary'
    },
    size: {
      xs: 'small',
      sm: 'medium'
    }
  }
})`,...m.input.parameters?.docs?.source}}};const st=["Default","Variants","Sizes","WithIcons","FullWidth","Disabled","Responsive"];export{o as Default,d as Disabled,c as FullWidth,m as Responsive,l as Sizes,s as Variants,u as WithIcons,st as __namedExportsOrder};
