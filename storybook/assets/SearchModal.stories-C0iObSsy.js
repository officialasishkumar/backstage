import{j as t,Y as u,N as p,Z as g}from"./iframe-Cvt_X182.js";import{r as h}from"./plugin-aozKvSr1.js";import{S as l,u as c,a as x}from"./useSearchModal-H1jNNKU8.js";import{s as S,M}from"./api-Ct0WwyAJ.js";import{S as C}from"./SearchContext-DRDGykW7.js";import{B as m}from"./Button-C0VsjUtj.js";import{m as f}from"./makeStyles-C2GLBazK.js";import{D as j,a as y,b as B}from"./DialogTitle-D73PriqP.js";import{B as D}from"./Box-X6UqKYV6.js";import{S as n}from"./Grid-Fa5sAGyT.js";import{S as I}from"./SearchType-BMyutWDj.js";import{L as G}from"./List-O0e_0tnH.js";import{H as R}from"./DefaultResultListItem-B2hkonSp.js";import{w as k}from"./appWrappers-B2OA6H91.js";import{SearchBar as v}from"./SearchBar-DTCdQqrE.js";import{S as T}from"./SearchResult-DowLHvBT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CT0sneWy.js";import"./Plugin-DeOa7ncn.js";import"./componentData-B2P8fcq6.js";import"./useAnalytics-C-sF4Up2.js";import"./useApp-B7teYX-A.js";import"./useRouteRef-uxBTgpI6.js";import"./index-CGcTZ4mm.js";import"./ArrowForward-7O40q99p.js";import"./translation-BFuJyZTd.js";import"./Page-CMzwQhXk.js";import"./useMediaQuery-BLiIAlr1.js";import"./Divider-BOGM6Gyr.js";import"./ArrowBackIos-BWRC4kbb.js";import"./ArrowForwardIos-BJU26l8G.js";import"./translation-Ru7YunwF.js";import"./lodash-wfJ_V-c-.js";import"./useAsync-KSm2sTfX.js";import"./useMountedState-Cfd5-rEZ.js";import"./Modal-BZN5-otl.js";import"./Portal-Br5yZBqf.js";import"./Backdrop-ByMb8HAy.js";import"./styled-It9bTCH_.js";import"./ExpandMore-DImPRkCV.js";import"./AccordionDetails-C9bcmhxI.js";import"./index-B9sM2jn7.js";import"./Collapse-BeBUcSgJ.js";import"./ListItem-DypDUMAf.js";import"./ListContext-jbH0b5HF.js";import"./ListItemIcon-Ces7t4NH.js";import"./ListItemText-DmBGe6-U.js";import"./Tabs-Yu8kBOJu.js";import"./KeyboardArrowRight-CZBdnZ5e.js";import"./FormLabel-OJUEK7aP.js";import"./formControlState-DodZt-1O.js";import"./InputLabel-BKmaQbZe.js";import"./Select-BXWd9fdQ.js";import"./Popover-DtxdJ-Yw.js";import"./MenuItem-7SOL2jCn.js";import"./Checkbox-DXwGkvwp.js";import"./SwitchBase-Bq_ETcUt.js";import"./Chip-B8MX3gag.js";import"./Link-Cm_XN3RO.js";import"./index-4OD0R2yY.js";import"./WebStorage-B3jyENY0.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DOJIJuXx.js";import"./useIsomorphicLayoutEffect-csaJIBTD.js";import"./AppThemeApi-CcIx1JpM.js";import"./BUIProvider-BemZ3N2Z.js";import"./openLink-BX21WjU1.js";import"./Search-D5puo9gQ.js";import"./useDebounce-Bx1-tgvV.js";import"./InputAdornment-D0HZfjSL.js";import"./TextField-DsBwA7KZ.js";import"./useElementFilter-Bm4ApEod.js";import"./EmptyState-DK7AYhDp.js";import"./Progress-D-YRad6P.js";import"./LinearProgress-S5zZC2Vi.js";import"./ResponseErrorPanel-Cno8fijB.js";import"./ErrorPanel-BiLTkN5s.js";import"./WarningPanel-Bl5SYjgK.js";import"./MarkdownContent-DDOh-Y1m.js";import"./CodeSnippet-PXww_Bmz.js";import"./CopyTextButton-DBxqQh7v.js";import"./useCopyToClipboard-MR472fCQ.js";import"./Tooltip-B659PVdL.js";import"./Popper-DOugWYTx.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
