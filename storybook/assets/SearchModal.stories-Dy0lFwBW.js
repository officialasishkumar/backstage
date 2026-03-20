import{j as t,Y as u,N as p,Z as g}from"./iframe-BPVPwWzn.js";import{r as h}from"./plugin-BHEu2olh.js";import{S as l,u as c,a as x}from"./useSearchModal-DUWY7Jfn.js";import{s as S,M}from"./api-BdSH-GPv.js";import{S as C}from"./SearchContext-XEdgPpNU.js";import{B as m}from"./Button-Cr4PEm2D.js";import{m as f}from"./makeStyles-DL3RdYST.js";import{D as j,a as y,b as B}from"./DialogTitle-11gu9vGo.js";import{B as D}from"./Box-C9ZUlUpW.js";import{S as n}from"./Grid-CXiQnKoR.js";import{S as I}from"./SearchType-BmG4sjXG.js";import{L as G}from"./List-cqhA6xzX.js";import{H as R}from"./DefaultResultListItem-B_z52RGh.js";import{w as k}from"./appWrappers-CJ8A4wmX.js";import{SearchBar as v}from"./SearchBar-B80RFJwB.js";import{S as T}from"./SearchResult-VKa_P7qH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdWGn6ij.js";import"./Plugin-kKIPdDiv.js";import"./componentData-KR2ttMpT.js";import"./useAnalytics-DVBaEwk3.js";import"./useApp-C5rsfXEx.js";import"./useRouteRef-WMOYGVF2.js";import"./index-ClPDwBGK.js";import"./ArrowForward-CZbgZsKY.js";import"./translation-BFkGyFMW.js";import"./Page-B-mLUE9M.js";import"./useMediaQuery-BgdO30di.js";import"./Divider-B4SjF4fL.js";import"./ArrowBackIos-tHjTQI8x.js";import"./ArrowForwardIos-BsCUUNbe.js";import"./translation-DWNCyGAM.js";import"./lodash-Da7OBv6p.js";import"./useAsync-BR7KsH4b.js";import"./useMountedState-e47W3NJl.js";import"./Modal-Bpx44tXR.js";import"./Portal-AbzTFUuq.js";import"./Backdrop-DFjBbtX2.js";import"./styled-CYuGUrVD.js";import"./ExpandMore-D8O-2EBc.js";import"./AccordionDetails-CSJmEjtJ.js";import"./index-B9sM2jn7.js";import"./Collapse-DVaK2Qis.js";import"./ListItem-CXQlml-U.js";import"./ListContext-DHM8dB5v.js";import"./ListItemIcon-uQtvfmh9.js";import"./ListItemText-DZwi-UMy.js";import"./Tabs-q-9y6Cw4.js";import"./KeyboardArrowRight-Cco2tDmy.js";import"./FormLabel-B6rcaqHW.js";import"./formControlState-BlAeIR-U.js";import"./InputLabel-DT4OmzN1.js";import"./Select-BCzsMbXO.js";import"./Popover-T_njOncE.js";import"./MenuItem-Dvn2Z9Jk.js";import"./Checkbox-B5yO35j6.js";import"./SwitchBase-C7sRyby5.js";import"./Chip-DWgl9D9Y.js";import"./Link-BrnKsdBt.js";import"./index-DRNmOV-A.js";import"./WebStorage-RsjDsUwp.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-D13vfogS.js";import"./useIsomorphicLayoutEffect-D_UToJE7.js";import"./AppThemeApi-CHrimYAf.js";import"./BUIProvider-CpcGyQIQ.js";import"./openLink-Bc-74F4f.js";import"./Search-DwLGW6W_.js";import"./useDebounce-DvLdk4Xn.js";import"./InputAdornment-G4fMDAGt.js";import"./TextField-DK-NAxiw.js";import"./useElementFilter-BvGRdqy8.js";import"./EmptyState-D8AhNBWW.js";import"./Progress-ZKrrYocN.js";import"./LinearProgress-CtAy7b5O.js";import"./ResponseErrorPanel-CgxDoCyS.js";import"./ErrorPanel-DHm2m4Ze.js";import"./WarningPanel-uQizXGZr.js";import"./MarkdownContent-CX8OHgMG.js";import"./CodeSnippet-naesZI18.js";import"./CopyTextButton-ObDSLj7c.js";import"./useCopyToClipboard-C3n22U8G.js";import"./Tooltip-D-5NYnGf.js";import"./Popper-D0Hr6Gkt.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
