import{j as e}from"./iframe-DVcxdhoL.js";import{H as o}from"./Header-DmoJuRyU.js";import{P as p}from"./Page-BQD90Yc4.js";import{H as r}from"./HeaderLabel-PvFbBDCu.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-C9AczZiA.js";import"./Box-CEEtJDX_.js";import"./styled-CFG22yA2.js";import"./Grid-Dms4qLVU.js";import"./makeStyles-DvhSq6P6.js";import"./Breadcrumbs-C9YiwJ0D.js";import"./index-B9sM2jn7.js";import"./Popover-C4IDm9xH.js";import"./Modal-44qXCa1H.js";import"./Portal-CN0zdblU.js";import"./List-DXUnol4x.js";import"./ListContext-w1A3oPfR.js";import"./ListItem-BwR4C4uD.js";import"./Link-CDu7g4U_.js";import"./index-D35Dverb.js";import"./lodash-BarMUI2a.js";import"./useAnalytics-D67wwHSJ.js";import"./useApp-sEZYRDhs.js";import"./Page-CL7xcw_S.js";import"./useMediaQuery-CqT4KrJA.js";import"./Tooltip-CLapkFrU.js";import"./Popper-C6RVnZCX.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
