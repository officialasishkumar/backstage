import{j as e,r as a}from"./iframe-CtYv7QJ0.js";import{t as C,s as b,d as T,a as h}from"./utils-DkpZL9pF.js";import{u as p,T as d,e as j,C as S}from"./useTable-w7Ytooqd.js";import{F as v}from"./Flex-B4-HWR7e.js";import{R as f,a as c}from"./RadioGroup-eN3YE_lm.js";import{T as x}from"./Text-6aay7KHe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CgDq3XR-.js";import"./BUIProvider-DCcFMRr-.js";import"./openLink-Bmz1Jei1.js";import"./Virtualizer-B91TBkbw.js";import"./SelectionManager-B364_wiX.js";import"./useFocusable-BMDS_jJq.js";import"./useObjectRef-vsyhJXe-.js";import"./useEvent-BVNgaH19.js";import"./SelectionIndicator-wXJP5iy8.js";import"./context-Bi3s1JjX.js";import"./usePress-DT0xcJu9.js";import"./Hidden-BFFbPz5n.js";import"./useControlledState-zRjovyAn.js";import"./OverlayArrow-DeoH7OuY.js";import"./Button-CxZxreVc.js";import"./utils-DO4tuehO.js";import"./Label-hNutrTJw.js";import"./useLabel-Cwpu3uTw.js";import"./useLabels-CUz_l6uh.js";import"./useButton-BhHYKv3g.js";import"./useFocusRing-Do2rA8_c.js";import"./index-CIML6-uv.js";import"./Checkbox-inkdOcui.js";import"./RSPContexts-CcsdUUEy.js";import"./Form-CYy7Ebbt.js";import"./useToggle-DE2DR3mr.js";import"./useFormReset-oqflJZnZ.js";import"./useToggleState-D4xezo62.js";import"./VisuallyHidden-DMTulITn.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-sXN1Zan9.js";import"./VisuallyHidden-ko4Vnkx-.js";import"./TablePagination-LqzTKnBj.js";import"./Select-Dyqb3ZOq.js";import"./Dialog-BBcanbKH.js";import"./Separator-qwHb8T0l.js";import"./Text-DrwKlvGM.js";import"./useLocalizedStringFormatter-BSiJuR4A.js";import"./animation-CSuLUUAV.js";import"./FieldError-BPlcKWeI.js";import"./ListBox--U7rLpr0.js";import"./useListState-DI-2_HIC.js";import"./useField-BECPeavL.js";import"./definition-6I4k6P3K.js";import"./Autocomplete-KIZdLfnN.js";import"./Input-Cn5nVCvr.js";import"./SearchField-DGO8AE27.js";import"./useFilter-C6-ULJnY.js";import"./FieldError-BdIEiJ72.js";import"./FieldLabel-DdnEvn8v.js";import"./ButtonIcon-BaK8W-md.js";import"./Link-BXcRyeb6.js";import"./getNodeText-DTdAnHit.js";import"./useLink-BwWxFAmB.js";import"./useHighlightSelectionDescription-BXQS6rh2.js";import"./useHasTabbableChild-P61xCXgy.js";import"./Avatar-Dey_CNDd.js";const Oe={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ke=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,ke as __namedExportsOrder,Oe as default};
