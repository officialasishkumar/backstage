import{j as e,r as a}from"./iframe-BZrpTwFW.js";import{t as C,s as b,d as T,a as h}from"./utils-BiUL0kL9.js";import{u as p,T as d,e as j,C as S}from"./useTable-DC1DBkxf.js";import{F as v}from"./Flex-BSktEteq.js";import{R as f,a as c}from"./RadioGroup-fO_cFcYD.js";import{T as x}from"./Text-CEmS4uNZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNu1idMQ.js";import"./BUIProvider-CVmOZZtr.js";import"./openLink-2h5lI_6H.js";import"./Virtualizer-GFGtnBui.js";import"./SelectionManager-pQRFbVCU.js";import"./useFocusable-Fj-PPlVe.js";import"./useObjectRef-CCVvEjZ1.js";import"./useEvent-D8X2TL4U.js";import"./SelectionIndicator-CMl0C4zv.js";import"./context-BHz7VsAD.js";import"./usePress-CP5rPGmJ.js";import"./Hidden-pNI9Aybn.js";import"./useControlledState-Bm-enBJS.js";import"./OverlayArrow-rt08zye-.js";import"./Button-DEgC-rmb.js";import"./utils-Cpx9QD4n.js";import"./Label-CN5LFAUT.js";import"./useLabel-7aA4_mkj.js";import"./useLabels-Dh3_aCtO.js";import"./useButton-D3et94dj.js";import"./useFocusRing-D6DIMDSZ.js";import"./index-BCUeayET.js";import"./Checkbox-BOshPzWa.js";import"./RSPContexts-D1pm_F3i.js";import"./Form-BXScxWst.js";import"./useToggle-DO-a3MOx.js";import"./useFormReset-B_-TJ8dk.js";import"./useToggleState-Dg3uag82.js";import"./VisuallyHidden-yH3_W6Lv.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-Opw5MFqI.js";import"./VisuallyHidden-iS17rjMW.js";import"./TablePagination-wyMFvvgm.js";import"./Select-DE6hrJvc.js";import"./Dialog-CHAeTSjG.js";import"./Separator-DFMQupPA.js";import"./Text-BTsdokmM.js";import"./useLocalizedStringFormatter-BvZzZmm2.js";import"./animation-BFkSIJNb.js";import"./FieldError-BVJCpkyZ.js";import"./ListBox-B3r_hjUs.js";import"./useListState-CF0kw3Z8.js";import"./useField-bxEk6djq.js";import"./definition-cc4GeqLl.js";import"./Autocomplete-C3Hrk3G5.js";import"./Input-D3mnq85x.js";import"./SearchField-CV92ppKK.js";import"./useFilter-e8Ycviyl.js";import"./FieldError-DU6_rnmk.js";import"./FieldLabel-DhfQ2D3D.js";import"./ButtonIcon-D5MKKTe8.js";import"./Link-DmdmRsf3.js";import"./getNodeText-BGqZ70EN.js";import"./useLink-CAPSC-XX.js";import"./useGridSelectionCheckbox-Bc0Zxxsj.js";import"./useHighlightSelectionDescription-DAOgdOjl.js";import"./useHasTabbableChild-C6zJl6tb.js";import"./Avatar-Dr5VuTrP.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
