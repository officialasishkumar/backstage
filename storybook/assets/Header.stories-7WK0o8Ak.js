import{j as t}from"./iframe-BfKy45FJ.js";import{H as i}from"./Header-CdP4tXbM.js";import{P as a}from"./Page-D9BO8hTE.js";import{H as r}from"./HeaderLabel-BJy6CPEe.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-lsyoJL4X.js";import"./makeStyles-CbJpsKKD.js";import"./Box-Chh9ILCj.js";import"./styled-Cz7jZRk5.js";import"./Grid-DMQfW7fm.js";import"./Breadcrumbs-DooKtqpR.js";import"./index-B9sM2jn7.js";import"./Popover-BQ2AXkI_.js";import"./Modal-BbTV6vLk.js";import"./Portal-C8YLi2oE.js";import"./List-C-G9AVhD.js";import"./ListContext-DvxZ_Ds9.js";import"./ListItem-DgDd4GZe.js";import"./Link-C9foY-1f.js";import"./index-DYvGN8yU.js";import"./lodash-Co90uFAP.js";import"./index-iCFn_EoD.js";import"./useAnalytics-CSNCMzqj.js";import"./useApp-BixXzEMi.js";import"./Page-Bolk4mfZ.js";import"./useMediaQuery-Bsdrmyjs.js";import"./Tooltip-DoZw0snM.js";import"./Popper-DDZAuDQP.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
