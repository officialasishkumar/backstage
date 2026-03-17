import{j as e,r as a}from"./iframe-DsZtuuTR.js";import{t as C,s as b,d as T,a as h}from"./utils-Dl0yVHYU.js";import{u as p,T as d,e as j,C as S}from"./useTable-BGfSKTOk.js";import{F as v}from"./Flex-TuHv3a3Y.js";import{R as f,a as c}from"./RadioGroup-1aBGmC50.js";import{T as x}from"./Text-CkyrYO2D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uH1xIlYD.js";import"./BUIProvider-CyUmZSwJ.js";import"./openLink-D7WjByac.js";import"./Virtualizer-B_v3NHbv.js";import"./SelectionManager-DDxMK5Zf.js";import"./useFocusable-BjFuxCiE.js";import"./useObjectRef-BKuX1cxx.js";import"./useEvent-BJqZJzBX.js";import"./SelectionIndicator-CkuEJzOW.js";import"./context-BBusO5fG.js";import"./usePress-Dn3qv1At.js";import"./Hidden-6rwvEI5v.js";import"./useControlledState-B9QwQu10.js";import"./OverlayArrow-CSggHew4.js";import"./Button-Ce-x5v5W.js";import"./utils-DOn52t1M.js";import"./Label-BZbs8mWr.js";import"./useLabel-C6xabSCS.js";import"./useLabels-C4sOwMGS.js";import"./useButton-CxeSy5Gb.js";import"./useFocusRing-Cq6Zb8CQ.js";import"./index-c7SR34sA.js";import"./Checkbox-94AnIjbj.js";import"./RSPContexts-C47maKDE.js";import"./Form-C5Y7RnAN.js";import"./useToggle-DyUDwTog.js";import"./useFormReset-DKRtoxeX.js";import"./useToggleState-B1WPIH0_.js";import"./VisuallyHidden-sT4qzfGv.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-BEFM7tg4.js";import"./VisuallyHidden-B30AIip8.js";import"./TablePagination-CbjCCZ47.js";import"./Select-D6wQGW0V.js";import"./Dialog-DMCT5PrJ.js";import"./Separator-DZWmC-oa.js";import"./Text-D5_LMc_o.js";import"./useLocalizedStringFormatter-OA-PVtng.js";import"./animation-BjWwA6Ra.js";import"./FieldError-W7P4W-EC.js";import"./ListBox-Cyl8ye6K.js";import"./useListState-C_nZRqrd.js";import"./useField-8MoFIJFD.js";import"./definition-DEvMSqpf.js";import"./Autocomplete-XM9x9pVY.js";import"./Input-C181R_QF.js";import"./SearchField-CmIUkT-z.js";import"./useFilter-gIAWN0rP.js";import"./FieldError-BT8ml9De.js";import"./FieldLabel-DKHC4p6P.js";import"./ButtonIcon-CljLq92j.js";import"./Link-CbuAMoR4.js";import"./getNodeText-Cf7LXOu6.js";import"./useLink-krt4c6D7.js";import"./useGridSelectionCheckbox-DbA-z234.js";import"./useHighlightSelectionDescription-DbrGxTcR.js";import"./useHasTabbableChild-cIThvFmf.js";import"./Avatar-CphFW9M4.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
