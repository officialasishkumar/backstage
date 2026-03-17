import{j as e,r as a}from"./iframe-Cvt_X182.js";import{t as C,s as b,d as T,a as h}from"./utils-CAKqZ65U.js";import{u as p,T as d,e as j,C as S}from"./useTable-Dliih-87.js";import{F as v}from"./Flex-Bj5DoX6i.js";import{R as f,a as c}from"./RadioGroup-BodpaEpQ.js";import{T as x}from"./Text-ClR4ODtv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGcTZ4mm.js";import"./BUIProvider-BemZ3N2Z.js";import"./openLink-BX21WjU1.js";import"./Virtualizer-DVyGzLmz.js";import"./SelectionManager-CunHyHNN.js";import"./useFocusable-BNqaB3GQ.js";import"./useObjectRef-DFliq3pQ.js";import"./useEvent-SyqTY7OH.js";import"./SelectionIndicator-TldkcfaC.js";import"./context-Dlelqyxj.js";import"./usePress-t8yjYszM.js";import"./Hidden-CMy7q5sq.js";import"./useControlledState-PX64MobC.js";import"./OverlayArrow-DQd7iiz-.js";import"./Button-M9M-8xcv.js";import"./utils-Bg_Phdnn.js";import"./Label-CfqQNTlK.js";import"./useLabel-DxHGJv8l.js";import"./useLabels-DBkP8_UW.js";import"./useButton-CyApEfki.js";import"./useFocusRing-ehZLfaMm.js";import"./index-wgDMe5ci.js";import"./Checkbox-IJDMVkYp.js";import"./RSPContexts-CLTxsp_0.js";import"./Form-CRcaJ35N.js";import"./useToggle-CwLlf4ZP.js";import"./useFormReset-utZU4Sxw.js";import"./useToggleState-CUWkYRiA.js";import"./VisuallyHidden-BDAvcPYG.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-zlCWFcU2.js";import"./VisuallyHidden-eYL_VN9P.js";import"./TablePagination-CHOali6m.js";import"./Select-D93SBgQm.js";import"./Dialog-Dc2VinuF.js";import"./Separator-DQk_Qac1.js";import"./Text-CpDCUFEc.js";import"./useLocalizedStringFormatter-BLxQC0Qt.js";import"./animation-Dv8KG5zS.js";import"./FieldError-CFpE2MAS.js";import"./ListBox-D70ry2Do.js";import"./useListState-DdpTt5HT.js";import"./useField-1KCJEe4r.js";import"./definition-DyDegH16.js";import"./Autocomplete-C67Ev6ad.js";import"./Input-CAfV34px.js";import"./SearchField-BHPMcPwK.js";import"./useFilter-s5ThIl1w.js";import"./FieldError-C_7GVGdz.js";import"./FieldLabel-CPQi_sQV.js";import"./ButtonIcon-Cezk1A5-.js";import"./Link-BC7r_BSl.js";import"./getNodeText-SyWIdB3f.js";import"./useLink-CIGLwX86.js";import"./useGridSelectionCheckbox-BtlVwz7e.js";import"./useHighlightSelectionDescription--rzcdzto.js";import"./useHasTabbableChild-Cbr71NHW.js";import"./Avatar-DxivU7O7.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
