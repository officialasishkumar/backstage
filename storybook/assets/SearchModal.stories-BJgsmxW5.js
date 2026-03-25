import{j as t,Y as u,N as p,Z as g}from"./iframe-Bc_t70P9.js";import{r as h}from"./plugin-BmdyE8_o.js";import{S as l,u as c,a as x}from"./useSearchModal-Bu_pHgku.js";import{s as S,M}from"./api-C2AYqgxU.js";import{S as C}from"./SearchContext-KCEl1_Zz.js";import{B as m}from"./Button-drpyHUkO.js";import{m as f}from"./makeStyles-BFdqtOa2.js";import{D as j,a as y,b as B}from"./DialogTitle-DPXsgEOU.js";import{B as D}from"./Box-DIBB98s_.js";import{S as n}from"./Grid-C636lq8b.js";import{S as I}from"./SearchType-CRrCUICd.js";import{L as G}from"./List-CCzJZ__r.js";import{H as R}from"./DefaultResultListItem-DVoOTCMf.js";import{w as k}from"./appWrappers-ARkgjiFN.js";import{SearchBar as v}from"./SearchBar-Cd_lH9Oj.js";import{S as T}from"./SearchResult-21vDD-dd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYApe_DV.js";import"./Plugin-3piQqfVL.js";import"./componentData-B03hUwNt.js";import"./useAnalytics-B6nhj7pL.js";import"./useApp--yeriI7g.js";import"./useRouteRef-C26AoQ3E.js";import"./index-BCiK2kdg.js";import"./ArrowForward-D3H2dZEo.js";import"./translation-Dptq2gbw.js";import"./Page-C35fLpaJ.js";import"./useMediaQuery-RrPptwYs.js";import"./Divider-DQ8PL2By.js";import"./ArrowBackIos-Dbmga24n.js";import"./ArrowForwardIos-CgWfFtWt.js";import"./translation-BZYLqa5y.js";import"./lodash-D5G25FpY.js";import"./useAsync-wj_PVQkh.js";import"./useMountedState-P4R8GCuk.js";import"./Modal-BraqcO88.js";import"./Portal-BfeqdU27.js";import"./Backdrop-BvjZs0yd.js";import"./styled-Dt6lPGno.js";import"./ExpandMore-DtIbnEjr.js";import"./AccordionDetails-DH4LMTy9.js";import"./index-B9sM2jn7.js";import"./Collapse-C9xEupKI.js";import"./ListItem-DX5nOJCZ.js";import"./ListContext-o__9M1dS.js";import"./ListItemIcon-CWTCOIa3.js";import"./ListItemText-Ct0at1L8.js";import"./Tabs-SLHseoBM.js";import"./KeyboardArrowRight-BWIVTpAW.js";import"./FormLabel-C6Wix--y.js";import"./formControlState-ZtpbvoxM.js";import"./InputLabel-DUzAQdhl.js";import"./Select-hsw1bJJ9.js";import"./Popover-CgPAMYEH.js";import"./MenuItem-CNNjeF73.js";import"./Checkbox-DnDWvgSD.js";import"./SwitchBase-2NptfT5D.js";import"./Chip-zjv0aIoz.js";import"./Link-C9qCwjy4.js";import"./index-eprtpxlx.js";import"./WebStorage-B1Xqa_0m.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DXFbYSDT.js";import"./useIsomorphicLayoutEffect-CZch1A4s.js";import"./AppThemeApi-D0kZ4W1Y.js";import"./BUIProvider-DlGeXRAl.js";import"./openLink-BJkfNliT.js";import"./Search-CoBCY3-a.js";import"./useDebounce-By0Q-ScN.js";import"./InputAdornment-4qPtljm_.js";import"./TextField-BAfl0mrQ.js";import"./useElementFilter-DbhkMSXu.js";import"./EmptyState-BSytvOT9.js";import"./Progress-BFWTM0KI.js";import"./LinearProgress-CzF-i4YH.js";import"./ResponseErrorPanel-DD42mciD.js";import"./ErrorPanel-CCc0ZGgd.js";import"./WarningPanel-Ch6DOrYw.js";import"./MarkdownContent-BaWTYFCU.js";import"./CodeSnippet-B9ZWUDRn.js";import"./CopyTextButton-UfYVoCAh.js";import"./useCopyToClipboard-B-U2q8b4.js";import"./Tooltip-C9G2JH2w.js";import"./Popper-YDAw3qJA.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
