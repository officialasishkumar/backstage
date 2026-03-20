import{j as t}from"./iframe-D9Y8dNt-.js";import{H as i}from"./Header-CkO7MkUE.js";import{P as a}from"./Page-BUZGZ7v9.js";import{H as r}from"./HeaderLabel-DqdEiZ6N.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-Cg0saeAJ.js";import"./makeStyles-BoqHtulH.js";import"./Box-BTwSaOGu.js";import"./styled-BgGpovFM.js";import"./Grid-ta46I7or.js";import"./Breadcrumbs-CH6uULLg.js";import"./index-B9sM2jn7.js";import"./Popover-BKRwm4sM.js";import"./Modal-71NnHFAX.js";import"./Portal-DVsLpO23.js";import"./List-mUIJSmYE.js";import"./ListContext-xNPrKmTk.js";import"./ListItem-CSMdPZ-4.js";import"./Link-CX6fYxme.js";import"./index-BX5foZ21.js";import"./lodash-h7tafzQQ.js";import"./index-C1uQgXas.js";import"./useAnalytics-CX_WCi2s.js";import"./useApp-jISuD9D7.js";import"./Page-VCRYfbSc.js";import"./useMediaQuery-jS43cflm.js";import"./Tooltip-Dx1D_B-m.js";import"./Popper-BSGP2tv0.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
