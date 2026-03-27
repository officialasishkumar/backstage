import{j as t,a2 as u,V as p,a3 as g}from"./iframe-CY6p7HGj.js";import{r as h}from"./plugin-DNSyMIRF.js";import{S as l,u as c,a as x}from"./useSearchModal-Dsp6aTWE.js";import{s as S,M}from"./api-C5yYyU5K.js";import{S as C}from"./SearchContext-D13CyFa2.js";import{B as m}from"./Button-CkEmHMZv.js";import{m as f}from"./makeStyles-CL5QsbT9.js";import{D as j,a as y,b as B}from"./DialogTitle-BEOXPNp-.js";import{B as D}from"./Box-B5BACm8K.js";import{S as n}from"./Grid-4GdRE04R.js";import{S as I}from"./SearchType-ChUtAeLC.js";import{L as G}from"./List-CTA8BryI.js";import{H as R}from"./DefaultResultListItem-Ces0dPkS.js";import{w as k}from"./appWrappers-CAUZooA4.js";import{SearchBar as v}from"./SearchBar-BXRLOasz.js";import{S as T}from"./SearchResult-FFIiZ7fo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-wRPuZn.js";import"./Plugin-B65c5qqm.js";import"./componentData-DpgniKxn.js";import"./useAnalytics-BNh1pToN.js";import"./useApp-KaslIZzb.js";import"./useRouteRef-pe38ej3a.js";import"./ArrowForward-CPR5K249.js";import"./translation-r-Cw4rmT.js";import"./Page-2t1zCLuv.js";import"./useMediaQuery-MWcNdp_l.js";import"./Divider-B25yG4Vu.js";import"./ArrowBackIos-CbcAw094.js";import"./ArrowForwardIos-W3vYlWkl.js";import"./translation-BV-tF8cj.js";import"./lodash-CLoGCafV.js";import"./useAsync-Cd2u9r7E.js";import"./useMountedState-IBh66WXz.js";import"./Modal-C_tSa40p.js";import"./Portal-Bt03fp_h.js";import"./Backdrop-DENCZNFF.js";import"./styled-BYQBwEWp.js";import"./ExpandMore-DuQ3iud3.js";import"./AccordionDetails-Bu_LS_Bp.js";import"./index-B9sM2jn7.js";import"./Collapse-D3jkU9bl.js";import"./ListItem-DNp7a9LI.js";import"./ListContext-De_DMnNX.js";import"./ListItemIcon-zBnTUHaV.js";import"./ListItemText-Cf7TyVvh.js";import"./Tabs-DVug-U0W.js";import"./KeyboardArrowRight-D5GC8TBf.js";import"./FormLabel-P9cCvMoo.js";import"./formControlState-Cip8j-G5.js";import"./InputLabel-uYcjv8nA.js";import"./Select-WJ6an-EI.js";import"./Popover-DOA_iCiu.js";import"./MenuItem-COK3wlcX.js";import"./Checkbox-AaaOIOOI.js";import"./SwitchBase-B81WjKLG.js";import"./Chip-BquoXXu7.js";import"./Link-CJtSVBIH.js";import"./index-CpyjIR0Y.js";import"./WebStorage-DKR11xvB.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-dG0pRKNd.js";import"./useIsomorphicLayoutEffect-C2yLsHrc.js";import"./AppThemeApi-8OCpdy64.js";import"./BUIProvider-B87mDlDM.js";import"./openLink-D0hf0orl.js";import"./Search-BzQRGwO4.js";import"./useDebounce-DcONjDNk.js";import"./InputAdornment-D9K8eI1h.js";import"./TextField-nPX4lx0D.js";import"./useElementFilter-nOHxRlHK.js";import"./EmptyState-B2mY-bLM.js";import"./Progress-DJbt1AXK.js";import"./LinearProgress-BHC8L_21.js";import"./ResponseErrorPanel-DViwTR_y.js";import"./ErrorPanel-Doy9tQIu.js";import"./WarningPanel-BBbxXWo9.js";import"./MarkdownContent-DWj6UmOy.js";import"./CodeSnippet-DmIQ_879.js";import"./CopyTextButton-DELJm6mH.js";import"./useCopyToClipboard-CLnpbZNY.js";import"./Tooltip-80DLYrNl.js";import"./Popper-CquYwZgY.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const uo=["Default","CustomModal"];export{r as CustomModal,e as Default,uo as __namedExportsOrder,mo as default};
