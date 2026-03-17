import{T as l}from"./TablePagination-Dff7sor_.js";import"./iframe-AYVAkLn2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0RRltZn.js";import"./useObjectRef-BWpcr6k3.js";import"./Select-Dy8Cfu2h.js";import"./Dialog-lD9pFP2w.js";import"./Button-Carv1HtB.js";import"./utils-FCMqhg1h.js";import"./Label-ChSWIa4S.js";import"./Hidden-DbCW8Qsk.js";import"./useFocusable-sfiuB9lR.js";import"./openLink-LeSehfZZ.js";import"./useLabel-DOMDVkyu.js";import"./useLabels-QAmej_AD.js";import"./context-CzP-SUwN.js";import"./useButton-i9gI_73k.js";import"./usePress-VjZgXq6p.js";import"./useFocusRing-B5me6Ayu.js";import"./RSPContexts-DiaaE4EP.js";import"./OverlayArrow-z6vIjaaZ.js";import"./useControlledState-LQB0L4-A.js";import"./SelectionManager-BXJyoeXd.js";import"./useEvent-CMfhPa6J.js";import"./SelectionIndicator-CASLHb-g.js";import"./Separator-D8VW8N69.js";import"./Text-q4QxLJ3o.js";import"./useLocalizedStringFormatter-BQGXsiyO.js";import"./animation-Bftq_Xte.js";import"./VisuallyHidden-BOD2R025.js";import"./FieldError-BRLkDzac.js";import"./Form-B38orCqX.js";import"./ListBox-D-AMfuwZ.js";import"./useListState-C00Bw7Ye.js";import"./useField-B5pWQID-.js";import"./useFormReset-DbQuTrxX.js";import"./definition-DEB3AcW1.js";import"./Autocomplete-BDLGjBVA.js";import"./Input-B4cTBsnD.js";import"./SearchField-D3koNSyC.js";import"./useFilter-BDmW6BrZ.js";import"./FieldError-Bfnss5hF.js";import"./FieldLabel-B5nTf42l.js";import"./ButtonIcon-BdH5rb4S.js";import"./Text-QOBN2VDi.js";const p=()=>{},ne={title:"Backstage UI/TablePagination",component:l,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},s={args:{...e.args,showPageSizeOptions:!1}},t={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:g,pageSize:c,totalCount:m})=>{const u=Math.floor((g??0)/c)+1,P=Math.ceil((m??0)/c);return`Page ${u} of ${P}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => (
  <TablePagination
    offset={0}
    pageSize={10}
    totalCount={100}
    hasNextPage
    hasPreviousPage={false}
    onNextPage={noop}
    onPreviousPage={noop}
    onPageSizeChange={noop}
    showPageSizeOptions
  />
);
`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const FirstPage = () => <TablePagination />;
`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const LastPage = () => (
  <TablePagination offset={90} hasNextPage={false} hasPreviousPage />
);
`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const MiddlePage = () => <TablePagination offset={40} hasPreviousPage />;
`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const WithoutPageSizeOptions = () => (
  <TablePagination showPageSizeOptions={false} />
);
`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{code:`const CursorPagination = () => <TablePagination offset={undefined} />;
`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const CustomLabel = () => (
  <TablePagination
    offset={20}
    hasPreviousPage
    getLabel={({ offset, pageSize, totalCount }) => {
      const page = Math.floor((offset ?? 0) / pageSize) + 1;
      const totalPages = Math.ceil((totalCount ?? 0) / pageSize);
      return \`Page \${page} of \${totalPages}\`;
    }}
  />
);
`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{code:`const EmptyState = () => <TablePagination totalCount={0} hasNextPage={false} />;
`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showPageSizeOptions: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    offset: undefined
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ie=["Default","FirstPage","LastPage","MiddlePage","WithoutPageSizeOptions","CursorPagination","CustomLabel","EmptyState"];export{t as CursorPagination,n as CustomLabel,e as Default,i as EmptyState,a as FirstPage,o as LastPage,r as MiddlePage,s as WithoutPageSizeOptions,ie as __namedExportsOrder,ne as default};
