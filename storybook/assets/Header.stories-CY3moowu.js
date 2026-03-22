import{j as t}from"./iframe-BMq-ZiT3.js";import{H as i}from"./Header-CKYxCRMf.js";import{P as a}from"./Page-Bm_Ph3tA.js";import{H as r}from"./HeaderLabel-DMZjPDJl.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CTKTytpf.js";import"./makeStyles-DEf-u--3.js";import"./Box-BQ5qGVFB.js";import"./styled-CHmBoQLP.js";import"./Grid-hHhpklqM.js";import"./Breadcrumbs-qnN4IsKA.js";import"./index-B9sM2jn7.js";import"./Popover-BOHa14yd.js";import"./Modal-BTVEQgEn.js";import"./Portal-B2V-y6sd.js";import"./List-DSrfcbCV.js";import"./ListContext-CPK4kohg.js";import"./ListItem-BZt49fth.js";import"./Link-IOlKDP1t.js";import"./index-C9NLBdM0.js";import"./lodash-C6_451h_.js";import"./index-dAFNSupn.js";import"./useAnalytics-BK5GAN-T.js";import"./useApp-BJgXgSkF.js";import"./Page-C84zvT_I.js";import"./useMediaQuery-BMBw358W.js";import"./Tooltip-DuxpNUeS.js";import"./Popper-Bm-X7l9u.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
