import{j as e}from"./iframe-BnLaYHT0.js";import{H as o}from"./Header-B07v9Xxp.js";import{P as p}from"./Page-CwaizdjI.js";import{H as r}from"./HeaderLabel-vu8CxwSV.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-KSAoj-Rw.js";import"./makeStyles-Ci9OQMMV.js";import"./Box-D4mbYqDO.js";import"./styled-Dah7uO8h.js";import"./Grid-BVx1ZeMm.js";import"./Breadcrumbs-Bbj_lh_y.js";import"./index-B9sM2jn7.js";import"./Popover-B5d8YLfq.js";import"./Modal-BRJd5uSM.js";import"./Portal-CJRUocKS.js";import"./List-DXJGlMrG.js";import"./ListContext-ZUAJ6gMg.js";import"./ListItem-DEKaS7rV.js";import"./Link-Boy8ho4w.js";import"./index-Cpm2Va4W.js";import"./lodash-DpN-AoLg.js";import"./useAnalytics-DZdNMYw7.js";import"./useApp-DC1925IS.js";import"./Page-D923VjGL.js";import"./useMediaQuery-Bq570aCt.js";import"./Tooltip-DEaAQANQ.js";import"./Popper-CajeHu2h.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
