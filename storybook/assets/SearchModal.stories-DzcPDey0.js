import{j as t,U as d,a2 as u,a1 as h}from"./iframe-BYJEcONI.js";import{r as g}from"./plugin-B5g49LZm.js";import{S as m,u as n,a as x}from"./useSearchModal-DA_JH7l5.js";import{B as c}from"./Button-Cvnsqlml.js";import{D as S,a as f,b as M}from"./DialogTitle-DGj3dv4N.js";import{B as j}from"./Box-sr-PQbiK.js";import{S as r}from"./Grid-WhGNoc5-.js";import{S as C}from"./SearchType-Cx7NLDPD.js";import{L as y}from"./List-BwnJ0qw9.js";import{H as I}from"./DefaultResultListItem-DMR0kkpM.js";import{w as R}from"./appWrappers-BNw4uIDi.js";import{m as B}from"./makeStyles-l6ucUTqN.js";import{s as D,M as k}from"./api-YS4fv9LP.js";import{S as v}from"./SearchContext-DQzLxbSP.js";import{SearchBar as T}from"./SearchBar-BWuG_cn8.js";import{S as b}from"./SearchResult-T0KlYx1c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BU73b-bD.js";import"./Plugin-vVQg3Z3v.js";import"./componentData-Dfoth2s8.js";import"./useAnalytics-CRhuHj1g.js";import"./useApp-DuvHdhuP.js";import"./useRouteRef-CgFp56JX.js";import"./ArrowForward-D_GEnF6M.js";import"./translation-BwWcmakp.js";import"./Page-DWQJPya3.js";import"./useMediaQuery-w82Yn6Oy.js";import"./Divider-BzODNYCp.js";import"./ArrowBackIos-CBl8I1FY.js";import"./ArrowForwardIos-DeAkKSgw.js";import"./translation-CYM2QP2m.js";import"./Modal-DGwD98fw.js";import"./Portal-CBSxLcyA.js";import"./Backdrop-tpZSV1tv.js";import"./styled-BIP2wHBB.js";import"./ExpandMore-CeAWd5Cj.js";import"./useAsync-f4NepNzS.js";import"./useMountedState-CBFV9pKo.js";import"./AccordionDetails-x9MXCTOX.js";import"./index-B9sM2jn7.js";import"./Collapse-BQxKtWKu.js";import"./ListItem-CssaaKiD.js";import"./ListContext-BBhf4A7_.js";import"./ListItemIcon-BMCEbmk5.js";import"./ListItemText-B0WaKHzp.js";import"./Tabs-CukhRPgm.js";import"./KeyboardArrowRight-BZCW2oDf.js";import"./FormLabel-DBrswV_p.js";import"./formControlState-D9IrXQdT.js";import"./InputLabel-BbHYPnin.js";import"./Select-DcHKmLTv.js";import"./Popover-CL3IOnot.js";import"./MenuItem-JLVspSJv.js";import"./Checkbox-D3cik0PW.js";import"./SwitchBase-o5jm1ykK.js";import"./Chip-TXK0M8is.js";import"./Link-DnuOEioG.js";import"./index-CXFg1uvL.js";import"./lodash-Du7UIGfI.js";import"./WebStorage-DUFxKWSj.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-L_ekLlp9.js";import"./useIsomorphicLayoutEffect-C-hHAnXT.js";import"./BUIProvider-ilvP8ZY_.js";import"./openLink-fvBOI5ql.js";import"./Search-CTQC0WrB.js";import"./useDebounce-BLX1sve1.js";import"./InputAdornment-99TDlLvU.js";import"./TextField-DLyiQdrc.js";import"./useElementFilter-CcwDluCh.js";import"./EmptyState-fAnesR1t.js";import"./Progress-smpqUR4L.js";import"./LinearProgress-D8b0ldEZ.js";import"./ResponseErrorPanel-BIYg7Eaj.js";import"./ErrorPanel-DqeV59jU.js";import"./WarningPanel-Bm1v7oDj.js";import"./MarkdownContent-DiLIO5RF.js";import"./CodeSnippet-BnhwGjTE.js";import"./CopyTextButton-DmShpAP0.js";import"./useCopyToClipboard-B8QFGjZG.js";import"./Tooltip-BW3NBEpc.js";import"./Popper-BOCixRLe.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
