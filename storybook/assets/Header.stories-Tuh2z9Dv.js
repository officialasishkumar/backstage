import{j as e}from"./iframe-BwbkeUNF.js";import{H as o}from"./Header-BoCgIbgB.js";import{P as p}from"./Page-OzQN_XBV.js";import{H as r}from"./HeaderLabel-BhZHxjwb.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-B4MqQPcA.js";import"./Box-BpqKX1IA.js";import"./styled-DKzWxQyh.js";import"./Grid-DD0XASu5.js";import"./makeStyles-CGCER2cu.js";import"./Breadcrumbs-BDnXd8by.js";import"./index-B9sM2jn7.js";import"./Popover-HuCIbp-7.js";import"./Modal-C_w5RpoD.js";import"./Portal-qCFAxiUf.js";import"./List-ChwsDTGU.js";import"./ListContext-BDNI8oKK.js";import"./ListItem-BHaUgdJU.js";import"./Link-CjNA6wJy.js";import"./index-zhCgspdl.js";import"./lodash-ClqrAeSM.js";import"./useAnalytics-B7PiVxCY.js";import"./useApp-DGHdqxLG.js";import"./Page-BtAYh_Il.js";import"./useMediaQuery-By5aL91l.js";import"./Tooltip-BCiMtrfJ.js";import"./Popper-CtD4YCCn.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
