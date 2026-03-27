import{j as t}from"./iframe-BzEx-mzh.js";import{H as i}from"./Header-CkY0zyCj.js";import{P as a}from"./Page-DGUrwLpd.js";import{H as r}from"./HeaderLabel-CIRRxdb2.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-9E2N72TU.js";import"./makeStyles-KrlZ5-Ut.js";import"./Box-BtrO8NUR.js";import"./styled-BC6E7X8H.js";import"./Grid-CQ4TX_Z5.js";import"./Breadcrumbs-C3KYcpF2.js";import"./index-B9sM2jn7.js";import"./Popover-DDK5Xqd9.js";import"./Modal-Gk5f0e77.js";import"./Portal-BVejhVwL.js";import"./List-CuppT92S.js";import"./ListContext-CyskI8TW.js";import"./ListItem-C_KvzjzW.js";import"./Link-C3sIO6fl.js";import"./index-DixrjhsO.js";import"./lodash-Zfy8DO4K.js";import"./useAnalytics-CqkzYMRO.js";import"./useApp-X2JlXEhZ.js";import"./Page-B9dmLOjn.js";import"./useMediaQuery-CWt8aWiL.js";import"./Tooltip-Co7RbJ52.js";import"./Popper-DIuKqKML.js";const R={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
