import{j as e,Y as n}from"./iframe-CtYv7QJ0.js";import{H as a,r as i}from"./plugin-BHkhBd8T.js";import{s as c}from"./api-Bw0KAEXM.js";import{S as o}from"./Grid-BCbLl6WO.js";import{m}from"./makeStyles--1ATzXv9.js";import{w as p}from"./appWrappers-Cqiwuyfc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt5QJEz8.js";import"./Plugin-CQNzAehA.js";import"./componentData-Cxf138iF.js";import"./useAnalytics-Bl__AmNu.js";import"./useApp-CZQSE3E9.js";import"./useRouteRef-apUMSEnC.js";import"./index-CgDq3XR-.js";import"./useObservable-_9EJvrH2.js";import"./useIsomorphicLayoutEffect-DSWv8SaO.js";import"./useAsync-Cl2aaync.js";import"./useMountedState-DitFhSJJ.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DCcFMRr-.js";import"./openLink-Bmz1Jei1.js";const D={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
