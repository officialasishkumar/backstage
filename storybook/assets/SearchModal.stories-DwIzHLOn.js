import{j as t,Y as u,N as p,Z as g}from"./iframe-BNkUY5HA.js";import{r as h}from"./plugin-Cx3OwLsX.js";import{S as l,u as c,a as x}from"./useSearchModal-Criwklvw.js";import{s as S,M}from"./api-DDWvc9yc.js";import{S as C}from"./SearchContext-BG6Qs4zD.js";import{B as m}from"./Button-8BW9uSJH.js";import{m as f}from"./makeStyles-D1M3cvTC.js";import{D as j,a as y,b as B}from"./DialogTitle-COjW0GA_.js";import{B as D}from"./Box-vbuApI20.js";import{S as n}from"./Grid-T8Evs-aA.js";import{S as I}from"./SearchType-_BfKf79L.js";import{L as G}from"./List-Dwb4XmJ7.js";import{H as R}from"./DefaultResultListItem-BCojsS6g.js";import{w as k}from"./appWrappers--MLEicpW.js";import{SearchBar as v}from"./SearchBar-DMXgZ_Mm.js";import{S as T}from"./SearchResult-DOM69Np4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3r5mPtA.js";import"./Plugin-BWhN_b3P.js";import"./componentData-CbggJDax.js";import"./useAnalytics-dAdITyCa.js";import"./useApp-DK-Jjl42.js";import"./useRouteRef-ChWiWFS3.js";import"./index-DN_6yxbn.js";import"./ArrowForward-BtTG0sZ1.js";import"./translation-D8LlGwUW.js";import"./Page-BPdbQlIM.js";import"./useMediaQuery-BZjAG3Ln.js";import"./Divider-C-PR1OqW.js";import"./ArrowBackIos-BPuaJWrd.js";import"./ArrowForwardIos-DApQvpr3.js";import"./translation-Q1os9MKa.js";import"./lodash-Bpc3Agjj.js";import"./useAsync-B5fuvW4L.js";import"./useMountedState-D6BGeb6K.js";import"./Modal-BKtoBYKW.js";import"./Portal-DQf1B4dl.js";import"./Backdrop-B2--LIPJ.js";import"./styled-s8twt4bb.js";import"./ExpandMore-Bd1qtLN_.js";import"./AccordionDetails-DZsPPaZY.js";import"./index-B9sM2jn7.js";import"./Collapse-Dr1ZpXkZ.js";import"./ListItem-BtLTcDqZ.js";import"./ListContext-i5jXFFIx.js";import"./ListItemIcon-Se9eaRfP.js";import"./ListItemText-BqW4h_M6.js";import"./Tabs-DH1gUE0q.js";import"./KeyboardArrowRight-B_TwwpCT.js";import"./FormLabel-BDEz0kL8.js";import"./formControlState-AeCIKk_8.js";import"./InputLabel-9kbfsLeC.js";import"./Select-Cm18jZN-.js";import"./Popover-DFC8wnp9.js";import"./MenuItem-D8_kh4Jx.js";import"./Checkbox-D-ZzTGhV.js";import"./SwitchBase-BBgpGpJK.js";import"./Chip-XsjBSClR.js";import"./Link-CGPyZy0_.js";import"./index-DlAQjt7D.js";import"./WebStorage-BSZ3f6rC.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Cxumsgpz.js";import"./useIsomorphicLayoutEffect-CEtA1_c_.js";import"./AppThemeApi-DdnvDi-C.js";import"./BUIProvider-COrfszv7.js";import"./openLink-CO4LZzkY.js";import"./Search-DEoBoJlx.js";import"./useDebounce-eAwjBTyw.js";import"./InputAdornment-CXMYZPYO.js";import"./TextField-BdgL2J2o.js";import"./useElementFilter-D-btOL-F.js";import"./EmptyState-l8vtczxM.js";import"./Progress-DLHYmK-a.js";import"./LinearProgress-DqPO85Iq.js";import"./ResponseErrorPanel-BHFXoM-g.js";import"./ErrorPanel-D6f5EQyW.js";import"./WarningPanel-CZRdxMlv.js";import"./MarkdownContent-DOVqI37K.js";import"./CodeSnippet-zLg_yl5x.js";import"./CopyTextButton-BHJatCX9.js";import"./useCopyToClipboard-Bh39iCw_.js";import"./Tooltip-Dh1IM1oZ.js";import"./Popper-Dy4ol0j8.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
