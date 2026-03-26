import{j as e,r as a}from"./iframe-qq9LRUBn.js";import{t as C,s as b,d as T,a as h}from"./utils-DaW-1BPl.js";import{u as p,T as d,e as j,C as S}from"./useTable-vxem0DVI.js";import{F as v}from"./Flex-qP4tDvIx.js";import{R as f,a as c}from"./RadioGroup-C7vQuPtz.js";import{T as x}from"./Text-C8jAgxVa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-29ewTlsg.js";import"./BUIProvider-Dsng5cuc.js";import"./openLink-DhqiiT6V.js";import"./Virtualizer-HHA2HYMY.js";import"./SelectionManager-BshcLTTE.js";import"./useFocusable-Bss7s13d.js";import"./useObjectRef-C6dfZKNx.js";import"./useEvent-DTTK5orm.js";import"./SelectionIndicator-BtrFhLcN.js";import"./context-CNA00Bav.js";import"./usePress-D5ySo_XX.js";import"./Hidden-BpeAYDKo.js";import"./useControlledState-BSjAcBuU.js";import"./OverlayArrow-Ds1rPmlt.js";import"./Button-Cg2fQwUi.js";import"./utils-rf2Up7Zy.js";import"./Label-xDjBBiiZ.js";import"./useLabel-Bu3F2Z2w.js";import"./useLabels-DZwxbb7M.js";import"./useButton-CbB4JjQq.js";import"./useFocusRing-D3V6WbVz.js";import"./index-CSdV3LUc.js";import"./Checkbox-B9P-_WsV.js";import"./RSPContexts-IllKyz_M.js";import"./Form-Cdn-qZZV.js";import"./useToggle-MDNafor7.js";import"./useFormReset--_ug6d2P.js";import"./useToggleState-CirRj6zQ.js";import"./VisuallyHidden-qAJO2kOR.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-DyTjrUEe.js";import"./VisuallyHidden-Bmnepu0O.js";import"./TablePagination-dpG35Xza.js";import"./Select-BGU-nTiz.js";import"./Dialog-BoAJvEdl.js";import"./Separator-B6TKwS90.js";import"./Text-W3-7-0Ll.js";import"./useLocalizedStringFormatter-BtjVvIfE.js";import"./animation-BX5pYea6.js";import"./FieldError-CI2IJwCq.js";import"./ListBox-DZhNFI1V.js";import"./useListState-SjSSuPnI.js";import"./useField-CBtSiF8Q.js";import"./definition-BPnzW3V2.js";import"./Autocomplete-DsVm5TDP.js";import"./Input-Dr2FlUMh.js";import"./SearchField-BxpFaWQp.js";import"./useFilter-kHTiHPaK.js";import"./FieldError-DdQsg_kT.js";import"./FieldLabel-CftDETrL.js";import"./ButtonIcon-5_DaRjqh.js";import"./Link-FhqJXucc.js";import"./getNodeText-CY27S5CK.js";import"./useLink-DjvBObSS.js";import"./useGridSelectionCheckbox-DtkG3auj.js";import"./useHighlightSelectionDescription-XXOhIhmk.js";import"./useHasTabbableChild-gNcCeSOw.js";import"./Avatar-CxTkm0uz.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
