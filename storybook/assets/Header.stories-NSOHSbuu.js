import{j as t}from"./iframe-D0nL_Agr.js";import{H as i}from"./Header-Cjp79_2G.js";import{P as a}from"./Page-Cf9CTjvq.js";import{H as r}from"./HeaderLabel-DcuemqXx.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-D84VAO4H.js";import"./makeStyles-CEEIeaPc.js";import"./Box-BBeBWSpp.js";import"./styled-ud37gncL.js";import"./Grid-Cj5fjV2g.js";import"./Breadcrumbs-BsqQ8shu.js";import"./index-B9sM2jn7.js";import"./Popover-kGRCMEhn.js";import"./Modal-Ck9qjAe3.js";import"./Portal-CKyiLAPX.js";import"./List-B6josrBo.js";import"./ListContext-Dwy-3B6k.js";import"./ListItem-BvZ21ujD.js";import"./Link-ChRPIsYf.js";import"./index-DZW9dhqm.js";import"./lodash-C8hrBFZO.js";import"./index-C_CdmF_Y.js";import"./useAnalytics-DHjT-X03.js";import"./useApp-D1uJ25an.js";import"./Page-Bk5MCW2k.js";import"./useMediaQuery-NqjKYLwT.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
