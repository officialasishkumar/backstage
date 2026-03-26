import{j as t}from"./iframe-qq9LRUBn.js";import{H as i}from"./Header-BJMzgLrM.js";import{P as a}from"./Page-BrnspY4n.js";import{H as r}from"./HeaderLabel-B0VZEjWK.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-Bin5sx7v.js";import"./makeStyles-DysICvYt.js";import"./Box-Crws65o2.js";import"./styled-PVBWrc0h.js";import"./Grid-D9rzqufp.js";import"./Breadcrumbs-1A1WAoFq.js";import"./index-B9sM2jn7.js";import"./Popover-yyr5Crli.js";import"./Modal-D3q_Fx9n.js";import"./Portal-DZBLnBHG.js";import"./List-uoGoLAIL.js";import"./ListContext-BhhEycMB.js";import"./ListItem-5YDEHKiI.js";import"./Link-2oUoFlGt.js";import"./index-CWHolahi.js";import"./lodash-BM8QDDk-.js";import"./index-29ewTlsg.js";import"./useAnalytics-NY-e7y1h.js";import"./useApp-DDQS_rrk.js";import"./Page-Bgdlyhpw.js";import"./useMediaQuery-dQ_-sOEI.js";import"./Tooltip-CzhL_Bru.js";import"./Popper-C-HsXTN5.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
