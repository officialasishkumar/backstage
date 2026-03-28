import{j as r,r as s,a9 as n,aa as m,ab as d,ac as c}from"./iframe-DIo-SVbu.js";import{F as a}from"./FavoriteToggle-DK1GW5i0.js";import{w as p}from"./appWrappers-DR3WgLiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-RSYyjwWd.js";import"./Popper-Mh-qpcao.js";import"./Portal-CvYRjmi_.js";import"./makeStyles-DQU7Dv0P.js";import"./icons-VJ1lKeKc.js";import"./useApp-DoXX_S3p.js";import"./WebStorage-BK2KlcPz.js";import"./useAnalytics-Dz8yJH5J.js";import"./useAsync-CZHEyuUs.js";import"./useMountedState-CYCgoyDm.js";import"./componentData-Cq2oJfSV.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-rc5V7nNm.js";import"./useIsomorphicLayoutEffect-DFFlChJX.js";import"./AppThemeApi-napO7fl3.js";import"./BUIProvider-CiWIfurT.js";import"./openLink-Cz27Urod.js";const N={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
