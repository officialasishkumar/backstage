import{p as M,j as e,M as g}from"./iframe-CY6p7HGj.js";import{P as u}from"./PluginHeader-CxUmHUI_.js";import{b as j,c as R,g as C,t as U}from"./index-BfGdkzHo.js";import{B as x}from"./BUIProvider-B87mDlDM.js";import{C as b}from"./Container-B2NcJlrD.js";import{B as f}from"./ButtonIcon-D9jMsfxE.js";import{M as I,a as L,b as w}from"./Menu-cJgiHiT-.js";import{T as t}from"./Text-6JNPBzic.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CwnLZVuV.js";import"./getNodeText-Bz62Iy7G.js";import"./useLink-DLygO-qq.js";import"./useObjectRef-B2AjDpdy.js";import"./useFocusable-C6YNZBAX.js";import"./openLink-D0hf0orl.js";import"./usePress-BYiNTSdE.js";import"./textSelection-2lntyfVX.js";import"./Tabs-CV3XeEWj.js";import"./utils-D5XzX9Cq.js";import"./SelectionManager-BGKDaXVQ.js";import"./useEvent-BayAtDVR.js";import"./SelectionIndicator-wiTtDSxe.js";import"./context-DCpJGGDB.js";import"./Hidden-hZ6rImco.js";import"./useControlledState-Cf6tZT7x.js";import"./useListState-DTbulIaV.js";import"./animation-Ca_zbsuV.js";import"./useLabels-CnWkm5k-.js";import"./useHasTabbableChild-g6dt5tdU.js";import"./useFocusRing-BZ77H15a.js";import"./linkUtils-tKDL5Jm1.js";import"./Button-bFuSebXI.js";import"./Label-BE618E0h.js";import"./useNumberFormatter-Dzr0pJM0.js";import"./useLabel-B_Lop7rQ.js";import"./useButton-yWOKo3wb.js";import"./Autocomplete-CKxWTcW7.js";import"./RSPContexts-BWSJFemX.js";import"./useLocalizedStringFormatter-DJnrKnIs.js";import"./Separator-B9oY77xC.js";import"./Input-SRqiDa_j.js";import"./useFormReset-Ao63ou2I.js";import"./useField-D-0asg-q.js";import"./Form-B_j665yH.js";import"./ListBox-C4dP5FkS.js";import"./Text-CtkMnc2L.js";import"./Dialog-QlbpTyOh.js";import"./OverlayArrow-DpMV_jxH.js";import"./VisuallyHidden-BSKIM0Ta.js";import"./SearchField-D0mZ5dWC.js";import"./FieldError-DYSn_E8h.js";import"./Virtualizer-Bt3eYbSd.js";import"./useFilter-BD5STqX9.js";const n=M.meta({title:"Backstage UI/PluginHeader",component:u,parameters:{layout:"fullscreen"}}),y=r=>e.jsx(g,{children:e.jsx(x,{children:e.jsx(r,{})})}),v=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],P=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],a=n.story({args:{},decorators:[y]}),i=n.story({args:{tabs:v},decorators:[y]}),s=n.story({args:{},decorators:[y],render:r=>e.jsx(u,{...r,customActions:e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"secondary",icon:e.jsx(j,{})}),e.jsx(f,{variant:"secondary",icon:e.jsx(R,{})}),e.jsx(f,{variant:"secondary",icon:e.jsx(C,{})}),e.jsxs(I,{children:[e.jsx(f,{variant:"secondary",icon:e.jsx(U,{})}),e.jsx(L,{placement:"bottom end",children:P.map(T=>e.jsx(w,{onAction:T.onClick,href:T.href,children:T.label},T.value))})]})]})})}),o=s.extend({args:{tabs:v}}),c=n.story({args:{tabs:v},render:r=>e.jsx(g,{initialEntries:["/campaigns"],children:e.jsxs(x,{children:[e.jsx(u,{...r}),e.jsxs(b,{mt:"6",children:[e.jsxs(t,{as:"p",children:["Current URL is mocked to be: ",e.jsx("strong",{children:"/campaigns"})]}),e.jsx(t,{as:"p",children:'Notice how the "Campaigns" tab is selected (highlighted) because it matches the current path.'})]})]})})}),m=n.story({args:{tabs:v},render:r=>e.jsx(g,{initialEntries:["/integrations"],children:e.jsxs(x,{children:[e.jsx(u,{...r}),e.jsxs(b,{mt:"6",children:[e.jsxs(t,{as:"p",children:["Current URL is mocked to be: ",e.jsx("strong",{children:"/integrations"})]}),e.jsx(t,{as:"p",children:'Notice how the "Integrations" tab is selected (highlighted) because it matches the current path.'})]})]})})}),p=n.story({args:{tabs:v},render:r=>e.jsx(g,{initialEntries:["/some-other-page"],children:e.jsxs(x,{children:[e.jsx(u,{...r}),e.jsxs(b,{mt:"6",children:[e.jsxs(t,{as:"p",children:["Current URL is mocked to be: ",e.jsx("strong",{children:"/some-other-page"})]}),e.jsx(t,{as:"p",children:"No tab is selected because the current path doesn't match any tab's href."}),e.jsx(t,{as:"p",children:`Tabs without href (like "Overview", "Checks", "Tracks") fall back to React Aria's internal state.`})]})]})})}),h=n.story({args:{title:"Route Matching Demo",tabs:[{id:"home",label:"Home",href:"/home"},{id:"mentorship",label:"Mentorship",href:"/mentorship",matchStrategy:"prefix"},{id:"catalog",label:"Catalog",href:"/catalog",matchStrategy:"prefix"},{id:"settings",label:"Settings",href:"/settings"}]},render:r=>e.jsx(g,{initialEntries:["/mentorship/events"],children:e.jsxs(x,{children:[e.jsx(u,{...r}),e.jsxs(b,{mt:"6",children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Current URL:"})," /mentorship/events"]}),e.jsx("br",{}),e.jsxs(t,{children:[`Notice how the "Mentorship" tab is active even though we're on a nested route. This is because it uses`," ",e.jsx("code",{children:'matchStrategy="prefix"'}),"."]}),e.jsx("br",{}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Home"}),": exact matching (default) - not active"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Mentorship"}),": prefix matching - IS active (URL starts with /mentorship)"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Catalog"}),": prefix matching - not active"]}),e.jsxs(t,{children:["• ",e.jsx("strong",{children:"Settings"}),": exact matching (default) - not active"]})]})]})})}),l=n.story({args:{title:"Exact Matching Demo",tabs:[{id:"mentorship",label:"Mentorship",href:"/mentorship"},{id:"events",label:"Events",href:"/mentorship/events"},{id:"mentors",label:"Mentors",href:"/mentorship/mentors"}]},render:r=>e.jsx(g,{initialEntries:["/mentorship/events"],children:e.jsxs(x,{children:[e.jsx(u,{...r}),e.jsxs(b,{mt:"6",children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Current URL:"})," /mentorship/events"]}),e.jsx("br",{}),e.jsx(t,{children:'With default exact matching, only the "Events" tab is active because it exactly matches the current URL. The "Mentorship" tab is not active even though the URL is under /mentorship.'})]})]})})}),d=n.story({args:{title:"Deep Nesting Demo",tabs:[{id:"catalog",label:"Catalog",href:"/catalog",matchStrategy:"prefix"},{id:"users",label:"Users",href:"/catalog/users",matchStrategy:"prefix"},{id:"components",label:"Components",href:"/catalog/components",matchStrategy:"prefix"}]},render:r=>e.jsx(g,{initialEntries:["/catalog/users/john/details"],children:e.jsxs(x,{children:[e.jsx(u,{...r}),e.jsxs(b,{mt:"6",children:[e.jsxs(t,{as:"p",children:[e.jsx("strong",{children:"Current URL:"})," /catalog/users/john/details"]}),e.jsx("br",{}),e.jsxs(t,{as:"p",children:["Active tab is ",e.jsx("strong",{children:"Users"})," because:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Catalog"}),": Matches since URL starts with /catalog"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Users"}),': Is active since URL starts with /catalog/users, and is more specific (has more url segments) than "Catalog"']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Components"}),": not active (URL doesn't start with /catalog/components)"]})]}),e.jsx(t,{as:"p",children:"This demonstrates how prefix matching works with deeply nested routes."})]})]})})});a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{code:`const Default = () => <PluginHeader />;
`,...a.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const WithTabs = () => <PluginHeader tabs={tabs} />;
`,...i.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithCustomActions = () => (
  <PluginHeader
    customActions={
      <>
        <ButtonIcon variant="secondary" icon={<RiCloudy2Line />} />
        <ButtonIcon variant="secondary" icon={<RiEmotionHappyLine />} />
        <ButtonIcon variant="secondary" icon={<RiHeartLine />} />
        <MenuTrigger>
          <ButtonIcon variant="secondary" icon={<RiMore2Line />} />
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
`,...s.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const WithAllOptionsAndTabs = () => <PluginHeader tabs={tabs} />;
`,...o.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const WithMockedURLCampaigns = () => (
  <MemoryRouter initialEntries={["/campaigns"]}>
    <BUIProvider>
      <PluginHeader tabs={tabs} />
      <Container mt="6">
        <Text as="p">
          Current URL is mocked to be: <strong>/campaigns</strong>
        </Text>
        <Text as="p">
          Notice how the "Campaigns" tab is selected (highlighted) because it
          matches the current path.
        </Text>
      </Container>
    </BUIProvider>
  </MemoryRouter>
);
`,...c.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const WithMockedURLIntegrations = () => (
  <MemoryRouter initialEntries={["/integrations"]}>
    <BUIProvider>
      <PluginHeader tabs={tabs} />
      <Container mt="6">
        <Text as="p">
          Current URL is mocked to be: <strong>/integrations</strong>
        </Text>
        <Text as="p">
          Notice how the "Integrations" tab is selected (highlighted) because it
          matches the current path.
        </Text>
      </Container>
    </BUIProvider>
  </MemoryRouter>
);
`,...m.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{code:`const WithMockedURLNoMatch = () => (
  <MemoryRouter initialEntries={["/some-other-page"]}>
    <BUIProvider>
      <PluginHeader tabs={tabs} />
      <Container mt="6">
        <Text as="p">
          Current URL is mocked to be: <strong>/some-other-page</strong>
        </Text>
        <Text as="p">
          No tab is selected because the current path doesn't match any tab's
          href.
        </Text>
        <Text as="p">
          Tabs without href (like "Overview", "Checks", "Tracks") fall back to
          React Aria's internal state.
        </Text>
      </Container>
    </BUIProvider>
  </MemoryRouter>
);
`,...p.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{code:`const WithTabsMatchingStrategies = () => (
  <MemoryRouter initialEntries={["/mentorship/events"]}>
    <BUIProvider>
      <PluginHeader
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
      <Container mt="6">
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
`,...h.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const WithTabsExactMatching = () => (
  <MemoryRouter initialEntries={["/mentorship/events"]}>
    <BUIProvider>
      <PluginHeader
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
      <Container mt="6">
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
`,...l.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const WithTabsPrefixMatchingDeep = () => (
  <MemoryRouter initialEntries={["/catalog/users/john/details"]}>
    <BUIProvider>
      <PluginHeader
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
      <Container mt="6">
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
`,...d.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {},
  decorators: [withRouter]
})`,...a.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    tabs
  },
  decorators: [withRouter]
})`,...i.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {},
  decorators: [withRouter],
  render: args => <PluginHeader {...args} customActions={<>
          <ButtonIcon variant="secondary" icon={<RiCloudy2Line />} />
          <ButtonIcon variant="secondary" icon={<RiEmotionHappyLine />} />
          <ButtonIcon variant="secondary" icon={<RiHeartLine />} />
          <MenuTrigger>
            <ButtonIcon variant="secondary" icon={<RiMore2Line />} />
            <Menu placement="bottom end">
              {menuItems.map(option => <MenuItem key={option.value} onAction={option.onClick} href={option.href}>
                  {option.label}
                </MenuItem>)}
            </Menu>
          </MenuTrigger>
        </>} />
})`,...s.input.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`WithCustomActions.extend({
  args: {
    tabs
  }
})`,...o.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    tabs
  },
  render: args => <MemoryRouter initialEntries={['/campaigns']}>
      <BUIProvider>
        <PluginHeader {...args} />
        <Container mt="6">
          <Text as="p">
            Current URL is mocked to be: <strong>/campaigns</strong>
          </Text>
          <Text as="p">
            Notice how the "Campaigns" tab is selected (highlighted) because it
            matches the current path.
          </Text>
        </Container>
      </BUIProvider>
    </MemoryRouter>
})`,...c.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    tabs
  },
  render: args => <MemoryRouter initialEntries={['/integrations']}>
      <BUIProvider>
        <PluginHeader {...args} />
        <Container mt="6">
          <Text as="p">
            Current URL is mocked to be: <strong>/integrations</strong>
          </Text>
          <Text as="p">
            Notice how the "Integrations" tab is selected (highlighted) because
            it matches the current path.
          </Text>
        </Container>
      </BUIProvider>
    </MemoryRouter>
})`,...m.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    tabs
  },
  render: args => <MemoryRouter initialEntries={['/some-other-page']}>
      <BUIProvider>
        <PluginHeader {...args} />
        <Container mt="6">
          <Text as="p">
            Current URL is mocked to be: <strong>/some-other-page</strong>
          </Text>
          <Text as="p">
            No tab is selected because the current path doesn't match any tab's
            href.
          </Text>
          <Text as="p">
            Tabs without href (like "Overview", "Checks", "Tracks") fall back to
            React Aria's internal state.
          </Text>
        </Container>
      </BUIProvider>
    </MemoryRouter>
})`,...p.input.parameters?.docs?.source}}};h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
        <PluginHeader {...args} />
        <Container mt="6">
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
})`,...h.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
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
        <PluginHeader {...args} />
        <Container mt="6">
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
})`,...l.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
        <PluginHeader {...args} />
        <Container mt="6">
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
})`,...d.input.parameters?.docs?.source}}};const Pe=["Default","WithTabs","WithCustomActions","WithAllOptionsAndTabs","WithMockedURLCampaigns","WithMockedURLIntegrations","WithMockedURLNoMatch","WithTabsMatchingStrategies","WithTabsExactMatching","WithTabsPrefixMatchingDeep"];export{a as Default,o as WithAllOptionsAndTabs,s as WithCustomActions,c as WithMockedURLCampaigns,m as WithMockedURLIntegrations,p as WithMockedURLNoMatch,i as WithTabs,l as WithTabsExactMatching,h as WithTabsMatchingStrategies,d as WithTabsPrefixMatchingDeep,Pe as __namedExportsOrder};
