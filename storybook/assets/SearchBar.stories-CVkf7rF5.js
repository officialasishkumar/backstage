const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-4lbiFSRB.js","./iframe-D7TnLv8A.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-HbiZPxaS.js","./useDebounce-CrD8iLHM.js","./translation-BQ6sB8rw.js","./SearchContext-BJC5cRrY.js","./lodash-Dr039tkm.js","./useAsync-BF16R5Yc.js","./useMountedState-UFQmEtok.js","./api-Bck3e3eh.js","./useAnalytics-AC0VHxKR.js","./InputAdornment-DabAGtNG.js","./formControlState-DfT0zPdM.js","./Button-CE3035Es.js","./TextField-0Ea0yX-W.js","./Select-DAo5xCK3.js","./index-B9sM2jn7.js","./Popover-DquKNcU4.js","./Modal-C7Rg7DHg.js","./Portal-DYix9A2M.js","./List-L4X_xhy8.js","./ListContext-UWf6-YWs.js","./FormLabel-BAFdOtGL.js","./InputLabel-BPg87a4U.js","./useApp-CHEBI3qn.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-PPVm8Dsz.js";import{j as e,W as i}from"./iframe-D7TnLv8A.js";import{s as d,M as l}from"./api-Bck3e3eh.js";import{SearchBar as m}from"./SearchBar-4lbiFSRB.js";import{S as h}from"./SearchContext-BJC5cRrY.js";import{S as p}from"./Grid-iTO1Arnu.js";import{m as S}from"./makeStyles-BuB2Q7_j.js";import{w as B}from"./appWrappers-CzDE8X0z.js";import"./Search-HbiZPxaS.js";import"./useDebounce-CrD8iLHM.js";import"./translation-BQ6sB8rw.js";import"./InputAdornment-DabAGtNG.js";import"./formControlState-DfT0zPdM.js";import"./Button-CE3035Es.js";import"./TextField-0Ea0yX-W.js";import"./Select-DAo5xCK3.js";import"./index-B9sM2jn7.js";import"./Popover-DquKNcU4.js";import"./Modal-C7Rg7DHg.js";import"./Portal-DYix9A2M.js";import"./List-L4X_xhy8.js";import"./ListContext-UWf6-YWs.js";import"./FormLabel-BAFdOtGL.js";import"./InputLabel-BPg87a4U.js";import"./useAnalytics-AC0VHxKR.js";import"./useApp-CHEBI3qn.js";import"./lodash-Dr039tkm.js";import"./useAsync-BF16R5Yc.js";import"./useMountedState-UFQmEtok.js";import"./useObservable-ynqU1pYv.js";import"./useIsomorphicLayoutEffect-mwHv5vMT.js";import"./componentData-CKizbvzi.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-MOf-tiv5.js";const ee={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await u(async()=>{const{SearchBar:r}=await import("./SearchBar-4lbiFSRB.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(i,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
