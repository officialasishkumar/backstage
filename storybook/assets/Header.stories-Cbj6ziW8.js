import{j as t}from"./iframe-LAkIJzV-.js";import{H as i}from"./Header-Cj8OpJRi.js";import{P as a}from"./Page-Dva6iyz7.js";import{H as r}from"./HeaderLabel-Bcd6JOxU.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-DWZlE-Pi.js";import"./makeStyles-COYpSGPM.js";import"./Box-B6_OswLq.js";import"./styled-qZchnbXI.js";import"./Grid-D12OHFOV.js";import"./Breadcrumbs-CkCwNOnf.js";import"./index-B9sM2jn7.js";import"./Popover-Ba6fEJx1.js";import"./Modal-CLKqV01n.js";import"./Portal-B_B_DiH0.js";import"./List-BdeCMfRK.js";import"./ListContext-g5fUsEsB.js";import"./ListItem-Dotf5yp5.js";import"./Link-CDvyJzZJ.js";import"./index-BEnojdoE.js";import"./lodash-DYu-YCIx.js";import"./index-DacU1fu4.js";import"./useAnalytics-D1LuewZq.js";import"./useApp-Bblngibf.js";import"./Page-Db8eBOUe.js";import"./useMediaQuery-BGnta8dA.js";import"./Tooltip-BYvgz8vj.js";import"./Popper-CrI57b7o.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
