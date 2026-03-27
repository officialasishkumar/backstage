import{j as t,a2 as u,V as p,a3 as g}from"./iframe-CsOrEaZh.js";import{r as h}from"./plugin-zRMra2ab.js";import{S as l,u as c,a as x}from"./useSearchModal-DpCrj2Lo.js";import{s as S,M}from"./api-CDg9Azu3.js";import{S as C}from"./SearchContext-DdSJd7b2.js";import{B as m}from"./Button-DxzdcRoc.js";import{m as f}from"./makeStyles-RXMzfVyC.js";import{D as j,a as y,b as B}from"./DialogTitle-CJskRIb-.js";import{B as D}from"./Box-ULaQRaNA.js";import{S as n}from"./Grid-Cp5B6vj7.js";import{S as I}from"./SearchType-DH_TUdEI.js";import{L as G}from"./List-DZ50BoJB.js";import{H as R}from"./DefaultResultListItem-DhHU0Bhv.js";import{w as k}from"./appWrappers-BvxLm1EU.js";import{SearchBar as v}from"./SearchBar-BPFFK1YM.js";import{S as T}from"./SearchResult-CzQZC-6F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOlnX8lR.js";import"./Plugin-BB25VZAi.js";import"./componentData-D2PsLXfp.js";import"./useAnalytics-Dzy9lLMd.js";import"./useApp-xQCVi238.js";import"./useRouteRef-CDuLrl4T.js";import"./ArrowForward-qFHuJJXU.js";import"./translation-BvEuq_tg.js";import"./Page-BdSEZwbq.js";import"./useMediaQuery-LCe4V9Dm.js";import"./Divider-5Slz6l7n.js";import"./ArrowBackIos-CuBuRc4H.js";import"./ArrowForwardIos-BM0HGRlQ.js";import"./translation-CPobmUvj.js";import"./lodash-BDBMyJpB.js";import"./useAsync-SkXlsC6H.js";import"./useMountedState-BoYCIFcM.js";import"./Modal-DbgEDtBN.js";import"./Portal-DzcrA5JX.js";import"./Backdrop-rsPJDIRU.js";import"./styled-l3-sdTqB.js";import"./ExpandMore-Cg-dfyMg.js";import"./AccordionDetails-B_DTUGKR.js";import"./index-B9sM2jn7.js";import"./Collapse-ncZbHNhG.js";import"./ListItem-C5QPSfoJ.js";import"./ListContext-DMLxEL-p.js";import"./ListItemIcon-By9cWpcw.js";import"./ListItemText-Dv-KEU61.js";import"./Tabs-DrbYretZ.js";import"./KeyboardArrowRight-BNXTUEFr.js";import"./FormLabel-CFjYjOa8.js";import"./formControlState-CoRY38S1.js";import"./InputLabel-CI3l5Fft.js";import"./Select-DkKvCVGl.js";import"./Popover-D5SZ32eH.js";import"./MenuItem-C-K85Hjt.js";import"./Checkbox-Cfz9eIot.js";import"./SwitchBase-DVqg1BLt.js";import"./Chip-i-WeG4Lx.js";import"./Link-D7sNJ_Uq.js";import"./index-Clf9Nm3f.js";import"./WebStorage-MTKsO0K2.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DAaVJNgT.js";import"./useIsomorphicLayoutEffect-CGDSOLtL.js";import"./AppThemeApi-B_GxqhKP.js";import"./BUIProvider-DqcKutYD.js";import"./openLink-DxicnjxI.js";import"./Search-BjtVWs7D.js";import"./useDebounce-JAwIA1s_.js";import"./InputAdornment-d6tCqMWu.js";import"./TextField-BUFvqsms.js";import"./useElementFilter-BW_HPWLF.js";import"./EmptyState-Fs3uwJD-.js";import"./Progress-DxpWOUZ6.js";import"./LinearProgress-D8VW_ViA.js";import"./ResponseErrorPanel-D_VkVDIl.js";import"./ErrorPanel-DrJMIv3p.js";import"./WarningPanel-Da6yISQs.js";import"./MarkdownContent-pTs0g2w_.js";import"./CodeSnippet-G8w_EFUb.js";import"./CopyTextButton-CRxzmPpF.js";import"./useCopyToClipboard-DkASlukr.js";import"./Tooltip-DzgDEUmc.js";import"./Popper-CCI27zHX.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
