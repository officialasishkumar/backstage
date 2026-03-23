import{j as t}from"./iframe-CXYB6t6D.js";import{H as i}from"./Header-BcMwx-rW.js";import{P as a}from"./Page-wuxs4UXB.js";import{H as r}from"./HeaderLabel-ClweEmhU.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-RwaZApfF.js";import"./makeStyles-D9Wml1Qb.js";import"./Box-BBf7RVHa.js";import"./styled-C7sk4Fig.js";import"./Grid-BOZ43D_m.js";import"./Breadcrumbs-BNrIYvTQ.js";import"./index-B9sM2jn7.js";import"./Popover-dtZt9s_G.js";import"./Modal-Cs-JCA8a.js";import"./Portal-DIGrr39M.js";import"./List-DyaSGBv-.js";import"./ListContext-CJZGy2dL.js";import"./ListItem-BmXO2GVD.js";import"./Link-DM7aw648.js";import"./index-D1SHR_vt.js";import"./lodash-KoVF5YkZ.js";import"./index-Cqb6C9TB.js";import"./useAnalytics-NJhHIdXr.js";import"./useApp-BzYXrb6N.js";import"./Page-xijyx2l1.js";import"./useMediaQuery-BJu1U6Fj.js";import"./Tooltip-BKoVPHwY.js";import"./Popper-BQbRqMDd.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
