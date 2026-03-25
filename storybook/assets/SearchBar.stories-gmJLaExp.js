const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-Cd_lH9Oj.js","./iframe-Bc_t70P9.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-CoBCY3-a.js","./useDebounce-By0Q-ScN.js","./translation-BZYLqa5y.js","./SearchContext-KCEl1_Zz.js","./lodash-D5G25FpY.js","./useAsync-wj_PVQkh.js","./useMountedState-P4R8GCuk.js","./api-C2AYqgxU.js","./useAnalytics-B6nhj7pL.js","./InputAdornment-4qPtljm_.js","./formControlState-ZtpbvoxM.js","./Button-drpyHUkO.js","./TextField-BAfl0mrQ.js","./Select-hsw1bJJ9.js","./index-B9sM2jn7.js","./Popover-CgPAMYEH.js","./Modal-BraqcO88.js","./Portal-BfeqdU27.js","./List-CCzJZ__r.js","./ListContext-o__9M1dS.js","./FormLabel-C6Wix--y.js","./InputLabel-DUzAQdhl.js","./useApp--yeriI7g.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-Bc_t70P9.js";import{s as d,M as l}from"./api-C2AYqgxU.js";import{SearchBar as m}from"./SearchBar-Cd_lH9Oj.js";import{S as h}from"./SearchContext-KCEl1_Zz.js";import{S as p}from"./Grid-C636lq8b.js";import{m as S}from"./makeStyles-BFdqtOa2.js";import{w as B}from"./appWrappers-ARkgjiFN.js";import"./useAnalytics-B6nhj7pL.js";import"./Search-CoBCY3-a.js";import"./useDebounce-By0Q-ScN.js";import"./translation-BZYLqa5y.js";import"./InputAdornment-4qPtljm_.js";import"./formControlState-ZtpbvoxM.js";import"./Button-drpyHUkO.js";import"./TextField-BAfl0mrQ.js";import"./Select-hsw1bJJ9.js";import"./index-B9sM2jn7.js";import"./Popover-CgPAMYEH.js";import"./Modal-BraqcO88.js";import"./Portal-BfeqdU27.js";import"./List-CCzJZ__r.js";import"./ListContext-o__9M1dS.js";import"./FormLabel-C6Wix--y.js";import"./InputLabel-DUzAQdhl.js";import"./useApp--yeriI7g.js";import"./lodash-D5G25FpY.js";import"./useAsync-wj_PVQkh.js";import"./useMountedState-P4R8GCuk.js";import"./WebStorage-B1Xqa_0m.js";import"./componentData-B03hUwNt.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BCiK2kdg.js";import"./useObservable-DXFbYSDT.js";import"./useIsomorphicLayoutEffect-CZch1A4s.js";import"./AppThemeApi-D0kZ4W1Y.js";import"./BUIProvider-DlGeXRAl.js";import"./openLink-BJkfNliT.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-Cd_lH9Oj.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
