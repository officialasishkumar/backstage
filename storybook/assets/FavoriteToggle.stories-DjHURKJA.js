import{j as r,r as s,a1 as n,a2 as m,a3 as d,a4 as c}from"./iframe-D94_c1Tp.js";import{F as a}from"./FavoriteToggle-B5bfHjn3.js";import{w as p}from"./appWrappers-ZQzcO08Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-jf0VIgLY.js";import"./Popper-D6Rg0_UH.js";import"./Portal-D3nAj-4m.js";import"./makeStyles-CKqiAwnv.js";import"./icons-BwTL0vxQ.js";import"./useApp-DAxCr7ZI.js";import"./useObservable-iN5Ns7Jc.js";import"./useIsomorphicLayoutEffect-CsFVC7Nn.js";import"./useAnalytics-B9rHpaUX.js";import"./useAsync-DTqsCBT6.js";import"./useMountedState-jRxC8-9y.js";import"./componentData-4fd3-zn4.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BrZ8YAao.js";import"./BUIProvider-DcamUp_A.js";import"./openLink-CpY4wZ7E.js";const k={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
