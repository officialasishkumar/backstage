const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-CGW2NAIu.js","./iframe-zPAYUdEu.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-vxbuw9ol.js","./useDebounce-CyN0wFfn.js","./translation-C6jueigP.js","./SearchContext-Dc9_fiNy.js","./lodash-BrIyKjTz.js","./useAsync--LCD2HHX.js","./useMountedState-Dc-ywtxV.js","./api-D7o85IEZ.js","./useAnalytics-D1Ni702Z.js","./InputAdornment-D8KmwFNZ.js","./formControlState-BGvilFse.js","./Button-C6inPv2p.js","./TextField-D84vFrbv.js","./Select-DPNYgzNQ.js","./index-B9sM2jn7.js","./Popover-DXqpzK7c.js","./Modal-Cb_IbwSz.js","./Portal-ceA7f9a1.js","./List-Blmd7r0h.js","./ListContext-CTsHD7ZV.js","./FormLabel-DLUr_v9K.js","./InputLabel-CMAx8AjN.js","./useApp-CLCQ45db.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,a2 as u}from"./iframe-zPAYUdEu.js";import{s as d,M as l}from"./api-D7o85IEZ.js";import{SearchBar as m}from"./SearchBar-CGW2NAIu.js";import{S as h}from"./SearchContext-Dc9_fiNy.js";import{S as p}from"./Grid-BhIWWG4z.js";import{m as S}from"./makeStyles-novWPxOA.js";import{w as B}from"./appWrappers-CyGM0G9r.js";import"./useAnalytics-D1Ni702Z.js";import"./Search-vxbuw9ol.js";import"./useDebounce-CyN0wFfn.js";import"./translation-C6jueigP.js";import"./InputAdornment-D8KmwFNZ.js";import"./formControlState-BGvilFse.js";import"./Button-C6inPv2p.js";import"./TextField-D84vFrbv.js";import"./Select-DPNYgzNQ.js";import"./index-B9sM2jn7.js";import"./Popover-DXqpzK7c.js";import"./Modal-Cb_IbwSz.js";import"./Portal-ceA7f9a1.js";import"./List-Blmd7r0h.js";import"./ListContext-CTsHD7ZV.js";import"./FormLabel-DLUr_v9K.js";import"./InputLabel-CMAx8AjN.js";import"./useApp-CLCQ45db.js";import"./lodash-BrIyKjTz.js";import"./useAsync--LCD2HHX.js";import"./useMountedState-Dc-ywtxV.js";import"./WebStorage-C59k_2-p.js";import"./componentData-t9Gbpb6x.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CJ1HAHb6.js";import"./useIsomorphicLayoutEffect-DsJAhsMf.js";import"./AppThemeApi-m0ZHBHRS.js";import"./BUIProvider-YYza03_H.js";import"./openLink-CpupEye9.js";const oe={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-CGW2NAIu.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const ae=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,ae as __namedExportsOrder,oe as default};
