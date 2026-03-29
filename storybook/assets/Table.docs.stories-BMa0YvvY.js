import{j as e,r as a}from"./iframe-DbF3iEvf.js";import{t as C,s as b,d as T,a as h}from"./utils-CIOhdEWo.js";import{u as p,T as d,e as j,C as S}from"./useTable-B2fIuHko.js";import{F as v}from"./Flex-CT5uGndE.js";import{R as f,a as c}from"./RadioGroup-DsoARwc7.js";import{T as x}from"./Text-cl3SaMzg.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-BB5XGcE9.js";import"./openLink-B2ZDb-Dy.js";import"./Virtualizer-52oEqDyk.js";import"./SelectionManager-DIxEOqJh.js";import"./useFocusable-nvMUgQnH.js";import"./useObjectRef-YWaTaoPE.js";import"./useEvent-_Tm9elwl.js";import"./SelectionIndicator-Ok-p9NrD.js";import"./context-D6dagZ_n.js";import"./usePress-D3JaBgev.js";import"./textSelection-CpaiHYR2.js";import"./Hidden-BslStD7U.js";import"./useControlledState-1nIiHotH.js";import"./OverlayArrow-B0bRa_SA.js";import"./useNumberFormatter-CyI0IS53.js";import"./utils-DsEw0LYq.js";import"./index-D5j2MVTo.js";import"./Checkbox-Dfjx3hi7.js";import"./RSPContexts-rb_NgTrv.js";import"./Form--TkOz4Jg.js";import"./useToggle-BcSW__-5.js";import"./useFormReset-BmMYmtyP.js";import"./useToggleState-DcCTpDhA.js";import"./useFocusRing-BllMUcEH.js";import"./VisuallyHidden-AxUkpftr.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-BcSRFNY-.js";import"./VisuallyHidden-CwoiBkuY.js";import"./TablePagination-y0RPZ3E7.js";import"./Select-lbrEU1iM.js";import"./Dialog-nBVVXeIJ.js";import"./Button-B3KZ_pAk.js";import"./Label-CpHW5oG7.js";import"./useLabel-CT940_VQ.js";import"./useLabels-B4BiOGLN.js";import"./useButton-DHwdj8PO.js";import"./Separator-BNms3__f.js";import"./Text-D4XY-ukW.js";import"./useLocalizedStringFormatter-DGHmKFee.js";import"./animation-BBO1Dolf.js";import"./FieldError-DV6JUPdc.js";import"./ListBox-D3yR6K4l.js";import"./useListState-CSeN5RBA.js";import"./useField-CFskVOYm.js";import"./definition-gUCVn2Ye.js";import"./Autocomplete-BBLoa6ZY.js";import"./Input-EjhhAQyo.js";import"./SearchField-CA0kOzXy.js";import"./useFilter-Dst_0-Zb.js";import"./FieldError-QGWkED7P.js";import"./FieldLabel-BaqNEL8P.js";import"./ButtonIcon--J_BHjul.js";import"./Link-D--GKOU4.js";import"./getNodeText-BsVIKPvT.js";import"./useLink-Bz5UuFby.js";import"./useGridSelectionCheckbox-DIqbB_uZ.js";import"./useHighlightSelectionDescription-D8LHrigi.js";import"./useHasTabbableChild-7vts3GkQ.js";import"./Avatar-DMf8dHUc.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Ae=["TableRockBand","SelectionToggleWithActions","SelectionModePlayground","SelectionBehaviorPlayground"];export{m as SelectionBehaviorPlayground,s as SelectionModePlayground,r as SelectionToggleWithActions,l as TableRockBand,Ae as __namedExportsOrder,Ge as default};
