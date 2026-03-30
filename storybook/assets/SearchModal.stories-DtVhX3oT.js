import{j as t,a2 as d,V as u,a3 as h}from"./iframe-BzMU8KOh.js";import{r as g}from"./plugin-BA-eB_vj.js";import{S as l,u as n,a as x}from"./useSearchModal-C9UASXJl.js";import{s as S,M as f}from"./api-BOO20PHK.js";import{S as M}from"./SearchContext-BzbRcC-h.js";import{B as c}from"./Button-BjvxRy7t.js";import{m as j}from"./makeStyles-C3oh1vXh.js";import{D as C,a as y,b as I}from"./DialogTitle-BrQhhjfi.js";import{B as R}from"./Box-Dy1i5PnV.js";import{S as r}from"./Grid-D2HTVDY3.js";import{S as B}from"./SearchType-rfQ0JhnA.js";import{L as D}from"./List-D4klNrOh.js";import{H as k}from"./DefaultResultListItem-eebnSs65.js";import{w as v}from"./appWrappers-3CU-FzBM.js";import{SearchBar as T}from"./SearchBar-Co5c6Ysr.js";import{S as b}from"./SearchResult-D0eFufU2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpTi-pA7.js";import"./Plugin-D5diS-eT.js";import"./componentData-BLYnLKQK.js";import"./useAnalytics-TOERclJD.js";import"./useApp-BFWv9POw.js";import"./useRouteRef-i342VCYr.js";import"./ArrowForward-C16HnmAa.js";import"./translation-BTe_Bo6f.js";import"./Page-B7iolmA1.js";import"./useMediaQuery-BVLmw7ec.js";import"./Divider-B-br5j_L.js";import"./ArrowBackIos-m74nHZ5N.js";import"./ArrowForwardIos-BZJ9PDvc.js";import"./translation-C8RQTorn.js";import"./lodash-BBveFXvI.js";import"./useAsync-Bt8_R9Ow.js";import"./useMountedState-CgLAe5As.js";import"./Modal-DL3jvVCv.js";import"./Portal-ZMtLzGP0.js";import"./Backdrop-BD9JjfvS.js";import"./styled-DjuCxYRu.js";import"./ExpandMore-CNhzQKkV.js";import"./AccordionDetails-DuzTLskc.js";import"./index-B9sM2jn7.js";import"./Collapse-DeqtQZib.js";import"./ListItem-TAK5bns_.js";import"./ListContext-C2BSnJyA.js";import"./ListItemIcon-Da-4BETJ.js";import"./ListItemText-CV7ylJAq.js";import"./Tabs-Cl7TjpnS.js";import"./KeyboardArrowRight-Cdt14j2T.js";import"./FormLabel-B4Cku9t-.js";import"./formControlState-BdSwJrBM.js";import"./InputLabel-Ey4fhu1O.js";import"./Select-CTHCbCra.js";import"./Popover-DImwXMSd.js";import"./MenuItem-g3UctcE2.js";import"./Checkbox-DC3pj8s0.js";import"./SwitchBase-BxiBSCzt.js";import"./Chip-C4gBwjSZ.js";import"./Link-BFHx4W-6.js";import"./index-DkmrC5fw.js";import"./WebStorage-BREh09HC.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-N2-6CX_d.js";import"./useIsomorphicLayoutEffect-Cx74PdDa.js";import"./AppThemeApi-BKCm30lm.js";import"./BUIProvider-DfdR5q2S.js";import"./openLink-CrfJEFwX.js";import"./Search-1un7MmKZ.js";import"./useDebounce-z6mr6xir.js";import"./InputAdornment-CsboQO6h.js";import"./TextField-Cnw4GY8X.js";import"./useElementFilter-DIeducG0.js";import"./EmptyState-BgTUznty.js";import"./Progress-D7a5632q.js";import"./LinearProgress-fbSztMg7.js";import"./ResponseErrorPanel-BDm5b7na.js";import"./ErrorPanel-Dhupsp7O.js";import"./WarningPanel-9H_hq8N6.js";import"./MarkdownContent-Bp2NqM-o.js";import"./CodeSnippet-eQgrZ502.js";import"./CopyTextButton-DruBOno8.js";import"./useCopyToClipboard-CfMKFvN4.js";import"./Tooltip-DIsjQrri.js";import"./Popper-B7Pqac31.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>v(t.jsx(d,{apis:[[S,new f(G)]],children:t.jsx(M,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:a})]})},A=j(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(l,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(C,{children:t.jsxs(R,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(y,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(B.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(D,{children:p.map(({document:m})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(k,{result:m},m.location)},`${m.location}-btn`))})})})]})}),t.jsx(I,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};const po=["Default","CustomModal"];export{s as CustomModal,i as Default,po as __namedExportsOrder,co as default};
