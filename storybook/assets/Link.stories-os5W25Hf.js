import{j as e}from"./iframe-UJriCXVl.js";import{L as s,N as c}from"./Link-BQi5yIop.js";import{R as i,c as a,d as m}from"./index-BSYbiaN1.js";import{w as u,c as l}from"./appWrappers-C5-t193K.js";import{u as p}from"./useRouteRef-DdNZogT9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C960_4ke.js";import"./lodash-DkQ6ZSlp.js";import"./makeStyles-njdNJK3x.js";import"./useAnalytics-CEoER_mo.js";import"./useApp-grD3_ewi.js";import"./WebStorage-DHFLt1me.js";import"./useAsync-BEYvHol3.js";import"./useMountedState-CWdL38Tt.js";import"./componentData-CaZ0Zp9-.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BfEDm6ba.js";import"./useIsomorphicLayoutEffect-q820unle.js";import"./AppThemeApi-DlmVHrbI.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";const n=l({id:"storybook.test-route"}),d=()=>{const t=m();return e.jsxs("pre",{children:["Current location: ",t.pathname]})},F={title:"Navigation/Link",component:s,decorators:[t=>u(e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(t,{})]}),{mountedRoutes:{"/hello":n}})],tags:["!manifest"]},r=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})},o=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),component:c,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => {
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
