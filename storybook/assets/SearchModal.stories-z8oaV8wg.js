import{j as t,U as d,a2 as u,a1 as h}from"./iframe-DVcxdhoL.js";import{r as g}from"./plugin-D0xFHb9z.js";import{S as m,u as n,a as x}from"./useSearchModal-QVuRpMF3.js";import{B as c}from"./Button-CD-VB3jZ.js";import{D as S,a as f,b as M}from"./DialogTitle-ClMBuQna.js";import{B as j}from"./Box-CEEtJDX_.js";import{S as r}from"./Grid-Dms4qLVU.js";import{S as C}from"./SearchType-DCar43kL.js";import{L as y}from"./List-DXUnol4x.js";import{H as I}from"./DefaultResultListItem-Bd4eofXQ.js";import{w as R}from"./appWrappers-Vsqlz-xm.js";import{m as B}from"./makeStyles-DvhSq6P6.js";import{s as D,M as k}from"./api-CVPmbsJ-.js";import{S as v}from"./SearchContext-C94a5PFy.js";import{SearchBar as T}from"./SearchBar-Bo8Sb9s8.js";import{S as b}from"./SearchResult-CuTo1vK3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Detm9czX.js";import"./Plugin-IaKbT3wK.js";import"./componentData-DK9-izc0.js";import"./useAnalytics-D67wwHSJ.js";import"./useApp-sEZYRDhs.js";import"./useRouteRef-DLTT8EBo.js";import"./ArrowForward-CmIu9Zxf.js";import"./translation-YzpNgUiN.js";import"./Page-CL7xcw_S.js";import"./useMediaQuery-CqT4KrJA.js";import"./Divider-vP1lkIQX.js";import"./ArrowBackIos-qpqRfQ2j.js";import"./ArrowForwardIos-CzPaXGVb.js";import"./translation-CNiRLzjf.js";import"./Modal-44qXCa1H.js";import"./Portal-CN0zdblU.js";import"./Backdrop-BezO5KP0.js";import"./styled-CFG22yA2.js";import"./ExpandMore-CHBMo2iS.js";import"./useAsync-DDYGRsJF.js";import"./useMountedState-CYBBtHKr.js";import"./AccordionDetails-C0VBZ7GZ.js";import"./index-B9sM2jn7.js";import"./Collapse-CoJ6BoJZ.js";import"./ListItem-BwR4C4uD.js";import"./ListContext-w1A3oPfR.js";import"./ListItemIcon-C1Yi9XVH.js";import"./ListItemText-CuFAvBLe.js";import"./Tabs-BtKcT80t.js";import"./KeyboardArrowRight-CqKiMDpb.js";import"./FormLabel-CdfVBwJA.js";import"./formControlState-DUKLu-HT.js";import"./InputLabel-DTqFF-3k.js";import"./Select-DPyy2uBS.js";import"./Popover-C4IDm9xH.js";import"./MenuItem-CaVVfr4W.js";import"./Checkbox-D9v5xJ3g.js";import"./SwitchBase-BNNWW9R5.js";import"./Chip-D9Lo0rph.js";import"./Link-CDu7g4U_.js";import"./index-D35Dverb.js";import"./lodash-BarMUI2a.js";import"./WebStorage-DJ9UBMaZ.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-C58lk-uV.js";import"./useIsomorphicLayoutEffect-CQpuWPbW.js";import"./BUIProvider-DQjUxi8m.js";import"./openLink-CcfjgoQ8.js";import"./Search-h-6DHFRs.js";import"./useDebounce-D63rGT5M.js";import"./InputAdornment-C6KH-dxb.js";import"./TextField-BI6wR-KB.js";import"./useElementFilter-D-gi_A-N.js";import"./EmptyState-BzQObDeb.js";import"./Progress-DpFFZR8e.js";import"./LinearProgress-B38x2DtD.js";import"./ResponseErrorPanel-D-hnIajY.js";import"./ErrorPanel-BaiCN28C.js";import"./WarningPanel-BOlG15Vm.js";import"./MarkdownContent-CioScwrP.js";import"./CodeSnippet-BhCN8GVS.js";import"./CopyTextButton-CIwt-MUw.js";import"./useCopyToClipboard-DsXf1p_m.js";import"./Tooltip-CLapkFrU.js";import"./Popper-C6RVnZCX.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
