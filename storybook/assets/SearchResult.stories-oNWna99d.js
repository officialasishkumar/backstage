import{aN as I,aO as L,aP as S,aQ as j,$ as g,j as t,a0 as D}from"./iframe-Cfvhm_I_.js";import{c as f,D as v}from"./InsertDriveFile-DKpq1wSz.js";import{s as C,M as _}from"./api-BqbdDcwU.js";import{S as o,c as N}from"./SearchResult-wDo-ITz6.js";import{L as R}from"./List-BiOyHWo0.js";import{H as n}from"./DefaultResultListItem-uC9OhxhX.js";import{a as k}from"./SearchResultList-DIltagk8.js";import{w as q}from"./appWrappers-CURMqnS7.js";import{L as w}from"./ListItem-CHJsmnzK.js";import{c as A}from"./Plugin-ZtrPBzsn.js";import{S as E}from"./SearchContext-je3iF3vy.js";import{L as W}from"./Link-CW8AiaF7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3rL6W4c.js";import"./Add-COGUA2J6.js";import"./ArrowForwardIos-D0s-DmFU.js";import"./translation-zc4zA80-.js";import"./useAnalytics-CdOPkTnF.js";import"./Select-BT3ehC48.js";import"./index-B9sM2jn7.js";import"./Popover-CDSWPwDj.js";import"./Modal-ClsUAoOV.js";import"./Portal-BcsYPVrx.js";import"./formControlState-BDrYxmNl.js";import"./MenuItem-BlacGYcK.js";import"./ListSubheader-CcxNCrpk.js";import"./Chip-DAlNcAOH.js";import"./makeStyles-Cjp1zSIN.js";import"./EmptyState-DJClsogF.js";import"./Grid-DkWQjsJu.js";import"./Progress-CF-l4CIJ.js";import"./LinearProgress-CbRCEuIB.js";import"./Box-TWV5D5e5.js";import"./styled-CoxzwnbL.js";import"./ResponseErrorPanel-BwFQo_hx.js";import"./ErrorPanel-jpxce1_U.js";import"./WarningPanel-CeFCZlLN.js";import"./ExpandMore-2nkrX-rX.js";import"./AccordionDetails-BnoImMUN.js";import"./Collapse-Bkl5pvkJ.js";import"./MarkdownContent-Do-p_LG7.js";import"./CodeSnippet-D87ApJKe.js";import"./CopyTextButton-Cj5ankki.js";import"./useCopyToClipboard-Dld7blhS.js";import"./useMountedState-BjiBWndZ.js";import"./Tooltip-DafbC9NK.js";import"./Popper-BE9xQ5lf.js";import"./ListItemText-kVegO2IH.js";import"./ListContext-CKJ6dXnp.js";import"./Divider-DIyLyZOP.js";import"./useAsync-sA0E2EEG.js";import"./lodash-KfD76xoT.js";import"./useElementFilter-PoISQ78O.js";import"./componentData-Dr2I75va.js";import"./ListItemIcon-C9HTUINI.js";import"./WebStorage-btWLm3Q3.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTFBjHza.js";import"./useIsomorphicLayoutEffect-C2bDZ_EO.js";import"./useApp-B2trGyyJ.js";import"./BUIProvider-DgTdUX3X.js";import"./openLink-Bg6urkNK.js";import"./useRouteRef-DUyXh1ss.js";import"./index-BsVGjCRX.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Yt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>q(t.jsx(D,{apis:[[C,O]],children:t.jsx(E,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(k,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=A({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};const Zt=["Default","WithQuery","ListLayout","GroupLayout","WithCustomNoResultsComponent","UsingSearchResultItemExtensions"];export{a as Default,c as GroupLayout,l as ListLayout,d as UsingSearchResultItemExtensions,p as WithCustomNoResultsComponent,m as WithQuery,Zt as __namedExportsOrder,Yt as default};
