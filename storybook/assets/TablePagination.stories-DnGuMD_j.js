import{T as P}from"./TablePagination-COLAfEHa.js";import"./iframe-Cfvhm_I_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmQuIqXH.js";import"./useObjectRef-vvR-D69_.js";import"./Select--AxUfdN1.js";import"./Dialog-04wNgRpO.js";import"./Button-Bt4qn5r2.js";import"./utils-NKCPgaqN.js";import"./Label-KioRYZe4.js";import"./Hidden-CJJ6f5wI.js";import"./useNumberFormatter-C4KTolLF.js";import"./context-BFvw4ZZw.js";import"./useFocusable-FhjipBEG.js";import"./openLink-Bg6urkNK.js";import"./useLabel-DsarJHVH.js";import"./useLabels-C81rtTWW.js";import"./useButton-D2EMNUiN.js";import"./usePress-vSFxZuki.js";import"./textSelection-B1IJ7lT8.js";import"./useFocusRing-aQX9M6VZ.js";import"./RSPContexts-TxMGKc65.js";import"./OverlayArrow-IUzf-hkE.js";import"./useControlledState-B6ajkJKe.js";import"./SelectionManager-BAyLh6Od.js";import"./useEvent-zDE74eNy.js";import"./SelectionIndicator-BLLQH_5D.js";import"./Separator-CeCWs8mC.js";import"./Text-Du8qum6_.js";import"./useLocalizedStringFormatter-C2mSSPWV.js";import"./animation-F0pdzh0X.js";import"./VisuallyHidden-CNfcrBpM.js";import"./FieldError-Be30N9Ah.js";import"./Form-BhZyqZKD.js";import"./ListBox-DGi95Wfw.js";import"./useListState-Bk3kruvf.js";import"./useField-hSueKPpB.js";import"./useFormReset-DldKZg8u.js";import"./definition-CfYeKmeC.js";import"./Autocomplete-BYdb6x90.js";import"./Input-D37qf9LB.js";import"./SearchField-C1nzibnp.js";import"./useFilter-Co5sxCDd.js";import"./FieldLabel-DdE5PCGv.js";import"./FieldError-CFDjKhfO.js";import"./Text-CPoZ0T6Z.js";import"./ButtonIcon-DU9joX0E.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
