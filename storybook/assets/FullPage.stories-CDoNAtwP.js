import{ar as b,r as P,ao as x,j as e,p as f}from"./iframe-UJriCXVl.js";import{P as l}from"./PluginHeader-B7jCvmE9.js";import{C as p}from"./Container-gMZ0x7Zu.js";import{M as y}from"./index-BSYbiaN1.js";import{B as T}from"./BUIProvider-FlwkTN0D.js";import{T as n}from"./Text-SchhofR5.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DpgVWihW.js";import"./utils-BUMBRD7o.js";import"./useObjectRef-DlMtdBHA.js";import"./useFocusable-DaeNhAL-.js";import"./openLink-DRXvt-RN.js";import"./useLink-BuyX79_b.js";import"./usePress-CUekrJf0.js";import"./useFocusRing-DbTrKgXU.js";import"./index-9TBG8tdt.js";import"./Tabs-BphpB8id.js";import"./SelectionManager-BbD2hGTC.js";import"./useEvent-CbD9Tw0o.js";import"./SelectionIndicator-PgxLjLJ1.js";import"./context-Dw6ZsT1q.js";import"./Hidden-DKr0To6O.js";import"./useControlledState-CgKPzuxz.js";import"./useListState-BgQAC_2k.js";import"./animation-CnQA9XgO.js";import"./useLabels-DRDLmhIq.js";import"./useHasTabbableChild-0dG2VhL2.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-B6b25qdv.js";const w={"bui-FullPage":"_bui-FullPage_1vdnu_20"},C=b()({styles:w,classNames:{root:"bui-FullPage"},propDefs:{className:{}}}),s=P.forwardRef((i,o)=>{const{ownProps:h,restProps:m}=x(C,i),{classes:g}=h;return e.jsx("main",{ref:o,className:g.root,...m})});s.__docgenInfo={description:`A component that fills the remaining viewport height below the Header.

The FullPage component consumes the \`--bui-header-height\` CSS custom property
set by the Header component to calculate its height as
\`calc(100dvh - var(--bui-header-height, 0px))\`. Content inside the FullPage
scrolls independently while the Header stays visible.

@public`,methods:[],displayName:"FullPage",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const c=f.meta({title:"Backstage UI/FullPage",component:s,parameters:{layout:"fullscreen"}}),u=i=>e.jsx(y,{children:e.jsx(T,{children:e.jsx(i,{})})}),F=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"}],d=Array.from({length:20},(i,o)=>e.jsx(n,{as:"p",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},o)),t=c.story({decorators:[u],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"My Plugin"}),e.jsx(s,{style:{backgroundColor:"#c3f0ff"},children:e.jsx(p,{children:e.jsx(n,{as:"p",children:"This content fills the remaining viewport height below the Header."})})})]})}),r=c.story({decorators:[u],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"My Plugin"}),e.jsx(s,{children:e.jsxs(p,{children:[e.jsx(n,{as:"h2",variant:"title-medium",children:"Scrollable Content"}),e.jsx(n,{as:"p",children:"The content below scrolls independently while the Header stays pinned at the top."}),d]})})]})}),a=c.story({decorators:[u],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"My Plugin",tabs:F}),e.jsx(s,{children:e.jsxs(p,{children:[e.jsx(n,{as:"p",children:"The FullPage height adjusts automatically when the Header includes tabs, thanks to the ResizeObserver measuring the Header's actual height."}),d]})})]})});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{code:`const Default = () => (
  <>
    <PluginHeader title="My Plugin" />
    <FullPage style={{ backgroundColor: "#c3f0ff" }}>
      <Container>
        <Text as="p">
          This content fills the remaining viewport height below the Header.
        </Text>
      </Container>
    </FullPage>
  </>
);
`,...t.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const WithScrollableContent = () => (
  <>
    <PluginHeader title="My Plugin" />
    <FullPage>
      <Container>
        <Text as="h2" variant="title-medium">
          Scrollable Content
        </Text>
        <Text as="p">
          The content below scrolls independently while the Header stays pinned
          at the top.
        </Text>
        {paragraphs}
      </Container>
    </FullPage>
  </>
);
`,...r.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{code:`const WithTabs = () => (
  <>
    <PluginHeader title="My Plugin" tabs={tabs} />
    <FullPage>
      <Container>
        <Text as="p">
          The FullPage height adjusts automatically when the Header includes
          tabs, thanks to the ResizeObserver measuring the Header's actual
          height.
        </Text>
        {paragraphs}
      </Container>
    </FullPage>
  </>
);
`,...a.input.parameters?.docs?.source}}};t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => <>
      <PluginHeader title="My Plugin" />
      <FullPage style={{
      backgroundColor: '#c3f0ff'
    }}>
        <Container>
          <Text as="p">
            This content fills the remaining viewport height below the Header.
          </Text>
        </Container>
      </FullPage>
    </>
})`,...t.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => <>
      <PluginHeader title="My Plugin" />
      <FullPage>
        <Container>
          <Text as="h2" variant="title-medium">
            Scrollable Content
          </Text>
          <Text as="p">
            The content below scrolls independently while the Header stays
            pinned at the top.
          </Text>
          {paragraphs}
        </Container>
      </FullPage>
    </>
})`,...r.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => <>
      <PluginHeader title="My Plugin" tabs={tabs} />
      <FullPage>
        <Container>
          <Text as="p">
            The FullPage height adjusts automatically when the Header includes
            tabs, thanks to the ResizeObserver measuring the Header's actual
            height.
          </Text>
          {paragraphs}
        </Container>
      </FullPage>
    </>
})`,...a.input.parameters?.docs?.source}}};const ee=["Default","WithScrollableContent","WithTabs"];export{t as Default,r as WithScrollableContent,a as WithTabs,ee as __namedExportsOrder};
