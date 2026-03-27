import{j as t,a2 as u,V as p,a3 as g}from"./iframe-BzEx-mzh.js";import{r as h}from"./plugin-DRIShWxI.js";import{S as l,u as c,a as x}from"./useSearchModal-m8wQBY2F.js";import{s as S,M}from"./api-Dva19Oc1.js";import{S as C}from"./SearchContext-twbFW7cJ.js";import{B as m}from"./Button-Ce-sPM-K.js";import{m as f}from"./makeStyles-KrlZ5-Ut.js";import{D as j,a as y,b as B}from"./DialogTitle-SEGYTS4p.js";import{B as D}from"./Box-BtrO8NUR.js";import{S as n}from"./Grid-CQ4TX_Z5.js";import{S as I}from"./SearchType-CB3yN2bm.js";import{L as G}from"./List-CuppT92S.js";import{H as R}from"./DefaultResultListItem-Bs8M4fOV.js";import{w as k}from"./appWrappers-CZW9HA5c.js";import{SearchBar as v}from"./SearchBar-D-H1Rj1U.js";import{S as T}from"./SearchResult-C4ZmTTtG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cj2Kzlyz.js";import"./Plugin-Otda4z5l.js";import"./componentData-CKHhX2z1.js";import"./useAnalytics-CqkzYMRO.js";import"./useApp-X2JlXEhZ.js";import"./useRouteRef-DkZ8KBFY.js";import"./ArrowForward-BUqOhBxm.js";import"./translation-BNsswyRo.js";import"./Page-B9dmLOjn.js";import"./useMediaQuery-CWt8aWiL.js";import"./Divider-DkJMH1v9.js";import"./ArrowBackIos-CIMNy3Lk.js";import"./ArrowForwardIos-DN5BghK8.js";import"./translation-CVc_Lzji.js";import"./lodash-Zfy8DO4K.js";import"./useAsync-DVTCMMKI.js";import"./useMountedState-BkNjOVOx.js";import"./Modal-Gk5f0e77.js";import"./Portal-BVejhVwL.js";import"./Backdrop-gHhhIDf5.js";import"./styled-BC6E7X8H.js";import"./ExpandMore-Cgn5AZkG.js";import"./AccordionDetails-BYGoRWll.js";import"./index-B9sM2jn7.js";import"./Collapse-DU2EA4DD.js";import"./ListItem-C_KvzjzW.js";import"./ListContext-CyskI8TW.js";import"./ListItemIcon-CcaGlbju.js";import"./ListItemText-S1uvxEmv.js";import"./Tabs-BKo7rzYv.js";import"./KeyboardArrowRight-BTDQvmz6.js";import"./FormLabel-DS5AAmf2.js";import"./formControlState-nuIi29ZI.js";import"./InputLabel-C8KIN0O2.js";import"./Select-B9vPthaQ.js";import"./Popover-DDK5Xqd9.js";import"./MenuItem-BmmZJKKF.js";import"./Checkbox-BAOsXTTB.js";import"./SwitchBase-BMevKiMJ.js";import"./Chip-Uq4Y0lk8.js";import"./Link-C3sIO6fl.js";import"./index-DixrjhsO.js";import"./WebStorage-BrHL4_P6.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BQUAgOP-.js";import"./useIsomorphicLayoutEffect-CdGTBNnL.js";import"./AppThemeApi-D70truRB.js";import"./BUIProvider-CKEPa0P4.js";import"./openLink-iXSrpszV.js";import"./Search-DEIBHTqI.js";import"./useDebounce-BUtaq8lL.js";import"./InputAdornment-BWcOh75b.js";import"./TextField-CmLfjxVE.js";import"./useElementFilter-D6ciniOQ.js";import"./EmptyState-Dy3fIcOz.js";import"./Progress-BCn7jE9p.js";import"./LinearProgress-C8Fw708p.js";import"./ResponseErrorPanel-CLy0VOFK.js";import"./ErrorPanel-C-ex7Akp.js";import"./WarningPanel-BpNS9LUM.js";import"./MarkdownContent-DZOcrxIb.js";import"./CodeSnippet-CK4P2DfG.js";import"./CopyTextButton-CyNdxAF_.js";import"./useCopyToClipboard-CHOs8Fjj.js";import"./Tooltip-Co7RbJ52.js";import"./Popper-DIuKqKML.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
  const { state, toggleModal } = useSearchModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>
  );
};
`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const CustomModal = () => {
  const classes = useStyles();
  const { state, toggleModal } = useSearchModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => (
          <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs
                    defaultValue=""
                    types={[
                      {
                        value: "custom-result-item",
                        name: "Custom Item",
                      },
                      {
                        value: "no-custom-result-item",
                        name: "No Custom Item",
                      },
                    ]}
                  />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({ results }) => (
                      <List>
                        {results.map(({ document }) => (
                          <div
                            role="button"
                            tabIndex={0}
                            key={\`\${document.location}-btn\`}
                            onClick={toggleModal}
                            onKeyPress={toggleModal}
                          >
                            <DefaultResultListItem
                              key={document.location}
                              result={document}
                            />
                          </div>
                        ))}
                      </List>
                    )}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>
        )}
      </SearchModal>
    </>
  );
};
`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs defaultValue="" types={[{
                value: 'custom-result-item',
                name: 'Custom Item'
              }, {
                value: 'no-custom-result-item',
                name: 'No Custom Item'
              }]} />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({
                  results
                }) => <List>
                        {results.map(({
                    document
                  }) => <div role="button" tabIndex={0} key={\`\${document.location}-btn\`} onClick={toggleModal} onKeyPress={toggleModal}>
                            <DefaultResultListItem key={document.location} result={document} />
                          </div>)}
                      </List>}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>}
      </SearchModal>
    </>;
}`,...r.parameters?.docs?.source}}};const uo=["Default","CustomModal"];export{r as CustomModal,e as Default,uo as __namedExportsOrder,mo as default};
