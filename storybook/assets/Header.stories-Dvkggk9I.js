import{j as t}from"./iframe-CYY79_Ch.js";import{H as i}from"./Header-BBLsZd4b.js";import{P as a}from"./Page-BnJpUEng.js";import{H as r}from"./HeaderLabel-BCCBoYqp.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-v4xDkDoH.js";import"./makeStyles-tbZFV_7j.js";import"./Box-DbAj5ghB.js";import"./styled-D9ECYKfc.js";import"./Grid-B6UmqXW5.js";import"./Breadcrumbs-BteUjqXq.js";import"./index-B9sM2jn7.js";import"./Popover-B7rEX1cK.js";import"./Modal-zlEEAh2C.js";import"./Portal-DIn4oRFY.js";import"./List-Cj-oPI3l.js";import"./ListContext-BaICr9Ho.js";import"./ListItem-Dtfo1o08.js";import"./Link-9_IW04qp.js";import"./index-eUgSIfVW.js";import"./lodash-BCNhplaF.js";import"./index-CDv2I334.js";import"./useAnalytics-EAeWUmga.js";import"./useApp-2pwP5JR0.js";import"./Page-BQ6YgLSN.js";import"./useMediaQuery-HRD73TvP.js";import"./Tooltip-CRD-RFGK.js";import"./Popper-CzAHrzmM.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
