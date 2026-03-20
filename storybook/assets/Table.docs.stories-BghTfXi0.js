import{j as e,r as a}from"./iframe-BfKy45FJ.js";import{t as C,s as b,d as T,a as h}from"./utils-CG72x3ee.js";import{u as p,T as d,e as j,C as S}from"./useTable-DVQA1yk2.js";import{F as v}from"./Flex-D-5MCpdY.js";import{R as f,a as c}from"./RadioGroup-B2JsL7Gi.js";import{T as x}from"./Text-CHbg1CQL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iCFn_EoD.js";import"./BUIProvider-CkXaGfx4.js";import"./openLink-Du3SpVTa.js";import"./Virtualizer-C7f95rJo.js";import"./SelectionManager-VFU7tvQk.js";import"./useFocusable-BkskNhnN.js";import"./useObjectRef-BfVGDA57.js";import"./useEvent-ApEptYeH.js";import"./SelectionIndicator-Ba_E2sWv.js";import"./context-D5pZQn02.js";import"./usePress-NzTwl-xu.js";import"./Hidden-DyyLbmUq.js";import"./useControlledState-ZkU67DHc.js";import"./OverlayArrow-D-mW8yFf.js";import"./Button-CyOgZfW2.js";import"./utils-CKMp4gEN.js";import"./Label-BRDMhhSK.js";import"./useLabel-CtiYnnIc.js";import"./useLabels-DHC0tbnH.js";import"./useButton-qSjO7LoT.js";import"./useFocusRing-DwOqrvqE.js";import"./index-Cd7167-5.js";import"./Checkbox-BUST2L7q.js";import"./RSPContexts-BX0XRw9X.js";import"./Form-Bkam98N3.js";import"./useToggle-BBllbO9h.js";import"./useFormReset-nhKDOLjg.js";import"./useToggleState-yMPYG53c.js";import"./VisuallyHidden-9cDhCuiH.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-CQQG83jb.js";import"./VisuallyHidden-BiqHywir.js";import"./TablePagination-DMnFTSmP.js";import"./Select-UFi2MObK.js";import"./Dialog-Bgs6Jkt4.js";import"./Separator-BtHzStIm.js";import"./Text-DF_8UG0h.js";import"./useLocalizedStringFormatter-C7KbSgA3.js";import"./animation-Bft7VOeV.js";import"./FieldError-B-AiMeDF.js";import"./ListBox-DfQg8Pfd.js";import"./useListState-B5fhQnH9.js";import"./useField-DsHlIiJc.js";import"./definition-ssgkZFwR.js";import"./Autocomplete-8P1tNkIH.js";import"./Input-BCYlv5V1.js";import"./SearchField-BFj0r_jk.js";import"./useFilter-e1o0NgCA.js";import"./FieldError-CjQAlMWg.js";import"./FieldLabel-DzbXPAzI.js";import"./ButtonIcon-BIRtm6dy.js";import"./Link-CJGG_7S8.js";import"./getNodeText-DWeVoSXd.js";import"./useLink-DOssZqdp.js";import"./useGridSelectionCheckbox-Zl1_T5zE.js";import"./useHighlightSelectionDescription-CY-_ETlM.js";import"./useHasTabbableChild-CstNHswb.js";import"./Avatar-C89e1JTy.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
