import{p as M,j as e,r as m}from"./iframe-Bu39PmLp.js";import{M as p,h as c,g as o}from"./Menu-p5LERDvR.js";import{M as g}from"./index-B4-sCELz.js";import{B as h}from"./BUIProvider-fqCixX3i.js";import{B as l}from"./Button-BRPNUXOy.js";import{F as B}from"./Flex-CYWDkcQ-.js";import{T as L}from"./Text-D09T7r6W.js";import"./preload-helper-PPVm8Dsz.js";import"./Autocomplete-CG8miu72.js";import"./RSPContexts-DQQ3KY7W.js";import"./utils-Ci5AW6X-.js";import"./useObjectRef-BSJLXEhT.js";import"./useFocusable-C8Opf56f.js";import"./openLink-CfoeYFVv.js";import"./useLabels-B8TGkLRU.js";import"./useEvent-j9JKdwo1.js";import"./SelectionManager-CFHeKMrY.js";import"./SelectionIndicator-O80lk4Ls.js";import"./context-BdzrVytx.js";import"./usePress-DUlmfUsL.js";import"./Hidden-CV-jl2FI.js";import"./useControlledState-BXkttDc4.js";import"./useLocalizedStringFormatter-CHWSsnHn.js";import"./Button-hbC-XBEi.js";import"./Label-6-0UlA3t.js";import"./useLabel-z0zu4-3c.js";import"./useButton-BNscdo38.js";import"./useFocusRing-PIzjQdr3.js";import"./Separator-CybT_4xy.js";import"./Input-DTbK87oW.js";import"./useFormReset-Y1rz8it6.js";import"./useField-DNiQTBc2.js";import"./Form-WFV3DhKQ.js";import"./ListBox-nZlgnAma.js";import"./Text-SzkOlHOq.js";import"./useListState-C-P3xswn.js";import"./Dialog-BWBWUG_e.js";import"./OverlayArrow-D3yhX5yD.js";import"./animation-B7Fj6SuW.js";import"./VisuallyHidden-I7YguFXz.js";import"./SearchField-CZvnJ_Vp.js";import"./FieldError-CCo4VRtg.js";import"./Virtualizer-BmtzZ-rR.js";import"./index-D-ffUtG1.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-wOZ53vkC.js";import"./useFilter-oCs-GHge.js";const d=M.meta({title:"Backstage UI/MenuListBox",component:p,decorators:[r=>e.jsx(g,{children:e.jsx(h,{children:e.jsx(r,{})})})]}),n=d.story({args:{children:null},render:()=>e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})}),i=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState(new Set(["paul"]));return e.jsxs(B,{direction:"column",gap:"2",align:"start",children:[e.jsxs(L,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{selectionMode:"multiple",selectedKeys:r,onSelectionChange:u,children:[e.jsx(o,{id:"john",children:"John Lennon"},"item1"),e.jsx(o,{id:"paul",children:"Paul McCartney"},"item2"),e.jsx(o,{id:"george",children:"George Harrison"},"item3"),e.jsx(o,{id:"ringo",children:"Ringo Starr"},"item4")]})]})]})}}),s=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState([]);return m.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{u(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,children:r.map((t,x)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},x))})]})}}),a=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState([]);return m.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{u(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,maxHeight:"300px",children:r.map((t,x)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},x))})]})}});n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const Default = () => (
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
})`,...a.input.parameters?.docs?.source}}};const de=["Default","Controlled","Virtualized","VirtualizedMaxHeight"];export{i as Controlled,n as Default,s as Virtualized,a as VirtualizedMaxHeight,de as __namedExportsOrder};
