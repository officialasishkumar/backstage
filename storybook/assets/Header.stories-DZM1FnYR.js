import{j as t}from"./iframe-zPAYUdEu.js";import{H as i}from"./Header-D5yZeSw4.js";import{P as a}from"./Page-9MAvF9US.js";import{H as r}from"./HeaderLabel-Cqxistj5.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CelnCz2Z.js";import"./makeStyles-novWPxOA.js";import"./Box-xRNo1G5I.js";import"./styled-3vIHv08M.js";import"./Grid-BhIWWG4z.js";import"./Breadcrumbs-C0sewFDE.js";import"./index-B9sM2jn7.js";import"./Popover-DXqpzK7c.js";import"./Modal-Cb_IbwSz.js";import"./Portal-ceA7f9a1.js";import"./List-Blmd7r0h.js";import"./ListContext-CTsHD7ZV.js";import"./ListItem-YzTMx7m-.js";import"./Link-Cpe82tDX.js";import"./index-DsHuEjY0.js";import"./lodash-BrIyKjTz.js";import"./useAnalytics-D1Ni702Z.js";import"./useApp-CLCQ45db.js";import"./Page-B9mMggpD.js";import"./useMediaQuery-DSgMbrvl.js";import"./Tooltip-Dv9iFuGM.js";import"./Popper-CGDdcMf9.js";const R={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...e.parameters?.docs?.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,R as default};
