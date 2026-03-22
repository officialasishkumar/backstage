import{j as e,Y as n}from"./iframe-BMq-ZiT3.js";import{H as a,r as i}from"./plugin-zo3JswL2.js";import{s as c}from"./api-BAYoJ8U2.js";import{S as o}from"./Grid-hHhpklqM.js";import{m}from"./makeStyles-DEf-u--3.js";import{w as p}from"./appWrappers-CzymjXER.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbtp83M-.js";import"./Plugin-j1KMSIFr.js";import"./componentData-DaTCFJYN.js";import"./useAnalytics-BK5GAN-T.js";import"./useApp-BJgXgSkF.js";import"./useRouteRef-DQijQwIX.js";import"./index-dAFNSupn.js";import"./WebStorage-CWRKPj_B.js";import"./useAsync-CF5ddlT2.js";import"./useMountedState-Cs8qVXdF.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DBNCI3Qd.js";import"./useIsomorphicLayoutEffect-Cxykuaei.js";import"./AppThemeApi-ZeM0F4k_.js";import"./BUIProvider-IzMHjHXy.js";import"./openLink-Brx0WDUe.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
