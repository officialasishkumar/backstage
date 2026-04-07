import{j as e}from"./iframe-BHNZ12cl.js";import{H as o}from"./Header-NZHBwlik.js";import{P as p}from"./Page-BL-pWANg.js";import{H as r}from"./HeaderLabel-CAG91vkL.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BZzSJXE-.js";import"./Box-BN3Fmkib.js";import"./styled-Cc7guA68.js";import"./Grid-DdfJ9ZJI.js";import"./makeStyles-Cxj8tKnX.js";import"./Breadcrumbs-vRyx48X7.js";import"./index-B9sM2jn7.js";import"./Popover-DAp868C0.js";import"./Modal-CQ4rSktf.js";import"./Portal-BHJRq7Zg.js";import"./List-qaLOTKU8.js";import"./ListContext-DOaaaMZI.js";import"./ListItem-CN6XPOwF.js";import"./Link-DlpkdDiW.js";import"./index-D4FdfQZK.js";import"./lodash-C-yslXNg.js";import"./useAnalytics-B3lGy6AO.js";import"./useApp-CCki0BfS.js";import"./Page-vZMSSyhy.js";import"./useMediaQuery-wfs55G1b.js";import"./Tooltip-BC5W00Jv.js";import"./Popper-CeXm3hhw.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
