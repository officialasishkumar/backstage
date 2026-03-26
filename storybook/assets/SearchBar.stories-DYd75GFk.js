const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-C2XtQbEf.js","./iframe-hebBxzMS.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-CCJX7vkb.js","./useDebounce-KlKLjyE6.js","./translation-WMSPag9l.js","./SearchContext-DrQAi7yW.js","./lodash-Dh4D4KP7.js","./useAsync-DBxU8MB7.js","./useMountedState-BOTwgk6q.js","./api-jc-W2kkT.js","./useAnalytics-DnJagaLH.js","./InputAdornment-BLqHyM3O.js","./formControlState-DutHjy-Z.js","./Button-1W1IEELe.js","./TextField-B94sBlAb.js","./Select-CX3j3K8s.js","./index-B9sM2jn7.js","./Popover-BcCigjgZ.js","./Modal-D8j_BW28.js","./Portal-DVg2kjtj.js","./List-B-7FtQra.js","./ListContext-vEx_JeiU.js","./FormLabel-CpSu2UiP.js","./InputLabel-CzP71cpe.js","./useApp-Di7SCwol.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,a2 as u}from"./iframe-hebBxzMS.js";import{s as d,M as l}from"./api-jc-W2kkT.js";import{SearchBar as m}from"./SearchBar-C2XtQbEf.js";import{S as h}from"./SearchContext-DrQAi7yW.js";import{S as p}from"./Grid-DR9XAO4b.js";import{m as S}from"./makeStyles-BuKfj6eo.js";import{w as B}from"./appWrappers-DG3qkWtx.js";import"./useAnalytics-DnJagaLH.js";import"./Search-CCJX7vkb.js";import"./useDebounce-KlKLjyE6.js";import"./translation-WMSPag9l.js";import"./InputAdornment-BLqHyM3O.js";import"./formControlState-DutHjy-Z.js";import"./Button-1W1IEELe.js";import"./TextField-B94sBlAb.js";import"./Select-CX3j3K8s.js";import"./index-B9sM2jn7.js";import"./Popover-BcCigjgZ.js";import"./Modal-D8j_BW28.js";import"./Portal-DVg2kjtj.js";import"./List-B-7FtQra.js";import"./ListContext-vEx_JeiU.js";import"./FormLabel-CpSu2UiP.js";import"./InputLabel-CzP71cpe.js";import"./useApp-Di7SCwol.js";import"./lodash-Dh4D4KP7.js";import"./useAsync-DBxU8MB7.js";import"./useMountedState-BOTwgk6q.js";import"./WebStorage-BH3gxhUZ.js";import"./componentData-3dYIRIMh.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTCVMere.js";import"./useIsomorphicLayoutEffect-C2Wk8JSq.js";import"./AppThemeApi-C6IiMRx5.js";import"./BUIProvider-BOqmKnYE.js";import"./openLink-CPB6xqLo.js";const oe={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-C2XtQbEf.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
