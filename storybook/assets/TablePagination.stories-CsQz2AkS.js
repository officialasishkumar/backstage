import{T as P}from"./TablePagination-BC33yF10.js";import"./iframe-DeVvrktA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Va6-8CM6.js";import"./useObjectRef-BDCAKH9y.js";import"./Select-D6VaEww5.js";import"./Dialog-DzqSNPhD.js";import"./Button-BCH5mXSs.js";import"./utils-CE-z1EYB.js";import"./Label-BsAmUuAr.js";import"./Hidden-CwlAxlLh.js";import"./useNumberFormatter-Bb7bWC44.js";import"./context-DEiurlKy.js";import"./useFocusable-CyP8oQTO.js";import"./openLink-DB0X2oCJ.js";import"./useLabel-lCZDMOjA.js";import"./useLabels-DroepvJv.js";import"./useButton-DK0Un8vp.js";import"./usePress-tFvrQuTt.js";import"./textSelection-D8Lmd9aD.js";import"./useFocusRing-BujH4uZU.js";import"./RSPContexts-Dw3zgcwS.js";import"./OverlayArrow-B5HnnrWf.js";import"./useControlledState-CGhBmLiy.js";import"./SelectionManager-2t_JhCd5.js";import"./useEvent-DJZYr3G_.js";import"./SelectionIndicator-CKZzjsgz.js";import"./Separator-BMgSKkTR.js";import"./Text-C4ruOvUx.js";import"./useLocalizedStringFormatter-Dn4ZSV37.js";import"./animation-nxRZ2C2s.js";import"./VisuallyHidden-BGlwNuIC.js";import"./FieldError-Cs5pALKh.js";import"./Form-Dbe-g-23.js";import"./ListBox-F-Kh9Nea.js";import"./useListState-B6Yun48H.js";import"./useField-DP0xoDEN.js";import"./useFormReset-DlY4Y4So.js";import"./definition-3eOtuxMJ.js";import"./Autocomplete-CIKJ4w7c.js";import"./Input-eRzRuHef.js";import"./SearchField-D7JC8axx.js";import"./useFilter-BYaNqrQo.js";import"./FieldLabel-B44J1cjo.js";import"./FieldError-BM6wvZtr.js";import"./Text-CwOi3PCK.js";import"./ButtonIcon-DI1QpbkX.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
