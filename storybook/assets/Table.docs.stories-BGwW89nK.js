import{j as e,r as a}from"./iframe-DIo-SVbu.js";import{t as C,s as b,d as T,a as h}from"./utils-BtqJdurd.js";import{u as p,T as d,e as j,C as S}from"./useTable-DGBMFbp3.js";import{F as v}from"./Flex-DIORzv8p.js";import{R as f,a as c}from"./RadioGroup-97WAs2G2.js";import{T as x}from"./Text-CDVRsAQ9.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-CiWIfurT.js";import"./openLink-Cz27Urod.js";import"./Virtualizer-Bzg2RtKx.js";import"./SelectionManager-DYy-wxYs.js";import"./useFocusable-Ci82QAhh.js";import"./useObjectRef-CYY0dott.js";import"./useEvent-HquNyToH.js";import"./SelectionIndicator-CCkVWRKu.js";import"./context-j2z9a4Xi.js";import"./usePress-jYtc8NtY.js";import"./textSelection-CDHWmXKz.js";import"./Hidden-C-Ndhyy_.js";import"./useControlledState-DgE4S3eY.js";import"./OverlayArrow-DRJZFMtV.js";import"./useNumberFormatter-JYUyCM4L.js";import"./utils-CYS9htll.js";import"./index-qzSKwXXE.js";import"./Checkbox-3fh_Dx24.js";import"./RSPContexts-Bq1VuA5F.js";import"./Form-CM4cQlQY.js";import"./useToggle-x4X4iYNJ.js";import"./useFormReset-C8lCSTbk.js";import"./useToggleState-C2f4wpR3.js";import"./useFocusRing-C43gnGmm.js";import"./VisuallyHidden-Clvnl8G1.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-B8byF5DF.js";import"./VisuallyHidden-CVv2VRDX.js";import"./TablePagination-8ziQ-S07.js";import"./Select-BSkSEmof.js";import"./Dialog-D9JsEBmM.js";import"./Button-8GrvdF4T.js";import"./Label-BoTQLzR3.js";import"./useLabel-DdOJBI9V.js";import"./useLabels-Drwj7dKn.js";import"./useButton-DtrTAe4k.js";import"./Separator-DJzznsJa.js";import"./Text-k5LKOFo8.js";import"./useLocalizedStringFormatter-jZ7-R5Er.js";import"./animation-BcfCohEL.js";import"./FieldError-BrN7C1a8.js";import"./ListBox-wz4m8rD6.js";import"./useListState-DAa2ekZn.js";import"./useField-DZ13AxkD.js";import"./definition-Cw-s-vzw.js";import"./Autocomplete-DwEBIfbY.js";import"./Input-CK0ucepI.js";import"./SearchField-DjZcQexm.js";import"./useFilter-UgfunAAu.js";import"./FieldError-Bt0gzasb.js";import"./FieldLabel-CBJy3cHn.js";import"./ButtonIcon-DdFeXCLn.js";import"./Link-DC_7BHO_.js";import"./getNodeText-BAY3DS08.js";import"./useLink-DJJweDtw.js";import"./useGridSelectionCheckbox-B-T9Nxry.js";import"./useHighlightSelectionDescription-DB7aQgZB.js";import"./useHasTabbableChild-CTcLTe4s.js";import"./Avatar-Dahkylhe.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
