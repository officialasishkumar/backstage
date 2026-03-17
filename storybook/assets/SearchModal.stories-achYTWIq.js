import{j as t,X as u,M as p,Y as g}from"./iframe-D94_c1Tp.js";import{r as h}from"./plugin-C0DbH5rR.js";import{S as l,u as c,a as x}from"./useSearchModal-ibJbt9fV.js";import{s as S,M}from"./api-BJr5fosT.js";import{S as C}from"./SearchContext-I5fGUMQR.js";import{B as m}from"./Button-D7UPb-E1.js";import{m as f}from"./makeStyles-CKqiAwnv.js";import{D as j,a as y,b as B}from"./DialogTitle-DkrQxXu-.js";import{B as D}from"./Box-Ctg7iXT5.js";import{S as n}from"./Grid-TMpKdJdj.js";import{S as I}from"./SearchType-CYeGR8u5.js";import{L as G}from"./List-C8oahujg.js";import{H as R}from"./DefaultResultListItem-CWZpGkER.js";import{w as k}from"./appWrappers-ZQzcO08Y.js";import{SearchBar as v}from"./SearchBar-VbwUdIHh.js";import{S as T}from"./SearchResult-BnRO1Q3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C42hpz4O.js";import"./Plugin-BrsxDRVM.js";import"./componentData-4fd3-zn4.js";import"./useAnalytics-B9rHpaUX.js";import"./useApp-DAxCr7ZI.js";import"./useRouteRef-Dhx4tcRx.js";import"./index-BrZ8YAao.js";import"./ArrowForward-B6859NtL.js";import"./translation-C_YaC2UI.js";import"./Page-CMhY-hV3.js";import"./useMediaQuery-Bm75bjeH.js";import"./Divider-CwddDQ4K.js";import"./ArrowBackIos-3rjKVHVL.js";import"./ArrowForwardIos-24OrJ-rz.js";import"./translation-j1mceFiW.js";import"./lodash-AxW3xIV_.js";import"./useAsync-DTqsCBT6.js";import"./useMountedState-jRxC8-9y.js";import"./Modal-C1uYguhK.js";import"./Portal-D3nAj-4m.js";import"./Backdrop-gg-48bKs.js";import"./styled-DNDrER2-.js";import"./ExpandMore-JnmgCPCK.js";import"./AccordionDetails-CSGFzIhn.js";import"./index-B9sM2jn7.js";import"./Collapse-CJr-ts5n.js";import"./ListItem-BvGB8g16.js";import"./ListContext-D3wa98z0.js";import"./ListItemIcon-Clcpc999.js";import"./ListItemText-B2K8i-DW.js";import"./Tabs-EyOJdcXP.js";import"./KeyboardArrowRight-CnAN4Vmf.js";import"./FormLabel-L442D5c4.js";import"./formControlState-1DIl7qN6.js";import"./InputLabel-BKoLE4Je.js";import"./Select-DZw3Y4jE.js";import"./Popover-C-fjSaZv.js";import"./MenuItem-C1eZyTrx.js";import"./Checkbox-DOY5ap0_.js";import"./SwitchBase-DOncCqQP.js";import"./Chip-CJT-QN7q.js";import"./Link-BjGX1L8G.js";import"./index-B5jp4Cu3.js";import"./useObservable-iN5Ns7Jc.js";import"./useIsomorphicLayoutEffect-CsFVC7Nn.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DcamUp_A.js";import"./openLink-CpY4wZ7E.js";import"./Search-JOjckmnG.js";import"./useDebounce-BJ7QsNty.js";import"./InputAdornment-Ba1RJ4g4.js";import"./TextField-CSA-UtZ3.js";import"./useElementFilter-CC2sUbRd.js";import"./EmptyState-8MZuUjm6.js";import"./Progress-4Y5LROOe.js";import"./LinearProgress-1D23t5Jh.js";import"./ResponseErrorPanel-CgXC_lll.js";import"./ErrorPanel-Bk0fVb3Q.js";import"./WarningPanel-DjF7lxaz.js";import"./MarkdownContent-FdTFSuyH.js";import"./CodeSnippet-DyNQtRtm.js";import"./CopyTextButton-Ob2GavSp.js";import"./useCopyToClipboard-B2stAgrJ.js";import"./Tooltip-jf0VIgLY.js";import"./Popper-D6Rg0_UH.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const mo=["Default","CustomModal"];export{r as CustomModal,e as Default,mo as __namedExportsOrder,co as default};
