import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as p}from"./iframe-BNkUY5HA.js";import{F as a}from"./FavoriteToggle-BS-5JuVC.js";import{w as c}from"./appWrappers--MLEicpW.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Dh1IM1oZ.js";import"./Popper-Dy4ol0j8.js";import"./Portal-DQf1B4dl.js";import"./makeStyles-D1M3cvTC.js";import"./icons-lCfDaFE6.js";import"./useApp-DK-Jjl42.js";import"./WebStorage-BSZ3f6rC.js";import"./useAnalytics-dAdITyCa.js";import"./useAsync-B5fuvW4L.js";import"./useMountedState-D6BGeb6K.js";import"./componentData-CbggJDax.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DN_6yxbn.js";import"./useObservable-Cxumsgpz.js";import"./useIsomorphicLayoutEffect-CEtA1_c_.js";import"./AppThemeApi-DdnvDi-C.js";import"./BUIProvider-COrfszv7.js";import"./openLink-CO4LZzkY.js";const q={title:"Core/FavoriteToggle",component:a,decorators:[o=>c(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:p.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
