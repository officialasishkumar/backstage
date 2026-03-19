import{j as e,r as a}from"./iframe-AYVAkLn2.js";import{t as C,s as b,d as T,a as h}from"./utils-DKPkduU_.js";import{u as p,T as d,e as j,C as S}from"./useTable-SatrMvtU.js";import{F as v}from"./Flex-CgROLVhZ.js";import{R as f,a as c}from"./RadioGroup-Dgv9dCjD.js";import{T as x}from"./Text-QOBN2VDi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B51ZAw-h.js";import"./BUIProvider-DrYmLl9u.js";import"./openLink-LeSehfZZ.js";import"./Virtualizer-D09jx9jn.js";import"./SelectionManager-BXJyoeXd.js";import"./useFocusable-sfiuB9lR.js";import"./useObjectRef-BWpcr6k3.js";import"./useEvent-CMfhPa6J.js";import"./SelectionIndicator-CASLHb-g.js";import"./context-CzP-SUwN.js";import"./usePress-VjZgXq6p.js";import"./Hidden-DbCW8Qsk.js";import"./useControlledState-LQB0L4-A.js";import"./OverlayArrow-z6vIjaaZ.js";import"./Button-Carv1HtB.js";import"./utils-FCMqhg1h.js";import"./Label-ChSWIa4S.js";import"./useLabel-DOMDVkyu.js";import"./useLabels-QAmej_AD.js";import"./useButton-i9gI_73k.js";import"./useFocusRing-B5me6Ayu.js";import"./index-C0RRltZn.js";import"./Checkbox-Ds2cGcQW.js";import"./RSPContexts-DiaaE4EP.js";import"./Form-B38orCqX.js";import"./useToggle-BGNKMmNu.js";import"./useFormReset-DbQuTrxX.js";import"./useToggleState-C5OevpuE.js";import"./VisuallyHidden-BOD2R025.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-CqmT3o1k.js";import"./VisuallyHidden-ipDkEiX0.js";import"./TablePagination-Dff7sor_.js";import"./Select-Dy8Cfu2h.js";import"./Dialog-lD9pFP2w.js";import"./Separator-D8VW8N69.js";import"./Text-q4QxLJ3o.js";import"./useLocalizedStringFormatter-BQGXsiyO.js";import"./animation-Bftq_Xte.js";import"./FieldError-BRLkDzac.js";import"./ListBox-D-AMfuwZ.js";import"./useListState-C00Bw7Ye.js";import"./useField-B5pWQID-.js";import"./definition-DEB3AcW1.js";import"./Autocomplete-BDLGjBVA.js";import"./Input-B4cTBsnD.js";import"./SearchField-D3koNSyC.js";import"./useFilter-BDmW6BrZ.js";import"./FieldError-Bfnss5hF.js";import"./FieldLabel-B5nTf42l.js";import"./ButtonIcon-BdH5rb4S.js";import"./Link-B6QMb2Ll.js";import"./getNodeText-BHHx5COm.js";import"./useLink-C9Ex-eJZ.js";import"./useGridSelectionCheckbox-3X8dOmQv.js";import"./useHighlightSelectionDescription-CYk15y_w.js";import"./useHasTabbableChild-7Z0BMqJq.js";import"./Avatar-BVxcTxKN.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
