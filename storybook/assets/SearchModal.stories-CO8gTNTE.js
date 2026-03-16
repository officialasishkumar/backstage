import{j as t,W as u,K as p,X as g}from"./iframe-D7TnLv8A.js";import{r as h}from"./plugin-CwCBwn83.js";import{S as l,u as c,a as x}from"./useSearchModal-Bj7POH6X.js";import{s as S,M}from"./api-Bck3e3eh.js";import{S as C}from"./SearchContext-BJC5cRrY.js";import{B as m}from"./Button-CE3035Es.js";import{m as f}from"./makeStyles-BuB2Q7_j.js";import{D as j,a as y,b as B}from"./DialogTitle-BFkZ5wwj.js";import{B as D}from"./Box-z0c3JxTt.js";import{S as n}from"./Grid-iTO1Arnu.js";import{S as I}from"./SearchType-oPdufYMs.js";import{L as G}from"./List-L4X_xhy8.js";import{H as R}from"./DefaultResultListItem-BjKXMcZZ.js";import{w as k}from"./appWrappers-CzDE8X0z.js";import{SearchBar as v}from"./SearchBar-4lbiFSRB.js";import{S as T}from"./SearchResult-CPqFBluN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CYa1F7xo.js";import"./Plugin-CnqN4-NH.js";import"./componentData-CKizbvzi.js";import"./useAnalytics-AC0VHxKR.js";import"./useApp-CHEBI3qn.js";import"./useRouteRef-DhCUxsXs.js";import"./index-MOf-tiv5.js";import"./ArrowForward-BCJT3jut.js";import"./translation-3n4YbHPK.js";import"./Page-NBjC0kYZ.js";import"./useMediaQuery-BSac5Qyg.js";import"./Divider-3f_PtMhJ.js";import"./ArrowBackIos-DsHtxZtB.js";import"./ArrowForwardIos-Dk46290l.js";import"./translation-BQ6sB8rw.js";import"./lodash-Dr039tkm.js";import"./useAsync-BF16R5Yc.js";import"./useMountedState-UFQmEtok.js";import"./Modal-C7Rg7DHg.js";import"./Portal-DYix9A2M.js";import"./Backdrop-DKoHXC8T.js";import"./styled-DHDYZuir.js";import"./ExpandMore-tmqJCok-.js";import"./AccordionDetails-CKMgSUof.js";import"./index-B9sM2jn7.js";import"./Collapse-DvLzuaJg.js";import"./ListItem-B56tmsM_.js";import"./ListContext-UWf6-YWs.js";import"./ListItemIcon-ChcR3-72.js";import"./ListItemText-YEWqdcQr.js";import"./Tabs-DGGKBbjq.js";import"./KeyboardArrowRight-CWtDWfEy.js";import"./FormLabel-BAFdOtGL.js";import"./formControlState-DfT0zPdM.js";import"./InputLabel-BPg87a4U.js";import"./Select-DAo5xCK3.js";import"./Popover-DquKNcU4.js";import"./MenuItem-BY4Uox8-.js";import"./Checkbox-CbIfS5vI.js";import"./SwitchBase-BWkzYOzx.js";import"./Chip-XSh4-JCT.js";import"./Link-BEBsz3Of.js";import"./index-DXGAHSD1.js";import"./useObservable-ynqU1pYv.js";import"./useIsomorphicLayoutEffect-mwHv5vMT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./Search-HbiZPxaS.js";import"./useDebounce-CrD8iLHM.js";import"./InputAdornment-DabAGtNG.js";import"./TextField-0Ea0yX-W.js";import"./useElementFilter-DOXFq9W3.js";import"./EmptyState-bIqn-3Hf.js";import"./Progress-Cnbum42a.js";import"./LinearProgress-B5lFkoVT.js";import"./ResponseErrorPanel-GjYXWxg0.js";import"./ErrorPanel-DfdT70Ao.js";import"./WarningPanel-XIrX9BMG.js";import"./MarkdownContent-DmO9VB6w.js";import"./CodeSnippet-DnTry-GV.js";import"./CopyTextButton-CM-FUSii.js";import"./useCopyToClipboard-LvrDvEiG.js";import"./Tooltip-C7iiPh4c.js";import"./Popper-2BigagmP.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},io={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
}`,...r.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{r as CustomModal,e as Default,lo as __namedExportsOrder,io as default};
