import{j as t}from"./iframe-2DflYetR.js";import{H as i}from"./Header-DMyE2x-F.js";import{P as a}from"./Page-D4KlRFbh.js";import{H as r}from"./HeaderLabel-DfI9z5a2.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CA3mrpnw.js";import"./makeStyles-B-9IZuRv.js";import"./Box-Bu7Xw873.js";import"./styled-DLQ9JpXT.js";import"./Grid-DxUCjvP_.js";import"./Breadcrumbs-DB3arfWb.js";import"./index-B9sM2jn7.js";import"./Popover-BMF1NX8p.js";import"./Modal-BdEpWCwy.js";import"./Portal-DXJMcYAV.js";import"./List-Csw5dc-q.js";import"./ListContext-PWrJkRaZ.js";import"./ListItem-DUio0yug.js";import"./Link-BPkxBY7v.js";import"./index-DTvBFuUD.js";import"./lodash-BK0iUhmk.js";import"./index-DAw4AdQ5.js";import"./useAnalytics-D8PbdUhp.js";import"./useApp-YlOXCksD.js";import"./Page-BZ2fb4cC.js";import"./useMediaQuery-C6NHjMRx.js";import"./Tooltip-D6zoDIUy.js";import"./Popper-ClGkD4o6.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
