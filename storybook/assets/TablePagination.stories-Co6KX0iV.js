import{T as P}from"./TablePagination-BSpB5Nd3.js";import"./iframe-BwbkeUNF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D_vIB89H.js";import"./useObjectRef-DjvHQg_I.js";import"./Select-CyujzLlm.js";import"./Dialog-BCmZgtHn.js";import"./Button-YM0YGSZy.js";import"./utils-DTjexDOe.js";import"./Label-CjQoUC4C.js";import"./Hidden-B4sJPhyi.js";import"./useNumberFormatter-p6fb5EiO.js";import"./context-Wo5QewPA.js";import"./useFocusable-DZhrPDt1.js";import"./openLink-BuoNKP2_.js";import"./useLabel-CGK6lBv3.js";import"./useLabels-DTg_imCw.js";import"./useButton-CgK4QaeX.js";import"./usePress-DrAuu34K.js";import"./textSelection-rD9BcpSo.js";import"./useFocusRing-BsUj4liY.js";import"./RSPContexts-CF743Gjt.js";import"./OverlayArrow-CQirbK-0.js";import"./useControlledState-4Ag57mvo.js";import"./SelectionManager-DylcPNUe.js";import"./useEvent-DHN8M9nF.js";import"./SelectionIndicator-Dh2ANNcZ.js";import"./Separator-CKkgZAMH.js";import"./Text-4-OV3qAK.js";import"./useLocalizedStringFormatter-C-ux3O3q.js";import"./animation-CkkuCiTf.js";import"./VisuallyHidden-CUr80uz3.js";import"./FieldError-Cq-J7TrI.js";import"./Form-4lH-Wx6O.js";import"./ListBox-D4z3s7cP.js";import"./useListState-B9_PqFlB.js";import"./useField-BBTetzMm.js";import"./useFormReset-BzBZr9VB.js";import"./definition-C9TgI5oL.js";import"./Autocomplete-Diw-8ybw.js";import"./Input-kcBHRlSv.js";import"./SearchField-BRS1NDBg.js";import"./useFilter-C-a4gzz-.js";import"./FieldLabel-Dnpkn8SK.js";import"./FieldError-0CSqbr4h.js";import"./Text-Dh-yNwQs.js";import"./ButtonIcon-J9wRqkJZ.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
