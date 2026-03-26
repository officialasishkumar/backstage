import{j as t,Y as u,N as p,Z as g}from"./iframe-qq9LRUBn.js";import{r as h}from"./plugin-DeSmSmy5.js";import{S as l,u as c,a as x}from"./useSearchModal-CHfUKA9I.js";import{s as S,M}from"./api-B9Gt_YoD.js";import{S as C}from"./SearchContext-Bz-zolQe.js";import{B as m}from"./Button-DyTVCGiJ.js";import{m as f}from"./makeStyles-DysICvYt.js";import{D as j,a as y,b as B}from"./DialogTitle-CcXqFe7j.js";import{B as D}from"./Box-Crws65o2.js";import{S as n}from"./Grid-D9rzqufp.js";import{S as I}from"./SearchType-CbvcSLa8.js";import{L as G}from"./List-uoGoLAIL.js";import{H as R}from"./DefaultResultListItem-v_hO9WRv.js";import{w as k}from"./appWrappers-CkqvCYZJ.js";import{SearchBar as v}from"./SearchBar-oVQvZKxV.js";import{S as T}from"./SearchResult-Bx8kI7iI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CIlR0a4k.js";import"./Plugin-CKFEFxMv.js";import"./componentData-g0Y7Tr3a.js";import"./useAnalytics-NY-e7y1h.js";import"./useApp-DDQS_rrk.js";import"./useRouteRef-D5nMpXtZ.js";import"./index-29ewTlsg.js";import"./ArrowForward-DZMDaAM8.js";import"./translation-CPzAETBH.js";import"./Page-Bgdlyhpw.js";import"./useMediaQuery-dQ_-sOEI.js";import"./Divider-Dt9n4you.js";import"./ArrowBackIos-D8zT7lGi.js";import"./ArrowForwardIos-DshNnMaf.js";import"./translation-Bqp_dTC3.js";import"./lodash-BM8QDDk-.js";import"./useAsync-BvqGBP4s.js";import"./useMountedState-e54cfxno.js";import"./Modal-D3q_Fx9n.js";import"./Portal-DZBLnBHG.js";import"./Backdrop-yZKPa0s0.js";import"./styled-PVBWrc0h.js";import"./ExpandMore-6ohAsi3n.js";import"./AccordionDetails-DXjk0GFJ.js";import"./index-B9sM2jn7.js";import"./Collapse-CV3ZOVsg.js";import"./ListItem-5YDEHKiI.js";import"./ListContext-BhhEycMB.js";import"./ListItemIcon-CsHhqquF.js";import"./ListItemText-DzcEQSyp.js";import"./Tabs-BV5w7Xsx.js";import"./KeyboardArrowRight-Bdsl2tUl.js";import"./FormLabel-BQNhSUen.js";import"./formControlState-BGyz0aAs.js";import"./InputLabel-g1SJdEeH.js";import"./Select-Dlc5tsep.js";import"./Popover-yyr5Crli.js";import"./MenuItem-B6SkUbJb.js";import"./Checkbox-UJ81_00T.js";import"./SwitchBase-GsoVX7w0.js";import"./Chip-JcR_nEC2.js";import"./Link-2oUoFlGt.js";import"./index-CWHolahi.js";import"./WebStorage-DBgpTxHB.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-sfeOjMZC.js";import"./useIsomorphicLayoutEffect-DCCJvql9.js";import"./AppThemeApi-DuUscH2P.js";import"./BUIProvider-Dsng5cuc.js";import"./openLink-DhqiiT6V.js";import"./Search-DgIvh3ZZ.js";import"./useDebounce-3YiVPHzL.js";import"./InputAdornment-CNBLgLbN.js";import"./TextField-CmAvTm6A.js";import"./useElementFilter-riChxs5j.js";import"./EmptyState-B-FmgFLz.js";import"./Progress-ddW7bkLn.js";import"./LinearProgress-Cm3G4LQq.js";import"./ResponseErrorPanel-Cv-dVM-C.js";import"./ErrorPanel-DDVNQZWh.js";import"./WarningPanel-DKfwWske.js";import"./MarkdownContent-DFqe_flV.js";import"./CodeSnippet-DOnNjGBj.js";import"./CopyTextButton-DgTnm0fE.js";import"./useCopyToClipboard-BjJ6ocak.js";import"./Tooltip-CzhL_Bru.js";import"./Popper-C-HsXTN5.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
  const { state, toggleModal } = useSearchModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>
  );
};
`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const CustomModal = () => {
  const classes = useStyles();
  const { state, toggleModal } = useSearchModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => (
          <>
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
                  <SearchType.Tabs
                    defaultValue=""
                    types={[
                      {
                        value: "custom-result-item",
                        name: "Custom Item",
                      },
                      {
                        value: "no-custom-result-item",
                        name: "No Custom Item",
                      },
                    ]}
                  />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({ results }) => (
                      <List>
                        {results.map(({ document }) => (
                          <div
                            role="button"
                            tabIndex={0}
                            key={\`\${document.location}-btn\`}
                            onClick={toggleModal}
                            onKeyPress={toggleModal}
                          >
                            <DefaultResultListItem
                              key={document.location}
                              result={document}
                            />
                          </div>
                        ))}
                      </List>
                    )}
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
          </>
        )}
      </SearchModal>
    </>
  );
};
`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const po=["Default","CustomModal"];export{r as CustomModal,e as Default,po as __namedExportsOrder,uo as default};
