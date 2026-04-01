import{j as e,a1 as n}from"./iframe-hODDjxEI.js";import{H as a,r as i}from"./plugin-BQSmv4Bn.js";import{S as o}from"./Grid-EriWvE-n.js";import{w as c}from"./appWrappers-DUNJ2DyT.js";import{m}from"./makeStyles-aIh2F1t-.js";import{s as p}from"./api-l1DFuRf7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMCtZSsa.js";import"./Plugin-EbxOdKk9.js";import"./componentData-Da0rDDu4.js";import"./useAnalytics-DnjR9eFY.js";import"./useApp-4cPWtTY3.js";import"./useRouteRef-CiEsUmyu.js";import"./WebStorage-BDXQz_Ed.js";import"./useAsync-DekbOmTi.js";import"./useMountedState-WIh-cZ-b.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DyFcC5QT.js";import"./useIsomorphicLayoutEffect-DPIVbu6L.js";import"./BUIProvider-DDQSxPNK.js";import"./openLink-DQgtmsfk.js";const D={title:"Plugins/Home/Components/SearchBar",decorators:[r=>c(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[p,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const E=["Default","CustomStyles"];export{s as CustomStyles,t as Default,E as __namedExportsOrder,D as default};
