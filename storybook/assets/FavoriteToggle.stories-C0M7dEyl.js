import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as c}from"./iframe-BPa6N3SD.js";import{F as a}from"./FavoriteToggle-CGSWtr7C.js";import{w as p}from"./appWrappers-DtPQmIZu.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip--dBTVPXa.js";import"./Popper-DYnRrkMR.js";import"./Portal-CybimJf6.js";import"./makeStyles-BPhOhugX.js";import"./icons-BbYRxQ9Z.js";import"./useApp-Hpyy33iD.js";import"./useObservable-DsHLmc1s.js";import"./useIsomorphicLayoutEffect-Cd1aE0vk.js";import"./useAnalytics-BfzgNjvV.js";import"./useAsync-Cqtr7-4i.js";import"./useMountedState-B69jA6Y1.js";import"./componentData-Cq49ZqHf.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-CCMAs2uM.js";import"./BUIProvider-BLvES4PE.js";import"./openLink-B0Vv0SU7.js";const k={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
