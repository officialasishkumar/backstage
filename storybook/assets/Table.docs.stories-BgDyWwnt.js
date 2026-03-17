import{j as e,r as a}from"./iframe-2DflYetR.js";import{t as C,s as b,d as T,a as h}from"./utils-DiLuaXfn.js";import{u as p,T as d,e as j,C as S}from"./useTable-BWZax-fN.js";import{F as v}from"./Flex-CrEDYAUY.js";import{R as f,a as c}from"./RadioGroup-AxKMyR2u.js";import{T as x}from"./Text-Yw2soXCj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAw4AdQ5.js";import"./BUIProvider-CIE9UDb1.js";import"./openLink-C7ML4eFc.js";import"./SelectionManager-McZpkATW.js";import"./useFocusable-Dsi0twvX.js";import"./useObjectRef-Cs0Gc8Mi.js";import"./useEvent-DrILayed.js";import"./SelectionIndicator-BSnaS3js.js";import"./context-Di9U7QH-.js";import"./usePress-CcNCLpPj.js";import"./Hidden-DlRCM_km.js";import"./useControlledState-CBRH9xWr.js";import"./index-Dgn3uMgy.js";import"./Checkbox-Bk1rzBQP.js";import"./RSPContexts-B1mwv-E_.js";import"./utils-BYb0yjAr.js";import"./Form-VXzM40ca.js";import"./useToggle-Cqk5rSur.js";import"./useFormReset-CbNVnjCt.js";import"./useToggleState-DpEufHqz.js";import"./useFocusRing-Bl6bIQWd.js";import"./VisuallyHidden-BXN0soex.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-D06o30vH.js";import"./VisuallyHidden-pChbl6W3.js";import"./TablePagination-BUTHdRgv.js";import"./Select-DsTCh1uC.js";import"./Dialog-D9gnz8uh.js";import"./Button-CvAmswOr.js";import"./Label-gaJ2YdKb.js";import"./useLabel-CpLoOjTF.js";import"./useLabels-CRBcsyaB.js";import"./useButton-DhxLYkIL.js";import"./OverlayArrow-5-dAYTbh.js";import"./Separator-CKq8gpOZ.js";import"./Text-CQX-04q9.js";import"./useLocalizedStringFormatter-DG5LVS5K.js";import"./animation-B_oPy6H2.js";import"./FieldError-_enqIsnF.js";import"./ListBox-WBylMjU-.js";import"./useListState-Bezs-EbP.js";import"./useField-7mw7zjkP.js";import"./definition-BgikZoxC.js";import"./Autocomplete-BLZhGaFr.js";import"./Input-DGBBtlnY.js";import"./SearchField-DL4NL7Z6.js";import"./useFilter-UrvU9toh.js";import"./FieldError-0IQ6n2Je.js";import"./FieldLabel-BSvuuDP1.js";import"./ButtonIcon-TwgegLaV.js";import"./Link-CZIzo5V2.js";import"./getNodeText-C-2wnHjx.js";import"./useLink-0Fmud-p2.js";import"./useHighlightSelectionDescription-Bt_IR8CG.js";import"./useHasTabbableChild-BS2HYuIl.js";import"./Avatar-DNnVHlW6.js";const We={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Oe=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,Oe as __namedExportsOrder,We as default};
