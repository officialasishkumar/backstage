import{j as t}from"./iframe-DbF3iEvf.js";import{H as i}from"./Header-BfklWcDY.js";import{P as a}from"./Page-CQP3Oyc-.js";import{H as r}from"./HeaderLabel-CJ2FeO3z.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-teo4O8Od.js";import"./makeStyles-Ddzw_WnF.js";import"./Box-k_BPQh5L.js";import"./styled-BqEwKtoO.js";import"./Grid-CVypMrLh.js";import"./Breadcrumbs-vYvTHLDl.js";import"./index-B9sM2jn7.js";import"./Popover-vZsHaVBW.js";import"./Modal-B0_egNjV.js";import"./Portal-hbPr6RYI.js";import"./List-jjp85zn8.js";import"./ListContext-CAU0vplw.js";import"./ListItem-BXU8AvHT.js";import"./Link-BOVc4nYr.js";import"./index-D0xg6uah.js";import"./lodash-C-McvsBm.js";import"./useAnalytics-CMjFjhus.js";import"./useApp-DSs-Xjlm.js";import"./Page-DMWn2weo.js";import"./useMediaQuery-C7oSbTbA.js";import"./Tooltip-CJhXFAid.js";import"./Popper-C413ylWX.js";const R={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
