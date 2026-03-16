import{j as e,r as a}from"./iframe-CYY79_Ch.js";import{t as C,s as b,d as T,a as h}from"./utils-OdBGUVMq.js";import{u as p,T as d,e as j,C as S}from"./useTable-C-EcBMj2.js";import{F as v}from"./Flex-DsT0j0lB.js";import{R as f,a as c}from"./RadioGroup-BJrmHiiW.js";import{T as x}from"./Text-BNlozIGe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDv2I334.js";import"./BUIProvider-BHR7bujX.js";import"./openLink-Mni93yRE.js";import"./SelectionManager-C2sC6mJ8.js";import"./useFocusable-rG1b36k8.js";import"./useObjectRef-DfMCrL_-.js";import"./useEvent-DfdphO9x.js";import"./SelectionIndicator-B2HOU7kl.js";import"./context-BZ7cJLAv.js";import"./usePress-bv9ZrnuE.js";import"./Hidden-B0dG00_K.js";import"./useControlledState-OdOAnKpA.js";import"./index-rldjofJW.js";import"./Checkbox-D8tNhyCC.js";import"./RSPContexts-VUur45IJ.js";import"./utils-du0Di3_I.js";import"./Form-P_37kvNP.js";import"./useToggle-0mkheEDw.js";import"./useFormReset-Igey_106.js";import"./useToggleState-DG8dyaGE.js";import"./useFocusRing-gkEVY9BN.js";import"./VisuallyHidden-Cn_4Okds.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-B9NYKCFX.js";import"./VisuallyHidden-CbCaN7Uf.js";import"./TablePagination-D_EzWWCn.js";import"./Select-DH4mJFae.js";import"./Dialog-OnnkDwht.js";import"./Button-DRsMqKq-.js";import"./Label-CLLQ0eHu.js";import"./useLabel-CYuOcO5G.js";import"./useLabels-DZ6_lug-.js";import"./useButton-D75ZoZia.js";import"./OverlayArrow-DWCeWFDl.js";import"./Separator-3Q6UUHWJ.js";import"./Text-DdpYO9hC.js";import"./useLocalizedStringFormatter-DoVeIhqG.js";import"./animation-CZc5ztK-.js";import"./FieldError-B0InVcB3.js";import"./ListBox-D7_aRPwT.js";import"./useListState-BSVdfayU.js";import"./useField-b4YdBMqx.js";import"./definition-Ca2hIqm_.js";import"./Autocomplete-cR5xoA67.js";import"./Input-DHozhegH.js";import"./SearchField-CFvkTS0_.js";import"./useFilter-Ll5Bg5tc.js";import"./FieldError-CXNeHtoE.js";import"./FieldLabel-BjMK-MYX.js";import"./ButtonIcon-CC8T7JRt.js";import"./Link-D_3UCAwD.js";import"./getNodeText-DTr8lc40.js";import"./useLink-OFYVdIGJ.js";import"./useHighlightSelectionDescription-DJWpP2g7.js";import"./useHasTabbableChild-DE3eWuHD.js";import"./Avatar-BbdoweMb.js";const We={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
