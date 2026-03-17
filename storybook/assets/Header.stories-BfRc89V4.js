import{j as t}from"./iframe-w9ggzxzz.js";import{H as i}from"./Header-CKhmcF_x.js";import{P as a}from"./Page-DX6a1MFc.js";import{H as r}from"./HeaderLabel-xseIH6x-.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-sStT3_AJ.js";import"./makeStyles-z1EIRT_g.js";import"./Box-CFGD6k5Z.js";import"./styled-CSrW_Lwl.js";import"./Grid-DTFxJLQY.js";import"./Breadcrumbs-CUer9S6g.js";import"./index-B9sM2jn7.js";import"./Popover-DYRofrki.js";import"./Modal-CbdXoRek.js";import"./Portal-C7nXiunF.js";import"./List-eHfcnFSH.js";import"./ListContext-iSayvcxx.js";import"./ListItem-Br9Axuyj.js";import"./Link-CugHXzD0.js";import"./index-D7Wpl0IF.js";import"./lodash-B7vYRLmK.js";import"./index-BvT0XEY0.js";import"./useAnalytics-BaEnm4t3.js";import"./useApp-D1hU9Nxa.js";import"./Page-ChYdMsiM.js";import"./useMediaQuery-CYL0sLFh.js";import"./Tooltip-Cbxoa4An.js";import"./Popper-CfzuFGS0.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
