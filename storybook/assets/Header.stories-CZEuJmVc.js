import{j as e}from"./iframe-DyjKfHWP.js";import{H as o}from"./Header-DyYouZgS.js";import{P as p}from"./Page-IcfFVOVD.js";import{H as r}from"./HeaderLabel-C3z1NniA.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-Dg750io9.js";import"./Box-DrwrZr2h.js";import"./styled-C09kP24H.js";import"./Grid-Yb0gK3gi.js";import"./makeStyles-BTx5IhEq.js";import"./Breadcrumbs-D-aJyZAI.js";import"./index-B9sM2jn7.js";import"./Popover-ru3MB2c_.js";import"./Modal-BoG7Ezu7.js";import"./Portal-DshplTSh.js";import"./List-BPKCu-iI.js";import"./ListContext-Aak99S-R.js";import"./ListItem-d1LcQsBU.js";import"./Link-GxS-0vqx.js";import"./index-BxgWU5HL.js";import"./lodash-C9XZXW9l.js";import"./useAnalytics-DcziEhY3.js";import"./useApp-lFVRdKSK.js";import"./Page-DR5hjz5-.js";import"./useMediaQuery-iCePdMaY.js";import"./Tooltip-gxRFNsDR.js";import"./Popper-BbowAVjj.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
}`,...t.parameters?.docs?.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,R as default};
