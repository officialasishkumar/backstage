import{j as e}from"./iframe-wkUvrVVn.js";import{L as s,N as c}from"./Link-DO2my6Ck.js";import{R as i,d as a,u as m}from"./index-B5HVCV75.js";import{w as u,c as l}from"./appWrappers-Bu5nTIfu.js";import{u as p}from"./useRouteRef-COVGBgTh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VlsBe5q3.js";import"./lodash-DRqfpWl4.js";import"./makeStyles-D6j-HRPe.js";import"./useAnalytics-Ch7wjcGI.js";import"./useApp-3vTA-W2x.js";import"./WebStorage--0UlxnmK.js";import"./useAsync-pejW5ESq.js";import"./useMountedState-BzjLIEtJ.js";import"./componentData-C-cHGDZy.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-J1B-xOQ6.js";import"./useIsomorphicLayoutEffect-CXNMZHXl.js";import"./AppThemeApi-CjUUE6Rw.js";import"./BUIProvider-6lEx8047.js";import"./openLink-CRYj9xIm.js";const n=l({id:"storybook.test-route"}),d=()=>{const t=m();return e.jsxs("pre",{children:["Current location: ",t.pathname]})},F={title:"Navigation/Link",component:s,decorators:[t=>u(e.jsxs("div",{children:[e.jsx("div",{children:e.jsx(d,{})}),e.jsx(t,{})]}),{mountedRoutes:{"/hello":n}})],tags:["!manifest"]},r=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),children:"This link"})," will utilize the react-router MemoryRouter's navigation",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})},o=()=>{const t=p(n);return e.jsxs(e.Fragment,{children:[e.jsx(s,{to:t(),component:c,color:"secondary",children:"This link"})," has props for both material-ui's component as well as for react-router-dom's",e.jsx(i,{children:e.jsx(a,{path:t(),element:e.jsx("h1",{children:"Hi there!"})})})]})};o.story={name:"Accepts material-ui Link's and react-router-dom Link's props"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"PassProps"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => {
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
