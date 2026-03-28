import{j as t,a2 as u,V as p,a3 as g}from"./iframe-DbF3iEvf.js";import{r as h}from"./plugin-lfICKBFC.js";import{S as l,u as c,a as x}from"./useSearchModal-D3_p7dIy.js";import{s as S,M}from"./api-CF4rG4kv.js";import{S as C}from"./SearchContext-BIX8hsyG.js";import{B as m}from"./Button-r3opztB8.js";import{m as f}from"./makeStyles-Ddzw_WnF.js";import{D as j,a as y,b as B}from"./DialogTitle-Uhap_p1W.js";import{B as D}from"./Box-k_BPQh5L.js";import{S as n}from"./Grid-CVypMrLh.js";import{S as I}from"./SearchType-DT_keaSI.js";import{L as G}from"./List-jjp85zn8.js";import{H as R}from"./DefaultResultListItem-Dn_remqc.js";import{w as k}from"./appWrappers-dpVZ4jgv.js";import{SearchBar as v}from"./SearchBar-DJEqF-mY.js";import{S as T}from"./SearchResult-CDCf5UkV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cw1DhxH0.js";import"./Plugin-DPs_U0r4.js";import"./componentData-FQ-FhVVe.js";import"./useAnalytics-CMjFjhus.js";import"./useApp-DSs-Xjlm.js";import"./useRouteRef-B3WRLnM9.js";import"./ArrowForward-DeeYxfOs.js";import"./translation-BFyZ6gHL.js";import"./Page-DMWn2weo.js";import"./useMediaQuery-C7oSbTbA.js";import"./Divider-DO54HmUy.js";import"./ArrowBackIos-C21J8sch.js";import"./ArrowForwardIos-DkvTu67z.js";import"./translation-DtxKlnPr.js";import"./lodash-C-McvsBm.js";import"./useAsync-CMcTC1HS.js";import"./useMountedState-ETLXQmd3.js";import"./Modal-B0_egNjV.js";import"./Portal-hbPr6RYI.js";import"./Backdrop-BayukEjw.js";import"./styled-BqEwKtoO.js";import"./ExpandMore-Bj5F8PiN.js";import"./AccordionDetails-2CErljQI.js";import"./index-B9sM2jn7.js";import"./Collapse-fv2mDykP.js";import"./ListItem-BXU8AvHT.js";import"./ListContext-CAU0vplw.js";import"./ListItemIcon-CVolFNFm.js";import"./ListItemText-DZspTlhz.js";import"./Tabs-eK5jSo5s.js";import"./KeyboardArrowRight-wNJXo09v.js";import"./FormLabel-DwcIM_V2.js";import"./formControlState-BvqBitRq.js";import"./InputLabel-Cd0fJMlZ.js";import"./Select-In3L3hho.js";import"./Popover-vZsHaVBW.js";import"./MenuItem-Cb08Jwc_.js";import"./Checkbox-DjI1FsuW.js";import"./SwitchBase-DeJa_LN6.js";import"./Chip-ATBPxnDR.js";import"./Link-BOVc4nYr.js";import"./index-D0xg6uah.js";import"./WebStorage-DLpT93Kd.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CvP8xTKq.js";import"./useIsomorphicLayoutEffect-BnEIHzDv.js";import"./AppThemeApi-DumGAAI-.js";import"./BUIProvider-BB5XGcE9.js";import"./openLink-B2ZDb-Dy.js";import"./Search-D4pC9zDM.js";import"./useDebounce-CIpRPOov.js";import"./InputAdornment-Ccbpu74Y.js";import"./TextField-QTsIaCUy.js";import"./useElementFilter-Bk4-7jBF.js";import"./EmptyState-mHkLnzyU.js";import"./Progress-D45YQE5U.js";import"./LinearProgress-CaXwL9UL.js";import"./ResponseErrorPanel-DRAQaEfT.js";import"./ErrorPanel-BN83QwgD.js";import"./WarningPanel-DluC_mYZ.js";import"./MarkdownContent-Br4E5qSu.js";import"./CodeSnippet-DShAfocv.js";import"./CopyTextButton-BfprJmvP.js";import"./useCopyToClipboard-JrRUisDn.js";import"./Tooltip-CJhXFAid.js";import"./Popper-C413ylWX.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
