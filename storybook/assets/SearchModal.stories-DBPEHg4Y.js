import{j as t,X as u,M as p,Y as g}from"./iframe-9SnFn8NI.js";import{r as h}from"./plugin-DYbdGvL3.js";import{S as l,u as c,a as x}from"./useSearchModal-BT3-0vfa.js";import{s as S,M}from"./api-o3FkwP6o.js";import{S as C}from"./SearchContext-CITSbdyq.js";import{B as m}from"./Button-v6lnBXCN.js";import{m as f}from"./makeStyles-V6CeBGqV.js";import{D as j,a as y,b as B}from"./DialogTitle-gPOZjhm2.js";import{B as D}from"./Box-gvDFBePG.js";import{S as n}from"./Grid-DnbT5ToY.js";import{S as I}from"./SearchType-i-_crMT9.js";import{L as G}from"./List-4wadUwvo.js";import{H as R}from"./DefaultResultListItem-DHcE6xRq.js";import{w as k}from"./appWrappers-gCP1PHw1.js";import{SearchBar as v}from"./SearchBar-njkYSD7I.js";import{S as T}from"./SearchResult-C-eSolpF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH5bYuJC.js";import"./Plugin-BA8T2EF4.js";import"./componentData-DFRBpqUL.js";import"./useAnalytics-BPrcyc7d.js";import"./useApp-BcoyKQFG.js";import"./useRouteRef-BEHAM5Os.js";import"./index-DSgRsb80.js";import"./ArrowForward-LXHsc67u.js";import"./translation-zMutKPJU.js";import"./Page-Bk2imvQR.js";import"./useMediaQuery-De9KxEic.js";import"./Divider-sVmCPwRJ.js";import"./ArrowBackIos-BfeF0s1k.js";import"./ArrowForwardIos-CT87a4OA.js";import"./translation-CDSIA1yk.js";import"./lodash-D_ItgaGX.js";import"./useAsync-Y4mVlgU0.js";import"./useMountedState-DS2oCoAt.js";import"./Modal-shSMlX3e.js";import"./Portal-DzHAgIGh.js";import"./Backdrop-Cien9Y5s.js";import"./styled-BqCxyJxR.js";import"./ExpandMore-C0S35r3E.js";import"./AccordionDetails-CNb3u0OW.js";import"./index-B9sM2jn7.js";import"./Collapse-DozpUEWY.js";import"./ListItem-DIdjPLO3.js";import"./ListContext-D6WBwJuB.js";import"./ListItemIcon-hOcYyR81.js";import"./ListItemText-CYbf3I1M.js";import"./Tabs-DOjT9AtU.js";import"./KeyboardArrowRight-ZMSYyWgk.js";import"./FormLabel-DU3Il7Ye.js";import"./formControlState-B4kMTfth.js";import"./InputLabel-BBWZ6Jlv.js";import"./Select-B6ZJEgeM.js";import"./Popover-DwK-7TXH.js";import"./MenuItem-CT3o1zg7.js";import"./Checkbox-BXVi7wK_.js";import"./SwitchBase-om0gtKZC.js";import"./Chip-WfGERlrY.js";import"./Link-CwdNwFvc.js";import"./index-Cl14oj1p.js";import"./useObservable-C04GqKKN.js";import"./useIsomorphicLayoutEffect-B1b_6019.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DWQLs8Cf.js";import"./openLink-Dxd353gg.js";import"./Search-V37lsuf5.js";import"./useDebounce-BKRFrI6K.js";import"./InputAdornment-CPZKsV1G.js";import"./TextField-teoZHzsW.js";import"./useElementFilter-eNZElEJt.js";import"./EmptyState-CaHTywIa.js";import"./Progress-CC3JOzEm.js";import"./LinearProgress-BiymY7B7.js";import"./ResponseErrorPanel-BkuVCGZn.js";import"./ErrorPanel-DcHQVqeT.js";import"./WarningPanel-cvGmY0lU.js";import"./MarkdownContent-CgmyR75q.js";import"./CodeSnippet-BBLqagB4.js";import"./CopyTextButton-DUFsx-XO.js";import"./useCopyToClipboard-DosVTOzT.js";import"./Tooltip-B3I0hJ1p.js";import"./Popper-2JEPo0EG.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
