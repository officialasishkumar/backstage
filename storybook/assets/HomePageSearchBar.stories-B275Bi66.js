import{j as e,Y as n}from"./iframe-CymjdxqK.js";import{H as a,r as i}from"./plugin-DcLwqplX.js";import{s as c}from"./api-B30Qxg8X.js";import{S as o}from"./Grid-Dr2ljIC_.js";import{m}from"./makeStyles-BMXXhCWz.js";import{w as p}from"./appWrappers-CKqDR5XN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2oLZzr4.js";import"./Plugin-DwxBsvr9.js";import"./componentData-C0LwwTGy.js";import"./useAnalytics-Du0UI_Xd.js";import"./useApp-uGimLtOi.js";import"./useRouteRef-zbd3zpRI.js";import"./index-BW-EXu7a.js";import"./WebStorage-D7ewBRR_.js";import"./useAsync-DNPZfGZ5.js";import"./useMountedState-BFsHBQyj.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BH1nonIT.js";import"./useIsomorphicLayoutEffect-rE2UtcSW.js";import"./AppThemeApi-CCLkHGzt.js";import"./BUIProvider-B08yKp77.js";import"./openLink-CvTgs9Lx.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
