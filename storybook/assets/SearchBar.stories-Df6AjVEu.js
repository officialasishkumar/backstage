const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-dUiqLBTI.js","./iframe-BZrpTwFW.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-SM0jr0vS.js","./useDebounce-BTKTXYiC.js","./translation-D2P18H_E.js","./SearchContext-I7nH_yhO.js","./lodash-lol44oGD.js","./useAsync-BpVftW-X.js","./useMountedState-DxKyG1Ea.js","./api-Crs085T9.js","./useAnalytics-CMcmWSHW.js","./InputAdornment-SCVWlz01.js","./formControlState-DP5wd4ND.js","./Button-DmFnibN9.js","./TextField-g1nFPuuA.js","./Select-CbyFAWug.js","./index-B9sM2jn7.js","./Popover-BIXbtjFD.js","./Modal-Bug_1Z_P.js","./Portal-BMtcgUVu.js","./List-CNsgrFh7.js","./ListContext-_XocguZm.js","./FormLabel-bRNETQbY.js","./InputLabel-DxkkoQ-B.js","./useApp-4LCqZN-N.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-BZrpTwFW.js";import{s as d,M as l}from"./api-Crs085T9.js";import{SearchBar as m}from"./SearchBar-dUiqLBTI.js";import{S as h}from"./SearchContext-I7nH_yhO.js";import{S as p}from"./Grid-OEz6aKRJ.js";import{m as S}from"./makeStyles-CIE8BXXT.js";import{w as B}from"./appWrappers-CNh55iAq.js";import"./useAnalytics-CMcmWSHW.js";import"./Search-SM0jr0vS.js";import"./useDebounce-BTKTXYiC.js";import"./translation-D2P18H_E.js";import"./InputAdornment-SCVWlz01.js";import"./formControlState-DP5wd4ND.js";import"./Button-DmFnibN9.js";import"./TextField-g1nFPuuA.js";import"./Select-CbyFAWug.js";import"./index-B9sM2jn7.js";import"./Popover-BIXbtjFD.js";import"./Modal-Bug_1Z_P.js";import"./Portal-BMtcgUVu.js";import"./List-CNsgrFh7.js";import"./ListContext-_XocguZm.js";import"./FormLabel-bRNETQbY.js";import"./InputLabel-DxkkoQ-B.js";import"./useApp-4LCqZN-N.js";import"./lodash-lol44oGD.js";import"./useAsync-BpVftW-X.js";import"./useMountedState-DxKyG1Ea.js";import"./WebStorage-nSp6U5ws.js";import"./componentData-NRZfPv9y.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DNu1idMQ.js";import"./useObservable-CVJtQh5m.js";import"./useIsomorphicLayoutEffect-BY-4ZLY0.js";import"./AppThemeApi-C8apqIYf.js";import"./BUIProvider-CVmOZZtr.js";import"./openLink-2h5lI_6H.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-dUiqLBTI.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
