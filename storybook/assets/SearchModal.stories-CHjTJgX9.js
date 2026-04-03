import{j as t,U as d,a2 as u,a1 as h}from"./iframe-B8N4GvwI.js";import{r as g}from"./plugin-BeW5Z8eg.js";import{S as m,u as n,a as x}from"./useSearchModal-Cu9PWl1F.js";import{B as c}from"./Button-DPczMlP2.js";import{D as S,a as f,b as M}from"./DialogTitle-BEp04O-E.js";import{B as j}from"./Box-MYHTFpuj.js";import{S as r}from"./Grid-QaPYXNRs.js";import{S as C}from"./SearchType-69lfl1md.js";import{L as y}from"./List-0a88D0vi.js";import{H as I}from"./DefaultResultListItem-BkVMoxSN.js";import{w as R}from"./appWrappers-YTDhgaFi.js";import{m as B}from"./makeStyles-_6Yu2_YB.js";import{s as D,M as k}from"./api-DaCjTZAh.js";import{S as v}from"./SearchContext-BaT9R6Sl.js";import{SearchBar as T}from"./SearchBar-CFfX6YLC.js";import{S as b}from"./SearchResult-T51ekMQ1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cw2iU0p9.js";import"./Plugin-BW2l4kKJ.js";import"./componentData-CcL2xG2g.js";import"./useAnalytics-BHUlNS6C.js";import"./useApp-BEeSmtgR.js";import"./useRouteRef-Emzks17S.js";import"./ArrowForward-C7dOEvsW.js";import"./translation-DJLQztUz.js";import"./Page-4I6CY_as.js";import"./useMediaQuery-Dcpb15WP.js";import"./Divider-Bt_pjoAt.js";import"./ArrowBackIos-CLiwSfr5.js";import"./ArrowForwardIos-Btn8pJua.js";import"./translation-NmT1VsXB.js";import"./Modal-D8VPwsry.js";import"./Portal-DI7AqiTH.js";import"./Backdrop-Cz-gWtyt.js";import"./styled-DnQPDG99.js";import"./ExpandMore-CqBUE46I.js";import"./useAsync-DfYgaazr.js";import"./useMountedState-BUHmGH1y.js";import"./AccordionDetails-CA8_s1mo.js";import"./index-B9sM2jn7.js";import"./Collapse-DZWChPOX.js";import"./ListItem-DavGzvU0.js";import"./ListContext-Dw62DV8y.js";import"./ListItemIcon-E-KBjpdi.js";import"./ListItemText-DenrmzVf.js";import"./Tabs-CeUHuL-w.js";import"./KeyboardArrowRight-BIRiNsaS.js";import"./FormLabel-BSI5MyEq.js";import"./formControlState-T5pfdaY-.js";import"./InputLabel-uAXBpmxg.js";import"./Select-CiZfMWdU.js";import"./Popover-CyULg1bi.js";import"./MenuItem-DhG38EBr.js";import"./Checkbox-CEuplNfP.js";import"./SwitchBase-Df4bA0LJ.js";import"./Chip-Bt5uR2Dp.js";import"./Link-PlY-q14u.js";import"./index-8D16w7r_.js";import"./lodash-BgY7d7CH.js";import"./WebStorage-BmgY5C-b.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-zEuNGP83.js";import"./useIsomorphicLayoutEffect-IuE3dwRY.js";import"./BUIProvider-Dc97VR6g.js";import"./openLink-D6fl38gK.js";import"./Search-Dp9u341a.js";import"./useDebounce-DR5t6KNJ.js";import"./InputAdornment-DgRw4TzP.js";import"./TextField-BmNGfI5P.js";import"./useElementFilter-CjwtRGq9.js";import"./EmptyState-TvYRRikj.js";import"./Progress-CcKNolQp.js";import"./LinearProgress-Dm-VSA-j.js";import"./ResponseErrorPanel-BDhW8Zit.js";import"./ErrorPanel-8xco2MCR.js";import"./WarningPanel-Ku1v3GPQ.js";import"./MarkdownContent-BzPKdt5x.js";import"./CodeSnippet-q2WTZ-jj.js";import"./CopyTextButton-DZNYK8sC.js";import"./useCopyToClipboard-HWdxJ6ki.js";import"./Tooltip-DW4X55ZT.js";import"./Popper-Bkk-r00N.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},no={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>R(t.jsx(h,{apis:[[D,new k(G)]],children:t.jsx(v,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":g}})],tags:["!manifest"]},i=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=B(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),s=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs(j,{className:o.titleContainer,children:[t.jsx(T,{className:o.input}),t.jsx(d,{"aria-label":"close",onClick:e,children:t.jsx(u,{})})]})}),t.jsx(f,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(C.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(y,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(I,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(M,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
