import{aN as h,aO as y,aP as T,aQ as x,a0 as S,j as e,a1 as _,P as V}from"./iframe-BnLaYHT0.js";import{M as j}from"./MenuBook-M6PFfs7M.js";import{S as u}from"./SearchType-5yimVYhp.js";import{s as P,M as g}from"./api-BsxmPXMj.js";import{S as R}from"./SearchContext-Z5uxDapO.js";import{S as m}from"./Grid-BVx1ZeMm.js";import"./preload-helper-PPVm8Dsz.js";import"./ExpandMore-CZNdg9bw.js";import"./useAsync-BIqxmOvv.js";import"./useMountedState-BzlV24-v.js";import"./translation-xunTb-F4.js";import"./makeStyles-Ci9OQMMV.js";import"./Box-D4mbYqDO.js";import"./styled-Dah7uO8h.js";import"./AccordionDetails-DKUjEkWI.js";import"./index-B9sM2jn7.js";import"./Collapse-DK8ofP-6.js";import"./List-DXJGlMrG.js";import"./ListContext-ZUAJ6gMg.js";import"./Divider-CNZiFlqL.js";import"./ListItem-DEKaS7rV.js";import"./ListItemIcon-Dk0I2z7t.js";import"./ListItemText-BYfeNc6y.js";import"./Tabs-BeUF7bbi.js";import"./KeyboardArrowRight-Noh0-_s1.js";import"./FormLabel-CHR7zeQU.js";import"./formControlState-CePGT2DR.js";import"./InputLabel-CVoLfPNo.js";import"./Select-DOeoOxfY.js";import"./Popover-B5d8YLfq.js";import"./Modal-BRJd5uSM.js";import"./Portal-CJRUocKS.js";import"./MenuItem-BlBJV0uS.js";import"./Checkbox-D5hJYFat.js";import"./SwitchBase-CbtHOs0w.js";import"./Chip-B3w2S0o3.js";import"./useAnalytics-DZdNMYw7.js";import"./lodash-DpN-AoLg.js";var a={},d;function q(){if(d)return a;d=1;var r=h(),n=y();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");return a.default=p,a}var D=q();const I=S(D);var o={},v;function M(){if(v)return o;v=1;var r=h(),n=y();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var c=n(T()),l=r(x()),p=(0,l.default)(c.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");return o.default=p,o}var A=M();const O=S(A),ye={title:"Plugins/Search/SearchType",component:u,decorators:[r=>e.jsx(_,{apis:[[P,new g]],children:e.jsx(R,{children:e.jsx(m,{container:!0,direction:"row",children:e.jsx(m,{item:!0,xs:4,children:e.jsx(r,{})})})})})],tags:["!manifest"]},f=["value-1","value-2","value-3"],t=()=>e.jsx(V,{style:{padding:10},children:e.jsx(u,{name:"Search type",values:f,defaultValue:f[0]})}),i=()=>e.jsx(u.Accordion,{name:"Result Types",defaultValue:"value-1",types:[{value:"value-1",name:"Value One",icon:e.jsx(j,{})},{value:"value-2",name:"Value Two",icon:e.jsx(O,{})},{value:"value-3",name:"Value Three",icon:e.jsx(I,{})}]}),s=()=>e.jsx(u.Tabs,{defaultValue:"value-1",types:[{value:"value-1",name:"Value One"},{value:"value-2",name:"Value Two"},{value:"value-3",name:"Value Three"}]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Accordion"};s.__docgenInfo={description:"",methods:[],displayName:"Tabs"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
