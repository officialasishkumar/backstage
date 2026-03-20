import{j as t}from"./iframe-BPVPwWzn.js";import{H as i}from"./Header-BQShpNUP.js";import{P as a}from"./Page-CbQeDC-5.js";import{H as r}from"./HeaderLabel-DkhxG9en.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CchfkSxN.js";import"./makeStyles-DL3RdYST.js";import"./Box-C9ZUlUpW.js";import"./styled-CYuGUrVD.js";import"./Grid-CXiQnKoR.js";import"./Breadcrumbs-BShyX8wB.js";import"./index-B9sM2jn7.js";import"./Popover-T_njOncE.js";import"./Modal-Bpx44tXR.js";import"./Portal-AbzTFUuq.js";import"./List-cqhA6xzX.js";import"./ListContext-DHM8dB5v.js";import"./ListItem-CXQlml-U.js";import"./Link-BrnKsdBt.js";import"./index-DRNmOV-A.js";import"./lodash-Da7OBv6p.js";import"./index-ClPDwBGK.js";import"./useAnalytics-DVBaEwk3.js";import"./useApp-C5rsfXEx.js";import"./Page-B-mLUE9M.js";import"./useMediaQuery-BgdO30di.js";import"./Tooltip-D-5NYnGf.js";import"./Popper-D0Hr6Gkt.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
