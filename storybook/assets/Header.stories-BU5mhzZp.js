import{p as y,j as e}from"./iframe-D9Y8dNt-.js";import{H as d}from"./Header-BEm1-UvN.js";import{t as M}from"./index-DqCvV9X5.js";import{M as j,a as C,b as R}from"./Menu-Btncl4jv.js";import{M as b}from"./index-C1uQgXas.js";import{B as x}from"./BUIProvider-Cr5RdwXf.js";import{C as f}from"./Container-DwQJd2JX.js";import{B as v}from"./Button-CuZORt2U.js";import{B as U}from"./ButtonIcon-CnvEZ5cY.js";import{T as s}from"./Text-Csn8k-oH.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B_UN08HN.js";import"./getNodeText-RGW_EngD.js";import"./useLink-DINE9H4S.js";import"./useObjectRef-BR7bk4iL.js";import"./useFocusable-ECqsmbcs.js";import"./openLink-CijSEPaD.js";import"./usePress-DCE3TYhK.js";import"./Tabs-BUnHtpPm.js";import"./utils-BV3YmVrV.js";import"./SelectionManager-BWQWF3Vv.js";import"./useEvent-B8uYM54c.js";import"./SelectionIndicator-BEsUSylT.js";import"./context-DUq-D-3d.js";import"./Hidden-0cpAMPLz.js";import"./useControlledState-Dz6JT2sr.js";import"./useListState-DSiLPgBt.js";import"./animation-DawsA-5A.js";import"./useLabels-DllBgKlD.js";import"./useHasTabbableChild-G9vOrLBG.js";import"./useFocusRing-4Ef6SMlB.js";import"./linkUtils-tKDL5Jm1.js";import"./Autocomplete-GD9pBC4B.js";import"./RSPContexts-Dp810Hqb.js";import"./useLocalizedStringFormatter-CN7xFPOJ.js";import"./Button-BMHCZakJ.js";import"./Label-C7LqJhTE.js";import"./useLabel-Cjk020XP.js";import"./useButton-CGk7YItM.js";import"./Separator-DpqQiebW.js";import"./Input-a07GIbKX.js";import"./useFormReset-C6KIDBHP.js";import"./useField-CCbj5VSx.js";import"./Form-D2yhgzAN.js";import"./ListBox-CXyWOMqh.js";import"./Text-BJNy9mx0.js";import"./Dialog-DOtV98v_.js";import"./OverlayArrow-DqwF1lhg.js";import"./VisuallyHidden-ZVQOvKBU.js";import"./SearchField-CRUjsQNG.js";import"./FieldError-552c4uRy.js";import"./Virtualizer-4E5w7shS.js";import"./useFilter-YXo1tR1T.js";const a=y.meta({title:"Backstage UI/Header",component:d,parameters:{layout:"fullscreen"}}),T=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],w=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],g=t=>e.jsx(b,{children:e.jsx(x,{children:e.jsx(t,{})})}),L=[t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{width:"250px",position:"fixed",left:"var(--sb-panel-left)",top:"var(--sb-panel-top)",bottom:"var(--sb-panel-bottom)",backgroundColor:"var(--sb-sidebar-bg)",borderRadius:"var(--sb-panel-radius)",border:"var(--sb-sidebar-border)",borderRight:"var(--sb-sidebar-border-right)",zIndex:1}}),e.jsxs("div",{style:{paddingLeft:"var(--sb-content-padding-inline)",minHeight:"200vh"},children:[e.jsx(t,{}),e.jsx(f,{children:e.jsx(s,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."})})]})]})],r=a.story({args:{title:"Page Title"}}),o=a.story({args:{...r.input.args,tabs:T},decorators:[g]}),i=a.story({decorators:[g],render:()=>e.jsx(d,{...r.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"Custom action"}),e.jsxs(j,{children:[e.jsx(U,{variant:"tertiary",icon:e.jsx(M,{}),"aria-label":"More options"}),e.jsx(C,{placement:"bottom end",children:w.map(t=>e.jsx(R,{onAction:t.onClick,href:t.href,children:t.label},t.value))})]})]})})}),c=a.story({decorators:[g],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),m=a.story({decorators:[g],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),n=a.story({decorators:[g],render:()=>e.jsx(d,{...r.input.args,tabs:T,customActions:e.jsx(v,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}),p=n.extend({decorators:[...L]}),l=a.story({args:{title:"Route Matching Demo",tabs:[{id:"home",label:"Home",href:"/home"},{id:"mentorship",label:"Mentorship",href:"/mentorship",matchStrategy:"prefix"},{id:"catalog",label:"Catalog",href:"/catalog",matchStrategy:"prefix"},{id:"settings",label:"Settings",href:"/settings"}]},render:t=>e.jsx(b,{initialEntries:["/mentorship/events"],children:e.jsxs(x,{children:[e.jsx(d,{...t}),e.jsxs(f,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Current URL:"})," /mentorship/events"]}),e.jsx("br",{}),e.jsxs(s,{children:[`Notice how the "Mentorship" tab is active even though we're on a nested route. This is because it uses`," ",e.jsx("code",{children:'matchStrategy="prefix"'}),"."]}),e.jsx("br",{}),e.jsxs(s,{children:["• ",e.jsx("strong",{children:"Home"}),": exact matching (default) - not active"]}),e.jsxs(s,{children:["• ",e.jsx("strong",{children:"Mentorship"}),": prefix matching - IS active (URL starts with /mentorship)"]}),e.jsxs(s,{children:["• ",e.jsx("strong",{children:"Catalog"}),": prefix matching - not active"]}),e.jsxs(s,{children:["• ",e.jsx("strong",{children:"Settings"}),": exact matching (default) - not active"]})]})]})})}),h=a.story({args:{title:"Exact Matching Demo",tabs:[{id:"mentorship",label:"Mentorship",href:"/mentorship"},{id:"events",label:"Events",href:"/mentorship/events"},{id:"mentors",label:"Mentors",href:"/mentorship/mentors"}]},render:t=>e.jsx(b,{initialEntries:["/mentorship/events"],children:e.jsxs(x,{children:[e.jsx(d,{...t}),e.jsxs(f,{children:[e.jsxs(s,{children:[e.jsx("strong",{children:"Current URL:"})," /mentorship/events"]}),e.jsx("br",{}),e.jsx(s,{children:'With default exact matching, only the "Events" tab is active because it exactly matches the current URL. The "Mentorship" tab is not active even though the URL is under /mentorship.'})]})]})})}),u=a.story({args:{title:"Deep Nesting Demo",tabs:[{id:"catalog",label:"Catalog",href:"/catalog",matchStrategy:"prefix"},{id:"users",label:"Users",href:"/catalog/users",matchStrategy:"prefix"},{id:"components",label:"Components",href:"/catalog/components",matchStrategy:"prefix"}]},render:t=>e.jsx(b,{initialEntries:["/catalog/users/john/details"],children:e.jsxs(x,{children:[e.jsx(d,{...t}),e.jsxs(f,{children:[e.jsxs(s,{as:"p",children:[e.jsx("strong",{children:"Current URL:"})," /catalog/users/john/details"]}),e.jsx("br",{}),e.jsxs(s,{as:"p",children:["Active tab is ",e.jsx("strong",{children:"Users"})," because:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Catalog"}),": Matches since URL starts with /catalog"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Users"}),': Is active since URL starts with /catalog/users, and is more specific (has more url segments) than "Catalog"']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Components"}),": not active (URL doesn't start with /catalog/components)"]})]}),e.jsx(s,{as:"p",children:"This demonstrates how prefix matching works with deeply nested routes."})]})]})})});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Header title="Page Title" />;
`,...r.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const WithTabs = () => <Header tabs={tabs} />;
`,...o.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const WithCustomActions = () => (
  <Header
    {...Default.input.args}
    customActions={
      <>
        <Button>Custom action</Button>
        <MenuTrigger>
          <ButtonIcon
            variant="tertiary"
            icon={<RiMore2Line />}
            aria-label="More options"
          />
          <Menu placement="bottom end">
            {menuItems.map((option) => (
              <MenuItem
                key={option.value}
                onAction={option.onClick}
                href={option.href}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </MenuTrigger>
      </>
    }
  />
);
`,...i.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const WithBreadcrumbs = () => (
  <Header breadcrumbs={[{ label: "Home", href: "/" }]} />
);
`,...c.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const WithLongBreadcrumbs = () => (
  <Header
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "Long Breadcrumb Name", href: "/long-breadcrumb" },
    ]}
  />
);
`,...m.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const WithEverything = () => (
  <Header
    {...Default.input.args}
    tabs={tabs}
    customActions={<Button>Custom action</Button>}
    breadcrumbs={[{ label: "Home", href: "/" }]}
  />
);
`,...n.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{code:`const WithLayout = () => <Header />;
`,...p.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithTabsMatchingStrategies = () => (
  <MemoryRouter initialEntries={["/mentorship/events"]}>
    <BUIProvider>
      <Header
        title="Route Matching Demo"
        tabs={[
          {
            id: "home",
            label: "Home",
            href: "/home",
          },
          {
            id: "mentorship",
            label: "Mentorship",
            href: "/mentorship",
            matchStrategy: "prefix",
          },
          {
            id: "catalog",
            label: "Catalog",
            href: "/catalog",
            matchStrategy: "prefix",
          },
          {
            id: "settings",
            label: "Settings",
            href: "/settings",
          },
        ]}
      />
      <Container>
        <Text>
          <strong>Current URL:</strong>/mentorship/events
        </Text>
        <br />
        <Text>
          Notice how the "Mentorship" tab is active even though we're on a
          nested route. This is because it uses{" "}
          <code>matchStrategy="prefix"</code>.
        </Text>
        <br />
        <Text>
          • <strong>Home</strong>: exact matching (default) - not active
        </Text>
        <Text>
          • <strong>Mentorship</strong>: prefix matching - IS active (URL starts
          with /mentorship)
        </Text>
        <Text>
          • <strong>Catalog</strong>: prefix matching - not active
        </Text>
        <Text>
          • <strong>Settings</strong>: exact matching (default) - not active
        </Text>
      </Container>
    </BUIProvider>
  </MemoryRouter>
);
`,...l.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const WithTabsExactMatching = () => (
  <MemoryRouter initialEntries={["/mentorship/events"]}>
    <BUIProvider>
      <Header
        title="Exact Matching Demo"
        tabs={[
          {
            id: "mentorship",
            label: "Mentorship",
            href: "/mentorship",
          },
          {
            id: "events",
            label: "Events",
            href: "/mentorship/events",
          },
          {
            id: "mentors",
            label: "Mentors",
            href: "/mentorship/mentors",
          },
        ]}
      />
      <Container>
        <Text>
          <strong>Current URL:</strong>/mentorship/events
        </Text>
        <br />
        <Text>
          With default exact matching, only the "Events" tab is active because
          it exactly matches the current URL. The "Mentorship" tab is not active
          even though the URL is under /mentorship.
        </Text>
      </Container>
    </BUIProvider>
  </MemoryRouter>
);
`,...h.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const WithTabsPrefixMatchingDeep = () => (
  <MemoryRouter initialEntries={["/catalog/users/john/details"]}>
    <BUIProvider>
      <Header
        title="Deep Nesting Demo"
        tabs={[
          {
            id: "catalog",
            label: "Catalog",
            href: "/catalog",
            matchStrategy: "prefix",
          },
          {
            id: "users",
            label: "Users",
            href: "/catalog/users",
            matchStrategy: "prefix",
          },
          {
            id: "components",
            label: "Components",
            href: "/catalog/components",
            matchStrategy: "prefix",
          },
        ]}
      />
      <Container>
        <Text as="p">
          <strong>Current URL:</strong>/catalog/users/john/details
        </Text>
        <br />
        <Text as="p">
          Active tab is <strong>Users</strong>because:
        </Text>
        <ul>
          <li>
            <strong>Catalog</strong>: Matches since URL starts with /catalog
          </li>
          <li>
            <strong>Users</strong>: Is active since URL starts with
            /catalog/users, and is more specific (has more url segments) than
            "Catalog"
          </li>
          <li>
            <strong>Components</strong>: not active (URL doesn't start with
            /catalog/components)
          </li>
        </ul>
        <Text as="p">
          This demonstrates how prefix matching works with deeply nested routes.
        </Text>
      </Container>
    </BUIProvider>
  </MemoryRouter>
);
`,...u.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Page Title'
  }
})`,...r.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    tabs
  },
  decorators: [withRouter]
})`,...o.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => <Header {...Default.input.args} customActions={<>
          <Button>Custom action</Button>
          <MenuTrigger>
            <ButtonIcon variant="tertiary" icon={<RiMore2Line />} aria-label="More options" />
            <Menu placement="bottom end">
              {menuItems.map(option => <MenuItem key={option.value} onAction={option.onClick} href={option.href}>
                  {option.label}
                </MenuItem>)}
            </Menu>
          </MenuTrigger>
        </>} />
})`,...i.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }]
  }
})`,...c.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Long Breadcrumb Name',
      href: '/long-breadcrumb'
    }]
  }
})`,...m.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => <Header {...Default.input.args} tabs={tabs} customActions={<Button>Custom action</Button>} breadcrumbs={[{
    label: 'Home',
    href: '/'
  }]} />
})`,...n.input.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`WithEverything.extend({
  decorators: [...layoutDecorator]
})`,...p.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Route Matching Demo',
    tabs: [{
      id: 'home',
      label: 'Home',
      href: '/home'
    }, {
      id: 'mentorship',
      label: 'Mentorship',
      href: '/mentorship',
      matchStrategy: 'prefix'
    }, {
      id: 'catalog',
      label: 'Catalog',
      href: '/catalog',
      matchStrategy: 'prefix'
    }, {
      id: 'settings',
      label: 'Settings',
      href: '/settings'
    }]
  },
  render: args => <MemoryRouter initialEntries={['/mentorship/events']}>
      <BUIProvider>
        <Header {...args} />
        <Container>
          <Text>
            <strong>Current URL:</strong> /mentorship/events
          </Text>
          <br />
          <Text>
            Notice how the "Mentorship" tab is active even though we're on a
            nested route. This is because it uses{' '}
            <code>matchStrategy="prefix"</code>.
          </Text>
          <br />
          <Text>
            • <strong>Home</strong>: exact matching (default) - not active
          </Text>
          <Text>
            • <strong>Mentorship</strong>: prefix matching - IS active (URL
            starts with /mentorship)
          </Text>
          <Text>
            • <strong>Catalog</strong>: prefix matching - not active
          </Text>
          <Text>
            • <strong>Settings</strong>: exact matching (default) - not active
          </Text>
        </Container>
      </BUIProvider>
    </MemoryRouter>
})`,...l.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Exact Matching Demo',
    tabs: [{
      id: 'mentorship',
      label: 'Mentorship',
      href: '/mentorship'
    }, {
      id: 'events',
      label: 'Events',
      href: '/mentorship/events'
    }, {
      id: 'mentors',
      label: 'Mentors',
      href: '/mentorship/mentors'
    }]
  },
  render: args => <MemoryRouter initialEntries={['/mentorship/events']}>
      <BUIProvider>
        <Header {...args} />
        <Container>
          <Text>
            <strong>Current URL:</strong> /mentorship/events
          </Text>
          <br />
          <Text>
            With default exact matching, only the "Events" tab is active because
            it exactly matches the current URL. The "Mentorship" tab is not
            active even though the URL is under /mentorship.
          </Text>
        </Container>
      </BUIProvider>
    </MemoryRouter>
})`,...h.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Deep Nesting Demo',
    tabs: [{
      id: 'catalog',
      label: 'Catalog',
      href: '/catalog',
      matchStrategy: 'prefix'
    }, {
      id: 'users',
      label: 'Users',
      href: '/catalog/users',
      matchStrategy: 'prefix'
    }, {
      id: 'components',
      label: 'Components',
      href: '/catalog/components',
      matchStrategy: 'prefix'
    }]
  },
  render: args => <MemoryRouter initialEntries={['/catalog/users/john/details']}>
      <BUIProvider>
        <Header {...args} />
        <Container>
          <Text as="p">
            <strong>Current URL:</strong> /catalog/users/john/details
          </Text>
          <br />
          <Text as="p">
            Active tab is <strong>Users</strong> because:
          </Text>
          <ul>
            <li>
              <strong>Catalog</strong>: Matches since URL starts with /catalog
            </li>
            <li>
              <strong>Users</strong>: Is active since URL starts with
              /catalog/users, and is more specific (has more url segments) than
              "Catalog"
            </li>
            <li>
              <strong>Components</strong>: not active (URL doesn't start with
              /catalog/components)
            </li>
          </ul>
          <Text as="p">
            This demonstrates how prefix matching works with deeply nested
            routes.
          </Text>
        </Container>
      </BUIProvider>
    </MemoryRouter>
})`,...u.input.parameters?.docs?.source}}};const Le=["Default","WithTabs","WithCustomActions","WithBreadcrumbs","WithLongBreadcrumbs","WithEverything","WithLayout","WithTabsMatchingStrategies","WithTabsExactMatching","WithTabsPrefixMatchingDeep"];export{r as Default,c as WithBreadcrumbs,i as WithCustomActions,n as WithEverything,p as WithLayout,m as WithLongBreadcrumbs,o as WithTabs,h as WithTabsExactMatching,l as WithTabsMatchingStrategies,u as WithTabsPrefixMatchingDeep,Le as __namedExportsOrder};
