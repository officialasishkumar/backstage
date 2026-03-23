const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-Bs__hzD5.js","./iframe-CXYB6t6D.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-D84uBNYz.js","./useDebounce-DrPEVMjS.js","./translation-eSrDSVx-.js","./SearchContext-LELAUXf0.js","./lodash-KoVF5YkZ.js","./useAsync-D5fQAFTG.js","./useMountedState-jjFDpjDr.js","./api-CB6iKWxI.js","./useAnalytics-NJhHIdXr.js","./InputAdornment-BzG3knsf.js","./formControlState-C3eNDS3T.js","./Button-BTn6o9qz.js","./TextField-C5jk1uqh.js","./Select-CC_w7yQI.js","./index-B9sM2jn7.js","./Popover-dtZt9s_G.js","./Modal-Cs-JCA8a.js","./Portal-DIGrr39M.js","./List-DyaSGBv-.js","./ListContext-CJZGy2dL.js","./FormLabel-C2WyFgQi.js","./InputLabel-nq5X6lYU.js","./useApp-BzYXrb6N.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-CXYB6t6D.js";import{s as d,M as l}from"./api-CB6iKWxI.js";import{SearchBar as m}from"./SearchBar-Bs__hzD5.js";import{S as h}from"./SearchContext-LELAUXf0.js";import{S as p}from"./Grid-BOZ43D_m.js";import{m as S}from"./makeStyles-D9Wml1Qb.js";import{w as B}from"./appWrappers-DN-PfUuB.js";import"./useAnalytics-NJhHIdXr.js";import"./Search-D84uBNYz.js";import"./useDebounce-DrPEVMjS.js";import"./translation-eSrDSVx-.js";import"./InputAdornment-BzG3knsf.js";import"./formControlState-C3eNDS3T.js";import"./Button-BTn6o9qz.js";import"./TextField-C5jk1uqh.js";import"./Select-CC_w7yQI.js";import"./index-B9sM2jn7.js";import"./Popover-dtZt9s_G.js";import"./Modal-Cs-JCA8a.js";import"./Portal-DIGrr39M.js";import"./List-DyaSGBv-.js";import"./ListContext-CJZGy2dL.js";import"./FormLabel-C2WyFgQi.js";import"./InputLabel-nq5X6lYU.js";import"./useApp-BzYXrb6N.js";import"./lodash-KoVF5YkZ.js";import"./useAsync-D5fQAFTG.js";import"./useMountedState-jjFDpjDr.js";import"./WebStorage-cO74hvRt.js";import"./componentData-RRXy5f2b.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-Cqb6C9TB.js";import"./useObservable-D0IPRkqN.js";import"./useIsomorphicLayoutEffect-DpO0wsP6.js";import"./AppThemeApi-DrEZGmPR.js";import"./BUIProvider-s_nHa8HH.js";import"./openLink-BHEYgROE.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-Bs__hzD5.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
