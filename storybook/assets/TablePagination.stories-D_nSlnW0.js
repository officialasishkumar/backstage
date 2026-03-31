import{T as P}from"./TablePagination-D4v7z5m4.js";import"./iframe-BnLaYHT0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdhB73Mt.js";import"./useObjectRef-lVmqYT5z.js";import"./Select-CmIVfEXJ.js";import"./Dialog-T8ff8kCa.js";import"./Button-D879B8Xg.js";import"./utils-DgP4G2bG.js";import"./Label-BJ0BmGen.js";import"./Hidden-BjH4WftX.js";import"./useNumberFormatter-BF8IT7Mr.js";import"./context-BnlMpUmS.js";import"./useFocusable-Bd7uQdCg.js";import"./openLink-BEdMuLiR.js";import"./useLabel-DflaE71y.js";import"./useLabels-h0lKVrTa.js";import"./useButton-Dx7ESrwM.js";import"./usePress-CzbyhsNH.js";import"./textSelection-D4VXaku8.js";import"./useFocusRing-DNx6cMAW.js";import"./RSPContexts-BaxFphsp.js";import"./OverlayArrow-BADkBR2p.js";import"./useControlledState-CteapOAT.js";import"./SelectionManager-196B_xFQ.js";import"./useEvent-CLbiR_lT.js";import"./SelectionIndicator-jhGnnloR.js";import"./Separator-BfCpm0Gd.js";import"./Text-DQBtNSGe.js";import"./useLocalizedStringFormatter-DUTu_R6b.js";import"./animation-DQTuuml8.js";import"./VisuallyHidden-DJdqx20b.js";import"./FieldError-CZNkiqrI.js";import"./Form-BqlHfH8e.js";import"./ListBox-BqzMuEZM.js";import"./useListState-DkZcIuh3.js";import"./useField-CK0W3bTY.js";import"./useFormReset-Bmbz8wq3.js";import"./definition-BfABmnoH.js";import"./Autocomplete-CBY_a7QZ.js";import"./Input-NYBCyxRc.js";import"./SearchField-so-bmexC.js";import"./useFilter-jpCZDFV3.js";import"./FieldError-BB58jCOV.js";import"./FieldLabel-DvB3BJOp.js";import"./ButtonIcon-Q6r6hzp_.js";import"./Text-CsUYcdty.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
