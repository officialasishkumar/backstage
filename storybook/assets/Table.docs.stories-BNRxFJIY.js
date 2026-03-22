import{j as e,r as a}from"./iframe-BMq-ZiT3.js";import{t as C,s as b,d as T,a as h}from"./utils-DW5oe3f_.js";import{u as p,T as d,e as j,C as S}from"./useTable-CH4UDt_y.js";import{F as v}from"./Flex-VhVCMMJO.js";import{R as f,a as c}from"./RadioGroup-BWWUScv_.js";import{T as x}from"./Text-0QZ_jK99.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dAFNSupn.js";import"./BUIProvider-IzMHjHXy.js";import"./openLink-Brx0WDUe.js";import"./Virtualizer-C6x-SkJr.js";import"./SelectionManager-Czkl7AVm.js";import"./useFocusable-BING0bK8.js";import"./useObjectRef-B0InZiE5.js";import"./useEvent-BfORcgbJ.js";import"./SelectionIndicator-1fLnntHW.js";import"./context-D8lZK9-b.js";import"./usePress-CqlS6ALR.js";import"./Hidden-Cu5w-61h.js";import"./useControlledState-Byf_2OY9.js";import"./OverlayArrow-o-vOxZNM.js";import"./Button-CduzQrIx.js";import"./utils-BO_kFubu.js";import"./Label-DK2dkOKP.js";import"./useLabel-qqCY0KHH.js";import"./useLabels-EqgqZ4d3.js";import"./useButton-BjncEaGP.js";import"./useFocusRing-DNVUPPEW.js";import"./index-mQG8kBbO.js";import"./Checkbox-BE6RHIEA.js";import"./RSPContexts-CkBj4Rcd.js";import"./Form-hPcPNmtC.js";import"./useToggle-BWEt3bNY.js";import"./useFormReset-DRAiEmlX.js";import"./useToggleState-xa4KHNFS.js";import"./VisuallyHidden-DxcRP2p_.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-BnshWIYP.js";import"./VisuallyHidden-BGui-vCj.js";import"./TablePagination-BqjN0b7a.js";import"./Select-Qooa4DGI.js";import"./Dialog-BzvIgp8N.js";import"./Separator-TcLggPJ-.js";import"./Text-olk1yTcC.js";import"./useLocalizedStringFormatter-BfaQUaX6.js";import"./animation-CKQMjgje.js";import"./FieldError-DzZlTT0M.js";import"./ListBox-BMjUj0GL.js";import"./useListState-DIu1dJDa.js";import"./useField-ihnn9eXh.js";import"./definition-DTv9VuRJ.js";import"./Autocomplete-BZEVaGvR.js";import"./Input-2iOwcQTw.js";import"./SearchField-DV-_ydn5.js";import"./useFilter-IJ2bkZqq.js";import"./FieldError-CQll-bp5.js";import"./FieldLabel-Krn0N5u7.js";import"./ButtonIcon-CmR-f_bE.js";import"./Link-B-BVlsVD.js";import"./getNodeText-BbGonUA5.js";import"./useLink-i-OfL-Tj.js";import"./useGridSelectionCheckbox-6UAY3SLi.js";import"./useHighlightSelectionDescription-CfFoJakq.js";import"./useHasTabbableChild-SRtwrASt.js";import"./Avatar-BBwtTuAO.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
