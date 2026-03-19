const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-BLrtpd0h.js","./iframe-CBVwdAXc.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-DXebMGII.js","./useDebounce-JTwZAEy1.js","./translation-DLtYQ6QP.js","./SearchContext-CltFw0Yf.js","./lodash-CjA-X3cH.js","./useAsync-CxJRBM1A.js","./useMountedState-7qHVdg4Q.js","./api-BJX2I_yt.js","./useAnalytics-Qr-pKmLn.js","./InputAdornment-DvV8VpX0.js","./formControlState-C6Ltf1uE.js","./Button-B6J55BZU.js","./TextField-CTF2AxLr.js","./Select-gl8MKV-O.js","./index-B9sM2jn7.js","./Popover-CCxOaT36.js","./Modal-B_9QibKY.js","./Portal-DWyDC_bO.js","./List-7WrADx2K.js","./ListContext-D4A-UAeR.js","./FormLabel-rTVsmEiW.js","./InputLabel-CSZPC2eW.js","./useApp-Dv9wNNjs.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-CBVwdAXc.js";import{s as d,M as l}from"./api-BJX2I_yt.js";import{SearchBar as m}from"./SearchBar-BLrtpd0h.js";import{S as h}from"./SearchContext-CltFw0Yf.js";import{S as p}from"./Grid-DWkTHZrC.js";import{m as S}from"./makeStyles-C24YcoXm.js";import{w as B}from"./appWrappers-BlnrEZL7.js";import"./useAnalytics-Qr-pKmLn.js";import"./Search-DXebMGII.js";import"./useDebounce-JTwZAEy1.js";import"./translation-DLtYQ6QP.js";import"./InputAdornment-DvV8VpX0.js";import"./formControlState-C6Ltf1uE.js";import"./Button-B6J55BZU.js";import"./TextField-CTF2AxLr.js";import"./Select-gl8MKV-O.js";import"./index-B9sM2jn7.js";import"./Popover-CCxOaT36.js";import"./Modal-B_9QibKY.js";import"./Portal-DWyDC_bO.js";import"./List-7WrADx2K.js";import"./ListContext-D4A-UAeR.js";import"./FormLabel-rTVsmEiW.js";import"./InputLabel-CSZPC2eW.js";import"./useApp-Dv9wNNjs.js";import"./lodash-CjA-X3cH.js";import"./useAsync-CxJRBM1A.js";import"./useMountedState-7qHVdg4Q.js";import"./WebStorage-IOrvc26O.js";import"./componentData-BVLy2Ait.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-D9ejMs_C.js";import"./useObservable-CSuacsqV.js";import"./useIsomorphicLayoutEffect-BurP_Bj6.js";import"./AppThemeApi-lxpkfbFj.js";import"./BUIProvider-YZy9Wrqs.js";import"./openLink-DK4oWnZh.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-BLrtpd0h.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
