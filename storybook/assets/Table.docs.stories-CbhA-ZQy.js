import{j as e,r as a}from"./iframe-BPa6N3SD.js";import{t as C,s as b,d as T,a as h}from"./utils-BDkr4QHE.js";import{u as p,T as d,e as j,C as S}from"./useTable-Dyh7NTyZ.js";import{F as v}from"./Flex-B8JoJmvq.js";import{R as f,a as c}from"./RadioGroup-ILRybpt2.js";import{T as x}from"./Text-Clkq6d7U.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCMAs2uM.js";import"./BUIProvider-BLvES4PE.js";import"./openLink-B0Vv0SU7.js";import"./SelectionManager-BqtbLglD.js";import"./useFocusable-4FnVs4dN.js";import"./useObjectRef-CI83hwRy.js";import"./useEvent-BE9REamV.js";import"./SelectionIndicator-BupITJ8a.js";import"./context-CPBrHf_p.js";import"./usePress-BE7l1dkR.js";import"./Hidden-eNtBBPfi.js";import"./useControlledState-Dd4M1DuP.js";import"./index-BHPSdYx0.js";import"./Checkbox-CUiqU0px.js";import"./RSPContexts-9qGDloQE.js";import"./utils-DswDyXof.js";import"./Form-BK-VVzZF.js";import"./useToggle-D5UfFGK1.js";import"./useFormReset-DfD-twWJ.js";import"./useToggleState-DOke-XeN.js";import"./useFocusRing-BJdCCSYi.js";import"./VisuallyHidden-Wp3WfQnW.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-D-rFQ0mz.js";import"./VisuallyHidden-B9WWYLzM.js";import"./TablePagination-DmvDQM3z.js";import"./Select-Dhy2SeYM.js";import"./Dialog-BwC5D86X.js";import"./Button-DYofrAhh.js";import"./Label-CqCXfrag.js";import"./useLabel-pPCak257.js";import"./useLabels-D7K7m6u5.js";import"./useButton-CBB0LfdZ.js";import"./OverlayArrow-COlX7h77.js";import"./Separator-CP52fbF9.js";import"./Text-BxJibhmm.js";import"./useLocalizedStringFormatter-CPXeU17L.js";import"./animation-Ct3KSSa5.js";import"./FieldError-DLOsT5fZ.js";import"./ListBox-DV72Du-3.js";import"./useListState-PLbgipyy.js";import"./useField-_4T8u5-k.js";import"./definition-Rwj0WVy5.js";import"./Autocomplete-Cvvc2ljq.js";import"./Input-C2jKzkiM.js";import"./SearchField-C0J2Zs0Q.js";import"./useFilter-w197uTkk.js";import"./FieldError-MslN1AHI.js";import"./FieldLabel-nZYhFuOn.js";import"./ButtonIcon-Ca3RO29T.js";import"./Link-DDT7Atdq.js";import"./getNodeText-STEwi9WY.js";import"./useLink-bZHOHAgt.js";import"./useHighlightSelectionDescription-AS_jfC0o.js";import"./useHasTabbableChild-CNWYCsQC.js";import"./Avatar-DF4giD4i.js";const We={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Oe=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,Oe as __namedExportsOrder,We as default};
