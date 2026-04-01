import{j as e,M as v,p as y,u as x,r as j}from"./iframe-hODDjxEI.js";import{H as a}from"./Header-BqYq0IGj.js";import{t as B}from"./index-6zLbxaIr.js";import{M,a as w,b as H}from"./Menu-CCEv6ktZ.js";import{B as A}from"./ButtonIcon-Hin25Ljy.js";import{B as T}from"./BUIProvider-DDQSxPNK.js";import{B as I}from"./Button-BcxtTWdm.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DgtByE87.js";import"./utils-D5-4lykL.js";import"./useObjectRef-D0troa0o.js";import"./Label-D0Co6EEj.js";import"./Hidden-8N8ie_vh.js";import"./useNumberFormatter-BM9WZphB.js";import"./context-68oMUB2W.js";import"./useFocusable-CZ6Grrdp.js";import"./openLink-DQgtmsfk.js";import"./useLabel-B46Bw-tG.js";import"./useLabels-BV4gsZS7.js";import"./useButton-Slsqarzu.js";import"./usePress-DvE4E3s2.js";import"./textSelection-DAbFJioh.js";import"./useFocusRing-Dhs0bEJR.js";import"./useLink-CMAs8bDl.js";import"./Container-CH_R0sUy.js";import"./Link-BVnD8l8J.js";import"./getNodeText-D4fXIuox.js";import"./Text-BPu9Bl_z.js";import"./Autocomplete-MEJW1lQX.js";import"./RSPContexts-DvWGiX1t.js";import"./useEvent-CGwSIvr1.js";import"./SelectionManager-DnK7H5qI.js";import"./SelectionIndicator-CTA5PdT2.js";import"./useControlledState-BSdZOyDa.js";import"./useLocalizedStringFormatter-DZXM-nMl.js";import"./Separator-Cy1kmzM0.js";import"./Input-4Jwjzq6V.js";import"./useFormReset-RZxEMM3Y.js";import"./useField-DPrjxZzX.js";import"./Form-BDhWZ5KK.js";import"./ListBox-BGnyIXSH.js";import"./Text-C8Ktyk4e.js";import"./useListState-dsg9eByG.js";import"./Dialog-CUuv35CV.js";import"./OverlayArrow-B4FdASlF.js";import"./animation-D2KxhnaW.js";import"./VisuallyHidden-CNPeICIa.js";import"./SearchField-CImqPHMd.js";import"./FieldError-MZT2nGbC.js";import"./Virtualizer-BjVVdPbi.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-C_oPjVEM.js";const o=y.meta({title:"Backstage UI/Header",component:a,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],C=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],i=r=>e.jsx(v,{initialEntries:["/overview"],children:e.jsx(T,{children:e.jsx(r,{})})});function h(r){const b=x();return j.useMemo(()=>{for(const s of r)if("items"in s){for(const g of s.items)if(g.href===b.pathname)return g.id}else if(s.href===b.pathname)return s.id},[r,b.pathname])}const t=o.story({args:{title:"Page Title"}}),n=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r})}}),c=o.story({decorators:[i],render:()=>e.jsx(a,{...t.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(M,{children:[e.jsx(A,{variant:"tertiary",icon:e.jsx(B,{}),"aria-label":"More options"}),e.jsx(w,{placement:"bottom end",children:C.map(r=>e.jsx(H,{onAction:r.onClick,href:r.href,children:r.label},r.value))})]})]})})}),m=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),u=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),p=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),f=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],d=o.story({decorators:[r=>e.jsx(v,{initialEntries:["/docs"],children:e.jsx(T,{children:e.jsx(r,{})})})],render:()=>{const r=h(f);return e.jsx(a,{title:"Page Title",tabs:f,activeTabId:r})}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
