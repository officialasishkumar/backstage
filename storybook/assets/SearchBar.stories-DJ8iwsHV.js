const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-xJ0AhLF3.js","./iframe--MS66teN.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-gppr4deI.js","./useDebounce-Du8kDz0A.js","./translation-DaRI86FI.js","./SearchContext-Bses2o9W.js","./lodash-vaL5b5o-.js","./useAsync-BeXeBLNv.js","./useMountedState-BkwGR7C4.js","./api-B_xgBHtB.js","./useAnalytics-B-3-tPoN.js","./InputAdornment-B73UZtO2.js","./formControlState--h4g43RI.js","./Button-8cYlNDsK.js","./TextField-DHDiWgh5.js","./Select-OVghtnvw.js","./index-B9sM2jn7.js","./Popover-D7kgfPEI.js","./Modal-ByYh99jW.js","./Portal-UjOrNlZC.js","./List-BngRfJV6.js","./ListContext-DH8NOqlh.js","./FormLabel-BWYdLdLw.js","./InputLabel-_DtRdrR4.js","./useApp-P40Yy8FV.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe--MS66teN.js";import{s as d,M as l}from"./api-B_xgBHtB.js";import{SearchBar as m}from"./SearchBar-xJ0AhLF3.js";import{S as h}from"./SearchContext-Bses2o9W.js";import{S as p}from"./Grid-S31HS9ey.js";import{m as S}from"./makeStyles-B3gZJdXQ.js";import{w as B}from"./appWrappers-BuSdHoSh.js";import"./useAnalytics-B-3-tPoN.js";import"./Search-gppr4deI.js";import"./useDebounce-Du8kDz0A.js";import"./translation-DaRI86FI.js";import"./InputAdornment-B73UZtO2.js";import"./formControlState--h4g43RI.js";import"./Button-8cYlNDsK.js";import"./TextField-DHDiWgh5.js";import"./Select-OVghtnvw.js";import"./index-B9sM2jn7.js";import"./Popover-D7kgfPEI.js";import"./Modal-ByYh99jW.js";import"./Portal-UjOrNlZC.js";import"./List-BngRfJV6.js";import"./ListContext-DH8NOqlh.js";import"./FormLabel-BWYdLdLw.js";import"./InputLabel-_DtRdrR4.js";import"./useApp-P40Yy8FV.js";import"./lodash-vaL5b5o-.js";import"./useAsync-BeXeBLNv.js";import"./useMountedState-BkwGR7C4.js";import"./WebStorage-D_nrcGMJ.js";import"./componentData-BT2uJg7J.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-C8lN7z6e.js";import"./useObservable-7Wh-bZ_e.js";import"./useIsomorphicLayoutEffect-Fxu556Ss.js";import"./AppThemeApi-CDpY_kGN.js";import"./BUIProvider-MOAkSoGK.js";import"./openLink-DbqcEISv.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-xJ0AhLF3.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
