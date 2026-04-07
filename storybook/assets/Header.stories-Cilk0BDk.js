import{j as e}from"./iframe-B7X4koWg.js";import{H as o}from"./Header-DZ9MBkYR.js";import{P as p}from"./Page-oEOhFzxX.js";import{H as r}from"./HeaderLabel-0R71mrNi.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-B2G_VwUH.js";import"./Box-D1NbE0qt.js";import"./styled-Bs9bCmQE.js";import"./Grid-CsLGBI0Z.js";import"./makeStyles-CiNtEf1f.js";import"./Breadcrumbs-PaJlukHb.js";import"./index-B9sM2jn7.js";import"./Popover-DFCWHpJT.js";import"./Modal-ngIBWuwT.js";import"./Portal-BVLNQ5cR.js";import"./List-B4jJ8U2i.js";import"./ListContext-DYod19dm.js";import"./ListItem-BZPD3cNM.js";import"./Link-DK73yQJ4.js";import"./index-Csz7HKtd.js";import"./lodash-CVU3dqUL.js";import"./useAnalytics-BwhwrTZ0.js";import"./useApp-CJfDpKhN.js";import"./Page-CTbMLMv3.js";import"./useMediaQuery-BagEMDdT.js";import"./Tooltip-5XmI3CNW.js";import"./Popper-BwLyAbb_.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
