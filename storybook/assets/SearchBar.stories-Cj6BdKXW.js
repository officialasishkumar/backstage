const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-DTCdQqrE.js","./iframe-Cvt_X182.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-D5puo9gQ.js","./useDebounce-Bx1-tgvV.js","./translation-Ru7YunwF.js","./SearchContext-DRDGykW7.js","./lodash-wfJ_V-c-.js","./useAsync-KSm2sTfX.js","./useMountedState-Cfd5-rEZ.js","./api-Ct0WwyAJ.js","./useAnalytics-C-sF4Up2.js","./InputAdornment-D0HZfjSL.js","./formControlState-DodZt-1O.js","./Button-C0VsjUtj.js","./TextField-DsBwA7KZ.js","./Select-BXWd9fdQ.js","./index-B9sM2jn7.js","./Popover-DtxdJ-Yw.js","./Modal-BZN5-otl.js","./Portal-Br5yZBqf.js","./List-O0e_0tnH.js","./ListContext-jbH0b5HF.js","./FormLabel-OJUEK7aP.js","./InputLabel-BKmaQbZe.js","./useApp-B7teYX-A.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-Cvt_X182.js";import{s as d,M as l}from"./api-Ct0WwyAJ.js";import{SearchBar as m}from"./SearchBar-DTCdQqrE.js";import{S as h}from"./SearchContext-DRDGykW7.js";import{S as p}from"./Grid-Fa5sAGyT.js";import{m as S}from"./makeStyles-C2GLBazK.js";import{w as B}from"./appWrappers-B2OA6H91.js";import"./useAnalytics-C-sF4Up2.js";import"./Search-D5puo9gQ.js";import"./useDebounce-Bx1-tgvV.js";import"./translation-Ru7YunwF.js";import"./InputAdornment-D0HZfjSL.js";import"./formControlState-DodZt-1O.js";import"./Button-C0VsjUtj.js";import"./TextField-DsBwA7KZ.js";import"./Select-BXWd9fdQ.js";import"./index-B9sM2jn7.js";import"./Popover-DtxdJ-Yw.js";import"./Modal-BZN5-otl.js";import"./Portal-Br5yZBqf.js";import"./List-O0e_0tnH.js";import"./ListContext-jbH0b5HF.js";import"./FormLabel-OJUEK7aP.js";import"./InputLabel-BKmaQbZe.js";import"./useApp-B7teYX-A.js";import"./lodash-wfJ_V-c-.js";import"./useAsync-KSm2sTfX.js";import"./useMountedState-Cfd5-rEZ.js";import"./WebStorage-B3jyENY0.js";import"./componentData-B2P8fcq6.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-CGcTZ4mm.js";import"./useObservable-DOJIJuXx.js";import"./useIsomorphicLayoutEffect-csaJIBTD.js";import"./AppThemeApi-CcIx1JpM.js";import"./BUIProvider-BemZ3N2Z.js";import"./openLink-BX21WjU1.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-DTCdQqrE.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
