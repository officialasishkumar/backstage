const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-BXRLOasz.js","./iframe-CY6p7HGj.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-BzQRGwO4.js","./useDebounce-DcONjDNk.js","./translation-BV-tF8cj.js","./SearchContext-D13CyFa2.js","./lodash-CLoGCafV.js","./useAsync-Cd2u9r7E.js","./useMountedState-IBh66WXz.js","./api-C5yYyU5K.js","./useAnalytics-BNh1pToN.js","./InputAdornment-D9K8eI1h.js","./formControlState-Cip8j-G5.js","./Button-CkEmHMZv.js","./TextField-nPX4lx0D.js","./Select-WJ6an-EI.js","./index-B9sM2jn7.js","./Popover-DOA_iCiu.js","./Modal-C_tSa40p.js","./Portal-Bt03fp_h.js","./List-CTA8BryI.js","./ListContext-De_DMnNX.js","./FormLabel-P9cCvMoo.js","./InputLabel-uYcjv8nA.js","./useApp-KaslIZzb.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,a2 as u}from"./iframe-CY6p7HGj.js";import{s as d,M as l}from"./api-C5yYyU5K.js";import{SearchBar as m}from"./SearchBar-BXRLOasz.js";import{S as h}from"./SearchContext-D13CyFa2.js";import{S as p}from"./Grid-4GdRE04R.js";import{m as S}from"./makeStyles-CL5QsbT9.js";import{w as B}from"./appWrappers-CAUZooA4.js";import"./useAnalytics-BNh1pToN.js";import"./Search-BzQRGwO4.js";import"./useDebounce-DcONjDNk.js";import"./translation-BV-tF8cj.js";import"./InputAdornment-D9K8eI1h.js";import"./formControlState-Cip8j-G5.js";import"./Button-CkEmHMZv.js";import"./TextField-nPX4lx0D.js";import"./Select-WJ6an-EI.js";import"./index-B9sM2jn7.js";import"./Popover-DOA_iCiu.js";import"./Modal-C_tSa40p.js";import"./Portal-Bt03fp_h.js";import"./List-CTA8BryI.js";import"./ListContext-De_DMnNX.js";import"./FormLabel-P9cCvMoo.js";import"./InputLabel-uYcjv8nA.js";import"./useApp-KaslIZzb.js";import"./lodash-CLoGCafV.js";import"./useAsync-Cd2u9r7E.js";import"./useMountedState-IBh66WXz.js";import"./WebStorage-DKR11xvB.js";import"./componentData-DpgniKxn.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-dG0pRKNd.js";import"./useIsomorphicLayoutEffect-C2yLsHrc.js";import"./AppThemeApi-8OCpdy64.js";import"./BUIProvider-B87mDlDM.js";import"./openLink-D0hf0orl.js";const oe={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-BXRLOasz.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
