import{j as t,Y as u,N as p,Z as g}from"./iframe-LAkIJzV-.js";import{r as h}from"./plugin-IBNKdfmd.js";import{S as l,u as c,a as x}from"./useSearchModal-QOG-UXpF.js";import{s as S,M}from"./api-RelUVOcO.js";import{S as C}from"./SearchContext-BFuo9Msm.js";import{B as m}from"./Button-CngIuIjc.js";import{m as f}from"./makeStyles-COYpSGPM.js";import{D as j,a as y,b as B}from"./DialogTitle-CzUrF2OM.js";import{B as D}from"./Box-B6_OswLq.js";import{S as n}from"./Grid-D12OHFOV.js";import{S as I}from"./SearchType-CbpvR2rE.js";import{L as G}from"./List-BdeCMfRK.js";import{H as R}from"./DefaultResultListItem-Cd-yCIl7.js";import{w as k}from"./appWrappers-BsD5m44s.js";import{SearchBar as v}from"./SearchBar-B3JJgxUO.js";import{S as T}from"./SearchResult-Bb7PqEWC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-S5LpoW0p.js";import"./Plugin-BQJD82I5.js";import"./componentData-cMyYHDnN.js";import"./useAnalytics-D1LuewZq.js";import"./useApp-Bblngibf.js";import"./useRouteRef-ClulUx8J.js";import"./index-DacU1fu4.js";import"./ArrowForward-CTBtkKj7.js";import"./translation-B1-JPDFW.js";import"./Page-Db8eBOUe.js";import"./useMediaQuery-BGnta8dA.js";import"./Divider-D_oQ65g_.js";import"./ArrowBackIos-YK1oJXAm.js";import"./ArrowForwardIos-Dre2u0eg.js";import"./translation-BMxxS6n_.js";import"./lodash-DYu-YCIx.js";import"./useAsync-CJtFMYov.js";import"./useMountedState-ChWc6m0m.js";import"./Modal-CLKqV01n.js";import"./Portal-B_B_DiH0.js";import"./Backdrop-vjXF7GH0.js";import"./styled-qZchnbXI.js";import"./ExpandMore-eEdaDUD4.js";import"./AccordionDetails-DL2cDZ6B.js";import"./index-B9sM2jn7.js";import"./Collapse-Dx0oZfXh.js";import"./ListItem-Dotf5yp5.js";import"./ListContext-g5fUsEsB.js";import"./ListItemIcon-DeHW8Qr-.js";import"./ListItemText-mc8R52PO.js";import"./Tabs-NNdo8i8e.js";import"./KeyboardArrowRight-Dd1niBoi.js";import"./FormLabel-BlE9b0zT.js";import"./formControlState-sJZFtX4h.js";import"./InputLabel-9AEvqeoc.js";import"./Select-Bbnt52Og.js";import"./Popover-Ba6fEJx1.js";import"./MenuItem-DgBK0Cxd.js";import"./Checkbox-DK8pghM9.js";import"./SwitchBase-DUj01dqN.js";import"./Chip-CU56-7Xf.js";import"./Link-CDvyJzZJ.js";import"./index-BEnojdoE.js";import"./WebStorage-D3TO8Scz.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BF72Z5tz.js";import"./useIsomorphicLayoutEffect-C40l31eA.js";import"./AppThemeApi-BX6QlA5p.js";import"./BUIProvider-BCBhngHq.js";import"./openLink-DmaCgHpA.js";import"./Search-CgyQxec7.js";import"./useDebounce-B8rHYV-G.js";import"./InputAdornment-BJgSLSOu.js";import"./TextField-Ce0f0XrI.js";import"./useElementFilter-DUwjbFvz.js";import"./EmptyState-Dy0uRtEg.js";import"./Progress-D1BRlr0E.js";import"./LinearProgress-DfpQGuDN.js";import"./ResponseErrorPanel-CaNgCBQt.js";import"./ErrorPanel-BrUaocJT.js";import"./WarningPanel-DYjUQMYU.js";import"./MarkdownContent-wUSRzQQd.js";import"./CodeSnippet-DxiggM9Y.js";import"./CopyTextButton-BiAweD2l.js";import"./useCopyToClipboard-jfSdv42E.js";import"./Tooltip-BYvgz8vj.js";import"./Popper-CrI57b7o.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
