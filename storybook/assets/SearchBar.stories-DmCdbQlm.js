const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-B80RFJwB.js","./iframe-BPVPwWzn.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-DwLGW6W_.js","./useDebounce-DvLdk4Xn.js","./translation-DWNCyGAM.js","./SearchContext-XEdgPpNU.js","./lodash-Da7OBv6p.js","./useAsync-BR7KsH4b.js","./useMountedState-e47W3NJl.js","./api-BdSH-GPv.js","./useAnalytics-DVBaEwk3.js","./InputAdornment-G4fMDAGt.js","./formControlState-BlAeIR-U.js","./Button-Cr4PEm2D.js","./TextField-DK-NAxiw.js","./Select-BCzsMbXO.js","./index-B9sM2jn7.js","./Popover-T_njOncE.js","./Modal-Bpx44tXR.js","./Portal-AbzTFUuq.js","./List-cqhA6xzX.js","./ListContext-DHM8dB5v.js","./FormLabel-B6rcaqHW.js","./InputLabel-DT4OmzN1.js","./useApp-C5rsfXEx.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-BPVPwWzn.js";import{s as d,M as l}from"./api-BdSH-GPv.js";import{SearchBar as m}from"./SearchBar-B80RFJwB.js";import{S as h}from"./SearchContext-XEdgPpNU.js";import{S as p}from"./Grid-CXiQnKoR.js";import{m as S}from"./makeStyles-DL3RdYST.js";import{w as B}from"./appWrappers-CJ8A4wmX.js";import"./useAnalytics-DVBaEwk3.js";import"./Search-DwLGW6W_.js";import"./useDebounce-DvLdk4Xn.js";import"./translation-DWNCyGAM.js";import"./InputAdornment-G4fMDAGt.js";import"./formControlState-BlAeIR-U.js";import"./Button-Cr4PEm2D.js";import"./TextField-DK-NAxiw.js";import"./Select-BCzsMbXO.js";import"./index-B9sM2jn7.js";import"./Popover-T_njOncE.js";import"./Modal-Bpx44tXR.js";import"./Portal-AbzTFUuq.js";import"./List-cqhA6xzX.js";import"./ListContext-DHM8dB5v.js";import"./FormLabel-B6rcaqHW.js";import"./InputLabel-DT4OmzN1.js";import"./useApp-C5rsfXEx.js";import"./lodash-Da7OBv6p.js";import"./useAsync-BR7KsH4b.js";import"./useMountedState-e47W3NJl.js";import"./WebStorage-RsjDsUwp.js";import"./componentData-KR2ttMpT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-ClPDwBGK.js";import"./useObservable-D13vfogS.js";import"./useIsomorphicLayoutEffect-D_UToJE7.js";import"./AppThemeApi-CHrimYAf.js";import"./BUIProvider-CpcGyQIQ.js";import"./openLink-Bc-74F4f.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-B80RFJwB.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
