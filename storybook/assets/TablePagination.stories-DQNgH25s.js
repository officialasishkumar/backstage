import{T as P}from"./TablePagination-C4x-L_wh.js";import"./iframe-v6zF9Gaf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW-qXqCl.js";import"./useObjectRef-NQw35XiF.js";import"./Select-CVqH8B5S.js";import"./Dialog-cBMB3iIU.js";import"./Button-1EMIvgVu.js";import"./utils-JNfYDm40.js";import"./Label-CqzqU-wV.js";import"./Hidden-CIalJIMg.js";import"./useNumberFormatter-Ch0k4QkS.js";import"./context-DH3CL8_n.js";import"./useFocusable-9sp0yrvy.js";import"./openLink-CQrfrplF.js";import"./useLabel-D5qyaaD-.js";import"./useLabels-tR7yfSI0.js";import"./useButton-B8-902GA.js";import"./usePress-OYA3W9ws.js";import"./textSelection-CPZSH_BM.js";import"./useFocusRing-CvHWxaJy.js";import"./RSPContexts-CT1O25QT.js";import"./OverlayArrow-CJvuueRm.js";import"./useControlledState-CNVq7Ktw.js";import"./SelectionManager-B_dsx_hi.js";import"./useEvent-CeARSdSY.js";import"./SelectionIndicator-C91CjX3u.js";import"./Separator-CzGW_npZ.js";import"./Text-C9qAHkWw.js";import"./useLocalizedStringFormatter-DrPenZK9.js";import"./animation-Bordeox_.js";import"./VisuallyHidden-HY1xg2Fh.js";import"./FieldError-CIqIgTsL.js";import"./Form-Vymxw6hy.js";import"./ListBox-B3lSD9fi.js";import"./useListState-Bxw5Dnks.js";import"./useField-ZC1Iiabc.js";import"./useFormReset-BBGYrv54.js";import"./definition-CmD9lWBT.js";import"./Autocomplete-B9uKLJFg.js";import"./Input-IlcpbY3T.js";import"./SearchField-CmbQXNv5.js";import"./useFilter-C-ISxyjk.js";import"./FieldError-CggezAyN.js";import"./FieldLabel-CmpVXxno.js";import"./ButtonIcon-pcOYnVzX.js";import"./Text-DoznXsfG.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
