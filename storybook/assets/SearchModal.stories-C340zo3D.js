import{j as t,S as d,a1 as u,a0 as h}from"./iframe-BO_5tggG.js";import{r as g}from"./plugin-CRpgwHXY.js";import{S as m,u as n,a as x}from"./useSearchModal-CCLi_HCA.js";import{B as c}from"./Button-RkeUke7l.js";import{D as S,a as f,b as M}from"./DialogTitle-MIReNSK-.js";import{B as j}from"./Box-CfORvOdf.js";import{S as r}from"./Grid-CnkSMyRl.js";import{S as C}from"./SearchType-DKqyiDEY.js";import{L as y}from"./List-G7DDumso.js";import{H as I}from"./DefaultResultListItem-CBnWxSX7.js";import{w as R}from"./appWrappers-CO2B089V.js";import{m as B}from"./makeStyles-qdsN5qZw.js";import{s as D,M as k}from"./api-9_9Vr1Xp.js";import{S as v}from"./SearchContext-C1_Ybiel.js";import{SearchBar as T}from"./SearchBar-69fHOW9f.js";import{S as b}from"./SearchResult-DEjVkGfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKj891cs.js";import"./Plugin-CsFNgcNN.js";import"./componentData-BMtHd5OU.js";import"./useAnalytics-DiFHt5PS.js";import"./useApp-DdxTl6og.js";import"./useRouteRef-DJo_PFt4.js";import"./ArrowForward-BAdzZtwk.js";import"./translation-_BQgkFqz.js";import"./Page-Bq-PPDmB.js";import"./useMediaQuery-DQlkKHPE.js";import"./Divider-9aopozfB.js";import"./ArrowBackIos-GqeyNPBW.js";import"./ArrowForwardIos-BQde62GM.js";import"./translation-Us0WI3gz.js";import"./Modal-Cny2cXs_.js";import"./Portal-BrtXVkDD.js";import"./Backdrop-BPO5xee8.js";import"./styled-b9HJcToZ.js";import"./ExpandMore-DpSubzLY.js";import"./useAsync-X8ueQH82.js";import"./useMountedState-ob0FKbjJ.js";import"./AccordionDetails-Bi2IJ0Rx.js";import"./index-B9sM2jn7.js";import"./Collapse-CzexmusQ.js";import"./ListItem-sKW0pqw1.js";import"./ListContext-B-Wc4pE1.js";import"./ListItemIcon-BiXS5uKl.js";import"./ListItemText-DyH15FQE.js";import"./Tabs-IXEq3lmk.js";import"./KeyboardArrowRight-DAlKUzW9.js";import"./FormLabel-Dt4eUbcC.js";import"./formControlState-Iy4j1x4Q.js";import"./InputLabel-CGgswevi.js";import"./Select-DkwY-iRN.js";import"./Popover-BygJlL56.js";import"./MenuItem-DfJeyD7R.js";import"./Checkbox-BYrdC9lp.js";import"./SwitchBase-wAtO3A7R.js";import"./Chip-CGMOkp4p.js";import"./Link-Dg9RiCku.js";import"./index-BYPhHgSY.js";import"./lodash-B-_hEigx.js";import"./WebStorage-ksa_OCrH.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-B9ExD75k.js";import"./useIsomorphicLayoutEffect-DYRDPzzy.js";import"./BUIProvider-BQQre2hP.js";import"./openLink-CrrHS3jY.js";import"./Search-Cb67fRsE.js";import"./useDebounce-qK6CN7Kz.js";import"./InputAdornment-DTDV4DSE.js";import"./TextField-DGAJBsLE.js";import"./useElementFilter-DdyyE_P6.js";import"./EmptyState-lV1H-x4X.js";import"./Progress-BbKadwBA.js";import"./LinearProgress-D045hvaq.js";import"./ResponseErrorPanel-1W4QMLp7.js";import"./ErrorPanel-Bkrc0pz5.js";import"./WarningPanel-C169mnk7.js";import"./MarkdownContent-ET2mybt7.js";import"./CodeSnippet-zEQrw_T4.js";import"./CopyTextButton-CFZUtUd7.js";import"./useCopyToClipboard-DOYygHqI.js";import"./Tooltip-D7P0enQt.js";import"./Popper-DLJkmYqC.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
