import{j as t,Y as u,M as p,Z as g}from"./iframe-CtYv7QJ0.js";import{r as h}from"./plugin-BHkhBd8T.js";import{S as l,u as c,a as x}from"./useSearchModal-BnEY39NR.js";import{s as S,M}from"./api-Bw0KAEXM.js";import{S as C}from"./SearchContext-HEXn9yW9.js";import{B as m}from"./Button-CZONJyyv.js";import{m as f}from"./makeStyles--1ATzXv9.js";import{D as j,a as y,b as B}from"./DialogTitle-BV1qNsEk.js";import{B as D}from"./Box-CAZTqRm1.js";import{S as n}from"./Grid-BCbLl6WO.js";import{S as I}from"./SearchType-BrwZW2X6.js";import{L as G}from"./List-DmvJHB8z.js";import{H as R}from"./DefaultResultListItem-qj-eZveq.js";import{w as k}from"./appWrappers-Cqiwuyfc.js";import{SearchBar as v}from"./SearchBar-By-LL6dF.js";import{S as T}from"./SearchResult-CT0HHLVH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt5QJEz8.js";import"./Plugin-CQNzAehA.js";import"./componentData-Cxf138iF.js";import"./useAnalytics-Bl__AmNu.js";import"./useApp-CZQSE3E9.js";import"./useRouteRef-apUMSEnC.js";import"./index-CgDq3XR-.js";import"./ArrowForward-CiKjhCB7.js";import"./translation-DsYz7cbi.js";import"./Page-DaTelRtr.js";import"./useMediaQuery-4i4hH4Z1.js";import"./Divider-BaBH_gp0.js";import"./ArrowBackIos-BG70yaFJ.js";import"./ArrowForwardIos-COYVoPX4.js";import"./translation-C1HiIxR_.js";import"./lodash-CtZ09CsL.js";import"./useAsync-Cl2aaync.js";import"./useMountedState-DitFhSJJ.js";import"./Modal-D_Q7hd0G.js";import"./Portal-BRtlHwp1.js";import"./Backdrop-CRW2RCO4.js";import"./styled-EsqOIvlg.js";import"./ExpandMore-DTOI7x5U.js";import"./AccordionDetails-CgYFAgkJ.js";import"./index-B9sM2jn7.js";import"./Collapse-DsOs98CO.js";import"./ListItem-CwRfUFQu.js";import"./ListContext-BuapdplI.js";import"./ListItemIcon-B88oK1gQ.js";import"./ListItemText-DhC-3XdQ.js";import"./Tabs-Dv2z0s7g.js";import"./KeyboardArrowRight-CnAte_56.js";import"./FormLabel-BS70SnD9.js";import"./formControlState-9tAobm--.js";import"./InputLabel-pfRlcJW0.js";import"./Select-0NspFozQ.js";import"./Popover-Cetlf1AD.js";import"./MenuItem-BjVwvnMx.js";import"./Checkbox-DtsOLD1_.js";import"./SwitchBase-CMrsrqq9.js";import"./Chip-C5m2xq28.js";import"./Link-4m0BNJ_b.js";import"./index-r59YBeO4.js";import"./useObservable-_9EJvrH2.js";import"./useIsomorphicLayoutEffect-DSWv8SaO.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DCcFMRr-.js";import"./openLink-Bmz1Jei1.js";import"./Search-BMwPiWDl.js";import"./useDebounce-CK22qED9.js";import"./InputAdornment-E2b1P_pX.js";import"./TextField-Ct5Yc_VA.js";import"./useElementFilter-P1cZz_63.js";import"./EmptyState-tWdfjaEk.js";import"./Progress-DL65btFZ.js";import"./LinearProgress-DwyrcOYv.js";import"./ResponseErrorPanel-Os1-AVmD.js";import"./ErrorPanel-BcQVobD_.js";import"./WarningPanel-BhMCHgOL.js";import"./MarkdownContent-zthL1thI.js";import"./CodeSnippet-DsQ3dv7j.js";import"./CopyTextButton-Bi-0WTaW.js";import"./useCopyToClipboard-ByhtPbW6.js";import"./Tooltip-BsOi6xxC.js";import"./Popper-BjMqL0rj.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
