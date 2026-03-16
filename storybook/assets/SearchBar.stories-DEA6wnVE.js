const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-CqgDEB6O.js","./iframe-J174yHvZ.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-CFsAbkSv.js","./useDebounce-Bldw-3Yb.js","./translation-lufmf16e.js","./SearchContext-CDkLFF2T.js","./lodash-Bh4q8uvP.js","./useAsync-BQNaoBzp.js","./useMountedState-B3OlZ-Af.js","./api-aCvtRpuZ.js","./useAnalytics-josUN2Qr.js","./InputAdornment-DOMNrAVF.js","./formControlState-CX5DOtXH.js","./Button-dQDfJcpZ.js","./TextField-B0OR7H1-.js","./Select-kzvhQsco.js","./index-B9sM2jn7.js","./Popover-BnJNi-J2.js","./Modal-B51QAQQ-.js","./Portal-D1-QTUmg.js","./List-Cp0P4C75.js","./ListContext-PpjyVQKG.js","./FormLabel-DUe3bLnF.js","./InputLabel-CYUoBqNT.js","./useApp-C7RdyiEa.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-PPVm8Dsz.js";import{j as e,W as i}from"./iframe-J174yHvZ.js";import{s as d,M as l}from"./api-aCvtRpuZ.js";import{SearchBar as m}from"./SearchBar-CqgDEB6O.js";import{S as h}from"./SearchContext-CDkLFF2T.js";import{S as p}from"./Grid-BrTJh83O.js";import{m as S}from"./makeStyles-BWgkUCLK.js";import{w as B}from"./appWrappers-D2dOxqm-.js";import"./Search-CFsAbkSv.js";import"./useDebounce-Bldw-3Yb.js";import"./translation-lufmf16e.js";import"./InputAdornment-DOMNrAVF.js";import"./formControlState-CX5DOtXH.js";import"./Button-dQDfJcpZ.js";import"./TextField-B0OR7H1-.js";import"./Select-kzvhQsco.js";import"./index-B9sM2jn7.js";import"./Popover-BnJNi-J2.js";import"./Modal-B51QAQQ-.js";import"./Portal-D1-QTUmg.js";import"./List-Cp0P4C75.js";import"./ListContext-PpjyVQKG.js";import"./FormLabel-DUe3bLnF.js";import"./InputLabel-CYUoBqNT.js";import"./useAnalytics-josUN2Qr.js";import"./useApp-C7RdyiEa.js";import"./lodash-Bh4q8uvP.js";import"./useAsync-BQNaoBzp.js";import"./useMountedState-B3OlZ-Af.js";import"./useObservable-DkYyFvCh.js";import"./useIsomorphicLayoutEffect-DoTR87tR.js";import"./componentData-BQnVVK1I.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BWXGxvNf.js";const ee={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await u(async()=>{const{SearchBar:r}=await import("./SearchBar-CqgDEB6O.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(i,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const re=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,re as __namedExportsOrder,ee as default};
