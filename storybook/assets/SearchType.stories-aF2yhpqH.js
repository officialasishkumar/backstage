import{aN as h,aO as y,aP as T,aQ as x,a0 as S,j as e,a1 as _,P as V}from"./iframe-v6zF9Gaf.js";import{M as j}from"./MenuBook-Bo25iuDc.js";import{S as u}from"./SearchType-BLsegg7a.js";import{s as P,M as g}from"./api-Dx1L8Feq.js";import{S as R}from"./SearchContext-Det2F1sz.js";import{S as m}from"./Grid-Cpghltf9.js";import"./preload-helper-PPVm8Dsz.js";import"./ExpandMore-sRHa_Mdt.js";import"./useAsync-By65c0tc.js";import"./useMountedState-B4RaS-_B.js";import"./translation-BJdDMLO5.js";import"./makeStyles-CnXLcFSM.js";import"./Box-D8QaCveM.js";import"./styled-DI5Z0TIx.js";import"./AccordionDetails-Doa0DUrz.js";import"./index-B9sM2jn7.js";import"./Collapse-BQyJjuJW.js";import"./List-BckW65rp.js";import"./ListContext-DWGbobxz.js";import"./Divider-urck12QN.js";import"./ListItem-oij8p5Hz.js";import"./ListItemIcon-uKwWSNNb.js";import"./ListItemText-Pt9uI0B9.js";import"./Tabs-CwH69I3q.js";import"./KeyboardArrowRight-CvqyBPlu.js";import"./FormLabel-DU7mZn5Z.js";import"./formControlState-BzMiQeM8.js";import"./InputLabel-BNHFXOmc.js";import"./Select-CXCVoow1.js";import"./Popover-P49c5zXb.js";import"./Modal-8auFf5gZ.js";import"./Portal-D_MLevm5.js";import"./MenuItem-DQ5x8pMx.js";import"./Checkbox-Dm119Crg.js";import"./SwitchBase-Bw4baFgs.js";import"./Chip-CmSyufGd.js";import"./useAnalytics-BrIdl9nZ.js";import"./lodash-BcdJgnz3.js";var a={},d;function q(){if(d)return a;d=1;var r=h(),n=y();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");return a.default=p,a}var D=q();const I=S(D);var o={},v;function M(){if(v)return o;v=1;var r=h(),n=y();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return o.default=p,o}var A=M();const O=S(A),ye={title:"Plugins/Search/SearchType",component:u,decorators:[r=>e.jsx(_,{apis:[[P,new g]],children:e.jsx(R,{children:e.jsx(m,{container:!0,direction:"row",children:e.jsx(m,{item:!0,xs:4,children:e.jsx(r,{})})})})})],tags:["!manifest"]},f=["value-1","value-2","value-3"],t=()=>e.jsx(V,{style:{padding:10},children:e.jsx(u,{name:"Search type",values:f,defaultValue:f[0]})}),i=()=>e.jsx(u.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(j,{})},{value:"value-2",name:"Value Two",icon:e.jsx(O,{})},{value:"value-3",name:"Value Three",icon:e.jsx(I,{})}]}),s=()=>e.jsx(u.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"Tabs"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
