import{j as t,U as d,a2 as u,a1 as h}from"./iframe-C11JX4Ba.js";import{r as g}from"./plugin-Bo7Nakh7.js";import{S as m,u as n,a as x}from"./useSearchModal-0UT-xEqr.js";import{B as c}from"./Button-BqLfAs2I.js";import{D as S,a as f,b as M}from"./DialogTitle-CFwD7xTk.js";import{B as j}from"./Box-BT_w3FeJ.js";import{S as r}from"./Grid-BSU_hxOH.js";import{S as C}from"./SearchType-BsH6lG7m.js";import{L as y}from"./List-ClmQaIAH.js";import{H as I}from"./DefaultResultListItem-DR7Old9x.js";import{w as R}from"./appWrappers-BBEq3dId.js";import{m as B}from"./makeStyles-gpfZ2MPN.js";import{s as D,M as k}from"./api-DlmlCXWg.js";import{S as v}from"./SearchContext-DHF7R1b5.js";import{SearchBar as T}from"./SearchBar-Cl94xGB3.js";import{S as b}from"./SearchResult-Dw6PMowq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8lP3FZt.js";import"./Plugin-CWnjlKvb.js";import"./componentData-hJUGps3Y.js";import"./useAnalytics-C5cwZo0H.js";import"./useApp-CYq77aVU.js";import"./useRouteRef-BsaYBCkT.js";import"./ArrowForward-BIoo2GYM.js";import"./translation-DRUBVhN8.js";import"./Page-rZheMm-n.js";import"./useMediaQuery-DsWtJnGf.js";import"./Divider-CmidtaYf.js";import"./ArrowBackIos-CswVJ9Hz.js";import"./ArrowForwardIos-CPtv5xZc.js";import"./translation-BBTx1xhx.js";import"./Modal-Fp_BGzUO.js";import"./Portal-B1VPiTGn.js";import"./Backdrop-df_RtwPu.js";import"./styled-CSoi2Z33.js";import"./ExpandMore-B4w4T5ib.js";import"./useAsync-DVlmdlk_.js";import"./useMountedState-hx0QwsHm.js";import"./AccordionDetails-yQhzZXX7.js";import"./index-B9sM2jn7.js";import"./Collapse-mTxrPkGc.js";import"./ListItem-C7uaqKnP.js";import"./ListContext-C6SY7huE.js";import"./ListItemIcon-BH-OdJJ4.js";import"./ListItemText-3cbIjFw4.js";import"./Tabs-BrR_ojsp.js";import"./KeyboardArrowRight-DMZ6NbBQ.js";import"./FormLabel-DhopwLy4.js";import"./formControlState-CuqJiOEu.js";import"./InputLabel-B8QiR6a-.js";import"./Select-CLPqM6l9.js";import"./Popover-DvOYHW_s.js";import"./MenuItem-C2WQ87Ia.js";import"./Checkbox-Dh_2hUUN.js";import"./SwitchBase-dDM2FVL6.js";import"./Chip-CRnpYsoq.js";import"./Link-DJcQ-aLb.js";import"./index-9AoUhYV3.js";import"./lodash-OqA7S4ml.js";import"./WebStorage-6y64_IYT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BRgP7wxM.js";import"./useIsomorphicLayoutEffect-CZkJMkcv.js";import"./BUIProvider-DMW7S9F-.js";import"./openLink-BVSL9EAg.js";import"./Search-BHF2jAQ6.js";import"./useDebounce-C4NU3F_V.js";import"./InputAdornment-B4t4kaXm.js";import"./TextField-ZjvI_uLb.js";import"./useElementFilter-ClCXRIrY.js";import"./EmptyState-tFJyvb8q.js";import"./Progress-m-SeNIUE.js";import"./LinearProgress-CXMWACQp.js";import"./ResponseErrorPanel-DOa0YIZS.js";import"./ErrorPanel-Dld1kl6l.js";import"./WarningPanel-x8J4gous.js";import"./MarkdownContent-CpG-ppn9.js";import"./CodeSnippet-C0j8Pixd.js";import"./CopyTextButton-C4rq1tpa.js";import"./useCopyToClipboard-pMSWKTpI.js";import"./Tooltip-UyoZLn60.js";import"./Popper-BYwa50Wf.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
