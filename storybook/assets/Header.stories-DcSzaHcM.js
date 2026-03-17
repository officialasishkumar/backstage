import{j as t}from"./iframe-DsZtuuTR.js";import{H as i}from"./Header-d0d9k3EU.js";import{P as a}from"./Page-DAmKK2HN.js";import{H as r}from"./HeaderLabel-DlKEUe2V.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-DMCutN_s.js";import"./makeStyles-41TQbijK.js";import"./Box-3ttDjC-9.js";import"./styled-bk62jvDu.js";import"./Grid-CKFEL6Ss.js";import"./Breadcrumbs--eYGPXU5.js";import"./index-B9sM2jn7.js";import"./Popover-CRqXxO63.js";import"./Modal-XrZoVZ0I.js";import"./Portal-DR4gT_uM.js";import"./List-C6QPnNfT.js";import"./ListContext-DcgBfIsd.js";import"./ListItem-BwEWPFK6.js";import"./Link-DjvaMwo_.js";import"./index-Bqn1XTYQ.js";import"./lodash-BypptKGH.js";import"./index-uH1xIlYD.js";import"./useAnalytics-YS7OZ-uO.js";import"./useApp-bTnD5DHs.js";import"./Page-BS-O74kW.js";import"./useMediaQuery-tEJSyBZN.js";import"./Tooltip-BnnSJaTg.js";import"./Popper-DOHUvbmz.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
