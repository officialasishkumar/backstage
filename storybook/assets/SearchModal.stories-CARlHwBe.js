import{j as t,Y as u,N as p,Z as g}from"./iframe-D9Y8dNt-.js";import{r as h}from"./plugin-BhAmUPtB.js";import{S as l,u as c,a as x}from"./useSearchModal-BTZH3dg_.js";import{s as S,M}from"./api-DlUch_na.js";import{S as C}from"./SearchContext-BAzDDuuI.js";import{B as m}from"./Button-Cgj_VeXU.js";import{m as f}from"./makeStyles-BoqHtulH.js";import{D as j,a as y,b as B}from"./DialogTitle-CsspZX6h.js";import{B as D}from"./Box-BTwSaOGu.js";import{S as n}from"./Grid-ta46I7or.js";import{S as I}from"./SearchType-ByTFka2I.js";import{L as G}from"./List-mUIJSmYE.js";import{H as R}from"./DefaultResultListItem-DVguYOQK.js";import{w as k}from"./appWrappers-CN6V1Awt.js";import{SearchBar as v}from"./SearchBar-B5NoYMMp.js";import{S as T}from"./SearchResult-saBsF5AM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCRWdV9i.js";import"./Plugin-BpoOtCjS.js";import"./componentData-BVVUJjR2.js";import"./useAnalytics-CX_WCi2s.js";import"./useApp-jISuD9D7.js";import"./useRouteRef-CNVhFF-b.js";import"./index-C1uQgXas.js";import"./ArrowForward-o2Crsbw5.js";import"./translation-CIPqjz5W.js";import"./Page-VCRYfbSc.js";import"./useMediaQuery-jS43cflm.js";import"./Divider-DmDI7hoL.js";import"./ArrowBackIos-36x3lr1p.js";import"./ArrowForwardIos-DyF5TGAz.js";import"./translation-BpBlp1DL.js";import"./lodash-h7tafzQQ.js";import"./useAsync-D9Cc9Vp-.js";import"./useMountedState-B-arlFCl.js";import"./Modal-71NnHFAX.js";import"./Portal-DVsLpO23.js";import"./Backdrop-BzZpZnBq.js";import"./styled-BgGpovFM.js";import"./ExpandMore-Dk-IyulX.js";import"./AccordionDetails-Cf0o6NFX.js";import"./index-B9sM2jn7.js";import"./Collapse-BLz0_YoS.js";import"./ListItem-CSMdPZ-4.js";import"./ListContext-xNPrKmTk.js";import"./ListItemIcon-DnA022zm.js";import"./ListItemText-CKifMqzR.js";import"./Tabs-BcDXtZ3g.js";import"./KeyboardArrowRight-DIu8O4ah.js";import"./FormLabel-Dh3Iv9Nu.js";import"./formControlState-XJIDXpR9.js";import"./InputLabel-DTLTfY8n.js";import"./Select-CfaJeSHK.js";import"./Popover-BKRwm4sM.js";import"./MenuItem-Z9D3XAhl.js";import"./Checkbox-V6i0N14O.js";import"./SwitchBase-BEuaFX6R.js";import"./Chip-qnngnwy0.js";import"./Link-CX6fYxme.js";import"./index-BX5foZ21.js";import"./WebStorage-0dpj7iaf.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CgBswJiJ.js";import"./useIsomorphicLayoutEffect-BjXjpzjp.js";import"./AppThemeApi-1AtRSy4c.js";import"./BUIProvider-Cr5RdwXf.js";import"./openLink-CijSEPaD.js";import"./Search-DQ93XqWt.js";import"./useDebounce-DEct9CU6.js";import"./InputAdornment-ByMGnZ5r.js";import"./TextField-kdIu6bJu.js";import"./useElementFilter-B-YX9Y-o.js";import"./EmptyState-DyXuFihN.js";import"./Progress-BEHAA0IT.js";import"./LinearProgress-DpBoLb1E.js";import"./ResponseErrorPanel-DgjE292y.js";import"./ErrorPanel-MHQ-AezQ.js";import"./WarningPanel-CW8xElMR.js";import"./MarkdownContent-BVwCvq0M.js";import"./CodeSnippet-CZ92bXRb.js";import"./CopyTextButton-BSG1bAcB.js";import"./useCopyToClipboard-4lPsz2vG.js";import"./Tooltip-Dx1D_B-m.js";import"./Popper-BSGP2tv0.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
