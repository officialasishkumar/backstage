import{j as t,Y as u,N as p,Z as g}from"./iframe-CTqAPkqN.js";import{r as h}from"./plugin-3lxbj7hF.js";import{S as l,u as c,a as x}from"./useSearchModal-Solb-atX.js";import{s as S,M}from"./api-BoBBPj76.js";import{S as C}from"./SearchContext-CqATHiRk.js";import{B as m}from"./Button-D2BiJm3I.js";import{m as f}from"./makeStyles-DI4Xn9jK.js";import{D as j,a as y,b as B}from"./DialogTitle-CDBhy5il.js";import{B as D}from"./Box-CuoYE_bm.js";import{S as n}from"./Grid-BTPqc0jk.js";import{S as I}from"./SearchType-CAE9bssD.js";import{L as G}from"./List-yUGuy5mk.js";import{H as R}from"./DefaultResultListItem-DQ1Wul6X.js";import{w as k}from"./appWrappers-ByvhIwQq.js";import{SearchBar as v}from"./SearchBar-B7nx-n5-.js";import{S as T}from"./SearchResult-BXBltNn4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hiWGPY2p.js";import"./Plugin-DlAwkFnT.js";import"./componentData-CtmcFq88.js";import"./useAnalytics-VN6Gc-5g.js";import"./useApp-4ydDLhug.js";import"./useRouteRef-C0mwNC6E.js";import"./index-Bo89h57h.js";import"./ArrowForward-5m3v4lf1.js";import"./translation-BuNA7IbU.js";import"./Page-MvEVRY4h.js";import"./useMediaQuery-CCtxSAwF.js";import"./Divider-DnRcqcYe.js";import"./ArrowBackIos-DWH9jXCo.js";import"./ArrowForwardIos-ButM9uHn.js";import"./translation-CCi5tqKF.js";import"./lodash-BfbSSurr.js";import"./useAsync-Bp-OY9_W.js";import"./useMountedState-B0CBEazr.js";import"./Modal-Cvof-CyN.js";import"./Portal-CEy1WTiJ.js";import"./Backdrop-Bk8QKjXI.js";import"./styled-Dr66SpKq.js";import"./ExpandMore-CXY7uG6y.js";import"./AccordionDetails-EDKGcOp-.js";import"./index-B9sM2jn7.js";import"./Collapse-GjNbT6uG.js";import"./ListItem-CSI66Z0A.js";import"./ListContext-rz4ELcuk.js";import"./ListItemIcon-CMqV6SHB.js";import"./ListItemText-C66ZPx1O.js";import"./Tabs-lyyLT7me.js";import"./KeyboardArrowRight-CvJOO1va.js";import"./FormLabel-DqIcxV33.js";import"./formControlState-Du9Va18K.js";import"./InputLabel-sDa8d1TQ.js";import"./Select-Gx2QFjcm.js";import"./Popover-B8fnCvZs.js";import"./MenuItem-vmX3kWBC.js";import"./Checkbox-Dxe04X2o.js";import"./SwitchBase-CLS-bEk2.js";import"./Chip-CpwWqKm2.js";import"./Link-DXOqSfzJ.js";import"./index-DK50nKwc.js";import"./WebStorage--fFr8sxx.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CiZPUid7.js";import"./useIsomorphicLayoutEffect-Bz_fp4QY.js";import"./AppThemeApi-bKanvrM1.js";import"./BUIProvider-Dw1aFK6j.js";import"./openLink-DuhEaLpg.js";import"./Search-D6rUiepN.js";import"./useDebounce-DZoRWEPP.js";import"./InputAdornment-b7_NseUe.js";import"./TextField-B3eX88so.js";import"./useElementFilter-DnyzewSi.js";import"./EmptyState-By5DylW2.js";import"./Progress-qcZV9dAO.js";import"./LinearProgress-BZgYQlsH.js";import"./ResponseErrorPanel-CK8jqS7J.js";import"./ErrorPanel-DRrDZ_Jv.js";import"./WarningPanel-Bx5_IboJ.js";import"./MarkdownContent-CpKT-NEs.js";import"./CodeSnippet-ygztmdOf.js";import"./CopyTextButton-kC5v9d4e.js";import"./useCopyToClipboard-dDkPrrLa.js";import"./Tooltip-DnGLXgIK.js";import"./Popper-CYb-6gU9.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
