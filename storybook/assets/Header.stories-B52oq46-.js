import{j as r,M as d,p as f}from"./iframe-BO_5tggG.js";import{H as g}from"./Header-CqVuRpAx.js";import{t as v}from"./index-BIrSEnXi.js";import{M as y,a as x,b as B}from"./Menu-B0cz7JLX.js";import{B as w}from"./ButtonIcon-DSMGfMOh.js";import{B as b}from"./BUIProvider-BQQre2hP.js";import{B as h}from"./Button-j31mKj77.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-D1y9NOub.js";import"./utils-03A5sesa.js";import"./useObjectRef-Cw6KczqA.js";import"./Label-CIczjLen.js";import"./Hidden-B_poHtvD.js";import"./useNumberFormatter-CVhUBRb3.js";import"./context-PRnmgxPb.js";import"./useFocusable-D4eo7SSJ.js";import"./openLink-CrrHS3jY.js";import"./useLabel--JYCieVt.js";import"./useLabels-B6IuJsDH.js";import"./useButton-DvXQTPVN.js";import"./usePress-C0Ey3VSN.js";import"./textSelection-CoLB8z_M.js";import"./useFocusRing-7-v3swav.js";import"./useLink-BPiOxhnT.js";import"./Container-BtXGuT1E.js";import"./Link-BYEwahWR.js";import"./getNodeText-DNxGYqsZ.js";import"./Text-8qEp4aXz.js";import"./Autocomplete-DdmOB-6t.js";import"./RSPContexts-DLzMEFKB.js";import"./useEvent-A-gG4tZ_.js";import"./SelectionManager-C0E4c_eH.js";import"./SelectionIndicator-DfMjQAFJ.js";import"./useControlledState-CtEE7veX.js";import"./useLocalizedStringFormatter-Rr_J43kR.js";import"./Separator-UZ4D15GY.js";import"./Input-DWrPnbYs.js";import"./useFormReset-B_UWtg9x.js";import"./useField-Bd0TMcmv.js";import"./Form-al3m2RYK.js";import"./ListBox-BhURKFSA.js";import"./Text-Y-AwaEw8.js";import"./useListState-Bn-PLNKT.js";import"./Dialog-w7MK3d1r.js";import"./OverlayArrow-CMeMLekS.js";import"./animation-CpQtdvXO.js";import"./VisuallyHidden-BnAVntL1.js";import"./SearchField-A5f1CmI-.js";import"./FieldError-hSBCvxNk.js";import"./Virtualizer-Dm-8kB7i.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-CM42c1xY.js";const o=f.meta({title:"Backstage UI/Header",component:g,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],j=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],a=e=>r.jsx(d,{initialEntries:["/overview"],children:r.jsx(b,{children:r.jsx(e,{})})}),t=o.story({args:{title:"Page Title"}}),s=o.story({decorators:[a],args:{...t.input.args,tabs:l}}),i=o.story({decorators:[a],render:()=>r.jsx(g,{...t.input.args,customActions:r.jsxs(r.Fragment,{children:[r.jsx(h,{children:"Custom action"}),r.jsxs(y,{children:[r.jsx(w,{variant:"tertiary",icon:r.jsx(v,{}),"aria-label":"More options"}),r.jsx(x,{placement:"bottom end",children:j.map(e=>r.jsx(B,{onAction:e.onClick,href:e.href,children:e.label},e.value))})]})]})})}),n=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),m=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),c=o.story({decorators:[a],args:{...t.input.args,tabs:l,customActions:r.jsx(h,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]}}),I=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],p=o.story({decorators:[e=>r.jsx(d,{initialEntries:["/docs"],children:r.jsx(b,{children:r.jsx(e,{})})})],args:{...t.input.args,tabs:I}}),u=o.story({decorators:[a],args:{...t.input.args,tabs:l,activeTabId:"campaigns"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Page Title'
  }
})`,...t.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    tabs
  }
})`,...s.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...i.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }]
  }
})`,...n.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    tabs,
    customActions: <Button>Custom action</Button>,
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }]
  }
})`,...c.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [(Story: StoryFn) => <MemoryRouter initialEntries={['/docs']}>
        <BUIProvider>
          <Story />
        </BUIProvider>
      </MemoryRouter>],
  args: {
    ...Default.input.args,
    tabs: groupedTabs
  }
})`,...p.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [withRouter],
  args: {
    ...Default.input.args,
    tabs,
    activeTabId: 'campaigns'
  }
})`,...u.input.parameters?.docs?.source}}};const jr=["Default","WithTabs","WithCustomActions","WithBreadcrumbs","WithLongBreadcrumbs","WithEverything","WithGroupedTabs","WithExplicitActiveTab"];export{t as Default,n as WithBreadcrumbs,i as WithCustomActions,c as WithEverything,u as WithExplicitActiveTab,p as WithGroupedTabs,m as WithLongBreadcrumbs,s as WithTabs,jr as __namedExportsOrder};
