import{j as t}from"./iframe-CtYv7QJ0.js";import{H as i}from"./Header-BfAx1d-T.js";import{P as a}from"./Page-D5VckSjg.js";import{H as r}from"./HeaderLabel-Gta_S-1_.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-Bn-nVCZO.js";import"./makeStyles--1ATzXv9.js";import"./Box-CAZTqRm1.js";import"./styled-EsqOIvlg.js";import"./Grid-BCbLl6WO.js";import"./Breadcrumbs-4i5SvteB.js";import"./index-B9sM2jn7.js";import"./Popover-Cetlf1AD.js";import"./Modal-D_Q7hd0G.js";import"./Portal-BRtlHwp1.js";import"./List-DmvJHB8z.js";import"./ListContext-BuapdplI.js";import"./ListItem-CwRfUFQu.js";import"./Link-4m0BNJ_b.js";import"./index-r59YBeO4.js";import"./lodash-CtZ09CsL.js";import"./index-CgDq3XR-.js";import"./useAnalytics-Bl__AmNu.js";import"./useApp-CZQSE3E9.js";import"./Page-DaTelRtr.js";import"./useMediaQuery-4i4hH4Z1.js";import"./Tooltip-BsOi6xxC.js";import"./Popper-BjMqL0rj.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
