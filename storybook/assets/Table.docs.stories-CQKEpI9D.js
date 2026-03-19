import{j as e,r as a}from"./iframe-CBVwdAXc.js";import{t as C,s as b,d as T,a as h}from"./utils-jyuo4Vbx.js";import{u as p,T as d,e as j,C as S}from"./useTable-CguM29Uj.js";import{F as v}from"./Flex-ClF3ik7I.js";import{R as f,a as c}from"./RadioGroup-rmvazrEw.js";import{T as x}from"./Text-B-l5WmZI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9ejMs_C.js";import"./BUIProvider-YZy9Wrqs.js";import"./openLink-DK4oWnZh.js";import"./Virtualizer-B5wrZun8.js";import"./SelectionManager-C-Kv50p8.js";import"./useFocusable-C2NxgIR7.js";import"./useObjectRef-BTJ41blJ.js";import"./useEvent-C9PSVIlH.js";import"./SelectionIndicator-CxqNxpyh.js";import"./context-ByGyfvMq.js";import"./usePress-CrtdNndU.js";import"./Hidden-C1fwvozu.js";import"./useControlledState-v2lIFKOi.js";import"./OverlayArrow-Clg62Fcc.js";import"./Button-e3tvbQef.js";import"./utils-c0gmJLHB.js";import"./Label-1g_-oxR9.js";import"./useLabel-D4DyP171.js";import"./useLabels-1M4zWFoV.js";import"./useButton-Cw2f_iV-.js";import"./useFocusRing-DGtsrRBJ.js";import"./index-DMQI_7Ec.js";import"./Checkbox-BbqfTZCv.js";import"./RSPContexts-XWJ8kPIq.js";import"./Form-8AgzCCi7.js";import"./useToggle-Cb2dHTuZ.js";import"./useFormReset-DBDFyliF.js";import"./useToggleState-BIqjH4Fh.js";import"./VisuallyHidden-C_D6_d78.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-CUdKrH0d.js";import"./VisuallyHidden-gi7LmvUQ.js";import"./TablePagination-mqSSQgHA.js";import"./Select-CV5zJC2Q.js";import"./Dialog-BtdUUVlj.js";import"./Separator-MDkMLRAc.js";import"./Text-Djfo9fKf.js";import"./useLocalizedStringFormatter-BbfSUs2G.js";import"./animation-ClNEv7S9.js";import"./FieldError-DldMpNv_.js";import"./ListBox-Ca_tiiGT.js";import"./useListState-mr8xFsjk.js";import"./useField-Dani3hIX.js";import"./definition-CO6PY3ZW.js";import"./Autocomplete-gz8QQ9yr.js";import"./Input-956oaaad.js";import"./SearchField-FuBcP0wK.js";import"./useFilter-DbI_r25M.js";import"./FieldError-r4cRJHmK.js";import"./FieldLabel-E_CO9UhO.js";import"./ButtonIcon-Cx-1MPL_.js";import"./Link-7ijaky-e.js";import"./getNodeText-Vu-fYCCh.js";import"./useLink-DDVjSs5u.js";import"./useGridSelectionCheckbox-I4N-j3hA.js";import"./useHighlightSelectionDescription-CRyiu__2.js";import"./useHasTabbableChild-DXC7f3Jv.js";import"./Avatar-Bp-8lICP.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
