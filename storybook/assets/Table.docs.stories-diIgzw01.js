import{j as e,r as a}from"./iframe-9SnFn8NI.js";import{t as C,s as b,d as T,a as h}from"./utils-Zf87DYW8.js";import{u as p,T as d,e as j,C as S}from"./useTable-BUMxPOhj.js";import{F as v}from"./Flex-BWeU8Cmw.js";import{R as f,a as c}from"./RadioGroup-CXJ9Rwst.js";import{T as x}from"./Text-DT_pZQUn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DSgRsb80.js";import"./BUIProvider-DWQLs8Cf.js";import"./openLink-Dxd353gg.js";import"./Virtualizer-BfFM0Coc.js";import"./SelectionManager-DipKDKdK.js";import"./useFocusable-D4Y4GFRN.js";import"./useObjectRef-CeeJzKyj.js";import"./useEvent-CE5BfGdF.js";import"./SelectionIndicator-B3foC1Es.js";import"./context-BkcL9er-.js";import"./usePress-D6y6xA_w.js";import"./Hidden-G0nqQw7Z.js";import"./useControlledState-CJ-PUb4J.js";import"./OverlayArrow-DfIS4dUI.js";import"./Button-ChhzGjS1.js";import"./utils-mrt4OdhL.js";import"./Label-DsBr-tWU.js";import"./useLabel-3bPY9msE.js";import"./useLabels-BgBCxZ8M.js";import"./useButton-CKGgZJSJ.js";import"./useFocusRing-B_Qb27Hk.js";import"./index-CY-GnCzb.js";import"./Checkbox-D0SD2KXW.js";import"./RSPContexts-DuamTqHP.js";import"./Form-Cl6ALSee.js";import"./useToggle-exC2QTQY.js";import"./useFormReset-D0GuJcDT.js";import"./useToggleState-VuOUeIq-.js";import"./VisuallyHidden-CwoSfH-K.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-S_Tchccx.js";import"./VisuallyHidden-B8ph9ZK4.js";import"./TablePagination-CVC378FR.js";import"./Select-D5IKnVxw.js";import"./Dialog-fLv5TQRh.js";import"./Separator-CIWc-B24.js";import"./Text-BD83imv_.js";import"./useLocalizedStringFormatter-D8ffeMuF.js";import"./animation-hlYjPwTV.js";import"./FieldError-70r4asJk.js";import"./ListBox-CunYAQFB.js";import"./useListState-DfzNcbSn.js";import"./useField-DLloHM_i.js";import"./definition-uhk7xsRo.js";import"./Autocomplete-yMe6wMH3.js";import"./Input-Dw8WcYd3.js";import"./SearchField-Cd9QA-Pi.js";import"./useFilter-BPP7K0iA.js";import"./FieldError-BM231_fX.js";import"./FieldLabel-B4h1NEVG.js";import"./ButtonIcon-H50P3qGK.js";import"./Link-BhLXhBrf.js";import"./getNodeText-B8NAQRgI.js";import"./useLink-Bl5FZtu7.js";import"./useGridSelectionCheckbox-60jDvDt1.js";import"./useHighlightSelectionDescription-Bd_4DIEe.js";import"./useHasTabbableChild-C4Mnwd5q.js";import"./Avatar-UBQ1ceGF.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
