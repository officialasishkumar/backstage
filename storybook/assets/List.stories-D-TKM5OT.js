import{p as T,j as e,r as b}from"./iframe-wkUvrVVn.js";import{L as r,a as o}from"./List-CtLeNwlI.js";import{n as f,Y as W,j as I,S as A,a as K,J as C,i as D,M as G}from"./index-C8GJe_AC.js";import{M as k}from"./index-B5HVCV75.js";import{T as j,a as x}from"./TagGroup-DquFYfYs.js";import{b as R}from"./Menu-BSZCRowW.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BZhdv_xg.js";import"./utils-MnW5ckK1.js";import"./useObjectRef-X3MZgZhl.js";import"./Label-DpJDGBkt.js";import"./Hidden-D-JvTNgp.js";import"./useFocusable-Df6FltMm.js";import"./openLink-CRYj9xIm.js";import"./useLabel-4kQv2iRo.js";import"./useLabels-2YgORK--.js";import"./context-B86FjfL1.js";import"./useButton-C6CDmvSG.js";import"./usePress--j1ZReKe.js";import"./useFocusRing-DQCUvfrr.js";import"./RSPContexts-C_MJyRDj.js";import"./SelectionManager-B08jYyr8.js";import"./useEvent-BrZFf1NI.js";import"./SelectionIndicator-DOsGaP1A.js";import"./useControlledState-D66GTq6l.js";import"./ListBox-_vRugpzC.js";import"./Separator-D5h5pLGI.js";import"./Text-DWSMPRZK.js";import"./useListState-DKu0bdjg.js";import"./useGridSelectionCheckbox-C608mUik.js";import"./useHighlightSelectionDescription-BOajwaJj.js";import"./useLocalizedStringFormatter-BihcPHu9.js";import"./VisuallyHidden-COu0VDEn.js";import"./ButtonIcon-Deu3hy45.js";import"./useHasTabbableChild-DoeIVgZw.js";import"./useField-mV-Y3dRQ.js";import"./getNodeText-BJLYD_ZB.js";import"./Autocomplete-Dm3AxXxg.js";import"./Input-D6dfznmY.js";import"./useFormReset-skkqG3cw.js";import"./Form-CQkfcQkp.js";import"./Dialog-rDu-vg9W.js";import"./OverlayArrow-CnLIuF5p.js";import"./animation-Dx5vbM--.js";import"./SearchField-DWmHP_bp.js";import"./FieldError-CD2S2NEj.js";import"./Virtualizer-CHrFHACl.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-D-J8haIK.js";const a=T.meta({title:"Backstage UI/List",component:r,args:{style:{width:320},"aria-label":"List"},decorators:[i=>e.jsx(k,{children:e.jsx(i,{})})]}),c=[{id:"react",label:"React",description:"A JavaScript library for building user interfaces",icon:e.jsx(f,{}),tags:["frontend","ui"]},{id:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",icon:e.jsx(W,{}),tags:["typed","js"]},{id:"javascript",label:"JavaScript",description:"The language of the web",icon:e.jsx(I,{}),tags:["web"]},{id:"rust",label:"Rust",description:"Systems programming with memory safety",icon:e.jsx(A,{}),tags:["systems","fast"]},{id:"go",label:"Go",description:"Simple, fast, and reliable",icon:e.jsx(K,{}),tags:["backend"]}],M=e.jsxs(e.Fragment,{children:[e.jsx(R,{iconStart:e.jsx(C,{}),children:"Edit"}),e.jsx(R,{iconStart:e.jsx(D,{}),children:"Share"}),e.jsx(R,{iconStart:e.jsx(G,{}),color:"danger",children:"Delete"})]}),l=a.story({render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,children:t.label})})}),d=a.story({render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,children:t.label})})}),m=a.story({args:{style:{width:340}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,description:t.description,children:t.label})})}),p=a.story({render:i=>{const[t,s]=b.useState(new Set(["react"]));return e.jsx(r,{...i,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,children:n.label})})}}),u=a.story({render:i=>{const[t,s]=b.useState(new Set(["react"]));return e.jsx(r,{...i,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,icon:n.icon,children:n.label})})}}),g=a.story({render:i=>{const[t,s]=b.useState(new Set(["react","typescript"]));return e.jsx(r,{...i,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,children:n.label})})}}),S=a.story({render:i=>{const[t,s]=b.useState(new Set(["react","typescript"]));return e.jsx(r,{...i,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,icon:n.icon,children:n.label})})}}),L=a.story({render:i=>e.jsx(r,{...i,items:c,disabledKeys:["typescript","rust"],children:t=>e.jsx(o,{id:t.id,children:t.label})})}),h=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:M,children:t.label})})}),w=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,customActions:e.jsx(j,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(s=>e.jsx(x,{children:s},s))}),children:t.label})})}),y=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:M,customActions:e.jsx(j,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(s=>e.jsx(x,{children:s},s))}),children:t.label})})});l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const Default = () => (
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
