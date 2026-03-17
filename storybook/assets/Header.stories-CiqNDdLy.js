import{j as t}from"./iframe-Bu39PmLp.js";import{H as i}from"./Header-DNdemCdd.js";import{P as a}from"./Page-BlYTSevE.js";import{H as r}from"./HeaderLabel-Buh9S1i-.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BK1H0qz9.js";import"./makeStyles-BF75o2aM.js";import"./Box-COypEvq8.js";import"./styled-DZeC-7HZ.js";import"./Grid-88_alP5V.js";import"./Breadcrumbs-qHqL4NSh.js";import"./index-B9sM2jn7.js";import"./Popover-CgXZkw0s.js";import"./Modal-zPxLU0J0.js";import"./Portal-Cnh7PMtZ.js";import"./List-plozWRZ-.js";import"./ListContext-U4JS0URp.js";import"./ListItem-CL7cp1ei.js";import"./Link-CbL8aN6w.js";import"./index-BySxz2Fm.js";import"./lodash-BP1SMfTv.js";import"./index-B4-sCELz.js";import"./useAnalytics-WQSTtdKZ.js";import"./useApp-CJiRzn9p.js";import"./Page-620eNI18.js";import"./useMediaQuery-CQoRokpI.js";import"./Tooltip-CVo3tGMI.js";import"./Popper-BmbP9aP5.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
