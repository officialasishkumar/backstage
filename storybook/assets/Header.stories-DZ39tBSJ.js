import{j as r,M as d,p as f}from"./iframe-Cfvhm_I_.js";import{H as g}from"./Header-beATBNYd.js";import{t as v}from"./index-DmQuIqXH.js";import{M as y,a as x,b as B}from"./Menu-_XxClqx3.js";import{B as w}from"./ButtonIcon-DU9joX0E.js";import{B as b}from"./BUIProvider-DgTdUX3X.js";import{B as h}from"./Button-Jba7jx0N.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-Bt4qn5r2.js";import"./utils-NKCPgaqN.js";import"./useObjectRef-vvR-D69_.js";import"./Label-KioRYZe4.js";import"./Hidden-CJJ6f5wI.js";import"./useNumberFormatter-C4KTolLF.js";import"./context-BFvw4ZZw.js";import"./useFocusable-FhjipBEG.js";import"./openLink-Bg6urkNK.js";import"./useLabel-DsarJHVH.js";import"./useLabels-C81rtTWW.js";import"./useButton-D2EMNUiN.js";import"./usePress-vSFxZuki.js";import"./textSelection-B1IJ7lT8.js";import"./useFocusRing-aQX9M6VZ.js";import"./useLink-BqWb2wOQ.js";import"./Container-BIW3reqi.js";import"./Link-US0mgfvA.js";import"./getNodeText-hpdc6kBI.js";import"./Text-CPoZ0T6Z.js";import"./Autocomplete-BYdb6x90.js";import"./RSPContexts-TxMGKc65.js";import"./useEvent-zDE74eNy.js";import"./SelectionManager-BAyLh6Od.js";import"./SelectionIndicator-BLLQH_5D.js";import"./useControlledState-B6ajkJKe.js";import"./useLocalizedStringFormatter-C2mSSPWV.js";import"./Separator-CeCWs8mC.js";import"./Input-D37qf9LB.js";import"./useFormReset-DldKZg8u.js";import"./useField-hSueKPpB.js";import"./Form-BhZyqZKD.js";import"./ListBox-DGi95Wfw.js";import"./Text-Du8qum6_.js";import"./useListState-Bk3kruvf.js";import"./Dialog-04wNgRpO.js";import"./OverlayArrow-IUzf-hkE.js";import"./animation-F0pdzh0X.js";import"./VisuallyHidden-CNfcrBpM.js";import"./SearchField-C1nzibnp.js";import"./FieldError-Be30N9Ah.js";import"./Virtualizer-BgdN9syi.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-Co5sxCDd.js";const o=f.meta({title:"Backstage UI/Header",component:g,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],j=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],a=e=>r.jsx(d,{initialEntries:["/overview"],children:r.jsx(b,{children:r.jsx(e,{})})}),t=o.story({args:{title:"Page Title"}}),s=o.story({decorators:[a],args:{...t.input.args,tabs:l}}),i=o.story({decorators:[a],render:()=>r.jsx(g,{...t.input.args,customActions:r.jsxs(r.Fragment,{children:[r.jsx(h,{children:"Custom action"}),r.jsxs(y,{children:[r.jsx(w,{variant:"tertiary",icon:r.jsx(v,{}),"aria-label":"More options"}),r.jsx(x,{placement:"bottom end",children:j.map(e=>r.jsx(B,{onAction:e.onClick,href:e.href,children:e.label},e.value))})]})]})})}),n=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),m=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),c=o.story({decorators:[a],args:{...t.input.args,tabs:l,customActions:r.jsx(h,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]}}),I=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],p=o.story({decorators:[e=>r.jsx(d,{initialEntries:["/docs"],children:r.jsx(b,{children:r.jsx(e,{})})})],args:{...t.input.args,tabs:I}}),u=o.story({decorators:[a],args:{...t.input.args,tabs:l,activeTabId:"campaigns"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
