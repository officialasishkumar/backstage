import{j as t,Y as u,M as p,Z as g}from"./iframe-CYY79_Ch.js";import{r as h}from"./plugin-DAWDSjgI.js";import{S as l,u as c,a as x}from"./useSearchModal-h6qoy3wU.js";import{s as S,M}from"./api-NEU9mn4S.js";import{S as C}from"./SearchContext-CLENGQp4.js";import{B as m}from"./Button-BNPpinG-.js";import{m as f}from"./makeStyles-tbZFV_7j.js";import{D as j,a as y,b as B}from"./DialogTitle-BrW5b8WW.js";import{B as D}from"./Box-DbAj5ghB.js";import{S as n}from"./Grid-B6UmqXW5.js";import{S as I}from"./SearchType-GLILxjAf.js";import{L as G}from"./List-Cj-oPI3l.js";import{H as R}from"./DefaultResultListItem-DlE519O9.js";import{w as k}from"./appWrappers-_KYTFwdK.js";import{SearchBar as v}from"./SearchBar-gUt5jKsQ.js";import{S as T}from"./SearchResult-DRf8QZbP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eCmtXtg3.js";import"./Plugin-XiR7Tdl6.js";import"./componentData-DwiID7aS.js";import"./useAnalytics-EAeWUmga.js";import"./useApp-2pwP5JR0.js";import"./useRouteRef-5Z7OUXAz.js";import"./index-CDv2I334.js";import"./ArrowForward-CSqFeIAo.js";import"./translation-DDcUOpKJ.js";import"./Page-BQ6YgLSN.js";import"./useMediaQuery-HRD73TvP.js";import"./Divider-BM7FVcP4.js";import"./ArrowBackIos-DciXfEYH.js";import"./ArrowForwardIos-x47qT8Ed.js";import"./translation-5VwxGhuX.js";import"./lodash-BCNhplaF.js";import"./useAsync-CMPA6yod.js";import"./useMountedState-5pOa2Jmx.js";import"./Modal-zlEEAh2C.js";import"./Portal-DIn4oRFY.js";import"./Backdrop-DeRWZMjR.js";import"./styled-D9ECYKfc.js";import"./ExpandMore-CwjCnax4.js";import"./AccordionDetails-CbHCPen5.js";import"./index-B9sM2jn7.js";import"./Collapse-Ck8K9BIP.js";import"./ListItem-Dtfo1o08.js";import"./ListContext-BaICr9Ho.js";import"./ListItemIcon-CA09LOoE.js";import"./ListItemText-D0tr5sne.js";import"./Tabs-N6TVrILz.js";import"./KeyboardArrowRight-DPjdv7II.js";import"./FormLabel-Bu4v_859.js";import"./formControlState-DZ-YfcFF.js";import"./InputLabel-BRi7Lf3j.js";import"./Select-Dhe3gViZ.js";import"./Popover-B7rEX1cK.js";import"./MenuItem-BIvmAYTc.js";import"./Checkbox-CanzxOqA.js";import"./SwitchBase-Ba26wFuR.js";import"./Chip-DUUcvkkd.js";import"./Link-9_IW04qp.js";import"./index-eUgSIfVW.js";import"./useObservable-Dtt1hA1B.js";import"./useIsomorphicLayoutEffect-C2P83XY8.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-BHR7bujX.js";import"./openLink-Mni93yRE.js";import"./Search-BUM0lFv-.js";import"./useDebounce-Dlrl7FaE.js";import"./InputAdornment-DYzLmTIB.js";import"./TextField-BLaxadMo.js";import"./useElementFilter-SPXF3XTq.js";import"./EmptyState-CEMqjOtj.js";import"./Progress-DCoN__NH.js";import"./LinearProgress-Ctmjuzuw.js";import"./ResponseErrorPanel-AFZeg5TH.js";import"./ErrorPanel-DbWs71Iy.js";import"./WarningPanel-CFp4wDgL.js";import"./MarkdownContent-DSiBR4BR.js";import"./CodeSnippet-2OzVUY27.js";import"./CopyTextButton-Du3KQe3m.js";import"./useCopyToClipboard-D9TZJEgR.js";import"./Tooltip-CRD-RFGK.js";import"./Popper-CzAHrzmM.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
