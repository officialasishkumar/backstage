const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-DjJheuUC.js","./iframe-DsZtuuTR.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-BshPfv7J.js","./useDebounce-C_k1bDww.js","./translation-BxeraEo7.js","./SearchContext-BIHSRY2q.js","./lodash-BypptKGH.js","./useAsync-gJD2Ho9T.js","./useMountedState-COxOjAGe.js","./api-DxDqDHJC.js","./useAnalytics-YS7OZ-uO.js","./InputAdornment-Dt26jzMg.js","./formControlState-Cn6OFxGU.js","./Button-Da5WlExb.js","./TextField-BupY6Qgk.js","./Select-BetUGSRx.js","./index-B9sM2jn7.js","./Popover-CRqXxO63.js","./Modal-XrZoVZ0I.js","./Portal-DR4gT_uM.js","./List-C6QPnNfT.js","./ListContext-DcgBfIsd.js","./FormLabel-DIlsUH0Z.js","./InputLabel-DdiV01bM.js","./useApp-bTnD5DHs.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-DsZtuuTR.js";import{s as d,M as l}from"./api-DxDqDHJC.js";import{SearchBar as m}from"./SearchBar-DjJheuUC.js";import{S as h}from"./SearchContext-BIHSRY2q.js";import{S as p}from"./Grid-CKFEL6Ss.js";import{m as S}from"./makeStyles-41TQbijK.js";import{w as B}from"./appWrappers-ar1MFznU.js";import"./useAnalytics-YS7OZ-uO.js";import"./Search-BshPfv7J.js";import"./useDebounce-C_k1bDww.js";import"./translation-BxeraEo7.js";import"./InputAdornment-Dt26jzMg.js";import"./formControlState-Cn6OFxGU.js";import"./Button-Da5WlExb.js";import"./TextField-BupY6Qgk.js";import"./Select-BetUGSRx.js";import"./index-B9sM2jn7.js";import"./Popover-CRqXxO63.js";import"./Modal-XrZoVZ0I.js";import"./Portal-DR4gT_uM.js";import"./List-C6QPnNfT.js";import"./ListContext-DcgBfIsd.js";import"./FormLabel-DIlsUH0Z.js";import"./InputLabel-DdiV01bM.js";import"./useApp-bTnD5DHs.js";import"./lodash-BypptKGH.js";import"./useAsync-gJD2Ho9T.js";import"./useMountedState-COxOjAGe.js";import"./WebStorage-wbCsrwiK.js";import"./componentData-DPwp5LM5.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-uH1xIlYD.js";import"./useObservable-87F9ihSH.js";import"./useIsomorphicLayoutEffect-gF7jK0N4.js";import"./AppThemeApi-DfBY-Xua.js";import"./BUIProvider-CyUmZSwJ.js";import"./openLink-D7WjByac.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-DjJheuUC.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
