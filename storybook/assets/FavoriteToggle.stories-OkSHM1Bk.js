import{j as r,r as s,a9 as n,aa as m,ab as d,ac as c}from"./iframe-CsOrEaZh.js";import{F as a}from"./FavoriteToggle-JCFB_AG3.js";import{w as p}from"./appWrappers-BvxLm1EU.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-DzgDEUmc.js";import"./Popper-CCI27zHX.js";import"./Portal-DzcrA5JX.js";import"./makeStyles-RXMzfVyC.js";import"./icons-DiF9f17b.js";import"./useApp-xQCVi238.js";import"./WebStorage-MTKsO0K2.js";import"./useAnalytics-Dzy9lLMd.js";import"./useAsync-SkXlsC6H.js";import"./useMountedState-BoYCIFcM.js";import"./componentData-D2PsLXfp.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DAaVJNgT.js";import"./useIsomorphicLayoutEffect-CGDSOLtL.js";import"./AppThemeApi-B_GxqhKP.js";import"./BUIProvider-DqcKutYD.js";import"./openLink-DxicnjxI.js";const N={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...t.parameters?.docs?.source}}};const b=["Default","WithThemeOverride"];export{e as Default,t as WithThemeOverride,b as __namedExportsOrder,N as default};
