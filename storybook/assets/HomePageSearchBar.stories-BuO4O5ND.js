import{j as e,Y as n}from"./iframe--MS66teN.js";import{H as a,r as i}from"./plugin-BkjzhtOt.js";import{s as c}from"./api-B_xgBHtB.js";import{S as o}from"./Grid-S31HS9ey.js";import{m}from"./makeStyles-B3gZJdXQ.js";import{w as p}from"./appWrappers-BuSdHoSh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dn6sZXVI.js";import"./Plugin-D8gTPngt.js";import"./componentData-BT2uJg7J.js";import"./useAnalytics-B-3-tPoN.js";import"./useApp-P40Yy8FV.js";import"./useRouteRef-BL4Y7NZZ.js";import"./index-C8lN7z6e.js";import"./WebStorage-D_nrcGMJ.js";import"./useAsync-BeXeBLNv.js";import"./useMountedState-BkwGR7C4.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-7Wh-bZ_e.js";import"./useIsomorphicLayoutEffect-Fxu556Ss.js";import"./AppThemeApi-CDpY_kGN.js";import"./BUIProvider-MOAkSoGK.js";import"./openLink-DbqcEISv.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
