import{j as t,U as d,a2 as u,a1 as h}from"./iframe-B7X4koWg.js";import{r as g}from"./plugin-CN8xaywy.js";import{S as m,u as n,a as x}from"./useSearchModal-CLSZq5k-.js";import{B as c}from"./Button-D6eLAKcF.js";import{D as S,a as f,b as M}from"./DialogTitle-DeTFYqkE.js";import{B as j}from"./Box-D1NbE0qt.js";import{S as r}from"./Grid-CsLGBI0Z.js";import{S as C}from"./SearchType-BCojyAna.js";import{L as y}from"./List-B4jJ8U2i.js";import{H as I}from"./DefaultResultListItem-9socbHGw.js";import{w as R}from"./appWrappers-BXEhvQIz.js";import{m as B}from"./makeStyles-CiNtEf1f.js";import{s as D,M as k}from"./api-DV9pm_PS.js";import{S as v}from"./SearchContext-Bd85Y6kK.js";import{SearchBar as T}from"./SearchBar-DmMYnY3T.js";import{S as b}from"./SearchResult-rpv1JYRL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cc2I0kEC.js";import"./Plugin-CRecCd5D.js";import"./componentData-DOqoOySj.js";import"./useAnalytics-BwhwrTZ0.js";import"./useApp-CJfDpKhN.js";import"./useRouteRef-CcA8Qfeo.js";import"./ArrowForward-CL72ikJ9.js";import"./translation-mawtf2_k.js";import"./Page-CTbMLMv3.js";import"./useMediaQuery-BagEMDdT.js";import"./Divider-Dh3F_se-.js";import"./ArrowBackIos-8p22Ng1L.js";import"./ArrowForwardIos-Bw9XK4La.js";import"./translation-DHJVNl0w.js";import"./Modal-ngIBWuwT.js";import"./Portal-BVLNQ5cR.js";import"./Backdrop-BD7sWzva.js";import"./styled-Bs9bCmQE.js";import"./ExpandMore-BPX8WEL7.js";import"./useAsync-DWgoS754.js";import"./useMountedState-D8f8WPQV.js";import"./AccordionDetails-DTQp2Cvk.js";import"./index-B9sM2jn7.js";import"./Collapse-eyI9DCCN.js";import"./ListItem-BZPD3cNM.js";import"./ListContext-DYod19dm.js";import"./ListItemIcon-sECtBc41.js";import"./ListItemText-Cqy8IxmT.js";import"./Tabs-CdOnfunm.js";import"./KeyboardArrowRight-C1S3K57m.js";import"./FormLabel-V0HBBLFT.js";import"./formControlState-Dhhu7JPP.js";import"./InputLabel-CGizzD6-.js";import"./Select-gtq13jA2.js";import"./Popover-DFCWHpJT.js";import"./MenuItem-CCFkIr0L.js";import"./Checkbox-BiRhCSfw.js";import"./SwitchBase-JGFGpA7M.js";import"./Chip-Bn5sNJ7t.js";import"./Link-DK73yQJ4.js";import"./index-Csz7HKtd.js";import"./lodash-CVU3dqUL.js";import"./WebStorage-Dzr--kWq.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Ce4iI7ED.js";import"./useIsomorphicLayoutEffect-BBNG1fnm.js";import"./BUIProvider-DidJ51L8.js";import"./openLink-DCeIGU84.js";import"./Search-C3fTh494.js";import"./useDebounce-Ba2JDA9O.js";import"./InputAdornment-Ddt6M4qQ.js";import"./TextField-MFJpUhmv.js";import"./useElementFilter-BjNxonfB.js";import"./EmptyState-1HyDGfaB.js";import"./Progress-Bpw6q33F.js";import"./LinearProgress-g0p5D58T.js";import"./ResponseErrorPanel-DtnNKO2R.js";import"./ErrorPanel-DxNfSP2g.js";import"./WarningPanel-BTzP7nqd.js";import"./MarkdownContent-BV7XBP7T.js";import"./CodeSnippet-CoJZeUNp.js";import"./CopyTextButton-BaBptCB3.js";import"./useCopyToClipboard-BYh5gSIA.js";import"./Tooltip-5XmI3CNW.js";import"./Popper-BwLyAbb_.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
