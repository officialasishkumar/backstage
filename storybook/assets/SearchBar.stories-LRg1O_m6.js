const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-DJEqF-mY.js","./iframe-DbF3iEvf.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-D4pC9zDM.js","./useDebounce-CIpRPOov.js","./translation-DtxKlnPr.js","./SearchContext-BIX8hsyG.js","./lodash-C-McvsBm.js","./useAsync-CMcTC1HS.js","./useMountedState-ETLXQmd3.js","./api-CF4rG4kv.js","./useAnalytics-CMjFjhus.js","./InputAdornment-Ccbpu74Y.js","./formControlState-BvqBitRq.js","./Button-r3opztB8.js","./TextField-QTsIaCUy.js","./Select-In3L3hho.js","./index-B9sM2jn7.js","./Popover-vZsHaVBW.js","./Modal-B0_egNjV.js","./Portal-hbPr6RYI.js","./List-jjp85zn8.js","./ListContext-CAU0vplw.js","./FormLabel-DwcIM_V2.js","./InputLabel-Cd0fJMlZ.js","./useApp-DSs-Xjlm.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,a2 as u}from"./iframe-DbF3iEvf.js";import{s as d,M as l}from"./api-CF4rG4kv.js";import{SearchBar as m}from"./SearchBar-DJEqF-mY.js";import{S as h}from"./SearchContext-BIX8hsyG.js";import{S as p}from"./Grid-CVypMrLh.js";import{m as S}from"./makeStyles-Ddzw_WnF.js";import{w as B}from"./appWrappers-dpVZ4jgv.js";import"./useAnalytics-CMjFjhus.js";import"./Search-D4pC9zDM.js";import"./useDebounce-CIpRPOov.js";import"./translation-DtxKlnPr.js";import"./InputAdornment-Ccbpu74Y.js";import"./formControlState-BvqBitRq.js";import"./Button-r3opztB8.js";import"./TextField-QTsIaCUy.js";import"./Select-In3L3hho.js";import"./index-B9sM2jn7.js";import"./Popover-vZsHaVBW.js";import"./Modal-B0_egNjV.js";import"./Portal-hbPr6RYI.js";import"./List-jjp85zn8.js";import"./ListContext-CAU0vplw.js";import"./FormLabel-DwcIM_V2.js";import"./InputLabel-Cd0fJMlZ.js";import"./useApp-DSs-Xjlm.js";import"./lodash-C-McvsBm.js";import"./useAsync-CMcTC1HS.js";import"./useMountedState-ETLXQmd3.js";import"./WebStorage-DLpT93Kd.js";import"./componentData-FQ-FhVVe.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CvP8xTKq.js";import"./useIsomorphicLayoutEffect-BnEIHzDv.js";import"./AppThemeApi-DumGAAI-.js";import"./BUIProvider-BB5XGcE9.js";import"./openLink-B2ZDb-Dy.js";const oe={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-DJEqF-mY.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const ae=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,ae as __namedExportsOrder,oe as default};
