import{j as t}from"./iframe-UJriCXVl.js";import{H as i}from"./Header-DMogMucB.js";import{P as a}from"./Page-C3CCbPJS.js";import{H as r}from"./HeaderLabel-spx0wF-S.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-CL8_v78c.js";import"./makeStyles-njdNJK3x.js";import"./Box-C1by_hut.js";import"./styled-DSaNCCR9.js";import"./Grid-D6wRU41f.js";import"./Breadcrumbs-DkP-zhi6.js";import"./index-B9sM2jn7.js";import"./Popover-DQ81K7yD.js";import"./Modal-ZPU6ryA9.js";import"./Portal-C6ZN2ix7.js";import"./List-DSt3hz_0.js";import"./ListContext-n1hCo968.js";import"./ListItem-Bgv2V2Pm.js";import"./Link-BQi5yIop.js";import"./index-C960_4ke.js";import"./lodash-DkQ6ZSlp.js";import"./index-BSYbiaN1.js";import"./useAnalytics-CEoER_mo.js";import"./useApp-grD3_ewi.js";import"./Page-R9dApg72.js";import"./useMediaQuery-C5Hz2KM1.js";import"./Tooltip-3VXaZMhT.js";import"./Popper-rQQJdySn.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
