import{j as t}from"./iframe-AYVAkLn2.js";import{H as i}from"./Header-BBkWhqo6.js";import{P as a}from"./Page-lrYeuPTe.js";import{H as r}from"./HeaderLabel-mZO4rJGL.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-Wx5gF10y.js";import"./makeStyles-DiUzlV7t.js";import"./Box-D2M4kuqq.js";import"./styled-arALQvZ3.js";import"./Grid-ByzVJJnk.js";import"./Breadcrumbs-DCt1D0vI.js";import"./index-B9sM2jn7.js";import"./Popover-I1yJX9mq.js";import"./Modal-DAoau9we.js";import"./Portal-BKv0oT2g.js";import"./List-CeeewVqa.js";import"./ListContext-BEmmok3M.js";import"./ListItem-bQqWIE31.js";import"./Link-idfQxFMB.js";import"./index-EB-9jFEh.js";import"./lodash-K-yyiTG_.js";import"./index-B51ZAw-h.js";import"./useAnalytics-BDuNGi_L.js";import"./useApp-BmNX3I2k.js";import"./Page-_eZ9TY5I.js";import"./useMediaQuery-CYqOyAVL.js";import"./Tooltip-Ddm6Pg3U.js";import"./Popper-DnG1iggd.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
