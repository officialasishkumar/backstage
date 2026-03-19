import{j as t}from"./iframe-CBVwdAXc.js";import{H as i}from"./Header-C1GRNSKh.js";import{P as a}from"./Page-Bn-6ThNt.js";import{H as r}from"./HeaderLabel-zHIs7kut.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-i2YtugiZ.js";import"./makeStyles-C24YcoXm.js";import"./Box-BGY1rYdD.js";import"./styled-DoLFZKqM.js";import"./Grid-DWkTHZrC.js";import"./Breadcrumbs-GjRWr6gI.js";import"./index-B9sM2jn7.js";import"./Popover-CCxOaT36.js";import"./Modal-B_9QibKY.js";import"./Portal-DWyDC_bO.js";import"./List-7WrADx2K.js";import"./ListContext-D4A-UAeR.js";import"./ListItem-BSBetRD8.js";import"./Link-D1_aKDnj.js";import"./index-CzoPzI6j.js";import"./lodash-CjA-X3cH.js";import"./index-D9ejMs_C.js";import"./useAnalytics-Qr-pKmLn.js";import"./useApp-Dv9wNNjs.js";import"./Page-qP1r18-i.js";import"./useMediaQuery-BzV5tgPq.js";import"./Tooltip-D2y6AiO8.js";import"./Popper-DFPiCQu9.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
