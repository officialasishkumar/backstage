import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as p}from"./iframe-DsZtuuTR.js";import{F as a}from"./FavoriteToggle-CEGlaxNi.js";import{w as c}from"./appWrappers-ar1MFznU.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-BnnSJaTg.js";import"./Popper-DOHUvbmz.js";import"./Portal-DR4gT_uM.js";import"./makeStyles-41TQbijK.js";import"./icons-BFCC99y3.js";import"./useApp-bTnD5DHs.js";import"./WebStorage-wbCsrwiK.js";import"./useAnalytics-YS7OZ-uO.js";import"./useAsync-gJD2Ho9T.js";import"./useMountedState-COxOjAGe.js";import"./componentData-DPwp5LM5.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-uH1xIlYD.js";import"./useObservable-87F9ihSH.js";import"./useIsomorphicLayoutEffect-gF7jK0N4.js";import"./AppThemeApi-DfBY-Xua.js";import"./BUIProvider-CyUmZSwJ.js";import"./openLink-D7WjByac.js";const q={title:"Core/FavoriteToggle",component:a,decorators:[o=>c(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:p.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
