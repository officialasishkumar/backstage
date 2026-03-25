import{j as t}from"./iframe-Bc_t70P9.js";import{H as i}from"./Header-DdeCdZBc.js";import{P as a}from"./Page-Bs_O6tVe.js";import{H as r}from"./HeaderLabel-BxYLnF-c.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-DsMwJdPN.js";import"./makeStyles-BFdqtOa2.js";import"./Box-DIBB98s_.js";import"./styled-Dt6lPGno.js";import"./Grid-C636lq8b.js";import"./Breadcrumbs-CbLI6gZX.js";import"./index-B9sM2jn7.js";import"./Popover-CgPAMYEH.js";import"./Modal-BraqcO88.js";import"./Portal-BfeqdU27.js";import"./List-CCzJZ__r.js";import"./ListContext-o__9M1dS.js";import"./ListItem-DX5nOJCZ.js";import"./Link-C9qCwjy4.js";import"./index-eprtpxlx.js";import"./lodash-D5G25FpY.js";import"./index-BCiK2kdg.js";import"./useAnalytics-B6nhj7pL.js";import"./useApp--yeriI7g.js";import"./Page-C35fLpaJ.js";import"./useMediaQuery-RrPptwYs.js";import"./Tooltip-C9G2JH2w.js";import"./Popper-YDAw3qJA.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
