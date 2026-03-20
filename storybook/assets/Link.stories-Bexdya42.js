import{j as e}from"./iframe-BPVPwWzn.js";import{L as s,N as c}from"./Link-BrnKsdBt.js";import{R as i,c as a,d as m}from"./index-ClPDwBGK.js";import{w as u,c as l}from"./appWrappers-CJ8A4wmX.js";import{u as p}from"./useRouteRef-WMOYGVF2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRNmOV-A.js";import"./lodash-Da7OBv6p.js";import"./makeStyles-DL3RdYST.js";import"./useAnalytics-DVBaEwk3.js";import"./useApp-C5rsfXEx.js";import"./WebStorage-RsjDsUwp.js";import"./useAsync-BR7KsH4b.js";import"./useMountedState-e47W3NJl.js";import"./componentData-KR2ttMpT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-D13vfogS.js";import"./useIsomorphicLayoutEffect-D_UToJE7.js";import"./AppThemeApi-CHrimYAf.js";import"./BUIProvider-CpcGyQIQ.js";import"./openLink-Bc-74F4f.js";const n=l({id:"storybook.test-route"}),d=()=>{const t=m();return e.jsxs("pre",{children:["Current location: ",t.pathname]})},F={title:"Navigation/Link",component:s,decorators:[t=>u(e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(t,{})]}),{mountedRoutes:{"/hello":n}})],tags:["!manifest"]},r=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})},o=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),component:c,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => {
  const link = useRouteRef(routeRef);

  return (
    <>
      <Link to={link()}>This link</Link>&nbsp;will utilize the react-router
      MemoryRouter's navigation
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>
  );
};
`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const PassProps = () => {
  const link = useRouteRef(routeRef);

  return (
    <>
      <Link
        to={link()}
        /** react-router-dom related prop */
        component={RouterNavLink}
        /** material-ui related prop */
        color="secondary"
      >
        This link
      </Link>
      &nbsp;has props for both material-ui's component as well as for
      react-router-dom's
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>
  );
};
`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  return <>
      <Link to={link()}>This link</Link>&nbsp;will utilize the react-router
      MemoryRouter's navigation
      <Routes>
        <Route path={link()} element={<h1>Hi there!</h1>} />
      </Routes>
    </>;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const S=["Default","PassProps"];export{r as Default,o as PassProps,S as __namedExportsOrder,F as default};
