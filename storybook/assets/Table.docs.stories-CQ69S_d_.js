import{j as e,r as a}from"./iframe-BPVPwWzn.js";import{t as C,s as b,d as T,a as h}from"./utils-DS9w-Ge8.js";import{u as p,T as d,e as j,C as S}from"./useTable-EwFK8cQ0.js";import{F as v}from"./Flex-BHg4l4tt.js";import{R as f,a as c}from"./RadioGroup-B7Pjpz2r.js";import{T as x}from"./Text-CH1QBJ2O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClPDwBGK.js";import"./BUIProvider-CpcGyQIQ.js";import"./openLink-Bc-74F4f.js";import"./Virtualizer-BIrqGDuS.js";import"./SelectionManager-DUx66b5K.js";import"./useFocusable-D8NcegDP.js";import"./useObjectRef-tXBeFhr0.js";import"./useEvent-DRYnnK4G.js";import"./SelectionIndicator-CcbDhPDx.js";import"./context-iUK2sHut.js";import"./usePress-Bi-CW65S.js";import"./Hidden-C4hzB37a.js";import"./useControlledState-SYvjuW_7.js";import"./OverlayArrow-C89tOffM.js";import"./Button-uDYnTf4Y.js";import"./utils-DFu3_OYq.js";import"./Label-Bo6_GEdr.js";import"./useLabel-fWADNjBI.js";import"./useLabels-Dd_fSXZj.js";import"./useButton-C7IK7NJk.js";import"./useFocusRing-6I0ESAuN.js";import"./index-EEdLb7Wr.js";import"./Checkbox---8L6F3a.js";import"./RSPContexts-gqSeTMkw.js";import"./Form-D-W6aIUg.js";import"./useToggle-Pu1s0hUl.js";import"./useFormReset-BSi2rs0N.js";import"./useToggleState-CEHg4ddn.js";import"./VisuallyHidden-CO2EqUkI.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-Bk04p7aG.js";import"./VisuallyHidden-C2kmITQq.js";import"./TablePagination-Lep3p6ee.js";import"./Select-DGt0Tnqa.js";import"./Dialog-B037HX9q.js";import"./Separator-qOD38zKX.js";import"./Text-Bs7zZE9j.js";import"./useLocalizedStringFormatter-2hlmpUsS.js";import"./animation-CQa4giWn.js";import"./FieldError-DJtv6D8j.js";import"./ListBox-Ddxoj1QX.js";import"./useListState-BOilEyQd.js";import"./useField-CsnEoWrT.js";import"./definition-ClmNNTsm.js";import"./Autocomplete-BHWO2IDP.js";import"./Input-CHqBqOts.js";import"./SearchField-C8iL0te7.js";import"./useFilter-Cb4SqfLq.js";import"./FieldError-DslbyIjL.js";import"./FieldLabel-DGcijl3f.js";import"./ButtonIcon-LzxPFX7N.js";import"./Link-B95OlE9j.js";import"./getNodeText-DXVRyByZ.js";import"./useLink-DxSwrjoD.js";import"./useGridSelectionCheckbox-CwNLxPno.js";import"./useHighlightSelectionDescription-CTdnxGg_.js";import"./useHasTabbableChild-DREtjRQc.js";import"./Avatar-xmV2Y7GT.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
