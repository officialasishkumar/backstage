import{j as t,S as d,a1 as u,a0 as h}from"./iframe-CIiIDGZ-.js";import{r as g}from"./plugin-BP_MMJ9s.js";import{S as m,u as n,a as x}from"./useSearchModal-4Njqkqfn.js";import{B as c}from"./Button-MA1fMA7-.js";import{D as S,a as f,b as M}from"./DialogTitle-9e_UOeSY.js";import{B as j}from"./Box-DtVUycxx.js";import{S as r}from"./Grid-Zain3HUl.js";import{S as C}from"./SearchType-Cp_KkLPz.js";import{L as y}from"./List-BGk_33Kg.js";import{H as I}from"./DefaultResultListItem-CPQ9N5Ov.js";import{w as R}from"./appWrappers-c2i-JRlv.js";import{m as B}from"./makeStyles-DIRFdalX.js";import{s as D,M as k}from"./api-DMxmjj-C.js";import{S as v}from"./SearchContext-CexzgwQn.js";import{SearchBar as T}from"./SearchBar-5u1e6iS7.js";import{S as b}from"./SearchResult-DgvSBGfz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DiiKz4Gu.js";import"./Plugin-fbWrcP2n.js";import"./componentData-NO4Ys3Nd.js";import"./useAnalytics-C8Elrazu.js";import"./useApp-CeorHsAH.js";import"./useRouteRef-WKaaUx9b.js";import"./ArrowForward-B1gCV4rN.js";import"./translation-D3ojAyBH.js";import"./Page-DdAqzCue.js";import"./useMediaQuery-ClthfgDG.js";import"./Divider-BGF6ekry.js";import"./ArrowBackIos-CSDslepM.js";import"./ArrowForwardIos-BiMq5gWh.js";import"./translation-Dw9GzLTE.js";import"./Modal-Do_LRYub.js";import"./Portal-BkGhIEsM.js";import"./Backdrop-Ckm5nZuG.js";import"./styled-CIZpuVc6.js";import"./ExpandMore-CcRp_gpL.js";import"./useAsync-B0vM_d2B.js";import"./useMountedState-IAzCyzSD.js";import"./AccordionDetails-VSU2B5SU.js";import"./index-B9sM2jn7.js";import"./Collapse-DKwJiPfJ.js";import"./ListItem-CqGsN4UV.js";import"./ListContext-C8freVI4.js";import"./ListItemIcon-D8xvo_HF.js";import"./ListItemText-CVPwtYNm.js";import"./Tabs-CzUEF8gs.js";import"./KeyboardArrowRight-COXg1q0Q.js";import"./FormLabel-BphlmPUO.js";import"./formControlState-DgIJ0A_f.js";import"./InputLabel-DZZOgupi.js";import"./Select-CxH9X0Ne.js";import"./Popover-AKQjLAsz.js";import"./MenuItem-D0zWGv1t.js";import"./Checkbox-L6nJX3rR.js";import"./SwitchBase-CZxqRhbR.js";import"./Chip-Bepwygrr.js";import"./Link-DJjPQadS.js";import"./index-Cc1WYh9h.js";import"./lodash-BzBabpH3.js";import"./WebStorage-EqJM2U0F.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Bpi2npx8.js";import"./useIsomorphicLayoutEffect-d_nSNOX-.js";import"./BUIProvider-gtQJ0CU8.js";import"./openLink-BYuufqBj.js";import"./Search-62KF1aMD.js";import"./useDebounce-D_bDTiIl.js";import"./InputAdornment-NsxewIXW.js";import"./TextField-BkvBjJXG.js";import"./useElementFilter-Qh5CJem6.js";import"./EmptyState-CUviPqFd.js";import"./Progress-CUQC4OzQ.js";import"./LinearProgress-Cq1U7ZkE.js";import"./ResponseErrorPanel-Bszkaju_.js";import"./ErrorPanel-Chyz-mBS.js";import"./WarningPanel-84hZ_1ys.js";import"./MarkdownContent-Db_Ar1Aw.js";import"./CodeSnippet-DwY_PwOK.js";import"./CopyTextButton-Bs6n8yXa.js";import"./useCopyToClipboard-JljFEsym.js";import"./Tooltip-Dt97tpAm.js";import"./Popper-COve1U5T.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
