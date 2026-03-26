import{p as M,j as e,r as m}from"./iframe-LAkIJzV-.js";import{M as p,h as c,g as o}from"./Menu-BimyZXjN.js";import{M as g}from"./index-DacU1fu4.js";import{B as h}from"./BUIProvider-BCBhngHq.js";import{B as l}from"./Button-DfPt3wS1.js";import{F as B}from"./Flex-y9BS8UJk.js";import{T as L}from"./Text-JADR5Fg7.js";import"./preload-helper-PPVm8Dsz.js";import"./Autocomplete-BUb86CE9.js";import"./RSPContexts-tCQiqn1K.js";import"./utils-DQ9JD3Eh.js";import"./useObjectRef-Dnfr9yjY.js";import"./useFocusable-D4TJWCE7.js";import"./openLink-DmaCgHpA.js";import"./useLabels-DyWy5cQr.js";import"./useEvent-0yI9s6G2.js";import"./SelectionManager-BX8J_v8H.js";import"./SelectionIndicator-Bill14MS.js";import"./context-r_P2GL11.js";import"./usePress-DejSSO9x.js";import"./textSelection-DvoLH8jT.js";import"./Hidden-DO4aGUV9.js";import"./useControlledState-nNvxiAMi.js";import"./useLocalizedStringFormatter-O5HEBytX.js";import"./Button-BaVVdilz.js";import"./Label-C-mNv6SM.js";import"./useNumberFormatter-BdRMEm_f.js";import"./useLabel-eIB2nDmT.js";import"./useButton-DrRqNQGM.js";import"./useFocusRing-DA0QhuH0.js";import"./Separator-DZQla1Hc.js";import"./Input-MZTqK3pa.js";import"./useFormReset-Bx2I8NYH.js";import"./useField-C8Q3wRbu.js";import"./Form-CddXkb1B.js";import"./ListBox-DVoZE-cC.js";import"./Text-Co4T9G0P.js";import"./useListState-hkhw1Pde.js";import"./Dialog-Cyk1NHXq.js";import"./OverlayArrow-CzwPp9Ep.js";import"./animation-Dz9T6uaO.js";import"./VisuallyHidden-Csn6CGfQ.js";import"./SearchField-NC2Sk7BN.js";import"./FieldError-DeW8slCn.js";import"./Virtualizer-CsJ4LGKP.js";import"./index-C-MtO-sF.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-eneNsEje.js";import"./useFilter-DOuytZjq.js";const d=M.meta({title:"Backstage UI/MenuListBox",component:p,decorators:[r=>e.jsx(g,{children:e.jsx(h,{children:e.jsx(r,{})})})]}),n=d.story({args:{children:null},render:()=>e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})}),i=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState(new Set(["paul"]));return e.jsxs(B,{direction:"column",gap:"2",align:"start",children:[e.jsxs(L,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{selectionMode:"multiple",selectedKeys:r,onSelectionChange:u,children:[e.jsx(o,{id:"john",children:"John Lennon"},"item1"),e.jsx(o,{id:"paul",children:"Paul McCartney"},"item2"),e.jsx(o,{id:"george",children:"George Harrison"},"item3"),e.jsx(o,{id:"ringo",children:"Ringo Starr"},"item4")]})]})]})}}),s=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState([]);return m.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{u(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,children:r.map((t,x)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},x))})]})}}),a=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState([]);return m.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{u(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,maxHeight:"300px",children:r.map((t,x)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},x))})]})}});n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const Default = () => (
  <MenuTrigger isOpen>
    <Button aria-label="Menu">Menu</Button>
    <MenuListBox>
      <MenuListBoxItem>Item 1</MenuListBoxItem>
      <MenuListBoxItem>Item 2</MenuListBoxItem>
      <MenuListBoxItem>Item 3</MenuListBoxItem>
    </MenuListBox>
  </MenuTrigger>
);
`,...n.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const Controlled = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["paul"]));

  return (
    <Flex direction="column" gap="2" align="start">
      <Text>Selected: {Array.from(selected).join(", ")}</Text>
      <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuListBox
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuListBoxItem key="item1" id="john">
            John Lennon
          </MenuListBoxItem>
          <MenuListBoxItem key="item2" id="paul">
            Paul McCartney
          </MenuListBoxItem>
          <MenuListBoxItem key="item3" id="george">
            George Harrison
          </MenuListBoxItem>
          <MenuListBoxItem key="item4" id="ringo">
            Ringo Starr
          </MenuListBoxItem>
        </MenuListBox>
      </MenuTrigger>
    </Flex>
  );
};
`,...i.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Virtualized = () => {
  const [pokemon, setPokemon] = useState<Array<{ name: string; url: string }>>(
    []
  );

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, []);

  return (
    <MenuTrigger isOpen>
      <Button aria-label="Menu">Menu</Button>
      <MenuListBox items={pokemon} virtualized>
        {pokemon.map((p, index) => (
          <MenuListBoxItem key={index} id={p.name}>
            {p.name.charAt(0).toLocaleUpperCase("en-US") + p.name.slice(1)}
          </MenuListBoxItem>
        ))}
      </MenuListBox>
    </MenuTrigger>
  );
};
`,...s.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{code:`const VirtualizedMaxHeight = () => {
  const [pokemon, setPokemon] = useState<Array<{ name: string; url: string }>>(
    []
  );

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, []);

  return (
    <MenuTrigger isOpen>
      <Button aria-label="Menu">Menu</Button>
      <MenuListBox items={pokemon} virtualized maxHeight="300px">
        {pokemon.map((p, index) => (
          <MenuListBoxItem key={index} id={p.name}>
            {p.name.charAt(0).toLocaleUpperCase("en-US") + p.name.slice(1)}
          </MenuListBoxItem>
        ))}
      </MenuListBox>
    </MenuTrigger>
  );
};
`,...a.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: null
  },
  render: () => <MenuTrigger isOpen>
      <Button aria-label="Menu">Menu</Button>
      <MenuListBox>
        <MenuListBoxItem>Item 1</MenuListBoxItem>
        <MenuListBoxItem>Item 2</MenuListBoxItem>
        <MenuListBoxItem>Item 3</MenuListBoxItem>
      </MenuListBox>
    </MenuTrigger>
})`,...n.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set(['paul']));
    return <Flex direction="column" gap="2" align="start">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger isOpen>
          <Button aria-label="Menu">Menu</Button>
          <MenuListBox selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
            <MenuListBoxItem key="item1" id="john">
              John Lennon
            </MenuListBoxItem>
            <MenuListBoxItem key="item2" id="paul">
              Paul McCartney
            </MenuListBoxItem>
            <MenuListBoxItem key="item3" id="george">
              George Harrison
            </MenuListBoxItem>
            <MenuListBoxItem key="item4" id="ringo">
              Ringo Starr
            </MenuListBoxItem>
          </MenuListBox>
        </MenuTrigger>
      </Flex>;
  }
})`,...i.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: () => {
    const [pokemon, setPokemon] = useState<Array<{
      name: string;
      url: string;
    }>>([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(response => response.json()).then(data => {
        setPokemon(data.results);
      }).catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
    }, []);
    return <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuListBox items={pokemon} virtualized>
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuListBox>
      </MenuTrigger>;
  }
})`,...s.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: () => {
    const [pokemon, setPokemon] = useState<Array<{
      name: string;
      url: string;
    }>>([]);
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1000').then(response => response.json()).then(data => {
        setPokemon(data.results);
      }).catch(error => {
        console.error('Error fetching Pokemon:', error);
      });
    }, []);
    return <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuListBox items={pokemon} virtualized maxHeight="300px">
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuListBox>
      </MenuTrigger>;
  }
})`,...a.input.parameters?.docs?.source}}};const Me=["Default","Controlled","Virtualized","VirtualizedMaxHeight"];export{i as Controlled,n as Default,s as Virtualized,a as VirtualizedMaxHeight,Me as __namedExportsOrder};
