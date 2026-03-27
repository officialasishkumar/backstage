import{j as e,r as a}from"./iframe-CY6p7HGj.js";import{t as C,s as b,d as T,a as h}from"./utils-ETKFDM3P.js";import{u as p,T as d,e as j,C as S}from"./useTable--64OXGLV.js";import{F as v}from"./Flex-SCmulbsE.js";import{R as f,a as c}from"./RadioGroup-DuR7gudt.js";import{T as x}from"./Text-6JNPBzic.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-B87mDlDM.js";import"./openLink-D0hf0orl.js";import"./Virtualizer-Bt3eYbSd.js";import"./SelectionManager-BGKDaXVQ.js";import"./useFocusable-C6YNZBAX.js";import"./useObjectRef-B2AjDpdy.js";import"./useEvent-BayAtDVR.js";import"./SelectionIndicator-wiTtDSxe.js";import"./context-DCpJGGDB.js";import"./usePress-BYiNTSdE.js";import"./textSelection-2lntyfVX.js";import"./Hidden-hZ6rImco.js";import"./useControlledState-Cf6tZT7x.js";import"./OverlayArrow-DpMV_jxH.js";import"./useNumberFormatter-Dzr0pJM0.js";import"./utils-D5XzX9Cq.js";import"./index-BfGdkzHo.js";import"./Checkbox-D9v0Pu6O.js";import"./RSPContexts-BWSJFemX.js";import"./Form-B_j665yH.js";import"./useToggle-DN8ROHP7.js";import"./useFormReset-Ao63ou2I.js";import"./useToggleState-DvtTHKFE.js";import"./useFocusRing-BZ77H15a.js";import"./VisuallyHidden-BSKIM0Ta.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-BPo2Fu4T.js";import"./VisuallyHidden-cAoijJPy.js";import"./TablePagination-CLgwCpBB.js";import"./Select-BAHEzMeR.js";import"./Dialog-QlbpTyOh.js";import"./Button-bFuSebXI.js";import"./Label-BE618E0h.js";import"./useLabel-B_Lop7rQ.js";import"./useLabels-CnWkm5k-.js";import"./useButton-yWOKo3wb.js";import"./Separator-B9oY77xC.js";import"./Text-CtkMnc2L.js";import"./useLocalizedStringFormatter-DJnrKnIs.js";import"./animation-Ca_zbsuV.js";import"./FieldError-DYSn_E8h.js";import"./ListBox-C4dP5FkS.js";import"./useListState-DTbulIaV.js";import"./useField-D-0asg-q.js";import"./definition-D73N4_w0.js";import"./Autocomplete-CKxWTcW7.js";import"./Input-SRqiDa_j.js";import"./SearchField-D0mZ5dWC.js";import"./useFilter-BD5STqX9.js";import"./FieldError-CtcW8Scu.js";import"./FieldLabel-D5p69Pkw.js";import"./ButtonIcon-D9jMsfxE.js";import"./Link-CwnLZVuV.js";import"./getNodeText-Bz62Iy7G.js";import"./useLink-DLygO-qq.js";import"./useGridSelectionCheckbox-IEQTOIv8.js";import"./useHighlightSelectionDescription-CwKwJRBP.js";import"./useHasTabbableChild-g6dt5tdU.js";import"./Avatar-KNxE-Lw3.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
