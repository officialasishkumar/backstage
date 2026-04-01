import{j as e}from"./iframe-D_dthwJh.js";import{H as o}from"./Header-95-U1251.js";import{P as p}from"./Page-DO1amzNj.js";import{H as r}from"./HeaderLabel-DfsHLffj.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BCk8U9gI.js";import"./Box-BkfaYvLl.js";import"./styled-ClS6a4l6.js";import"./Grid-BjyqMpwT.js";import"./makeStyles-DvB3MZbd.js";import"./Breadcrumbs-ECvpB-Z4.js";import"./index-B9sM2jn7.js";import"./Popover-65jxITH8.js";import"./Modal-uU7908xY.js";import"./Portal-BUjXNiYO.js";import"./List-BtLOYLzX.js";import"./ListContext-C98V7euk.js";import"./ListItem-DTl55zDW.js";import"./Link-DIS7qTGn.js";import"./index-DMgM-NvI.js";import"./lodash-BGiaY2vY.js";import"./useAnalytics-BFleSJbt.js";import"./useApp-DOW2ZF1x.js";import"./Page-uEg4WuQL.js";import"./useMediaQuery-CMJucivG.js";import"./Tooltip-Cd-sen2U.js";import"./Popper-D6KVGLgx.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
