import{r as I,p as A,j as o}from"./iframe-DsZtuuTR.js";import{l as k,h as R,e as w,g as D}from"./index-c7SR34sA.js";import{T as u,a as g}from"./TagGroup-CEg8Lqv-.js";import{M as C}from"./index-uH1xIlYD.js";import{B as F}from"./BUIProvider-CyUmZSwJ.js";import{F as z}from"./Flex-TuHv3a3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Ce-x5v5W.js";import"./utils-DOn52t1M.js";import"./useObjectRef-BKuX1cxx.js";import"./Label-BZbs8mWr.js";import"./Hidden-6rwvEI5v.js";import"./useFocusable-BjFuxCiE.js";import"./openLink-D7WjByac.js";import"./useLabel-C6xabSCS.js";import"./useLabels-C4sOwMGS.js";import"./context-BBusO5fG.js";import"./useButton-CxeSy5Gb.js";import"./usePress-Dn3qv1At.js";import"./useFocusRing-Cq6Zb8CQ.js";import"./SelectionManager-DDxMK5Zf.js";import"./useEvent-BJqZJzBX.js";import"./SelectionIndicator-CkuEJzOW.js";import"./useControlledState-B9QwQu10.js";import"./ListBox-Cyl8ye6K.js";import"./Separator-DZWmC-oa.js";import"./RSPContexts-C47maKDE.js";import"./Text-D5_LMc_o.js";import"./useListState-C_nZRqrd.js";import"./useHighlightSelectionDescription-DbrGxTcR.js";import"./useLocalizedStringFormatter-OA-PVtng.js";import"./useHasTabbableChild-cIThvFmf.js";import"./useField-8MoFIJFD.js";import"./getNodeText-Cf7LXOu6.js";function $(a){let{initialItems:t=[],initialSelectedKeys:c,getKey:r=p=>{var m;return(m=p.id)!==null&&m!==void 0?m:p.key},filter:i,initialFilterText:e=""}=a,[n,s]=I.useState({items:t,selectedKeys:c==="all"?"all":new Set(c||[]),filterText:e}),l=I.useMemo(()=>i?n.items.filter(p=>i(p,n.filterText)):n.items,[n.items,n.filterText,i]);return{...n,items:l,...B({getKey:r},s),getItem(p){return n.items.find(m=>r(m)===p)}}}function B(a,t){let{cursor:c,getKey:r}=a;return{setSelectedKeys(i){t(e=>({...e,selectedKeys:i}))},addKeysToSelection(i){t(e=>e.selectedKeys==="all"?e:i==="all"?{...e,selectedKeys:"all"}:{...e,selectedKeys:new Set([...e.selectedKeys,...i])})},removeKeysFromSelection(i){t(e=>{if(i==="all")return{...e,selectedKeys:new Set};let n=e.selectedKeys==="all"?new Set(e.items.map(r)):new Set(e.selectedKeys);for(let s of i)n.delete(s);return{...e,selectedKeys:n}})},setFilterText(i){t(e=>({...e,filterText:i}))},insert(i,...e){t(n=>b(n,i,...e))},insertBefore(i,...e){t(n=>{let s=n.items.findIndex(l=>r?.(l)===i);if(s===-1)if(n.items.length===0)s=0;else return n;return b(n,s,...e)})},insertAfter(i,...e){t(n=>{let s=n.items.findIndex(l=>r?.(l)===i);if(s===-1)if(n.items.length===0)s=0;else return n;return b(n,s+1,...e)})},prepend(...i){t(e=>b(e,0,...i))},append(...i){t(e=>b(e,e.items.length,...i))},remove(...i){t(e=>{let n=new Set(i),s=e.items.filter(p=>!n.has(r(p))),l="all";if(e.selectedKeys!=="all"){l=new Set(e.selectedKeys);for(let p of i)l.delete(p)}return c==null&&s.length===0&&(l=new Set),{...e,items:s,selectedKeys:l}})},removeSelectedItems(){t(i=>{if(i.selectedKeys==="all")return{...i,items:[],selectedKeys:new Set};let e=i.selectedKeys,n=i.items.filter(s=>!e.has(r(s)));return{...i,items:n,selectedKeys:new Set}})},move(i,e){t(n=>{let s=n.items.findIndex(m=>r(m)===i);if(s===-1)return n;let l=n.items.slice(),[p]=l.splice(s,1);return l.splice(e,0,p),{...n,items:l}})},moveBefore(i,e){t(n=>{let s=n.items.findIndex(m=>r(m)===i);if(s===-1)return n;let p=(Array.isArray(e)?e:[...e]).map(m=>n.items.findIndex(j=>r(j)===m)).sort((m,j)=>m-j);return M(n,p,s)})},moveAfter(i,e){t(n=>{let s=n.items.findIndex(m=>r(m)===i);if(s===-1)return n;let p=(Array.isArray(e)?e:[...e]).map(m=>n.items.findIndex(j=>r(j)===m)).sort((m,j)=>m-j);return M(n,p,s+1)})},update(i,e){t(n=>{let s=n.items.findIndex(p=>r(p)===i);if(s===-1)return n;let l;return typeof e=="function"?l=e(n.items[s]):l=e,{...n,items:[...n.items.slice(0,s),l,...n.items.slice(s+1)]}})}}}function b(a,t,...c){return{...a,items:[...a.items.slice(0,t),...c,...a.items.slice(t)]}}function M(a,t,c){c-=t.filter(e=>e<c).length;let r=t.map(e=>({from:e,to:c++}));for(let e=0;e<r.length;e++){let n=r[e].from;for(let s=e;s<r.length;s++)r[s].from>n&&r[s].from--}for(let e=0;e<r.length;e++){let n=r[e];for(let s=r.length-1;s>e;s--){let l=r[s];l.from<n.to?n.to++:l.from++}}let i=a.items.slice();for(let e of r){let[n]=i.splice(e.from,1);i.splice(e.to,0,n)}return{...a,items:i}}const T=A.meta({title:"Backstage UI/TagGroup",component:u,argTypes:{selectionMode:{control:{type:"inline-radio"},options:["single","multiple"]},"aria-label":{control:{type:"text"}}},decorators:[a=>o.jsx(C,{children:o.jsx(F,{children:o.jsx(a,{})})})]}),S=[{id:"banana",name:"Banana",icon:o.jsx(k,{})},{id:"apple",name:"Apple",icon:o.jsx(R,{}),isDisabled:!0},{id:"orange",name:"Orange",icon:o.jsx(w,{}),isDisabled:!0},{id:"pear",name:"Pear",icon:o.jsx(D,{})},{id:"grape",name:"Grape",icon:o.jsx(k,{})},{id:"pineapple",name:"Pineapple",icon:o.jsx(w,{})},{id:"strawberry",name:"Strawberry",icon:o.jsx(D,{})}],d=T.story({args:{"aria-label":"Tag Group"},render:a=>o.jsx(u,{...a,children:S.map(t=>o.jsx(g,{children:t.name},t.id))})}),y=T.story({args:{...d.input.args},render:a=>o.jsxs(z,{direction:"column",children:[o.jsx(u,{...a,children:S.map(t=>o.jsx(g,{size:"small",icon:t.icon,children:t.name},t.id))}),o.jsx(u,{...a,children:S.map(t=>o.jsx(g,{size:"medium",icon:t.icon,children:t.name},t.id))})]})}),f=T.story({args:{selectionMode:"single","aria-label":"Tag Group"},render:a=>{const[t,c]=I.useState(new Set(["travel"]));return o.jsx(u,{...a,items:S,selectedKeys:t,onSelectionChange:c,children:r=>o.jsx(g,{children:r.name})})}}),x=T.story({args:{selectionMode:"multiple","aria-label":"Tag Group"},render:a=>{const[t,c]=I.useState(new Set(["travel","shopping"]));return o.jsx(u,{...a,items:S,selectedKeys:t,onSelectionChange:c,children:r=>o.jsx(g,{children:r.name})})}}),G=T.story({args:{...d.input.args},render:a=>o.jsx(u,{...a,children:S.map(t=>o.jsx(g,{icon:t.icon?t.icon:void 0,children:t.name},t.id))})}),v=T.story({render:a=>o.jsx(u,{...a,children:S.map(t=>o.jsx(g,{href:`/items/${t.id}`,children:t.name},t.id))})}),h=T.story({render:a=>o.jsx(u,{...a,children:S.map(t=>o.jsx(g,{isDisabled:t.isDisabled,children:t.name},t.id))})}),K=T.story({args:{...d.input.args},render:a=>{const[t,c]=I.useState(new Set(["travel"])),r=$({initialItems:S});return o.jsx(u,{...a,items:r.items,onRemove:i=>r.remove(...i),selectedKeys:t,onSelectionChange:c,children:i=>o.jsx(g,{children:i.name})})}}),L=T.story({args:{...d.input.args},render:a=>{const[t,c]=I.useState(new Set(["travel"])),r=$({initialItems:S});return o.jsx(u,{...a,items:r.items,onRemove:i=>r.remove(...i),selectedKeys:t,onSelectionChange:c,children:i=>o.jsx(g,{icon:i.icon?i.icon:void 0,children:i.name})})}});d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const Default = () => (
  <TagGroup aria-label="Tag Group">
    {initialList.map((item) => (
      <Tag key={item.id}>{item.name}</Tag>
    ))}
  </TagGroup>
);
`,...d.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{code:`const Sizes = () => (
  <Flex direction="column">
    <TagGroup>
      {initialList.map((item) => (
        <Tag key={item.id} size="small" icon={item.icon}>
          {item.name}
        </Tag>
      ))}
    </TagGroup>
    <TagGroup>
      {initialList.map((item) => (
        <Tag key={item.id} size="medium" icon={item.icon}>
          {item.name}
        </Tag>
      ))}
    </TagGroup>
  </Flex>
);
`,...y.input.parameters?.docs?.source}}};f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{code:`const SelectionModeSingle = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["travel"]));

  return (
    <TagGroup
      selectionMode="single"
      aria-label="Tag Group"
      items={initialList}
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  );
};
`,...f.input.parameters?.docs?.source}}};x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{code:`const SelectionModeMultiple = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set(["travel", "shopping"])
  );

  return (
    <TagGroup
      selectionMode="multiple"
      aria-label="Tag Group"
      items={initialList}
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  );
};
`,...x.input.parameters?.docs?.source}}};G.input.parameters={...G.input.parameters,docs:{...G.input.parameters?.docs,source:{code:`const WithIcon = () => (
  <TagGroup>
    {initialList.map((item) => (
      <Tag key={item.id} icon={item.icon ? item.icon : undefined}>
        {item.name}
      </Tag>
    ))}
  </TagGroup>
);
`,...G.input.parameters?.docs?.source}}};v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{code:`const WithLink = () => (
  <TagGroup>
    {initialList.map((item) => (
      <Tag key={item.id} href={\`/items/\${item.id}\`}>
        {item.name}
      </Tag>
    ))}
  </TagGroup>
);
`,...v.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const Disabled = () => (
  <TagGroup>
    {initialList.map((item) => (
      <Tag key={item.id} isDisabled={item.isDisabled}>
        {item.name}
      </Tag>
    ))}
  </TagGroup>
);
`,...h.input.parameters?.docs?.source}}};K.input.parameters={...K.input.parameters,docs:{...K.input.parameters?.docs,source:{code:`const RemovingTags = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["travel"]));

  const list = useListData<ListItem>({
    initialItems: initialList,
  });

  return (
    <TagGroup
      items={list.items}
      onRemove={(keys) => list.remove(...keys)}
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => <Tag>{item.name}</Tag>}
    </TagGroup>
  );
};
`,...K.input.parameters?.docs?.source}}};L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{code:`const WithIconAndRemoveButton = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["travel"]));

  const list = useListData<ListItem>({
    initialItems: initialList,
  });

  return (
    <TagGroup
      items={list.items}
      onRemove={(keys) => list.remove(...keys)}
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => (
        <Tag icon={item.icon ? item.icon : undefined}>{item.name}</Tag>
      )}
    </TagGroup>
  );
};
`,...L.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Tag Group'
  },
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id}>{item.name}</Tag>)}
    </TagGroup>
})`,...d.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => <Flex direction="column">
      <TagGroup {...args}>
        {initialList.map(item => <Tag key={item.id} size="small" icon={item.icon}>
            {item.name}
          </Tag>)}
      </TagGroup>
      <TagGroup {...args}>
        {initialList.map(item => <Tag key={item.id} size="medium" icon={item.icon}>
            {item.name}
          </Tag>)}
      </TagGroup>
    </Flex>
})`,...y.input.parameters?.docs?.source}}};f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    selectionMode: 'single',
    'aria-label': 'Tag Group'
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    return <TagGroup<ListItem> {...args} items={initialList} selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
})`,...f.input.parameters?.docs?.source}}};x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    selectionMode: 'multiple',
    'aria-label': 'Tag Group'
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel', 'shopping']));
    return <TagGroup<ListItem> {...args} items={initialList} selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
})`,...x.input.parameters?.docs?.source}}};G.input.parameters={...G.input.parameters,docs:{...G.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} icon={item.icon ? item.icon : undefined}>
          {item.name}
        </Tag>)}
    </TagGroup>
})`,...G.input.parameters?.docs?.source}}};v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} href={\`/items/\${item.id}\`}>
          {item.name}
        </Tag>)}
    </TagGroup>
})`,...v.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => <TagGroup {...args}>
      {initialList.map(item => <Tag key={item.id} isDisabled={item.isDisabled}>
          {item.name}
        </Tag>)}
    </TagGroup>
})`,...h.input.parameters?.docs?.source}}};K.input.parameters={...K.input.parameters,docs:{...K.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    const list = useListData<ListItem>({
      initialItems: initialList
    });
    return <TagGroup<ListItem> {...args} items={list.items} onRemove={keys => list.remove(...keys)} selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <Tag>{item.name}</Tag>}
      </TagGroup>;
  }
})`,...K.input.parameters?.docs?.source}}};L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => {
    const [selected, setSelected] = useState<Selection>(new Set(['travel']));
    const list = useListData<ListItem>({
      initialItems: initialList
    });
    return <TagGroup<ListItem> {...args} items={list.items} onRemove={keys => list.remove(...keys)} selectedKeys={selected} onSelectionChange={setSelected}>
        {item => <Tag icon={item.icon ? item.icon : undefined}>{item.name}</Tag>}
      </TagGroup>;
  }
})`,...L.input.parameters?.docs?.source}}};const xe=["Default","Sizes","SelectionModeSingle","SelectionModeMultiple","WithIcon","WithLink","Disabled","RemovingTags","WithIconAndRemoveButton"];export{d as Default,h as Disabled,K as RemovingTags,x as SelectionModeMultiple,f as SelectionModeSingle,y as Sizes,G as WithIcon,L as WithIconAndRemoveButton,v as WithLink,xe as __namedExportsOrder};
