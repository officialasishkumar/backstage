const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-njkYSD7I.js","./iframe-9SnFn8NI.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-V37lsuf5.js","./useDebounce-BKRFrI6K.js","./translation-CDSIA1yk.js","./SearchContext-CITSbdyq.js","./lodash-D_ItgaGX.js","./useAsync-Y4mVlgU0.js","./useMountedState-DS2oCoAt.js","./api-o3FkwP6o.js","./useAnalytics-BPrcyc7d.js","./InputAdornment-CPZKsV1G.js","./formControlState-B4kMTfth.js","./Button-v6lnBXCN.js","./TextField-teoZHzsW.js","./Select-B6ZJEgeM.js","./index-B9sM2jn7.js","./Popover-DwK-7TXH.js","./Modal-shSMlX3e.js","./Portal-DzHAgIGh.js","./List-4wadUwvo.js","./ListContext-D6WBwJuB.js","./FormLabel-DU3Il7Ye.js","./InputLabel-BBWZ6Jlv.js","./useApp-BcoyKQFG.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,X as u}from"./iframe-9SnFn8NI.js";import{s as d,M as l}from"./api-o3FkwP6o.js";import{SearchBar as m}from"./SearchBar-njkYSD7I.js";import{S as h}from"./SearchContext-CITSbdyq.js";import{S as p}from"./Grid-DnbT5ToY.js";import{m as S}from"./makeStyles-V6CeBGqV.js";import{w as B}from"./appWrappers-gCP1PHw1.js";import"./useAnalytics-BPrcyc7d.js";import"./Search-V37lsuf5.js";import"./useDebounce-BKRFrI6K.js";import"./translation-CDSIA1yk.js";import"./InputAdornment-CPZKsV1G.js";import"./formControlState-B4kMTfth.js";import"./Button-v6lnBXCN.js";import"./TextField-teoZHzsW.js";import"./Select-B6ZJEgeM.js";import"./index-B9sM2jn7.js";import"./Popover-DwK-7TXH.js";import"./Modal-shSMlX3e.js";import"./Portal-DzHAgIGh.js";import"./List-4wadUwvo.js";import"./ListContext-D6WBwJuB.js";import"./FormLabel-DU3Il7Ye.js";import"./InputLabel-BBWZ6Jlv.js";import"./useApp-BcoyKQFG.js";import"./lodash-D_ItgaGX.js";import"./useAsync-Y4mVlgU0.js";import"./useMountedState-DS2oCoAt.js";import"./useObservable-C04GqKKN.js";import"./useIsomorphicLayoutEffect-B1b_6019.js";import"./componentData-DFRBpqUL.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DSgRsb80.js";import"./BUIProvider-DWQLs8Cf.js";import"./openLink-Dxd353gg.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-njkYSD7I.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
