import{j as e}from"./iframe-v6zF9Gaf.js";import{H as o}from"./Header-Bpf4pKuw.js";import{P as p}from"./Page-HekdwHN-.js";import{H as r}from"./HeaderLabel-Cz4FsY7A.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BwmhN5ko.js";import"./makeStyles-CnXLcFSM.js";import"./Box-D8QaCveM.js";import"./styled-DI5Z0TIx.js";import"./Grid-Cpghltf9.js";import"./Breadcrumbs-GjXyep0Y.js";import"./index-B9sM2jn7.js";import"./Popover-P49c5zXb.js";import"./Modal-8auFf5gZ.js";import"./Portal-D_MLevm5.js";import"./List-BckW65rp.js";import"./ListContext-DWGbobxz.js";import"./ListItem-oij8p5Hz.js";import"./Link-DqdRHmUD.js";import"./index-C2dRPvEc.js";import"./lodash-BcdJgnz3.js";import"./useAnalytics-BrIdl9nZ.js";import"./useApp-B9X-R3sY.js";import"./Page-DJwX3Luo.js";import"./useMediaQuery-qDcEKBRg.js";import"./Tooltip-Bdf10fgk.js";import"./Popper-Ib5g_NV1.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
