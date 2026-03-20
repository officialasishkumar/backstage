import{j as t,Y as u,N as p,Z as g}from"./iframe-D0nL_Agr.js";import{r as h}from"./plugin-Cxd-grF5.js";import{S as l,u as c,a as x}from"./useSearchModal-DMxY_tzz.js";import{s as S,M}from"./api-DK3LhVf2.js";import{S as C}from"./SearchContext-R_VcuGla.js";import{B as m}from"./Button-CRuazPnN.js";import{m as f}from"./makeStyles-CEEIeaPc.js";import{D as j,a as y,b as B}from"./DialogTitle-Dnujanb8.js";import{B as D}from"./Box-BBeBWSpp.js";import{S as n}from"./Grid-Cj5fjV2g.js";import{S as I}from"./SearchType-QzTLp4vQ.js";import{L as G}from"./List-B6josrBo.js";import{H as R}from"./DefaultResultListItem-zVOn01qz.js";import{w as k}from"./appWrappers-DpvrWMrt.js";import{SearchBar as v}from"./SearchBar-DJfTq0Bw.js";import{S as T}from"./SearchResult-DTw5fYXc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDL2X7CY.js";import"./Plugin-Baao644E.js";import"./componentData-BbYq1rWo.js";import"./useAnalytics-DHjT-X03.js";import"./useApp-D1uJ25an.js";import"./useRouteRef-D1c-R20K.js";import"./index-C_CdmF_Y.js";import"./ArrowForward-AgbFZXLk.js";import"./translation-HqAjRsKL.js";import"./Page-Bk5MCW2k.js";import"./useMediaQuery-NqjKYLwT.js";import"./Divider-DZ5_AQ1V.js";import"./ArrowBackIos-DvXSfLIU.js";import"./ArrowForwardIos-VdAmYBbq.js";import"./translation-CIFT46X8.js";import"./lodash-C8hrBFZO.js";import"./useAsync-CTfQC1T2.js";import"./useMountedState-D6h1Oxy0.js";import"./Modal-Ck9qjAe3.js";import"./Portal-CKyiLAPX.js";import"./Backdrop-DO1Fkn77.js";import"./styled-ud37gncL.js";import"./ExpandMore-DfFo8jQ4.js";import"./AccordionDetails-KA1uC9fh.js";import"./index-B9sM2jn7.js";import"./Collapse-PPyuJLE3.js";import"./ListItem-BvZ21ujD.js";import"./ListContext-Dwy-3B6k.js";import"./ListItemIcon-CmZ0brOR.js";import"./ListItemText-COKbGLw8.js";import"./Tabs-oIvxHwtd.js";import"./KeyboardArrowRight-LI0AsU4d.js";import"./FormLabel-C5tVy9qw.js";import"./formControlState-dFCIFqov.js";import"./InputLabel-BXPB6xQ5.js";import"./Select-xNfS0uZx.js";import"./Popover-kGRCMEhn.js";import"./MenuItem-5ffxRHXR.js";import"./Checkbox-D7RPZNtl.js";import"./SwitchBase-Cyj1C0-8.js";import"./Chip-CCEWQCZv.js";import"./Link-ChRPIsYf.js";import"./index-DZW9dhqm.js";import"./WebStorage-uwUF_EA0.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";import"./Search-BepMK2h-.js";import"./useDebounce-CqB89-bs.js";import"./InputAdornment-DRvhcuPm.js";import"./TextField-BInICJ8b.js";import"./useElementFilter-CRoBkzp2.js";import"./EmptyState-ubhZd0RR.js";import"./Progress-giOd2CXs.js";import"./LinearProgress-BrUf00qz.js";import"./ResponseErrorPanel-CNEtCLFX.js";import"./ErrorPanel-BVtOabjF.js";import"./WarningPanel-CplvYfF5.js";import"./MarkdownContent-DMq6MwFY.js";import"./CodeSnippet-B_McEZEi.js";import"./CopyTextButton-3ruE736v.js";import"./useCopyToClipboard-BufagX_d.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
