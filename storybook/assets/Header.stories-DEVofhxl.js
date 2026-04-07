import{j as e}from"./iframe-BO_5tggG.js";import{H as o}from"./Header-CvoQm9yl.js";import{P as p}from"./Page-CPWcM-TL.js";import{H as r}from"./HeaderLabel-C2hlB1w5.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-D-ccEIKl.js";import"./Box-CfORvOdf.js";import"./styled-b9HJcToZ.js";import"./Grid-CnkSMyRl.js";import"./makeStyles-qdsN5qZw.js";import"./Breadcrumbs-b2ZVqEmS.js";import"./index-B9sM2jn7.js";import"./Popover-BygJlL56.js";import"./Modal-Cny2cXs_.js";import"./Portal-BrtXVkDD.js";import"./List-G7DDumso.js";import"./ListContext-B-Wc4pE1.js";import"./ListItem-sKW0pqw1.js";import"./Link-Dg9RiCku.js";import"./index-BYPhHgSY.js";import"./lodash-B-_hEigx.js";import"./useAnalytics-DiFHt5PS.js";import"./useApp-DdxTl6og.js";import"./Page-Bq-PPDmB.js";import"./useMediaQuery-DQlkKHPE.js";import"./Tooltip-D7P0enQt.js";import"./Popper-DLJkmYqC.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
