import{T as P}from"./TablePagination-CgeQMiRB.js";import"./iframe-CIiIDGZ-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1doK9VC.js";import"./useObjectRef-D7q8cISt.js";import"./Select-BTcPe4_m.js";import"./Dialog-xGHOEcE4.js";import"./Button-DVlU3AH3.js";import"./utils-B80od1Qh.js";import"./Label-Co2tAmlU.js";import"./Hidden-BhHhnctg.js";import"./useNumberFormatter-BnDx_1jp.js";import"./context-C2JjmbWD.js";import"./useFocusable-LO8wu514.js";import"./openLink-BYuufqBj.js";import"./useLabel-Bdn_FQNn.js";import"./useLabels-Dwl3v26l.js";import"./useButton-aSd5se7_.js";import"./usePress-B2sribOf.js";import"./textSelection-CDO73jOW.js";import"./useFocusRing-CzEpNm8F.js";import"./RSPContexts-CczCLsj4.js";import"./OverlayArrow-CJds3cn7.js";import"./useControlledState-Bxlshp1l.js";import"./SelectionManager-BBJrZAXC.js";import"./useEvent-DoIUflQK.js";import"./SelectionIndicator-Blz3zvsy.js";import"./Separator-CpEdJGkM.js";import"./Text-hFU8oBTt.js";import"./useLocalizedStringFormatter-VIFOsExW.js";import"./animation-C8st7HfQ.js";import"./VisuallyHidden-uEL1BqA-.js";import"./FieldError-OWNG37Uv.js";import"./Form-DbC3NtFc.js";import"./ListBox-sRabrpk3.js";import"./useListState-BL7QoN2d.js";import"./useField-Ceg55KY5.js";import"./useFormReset-N44hr4Os.js";import"./definition-Dr7ziaOo.js";import"./Autocomplete-DdTHuJtA.js";import"./Input-CYqfHUZv.js";import"./SearchField-C56yAjDg.js";import"./useFilter-mzvXsEtp.js";import"./FieldLabel-D-W3j_Yc.js";import"./FieldError-BhPwdhLV.js";import"./Text-DaEAKnUx.js";import"./ButtonIcon-CF94HNpc.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
