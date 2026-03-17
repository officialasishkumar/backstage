import{j as t}from"./iframe-BPa6N3SD.js";import{H as i}from"./Header-CJuBUkPG.js";import{P as a}from"./Page-DkyblfiS.js";import{H as r}from"./HeaderLabel-Cu-RrJIj.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-DbWDmwUi.js";import"./makeStyles-BPhOhugX.js";import"./Box-Cnz1HHCH.js";import"./styled-DR1Q9dRL.js";import"./Grid-DrfNOwcD.js";import"./Breadcrumbs-dnBaYuON.js";import"./index-B9sM2jn7.js";import"./Popover-ccHJV6L0.js";import"./Modal-B2cUeR8m.js";import"./Portal-CybimJf6.js";import"./List-2A5-ge2l.js";import"./ListContext-BukMsw43.js";import"./ListItem-D402ttc5.js";import"./Link-CTyMZEMw.js";import"./index-BdY7AnEA.js";import"./lodash-guIUsIxV.js";import"./index-CCMAs2uM.js";import"./useAnalytics-BfzgNjvV.js";import"./useApp-Hpyy33iD.js";import"./Page-cT2nnb5Z.js";import"./useMediaQuery-K3YEw5GT.js";import"./Tooltip--dBTVPXa.js";import"./Popper-DYnRrkMR.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
