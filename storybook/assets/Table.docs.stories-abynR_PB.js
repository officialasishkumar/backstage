import{j as e,r as a}from"./iframe-LAkIJzV-.js";import{t as C,s as b,d as T,a as h}from"./utils-C23U7GAX.js";import{u as p,T as d,e as j,C as S}from"./useTable-B6PhnB--.js";import{F as v}from"./Flex-y9BS8UJk.js";import{R as f,a as c}from"./RadioGroup-C_sN0vZY.js";import{T as x}from"./Text-JADR5Fg7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DacU1fu4.js";import"./BUIProvider-BCBhngHq.js";import"./openLink-DmaCgHpA.js";import"./Virtualizer-CsJ4LGKP.js";import"./SelectionManager-BX8J_v8H.js";import"./useFocusable-D4TJWCE7.js";import"./useObjectRef-Dnfr9yjY.js";import"./useEvent-0yI9s6G2.js";import"./SelectionIndicator-Bill14MS.js";import"./context-r_P2GL11.js";import"./usePress-DejSSO9x.js";import"./textSelection-DvoLH8jT.js";import"./Hidden-DO4aGUV9.js";import"./useControlledState-nNvxiAMi.js";import"./OverlayArrow-CzwPp9Ep.js";import"./useNumberFormatter-BdRMEm_f.js";import"./utils-DQ9JD3Eh.js";import"./index-C-MtO-sF.js";import"./Checkbox-DuTu77yD.js";import"./RSPContexts-tCQiqn1K.js";import"./Form-CddXkb1B.js";import"./useToggle-8PVLj7Gg.js";import"./useFormReset-Bx2I8NYH.js";import"./useToggleState-suVx38B1.js";import"./useFocusRing-DA0QhuH0.js";import"./VisuallyHidden-Csn6CGfQ.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-OKT9BmEw.js";import"./VisuallyHidden-mYnVjiZf.js";import"./TablePagination-DLFKtlus.js";import"./Select-D_--9Bm-.js";import"./Dialog-Cyk1NHXq.js";import"./Button-BaVVdilz.js";import"./Label-C-mNv6SM.js";import"./useLabel-eIB2nDmT.js";import"./useLabels-DyWy5cQr.js";import"./useButton-DrRqNQGM.js";import"./Separator-DZQla1Hc.js";import"./Text-Co4T9G0P.js";import"./useLocalizedStringFormatter-O5HEBytX.js";import"./animation-Dz9T6uaO.js";import"./FieldError-DeW8slCn.js";import"./ListBox-DVoZE-cC.js";import"./useListState-hkhw1Pde.js";import"./useField-C8Q3wRbu.js";import"./definition-BrqCvDHD.js";import"./Autocomplete-BUb86CE9.js";import"./Input-MZTqK3pa.js";import"./SearchField-NC2Sk7BN.js";import"./useFilter-DOuytZjq.js";import"./FieldError-DxL4w3hA.js";import"./FieldLabel-B51cy2Xl.js";import"./ButtonIcon-C68KoRyR.js";import"./Link-C_B7KXzv.js";import"./getNodeText-eneNsEje.js";import"./useLink-BM-WEAx6.js";import"./useGridSelectionCheckbox-DitDMFgR.js";import"./useHighlightSelectionDescription-Dj9sRcwe.js";import"./useHasTabbableChild-BA5ub0A8.js";import"./Avatar-D3Fplb_L.js";const Ae={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ee=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,Ee as __namedExportsOrder,Ae as default};
