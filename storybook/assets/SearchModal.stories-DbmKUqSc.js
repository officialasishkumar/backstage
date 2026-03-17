import{j as t,X as u,M as p,Y as g}from"./iframe-Bu39PmLp.js";import{r as h}from"./plugin-CqUBpGm_.js";import{S as l,u as c,a as x}from"./useSearchModal-CCM0g8W0.js";import{s as S,M}from"./api-B2Re5sXq.js";import{S as C}from"./SearchContext-BjBSjWEq.js";import{B as m}from"./Button-DUzol8xs.js";import{m as f}from"./makeStyles-BF75o2aM.js";import{D as j,a as y,b as B}from"./DialogTitle-Dip1BM_t.js";import{B as D}from"./Box-COypEvq8.js";import{S as n}from"./Grid-88_alP5V.js";import{S as I}from"./SearchType-DdiHRd3b.js";import{L as G}from"./List-plozWRZ-.js";import{H as R}from"./DefaultResultListItem-mGi7Q9yp.js";import{w as k}from"./appWrappers-Bxwu6RHO.js";import{SearchBar as v}from"./SearchBar-DJgjo4zM.js";import{S as T}from"./SearchResult-C8ABFM11.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hQBKbJ2Q.js";import"./Plugin-hZUWdyx8.js";import"./componentData-ClXDGabG.js";import"./useAnalytics-WQSTtdKZ.js";import"./useApp-CJiRzn9p.js";import"./useRouteRef-CQranF9u.js";import"./index-B4-sCELz.js";import"./ArrowForward-Fp74Z2FA.js";import"./translation-Dx49kx0C.js";import"./Page-620eNI18.js";import"./useMediaQuery-CQoRokpI.js";import"./Divider-ZPbdzwYD.js";import"./ArrowBackIos-gTMq9Ibf.js";import"./ArrowForwardIos-C018imat.js";import"./translation-D82dcTP_.js";import"./lodash-BP1SMfTv.js";import"./useAsync-Aa2CWgcM.js";import"./useMountedState-a3-IIk52.js";import"./Modal-zPxLU0J0.js";import"./Portal-Cnh7PMtZ.js";import"./Backdrop-C8vzwwKl.js";import"./styled-DZeC-7HZ.js";import"./ExpandMore-BokYQgAi.js";import"./AccordionDetails-B2NVmeh-.js";import"./index-B9sM2jn7.js";import"./Collapse-DqsO37Qc.js";import"./ListItem-CL7cp1ei.js";import"./ListContext-U4JS0URp.js";import"./ListItemIcon-CPM6s9WY.js";import"./ListItemText-BuTHvPeP.js";import"./Tabs-akNZLvcf.js";import"./KeyboardArrowRight-C7d7k8yS.js";import"./FormLabel-DAW6Jws-.js";import"./formControlState-pfeMig1Q.js";import"./InputLabel-CEy0mPJY.js";import"./Select-CeOsBVc8.js";import"./Popover-CgXZkw0s.js";import"./MenuItem-D4lS-Tk1.js";import"./Checkbox-Dc4l6x2H.js";import"./SwitchBase-DAt7Zy0x.js";import"./Chip-DGz_2XAA.js";import"./Link-CbL8aN6w.js";import"./index-BySxz2Fm.js";import"./useObservable-CQuFZjxf.js";import"./useIsomorphicLayoutEffect-6ZDZN3qg.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-fqCixX3i.js";import"./openLink-CfoeYFVv.js";import"./Search-CWfN5oH6.js";import"./useDebounce-DsyNjqGi.js";import"./InputAdornment-DtG38ql4.js";import"./TextField-DlXMAdIB.js";import"./useElementFilter-eJorctIb.js";import"./EmptyState-Dj4f7Kdu.js";import"./Progress-BIkrk6H-.js";import"./LinearProgress-BB2o8J4I.js";import"./ResponseErrorPanel-D640XWh4.js";import"./ErrorPanel-v1gSkFV1.js";import"./WarningPanel-DR6RE8HP.js";import"./MarkdownContent-CW0GoH5Q.js";import"./CodeSnippet-C61-05Og.js";import"./CopyTextButton-DcNGOVhO.js";import"./useCopyToClipboard-DcFppNfJ.js";import"./Tooltip-CVo3tGMI.js";import"./Popper-BmbP9aP5.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const mo=["Default","CustomModal"];export{r as CustomModal,e as Default,mo as __namedExportsOrder,co as default};
