import{j as e,r as a}from"./iframe-zPAYUdEu.js";import{t as C,s as b,d as T,a as h}from"./utils-BrKrLLpv.js";import{u as p,T as d,e as j,C as S}from"./useTable-BJRyFt7Q.js";import{F as v}from"./Flex-DA_A0LRY.js";import{R as f,a as c}from"./RadioGroup-B61nApIL.js";import{T as x}from"./Text-Dr8MHH3Q.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-YYza03_H.js";import"./openLink-CpupEye9.js";import"./Virtualizer-wgzC9C-M.js";import"./SelectionManager-obnXnccE.js";import"./useFocusable-Byq_kT_u.js";import"./useObjectRef-DZ_hmO0r.js";import"./useEvent-CjMSbSiI.js";import"./SelectionIndicator-oYAR7fu3.js";import"./context-Dah1XvVD.js";import"./usePress-BYuOhAqc.js";import"./textSelection-Bvws7oT_.js";import"./Hidden-re4CweBj.js";import"./useControlledState-D7QNPJWf.js";import"./OverlayArrow-D00sSwkC.js";import"./useNumberFormatter-0DVbJefA.js";import"./utils-B3W6J4Ep.js";import"./index-pd7bB-MY.js";import"./Checkbox-CDoRegfq.js";import"./RSPContexts-DjvI38Ph.js";import"./Form-BIO471XA.js";import"./useToggle-DVo9Rlv6.js";import"./useFormReset-DIu-QsQa.js";import"./useToggleState-CUf8UJ1r.js";import"./useFocusRing-DFT_k_Bk.js";import"./VisuallyHidden-BaTeCvWR.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-BAqm9QNA.js";import"./VisuallyHidden-D6gJR5FK.js";import"./TablePagination-wqHRPejD.js";import"./Select-CSkNs7sN.js";import"./Dialog-CXcsAiuc.js";import"./Button-By2tMXW6.js";import"./Label-BdylCvhA.js";import"./useLabel-CQkQ-HGf.js";import"./useLabels-Di6e4lNp.js";import"./useButton-Daxqbesr.js";import"./Separator-DKyeH1Vb.js";import"./Text-CmuIAoCE.js";import"./useLocalizedStringFormatter-BSeyIVe2.js";import"./animation-B0OlwN2p.js";import"./FieldError-D0nZ6ao4.js";import"./ListBox-BeVqjvvr.js";import"./useListState-b3oSujFP.js";import"./useField-Bn7sWQJp.js";import"./definition-BeqnsYof.js";import"./Autocomplete-CWZ2GykV.js";import"./Input-Ci2laQFb.js";import"./SearchField-B5qRTEWd.js";import"./useFilter-Ddn13Z7B.js";import"./FieldError-Y-NMETJV.js";import"./FieldLabel-DLtxELmL.js";import"./ButtonIcon-DvfbKhHB.js";import"./Link-C41HJNxr.js";import"./getNodeText--_F0EAk2.js";import"./useLink-DyUjBU6W.js";import"./useGridSelectionCheckbox-BI5dDy5t.js";import"./useHighlightSelectionDescription-B-j9VxSG.js";import"./useHasTabbableChild-GRRgNdHD.js";import"./Avatar-BIbLdH4D.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const columns: ColumnConfig<Data4Item>[] = [{
      id: 'name',
      label: 'Band name',
      isRowHeader: true,
      defaultWidth: '4fr',
      cell: item => <CellProfile name={item.name} src={item.image} href={item.website} />
    }, {
      id: 'genre',
      label: 'Genre',
      defaultWidth: '4fr',
      cell: item => <CellText title={item.genre} />
    }, {
      id: 'yearFormed',
      label: 'Year formed',
      defaultWidth: '1fr',
      cell: item => <CellText title={item.yearFormed.toString()} />
    }, {
      id: 'albums',
      label: 'Albums',
      defaultWidth: '1fr',
      cell: item => <CellText title={item.albums.toString()} />
    }];
    const {
      tableProps
    } = useTable({
      mode: 'complete',
      getData: () => data4,
      paginationOptions: {
        pageSize: 5
      }
    });
    return <Table columnConfig={columns} {...tableProps} />;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Set<string | number> | 'all'>(new Set());
    const {
      tableProps
    } = useTable({
      mode: 'complete',
      getData: () => selectionData,
      paginationOptions: {
        pageSize: 10
      }
    });
    return <Table {...tableProps} columnConfig={selectionColumns} selection={{
      mode: 'multiple',
      behavior: 'toggle',
      selected,
      onSelectionChange: setSelected
    }} rowConfig={{
      onClick: item => alert(\`Clicked: \${item.name}\`)
    }} />;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectionMode, setSelectionMode] = useState<'single' | 'multiple'>('multiple');
    const [selected, setSelected] = useState<Set<string | number> | 'all'>(new Set());
    const {
      tableProps
    } = useTable({
      mode: 'complete',
      getData: () => selectionData,
      paginationOptions: {
        pageSize: 10
      }
    });
    return <Flex direction="column" gap="8">
        <Table {...tableProps} columnConfig={selectionColumns} selection={{
        mode: selectionMode,
        behavior: 'toggle',
        selected,
        onSelectionChange: setSelected
      }} />
        <div>
          <Text as="h4" style={{
          marginBottom: 'var(--bui-space-2)'
        }}>
            Selection mode:
          </Text>
          <RadioGroup aria-label="Selection mode" orientation="horizontal" value={selectionMode} onChange={value => {
          setSelectionMode(value as 'single' | 'multiple');
          setSelected(new Set());
        }}>
            <Radio value="single">single</Radio>
            <Radio value="multiple">multiple</Radio>
          </RadioGroup>
        </div>
      </Flex>;
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectionBehavior, setSelectionBehavior] = useState<'toggle' | 'replace'>('toggle');
    const [selected, setSelected] = useState<Set<string | number> | 'all'>(new Set());
    const {
      tableProps
    } = useTable({
      mode: 'complete',
      getData: () => selectionData,
      paginationOptions: {
        pageSize: 10
      }
    });
    return <Flex direction="column" gap="8">
        <Table {...tableProps} columnConfig={selectionColumns} selection={{
        mode: 'multiple',
        behavior: selectionBehavior,
        selected,
        onSelectionChange: setSelected
      }} />
        <div>
          <Text as="h4" style={{
          marginBottom: 'var(--bui-space-2)'
        }}>
            Selection behavior:
          </Text>
          <RadioGroup aria-label="Selection behavior" orientation="horizontal" value={selectionBehavior} onChange={value => {
          setSelectionBehavior(value as 'toggle' | 'replace');
          setSelected(new Set());
        }}>
            <Radio value="toggle">toggle</Radio>
            <Radio value="replace">replace</Radio>
          </RadioGroup>
        </div>
      </Flex>;
  }
}`,...m.parameters?.docs?.source}}};const Ae=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,Ae as __namedExportsOrder,Ge as default};
