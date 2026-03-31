import{j as e,a1 as D,r as s}from"./iframe-BnLaYHT0.js";import{S as o,D as i,a as _,b as G}from"./InsertDriveFile-DImNcq6L.js";import{s as F,M as w}from"./api-BsxmPXMj.js";import{c as Q}from"./SearchResult-DM9eyd6P.js";import{S as P}from"./Grid-BVx1ZeMm.js";import{S as A}from"./SearchContext-Z5uxDapO.js";import{M as q}from"./MenuItem-BlBJV0uS.js";import{L}from"./ListItemText-BYfeNc6y.js";import{L as N}from"./ListItem-DEKaS7rV.js";import{L as b}from"./ListItemIcon-Dk0I2z7t.js";import{H as T}from"./DefaultResultListItem-B2CrsN6S.js";import{w as E,c as M}from"./appWrappers-hQuAQIk9.js";import{c as O}from"./Plugin-CBZmafKF.js";import{L as H}from"./Link-Boy8ho4w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZIod4EO.js";import"./Add-0ARLXyU8.js";import"./ArrowForwardIos-DfLOdE7q.js";import"./translation-E6uSu-xU.js";import"./makeStyles-Ci9OQMMV.js";import"./List-DXJGlMrG.js";import"./ListContext-ZUAJ6gMg.js";import"./ListSubheader-C_eXMTbV.js";import"./Chip-B3w2S0o3.js";import"./Select-DOeoOxfY.js";import"./index-B9sM2jn7.js";import"./Popover-B5d8YLfq.js";import"./Modal-BRJd5uSM.js";import"./Portal-CJRUocKS.js";import"./formControlState-CePGT2DR.js";import"./useAnalytics-DZdNMYw7.js";import"./EmptyState-CCXj_Oiq.js";import"./Progress-C1muWUZ3.js";import"./LinearProgress-CePAaI1O.js";import"./Box-D4mbYqDO.js";import"./styled-Dah7uO8h.js";import"./ResponseErrorPanel-CA5zbHAd.js";import"./ErrorPanel-3Vxyntfl.js";import"./WarningPanel-CwyYWRp0.js";import"./ExpandMore-CZNdg9bw.js";import"./AccordionDetails-DKUjEkWI.js";import"./Collapse-DK8ofP-6.js";import"./MarkdownContent-Df4yV8aW.js";import"./CodeSnippet-BpW7ax5j.js";import"./CopyTextButton-Bc5d_wml.js";import"./useCopyToClipboard-sGiklRSA.js";import"./useMountedState-BzlV24-v.js";import"./Tooltip-DEaAQANQ.js";import"./Popper-CajeHu2h.js";import"./Divider-CNZiFlqL.js";import"./useAsync-BIqxmOvv.js";import"./lodash-DpN-AoLg.js";import"./useElementFilter-DQxeYWrS.js";import"./componentData-Bmp4MCDj.js";import"./WebStorage-Cxn_eKiJ.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-_Nvkw-mQ.js";import"./useIsomorphicLayoutEffect-BfGqrP9P.js";import"./useApp-DC1925IS.js";import"./BUIProvider-BH9ORap1.js";import"./openLink-BEdMuLiR.js";import"./useRouteRef-CjnkF0JD.js";import"./index-Cpm2Va4W.js";const J=M({id:"storybook.search.results.group.route"}),V=new w({results:[{type:"techdocs",document:{location:"search/search-result1",title:"Search Result 1",text:"Some text from the search result 1"}},{type:"custom",document:{location:"search/search-result2",title:"Search Result 2",text:"Some text from the search result 2"}}]}),ot={title:"Plugins/Search/SearchResultGroup",component:o,decorators:[t=>E(e.jsx(D,{apis:[[F,V]],children:e.jsx(P,{container:!0,direction:"row",children:e.jsx(P,{item:!0,xs:12,children:e.jsx(t,{})})})}),{mountedRoutes:{"/":J}})],tags:["!manifest"]},m=()=>e.jsx(A,{children:e.jsx(o,{icon:e.jsx(i,{}),title:"Documentation"})}),d=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation"})},h=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,{query:()=>new Promise(()=>{})}]],children:e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation"})})},y=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,{query:()=>new Promise(()=>{throw new Error})}]],children:e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation"})})},S=()=>{const[t]=s.useState({types:["custom"]});return e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Custom",titleProps:{color:"secondary"}})},f=()=>{const[t]=s.useState({types:["custom"]});return e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Custom",link:"See all custom results",linkProps:{to:"/custom"}})},x=()=>{const[t,n]=s.useState({types:["software-catalog"]}),c=[{label:"Lifecycle",value:"lifecycle"},{label:"Owner",value:"owner"}],C=s.useCallback(r=>()=>{n(l=>{const{filters:u,...p}=l,a={...u,[r]:void 0};return{...p,filters:a}})},[]),j=s.useCallback(r=>l=>{n(u=>{const{filters:p,...a}=u,W={...p,[r]:l};return{...a,filters:W}})},[]),k=s.useCallback(r=>()=>{n(l=>{const{filters:u,...p}=l,a={...u};return delete a[r],{...p,filters:a}})},[]);return e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation",filterOptions:c,renderFilterOption:r=>e.jsx(q,{onClick:C(r.value),children:r.label},r.value),renderFilterField:r=>{switch(r){case"lifecycle":return e.jsxs(G,{label:"Lifecycle",value:t.filters?.lifecycle,onChange:j("lifecycle"),onDelete:k("lifecycle"),children:[e.jsx(q,{value:"production",children:"Production"}),e.jsx(q,{value:"experimental",children:"Experimental"})]},r);case"owner":return e.jsx(_,{label:"Owner",value:t.filters?.owner,onChange:j("owner"),onDelete:k("owner")},r);default:return null}}})},R=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,new w]],children:e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation"})})},g=()=>{const[t]=s.useState({types:["techdocs"]});return e.jsx(D,{apis:[[F,new w]],children:e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation",noResultsComponent:e.jsx(L,{primary:"No results were found"})})})},z=t=>{const{icon:n,result:c}=t;return e.jsx(H,{to:c.location,children:e.jsxs(N,{alignItems:"flex-start",divider:!0,children:[n&&e.jsx(b,{children:n}),e.jsx(L,{primary:c.title,primaryTypographyProps:{variant:"h6"},secondary:c.text})]})})},I=()=>{const[t]=s.useState({types:["custom"]});return e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Custom",link:"See all custom results",renderResultItem:({document:n,highlight:c,rank:C})=>e.jsx(z,{result:n,highlight:c,rank:C},n.location)})},v=()=>{const[t]=s.useState({types:["techdocs"]}),c=O({id:"plugin"}).provide(Q({name:"DefaultResultListItem",component:async()=>T}));return e.jsx(o,{query:t,icon:e.jsx(i,{}),title:"Documentation",children:e.jsx(c,{})})};m.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};h.__docgenInfo={description:"",methods:[],displayName:"Loading"};y.__docgenInfo={description:"",methods:[],displayName:"WithError"};S.__docgenInfo={description:"",methods:[],displayName:"WithCustomTitle"};f.__docgenInfo={description:"",methods:[],displayName:"WithCustomLink"};x.__docgenInfo={description:"",methods:[],displayName:"WithFilters"};R.__docgenInfo={description:"",methods:[],displayName:"WithDefaultNoResultsComponent"};g.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};I.__docgenInfo={description:"",methods:[],displayName:"WithCustomResultItem"};v.__docgenInfo={description:"",methods:[],displayName:"WithResultItemExtensions"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <SearchContextProvider>
      <SearchResultGroup icon={<DocsIcon />} title="Documentation" />
    </SearchContextProvider>;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />;
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, {
    query: () => new Promise<SearchResultSet>(() => {})
  }]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />
    </TestApiProvider>;
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Custom" titleProps={{
    color: 'secondary'
  }} />;
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Custom" link="See all custom results" linkProps={{
    to: '/custom'
  }} />;
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" />
    </TestApiProvider>;
}`,...R.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['techdocs']
  });
  return <TestApiProvider apis={[[searchApiRef, new MockSearchApi()]]}>
      <SearchResultGroup query={query} icon={<DocsIcon />} title="Documentation" noResultsComponent={<ListItemText primary="No results were found" />} />
    </TestApiProvider>;
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [query] = useState<Partial<SearchQuery>>({
    types: ['custom']
  });
  return <SearchResultGroup query={query} icon={<DocsIcon />} title="Custom" link="See all custom results" renderResultItem={({
    document,
    highlight,
    rank
  }) => <CustomResultListItem key={document.location} result={document} highlight={highlight} rank={rank} />} />;
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const it=["Default","WithQuery","Loading","WithError","WithCustomTitle","WithCustomLink","WithFilters","WithDefaultNoResultsComponent","WithCustomNoResultsComponent","WithCustomResultItem","WithResultItemExtensions"];export{m as Default,h as Loading,f as WithCustomLink,g as WithCustomNoResultsComponent,I as WithCustomResultItem,S as WithCustomTitle,R as WithDefaultNoResultsComponent,y as WithError,x as WithFilters,d as WithQuery,v as WithResultItemExtensions,it as __namedExportsOrder,ot as default};
