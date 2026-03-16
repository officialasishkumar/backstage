import{j as t}from"./iframe-J174yHvZ.js";import{H as i}from"./Header-DuIIO166.js";import{P as a}from"./Page-QDgyzcGb.js";import{H as r}from"./HeaderLabel-WmWgTM7p.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CzCYzm0T.js";import"./makeStyles-BWgkUCLK.js";import"./Box-aKh7VtBH.js";import"./styled-N08b-WnT.js";import"./Grid-BrTJh83O.js";import"./Breadcrumbs-BRP6aruy.js";import"./index-B9sM2jn7.js";import"./Popover-BnJNi-J2.js";import"./Modal-B51QAQQ-.js";import"./Portal-D1-QTUmg.js";import"./List-Cp0P4C75.js";import"./ListContext-PpjyVQKG.js";import"./ListItem-Sb5TY6iw.js";import"./Link-A8a46G72.js";import"./index-BpoiheRf.js";import"./lodash-Bh4q8uvP.js";import"./index-BWXGxvNf.js";import"./useAnalytics-josUN2Qr.js";import"./useApp-C7RdyiEa.js";import"./Page-Dtc2Gaak.js";import"./useMediaQuery-XYLAyLTj.js";import"./Tooltip-CSb0gwMa.js";import"./Popper-DvvAk7i2.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
