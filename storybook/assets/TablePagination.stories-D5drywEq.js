import{T as P}from"./TablePagination-C3F7aZLh.js";import"./iframe-DyjKfHWP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-cguLXHc0.js";import"./useObjectRef-7_hM05iQ.js";import"./Select-DKw5N0V2.js";import"./Dialog-C_mps9Fo.js";import"./Button-CJZfGRod.js";import"./utils-DR_NZBjG.js";import"./Label-DAkixtdH.js";import"./Hidden-B_goyCM1.js";import"./useNumberFormatter-D6YdTXTj.js";import"./context-pT42zyZM.js";import"./useFocusable-DdGM9NE4.js";import"./openLink-DApmBWn3.js";import"./useLabel-mgp2OWRO.js";import"./useLabels-BnLSBoeu.js";import"./useButton-Dz6iLKsK.js";import"./usePress-B4lsLING.js";import"./textSelection-BAQRVi3u.js";import"./useFocusRing-0OqomWJ9.js";import"./RSPContexts-DQ4Npco-.js";import"./OverlayArrow-kT1WVoyE.js";import"./useControlledState-CeMfn_cd.js";import"./SelectionManager-DOVE9_OV.js";import"./useEvent-9BEtGrcR.js";import"./SelectionIndicator-BG4I083n.js";import"./Separator-D4Dt_VLZ.js";import"./Text-E1WRWeuL.js";import"./useLocalizedStringFormatter-DdNJ7tue.js";import"./animation-CB2HTRVW.js";import"./VisuallyHidden-C6xu9piM.js";import"./FieldError-b2DiV5_z.js";import"./Form-C910l1ZH.js";import"./ListBox-CZ-37U-Q.js";import"./useListState-DveW3lRE.js";import"./useField-DsnjVxUu.js";import"./useFormReset-BHnTRn45.js";import"./definition-kuC39pM8.js";import"./Autocomplete-D0-ichkU.js";import"./Input-DB_LfEup.js";import"./SearchField-BOwfRSr8.js";import"./useFilter-d_so8xGn.js";import"./FieldLabel-CbP5D59y.js";import"./FieldError-BJlvB4E8.js";import"./Text-B1AuG0oU.js";import"./ButtonIcon-OhtE3DPB.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
