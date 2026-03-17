import{j as e}from"./iframe-9SnFn8NI.js";import{L as s,N as c}from"./Link-CwdNwFvc.js";import{R as i,c as a,d as m}from"./index-DSgRsb80.js";import{w as u,c as l}from"./appWrappers-gCP1PHw1.js";import{u as p}from"./useRouteRef-BEHAM5Os.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl14oj1p.js";import"./lodash-D_ItgaGX.js";import"./makeStyles-V6CeBGqV.js";import"./useAnalytics-BPrcyc7d.js";import"./useApp-BcoyKQFG.js";import"./useObservable-C04GqKKN.js";import"./useIsomorphicLayoutEffect-B1b_6019.js";import"./useAsync-Y4mVlgU0.js";import"./useMountedState-DS2oCoAt.js";import"./componentData-DFRBpqUL.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DWQLs8Cf.js";import"./openLink-Dxd353gg.js";const n=l({id:"storybook.test-route"}),d=()=>{const t=m();return e.jsxs("pre",{children:["Current location: ",t.pathname]})},A={title:"Navigation/Link",component:s,decorators:[t=>u(e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(t,{})]}),{mountedRoutes:{"/hello":n}})],tags:["!manifest"]},r=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})},o=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),component:c,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => {
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
}`,...o.parameters?.docs?.source}}};const E=["Default","PassProps"];export{r as Default,o as PassProps,E as __namedExportsOrder,A as default};
