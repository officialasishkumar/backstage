import{j as t}from"./iframe-CymjdxqK.js";import{H as i}from"./Header-nkyJw-YW.js";import{P as a}from"./Page-DFjVKgYE.js";import{H as r}from"./HeaderLabel-BEC68Pb7.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BprU2-6p.js";import"./makeStyles-BMXXhCWz.js";import"./Box-D8DjMEPG.js";import"./styled-DoCAq6vJ.js";import"./Grid-Dr2ljIC_.js";import"./Breadcrumbs-NoV0nL2z.js";import"./index-B9sM2jn7.js";import"./Popover-Dv66xU2X.js";import"./Modal-BEQjsWT4.js";import"./Portal-D2IDO7m8.js";import"./List-Dvm8L6Yt.js";import"./ListContext-uUolaWCt.js";import"./ListItem-CWxGd75q.js";import"./Link-D1VqSDh4.js";import"./index-BQPBeHo1.js";import"./lodash-DJdMBrbC.js";import"./index-BW-EXu7a.js";import"./useAnalytics-Du0UI_Xd.js";import"./useApp-uGimLtOi.js";import"./Page-XJW9BGSO.js";import"./useMediaQuery-CU0cqV-i.js";import"./Tooltip-DLsEhiTi.js";import"./Popper-BN6j66__.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
