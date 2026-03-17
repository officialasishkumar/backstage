import{p as M,j as e,r as m}from"./iframe-BPa6N3SD.js";import{M as p,h as c,g as o}from"./Menu-DLvJ3dWx.js";import{M as g}from"./index-CCMAs2uM.js";import{B as h}from"./BUIProvider-BLvES4PE.js";import{B as l}from"./Button-CufE37b6.js";import{F as B}from"./Flex-B8JoJmvq.js";import{T as L}from"./Text-Clkq6d7U.js";import"./preload-helper-PPVm8Dsz.js";import"./Autocomplete-Cvvc2ljq.js";import"./RSPContexts-9qGDloQE.js";import"./utils-DswDyXof.js";import"./useObjectRef-CI83hwRy.js";import"./useFocusable-4FnVs4dN.js";import"./openLink-B0Vv0SU7.js";import"./useLabels-D7K7m6u5.js";import"./useEvent-BE9REamV.js";import"./SelectionManager-BqtbLglD.js";import"./SelectionIndicator-BupITJ8a.js";import"./context-CPBrHf_p.js";import"./usePress-BE7l1dkR.js";import"./Hidden-eNtBBPfi.js";import"./useControlledState-Dd4M1DuP.js";import"./useLocalizedStringFormatter-CPXeU17L.js";import"./Button-DYofrAhh.js";import"./Label-CqCXfrag.js";import"./useLabel-pPCak257.js";import"./useButton-CBB0LfdZ.js";import"./useFocusRing-BJdCCSYi.js";import"./Separator-CP52fbF9.js";import"./Input-C2jKzkiM.js";import"./useFormReset-DfD-twWJ.js";import"./useField-_4T8u5-k.js";import"./Form-BK-VVzZF.js";import"./ListBox-DV72Du-3.js";import"./Text-BxJibhmm.js";import"./useListState-PLbgipyy.js";import"./Dialog-BwC5D86X.js";import"./OverlayArrow-COlX7h77.js";import"./animation-Ct3KSSa5.js";import"./VisuallyHidden-Wp3WfQnW.js";import"./SearchField-C0J2Zs0Q.js";import"./FieldError-DLOsT5fZ.js";import"./index-BHPSdYx0.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-STEwi9WY.js";import"./useFilter-w197uTkk.js";const d=M.meta({title:"Backstage UI/MenuListBox",component:p,decorators:[r=>e.jsx(g,{children:e.jsx(h,{children:e.jsx(r,{})})})]}),n=d.story({args:{children:null},render:()=>e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{children:[e.jsx(o,{children:"Item 1"}),e.jsx(o,{children:"Item 2"}),e.jsx(o,{children:"Item 3"})]})]})}),i=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState(new Set(["paul"]));return e.jsxs(B,{direction:"column",gap:"2",align:"start",children:[e.jsxs(L,{children:["Selected: ",Array.from(r).join(", ")]}),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsxs(c,{selectionMode:"multiple",selectedKeys:r,onSelectionChange:u,children:[e.jsx(o,{id:"john",children:"John Lennon"},"item1"),e.jsx(o,{id:"paul",children:"Paul McCartney"},"item2"),e.jsx(o,{id:"george",children:"George Harrison"},"item3"),e.jsx(o,{id:"ringo",children:"Ringo Starr"},"item4")]})]})]})}}),s=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState([]);return m.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{u(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,children:r.map((t,x)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},x))})]})}}),a=d.story({args:{...n.input.args},render:()=>{const[r,u]=m.useState([]);return m.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{u(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(p,{isOpen:!0,children:[e.jsx(l,{"aria-label":"Menu",children:"Menu"}),e.jsx(c,{items:r,virtualized:!0,maxHeight:"300px",children:r.map((t,x)=>e.jsx(o,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},x))})]})}});n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const Default = () => (
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
})`,...a.input.parameters?.docs?.source}}};const le=["Default","Controlled","Virtualized","VirtualizedMaxHeight"];export{i as Controlled,n as Default,s as Virtualized,a as VirtualizedMaxHeight,le as __namedExportsOrder};
