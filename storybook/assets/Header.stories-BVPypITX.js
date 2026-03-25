import{p as y,j as e,r as B}from"./iframe-CymjdxqK.js";import{H as m}from"./Header-R_usi6TO.js";import{t as M}from"./index-BJEy_HY0.js";import{M as H,a as x,b as j}from"./Menu-DQFfX7m1.js";import{M as T,u as A}from"./index-BW-EXu7a.js";import{B as f}from"./BUIProvider-B08yKp77.js";import{B as I}from"./Button-B2iNQnU8.js";import{B as W}from"./ButtonIcon-DhlOhG1P.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CPhzpJxd.js";import"./utils-D1wNRJk4.js";import"./useObjectRef-5Xp1GkQ6.js";import"./Label-Okk3Ubn2.js";import"./Hidden-ClnAu_4E.js";import"./useFocusable-lwQDql-_.js";import"./openLink-CvTgs9Lx.js";import"./useLabel-BmyaizYJ.js";import"./useLabels-C5mR9y85.js";import"./context-C-xOiLEv.js";import"./useButton-aANW0Wyo.js";import"./usePress-C2lf5peW.js";import"./useFocusRing-hwClZc-Y.js";import"./useLink-CA03VDc8.js";import"./Container-CWAmGjJD.js";import"./Link-BANipp-H.js";import"./getNodeText-B_GqC20h.js";import"./Text-BTVzBPa4.js";import"./Autocomplete-DuMe8VO6.js";import"./RSPContexts-maknK7jF.js";import"./useEvent-7UwMI45o.js";import"./SelectionManager-NC4h3hyc.js";import"./SelectionIndicator-CL2y3Ug4.js";import"./useControlledState-WIHPVmui.js";import"./useLocalizedStringFormatter-feYlFOf2.js";import"./Separator-0IcFbXfk.js";import"./Input-CSCXXE_W.js";import"./useFormReset-DWUv7BfJ.js";import"./useField-Km2qiKqM.js";import"./Form-BD9_Q_yN.js";import"./ListBox-BbBHbbI8.js";import"./Text-BPN_HbIg.js";import"./useListState-FspEawGa.js";import"./Dialog-DkhpKrWr.js";import"./OverlayArrow-BThpy1DV.js";import"./animation-BzLdPHvj.js";import"./VisuallyHidden-DXY6Jnki.js";import"./SearchField-jYJwioZj.js";import"./FieldError-yKPrWCN_.js";import"./Virtualizer-9BS4qA8V.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-jKYuAkCf.js";const u=y.meta({title:"Backstage UI/Header",component:m,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],w=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],p=t=>e.jsx(T,{initialEntries:["/overview"],children:e.jsx(f,{children:e.jsx(t,{})})});function h(t){const b=A();return B.useMemo(()=>{for(const d of t)if("items"in d){for(const g of d.items)if(g.href===b.pathname)return g.id}else if(d.href===b.pathname)return d.id},[t,b.pathname])}const r=u.story({args:{title:"Page Title"}}),a=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t})}}),o=u.story({decorators:[p],render:()=>e.jsx(m,{...r.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(H,{children:[e.jsx(W,{variant:"tertiary",icon:e.jsx(M,{}),"aria-label":"More options"}),e.jsx(x,{placement:"bottom end",children:w.map(t=>e.jsx(j,{onAction:t.onClick,href:t.href,children:t.label},t.value))})]})]})})}),n=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),s=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),i=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),v=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],c=u.story({decorators:[t=>e.jsx(T,{initialEntries:["/docs"],children:e.jsx(f,{children:e.jsx(t,{})})})],render:()=>{const t=h(v);return e.jsx(m,{title:"Page Title",tabs:v,activeTabId:t})}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Header title="Page Title" />;
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
})`,...c.input.parameters?.docs?.source}}};const Ae=["Default","WithTabs","WithCustomActions","WithBreadcrumbs","WithLongBreadcrumbs","WithEverything","WithGroupedTabs"];export{r as Default,n as WithBreadcrumbs,o as WithCustomActions,i as WithEverything,c as WithGroupedTabs,s as WithLongBreadcrumbs,a as WithTabs,Ae as __namedExportsOrder};
