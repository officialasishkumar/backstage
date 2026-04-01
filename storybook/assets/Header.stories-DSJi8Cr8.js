import{j as e,M as v,p as y,u as x,r as j}from"./iframe-D_dthwJh.js";import{H as a}from"./Header-CCJtuN_8.js";import{t as B}from"./index-wo5Mbj3S.js";import{M,a as w,b as H}from"./Menu-CGylXdbi.js";import{B as A}from"./ButtonIcon-BeB8AupT.js";import{B as T}from"./BUIProvider-kgegLBnx.js";import{B as I}from"./Button-bGDZEYAP.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BZyoSp7U.js";import"./utils-DOJJmrft.js";import"./useObjectRef-CInBiSHZ.js";import"./Label-BE_ic3n7.js";import"./Hidden-BEHHSiwX.js";import"./useNumberFormatter-B9KY0PzB.js";import"./context-Q7JRJBVl.js";import"./useFocusable-DPmubRaF.js";import"./openLink-DtEOuHfv.js";import"./useLabel-K_blalq3.js";import"./useLabels-BMP6De1T.js";import"./useButton-WydDPgSb.js";import"./usePress-CP4tASL9.js";import"./textSelection-CvYhyEaE.js";import"./useFocusRing-CC9PNhof.js";import"./useLink-DJ3zWrCC.js";import"./Container-D3FSHjj2.js";import"./Link-D1TkwMfe.js";import"./getNodeText-CmJGJZ47.js";import"./Text-D0iUJr99.js";import"./Autocomplete-Dbj9f0H7.js";import"./RSPContexts-Bc4Xdkgk.js";import"./useEvent-DV40E9dp.js";import"./SelectionManager-DSw6NSXO.js";import"./SelectionIndicator-D-J9qfej.js";import"./useControlledState-DPWqqzcA.js";import"./useLocalizedStringFormatter-BwgEdBRO.js";import"./Separator-CZMSyKN1.js";import"./Input-DVbLzx_m.js";import"./useFormReset-CwI7Po1X.js";import"./useField-DPPlY8qA.js";import"./Form-Cl-8j6kc.js";import"./ListBox-DtMT4Cpd.js";import"./Text-TkQla788.js";import"./useListState-ByszqMC2.js";import"./Dialog-CUvGc59T.js";import"./OverlayArrow-CtBvbk9G.js";import"./animation-BtFOA9cz.js";import"./VisuallyHidden-Nb5lmHla.js";import"./SearchField-uHHpE7AD.js";import"./FieldError-_xC4EfcV.js";import"./Virtualizer-CqA5HaJO.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-ZG031Pak.js";const o=y.meta({title:"Backstage UI/Header",component:a,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],C=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],i=r=>e.jsx(v,{initialEntries:["/overview"],children:e.jsx(T,{children:e.jsx(r,{})})});function h(r){const b=x();return j.useMemo(()=>{for(const s of r)if("items"in s){for(const g of s.items)if(g.href===b.pathname)return g.id}else if(s.href===b.pathname)return s.id},[r,b.pathname])}const t=o.story({args:{title:"Page Title"}}),n=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r})}}),c=o.story({decorators:[i],render:()=>e.jsx(a,{...t.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(M,{children:[e.jsx(A,{variant:"tertiary",icon:e.jsx(B,{}),"aria-label":"More options"}),e.jsx(w,{placement:"bottom end",children:C.map(r=>e.jsx(H,{onAction:r.onClick,href:r.href,children:r.label},r.value))})]})]})})}),m=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),u=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),p=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),f=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],d=o.story({decorators:[r=>e.jsx(v,{initialEntries:["/docs"],children:e.jsx(T,{children:e.jsx(r,{})})})],render:()=>{const r=h(f);return e.jsx(a,{title:"Page Title",tabs:f,activeTabId:r})}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
