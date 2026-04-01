import{j as t,U as d,a2 as u,a1 as h}from"./iframe-D_dthwJh.js";import{r as g}from"./plugin-DfkBHbyB.js";import{S as m,u as n,a as x}from"./useSearchModal-gmNk59Oh.js";import{B as c}from"./Button-OdR2bCzv.js";import{D as S,a as f,b as M}from"./DialogTitle-2NjlhubW.js";import{B as j}from"./Box-BkfaYvLl.js";import{S as r}from"./Grid-BjyqMpwT.js";import{S as C}from"./SearchType-CDmktp84.js";import{L as y}from"./List-BtLOYLzX.js";import{H as I}from"./DefaultResultListItem-Cd4ZlHGF.js";import{w as R}from"./appWrappers-CNajVLMi.js";import{m as B}from"./makeStyles-DvB3MZbd.js";import{s as D,M as k}from"./api-CMDZbhwq.js";import{S as v}from"./SearchContext-BZiBRc6A.js";import{SearchBar as T}from"./SearchBar-CZ1xNrkB.js";import{S as b}from"./SearchResult-dIIRPNKw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvoP_oQN.js";import"./Plugin-SeWdjsMW.js";import"./componentData-CSbiHDN7.js";import"./useAnalytics-BFleSJbt.js";import"./useApp-DOW2ZF1x.js";import"./useRouteRef-DVUEVzgi.js";import"./ArrowForward-Cna7yfDE.js";import"./translation-DU4CLFZm.js";import"./Page-uEg4WuQL.js";import"./useMediaQuery-CMJucivG.js";import"./Divider-BMLrXSiB.js";import"./ArrowBackIos-BDch0One.js";import"./ArrowForwardIos-DvOYq-qD.js";import"./translation-BIdlKBN9.js";import"./Modal-uU7908xY.js";import"./Portal-BUjXNiYO.js";import"./Backdrop-CuUUZNkK.js";import"./styled-ClS6a4l6.js";import"./ExpandMore-juWm_omF.js";import"./useAsync-CtEvpLQU.js";import"./useMountedState-Cazxj0V9.js";import"./AccordionDetails-DWfCLGSB.js";import"./index-B9sM2jn7.js";import"./Collapse-5abwWzAL.js";import"./ListItem-DTl55zDW.js";import"./ListContext-C98V7euk.js";import"./ListItemIcon-BsWuRLje.js";import"./ListItemText-CkW_v4PE.js";import"./Tabs-r5cP5Gnv.js";import"./KeyboardArrowRight-BlgPy_mZ.js";import"./FormLabel-BtZu3J7f.js";import"./formControlState-CN8qEO_j.js";import"./InputLabel-eFW7f4xb.js";import"./Select-DK13wNa6.js";import"./Popover-65jxITH8.js";import"./MenuItem-D-lEMbpv.js";import"./Checkbox-CswZKY6_.js";import"./SwitchBase-DJkeAcWi.js";import"./Chip-T8y-KhZ5.js";import"./Link-DIS7qTGn.js";import"./index-DMgM-NvI.js";import"./lodash-BGiaY2vY.js";import"./WebStorage-D-iTsV2i.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BI_fhvCL.js";import"./useIsomorphicLayoutEffect-COm_ITkd.js";import"./BUIProvider-kgegLBnx.js";import"./openLink-DtEOuHfv.js";import"./Search-DQIOqqHh.js";import"./useDebounce-hJCgY5Wp.js";import"./InputAdornment-DjRgxkzy.js";import"./TextField-BqHyPgXW.js";import"./useElementFilter-ZbjiwX4I.js";import"./EmptyState-diek_vv8.js";import"./Progress-BGkAbS0P.js";import"./LinearProgress-GjkpCdds.js";import"./ResponseErrorPanel-BH98CwZl.js";import"./ErrorPanel-KKX5LcYK.js";import"./WarningPanel-t1ChgcN0.js";import"./MarkdownContent-BPIooCL5.js";import"./CodeSnippet-BcxUzhJu.js";import"./CopyTextButton-BuV8owy4.js";import"./useCopyToClipboard-D8URo-wA.js";import"./Tooltip-Cd-sen2U.js";import"./Popper-D6KVGLgx.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
