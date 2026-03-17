import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as c}from"./iframe-2DflYetR.js";import{F as a}from"./FavoriteToggle-RcTaSuW3.js";import{w as p}from"./appWrappers-DN6vgvpl.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-D6zoDIUy.js";import"./Popper-ClGkD4o6.js";import"./Portal-DXJMcYAV.js";import"./makeStyles-B-9IZuRv.js";import"./icons-B9xfIM1K.js";import"./useApp-YlOXCksD.js";import"./useObservable-C4UWlvAt.js";import"./useIsomorphicLayoutEffect-B_v2HVpB.js";import"./useAnalytics-D8PbdUhp.js";import"./useAsync-N8VXAn8N.js";import"./useMountedState-BmHtpzcF.js";import"./componentData-Cq1ZACX6.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-DAw4AdQ5.js";import"./BUIProvider-CIE9UDb1.js";import"./openLink-C7ML4eFc.js";const k={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...t.parameters?.docs?.source}}};const N=["Default","WithThemeOverride"];export{e as Default,t as WithThemeOverride,N as __namedExportsOrder,k as default};
