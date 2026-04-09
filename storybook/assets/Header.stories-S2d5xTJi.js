import{j as e}from"./iframe-Cfvhm_I_.js";import{H as o}from"./Header-KRCHU0JD.js";import{P as p}from"./Page-Ch4n8f7n.js";import{H as r}from"./HeaderLabel-DLOIP3ts.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-B-mxw2VT.js";import"./Box-TWV5D5e5.js";import"./styled-CoxzwnbL.js";import"./Grid-DkWQjsJu.js";import"./makeStyles-Cjp1zSIN.js";import"./Breadcrumbs-nqPbEMTY.js";import"./index-B9sM2jn7.js";import"./Popover-CDSWPwDj.js";import"./Modal-ClsUAoOV.js";import"./Portal-BcsYPVrx.js";import"./List-BiOyHWo0.js";import"./ListContext-CKJ6dXnp.js";import"./ListItem-CHJsmnzK.js";import"./Link-CW8AiaF7.js";import"./index-BsVGjCRX.js";import"./lodash-KfD76xoT.js";import"./useAnalytics-CdOPkTnF.js";import"./useApp-B2trGyyJ.js";import"./Page-C78YjKgm.js";import"./useMediaQuery-w3s45jPq.js";import"./Tooltip-DafbC9NK.js";import"./Popper-BE9xQ5lf.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
