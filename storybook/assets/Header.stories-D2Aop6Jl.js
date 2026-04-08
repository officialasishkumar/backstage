import{j as e}from"./iframe-CIiIDGZ-.js";import{H as o}from"./Header-DXSnEzQD.js";import{P as p}from"./Page-DQwnNtfv.js";import{H as r}from"./HeaderLabel-ButwcpbO.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-etmvMvtx.js";import"./Box-DtVUycxx.js";import"./styled-CIZpuVc6.js";import"./Grid-Zain3HUl.js";import"./makeStyles-DIRFdalX.js";import"./Breadcrumbs-Bb0VCU6h.js";import"./index-B9sM2jn7.js";import"./Popover-AKQjLAsz.js";import"./Modal-Do_LRYub.js";import"./Portal-BkGhIEsM.js";import"./List-BGk_33Kg.js";import"./ListContext-C8freVI4.js";import"./ListItem-CqGsN4UV.js";import"./Link-DJjPQadS.js";import"./index-Cc1WYh9h.js";import"./lodash-BzBabpH3.js";import"./useAnalytics-C8Elrazu.js";import"./useApp-CeorHsAH.js";import"./Page-DdAqzCue.js";import"./useMediaQuery-ClthfgDG.js";import"./Tooltip-Dt97tpAm.js";import"./Popper-COve1U5T.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
