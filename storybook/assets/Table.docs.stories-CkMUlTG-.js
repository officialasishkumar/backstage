import{j as e,r as a}from"./iframe-BNkUY5HA.js";import{t as C,s as b,d as T,a as h}from"./utils-CjVnbVbR.js";import{u as p,T as d,e as j,C as S}from"./useTable-DVh6A9zQ.js";import{F as v}from"./Flex-CeEmSycf.js";import{R as f,a as c}from"./RadioGroup-xxC1Fe9N.js";import{T as x}from"./Text-CRkGoQC0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DN_6yxbn.js";import"./BUIProvider-COrfszv7.js";import"./openLink-CO4LZzkY.js";import"./Virtualizer-DY8rCPV5.js";import"./SelectionManager-DIjgG5dk.js";import"./useFocusable-BYfSMVOO.js";import"./useObjectRef-C-kcd22_.js";import"./useEvent-CIV51CED.js";import"./SelectionIndicator-CXCtZ_nW.js";import"./context-CN2yreBX.js";import"./usePress-BQiVP5fV.js";import"./Hidden-BvpBW5jM.js";import"./useControlledState-Ciat7max.js";import"./OverlayArrow-B0N738lg.js";import"./Button-DZjVEEsz.js";import"./utils-CPRRxJjI.js";import"./Label-CVDwbuAE.js";import"./useLabel-LBw7rwT-.js";import"./useLabels-BS-wLRL7.js";import"./useButton-CWSewhky.js";import"./useFocusRing-f-j38KHJ.js";import"./index-DiD34Zcz.js";import"./Checkbox-CWAMC08Y.js";import"./RSPContexts-Bwf4jFBm.js";import"./Form-DAr4okKo.js";import"./useToggle-DODdTnci.js";import"./useFormReset-Bl6vpdTL.js";import"./useToggleState-8_kggo6i.js";import"./VisuallyHidden-Bd_D0eyu.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-z1IdUO2W.js";import"./VisuallyHidden-CuNXiRNm.js";import"./TablePagination-D2v7dK2E.js";import"./Select-Dj4uOrOZ.js";import"./Dialog-wqU4GTwM.js";import"./Separator-tY5ufu2a.js";import"./Text-D4iNm3vj.js";import"./useLocalizedStringFormatter-DHZtOyqR.js";import"./animation-CjSNrmR0.js";import"./FieldError-BBhg-UKV.js";import"./ListBox-tGsJk0Sh.js";import"./useListState-BZCNk1xQ.js";import"./useField-CaBqZtdO.js";import"./definition-CJBRyhl_.js";import"./Autocomplete-BoDp8ZbT.js";import"./Input-CAep4KHh.js";import"./SearchField-B9dpGlqE.js";import"./useFilter-DoNzE6c4.js";import"./FieldError-EvsgZRZi.js";import"./FieldLabel-PcUd-CXD.js";import"./ButtonIcon-k94kaAW7.js";import"./Link-CyshbbmO.js";import"./getNodeText-BxTcJFho.js";import"./useLink-BkcK4ex5.js";import"./useGridSelectionCheckbox-CkyhFTzj.js";import"./useHighlightSelectionDescription-DS5dVVGj.js";import"./useHasTabbableChild-CAFTFvjZ.js";import"./Avatar-CbHSWRTU.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
