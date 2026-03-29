import{j as e,a7 as i,a8 as a,u as c}from"./iframe-zPAYUdEu.js";import{L as s,N as u}from"./Link-Cpe82tDX.js";import{w as m,c as l}from"./appWrappers-CyGM0G9r.js";import{u as p}from"./useRouteRef-BuSU5aIu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsHuEjY0.js";import"./lodash-BrIyKjTz.js";import"./makeStyles-novWPxOA.js";import"./useAnalytics-D1Ni702Z.js";import"./useApp-CLCQ45db.js";import"./WebStorage-C59k_2-p.js";import"./useAsync--LCD2HHX.js";import"./useMountedState-Dc-ywtxV.js";import"./componentData-t9Gbpb6x.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CJ1HAHb6.js";import"./useIsomorphicLayoutEffect-DsJAhsMf.js";import"./AppThemeApi-m0ZHBHRS.js";import"./BUIProvider-YYza03_H.js";import"./openLink-CpupEye9.js";const n=l({id:"storybook.test-route"}),d=()=>{const t=c();return e.jsxs("pre",{children:["Current location: ",t.pathname]})},E={title:"Navigation/Link",component:s,decorators:[t=>m(e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(t,{})]}),{mountedRoutes:{"/hello":n}})],tags:["!manifest"]},r=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})},o=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),component:u,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => {
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
}`,...o.parameters?.docs?.source}}};const F=["Default","PassProps"];export{r as Default,o as PassProps,F as __namedExportsOrder,E as default};
