import{p as y,j as e,r as B}from"./iframe-BNkUY5HA.js";import{H as m}from"./Header-Ctc8W3Id.js";import{t as M}from"./index-DiD34Zcz.js";import{M as H,a as x,b as j}from"./Menu-BmC0-W1N.js";import{M as T,u as A}from"./index-DN_6yxbn.js";import{B as f}from"./BUIProvider-COrfszv7.js";import{B as I}from"./Button-CqPl-6Eu.js";import{B as W}from"./ButtonIcon-k94kaAW7.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DZjVEEsz.js";import"./utils-CPRRxJjI.js";import"./useObjectRef-C-kcd22_.js";import"./Label-CVDwbuAE.js";import"./Hidden-BvpBW5jM.js";import"./useFocusable-BYfSMVOO.js";import"./openLink-CO4LZzkY.js";import"./useLabel-LBw7rwT-.js";import"./useLabels-BS-wLRL7.js";import"./context-CN2yreBX.js";import"./useButton-CWSewhky.js";import"./usePress-BQiVP5fV.js";import"./useFocusRing-f-j38KHJ.js";import"./useLink-BkcK4ex5.js";import"./Container-CT_4SAr3.js";import"./Link-CyshbbmO.js";import"./getNodeText-BxTcJFho.js";import"./Text-CRkGoQC0.js";import"./Autocomplete-BoDp8ZbT.js";import"./RSPContexts-Bwf4jFBm.js";import"./useEvent-CIV51CED.js";import"./SelectionManager-DIjgG5dk.js";import"./SelectionIndicator-CXCtZ_nW.js";import"./useControlledState-Ciat7max.js";import"./useLocalizedStringFormatter-DHZtOyqR.js";import"./Separator-tY5ufu2a.js";import"./Input-CAep4KHh.js";import"./useFormReset-Bl6vpdTL.js";import"./useField-CaBqZtdO.js";import"./Form-DAr4okKo.js";import"./ListBox-tGsJk0Sh.js";import"./Text-D4iNm3vj.js";import"./useListState-BZCNk1xQ.js";import"./Dialog-wqU4GTwM.js";import"./OverlayArrow-B0N738lg.js";import"./animation-CjSNrmR0.js";import"./VisuallyHidden-Bd_D0eyu.js";import"./SearchField-B9dpGlqE.js";import"./FieldError-BBhg-UKV.js";import"./Virtualizer-DY8rCPV5.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-DoNzE6c4.js";const u=y.meta({title:"Backstage UI/Header",component:m,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],w=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],p=t=>e.jsx(T,{initialEntries:["/overview"],children:e.jsx(f,{children:e.jsx(t,{})})});function h(t){const b=A();return B.useMemo(()=>{for(const d of t)if("items"in d){for(const g of d.items)if(g.href===b.pathname)return g.id}else if(d.href===b.pathname)return d.id},[t,b.pathname])}const r=u.story({args:{title:"Page Title"}}),a=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t})}}),o=u.story({decorators:[p],render:()=>e.jsx(m,{...r.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(H,{children:[e.jsx(W,{variant:"tertiary",icon:e.jsx(M,{}),"aria-label":"More options"}),e.jsx(x,{placement:"bottom end",children:w.map(t=>e.jsx(j,{onAction:t.onClick,href:t.href,children:t.label},t.value))})]})]})})}),n=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),s=u.story({decorators:[p],args:{...r.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),i=u.story({decorators:[p],render:()=>{const t=h(l);return e.jsx(m,{title:"Page Title",tabs:l,activeTabId:t,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),v=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],c=u.story({decorators:[t=>e.jsx(T,{initialEntries:["/docs"],children:e.jsx(f,{children:e.jsx(t,{})})})],render:()=>{const t=h(v);return e.jsx(m,{title:"Page Title",tabs:v,activeTabId:t})}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => <Header title="Page Title" />;
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
