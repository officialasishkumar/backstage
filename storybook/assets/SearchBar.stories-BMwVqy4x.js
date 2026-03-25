const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-d8Qpcj_j.js","./iframe-CymjdxqK.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-Rc2_LP4h.js","./useDebounce-D7JfOOYO.js","./translation-I7QVreNK.js","./SearchContext-CAFUE0gI.js","./lodash-DJdMBrbC.js","./useAsync-DNPZfGZ5.js","./useMountedState-BFsHBQyj.js","./api-B30Qxg8X.js","./useAnalytics-Du0UI_Xd.js","./InputAdornment-nzN2s09-.js","./formControlState-BB3acsDy.js","./Button-ChGZVjj5.js","./TextField-CPODLCmn.js","./Select-BKgwaXcA.js","./index-B9sM2jn7.js","./Popover-Dv66xU2X.js","./Modal-BEQjsWT4.js","./Portal-D2IDO7m8.js","./List-Dvm8L6Yt.js","./ListContext-uUolaWCt.js","./FormLabel-DcgCwNfW.js","./InputLabel-0YdsTb6a.js","./useApp-uGimLtOi.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-CymjdxqK.js";import{s as d,M as l}from"./api-B30Qxg8X.js";import{SearchBar as m}from"./SearchBar-d8Qpcj_j.js";import{S as h}from"./SearchContext-CAFUE0gI.js";import{S as p}from"./Grid-Dr2ljIC_.js";import{m as S}from"./makeStyles-BMXXhCWz.js";import{w as B}from"./appWrappers-CKqDR5XN.js";import"./useAnalytics-Du0UI_Xd.js";import"./Search-Rc2_LP4h.js";import"./useDebounce-D7JfOOYO.js";import"./translation-I7QVreNK.js";import"./InputAdornment-nzN2s09-.js";import"./formControlState-BB3acsDy.js";import"./Button-ChGZVjj5.js";import"./TextField-CPODLCmn.js";import"./Select-BKgwaXcA.js";import"./index-B9sM2jn7.js";import"./Popover-Dv66xU2X.js";import"./Modal-BEQjsWT4.js";import"./Portal-D2IDO7m8.js";import"./List-Dvm8L6Yt.js";import"./ListContext-uUolaWCt.js";import"./FormLabel-DcgCwNfW.js";import"./InputLabel-0YdsTb6a.js";import"./useApp-uGimLtOi.js";import"./lodash-DJdMBrbC.js";import"./useAsync-DNPZfGZ5.js";import"./useMountedState-BFsHBQyj.js";import"./WebStorage-D7ewBRR_.js";import"./componentData-C0LwwTGy.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BW-EXu7a.js";import"./useObservable-BH1nonIT.js";import"./useIsomorphicLayoutEffect-rE2UtcSW.js";import"./AppThemeApi-CCLkHGzt.js";import"./BUIProvider-B08yKp77.js";import"./openLink-CvTgs9Lx.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-d8Qpcj_j.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
