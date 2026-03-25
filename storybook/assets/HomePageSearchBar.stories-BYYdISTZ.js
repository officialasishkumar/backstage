import{j as e,Y as n}from"./iframe-Bc_t70P9.js";import{H as a,r as i}from"./plugin-BmdyE8_o.js";import{s as c}from"./api-C2AYqgxU.js";import{S as o}from"./Grid-C636lq8b.js";import{m}from"./makeStyles-BFdqtOa2.js";import{w as p}from"./appWrappers-ARkgjiFN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYApe_DV.js";import"./Plugin-3piQqfVL.js";import"./componentData-B03hUwNt.js";import"./useAnalytics-B6nhj7pL.js";import"./useApp--yeriI7g.js";import"./useRouteRef-C26AoQ3E.js";import"./index-BCiK2kdg.js";import"./WebStorage-B1Xqa_0m.js";import"./useAsync-wj_PVQkh.js";import"./useMountedState-P4R8GCuk.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DXFbYSDT.js";import"./useIsomorphicLayoutEffect-CZch1A4s.js";import"./AppThemeApi-D0kZ4W1Y.js";import"./BUIProvider-DlGeXRAl.js";import"./openLink-BJkfNliT.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
