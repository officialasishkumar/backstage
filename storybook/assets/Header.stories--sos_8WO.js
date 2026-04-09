import{j as r,M as d,p as f}from"./iframe-BwbkeUNF.js";import{H as g}from"./Header-Dolw55Z3.js";import{t as v}from"./index-D_vIB89H.js";import{M as y,a as x,b as B}from"./Menu-Bi3D8OCM.js";import{B as w}from"./ButtonIcon-J9wRqkJZ.js";import{B as b}from"./BUIProvider-BJAHywAp.js";import{B as h}from"./Button-CHhKTkvq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-YM0YGSZy.js";import"./utils-DTjexDOe.js";import"./useObjectRef-DjvHQg_I.js";import"./Label-CjQoUC4C.js";import"./Hidden-B4sJPhyi.js";import"./useNumberFormatter-p6fb5EiO.js";import"./context-Wo5QewPA.js";import"./useFocusable-DZhrPDt1.js";import"./openLink-BuoNKP2_.js";import"./useLabel-CGK6lBv3.js";import"./useLabels-DTg_imCw.js";import"./useButton-CgK4QaeX.js";import"./usePress-DrAuu34K.js";import"./textSelection-rD9BcpSo.js";import"./useFocusRing-BsUj4liY.js";import"./useLink-91_x4yQi.js";import"./Container-DUU-lP_N.js";import"./Link-BIyh8llM.js";import"./getNodeText-MlTHN761.js";import"./Text-Dh-yNwQs.js";import"./Autocomplete-Diw-8ybw.js";import"./RSPContexts-CF743Gjt.js";import"./useEvent-DHN8M9nF.js";import"./SelectionManager-DylcPNUe.js";import"./SelectionIndicator-Dh2ANNcZ.js";import"./useControlledState-4Ag57mvo.js";import"./useLocalizedStringFormatter-C-ux3O3q.js";import"./Separator-CKkgZAMH.js";import"./Input-kcBHRlSv.js";import"./useFormReset-BzBZr9VB.js";import"./useField-BBTetzMm.js";import"./Form-4lH-Wx6O.js";import"./ListBox-D4z3s7cP.js";import"./Text-4-OV3qAK.js";import"./useListState-B9_PqFlB.js";import"./Dialog-BCmZgtHn.js";import"./OverlayArrow-CQirbK-0.js";import"./animation-CkkuCiTf.js";import"./VisuallyHidden-CUr80uz3.js";import"./SearchField-BRS1NDBg.js";import"./FieldError-Cq-J7TrI.js";import"./Virtualizer-jolBS5oB.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-C-a4gzz-.js";const o=f.meta({title:"Backstage UI/Header",component:g,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],j=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],a=e=>r.jsx(d,{initialEntries:["/overview"],children:r.jsx(b,{children:r.jsx(e,{})})}),t=o.story({args:{title:"Page Title"}}),s=o.story({decorators:[a],args:{...t.input.args,tabs:l}}),i=o.story({decorators:[a],render:()=>r.jsx(g,{...t.input.args,customActions:r.jsxs(r.Fragment,{children:[r.jsx(h,{children:"Custom action"}),r.jsxs(y,{children:[r.jsx(w,{variant:"tertiary",icon:r.jsx(v,{}),"aria-label":"More options"}),r.jsx(x,{placement:"bottom end",children:j.map(e=>r.jsx(B,{onAction:e.onClick,href:e.href,children:e.label},e.value))})]})]})})}),n=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),m=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),c=o.story({decorators:[a],args:{...t.input.args,tabs:l,customActions:r.jsx(h,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]}}),I=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],p=o.story({decorators:[e=>r.jsx(d,{initialEntries:["/docs"],children:r.jsx(b,{children:r.jsx(e,{})})})],args:{...t.input.args,tabs:I}}),u=o.story({decorators:[a],args:{...t.input.args,tabs:l,activeTabId:"campaigns"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
