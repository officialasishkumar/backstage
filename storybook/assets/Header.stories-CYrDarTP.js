import{j as e}from"./iframe-hODDjxEI.js";import{H as o}from"./Header-Bz9bjSxk.js";import{P as p}from"./Page-BLuVPwFI.js";import{H as r}from"./HeaderLabel-FSDZ8h7p.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-DN_KUZSm.js";import"./Box-D9xbeeDr.js";import"./styled-0hYU00PK.js";import"./Grid-EriWvE-n.js";import"./makeStyles-aIh2F1t-.js";import"./Breadcrumbs-DkiyFjCQ.js";import"./index-B9sM2jn7.js";import"./Popover-CAbPHxGr.js";import"./Modal-BHs76e9X.js";import"./Portal-CzdVLRe2.js";import"./List-W4gqv1lF.js";import"./ListContext-DIhobSxE.js";import"./ListItem-DDCqoUKb.js";import"./Link-B3hayh6l.js";import"./index-CcwbHv03.js";import"./lodash-m16iCv2r.js";import"./useAnalytics-DnjR9eFY.js";import"./useApp-4cPWtTY3.js";import"./Page-CUklThtr.js";import"./useMediaQuery-DVliIEZ2.js";import"./Tooltip-D-EFxL80.js";import"./Popper-CHhNufeX.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
