import{j as t}from"./iframe-hebBxzMS.js";import{H as i}from"./Header-WV1VkPm0.js";import{P as a}from"./Page-Cj9P8o5P.js";import{H as r}from"./HeaderLabel-C_sPSxBG.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-RA3_OGST.js";import"./makeStyles-BuKfj6eo.js";import"./Box-CsMG6Ed5.js";import"./styled-eU63C66P.js";import"./Grid-DR9XAO4b.js";import"./Breadcrumbs-ByEnK0Jx.js";import"./index-B9sM2jn7.js";import"./Popover-BcCigjgZ.js";import"./Modal-D8j_BW28.js";import"./Portal-DVg2kjtj.js";import"./List-B-7FtQra.js";import"./ListContext-vEx_JeiU.js";import"./ListItem-B2Xdmbv7.js";import"./Link-Dwe8WTS_.js";import"./index-CF8ZGQqn.js";import"./lodash-Dh4D4KP7.js";import"./useAnalytics-DnJagaLH.js";import"./useApp-Di7SCwol.js";import"./Page-zjQLf-nB.js";import"./useMediaQuery-DEkKN8dk.js";import"./Tooltip-wRXpjfve.js";import"./Popper-Nu0-WiMx.js";const R={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
