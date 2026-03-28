import{j as e,a2 as D,r as s}from"./iframe-DIo-SVbu.js";import{S as n,D as o,a as A,b as L}from"./InsertDriveFile-C8sqVEJE.js";import{s as F,M as C}from"./api-KlxuL8JE.js";import{c as W}from"./SearchResult-CkSYjcHD.js";import{S as j}from"./Grid-CQTc9qXc.js";import{S as T}from"./SearchContext-DFouf2wk.js";import{M as w}from"./MenuItem-DGiznast.js";import{L as Q}from"./ListItemText-Bj8x_bGs.js";import{L as b}from"./ListItem-B48sv7Dp.js";import{L as _}from"./ListItemIcon-C7UESPSZ.js";import{H as N}from"./DefaultResultListItem-BaslxeM_.js";import{w as M,c as E}from"./appWrappers-DR3WgLiZ.js";import{c as O}from"./Plugin-BiTAoXGr.js";import{L as H}from"./Link-nV2wBi6-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVRMfSGy.js";import"./Add-CmaA20Hq.js";import"./ArrowForwardIos-DTNcSHTI.js";import"./translation-qZhn7YJ9.js";import"./makeStyles-DQU7Dv0P.js";import"./List-DIbhVy0B.js";import"./ListContext-maWUp7BP.js";import"./ListSubheader-C7X9Fy4m.js";import"./Chip-DqUZQtMs.js";import"./Select-Dd91sM0K.js";import"./index-B9sM2jn7.js";import"./Popover-CgcEC2FX.js";import"./Modal-D5veMRiH.js";import"./Portal-CvYRjmi_.js";import"./formControlState-BxS7n7YR.js";import"./useAnalytics-Dz8yJH5J.js";import"./EmptyState-NxxFH6k5.js";import"./Progress-oTgYKPOB.js";import"./LinearProgress-CUHxQVkv.js";import"./Box-DSdsOjrk.js";import"./styled-BsApB3tE.js";import"./ResponseErrorPanel-BgI62Ijw.js";import"./ErrorPanel-BmaIqUxn.js";import"./WarningPanel-BOHyomdW.js";import"./ExpandMore-BgSlDM6I.js";import"./AccordionDetails-q-sTEdd4.js";import"./Collapse-BsSPbFVQ.js";import"./MarkdownContent-ZKdzag3g.js";import"./CodeSnippet-CeX8qwwK.js";import"./CopyTextButton-DPzAxb5N.js";import"./useCopyToClipboard-Ch1BFfQF.js";import"./useMountedState-CYCgoyDm.js";import"./Tooltip-RSYyjwWd.js";import"./Popper-Mh-qpcao.js";import"./Divider-Bv1BaoB-.js";import"./useAsync-CZHEyuUs.js";import"./lodash-CorumTZI.js";import"./useElementFilter-BHjcvPuv.js";import"./componentData-Cq2oJfSV.js";import"./WebStorage-BK2KlcPz.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-rc5V7nNm.js";import"./useIsomorphicLayoutEffect-DFFlChJX.js";import"./AppThemeApi-napO7fl3.js";import"./useApp-DoXX_S3p.js";import"./BUIProvider-CiWIfurT.js";import"./openLink-Cz27Urod.js";import"./useRouteRef-DWfPmhX9.js";import"./index-BWhcP_hn.js";const J=E({id:"storybook.search.results.group.route"}),V=new C({results:[{type:"techdocs",document:{location:"search/search-result1",title:"Search Result 1",text:"Some text from the search result 1"}},{type:"custom",document:{location:"search/search-result2",title:"Search Result 2",text:"Some text from the search result 2"}}]}),ot={title:"Plugins/Search/SearchResultGroup",component:n,decorators:[t=>M(e.jsx(D,{apis:[[F,V]],children:e.jsx(j,{container:!0,direction:"row",children:e.jsx(j,{item:!0,xs:12,children:e.jsx(t,{})})})}),{mountedRoutes:{"/":J}})],tags:["!manifest"]},a=()=>e.jsx(T,{children:e.jsx(n,{icon:e.jsx(o,{}),title:"Documentation"})}),u=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation"})},l=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,{query:()=>new Promise(()=>{})}]],children:e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation"})})},p=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,{query:()=>new Promise(()=>{throw new Error})}]],children:e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation"})})},m=()=>{const[t]=s.useState({types:["custom"]});return e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Custom",titleProps:{color:"secondary"}})},d=()=>{const[t]=s.useState({types:["custom"]});return e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Custom",link:"See all custom results",linkProps:{to:"/custom"}})},h=()=>{const[t,c]=s.useState({types:["software-catalog"]}),i=[{label:"Lifecycle",value:"lifecycle"},{label:"Owner",value:"owner"}],x=s.useCallback(r=>()=>{c(I=>{const{filters:g,...q}=I,v={...g,[r]:void 0};return{...q,filters:v}})},[]),k=s.useCallback(r=>I=>{c(g=>{const{filters:q,...v}=g,G={...q,[r]:I};return{...v,filters:G}})},[]),P=s.useCallback(r=>()=>{c(I=>{const{filters:g,...q}=I,v={...g};return delete v[r],{...q,filters:v}})},[]);return e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation",filterOptions:i,renderFilterOption:r=>e.jsx(w,{onClick:x(r.value),children:r.label},r.value),renderFilterField:r=>{switch(r){case"lifecycle":return e.jsxs(L,{label:"Lifecycle",value:t.filters?.lifecycle,onChange:k("lifecycle"),onDelete:P("lifecycle"),children:[e.jsx(w,{value:"production",children:"Production"}),e.jsx(w,{value:"experimental",children:"Experimental"})]},r);case"owner":return e.jsx(A,{label:"Owner",value:t.filters?.owner,onChange:k("owner"),onDelete:P("owner")},r);default:return null}}})},y=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,new C]],children:e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation"})})},S=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,new C]],children:e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation",noResultsComponent:e.jsx(Q,{primary:"No results were found"})})})},z=t=>{const{icon:c,result:i}=t;return e.jsx(H,{to:i.location,children:e.jsxs(b,{alignItems:"flex-start",divider:!0,children:[c&&e.jsx(_,{children:c}),e.jsx(Q,{primary:i.title,primaryTypographyProps:{variant:"h6"},secondary:i.text})]})})},f=()=>{const[t]=s.useState({types:["custom"]});return e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Custom",link:"See all custom results",renderResultItem:({document:c,highlight:i,rank:x})=>e.jsx(z,{result:c,highlight:i,rank:x},c.location)})},R=()=>{const[t]=s.useState({types:["techdocs"]}),i=O({id:"plugin"}).provide(W({name:"DefaultResultListItem",component:async()=>N}));return e.jsx(n,{query:t,icon:e.jsx(o,{}),title:"Documentation",children:e.jsx(i,{})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};l.__docgenInfo={description:"",methods:[],displayName:"Loading"};p.__docgenInfo={description:"",methods:[],displayName:"WithError"};m.__docgenInfo={description:"",methods:[],displayName:"WithCustomTitle"};d.__docgenInfo={description:"",methods:[],displayName:"WithCustomLink"};h.__docgenInfo={description:"",methods:[],displayName:"WithFilters"};y.__docgenInfo={description:"",methods:[],displayName:"WithDefaultNoResultsComponent"};S.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};f.__docgenInfo={description:"",methods:[],displayName:"WithCustomResultItem"};R.__docgenInfo={description:"",methods:[],displayName:"WithResultItemExtensions"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const Default = () => {
  return (
    <SearchContextProvider>
      <SearchResultGroup icon={<DocsIcon />} title="Documentation" />
    </SearchContextProvider>
  );
};
`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{code:`const WithQuery = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <SearchResultGroup
      query={query}
      icon={<DocsIcon />}
      title="Documentation"
    />
  );
};
`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{code:`const Loading = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider
      apis={[
        [searchApiRef, { query: () => new Promise<SearchResultSet>(() => {}) }],
      ]}
    >
      <SearchResultGroup
        query={query}
        icon={<DocsIcon />}
        title="Documentation"
      />
    </TestApiProvider>
  );
};
`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{code:`const WithError = () => {
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
      <SearchResultGroup
        query={query}
        icon={<DocsIcon />}
        title="Documentation"
      />
    </TestApiProvider>
  );
};
`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{code:`const WithCustomTitle = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["custom"],
  });

  return (
    <SearchResultGroup
      query={query}
      icon={<DocsIcon />}
      title="Custom"
      titleProps={{ color: "secondary" }}
    />
  );
};
`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{code:`const WithCustomLink = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["custom"],
  });

  return (
    <SearchResultGroup
      query={query}
      icon={<DocsIcon />}
      title="Custom"
      link="See all custom results"
      linkProps={{ to: "/custom" }}
    />
  );
};
`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{code:`const WithFilters = () => {
  const [query, setQuery] = useState<Partial<SearchQuery>>({
    types: ["software-catalog"],
  });

  const filterOptions = [
    {
      label: "Lifecycle",
      value: "lifecycle",
    },
    {
      label: "Owner",
      value: "owner",
    },
  ];

  const handleFilterAdd = useCallback(
    (key: string) => () => {
      setQuery((prevQuery) => {
        const { filters: prevFilters, ...rest } = prevQuery;
        const newFilters = { ...prevFilters, [key]: undefined };
        return { ...rest, filters: newFilters };
      });
    },
    []
  );

  const handleFilterChange = useCallback(
    (key: string) => (value: JsonValue) => {
      setQuery((prevQuery) => {
        const { filters: prevFilters, ...rest } = prevQuery;
        const newFilters = { ...prevFilters, [key]: value };
        return { ...rest, filters: newFilters };
      });
    },
    []
  );

  const handleFilterDelete = useCallback(
    (key: string) => () => {
      setQuery((prevQuery) => {
        const { filters: prevFilters, ...rest } = prevQuery;
        const newFilters = { ...prevFilters };
        delete newFilters[key];
        return { ...rest, filters: newFilters };
      });
    },
    []
  );

  return (
    <SearchResultGroup
      query={query}
      icon={<DocsIcon />}
      title="Documentation"
      filterOptions={filterOptions}
      renderFilterOption={(option) => (
        <MenuItem key={option.value} onClick={handleFilterAdd(option.value)}>
          {option.label}
        </MenuItem>
      )}
      renderFilterField={(key: string) => {
        switch (key) {
          case "lifecycle":
            return (
              <SearchResultGroupSelectFilterField
                key={key}
                label="Lifecycle"
                value={query.filters?.lifecycle}
                onChange={handleFilterChange("lifecycle")}
                onDelete={handleFilterDelete("lifecycle")}
              >
                <MenuItem value="production">Production</MenuItem>
                <MenuItem value="experimental">Experimental</MenuItem>
              </SearchResultGroupSelectFilterField>
            );
          case "owner":
            return (
              <SearchResultGroupTextFilterField
                key={key}
                label="Owner"
                value={query.filters?.owner}
                onChange={handleFilterChange("owner")}
                onDelete={handleFilterDelete("owner")}
              />
            );
          default:
            return null;
        }
      }}
    />
  );
};
`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{code:`const WithDefaultNoResultsComponent = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultGroup
        query={query}
        icon={<DocsIcon />}
        title="Documentation"
      />
    </TestApiProvider>
  );
};
`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{code:`const WithCustomNoResultsComponent = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });

  return (
    <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultGroup
        query={query}
        icon={<DocsIcon />}
        title="Documentation"
        noResultsComponent={<ListItemText primary="No results were found" />}
      />
    </TestApiProvider>
  );
};
`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{code:`const WithCustomResultItem = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["custom"],
  });

  return (
    <SearchResultGroup
      query={query}
      icon={<DocsIcon />}
      title="Custom"
      link="See all custom results"
      renderResultItem={({ document, highlight, rank }) => (
        <CustomResultListItem
          key={document.location}
          result={document}
          highlight={highlight}
          rank={rank}
        />
      )}
    />
  );
};
`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{code:`const WithResultItemExtensions = () => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ["techdocs"],
  });
  const plugin = createPlugin({ id: "plugin" });
  const DefaultSearchResultGroupItem = plugin.provide(
    createSearchResultListItemExtension({
      name: "DefaultResultListItem",
      component: async () => DefaultResultListItem,
    })
  );
  return (
    <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation">
      <DefaultSearchResultGroupItem />
    </SearchResultGroup>
  );
};
`,...R.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <SearchContextProvider>
      <SearchResultGroup icon={<DocsIcon />} title="Documentation" />
    </SearchContextProvider>;
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {})
  }]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />
    </TestApiProvider>;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {
      throw new Error();
    })
  }]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />
    </TestApiProvider>;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Custom" titleProps={{
    color: 'secondary'
  }} />;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Custom" link="See all custom results" linkProps={{
    to: '/custom'
  }} />;
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState<Partial<SearchQuery>>({
    types: ['software-catalog']
  });
  const filterOptions = [{
    label: 'Lifecycle',
    value: 'lifecycle'
  }, {
    label: 'Owner',
    value: 'owner'
  }];
  const handleFilterAdd = useCallback((key: string) => () => {
    setQuery(prevQuery => {
      const {
        filters: prevFilters,
        ...rest
      } = prevQuery;
      const newFilters = {
        ...prevFilters,
        [key]: undefined
      };
      return {
        ...rest,
        filters: newFilters
      };
    });
  }, []);
  const handleFilterChange = useCallback((key: string) => (value: JsonValue) => {
    setQuery(prevQuery => {
      const {
        filters: prevFilters,
        ...rest
      } = prevQuery;
      const newFilters = {
        ...prevFilters,
        [key]: value
      };
      return {
        ...rest,
        filters: newFilters
      };
    });
  }, []);
  const handleFilterDelete = useCallback((key: string) => () => {
    setQuery(prevQuery => {
      const {
        filters: prevFilters,
        ...rest
      } = prevQuery;
      const newFilters = {
        ...prevFilters
      };
      delete newFilters[key];
      return {
        ...rest,
        filters: newFilters
      };
    });
  }, []);
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" filterOptions={filterOptions} renderFilterOption={option => <MenuItem key={option.value} onClick={handleFilterAdd(option.value)}>
          {option.label}
        </MenuItem>} renderFilterField={(key: string) => {
    switch (key) {
      case 'lifecycle':
        return <SearchResultGroupSelectFilterField key={key} label="Lifecycle" value={query.filters?.lifecycle} onChange={handleFilterChange('lifecycle')} onDelete={handleFilterDelete('lifecycle')}>
                <MenuItem value="production">Production</MenuItem>
                <MenuItem value="experimental">Experimental</MenuItem>
              </SearchResultGroupSelectFilterField>;
      case 'owner':
        return <SearchResultGroupTextFilterField key={key} label="Owner" value={query.filters?.owner} onChange={handleFilterChange('owner')} onDelete={handleFilterDelete('owner')} />;
      default:
        return null;
    }
  }} />;
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />
    </TestApiProvider>;
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" noResultsComponent={<ListItemText primary="No results were found" />} />
    </TestApiProvider>;
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Custom" link="See all custom results" renderResultItem={({
    document,
    highlight,
    rank
  }) => <CustomResultListItem key={document.location} result={document} highlight={highlight} rank={rank} />} />;
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  const plugin = createPlugin({
    id: 'plugin'
  });
  const DefaultSearchResultGroupItem = plugin.provide(createSearchResultListItemExtension({
    name: 'DefaultResultListItem',
    component: async () => DefaultResultListItem
  }));
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation">
      <DefaultSearchResultGroupItem />
    </SearchResultGroup>;
}`,...R.parameters?.docs?.source}}};const ct=["Default","WithQuery","Loading","WithError","WithCustomTitle","WithCustomLink","WithFilters","WithDefaultNoResultsComponent","WithCustomNoResultsComponent","WithCustomResultItem","WithResultItemExtensions"];export{a as Default,l as Loading,d as WithCustomLink,S as WithCustomNoResultsComponent,f as WithCustomResultItem,m as WithCustomTitle,y as WithDefaultNoResultsComponent,p as WithError,h as WithFilters,u as WithQuery,R as WithResultItemExtensions,ct as __namedExportsOrder,ot as default};
