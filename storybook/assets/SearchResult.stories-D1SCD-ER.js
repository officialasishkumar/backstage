import{aN as I,aO as L,aP as S,aQ as j,a0 as g,j as t,a1 as D}from"./iframe-DyjKfHWP.js";import{c as f,D as v}from"./InsertDriveFile-B2NTKHDl.js";import{s as C,M as _}from"./api-aqHrYR18.js";import{S as o,c as N}from"./SearchResult-CpOAt1J0.js";import{L as R}from"./List-BPKCu-iI.js";import{H as n}from"./DefaultResultListItem-DQ3apcEX.js";import{a as k}from"./SearchResultList-CtPLF-3a.js";import{w as q}from"./appWrappers-9Bnj1hGJ.js";import{L as w}from"./ListItem-d1LcQsBU.js";import{c as A}from"./Plugin-C1RtEEQF.js";import{S as E}from"./SearchContext-d2BQh7Nj.js";import{L as W}from"./Link-GxS-0vqx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dq7131b2.js";import"./Add-p2wiWvaX.js";import"./ArrowForwardIos-CodR7p_0.js";import"./translation-D4PpU37F.js";import"./useAnalytics-DcziEhY3.js";import"./Select-wcb7JooM.js";import"./index-B9sM2jn7.js";import"./Popover-ru3MB2c_.js";import"./Modal-BoG7Ezu7.js";import"./Portal-DshplTSh.js";import"./formControlState-BWWY6Ag8.js";import"./MenuItem-y8KHgHjD.js";import"./ListSubheader-DZLPIL0N.js";import"./Chip-kua8BziX.js";import"./makeStyles-BTx5IhEq.js";import"./EmptyState-Cbc6pGIJ.js";import"./Grid-Yb0gK3gi.js";import"./Progress-P1MhculW.js";import"./LinearProgress-B9VxHHea.js";import"./Box-DrwrZr2h.js";import"./styled-C09kP24H.js";import"./ResponseErrorPanel-CP9oLJgp.js";import"./ErrorPanel-WS_MLd2q.js";import"./WarningPanel-Bzlxor5v.js";import"./ExpandMore-DJ2T2C8H.js";import"./AccordionDetails-DGHyCEBL.js";import"./Collapse-BMWOAJaZ.js";import"./MarkdownContent-C-irxnEP.js";import"./CodeSnippet-BfxZ2cTt.js";import"./CopyTextButton-BOnHpUDd.js";import"./useCopyToClipboard-K2-SSRbx.js";import"./useMountedState-CGjuPg1I.js";import"./Tooltip-gxRFNsDR.js";import"./Popper-BbowAVjj.js";import"./ListItemText-93JIksiO.js";import"./ListContext-Aak99S-R.js";import"./Divider-C90KJOkZ.js";import"./useAsync-D5QtpZ-X.js";import"./lodash-C9XZXW9l.js";import"./useElementFilter-DdXBSeM0.js";import"./componentData-C62ZTWZ4.js";import"./ListItemIcon-Dql2JfVF.js";import"./WebStorage-CLuCDckI.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DqVCHxDT.js";import"./useIsomorphicLayoutEffect-SIM9JiqY.js";import"./useApp-lFVRdKSK.js";import"./BUIProvider-BWH1udh2.js";import"./openLink-DApmBWn3.js";import"./useRouteRef-CT7iSpAX.js";import"./index-BxgWU5HL.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Zt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>q(t.jsx(D,{apis:[[C,O]],children:t.jsx(E,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(k,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=A({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
