import{j as e,a5 as i,a6 as a,a7 as m}from"./iframe-CIiIDGZ-.js";import{L as s,N as c}from"./Link-DJjPQadS.js";import{u as p}from"./useRouteRef-WKaaUx9b.js";import{w as l,c as u}from"./appWrappers-c2i-JRlv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cc1WYh9h.js";import"./lodash-BzBabpH3.js";import"./useAnalytics-C8Elrazu.js";import"./makeStyles-DIRFdalX.js";import"./useApp-CeorHsAH.js";import"./WebStorage-EqJM2U0F.js";import"./useAsync-B0vM_d2B.js";import"./useMountedState-IAzCyzSD.js";import"./componentData-NO4Ys3Nd.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Bpi2npx8.js";import"./useIsomorphicLayoutEffect-d_nSNOX-.js";import"./BUIProvider-gtQJ0CU8.js";import"./openLink-BYuufqBj.js";const n=u({id:"storybook.test-route"}),d=()=>{const o=m();return e.jsxs("pre",{children:["Current location: ",o.pathname]})},E={title:"Navigation/Link",component:s,decorators:[o=>l(e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(o,{})]}),{mountedRoutes:{"/hello":n}})],tags:["!manifest"]},r=()=>{const o=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:o(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",e.jsx(i,{children:e.jsx(a,{path:o(),element:e.jsx("h1",{children:"Hi there!"})})})]})},t=()=>{const o=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:o(),component:c,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",e.jsx(i,{children:e.jsx(a,{path:o(),element:e.jsx("h1",{children:"Hi there!"})})})]})};t.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"PassProps"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}>This link</Link>&nbsp;will utilize the react-router
      MemoryRouter's navigation
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}
    /** react-router-dom related prop */ component={RouterNavLink}
    /** material-ui related prop */ color="secondary">
        This link
      </Link>
      &nbsp;has props for both material-ui's component as well as for
      react-router-dom's
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...t.parameters?.docs?.source}}};const F=["Default","PassProps"];export{r as Default,t as PassProps,F as __namedExportsOrder,E as default};
