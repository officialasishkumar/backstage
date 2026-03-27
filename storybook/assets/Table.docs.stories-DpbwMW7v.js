import{j as e,r as a}from"./iframe-CsOrEaZh.js";import{t as C,s as b,d as T,a as h}from"./utils-CiJ4RzE9.js";import{u as p,T as d,e as j,C as S}from"./useTable-CX18Hawa.js";import{F as v}from"./Flex-76K_gCf3.js";import{R as f,a as c}from"./RadioGroup-6h6sWaKc.js";import{T as x}from"./Text-KaPHpxDU.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-DqcKutYD.js";import"./openLink-DxicnjxI.js";import"./Virtualizer-Dcuj5P5A.js";import"./SelectionManager--BGcIXOf.js";import"./useFocusable-CJjInPVY.js";import"./useObjectRef-V9AzdSej.js";import"./useEvent-CSuh0nUR.js";import"./SelectionIndicator-C7-d2paK.js";import"./context-nDTUjXys.js";import"./usePress-BHmEEt_m.js";import"./textSelection-hvFPTFzt.js";import"./Hidden-B5osVwtt.js";import"./useControlledState-DgY_NNrZ.js";import"./OverlayArrow-CLN86wqY.js";import"./useNumberFormatter-qvRXKrRc.js";import"./utils-DX_f7LBT.js";import"./index-B-28iBpO.js";import"./Checkbox-DRyRLANF.js";import"./RSPContexts-CcOqubk7.js";import"./Form-D10osx_N.js";import"./useToggle-B6u6X3ln.js";import"./useFormReset-qNoaNtLL.js";import"./useToggleState-B01RSIoO.js";import"./useFocusRing-Uu0QOYK5.js";import"./VisuallyHidden-CCXymddi.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-9qfI0dYT.js";import"./VisuallyHidden-4azfyyfU.js";import"./TablePagination-DrfTZqHI.js";import"./Select-B63-7_OI.js";import"./Dialog-BaeQlCis.js";import"./Button-BxrZ9byD.js";import"./Label-DH_q8bS_.js";import"./useLabel-wdwNeUIX.js";import"./useLabels-idA1V8nX.js";import"./useButton-CMAe_rWs.js";import"./Separator-D3FWOio_.js";import"./Text-CWl4og1k.js";import"./useLocalizedStringFormatter-v1HuoMj_.js";import"./animation-vwQk8N1E.js";import"./FieldError-DQ8MdVXp.js";import"./ListBox-BNP023WA.js";import"./useListState-D0hXkg9t.js";import"./useField-C5VOK4Cx.js";import"./definition-CyoA3KhP.js";import"./Autocomplete-C56sIvMc.js";import"./Input-B9QVWQEF.js";import"./SearchField-l-wkbeUy.js";import"./useFilter-CCaylJuV.js";import"./FieldError-CRo3dRFv.js";import"./FieldLabel-DmKU3LL0.js";import"./ButtonIcon-CLNAZzF8.js";import"./Link-qQ03dert.js";import"./getNodeText-Bw5qH2JO.js";import"./useLink-BrI6JrCT.js";import"./useGridSelectionCheckbox-DzBbm6j9.js";import"./useHighlightSelectionDescription-CgufLDtC.js";import"./useHasTabbableChild-MuzurmzB.js";import"./Avatar-CoNZZ9cf.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
