import{j as e,r as j,p as T,M as f}from"./iframe-BYJEcONI.js";import{L as n,a as o}from"./List-DxW7O0Lv.js";import{n as W,Y as A,j as I,S as K,a as C,J as D,i as G,M as v}from"./index-AO_tZfTk.js";import{T as w,a as M}from"./TagGroup-m7Ww4o1l.js";import{b as x}from"./Menu-Dbt-GG28.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CAHkZ6qX.js";import"./utils-C1a20wt6.js";import"./useObjectRef-D6wwz9y8.js";import"./Label-DS41ix2K.js";import"./Hidden-COZ0E_xL.js";import"./useNumberFormatter-BaGWQyGU.js";import"./context-CyT1KeDa.js";import"./useFocusable-CHHS5c3K.js";import"./openLink-fvBOI5ql.js";import"./useLabel-CZVOsVhR.js";import"./useLabels-0G7Ys-gj.js";import"./useButton-ZPexGG4g.js";import"./usePress-0F-x86_K.js";import"./textSelection-CuPcs10t.js";import"./useFocusRing-D3e6qmx4.js";import"./RSPContexts-CAaZxjjz.js";import"./SelectionManager-Bqq70rE0.js";import"./useEvent-Dxi2gTg3.js";import"./SelectionIndicator-Cd8mIiX7.js";import"./useControlledState-2ZMtjnwx.js";import"./ListBox-Dy2E-1SB.js";import"./Separator-ByJixSi9.js";import"./Text-CevXFSmv.js";import"./useListState-BBOJwxZS.js";import"./useGridSelectionCheckbox-BUsLEtlX.js";import"./useHighlightSelectionDescription-DnqaMrZ3.js";import"./useLocalizedStringFormatter-CbX_tXs4.js";import"./VisuallyHidden-BRI8LZbG.js";import"./ButtonIcon-BCl7WmHy.js";import"./useHasTabbableChild-lDxWtlD-.js";import"./useField-BrmHv7QA.js";import"./getNodeText-CVD2SFh6.js";import"./Autocomplete-DrLmfKys.js";import"./Input-BL-_ZXni.js";import"./useFormReset-BBUe_3SO.js";import"./Form-BdiM_rlm.js";import"./Dialog-D_HKQgWJ.js";import"./OverlayArrow-CWLGk80E.js";import"./animation-Bep5svxH.js";import"./SearchField-0Px7-mkL.js";import"./FieldError-BHZ9gFAH.js";import"./Virtualizer-5LW6hpkQ.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-vd2Vc88X.js";const a=T.meta({title:"Backstage UI/List",component:n,args:{style:{width:320},"aria-label":"List"},decorators:[s=>e.jsx(f,{children:e.jsx(s,{})})]}),c=[{id:"react",label:"React",description:"A JavaScript library for building user interfaces",icon:e.jsx(W,{}),tags:["frontend","ui"]},{id:"typescript",label:"TypeScript",description:"Typed superset of JavaScript",icon:e.jsx(A,{}),tags:["typed","js"]},{id:"javascript",label:"JavaScript",description:"The language of the web",icon:e.jsx(I,{}),tags:["web"]},{id:"rust",label:"Rust",description:"Systems programming with memory safety",icon:e.jsx(K,{}),tags:["systems","fast"]},{id:"go",label:"Go",description:"Simple, fast, and reliable",icon:e.jsx(C,{}),tags:["backend"]}],R=e.jsxs(e.Fragment,{children:[e.jsx(x,{iconStart:e.jsx(D,{}),children:"Edit"}),e.jsx(x,{iconStart:e.jsx(G,{}),children:"Share"}),e.jsx(x,{iconStart:e.jsx(v,{}),color:"danger",children:"Delete"})]}),d=a.story({render:s=>e.jsx(n,{...s,items:c,children:t=>e.jsx(o,{id:t.id,children:t.label})})}),l=a.story({render:s=>e.jsx(n,{...s,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,children:t.label})})}),p=a.story({args:{style:{width:340}},render:s=>e.jsx(n,{...s,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,description:t.description,children:t.label})})}),m=a.story({render:s=>{const[t,i]=j.useState(new Set(["react"]));return e.jsx(n,{...s,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:i,children:r=>e.jsx(o,{id:r.id,children:r.label})})}}),u=a.story({render:s=>{const[t,i]=j.useState(new Set(["react"]));return e.jsx(n,{...s,items:c,selectionMode:"single",selectedKeys:t,onSelectionChange:i,children:r=>e.jsx(o,{id:r.id,icon:r.icon,children:r.label})})}}),g=a.story({render:s=>{const[t,i]=j.useState(new Set(["react","typescript"]));return e.jsx(n,{...s,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:i,children:r=>e.jsx(o,{id:r.id,children:r.label})})}}),S=a.story({render:s=>{const[t,i]=j.useState(new Set(["react","typescript"]));return e.jsx(n,{...s,items:c,selectionMode:"multiple",selectedKeys:t,onSelectionChange:i,children:r=>e.jsx(o,{id:r.id,icon:r.icon,children:r.label})})}}),h=a.story({render:s=>e.jsx(n,{...s,items:c,disabledKeys:["typescript","rust"],children:t=>e.jsx(o,{id:t.id,children:t.label})})}),y=a.story({args:{style:{width:420}},render:s=>e.jsx(n,{...s,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:R,children:t.label})})}),L=a.story({args:{style:{width:420}},render:s=>e.jsx(n,{...s,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,customActions:e.jsx(w,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(i=>e.jsx(M,{children:i},i))}),children:t.label})})}),b=a.story({args:{style:{width:420}},render:s=>e.jsx(n,{...s,items:c,children:t=>e.jsx(o,{id:t.id,icon:t.icon,menuItems:R,customActions:e.jsx(w,{"aria-label":`Tags for ${t.label}`,children:t.tags.map(i=>e.jsx(M,{children:i},i))}),children:t.label})})});d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id}>{item.label}</ListRow>}
    </List>
})`,...d.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <List {...args} items={items}>
      {item => <ListRow id={item.id} icon={item.icon}>
          {item.label}
        </ListRow>}
    </List>
})`,...l.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['react']));
    return <List {...args} items={items} selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <ListRow id={item.id}>{item.label}</ListRow>}
      </List>;
  }
})`,...m.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...S.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <List {...args} items={items} disabledKeys={['typescript', 'rust']}>
      {item => <ListRow id={item.id}>{item.label}</ListRow>}
    </List>
})`,...h.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...y.input.parameters?.docs?.source}}};L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...L.input.parameters?.docs?.source}}};b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...b.input.parameters?.docs?.source}}};const Ce=["Default","WithIcons","WithDescription","SelectionModeSingle","SelectionModeSingleWithIcons","SelectionModeMultiple","SelectionModeMultipleWithIcons","Disabled","WithActionsMenu","WithActionsTags","WithActionsMenuAndTags"];export{d as Default,h as Disabled,g as SelectionModeMultiple,S as SelectionModeMultipleWithIcons,m as SelectionModeSingle,u as SelectionModeSingleWithIcons,y as WithActionsMenu,b as WithActionsMenuAndTags,L as WithActionsTags,p as WithDescription,l as WithIcons,Ce as __namedExportsOrder};
