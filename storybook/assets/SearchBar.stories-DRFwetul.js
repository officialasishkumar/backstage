const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-B3JJgxUO.js","./iframe-LAkIJzV-.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-CgyQxec7.js","./useDebounce-B8rHYV-G.js","./translation-BMxxS6n_.js","./SearchContext-BFuo9Msm.js","./lodash-DYu-YCIx.js","./useAsync-CJtFMYov.js","./useMountedState-ChWc6m0m.js","./api-RelUVOcO.js","./useAnalytics-D1LuewZq.js","./InputAdornment-BJgSLSOu.js","./formControlState-sJZFtX4h.js","./Button-CngIuIjc.js","./TextField-Ce0f0XrI.js","./Select-Bbnt52Og.js","./index-B9sM2jn7.js","./Popover-Ba6fEJx1.js","./Modal-CLKqV01n.js","./Portal-B_B_DiH0.js","./List-BdeCMfRK.js","./ListContext-g5fUsEsB.js","./FormLabel-BlE9b0zT.js","./InputLabel-9AEvqeoc.js","./useApp-Bblngibf.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-LAkIJzV-.js";import{s as d,M as l}from"./api-RelUVOcO.js";import{SearchBar as m}from"./SearchBar-B3JJgxUO.js";import{S as h}from"./SearchContext-BFuo9Msm.js";import{S as p}from"./Grid-D12OHFOV.js";import{m as S}from"./makeStyles-COYpSGPM.js";import{w as B}from"./appWrappers-BsD5m44s.js";import"./useAnalytics-D1LuewZq.js";import"./Search-CgyQxec7.js";import"./useDebounce-B8rHYV-G.js";import"./translation-BMxxS6n_.js";import"./InputAdornment-BJgSLSOu.js";import"./formControlState-sJZFtX4h.js";import"./Button-CngIuIjc.js";import"./TextField-Ce0f0XrI.js";import"./Select-Bbnt52Og.js";import"./index-B9sM2jn7.js";import"./Popover-Ba6fEJx1.js";import"./Modal-CLKqV01n.js";import"./Portal-B_B_DiH0.js";import"./List-BdeCMfRK.js";import"./ListContext-g5fUsEsB.js";import"./FormLabel-BlE9b0zT.js";import"./InputLabel-9AEvqeoc.js";import"./useApp-Bblngibf.js";import"./lodash-DYu-YCIx.js";import"./useAsync-CJtFMYov.js";import"./useMountedState-ChWc6m0m.js";import"./WebStorage-D3TO8Scz.js";import"./componentData-cMyYHDnN.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DacU1fu4.js";import"./useObservable-BF72Z5tz.js";import"./useIsomorphicLayoutEffect-C40l31eA.js";import"./AppThemeApi-BX6QlA5p.js";import"./BUIProvider-BCBhngHq.js";import"./openLink-DmaCgHpA.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-B3JJgxUO.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
