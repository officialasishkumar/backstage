import{aN as I,aO as L,aP as S,aQ as j,$ as g,j as t,a0 as D}from"./iframe-BO_5tggG.js";import{c as f,D as v}from"./InsertDriveFile-Dz4xwALZ.js";import{s as C,M as _}from"./api-9_9Vr1Xp.js";import{S as o,c as N}from"./SearchResult-DEjVkGfA.js";import{L as R}from"./List-G7DDumso.js";import{H as n}from"./DefaultResultListItem-CBnWxSX7.js";import{a as k}from"./SearchResultList-BwQ__T_Y.js";import{w as q}from"./appWrappers-CO2B089V.js";import{L as w}from"./ListItem-sKW0pqw1.js";import{c as A}from"./Plugin-CsFNgcNN.js";import{S as E}from"./SearchContext-C1_Ybiel.js";import{L as W}from"./Link-Dg9RiCku.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKj891cs.js";import"./Add-ClYymc7k.js";import"./ArrowForwardIos-BQde62GM.js";import"./translation-Us0WI3gz.js";import"./useAnalytics-DiFHt5PS.js";import"./Select-DkwY-iRN.js";import"./index-B9sM2jn7.js";import"./Popover-BygJlL56.js";import"./Modal-Cny2cXs_.js";import"./Portal-BrtXVkDD.js";import"./formControlState-Iy4j1x4Q.js";import"./MenuItem-DfJeyD7R.js";import"./ListSubheader-fHK3Nb_N.js";import"./Chip-CGMOkp4p.js";import"./makeStyles-qdsN5qZw.js";import"./EmptyState-lV1H-x4X.js";import"./Grid-CnkSMyRl.js";import"./Progress-BbKadwBA.js";import"./LinearProgress-D045hvaq.js";import"./Box-CfORvOdf.js";import"./styled-b9HJcToZ.js";import"./ResponseErrorPanel-1W4QMLp7.js";import"./ErrorPanel-Bkrc0pz5.js";import"./WarningPanel-C169mnk7.js";import"./ExpandMore-DpSubzLY.js";import"./AccordionDetails-Bi2IJ0Rx.js";import"./Collapse-CzexmusQ.js";import"./MarkdownContent-ET2mybt7.js";import"./CodeSnippet-zEQrw_T4.js";import"./CopyTextButton-CFZUtUd7.js";import"./useCopyToClipboard-DOYygHqI.js";import"./useMountedState-ob0FKbjJ.js";import"./Tooltip-D7P0enQt.js";import"./Popper-DLJkmYqC.js";import"./ListItemText-DyH15FQE.js";import"./ListContext-B-Wc4pE1.js";import"./Divider-9aopozfB.js";import"./useAsync-X8ueQH82.js";import"./lodash-B-_hEigx.js";import"./useElementFilter-DdyyE_P6.js";import"./componentData-BMtHd5OU.js";import"./ListItemIcon-BiXS5uKl.js";import"./WebStorage-ksa_OCrH.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-B9ExD75k.js";import"./useIsomorphicLayoutEffect-DYRDPzzy.js";import"./useApp-DdxTl6og.js";import"./BUIProvider-BQQre2hP.js";import"./openLink-CrrHS3jY.js";import"./useRouteRef-DJo_PFt4.js";import"./index-BYPhHgSY.js";var i={},y;function P(){if(y)return i;y=1;var s=I(),e=L();Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=e(S()),u=s(j()),x=(0,u.default)(r.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return i.default=x,i}var G=P();const H=g(G),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},O=new _(M),Yt={title:"Plugins/Search/SearchResult",component:o,decorators:[s=>q(t.jsx(D,{apis:[[C,O]],children:t.jsx(E,{children:t.jsx(s,{})})}))],tags:["!manifest"]},h=s=>{const{result:e}=s;return t.jsx(w,{children:t.jsxs(W,{to:e.location,children:[e.title," - ",e.text]})})},a=()=>t.jsx(o,{children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),m=()=>{const s={term:"documentation"};return t.jsx(o,{query:s,children:({results:e})=>t.jsx(R,{children:e.map(({type:r,document:u})=>r==="custom-result-item"?t.jsx(h,{result:u},u.location):t.jsx(n,{result:u},u.location))})})},l=()=>t.jsx(o,{children:({results:s})=>t.jsx(k,{resultItems:s,renderResultItem:({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location)})}),c=()=>t.jsx(o,{children:({results:s})=>t.jsxs(t.Fragment,{children:[t.jsx(f,{icon:t.jsx(H,{}),title:"Custom",link:"See all custom results",resultItems:s.filter(({type:e})=>e==="custom-result-item"),renderResultItem:({document:e})=>t.jsx(h,{result:e},e.location)}),t.jsx(f,{icon:t.jsx(v,{}),title:"Default",resultItems:s.filter(({type:e})=>e!=="custom-result-item"),renderResultItem:({document:e})=>t.jsx(n,{result:e},e.location)})]})}),p=()=>t.jsx(o,{noResultsComponent:t.jsx(t.Fragment,{children:"No results were found"}),children:({results:s})=>t.jsx(R,{children:s.map(({type:e,document:r})=>e==="custom-result-item"?t.jsx(h,{result:r},r.location):t.jsx(n,{result:r},r.location))})}),d=()=>{const e=A({id:"plugin"}).provide(N({name:"DefaultResultListItem",component:async()=>n}));return t.jsx(o,{children:t.jsx(e,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};c.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};p.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};d.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
