import{j as e,Y as n}from"./iframe-D9Y8dNt-.js";import{H as a,r as i}from"./plugin-BhAmUPtB.js";import{s as c}from"./api-DlUch_na.js";import{S as o}from"./Grid-ta46I7or.js";import{m}from"./makeStyles-BoqHtulH.js";import{w as p}from"./appWrappers-CN6V1Awt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCRWdV9i.js";import"./Plugin-BpoOtCjS.js";import"./componentData-BVVUJjR2.js";import"./useAnalytics-CX_WCi2s.js";import"./useApp-jISuD9D7.js";import"./useRouteRef-CNVhFF-b.js";import"./index-C1uQgXas.js";import"./WebStorage-0dpj7iaf.js";import"./useAsync-D9Cc9Vp-.js";import"./useMountedState-B-arlFCl.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CgBswJiJ.js";import"./useIsomorphicLayoutEffect-BjXjpzjp.js";import"./AppThemeApi-1AtRSy4c.js";import"./BUIProvider-Cr5RdwXf.js";import"./openLink-CijSEPaD.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
