import{aG as L,aH as S,aI as x,aJ as g,W as j,j as e,X as D}from"./iframe-Bu39PmLp.js";import{c as f,D as C}from"./InsertDriveFile-DTJwHwzC.js";import{s as k,M as v}from"./api-B2Re5sXq.js";import{S as l,c as _}from"./SearchResult-C8ABFM11.js";import{S as w}from"./SearchContext-BjBSjWEq.js";import{L as R}from"./List-plozWRZ-.js";import{H as p}from"./DefaultResultListItem-mGi7Q9yp.js";import{a as N}from"./SearchResultList-O-ArftHO.js";import{L as q}from"./ListItem-CL7cp1ei.js";import{w as E}from"./appWrappers-Bxwu6RHO.js";import{c as W}from"./Plugin-hZUWdyx8.js";import{L as A}from"./Link-CbL8aN6w.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hQBKbJ2Q.js";import"./Add-BENFZDst.js";import"./ArrowForwardIos-C018imat.js";import"./translation-D82dcTP_.js";import"./makeStyles-BF75o2aM.js";import"./MenuItem-D4lS-Tk1.js";import"./ListSubheader-B_9dqhpT.js";import"./Chip-DGz_2XAA.js";import"./Select-CeOsBVc8.js";import"./index-B9sM2jn7.js";import"./Popover-CgXZkw0s.js";import"./Modal-zPxLU0J0.js";import"./Portal-Cnh7PMtZ.js";import"./formControlState-pfeMig1Q.js";import"./useAnalytics-WQSTtdKZ.js";import"./EmptyState-Dj4f7Kdu.js";import"./Grid-88_alP5V.js";import"./Progress-BIkrk6H-.js";import"./LinearProgress-BB2o8J4I.js";import"./Box-COypEvq8.js";import"./styled-DZeC-7HZ.js";import"./ResponseErrorPanel-D640XWh4.js";import"./ErrorPanel-v1gSkFV1.js";import"./WarningPanel-DR6RE8HP.js";import"./ExpandMore-BokYQgAi.js";import"./AccordionDetails-B2NVmeh-.js";import"./Collapse-DqsO37Qc.js";import"./MarkdownContent-CW0GoH5Q.js";import"./CodeSnippet-C61-05Og.js";import"./CopyTextButton-DcNGOVhO.js";import"./useCopyToClipboard-DcFppNfJ.js";import"./useMountedState-a3-IIk52.js";import"./Tooltip-CVo3tGMI.js";import"./Popper-BmbP9aP5.js";import"./ListItemText-BuTHvPeP.js";import"./ListContext-U4JS0URp.js";import"./Divider-ZPbdzwYD.js";import"./useAsync-Aa2CWgcM.js";import"./lodash-BP1SMfTv.js";import"./useElementFilter-eJorctIb.js";import"./componentData-ClXDGabG.js";import"./ListItemIcon-CPM6s9WY.js";import"./useObservable-CQuFZjxf.js";import"./useIsomorphicLayoutEffect-6ZDZN3qg.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-B4-sCELz.js";import"./useApp-CJiRzn9p.js";import"./BUIProvider-fqCixX3i.js";import"./openLink-CfoeYFVv.js";import"./useRouteRef-CQranF9u.js";import"./index-BySxz2Fm.js";var d={},y;function G(){if(y)return d;y=1;var r=L(),t=S();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var s=t(x()),i=r(g()),I=(0,i.default)(s.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return d.default=I,d}var H=G();const P=j(H),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},Q=new v(M),Ze={title:"Plugins/Search/SearchResult",component:l,decorators:[r=>E(e.jsx(D,{apis:[[k,Q]],children:e.jsx(w,{children:e.jsx(r,{})})}))],tags:["!manifest"]},h=r=>{const{result:t}=r;return e.jsx(q,{children:e.jsxs(A,{to:t.location,children:[t.title," - ",t.text]})})},n=()=>e.jsx(l,{children:({results:r})=>e.jsx(R,{children:r.map(({type:t,document:s})=>t==="custom-result-item"?e.jsx(h,{result:s},s.location):e.jsx(p,{result:s},s.location))})}),o=()=>{const r={term:"documentation"};return e.jsx(l,{query:r,children:({results:t})=>e.jsx(R,{children:t.map(({type:s,document:i})=>s==="custom-result-item"?e.jsx(h,{result:i},i.location):e.jsx(p,{result:i},i.location))})})},u=()=>e.jsx(l,{children:({results:r})=>e.jsx(N,{resultItems:r,renderResultItem:({type:t,document:s})=>t==="custom-result-item"?e.jsx(h,{result:s},s.location):e.jsx(p,{result:s},s.location)})}),a=()=>e.jsx(l,{children:({results:r})=>e.jsxs(e.Fragment,{children:[e.jsx(f,{icon:e.jsx(P,{}),title:"Custom",link:"See all custom results",resultItems:r.filter(({type:t})=>t==="custom-result-item"),renderResultItem:({document:t})=>e.jsx(h,{result:t},t.location)}),e.jsx(f,{icon:e.jsx(C,{}),title:"Default",resultItems:r.filter(({type:t})=>t!=="custom-result-item"),renderResultItem:({document:t})=>e.jsx(p,{result:t},t.location)})]})}),c=()=>e.jsx(l,{noResultsComponent:e.jsx(e.Fragment,{children:"No results were found"}),children:({results:r})=>e.jsx(R,{children:r.map(({type:t,document:s})=>t==="custom-result-item"?e.jsx(h,{result:s},s.location):e.jsx(p,{result:s},s.location))})}),m=()=>{const t=W({id:"plugin"}).provide(_({name:"DefaultResultListItem",component:async()=>p}));return e.jsx(l,{children:e.jsx(t,{})})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};u.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};a.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};c.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};m.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const Default = () => {
  return (
    <SearchResult>
      {({ results }) => (
        <List>
          {results.map(({ type, document }) => {
            switch (type) {
              case "custom-result-item":
                return (
                  <CustomResultListItem
                    key={document.location}
                    result={document}
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
          })}
        </List>
      )}
    </SearchResult>
  );
};
`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const WithQuery = () => {
  const query = {
    term: "documentation",
  };

  return (
    <SearchResult query={query}>
      {({ results }) => (
        <List>
          {results.map(({ type, document }) => {
            switch (type) {
              case "custom-result-item":
                return (
                  <CustomResultListItem
                    key={document.location}
                    result={document}
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
          })}
        </List>
      )}
    </SearchResult>
  );
};
`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{code:`const ListLayout = () => {
  return (
    <SearchResult>
      {({ results }) => (
        <SearchResultListLayout
          resultItems={results}
          renderResultItem={({ type, document }) => {
            switch (type) {
              case "custom-result-item":
                return (
                  <CustomResultListItem
                    key={document.location}
                    result={document}
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
      )}
    </SearchResult>
  );
};
`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const GroupLayout = () => {
  return (
    <SearchResult>
      {({ results }) => (
        <>
          <SearchResultGroupLayout
            icon={<CustomIcon />}
            title="Custom"
            link="See all custom results"
            resultItems={results.filter(
              ({ type }) => type === "custom-result-item"
            )}
            renderResultItem={({ document }) => (
              <CustomResultListItem key={document.location} result={document} />
            )}
          />
          <SearchResultGroupLayout
            icon={<DefaultIcon />}
            title="Default"
            resultItems={results.filter(
              ({ type }) => type !== "custom-result-item"
            )}
            renderResultItem={({ document }) => (
              <DefaultResultListItem
                key={document.location}
                result={document}
              />
            )}
          />
        </>
      )}
    </SearchResult>
  );
};
`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{code:`const WithCustomNoResultsComponent = () => {
  return (
    <SearchResult noResultsComponent={<>No results were found</>}>
      {({ results }) => (
        <List>
          {results.map(({ type, document }) => {
            switch (type) {
              case "custom-result-item":
                return (
                  <CustomResultListItem
                    key={document.location}
                    result={document}
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
          })}
        </List>
      )}
    </SearchResult>
  );
};
`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{code:`const UsingSearchResultItemExtensions = () => {
  const plugin = createPlugin({ id: "plugin" });
  const DefaultResultItem = plugin.provide(
    createSearchResultListItemExtension({
      name: "DefaultResultListItem",
      component: async () => DefaultResultListItem,
    })
  );
  return (
    <SearchResult>
      <DefaultResultItem />
    </SearchResult>
  );
};
`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const $e=["Default","WithQuery","ListLayout","GroupLayout","WithCustomNoResultsComponent","UsingSearchResultItemExtensions"];export{n as Default,a as GroupLayout,u as ListLayout,m as UsingSearchResultItemExtensions,c as WithCustomNoResultsComponent,o as WithQuery,$e as __namedExportsOrder,Ze as default};
