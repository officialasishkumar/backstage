const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-B7nx-n5-.js","./iframe-CTqAPkqN.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-D6rUiepN.js","./useDebounce-DZoRWEPP.js","./translation-CCi5tqKF.js","./SearchContext-CqATHiRk.js","./lodash-BfbSSurr.js","./useAsync-Bp-OY9_W.js","./useMountedState-B0CBEazr.js","./api-BoBBPj76.js","./useAnalytics-VN6Gc-5g.js","./InputAdornment-b7_NseUe.js","./formControlState-Du9Va18K.js","./Button-D2BiJm3I.js","./TextField-B3eX88so.js","./Select-Gx2QFjcm.js","./index-B9sM2jn7.js","./Popover-B8fnCvZs.js","./Modal-Cvof-CyN.js","./Portal-CEy1WTiJ.js","./List-yUGuy5mk.js","./ListContext-rz4ELcuk.js","./FormLabel-DqIcxV33.js","./InputLabel-sDa8d1TQ.js","./useApp-4ydDLhug.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-CTqAPkqN.js";import{s as d,M as l}from"./api-BoBBPj76.js";import{SearchBar as m}from"./SearchBar-B7nx-n5-.js";import{S as h}from"./SearchContext-CqATHiRk.js";import{S as p}from"./Grid-BTPqc0jk.js";import{m as S}from"./makeStyles-DI4Xn9jK.js";import{w as B}from"./appWrappers-ByvhIwQq.js";import"./useAnalytics-VN6Gc-5g.js";import"./Search-D6rUiepN.js";import"./useDebounce-DZoRWEPP.js";import"./translation-CCi5tqKF.js";import"./InputAdornment-b7_NseUe.js";import"./formControlState-Du9Va18K.js";import"./Button-D2BiJm3I.js";import"./TextField-B3eX88so.js";import"./Select-Gx2QFjcm.js";import"./index-B9sM2jn7.js";import"./Popover-B8fnCvZs.js";import"./Modal-Cvof-CyN.js";import"./Portal-CEy1WTiJ.js";import"./List-yUGuy5mk.js";import"./ListContext-rz4ELcuk.js";import"./FormLabel-DqIcxV33.js";import"./InputLabel-sDa8d1TQ.js";import"./useApp-4ydDLhug.js";import"./lodash-BfbSSurr.js";import"./useAsync-Bp-OY9_W.js";import"./useMountedState-B0CBEazr.js";import"./WebStorage--fFr8sxx.js";import"./componentData-CtmcFq88.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-Bo89h57h.js";import"./useObservable-CiZPUid7.js";import"./useIsomorphicLayoutEffect-Bz_fp4QY.js";import"./AppThemeApi-bKanvrM1.js";import"./BUIProvider-Dw1aFK6j.js";import"./openLink-DuhEaLpg.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-B7nx-n5-.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
