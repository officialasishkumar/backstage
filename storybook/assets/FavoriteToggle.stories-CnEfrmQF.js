import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as p}from"./iframe-BPVPwWzn.js";import{F as a}from"./FavoriteToggle-CSaUGhcO.js";import{w as c}from"./appWrappers-CJ8A4wmX.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-D-5NYnGf.js";import"./Popper-D0Hr6Gkt.js";import"./Portal-AbzTFUuq.js";import"./makeStyles-DL3RdYST.js";import"./icons-Bk3xI_3Q.js";import"./useApp-C5rsfXEx.js";import"./WebStorage-RsjDsUwp.js";import"./useAnalytics-DVBaEwk3.js";import"./useAsync-BR7KsH4b.js";import"./useMountedState-e47W3NJl.js";import"./componentData-KR2ttMpT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-ClPDwBGK.js";import"./useObservable-D13vfogS.js";import"./useIsomorphicLayoutEffect-D_UToJE7.js";import"./AppThemeApi-CHrimYAf.js";import"./BUIProvider-CpcGyQIQ.js";import"./openLink-Bc-74F4f.js";const q={title:"Core/FavoriteToggle",component:a,decorators:[o=>c(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:p.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <FavoriteToggle
      id="favorite-toggle"
      title="Add entity to favorites"
      isFavorite={isFavorite}
      onToggle={setFavorite}
    />
  );
};
`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{code:`const WithThemeOverride = () => {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <UnifiedThemeProvider theme={theme}>
      <FavoriteToggle
        id="favorite-toggle"
        title="Add entity to favorites"
        isFavorite={isFavorite}
        onToggle={setFavorite}
      />
    </UnifiedThemeProvider>
  );
};
`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const [isFavorite, setFavorite] = useState(false);
  return <FavoriteToggle id="favorite-toggle" title="Add entity to favorites" isFavorite={isFavorite} onToggle={setFavorite} />;
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [isFavorite, setFavorite] = useState(false);
  return <UnifiedThemeProvider theme={theme}>
      <FavoriteToggle id="favorite-toggle" title="Add entity to favorites" isFavorite={isFavorite} onToggle={setFavorite} />
    </UnifiedThemeProvider>;
}`,...t.parameters?.docs?.source}}};const C=["Default","WithThemeOverride"];export{e as Default,t as WithThemeOverride,C as __namedExportsOrder,q as default};
