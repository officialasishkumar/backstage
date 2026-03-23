import{j as e,r as a}from"./iframe-CXYB6t6D.js";import{t as C,s as b,d as T,a as h}from"./utils-Ch09BEA_.js";import{u as p,T as d,e as j,C as S}from"./useTable-B5Xg4xum.js";import{F as v}from"./Flex-Buygbtc_.js";import{R as f,a as c}from"./RadioGroup-B7-mlA9n.js";import{T as x}from"./Text-CbVxzGu-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cqb6C9TB.js";import"./BUIProvider-s_nHa8HH.js";import"./openLink-BHEYgROE.js";import"./Virtualizer-2UCiZRX4.js";import"./SelectionManager-DMGta-91.js";import"./useFocusable-oY0eVMo2.js";import"./useObjectRef-C2q3-4it.js";import"./useEvent-oeeUAp2K.js";import"./SelectionIndicator-DjCoGA7e.js";import"./context-CHYgVvz1.js";import"./usePress-BAbMHchl.js";import"./Hidden-C1VmU0YI.js";import"./useControlledState-BZABeGKp.js";import"./OverlayArrow-aAGlkom5.js";import"./Button-_-txw0cW.js";import"./utils-BKtZUDpK.js";import"./Label-CQHjFpX1.js";import"./useLabel-jifpGGtn.js";import"./useLabels-1SD5J5A8.js";import"./useButton-B5y1p6l-.js";import"./useFocusRing-SbDGEpTb.js";import"./index-aNblxy6Y.js";import"./Checkbox-C8erPtEj.js";import"./RSPContexts-CDVk5Kpa.js";import"./Form-BcRouHTs.js";import"./useToggle-BW5-B_wn.js";import"./useFormReset-D5IMU8-i.js";import"./useToggleState-ePgZ9QDP.js";import"./VisuallyHidden-CLdcXQgb.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-CqXC4m29.js";import"./VisuallyHidden-v_J3ZfoW.js";import"./TablePagination-FK24JgLp.js";import"./Select-BnKdXwX2.js";import"./Dialog-Y0ipXeEn.js";import"./Separator-n3Vc1kJC.js";import"./Text-ZgvrGz5V.js";import"./useLocalizedStringFormatter-DvYGqRjg.js";import"./animation-1zMsfLwX.js";import"./FieldError-DcJthIhE.js";import"./ListBox-BsA_DHw-.js";import"./useListState-75GpfUhZ.js";import"./useField-Bt-Nh9pU.js";import"./definition-sN_D7f7z.js";import"./Autocomplete-CFA7tHMl.js";import"./Input-C940cas-.js";import"./SearchField-A6HYbinq.js";import"./useFilter-CLrSJlsd.js";import"./FieldError-CxJr-nB6.js";import"./FieldLabel-BuKyTYrE.js";import"./ButtonIcon-MjjJ9tmO.js";import"./Link-DP8rtGgB.js";import"./getNodeText-CCm3OAqs.js";import"./useLink-D_gSlXSw.js";import"./useGridSelectionCheckbox-D9sL9bkF.js";import"./useHighlightSelectionDescription-CcDY5UOD.js";import"./useHasTabbableChild-BvVzif_v.js";import"./Avatar-D-XYBKEz.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
