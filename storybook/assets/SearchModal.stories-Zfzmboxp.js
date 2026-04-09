import{j as t,S as d,a1 as u,a0 as h}from"./iframe-Cfvhm_I_.js";import{r as g}from"./plugin-CQEQdOXk.js";import{S as m,u as n,a as x}from"./useSearchModal-BEB5OPAl.js";import{B as c}from"./Button-Bi_mxxPE.js";import{D as S,a as f,b as M}from"./DialogTitle-Dbx7wjs4.js";import{B as j}from"./Box-TWV5D5e5.js";import{S as r}from"./Grid-DkWQjsJu.js";import{S as C}from"./SearchType--f3whmU7.js";import{L as y}from"./List-BiOyHWo0.js";import{H as I}from"./DefaultResultListItem-uC9OhxhX.js";import{w as R}from"./appWrappers-CURMqnS7.js";import{m as B}from"./makeStyles-Cjp1zSIN.js";import{s as D,M as k}from"./api-BqbdDcwU.js";import{S as v}from"./SearchContext-je3iF3vy.js";import{SearchBar as T}from"./SearchBar-CO5foY_v.js";import{S as b}from"./SearchResult-wDo-ITz6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3rL6W4c.js";import"./Plugin-ZtrPBzsn.js";import"./componentData-Dr2I75va.js";import"./useAnalytics-CdOPkTnF.js";import"./useApp-B2trGyyJ.js";import"./useRouteRef-DUyXh1ss.js";import"./ArrowForward-5qlpkYJI.js";import"./translation-C2_4OXN9.js";import"./Page-C78YjKgm.js";import"./useMediaQuery-w3s45jPq.js";import"./Divider-DIyLyZOP.js";import"./ArrowBackIos-C4jQgJ-m.js";import"./ArrowForwardIos-D0s-DmFU.js";import"./translation-zc4zA80-.js";import"./Modal-ClsUAoOV.js";import"./Portal-BcsYPVrx.js";import"./Backdrop-BIhpa9KH.js";import"./styled-CoxzwnbL.js";import"./ExpandMore-2nkrX-rX.js";import"./useAsync-sA0E2EEG.js";import"./useMountedState-BjiBWndZ.js";import"./AccordionDetails-BnoImMUN.js";import"./index-B9sM2jn7.js";import"./Collapse-Bkl5pvkJ.js";import"./ListItem-CHJsmnzK.js";import"./ListContext-CKJ6dXnp.js";import"./ListItemIcon-C9HTUINI.js";import"./ListItemText-kVegO2IH.js";import"./Tabs-D7XQY0ZB.js";import"./KeyboardArrowRight-C0SgOlHp.js";import"./FormLabel-CCyqKQU3.js";import"./formControlState-BDrYxmNl.js";import"./InputLabel-DSvczdhl.js";import"./Select-BT3ehC48.js";import"./Popover-CDSWPwDj.js";import"./MenuItem-BlacGYcK.js";import"./Checkbox-DTrbUBIn.js";import"./SwitchBase-BIUuXrGu.js";import"./Chip-DAlNcAOH.js";import"./Link-CW8AiaF7.js";import"./index-BsVGjCRX.js";import"./lodash-KfD76xoT.js";import"./WebStorage-btWLm3Q3.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTFBjHza.js";import"./useIsomorphicLayoutEffect-C2bDZ_EO.js";import"./BUIProvider-DgTdUX3X.js";import"./openLink-Bg6urkNK.js";import"./Search-xt84pXZY.js";import"./useDebounce-PAbkskSJ.js";import"./InputAdornment-hiwoUXIh.js";import"./TextField-CgyLBh83.js";import"./useElementFilter-PoISQ78O.js";import"./EmptyState-DJClsogF.js";import"./Progress-CF-l4CIJ.js";import"./LinearProgress-CbRCEuIB.js";import"./ResponseErrorPanel-BwFQo_hx.js";import"./ErrorPanel-jpxce1_U.js";import"./WarningPanel-CeFCZlLN.js";import"./MarkdownContent-Do-p_LG7.js";import"./CodeSnippet-D87ApJKe.js";import"./CopyTextButton-Cj5ankki.js";import"./useCopyToClipboard-Dld7blhS.js";import"./Tooltip-DafbC9NK.js";import"./Popper-BE9xQ5lf.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
