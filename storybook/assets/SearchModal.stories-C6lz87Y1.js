import{j as t,Y as u,N as p,Z as g}from"./iframe-BfKy45FJ.js";import{r as h}from"./plugin-CBeeHx7W.js";import{S as l,u as c,a as x}from"./useSearchModal-Ca38WkTs.js";import{s as S,M}from"./api-BM4Oiu5E.js";import{S as C}from"./SearchContext-BO_5c5dV.js";import{B as m}from"./Button-Bec2meKw.js";import{m as f}from"./makeStyles-CbJpsKKD.js";import{D as j,a as y,b as B}from"./DialogTitle-BpasOxeZ.js";import{B as D}from"./Box-Chh9ILCj.js";import{S as n}from"./Grid-DMQfW7fm.js";import{S as I}from"./SearchType-DkdTF3DT.js";import{L as G}from"./List-C-G9AVhD.js";import{H as R}from"./DefaultResultListItem-BB4uAxD0.js";import{w as k}from"./appWrappers-BG_bTRVG.js";import{SearchBar as v}from"./SearchBar-BY4EVi2s.js";import{S as T}from"./SearchResult-B6okqTJ4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPUscpqI.js";import"./Plugin-B_vpXBTv.js";import"./componentData-DUYteM0k.js";import"./useAnalytics-CSNCMzqj.js";import"./useApp-BixXzEMi.js";import"./useRouteRef-LGWn3tmb.js";import"./index-iCFn_EoD.js";import"./ArrowForward-CFI0xRWk.js";import"./translation-BPSDtk3W.js";import"./Page-Bolk4mfZ.js";import"./useMediaQuery-Bsdrmyjs.js";import"./Divider-B7qy_Xzd.js";import"./ArrowBackIos-7ba4bMXG.js";import"./ArrowForwardIos-AXOa0InL.js";import"./translation-BzeXWNLR.js";import"./lodash-Co90uFAP.js";import"./useAsync-BjmE6g06.js";import"./useMountedState-DYHhDi6-.js";import"./Modal-BbTV6vLk.js";import"./Portal-C8YLi2oE.js";import"./Backdrop-CZ77Mnf9.js";import"./styled-Cz7jZRk5.js";import"./ExpandMore-C-KPBCy4.js";import"./AccordionDetails-1-O4arSX.js";import"./index-B9sM2jn7.js";import"./Collapse-CElEghiW.js";import"./ListItem-DgDd4GZe.js";import"./ListContext-DvxZ_Ds9.js";import"./ListItemIcon-CKDhr_D-.js";import"./ListItemText-DsL6_YTf.js";import"./Tabs-Blr-0Y12.js";import"./KeyboardArrowRight-C4q8IoV5.js";import"./FormLabel-DQPWulXH.js";import"./formControlState-tmDZVvmS.js";import"./InputLabel-0TTiW0kL.js";import"./Select-C_CmXRox.js";import"./Popover-BQ2AXkI_.js";import"./MenuItem-D82dlzlA.js";import"./Checkbox-0eUaAoGY.js";import"./SwitchBase-7-wWPg_b.js";import"./Chip-CDytegdv.js";import"./Link-C9foY-1f.js";import"./index-DYvGN8yU.js";import"./WebStorage-D758RDgT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-uY-LHa7u.js";import"./useIsomorphicLayoutEffect-Dxa9ALL7.js";import"./AppThemeApi-Du7udc9h.js";import"./BUIProvider-CkXaGfx4.js";import"./openLink-Du3SpVTa.js";import"./Search-CY2Z9MKk.js";import"./useDebounce-CBkWt7er.js";import"./InputAdornment-DmOXlOIl.js";import"./TextField-DTv64K9T.js";import"./useElementFilter-B5FfnpYG.js";import"./EmptyState-CZh-F7_2.js";import"./Progress-CFF9CEHX.js";import"./LinearProgress-BLxHJT0p.js";import"./ResponseErrorPanel-CVayr1rj.js";import"./ErrorPanel-CqsWA2Mj.js";import"./WarningPanel-BPahtXNb.js";import"./MarkdownContent-BpI7x-Z3.js";import"./CodeSnippet-xU9Cu_UF.js";import"./CopyTextButton-6xeF4gzZ.js";import"./useCopyToClipboard-BeCHjga7.js";import"./Tooltip-DoZw0snM.js";import"./Popper-DDZAuDQP.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
