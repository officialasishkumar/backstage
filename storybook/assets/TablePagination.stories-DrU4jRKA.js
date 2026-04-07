import{T as P}from"./TablePagination-C9ANZmjz.js";import"./iframe-BO_5tggG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BIrSEnXi.js";import"./useObjectRef-Cw6KczqA.js";import"./Select-fDwWDf8f.js";import"./Dialog-w7MK3d1r.js";import"./Button-D1y9NOub.js";import"./utils-03A5sesa.js";import"./Label-CIczjLen.js";import"./Hidden-B_poHtvD.js";import"./useNumberFormatter-CVhUBRb3.js";import"./context-PRnmgxPb.js";import"./useFocusable-D4eo7SSJ.js";import"./openLink-CrrHS3jY.js";import"./useLabel--JYCieVt.js";import"./useLabels-B6IuJsDH.js";import"./useButton-DvXQTPVN.js";import"./usePress-C0Ey3VSN.js";import"./textSelection-CoLB8z_M.js";import"./useFocusRing-7-v3swav.js";import"./RSPContexts-DLzMEFKB.js";import"./OverlayArrow-CMeMLekS.js";import"./useControlledState-CtEE7veX.js";import"./SelectionManager-C0E4c_eH.js";import"./useEvent-A-gG4tZ_.js";import"./SelectionIndicator-DfMjQAFJ.js";import"./Separator-UZ4D15GY.js";import"./Text-Y-AwaEw8.js";import"./useLocalizedStringFormatter-Rr_J43kR.js";import"./animation-CpQtdvXO.js";import"./VisuallyHidden-BnAVntL1.js";import"./FieldError-hSBCvxNk.js";import"./Form-al3m2RYK.js";import"./ListBox-BhURKFSA.js";import"./useListState-Bn-PLNKT.js";import"./useField-Bd0TMcmv.js";import"./useFormReset-B_UWtg9x.js";import"./definition-C4Sxhv48.js";import"./Autocomplete-DdmOB-6t.js";import"./Input-DWrPnbYs.js";import"./SearchField-A5f1CmI-.js";import"./useFilter-CM42c1xY.js";import"./FieldLabel-1PWJ_NWU.js";import"./FieldError-Bez6yDrB.js";import"./Text-8qEp4aXz.js";import"./ButtonIcon-DSMGfMOh.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
