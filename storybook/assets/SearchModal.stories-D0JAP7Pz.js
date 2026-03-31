import{j as t,U as d,a2 as u,a1 as h}from"./iframe-DyjKfHWP.js";import{r as g}from"./plugin-CK8pqp5p.js";import{S as m,u as n,a as x}from"./useSearchModal-BJBQtO0m.js";import{B as c}from"./Button-DxHxm4FN.js";import{D as S,a as f,b as M}from"./DialogTitle-DLXaAUAM.js";import{B as j}from"./Box-DrwrZr2h.js";import{S as r}from"./Grid-Yb0gK3gi.js";import{S as C}from"./SearchType-1bHljWjQ.js";import{L as y}from"./List-BPKCu-iI.js";import{H as I}from"./DefaultResultListItem-DQ3apcEX.js";import{w as R}from"./appWrappers-9Bnj1hGJ.js";import{m as B}from"./makeStyles-BTx5IhEq.js";import{s as D,M as k}from"./api-aqHrYR18.js";import{S as v}from"./SearchContext-d2BQh7Nj.js";import{SearchBar as T}from"./SearchBar-8DbBOSer.js";import{S as b}from"./SearchResult-CpOAt1J0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dq7131b2.js";import"./Plugin-C1RtEEQF.js";import"./componentData-C62ZTWZ4.js";import"./useAnalytics-DcziEhY3.js";import"./useApp-lFVRdKSK.js";import"./useRouteRef-CT7iSpAX.js";import"./ArrowForward-B9cTQ4EB.js";import"./translation-Db9g73g5.js";import"./Page-DR5hjz5-.js";import"./useMediaQuery-iCePdMaY.js";import"./Divider-C90KJOkZ.js";import"./ArrowBackIos-NVS_PAxb.js";import"./ArrowForwardIos-CodR7p_0.js";import"./translation-D4PpU37F.js";import"./Modal-BoG7Ezu7.js";import"./Portal-DshplTSh.js";import"./Backdrop-DLSJ2zOJ.js";import"./styled-C09kP24H.js";import"./ExpandMore-DJ2T2C8H.js";import"./useAsync-D5QtpZ-X.js";import"./useMountedState-CGjuPg1I.js";import"./AccordionDetails-DGHyCEBL.js";import"./index-B9sM2jn7.js";import"./Collapse-BMWOAJaZ.js";import"./ListItem-d1LcQsBU.js";import"./ListContext-Aak99S-R.js";import"./ListItemIcon-Dql2JfVF.js";import"./ListItemText-93JIksiO.js";import"./Tabs-CRHTjglT.js";import"./KeyboardArrowRight-CFbd91rC.js";import"./FormLabel-C9fsDOLR.js";import"./formControlState-BWWY6Ag8.js";import"./InputLabel-CJlShUTS.js";import"./Select-wcb7JooM.js";import"./Popover-ru3MB2c_.js";import"./MenuItem-y8KHgHjD.js";import"./Checkbox-DVbv7OCD.js";import"./SwitchBase-DbjB04nc.js";import"./Chip-kua8BziX.js";import"./Link-GxS-0vqx.js";import"./index-BxgWU5HL.js";import"./lodash-C9XZXW9l.js";import"./WebStorage-CLuCDckI.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DqVCHxDT.js";import"./useIsomorphicLayoutEffect-SIM9JiqY.js";import"./BUIProvider-BWH1udh2.js";import"./openLink-DApmBWn3.js";import"./Search-Dgmv1dT8.js";import"./useDebounce-BbPHxjVm.js";import"./InputAdornment-B3fwbivH.js";import"./TextField-DlTFscWo.js";import"./useElementFilter-DdXBSeM0.js";import"./EmptyState-Cbc6pGIJ.js";import"./Progress-P1MhculW.js";import"./LinearProgress-B9VxHHea.js";import"./ResponseErrorPanel-CP9oLJgp.js";import"./ErrorPanel-WS_MLd2q.js";import"./WarningPanel-Bzlxor5v.js";import"./MarkdownContent-C-irxnEP.js";import"./CodeSnippet-BfxZ2cTt.js";import"./CopyTextButton-BOnHpUDd.js";import"./useCopyToClipboard-K2-SSRbx.js";import"./Tooltip-gxRFNsDR.js";import"./Popper-BbowAVjj.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
