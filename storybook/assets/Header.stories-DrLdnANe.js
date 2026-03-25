import{j as t}from"./iframe-BZrpTwFW.js";import{H as i}from"./Header-DpIECLj2.js";import{P as a}from"./Page-DnsDtRXh.js";import{H as r}from"./HeaderLabel-NCKytbs1.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-uMW1FhWe.js";import"./makeStyles-CIE8BXXT.js";import"./Box-D8g6naBP.js";import"./styled-Be8rlyJS.js";import"./Grid-OEz6aKRJ.js";import"./Breadcrumbs-D4r658KM.js";import"./index-B9sM2jn7.js";import"./Popover-BIXbtjFD.js";import"./Modal-Bug_1Z_P.js";import"./Portal-BMtcgUVu.js";import"./List-CNsgrFh7.js";import"./ListContext-_XocguZm.js";import"./ListItem-DP2OxpMh.js";import"./Link-k2iaYon8.js";import"./index-u6uYn8Jj.js";import"./lodash-lol44oGD.js";import"./index-DNu1idMQ.js";import"./useAnalytics-CMcmWSHW.js";import"./useApp-4LCqZN-N.js";import"./Page-CA-R5fnF.js";import"./useMediaQuery-D_0ls_fC.js";import"./Tooltip-3sla5M5N.js";import"./Popper-Al3BzMOF.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
