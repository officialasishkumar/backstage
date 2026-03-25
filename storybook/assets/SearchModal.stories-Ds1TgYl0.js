import{j as t,Y as u,N as p,Z as g}from"./iframe-CymjdxqK.js";import{r as h}from"./plugin-DcLwqplX.js";import{S as l,u as c,a as x}from"./useSearchModal-YsHpgaVl.js";import{s as S,M}from"./api-B30Qxg8X.js";import{S as C}from"./SearchContext-CAFUE0gI.js";import{B as m}from"./Button-ChGZVjj5.js";import{m as f}from"./makeStyles-BMXXhCWz.js";import{D as j,a as y,b as B}from"./DialogTitle-D_laCqLI.js";import{B as D}from"./Box-D8DjMEPG.js";import{S as n}from"./Grid-Dr2ljIC_.js";import{S as I}from"./SearchType-BPkyyH7J.js";import{L as G}from"./List-Dvm8L6Yt.js";import{H as R}from"./DefaultResultListItem-BQwnf3Bd.js";import{w as k}from"./appWrappers-CKqDR5XN.js";import{SearchBar as v}from"./SearchBar-d8Qpcj_j.js";import{S as T}from"./SearchResult-BDJai0a8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2oLZzr4.js";import"./Plugin-DwxBsvr9.js";import"./componentData-C0LwwTGy.js";import"./useAnalytics-Du0UI_Xd.js";import"./useApp-uGimLtOi.js";import"./useRouteRef-zbd3zpRI.js";import"./index-BW-EXu7a.js";import"./ArrowForward-II7Je_tF.js";import"./translation-DzY3k_Lz.js";import"./Page-XJW9BGSO.js";import"./useMediaQuery-CU0cqV-i.js";import"./Divider-Dgrp-7AZ.js";import"./ArrowBackIos-5NQSuLwo.js";import"./ArrowForwardIos-OnA8Yv3E.js";import"./translation-I7QVreNK.js";import"./lodash-DJdMBrbC.js";import"./useAsync-DNPZfGZ5.js";import"./useMountedState-BFsHBQyj.js";import"./Modal-BEQjsWT4.js";import"./Portal-D2IDO7m8.js";import"./Backdrop-Bc6HN8WC.js";import"./styled-DoCAq6vJ.js";import"./ExpandMore-CbpUGRb_.js";import"./AccordionDetails-CoTvCA3a.js";import"./index-B9sM2jn7.js";import"./Collapse-CN7KcbzR.js";import"./ListItem-CWxGd75q.js";import"./ListContext-uUolaWCt.js";import"./ListItemIcon-kIsQqvPq.js";import"./ListItemText-BrOCm4C7.js";import"./Tabs-Cm8wyDvj.js";import"./KeyboardArrowRight-Ml3-Bcah.js";import"./FormLabel-DcgCwNfW.js";import"./formControlState-BB3acsDy.js";import"./InputLabel-0YdsTb6a.js";import"./Select-BKgwaXcA.js";import"./Popover-Dv66xU2X.js";import"./MenuItem-D0Ubuuoo.js";import"./Checkbox-CxOUcPtk.js";import"./SwitchBase-BNv2-25c.js";import"./Chip-fYqYlzu7.js";import"./Link-D1VqSDh4.js";import"./index-BQPBeHo1.js";import"./WebStorage-D7ewBRR_.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BH1nonIT.js";import"./useIsomorphicLayoutEffect-rE2UtcSW.js";import"./AppThemeApi-CCLkHGzt.js";import"./BUIProvider-B08yKp77.js";import"./openLink-CvTgs9Lx.js";import"./Search-Rc2_LP4h.js";import"./useDebounce-D7JfOOYO.js";import"./InputAdornment-nzN2s09-.js";import"./TextField-CPODLCmn.js";import"./useElementFilter-CpjiBzJD.js";import"./EmptyState-BqnIB-Jn.js";import"./Progress-08hZ-4q5.js";import"./LinearProgress-DcpbsAyi.js";import"./ResponseErrorPanel-BFsyEUiK.js";import"./ErrorPanel-SaJ0LFD4.js";import"./WarningPanel-B5NvOH5N.js";import"./MarkdownContent-O4wOoOgF.js";import"./CodeSnippet-CffUxl3a.js";import"./CopyTextButton-BGfayOFy.js";import"./useCopyToClipboard-Dp_HjSkN.js";import"./Tooltip-DLsEhiTi.js";import"./Popper-BN6j66__.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
