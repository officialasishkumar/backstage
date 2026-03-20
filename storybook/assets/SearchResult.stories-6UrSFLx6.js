import{aG as L,aH as S,aI as x,aJ as g,X as j,j as e,Y as D}from"./iframe-D0nL_Agr.js";import{c as f,D as C}from"./InsertDriveFile-B_QPLTBc.js";import{s as k,M as v}from"./api-DK3LhVf2.js";import{S as l,c as _}from"./SearchResult-DTw5fYXc.js";import{S as w}from"./SearchContext-R_VcuGla.js";import{L as R}from"./List-B6josrBo.js";import{H as p}from"./DefaultResultListItem-zVOn01qz.js";import{a as N}from"./SearchResultList-C3ETuihA.js";import{L as q}from"./ListItem-BvZ21ujD.js";import{w as E}from"./appWrappers-DpvrWMrt.js";import{c as A}from"./Plugin-Baao644E.js";import{L as G}from"./Link-ChRPIsYf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDL2X7CY.js";import"./Add-uNne0jSF.js";import"./ArrowForwardIos-VdAmYBbq.js";import"./translation-CIFT46X8.js";import"./makeStyles-CEEIeaPc.js";import"./MenuItem-5ffxRHXR.js";import"./ListSubheader-Dqbsykel.js";import"./Chip-CCEWQCZv.js";import"./Select-xNfS0uZx.js";import"./index-B9sM2jn7.js";import"./Popover-kGRCMEhn.js";import"./Modal-Ck9qjAe3.js";import"./Portal-CKyiLAPX.js";import"./formControlState-dFCIFqov.js";import"./useAnalytics-DHjT-X03.js";import"./EmptyState-ubhZd0RR.js";import"./Grid-Cj5fjV2g.js";import"./Progress-giOd2CXs.js";import"./LinearProgress-BrUf00qz.js";import"./Box-BBeBWSpp.js";import"./styled-ud37gncL.js";import"./ResponseErrorPanel-CNEtCLFX.js";import"./ErrorPanel-BVtOabjF.js";import"./WarningPanel-CplvYfF5.js";import"./ExpandMore-DfFo8jQ4.js";import"./AccordionDetails-KA1uC9fh.js";import"./Collapse-PPyuJLE3.js";import"./MarkdownContent-DMq6MwFY.js";import"./CodeSnippet-B_McEZEi.js";import"./CopyTextButton-3ruE736v.js";import"./useCopyToClipboard-BufagX_d.js";import"./useMountedState-D6h1Oxy0.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";import"./ListItemText-COKbGLw8.js";import"./ListContext-Dwy-3B6k.js";import"./Divider-DZ5_AQ1V.js";import"./useAsync-CTfQC1T2.js";import"./lodash-C8hrBFZO.js";import"./useElementFilter-CRoBkzp2.js";import"./componentData-BbYq1rWo.js";import"./ListItemIcon-CmZ0brOR.js";import"./WebStorage-uwUF_EA0.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-C_CdmF_Y.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./useApp-D1uJ25an.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";import"./useRouteRef-D1c-R20K.js";import"./index-DZW9dhqm.js";var d={},y;function W(){if(y)return d;y=1;var r=L(),t=S();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var s=t(x()),i=r(g()),I=(0,i.default)(s.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd");return d.default=I,d}var H=W();const P=j(H),M={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},Q=new v(M),et={title:"Plugins/Search/SearchResult",component:l,decorators:[r=>E(e.jsx(D,{apis:[[k,Q]],children:e.jsx(w,{children:e.jsx(r,{})})}))],tags:["!manifest"]},h=r=>{const{result:t}=r;return e.jsx(q,{children:e.jsxs(G,{to:t.location,children:[t.title," - ",t.text]})})},n=()=>e.jsx(l,{children:({results:r})=>e.jsx(R,{children:r.map(({type:t,document:s})=>t==="custom-result-item"?e.jsx(h,{result:s},s.location):e.jsx(p,{result:s},s.location))})}),o=()=>{const r={term:"documentation"};return e.jsx(l,{query:r,children:({results:t})=>e.jsx(R,{children:t.map(({type:s,document:i})=>s==="custom-result-item"?e.jsx(h,{result:i},i.location):e.jsx(p,{result:i},i.location))})})},u=()=>e.jsx(l,{children:({results:r})=>e.jsx(N,{resultItems:r,renderResultItem:({type:t,document:s})=>t==="custom-result-item"?e.jsx(h,{result:s},s.location):e.jsx(p,{result:s},s.location)})}),a=()=>e.jsx(l,{children:({results:r})=>e.jsxs(e.Fragment,{children:[e.jsx(f,{icon:e.jsx(P,{}),title:"Custom",link:"See all custom results",resultItems:r.filter(({type:t})=>t==="custom-result-item"),renderResultItem:({document:t})=>e.jsx(h,{result:t},t.location)}),e.jsx(f,{icon:e.jsx(C,{}),title:"Default",resultItems:r.filter(({type:t})=>t!=="custom-result-item"),renderResultItem:({document:t})=>e.jsx(p,{result:t},t.location)})]})}),c=()=>e.jsx(l,{noResultsComponent:e.jsx(e.Fragment,{children:"No results were found"}),children:({results:r})=>e.jsx(R,{children:r.map(({type:t,document:s})=>t==="custom-result-item"?e.jsx(h,{result:s},s.location):e.jsx(p,{result:s},s.location))})}),m=()=>{const t=A({id:"plugin"}).provide(_({name:"DefaultResultListItem",component:async()=>p}));return e.jsx(l,{children:e.jsx(t,{})})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithQuery"};u.__docgenInfo={description:"",methods:[],displayName:"ListLayout"};a.__docgenInfo={description:"",methods:[],displayName:"GroupLayout"};c.__docgenInfo={description:"",methods:[],displayName:"WithCustomNoResultsComponent"};m.__docgenInfo={description:"",methods:[],displayName:"UsingSearchResultItemExtensions"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const Default = () => {
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
}`,...m.parameters?.docs?.source}}};const tt=["Default","WithQuery","ListLayout","GroupLayout","WithCustomNoResultsComponent","UsingSearchResultItemExtensions"];export{n as Default,a as GroupLayout,u as ListLayout,m as UsingSearchResultItemExtensions,c as WithCustomNoResultsComponent,o as WithQuery,tt as __namedExportsOrder,et as default};
