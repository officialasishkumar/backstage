import{j as r,r as s,a2 as n,a3 as m,a4 as d,a5 as p}from"./iframe-D0nL_Agr.js";import{F as a}from"./FavoriteToggle-CQQfCPFv.js";import{w as c}from"./appWrappers-DpvrWMrt.js";import"./preload-helper-PPVm8Dsz.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";import"./Portal-CKyiLAPX.js";import"./makeStyles-CEEIeaPc.js";import"./icons-BS2-GadN.js";import"./useApp-D1uJ25an.js";import"./WebStorage-uwUF_EA0.js";import"./useAnalytics-DHjT-X03.js";import"./useAsync-CTfQC1T2.js";import"./useMountedState-D6h1Oxy0.js";import"./componentData-BbYq1rWo.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-C_CdmF_Y.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";const q={title:"Core/FavoriteToggle",component:a,decorators:[o=>c(r.jsx(o,{}))],tags:["!manifest"]},e=()=>{const[o,i]=s.useState(!1);return r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})},v=m({...d({palette:p.dark}),components:{BackstageFavoriteToggleIcon:{styleOverrides:{icon:()=>({color:"aqua"}),iconBorder:()=>({color:"white"})}}}}),t=()=>{const[o,i]=s.useState(!1);return r.jsx(n,{theme:v,children:r.jsx(a,{id:"favorite-toggle",title:"Add entity to favorites",isFavorite:o,onToggle:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithThemeOverride"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
