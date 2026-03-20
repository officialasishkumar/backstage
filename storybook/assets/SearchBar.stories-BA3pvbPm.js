const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-B5NoYMMp.js","./iframe-D9Y8dNt-.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-DQ93XqWt.js","./useDebounce-DEct9CU6.js","./translation-BpBlp1DL.js","./SearchContext-BAzDDuuI.js","./lodash-h7tafzQQ.js","./useAsync-D9Cc9Vp-.js","./useMountedState-B-arlFCl.js","./api-DlUch_na.js","./useAnalytics-CX_WCi2s.js","./InputAdornment-ByMGnZ5r.js","./formControlState-XJIDXpR9.js","./Button-Cgj_VeXU.js","./TextField-kdIu6bJu.js","./Select-CfaJeSHK.js","./index-B9sM2jn7.js","./Popover-BKRwm4sM.js","./Modal-71NnHFAX.js","./Portal-DVsLpO23.js","./List-mUIJSmYE.js","./ListContext-xNPrKmTk.js","./FormLabel-Dh3Iv9Nu.js","./InputLabel-DTLTfY8n.js","./useApp-jISuD9D7.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-D9Y8dNt-.js";import{s as d,M as l}from"./api-DlUch_na.js";import{SearchBar as m}from"./SearchBar-B5NoYMMp.js";import{S as h}from"./SearchContext-BAzDDuuI.js";import{S as p}from"./Grid-ta46I7or.js";import{m as S}from"./makeStyles-BoqHtulH.js";import{w as B}from"./appWrappers-CN6V1Awt.js";import"./useAnalytics-CX_WCi2s.js";import"./Search-DQ93XqWt.js";import"./useDebounce-DEct9CU6.js";import"./translation-BpBlp1DL.js";import"./InputAdornment-ByMGnZ5r.js";import"./formControlState-XJIDXpR9.js";import"./Button-Cgj_VeXU.js";import"./TextField-kdIu6bJu.js";import"./Select-CfaJeSHK.js";import"./index-B9sM2jn7.js";import"./Popover-BKRwm4sM.js";import"./Modal-71NnHFAX.js";import"./Portal-DVsLpO23.js";import"./List-mUIJSmYE.js";import"./ListContext-xNPrKmTk.js";import"./FormLabel-Dh3Iv9Nu.js";import"./InputLabel-DTLTfY8n.js";import"./useApp-jISuD9D7.js";import"./lodash-h7tafzQQ.js";import"./useAsync-D9Cc9Vp-.js";import"./useMountedState-B-arlFCl.js";import"./WebStorage-0dpj7iaf.js";import"./componentData-BVVUJjR2.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-C1uQgXas.js";import"./useObservable-CgBswJiJ.js";import"./useIsomorphicLayoutEffect-BjXjpzjp.js";import"./AppThemeApi-1AtRSy4c.js";import"./BUIProvider-Cr5RdwXf.js";import"./openLink-CijSEPaD.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-B5NoYMMp.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
