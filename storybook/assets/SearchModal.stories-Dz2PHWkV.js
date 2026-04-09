import{j as t,S as d,a1 as u,a0 as h}from"./iframe-BwbkeUNF.js";import{r as g}from"./plugin-DJuEYu20.js";import{S as m,u as n,a as x}from"./useSearchModal-CBNm29dF.js";import{B as c}from"./Button-CfqMoVXI.js";import{D as S,a as f,b as M}from"./DialogTitle-_PcyPXGT.js";import{B as j}from"./Box-BpqKX1IA.js";import{S as r}from"./Grid-DD0XASu5.js";import{S as C}from"./SearchType-BFI2I3SI.js";import{L as y}from"./List-ChwsDTGU.js";import{H as I}from"./DefaultResultListItem-Dao0RsVP.js";import{w as R}from"./appWrappers-DvogDdoA.js";import{m as B}from"./makeStyles-CGCER2cu.js";import{s as D,M as k}from"./api-DLdVNUFw.js";import{S as v}from"./SearchContext-_Xtu-7-w.js";import{SearchBar as T}from"./SearchBar-DUTHDXbH.js";import{S as b}from"./SearchResult-BJLG1oEq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDs19IIW.js";import"./Plugin-CzW8bU0o.js";import"./componentData-Bl56XdHh.js";import"./useAnalytics-B7PiVxCY.js";import"./useApp-DGHdqxLG.js";import"./useRouteRef-BFSmol6S.js";import"./ArrowForward-BjRg6OBM.js";import"./translation-C4KuQtvd.js";import"./Page-BtAYh_Il.js";import"./useMediaQuery-By5aL91l.js";import"./Divider-MZaCHw5q.js";import"./ArrowBackIos-CRFiUzwn.js";import"./ArrowForwardIos-BWImxj_K.js";import"./translation-CF6OX6ld.js";import"./Modal-C_w5RpoD.js";import"./Portal-qCFAxiUf.js";import"./Backdrop-B8bEIk5l.js";import"./styled-DKzWxQyh.js";import"./ExpandMore-BFq6hzt-.js";import"./useAsync-BhroUHYB.js";import"./useMountedState-Ddw8xbV-.js";import"./AccordionDetails-D-mRhsTv.js";import"./index-B9sM2jn7.js";import"./Collapse-DrBHssfd.js";import"./ListItem-BHaUgdJU.js";import"./ListContext-BDNI8oKK.js";import"./ListItemIcon-Dn4hAbUS.js";import"./ListItemText-0UFVefBy.js";import"./Tabs-BtCMJff8.js";import"./KeyboardArrowRight-D5TmwI68.js";import"./FormLabel-BGctFBBz.js";import"./formControlState-B6sIRLpS.js";import"./InputLabel-_2Tu8TAd.js";import"./Select-DezPCffy.js";import"./Popover-HuCIbp-7.js";import"./MenuItem-Bs_nrYq6.js";import"./Checkbox-DFGwEhJ8.js";import"./SwitchBase-BaokLN-q.js";import"./Chip-DBxvyqX9.js";import"./Link-CjNA6wJy.js";import"./index-zhCgspdl.js";import"./lodash-ClqrAeSM.js";import"./WebStorage-CtgBqFKp.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BgaUvL8B.js";import"./useIsomorphicLayoutEffect-lsdh3kOT.js";import"./BUIProvider-BJAHywAp.js";import"./openLink-BuoNKP2_.js";import"./Search-BvCHGWKT.js";import"./useDebounce-CgDPN6_f.js";import"./InputAdornment-o2oVOkBX.js";import"./TextField-BFgdAZUH.js";import"./useElementFilter-Dr77DnTL.js";import"./EmptyState-DwVi8Aj8.js";import"./Progress-B1Y__FPn.js";import"./LinearProgress-TW9wymZi.js";import"./ResponseErrorPanel-CnF2uro9.js";import"./ErrorPanel-CkbFRbXk.js";import"./WarningPanel-D6hRN00L.js";import"./MarkdownContent-PQKKAggL.js";import"./CodeSnippet-DjXAHLDS.js";import"./CopyTextButton-C3YB8r9r.js";import"./useCopyToClipboard-a9DkHHyX.js";import"./Tooltip-BCiMtrfJ.js";import"./Popper-CtD4YCCn.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
