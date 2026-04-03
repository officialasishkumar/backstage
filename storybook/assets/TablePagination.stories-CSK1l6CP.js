import{T as P}from"./TablePagination-Cp-5Snov.js";import"./iframe-B8N4GvwI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BE9lrUC_.js";import"./useObjectRef-DrpS2PKJ.js";import"./Select-DXGJOuiS.js";import"./Dialog-CbTdhEgY.js";import"./Button-C4YM46_h.js";import"./utils-DRLpmCmN.js";import"./Label-Bps-rEzx.js";import"./Hidden-ExdddpxR.js";import"./useNumberFormatter-D6M8tlUe.js";import"./context-D-1G_rvj.js";import"./useFocusable-2lBvZn6A.js";import"./openLink-D6fl38gK.js";import"./useLabel-DNh0xAaN.js";import"./useLabels-BIM6Iemz.js";import"./useButton-DUM-lbW-.js";import"./usePress-C7aF3WDC.js";import"./textSelection-BtWPAxHq.js";import"./useFocusRing-CWdhAts1.js";import"./RSPContexts-CG0zCeb8.js";import"./OverlayArrow-BYb66uMJ.js";import"./useControlledState-jAao-lKm.js";import"./SelectionManager-D8akPz9E.js";import"./useEvent-CtyPF_El.js";import"./SelectionIndicator-D-a_UK8N.js";import"./Separator-B88UeCvk.js";import"./Text-C_3AFNvK.js";import"./useLocalizedStringFormatter-X7txwvUO.js";import"./animation-CRMXBnuH.js";import"./VisuallyHidden-COPv4dfz.js";import"./FieldError-DzEIyqzs.js";import"./Form-CfI1Pjie.js";import"./ListBox-C-I7yXOb.js";import"./useListState-DXtknBvO.js";import"./useField-ZMSB9n5m.js";import"./useFormReset-w0ua13oa.js";import"./definition-De2mZP63.js";import"./Autocomplete-PrwM8UD8.js";import"./Input-CPOfFR-y.js";import"./SearchField-BxQ54GjF.js";import"./useFilter-NrqPv4T3.js";import"./FieldLabel-C0aYIh3R.js";import"./FieldError-DuVBvQGZ.js";import"./Text-T4XKYwwR.js";import"./ButtonIcon-D3Clk2DG.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
