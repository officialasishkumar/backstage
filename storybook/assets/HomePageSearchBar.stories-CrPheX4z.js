import{j as e,Y as n}from"./iframe-qq9LRUBn.js";import{H as a,r as i}from"./plugin-DeSmSmy5.js";import{s as c}from"./api-B9Gt_YoD.js";import{S as o}from"./Grid-D9rzqufp.js";import{m}from"./makeStyles-DysICvYt.js";import{w as p}from"./appWrappers-CkqvCYZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIlR0a4k.js";import"./Plugin-CKFEFxMv.js";import"./componentData-g0Y7Tr3a.js";import"./useAnalytics-NY-e7y1h.js";import"./useApp-DDQS_rrk.js";import"./useRouteRef-D5nMpXtZ.js";import"./index-29ewTlsg.js";import"./WebStorage-DBgpTxHB.js";import"./useAsync-BvqGBP4s.js";import"./useMountedState-e54cfxno.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-sfeOjMZC.js";import"./useIsomorphicLayoutEffect-DCCJvql9.js";import"./AppThemeApi-DuUscH2P.js";import"./BUIProvider-Dsng5cuc.js";import"./openLink-DhqiiT6V.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
