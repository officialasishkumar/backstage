import{j as e,M as v,p as y,u as x,r as j}from"./iframe-D2P1gL3G.js";import{H as a}from"./Header-CfrdcJ1t.js";import{t as B}from"./index-BjJQgUyN.js";import{M,a as w,b as H}from"./Menu-DjOseEGE.js";import{B as A}from"./ButtonIcon-8Aj59VCX.js";import{B as T}from"./BUIProvider-ClcL8Pie.js";import{B as I}from"./Button-BaZG5unO.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BbbNOE2b.js";import"./utils-D8szjJ2c.js";import"./useObjectRef-BXCH-BGa.js";import"./Label-BCMZO17W.js";import"./Hidden-BT-65IzW.js";import"./useNumberFormatter-HjpxQVG6.js";import"./context-CcQnNqSB.js";import"./useFocusable-BZMh4--7.js";import"./openLink-CB6NMuvw.js";import"./useLabel-CsNWXzKr.js";import"./useLabels-B47DhNpl.js";import"./useButton-BJ2e-LYD.js";import"./usePress-BE3xf_K_.js";import"./textSelection-CdkfQTHO.js";import"./useFocusRing-D4TU62mb.js";import"./useLink-B80Nkn1m.js";import"./Container-CXSSOZ-u.js";import"./Link-DD2FWL33.js";import"./getNodeText-DFa42uib.js";import"./Text-nwmGBrZo.js";import"./Autocomplete-ColTvxMg.js";import"./RSPContexts-DRWCAAs5.js";import"./useEvent-CSRHobgP.js";import"./SelectionManager-DK631bCD.js";import"./SelectionIndicator-a3FeXb6P.js";import"./useControlledState-DJUJGBnA.js";import"./useLocalizedStringFormatter-Cb1IcdRe.js";import"./Separator-CdA7SR4g.js";import"./Input-DOPnvSYB.js";import"./useFormReset-BxUBJ7_5.js";import"./useField-D1Z5Di-m.js";import"./Form-BGEnOjzQ.js";import"./ListBox-dimlHr9c.js";import"./Text-DjQtQM_B.js";import"./useListState-D1S-X9_g.js";import"./Dialog-DMzJLki3.js";import"./OverlayArrow-vi2dT5I9.js";import"./animation-BAipkFxa.js";import"./VisuallyHidden-CEZKru5T.js";import"./SearchField-NoFEjirT.js";import"./FieldError-Bikwi_dG.js";import"./Virtualizer-D8UzqKwX.js";import"./linkUtils-tKDL5Jm1.js";import"./useFilter-BEGfboNj.js";const o=y.meta({title:"Backstage UI/Header",component:a,parameters:{layout:"fullscreen"}}),l=[{id:"overview",label:"Overview",href:"/overview"},{id:"checks",label:"Checks",href:"/checks"},{id:"tracks",label:"Tracks",href:"/tracks"},{id:"campaigns",label:"Campaigns",href:"/campaigns"},{id:"integrations",label:"Integrations",href:"/integrations"}],C=[{label:"Settings",value:"settings",href:"/settings"},{label:"Invite new members",value:"invite-new-members",href:"/invite-new-members"},{label:"Logout",value:"logout",onClick:()=>{alert("logout")}}],i=r=>e.jsx(v,{initialEntries:["/overview"],children:e.jsx(T,{children:e.jsx(r,{})})});function h(r){const b=x();return j.useMemo(()=>{for(const s of r)if("items"in s){for(const g of s.items)if(g.href===b.pathname)return g.id}else if(s.href===b.pathname)return s.id},[r,b.pathname])}const t=o.story({args:{title:"Page Title"}}),n=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r})}}),c=o.story({decorators:[i],render:()=>e.jsx(a,{...t.input.args,customActions:e.jsxs(e.Fragment,{children:[e.jsx(I,{children:"Custom action"}),e.jsxs(M,{children:[e.jsx(A,{variant:"tertiary",icon:e.jsx(B,{}),"aria-label":"More options"}),e.jsx(w,{placement:"bottom end",children:C.map(r=>e.jsx(H,{onAction:r.onClick,href:r.href,children:r.label},r.value))})]})]})})}),m=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"}]}}),u=o.story({decorators:[i],args:{...t.input.args,breadcrumbs:[{label:"Home",href:"/"},{label:"Long Breadcrumb Name",href:"/long-breadcrumb"}]}}),p=o.story({decorators:[i],render:()=>{const r=h(l);return e.jsx(a,{title:"Page Title",tabs:l,activeTabId:r,customActions:e.jsx(I,{children:"Custom action"}),breadcrumbs:[{label:"Home",href:"/"}]})}}),f=[{id:"overview",label:"Overview",href:"/overview"},{id:"docs-group",label:"Documentation",items:[{id:"docs",label:"TechDocs",href:"/docs"},{id:"api-docs",label:"API Reference",href:"/api-docs"}]},{id:"ci",label:"CI/CD",href:"/ci"}],d=o.story({decorators:[r=>e.jsx(v,{initialEntries:["/docs"],children:e.jsx(T,{children:e.jsx(r,{})})})],render:()=>{const r=h(f);return e.jsx(a,{title:"Page Title",tabs:f,activeTabId:r})}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
