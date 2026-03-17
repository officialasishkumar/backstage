import{p as U,j as e,r as T,B as f}from"./iframe-Bu39PmLp.js";import{S as t}from"./SearchField-BhUKtAWl.js";import{$ as P}from"./Form-WFV3DhKQ.js";import{U as A,d as W}from"./index-D-ffUtG1.js";import{F as o}from"./Flex-CYWDkcQ-.js";import{P as E}from"./PluginHeader-C_6Fvjz8.js";import{M as H}from"./index-B4-sCELz.js";import{B as N}from"./BUIProvider-fqCixX3i.js";import{F as q}from"./FieldLabel-Cm9QEIPf.js";import{B as w}from"./ButtonIcon-uMp67mUZ.js";import{B as D}from"./Button-BRPNUXOy.js";import{T as V}from"./Text-D09T7r6W.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-hbC-XBEi.js";import"./utils-Ci5AW6X-.js";import"./useObjectRef-BSJLXEhT.js";import"./Label-6-0UlA3t.js";import"./Hidden-CV-jl2FI.js";import"./useFocusable-C8Opf56f.js";import"./openLink-CfoeYFVv.js";import"./useLabel-z0zu4-3c.js";import"./useLabels-B8TGkLRU.js";import"./context-BdzrVytx.js";import"./useButton-BNscdo38.js";import"./usePress-DUlmfUsL.js";import"./useFocusRing-PIzjQdr3.js";import"./Input-DTbK87oW.js";import"./useFormReset-Y1rz8it6.js";import"./useControlledState-BXkttDc4.js";import"./useField-DNiQTBc2.js";import"./SearchField-CZvnJ_Vp.js";import"./FieldError-CCo4VRtg.js";import"./Text-SzkOlHOq.js";import"./RSPContexts-DQQ3KY7W.js";import"./useLocalizedStringFormatter-CHWSsnHn.js";import"./FieldError-BMpRHINA.js";import"./Link-DXPMHgv9.js";import"./useLink--h2DZfCt.js";import"./Tabs-71BGbhbM.js";import"./SelectionManager-CFHeKMrY.js";import"./useEvent-j9JKdwo1.js";import"./SelectionIndicator-O80lk4Ls.js";import"./useListState-C-P3xswn.js";import"./animation-B7Fj6SuW.js";import"./useHasTabbableChild-CGRdiFOr.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-wOZ53vkC.js";const r=U.meta({title:"Backstage UI/SearchField",component:t,argTypes:{isRequired:{control:"boolean"},icon:{control:"object"},placeholder:{control:"text"}}}),s=r.story({args:{name:"url",style:{maxWidth:"300px"},"aria-label":"Search"}}),c=r.story({args:{...s.input.args},render:a=>e.jsxs(o,{direction:"row",gap:"4",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(t,{...a,size:"small"}),e.jsx(t,{...a,size:"medium"})]})}),u=r.story({args:{...s.input.args,defaultValue:"https://example.com"}}),i=r.story({args:{...s.input.args,label:"Label"}}),p=r.story({args:{...i.input.args,description:"Description"}}),d=r.story({args:{...i.input.args,isRequired:!0}}),m=r.story({args:{...s.input.args,isDisabled:!0}}),l=r.story({args:{...s.input.args},render:a=>e.jsx(t,{...a,placeholder:"Enter a URL",size:"small",icon:e.jsx(A,{})})}),x=r.story({args:{...l.input.args,isDisabled:!0}}),h=r.story({args:{...i.input.args},render:a=>e.jsx(P,{validationErrors:{url:"Invalid URL"},children:e.jsx(t,{...a})})}),g=r.story({args:{...i.input.args,validate:a=>a==="admin"?"Nice try!":null}}),S=r.story({render:()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{htmlFor:"custom-field",id:"custom-field-label",label:"Custom Field"}),e.jsx(t,{id:"custom-field","aria-labelledby":"custom-field-label",name:"custom-field",defaultValue:"Custom Field"})]})}),n=r.story({args:{...s.input.args,startCollapsed:!0},render:a=>e.jsxs(o,{direction:"column",gap:"4",children:[e.jsxs(o,{direction:"row",gap:"4",children:[e.jsx(t,{...a,size:"small"}),e.jsx(t,{...a,size:"medium"})]}),e.jsx(t,{...a,size:"small"})]})}),y=r.story({args:{...n.input.args,defaultValue:"https://example.com"},render:a=>e.jsx(t,{...a,size:"small"})}),b=r.story({decorators:[a=>e.jsx(H,{children:e.jsx(N,{children:e.jsx(a,{})})})],render:a=>e.jsx(e.Fragment,{children:e.jsx(E,{title:"Title",customActions:e.jsxs(e.Fragment,{children:[e.jsx(w,{"aria-label":"Cactus icon button",icon:e.jsx(W,{}),size:"small",variant:"secondary"}),e.jsx(t,{"aria-label":"Search",...a,size:"small"}),e.jsx(w,{"aria-label":"Cactus icon button",icon:e.jsx(W,{}),size:"small",variant:"secondary"})]})})})}),F=r.story({args:{...n.input.args},decorators:[a=>e.jsx(H,{children:e.jsx(N,{children:e.jsx(a,{})})})],render:a=>e.jsx(e.Fragment,{children:e.jsx(E,{title:"Title",customActions:e.jsxs(e.Fragment,{children:[e.jsx(w,{"aria-label":"Cactus icon button",icon:e.jsx(W,{}),size:"small",variant:"secondary"}),e.jsx(t,{...a,size:"small"}),e.jsx(w,{"aria-label":"Cactus icon button",icon:e.jsx(W,{}),size:"small",variant:"secondary"})]})})})}),C=r.story({args:{...n.input.args},render:a=>e.jsxs(o,{direction:"row",gap:"2",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(t,{...a,size:"small"}),e.jsx(w,{"aria-label":"Cactus icon button",icon:e.jsx(W,{}),size:"small",variant:"secondary"}),e.jsx(D,{size:"small",variant:"secondary",children:"Hello world"}),e.jsx(t,{...a,size:"medium"}),e.jsx(w,{"aria-label":"Cactus icon button",icon:e.jsx(W,{}),size:"medium",variant:"secondary"}),e.jsx(D,{size:"medium",variant:"secondary",children:"Hello world"})]})}),z=r.story({args:{...n.input.args},render:a=>{const R=I=>{console.log("Search value:",I)};return e.jsx(o,{direction:"row",gap:"2",style:{width:"100%",maxWidth:"600px"},children:e.jsx(t,{...a,onChange:R,size:"small"})})}}),j=r.story({args:{...n.input.args},render:function(R){const[I,L]=T.useState("");return e.jsx(o,{direction:"row",gap:"2",style:{width:"100%",maxWidth:"600px"},children:e.jsx(t,{...R,size:"small",value:I,onChange:L})})}}),v=r.story({args:{...n.input.args},render:function(R){const[I,L]=T.useState("Component");return e.jsx(o,{direction:"row",gap:"2",style:{width:"100%",maxWidth:"600px"},children:e.jsx(t,{...R,size:"small",value:I,onChange:L})})}}),B=r.story({render:()=>e.jsxs(o,{direction:"column",gap:"4",children:[e.jsx("div",{style:{maxWidth:"600px"},children:"SearchField automatically detects its parent bg context and increments the neutral level by 1. No prop is needed — it's fully automatic."}),e.jsxs(f,{bg:"neutral",p:"4",children:[e.jsx(V,{children:"Neutral 1 container"}),e.jsx(o,{mt:"2",style:{maxWidth:"300px"},children:e.jsx(t,{"aria-label":"Search",size:"small"})})]}),e.jsx(f,{bg:"neutral",children:e.jsxs(f,{bg:"neutral",p:"4",children:[e.jsx(V,{children:"Neutral 2 container"}),e.jsx(o,{mt:"2",style:{maxWidth:"300px"},children:e.jsx(t,{"aria-label":"Search",size:"small"})})]})}),e.jsx(f,{bg:"neutral",children:e.jsx(f,{bg:"neutral",children:e.jsxs(f,{bg:"neutral",p:"4",children:[e.jsx(V,{children:"Neutral 3 container"}),e.jsx(o,{mt:"2",style:{maxWidth:"300px"},children:e.jsx(t,{"aria-label":"Search",size:"small"})})]})})})]})});s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const Default = () => (
  <SearchField
    name="url"
    style={{
      maxWidth: "300px",
    }}
    aria-label="Search"
  />
);
`,...s.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Sizes = () => (
  <Flex direction="row" gap="4" style={{ width: "100%", maxWidth: "600px" }}>
    <SearchField size="small" />
    <SearchField size="medium" />
  </Flex>
);
`,...c.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const DefaultValue = () => <SearchField defaultValue="https://example.com" />;
`,...u.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const WithLabel = () => <SearchField label="Label" />;
`,...i.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{code:`const WithDescription = () => <SearchField description="Description" />;
`,...p.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const Required = () => <SearchField isRequired />;
`,...d.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const Disabled = () => <SearchField isDisabled />;
`,...m.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithIcon = () => (
  <SearchField placeholder="Enter a URL" size="small" icon={<RiEBike2Line />} />
);
`,...l.input.parameters?.docs?.source}}};x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{code:`const DisabledWithIcon = () => <SearchField isDisabled />;
`,...x.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const ShowError = () => (
  <Form validationErrors={{ url: "Invalid URL" }}>
    <SearchField />
  </Form>
);
`,...h.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{code:`const Validation = () => (
  <SearchField validate={(value) => (value === "admin" ? "Nice try!" : null)} />
);
`,...g.input.parameters?.docs?.source}}};S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{code:`const CustomField = () => (
  <>
    <FieldLabel
      htmlFor="custom-field"
      id="custom-field-label"
      label="Custom Field"
    />
    <SearchField
      id="custom-field"
      aria-labelledby="custom-field-label"
      name="custom-field"
      defaultValue="Custom Field"
    />
  </>
);
`,...S.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const StartCollapsed = () => (
  <Flex direction="column" gap="4">
    <Flex direction="row" gap="4">
      <SearchField startCollapsed size="small" />
      <SearchField startCollapsed size="medium" />
    </Flex>
    <SearchField startCollapsed size="small" />
  </Flex>
);
`,...n.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{code:`const StartCollapsedWithValue = () => (
  <SearchField defaultValue="https://example.com" size="small" />
);
`,...y.input.parameters?.docs?.source}}};b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{code:`const InHeader = (args) => (
  <>
    <PluginHeader
      title="Title"
      customActions={
        <>
          <ButtonIcon
            aria-label="Cactus icon button"
            icon={<RiCactusLine />}
            size="small"
            variant="secondary"
          />
          <SearchField aria-label="Search" {...args} size="small" />
          <ButtonIcon
            aria-label="Cactus icon button"
            icon={<RiCactusLine />}
            size="small"
            variant="secondary"
          />
        </>
      }
    />
  </>
);
`,...b.input.parameters?.docs?.source}}};F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{code:`const StartCollapsedInHeader = (args) => (
  <>
    <PluginHeader
      title="Title"
      customActions={
        <>
          <ButtonIcon
            aria-label="Cactus icon button"
            icon={<RiCactusLine />}
            size="small"
            variant="secondary"
          />
          <SearchField {...args} size="small" />
          <ButtonIcon
            aria-label="Cactus icon button"
            icon={<RiCactusLine />}
            size="small"
            variant="secondary"
          />
        </>
      }
    />
  </>
);
`,...F.input.parameters?.docs?.source}}};C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{code:`const StartCollapsedWithButtons = () => (
  <Flex direction="row" gap="2" style={{ width: "100%", maxWidth: "600px" }}>
    <SearchField size="small" />
    <ButtonIcon
      aria-label="Cactus icon button"
      icon={<RiCactusLine />}
      size="small"
      variant="secondary"
    />
    <Button size="small" variant="secondary">
      Hello world
    </Button>
    <SearchField size="medium" />
    <ButtonIcon
      aria-label="Cactus icon button"
      icon={<RiCactusLine />}
      size="medium"
      variant="secondary"
    />
    <Button size="medium" variant="secondary">
      Hello world
    </Button>
  </Flex>
);
`,...C.input.parameters?.docs?.source}}};z.input.parameters={...z.input.parameters,docs:{...z.input.parameters?.docs,source:{code:`const StartCollapsedWithOnChange = () => {
  const handleChange = (value: string) => {
    console.log("Search value:", value);
  };

  return (
    <Flex direction="row" gap="2" style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField onChange={handleChange} size="small" />
    </Flex>
  );
};
`,...z.input.parameters?.docs?.source}}};j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{code:`const StartCollapsedControlledEmpty = () => {
  const [value, setValue] = useState("");

  return (
    <Flex direction="row" gap="2" style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField size="small" value={value} onChange={setValue} />
    </Flex>
  );
};
`,...j.input.parameters?.docs?.source}}};v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{code:`const StartCollapsedControlledWithValue = () => {
  const [value, setValue] = useState("Component");

  return (
    <Flex direction="row" gap="2" style={{ width: "100%", maxWidth: "600px" }}>
      <SearchField size="small" value={value} onChange={setValue} />
    </Flex>
  );
};
`,...v.input.parameters?.docs?.source}}};B.input.parameters={...B.input.parameters,docs:{...B.input.parameters?.docs,source:{code:`const AutoBg = () => (
  <Flex direction="column" gap="4">
    <div style={{ maxWidth: "600px" }}>
      SearchField automatically detects its parent bg context and increments the
      neutral level by 1. No prop is needed — it's fully automatic.
    </div>
    <Box bg="neutral" p="4">
      <Text>Neutral 1 container</Text>
      <Flex mt="2" style={{ maxWidth: "300px" }}>
        <SearchField aria-label="Search" size="small" />
      </Flex>
    </Box>
    <Box bg="neutral">
      <Box bg="neutral" p="4">
        <Text>Neutral 2 container</Text>
        <Flex mt="2" style={{ maxWidth: "300px" }}>
          <SearchField aria-label="Search" size="small" />
        </Flex>
      </Box>
    </Box>
    <Box bg="neutral">
      <Box bg="neutral">
        <Box bg="neutral" p="4">
          <Text>Neutral 3 container</Text>
          <Flex mt="2" style={{ maxWidth: "300px" }}>
            <SearchField aria-label="Search" size="small" />
          </Flex>
        </Box>
      </Box>
    </Box>
  </Flex>
);
`,...B.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    name: 'url',
    style: {
      maxWidth: '300px'
    },
    'aria-label': 'Search'
  }
})`,...s.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => <Flex direction="row" gap="4" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchField {...args} size="small" />
      <SearchField {...args} size="medium" />
    </Flex>
})`,...c.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    defaultValue: 'https://example.com'
  }
})`,...u.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    label: 'Label'
  }
})`,...i.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...WithLabel.input.args,
    description: 'Description'
  }
})`,...p.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...WithLabel.input.args,
    isRequired: true
  }
})`,...d.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    isDisabled: true
  }
})`,...m.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => <SearchField {...args} placeholder="Enter a URL" size="small" icon={<RiEBike2Line />} />
})`,...l.input.parameters?.docs?.source}}};x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...WithIcon.input.args,
    isDisabled: true
  }
})`,...x.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...WithLabel.input.args
  },
  render: args => <Form validationErrors={{
    url: 'Invalid URL'
  }}>
      <SearchField {...args} />
    </Form>
})`,...h.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...WithLabel.input.args,
    validate: value => value === 'admin' ? 'Nice try!' : null
  }
})`,...g.input.parameters?.docs?.source}}};S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <>
      <FieldLabel htmlFor="custom-field" id="custom-field-label" label="Custom Field" />
      <SearchField id="custom-field" aria-labelledby="custom-field-label" name="custom-field" defaultValue="Custom Field" />
    </>
})`,...S.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    startCollapsed: true
  },
  render: args => <Flex direction="column" gap="4">
      <Flex direction="row" gap="4">
        <SearchField {...args} size="small" />
        <SearchField {...args} size="medium" />
      </Flex>
      <SearchField {...args} size="small" />
    </Flex>
})`,...n.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...StartCollapsed.input.args,
    defaultValue: 'https://example.com'
  },
  render: args => <SearchField {...args} size="small" />
})`,...y.input.parameters?.docs?.source}}};b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [Story => <MemoryRouter>
        <BUIProvider>
          <Story />
        </BUIProvider>
      </MemoryRouter>],
  render: args => <>
      <PluginHeader title="Title" customActions={<>
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
            <SearchField aria-label="Search" {...args} size="small" />
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
          </>} />
    </>
})`,...b.input.parameters?.docs?.source}}};F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...StartCollapsed.input.args
  },
  decorators: [Story => <MemoryRouter>
        <BUIProvider>
          <Story />
        </BUIProvider>
      </MemoryRouter>],
  render: args => <>
      <PluginHeader title="Title" customActions={<>
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
            <SearchField {...args} size="small" />
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
          </>} />
    </>
})`,...F.input.parameters?.docs?.source}}};C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...StartCollapsed.input.args
  },
  render: args => <Flex direction="row" gap="2" style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <SearchField {...args} size="small" />
      <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
      <Button size="small" variant="secondary">
        Hello world
      </Button>
      <SearchField {...args} size="medium" />
      <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="medium" variant="secondary" />
      <Button size="medium" variant="secondary">
        Hello world
      </Button>
    </Flex>
})`,...C.input.parameters?.docs?.source}}};z.input.parameters={...z.input.parameters,docs:{...z.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...StartCollapsed.input.args
  },
  render: args => {
    const handleChange = (value: string) => {
      console.log('Search value:', value);
    };
    return <Flex direction="row" gap="2" style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <SearchField {...args} onChange={handleChange} size="small" />
      </Flex>;
  }
})`,...z.input.parameters?.docs?.source}}};j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...StartCollapsed.input.args
  },
  render: function Render(args) {
    const [value, setValue] = useState('');
    return <Flex direction="row" gap="2" style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <SearchField {...args} size="small" value={value} onChange={setValue} />
      </Flex>;
  }
})`,...j.input.parameters?.docs?.source}}};v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...StartCollapsed.input.args
  },
  render: function Render(args) {
    const [value, setValue] = useState('Component');
    return <Flex direction="row" gap="2" style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <SearchField {...args} size="small" value={value} onChange={setValue} />
      </Flex>;
  }
})`,...v.input.parameters?.docs?.source}}};B.input.parameters={...B.input.parameters,docs:{...B.input.parameters?.docs,source:{originalSource:`meta.story({
  render: () => <Flex direction="column" gap="4">
      <div style={{
      maxWidth: '600px'
    }}>
        SearchField automatically detects its parent bg context and increments
        the neutral level by 1. No prop is needed — it's fully automatic.
      </div>
      <Box bg="neutral" p="4">
        <Text>Neutral 1 container</Text>
        <Flex mt="2" style={{
        maxWidth: '300px'
      }}>
          <SearchField aria-label="Search" size="small" />
        </Flex>
      </Box>
      <Box bg="neutral">
        <Box bg="neutral" p="4">
          <Text>Neutral 2 container</Text>
          <Flex mt="2" style={{
          maxWidth: '300px'
        }}>
            <SearchField aria-label="Search" size="small" />
          </Flex>
        </Box>
      </Box>
      <Box bg="neutral">
        <Box bg="neutral">
          <Box bg="neutral" p="4">
            <Text>Neutral 3 container</Text>
            <Flex mt="2" style={{
            maxWidth: '300px'
          }}>
              <SearchField aria-label="Search" size="small" />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
})`,...B.input.parameters?.docs?.source}}};const Ee=["Default","Sizes","DefaultValue","WithLabel","WithDescription","Required","Disabled","WithIcon","DisabledWithIcon","ShowError","Validation","CustomField","StartCollapsed","StartCollapsedWithValue","InHeader","StartCollapsedInHeader","StartCollapsedWithButtons","StartCollapsedWithOnChange","StartCollapsedControlledEmpty","StartCollapsedControlledWithValue","AutoBg"];export{B as AutoBg,S as CustomField,s as Default,u as DefaultValue,m as Disabled,x as DisabledWithIcon,b as InHeader,d as Required,h as ShowError,c as Sizes,n as StartCollapsed,j as StartCollapsedControlledEmpty,v as StartCollapsedControlledWithValue,F as StartCollapsedInHeader,C as StartCollapsedWithButtons,z as StartCollapsedWithOnChange,y as StartCollapsedWithValue,g as Validation,p as WithDescription,l as WithIcon,i as WithLabel,Ee as __namedExportsOrder};
