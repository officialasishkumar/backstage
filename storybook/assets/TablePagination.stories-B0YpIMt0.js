import{T as P}from"./TablePagination-DM5FKYpM.js";import"./iframe-BHNZ12cl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-zV__z7rj.js";import"./useObjectRef-Bnt8V-N5.js";import"./Select-D5-Dph8l.js";import"./Dialog-C5VtNzAz.js";import"./Button-CeCysvJb.js";import"./utils-CQPyOtgw.js";import"./Label-BAgs-2mE.js";import"./Hidden-B7B9CjMT.js";import"./useNumberFormatter-CPduQ-h-.js";import"./context-C1FcD6pp.js";import"./useFocusable-CLpkwE70.js";import"./openLink-CKP5LQZU.js";import"./useLabel-C0iH1L-U.js";import"./useLabels-CWe-CY8Y.js";import"./useButton-ksi4MNAd.js";import"./usePress-COIwaYSq.js";import"./textSelection-B7CuWglK.js";import"./useFocusRing-6nnOL3tn.js";import"./RSPContexts-Dhd_LbTI.js";import"./OverlayArrow-DKXpMmHS.js";import"./useControlledState-9G3DDK4r.js";import"./SelectionManager-DjXbkcz1.js";import"./useEvent-B7FZpUHK.js";import"./SelectionIndicator-kC-xZB3n.js";import"./Separator-B1tUKgKl.js";import"./Text-Q-eDP-yv.js";import"./useLocalizedStringFormatter-BR2kZPU1.js";import"./animation-DWyZTUqA.js";import"./VisuallyHidden-CmgkboNX.js";import"./FieldError-PbqDaM5E.js";import"./Form-DQdrpDrQ.js";import"./ListBox-CXoX0FgS.js";import"./useListState-DRp6PgZ2.js";import"./useField-RjLgMAou.js";import"./useFormReset-DrXXCTUU.js";import"./definition-BwXHC9QD.js";import"./Autocomplete-Ct05HVL9.js";import"./Input-DwWz8x9Z.js";import"./SearchField-CaOtZoM5.js";import"./useFilter-BV4xfgYA.js";import"./FieldLabel-iyAPELm1.js";import"./FieldError-D3XIZSQN.js";import"./Text-H-21vUnB.js";import"./ButtonIcon-DMFxnDsh.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
