const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-VbwUdIHh.js","./iframe-D94_c1Tp.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-JOjckmnG.js","./useDebounce-BJ7QsNty.js","./translation-j1mceFiW.js","./SearchContext-I5fGUMQR.js","./lodash-AxW3xIV_.js","./useAsync-DTqsCBT6.js","./useMountedState-jRxC8-9y.js","./api-BJr5fosT.js","./useAnalytics-B9rHpaUX.js","./InputAdornment-Ba1RJ4g4.js","./formControlState-1DIl7qN6.js","./Button-D7UPb-E1.js","./TextField-CSA-UtZ3.js","./Select-DZw3Y4jE.js","./index-B9sM2jn7.js","./Popover-C-fjSaZv.js","./Modal-C1uYguhK.js","./Portal-D3nAj-4m.js","./List-C8oahujg.js","./ListContext-D3wa98z0.js","./FormLabel-L442D5c4.js","./InputLabel-BKoLE4Je.js","./useApp-DAxCr7ZI.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,X as u}from"./iframe-D94_c1Tp.js";import{s as d,M as l}from"./api-BJr5fosT.js";import{SearchBar as m}from"./SearchBar-VbwUdIHh.js";import{S as h}from"./SearchContext-I5fGUMQR.js";import{S as p}from"./Grid-TMpKdJdj.js";import{m as S}from"./makeStyles-CKqiAwnv.js";import{w as B}from"./appWrappers-ZQzcO08Y.js";import"./useAnalytics-B9rHpaUX.js";import"./Search-JOjckmnG.js";import"./useDebounce-BJ7QsNty.js";import"./translation-j1mceFiW.js";import"./InputAdornment-Ba1RJ4g4.js";import"./formControlState-1DIl7qN6.js";import"./Button-D7UPb-E1.js";import"./TextField-CSA-UtZ3.js";import"./Select-DZw3Y4jE.js";import"./index-B9sM2jn7.js";import"./Popover-C-fjSaZv.js";import"./Modal-C1uYguhK.js";import"./Portal-D3nAj-4m.js";import"./List-C8oahujg.js";import"./ListContext-D3wa98z0.js";import"./FormLabel-L442D5c4.js";import"./InputLabel-BKoLE4Je.js";import"./useApp-DAxCr7ZI.js";import"./lodash-AxW3xIV_.js";import"./useAsync-DTqsCBT6.js";import"./useMountedState-jRxC8-9y.js";import"./useObservable-iN5Ns7Jc.js";import"./useIsomorphicLayoutEffect-CsFVC7Nn.js";import"./componentData-4fd3-zn4.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BrZ8YAao.js";import"./BUIProvider-DcamUp_A.js";import"./openLink-CpY4wZ7E.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-VbwUdIHh.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
