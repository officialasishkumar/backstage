import{T as P}from"./TablePagination-HCAP0aAs.js";import"./iframe-BzMU8KOh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JU_tx7RS.js";import"./useObjectRef-DrDEQyZE.js";import"./Select-CrcEPYyr.js";import"./Dialog-DfyzneDL.js";import"./Button-BR3QcJHp.js";import"./utils-D7xzjO5r.js";import"./Label-CjPjQKyZ.js";import"./Hidden-Drg_-ioy.js";import"./useNumberFormatter-CaA1-5kS.js";import"./context-DU8dVKCj.js";import"./useFocusable-CkVQI7Ks.js";import"./openLink-CrfJEFwX.js";import"./useLabel-Bp_O8B2A.js";import"./useLabels-Dx62u3bH.js";import"./useButton-BteYS_ud.js";import"./usePress-BNJ8yAbA.js";import"./textSelection-Cu6TxyP8.js";import"./useFocusRing-C40cGcnj.js";import"./RSPContexts-DFWZ4Ncp.js";import"./OverlayArrow-ZPha6BmV.js";import"./useControlledState-Czac06mD.js";import"./SelectionManager-DXUwzMl8.js";import"./useEvent-DcMjyKHv.js";import"./SelectionIndicator-CJL5KIbO.js";import"./Separator-DRnAnAMU.js";import"./Text-Dvo5NiMw.js";import"./useLocalizedStringFormatter-nJsCdPZu.js";import"./animation-Cfny2F7b.js";import"./VisuallyHidden-D3eEAY1a.js";import"./FieldError-CAup1pwF.js";import"./Form-C3oVZ_Jz.js";import"./ListBox-BQCuWAQj.js";import"./useListState-Bqu0d4ev.js";import"./useField-DaEpbetA.js";import"./useFormReset-B_5pAw4B.js";import"./definition-Bh5g1Udq.js";import"./Autocomplete-CaHvxpYU.js";import"./Input-BgLZc5ut.js";import"./SearchField-BMBzk-6l.js";import"./useFilter-G5Oqa1An.js";import"./FieldError-BKXjFx46.js";import"./FieldLabel-DqbcRaHl.js";import"./ButtonIcon-hwRX9XkM.js";import"./Text-_l-DnqxA.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
