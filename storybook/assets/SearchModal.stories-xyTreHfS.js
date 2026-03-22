import{j as t,Y as u,N as p,Z as g}from"./iframe-BMq-ZiT3.js";import{r as h}from"./plugin-zo3JswL2.js";import{S as l,u as c,a as x}from"./useSearchModal-Swd4ewCx.js";import{s as S,M}from"./api-BAYoJ8U2.js";import{S as C}from"./SearchContext-CfGFVVrG.js";import{B as m}from"./Button-l3CLXg58.js";import{m as f}from"./makeStyles-DEf-u--3.js";import{D as j,a as y,b as B}from"./DialogTitle-BRzueRlF.js";import{B as D}from"./Box-BQ5qGVFB.js";import{S as n}from"./Grid-hHhpklqM.js";import{S as I}from"./SearchType-DUliIi-0.js";import{L as G}from"./List-DSrfcbCV.js";import{H as R}from"./DefaultResultListItem-BJZ2Q7oZ.js";import{w as k}from"./appWrappers-CzymjXER.js";import{SearchBar as v}from"./SearchBar-B7RlE11b.js";import{S as T}from"./SearchResult-mlv9CH6O.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bbtp83M-.js";import"./Plugin-j1KMSIFr.js";import"./componentData-DaTCFJYN.js";import"./useAnalytics-BK5GAN-T.js";import"./useApp-BJgXgSkF.js";import"./useRouteRef-DQijQwIX.js";import"./index-dAFNSupn.js";import"./ArrowForward-BGkR3cia.js";import"./translation-DNLGpayL.js";import"./Page-C84zvT_I.js";import"./useMediaQuery-BMBw358W.js";import"./Divider-hx0aFpXd.js";import"./ArrowBackIos-BX27Gask.js";import"./ArrowForwardIos-DQL-5QfV.js";import"./translation-DqMQ4uC8.js";import"./lodash-C6_451h_.js";import"./useAsync-CF5ddlT2.js";import"./useMountedState-Cs8qVXdF.js";import"./Modal-BTVEQgEn.js";import"./Portal-B2V-y6sd.js";import"./Backdrop-TN0MqcPR.js";import"./styled-CHmBoQLP.js";import"./ExpandMore-CzN7Idn8.js";import"./AccordionDetails-R3pju7Mm.js";import"./index-B9sM2jn7.js";import"./Collapse-CkNZqzfb.js";import"./ListItem-BZt49fth.js";import"./ListContext-CPK4kohg.js";import"./ListItemIcon-BwqDz_u-.js";import"./ListItemText-gSD4Y2Z3.js";import"./Tabs-D-9sFu91.js";import"./KeyboardArrowRight-aUjkjSgO.js";import"./FormLabel-gOslK2v2.js";import"./formControlState-B6QImCyT.js";import"./InputLabel-DJEEIcp0.js";import"./Select-B5R74KVk.js";import"./Popover-BOHa14yd.js";import"./MenuItem-Bb2EL-Wm.js";import"./Checkbox-BoLrA7lV.js";import"./SwitchBase-D_BEOphQ.js";import"./Chip-Be9OpKEL.js";import"./Link-IOlKDP1t.js";import"./index-C9NLBdM0.js";import"./WebStorage-CWRKPj_B.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DBNCI3Qd.js";import"./useIsomorphicLayoutEffect-Cxykuaei.js";import"./AppThemeApi-ZeM0F4k_.js";import"./BUIProvider-IzMHjHXy.js";import"./openLink-Brx0WDUe.js";import"./Search-B9h8inFD.js";import"./useDebounce-DklGwl48.js";import"./InputAdornment-CcB5AjsS.js";import"./TextField-_SDbQqhz.js";import"./useElementFilter-DwlrkHIi.js";import"./EmptyState-LHto7n5A.js";import"./Progress-BhiJbKGw.js";import"./LinearProgress-DUx2W_oW.js";import"./ResponseErrorPanel-OHYwP5WP.js";import"./ErrorPanel-DoBL-3bm.js";import"./WarningPanel-CzlsJdp1.js";import"./MarkdownContent-Yscm427W.js";import"./CodeSnippet-E4wKFyk6.js";import"./CopyTextButton-DQK9fhSo.js";import"./useCopyToClipboard-DTtw2ZeJ.js";import"./Tooltip-DuxpNUeS.js";import"./Popper-Bm-X7l9u.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
