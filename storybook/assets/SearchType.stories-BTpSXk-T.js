import{aN as h,aO as y,aP as T,aQ as x,a0 as S,j as e,P as _,a1 as V}from"./iframe-BYJEcONI.js";import{M as j}from"./MenuBook-th2DyrTc.js";import{S as u}from"./SearchType-Cx7NLDPD.js";import{s as P,M as g}from"./api-YS4fv9LP.js";import{S as R}from"./SearchContext-DQzLxbSP.js";import{S as m}from"./Grid-WhGNoc5-.js";import"./preload-helper-PPVm8Dsz.js";import"./ExpandMore-CeAWd5Cj.js";import"./useAsync-f4NepNzS.js";import"./useMountedState-CBFV9pKo.js";import"./translation-BwWcmakp.js";import"./Box-sr-PQbiK.js";import"./styled-BIP2wHBB.js";import"./AccordionDetails-x9MXCTOX.js";import"./index-B9sM2jn7.js";import"./Collapse-BQxKtWKu.js";import"./List-BwnJ0qw9.js";import"./ListContext-BBhf4A7_.js";import"./Divider-BzODNYCp.js";import"./ListItem-CssaaKiD.js";import"./ListItemIcon-BMCEbmk5.js";import"./ListItemText-B0WaKHzp.js";import"./makeStyles-l6ucUTqN.js";import"./Tabs-CukhRPgm.js";import"./KeyboardArrowRight-BZCW2oDf.js";import"./FormLabel-DBrswV_p.js";import"./formControlState-D9IrXQdT.js";import"./InputLabel-BbHYPnin.js";import"./Select-DcHKmLTv.js";import"./Popover-CL3IOnot.js";import"./Modal-DGwD98fw.js";import"./Portal-CBSxLcyA.js";import"./MenuItem-JLVspSJv.js";import"./Checkbox-D3cik0PW.js";import"./SwitchBase-o5jm1ykK.js";import"./Chip-TXK0M8is.js";import"./useAnalytics-CRhuHj1g.js";import"./lodash-Du7UIGfI.js";var a={},d;function q(){if(d)return a;d=1;var r=h(),n=y();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");return a.default=p,a}var D=q();const I=S(D);var o={},v;function M(){if(v)return o;v=1;var r=h(),n=y();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return o.default=p,o}var A=M();const O=S(A),ye={title:"Plugins/Search/SearchType",component:u,decorators:[r=>e.jsx(V,{apis:[[P,new g]],children:e.jsx(R,{children:e.jsx(m,{container:!0,direction:"row",children:e.jsx(m,{item:!0,xs:4,children:e.jsx(r,{})})})})})],tags:["!manifest"]},f=["value-1","value-2","value-3"],t=()=>e.jsx(_,{style:{padding:10},children:e.jsx(u,{name:"Search type",values:f,defaultValue:f[0]})}),i=()=>e.jsx(u.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(j,{})},{value:"value-2",name:"Value Two",icon:e.jsx(O,{})},{value:"value-3",name:"Value Three",icon:e.jsx(I,{})}]}),s=()=>e.jsx(u.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"Tabs"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
