import{p as T,j as e,r as b}from"./iframe-Cvt_X182.js";import{L as r,a as o}from"./List-DZBsJWWA.js";import{n as f,Y as W,j as I,S as A,a as K,J as C,i as D,M as G}from"./index-wgDMe5ci.js";import{M as k}from"./index-CGcTZ4mm.js";import{T as j,a as x}from"./TagGroup-DnhH9ei4.js";import{b as R}from"./Menu-DHBJ-w-q.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-M9M-8xcv.js";import"./utils-Bg_Phdnn.js";import"./useObjectRef-DFliq3pQ.js";import"./Label-CfqQNTlK.js";import"./Hidden-CMy7q5sq.js";import"./useFocusable-BNqaB3GQ.js";import"./openLink-BX21WjU1.js";import"./useLabel-DxHGJv8l.js";import"./useLabels-DBkP8_UW.js";import"./context-Dlelqyxj.js";import"./useButton-CyApEfki.js";import"./usePress-t8yjYszM.js";import"./useFocusRing-ehZLfaMm.js";import"./RSPContexts-CLTxsp_0.js";import"./SelectionManager-CunHyHNN.js";import"./useEvent-SyqTY7OH.js";import"./SelectionIndicator-TldkcfaC.js";import"./useControlledState-PX64MobC.js";import"./ListBox-D70ry2Do.js";import"./Separator-DQk_Qac1.js";import"./Text-CpDCUFEc.js";import"./useListState-DdpTt5HT.js";import"./useGridSelectionCheckbox-BtlVwz7e.js";import"./useHighlightSelectionDescription--rzcdzto.js";import"./useLocalizedStringFormatter-BLxQC0Qt.js";import"./VisuallyHidden-BDAvcPYG.js";import"./ButtonIcon-Cezk1A5-.js";import"./useHasTabbableChild-Cbr71NHW.js";import"./useField-1KCJEe4r.js";import"./getNodeText-SyWIdB3f.js";import"./Autocomplete-C67Ev6ad.js";import"./Input-CAfV34px.js";import"./useFormReset-utZU4Sxw.js";import"./Form-CRcaJ35N.js";import"./Dialog-Dc2VinuF.js";import"./OverlayArrow-DQd7iiz-.js";import"./animation-Dv8KG5zS.js";import"./SearchField-BHPMcPwK.js";import"./FieldError-CFpE2MAS.js";import"./Virtualizer-DVyGzLmz.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-s5ThIl1w.js";const a=T.meta({title:"Backstage UI/List",component:r,args:{style:{width:320},"aria-label":"List"},decorators:[i=>e.jsx(k,{children:e.jsx(i,{})})]}),c=[{id:"react",label:"React",description:"A JavaScript library for building user interfaces",icon:e.jsx(f,{}),tags:["frontend","ui"]},{id:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",icon:e.jsx(W,{}),tags:["typed","js"]},{id:"javascript",label:"JavaScript",description:"The language of the web",icon:e.jsx(I,{}),tags:["web"]},{id:"rust",label:"Rust",description:"Systems programming with memory safety",icon:e.jsx(A,{}),tags:["systems","fast"]},{id:"go",label:"Go",description:"Simple, fast, and reliable",icon:e.jsx(K,{}),tags:["backend"]}],M=e.jsxs(e.Fragment,{children:[e.jsx(R,{iconStart:e.jsx(C,{}),children:"Edit"}),e.jsx(R,{iconStart:e.jsx(D,{}),children:"Share"}),e.jsx(R,{iconStart:e.jsx(G,{}),color:"danger",children:"Delete"})]}),l=a.story({render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,children:t.label})})}),d=a.story({render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,children:t.label})})}),m=a.story({args:{style:{width:340}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,description:t.description,children:t.label})})}),p=a.story({render:i=>{const[t,s]=b.useState(new Set(["react"]));return e.jsx(r,{...i,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,children:n.label})})}}),u=a.story({render:i=>{const[t,s]=b.useState(new Set(["react"]));return e.jsx(r,{...i,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,icon:n.icon,children:n.label})})}}),g=a.story({render:i=>{const[t,s]=b.useState(new Set(["react","typescript"]));return e.jsx(r,{...i,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,children:n.label})})}}),S=a.story({render:i=>{const[t,s]=b.useState(new Set(["react","typescript"]));return e.jsx(r,{...i,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,icon:n.icon,children:n.label})})}}),L=a.story({render:i=>e.jsx(r,{...i,items:c,disabledKeys:["typescript","rust"],children:t=>e.jsx(o,{id:t.id,children:t.label})})}),h=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:M,children:t.label})})}),w=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,customActions:e.jsx(j,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(s=>e.jsx(x,{children:s},s))}),children:t.label})})}),y=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:M,customActions:e.jsx(j,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(s=>e.jsx(x,{children:s},s))}),children:t.label})})});l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const Default = () => (
  <List style={{ width: 320 }} aria-label="List" items={items}>
    {(item) => <ListRow id={item.id}>{item.label}</ListRow>}
  </List>
);
`,...l.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const WithIcons = () => (
  <List style={{ width: 320 }} aria-label="List" items={items}>
    {(item) => (
      <ListRow id={item.id} icon={item.icon}>
        {item.label}
      </ListRow>
    )}
  </List>
);
`,...d.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const WithDescription = () => (
  <List style={{ width: 340 }} aria-label="List" items={items}>
    {(item) => (
      <ListRow id={item.id} icon={item.icon} description={item.description}>
        {item.label}
      </ListRow>
    )}
  </List>
);
`,...m.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{code:`const SelectionModeSingle = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["react"]));

  return (
    <List
      style={{ width: 320 }}
      aria-label="List"
      items={items}
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => <ListRow id={item.id}>{item.label}</ListRow>}
    </List>
  );
};
`,...p.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const SelectionModeSingleWithIcons = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["react"]));

  return (
    <List
      style={{ width: 320 }}
      aria-label="List"
      items={items}
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => (
        <ListRow id={item.id} icon={item.icon}>
          {item.label}
        </ListRow>
      )}
    </List>
  );
};
`,...u.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{code:`const SelectionModeMultiple = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set(["react", "typescript"])
  );

  return (
    <List
      style={{ width: 320 }}
      aria-label="List"
      items={items}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => <ListRow id={item.id}>{item.label}</ListRow>}
    </List>
  );
};
`,...g.input.parameters?.docs?.source}}};S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{code:`const SelectionModeMultipleWithIcons = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set(["react", "typescript"])
  );

  return (
    <List
      style={{ width: 320 }}
      aria-label="List"
      items={items}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => (
        <ListRow id={item.id} icon={item.icon}>
          {item.label}
        </ListRow>
      )}
    </List>
  );
};
`,...S.input.parameters?.docs?.source}}};L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{code:`const Disabled = () => (
  <List
    style={{ width: 320 }}
    aria-label="List"
    items={items}
    disabledKeys={["typescript", "rust"]}
  >
    {(item) => <ListRow id={item.id}>{item.label}</ListRow>}
  </List>
);
`,...L.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const WithActionsMenu = () => (
  <List style={{ width: 420 }} aria-label="List" items={items}>
    {(item) => (
      <ListRow id={item.id} icon={item.icon} menuItems={menuItems}>
        {item.label}
      </ListRow>
    )}
  </List>
);
`,...h.input.parameters?.docs?.source}}};w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{code:`const WithActionsTags = () => (
  <List style={{ width: 420 }} aria-label="List" items={items}>
    {(item) => (
      <ListRow
        id={item.id}
        icon={item.icon}
        customActions={
          <TagGroup aria-label={\`Tags for \${item.label}\`}>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagGroup>
        }
      >
        {item.label}
      </ListRow>
    )}
  </List>
);
`,...w.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{code:`const WithActionsMenuAndTags = () => (
  <List style={{ width: 420 }} aria-label="List" items={items}>
    {(item) => (
      <ListRow
        id={item.id}
        icon={item.icon}
        menuItems={menuItems}
        customActions={
          <TagGroup aria-label={\`Tags for \${item.label}\`}>
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagGroup>
        }
      >
        {item.label}
      </ListRow>
    )}
  </List>
);
`,...y.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id}>{item.label}</ListRow>}
    </List>
})`,...l.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id} icon={item.icon}>
          {item.label}
        </ListRow>}
    </List>
})`,...d.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    style: {
      width: 340
    }
  },
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id} icon={item.icon} description={item.description}>
          {item.label}
        </ListRow>}
    </List>
})`,...m.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['react']));
    return <List {...args} items={items} selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <ListRow id={item.id}>{item.label}</ListRow>}
      </List>;
  }
})`,...p.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['react']));
    return <List {...args} items={items} selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <ListRow id={item.id} icon={item.icon}>
            {item.label}
          </ListRow>}
      </List>;
  }
})`,...u.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['react', 'typescript']));
    return <List {...args} items={items} selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <ListRow id={item.id}>{item.label}</ListRow>}
      </List>;
  }
})`,...g.input.parameters?.docs?.source}}};S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['react', 'typescript']));
    return <List {...args} items={items} selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <ListRow id={item.id} icon={item.icon}>
            {item.label}
          </ListRow>}
      </List>;
  }
})`,...S.input.parameters?.docs?.source}}};L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <List {...args} items={items} disabledKeys={['typescript', 'rust']}>
      {item => <ListRow id={item.id}>{item.label}</ListRow>}
    </List>
})`,...L.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    style: {
      width: 420
    }
  },
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id} icon={item.icon} menuItems={menuItems}>
          {item.label}
        </ListRow>}
    </List>
})`,...h.input.parameters?.docs?.source}}};w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    style: {
      width: 420
    }
  },
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id} icon={item.icon} customActions={<TagGroup aria-label={\`Tags for \${item.label}\`}>
              {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TagGroup>}>
          {item.label}
        </ListRow>}
    </List>
})`,...w.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    style: {
      width: 420
    }
  },
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id} icon={item.icon} menuItems={menuItems} customActions={<TagGroup aria-label={\`Tags for \${item.label}\`}>
              {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </TagGroup>}>
          {item.label}
        </ListRow>}
    </List>
})`,...y.input.parameters?.docs?.source}}};const Ke=["Default","WithIcons","WithDescription","SelectionModeSingle","SelectionModeSingleWithIcons","SelectionModeMultiple","SelectionModeMultipleWithIcons","Disabled","WithActionsMenu","WithActionsTags","WithActionsMenuAndTags"];export{l as Default,L as Disabled,g as SelectionModeMultiple,S as SelectionModeMultipleWithIcons,p as SelectionModeSingle,u as SelectionModeSingleWithIcons,h as WithActionsMenu,y as WithActionsMenuAndTags,w as WithActionsTags,m as WithDescription,d as WithIcons,Ke as __namedExportsOrder};
