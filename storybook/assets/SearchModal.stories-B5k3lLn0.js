import{j as t,U as d,a2 as u,a1 as h}from"./iframe-hODDjxEI.js";import{r as g}from"./plugin-BQSmv4Bn.js";import{S as m,u as n,a as x}from"./useSearchModal-CkmZ9toR.js";import{B as c}from"./Button-CIAzspzG.js";import{D as S,a as f,b as M}from"./DialogTitle-CrkUSiE7.js";import{B as j}from"./Box-D9xbeeDr.js";import{S as r}from"./Grid-EriWvE-n.js";import{S as C}from"./SearchType-DJI87ufq.js";import{L as y}from"./List-W4gqv1lF.js";import{H as I}from"./DefaultResultListItem-Dpscnea_.js";import{w as R}from"./appWrappers-DUNJ2DyT.js";import{m as B}from"./makeStyles-aIh2F1t-.js";import{s as D,M as k}from"./api-l1DFuRf7.js";import{S as v}from"./SearchContext-C5WlRdT0.js";import{SearchBar as T}from"./SearchBar-B2hKHHZe.js";import{S as b}from"./SearchResult-GCHkFVP9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMCtZSsa.js";import"./Plugin-EbxOdKk9.js";import"./componentData-Da0rDDu4.js";import"./useAnalytics-DnjR9eFY.js";import"./useApp-4cPWtTY3.js";import"./useRouteRef-CiEsUmyu.js";import"./ArrowForward-Cv5lwi6v.js";import"./translation-CftKoScH.js";import"./Page-CUklThtr.js";import"./useMediaQuery-DVliIEZ2.js";import"./Divider-DXrAbp3F.js";import"./ArrowBackIos-DHYXKjyq.js";import"./ArrowForwardIos-D_b07DP-.js";import"./translation-BvJnbLwH.js";import"./Modal-BHs76e9X.js";import"./Portal-CzdVLRe2.js";import"./Backdrop-Cy6GWQWo.js";import"./styled-0hYU00PK.js";import"./ExpandMore-DFqQ2-AE.js";import"./useAsync-DekbOmTi.js";import"./useMountedState-WIh-cZ-b.js";import"./AccordionDetails-DUzMIMZk.js";import"./index-B9sM2jn7.js";import"./Collapse-wne6B_is.js";import"./ListItem-DDCqoUKb.js";import"./ListContext-DIhobSxE.js";import"./ListItemIcon-Be-6XHnn.js";import"./ListItemText-DasnL6-v.js";import"./Tabs-Cth9PL7O.js";import"./KeyboardArrowRight--wlokrBF.js";import"./FormLabel-Bn5Wmcr4.js";import"./formControlState-DuKLYdlc.js";import"./InputLabel-BX5IwV94.js";import"./Select-CO9jyHaF.js";import"./Popover-CAbPHxGr.js";import"./MenuItem-B1ty_1k5.js";import"./Checkbox-Cck7a_VE.js";import"./SwitchBase-B8znZq3u.js";import"./Chip-Or0EmgUT.js";import"./Link-B3hayh6l.js";import"./index-CcwbHv03.js";import"./lodash-m16iCv2r.js";import"./WebStorage-BDXQz_Ed.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DyFcC5QT.js";import"./useIsomorphicLayoutEffect-DPIVbu6L.js";import"./BUIProvider-DDQSxPNK.js";import"./openLink-DQgtmsfk.js";import"./Search-X9mgDBrn.js";import"./useDebounce-CGJqCFkE.js";import"./InputAdornment-f5FvqiJt.js";import"./TextField-1BWI8cEs.js";import"./useElementFilter-vgY-ygMA.js";import"./EmptyState-Dg-RKfTS.js";import"./Progress-DHme0ert.js";import"./LinearProgress-DaCsQLc6.js";import"./ResponseErrorPanel-CPugx3Ga.js";import"./ErrorPanel-BSbqKZnS.js";import"./WarningPanel-DeG7cRwT.js";import"./MarkdownContent-CzCrGaQE.js";import"./CodeSnippet-yOWmTpVZ.js";import"./CopyTextButton-D8PP4mnR.js";import"./useCopyToClipboard-BhfNCz1T.js";import"./Tooltip-D-EFxL80.js";import"./Popper-CHhNufeX.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const co=["Default","CustomModal"];export{s as CustomModal,i as Default,co as __namedExportsOrder,no as default};
