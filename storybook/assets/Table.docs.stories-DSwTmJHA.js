import{j as e,r as a}from"./iframe-wkUvrVVn.js";import{t as C,s as b,d as T,a as h}from"./utils-DRDTbmrv.js";import{u as p,T as d,e as j,C as S}from"./useTable-ySYGZNvm.js";import{F as v}from"./Flex-Cx1EMXDT.js";import{R as f,a as c}from"./RadioGroup-BiOoAlin.js";import{T as x}from"./Text-Cx6rMPRv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5HVCV75.js";import"./BUIProvider-6lEx8047.js";import"./openLink-CRYj9xIm.js";import"./Virtualizer-CHrFHACl.js";import"./SelectionManager-B08jYyr8.js";import"./useFocusable-Df6FltMm.js";import"./useObjectRef-X3MZgZhl.js";import"./useEvent-BrZFf1NI.js";import"./SelectionIndicator-DOsGaP1A.js";import"./context-B86FjfL1.js";import"./usePress--j1ZReKe.js";import"./Hidden-D-JvTNgp.js";import"./useControlledState-D66GTq6l.js";import"./OverlayArrow-CnLIuF5p.js";import"./Button-BZhdv_xg.js";import"./utils-MnW5ckK1.js";import"./Label-DpJDGBkt.js";import"./useLabel-4kQv2iRo.js";import"./useLabels-2YgORK--.js";import"./useButton-C6CDmvSG.js";import"./useFocusRing-DQCUvfrr.js";import"./index-C8GJe_AC.js";import"./Checkbox-CCCZuwxd.js";import"./RSPContexts-C_MJyRDj.js";import"./Form-CQkfcQkp.js";import"./useToggle-DGxmaf5L.js";import"./useFormReset-skkqG3cw.js";import"./useToggleState-Ce4RRbqi.js";import"./VisuallyHidden-COu0VDEn.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-8wjLhIaU.js";import"./VisuallyHidden-C5lGxwEV.js";import"./TablePagination-B6KH-ABe.js";import"./Select-B8LxVB1O.js";import"./Dialog-rDu-vg9W.js";import"./Separator-D5h5pLGI.js";import"./Text-DWSMPRZK.js";import"./useLocalizedStringFormatter-BihcPHu9.js";import"./animation-Dx5vbM--.js";import"./FieldError-CD2S2NEj.js";import"./ListBox-_vRugpzC.js";import"./useListState-DKu0bdjg.js";import"./useField-mV-Y3dRQ.js";import"./definition-DnOqqA6E.js";import"./Autocomplete-Dm3AxXxg.js";import"./Input-D6dfznmY.js";import"./SearchField-DWmHP_bp.js";import"./useFilter-D-J8haIK.js";import"./FieldError-dm35bgBV.js";import"./FieldLabel-CGCMY7Cd.js";import"./ButtonIcon-Deu3hy45.js";import"./Link-UbBYZkMG.js";import"./getNodeText-BJLYD_ZB.js";import"./useLink-iQ2zTAID.js";import"./useGridSelectionCheckbox-C608mUik.js";import"./useHighlightSelectionDescription-BOajwaJj.js";import"./useHasTabbableChild-DoeIVgZw.js";import"./Avatar-ZaF47v7-.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
