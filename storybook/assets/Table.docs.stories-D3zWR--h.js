import{j as e,r as a}from"./iframe-D94_c1Tp.js";import{t as C,s as b,d as T,a as h}from"./utils-yZicogrU.js";import{u as p,T as d,e as j,C as S}from"./useTable-BbfIhM5V.js";import{F as v}from"./Flex-BD7p8n7-.js";import{R as f,a as c}from"./RadioGroup-CgqktApl.js";import{T as x}from"./Text-BKhCmAzJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrZ8YAao.js";import"./BUIProvider-DcamUp_A.js";import"./openLink-CpY4wZ7E.js";import"./Virtualizer-DDhEXBck.js";import"./SelectionManager-iciEXr1v.js";import"./useFocusable-Bf_D_qto.js";import"./useObjectRef-CQq7Ckec.js";import"./useEvent-_12Yrs8a.js";import"./SelectionIndicator-CfbB5Nug.js";import"./context-C2hIFvla.js";import"./usePress-qjsk5C_R.js";import"./Hidden-DilMTta3.js";import"./useControlledState-0mGJKkKc.js";import"./OverlayArrow-q12qJWe-.js";import"./Button-BzZ0yr_B.js";import"./utils-jx1AoOxG.js";import"./Label-CFihtFOw.js";import"./useLabel-NF9_G9iG.js";import"./useLabels-CXUMb1zx.js";import"./useButton-Cso08r64.js";import"./useFocusRing-BYhs96GC.js";import"./index-kpt0iLMR.js";import"./Checkbox-RwVRVstk.js";import"./RSPContexts-C4umQXUC.js";import"./Form-BaHRrAUN.js";import"./useToggle-mZYDMLCr.js";import"./useFormReset-Cz5Gpz3k.js";import"./useToggleState-Dk2J5URQ.js";import"./VisuallyHidden-xpji7b-N.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-Bv6ox6FI.js";import"./VisuallyHidden-CN6kxW4s.js";import"./TablePagination-q-6lYcJd.js";import"./Select-BwfAYH4r.js";import"./Dialog-uqQy6q5v.js";import"./Separator-XD8GeRJM.js";import"./Text-N8F1uMKS.js";import"./useLocalizedStringFormatter-DhrVKaZy.js";import"./animation-VaH95JAd.js";import"./FieldError-up-to5jA.js";import"./ListBox-D_9JqG5E.js";import"./useListState-BTkA7GU_.js";import"./useField-DdQBy-ci.js";import"./definition-CymqCnC9.js";import"./Autocomplete-CqvYdEyF.js";import"./Input-CYQsD0HC.js";import"./SearchField-oWlu5onR.js";import"./useFilter-BNohNLDU.js";import"./FieldError-BucX8jof.js";import"./FieldLabel-mv6HK6Nw.js";import"./ButtonIcon-axv3B1s_.js";import"./Link-CTwgXOxm.js";import"./getNodeText-iasSU0K-.js";import"./useLink-C7VZO9_2.js";import"./useGridSelectionCheckbox-BwR6V5Hk.js";import"./useHighlightSelectionDescription-Bm7WRpEj.js";import"./useHasTabbableChild-hEg681vg.js";import"./Avatar-D3RmmAe_.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
