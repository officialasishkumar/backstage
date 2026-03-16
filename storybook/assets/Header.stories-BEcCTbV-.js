import{j as t}from"./iframe-_E948MVz.js";import{H as i}from"./Header-Bv4TUzcO.js";import{P as a}from"./Page-DK5WvvnA.js";import{H as r}from"./HeaderLabel-Byqhk_32.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CfrOT7qk.js";import"./makeStyles-CeVQhawL.js";import"./Box-CkUsT8sz.js";import"./styled-DbkjhS7C.js";import"./Grid-DjkXhwP0.js";import"./Breadcrumbs-C0wBFyi6.js";import"./index-B9sM2jn7.js";import"./Popover-DfDZbSHO.js";import"./Modal-wldFZbuS.js";import"./Portal-gFrfFYQV.js";import"./List-D7wngo3z.js";import"./ListContext-DMVOB75k.js";import"./ListItem-DZRnMDoX.js";import"./Link-yJri3-iz.js";import"./index-DJ6lgYrc.js";import"./lodash-C-i153t0.js";import"./index-B7hK4tkb.js";import"./useAnalytics-Jbkamk-n.js";import"./useApp-DqMZs1Wr.js";import"./Page-QI8cx-pD.js";import"./useMediaQuery-DQaTlHr1.js";import"./Tooltip-CaMAvpLY.js";import"./Popper-DVCylAOX.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
  const { type } = args;

  return (
    <Page themeId={type}>
      <Header type="home" title="This is a title" subtitle="This is a subtitle">
        {labels}
      </Header>
    </Page>
  );
};
`,...e.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: {
  type: string;
  title: string;
  subtitle: string;
}) => {
  const {
    type
  } = args;
  return <Page themeId={type}>
      <Header {...args}>{labels}</Header>
    </Page>;
}`,...e.parameters?.docs?.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,S as default};
