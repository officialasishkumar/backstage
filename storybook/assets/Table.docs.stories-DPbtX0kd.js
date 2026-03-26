import{j as e,r as a}from"./iframe-hebBxzMS.js";import{t as C,s as b,d as T,a as h}from"./utils-Cku1aVmm.js";import{u as p,T as d,e as j,C as S}from"./useTable-CbZs1dGL.js";import{F as v}from"./Flex-Cm4r2vAa.js";import{R as f,a as c}from"./RadioGroup-C-IMfouw.js";import{T as x}from"./Text-C_bPDOM3.js";import"./preload-helper-PPVm8Dsz.js";import"./BUIProvider-BOqmKnYE.js";import"./openLink-CPB6xqLo.js";import"./Virtualizer-B3xjhLTS.js";import"./SelectionManager-NO3pQZe-.js";import"./useFocusable-DsSJxBOe.js";import"./useObjectRef-DuE5YdCW.js";import"./useEvent-C7m6We2P.js";import"./SelectionIndicator-90zhwDRh.js";import"./context-BCF0FR97.js";import"./usePress-S5PQdJXQ.js";import"./textSelection-DdJol7Lo.js";import"./Hidden-DAOShLRR.js";import"./useControlledState-ceZeyNNr.js";import"./OverlayArrow-Cp_qpEEI.js";import"./useNumberFormatter-C7HOQuNo.js";import"./utils-CAXHjz7j.js";import"./index-BAKL3Y3K.js";import"./Checkbox-93IYhBG_.js";import"./RSPContexts-CQKlyhDe.js";import"./Form-vAGA4che.js";import"./useToggle-BJ-3Ydwg.js";import"./useFormReset-CBuVw348.js";import"./useToggleState-CaSPNIwS.js";import"./useFocusRing-yBFCPJYO.js";import"./VisuallyHidden-D9RvgFSb.js";import"./linkUtils-tKDL5Jm1.js";import"./Skeleton-DG51PIy8.js";import"./VisuallyHidden-CggorclP.js";import"./TablePagination-6nO9gBkP.js";import"./Select-CmD3HXQ1.js";import"./Dialog-CCuJFCEp.js";import"./Button-CBkijT0R.js";import"./Label-2_4q4FCv.js";import"./useLabel-BhhpXbfx.js";import"./useLabels-BFnETP_I.js";import"./useButton-D66X7izN.js";import"./Separator-BcavHQ_x.js";import"./Text-DSIn8C-W.js";import"./useLocalizedStringFormatter-2DhJujtG.js";import"./animation-DTo8OXUV.js";import"./FieldError-Cd90l9Ka.js";import"./ListBox-DXsjERGm.js";import"./useListState-C3LkaYt0.js";import"./useField-CaxnEag2.js";import"./definition-BTQOS38J.js";import"./Autocomplete-C8MjEggX.js";import"./Input-C8KV3Opj.js";import"./SearchField-Drfzm0hM.js";import"./useFilter-DquYPYZ_.js";import"./FieldError-CE31D9ec.js";import"./FieldLabel-B85Gbd2A.js";import"./ButtonIcon-DYRLlx0W.js";import"./Link-Q-2QmBx5.js";import"./getNodeText-CbGFeybq.js";import"./useLink-CMVPuK6n.js";import"./useGridSelectionCheckbox-D8V5eR1k.js";import"./useHighlightSelectionDescription-B9LFrbWP.js";import"./useHasTabbableChild-wRlTF1fE.js";import"./Avatar-s7Kh5czJ.js";const Ge={title:"Backstage UI/Table/docs",...C},l={render:()=>{const o=[{id:"name",label:"Band name",isRowHeader:!0,defaultWidth:"4fr",cell:t=>e.jsx(j,{name:t.name,src:t.image,href:t.website})},{id:"genre",label:"Genre",defaultWidth:"4fr",cell:t=>e.jsx(S,{title:t.genre})},{id:"yearFormed",label:"Year formed",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.yearFormed.toString()})},{id:"albums",label:"Albums",defaultWidth:"1fr",cell:t=>e.jsx(S,{title:t.albums.toString()})}],{tableProps:i}=p({mode:"complete",getData:()=>T,paginationOptions:{pageSize:5}});return e.jsx(d,{columnConfig:o,...i})}},r={render:()=>{const[o,i]=a.useState(new Set),{tableProps:t}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsx(d,{...t,columnConfig:b,selection:{mode:"multiple",behavior:"toggle",selected:o,onSelectionChange:i},rowConfig:{onClick:n=>alert(`Clicked: ${n.name}`)}})}},s={render:()=>{const[o,i]=a.useState("multiple"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:o,behavior:"toggle",selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection mode:"}),e.jsxs(f,{"aria-label":"Selection mode",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"single",children:"single"}),e.jsx(c,{value:"multiple",children:"multiple"})]})]})]})}},m={render:()=>{const[o,i]=a.useState("toggle"),[t,n]=a.useState(new Set),{tableProps:u}=p({mode:"complete",getData:()=>h,paginationOptions:{pageSize:10}});return e.jsxs(v,{direction:"column",gap:"8",children:[e.jsx(d,{...u,columnConfig:b,selection:{mode:"multiple",behavior:o,selected:t,onSelectionChange:n}}),e.jsxs("div",{children:[e.jsx(x,{as:"h4",style:{marginBottom:"var(--bui-space-2)"},children:"Selection behavior:"}),e.jsxs(f,{"aria-label":"Selection behavior",orientation:"horizontal",value:o,onChange:g=>{i(g),n(new Set)},children:[e.jsx(c,{value:"toggle",children:"toggle"}),e.jsx(c,{value:"replace",children:"replace"})]})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
