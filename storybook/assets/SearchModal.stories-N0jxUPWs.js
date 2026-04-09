import{j as t,S as d,a0 as u,$ as h}from"./iframe-DeVvrktA.js";import{r as g}from"./plugin-DYh1B_Wr.js";import{S as m,u as n,a as x}from"./useSearchModal-DGnlHo5X.js";import{B as c}from"./Button-lN69gEUI.js";import{D as S,a as f,b as M}from"./DialogTitle-CyeII6rl.js";import{B as j}from"./Box-DOTqXu-6.js";import{S as r}from"./Grid-10XIJtv4.js";import{S as C}from"./SearchType-DD9-Ow8j.js";import{L as y}from"./List-BmFOCbHw.js";import{H as I}from"./DefaultResultListItem-BINrh5-h.js";import{w as R}from"./appWrappers-ClZPaWKL.js";import{m as B}from"./makeStyles-CDec1JgF.js";import{s as D,M as k}from"./api-9rXC1bTg.js";import{S as v}from"./SearchContext-CyBBmzJ-.js";import{SearchBar as T}from"./SearchBar-DvQ6zxMl.js";import{S as b}from"./SearchResult-DAspmdKB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B1YrHSsg.js";import"./Plugin-Cd4lFZnI.js";import"./componentData-xmIIWjvp.js";import"./useAnalytics-Zw1fFqKc.js";import"./useApp-web1meD-.js";import"./useRouteRef-B6aIfF7-.js";import"./ArrowForward-008iR1vx.js";import"./translation-D8TXFmst.js";import"./Page-BpvJtsIx.js";import"./useMediaQuery-Cxykr1Wb.js";import"./Divider-BBFNWUSp.js";import"./ArrowBackIos-B7rTX0np.js";import"./ArrowForwardIos-adPl2Wc_.js";import"./translation-BIA9F0uU.js";import"./Modal-D8wNxgQF.js";import"./Portal-BnHJ445C.js";import"./Backdrop-D3tmCsR_.js";import"./styled-oeuDQEze.js";import"./ExpandMore-DibpsI70.js";import"./useAsync-Bu6SsVmg.js";import"./useMountedState-D8dcyD-P.js";import"./AccordionDetails-BER2vuEo.js";import"./index-B9sM2jn7.js";import"./Collapse-DBmO3Kkh.js";import"./ListItem-DTIEUFkk.js";import"./ListContext-Bl_Wg17k.js";import"./ListItemIcon-DbPRQV2B.js";import"./ListItemText-yFOw_HmD.js";import"./Tabs-DEvqM8qm.js";import"./KeyboardArrowRight-C0pWIo3J.js";import"./FormLabel-O1PXfAQ6.js";import"./formControlState-Cnd-Q6SQ.js";import"./InputLabel-BGfEe65D.js";import"./Select-D8U6PZXV.js";import"./Popover-DVzFdjxo.js";import"./MenuItem-BgxKsNQO.js";import"./Checkbox-kSFDm-zg.js";import"./SwitchBase-CIpLXZjR.js";import"./Chip-mF0Wos1s.js";import"./Link-B6U9VXJa.js";import"./index-DTK3kZOY.js";import"./lodash-V1Qj8ZxO.js";import"./WebStorage-WIf174OD.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-A6QFNMf9.js";import"./useIsomorphicLayoutEffect-BgQSjFTs.js";import"./BUIProvider-CXiawPZL.js";import"./openLink-DB0X2oCJ.js";import"./Search-BtUh85Pw.js";import"./useDebounce-CycwJMjp.js";import"./InputAdornment-DOHcmNwf.js";import"./TextField-B8VHsops.js";import"./useElementFilter-B8lply9e.js";import"./EmptyState-CSSLVy-X.js";import"./Progress-EF07E6NJ.js";import"./LinearProgress-Bbsb8UW2.js";import"./ResponseErrorPanel-BS6yhaTc.js";import"./ErrorPanel-D6SIioPU.js";import"./WarningPanel-WHRWSafU.js";import"./MarkdownContent-BjZszMqE.js";import"./CodeSnippet-BEmMmhuI.js";import"./CopyTextButton-CX30i4s7.js";import"./useCopyToClipboard-CkvHZi0N.js";import"./Tooltip-CRaoVjQ4.js";import"./Popper-Cbnycm1A.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
