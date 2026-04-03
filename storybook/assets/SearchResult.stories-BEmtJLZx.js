import{aN as I,aO as L,aP as S,aQ as j,a0 as g,j as t,a1 as D}from"./iframe-B8N4GvwI.js";import{c as f,D as v}from"./InsertDriveFile-DtubzDtY.js";import{s as C,M as _}from"./api-DaCjTZAh.js";import{S as o,c as N}from"./SearchResult-T51ekMQ1.js";import{L as R}from"./List-0a88D0vi.js";import{H as n}from"./DefaultResultListItem-BkVMoxSN.js";import{a as k}from"./SearchResultList-DOJY_tMs.js";import{w as q}from"./appWrappers-YTDhgaFi.js";import{L as w}from"./ListItem-DavGzvU0.js";import{c as A}from"./Plugin-BW2l4kKJ.js";import{S as E}from"./SearchContext-BaT9R6Sl.js";import{L as W}from"./Link-PlY-q14u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cw2iU0p9.js";import"./Add-YQskDqYa.js";import"./ArrowForwardIos-Btn8pJua.js";import"./translation-NmT1VsXB.js";import"./useAnalytics-BHUlNS6C.js";import"./Select-CiZfMWdU.js";import"./index-B9sM2jn7.js";import"./Popover-CyULg1bi.js";import"./Modal-D8VPwsry.js";import"./Portal-DI7AqiTH.js";import"./formControlState-T5pfdaY-.js";import"./MenuItem-DhG38EBr.js";import"./ListSubheader-_mOI1Nbr.js";import"./Chip-Bt5uR2Dp.js";import"./makeStyles-_6Yu2_YB.js";import"./EmptyState-TvYRRikj.js";import"./Grid-QaPYXNRs.js";import"./Progress-CcKNolQp.js";import"./LinearProgress-Dm-VSA-j.js";import"./Box-MYHTFpuj.js";import"./styled-DnQPDG99.js";import"./ResponseErrorPanel-BDhW8Zit.js";import"./ErrorPanel-8xco2MCR.js";import"./WarningPanel-Ku1v3GPQ.js";import"./ExpandMore-CqBUE46I.js";import"./AccordionDetails-CA8_s1mo.js";import"./Collapse-DZWChPOX.js";import"./MarkdownContent-BzPKdt5x.js";import"./CodeSnippet-q2WTZ-jj.js";import"./CopyTextButton-DZNYK8sC.js";import"./useCopyToClipboard-HWdxJ6ki.js";import"./useMountedState-BUHmGH1y.js";import"./Tooltip-DW4X55ZT.js";import"./Popper-Bkk-r00N.js";import"./ListItemText-DenrmzVf.js";import"./ListContext-Dw62DV8y.js";import"./Divider-Bt_pjoAt.js";import"./useAsync-DfYgaazr.js";import"./lodash-BgY7d7CH.js";import"./useElementFilter-CjwtRGq9.js";import"./componentData-CcL2xG2g.js";import"./ListItemIcon-E-KBjpdi.js";import"./WebStorage-BmgY5C-b.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-zEuNGP83.js";import"./useIsomorphicLayoutEffect-IuE3dwRY.js";import"./useApp-BEeSmtgR.js";import"./BUIProvider-Dc97VR6g.js";import"./openLink-D6fl38gK.js";import"./useRouteRef-Emzks17S.js";import"./index-8D16w7r_.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Zt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>q(t.jsx(D,{apis:[[C,O]],children:t.jsx(E,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(k,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=A({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult>
      {({
      results
    }) => <List>
          {results.map(({
        type,
        document
      }) => {
        switch (type) {
          case 'custom-result-item':
            return <CustomResultListItem key={document.location} result={document} />;
          default:
            return <DefaultResultListItem key={document.location} result={document} />;
        }
      })}
        </List>}
    </SearchResult>;
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const query = {
    term: 'documentation'
  };
  return <SearchResult query={query}>
      {({
      results
    }) => <List>
          {results.map(({
        type,
        document
      }) => {
        switch (type) {
          case 'custom-result-item':
            return <CustomResultListItem key={document.location} result={document} />;
          default:
            return <DefaultResultListItem key={document.location} result={document} />;
        }
      })}
        </List>}
    </SearchResult>;
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult>
      {({
      results
    }) => <SearchResultListLayout resultItems={results} renderResultItem={({
      type,
      document
    }) => {
      switch (type) {
        case 'custom-result-item':
          return <CustomResultListItem key={document.location} result={document} />;
        default:
          return <DefaultResultListItem key={document.location} result={document} />;
      }
    }} />}
    </SearchResult>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult>
      {({
      results
    }) => <>
          <SearchResultGroupLayout icon={<CustomIcon />} title="Custom" link="See all custom results" resultItems={results.filter(({
        type
      }) => type === 'custom-result-item')} renderResultItem={({
        document
      }) => <CustomResultListItem key={document.location} result={document} />} />
          <SearchResultGroupLayout icon={<DefaultIcon />} title="Default" resultItems={results.filter(({
        type
      }) => type !== 'custom-result-item')} renderResultItem={({
        document
      }) => <DefaultResultListItem key={document.location} result={document} />} />
        </>}
    </SearchResult>;
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <SearchResult noResultsComponent={<>No results were found</>}>
      {({
      results
    }) => <List>
          {results.map(({
        type,
        document
      }) => {
        switch (type) {
          case 'custom-result-item':
            return <CustomResultListItem key={document.location} result={document} />;
          default:
            return <DefaultResultListItem key={document.location} result={document} />;
        }
      })}
        </List>}
    </SearchResult>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const plugin = createPlugin({
    id: 'plugin'
  });
  const DefaultResultItem = plugin.provide(createSearchResultListItemExtension({
    name: 'DefaultResultListItem',
    component: async () => DefaultResultListItem
  }));
  return <SearchResult>
      <DefaultResultItem />
    </SearchResult>;
}`,...d.parameters?.docs?.source}}};const $t=["Default","WithQuery","ListLayout","GroupLayout","WithCustomNoResultsComponent","UsingSearchResultItemExtensions"];export{a as Default,c as GroupLayout,l as ListLayout,d as UsingSearchResultItemExtensions,p as WithCustomNoResultsComponent,m as WithQuery,$t as __namedExportsOrder,Zt as default};
