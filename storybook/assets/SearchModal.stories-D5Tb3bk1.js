import{j as t,a1 as d,U as u,a2 as h}from"./iframe-BnLaYHT0.js";import{r as g}from"./plugin-CmMoLQB5.js";import{S as m,u as n,a as x}from"./useSearchModal-ertWyWCP.js";import{s as S,M as f}from"./api-BsxmPXMj.js";import{S as M}from"./SearchContext-Z5uxDapO.js";import{B as c}from"./Button-CeY8NiEH.js";import{m as j}from"./makeStyles-Ci9OQMMV.js";import{D as C,a as y,b as I}from"./DialogTitle-C-WOUozM.js";import{B as R}from"./Box-D4mbYqDO.js";import{S as r}from"./Grid-BVx1ZeMm.js";import{S as B}from"./SearchType-5yimVYhp.js";import{L as D}from"./List-DXJGlMrG.js";import{H as k}from"./DefaultResultListItem-B2CrsN6S.js";import{w as v}from"./appWrappers-hQuAQIk9.js";import{SearchBar as T}from"./SearchBar-DLbXoBN4.js";import{S as b}from"./SearchResult-DM9eyd6P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZIod4EO.js";import"./Plugin-CBZmafKF.js";import"./componentData-Bmp4MCDj.js";import"./useAnalytics-DZdNMYw7.js";import"./useApp-DC1925IS.js";import"./useRouteRef-CjnkF0JD.js";import"./ArrowForward-nfHtTg4B.js";import"./translation-xunTb-F4.js";import"./Page-D923VjGL.js";import"./useMediaQuery-Bq570aCt.js";import"./Divider-CNZiFlqL.js";import"./ArrowBackIos-DAGex0jZ.js";import"./ArrowForwardIos-DfLOdE7q.js";import"./translation-E6uSu-xU.js";import"./lodash-DpN-AoLg.js";import"./useAsync-BIqxmOvv.js";import"./useMountedState-BzlV24-v.js";import"./Modal-BRJd5uSM.js";import"./Portal-CJRUocKS.js";import"./Backdrop-GNX2u_g0.js";import"./styled-Dah7uO8h.js";import"./ExpandMore-CZNdg9bw.js";import"./AccordionDetails-DKUjEkWI.js";import"./index-B9sM2jn7.js";import"./Collapse-DK8ofP-6.js";import"./ListItem-DEKaS7rV.js";import"./ListContext-ZUAJ6gMg.js";import"./ListItemIcon-Dk0I2z7t.js";import"./ListItemText-BYfeNc6y.js";import"./Tabs-BeUF7bbi.js";import"./KeyboardArrowRight-Noh0-_s1.js";import"./FormLabel-CHR7zeQU.js";import"./formControlState-CePGT2DR.js";import"./InputLabel-CVoLfPNo.js";import"./Select-DOeoOxfY.js";import"./Popover-B5d8YLfq.js";import"./MenuItem-BlBJV0uS.js";import"./Checkbox-D5hJYFat.js";import"./SwitchBase-CbtHOs0w.js";import"./Chip-B3w2S0o3.js";import"./Link-Boy8ho4w.js";import"./index-Cpm2Va4W.js";import"./WebStorage-Cxn_eKiJ.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-_Nvkw-mQ.js";import"./useIsomorphicLayoutEffect-BfGqrP9P.js";import"./BUIProvider-BH9ORap1.js";import"./openLink-BEdMuLiR.js";import"./Search-DFRbZYvk.js";import"./useDebounce-CCVEsxIt.js";import"./InputAdornment-CVNThpy5.js";import"./TextField-464ckvFT.js";import"./useElementFilter-DQxeYWrS.js";import"./EmptyState-CCXj_Oiq.js";import"./Progress-C1muWUZ3.js";import"./LinearProgress-CePAaI1O.js";import"./ResponseErrorPanel-CA5zbHAd.js";import"./ErrorPanel-3Vxyntfl.js";import"./WarningPanel-CwyYWRp0.js";import"./MarkdownContent-Df4yV8aW.js";import"./CodeSnippet-BpW7ax5j.js";import"./CopyTextButton-Bc5d_wml.js";import"./useCopyToClipboard-sGiklRSA.js";import"./Tooltip-DEaAQANQ.js";import"./Popper-CajeHu2h.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>v(t.jsx(d,{apis:[[S,new f(G)]],children:t.jsx(M,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=j(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(C,{children:t.jsxs(R,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(y,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(B.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(D,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(k,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(I,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
