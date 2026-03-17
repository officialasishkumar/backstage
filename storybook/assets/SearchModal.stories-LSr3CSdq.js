import{j as t,Y as u,M as p,Z as g}from"./iframe-BPa6N3SD.js";import{r as h}from"./plugin-B8bQ4tP4.js";import{S as l,u as c,a as x}from"./useSearchModal-BCLmp7E0.js";import{s as S,M}from"./api-BYihdc0a.js";import{S as C}from"./SearchContext-Ccy3dm38.js";import{B as m}from"./Button-CY4UCIcT.js";import{m as f}from"./makeStyles-BPhOhugX.js";import{D as j,a as y,b as B}from"./DialogTitle-CE1DcWsQ.js";import{B as D}from"./Box-Cnz1HHCH.js";import{S as n}from"./Grid-DrfNOwcD.js";import{S as I}from"./SearchType-CK0NTgWW.js";import{L as G}from"./List-2A5-ge2l.js";import{H as R}from"./DefaultResultListItem-D9Tx6JYx.js";import{w as k}from"./appWrappers-DtPQmIZu.js";import{SearchBar as v}from"./SearchBar-BnFU2Q4z.js";import{S as T}from"./SearchResult-BuvQ4ibs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Br78ApUd.js";import"./Plugin-BbJEYF0S.js";import"./componentData-Cq49ZqHf.js";import"./useAnalytics-BfzgNjvV.js";import"./useApp-Hpyy33iD.js";import"./useRouteRef-DO8MO-Vx.js";import"./index-CCMAs2uM.js";import"./ArrowForward-CL0WZOFO.js";import"./translation-B7ouiqhE.js";import"./Page-cT2nnb5Z.js";import"./useMediaQuery-K3YEw5GT.js";import"./Divider-Dr2s_Lqe.js";import"./ArrowBackIos-B1PuoRlV.js";import"./ArrowForwardIos-BzJZOIYw.js";import"./translation-NSgpoHyv.js";import"./lodash-guIUsIxV.js";import"./useAsync-Cqtr7-4i.js";import"./useMountedState-B69jA6Y1.js";import"./Modal-B2cUeR8m.js";import"./Portal-CybimJf6.js";import"./Backdrop-Pf2vsvvc.js";import"./styled-DR1Q9dRL.js";import"./ExpandMore-DqcL3_Ti.js";import"./AccordionDetails-D0ralmK5.js";import"./index-B9sM2jn7.js";import"./Collapse-BxVDKG_E.js";import"./ListItem-D402ttc5.js";import"./ListContext-BukMsw43.js";import"./ListItemIcon-Dg7e0rsR.js";import"./ListItemText-Dng-M9Mo.js";import"./Tabs-CuOzOYRQ.js";import"./KeyboardArrowRight-BFvCTBW2.js";import"./FormLabel-BzRdYdad.js";import"./formControlState-DJhFNtYQ.js";import"./InputLabel-aYfiqXiq.js";import"./Select-BDvHXHtE.js";import"./Popover-ccHJV6L0.js";import"./MenuItem-E1aDLhZF.js";import"./Checkbox-CskZHw_U.js";import"./SwitchBase-CVtmcGbf.js";import"./Chip-6_q0kWZv.js";import"./Link-CTyMZEMw.js";import"./index-BdY7AnEA.js";import"./useObservable-DsHLmc1s.js";import"./useIsomorphicLayoutEffect-Cd1aE0vk.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-BLvES4PE.js";import"./openLink-B0Vv0SU7.js";import"./Search-BFGGznjM.js";import"./useDebounce-D9OAl6ih.js";import"./InputAdornment-fjpdPi-_.js";import"./TextField-BzATeO7-.js";import"./useElementFilter-CIjNjNnJ.js";import"./EmptyState-BdqCVAMg.js";import"./Progress-CB5SWFYg.js";import"./LinearProgress-DPDIgLGG.js";import"./ResponseErrorPanel-D9P1jniZ.js";import"./ErrorPanel-eT8hd-vo.js";import"./WarningPanel-BiqCtuVW.js";import"./MarkdownContent-Cj91Lx1J.js";import"./CodeSnippet-BardiS74.js";import"./CopyTextButton-C7QP5IPw.js";import"./useCopyToClipboard-CoHBkqe_.js";import"./Tooltip--dBTVPXa.js";import"./Popper-DYnRrkMR.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
