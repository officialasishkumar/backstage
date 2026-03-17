const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-DWrYew5_.js","./iframe-w9ggzxzz.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-BNH0N7fI.js","./useDebounce-BrXsRQtN.js","./translation-W9fqopSF.js","./SearchContext-BjHieXVN.js","./lodash-B7vYRLmK.js","./useAsync-DSDwJ_45.js","./useMountedState-RVVEE9Da.js","./api-D8bBgW-Z.js","./useAnalytics-BaEnm4t3.js","./InputAdornment-CC3Ixb7-.js","./formControlState-BkCIGPlG.js","./Button-oFPiOElT.js","./TextField-qarNN_Fh.js","./Select-Y6WXSVDa.js","./index-B9sM2jn7.js","./Popover-DYRofrki.js","./Modal-CbdXoRek.js","./Portal-C7nXiunF.js","./List-eHfcnFSH.js","./ListContext-iSayvcxx.js","./FormLabel-DUKHmat3.js","./InputLabel-DlNMDnSh.js","./useApp-D1hU9Nxa.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,Y as u}from"./iframe-w9ggzxzz.js";import{s as d,M as l}from"./api-D8bBgW-Z.js";import{SearchBar as m}from"./SearchBar-DWrYew5_.js";import{S as h}from"./SearchContext-BjHieXVN.js";import{S as p}from"./Grid-DTFxJLQY.js";import{m as S}from"./makeStyles-z1EIRT_g.js";import{w as B}from"./appWrappers-BAQfRbE-.js";import"./Search-BNH0N7fI.js";import"./useDebounce-BrXsRQtN.js";import"./translation-W9fqopSF.js";import"./InputAdornment-CC3Ixb7-.js";import"./formControlState-BkCIGPlG.js";import"./Button-oFPiOElT.js";import"./TextField-qarNN_Fh.js";import"./Select-Y6WXSVDa.js";import"./index-B9sM2jn7.js";import"./Popover-DYRofrki.js";import"./Modal-CbdXoRek.js";import"./Portal-C7nXiunF.js";import"./List-eHfcnFSH.js";import"./ListContext-iSayvcxx.js";import"./FormLabel-DUKHmat3.js";import"./InputLabel-DlNMDnSh.js";import"./useAnalytics-BaEnm4t3.js";import"./useApp-D1hU9Nxa.js";import"./lodash-B7vYRLmK.js";import"./useAsync-DSDwJ_45.js";import"./useMountedState-RVVEE9Da.js";import"./useObservable-DiihgjLj.js";import"./useIsomorphicLayoutEffect-DzCoblkv.js";import"./componentData-DYkgPOGz.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BvT0XEY0.js";import"./BUIProvider-C_WciRRp.js";import"./openLink-CDFTvsp6.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-DWrYew5_.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
