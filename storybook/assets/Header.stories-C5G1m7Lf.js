import{j as t}from"./iframe-D94_c1Tp.js";import{H as i}from"./Header-Bl2VVai5.js";import{P as a}from"./Page-rwbBNvtx.js";import{H as r}from"./HeaderLabel-fGEhldEJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CB2zCy0P.js";import"./makeStyles-CKqiAwnv.js";import"./Box-Ctg7iXT5.js";import"./styled-DNDrER2-.js";import"./Grid-TMpKdJdj.js";import"./Breadcrumbs-BKUosUBq.js";import"./index-B9sM2jn7.js";import"./Popover-C-fjSaZv.js";import"./Modal-C1uYguhK.js";import"./Portal-D3nAj-4m.js";import"./List-C8oahujg.js";import"./ListContext-D3wa98z0.js";import"./ListItem-BvGB8g16.js";import"./Link-BjGX1L8G.js";import"./index-B5jp4Cu3.js";import"./lodash-AxW3xIV_.js";import"./index-BrZ8YAao.js";import"./useAnalytics-B9rHpaUX.js";import"./useApp-DAxCr7ZI.js";import"./Page-CMhY-hV3.js";import"./useMediaQuery-Bm75bjeH.js";import"./Tooltip-jf0VIgLY.js";import"./Popper-D6Rg0_UH.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
