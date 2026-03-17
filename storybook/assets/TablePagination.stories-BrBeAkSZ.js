import{T as l}from"./TablePagination-LqzTKnBj.js";import"./iframe-CtYv7QJ0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIML6-uv.js";import"./useObjectRef-vsyhJXe-.js";import"./Select-Dyqb3ZOq.js";import"./Dialog-BBcanbKH.js";import"./Button-CxZxreVc.js";import"./utils-DO4tuehO.js";import"./Label-hNutrTJw.js";import"./Hidden-BFFbPz5n.js";import"./useFocusable-BMDS_jJq.js";import"./openLink-Bmz1Jei1.js";import"./useLabel-Cwpu3uTw.js";import"./useLabels-CUz_l6uh.js";import"./context-Bi3s1JjX.js";import"./useButton-BhHYKv3g.js";import"./usePress-DT0xcJu9.js";import"./useFocusRing-Do2rA8_c.js";import"./RSPContexts-CcsdUUEy.js";import"./OverlayArrow-DeoH7OuY.js";import"./useControlledState-zRjovyAn.js";import"./SelectionManager-B364_wiX.js";import"./useEvent-BVNgaH19.js";import"./SelectionIndicator-wXJP5iy8.js";import"./Separator-qwHb8T0l.js";import"./Text-DrwKlvGM.js";import"./useLocalizedStringFormatter-BSiJuR4A.js";import"./animation-CSuLUUAV.js";import"./VisuallyHidden-DMTulITn.js";import"./FieldError-BPlcKWeI.js";import"./Form-CYy7Ebbt.js";import"./ListBox--U7rLpr0.js";import"./useListState-DI-2_HIC.js";import"./useField-BECPeavL.js";import"./useFormReset-oqflJZnZ.js";import"./definition-6I4k6P3K.js";import"./Autocomplete-KIZdLfnN.js";import"./Input-Cn5nVCvr.js";import"./SearchField-DGO8AE27.js";import"./useFilter-C6-ULJnY.js";import"./FieldError-BdIEiJ72.js";import"./FieldLabel-DdnEvn8v.js";import"./ButtonIcon-BaK8W-md.js";import"./Text-6aay7KHe.js";const p=()=>{},ne={title:"Backstage UI/TablePagination",component:l,argTypes:{offset:{control:"number"},pageSize:{control:"radio",options:[5,10,20,30,40,50]},totalCount:{control:"number"},hasNextPage:{control:"boolean"},hasPreviousPage:{control:"boolean"},showPageSizeOptions:{control:"boolean"}}},e={args:{offset:0,pageSize:10,totalCount:100,hasNextPage:!0,hasPreviousPage:!1,onNextPage:p,onPreviousPage:p,onPageSizeChange:p,showPageSizeOptions:!0}},a={args:{...e.args}},o={args:{...e.args,offset:90,hasNextPage:!1,hasPreviousPage:!0}},r={args:{...e.args,offset:40,hasPreviousPage:!0}},s={args:{...e.args,showPageSizeOptions:!1}},t={args:{...e.args,offset:void 0}},n={args:{...e.args,offset:20,hasPreviousPage:!0,getLabel:({offset:g,pageSize:c,totalCount:m})=>{const u=Math.floor((g??0)/c)+1,P=Math.ceil((m??0)/c);return`Page ${u} of ${P}`}}},i={args:{...e.args,totalCount:0,hasNextPage:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => (
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
