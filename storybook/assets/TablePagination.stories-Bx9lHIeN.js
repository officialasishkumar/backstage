import{T as P}from"./TablePagination-CPK0Tzfq.js";import"./iframe-D_dthwJh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wo5Mbj3S.js";import"./useObjectRef-CInBiSHZ.js";import"./Select-218McQyt.js";import"./Dialog-CUvGc59T.js";import"./Button-BZyoSp7U.js";import"./utils-DOJJmrft.js";import"./Label-BE_ic3n7.js";import"./Hidden-BEHHSiwX.js";import"./useNumberFormatter-B9KY0PzB.js";import"./context-Q7JRJBVl.js";import"./useFocusable-DPmubRaF.js";import"./openLink-DtEOuHfv.js";import"./useLabel-K_blalq3.js";import"./useLabels-BMP6De1T.js";import"./useButton-WydDPgSb.js";import"./usePress-CP4tASL9.js";import"./textSelection-CvYhyEaE.js";import"./useFocusRing-CC9PNhof.js";import"./RSPContexts-Bc4Xdkgk.js";import"./OverlayArrow-CtBvbk9G.js";import"./useControlledState-DPWqqzcA.js";import"./SelectionManager-DSw6NSXO.js";import"./useEvent-DV40E9dp.js";import"./SelectionIndicator-D-J9qfej.js";import"./Separator-CZMSyKN1.js";import"./Text-TkQla788.js";import"./useLocalizedStringFormatter-BwgEdBRO.js";import"./animation-BtFOA9cz.js";import"./VisuallyHidden-Nb5lmHla.js";import"./FieldError-_xC4EfcV.js";import"./Form-Cl-8j6kc.js";import"./ListBox-DtMT4Cpd.js";import"./useListState-ByszqMC2.js";import"./useField-DPPlY8qA.js";import"./useFormReset-CwI7Po1X.js";import"./definition-DnpmWPea.js";import"./Autocomplete-Dbj9f0H7.js";import"./Input-DVbLzx_m.js";import"./SearchField-uHHpE7AD.js";import"./useFilter-ZG031Pak.js";import"./FieldLabel-QMqObSsR.js";import"./FieldError-Cu2GUNhy.js";import"./Text-D0iUJr99.js";import"./ButtonIcon-BeB8AupT.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    offset: 0,
    pageSize: 10,
    totalCount: 100,
    hasNextPage: true,
    hasPreviousPage: false,
    onNextPage: noop,
    onPreviousPage: noop,
    onPageSizeChange: noop,
    showPageSizeOptions: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    offset: 90,
    hasNextPage: false,
    hasPreviousPage: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    offset: 40,
    hasPreviousPage: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showPageSizeOptions: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    offset: undefined
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    offset: 20,
    hasPreviousPage: true,
    getLabel: ({
      offset,
      pageSize,
      totalCount
    }) => {
      const page = Math.floor((offset ?? 0) / pageSize) + 1;
      const totalPages = Math.ceil((totalCount ?? 0) / pageSize);
      return \`Page \${page} of \${totalPages}\`;
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    totalCount: 0,
    hasNextPage: false
  }
}`,...i.parameters?.docs?.source}}};const ge=["Default","FirstPage","LastPage","MiddlePage","WithoutPageSizeOptions","CursorPagination","CustomLabel","EmptyState"];export{s as CursorPagination,n as CustomLabel,e as Default,i as EmptyState,a as FirstPage,o as LastPage,r as MiddlePage,t as WithoutPageSizeOptions,ge as __namedExportsOrder,pe as default};
