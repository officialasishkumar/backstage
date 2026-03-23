import{j as e,r as a}from"./iframe--MS66teN.js";import{t as C,s as b,d as T,a as h}from"./utils-CLfGVMdF.js";import{u as p,T as d,e as j,C as S}from"./useTable-D_lug3YW.js";import{F as v}from"./Flex-Bkk4PPa6.js";import{R as f,a as c}from"./RadioGroup-DcPKr6tc.js";import{T as x}from"./Text-BcJAjKz6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8lN7z6e.js";import"./BUIProvider-MOAkSoGK.js";import"./openLink-DbqcEISv.js";import"./Virtualizer-C0LsA_wn.js";import"./SelectionManager-DMHukT7Q.js";import"./useFocusable-DLFp4XoQ.js";import"./useObjectRef-Cr6pwr_q.js";import"./useEvent-BX5xxD8n.js";import"./SelectionIndicator-BQde6J9l.js";import"./context-BU035WOs.js";import"./usePress-DqAVT7uF.js";import"./Hidden-Cz9DXl8-.js";import"./useControlledState-DQt6cgkf.js";import"./OverlayArrow-BK9sFPAy.js";import"./Button-CCtpouuB.js";import"./utils-CDkR7BHe.js";import"./Label-Bgz6Ahx5.js";import"./useLabel-C7btRkVP.js";import"./useLabels-C7ONURlQ.js";import"./useButton-MDFZwu-E.js";import"./useFocusRing-C9wEEqr0.js";import"./index-CBEN-Oub.js";import"./Checkbox-UuOxfLun.js";import"./RSPContexts-CsA0WQce.js";import"./Form-D1Cxiwda.js";import"./useToggle-D480aHa5.js";import"./useFormReset-C9nTeX9-.js";import"./useToggleState-CPxeLGFi.js";import"./VisuallyHidden-DkzsByZF.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-N6SMHXUx.js";import"./VisuallyHidden-9CH94RDN.js";import"./TablePagination-Db9Wa2go.js";import"./Select-C9iCkNrW.js";import"./Dialog-CAo9SNpU.js";import"./Separator-DJN19MO9.js";import"./Text-58j1Y26d.js";import"./useLocalizedStringFormatter-CLvvEvOQ.js";import"./animation-Ct8GgPlf.js";import"./FieldError-oZMBmsgv.js";import"./ListBox-VcGfgbNG.js";import"./useListState-B28I2LPN.js";import"./useField-C-pe9ivC.js";import"./definition-DLYholUs.js";import"./Autocomplete-D6q6cSrN.js";import"./Input-B_yV_l6r.js";import"./SearchField-2i1ze83J.js";import"./useFilter-xbl0afuk.js";import"./FieldError-B6LgUh6g.js";import"./FieldLabel-CsTSLGM_.js";import"./ButtonIcon-Cp_N32Fu.js";import"./Link-Dw21cUl6.js";import"./getNodeText-DvaoSYsW.js";import"./useLink-BXJFV6p2.js";import"./useGridSelectionCheckbox-DEQ_MbKV.js";import"./useHighlightSelectionDescription-CHJtBzr_.js";import"./useHasTabbableChild-B6ZkhZlt.js";import"./Avatar-BbR34_pY.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
