import{j as e,r as a}from"./iframe-w9ggzxzz.js";import{t as C,s as b,d as T,a as h}from"./utils-Dbhbsuyv.js";import{u as p,T as d,e as j,C as S}from"./useTable-G-RktLxK.js";import{F as v}from"./Flex-C0woHhpc.js";import{R as f,a as c}from"./RadioGroup-npjSqfXa.js";import{T as x}from"./Text-DANDRRBo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvT0XEY0.js";import"./BUIProvider-C_WciRRp.js";import"./openLink-CDFTvsp6.js";import"./Virtualizer-CQT4-OSx.js";import"./SelectionManager-BIkp-9vQ.js";import"./useFocusable-Bbdurlss.js";import"./useObjectRef-B_6zWEnk.js";import"./useEvent-CsX2KFtG.js";import"./SelectionIndicator-DckSQIf4.js";import"./context-CR1kS8w5.js";import"./usePress-DiL6DYaN.js";import"./Hidden-Clm5i5gu.js";import"./useControlledState-CkfJ-9xD.js";import"./OverlayArrow-D4CeJasr.js";import"./Button-A51m74qr.js";import"./utils-DEeBkFEh.js";import"./Label-DF7jbAkj.js";import"./useLabel-vUuVYQJv.js";import"./useLabels-CENuzjv5.js";import"./useButton-Dh61aH-a.js";import"./useFocusRing-Cjj0oL6E.js";import"./index--fMAb3nD.js";import"./Checkbox-TBAeJUu5.js";import"./RSPContexts-CZKLcs68.js";import"./Form-d1P84aXX.js";import"./useToggle-Ciic_R1n.js";import"./useFormReset-CsEDo2li.js";import"./useToggleState-CIDeK2dJ.js";import"./VisuallyHidden-G3qnlwDl.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-CTk6Yn9P.js";import"./VisuallyHidden-CRTxwA-w.js";import"./TablePagination-B72HAalU.js";import"./Select-ExmOu7hF.js";import"./Dialog-BQNoIzT4.js";import"./Separator-CV8je4h0.js";import"./Text-CiKuJI4J.js";import"./useLocalizedStringFormatter-BtMDazk3.js";import"./animation-Dr7yeCX2.js";import"./FieldError-B6dMhJRL.js";import"./ListBox-B66IPffB.js";import"./useListState-BMFCxGMK.js";import"./useField-D5znIY3F.js";import"./definition-BtvEG-zo.js";import"./Autocomplete-BInNBzFK.js";import"./Input-CSP1XbfS.js";import"./SearchField-CiD7Quab.js";import"./useFilter-DRefGdK1.js";import"./FieldError-BAEzO_Cz.js";import"./FieldLabel-B4HIAy2K.js";import"./ButtonIcon-Cxnk9kcT.js";import"./Link-CyzdmG7O.js";import"./getNodeText-DOkFdrmb.js";import"./useLink-UzlwRc0w.js";import"./useHighlightSelectionDescription-B_3_wJIk.js";import"./useHasTabbableChild-cLiSDC0J.js";import"./Avatar-CRBxO6kw.js";const Oe={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
