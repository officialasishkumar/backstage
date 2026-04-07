import{T as P}from"./TablePagination-CqlgwXmS.js";import"./iframe-C11JX4Ba.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOpFhgiA.js";import"./useObjectRef-B-JvJ-J0.js";import"./Select-Bzg49f7W.js";import"./Dialog-C9Ovkyri.js";import"./Button-BKOA1D1h.js";import"./utils--YINESaU.js";import"./Label-DVzWJzSE.js";import"./Hidden-DhLTWqNn.js";import"./useNumberFormatter-D2VX3IpW.js";import"./context-CsdsboSs.js";import"./useFocusable-BGIAx_By.js";import"./openLink-BVSL9EAg.js";import"./useLabel-ByDMycuL.js";import"./useLabels-C1KWYX1U.js";import"./useButton-BqCb6bzE.js";import"./usePress-DzfWVK0Z.js";import"./textSelection-C9hfClAv.js";import"./useFocusRing-tOCVYP-m.js";import"./RSPContexts-7juj9JDn.js";import"./OverlayArrow-CkGjA2W2.js";import"./useControlledState-DLSDjqja.js";import"./SelectionManager-CeBwqgw1.js";import"./useEvent-C9BYeq3f.js";import"./SelectionIndicator-RMzbXGan.js";import"./Separator-CsWMcjDR.js";import"./Text-4KNOGSdp.js";import"./useLocalizedStringFormatter-gEmQ9i0_.js";import"./animation-BfXL6mic.js";import"./VisuallyHidden-2IlTb7rK.js";import"./FieldError-De2sIEGO.js";import"./Form-DJrjFKA_.js";import"./ListBox-BJxuHIHR.js";import"./useListState-DN7nXko8.js";import"./useField-B2JOrAdZ.js";import"./useFormReset-C7HX4woc.js";import"./definition-oT6xlPtf.js";import"./Autocomplete-TWKzLGJL.js";import"./Input-BmqeBHZl.js";import"./SearchField-BKYtSTd4.js";import"./useFilter-CZ0LHuLp.js";import"./FieldLabel-DlSwYagE.js";import"./FieldError-DvtHD0ZB.js";import"./Text-DoSiP0IO.js";import"./ButtonIcon-CJqOJWlS.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
