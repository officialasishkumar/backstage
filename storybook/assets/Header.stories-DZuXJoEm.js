import{j as e}from"./iframe-DeVvrktA.js";import{H as o}from"./Header-CbEBHxiC.js";import{P as p}from"./Page-DeY6K1gb.js";import{H as r}from"./HeaderLabel-Dvrux9FL.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BGs3aKrM.js";import"./Box-DOTqXu-6.js";import"./styled-oeuDQEze.js";import"./Grid-10XIJtv4.js";import"./makeStyles-CDec1JgF.js";import"./Breadcrumbs-BF1U6Exn.js";import"./index-B9sM2jn7.js";import"./Popover-DVzFdjxo.js";import"./Modal-D8wNxgQF.js";import"./Portal-BnHJ445C.js";import"./List-BmFOCbHw.js";import"./ListContext-Bl_Wg17k.js";import"./ListItem-DTIEUFkk.js";import"./Link-B6U9VXJa.js";import"./index-DTK3kZOY.js";import"./lodash-V1Qj8ZxO.js";import"./useAnalytics-Zw1fFqKc.js";import"./useApp-web1meD-.js";import"./Page-BpvJtsIx.js";import"./useMediaQuery-Cxykr1Wb.js";import"./Tooltip-CRaoVjQ4.js";import"./Popper-Cbnycm1A.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
