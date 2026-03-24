import{j as e,Y as n}from"./iframe-BZrpTwFW.js";import{H as a,r as i}from"./plugin-Ded9rCvu.js";import{s as c}from"./api-Crs085T9.js";import{S as o}from"./Grid-OEz6aKRJ.js";import{m}from"./makeStyles-CIE8BXXT.js";import{w as p}from"./appWrappers-CNh55iAq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DT7yD_MB.js";import"./Plugin-DX0oPFX5.js";import"./componentData-NRZfPv9y.js";import"./useAnalytics-CMcmWSHW.js";import"./useApp-4LCqZN-N.js";import"./useRouteRef-BYjVwWD0.js";import"./index-DNu1idMQ.js";import"./WebStorage-nSp6U5ws.js";import"./useAsync-BpVftW-X.js";import"./useMountedState-DxKyG1Ea.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CVJtQh5m.js";import"./useIsomorphicLayoutEffect-BY-4ZLY0.js";import"./AppThemeApi-C8apqIYf.js";import"./BUIProvider-CVmOZZtr.js";import"./openLink-2h5lI_6H.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
