import{j as t,Y as u,M as p,Z as g}from"./iframe-Du1NhnRf.js";import{r as h}from"./plugin-BC-kb9D5.js";import{S as l,u as c,a as x}from"./useSearchModal-Cj1amHvx.js";import{s as S,M}from"./api-BAjKqota.js";import{S as C}from"./SearchContext-B-x1kr1F.js";import{B as m}from"./Button-_IONOL7e.js";import{m as f}from"./makeStyles-BE8gP3w7.js";import{D as j,a as y,b as B}from"./DialogTitle-BaXXp4YE.js";import{B as D}from"./Box-BLB9Ozy2.js";import{S as n}from"./Grid-O7pUBILR.js";import{S as I}from"./SearchType-BWPVd03k.js";import{L as G}from"./List-C_-v2Bm5.js";import{H as R}from"./DefaultResultListItem-DWGD5UGg.js";import{w as k}from"./appWrappers-Dy7pQDyw.js";import{SearchBar as v}from"./SearchBar-UvThREIF.js";import{S as T}from"./SearchResult-DLQcm3qg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D5jHBmoP.js";import"./Plugin-D0m75b29.js";import"./componentData-CgD6suoV.js";import"./useAnalytics-Ms6WfRSX.js";import"./useApp-DfeMOLKR.js";import"./useRouteRef-gKyb9tkU.js";import"./index-Ck8n2OOF.js";import"./ArrowForward-BqW1Cc6o.js";import"./translation-BuMB5M2h.js";import"./Page-BYkLZ1Vg.js";import"./useMediaQuery-B8-nrfQa.js";import"./Divider-VQH6-wlZ.js";import"./ArrowBackIos-DH2LdtAr.js";import"./ArrowForwardIos-A32nz3ts.js";import"./translation-DLWE9-X3.js";import"./lodash-BSRFOEMl.js";import"./useAsync-C0CViB27.js";import"./useMountedState-D7sVuivw.js";import"./Modal-C6NV1WST.js";import"./Portal--jynCFKo.js";import"./Backdrop-BjFuXF2N.js";import"./styled-ED97p4bf.js";import"./ExpandMore-DcwGsMiQ.js";import"./AccordionDetails-CDgOYTsN.js";import"./index-B9sM2jn7.js";import"./Collapse-DAejmBzb.js";import"./ListItem-D0I3ixrZ.js";import"./ListContext-CHRkL_NO.js";import"./ListItemIcon-DFsV9ruc.js";import"./ListItemText-WaULkbXU.js";import"./Tabs-DxhYSTCV.js";import"./KeyboardArrowRight-CVmYI1Ez.js";import"./FormLabel-Bitjk_1S.js";import"./formControlState-Bw5sbh-V.js";import"./InputLabel-DOQIp7an.js";import"./Select-iPsqydas.js";import"./Popover-C3tQpyPo.js";import"./MenuItem-CJrZOmFm.js";import"./Checkbox-COifdm_x.js";import"./SwitchBase-3eq-EAkq.js";import"./Chip-usnFhkZ2.js";import"./Link-gdoezBv2.js";import"./index-Bepsy_Z3.js";import"./useObservable-DFKmxMmG.js";import"./useIsomorphicLayoutEffect-Bqw_eD0t.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-CfT0m_qr.js";import"./openLink-CxapqtyB.js";import"./Search-BSBE9D8L.js";import"./useDebounce-C79pJ86S.js";import"./InputAdornment-DT-BXHDu.js";import"./TextField-CHHanyFS.js";import"./useElementFilter-BhXAfqhQ.js";import"./EmptyState-BW5D2mox.js";import"./Progress-BF95UuQn.js";import"./LinearProgress-Cv_ojWxS.js";import"./ResponseErrorPanel-CejEP1Rn.js";import"./ErrorPanel-BwoyPtDM.js";import"./WarningPanel-Cvz8Lm2Y.js";import"./MarkdownContent-Dj2l94n5.js";import"./CodeSnippet-L3kDdcEu.js";import"./CopyTextButton-BIt7iUmx.js";import"./useCopyToClipboard-C-OKAUZl.js";import"./Tooltip-DWPPtYcc.js";import"./Popper-C0GxANyG.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
