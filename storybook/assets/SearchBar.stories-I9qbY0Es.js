const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-CwKp-w-3.js","./iframe-_E948MVz.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-vLlo2Lv9.js","./useDebounce-DCiS3Jh9.js","./translation-BvWAlFYZ.js","./SearchContext-CQztvfk5.js","./lodash-C-i153t0.js","./useAsync-DFpwKevH.js","./useMountedState-BylHk9na.js","./api-pQXBJ_vE.js","./useAnalytics-Jbkamk-n.js","./InputAdornment-DYNUuC_T.js","./formControlState-DOCor8U6.js","./Button-8HeP9eyX.js","./TextField-Bg8gns-u.js","./Select-B5x_g1zs.js","./index-B9sM2jn7.js","./Popover-DfDZbSHO.js","./Modal-wldFZbuS.js","./Portal-gFrfFYQV.js","./List-D7wngo3z.js","./ListContext-DMVOB75k.js","./FormLabel-DFurO3xJ.js","./InputLabel-BjDpJHWW.js","./useApp-DqMZs1Wr.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-PPVm8Dsz.js";import{j as e,W as i}from"./iframe-_E948MVz.js";import{s as d,M as l}from"./api-pQXBJ_vE.js";import{SearchBar as m}from"./SearchBar-CwKp-w-3.js";import{S as h}from"./SearchContext-CQztvfk5.js";import{S as p}from"./Grid-DjkXhwP0.js";import{m as S}from"./makeStyles-CeVQhawL.js";import{w as B}from"./appWrappers-BKSzuyoD.js";import"./Search-vLlo2Lv9.js";import"./useDebounce-DCiS3Jh9.js";import"./translation-BvWAlFYZ.js";import"./InputAdornment-DYNUuC_T.js";import"./formControlState-DOCor8U6.js";import"./Button-8HeP9eyX.js";import"./TextField-Bg8gns-u.js";import"./Select-B5x_g1zs.js";import"./index-B9sM2jn7.js";import"./Popover-DfDZbSHO.js";import"./Modal-wldFZbuS.js";import"./Portal-gFrfFYQV.js";import"./List-D7wngo3z.js";import"./ListContext-DMVOB75k.js";import"./FormLabel-DFurO3xJ.js";import"./InputLabel-BjDpJHWW.js";import"./useAnalytics-Jbkamk-n.js";import"./useApp-DqMZs1Wr.js";import"./lodash-C-i153t0.js";import"./useAsync-DFpwKevH.js";import"./useMountedState-BylHk9na.js";import"./useObservable-Bx1dqyQ_.js";import"./useIsomorphicLayoutEffect-DoQKgtM6.js";import"./componentData-CKoVJSo9.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-B7hK4tkb.js";const ee={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await u(async()=>{const{SearchBar:r}=await import("./SearchBar-CwKp-w-3.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(i,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const re=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,re as __namedExportsOrder,ee as default};
