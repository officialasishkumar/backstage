import{j as r,r as s,a9 as n,aa as m,ab as d,ac as c}from"./iframe-hebBxzMS.js";import{F as a}from"./FavoriteToggle-BYfC1uOr.js";import{w as p}from"./appWrappers-DG3qkWtx.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-wRXpjfve.js";import"./Popper-Nu0-WiMx.js";import"./Portal-DVg2kjtj.js";import"./makeStyles-BuKfj6eo.js";import"./icons-BdqIAVIA.js";import"./useApp-Di7SCwol.js";import"./WebStorage-BH3gxhUZ.js";import"./useAnalytics-DnJagaLH.js";import"./useAsync-DBxU8MB7.js";import"./useMountedState-BOTwgk6q.js";import"./componentData-3dYIRIMh.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTCVMere.js";import"./useIsomorphicLayoutEffect-C2Wk8JSq.js";import"./AppThemeApi-C6IiMRx5.js";import"./BUIProvider-BOqmKnYE.js";import"./openLink-CPB6xqLo.js";const N={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
