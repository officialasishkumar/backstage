import{j as e,a2 as n}from"./iframe-CsOrEaZh.js";import{H as a,r as i}from"./plugin-zRMra2ab.js";import{s as c}from"./api-CDg9Azu3.js";import{S as o}from"./Grid-Cp5B6vj7.js";import{m}from"./makeStyles-RXMzfVyC.js";import{w as p}from"./appWrappers-BvxLm1EU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOlnX8lR.js";import"./Plugin-BB25VZAi.js";import"./componentData-D2PsLXfp.js";import"./useAnalytics-Dzy9lLMd.js";import"./useApp-xQCVi238.js";import"./useRouteRef-CDuLrl4T.js";import"./WebStorage-MTKsO0K2.js";import"./useAsync-SkXlsC6H.js";import"./useMountedState-BoYCIFcM.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DAaVJNgT.js";import"./useIsomorphicLayoutEffect-CGDSOLtL.js";import"./AppThemeApi-B_GxqhKP.js";import"./BUIProvider-DqcKutYD.js";import"./openLink-DxicnjxI.js";const E={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar placeholder="Search" />
      </Grid>
    </Grid>;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <Grid container item xs={12} alignItems="center" direction="row">
        <HomePageSearchBar classes={{
        root: classes.searchBar
      }} InputProps={{
        classes: {
          notchedOutline: classes.searchBarOutline
        }
      }} placeholder="Search" />
      </Grid>
    </Grid>;
}`,...s.parameters?.docs?.source}}};const N=["Default","CustomStyles"];export{s as CustomStyles,t as Default,N as __namedExportsOrder,E as default};
