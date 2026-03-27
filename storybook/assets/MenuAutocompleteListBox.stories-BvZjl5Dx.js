import{p as L,r as p,j as e,M as k}from"./iframe-BzEx-mzh.js";import{M as m,f as d,g as x,a as y,b as v,S as j}from"./Menu-BXmqtQID.js";import{B}from"./BUIProvider-CKEPa0P4.js";import{F as h}from"./Flex-ClAtc1ys.js";import{T as S}from"./Text-DaGJjJFj.js";import{B as g}from"./Button-BRhA6qbX.js";import"./preload-helper-PPVm8Dsz.js";import"./Autocomplete-BOBNrWx9.js";import"./RSPContexts-D3_bCSg5.js";import"./utils-BDXApE7U.js";import"./useObjectRef-7NzQiWpJ.js";import"./useFocusable-B2BTQL4u.js";import"./openLink-iXSrpszV.js";import"./useLabels-DbpWDRuh.js";import"./useEvent-LozTFo0-.js";import"./SelectionManager-ClYV0B6V.js";import"./SelectionIndicator-bBhHlkUk.js";import"./context-B5YRTm9_.js";import"./usePress-FeDF9flR.js";import"./textSelection-KICnnnol.js";import"./Hidden-CUyFvq5U.js";import"./useControlledState-BYt3eqAD.js";import"./useLocalizedStringFormatter-Ef-c9lNP.js";import"./Button-C70VriFO.js";import"./Label-B0n4fyUQ.js";import"./useNumberFormatter-D33ejKQD.js";import"./useLabel-CqGSp8Pi.js";import"./useButton-Cu9ZqvUB.js";import"./useFocusRing-KF7qKJ3V.js";import"./Separator-Cj69X7wG.js";import"./Input-CTiKcocy.js";import"./useFormReset-C6dIPZrP.js";import"./useField-8SIDYuBp.js";import"./Form-DUon0ahv.js";import"./ListBox-6XgfnuKp.js";import"./Text-DFT04VlK.js";import"./useListState-DoPs8DdS.js";import"./Dialog-WAkrKshU.js";import"./OverlayArrow-D1rdKuMj.js";import"./animation-Du4VRchS.js";import"./VisuallyHidden-DPymwPDc.js";import"./SearchField-Chi6c7Wz.js";import"./FieldError-DJ8YOJCM.js";import"./Virtualizer-BKjIrKRY.js";import"./index-CY69XmlQ.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-Bb3-BK6W.js";import"./useFilter-C89WXqO9.js";const M=L.meta({title:"Backstage UI/MenuAutocompleteListBox",component:m,decorators:[n=>e.jsx(k,{children:e.jsx(B,{children:e.jsx(n,{})})})]}),s=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Durian",value:"durian"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],o=M.story({args:{children:null},render:()=>{const[n,r]=p.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"start",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{selectedKeys:n,onSelectionChange:r,children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})}}),i=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"center",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{selectedKeys:n,onSelectionChange:r,children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})}}),a=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState(new Set([s[2].value,s[3].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"center",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{selectionMode:"multiple",selectedKeys:n,onSelectionChange:r,children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})}}),u=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"start",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsxs(y,{children:[e.jsx(v,{children:"Edit"}),e.jsx(v,{children:"Duplicate"}),e.jsxs(j,{children:[e.jsx(v,{children:"Submenu"}),e.jsx(d,{selectedKeys:n,onSelectionChange:r,placement:"right top",children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})]})]})}}),l=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState([]);return p.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{r(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{items:n,placeholder:"Search Pokemon...",virtualized:!0,children:n.map((t,b)=>e.jsx(x,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},b))})]})}}),c=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState([]);return p.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{r(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{items:n,placeholder:"Search Pokemon...",virtualized:!0,maxHeight:"300px",children:n.map((t,b)=>e.jsx(x,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},b))})]})}});o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Default = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set([options[2].value])
  );

  return (
    <Flex direction="column" gap="2" align="start">
      <Text>Selected: {Array.from(selected).join(", ")}</Text>
      <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <MenuAutocompleteListbox
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          {options.map((option) => (
            <MenuListBoxItem key={option.value} id={option.value}>
              {option.label}
            </MenuListBoxItem>
          ))}
        </MenuAutocompleteListbox>
      </MenuTrigger>
    </Flex>
  );
};
`,...o.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const PreviewListbox = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set([options[2].value])
  );

  return (
    <Flex direction="column" gap="2" align="center">
      <Text>Selected: {Array.from(selected).join(", ")}</Text>
      <MenuTrigger>
        <Button aria-label="Menu">Menu</Button>
        <MenuAutocompleteListbox
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          {options.map((option) => (
            <MenuListBoxItem key={option.value} id={option.value}>
              {option.label}
            </MenuListBoxItem>
          ))}
        </MenuAutocompleteListbox>
      </MenuTrigger>
    </Flex>
  );
};
`,...i.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{code:`const PreviewListboxMultiple = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set([options[2].value, options[3].value])
  );

  return (
    <Flex direction="column" gap="2" align="center">
      <Text>Selected: {Array.from(selected).join(", ")}</Text>
      <MenuTrigger>
        <Button aria-label="Menu">Menu</Button>
        <MenuAutocompleteListbox
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          {options.map((option) => (
            <MenuListBoxItem key={option.value} id={option.value}>
              {option.label}
            </MenuListBoxItem>
          ))}
        </MenuAutocompleteListbox>
      </MenuTrigger>
    </Flex>
  );
};
`,...a.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const Submenu = () => {
  const [selected, setSelected] = useState<Selection>(
    new Set([options[2].value])
  );

  return (
    <Flex direction="column" gap="2" align="start">
      <Text>Selected: {Array.from(selected).join(", ")}</Text>
      <MenuTrigger isOpen>
        <Button aria-label="Menu">Menu</Button>
        <Menu>
          <MenuItem>Edit</MenuItem>
          <MenuItem>Duplicate</MenuItem>
          <SubmenuTrigger>
            <MenuItem>Submenu</MenuItem>
            <MenuAutocompleteListbox
              selectedKeys={selected}
              onSelectionChange={setSelected}
              placement="right top"
            >
              {options.map((option) => (
                <MenuListBoxItem key={option.value} id={option.value}>
                  {option.label}
                </MenuListBoxItem>
              ))}
            </MenuAutocompleteListbox>
          </SubmenuTrigger>
        </Menu>
      </MenuTrigger>
    </Flex>
  );
};
`,...u.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const Virtualized = () => {
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
      <MenuAutocompleteListbox
        items={pokemon}
        placeholder="Search Pokemon..."
        virtualized
      >
        {pokemon.map((p, index) => (
          <MenuListBoxItem key={index} id={p.name}>
            {p.name.charAt(0).toLocaleUpperCase("en-US") + p.name.slice(1)}
          </MenuListBoxItem>
        ))}
      </MenuAutocompleteListbox>
    </MenuTrigger>
  );
};
`,...l.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const VirtualizedMaxHeight = () => {
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
      <MenuAutocompleteListbox
        items={pokemon}
        placeholder="Search Pokemon..."
        virtualized
        maxHeight="300px"
      >
        {pokemon.map((p, index) => (
          <MenuListBoxItem key={index} id={p.name}>
            {p.name.charAt(0).toLocaleUpperCase("en-US") + p.name.slice(1)}
          </MenuListBoxItem>
        ))}
      </MenuAutocompleteListbox>
    </MenuTrigger>
  );
};
`,...c.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: null
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value]));
    return <Flex direction="column" gap="2" align="start">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger isOpen>
          <Button aria-label="Menu">Menu</Button>
          <MenuAutocompleteListbox selectedKeys={selected} onSelectionChange={setSelected}>
            {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                {option.label}
              </MenuListBoxItem>)}
          </MenuAutocompleteListbox>
        </MenuTrigger>
      </Flex>;
  }
})`,...o.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value]));
    return <Flex direction="column" gap="2" align="center">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger>
          <Button aria-label="Menu">Menu</Button>
          <MenuAutocompleteListbox selectedKeys={selected} onSelectionChange={setSelected}>
            {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                {option.label}
              </MenuListBoxItem>)}
          </MenuAutocompleteListbox>
        </MenuTrigger>
      </Flex>;
  }
})`,...i.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value, options[3].value]));
    return <Flex direction="column" gap="2" align="center">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger>
          <Button aria-label="Menu">Menu</Button>
          <MenuAutocompleteListbox selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
            {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                {option.label}
              </MenuListBoxItem>)}
          </MenuAutocompleteListbox>
        </MenuTrigger>
      </Flex>;
  }
})`,...a.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: () => {
    const [selected, setSelected] = useState<Selection>(new Set([options[2].value]));
    return <Flex direction="column" gap="2" align="start">
        <Text>Selected: {Array.from(selected).join(', ')}</Text>
        <MenuTrigger isOpen>
          <Button aria-label="Menu">Menu</Button>
          <Menu>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <SubmenuTrigger>
              <MenuItem>Submenu</MenuItem>
              <MenuAutocompleteListbox selectedKeys={selected} onSelectionChange={setSelected} placement="right top">
                {options.map(option => <MenuListBoxItem key={option.value} id={option.value}>
                    {option.label}
                  </MenuListBoxItem>)}
              </MenuAutocompleteListbox>
            </SubmenuTrigger>
          </Menu>
        </MenuTrigger>
      </Flex>;
  }
})`,...u.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
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
        <MenuAutocompleteListbox items={pokemon} placeholder="Search Pokemon..." virtualized>
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuAutocompleteListbox>
      </MenuTrigger>;
  }
})`,...l.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
        <MenuAutocompleteListbox items={pokemon} placeholder="Search Pokemon..." virtualized maxHeight="300px">
          {pokemon.map((p, index) => <MenuListBoxItem key={index} id={p.name}>
              {p.name.charAt(0).toLocaleUpperCase('en-US') + p.name.slice(1)}
            </MenuListBoxItem>)}
        </MenuAutocompleteListbox>
      </MenuTrigger>;
  }
})`,...c.input.parameters?.docs?.source}}};const ve=["Default","PreviewListbox","PreviewListboxMultiple","Submenu","Virtualized","VirtualizedMaxHeight"];export{o as Default,i as PreviewListbox,a as PreviewListboxMultiple,u as Submenu,l as Virtualized,c as VirtualizedMaxHeight,ve as __namedExportsOrder};
