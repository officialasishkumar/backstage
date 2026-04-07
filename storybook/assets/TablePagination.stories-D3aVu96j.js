import{T as P}from"./TablePagination-D6W7ubNy.js";import"./iframe-DVcxdhoL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bu12NfPt.js";import"./useObjectRef-Bqii6Nj6.js";import"./Select-Bj6STw_z.js";import"./Dialog-BvX9ccZc.js";import"./Button-CyjyULeS.js";import"./utils-D8BTJKk_.js";import"./Label-BfIykrF_.js";import"./Hidden-DHtdcNAx.js";import"./useNumberFormatter-dnbcWSxZ.js";import"./context-D8TvHPVh.js";import"./useFocusable-BkW1lrfI.js";import"./openLink-CcfjgoQ8.js";import"./useLabel-SJN2VXy5.js";import"./useLabels-B4KTiVN4.js";import"./useButton-6K_qEhvC.js";import"./usePress-Cfs-3Nat.js";import"./textSelection-B9KU9YWt.js";import"./useFocusRing-BEkOgu4y.js";import"./RSPContexts-CBlWD77g.js";import"./OverlayArrow-D3C1KPSB.js";import"./useControlledState-BPtryY5m.js";import"./SelectionManager-tASmlFC4.js";import"./useEvent-B0GI9IuH.js";import"./SelectionIndicator-E963en4T.js";import"./Separator-lRE8nw3U.js";import"./Text-gfnoqxRf.js";import"./useLocalizedStringFormatter-JdlfpqEY.js";import"./animation-DECgKpyR.js";import"./VisuallyHidden-BOkGY7hs.js";import"./FieldError-CncEBShu.js";import"./Form-D79hFWwG.js";import"./ListBox-DrYoHAHE.js";import"./useListState-rZ9iDwEE.js";import"./useField-BP-c4jeO.js";import"./useFormReset-DTLCo_ey.js";import"./definition-DDEOzuON.js";import"./Autocomplete-DtsyTGyE.js";import"./Input-h0H9nB-M.js";import"./SearchField-Biyb_os_.js";import"./useFilter-Cinykyq_.js";import"./FieldLabel-QYY0oZGO.js";import"./FieldError-DdDlIg-v.js";import"./Text-DSCLHxKE.js";import"./ButtonIcon-DIDI7moe.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
