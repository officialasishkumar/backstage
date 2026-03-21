import{j as e,Y as n}from"./iframe-UJriCXVl.js";import{H as a,r as i}from"./plugin-fx-_1HRS.js";import{s as c}from"./api-B7VeJZLe.js";import{S as o}from"./Grid-D6wRU41f.js";import{m}from"./makeStyles-njdNJK3x.js";import{w as p}from"./appWrappers-C5-t193K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKaM2xsk.js";import"./Plugin-iqe1oWeO.js";import"./componentData-CaZ0Zp9-.js";import"./useAnalytics-CEoER_mo.js";import"./useApp-grD3_ewi.js";import"./useRouteRef-DdNZogT9.js";import"./index-BSYbiaN1.js";import"./WebStorage-DHFLt1me.js";import"./useAsync-BEYvHol3.js";import"./useMountedState-CWdL38Tt.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BfEDm6ba.js";import"./useIsomorphicLayoutEffect-q820unle.js";import"./AppThemeApi-DlmVHrbI.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
