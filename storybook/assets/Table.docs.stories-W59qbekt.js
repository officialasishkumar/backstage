import{j as e,r as a}from"./iframe-UJriCXVl.js";import{t as C,s as b,d as T,a as h}from"./utils-BoJ6IGYk.js";import{u as p,T as d,e as j,C as S}from"./useTable-BM66VDk6.js";import{F as v}from"./Flex-CmmpbUbp.js";import{R as f,a as c}from"./RadioGroup-C6tTcUEn.js";import{T as x}from"./Text-SchhofR5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSYbiaN1.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";import"./Virtualizer-CNWVhnCB.js";import"./SelectionManager-BbD2hGTC.js";import"./useFocusable-DaeNhAL-.js";import"./useObjectRef-DlMtdBHA.js";import"./useEvent-CbD9Tw0o.js";import"./SelectionIndicator-PgxLjLJ1.js";import"./context-Dw6ZsT1q.js";import"./usePress-CUekrJf0.js";import"./Hidden-DKr0To6O.js";import"./useControlledState-CgKPzuxz.js";import"./OverlayArrow-CO1LXPAT.js";import"./Button-DsX1ak8c.js";import"./utils-BUMBRD7o.js";import"./Label-gmeiKNgf.js";import"./useLabel-BfnLJRzD.js";import"./useLabels-DRDLmhIq.js";import"./useButton-CgU9Md3z.js";import"./useFocusRing-DbTrKgXU.js";import"./index-9TBG8tdt.js";import"./Checkbox-C5suzky6.js";import"./RSPContexts-DuEzcBt5.js";import"./Form-Clh6dGol.js";import"./useToggle-BwS3ctem.js";import"./useFormReset-C11VX0jl.js";import"./useToggleState-B3LptsPH.js";import"./VisuallyHidden-FWa9YpJ2.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-DBwCb_tU.js";import"./VisuallyHidden-Cq9jfTK_.js";import"./TablePagination-CrpNCKR9.js";import"./Select-GRB0KGVM.js";import"./Dialog-CZpfex4n.js";import"./Separator-Ba4cisjo.js";import"./Text-DbV1EJ2Z.js";import"./useLocalizedStringFormatter-DO_CdxXZ.js";import"./animation-CnQA9XgO.js";import"./FieldError-CVWCbF4F.js";import"./ListBox-Cidr1TWe.js";import"./useListState-BgQAC_2k.js";import"./useField-K48mmI-0.js";import"./definition-DR5CRlgU.js";import"./Autocomplete-DJA-2zLQ.js";import"./Input-CuPFx81r.js";import"./SearchField-rsFgzX4R.js";import"./useFilter-BPACsKCp.js";import"./FieldError-DJylgyk2.js";import"./FieldLabel-BDq5PR7l.js";import"./ButtonIcon-B8MJDfDL.js";import"./Link-CkfQ5oYQ.js";import"./getNodeText-B6b25qdv.js";import"./useLink-BuyX79_b.js";import"./useGridSelectionCheckbox-BpJDF9Rt.js";import"./useHighlightSelectionDescription-CxAsJFLD.js";import"./useHasTabbableChild-0dG2VhL2.js";import"./Avatar-BriJkI9V.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ge=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,Ge as __namedExportsOrder,ke as default};
