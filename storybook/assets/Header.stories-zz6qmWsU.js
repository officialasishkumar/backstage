import{j as e}from"./iframe-B8N4GvwI.js";import{H as o}from"./Header-BAvSg3Ov.js";import{P as p}from"./Page-DHTPc3dT.js";import{H as r}from"./HeaderLabel-B_JVPO_L.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-zdjgl7UX.js";import"./Box-MYHTFpuj.js";import"./styled-DnQPDG99.js";import"./Grid-QaPYXNRs.js";import"./makeStyles-_6Yu2_YB.js";import"./Breadcrumbs-B2gN0dyt.js";import"./index-B9sM2jn7.js";import"./Popover-CyULg1bi.js";import"./Modal-D8VPwsry.js";import"./Portal-DI7AqiTH.js";import"./List-0a88D0vi.js";import"./ListContext-Dw62DV8y.js";import"./ListItem-DavGzvU0.js";import"./Link-PlY-q14u.js";import"./index-8D16w7r_.js";import"./lodash-BgY7d7CH.js";import"./useAnalytics-BHUlNS6C.js";import"./useApp-BEeSmtgR.js";import"./Page-4I6CY_as.js";import"./useMediaQuery-Dcpb15WP.js";import"./Tooltip-DW4X55ZT.js";import"./Popper-Bkk-r00N.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
