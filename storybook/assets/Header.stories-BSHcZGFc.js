import{j as t}from"./iframe-Du1NhnRf.js";import{H as i}from"./Header-C_ey0nbC.js";import{P as a}from"./Page-BFhVUPzg.js";import{H as r}from"./HeaderLabel-PU3GG9qO.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-Be9_-pUt.js";import"./makeStyles-BE8gP3w7.js";import"./Box-BLB9Ozy2.js";import"./styled-ED97p4bf.js";import"./Grid-O7pUBILR.js";import"./Breadcrumbs-BfCQkN15.js";import"./index-B9sM2jn7.js";import"./Popover-C3tQpyPo.js";import"./Modal-C6NV1WST.js";import"./Portal--jynCFKo.js";import"./List-C_-v2Bm5.js";import"./ListContext-CHRkL_NO.js";import"./ListItem-D0I3ixrZ.js";import"./Link-gdoezBv2.js";import"./index-Bepsy_Z3.js";import"./lodash-BSRFOEMl.js";import"./index-Ck8n2OOF.js";import"./useAnalytics-Ms6WfRSX.js";import"./useApp-DfeMOLKR.js";import"./Page-BYkLZ1Vg.js";import"./useMediaQuery-B8-nrfQa.js";import"./Tooltip-DWPPtYcc.js";import"./Popper-C0GxANyG.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
