import{aN as I,aO as L,aP as S,aQ as j,a0 as g,j as t,a1 as D}from"./iframe-D_dthwJh.js";import{c as f,D as v}from"./InsertDriveFile-B5Cuy_vJ.js";import{s as C,M as _}from"./api-CMDZbhwq.js";import{S as o,c as N}from"./SearchResult-dIIRPNKw.js";import{L as R}from"./List-BtLOYLzX.js";import{H as n}from"./DefaultResultListItem-Cd4ZlHGF.js";import{a as k}from"./SearchResultList-CKT2BU2c.js";import{w as q}from"./appWrappers-CNajVLMi.js";import{L as w}from"./ListItem-DTl55zDW.js";import{c as A}from"./Plugin-SeWdjsMW.js";import{S as E}from"./SearchContext-BZiBRc6A.js";import{L as W}from"./Link-DIS7qTGn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvoP_oQN.js";import"./Add-f1MEBQMH.js";import"./ArrowForwardIos-DvOYq-qD.js";import"./translation-BIdlKBN9.js";import"./useAnalytics-BFleSJbt.js";import"./Select-DK13wNa6.js";import"./index-B9sM2jn7.js";import"./Popover-65jxITH8.js";import"./Modal-uU7908xY.js";import"./Portal-BUjXNiYO.js";import"./formControlState-CN8qEO_j.js";import"./MenuItem-D-lEMbpv.js";import"./ListSubheader-lBNBewGh.js";import"./Chip-T8y-KhZ5.js";import"./makeStyles-DvB3MZbd.js";import"./EmptyState-diek_vv8.js";import"./Grid-BjyqMpwT.js";import"./Progress-BGkAbS0P.js";import"./LinearProgress-GjkpCdds.js";import"./Box-BkfaYvLl.js";import"./styled-ClS6a4l6.js";import"./ResponseErrorPanel-BH98CwZl.js";import"./ErrorPanel-KKX5LcYK.js";import"./WarningPanel-t1ChgcN0.js";import"./ExpandMore-juWm_omF.js";import"./AccordionDetails-DWfCLGSB.js";import"./Collapse-5abwWzAL.js";import"./MarkdownContent-BPIooCL5.js";import"./CodeSnippet-BcxUzhJu.js";import"./CopyTextButton-BuV8owy4.js";import"./useCopyToClipboard-D8URo-wA.js";import"./useMountedState-Cazxj0V9.js";import"./Tooltip-Cd-sen2U.js";import"./Popper-D6KVGLgx.js";import"./ListItemText-CkW_v4PE.js";import"./ListContext-C98V7euk.js";import"./Divider-BMLrXSiB.js";import"./useAsync-CtEvpLQU.js";import"./lodash-BGiaY2vY.js";import"./useElementFilter-ZbjiwX4I.js";import"./componentData-CSbiHDN7.js";import"./ListItemIcon-BsWuRLje.js";import"./WebStorage-D-iTsV2i.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BI_fhvCL.js";import"./useIsomorphicLayoutEffect-COm_ITkd.js";import"./useApp-DOW2ZF1x.js";import"./BUIProvider-kgegLBnx.js";import"./openLink-DtEOuHfv.js";import"./useRouteRef-DVUEVzgi.js";import"./index-DMgM-NvI.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Zt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>q(t.jsx(D,{apis:[[C,O]],children:t.jsx(E,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(k,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=A({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
