import{j as e,r as a}from"./iframe-Bc_t70P9.js";import{t as C,s as b,d as T,a as h}from"./utils-CAUHT6Dr.js";import{u as p,T as d,e as j,C as S}from"./useTable-CKj9bI9o.js";import{F as v}from"./Flex-CYBMfj55.js";import{R as f,a as c}from"./RadioGroup-B9N1YKtV.js";import{T as x}from"./Text-lW4k86g5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCiK2kdg.js";import"./BUIProvider-DlGeXRAl.js";import"./openLink-BJkfNliT.js";import"./Virtualizer-BW5Ano8W.js";import"./SelectionManager-CHxww0mY.js";import"./useFocusable-BZApvfF5.js";import"./useObjectRef-D3fpp4Bp.js";import"./useEvent-Cd2fHssC.js";import"./SelectionIndicator-b3TiDs7T.js";import"./context-BUYBpBNb.js";import"./usePress-BR0f75OU.js";import"./Hidden-DnrNyIHU.js";import"./useControlledState-_-nJAHd9.js";import"./OverlayArrow-DmTTDG8G.js";import"./Button-DGImDgRm.js";import"./utils-CTUm9KAv.js";import"./Label-XCqxAIUC.js";import"./useLabel-Bbc2NlDf.js";import"./useLabels-Bfk_bVZK.js";import"./useButton-CJGjVBgk.js";import"./useFocusRing-CAJ4egT3.js";import"./index-D5B2ecwe.js";import"./Checkbox-DmLRoAAl.js";import"./RSPContexts-Dsa_GXW9.js";import"./Form-BVuIWbsn.js";import"./useToggle-Cwm3d6ty.js";import"./useFormReset-DAD-jNNL.js";import"./useToggleState-DAx2I5Hr.js";import"./VisuallyHidden-CpGThTOY.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-Brc9QKW5.js";import"./VisuallyHidden-CU6qXb0m.js";import"./TablePagination-z3Zh2frk.js";import"./Select-Cpegd4G_.js";import"./Dialog-SBSAJvEK.js";import"./Separator-P6Hhk1RT.js";import"./Text-THrFBgta.js";import"./useLocalizedStringFormatter-BQUkNj58.js";import"./animation-mw0W3Sp9.js";import"./FieldError-Cq2LDUEQ.js";import"./ListBox-D0F0_ZCB.js";import"./useListState-B4ETxJZr.js";import"./useField-YgaNp7eF.js";import"./definition-2XT-wY4w.js";import"./Autocomplete-g5VooHcM.js";import"./Input-C9ucl69s.js";import"./SearchField-_bDmneT7.js";import"./useFilter-DcPdNXn6.js";import"./FieldError-B-iVozn6.js";import"./FieldLabel-47hrg2_5.js";import"./ButtonIcon-BIzZshhp.js";import"./Link-Pp88AOPQ.js";import"./getNodeText-C85m-K5M.js";import"./useLink-BxrHL2BR.js";import"./useGridSelectionCheckbox-CtIlpnk3.js";import"./useHighlightSelectionDescription-ldUASRWC.js";import"./useHasTabbableChild-DkjPQjim.js";import"./Avatar-DlvlNafC.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
