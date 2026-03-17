import{j as t,Y as u,N as p,Z as g}from"./iframe-AYVAkLn2.js";import{r as h}from"./plugin-CSutuGMn.js";import{S as l,u as c,a as x}from"./useSearchModal-CbZ8aCdI.js";import{s as S,M}from"./api-BGpow7dR.js";import{S as C}from"./SearchContext-CeF0_K1I.js";import{B as m}from"./Button-ChbwWH3e.js";import{m as f}from"./makeStyles-DiUzlV7t.js";import{D as j,a as y,b as B}from"./DialogTitle-CHumVsq9.js";import{B as D}from"./Box-D2M4kuqq.js";import{S as n}from"./Grid-ByzVJJnk.js";import{S as I}from"./SearchType-jOBlgosG.js";import{L as G}from"./List-CeeewVqa.js";import{H as R}from"./DefaultResultListItem-DLGLCJ3h.js";import{w as k}from"./appWrappers-B5DuOoBi.js";import{SearchBar as v}from"./SearchBar-B8T_qWfe.js";import{S as T}from"./SearchResult-DrGNW-Sh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cmwo8b_6.js";import"./Plugin-B1YkPhCU.js";import"./componentData-0L54AS5C.js";import"./useAnalytics-BDuNGi_L.js";import"./useApp-BmNX3I2k.js";import"./useRouteRef-DiCt12AB.js";import"./index-B51ZAw-h.js";import"./ArrowForward-CPT76q_B.js";import"./translation-DAAIj5jv.js";import"./Page-_eZ9TY5I.js";import"./useMediaQuery-CYqOyAVL.js";import"./Divider-CNyRbhte.js";import"./ArrowBackIos-iyki-ZRL.js";import"./ArrowForwardIos-CPgrpfLU.js";import"./translation-Csuw9D6D.js";import"./lodash-K-yyiTG_.js";import"./useAsync-vKq7afUQ.js";import"./useMountedState-DCewMNXE.js";import"./Modal-DAoau9we.js";import"./Portal-BKv0oT2g.js";import"./Backdrop-Bcr99bXo.js";import"./styled-arALQvZ3.js";import"./ExpandMore-C3pQ0Sn1.js";import"./AccordionDetails-7X1wxRUQ.js";import"./index-B9sM2jn7.js";import"./Collapse-B9jtcX64.js";import"./ListItem-bQqWIE31.js";import"./ListContext-BEmmok3M.js";import"./ListItemIcon-BvO9CFRe.js";import"./ListItemText-CzSq17KJ.js";import"./Tabs-C1G-ywBb.js";import"./KeyboardArrowRight-BiFCUHxs.js";import"./FormLabel-LcgWu4Dd.js";import"./formControlState-CmMZ7Nm0.js";import"./InputLabel-N-Z8TbgB.js";import"./Select-CoXzv3bu.js";import"./Popover-I1yJX9mq.js";import"./MenuItem-CmdK5O1C.js";import"./Checkbox-DkvpM4bt.js";import"./SwitchBase-OJt3qWsX.js";import"./Chip-C2U8qs4i.js";import"./Link-idfQxFMB.js";import"./index-EB-9jFEh.js";import"./WebStorage-D-oUViat.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DXQcsefc.js";import"./useIsomorphicLayoutEffect-DwKCTKAX.js";import"./AppThemeApi-CL6iFQID.js";import"./BUIProvider-DrYmLl9u.js";import"./openLink-LeSehfZZ.js";import"./Search-BUe3uPyS.js";import"./useDebounce-Cobgomse.js";import"./InputAdornment-CtjTSDQs.js";import"./TextField-B1j-40c1.js";import"./useElementFilter-BK4L7h2v.js";import"./EmptyState-B4QxGTgm.js";import"./Progress-WCKsgDKi.js";import"./LinearProgress-BtHnTzO7.js";import"./ResponseErrorPanel-DdKSPr1U.js";import"./ErrorPanel-BY2IhfIo.js";import"./WarningPanel-BoJ9aoYA.js";import"./MarkdownContent-DEOg2-2Q.js";import"./CodeSnippet-7gg8gJBG.js";import"./CopyTextButton-DGh4VrDV.js";import"./useCopyToClipboard-BtsQ6jti.js";import"./Tooltip-Ddm6Pg3U.js";import"./Popper-DnG1iggd.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
