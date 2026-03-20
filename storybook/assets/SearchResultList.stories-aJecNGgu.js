import{j as e,Y as h,r as l}from"./iframe-D0nL_Agr.js";import{s as y,M as S}from"./api-DK3LhVf2.js";import{c as g}from"./SearchResult-DTw5fYXc.js";import{S as p}from"./SearchResultList-C3ETuihA.js";import{S as R}from"./Grid-Cj5fjV2g.js";import{S as I}from"./SearchContext-R_VcuGla.js";import{L as f}from"./ListItemText-COKbGLw8.js";import{H as q}from"./DefaultResultListItem-zVOn01qz.js";import{C as P}from"./icons-BS2-GadN.js";import{L as A}from"./ListItem-BvZ21ujD.js";import{L as C}from"./ListItemIcon-CmZ0brOR.js";import{w as j,c as w}from"./appWrappers-DpvrWMrt.js";import{c as v}from"./Plugin-Baao644E.js";import{L as W}from"./Link-ChRPIsYf.js";import"./preload-helper-PPVm8Dsz.js";import"./useAnalytics-DHjT-X03.js";import"./useAsync-CTfQC1T2.js";import"./useMountedState-D6h1Oxy0.js";import"./lodash-C8hrBFZO.js";import"./List-B6josrBo.js";import"./ListContext-Dwy-3B6k.js";import"./useElementFilter-CRoBkzp2.js";import"./componentData-BbYq1rWo.js";import"./translation-CIFT46X8.js";import"./EmptyState-ubhZd0RR.js";import"./makeStyles-CEEIeaPc.js";import"./Progress-giOd2CXs.js";import"./LinearProgress-BrUf00qz.js";import"./Box-BBeBWSpp.js";import"./styled-ud37gncL.js";import"./ResponseErrorPanel-CNEtCLFX.js";import"./ErrorPanel-BVtOabjF.js";import"./WarningPanel-CplvYfF5.js";import"./ExpandMore-DfFo8jQ4.js";import"./AccordionDetails-KA1uC9fh.js";import"./index-B9sM2jn7.js";import"./Collapse-PPyuJLE3.js";import"./MarkdownContent-DMq6MwFY.js";import"./CodeSnippet-B_McEZEi.js";import"./CopyTextButton-3ruE736v.js";import"./useCopyToClipboard-BufagX_d.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";import"./Portal-CKyiLAPX.js";import"./Divider-DZ5_AQ1V.js";import"./useApp-D1uJ25an.js";import"./WebStorage-uwUF_EA0.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-C_CdmF_Y.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";import"./useRouteRef-D1c-R20K.js";import"./index-DZW9dhqm.js";const T=w({id:"storybook.search.results.list.route"}),D=new S({results:[{type:"techdocs",document:{location:"search/search-result1",title:"Search Result 1",text:"Some text from the search result 1"}},{type:"custom",document:{location:"search/search-result2",title:"Search Result 2",text:"Some text from the search result 2"}}]}),Me={title:"Plugins/Search/SearchResultList",component:p,decorators:[t=>j(e.jsx(h,{apis:[[y,D]],children:e.jsx(R,{container:!0,direction:"row",children:e.jsx(R,{item:!0,xs:12,children:e.jsx(t,{})})})}),{mountedRoutes:{"/":T}})],tags:["!manifest"]},s=()=>e.jsx(I,{children:e.jsx(p,{})}),o=()=>{const[t]=l.useState({types:["techdocs"]});return e.jsx(p,{query:t})},n=()=>{const[t]=l.useState({types:["techdocs"]});return e.jsx(h,{apis:[[y,{query:()=>new Promise(()=>{})}]],children:e.jsx(p,{query:t})})},a=()=>{const[t]=l.useState({types:["techdocs"]});return e.jsx(h,{apis:[[y,{query:()=>new Promise(()=>{throw new Error})}]],children:e.jsx(p,{query:t})})},c=()=>{const[t]=l.useState({types:["techdocs"]});return e.jsx(h,{apis:[[y,new S]],children:e.jsx(p,{query:t})})},i=()=>{const[t]=l.useState({types:["techdocs"]});return e.jsx(h,{apis:[[y,new S]],children:e.jsx(p,{query:t,noResultsComponent:e.jsx(f,{primary:"No results were found"})})})},N=t=>{const{icon:d,result:r}=t;return e.jsx(W,{to:r.location,children:e.jsxs(A,{alignItems:"flex-start",divider:!0,children:[d&&e.jsx(C,{children:d}),e.jsx(f,{primary:r.title,primaryTypographyProps:{variant:"h6"},secondary:r.text})]})})},u=()=>{const[t]=l.useState({types:["custom"]});return e.jsx(p,{query:t,renderResultItem:({type:d,document:r,highlight:L,rank:x})=>d==="custom"?e.jsx(N,{icon:e.jsx(P,{}),result:r,highlight:L,rank:x},r.location):e.jsx(q,{result:r},r.location)})},m=()=>{const[t]=l.useState({types:["techdocs"]}),r=v({id:"plugin"}).provide(g({name:"DefaultResultListItem",component:async()=>q}));return e.jsx(p,{query:t,children:e.jsx(r,{})})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};n.__docgenInfo={description:"",methods:[],displayName:"Loading"};a.__docgenInfo={description:"",methods:[],displayName:"WithError"};c.__docgenInfo={description:"",methods:[],displayName:"WithDefaultNoResultsComponent"};i.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};u.__docgenInfo={description:"",methods:[],displayName:"WithCustomResultItem"};m.__docgenInfo={description:"",methods:[],displayName:"WithResultItemExtensions"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
  return (
    <SearchContextProvider>
      <SearchResultList />
    </SearchContextProvider>
  );
};
`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const WithQuery = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return <SearchResultList query={query} />;
};
`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const Loading = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider
      apis={[
        [searchApiRef, { query: () => new Promise<SearchResultSet>(() => {}) }],
      ]}
    >
      <SearchResultList query={query} />
    </TestApiProvider>
  );
};
`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const WithError = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider
      apis={[
        [
          searchApiRef,
          {
            query: () =>
              new Promise<SearchResultSet>(() => {
                throw new Error();
              }),
          },
        ],
      ]}
    >
      <SearchResultList query={query} />
    </TestApiProvider>
  );
};
`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{code:`const WithDefaultNoResultsComponent = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultList query={query} />
    </TestApiProvider>
  );
};
`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{code:`const WithCustomNoResultsComponent = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultList
        query={query}
        noResultsComponent={<ListItemText primary="No results were found" />}
      />
    </TestApiProvider>
  );
};
`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{code:`const WithCustomResultItem = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["custom"],
  });

  return (
    <SearchResultList
      query={query}
      renderResultItem={({ type, document, highlight, rank }) => {
        switch (type) {
          case "custom":
            return (
              <CustomResultListItem
                key={document.location}
                icon={<CatalogIcon />}
                result={document}
                highlight={highlight}
                rank={rank}
              />
            );
          default:
            return (
              <DefaultResultListItem
                key={document.location}
                result={document}
              />
            );
        }
      }}
    />
  );
};
`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{code:`const WithResultItemExtensions = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });
  const plugin = createPlugin({ id: "plugin" });
  const DefaultSearchResultListItem = plugin.provide(
    createSearchResultListItemExtension({
      name: "DefaultResultListItem",
      component: async () => DefaultResultListItem,
    })
  );
  return (
    <SearchResultList query={query}>
      <DefaultSearchResultListItem />
    </SearchResultList>
  );
};
`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <SearchContextProvider>
      <SearchResultList />
    </SearchContextProvider>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <SearchResultList query={query} />;
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {})
  }]]}>
      <SearchResultList query={query} />
    </TestApiProvider>;
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {
      throw new Error();
    })
  }]]}>
      <SearchResultList query={query} />
    </TestApiProvider>;
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultList query={query} />
    </TestApiProvider>;
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultList query={query} noResultsComponent={<ListItemText primary="No results were found" />} />
    </TestApiProvider>;
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultList query={query} renderResultItem={({
    type,
    document,
    highlight,
    rank
  }) => {
    switch (type) {
      case 'custom':
        return <CustomResultListItem key={document.location} icon={<CatalogIcon />} result={document} highlight={highlight} rank={rank} />;
      default:
        return <DefaultResultListItem key={document.location} result={document} />;
    }
  }} />;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  const plugin = createPlugin({
    id: 'plugin'
  });
  const DefaultSearchResultListItem = plugin.provide(createSearchResultListItemExtension({
    name: 'DefaultResultListItem',
    component: async () => DefaultResultListItem
  }));
  return <SearchResultList query={query}>
      <DefaultSearchResultListItem />
    </SearchResultList>;
}`,...m.parameters?.docs?.source}}};const He=["Default","WithQuery","Loading","WithError","WithDefaultNoResultsComponent","WithCustomNoResultsComponent","WithCustomResultItem","WithResultItemExtensions"];export{s as Default,n as Loading,i as WithCustomNoResultsComponent,u as WithCustomResultItem,c as WithDefaultNoResultsComponent,a as WithError,o as WithQuery,m as WithResultItemExtensions,He as __namedExportsOrder,Me as default};
