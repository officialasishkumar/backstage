import{p as y,j as e,M as T,u as B,r as M}from"./iframe-CY6p7HGj.js";import{H as m}from"./Header-CIfW15uO.js";import{t as H}from"./index-BfGdkzHo.js";import{M as x,a as j,b as A}from"./Menu-cJgiHiT-.js";import{B as f}from"./BUIProvider-B87mDlDM.js";import{B as I}from"./Button-BJstzvYt.js";import{B as W}from"./ButtonIcon-D9jMsfxE.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-bFuSebXI.js";import"./utils-D5XzX9Cq.js";import"./useObjectRef-B2AjDpdy.js";import"./Label-BE618E0h.js";import"./Hidden-hZ6rImco.js";import"./useNumberFormatter-Dzr0pJM0.js";import"./context-DCpJGGDB.js";import"./useFocusable-C6YNZBAX.js";import"./openLink-D0hf0orl.js";import"./useLabel-B_Lop7rQ.js";import"./useLabels-CnWkm5k-.js";import"./useButton-yWOKo3wb.js";import"./usePress-BYiNTSdE.js";import"./textSelection-2lntyfVX.js";import"./useFocusRing-BZ77H15a.js";import"./useLink-DLygO-qq.js";import"./Container-B2NcJlrD.js";import"./Link-CwnLZVuV.js";import"./getNodeText-Bz62Iy7G.js";import"./Text-6JNPBzic.js";import"./Autocomplete-CKxWTcW7.js";import"./RSPContexts-BWSJFemX.js";import"./useEvent-BayAtDVR.js";import"./SelectionManager-BGKDaXVQ.js";import"./SelectionIndicator-wiTtDSxe.js";import"./useControlledState-Cf6tZT7x.js";import"./useLocalizedStringFormatter-DJnrKnIs.js";import"./Separator-B9oY77xC.js";import"./Input-SRqiDa_j.js";import"./useFormReset-Ao63ou2I.js";import"./useField-D-0asg-q.js";import"./Form-B_j665yH.js";import"./ListBox-C4dP5FkS.js";import"./Text-CtkMnc2L.js";import"./useListState-DTbulIaV.js";import"./Dialog-QlbpTyOh.js";import"./OverlayArrow-DpMV_jxH.js";import"./animation-Ca_zbsuV.js";import"./VisuallyHidden-BSKIM0Ta.js";import"./SearchField-D0mZ5dWC.js";import"./FieldError-DYSn_E8h.js";import"./Virtualizer-Bt3eYbSd.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-BD5STqX9.js";const u=y.meta({title:"Backstage UI/Header",component:m,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],w=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],p=t=>e.jsx(T,{initialEntries:["/overview"],children:e.jsx(f,{children:e.jsx(t,{})})});function h(t){const b=B();return M.useMemo(()=>{for(const d of t)if("items"in d){for(const g of d.items)if(g.href===b.pathname)return g.id}else if(d.href===b.pathname)return d.id},[t,b.pathname])}const r=u.story({args:{title:"Page Title"}}),a=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t})}}),o=u.story({decorators:[p],render:()=>e.jsx(m,{...r.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(x,{children:[e.jsx(W,{variant:"tertiary",icon:e.jsx(H,{}),"aria-label":"More options"}),e.jsx(j,{placement:"bottom end",children:w.map(t=>e.jsx(A,{onAction:t.onClick,href:t.href,children:t.label},t.value))})]})]})})}),n=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),s=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),i=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),v=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],c=u.story({decorators:[t=>e.jsx(T,{initialEntries:["/docs"],children:e.jsx(f,{children:e.jsx(t,{})})})],render:()=>{const t=h(v);return e.jsx(m,{title:"Page Title",tabs:v,activeTabId:t})}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Header title="Page Title" />;
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
