import{j as e}from"./iframe-BYJEcONI.js";import{H as o}from"./Header-vnjI1pmV.js";import{P as p}from"./Page-BQlFlPMn.js";import{H as r}from"./HeaderLabel-nLp1QEiY.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BSTCb-Rj.js";import"./Box-sr-PQbiK.js";import"./styled-BIP2wHBB.js";import"./Grid-WhGNoc5-.js";import"./makeStyles-l6ucUTqN.js";import"./Breadcrumbs-L1Mig-i-.js";import"./index-B9sM2jn7.js";import"./Popover-CL3IOnot.js";import"./Modal-DGwD98fw.js";import"./Portal-CBSxLcyA.js";import"./List-BwnJ0qw9.js";import"./ListContext-BBhf4A7_.js";import"./ListItem-CssaaKiD.js";import"./Link-DnuOEioG.js";import"./index-CXFg1uvL.js";import"./lodash-Du7UIGfI.js";import"./useAnalytics-CRhuHj1g.js";import"./useApp-DuvHdhuP.js";import"./Page-DWQJPya3.js";import"./useMediaQuery-w82Yn6Oy.js";import"./Tooltip-BW3NBEpc.js";import"./Popper-BOCixRLe.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
