import{j as t,a2 as u,V as p,a3 as g}from"./iframe-hebBxzMS.js";import{r as h}from"./plugin-DnuPI7TG.js";import{S as l,u as c,a as x}from"./useSearchModal-CmDdvyuj.js";import{s as S,M}from"./api-jc-W2kkT.js";import{S as C}from"./SearchContext-DrQAi7yW.js";import{B as m}from"./Button-1W1IEELe.js";import{m as f}from"./makeStyles-BuKfj6eo.js";import{D as j,a as y,b as B}from"./DialogTitle-DIq6lGHV.js";import{B as D}from"./Box-CsMG6Ed5.js";import{S as n}from"./Grid-DR9XAO4b.js";import{S as I}from"./SearchType-FcgN4LOc.js";import{L as G}from"./List-B-7FtQra.js";import{H as R}from"./DefaultResultListItem-CfLXZhes.js";import{w as k}from"./appWrappers-DG3qkWtx.js";import{SearchBar as v}from"./SearchBar-C2XtQbEf.js";import{S as T}from"./SearchResult-CAXqFFw0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cb5bBcyt.js";import"./Plugin-Ckj8C21A.js";import"./componentData-3dYIRIMh.js";import"./useAnalytics-DnJagaLH.js";import"./useApp-Di7SCwol.js";import"./useRouteRef-BP7NYLLE.js";import"./ArrowForward-Cu2heAJ0.js";import"./translation-BRjQIHE-.js";import"./Page-zjQLf-nB.js";import"./useMediaQuery-DEkKN8dk.js";import"./Divider-DdU1homx.js";import"./ArrowBackIos-BPg5zPg7.js";import"./ArrowForwardIos-ItLgISBw.js";import"./translation-WMSPag9l.js";import"./lodash-Dh4D4KP7.js";import"./useAsync-DBxU8MB7.js";import"./useMountedState-BOTwgk6q.js";import"./Modal-D8j_BW28.js";import"./Portal-DVg2kjtj.js";import"./Backdrop-DaHdLcQd.js";import"./styled-eU63C66P.js";import"./ExpandMore-CmKg0nRc.js";import"./AccordionDetails-BV8AV73Z.js";import"./index-B9sM2jn7.js";import"./Collapse-BgREKGge.js";import"./ListItem-B2Xdmbv7.js";import"./ListContext-vEx_JeiU.js";import"./ListItemIcon-D4jwnHOp.js";import"./ListItemText-CZ2cZD8f.js";import"./Tabs-BqwvSRyT.js";import"./KeyboardArrowRight-DYVOX5Dj.js";import"./FormLabel-CpSu2UiP.js";import"./formControlState-DutHjy-Z.js";import"./InputLabel-CzP71cpe.js";import"./Select-CX3j3K8s.js";import"./Popover-BcCigjgZ.js";import"./MenuItem-CaZu7W5j.js";import"./Checkbox-BdfCfx0r.js";import"./SwitchBase-jFAA_ETX.js";import"./Chip-YpSJO-GT.js";import"./Link-Dwe8WTS_.js";import"./index-CF8ZGQqn.js";import"./WebStorage-BH3gxhUZ.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTCVMere.js";import"./useIsomorphicLayoutEffect-C2Wk8JSq.js";import"./AppThemeApi-C6IiMRx5.js";import"./BUIProvider-BOqmKnYE.js";import"./openLink-CPB6xqLo.js";import"./Search-CCJX7vkb.js";import"./useDebounce-KlKLjyE6.js";import"./InputAdornment-BLqHyM3O.js";import"./TextField-B94sBlAb.js";import"./useElementFilter-D0Osyj0N.js";import"./EmptyState-lP3wYgcr.js";import"./Progress-DOdGV475.js";import"./LinearProgress-BxU_ug_m.js";import"./ResponseErrorPanel-cON5L8g2.js";import"./ErrorPanel-CO9A7hwI.js";import"./WarningPanel-D4ZPrS8o.js";import"./MarkdownContent-Bpx0OAum.js";import"./CodeSnippet-lx8evZ3D.js";import"./CopyTextButton-DZCMvCu6.js";import"./useCopyToClipboard-Onjtnqv6.js";import"./Tooltip-wRXpjfve.js";import"./Popper-Nu0-WiMx.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
