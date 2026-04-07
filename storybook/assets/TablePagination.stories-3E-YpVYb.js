import{T as P}from"./TablePagination-ELlsfmdC.js";import"./iframe-B7X4koWg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DsailFha.js";import"./useObjectRef-Dytr15rV.js";import"./Select-BRGSwrPx.js";import"./Dialog-BEP8w5_u.js";import"./Button-7IfDVcAh.js";import"./utils-DM4Cs4E4.js";import"./Label-DspYoU3I.js";import"./Hidden-C_FsWAz8.js";import"./useNumberFormatter-CzIVH4ys.js";import"./context-GjXDu9R-.js";import"./useFocusable-DXe0eVGf.js";import"./openLink-DCeIGU84.js";import"./useLabel-1bTO7hRM.js";import"./useLabels-usTeaknU.js";import"./useButton-CoybwE_4.js";import"./usePress-D1tLsiAY.js";import"./textSelection-DNm_N23y.js";import"./useFocusRing-8S_5BKL2.js";import"./RSPContexts-hTJeh7hB.js";import"./OverlayArrow-DxovLiuT.js";import"./useControlledState-CKxeOrzH.js";import"./SelectionManager-NC3Q0gks.js";import"./useEvent-DFHJUF5-.js";import"./SelectionIndicator-CrLX3gFs.js";import"./Separator-DCG3c2mG.js";import"./Text-D6QIkrof.js";import"./useLocalizedStringFormatter-DSIKNnE_.js";import"./animation-DOnK_2iI.js";import"./VisuallyHidden-CgwyMnte.js";import"./FieldError-CTIDDRqu.js";import"./Form-Crap_ne8.js";import"./ListBox-BeeQPuWd.js";import"./useListState-BxYS6qkJ.js";import"./useField-12MMfK-f.js";import"./useFormReset-BpD_JXlP.js";import"./definition-CzgCd-D3.js";import"./Autocomplete-Ca4xX8N6.js";import"./Input-D6TH1uvk.js";import"./SearchField-L-YpUm6i.js";import"./useFilter-CelWz7q4.js";import"./FieldLabel-B6r842ip.js";import"./FieldError-BsmH8hzt.js";import"./Text-BpiFjE03.js";import"./ButtonIcon-Cg1hxcdV.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
