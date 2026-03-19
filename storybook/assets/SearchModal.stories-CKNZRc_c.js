import{j as t,Y as u,N as p,Z as g}from"./iframe-CBVwdAXc.js";import{r as h}from"./plugin-CrxGrvpH.js";import{S as l,u as c,a as x}from"./useSearchModal-BZXPX-49.js";import{s as S,M}from"./api-BJX2I_yt.js";import{S as C}from"./SearchContext-CltFw0Yf.js";import{B as m}from"./Button-B6J55BZU.js";import{m as f}from"./makeStyles-C24YcoXm.js";import{D as j,a as y,b as B}from"./DialogTitle-Zg0_AN0D.js";import{B as D}from"./Box-BGY1rYdD.js";import{S as n}from"./Grid-DWkTHZrC.js";import{S as I}from"./SearchType-COyo5GNq.js";import{L as G}from"./List-7WrADx2K.js";import{H as R}from"./DefaultResultListItem-Maib9DfZ.js";import{w as k}from"./appWrappers-BlnrEZL7.js";import{SearchBar as v}from"./SearchBar-BLrtpd0h.js";import{S as T}from"./SearchResult-eEpCRcDY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSS0U0hK.js";import"./Plugin-BHNEaDeA.js";import"./componentData-BVLy2Ait.js";import"./useAnalytics-Qr-pKmLn.js";import"./useApp-Dv9wNNjs.js";import"./useRouteRef-Dpud23t-.js";import"./index-D9ejMs_C.js";import"./ArrowForward-Dq6abkbU.js";import"./translation-xHV9k6F5.js";import"./Page-qP1r18-i.js";import"./useMediaQuery-BzV5tgPq.js";import"./Divider-SJkr3XHc.js";import"./ArrowBackIos-CfBLY3Fa.js";import"./ArrowForwardIos-B-ufoskV.js";import"./translation-DLtYQ6QP.js";import"./lodash-CjA-X3cH.js";import"./useAsync-CxJRBM1A.js";import"./useMountedState-7qHVdg4Q.js";import"./Modal-B_9QibKY.js";import"./Portal-DWyDC_bO.js";import"./Backdrop-BYxbYnv8.js";import"./styled-DoLFZKqM.js";import"./ExpandMore-D27FE5Cn.js";import"./AccordionDetails-D-kx-9TK.js";import"./index-B9sM2jn7.js";import"./Collapse-DTPgf8DZ.js";import"./ListItem-BSBetRD8.js";import"./ListContext-D4A-UAeR.js";import"./ListItemIcon-C64Xukq9.js";import"./ListItemText-D2GSy6i-.js";import"./Tabs-RjSuSmzO.js";import"./KeyboardArrowRight-DB2Z9UVl.js";import"./FormLabel-rTVsmEiW.js";import"./formControlState-C6Ltf1uE.js";import"./InputLabel-CSZPC2eW.js";import"./Select-gl8MKV-O.js";import"./Popover-CCxOaT36.js";import"./MenuItem-hKjDRQHg.js";import"./Checkbox-Ddz9wR9M.js";import"./SwitchBase-BcbK8WWp.js";import"./Chip-Bt2Rliud.js";import"./Link-D1_aKDnj.js";import"./index-CzoPzI6j.js";import"./WebStorage-IOrvc26O.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CSuacsqV.js";import"./useIsomorphicLayoutEffect-BurP_Bj6.js";import"./AppThemeApi-lxpkfbFj.js";import"./BUIProvider-YZy9Wrqs.js";import"./openLink-DK4oWnZh.js";import"./Search-DXebMGII.js";import"./useDebounce-JTwZAEy1.js";import"./InputAdornment-DvV8VpX0.js";import"./TextField-CTF2AxLr.js";import"./useElementFilter-DFPUcc9k.js";import"./EmptyState-BuCPtznF.js";import"./Progress-CRpKJlRY.js";import"./LinearProgress-rNzi7bmW.js";import"./ResponseErrorPanel-DR5GexjB.js";import"./ErrorPanel-Cjh5Rfea.js";import"./WarningPanel-B84MMbhk.js";import"./MarkdownContent-5z85KvFH.js";import"./CodeSnippet-DaChzBFc.js";import"./CopyTextButton-uXAOa4MM.js";import"./useCopyToClipboard-BQllRWxf.js";import"./Tooltip-D2y6AiO8.js";import"./Popper-DFPiCQu9.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
