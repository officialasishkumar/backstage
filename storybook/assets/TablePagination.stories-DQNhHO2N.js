import{T as P}from"./TablePagination-BRxb_RXa.js";import"./iframe-hODDjxEI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6zLbxaIr.js";import"./useObjectRef-D0troa0o.js";import"./Select-CE3ED48-.js";import"./Dialog-CUuv35CV.js";import"./Button-DgtByE87.js";import"./utils-D5-4lykL.js";import"./Label-D0Co6EEj.js";import"./Hidden-8N8ie_vh.js";import"./useNumberFormatter-BM9WZphB.js";import"./context-68oMUB2W.js";import"./useFocusable-CZ6Grrdp.js";import"./openLink-DQgtmsfk.js";import"./useLabel-B46Bw-tG.js";import"./useLabels-BV4gsZS7.js";import"./useButton-Slsqarzu.js";import"./usePress-DvE4E3s2.js";import"./textSelection-DAbFJioh.js";import"./useFocusRing-Dhs0bEJR.js";import"./RSPContexts-DvWGiX1t.js";import"./OverlayArrow-B4FdASlF.js";import"./useControlledState-BSdZOyDa.js";import"./SelectionManager-DnK7H5qI.js";import"./useEvent-CGwSIvr1.js";import"./SelectionIndicator-CTA5PdT2.js";import"./Separator-Cy1kmzM0.js";import"./Text-C8Ktyk4e.js";import"./useLocalizedStringFormatter-DZXM-nMl.js";import"./animation-D2KxhnaW.js";import"./VisuallyHidden-CNPeICIa.js";import"./FieldError-MZT2nGbC.js";import"./Form-BDhWZ5KK.js";import"./ListBox-BGnyIXSH.js";import"./useListState-dsg9eByG.js";import"./useField-DPrjxZzX.js";import"./useFormReset-RZxEMM3Y.js";import"./definition-DB0clAvF.js";import"./Autocomplete-MEJW1lQX.js";import"./Input-4Jwjzq6V.js";import"./SearchField-CImqPHMd.js";import"./useFilter-C_oPjVEM.js";import"./FieldLabel-BJRr3QWw.js";import"./FieldError-Lv9pU4Z0.js";import"./Text-BPu9Bl_z.js";import"./ButtonIcon-Hin25Ljy.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
