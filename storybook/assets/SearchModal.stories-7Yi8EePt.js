import{j as t,U as d,a2 as u,a1 as h}from"./iframe-D2P1gL3G.js";import{r as g}from"./plugin-DJhK52xG.js";import{S as m,u as n,a as x}from"./useSearchModal-bsKxqMkT.js";import{B as c}from"./Button-D92MPcOm.js";import{D as S,a as f,b as M}from"./DialogTitle-DTAmOzf0.js";import{B as j}from"./Box-ZH5bpM8G.js";import{S as r}from"./Grid-Dr3D4icg.js";import{S as C}from"./SearchType-yrsivagw.js";import{L as y}from"./List-BN_I58y-.js";import{H as I}from"./DefaultResultListItem-DKuUzFHT.js";import{w as R}from"./appWrappers-BVoJaVZG.js";import{m as B}from"./makeStyles-Clh2njjY.js";import{s as D,M as k}from"./api-UbPfAgGV.js";import{S as v}from"./SearchContext-BDdX3j0S.js";import{SearchBar as T}from"./SearchBar-Bv-pEz4e.js";import{S as b}from"./SearchResult-BxSSRlII.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dum5ERxG.js";import"./Plugin-Dr3yuf2A.js";import"./componentData--5TJ8chb.js";import"./useAnalytics-CZuK40Zw.js";import"./useApp-Dr4H7OwE.js";import"./useRouteRef-QvnDxwUA.js";import"./ArrowForward-cqDexfV_.js";import"./translation-gC40a2A_.js";import"./Page-u73d752j.js";import"./useMediaQuery-gCsaEkEA.js";import"./Divider-BCJX_69r.js";import"./ArrowBackIos-BIB4hLlc.js";import"./ArrowForwardIos-CuvMY4pI.js";import"./translation-DgWiSWTH.js";import"./Modal-Bofap_l9.js";import"./Portal-CZcmajaJ.js";import"./Backdrop-BZZJKDzH.js";import"./styled-CvACks6z.js";import"./ExpandMore-h7Ug34IM.js";import"./useAsync-C1jF7UF0.js";import"./useMountedState-B2-kdrdQ.js";import"./AccordionDetails-BpmcLgT4.js";import"./index-B9sM2jn7.js";import"./Collapse-DUSW-jqM.js";import"./ListItem-BjwKQPwC.js";import"./ListContext-gHvGwQdG.js";import"./ListItemIcon-Dg4zMkgS.js";import"./ListItemText-WS6vwabx.js";import"./Tabs-_ymt2X99.js";import"./KeyboardArrowRight-DcYsFG6g.js";import"./FormLabel-B6jXKh1i.js";import"./formControlState-NsxX8nt7.js";import"./InputLabel-CNx-joSg.js";import"./Select-BBa2pdTC.js";import"./Popover-CkkWms-p.js";import"./MenuItem-BiYA0Of6.js";import"./Checkbox-BfpwWFAY.js";import"./SwitchBase-qo2l3xaH.js";import"./Chip-cunpinSm.js";import"./Link-DWOvRufO.js";import"./index-DGJxFe6q.js";import"./lodash-DhI4PBPP.js";import"./WebStorage-De27rWs7.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BSt5tewj.js";import"./useIsomorphicLayoutEffect-EkDceSba.js";import"./BUIProvider-ClcL8Pie.js";import"./openLink-CB6NMuvw.js";import"./Search-BgSK24Ut.js";import"./useDebounce-Dlx5gDqw.js";import"./InputAdornment-DZ7UeVbi.js";import"./TextField-D73ZW-qV.js";import"./useElementFilter-Cy-vhK1O.js";import"./EmptyState-FdcE6fh9.js";import"./Progress-BfmJvB2c.js";import"./LinearProgress-CM0FzvgH.js";import"./ResponseErrorPanel-BRgeHMIq.js";import"./ErrorPanel-DoFCUs5p.js";import"./WarningPanel-CTck5SRQ.js";import"./MarkdownContent-B9HVEd1F.js";import"./CodeSnippet-DNtfGivc.js";import"./CopyTextButton-B_aOyIY6.js";import"./useCopyToClipboard-P5UWRi0Z.js";import"./Tooltip-BrmdzuQO.js";import"./Popper-Jb_2zun_.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
