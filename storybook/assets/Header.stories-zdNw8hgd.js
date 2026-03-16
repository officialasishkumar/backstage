import{j as t}from"./iframe-D7TnLv8A.js";import{H as i}from"./Header-D1DOn9To.js";import{P as a}from"./Page-DYF5AUec.js";import{H as r}from"./HeaderLabel-t2bnvkQn.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-B8kEQz8l.js";import"./makeStyles-BuB2Q7_j.js";import"./Box-z0c3JxTt.js";import"./styled-DHDYZuir.js";import"./Grid-iTO1Arnu.js";import"./Breadcrumbs-Dsw8BQ96.js";import"./index-B9sM2jn7.js";import"./Popover-DquKNcU4.js";import"./Modal-C7Rg7DHg.js";import"./Portal-DYix9A2M.js";import"./List-L4X_xhy8.js";import"./ListContext-UWf6-YWs.js";import"./ListItem-B56tmsM_.js";import"./Link-BEBsz3Of.js";import"./index-DXGAHSD1.js";import"./lodash-Dr039tkm.js";import"./index-MOf-tiv5.js";import"./useAnalytics-AC0VHxKR.js";import"./useApp-CHEBI3qn.js";import"./Page-NBjC0kYZ.js";import"./useMediaQuery-BSac5Qyg.js";import"./Tooltip-C7iiPh4c.js";import"./Popper-2BigagmP.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
