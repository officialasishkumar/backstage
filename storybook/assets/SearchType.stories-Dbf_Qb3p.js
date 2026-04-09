import{aN as h,aO as y,aP as T,aQ as x,aD as S,j as e,P as _,$ as V}from"./iframe-DeVvrktA.js";import{M as j}from"./MenuBook-bB8yYS8n.js";import{S as u}from"./SearchType-DD9-Ow8j.js";import{s as P,M as g}from"./api-9rXC1bTg.js";import{S as D}from"./SearchContext-CyBBmzJ-.js";import{S as m}from"./Grid-10XIJtv4.js";import"./preload-helper-PPVm8Dsz.js";import"./ExpandMore-DibpsI70.js";import"./useAsync-Bu6SsVmg.js";import"./useMountedState-D8dcyD-P.js";import"./translation-D8TXFmst.js";import"./Box-DOTqXu-6.js";import"./styled-oeuDQEze.js";import"./AccordionDetails-BER2vuEo.js";import"./index-B9sM2jn7.js";import"./Collapse-DBmO3Kkh.js";import"./List-BmFOCbHw.js";import"./ListContext-Bl_Wg17k.js";import"./Divider-BBFNWUSp.js";import"./ListItem-DTIEUFkk.js";import"./ListItemIcon-DbPRQV2B.js";import"./ListItemText-yFOw_HmD.js";import"./makeStyles-CDec1JgF.js";import"./Tabs-DEvqM8qm.js";import"./KeyboardArrowRight-C0pWIo3J.js";import"./FormLabel-O1PXfAQ6.js";import"./formControlState-Cnd-Q6SQ.js";import"./InputLabel-BGfEe65D.js";import"./Select-D8U6PZXV.js";import"./Popover-DVzFdjxo.js";import"./Modal-D8wNxgQF.js";import"./Portal-BnHJ445C.js";import"./MenuItem-BgxKsNQO.js";import"./Checkbox-kSFDm-zg.js";import"./SwitchBase-CIpLXZjR.js";import"./Chip-mF0Wos1s.js";import"./useAnalytics-Zw1fFqKc.js";import"./lodash-V1Qj8ZxO.js";var a={},d;function R(){if(d)return a;d=1;var r=h(),n=y();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");return a.default=p,a}var q=R();const I=S(q);var o={},v;function M(){if(v)return o;v=1;var r=h(),n=y();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return o.default=p,o}var A=M();const O=S(A),ye={title:"Plugins/Search/SearchType",component:u,decorators:[r=>e.jsx(V,{apis:[[P,new g]],children:e.jsx(D,{children:e.jsx(m,{container:!0,direction:"row",children:e.jsx(m,{item:!0,xs:4,children:e.jsx(r,{})})})})})],tags:["!manifest"]},f=["value-1","value-2","value-3"],t=()=>e.jsx(_,{style:{padding:10},children:e.jsx(u,{name:"Search type",values:f,defaultValue:f[0]})}),i=()=>e.jsx(u.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(j,{})},{value:"value-2",name:"Value Two",icon:e.jsx(O,{})},{value:"value-3",name:"Value Three",icon:e.jsx(I,{})}]}),s=()=>e.jsx(u.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"Tabs"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
