import{j as t,U as d,a2 as u,a1 as h}from"./iframe-BHNZ12cl.js";import{r as g}from"./plugin-ckSPoQmB.js";import{S as m,u as n,a as x}from"./useSearchModal-CXYtAa3I.js";import{B as c}from"./Button-Dhq2m2a2.js";import{D as S,a as f,b as M}from"./DialogTitle-BamYJ2fx.js";import{B as j}from"./Box-BN3Fmkib.js";import{S as r}from"./Grid-DdfJ9ZJI.js";import{S as C}from"./SearchType-CnYCzCd8.js";import{L as y}from"./List-qaLOTKU8.js";import{H as I}from"./DefaultResultListItem-D_MktNCY.js";import{w as R}from"./appWrappers-DK-QbfHi.js";import{m as B}from"./makeStyles-Cxj8tKnX.js";import{s as D,M as k}from"./api-Cw6eMcyk.js";import{S as v}from"./SearchContext-CjkHjmih.js";import{SearchBar as T}from"./SearchBar-Dt91D0N6.js";import{S as b}from"./SearchResult-nX6iW_V-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-GL0D6OjD.js";import"./Plugin-AV-upmF9.js";import"./componentData-Dcx_7Mt2.js";import"./useAnalytics-B3lGy6AO.js";import"./useApp-CCki0BfS.js";import"./useRouteRef-Dhq0qgqG.js";import"./ArrowForward-oAlTT8t2.js";import"./translation-dLdX8wpV.js";import"./Page-vZMSSyhy.js";import"./useMediaQuery-wfs55G1b.js";import"./Divider-BdwrSrhP.js";import"./ArrowBackIos-6qm3Tg8E.js";import"./ArrowForwardIos-BA8MKNP6.js";import"./translation-Mn7801cF.js";import"./Modal-CQ4rSktf.js";import"./Portal-BHJRq7Zg.js";import"./Backdrop-CbQu8Rxs.js";import"./styled-Cc7guA68.js";import"./ExpandMore-B_WCBsWE.js";import"./useAsync-DrbxcMth.js";import"./useMountedState-D6njSPM_.js";import"./AccordionDetails-C0zvEsdZ.js";import"./index-B9sM2jn7.js";import"./Collapse-Bo6JMFi1.js";import"./ListItem-CN6XPOwF.js";import"./ListContext-DOaaaMZI.js";import"./ListItemIcon-BCM4izob.js";import"./ListItemText-C5_znYic.js";import"./Tabs-BUBHxWtN.js";import"./KeyboardArrowRight-CW-k8QyX.js";import"./FormLabel-ZHPZdmIw.js";import"./formControlState-BpNZHum3.js";import"./InputLabel-DW7tS7i7.js";import"./Select-Dr6Z7HsZ.js";import"./Popover-DAp868C0.js";import"./MenuItem-CFddMujq.js";import"./Checkbox-C60oX0nu.js";import"./SwitchBase-_XoO_ZTe.js";import"./Chip-D_zux6EV.js";import"./Link-DlpkdDiW.js";import"./index-D4FdfQZK.js";import"./lodash-C-yslXNg.js";import"./WebStorage-BbrnPtyM.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BhKLJjir.js";import"./useIsomorphicLayoutEffect-D_jKT49P.js";import"./BUIProvider-C-fu499B.js";import"./openLink-CKP5LQZU.js";import"./Search-BqeoyunU.js";import"./useDebounce-t5HSwPaz.js";import"./InputAdornment-DKQmmCY0.js";import"./TextField-DrmMfg72.js";import"./useElementFilter-BWpfd0TY.js";import"./EmptyState-B7LYZiSj.js";import"./Progress-CVmrzk0n.js";import"./LinearProgress-BILwfNkv.js";import"./ResponseErrorPanel-8vbR-suR.js";import"./ErrorPanel-DdEIlpH9.js";import"./WarningPanel-CaPFN-uT.js";import"./MarkdownContent-BOndfDEt.js";import"./CodeSnippet-C5ndlp4z.js";import"./CopyTextButton-CfnVEnyY.js";import"./useCopyToClipboard-DQ7dAEHu.js";import"./Tooltip-BC5W00Jv.js";import"./Popper-CeXm3hhw.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
