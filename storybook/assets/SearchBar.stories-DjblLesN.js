const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-UvThREIF.js","./iframe-Du1NhnRf.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-BSBE9D8L.js","./useDebounce-C79pJ86S.js","./translation-DLWE9-X3.js","./SearchContext-B-x1kr1F.js","./lodash-BSRFOEMl.js","./useAsync-C0CViB27.js","./useMountedState-D7sVuivw.js","./api-BAjKqota.js","./useAnalytics-Ms6WfRSX.js","./InputAdornment-DT-BXHDu.js","./formControlState-Bw5sbh-V.js","./Button-_IONOL7e.js","./TextField-CHHanyFS.js","./Select-iPsqydas.js","./index-B9sM2jn7.js","./Popover-C3tQpyPo.js","./Modal-C6NV1WST.js","./Portal--jynCFKo.js","./List-C_-v2Bm5.js","./ListContext-CHRkL_NO.js","./FormLabel-Bitjk_1S.js","./InputLabel-DOQIp7an.js","./useApp-DfeMOLKR.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,Y as u}from"./iframe-Du1NhnRf.js";import{s as d,M as l}from"./api-BAjKqota.js";import{SearchBar as m}from"./SearchBar-UvThREIF.js";import{S as h}from"./SearchContext-B-x1kr1F.js";import{S as p}from"./Grid-O7pUBILR.js";import{m as S}from"./makeStyles-BE8gP3w7.js";import{w as B}from"./appWrappers-Dy7pQDyw.js";import"./Search-BSBE9D8L.js";import"./useDebounce-C79pJ86S.js";import"./translation-DLWE9-X3.js";import"./InputAdornment-DT-BXHDu.js";import"./formControlState-Bw5sbh-V.js";import"./Button-_IONOL7e.js";import"./TextField-CHHanyFS.js";import"./Select-iPsqydas.js";import"./index-B9sM2jn7.js";import"./Popover-C3tQpyPo.js";import"./Modal-C6NV1WST.js";import"./Portal--jynCFKo.js";import"./List-C_-v2Bm5.js";import"./ListContext-CHRkL_NO.js";import"./FormLabel-Bitjk_1S.js";import"./InputLabel-DOQIp7an.js";import"./useAnalytics-Ms6WfRSX.js";import"./useApp-DfeMOLKR.js";import"./lodash-BSRFOEMl.js";import"./useAsync-C0CViB27.js";import"./useMountedState-D7sVuivw.js";import"./useObservable-DFKmxMmG.js";import"./useIsomorphicLayoutEffect-Bqw_eD0t.js";import"./componentData-CgD6suoV.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-Ck8n2OOF.js";import"./BUIProvider-CfT0m_qr.js";import"./openLink-CxapqtyB.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-UvThREIF.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
