import{j as e}from"./iframe-BzMU8KOh.js";import{H as o}from"./Header-B9JarwQr.js";import{P as p}from"./Page-6cVw_Zac.js";import{H as r}from"./HeaderLabel-Bzoq8Zax.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-uPtLH6Xr.js";import"./makeStyles-C3oh1vXh.js";import"./Box-Dy1i5PnV.js";import"./styled-DjuCxYRu.js";import"./Grid-D2HTVDY3.js";import"./Breadcrumbs-BJtt8e4q.js";import"./index-B9sM2jn7.js";import"./Popover-DImwXMSd.js";import"./Modal-DL3jvVCv.js";import"./Portal-ZMtLzGP0.js";import"./List-D4klNrOh.js";import"./ListContext-C2BSnJyA.js";import"./ListItem-TAK5bns_.js";import"./Link-BFHx4W-6.js";import"./index-DkmrC5fw.js";import"./lodash-BBveFXvI.js";import"./useAnalytics-TOERclJD.js";import"./useApp-BFWv9POw.js";import"./Page-B7iolmA1.js";import"./useMediaQuery-BVLmw7ec.js";import"./Tooltip-DIsjQrri.js";import"./Popper-B7Pqac31.js";const R={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
