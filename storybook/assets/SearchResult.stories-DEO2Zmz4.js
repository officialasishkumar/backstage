import{aN as I,aO as L,aP as S,aQ as j,a0 as g,j as t,a1 as D}from"./iframe-B7X4koWg.js";import{c as f,D as v}from"./InsertDriveFile-CQJRXisP.js";import{s as C,M as _}from"./api-DV9pm_PS.js";import{S as o,c as N}from"./SearchResult-rpv1JYRL.js";import{L as R}from"./List-B4jJ8U2i.js";import{H as n}from"./DefaultResultListItem-9socbHGw.js";import{a as k}from"./SearchResultList-CiQrMSYX.js";import{w as q}from"./appWrappers-BXEhvQIz.js";import{L as w}from"./ListItem-BZPD3cNM.js";import{c as A}from"./Plugin-CRecCd5D.js";import{S as E}from"./SearchContext-Bd85Y6kK.js";import{L as W}from"./Link-DK73yQJ4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cc2I0kEC.js";import"./Add-h4a9WG8C.js";import"./ArrowForwardIos-Bw9XK4La.js";import"./translation-DHJVNl0w.js";import"./useAnalytics-BwhwrTZ0.js";import"./Select-gtq13jA2.js";import"./index-B9sM2jn7.js";import"./Popover-DFCWHpJT.js";import"./Modal-ngIBWuwT.js";import"./Portal-BVLNQ5cR.js";import"./formControlState-Dhhu7JPP.js";import"./MenuItem-CCFkIr0L.js";import"./ListSubheader-C-SeTJHM.js";import"./Chip-Bn5sNJ7t.js";import"./makeStyles-CiNtEf1f.js";import"./EmptyState-1HyDGfaB.js";import"./Grid-CsLGBI0Z.js";import"./Progress-Bpw6q33F.js";import"./LinearProgress-g0p5D58T.js";import"./Box-D1NbE0qt.js";import"./styled-Bs9bCmQE.js";import"./ResponseErrorPanel-DtnNKO2R.js";import"./ErrorPanel-DxNfSP2g.js";import"./WarningPanel-BTzP7nqd.js";import"./ExpandMore-BPX8WEL7.js";import"./AccordionDetails-DTQp2Cvk.js";import"./Collapse-eyI9DCCN.js";import"./MarkdownContent-BV7XBP7T.js";import"./CodeSnippet-CoJZeUNp.js";import"./CopyTextButton-BaBptCB3.js";import"./useCopyToClipboard-BYh5gSIA.js";import"./useMountedState-D8f8WPQV.js";import"./Tooltip-5XmI3CNW.js";import"./Popper-BwLyAbb_.js";import"./ListItemText-Cqy8IxmT.js";import"./ListContext-DYod19dm.js";import"./Divider-Dh3F_se-.js";import"./useAsync-DWgoS754.js";import"./lodash-CVU3dqUL.js";import"./useElementFilter-BjNxonfB.js";import"./componentData-DOqoOySj.js";import"./ListItemIcon-sECtBc41.js";import"./WebStorage-Dzr--kWq.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Ce4iI7ED.js";import"./useIsomorphicLayoutEffect-BBNG1fnm.js";import"./useApp-CJfDpKhN.js";import"./BUIProvider-DidJ51L8.js";import"./openLink-DCeIGU84.js";import"./useRouteRef-CcA8Qfeo.js";import"./index-Csz7HKtd.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Zt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>q(t.jsx(D,{apis:[[C,O]],children:t.jsx(E,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(k,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=A({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
