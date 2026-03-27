import{j as r,r as s,a9 as n,aa as m,ab as d,ac as c}from"./iframe-BzEx-mzh.js";import{F as a}from"./FavoriteToggle-DoAeqNrV.js";import{w as p}from"./appWrappers-CZW9HA5c.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Co7RbJ52.js";import"./Popper-DIuKqKML.js";import"./Portal-BVejhVwL.js";import"./makeStyles-KrlZ5-Ut.js";import"./icons-C055kPA_.js";import"./useApp-X2JlXEhZ.js";import"./WebStorage-BrHL4_P6.js";import"./useAnalytics-CqkzYMRO.js";import"./useAsync-DVTCMMKI.js";import"./useMountedState-BkNjOVOx.js";import"./componentData-CKHhX2z1.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BQUAgOP-.js";import"./useIsomorphicLayoutEffect-CdGTBNnL.js";import"./AppThemeApi-D70truRB.js";import"./BUIProvider-CKEPa0P4.js";import"./openLink-iXSrpszV.js";const N={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
