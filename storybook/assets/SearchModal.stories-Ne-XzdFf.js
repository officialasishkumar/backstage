import{j as t,a2 as u,V as p,a3 as g}from"./iframe-zPAYUdEu.js";import{r as h}from"./plugin-DZVJ8KKB.js";import{S as l,u as c,a as x}from"./useSearchModal-Dtv9X7eK.js";import{s as S,M}from"./api-D7o85IEZ.js";import{S as C}from"./SearchContext-Dc9_fiNy.js";import{B as m}from"./Button-C6inPv2p.js";import{m as f}from"./makeStyles-novWPxOA.js";import{D as j,a as y,b as B}from"./DialogTitle-Cn50KsV3.js";import{B as D}from"./Box-xRNo1G5I.js";import{S as n}from"./Grid-BhIWWG4z.js";import{S as I}from"./SearchType-CSTPKz8c.js";import{L as G}from"./List-Blmd7r0h.js";import{H as R}from"./DefaultResultListItem-CuI8oYq1.js";import{w as k}from"./appWrappers-CyGM0G9r.js";import{SearchBar as v}from"./SearchBar-CGW2NAIu.js";import{S as T}from"./SearchResult-BqsLihB8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DGQdhPq3.js";import"./Plugin-D4lbcOvx.js";import"./componentData-t9Gbpb6x.js";import"./useAnalytics-D1Ni702Z.js";import"./useApp-CLCQ45db.js";import"./useRouteRef-BuSU5aIu.js";import"./ArrowForward-Dt9JPa6C.js";import"./translation-_k4hqlN6.js";import"./Page-B9mMggpD.js";import"./useMediaQuery-DSgMbrvl.js";import"./Divider-cmuo_SfV.js";import"./ArrowBackIos-R4AwmhFz.js";import"./ArrowForwardIos-BL5qY6Pp.js";import"./translation-C6jueigP.js";import"./lodash-BrIyKjTz.js";import"./useAsync--LCD2HHX.js";import"./useMountedState-Dc-ywtxV.js";import"./Modal-Cb_IbwSz.js";import"./Portal-ceA7f9a1.js";import"./Backdrop-S1DQO7z3.js";import"./styled-3vIHv08M.js";import"./ExpandMore-SB0-MkPN.js";import"./AccordionDetails-zwaLsRDJ.js";import"./index-B9sM2jn7.js";import"./Collapse-Cs7yEyQl.js";import"./ListItem-YzTMx7m-.js";import"./ListContext-CTsHD7ZV.js";import"./ListItemIcon-Ctc9dwvx.js";import"./ListItemText-JWVeunNl.js";import"./Tabs-49N9J1A7.js";import"./KeyboardArrowRight-ByPn1ywg.js";import"./FormLabel-DLUr_v9K.js";import"./formControlState-BGvilFse.js";import"./InputLabel-CMAx8AjN.js";import"./Select-DPNYgzNQ.js";import"./Popover-DXqpzK7c.js";import"./MenuItem-p0WEh-AH.js";import"./Checkbox-UEzFPklJ.js";import"./SwitchBase-1IuyHTuA.js";import"./Chip-CbocsO6Q.js";import"./Link-Cpe82tDX.js";import"./index-DsHuEjY0.js";import"./WebStorage-C59k_2-p.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CJ1HAHb6.js";import"./useIsomorphicLayoutEffect-DsJAhsMf.js";import"./AppThemeApi-m0ZHBHRS.js";import"./BUIProvider-YYza03_H.js";import"./openLink-CpupEye9.js";import"./Search-vxbuw9ol.js";import"./useDebounce-CyN0wFfn.js";import"./InputAdornment-D8KmwFNZ.js";import"./TextField-D84vFrbv.js";import"./useElementFilter-BSyxuz9Y.js";import"./EmptyState-BsmCH-sG.js";import"./Progress-CPq4-pxT.js";import"./LinearProgress-BkYd-cLr.js";import"./ResponseErrorPanel-XiPQxCtR.js";import"./ErrorPanel-D1j4lKBG.js";import"./WarningPanel-CVVeK7ix.js";import"./MarkdownContent-lvVY7zrB.js";import"./CodeSnippet-jNwDcREu.js";import"./CopyTextButton-PCmoSJV-.js";import"./useCopyToClipboard-BIwQZdmN.js";import"./Tooltip-Dv9iFuGM.js";import"./Popper-CGDdcMf9.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
