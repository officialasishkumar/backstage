import{j as e,r as a}from"./iframe-CTqAPkqN.js";import{t as C,s as b,d as T,a as h}from"./utils-BNUjTLls.js";import{u as p,T as d,e as j,C as S}from"./useTable-CZjcERIk.js";import{F as v}from"./Flex-CPW6nXIz.js";import{R as f,a as c}from"./RadioGroup-ChtEd910.js";import{T as x}from"./Text-D2tW6ZI3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bo89h57h.js";import"./BUIProvider-Dw1aFK6j.js";import"./openLink-DuhEaLpg.js";import"./Virtualizer-Dalyafu1.js";import"./SelectionManager-ItLHwbUS.js";import"./useFocusable-CFAlk-C5.js";import"./useObjectRef-25klDtSD.js";import"./useEvent-CbymKeVX.js";import"./SelectionIndicator-79GbLTyr.js";import"./context-BvM3molF.js";import"./usePress-BYbvhl8q.js";import"./Hidden-j07EbjSz.js";import"./useControlledState-BtXIB91k.js";import"./OverlayArrow-CG108-Dg.js";import"./Button-BhMzTeGm.js";import"./utils-aRNJDvij.js";import"./Label-C-AaRR1v.js";import"./useLabel-BQrZyE2q.js";import"./useLabels-CmS8F3vl.js";import"./useButton-B0uzrMDe.js";import"./useFocusRing-C1OsrxfZ.js";import"./index-Ci12OFid.js";import"./Checkbox-Bm7P-LYT.js";import"./RSPContexts-BROgVqHM.js";import"./Form-ClANZCmo.js";import"./useToggle-BfeaCbWO.js";import"./useFormReset-DfFseZu5.js";import"./useToggleState-BanAb8UQ.js";import"./VisuallyHidden-BCPVlqUP.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-BwB9AlWf.js";import"./VisuallyHidden-BMRlComw.js";import"./TablePagination-Cnf8WBAT.js";import"./Select-6DQ5Q_V8.js";import"./Dialog-C_qTjYDL.js";import"./Separator-fgqZ4D-B.js";import"./Text-BB6fDT-n.js";import"./useLocalizedStringFormatter-D503BJjz.js";import"./animation-TrKzbP5A.js";import"./FieldError-9NMZkNZz.js";import"./ListBox-Cg-r2J-2.js";import"./useListState-D6tjZAfL.js";import"./useField-BUimOc_I.js";import"./definition-BOq9uLEj.js";import"./Autocomplete-BTASjObY.js";import"./Input-BTB9SN9Y.js";import"./SearchField-PJ_dOOam.js";import"./useFilter-CHOYPoqC.js";import"./FieldError-De6zW0c9.js";import"./FieldLabel-DrpgfXIs.js";import"./ButtonIcon-rFIMGrG0.js";import"./Link-DUkAxgBP.js";import"./getNodeText-BcHHrtrd.js";import"./useLink-C8utyvEQ.js";import"./useGridSelectionCheckbox-CMga0wvE.js";import"./useHighlightSelectionDescription-CC8bZ82j.js";import"./useHasTabbableChild-DMacyAdX.js";import"./Avatar-DaqR_uI3.js";const ke={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
