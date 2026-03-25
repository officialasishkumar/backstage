import{j as e,r as a}from"./iframe-CymjdxqK.js";import{t as C,s as b,d as T,a as h}from"./utils-JFesGP6k.js";import{u as p,T as d,e as j,C as S}from"./useTable-DjlCDymc.js";import{F as v}from"./Flex-Dmorq7YO.js";import{R as f,a as c}from"./RadioGroup-BsvtDFZM.js";import{T as x}from"./Text-BTVzBPa4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BW-EXu7a.js";import"./BUIProvider-B08yKp77.js";import"./openLink-CvTgs9Lx.js";import"./Virtualizer-9BS4qA8V.js";import"./SelectionManager-NC4h3hyc.js";import"./useFocusable-lwQDql-_.js";import"./useObjectRef-5Xp1GkQ6.js";import"./useEvent-7UwMI45o.js";import"./SelectionIndicator-CL2y3Ug4.js";import"./context-C-xOiLEv.js";import"./usePress-C2lf5peW.js";import"./Hidden-ClnAu_4E.js";import"./useControlledState-WIHPVmui.js";import"./OverlayArrow-BThpy1DV.js";import"./Button-CPhzpJxd.js";import"./utils-D1wNRJk4.js";import"./Label-Okk3Ubn2.js";import"./useLabel-BmyaizYJ.js";import"./useLabels-C5mR9y85.js";import"./useButton-aANW0Wyo.js";import"./useFocusRing-hwClZc-Y.js";import"./index-BJEy_HY0.js";import"./Checkbox-rjPPDDBx.js";import"./RSPContexts-maknK7jF.js";import"./Form-BD9_Q_yN.js";import"./useToggle-BLH8tbkN.js";import"./useFormReset-DWUv7BfJ.js";import"./useToggleState-BpZ_xbIa.js";import"./VisuallyHidden-DXY6Jnki.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-4Z4_AViP.js";import"./VisuallyHidden-CewBTnsN.js";import"./TablePagination-CuHcAEI6.js";import"./Select-BDjEWNwp.js";import"./Dialog-DkhpKrWr.js";import"./Separator-0IcFbXfk.js";import"./Text-BPN_HbIg.js";import"./useLocalizedStringFormatter-feYlFOf2.js";import"./animation-BzLdPHvj.js";import"./FieldError-yKPrWCN_.js";import"./ListBox-BbBHbbI8.js";import"./useListState-FspEawGa.js";import"./useField-Km2qiKqM.js";import"./definition-KshQCYA-.js";import"./Autocomplete-DuMe8VO6.js";import"./Input-CSCXXE_W.js";import"./SearchField-jYJwioZj.js";import"./useFilter-jKYuAkCf.js";import"./FieldError-DFQtqUyC.js";import"./FieldLabel-CRIJqhMA.js";import"./ButtonIcon-DhlOhG1P.js";import"./Link-BANipp-H.js";import"./getNodeText-B_GqC20h.js";import"./useLink-CA03VDc8.js";import"./useGridSelectionCheckbox-CVHVsLtG.js";import"./useHighlightSelectionDescription-CDKEEo2_.js";import"./useHasTabbableChild-Dnpyso6U.js";import"./Avatar-iP3IjmrU.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
