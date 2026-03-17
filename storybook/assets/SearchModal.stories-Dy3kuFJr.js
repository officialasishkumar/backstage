import{j as t,Y as u,N as p,Z as g}from"./iframe-DsZtuuTR.js";import{r as h}from"./plugin-CNCTrBQM.js";import{S as l,u as c,a as x}from"./useSearchModal-Dgk7XO5U.js";import{s as S,M}from"./api-DxDqDHJC.js";import{S as C}from"./SearchContext-BIHSRY2q.js";import{B as m}from"./Button-Da5WlExb.js";import{m as f}from"./makeStyles-41TQbijK.js";import{D as j,a as y,b as B}from"./DialogTitle-DhtrdvrS.js";import{B as D}from"./Box-3ttDjC-9.js";import{S as n}from"./Grid-CKFEL6Ss.js";import{S as I}from"./SearchType-BdGGMJyL.js";import{L as G}from"./List-C6QPnNfT.js";import{H as R}from"./DefaultResultListItem-B-AsZY6K.js";import{w as k}from"./appWrappers-ar1MFznU.js";import{SearchBar as v}from"./SearchBar-DjJheuUC.js";import{S as T}from"./SearchResult-CyM9nfCp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DIZC8QjI.js";import"./Plugin-3b_-K51R.js";import"./componentData-DPwp5LM5.js";import"./useAnalytics-YS7OZ-uO.js";import"./useApp-bTnD5DHs.js";import"./useRouteRef-BsAywz-W.js";import"./index-uH1xIlYD.js";import"./ArrowForward-DgRR5wP7.js";import"./translation-DV1iKMEZ.js";import"./Page-BS-O74kW.js";import"./useMediaQuery-tEJSyBZN.js";import"./Divider-B9lqRyMe.js";import"./ArrowBackIos-4qj17W8-.js";import"./ArrowForwardIos-JlXH9I4Y.js";import"./translation-BxeraEo7.js";import"./lodash-BypptKGH.js";import"./useAsync-gJD2Ho9T.js";import"./useMountedState-COxOjAGe.js";import"./Modal-XrZoVZ0I.js";import"./Portal-DR4gT_uM.js";import"./Backdrop-D4h72rk1.js";import"./styled-bk62jvDu.js";import"./ExpandMore-DtBN2rYv.js";import"./AccordionDetails-CxZDo9a4.js";import"./index-B9sM2jn7.js";import"./Collapse-BUUKqCGo.js";import"./ListItem-BwEWPFK6.js";import"./ListContext-DcgBfIsd.js";import"./ListItemIcon-Dengp4Ob.js";import"./ListItemText-Z6OFOiSE.js";import"./Tabs-iLVW2_1h.js";import"./KeyboardArrowRight-R12uUS-j.js";import"./FormLabel-DIlsUH0Z.js";import"./formControlState-Cn6OFxGU.js";import"./InputLabel-DdiV01bM.js";import"./Select-BetUGSRx.js";import"./Popover-CRqXxO63.js";import"./MenuItem-Bt-3pQ7y.js";import"./Checkbox-DvKPGzeC.js";import"./SwitchBase-CbmQW1qF.js";import"./Chip-BgJlFXxr.js";import"./Link-DjvaMwo_.js";import"./index-Bqn1XTYQ.js";import"./WebStorage-wbCsrwiK.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-87F9ihSH.js";import"./useIsomorphicLayoutEffect-gF7jK0N4.js";import"./AppThemeApi-DfBY-Xua.js";import"./BUIProvider-CyUmZSwJ.js";import"./openLink-D7WjByac.js";import"./Search-BshPfv7J.js";import"./useDebounce-C_k1bDww.js";import"./InputAdornment-Dt26jzMg.js";import"./TextField-BupY6Qgk.js";import"./useElementFilter-B_urMLi9.js";import"./EmptyState-B216WXjC.js";import"./Progress-CfGVPsbk.js";import"./LinearProgress-BKdu0H9l.js";import"./ResponseErrorPanel-C5brLZAl.js";import"./ErrorPanel-ZgxPD86n.js";import"./WarningPanel-DipgI77I.js";import"./MarkdownContent-DB1kk9i3.js";import"./CodeSnippet-JP7TOjyx.js";import"./CopyTextButton-D-5lHwa1.js";import"./useCopyToClipboard-CcNicMOF.js";import"./Tooltip-BnnSJaTg.js";import"./Popper-DOHUvbmz.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const po=["Default","CustomModal"];export{r as CustomModal,e as Default,po as __namedExportsOrder,uo as default};
