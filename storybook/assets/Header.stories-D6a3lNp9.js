import{p as y,j as e,r as B}from"./iframe-qq9LRUBn.js";import{H as m}from"./Header-AnwOmhZe.js";import{t as M}from"./index-CSdV3LUc.js";import{M as H,a as x,b as j}from"./Menu-ywaFArhi.js";import{M as T,u as A}from"./index-29ewTlsg.js";import{B as f}from"./BUIProvider-Dsng5cuc.js";import{B as I}from"./Button-CoczrW8X.js";import{B as W}from"./ButtonIcon-5_DaRjqh.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Cg2fQwUi.js";import"./utils-rf2Up7Zy.js";import"./useObjectRef-C6dfZKNx.js";import"./Label-xDjBBiiZ.js";import"./Hidden-BpeAYDKo.js";import"./useFocusable-Bss7s13d.js";import"./openLink-DhqiiT6V.js";import"./useLabel-Bu3F2Z2w.js";import"./useLabels-DZwxbb7M.js";import"./context-CNA00Bav.js";import"./useButton-CbB4JjQq.js";import"./usePress-D5ySo_XX.js";import"./useFocusRing-D3V6WbVz.js";import"./useLink-DjvBObSS.js";import"./Container-Bhrx0Qi1.js";import"./Link-FhqJXucc.js";import"./getNodeText-CY27S5CK.js";import"./Text-C8jAgxVa.js";import"./Autocomplete-DsVm5TDP.js";import"./RSPContexts-IllKyz_M.js";import"./useEvent-DTTK5orm.js";import"./SelectionManager-BshcLTTE.js";import"./SelectionIndicator-BtrFhLcN.js";import"./useControlledState-BSjAcBuU.js";import"./useLocalizedStringFormatter-BtjVvIfE.js";import"./Separator-B6TKwS90.js";import"./Input-Dr2FlUMh.js";import"./useFormReset--_ug6d2P.js";import"./useField-CBtSiF8Q.js";import"./Form-Cdn-qZZV.js";import"./ListBox-DZhNFI1V.js";import"./Text-W3-7-0Ll.js";import"./useListState-SjSSuPnI.js";import"./Dialog-BoAJvEdl.js";import"./OverlayArrow-Ds1rPmlt.js";import"./animation-BX5pYea6.js";import"./VisuallyHidden-qAJO2kOR.js";import"./SearchField-BxpFaWQp.js";import"./FieldError-CI2IJwCq.js";import"./Virtualizer-HHA2HYMY.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-kHTiHPaK.js";const u=y.meta({title:"Backstage UI/Header",component:m,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],w=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],p=t=>e.jsx(T,{initialEntries:["/overview"],children:e.jsx(f,{children:e.jsx(t,{})})});function h(t){const b=A();return B.useMemo(()=>{for(const d of t)if("items"in d){for(const g of d.items)if(g.href===b.pathname)return g.id}else if(d.href===b.pathname)return d.id},[t,b.pathname])}const r=u.story({args:{title:"Page Title"}}),a=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t})}}),o=u.story({decorators:[p],render:()=>e.jsx(m,{...r.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(H,{children:[e.jsx(W,{variant:"tertiary",icon:e.jsx(M,{}),"aria-label":"More options"}),e.jsx(x,{placement:"bottom end",children:w.map(t=>e.jsx(j,{onAction:t.onClick,href:t.href,children:t.label},t.value))})]})]})})}),n=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),s=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),i=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),v=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],c=u.story({decorators:[t=>e.jsx(T,{initialEntries:["/docs"],children:e.jsx(f,{children:e.jsx(t,{})})})],render:()=>{const t=h(v);return e.jsx(m,{title:"Page Title",tabs:v,activeTabId:t})}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Header title="Page Title" />;
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
