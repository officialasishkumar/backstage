const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-BY4EVi2s.js","./iframe-BfKy45FJ.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-CY2Z9MKk.js","./useDebounce-CBkWt7er.js","./translation-BzeXWNLR.js","./SearchContext-BO_5c5dV.js","./lodash-Co90uFAP.js","./useAsync-BjmE6g06.js","./useMountedState-DYHhDi6-.js","./api-BM4Oiu5E.js","./useAnalytics-CSNCMzqj.js","./InputAdornment-DmOXlOIl.js","./formControlState-tmDZVvmS.js","./Button-Bec2meKw.js","./TextField-DTv64K9T.js","./Select-C_CmXRox.js","./index-B9sM2jn7.js","./Popover-BQ2AXkI_.js","./Modal-BbTV6vLk.js","./Portal-C8YLi2oE.js","./List-C-G9AVhD.js","./ListContext-DvxZ_Ds9.js","./FormLabel-DQPWulXH.js","./InputLabel-0TTiW0kL.js","./useApp-BixXzEMi.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-BfKy45FJ.js";import{s as d,M as l}from"./api-BM4Oiu5E.js";import{SearchBar as m}from"./SearchBar-BY4EVi2s.js";import{S as h}from"./SearchContext-BO_5c5dV.js";import{S as p}from"./Grid-DMQfW7fm.js";import{m as S}from"./makeStyles-CbJpsKKD.js";import{w as B}from"./appWrappers-BG_bTRVG.js";import"./useAnalytics-CSNCMzqj.js";import"./Search-CY2Z9MKk.js";import"./useDebounce-CBkWt7er.js";import"./translation-BzeXWNLR.js";import"./InputAdornment-DmOXlOIl.js";import"./formControlState-tmDZVvmS.js";import"./Button-Bec2meKw.js";import"./TextField-DTv64K9T.js";import"./Select-C_CmXRox.js";import"./index-B9sM2jn7.js";import"./Popover-BQ2AXkI_.js";import"./Modal-BbTV6vLk.js";import"./Portal-C8YLi2oE.js";import"./List-C-G9AVhD.js";import"./ListContext-DvxZ_Ds9.js";import"./FormLabel-DQPWulXH.js";import"./InputLabel-0TTiW0kL.js";import"./useApp-BixXzEMi.js";import"./lodash-Co90uFAP.js";import"./useAsync-BjmE6g06.js";import"./useMountedState-DYHhDi6-.js";import"./WebStorage-D758RDgT.js";import"./componentData-DUYteM0k.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-iCFn_EoD.js";import"./useObservable-uY-LHa7u.js";import"./useIsomorphicLayoutEffect-Dxa9ALL7.js";import"./AppThemeApi-Du7udc9h.js";import"./BUIProvider-CkXaGfx4.js";import"./openLink-Du3SpVTa.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-BY4EVi2s.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
