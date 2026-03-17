const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-By-LL6dF.js","./iframe-CtYv7QJ0.js","./preload-helper-PPVm8Dsz.js","./iframe-CmXu-F3L.css","./Search-BMwPiWDl.js","./useDebounce-CK22qED9.js","./translation-C1HiIxR_.js","./SearchContext-HEXn9yW9.js","./lodash-CtZ09CsL.js","./useAsync-Cl2aaync.js","./useMountedState-DitFhSJJ.js","./api-Bw0KAEXM.js","./useAnalytics-Bl__AmNu.js","./InputAdornment-E2b1P_pX.js","./formControlState-9tAobm--.js","./Button-CZONJyyv.js","./TextField-Ct5Yc_VA.js","./Select-0NspFozQ.js","./index-B9sM2jn7.js","./Popover-Cetlf1AD.js","./Modal-D_Q7hd0G.js","./Portal-BRtlHwp1.js","./List-DmvJHB8z.js","./ListContext-BuapdplI.js","./FormLabel-BS70SnD9.js","./InputLabel-pfRlcJW0.js","./useApp-CZQSE3E9.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,Y as u}from"./iframe-CtYv7QJ0.js";import{s as d,M as l}from"./api-Bw0KAEXM.js";import{SearchBar as m}from"./SearchBar-By-LL6dF.js";import{S as h}from"./SearchContext-HEXn9yW9.js";import{S as p}from"./Grid-BCbLl6WO.js";import{m as S}from"./makeStyles--1ATzXv9.js";import{w as B}from"./appWrappers-Cqiwuyfc.js";import"./Search-BMwPiWDl.js";import"./useDebounce-CK22qED9.js";import"./translation-C1HiIxR_.js";import"./InputAdornment-E2b1P_pX.js";import"./formControlState-9tAobm--.js";import"./Button-CZONJyyv.js";import"./TextField-Ct5Yc_VA.js";import"./Select-0NspFozQ.js";import"./index-B9sM2jn7.js";import"./Popover-Cetlf1AD.js";import"./Modal-D_Q7hd0G.js";import"./Portal-BRtlHwp1.js";import"./List-DmvJHB8z.js";import"./ListContext-BuapdplI.js";import"./FormLabel-BS70SnD9.js";import"./InputLabel-pfRlcJW0.js";import"./useAnalytics-Bl__AmNu.js";import"./useApp-CZQSE3E9.js";import"./lodash-CtZ09CsL.js";import"./useAsync-Cl2aaync.js";import"./useMountedState-DitFhSJJ.js";import"./useObservable-_9EJvrH2.js";import"./useIsomorphicLayoutEffect-DSWv8SaO.js";import"./componentData-Cxf138iF.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-CgDq3XR-.js";import"./BUIProvider-DCcFMRr-.js";import"./openLink-Bmz1Jei1.js";const se={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-By-LL6dF.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
