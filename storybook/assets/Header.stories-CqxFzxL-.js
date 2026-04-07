import{j as e}from"./iframe-C11JX4Ba.js";import{H as o}from"./Header-C301Jocc.js";import{P as p}from"./Page-DUcfepNN.js";import{H as r}from"./HeaderLabel-BWra9Vrz.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet--EcAIO28.js";import"./Box-BT_w3FeJ.js";import"./styled-CSoi2Z33.js";import"./Grid-BSU_hxOH.js";import"./makeStyles-gpfZ2MPN.js";import"./Breadcrumbs-B1I4E-Rf.js";import"./index-B9sM2jn7.js";import"./Popover-DvOYHW_s.js";import"./Modal-Fp_BGzUO.js";import"./Portal-B1VPiTGn.js";import"./List-ClmQaIAH.js";import"./ListContext-C6SY7huE.js";import"./ListItem-C7uaqKnP.js";import"./Link-DJcQ-aLb.js";import"./index-9AoUhYV3.js";import"./lodash-OqA7S4ml.js";import"./useAnalytics-C5cwZo0H.js";import"./useApp-CYq77aVU.js";import"./Page-rZheMm-n.js";import"./useMediaQuery-DsWtJnGf.js";import"./Tooltip-UyoZLn60.js";import"./Popper-BYwa50Wf.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
