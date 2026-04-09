import{j as r,M as d,p as f}from"./iframe-DeVvrktA.js";import{H as g}from"./Header-DmDm09tu.js";import{t as v}from"./index-Va6-8CM6.js";import{M as y,a as x,b as B}from"./Menu-Kger2_Ew.js";import{B as w}from"./ButtonIcon-DI1QpbkX.js";import{B as b}from"./BUIProvider-CXiawPZL.js";import{B as h}from"./Button-D5sNWjQr.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BCH5mXSs.js";import"./utils-CE-z1EYB.js";import"./useObjectRef-BDCAKH9y.js";import"./Label-BsAmUuAr.js";import"./Hidden-CwlAxlLh.js";import"./useNumberFormatter-Bb7bWC44.js";import"./context-DEiurlKy.js";import"./useFocusable-CyP8oQTO.js";import"./openLink-DB0X2oCJ.js";import"./useLabel-lCZDMOjA.js";import"./useLabels-DroepvJv.js";import"./useButton-DK0Un8vp.js";import"./usePress-tFvrQuTt.js";import"./textSelection-D8Lmd9aD.js";import"./useFocusRing-BujH4uZU.js";import"./useLink-BYSA2tFJ.js";import"./Container-BKtusKFB.js";import"./Link-D8fubg7A.js";import"./getNodeText-D3O5DtlC.js";import"./Text-CwOi3PCK.js";import"./Autocomplete-CIKJ4w7c.js";import"./RSPContexts-Dw3zgcwS.js";import"./useEvent-DJZYr3G_.js";import"./SelectionManager-2t_JhCd5.js";import"./SelectionIndicator-CKZzjsgz.js";import"./useControlledState-CGhBmLiy.js";import"./useLocalizedStringFormatter-Dn4ZSV37.js";import"./Separator-BMgSKkTR.js";import"./Input-eRzRuHef.js";import"./useFormReset-DlY4Y4So.js";import"./useField-DP0xoDEN.js";import"./Form-Dbe-g-23.js";import"./ListBox-F-Kh9Nea.js";import"./Text-C4ruOvUx.js";import"./useListState-B6Yun48H.js";import"./Dialog-DzqSNPhD.js";import"./OverlayArrow-B5HnnrWf.js";import"./animation-nxRZ2C2s.js";import"./VisuallyHidden-BGlwNuIC.js";import"./SearchField-D7JC8axx.js";import"./FieldError-Cs5pALKh.js";import"./Virtualizer-DKCdg3H9.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-BYaNqrQo.js";const o=f.meta({title:"Backstage UI/Header",component:g,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],j=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],a=e=>r.jsx(d,{initialEntries:["/overview"],children:r.jsx(b,{children:r.jsx(e,{})})}),t=o.story({args:{title:"Page Title"}}),s=o.story({decorators:[a],args:{...t.input.args,tabs:l}}),i=o.story({decorators:[a],render:()=>r.jsx(g,{...t.input.args,customActions:r.jsxs(r.Fragment,{children:[r.jsx(h,{children:"Custom action"}),r.jsxs(y,{children:[r.jsx(w,{variant:"tertiary",icon:r.jsx(v,{}),"aria-label":"More options"}),r.jsx(x,{placement:"bottom end",children:j.map(e=>r.jsx(B,{onAction:e.onClick,href:e.href,children:e.label},e.value))})]})]})})}),n=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),m=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),c=o.story({decorators:[a],args:{...t.input.args,tabs:l,customActions:r.jsx(h,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]}}),I=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],p=o.story({decorators:[e=>r.jsx(d,{initialEntries:["/docs"],children:r.jsx(b,{children:r.jsx(e,{})})})],args:{...t.input.args,tabs:I}}),u=o.story({decorators:[a],args:{...t.input.args,tabs:l,activeTabId:"campaigns"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
