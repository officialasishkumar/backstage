const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-gUt5jKsQ.js","./iframe-CYY79_Ch.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-BUM0lFv-.js","./useDebounce-Dlrl7FaE.js","./translation-5VwxGhuX.js","./SearchContext-CLENGQp4.js","./lodash-BCNhplaF.js","./useAsync-CMPA6yod.js","./useMountedState-5pOa2Jmx.js","./api-NEU9mn4S.js","./useAnalytics-EAeWUmga.js","./InputAdornment-DYzLmTIB.js","./formControlState-DZ-YfcFF.js","./Button-BNPpinG-.js","./TextField-BLaxadMo.js","./Select-Dhe3gViZ.js","./index-B9sM2jn7.js","./Popover-B7rEX1cK.js","./Modal-zlEEAh2C.js","./Portal-DIn4oRFY.js","./List-Cj-oPI3l.js","./ListContext-BaICr9Ho.js","./FormLabel-Bu4v_859.js","./InputLabel-BRi7Lf3j.js","./useApp-2pwP5JR0.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,Y as u}from"./iframe-CYY79_Ch.js";import{s as d,M as l}from"./api-NEU9mn4S.js";import{SearchBar as m}from"./SearchBar-gUt5jKsQ.js";import{S as h}from"./SearchContext-CLENGQp4.js";import{S as p}from"./Grid-B6UmqXW5.js";import{m as S}from"./makeStyles-tbZFV_7j.js";import{w as B}from"./appWrappers-_KYTFwdK.js";import"./Search-BUM0lFv-.js";import"./useDebounce-Dlrl7FaE.js";import"./translation-5VwxGhuX.js";import"./InputAdornment-DYzLmTIB.js";import"./formControlState-DZ-YfcFF.js";import"./Button-BNPpinG-.js";import"./TextField-BLaxadMo.js";import"./Select-Dhe3gViZ.js";import"./index-B9sM2jn7.js";import"./Popover-B7rEX1cK.js";import"./Modal-zlEEAh2C.js";import"./Portal-DIn4oRFY.js";import"./List-Cj-oPI3l.js";import"./ListContext-BaICr9Ho.js";import"./FormLabel-Bu4v_859.js";import"./InputLabel-BRi7Lf3j.js";import"./useAnalytics-EAeWUmga.js";import"./useApp-2pwP5JR0.js";import"./lodash-BCNhplaF.js";import"./useAsync-CMPA6yod.js";import"./useMountedState-5pOa2Jmx.js";import"./useObservable-Dtt1hA1B.js";import"./useIsomorphicLayoutEffect-C2P83XY8.js";import"./componentData-DwiID7aS.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-CDv2I334.js";import"./BUIProvider-BHR7bujX.js";import"./openLink-Mni93yRE.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-gUt5jKsQ.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,oe as __namedExportsOrder,se as default};
