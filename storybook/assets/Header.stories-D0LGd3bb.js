import{j as e}from"./iframe-D2P1gL3G.js";import{H as o}from"./Header-r3sFDjzp.js";import{P as p}from"./Page-BqVl-m93.js";import{H as r}from"./HeaderLabel-icwNj1TG.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CvrvtC-r.js";import"./Box-ZH5bpM8G.js";import"./styled-CvACks6z.js";import"./Grid-Dr3D4icg.js";import"./makeStyles-Clh2njjY.js";import"./Breadcrumbs-Zu52S3Ml.js";import"./index-B9sM2jn7.js";import"./Popover-CkkWms-p.js";import"./Modal-Bofap_l9.js";import"./Portal-CZcmajaJ.js";import"./List-BN_I58y-.js";import"./ListContext-gHvGwQdG.js";import"./ListItem-BjwKQPwC.js";import"./Link-DWOvRufO.js";import"./index-DGJxFe6q.js";import"./lodash-DhI4PBPP.js";import"./useAnalytics-CZuK40Zw.js";import"./useApp-Dr4H7OwE.js";import"./Page-u73d752j.js";import"./useMediaQuery-gCsaEkEA.js";import"./Tooltip-BrmdzuQO.js";import"./Popper-Jb_2zun_.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
