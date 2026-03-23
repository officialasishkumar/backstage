import{j as t}from"./iframe--MS66teN.js";import{H as i}from"./Header-Bn6FTFDm.js";import{P as a}from"./Page-C0vaE37d.js";import{H as r}from"./HeaderLabel-DxGqIAZX.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-lxYIi9pL.js";import"./makeStyles-B3gZJdXQ.js";import"./Box-WcPrDxvm.js";import"./styled-BHy6FTvz.js";import"./Grid-S31HS9ey.js";import"./Breadcrumbs-BD2qpOXG.js";import"./index-B9sM2jn7.js";import"./Popover-D7kgfPEI.js";import"./Modal-ByYh99jW.js";import"./Portal-UjOrNlZC.js";import"./List-BngRfJV6.js";import"./ListContext-DH8NOqlh.js";import"./ListItem-CtSgiNmU.js";import"./Link-DnMo_TOp.js";import"./index-DGpF3VQV.js";import"./lodash-vaL5b5o-.js";import"./index-C8lN7z6e.js";import"./useAnalytics-B-3-tPoN.js";import"./useApp-P40Yy8FV.js";import"./Page-BhwBI_8z.js";import"./useMediaQuery-KS5OND7o.js";import"./Tooltip-ymjnk5vs.js";import"./Popper-CVKGQzkO.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
  const { type } = args;

  return (
    <Page themeId={type}>
      <Header type="home" title="This is a title" subtitle="This is a subtitle">
        {labels}
      </Header>
    </Page>
  );
};
`,...e.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: {
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
}`,...e.parameters?.docs?.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,S as default};
