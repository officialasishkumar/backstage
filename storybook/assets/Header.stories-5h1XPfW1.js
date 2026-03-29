import{p as y,j as e,M as T,u as B,r as M}from"./iframe-zPAYUdEu.js";import{H as m}from"./Header-CzvPgSM2.js";import{t as H}from"./index-pd7bB-MY.js";import{M as x,a as j,b as A}from"./Menu-BkGt3vGL.js";import{B as f}from"./BUIProvider-YYza03_H.js";import{B as I}from"./Button-DGtYY_-_.js";import{B as W}from"./ButtonIcon-DvfbKhHB.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-By2tMXW6.js";import"./utils-B3W6J4Ep.js";import"./useObjectRef-DZ_hmO0r.js";import"./Label-BdylCvhA.js";import"./Hidden-re4CweBj.js";import"./useNumberFormatter-0DVbJefA.js";import"./context-Dah1XvVD.js";import"./useFocusable-Byq_kT_u.js";import"./openLink-CpupEye9.js";import"./useLabel-CQkQ-HGf.js";import"./useLabels-Di6e4lNp.js";import"./useButton-Daxqbesr.js";import"./usePress-BYuOhAqc.js";import"./textSelection-Bvws7oT_.js";import"./useFocusRing-DFT_k_Bk.js";import"./useLink-DyUjBU6W.js";import"./Container-DVA-Dxs2.js";import"./Link-C41HJNxr.js";import"./getNodeText--_F0EAk2.js";import"./Text-Dr8MHH3Q.js";import"./Autocomplete-CWZ2GykV.js";import"./RSPContexts-DjvI38Ph.js";import"./useEvent-CjMSbSiI.js";import"./SelectionManager-obnXnccE.js";import"./SelectionIndicator-oYAR7fu3.js";import"./useControlledState-D7QNPJWf.js";import"./useLocalizedStringFormatter-BSeyIVe2.js";import"./Separator-DKyeH1Vb.js";import"./Input-Ci2laQFb.js";import"./useFormReset-DIu-QsQa.js";import"./useField-Bn7sWQJp.js";import"./Form-BIO471XA.js";import"./ListBox-BeVqjvvr.js";import"./Text-CmuIAoCE.js";import"./useListState-b3oSujFP.js";import"./Dialog-CXcsAiuc.js";import"./OverlayArrow-D00sSwkC.js";import"./animation-B0OlwN2p.js";import"./VisuallyHidden-BaTeCvWR.js";import"./SearchField-B5qRTEWd.js";import"./FieldError-D0nZ6ao4.js";import"./Virtualizer-wgzC9C-M.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-Ddn13Z7B.js";const u=y.meta({title:"Backstage UI/Header",component:m,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],w=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],p=t=>e.jsx(T,{initialEntries:["/overview"],children:e.jsx(f,{children:e.jsx(t,{})})});function h(t){const b=B();return M.useMemo(()=>{for(const d of t)if("items"in d){for(const g of d.items)if(g.href===b.pathname)return g.id}else if(d.href===b.pathname)return d.id},[t,b.pathname])}const r=u.story({args:{title:"Page Title"}}),a=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t})}}),o=u.story({decorators:[p],render:()=>e.jsx(m,{...r.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(x,{children:[e.jsx(W,{variant:"tertiary",icon:e.jsx(H,{}),"aria-label":"More options"}),e.jsx(j,{placement:"bottom end",children:w.map(t=>e.jsx(A,{onAction:t.onClick,href:t.href,children:t.label},t.value))})]})]})})}),n=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),s=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),i=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),v=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],c=u.story({decorators:[t=>e.jsx(T,{initialEntries:["/docs"],children:e.jsx(f,{children:e.jsx(t,{})})})],render:()=>{const t=h(v);return e.jsx(m,{title:"Page Title",tabs:v,activeTabId:t})}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Header title="Page Title" />;
`,...r.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{code:`const WithTabs = () => {
  const activeTabId = useActiveTabId(tabs);
  return <Header title="Page Title" tabs={tabs} activeTabId={activeTabId} />;
};
`,...a.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const WithCustomActions = () => (
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
`,...o.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{code:`const WithBreadcrumbs = () => (
  <Header breadcrumbs={[{ label: "Home", href: "/" }]} />
);
`,...n.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const WithLongBreadcrumbs = () => (
  <Header
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "Long Breadcrumb Name", href: "/long-breadcrumb" },
    ]}
  />
);
`,...s.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const WithEverything = () => {
  const activeTabId = useActiveTabId(tabs);
  return (
    <Header
      title="Page Title"
      tabs={tabs}
      activeTabId={activeTabId}
      customActions={<Button>Custom action</Button>}
      breadcrumbs={[{ label: "Home", href: "/" }]}
    />
  );
};
`,...i.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const WithGroupedTabs = () => {
  const activeTabId = useActiveTabId(groupedTabs);
  return (
    <Header title="Page Title" tabs={groupedTabs} activeTabId={activeTabId} />
  );
};
`,...c.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Page Title'
  }
})`,...r.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => {
    const activeTabId = useActiveTabId(tabs);
    return <Header title="Page Title" tabs={tabs} activeTabId={activeTabId} />;
  }
})`,...a.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...o.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }]
  }
})`,...n.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...s.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => {
    const activeTabId = useActiveTabId(tabs);
    return <Header title="Page Title" tabs={tabs} activeTabId={activeTabId} customActions={<Button>Custom action</Button>} breadcrumbs={[{
      label: 'Home',
      href: '/'
    }]} />;
  }
})`,...i.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [(Story: StoryFn) => <MemoryRouter initialEntries={['/docs']}>
        <BUIProvider>
          <Story />
        </BUIProvider>
      </MemoryRouter>],
  render: () => {
    const activeTabId = useActiveTabId(groupedTabs);
    return <Header title="Page Title" tabs={groupedTabs} activeTabId={activeTabId} />;
  }
})`,...c.input.parameters?.docs?.source}}};const We=["Default","WithTabs","WithCustomActions","WithBreadcrumbs","WithLongBreadcrumbs","WithEverything","WithGroupedTabs"];export{r as Default,n as WithBreadcrumbs,o as WithCustomActions,i as WithEverything,c as WithGroupedTabs,s as WithLongBreadcrumbs,a as WithTabs,We as __namedExportsOrder};
