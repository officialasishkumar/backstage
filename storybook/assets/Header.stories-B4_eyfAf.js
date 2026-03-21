import{j as t}from"./iframe-CTqAPkqN.js";import{H as i}from"./Header-BWXNoUdo.js";import{P as a}from"./Page-BDffdbjw.js";import{H as r}from"./HeaderLabel-BSD72ycz.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-PfqMgH96.js";import"./makeStyles-DI4Xn9jK.js";import"./Box-CuoYE_bm.js";import"./styled-Dr66SpKq.js";import"./Grid-BTPqc0jk.js";import"./Breadcrumbs-BfuCMv1o.js";import"./index-B9sM2jn7.js";import"./Popover-B8fnCvZs.js";import"./Modal-Cvof-CyN.js";import"./Portal-CEy1WTiJ.js";import"./List-yUGuy5mk.js";import"./ListContext-rz4ELcuk.js";import"./ListItem-CSI66Z0A.js";import"./Link-DXOqSfzJ.js";import"./index-DK50nKwc.js";import"./lodash-BfbSSurr.js";import"./index-Bo89h57h.js";import"./useAnalytics-VN6Gc-5g.js";import"./useApp-4ydDLhug.js";import"./Page-MvEVRY4h.js";import"./useMediaQuery-CCtxSAwF.js";import"./Tooltip-DnGLXgIK.js";import"./Popper-CYb-6gU9.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
