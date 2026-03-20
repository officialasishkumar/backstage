import{j as e,Y as n}from"./iframe-D0nL_Agr.js";import{H as a,r as i}from"./plugin-Cxd-grF5.js";import{s as c}from"./api-DK3LhVf2.js";import{S as o}from"./Grid-Cj5fjV2g.js";import{m}from"./makeStyles-CEEIeaPc.js";import{w as p}from"./appWrappers-DpvrWMrt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDL2X7CY.js";import"./Plugin-Baao644E.js";import"./componentData-BbYq1rWo.js";import"./useAnalytics-DHjT-X03.js";import"./useApp-D1uJ25an.js";import"./useRouteRef-D1c-R20K.js";import"./index-C_CdmF_Y.js";import"./WebStorage-uwUF_EA0.js";import"./useAsync-CTfQC1T2.js";import"./useMountedState-D6h1Oxy0.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";const N={title:"Plugins/Home/Components/SearchBar",decorators:[r=>p(e.jsx(e.Fragment,{children:e.jsx(n,{apis:[[c,{query:()=>Promise.resolve({results:[]})}]],children:e.jsx(r,{})})}),{mountedRoutes:{"/hello-search":i}})],tags:["!manifest"]},t=()=>e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{placeholder:"Search"})})}),d=m(r=>({searchBar:{display:"flex",maxWidth:"60vw",backgroundColor:r.palette.background.paper,boxShadow:r.shadows[1],padding:"8px 0",borderRadius:"50px",margin:"auto"},searchBarOutline:{borderStyle:"none"}})),s=()=>{const r=d();return e.jsx(o,{container:!0,justifyContent:"center",spacing:6,children:e.jsx(o,{container:!0,item:!0,xs:12,alignItems:"center",direction:"row",children:e.jsx(a,{classes:{root:r.searchBar},InputProps:{classes:{notchedOutline:r.searchBarOutline}},placeholder:"Search"})})})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
