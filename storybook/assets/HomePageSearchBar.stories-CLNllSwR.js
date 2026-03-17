import{j as e,Y as n}from"./iframe-2DflYetR.js";import{H as a,r as i}from"./plugin-DnZcSn7D.js";import{s as c}from"./api-C870QJqC.js";import{S as o}from"./Grid-DxUCjvP_.js";import{m}from"./makeStyles-B-9IZuRv.js";import{w as p}from"./appWrappers-DN6vgvpl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaV76UVV.js";import"./Plugin-DYvtYFMk.js";import"./componentData-Cq1ZACX6.js";import"./useAnalytics-D8PbdUhp.js";import"./useApp-YlOXCksD.js";import"./useRouteRef-DPTNTSna.js";import"./index-DAw4AdQ5.js";import"./useObservable-C4UWlvAt.js";import"./useIsomorphicLayoutEffect-B_v2HVpB.js";import"./useAsync-N8VXAn8N.js";import"./useMountedState-BmHtpzcF.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-CIE9UDb1.js";import"./openLink-C7ML4eFc.js";const D={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
