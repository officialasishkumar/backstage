import{j as e,M as v,p as y,u as x,r as j}from"./iframe-DyjKfHWP.js";import{H as a}from"./Header-DX2wKx7J.js";import{t as B}from"./index-cguLXHc0.js";import{M,a as w,b as H}from"./Menu-PDKKCUpK.js";import{B as A}from"./ButtonIcon-OhtE3DPB.js";import{B as T}from"./BUIProvider-BWH1udh2.js";import{B as I}from"./Button-BH0s6jUL.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-CJZfGRod.js";import"./utils-DR_NZBjG.js";import"./useObjectRef-7_hM05iQ.js";import"./Label-DAkixtdH.js";import"./Hidden-B_goyCM1.js";import"./useNumberFormatter-D6YdTXTj.js";import"./context-pT42zyZM.js";import"./useFocusable-DdGM9NE4.js";import"./openLink-DApmBWn3.js";import"./useLabel-mgp2OWRO.js";import"./useLabels-BnLSBoeu.js";import"./useButton-Dz6iLKsK.js";import"./usePress-B4lsLING.js";import"./textSelection-BAQRVi3u.js";import"./useFocusRing-0OqomWJ9.js";import"./useLink-iX2nF9gT.js";import"./Container-C8VSEF38.js";import"./Link-DNGCrxlT.js";import"./getNodeText-D9B0_ODk.js";import"./Text-B1AuG0oU.js";import"./Autocomplete-D0-ichkU.js";import"./RSPContexts-DQ4Npco-.js";import"./useEvent-9BEtGrcR.js";import"./SelectionManager-DOVE9_OV.js";import"./SelectionIndicator-BG4I083n.js";import"./useControlledState-CeMfn_cd.js";import"./useLocalizedStringFormatter-DdNJ7tue.js";import"./Separator-D4Dt_VLZ.js";import"./Input-DB_LfEup.js";import"./useFormReset-BHnTRn45.js";import"./useField-DsnjVxUu.js";import"./Form-C910l1ZH.js";import"./ListBox-CZ-37U-Q.js";import"./Text-E1WRWeuL.js";import"./useListState-DveW3lRE.js";import"./Dialog-C_mps9Fo.js";import"./OverlayArrow-kT1WVoyE.js";import"./animation-CB2HTRVW.js";import"./VisuallyHidden-C6xu9piM.js";import"./SearchField-BOwfRSr8.js";import"./FieldError-b2DiV5_z.js";import"./Virtualizer-DcBm979A.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-d_so8xGn.js";const o=y.meta({title:"Backstage UI/Header",component:a,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],C=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],i=r=>e.jsx(v,{initialEntries:["/overview"],children:e.jsx(T,{children:e.jsx(r,{})})});function h(r){const b=x();return j.useMemo(()=>{for(const s of r)if("items"in s){for(const g of s.items)if(g.href===b.pathname)return g.id}else if(s.href===b.pathname)return s.id},[r,b.pathname])}const t=o.story({args:{title:"Page Title"}}),n=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r})}}),c=o.story({decorators:[i],render:()=>e.jsx(a,{...t.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(M,{children:[e.jsx(A,{variant:"tertiary",icon:e.jsx(B,{}),"aria-label":"More options"}),e.jsx(w,{placement:"bottom end",children:C.map(r=>e.jsx(H,{onAction:r.onClick,href:r.href,children:r.label},r.value))})]})]})})}),m=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),u=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),p=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),f=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],d=o.story({decorators:[r=>e.jsx(v,{initialEntries:["/docs"],children:e.jsx(T,{children:e.jsx(r,{})})})],render:()=>{const r=h(f);return e.jsx(a,{title:"Page Title",tabs:f,activeTabId:r})}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
