import{p as L,r as p,j as e}from"./iframe-BfKy45FJ.js";import{M as m,f as d,g as x,a as k,b as v,S as y}from"./Menu-DGJze82o.js";import{M as j}from"./index-iCFn_EoD.js";import{B}from"./BUIProvider-CkXaGfx4.js";import{F as h}from"./Flex-D-5MCpdY.js";import{T as S}from"./Text-CHbg1CQL.js";import{B as g}from"./Button-DOEsURbZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Autocomplete-8P1tNkIH.js";import"./RSPContexts-BX0XRw9X.js";import"./utils-CKMp4gEN.js";import"./useObjectRef-BfVGDA57.js";import"./useFocusable-BkskNhnN.js";import"./openLink-Du3SpVTa.js";import"./useLabels-DHC0tbnH.js";import"./useEvent-ApEptYeH.js";import"./SelectionManager-VFU7tvQk.js";import"./SelectionIndicator-Ba_E2sWv.js";import"./context-D5pZQn02.js";import"./usePress-NzTwl-xu.js";import"./Hidden-DyyLbmUq.js";import"./useControlledState-ZkU67DHc.js";import"./useLocalizedStringFormatter-C7KbSgA3.js";import"./Button-CyOgZfW2.js";import"./Label-BRDMhhSK.js";import"./useLabel-CtiYnnIc.js";import"./useButton-qSjO7LoT.js";import"./useFocusRing-DwOqrvqE.js";import"./Separator-BtHzStIm.js";import"./Input-BCYlv5V1.js";import"./useFormReset-nhKDOLjg.js";import"./useField-DsHlIiJc.js";import"./Form-Bkam98N3.js";import"./ListBox-DfQg8Pfd.js";import"./Text-DF_8UG0h.js";import"./useListState-B5fhQnH9.js";import"./Dialog-Bgs6Jkt4.js";import"./OverlayArrow-D-mW8yFf.js";import"./animation-Bft7VOeV.js";import"./VisuallyHidden-9cDhCuiH.js";import"./SearchField-BFj0r_jk.js";import"./FieldError-B-AiMeDF.js";import"./Virtualizer-C7f95rJo.js";import"./index-Cd7167-5.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-DWeVoSXd.js";import"./useFilter-e1o0NgCA.js";const M=L.meta({title:"Backstage UI/MenuAutocompleteListBox",component:m,decorators:[n=>e.jsx(j,{children:e.jsx(B,{children:e.jsx(n,{})})})]}),s=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Cherry",value:"cherry"},{label:"Durian",value:"durian"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],o=M.story({args:{children:null},render:()=>{const[n,r]=p.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"start",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{selectedKeys:n,onSelectionChange:r,children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})}}),i=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"center",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{selectedKeys:n,onSelectionChange:r,children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})}}),a=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState(new Set([s[2].value,s[3].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"center",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{selectionMode:"multiple",selectedKeys:n,onSelectionChange:r,children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})}}),u=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState(new Set([s[2].value]));return e.jsxs(h,{direction:"column",gap:"2",align:"start",children:[e.jsxs(S,{children:["Selected: ",Array.from(n).join(", ")]}),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsxs(k,{children:[e.jsx(v,{children:"Edit"}),e.jsx(v,{children:"Duplicate"}),e.jsxs(y,{children:[e.jsx(v,{children:"Submenu"}),e.jsx(d,{selectedKeys:n,onSelectionChange:r,placement:"right top",children:s.map(t=>e.jsx(x,{id:t.value,children:t.label},t.value))})]})]})]})]})}}),l=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState([]);return p.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{r(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{items:n,placeholder:"Search Pokemon...",virtualized:!0,children:n.map((t,b)=>e.jsx(x,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},b))})]})}}),c=M.story({args:{...o.input.args},render:()=>{const[n,r]=p.useState([]);return p.useEffect(()=>{fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(t=>t.json()).then(t=>{r(t.results)}).catch(t=>{console.error("Error fetching Pokemon:",t)})},[]),e.jsxs(m,{isOpen:!0,children:[e.jsx(g,{"aria-label":"Menu",children:"Menu"}),e.jsx(d,{items:n,placeholder:"Search Pokemon...",virtualized:!0,maxHeight:"300px",children:n.map((t,b)=>e.jsx(x,{id:t.name,children:t.name.charAt(0).toLocaleUpperCase("en-US")+t.name.slice(1)},b))})]})}});o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const Default = () => {
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
})`,...c.input.parameters?.docs?.source}}};const be=["Default","PreviewListbox","PreviewListboxMultiple","Submenu","Virtualized","VirtualizedMaxHeight"];export{o as Default,i as PreviewListbox,a as PreviewListboxMultiple,u as Submenu,l as Virtualized,c as VirtualizedMaxHeight,be as __namedExportsOrder};
