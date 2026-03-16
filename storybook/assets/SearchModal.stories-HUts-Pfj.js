import{j as t,W as u,K as p,X as g}from"./iframe-_E948MVz.js";import{r as h}from"./plugin-Bz7g0aeI.js";import{S as l,u as c,a as x}from"./useSearchModal-C9SZ3Acv.js";import{s as S,M}from"./api-pQXBJ_vE.js";import{S as C}from"./SearchContext-CQztvfk5.js";import{B as m}from"./Button-8HeP9eyX.js";import{m as f}from"./makeStyles-CeVQhawL.js";import{D as j,a as y,b as B}from"./DialogTitle-CFWs5kBx.js";import{B as D}from"./Box-CkUsT8sz.js";import{S as n}from"./Grid-DjkXhwP0.js";import{S as I}from"./SearchType-uIzbtLj1.js";import{L as G}from"./List-D7wngo3z.js";import{H as R}from"./DefaultResultListItem-B1sd3_Nu.js";import{w as k}from"./appWrappers-BKSzuyoD.js";import{SearchBar as v}from"./SearchBar-CwKp-w-3.js";import{S as T}from"./SearchResult-DPj2P7ro.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZPKTQwe.js";import"./Plugin-CJ0wb-2V.js";import"./componentData-CKoVJSo9.js";import"./useAnalytics-Jbkamk-n.js";import"./useApp-DqMZs1Wr.js";import"./useRouteRef-CF-IsBln.js";import"./index-B7hK4tkb.js";import"./ArrowForward-1R6xO2kA.js";import"./translation-mb8bp5sJ.js";import"./Page-QI8cx-pD.js";import"./useMediaQuery-DQaTlHr1.js";import"./Divider-Chvt_nSc.js";import"./ArrowBackIos-j4vSDPrW.js";import"./ArrowForwardIos-nRwXjjsX.js";import"./translation-BvWAlFYZ.js";import"./lodash-C-i153t0.js";import"./useAsync-DFpwKevH.js";import"./useMountedState-BylHk9na.js";import"./Modal-wldFZbuS.js";import"./Portal-gFrfFYQV.js";import"./Backdrop-DsKM21e-.js";import"./styled-DbkjhS7C.js";import"./ExpandMore-C1tdf9i4.js";import"./AccordionDetails-C0eIh-WX.js";import"./index-B9sM2jn7.js";import"./Collapse-BLf2ePuA.js";import"./ListItem-DZRnMDoX.js";import"./ListContext-DMVOB75k.js";import"./ListItemIcon-gYDkcPB3.js";import"./ListItemText-DxsdUdg2.js";import"./Tabs-BkSWEHsy.js";import"./KeyboardArrowRight-DxfaTpKB.js";import"./FormLabel-DFurO3xJ.js";import"./formControlState-DOCor8U6.js";import"./InputLabel-BjDpJHWW.js";import"./Select-B5x_g1zs.js";import"./Popover-DfDZbSHO.js";import"./MenuItem-DgcJIfE9.js";import"./Checkbox-D3iYa4gW.js";import"./SwitchBase-LdCvLIKQ.js";import"./Chip-CJoqH_YG.js";import"./Link-yJri3-iz.js";import"./index-DJ6lgYrc.js";import"./useObservable-Bx1dqyQ_.js";import"./useIsomorphicLayoutEffect-DoQKgtM6.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./Search-vLlo2Lv9.js";import"./useDebounce-DCiS3Jh9.js";import"./InputAdornment-DYNUuC_T.js";import"./TextField-Bg8gns-u.js";import"./useElementFilter-fTYyZ_qp.js";import"./EmptyState-Cy8LqJLT.js";import"./Progress-CIjTAuVf.js";import"./LinearProgress-CI63X4CN.js";import"./ResponseErrorPanel-BGPDUxTY.js";import"./ErrorPanel-CyS2eQGF.js";import"./WarningPanel-B5w_AAvm.js";import"./MarkdownContent-BlWuHRlI.js";import"./CodeSnippet-BpCSOurq.js";import"./CopyTextButton-BOpnSgs5.js";import"./useCopyToClipboard-D1wlr4gB.js";import"./Tooltip-CaMAvpLY.js";import"./Popper-DVCylAOX.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},io={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{r as CustomModal,e as Default,lo as __namedExportsOrder,io as default};
