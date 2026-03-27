import{p as T,j as e,M as f,r as b}from"./iframe-CY6p7HGj.js";import{L as r,a as o}from"./List-CezDYeOe.js";import{n as W,Y as I,j as A,S as K,a as C,J as D,i as G,M as k}from"./index-BfGdkzHo.js";import{T as j,a as x}from"./TagGroup-BQ2On6_J.js";import{b as R}from"./Menu-cJgiHiT-.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-bFuSebXI.js";import"./utils-D5XzX9Cq.js";import"./useObjectRef-B2AjDpdy.js";import"./Label-BE618E0h.js";import"./Hidden-hZ6rImco.js";import"./useNumberFormatter-Dzr0pJM0.js";import"./context-DCpJGGDB.js";import"./useFocusable-C6YNZBAX.js";import"./openLink-D0hf0orl.js";import"./useLabel-B_Lop7rQ.js";import"./useLabels-CnWkm5k-.js";import"./useButton-yWOKo3wb.js";import"./usePress-BYiNTSdE.js";import"./textSelection-2lntyfVX.js";import"./useFocusRing-BZ77H15a.js";import"./RSPContexts-BWSJFemX.js";import"./SelectionManager-BGKDaXVQ.js";import"./useEvent-BayAtDVR.js";import"./SelectionIndicator-wiTtDSxe.js";import"./useControlledState-Cf6tZT7x.js";import"./ListBox-C4dP5FkS.js";import"./Separator-B9oY77xC.js";import"./Text-CtkMnc2L.js";import"./useListState-DTbulIaV.js";import"./useGridSelectionCheckbox-IEQTOIv8.js";import"./useHighlightSelectionDescription-CwKwJRBP.js";import"./useLocalizedStringFormatter-DJnrKnIs.js";import"./VisuallyHidden-BSKIM0Ta.js";import"./ButtonIcon-D9jMsfxE.js";import"./useHasTabbableChild-g6dt5tdU.js";import"./useField-D-0asg-q.js";import"./getNodeText-Bz62Iy7G.js";import"./Autocomplete-CKxWTcW7.js";import"./Input-SRqiDa_j.js";import"./useFormReset-Ao63ou2I.js";import"./Form-B_j665yH.js";import"./Dialog-QlbpTyOh.js";import"./OverlayArrow-DpMV_jxH.js";import"./animation-Ca_zbsuV.js";import"./SearchField-D0mZ5dWC.js";import"./FieldError-DYSn_E8h.js";import"./Virtualizer-Bt3eYbSd.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-BD5STqX9.js";const a=T.meta({title:"Backstage UI/List",component:r,args:{style:{width:320},"aria-label":"List"},decorators:[i=>e.jsx(f,{children:e.jsx(i,{})})]}),c=[{id:"react",label:"React",description:"A JavaScript library for building user interfaces",icon:e.jsx(W,{}),tags:["frontend","ui"]},{id:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",icon:e.jsx(I,{}),tags:["typed","js"]},{id:"javascript",label:"JavaScript",description:"The language of the web",icon:e.jsx(A,{}),tags:["web"]},{id:"rust",label:"Rust",description:"Systems programming with memory safety",icon:e.jsx(K,{}),tags:["systems","fast"]},{id:"go",label:"Go",description:"Simple, fast, and reliable",icon:e.jsx(C,{}),tags:["backend"]}],M=e.jsxs(e.Fragment,{children:[e.jsx(R,{iconStart:e.jsx(D,{}),children:"Edit"}),e.jsx(R,{iconStart:e.jsx(G,{}),children:"Share"}),e.jsx(R,{iconStart:e.jsx(k,{}),color:"danger",children:"Delete"})]}),l=a.story({render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,children:t.label})})}),d=a.story({render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,children:t.label})})}),m=a.story({args:{style:{width:340}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,description:t.description,children:t.label})})}),p=a.story({render:i=>{const[t,s]=b.useState(new Set(["react"]));return e.jsx(r,{...i,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,children:n.label})})}}),u=a.story({render:i=>{const[t,s]=b.useState(new Set(["react"]));return e.jsx(r,{...i,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,icon:n.icon,children:n.label})})}}),g=a.story({render:i=>{const[t,s]=b.useState(new Set(["react","typescript"]));return e.jsx(r,{...i,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,children:n.label})})}}),S=a.story({render:i=>{const[t,s]=b.useState(new Set(["react","typescript"]));return e.jsx(r,{...i,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:s,children:n=>e.jsx(o,{id:n.id,icon:n.icon,children:n.label})})}}),L=a.story({render:i=>e.jsx(r,{...i,items:c,disabledKeys:["typescript","rust"],children:t=>e.jsx(o,{id:t.id,children:t.label})})}),h=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:M,children:t.label})})}),w=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,customActions:e.jsx(j,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(s=>e.jsx(x,{children:s},s))}),children:t.label})})}),y=a.story({args:{style:{width:420}},render:i=>e.jsx(r,{...i,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:M,customActions:e.jsx(j,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(s=>e.jsx(x,{children:s},s))}),children:t.label})})});l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const Default = () => (
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
})`,...y.input.parameters?.docs?.source}}};const Ce=["Default","WithIcons","WithDescription","SelectionModeSingle","SelectionModeSingleWithIcons","SelectionModeMultiple","SelectionModeMultipleWithIcons","Disabled","WithActionsMenu","WithActionsTags","WithActionsMenuAndTags"];export{l as Default,L as Disabled,g as SelectionModeMultiple,S as SelectionModeMultipleWithIcons,p as SelectionModeSingle,u as SelectionModeSingleWithIcons,h as WithActionsMenu,y as WithActionsMenuAndTags,w as WithActionsTags,m as WithDescription,d as WithIcons,Ce as __namedExportsOrder};
