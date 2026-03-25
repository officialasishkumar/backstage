const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-DMXgZ_Mm.js","./iframe-BNkUY5HA.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-DEoBoJlx.js","./useDebounce-eAwjBTyw.js","./translation-Q1os9MKa.js","./SearchContext-BG6Qs4zD.js","./lodash-Bpc3Agjj.js","./useAsync-B5fuvW4L.js","./useMountedState-D6BGeb6K.js","./api-DDWvc9yc.js","./useAnalytics-dAdITyCa.js","./InputAdornment-CXMYZPYO.js","./formControlState-AeCIKk_8.js","./Button-8BW9uSJH.js","./TextField-BdgL2J2o.js","./Select-Cm18jZN-.js","./index-B9sM2jn7.js","./Popover-DFC8wnp9.js","./Modal-BKtoBYKW.js","./Portal-DQf1B4dl.js","./List-Dwb4XmJ7.js","./ListContext-i5jXFFIx.js","./FormLabel-BDEz0kL8.js","./InputLabel-9kbfsLeC.js","./useApp-DK-Jjl42.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-BNkUY5HA.js";import{s as d,M as l}from"./api-DDWvc9yc.js";import{SearchBar as m}from"./SearchBar-DMXgZ_Mm.js";import{S as h}from"./SearchContext-BG6Qs4zD.js";import{S as p}from"./Grid-T8Evs-aA.js";import{m as S}from"./makeStyles-D1M3cvTC.js";import{w as B}from"./appWrappers--MLEicpW.js";import"./useAnalytics-dAdITyCa.js";import"./Search-DEoBoJlx.js";import"./useDebounce-eAwjBTyw.js";import"./translation-Q1os9MKa.js";import"./InputAdornment-CXMYZPYO.js";import"./formControlState-AeCIKk_8.js";import"./Button-8BW9uSJH.js";import"./TextField-BdgL2J2o.js";import"./Select-Cm18jZN-.js";import"./index-B9sM2jn7.js";import"./Popover-DFC8wnp9.js";import"./Modal-BKtoBYKW.js";import"./Portal-DQf1B4dl.js";import"./List-Dwb4XmJ7.js";import"./ListContext-i5jXFFIx.js";import"./FormLabel-BDEz0kL8.js";import"./InputLabel-9kbfsLeC.js";import"./useApp-DK-Jjl42.js";import"./lodash-Bpc3Agjj.js";import"./useAsync-B5fuvW4L.js";import"./useMountedState-D6BGeb6K.js";import"./WebStorage-BSZ3f6rC.js";import"./componentData-CbggJDax.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DN_6yxbn.js";import"./useObservable-Cxumsgpz.js";import"./useIsomorphicLayoutEffect-CEtA1_c_.js";import"./AppThemeApi-DdnvDi-C.js";import"./BUIProvider-COrfszv7.js";import"./openLink-CO4LZzkY.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-DMXgZ_Mm.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
