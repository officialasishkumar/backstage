import{j as t,W as u,K as p,X as g}from"./iframe-J174yHvZ.js";import{r as h}from"./plugin-J5sC9HNC.js";import{S as l,u as c,a as x}from"./useSearchModal-CMn1o6iQ.js";import{s as S,M}from"./api-aCvtRpuZ.js";import{S as C}from"./SearchContext-CDkLFF2T.js";import{B as m}from"./Button-dQDfJcpZ.js";import{m as f}from"./makeStyles-BWgkUCLK.js";import{D as j,a as y,b as B}from"./DialogTitle-BdHh0ca5.js";import{B as D}from"./Box-aKh7VtBH.js";import{S as n}from"./Grid-BrTJh83O.js";import{S as I}from"./SearchType-JzY4STjR.js";import{L as G}from"./List-Cp0P4C75.js";import{H as R}from"./DefaultResultListItem-Cu0rSPB_.js";import{w as k}from"./appWrappers-D2dOxqm-.js";import{SearchBar as v}from"./SearchBar-CqgDEB6O.js";import{S as T}from"./SearchResult-w7Y-5u12.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkfOmsiT.js";import"./Plugin-D3gcfHkz.js";import"./componentData-BQnVVK1I.js";import"./useAnalytics-josUN2Qr.js";import"./useApp-C7RdyiEa.js";import"./useRouteRef-KBgaAB-e.js";import"./index-BWXGxvNf.js";import"./ArrowForward-C7Ogk2s2.js";import"./translation-DuOB7_Sc.js";import"./Page-Dtc2Gaak.js";import"./useMediaQuery-XYLAyLTj.js";import"./Divider-DoH51qxJ.js";import"./ArrowBackIos-DgjHXbSz.js";import"./ArrowForwardIos-lRQDyBcY.js";import"./translation-lufmf16e.js";import"./lodash-Bh4q8uvP.js";import"./useAsync-BQNaoBzp.js";import"./useMountedState-B3OlZ-Af.js";import"./Modal-B51QAQQ-.js";import"./Portal-D1-QTUmg.js";import"./Backdrop-DtfITWJJ.js";import"./styled-N08b-WnT.js";import"./ExpandMore-VxJVtCdA.js";import"./AccordionDetails-Dkx5Aj0j.js";import"./index-B9sM2jn7.js";import"./Collapse-gmNkm2WO.js";import"./ListItem-Sb5TY6iw.js";import"./ListContext-PpjyVQKG.js";import"./ListItemIcon-D9-19b58.js";import"./ListItemText-hpPAIP2l.js";import"./Tabs-C-6xAgQD.js";import"./KeyboardArrowRight-DRE-lpom.js";import"./FormLabel-DUe3bLnF.js";import"./formControlState-CX5DOtXH.js";import"./InputLabel-CYUoBqNT.js";import"./Select-kzvhQsco.js";import"./Popover-BnJNi-J2.js";import"./MenuItem-DVtf7SdO.js";import"./Checkbox-DdIZ74qU.js";import"./SwitchBase-DNU6ecBu.js";import"./Chip-BTjvjjA_.js";import"./Link-A8a46G72.js";import"./index-BpoiheRf.js";import"./useObservable-DkYyFvCh.js";import"./useIsomorphicLayoutEffect-DoTR87tR.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./Search-CFsAbkSv.js";import"./useDebounce-Bldw-3Yb.js";import"./InputAdornment-DOMNrAVF.js";import"./TextField-B0OR7H1-.js";import"./useElementFilter-CGPrK9I6.js";import"./EmptyState-BmN3dc1L.js";import"./Progress-DLwFGLZZ.js";import"./LinearProgress-Djnhxn7A.js";import"./ResponseErrorPanel-BWVyTwXn.js";import"./ErrorPanel-CmlK4tIB.js";import"./WarningPanel-B3QhAr4M.js";import"./MarkdownContent-g4XO5E99.js";import"./CodeSnippet-DnkQ9K-P.js";import"./CopyTextButton-DdSJ2qU6.js";import"./useCopyToClipboard-ChlY_7AC.js";import"./Tooltip-CSb0gwMa.js";import"./Popper-DvvAk7i2.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},io={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{r as CustomModal,e as Default,lo as __namedExportsOrder,io as default};
