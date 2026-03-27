import{j as t}from"./iframe-CY6p7HGj.js";import{H as i}from"./Header-sAaq0dsi.js";import{P as a}from"./Page-CutMTW4Z.js";import{H as r}from"./HeaderLabel-_tswO9Mv.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-xbr46cUJ.js";import"./makeStyles-CL5QsbT9.js";import"./Box-B5BACm8K.js";import"./styled-BYQBwEWp.js";import"./Grid-4GdRE04R.js";import"./Breadcrumbs-ChBk45aj.js";import"./index-B9sM2jn7.js";import"./Popover-DOA_iCiu.js";import"./Modal-C_tSa40p.js";import"./Portal-Bt03fp_h.js";import"./List-CTA8BryI.js";import"./ListContext-De_DMnNX.js";import"./ListItem-DNp7a9LI.js";import"./Link-CJtSVBIH.js";import"./index-CpyjIR0Y.js";import"./lodash-CLoGCafV.js";import"./useAnalytics-BNh1pToN.js";import"./useApp-KaslIZzb.js";import"./Page-2t1zCLuv.js";import"./useMediaQuery-MWcNdp_l.js";import"./Tooltip-80DLYrNl.js";import"./Popper-CquYwZgY.js";const R={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
