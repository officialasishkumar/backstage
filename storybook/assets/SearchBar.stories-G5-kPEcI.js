const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-zP_FclRa.js","./iframe-CgH1me10.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-DTiRenbv.js","./useDebounce-C0qohk-I.js","./translation-DlhKr3Dq.js","./SearchContext-B0-Pz4G8.js","./lodash-DA8KCwpH.js","./useAsync-Dh_jC-Gf.js","./useMountedState-BYet7bvZ.js","./api-DpORWCH6.js","./useAnalytics-B6XkFFfD.js","./InputAdornment-DRFBXAf7.js","./formControlState-D1o5e8Uj.js","./Button-C1eF25RY.js","./TextField-CLLVyioj.js","./Select-CLqYiMG3.js","./index-B9sM2jn7.js","./Popover-C-sXbnMV.js","./Modal-C3QCofUv.js","./Portal-BSxkgYw7.js","./List-BhhAC_dw.js","./ListContext-D3q8nz-e.js","./FormLabel-DTgdw1Sg.js","./InputLabel-CiyB4rX_.js","./useApp-SFhNxW0M.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-PPVm8Dsz.js";import{j as e,W as i}from"./iframe-CgH1me10.js";import{s as d,M as l}from"./api-DpORWCH6.js";import{SearchBar as m}from"./SearchBar-zP_FclRa.js";import{S as h}from"./SearchContext-B0-Pz4G8.js";import{S as p}from"./Grid-JeE2fzwn.js";import{m as S}from"./makeStyles-DDQHR9TF.js";import{w as B}from"./appWrappers-NpBGgNln.js";import"./Search-DTiRenbv.js";import"./useDebounce-C0qohk-I.js";import"./translation-DlhKr3Dq.js";import"./InputAdornment-DRFBXAf7.js";import"./formControlState-D1o5e8Uj.js";import"./Button-C1eF25RY.js";import"./TextField-CLLVyioj.js";import"./Select-CLqYiMG3.js";import"./index-B9sM2jn7.js";import"./Popover-C-sXbnMV.js";import"./Modal-C3QCofUv.js";import"./Portal-BSxkgYw7.js";import"./List-BhhAC_dw.js";import"./ListContext-D3q8nz-e.js";import"./FormLabel-DTgdw1Sg.js";import"./InputLabel-CiyB4rX_.js";import"./useAnalytics-B6XkFFfD.js";import"./useApp-SFhNxW0M.js";import"./lodash-DA8KCwpH.js";import"./useAsync-Dh_jC-Gf.js";import"./useMountedState-BYet7bvZ.js";import"./useObservable-92K9thiA.js";import"./useIsomorphicLayoutEffect-byGVp8_z.js";import"./componentData-BVRf5VfY.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DAoZozbk.js";const ee={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await u(async()=>{const{SearchBar:r}=await import("./SearchBar-zP_FclRa.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(i,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
