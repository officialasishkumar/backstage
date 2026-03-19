import{j as e,Y as n}from"./iframe-CBVwdAXc.js";import{H as a,r as i}from"./plugin-CrxGrvpH.js";import{s as c}from"./api-BJX2I_yt.js";import{S as o}from"./Grid-DWkTHZrC.js";import{m}from"./makeStyles-C24YcoXm.js";import{w as p}from"./appWrappers-BlnrEZL7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSS0U0hK.js";import"./Plugin-BHNEaDeA.js";import"./componentData-BVLy2Ait.js";import"./useAnalytics-Qr-pKmLn.js";import"./useApp-Dv9wNNjs.js";import"./useRouteRef-Dpud23t-.js";import"./index-D9ejMs_C.js";import"./WebStorage-IOrvc26O.js";import"./useAsync-CxJRBM1A.js";import"./useMountedState-7qHVdg4Q.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CSuacsqV.js";import"./useIsomorphicLayoutEffect-BurP_Bj6.js";import"./AppThemeApi-lxpkfbFj.js";import"./BUIProvider-YZy9Wrqs.js";import"./openLink-DK4oWnZh.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const T=["Default","CustomStyles"];export{s as CustomStyles,t as Default,T as __namedExportsOrder,N as default};
