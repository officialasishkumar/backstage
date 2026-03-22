const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-B7RlE11b.js","./iframe-BMq-ZiT3.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-B9h8inFD.js","./useDebounce-DklGwl48.js","./translation-DqMQ4uC8.js","./SearchContext-CfGFVVrG.js","./lodash-C6_451h_.js","./useAsync-CF5ddlT2.js","./useMountedState-Cs8qVXdF.js","./api-BAYoJ8U2.js","./useAnalytics-BK5GAN-T.js","./InputAdornment-CcB5AjsS.js","./formControlState-B6QImCyT.js","./Button-l3CLXg58.js","./TextField-_SDbQqhz.js","./Select-B5R74KVk.js","./index-B9sM2jn7.js","./Popover-BOHa14yd.js","./Modal-BTVEQgEn.js","./Portal-B2V-y6sd.js","./List-DSrfcbCV.js","./ListContext-CPK4kohg.js","./FormLabel-gOslK2v2.js","./InputLabel-DJEEIcp0.js","./useApp-BJgXgSkF.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-BMq-ZiT3.js";import{s as d,M as l}from"./api-BAYoJ8U2.js";import{SearchBar as m}from"./SearchBar-B7RlE11b.js";import{S as h}from"./SearchContext-CfGFVVrG.js";import{S as p}from"./Grid-hHhpklqM.js";import{m as S}from"./makeStyles-DEf-u--3.js";import{w as B}from"./appWrappers-CzymjXER.js";import"./useAnalytics-BK5GAN-T.js";import"./Search-B9h8inFD.js";import"./useDebounce-DklGwl48.js";import"./translation-DqMQ4uC8.js";import"./InputAdornment-CcB5AjsS.js";import"./formControlState-B6QImCyT.js";import"./Button-l3CLXg58.js";import"./TextField-_SDbQqhz.js";import"./Select-B5R74KVk.js";import"./index-B9sM2jn7.js";import"./Popover-BOHa14yd.js";import"./Modal-BTVEQgEn.js";import"./Portal-B2V-y6sd.js";import"./List-DSrfcbCV.js";import"./ListContext-CPK4kohg.js";import"./FormLabel-gOslK2v2.js";import"./InputLabel-DJEEIcp0.js";import"./useApp-BJgXgSkF.js";import"./lodash-C6_451h_.js";import"./useAsync-CF5ddlT2.js";import"./useMountedState-Cs8qVXdF.js";import"./WebStorage-CWRKPj_B.js";import"./componentData-DaTCFJYN.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-dAFNSupn.js";import"./useObservable-DBNCI3Qd.js";import"./useIsomorphicLayoutEffect-Cxykuaei.js";import"./AppThemeApi-ZeM0F4k_.js";import"./BUIProvider-IzMHjHXy.js";import"./openLink-Brx0WDUe.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-B7RlE11b.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
  return <SearchBar />;
};
`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const CustomPlaceholder = () => {
  return <SearchBar placeholder="This is a custom placeholder" />;
};
`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const CustomLabel = () => {
  return <SearchBar label="This is a custom label" />;
};
`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{code:`const Focused = () => {
  return (
    // decision up to adopter, read https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md#no-autofocus
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <SearchBar autoFocus />
  );
};
`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{code:`const WithoutClearButton = () => {
  return <SearchBar clearButton={false} />;
};
`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const CustomStyles = () => {
  const classes = useStyles();
  return (
    <SearchBar
      InputProps={{
        classes: {
          root: classes.searchBarRoot,
          notchedOutline: classes.searchBarOutline,
        },
      }}
    />
  );
};
`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar />;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar placeholder="This is a custom placeholder" />;
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar label="This is a custom label" />;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return (
    // decision up to adopter, read https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md#no-autofocus
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <SearchBar autoFocus />
  );
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar clearButton={false} />;
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  return <SearchBar InputProps={{
    classes: {
      root: classes.searchBarRoot,
      notchedOutline: classes.searchBarOutline
    }
  }} />;
}`,...n.parameters?.docs?.source}}};const tr=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,tr as __namedExportsOrder,ar as default};
