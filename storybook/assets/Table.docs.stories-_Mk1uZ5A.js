import{j as e,r as a}from"./iframe-D9Y8dNt-.js";import{t as C,s as b,d as T,a as h}from"./utils-ZagxuX1l.js";import{u as p,T as d,e as j,C as S}from"./useTable-Ce-vycfO.js";import{F as v}from"./Flex-CfVJxaJ3.js";import{R as f,a as c}from"./RadioGroup-COZfVyo7.js";import{T as x}from"./Text-Csn8k-oH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C1uQgXas.js";import"./BUIProvider-Cr5RdwXf.js";import"./openLink-CijSEPaD.js";import"./Virtualizer-4E5w7shS.js";import"./SelectionManager-BWQWF3Vv.js";import"./useFocusable-ECqsmbcs.js";import"./useObjectRef-BR7bk4iL.js";import"./useEvent-B8uYM54c.js";import"./SelectionIndicator-BEsUSylT.js";import"./context-DUq-D-3d.js";import"./usePress-DCE3TYhK.js";import"./Hidden-0cpAMPLz.js";import"./useControlledState-Dz6JT2sr.js";import"./OverlayArrow-DqwF1lhg.js";import"./Button-BMHCZakJ.js";import"./utils-BV3YmVrV.js";import"./Label-C7LqJhTE.js";import"./useLabel-Cjk020XP.js";import"./useLabels-DllBgKlD.js";import"./useButton-CGk7YItM.js";import"./useFocusRing-4Ef6SMlB.js";import"./index-DqCvV9X5.js";import"./Checkbox-CT6bwHwv.js";import"./RSPContexts-Dp810Hqb.js";import"./Form-D2yhgzAN.js";import"./useToggle-M34GhulF.js";import"./useFormReset-C6KIDBHP.js";import"./useToggleState-BERMGqpF.js";import"./VisuallyHidden-ZVQOvKBU.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-D8DGw-le.js";import"./VisuallyHidden-BSYKoN1t.js";import"./TablePagination-DRxL2hNs.js";import"./Select-f7TEhwU0.js";import"./Dialog-DOtV98v_.js";import"./Separator-DpqQiebW.js";import"./Text-BJNy9mx0.js";import"./useLocalizedStringFormatter-CN7xFPOJ.js";import"./animation-DawsA-5A.js";import"./FieldError-552c4uRy.js";import"./ListBox-CXyWOMqh.js";import"./useListState-DSiLPgBt.js";import"./useField-CCbj5VSx.js";import"./definition-C7paMhSs.js";import"./Autocomplete-GD9pBC4B.js";import"./Input-a07GIbKX.js";import"./SearchField-CRUjsQNG.js";import"./useFilter-YXo1tR1T.js";import"./FieldError-Be9nO-ze.js";import"./FieldLabel-Cno3icZt.js";import"./ButtonIcon-CnvEZ5cY.js";import"./Link-B_UN08HN.js";import"./getNodeText-RGW_EngD.js";import"./useLink-DINE9H4S.js";import"./useGridSelectionCheckbox-D00HNmx-.js";import"./useHighlightSelectionDescription-CgNfw6ya.js";import"./useHasTabbableChild-G9vOrLBG.js";import"./Avatar--w102UHK.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
