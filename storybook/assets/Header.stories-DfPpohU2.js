import{j as t}from"./iframe-CgH1me10.js";import{H as i}from"./Header-DIRamgi_.js";import{P as a}from"./Page-i0VPk75V.js";import{H as r}from"./HeaderLabel-DInYLaOe.js";import"./preload-helper-PPVm8Dsz.js";import"./Helmet-DeBDzdzx.js";import"./makeStyles-DDQHR9TF.js";import"./Box-DjOcM7Al.js";import"./styled-HKXiKRGh.js";import"./Grid-JeE2fzwn.js";import"./Breadcrumbs-BDp-NDCx.js";import"./index-B9sM2jn7.js";import"./Popover-C-sXbnMV.js";import"./Modal-C3QCofUv.js";import"./Portal-BSxkgYw7.js";import"./List-BhhAC_dw.js";import"./ListContext-D3q8nz-e.js";import"./ListItem-jQhSzGlz.js";import"./Link-CyQAlTHt.js";import"./index-BEl4_Iip.js";import"./lodash-DA8KCwpH.js";import"./index-DAoZozbk.js";import"./useAnalytics-B6XkFFfD.js";import"./useApp-SFhNxW0M.js";import"./Page-B9driqAF.js";import"./useMediaQuery-BJFoZbIy.js";import"./Tooltip-CuoRQ5pr.js";import"./Popper-Beqw8ii1.js";const S={title:"Layout/Header",component:i,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}},tags:["!manifest"]},p=t.jsxs(t.Fragment,{children:[t.jsx(r,{label:"Owner",value:"players"}),t.jsx(r,{label:"Lifecycle",value:"Production"}),t.jsx(r,{label:"Tier",value:"Level 1"})]}),e=s=>{const{type:o}=s;return t.jsx(a,{themeId:o,children:t.jsx(i,{...s,children:p})})};e.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};e.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
