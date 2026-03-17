import{j as t,Y as u,M as p,Z as g}from"./iframe-w9ggzxzz.js";import{r as h}from"./plugin-DNPhWBtf.js";import{S as l,u as c,a as x}from"./useSearchModal-BYyNNjZB.js";import{s as S,M}from"./api-D8bBgW-Z.js";import{S as C}from"./SearchContext-BjHieXVN.js";import{B as m}from"./Button-oFPiOElT.js";import{m as f}from"./makeStyles-z1EIRT_g.js";import{D as j,a as y,b as B}from"./DialogTitle-3d2Z0B3W.js";import{B as D}from"./Box-CFGD6k5Z.js";import{S as n}from"./Grid-DTFxJLQY.js";import{S as I}from"./SearchType-BR6iAMA0.js";import{L as G}from"./List-eHfcnFSH.js";import{H as R}from"./DefaultResultListItem-DsT-KPGJ.js";import{w as k}from"./appWrappers-BAQfRbE-.js";import{SearchBar as v}from"./SearchBar-DWrYew5_.js";import{S as T}from"./SearchResult-CUBj4OQ6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtfxSItM.js";import"./Plugin-cS_ve1PX.js";import"./componentData-DYkgPOGz.js";import"./useAnalytics-BaEnm4t3.js";import"./useApp-D1hU9Nxa.js";import"./useRouteRef-Bt_cCxSk.js";import"./index-BvT0XEY0.js";import"./ArrowForward-Dk31vgE-.js";import"./translation-Dqrf01p5.js";import"./Page-ChYdMsiM.js";import"./useMediaQuery-CYL0sLFh.js";import"./Divider-CDpKqRf5.js";import"./ArrowBackIos-CAjaxl4Q.js";import"./ArrowForwardIos-B_HETohX.js";import"./translation-W9fqopSF.js";import"./lodash-B7vYRLmK.js";import"./useAsync-DSDwJ_45.js";import"./useMountedState-RVVEE9Da.js";import"./Modal-CbdXoRek.js";import"./Portal-C7nXiunF.js";import"./Backdrop-DX6t0ffT.js";import"./styled-CSrW_Lwl.js";import"./ExpandMore-DqK-T7ix.js";import"./AccordionDetails-B2XW6ZMf.js";import"./index-B9sM2jn7.js";import"./Collapse-DCg-Lfhc.js";import"./ListItem-Br9Axuyj.js";import"./ListContext-iSayvcxx.js";import"./ListItemIcon-PwjJXI96.js";import"./ListItemText-Ct6CxcaK.js";import"./Tabs-DJuSDiFc.js";import"./KeyboardArrowRight-BCt0irNu.js";import"./FormLabel-DUKHmat3.js";import"./formControlState-BkCIGPlG.js";import"./InputLabel-DlNMDnSh.js";import"./Select-Y6WXSVDa.js";import"./Popover-DYRofrki.js";import"./MenuItem-DQf7FzBy.js";import"./Checkbox-BZr2cwzk.js";import"./SwitchBase-B_XlbEOM.js";import"./Chip-ZoLjutcn.js";import"./Link-CugHXzD0.js";import"./index-D7Wpl0IF.js";import"./useObservable-DiihgjLj.js";import"./useIsomorphicLayoutEffect-DzCoblkv.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-C_WciRRp.js";import"./openLink-CDFTvsp6.js";import"./Search-BNH0N7fI.js";import"./useDebounce-BrXsRQtN.js";import"./InputAdornment-CC3Ixb7-.js";import"./TextField-qarNN_Fh.js";import"./useElementFilter-B9pjXAs5.js";import"./EmptyState-DnoEVtw_.js";import"./Progress-CMDhFmEC.js";import"./LinearProgress-Noaj07UY.js";import"./ResponseErrorPanel-WMZqmSMK.js";import"./ErrorPanel-C3hC_7F_.js";import"./WarningPanel-BsRHKIzL.js";import"./MarkdownContent-Qf8TPR7R.js";import"./CodeSnippet-sfMZ9dhz.js";import"./CopyTextButton-XQN1nXQi.js";import"./useCopyToClipboard-CQ_xHa_x.js";import"./Tooltip-Cbxoa4An.js";import"./Popper-CfzuFGS0.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
