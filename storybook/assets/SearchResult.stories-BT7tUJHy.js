import{aN as I,aO as L,aP as S,aQ as j,a0 as g,j as t,a1 as D}from"./iframe-v6zF9Gaf.js";import{c as f,D as v}from"./InsertDriveFile-CYyu6Qcu.js";import{s as C,M as _}from"./api-Dx1L8Feq.js";import{S as o,c as N}from"./SearchResult-C9VqorvB.js";import{S as k}from"./SearchContext-Det2F1sz.js";import{L as R}from"./List-BckW65rp.js";import{H as n}from"./DefaultResultListItem-BPN2Hr_R.js";import{a as q}from"./SearchResultList--StfBNu7.js";import{L as w}from"./ListItem-oij8p5Hz.js";import{w as A}from"./appWrappers-CavysmfH.js";import{c as E}from"./Plugin-BqZC9PeC.js";import{L as W}from"./Link-DqdRHmUD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4RBOydZ.js";import"./Add-CZi3mxAv.js";import"./ArrowForwardIos-O0z121WH.js";import"./translation-DmLwogss.js";import"./makeStyles-CnXLcFSM.js";import"./MenuItem-DQ5x8pMx.js";import"./ListSubheader-DtPoMzgc.js";import"./Chip-CmSyufGd.js";import"./Select-CXCVoow1.js";import"./index-B9sM2jn7.js";import"./Popover-P49c5zXb.js";import"./Modal-8auFf5gZ.js";import"./Portal-D_MLevm5.js";import"./formControlState-BzMiQeM8.js";import"./useAnalytics-BrIdl9nZ.js";import"./EmptyState-BWMgesrl.js";import"./Grid-Cpghltf9.js";import"./Progress-Dg0sd8G1.js";import"./LinearProgress-BITL7LXj.js";import"./Box-D8QaCveM.js";import"./styled-DI5Z0TIx.js";import"./ResponseErrorPanel-D0LmWHAV.js";import"./ErrorPanel-CjiL2jFL.js";import"./WarningPanel-Cxs2bCpa.js";import"./ExpandMore-sRHa_Mdt.js";import"./AccordionDetails-Doa0DUrz.js";import"./Collapse-BQyJjuJW.js";import"./MarkdownContent-DW5Rptjs.js";import"./CodeSnippet-DMjYU0Ny.js";import"./CopyTextButton-BNeWx_8L.js";import"./useCopyToClipboard-S_t1vYyn.js";import"./useMountedState-B4RaS-_B.js";import"./Tooltip-Bdf10fgk.js";import"./Popper-Ib5g_NV1.js";import"./ListItemText-Pt9uI0B9.js";import"./ListContext-DWGbobxz.js";import"./Divider-urck12QN.js";import"./useAsync-By65c0tc.js";import"./lodash-BcdJgnz3.js";import"./useElementFilter-B41bJv8j.js";import"./componentData-hTzXuu7t.js";import"./ListItemIcon-uKwWSNNb.js";import"./WebStorage-lw-nY7kq.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-7PDg4R1O.js";import"./useIsomorphicLayoutEffect-BwSGcGHF.js";import"./useApp-B9X-R3sY.js";import"./BUIProvider-DHQo4NNs.js";import"./openLink-CQrfrplF.js";import"./useRouteRef--TlAtFur.js";import"./index-C2dRPvEc.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Zt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>A(t.jsx(D,{apis:[[C,O]],children:t.jsx(k,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(q,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=E({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
