import{T as P}from"./TablePagination-B5o7JFJP.js";import"./iframe-BYJEcONI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AO_tZfTk.js";import"./useObjectRef-D6wwz9y8.js";import"./Select-DBgWBwfg.js";import"./Dialog-D_HKQgWJ.js";import"./Button-CAHkZ6qX.js";import"./utils-C1a20wt6.js";import"./Label-DS41ix2K.js";import"./Hidden-COZ0E_xL.js";import"./useNumberFormatter-BaGWQyGU.js";import"./context-CyT1KeDa.js";import"./useFocusable-CHHS5c3K.js";import"./openLink-fvBOI5ql.js";import"./useLabel-CZVOsVhR.js";import"./useLabels-0G7Ys-gj.js";import"./useButton-ZPexGG4g.js";import"./usePress-0F-x86_K.js";import"./textSelection-CuPcs10t.js";import"./useFocusRing-D3e6qmx4.js";import"./RSPContexts-CAaZxjjz.js";import"./OverlayArrow-CWLGk80E.js";import"./useControlledState-2ZMtjnwx.js";import"./SelectionManager-Bqq70rE0.js";import"./useEvent-Dxi2gTg3.js";import"./SelectionIndicator-Cd8mIiX7.js";import"./Separator-ByJixSi9.js";import"./Text-CevXFSmv.js";import"./useLocalizedStringFormatter-CbX_tXs4.js";import"./animation-Bep5svxH.js";import"./VisuallyHidden-BRI8LZbG.js";import"./FieldError-BHZ9gFAH.js";import"./Form-BdiM_rlm.js";import"./ListBox-Dy2E-1SB.js";import"./useListState-BBOJwxZS.js";import"./useField-BrmHv7QA.js";import"./useFormReset-BBUe_3SO.js";import"./definition-gbuAqGRc.js";import"./Autocomplete-DrLmfKys.js";import"./Input-BL-_ZXni.js";import"./SearchField-0Px7-mkL.js";import"./useFilter-vd2Vc88X.js";import"./FieldLabel-TUzuLUgQ.js";import"./FieldError-CBYBS7sd.js";import"./Text-DtP1fyN4.js";import"./ButtonIcon-BCl7WmHy.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
