import{j as t}from"./iframe-BNkUY5HA.js";import{H as i}from"./Header-CQPqED3I.js";import{P as a}from"./Page-D2OtxRup.js";import{H as r}from"./HeaderLabel-Bv6vPvtI.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-BbiWqRE8.js";import"./makeStyles-D1M3cvTC.js";import"./Box-vbuApI20.js";import"./styled-s8twt4bb.js";import"./Grid-T8Evs-aA.js";import"./Breadcrumbs-CLW69czY.js";import"./index-B9sM2jn7.js";import"./Popover-DFC8wnp9.js";import"./Modal-BKtoBYKW.js";import"./Portal-DQf1B4dl.js";import"./List-Dwb4XmJ7.js";import"./ListContext-i5jXFFIx.js";import"./ListItem-BtLTcDqZ.js";import"./Link-CGPyZy0_.js";import"./index-DlAQjt7D.js";import"./lodash-Bpc3Agjj.js";import"./index-DN_6yxbn.js";import"./useAnalytics-dAdITyCa.js";import"./useApp-DK-Jjl42.js";import"./Page-BPdbQlIM.js";import"./useMediaQuery-BZjAG3Ln.js";import"./Tooltip-Dh1IM1oZ.js";import"./Popper-Dy4ol0j8.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
