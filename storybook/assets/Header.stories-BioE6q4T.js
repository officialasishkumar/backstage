import{j as t}from"./iframe-Cvt_X182.js";import{H as i}from"./Header-DseP1SdI.js";import{P as a}from"./Page-DvlXXwTl.js";import{H as r}from"./HeaderLabel-lD3TKMId.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-D_S9SlGB.js";import"./makeStyles-C2GLBazK.js";import"./Box-X6UqKYV6.js";import"./styled-It9bTCH_.js";import"./Grid-Fa5sAGyT.js";import"./Breadcrumbs-BWl8Sg5S.js";import"./index-B9sM2jn7.js";import"./Popover-DtxdJ-Yw.js";import"./Modal-BZN5-otl.js";import"./Portal-Br5yZBqf.js";import"./List-O0e_0tnH.js";import"./ListContext-jbH0b5HF.js";import"./ListItem-DypDUMAf.js";import"./Link-Cm_XN3RO.js";import"./index-4OD0R2yY.js";import"./lodash-wfJ_V-c-.js";import"./index-CGcTZ4mm.js";import"./useAnalytics-C-sF4Up2.js";import"./useApp-B7teYX-A.js";import"./Page-CMzwQhXk.js";import"./useMediaQuery-BLiIAlr1.js";import"./Tooltip-B659PVdL.js";import"./Popper-DOugWYTx.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
