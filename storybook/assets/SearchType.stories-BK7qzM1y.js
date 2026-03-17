import{aG as h,aH as T,aI as y,aJ as V,X as S,j as e,Y as x,P as _}from"./iframe-BPa6N3SD.js";import{M as I}from"./MenuBook-nnGb2cT0.js";import{S as u}from"./SearchType-CK0NTgWW.js";import{s as g,M as j}from"./api-BYihdc0a.js";import{S as P}from"./SearchContext-Ccy3dm38.js";import{S as m}from"./Grid-DrfNOwcD.js";import"./preload-helper-PPVm8Dsz.js";import"./ExpandMore-DqcL3_Ti.js";import"./useAsync-Cqtr7-4i.js";import"./useMountedState-B69jA6Y1.js";import"./translation-B7ouiqhE.js";import"./makeStyles-BPhOhugX.js";import"./Box-Cnz1HHCH.js";import"./styled-DR1Q9dRL.js";import"./AccordionDetails-D0ralmK5.js";import"./index-B9sM2jn7.js";import"./Collapse-BxVDKG_E.js";import"./List-2A5-ge2l.js";import"./ListContext-BukMsw43.js";import"./Divider-Dr2s_Lqe.js";import"./ListItem-D402ttc5.js";import"./ListItemIcon-Dg7e0rsR.js";import"./ListItemText-Dng-M9Mo.js";import"./Tabs-CuOzOYRQ.js";import"./KeyboardArrowRight-BFvCTBW2.js";import"./FormLabel-BzRdYdad.js";import"./formControlState-DJhFNtYQ.js";import"./InputLabel-aYfiqXiq.js";import"./Select-BDvHXHtE.js";import"./Popover-ccHJV6L0.js";import"./Modal-B2cUeR8m.js";import"./Portal-CybimJf6.js";import"./MenuItem-E1aDLhZF.js";import"./Checkbox-CskZHw_U.js";import"./SwitchBase-CVtmcGbf.js";import"./Chip-6_q0kWZv.js";import"./lodash-guIUsIxV.js";import"./useAnalytics-BfzgNjvV.js";var n={},d;function D(){if(d)return n;d=1;var t=h(),c=T();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=c(y()),i=t(V()),p=(0,i.default)(l.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");return n.default=p,n}var R=D();const q=S(R);var s={},v;function A(){if(v)return s;v=1;var t=h(),c=T();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=c(y()),i=t(V()),p=(0,i.default)(l.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return s.default=p,s}var M=A();const b=S(M),Te={title:"Plugins/Search/SearchType",component:u,decorators:[t=>e.jsx(x,{apis:[[g,new j]],children:e.jsx(P,{children:e.jsx(m,{container:!0,direction:"row",children:e.jsx(m,{item:!0,xs:4,children:e.jsx(t,{})})})})})],tags:["!manifest"]},f=["value-1","value-2","value-3"],a=()=>e.jsx(_,{style:{padding:10},children:e.jsx(u,{name:"Search type",values:f,defaultValue:f[0]})}),r=()=>e.jsx(u.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(I,{})},{value:"value-2",name:"Value Two",icon:e.jsx(b,{})},{value:"value-3",name:"Value Three",icon:e.jsx(q,{})}]}),o=()=>e.jsx(u.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});a.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Accordion"};o.__docgenInfo={description:"",methods:[],displayName:"Tabs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const Default = () => {
  return (
    <Paper style={{ padding: 10 }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>
  );
};
`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Accordion = () => {
  return (
    <SearchType.Accordion
      name="Result Types"
      defaultValue="value-1"
      types={[
        { value: "value-1", name: "Value One", icon: <CatalogIcon /> },
        { value: "value-2", name: "Value Two", icon: <DocsIcon /> },
        { value: "value-3", name: "Value Three", icon: <UsersGroupsIcon /> },
      ]}
    />
  );
};
`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const Tabs = () => {
  return (
    <SearchType.Tabs
      defaultValue="value-1"
      types={[
        { value: "value-1", name: "Value One" },
        { value: "value-2", name: "Value Two" },
        { value: "value-3", name: "Value Three" },
      ]}
    />
  );
};
`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Paper style={{
    padding: 10
  }}>
      <SearchType name="Search type" values={values} defaultValue={values[0]} />
    </Paper>;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const ye=["Default","Accordion","Tabs"];export{r as Accordion,a as Default,o as Tabs,ye as __namedExportsOrder,Te as default};
