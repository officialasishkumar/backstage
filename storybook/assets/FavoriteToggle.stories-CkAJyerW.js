import{j as r,r as s,a9 as n,aa as m,ab as d,ac as c}from"./iframe-zPAYUdEu.js";import{F as a}from"./FavoriteToggle-Cn6L54XJ.js";import{w as p}from"./appWrappers-CyGM0G9r.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-Dv9iFuGM.js";import"./Popper-CGDdcMf9.js";import"./Portal-ceA7f9a1.js";import"./makeStyles-novWPxOA.js";import"./icons-DCjkJ1Eb.js";import"./useApp-CLCQ45db.js";import"./WebStorage-C59k_2-p.js";import"./useAnalytics-D1Ni702Z.js";import"./useAsync--LCD2HHX.js";import"./useMountedState-Dc-ywtxV.js";import"./componentData-t9Gbpb6x.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CJ1HAHb6.js";import"./useIsomorphicLayoutEffect-DsJAhsMf.js";import"./AppThemeApi-m0ZHBHRS.js";import"./BUIProvider-YYza03_H.js";import"./openLink-CpupEye9.js";const N={title:"Core/FavoriteToggle",component:a,decorators:[o=>p(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:c.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
