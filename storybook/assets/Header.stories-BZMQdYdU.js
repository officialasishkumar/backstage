import{j as t}from"./iframe-wkUvrVVn.js";import{H as i}from"./Header-CucLa6eg.js";import{P as a}from"./Page-DSaW6uwC.js";import{H as r}from"./HeaderLabel-CqdPoEvr.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-uLTO_I6G.js";import"./makeStyles-D6j-HRPe.js";import"./Box-BPqemAJi.js";import"./styled-CLhLDE62.js";import"./Grid-Bu0FSGfF.js";import"./Breadcrumbs-BjgJK5-e.js";import"./index-B9sM2jn7.js";import"./Popover-DoK3K718.js";import"./Modal-DSgOyAhr.js";import"./Portal-dimu2vGp.js";import"./List-LUFk3ZfG.js";import"./ListContext-BPCBYmKN.js";import"./ListItem-BIrwQOB_.js";import"./Link-DO2my6Ck.js";import"./index-VlsBe5q3.js";import"./lodash-DRqfpWl4.js";import"./index-B5HVCV75.js";import"./useAnalytics-Ch7wjcGI.js";import"./useApp-3vTA-W2x.js";import"./Page-DTpFzk5i.js";import"./useMediaQuery-BIN8STuc.js";import"./Tooltip-B3XA3GY2.js";import"./Popper-D_StAOcj.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
