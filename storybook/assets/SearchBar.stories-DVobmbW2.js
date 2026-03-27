const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-BPFFK1YM.js","./iframe-CsOrEaZh.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-BjtVWs7D.js","./useDebounce-JAwIA1s_.js","./translation-CPobmUvj.js","./SearchContext-DdSJd7b2.js","./lodash-BDBMyJpB.js","./useAsync-SkXlsC6H.js","./useMountedState-BoYCIFcM.js","./api-CDg9Azu3.js","./useAnalytics-Dzy9lLMd.js","./InputAdornment-d6tCqMWu.js","./formControlState-CoRY38S1.js","./Button-DxzdcRoc.js","./TextField-BUFvqsms.js","./Select-DkKvCVGl.js","./index-B9sM2jn7.js","./Popover-D5SZ32eH.js","./Modal-DbgEDtBN.js","./Portal-DzcrA5JX.js","./List-DZ50BoJB.js","./ListContext-DMLxEL-p.js","./FormLabel-CFjYjOa8.js","./InputLabel-CI3l5Fft.js","./useApp-xQCVi238.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,a2 as u}from"./iframe-CsOrEaZh.js";import{s as d,M as l}from"./api-CDg9Azu3.js";import{SearchBar as m}from"./SearchBar-BPFFK1YM.js";import{S as h}from"./SearchContext-DdSJd7b2.js";import{S as p}from"./Grid-Cp5B6vj7.js";import{m as S}from"./makeStyles-RXMzfVyC.js";import{w as B}from"./appWrappers-BvxLm1EU.js";import"./useAnalytics-Dzy9lLMd.js";import"./Search-BjtVWs7D.js";import"./useDebounce-JAwIA1s_.js";import"./translation-CPobmUvj.js";import"./InputAdornment-d6tCqMWu.js";import"./formControlState-CoRY38S1.js";import"./Button-DxzdcRoc.js";import"./TextField-BUFvqsms.js";import"./Select-DkKvCVGl.js";import"./index-B9sM2jn7.js";import"./Popover-D5SZ32eH.js";import"./Modal-DbgEDtBN.js";import"./Portal-DzcrA5JX.js";import"./List-DZ50BoJB.js";import"./ListContext-DMLxEL-p.js";import"./FormLabel-CFjYjOa8.js";import"./InputLabel-CI3l5Fft.js";import"./useApp-xQCVi238.js";import"./lodash-BDBMyJpB.js";import"./useAsync-SkXlsC6H.js";import"./useMountedState-BoYCIFcM.js";import"./WebStorage-MTKsO0K2.js";import"./componentData-D2PsLXfp.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DAaVJNgT.js";import"./useIsomorphicLayoutEffect-CGDSOLtL.js";import"./AppThemeApi-B_GxqhKP.js";import"./BUIProvider-DqcKutYD.js";import"./openLink-DxicnjxI.js";const oe={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-BPFFK1YM.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
