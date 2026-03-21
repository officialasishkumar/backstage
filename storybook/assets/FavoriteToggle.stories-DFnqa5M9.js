import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as p}from"./iframe-UJriCXVl.js";import{F as a}from"./FavoriteToggle-RK-LnBtX.js";import{w as c}from"./appWrappers-C5-t193K.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-3VXaZMhT.js";import"./Popper-rQQJdySn.js";import"./Portal-C6ZN2ix7.js";import"./makeStyles-njdNJK3x.js";import"./icons-CW6Q07_o.js";import"./useApp-grD3_ewi.js";import"./WebStorage-DHFLt1me.js";import"./useAnalytics-CEoER_mo.js";import"./useAsync-BEYvHol3.js";import"./useMountedState-CWdL38Tt.js";import"./componentData-CaZ0Zp9-.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BSYbiaN1.js";import"./useObservable-BfEDm6ba.js";import"./useIsomorphicLayoutEffect-q820unle.js";import"./AppThemeApi-DlmVHrbI.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";const q={title:"Core/FavoriteToggle",component:a,decorators:[o=>c(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:p.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
