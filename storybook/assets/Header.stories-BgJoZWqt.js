import{j as t}from"./iframe-9SnFn8NI.js";import{H as i}from"./Header-2x-jkEdw.js";import{P as a}from"./Page-DgUpIrlN.js";import{H as r}from"./HeaderLabel-S5L_xgAq.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-OTqoMqxu.js";import"./makeStyles-V6CeBGqV.js";import"./Box-gvDFBePG.js";import"./styled-BqCxyJxR.js";import"./Grid-DnbT5ToY.js";import"./Breadcrumbs-DNV3wjhx.js";import"./index-B9sM2jn7.js";import"./Popover-DwK-7TXH.js";import"./Modal-shSMlX3e.js";import"./Portal-DzHAgIGh.js";import"./List-4wadUwvo.js";import"./ListContext-D6WBwJuB.js";import"./ListItem-DIdjPLO3.js";import"./Link-CwdNwFvc.js";import"./index-Cl14oj1p.js";import"./lodash-D_ItgaGX.js";import"./index-DSgRsb80.js";import"./useAnalytics-BPrcyc7d.js";import"./useApp-BcoyKQFG.js";import"./Page-Bk2imvQR.js";import"./useMediaQuery-De9KxEic.js";import"./Tooltip-B3I0hJ1p.js";import"./Popper-2JEPo0EG.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
