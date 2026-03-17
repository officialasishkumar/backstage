import{j as t,Y as u,M as p,Z as g}from"./iframe-2DflYetR.js";import{r as h}from"./plugin-DnZcSn7D.js";import{S as l,u as c,a as x}from"./useSearchModal-_3-972d9.js";import{s as S,M}from"./api-C870QJqC.js";import{S as C}from"./SearchContext-D4LByyH_.js";import{B as m}from"./Button-BUw_EM6g.js";import{m as f}from"./makeStyles-B-9IZuRv.js";import{D as j,a as y,b as B}from"./DialogTitle-30dI33Cs.js";import{B as D}from"./Box-Bu7Xw873.js";import{S as n}from"./Grid-DxUCjvP_.js";import{S as I}from"./SearchType-CkvdNR3-.js";import{L as G}from"./List-Csw5dc-q.js";import{H as R}from"./DefaultResultListItem-VIRkjvWV.js";import{w as k}from"./appWrappers-DN6vgvpl.js";import{SearchBar as v}from"./SearchBar-DVK-0rCM.js";import{S as T}from"./SearchResult-DLI3EmJv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaV76UVV.js";import"./Plugin-DYvtYFMk.js";import"./componentData-Cq1ZACX6.js";import"./useAnalytics-D8PbdUhp.js";import"./useApp-YlOXCksD.js";import"./useRouteRef-DPTNTSna.js";import"./index-DAw4AdQ5.js";import"./ArrowForward-sBVljDhP.js";import"./translation-QQWVXUCP.js";import"./Page-BZ2fb4cC.js";import"./useMediaQuery-C6NHjMRx.js";import"./Divider-B0vxDpCl.js";import"./ArrowBackIos-Bvawo2oA.js";import"./ArrowForwardIos-shh2gxX2.js";import"./translation-DX2UsFFv.js";import"./lodash-BK0iUhmk.js";import"./useAsync-N8VXAn8N.js";import"./useMountedState-BmHtpzcF.js";import"./Modal-BdEpWCwy.js";import"./Portal-DXJMcYAV.js";import"./Backdrop-DHUWmnM1.js";import"./styled-DLQ9JpXT.js";import"./ExpandMore-C6w4tJN-.js";import"./AccordionDetails-B20OXQ0W.js";import"./index-B9sM2jn7.js";import"./Collapse-5EaDmK-u.js";import"./ListItem-DUio0yug.js";import"./ListContext-PWrJkRaZ.js";import"./ListItemIcon-DrXxgZOE.js";import"./ListItemText-BOj27O3W.js";import"./Tabs-Cn-J_rtw.js";import"./KeyboardArrowRight-DGvyEYs0.js";import"./FormLabel-gYBrXv-0.js";import"./formControlState-DxFSGq27.js";import"./InputLabel-EeXCSUWY.js";import"./Select-BO_fswJj.js";import"./Popover-BMF1NX8p.js";import"./MenuItem-D58Um2gb.js";import"./Checkbox-4JLVNe0B.js";import"./SwitchBase-Bipl80KT.js";import"./Chip-Bmkwg1Gm.js";import"./Link-BPkxBY7v.js";import"./index-DTvBFuUD.js";import"./useObservable-C4UWlvAt.js";import"./useIsomorphicLayoutEffect-B_v2HVpB.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-CIE9UDb1.js";import"./openLink-C7ML4eFc.js";import"./Search-CEWnfarX.js";import"./useDebounce-yA078fcp.js";import"./InputAdornment-B2JbtJuG.js";import"./TextField-B2Lhzx2D.js";import"./useElementFilter-Bc89YhvB.js";import"./EmptyState-DWM44dQv.js";import"./Progress-CTw3i2m-.js";import"./LinearProgress-DWtZr-aS.js";import"./ResponseErrorPanel-B1EjBVDe.js";import"./ErrorPanel-D-PTWf53.js";import"./WarningPanel-C5dyiNxr.js";import"./MarkdownContent-Dl_nqGPI.js";import"./CodeSnippet-Dkg0Bkyz.js";import"./CopyTextButton-CfYYSKMx.js";import"./useCopyToClipboard-BG5nGf-t.js";import"./Tooltip-D6zoDIUy.js";import"./Popper-ClGkD4o6.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},co={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
