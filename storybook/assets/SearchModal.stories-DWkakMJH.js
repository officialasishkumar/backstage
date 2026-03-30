import{j as t,a1 as d,U as u,a2 as h}from"./iframe-v6zF9Gaf.js";import{r as g}from"./plugin-DbFu3R3Z.js";import{S as m,u as n,a as x}from"./useSearchModal-B49mahD2.js";import{s as S,M as f}from"./api-Dx1L8Feq.js";import{S as M}from"./SearchContext-Det2F1sz.js";import{B as c}from"./Button-DpKR-H_M.js";import{m as j}from"./makeStyles-CnXLcFSM.js";import{D as C,a as y,b as I}from"./DialogTitle-BUd0NaHM.js";import{B as R}from"./Box-D8QaCveM.js";import{S as r}from"./Grid-Cpghltf9.js";import{S as B}from"./SearchType-BLsegg7a.js";import{L as D}from"./List-BckW65rp.js";import{H as k}from"./DefaultResultListItem-BPN2Hr_R.js";import{w as v}from"./appWrappers-CavysmfH.js";import{SearchBar as T}from"./SearchBar-4NydCbD9.js";import{S as b}from"./SearchResult-C9VqorvB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4RBOydZ.js";import"./Plugin-BqZC9PeC.js";import"./componentData-hTzXuu7t.js";import"./useAnalytics-BrIdl9nZ.js";import"./useApp-B9X-R3sY.js";import"./useRouteRef--TlAtFur.js";import"./ArrowForward-Dfs2Cp-C.js";import"./translation-BJdDMLO5.js";import"./Page-DJwX3Luo.js";import"./useMediaQuery-qDcEKBRg.js";import"./Divider-urck12QN.js";import"./ArrowBackIos-U-erFT8d.js";import"./ArrowForwardIos-O0z121WH.js";import"./translation-DmLwogss.js";import"./lodash-BcdJgnz3.js";import"./useAsync-By65c0tc.js";import"./useMountedState-B4RaS-_B.js";import"./Modal-8auFf5gZ.js";import"./Portal-D_MLevm5.js";import"./Backdrop-qllrtTxR.js";import"./styled-DI5Z0TIx.js";import"./ExpandMore-sRHa_Mdt.js";import"./AccordionDetails-Doa0DUrz.js";import"./index-B9sM2jn7.js";import"./Collapse-BQyJjuJW.js";import"./ListItem-oij8p5Hz.js";import"./ListContext-DWGbobxz.js";import"./ListItemIcon-uKwWSNNb.js";import"./ListItemText-Pt9uI0B9.js";import"./Tabs-CwH69I3q.js";import"./KeyboardArrowRight-CvqyBPlu.js";import"./FormLabel-DU7mZn5Z.js";import"./formControlState-BzMiQeM8.js";import"./InputLabel-BNHFXOmc.js";import"./Select-CXCVoow1.js";import"./Popover-P49c5zXb.js";import"./MenuItem-DQ5x8pMx.js";import"./Checkbox-Dm119Crg.js";import"./SwitchBase-Bw4baFgs.js";import"./Chip-CmSyufGd.js";import"./Link-DqdRHmUD.js";import"./index-C2dRPvEc.js";import"./WebStorage-lw-nY7kq.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-7PDg4R1O.js";import"./useIsomorphicLayoutEffect-BwSGcGHF.js";import"./BUIProvider-DHQo4NNs.js";import"./openLink-CQrfrplF.js";import"./Search-CYHDkipD.js";import"./useDebounce-DMo5LKAg.js";import"./InputAdornment-C09ziZbr.js";import"./TextField-D3C4bdaP.js";import"./useElementFilter-B41bJv8j.js";import"./EmptyState-BWMgesrl.js";import"./Progress-Dg0sd8G1.js";import"./LinearProgress-BITL7LXj.js";import"./ResponseErrorPanel-D0LmWHAV.js";import"./ErrorPanel-CjiL2jFL.js";import"./WarningPanel-Cxs2bCpa.js";import"./MarkdownContent-DW5Rptjs.js";import"./CodeSnippet-DMjYU0Ny.js";import"./CopyTextButton-BNeWx_8L.js";import"./useCopyToClipboard-S_t1vYyn.js";import"./Tooltip-Bdf10fgk.js";import"./Popper-Ib5g_NV1.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>v(t.jsx(d,{apis:[[S,new f(G)]],children:t.jsx(M,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=j(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(C,{children:t.jsxs(R,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(y,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(B.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(D,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(k,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(I,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
