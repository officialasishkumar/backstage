import{aN as h,aO as y,aP as T,aQ as x,a0 as S,j as e,P as _,a1 as V}from"./iframe-hODDjxEI.js";import{M as j}from"./MenuBook-DQPpwiB6.js";import{S as u}from"./SearchType-DJI87ufq.js";import{s as P,M as g}from"./api-l1DFuRf7.js";import{S as R}from"./SearchContext-C5WlRdT0.js";import{S as m}from"./Grid-EriWvE-n.js";import"./preload-helper-PPVm8Dsz.js";import"./ExpandMore-DFqQ2-AE.js";import"./useAsync-DekbOmTi.js";import"./useMountedState-WIh-cZ-b.js";import"./translation-CftKoScH.js";import"./Box-D9xbeeDr.js";import"./styled-0hYU00PK.js";import"./AccordionDetails-DUzMIMZk.js";import"./index-B9sM2jn7.js";import"./Collapse-wne6B_is.js";import"./List-W4gqv1lF.js";import"./ListContext-DIhobSxE.js";import"./Divider-DXrAbp3F.js";import"./ListItem-DDCqoUKb.js";import"./ListItemIcon-Be-6XHnn.js";import"./ListItemText-DasnL6-v.js";import"./makeStyles-aIh2F1t-.js";import"./Tabs-Cth9PL7O.js";import"./KeyboardArrowRight--wlokrBF.js";import"./FormLabel-Bn5Wmcr4.js";import"./formControlState-DuKLYdlc.js";import"./InputLabel-BX5IwV94.js";import"./Select-CO9jyHaF.js";import"./Popover-CAbPHxGr.js";import"./Modal-BHs76e9X.js";import"./Portal-CzdVLRe2.js";import"./MenuItem-B1ty_1k5.js";import"./Checkbox-Cck7a_VE.js";import"./SwitchBase-B8znZq3u.js";import"./Chip-Or0EmgUT.js";import"./useAnalytics-DnjR9eFY.js";import"./lodash-m16iCv2r.js";var a={},d;function q(){if(d)return a;d=1;var r=h(),n=y();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");return a.default=p,a}var D=q();const I=S(D);var o={},v;function M(){if(v)return o;v=1;var r=h(),n=y();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return o.default=p,o}var A=M();const O=S(A),ye={title:"Plugins/Search/SearchType",component:u,decorators:[r=>e.jsx(V,{apis:[[P,new g]],children:e.jsx(R,{children:e.jsx(m,{container:!0,direction:"row",children:e.jsx(m,{item:!0,xs:4,children:e.jsx(r,{})})})})})],tags:["!manifest"]},f=["value-1","value-2","value-3"],t=()=>e.jsx(_,{style:{padding:10},children:e.jsx(u,{name:"Search type",values:f,defaultValue:f[0]})}),i=()=>e.jsx(u.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(j,{})},{value:"value-2",name:"Value Two",icon:e.jsx(O,{})},{value:"value-3",name:"Value Three",icon:e.jsx(I,{})}]}),s=()=>e.jsx(u.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"Tabs"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <SearchType.Accordion name="Result Types" defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One',
    icon: <CatalogIcon />
  }, {
    value: 'value-2',
    name: 'Value Two',
    icon: <DocsIcon />
  }, {
    value: 'value-3',
    name: 'Value Three',
    icon: <UsersGroupsIcon />
  }]} />;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <SearchType.Tabs defaultValue="value-1" types={[{
    value: 'value-1',
    name: 'Value One'
  }, {
    value: 'value-2',
    name: 'Value Two'
  }, {
    value: 'value-3',
    name: 'Value Three'
  }]} />;
}`,...s.parameters?.docs?.source}}};const Te=["Default","Accordion","Tabs"];export{i as Accordion,t as Default,s as Tabs,Te as __namedExportsOrder,ye as default};
