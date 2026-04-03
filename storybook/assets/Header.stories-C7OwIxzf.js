import{j as e,M as v,p as y,u as x,r as j}from"./iframe-B8N4GvwI.js";import{H as a}from"./Header-fRA_tPIr.js";import{t as B}from"./index-BE9lrUC_.js";import{M,a as w,b as H}from"./Menu-Don74z0c.js";import{B as A}from"./ButtonIcon-D3Clk2DG.js";import{B as T}from"./BUIProvider-Dc97VR6g.js";import{B as I}from"./Button-CrCaZ9K0.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-C4YM46_h.js";import"./utils-DRLpmCmN.js";import"./useObjectRef-DrpS2PKJ.js";import"./Label-Bps-rEzx.js";import"./Hidden-ExdddpxR.js";import"./useNumberFormatter-D6M8tlUe.js";import"./context-D-1G_rvj.js";import"./useFocusable-2lBvZn6A.js";import"./openLink-D6fl38gK.js";import"./useLabel-DNh0xAaN.js";import"./useLabels-BIM6Iemz.js";import"./useButton-DUM-lbW-.js";import"./usePress-C7aF3WDC.js";import"./textSelection-BtWPAxHq.js";import"./useFocusRing-CWdhAts1.js";import"./useLink-CmckZnYP.js";import"./Container-I4L5fi8J.js";import"./Link-wdjjYgU3.js";import"./getNodeText-BADqFiWi.js";import"./Text-T4XKYwwR.js";import"./Autocomplete-PrwM8UD8.js";import"./RSPContexts-CG0zCeb8.js";import"./useEvent-CtyPF_El.js";import"./SelectionManager-D8akPz9E.js";import"./SelectionIndicator-D-a_UK8N.js";import"./useControlledState-jAao-lKm.js";import"./useLocalizedStringFormatter-X7txwvUO.js";import"./Separator-B88UeCvk.js";import"./Input-CPOfFR-y.js";import"./useFormReset-w0ua13oa.js";import"./useField-ZMSB9n5m.js";import"./Form-CfI1Pjie.js";import"./ListBox-C-I7yXOb.js";import"./Text-C_3AFNvK.js";import"./useListState-DXtknBvO.js";import"./Dialog-CbTdhEgY.js";import"./OverlayArrow-BYb66uMJ.js";import"./animation-CRMXBnuH.js";import"./VisuallyHidden-COPv4dfz.js";import"./SearchField-BxQ54GjF.js";import"./FieldError-DzEIyqzs.js";import"./Virtualizer-CbIqnBFZ.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-NrqPv4T3.js";const o=y.meta({title:"Backstage UI/Header",component:a,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],C=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],i=r=>e.jsx(v,{initialEntries:["/overview"],children:e.jsx(T,{children:e.jsx(r,{})})});function h(r){const b=x();return j.useMemo(()=>{for(const s of r)if("items"in s){for(const g of s.items)if(g.href===b.pathname)return g.id}else if(s.href===b.pathname)return s.id},[r,b.pathname])}const t=o.story({args:{title:"Page Title"}}),n=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r})}}),c=o.story({decorators:[i],render:()=>e.jsx(a,{...t.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(M,{children:[e.jsx(A,{variant:"tertiary",icon:e.jsx(B,{}),"aria-label":"More options"}),e.jsx(w,{placement:"bottom end",children:C.map(r=>e.jsx(H,{onAction:r.onClick,href:r.href,children:r.label},r.value))})]})]})})}),m=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),u=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),p=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),f=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],d=o.story({decorators:[r=>e.jsx(v,{initialEntries:["/docs"],children:e.jsx(T,{children:e.jsx(r,{})})})],render:()=>{const r=h(f);return e.jsx(a,{title:"Page Title",tabs:f,activeTabId:r})}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Page Title'
  }
})`,...t.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => {
    const activeTabId = useActiveTabId(tabs);
    return <Header title="Page Title" tabs={tabs} activeTabId={activeTabId} />;
  }
})`,...n.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...c.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }]
  }
})`,...m.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...u.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  render: () => {
    const activeTabId = useActiveTabId(tabs);
    return <Header title="Page Title" tabs={tabs} activeTabId={activeTabId} customActions={<Button>Custom action</Button>} breadcrumbs={[{
      label: 'Home',
      href: '/'
    }]} />;
  }
})`,...p.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [(Story: StoryFn) => <MemoryRouter initialEntries={['/docs']}>
        <BUIProvider>
          <Story />
        </BUIProvider>
      </MemoryRouter>],
  render: () => {
    const activeTabId = useActiveTabId(groupedTabs);
    return <Header title="Page Title" tabs={groupedTabs} activeTabId={activeTabId} />;
  }
})`,...d.input.parameters?.docs?.source}}};const Ae=["Default","WithTabs","WithCustomActions","WithBreadcrumbs","WithLongBreadcrumbs","WithEverything","WithGroupedTabs"];export{t as Default,m as WithBreadcrumbs,c as WithCustomActions,p as WithEverything,d as WithGroupedTabs,u as WithLongBreadcrumbs,n as WithTabs,Ae as __namedExportsOrder};
