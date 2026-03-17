const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-BnFU2Q4z.js","./iframe-BPa6N3SD.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-BFGGznjM.js","./useDebounce-D9OAl6ih.js","./translation-NSgpoHyv.js","./SearchContext-Ccy3dm38.js","./lodash-guIUsIxV.js","./useAsync-Cqtr7-4i.js","./useMountedState-B69jA6Y1.js","./api-BYihdc0a.js","./useAnalytics-BfzgNjvV.js","./InputAdornment-fjpdPi-_.js","./formControlState-DJhFNtYQ.js","./Button-CY4UCIcT.js","./TextField-BzATeO7-.js","./Select-BDvHXHtE.js","./index-B9sM2jn7.js","./Popover-ccHJV6L0.js","./Modal-B2cUeR8m.js","./Portal-CybimJf6.js","./List-2A5-ge2l.js","./ListContext-BukMsw43.js","./FormLabel-BzRdYdad.js","./InputLabel-aYfiqXiq.js","./useApp-Hpyy33iD.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,Y as u}from"./iframe-BPa6N3SD.js";import{s as d,M as l}from"./api-BYihdc0a.js";import{SearchBar as m}from"./SearchBar-BnFU2Q4z.js";import{S as h}from"./SearchContext-Ccy3dm38.js";import{S as p}from"./Grid-DrfNOwcD.js";import{m as S}from"./makeStyles-BPhOhugX.js";import{w as B}from"./appWrappers-DtPQmIZu.js";import"./Search-BFGGznjM.js";import"./useDebounce-D9OAl6ih.js";import"./translation-NSgpoHyv.js";import"./InputAdornment-fjpdPi-_.js";import"./formControlState-DJhFNtYQ.js";import"./Button-CY4UCIcT.js";import"./TextField-BzATeO7-.js";import"./Select-BDvHXHtE.js";import"./index-B9sM2jn7.js";import"./Popover-ccHJV6L0.js";import"./Modal-B2cUeR8m.js";import"./Portal-CybimJf6.js";import"./List-2A5-ge2l.js";import"./ListContext-BukMsw43.js";import"./FormLabel-BzRdYdad.js";import"./InputLabel-aYfiqXiq.js";import"./useAnalytics-BfzgNjvV.js";import"./useApp-Hpyy33iD.js";import"./lodash-guIUsIxV.js";import"./useAsync-Cqtr7-4i.js";import"./useMountedState-B69jA6Y1.js";import"./useObservable-DsHLmc1s.js";import"./useIsomorphicLayoutEffect-Cd1aE0vk.js";import"./componentData-Cq49ZqHf.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-CCMAs2uM.js";import"./BUIProvider-BLvES4PE.js";import"./openLink-B0Vv0SU7.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-BnFU2Q4z.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
