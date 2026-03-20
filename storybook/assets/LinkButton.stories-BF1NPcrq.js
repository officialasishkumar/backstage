import{j as t,e as a}from"./iframe-D0nL_Agr.js";import{L as r}from"./LinkButton-DVpqXJtD.js";import{L as m}from"./Link-ChRPIsYf.js";import{D as h}from"./Divider-DZ5_AQ1V.js";import{L as u}from"./List-B6josrBo.js";import{L as i}from"./ListItem-BvZ21ujD.js";import{L as s}from"./ListItemText-COKbGLw8.js";import{B as c}from"./Button-CRuazPnN.js";import{d as f}from"./index-C_CdmF_Y.js";import{w as L,c as k}from"./appWrappers-DpvrWMrt.js";import{u as d}from"./useRouteRef-D1c-R20K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZW9dhqm.js";import"./lodash-C8hrBFZO.js";import"./makeStyles-CEEIeaPc.js";import"./useAnalytics-DHjT-X03.js";import"./useApp-D1uJ25an.js";import"./ListContext-Dwy-3B6k.js";import"./WebStorage-uwUF_EA0.js";import"./useAsync-CTfQC1T2.js";import"./useMountedState-D6h1Oxy0.js";import"./componentData-BbYq1rWo.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";const l=k({id:"storybook.test-route"}),g=()=>{const n=f();return t.jsxs("pre",{children:["Current location: ",n.pathname]})},Q={title:"Inputs/Button",component:r,decorators:[n=>L(t.jsxs(t.Fragment,{children:[t.jsxs(a,{children:["A collection of buttons that should be used in the Backstage interface. These leverage the properties inherited from"," ",t.jsx(m,{to:"https://material-ui.com/components/buttons/",children:"Material UI Button"}),", but include an opinionated set that align to the Backstage design."]}),t.jsx(h,{}),t.jsxs("div",{children:[t.jsx("div",{children:t.jsx(g,{})}),t.jsx(n,{})]})]}),{mountedRoutes:{"/hello":l}})],tags:["!manifest"]},e=()=>{const n=d(l);return t.jsxs(u,{children:[t.jsxs(i,{children:[t.jsxs(s,{children:[t.jsx(a,{variant:"h6",children:"Default Button:"}),"This is the default button design which should be used in most cases.",t.jsx("br",{}),t.jsx("pre",{children:'color="primary" variant="contained"'})]}),t.jsx(r,{to:n(),color:"primary",variant:"contained",children:"Register Component"})]}),t.jsxs(i,{children:[t.jsxs(s,{children:[t.jsx(a,{variant:"h6",children:"Secondary Button:"}),"Used for actions that cancel, skip, and in general perform negative functions, etc.",t.jsx("br",{}),t.jsx("pre",{children:'color="secondary" variant="contained"'})]}),t.jsx(r,{to:n(),color:"secondary",variant:"contained",children:"Cancel"})]}),t.jsxs(i,{children:[t.jsxs(s,{children:[t.jsx(a,{variant:"h6",children:"Tertiary Button:"}),"Used commonly in a ButtonGroup and when the button function itself is not a primary function on a page.",t.jsx("br",{}),t.jsx("pre",{children:'color="default" variant="outlined"'})]}),t.jsx(r,{to:n(),color:"default",variant:"outlined",children:"View Details"})]})]})},o=()=>{const n=d(l),p=()=>"Your click worked!";return t.jsx(t.Fragment,{children:t.jsxs(u,{children:[t.jsxs(i,{children:[t.jsx(r,{to:n(),color:"default",variant:"outlined",children:"Route Ref"}),"  has props for both Material UI's component as well as for react-router-dom's Route object."]}),t.jsxs(i,{children:[t.jsx(r,{to:"/staticpath",color:"default",variant:"outlined",children:"Static Path"}),"  links to a statically defined route. In general, this should be avoided."]}),t.jsxs(i,{children:[t.jsx(c,{href:"https://backstage.io",color:"default",variant:"outlined",children:"View URL"}),"  links to a defined URL using Material UI's Button."]}),t.jsxs(i,{children:[t.jsx(c,{onClick:p,color:"default",variant:"outlined",children:"Trigger Event"}),"  triggers an onClick event using Material UI's Button."]})]})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"ButtonLinks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
  const link = useRouteRef(routeRef);
  // Design Permutations:
  // color   = default | primary | secondary
  // variant = contained | outlined | text
  return (
    <List>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Default Button:</Typography>
          This is the default button design which should be used in most cases.
          <br />
          <pre>color="primary" variant="contained"</pre>
        </ListItemText>

        <LinkButton to={link()} color="primary" variant="contained">
          Register Component
        </LinkButton>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Secondary Button:</Typography>
          Used for actions that cancel, skip, and in general perform negative
          functions, etc.
          <br />
          <pre>color="secondary" variant="contained"</pre>
        </ListItemText>

        <LinkButton to={link()} color="secondary" variant="contained">
          Cancel
        </LinkButton>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Tertiary Button:</Typography>
          Used commonly in a ButtonGroup and when the button function itself is
          not a primary function on a page.
          <br />
          <pre>color="default" variant="outlined"</pre>
        </ListItemText>

        <LinkButton to={link()} color="default" variant="outlined">
          View Details
        </LinkButton>
      </ListItem>
    </List>
  );
};
`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const ButtonLinks = () => {
  const link = useRouteRef(routeRef);

  const handleClick = () => {
    return "Your click worked!";
  };

  return (
    <>
      <List>
        {
          // TODO: Refactor to use new routing mechanisms
        }
        <ListItem>
          <LinkButton to={link()} color="default" variant="outlined">
            Route Ref
          </LinkButton>
          &nbsp; has props for both Material UI's component as well as for
          react-router-dom's Route object.
        </ListItem>

        <ListItem>
          <LinkButton to="/staticpath" color="default" variant="outlined">
            Static Path
          </LinkButton>
          &nbsp; links to a statically defined route. In general, this should be
          avoided.
        </ListItem>

        <ListItem>
          <MaterialButton
            href="https://backstage.io"
            color="default"
            variant="outlined"
          >
            View URL
          </MaterialButton>
          &nbsp; links to a defined URL using Material UI's Button.
        </ListItem>

        <ListItem>
          <MaterialButton
            onClick={handleClick}
            color="default"
            variant="outlined"
          >
            Trigger Event
          </MaterialButton>
          &nbsp; triggers an onClick event using Material UI's Button.
        </ListItem>
      </List>
    </>
  );
};
`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  // Design Permutations:
  // color   = default | primary | secondary
  // variant = contained | outlined | text
  return <List>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Default Button:</Typography>
          This is the default button design which should be used in most cases.
          <br />
          <pre>color="primary" variant="contained"</pre>
        </ListItemText>

        <LinkButton to={link()} color="primary" variant="contained">
          Register Component
        </LinkButton>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Secondary Button:</Typography>
          Used for actions that cancel, skip, and in general perform negative
          functions, etc.
          <br />
          <pre>color="secondary" variant="contained"</pre>
        </ListItemText>

        <LinkButton to={link()} color="secondary" variant="contained">
          Cancel
        </LinkButton>
      </ListItem>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Tertiary Button:</Typography>
          Used commonly in a ButtonGroup and when the button function itself is
          not a primary function on a page.
          <br />
          <pre>color="default" variant="outlined"</pre>
        </ListItemText>

        <LinkButton to={link()} color="default" variant="outlined">
          View Details
        </LinkButton>
      </ListItem>
    </List>;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const link = useRouteRef(routeRef);
  const handleClick = () => {
    return 'Your click worked!';
  };
  return <>
      <List>
        {
        // TODO: Refactor to use new routing mechanisms
      }
        <ListItem>
          <LinkButton to={link()} color="default" variant="outlined">
            Route Ref
          </LinkButton>
          &nbsp; has props for both Material UI's component as well as for
          react-router-dom's Route object.
        </ListItem>

        <ListItem>
          <LinkButton to="/staticpath" color="default" variant="outlined">
            Static Path
          </LinkButton>
          &nbsp; links to a statically defined route. In general, this should be
          avoided.
        </ListItem>

        <ListItem>
          <MaterialButton href="https://backstage.io" color="default" variant="outlined">
            View URL
          </MaterialButton>
          &nbsp; links to a defined URL using Material UI's Button.
        </ListItem>

        <ListItem>
          <MaterialButton onClick={handleClick} color="default" variant="outlined">
            Trigger Event
          </MaterialButton>
          &nbsp; triggers an onClick event using Material UI's Button.
        </ListItem>
      </List>
    </>;
}`,...o.parameters?.docs?.source}}};const W=["Default","ButtonLinks"];export{o as ButtonLinks,e as Default,W as __namedExportsOrder,Q as default};
