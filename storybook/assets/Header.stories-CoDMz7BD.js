import{j as t}from"./iframe-DIo-SVbu.js";import{H as i}from"./Header-DDp-HtJo.js";import{P as a}from"./Page-CPj5VOXK.js";import{H as r}from"./HeaderLabel-pCo62V0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-j69xXCIi.js";import"./makeStyles-DQU7Dv0P.js";import"./Box-DSdsOjrk.js";import"./styled-BsApB3tE.js";import"./Grid-CQTc9qXc.js";import"./Breadcrumbs-BWg1DCWA.js";import"./index-B9sM2jn7.js";import"./Popover-CgcEC2FX.js";import"./Modal-D5veMRiH.js";import"./Portal-CvYRjmi_.js";import"./List-DIbhVy0B.js";import"./ListContext-maWUp7BP.js";import"./ListItem-B48sv7Dp.js";import"./Link-nV2wBi6-.js";import"./index-BWhcP_hn.js";import"./lodash-CorumTZI.js";import"./useAnalytics-Dz8yJH5J.js";import"./useApp-DoXX_S3p.js";import"./Page-D4AJVexu.js";import"./useMediaQuery-DSyBS49A.js";import"./Tooltip-RSYyjwWd.js";import"./Popper-Mh-qpcao.js";const R={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
