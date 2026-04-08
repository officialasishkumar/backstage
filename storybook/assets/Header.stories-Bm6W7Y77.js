import{j as r,M as d,p as f}from"./iframe-CIiIDGZ-.js";import{H as g}from"./Header-CKyDybyH.js";import{t as v}from"./index-D1doK9VC.js";import{M as y,a as x,b as B}from"./Menu-Drna0Qp4.js";import{B as w}from"./ButtonIcon-CF94HNpc.js";import{B as b}from"./BUIProvider-gtQJ0CU8.js";import{B as h}from"./Button-k9DSAX1Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-DVlU3AH3.js";import"./utils-B80od1Qh.js";import"./useObjectRef-D7q8cISt.js";import"./Label-Co2tAmlU.js";import"./Hidden-BhHhnctg.js";import"./useNumberFormatter-BnDx_1jp.js";import"./context-C2JjmbWD.js";import"./useFocusable-LO8wu514.js";import"./openLink-BYuufqBj.js";import"./useLabel-Bdn_FQNn.js";import"./useLabels-Dwl3v26l.js";import"./useButton-aSd5se7_.js";import"./usePress-B2sribOf.js";import"./textSelection-CDO73jOW.js";import"./useFocusRing-CzEpNm8F.js";import"./useLink-vqo2lMBx.js";import"./Container-LgM8ZuTA.js";import"./Link-hFaB02Wf.js";import"./getNodeText-CqK4icl_.js";import"./Text-DaEAKnUx.js";import"./Autocomplete-DdTHuJtA.js";import"./RSPContexts-CczCLsj4.js";import"./useEvent-DoIUflQK.js";import"./SelectionManager-BBJrZAXC.js";import"./SelectionIndicator-Blz3zvsy.js";import"./useControlledState-Bxlshp1l.js";import"./useLocalizedStringFormatter-VIFOsExW.js";import"./Separator-CpEdJGkM.js";import"./Input-CYqfHUZv.js";import"./useFormReset-N44hr4Os.js";import"./useField-Ceg55KY5.js";import"./Form-DbC3NtFc.js";import"./ListBox-sRabrpk3.js";import"./Text-hFU8oBTt.js";import"./useListState-BL7QoN2d.js";import"./Dialog-xGHOEcE4.js";import"./OverlayArrow-CJds3cn7.js";import"./animation-C8st7HfQ.js";import"./VisuallyHidden-uEL1BqA-.js";import"./SearchField-C56yAjDg.js";import"./FieldError-OWNG37Uv.js";import"./Virtualizer-iWYLxVfN.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-mzvXsEtp.js";const o=f.meta({title:"Backstage UI/Header",component:g,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],j=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],a=e=>r.jsx(d,{initialEntries:["/overview"],children:r.jsx(b,{children:r.jsx(e,{})})}),t=o.story({args:{title:"Page Title"}}),s=o.story({decorators:[a],args:{...t.input.args,tabs:l}}),i=o.story({decorators:[a],render:()=>r.jsx(g,{...t.input.args,customActions:r.jsxs(r.Fragment,{children:[r.jsx(h,{children:"Custom action"}),r.jsxs(y,{children:[r.jsx(w,{variant:"tertiary",icon:r.jsx(v,{}),"aria-label":"More options"}),r.jsx(x,{placement:"bottom end",children:j.map(e=>r.jsx(B,{onAction:e.onClick,href:e.href,children:e.label},e.value))})]})]})})}),n=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),m=o.story({decorators:[a],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),c=o.story({decorators:[a],args:{...t.input.args,tabs:l,customActions:r.jsx(h,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]}}),I=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],p=o.story({decorators:[e=>r.jsx(d,{initialEntries:["/docs"],children:r.jsx(b,{children:r.jsx(e,{})})})],args:{...t.input.args,tabs:I}}),u=o.story({decorators:[a],args:{...t.input.args,tabs:l,activeTabId:"campaigns"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
