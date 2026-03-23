import{j as t,Y as u,N as p,Z as g}from"./iframe--MS66teN.js";import{r as h}from"./plugin-BkjzhtOt.js";import{S as l,u as c,a as x}from"./useSearchModal-1oy73gH2.js";import{s as S,M}from"./api-B_xgBHtB.js";import{S as C}from"./SearchContext-Bses2o9W.js";import{B as m}from"./Button-8cYlNDsK.js";import{m as f}from"./makeStyles-B3gZJdXQ.js";import{D as j,a as y,b as B}from"./DialogTitle-DEW7HMUL.js";import{B as D}from"./Box-WcPrDxvm.js";import{S as n}from"./Grid-S31HS9ey.js";import{S as I}from"./SearchType-CEsoA-P7.js";import{L as G}from"./List-BngRfJV6.js";import{H as R}from"./DefaultResultListItem-C8uakpq-.js";import{w as k}from"./appWrappers-BuSdHoSh.js";import{SearchBar as v}from"./SearchBar-xJ0AhLF3.js";import{S as T}from"./SearchResult-CQ_G5k5-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dn6sZXVI.js";import"./Plugin-D8gTPngt.js";import"./componentData-BT2uJg7J.js";import"./useAnalytics-B-3-tPoN.js";import"./useApp-P40Yy8FV.js";import"./useRouteRef-BL4Y7NZZ.js";import"./index-C8lN7z6e.js";import"./ArrowForward-DRFrJgDh.js";import"./translation-BLRObLkY.js";import"./Page-BhwBI_8z.js";import"./useMediaQuery-KS5OND7o.js";import"./Divider-Ce5ITpnq.js";import"./ArrowBackIos-D41iRVRl.js";import"./ArrowForwardIos-9XXG3bYb.js";import"./translation-DaRI86FI.js";import"./lodash-vaL5b5o-.js";import"./useAsync-BeXeBLNv.js";import"./useMountedState-BkwGR7C4.js";import"./Modal-ByYh99jW.js";import"./Portal-UjOrNlZC.js";import"./Backdrop-YMIop_AU.js";import"./styled-BHy6FTvz.js";import"./ExpandMore-DUZaokGP.js";import"./AccordionDetails-VBd78_u6.js";import"./index-B9sM2jn7.js";import"./Collapse-MhVmOiVi.js";import"./ListItem-CtSgiNmU.js";import"./ListContext-DH8NOqlh.js";import"./ListItemIcon-BlVfAF2y.js";import"./ListItemText-C1DcXRBw.js";import"./Tabs-DgMk__WK.js";import"./KeyboardArrowRight--2LSLc-P.js";import"./FormLabel-BWYdLdLw.js";import"./formControlState--h4g43RI.js";import"./InputLabel-_DtRdrR4.js";import"./Select-OVghtnvw.js";import"./Popover-D7kgfPEI.js";import"./MenuItem-Bv0P2GRM.js";import"./Checkbox-CLjwT02s.js";import"./SwitchBase-B8jpCzGb.js";import"./Chip-CcS3oKWF.js";import"./Link-DnMo_TOp.js";import"./index-DGpF3VQV.js";import"./WebStorage-D_nrcGMJ.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-7Wh-bZ_e.js";import"./useIsomorphicLayoutEffect-Fxu556Ss.js";import"./AppThemeApi-CDpY_kGN.js";import"./BUIProvider-MOAkSoGK.js";import"./openLink-DbqcEISv.js";import"./Search-gppr4deI.js";import"./useDebounce-Du8kDz0A.js";import"./InputAdornment-B73UZtO2.js";import"./TextField-DHDiWgh5.js";import"./useElementFilter-GzZC8R4u.js";import"./EmptyState-Bx0orZre.js";import"./Progress-0pRpKctl.js";import"./LinearProgress-C0CxC9-m.js";import"./ResponseErrorPanel-CwLOQnYf.js";import"./ErrorPanel-Bh1a1UPB.js";import"./WarningPanel-BnkqOGJm.js";import"./MarkdownContent-CJkGmOGi.js";import"./CodeSnippet-CqmFnPzi.js";import"./CopyTextButton-Bs-ktsUP.js";import"./useCopyToClipboard-BjyPvKPz.js";import"./Tooltip-ymjnk5vs.js";import"./Popper-CVKGQzkO.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
