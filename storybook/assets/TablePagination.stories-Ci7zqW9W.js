import{T as P}from"./TablePagination-Btp9gHwf.js";import"./iframe-D2P1gL3G.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BjJQgUyN.js";import"./useObjectRef-BXCH-BGa.js";import"./Select-Bbfk3WeD.js";import"./Dialog-DMzJLki3.js";import"./Button-BbbNOE2b.js";import"./utils-D8szjJ2c.js";import"./Label-BCMZO17W.js";import"./Hidden-BT-65IzW.js";import"./useNumberFormatter-HjpxQVG6.js";import"./context-CcQnNqSB.js";import"./useFocusable-BZMh4--7.js";import"./openLink-CB6NMuvw.js";import"./useLabel-CsNWXzKr.js";import"./useLabels-B47DhNpl.js";import"./useButton-BJ2e-LYD.js";import"./usePress-BE3xf_K_.js";import"./textSelection-CdkfQTHO.js";import"./useFocusRing-D4TU62mb.js";import"./RSPContexts-DRWCAAs5.js";import"./OverlayArrow-vi2dT5I9.js";import"./useControlledState-DJUJGBnA.js";import"./SelectionManager-DK631bCD.js";import"./useEvent-CSRHobgP.js";import"./SelectionIndicator-a3FeXb6P.js";import"./Separator-CdA7SR4g.js";import"./Text-DjQtQM_B.js";import"./useLocalizedStringFormatter-Cb1IcdRe.js";import"./animation-BAipkFxa.js";import"./VisuallyHidden-CEZKru5T.js";import"./FieldError-Bikwi_dG.js";import"./Form-BGEnOjzQ.js";import"./ListBox-dimlHr9c.js";import"./useListState-D1S-X9_g.js";import"./useField-D1Z5Di-m.js";import"./useFormReset-BxUBJ7_5.js";import"./definition-DZMyYP-6.js";import"./Autocomplete-ColTvxMg.js";import"./Input-DOPnvSYB.js";import"./SearchField-NoFEjirT.js";import"./useFilter-BEGfboNj.js";import"./FieldLabel-GT4Gcihv.js";import"./FieldError-BowuH3pe.js";import"./Text-nwmGBrZo.js";import"./ButtonIcon-8Aj59VCX.js";const p=()=>{},pe={title:"Backstage UI/TablePagination",component:P,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},t={args:{...e.args,showPageSizeOptions:!1}},s={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:m,pageSize:g,totalCount:c})=>{const u=Math.floor((m??0)/g)+1,l=Math.ceil((c??0)/g);return`Page ${u} of ${l}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
