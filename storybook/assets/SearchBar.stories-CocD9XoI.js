const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-DJgjo4zM.js","./iframe-Bu39PmLp.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-CWfN5oH6.js","./useDebounce-DsyNjqGi.js","./translation-D82dcTP_.js","./SearchContext-BjBSjWEq.js","./lodash-BP1SMfTv.js","./useAsync-Aa2CWgcM.js","./useMountedState-a3-IIk52.js","./api-B2Re5sXq.js","./useAnalytics-WQSTtdKZ.js","./InputAdornment-DtG38ql4.js","./formControlState-pfeMig1Q.js","./Button-DUzol8xs.js","./TextField-DlXMAdIB.js","./Select-CeOsBVc8.js","./index-B9sM2jn7.js","./Popover-CgXZkw0s.js","./Modal-zPxLU0J0.js","./Portal-Cnh7PMtZ.js","./List-plozWRZ-.js","./ListContext-U4JS0URp.js","./FormLabel-DAW6Jws-.js","./InputLabel-CEy0mPJY.js","./useApp-CJiRzn9p.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,X as u}from"./iframe-Bu39PmLp.js";import{s as d,M as l}from"./api-B2Re5sXq.js";import{SearchBar as m}from"./SearchBar-DJgjo4zM.js";import{S as h}from"./SearchContext-BjBSjWEq.js";import{S as p}from"./Grid-88_alP5V.js";import{m as S}from"./makeStyles-BF75o2aM.js";import{w as B}from"./appWrappers-Bxwu6RHO.js";import"./useAnalytics-WQSTtdKZ.js";import"./Search-CWfN5oH6.js";import"./useDebounce-DsyNjqGi.js";import"./translation-D82dcTP_.js";import"./InputAdornment-DtG38ql4.js";import"./formControlState-pfeMig1Q.js";import"./Button-DUzol8xs.js";import"./TextField-DlXMAdIB.js";import"./Select-CeOsBVc8.js";import"./index-B9sM2jn7.js";import"./Popover-CgXZkw0s.js";import"./Modal-zPxLU0J0.js";import"./Portal-Cnh7PMtZ.js";import"./List-plozWRZ-.js";import"./ListContext-U4JS0URp.js";import"./FormLabel-DAW6Jws-.js";import"./InputLabel-CEy0mPJY.js";import"./useApp-CJiRzn9p.js";import"./lodash-BP1SMfTv.js";import"./useAsync-Aa2CWgcM.js";import"./useMountedState-a3-IIk52.js";import"./useObservable-CQuFZjxf.js";import"./useIsomorphicLayoutEffect-6ZDZN3qg.js";import"./componentData-ClXDGabG.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-B4-sCELz.js";import"./BUIProvider-fqCixX3i.js";import"./openLink-CfoeYFVv.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-DJgjo4zM.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,oe as __namedExportsOrder,se as default};
