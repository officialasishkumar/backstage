import{ar as b,r as P,ao as x,j as e,p as f}from"./iframe-CtYv7QJ0.js";import{P as l}from"./PluginHeader-D1j1YjlU.js";import{C as p}from"./Container-DlU2SdEF.js";import{M as y}from"./index-CgDq3XR-.js";import{B as T}from"./BUIProvider-DCcFMRr-.js";import{T as n}from"./Text-6aay7KHe.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DpZzGo5G.js";import"./utils-DO4tuehO.js";import"./useObjectRef-vsyhJXe-.js";import"./useFocusable-BMDS_jJq.js";import"./openLink-Bmz1Jei1.js";import"./useLink-BwWxFAmB.js";import"./usePress-DT0xcJu9.js";import"./useFocusRing-Do2rA8_c.js";import"./index-CIML6-uv.js";import"./Tabs-CKVUAntV.js";import"./SelectionManager-B364_wiX.js";import"./useEvent-BVNgaH19.js";import"./SelectionIndicator-wXJP5iy8.js";import"./context-Bi3s1JjX.js";import"./Hidden-BFFbPz5n.js";import"./useControlledState-zRjovyAn.js";import"./useListState-DI-2_HIC.js";import"./animation-CSuLUUAV.js";import"./useLabels-CUz_l6uh.js";import"./useHasTabbableChild-P61xCXgy.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-DTdAnHit.js";const w={"bui-FullPage":"_bui-FullPage_1vdnu_20"},C=b()({styles:w,classNames:{root:"bui-FullPage"},propDefs:{className:{}}}),s=P.forwardRef((i,o)=>{const{ownProps:h,restProps:m}=x(C,i),{classes:g}=h;return e.jsx("main",{ref:o,className:g.root,...m})});s.__docgenInfo={description:`A component that fills the remaining viewport height below the Header.

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
