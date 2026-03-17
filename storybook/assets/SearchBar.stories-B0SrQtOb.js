const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-B8T_qWfe.js","./iframe-AYVAkLn2.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-BUe3uPyS.js","./useDebounce-Cobgomse.js","./translation-Csuw9D6D.js","./SearchContext-CeF0_K1I.js","./lodash-K-yyiTG_.js","./useAsync-vKq7afUQ.js","./useMountedState-DCewMNXE.js","./api-BGpow7dR.js","./useAnalytics-BDuNGi_L.js","./InputAdornment-CtjTSDQs.js","./formControlState-CmMZ7Nm0.js","./Button-ChbwWH3e.js","./TextField-B1j-40c1.js","./Select-CoXzv3bu.js","./index-B9sM2jn7.js","./Popover-I1yJX9mq.js","./Modal-DAoau9we.js","./Portal-BKv0oT2g.js","./List-CeeewVqa.js","./ListContext-BEmmok3M.js","./FormLabel-LcgWu4Dd.js","./InputLabel-N-Z8TbgB.js","./useApp-BmNX3I2k.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-AYVAkLn2.js";import{s as d,M as l}from"./api-BGpow7dR.js";import{SearchBar as m}from"./SearchBar-B8T_qWfe.js";import{S as h}from"./SearchContext-CeF0_K1I.js";import{S as p}from"./Grid-ByzVJJnk.js";import{m as S}from"./makeStyles-DiUzlV7t.js";import{w as B}from"./appWrappers-B5DuOoBi.js";import"./useAnalytics-BDuNGi_L.js";import"./Search-BUe3uPyS.js";import"./useDebounce-Cobgomse.js";import"./translation-Csuw9D6D.js";import"./InputAdornment-CtjTSDQs.js";import"./formControlState-CmMZ7Nm0.js";import"./Button-ChbwWH3e.js";import"./TextField-B1j-40c1.js";import"./Select-CoXzv3bu.js";import"./index-B9sM2jn7.js";import"./Popover-I1yJX9mq.js";import"./Modal-DAoau9we.js";import"./Portal-BKv0oT2g.js";import"./List-CeeewVqa.js";import"./ListContext-BEmmok3M.js";import"./FormLabel-LcgWu4Dd.js";import"./InputLabel-N-Z8TbgB.js";import"./useApp-BmNX3I2k.js";import"./lodash-K-yyiTG_.js";import"./useAsync-vKq7afUQ.js";import"./useMountedState-DCewMNXE.js";import"./WebStorage-D-oUViat.js";import"./componentData-0L54AS5C.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-B51ZAw-h.js";import"./useObservable-DXQcsefc.js";import"./useIsomorphicLayoutEffect-DwKCTKAX.js";import"./AppThemeApi-CL6iFQID.js";import"./BUIProvider-DrYmLl9u.js";import"./openLink-LeSehfZZ.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-B8T_qWfe.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
