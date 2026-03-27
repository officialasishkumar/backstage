import{j as e,r as a}from"./iframe-BzEx-mzh.js";import{t as C,s as b,d as T,a as h}from"./utils-DGZMkX7w.js";import{u as p,T as d,e as j,C as S}from"./useTable-O7qdRDCN.js";import{F as v}from"./Flex-ClAtc1ys.js";import{R as f,a as c}from"./RadioGroup-Ett7gSgb.js";import{T as x}from"./Text-DaGJjJFj.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-CKEPa0P4.js";import"./openLink-iXSrpszV.js";import"./Virtualizer-BKjIrKRY.js";import"./SelectionManager-ClYV0B6V.js";import"./useFocusable-B2BTQL4u.js";import"./useObjectRef-7NzQiWpJ.js";import"./useEvent-LozTFo0-.js";import"./SelectionIndicator-bBhHlkUk.js";import"./context-B5YRTm9_.js";import"./usePress-FeDF9flR.js";import"./textSelection-KICnnnol.js";import"./Hidden-CUyFvq5U.js";import"./useControlledState-BYt3eqAD.js";import"./OverlayArrow-D1rdKuMj.js";import"./useNumberFormatter-D33ejKQD.js";import"./utils-BDXApE7U.js";import"./index-CY69XmlQ.js";import"./Checkbox-DqxS-Z1d.js";import"./RSPContexts-D3_bCSg5.js";import"./Form-DUon0ahv.js";import"./useToggle-BC2eRy4B.js";import"./useFormReset-C6dIPZrP.js";import"./useToggleState-C_-I3X3T.js";import"./useFocusRing-KF7qKJ3V.js";import"./VisuallyHidden-DPymwPDc.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-CMRKpgOd.js";import"./VisuallyHidden-DyAgL90q.js";import"./TablePagination-CkKbWokt.js";import"./Select-BGOvpivj.js";import"./Dialog-WAkrKshU.js";import"./Button-C70VriFO.js";import"./Label-B0n4fyUQ.js";import"./useLabel-CqGSp8Pi.js";import"./useLabels-DbpWDRuh.js";import"./useButton-Cu9ZqvUB.js";import"./Separator-Cj69X7wG.js";import"./Text-DFT04VlK.js";import"./useLocalizedStringFormatter-Ef-c9lNP.js";import"./animation-Du4VRchS.js";import"./FieldError-DJ8YOJCM.js";import"./ListBox-6XgfnuKp.js";import"./useListState-DoPs8DdS.js";import"./useField-8SIDYuBp.js";import"./definition-BuV_N9Rk.js";import"./Autocomplete-BOBNrWx9.js";import"./Input-CTiKcocy.js";import"./SearchField-Chi6c7Wz.js";import"./useFilter-C89WXqO9.js";import"./FieldError-B_3mz3-F.js";import"./FieldLabel-B3i3mEYC.js";import"./ButtonIcon-DHyXjGXE.js";import"./Link-DyccnYUV.js";import"./getNodeText-Bb3-BK6W.js";import"./useLink-YcOziA11.js";import"./useGridSelectionCheckbox-D_SXLH74.js";import"./useHighlightSelectionDescription-TyyCbIMK.js";import"./useHasTabbableChild-CEGnSLh8.js";import"./Avatar-C73rZWIN.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
