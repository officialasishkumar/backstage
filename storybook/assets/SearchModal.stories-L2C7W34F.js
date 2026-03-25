import{j as t,Y as u,N as p,Z as g}from"./iframe-BZrpTwFW.js";import{r as h}from"./plugin-Ded9rCvu.js";import{S as l,u as c,a as x}from"./useSearchModal-BxfpQkXB.js";import{s as S,M}from"./api-Crs085T9.js";import{S as C}from"./SearchContext-I7nH_yhO.js";import{B as m}from"./Button-DmFnibN9.js";import{m as f}from"./makeStyles-CIE8BXXT.js";import{D as j,a as y,b as B}from"./DialogTitle-CTkKFMJ7.js";import{B as D}from"./Box-D8g6naBP.js";import{S as n}from"./Grid-OEz6aKRJ.js";import{S as I}from"./SearchType-cg6wEwcG.js";import{L as G}from"./List-CNsgrFh7.js";import{H as R}from"./DefaultResultListItem-Cz4W52Ud.js";import{w as k}from"./appWrappers-CNh55iAq.js";import{SearchBar as v}from"./SearchBar-dUiqLBTI.js";import{S as T}from"./SearchResult-Mb63CdpM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DT7yD_MB.js";import"./Plugin-DX0oPFX5.js";import"./componentData-NRZfPv9y.js";import"./useAnalytics-CMcmWSHW.js";import"./useApp-4LCqZN-N.js";import"./useRouteRef-BYjVwWD0.js";import"./index-DNu1idMQ.js";import"./ArrowForward-CxzmV_3s.js";import"./translation-C-vvKr2r.js";import"./Page-CA-R5fnF.js";import"./useMediaQuery-D_0ls_fC.js";import"./Divider-pXkKDCFF.js";import"./ArrowBackIos-DOnee__V.js";import"./ArrowForwardIos-Bg6Mz8AR.js";import"./translation-D2P18H_E.js";import"./lodash-lol44oGD.js";import"./useAsync-BpVftW-X.js";import"./useMountedState-DxKyG1Ea.js";import"./Modal-Bug_1Z_P.js";import"./Portal-BMtcgUVu.js";import"./Backdrop-CGz-Hdn5.js";import"./styled-Be8rlyJS.js";import"./ExpandMore-9-U3mgFl.js";import"./AccordionDetails-DCBjoM6V.js";import"./index-B9sM2jn7.js";import"./Collapse-CC7BzgTc.js";import"./ListItem-DP2OxpMh.js";import"./ListContext-_XocguZm.js";import"./ListItemIcon-C2RjhBxb.js";import"./ListItemText-CSGeSg7i.js";import"./Tabs-BCa-nVyQ.js";import"./KeyboardArrowRight-CfWsdXdQ.js";import"./FormLabel-bRNETQbY.js";import"./formControlState-DP5wd4ND.js";import"./InputLabel-DxkkoQ-B.js";import"./Select-CbyFAWug.js";import"./Popover-BIXbtjFD.js";import"./MenuItem-C-OI1bdE.js";import"./Checkbox-CFlX7mAx.js";import"./SwitchBase-tDXKeMDr.js";import"./Chip-BOzkiqe1.js";import"./Link-k2iaYon8.js";import"./index-u6uYn8Jj.js";import"./WebStorage-nSp6U5ws.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CVJtQh5m.js";import"./useIsomorphicLayoutEffect-BY-4ZLY0.js";import"./AppThemeApi-C8apqIYf.js";import"./BUIProvider-CVmOZZtr.js";import"./openLink-2h5lI_6H.js";import"./Search-SM0jr0vS.js";import"./useDebounce-BTKTXYiC.js";import"./InputAdornment-SCVWlz01.js";import"./TextField-g1nFPuuA.js";import"./useElementFilter-DTZjDAuy.js";import"./EmptyState-D0dlZey7.js";import"./Progress-Dp6p4ilz.js";import"./LinearProgress-C6RGewKf.js";import"./ResponseErrorPanel-GuqqAGdV.js";import"./ErrorPanel-CizJOqmr.js";import"./WarningPanel-Cn-Cqpc_.js";import"./MarkdownContent-e4Cn-ect.js";import"./CodeSnippet-BDpg6lQ2.js";import"./CopyTextButton-DprLVpb7.js";import"./useCopyToClipboard-BokOU8dC.js";import"./Tooltip-3sla5M5N.js";import"./Popper-Al3BzMOF.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
