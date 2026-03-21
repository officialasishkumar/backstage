import{j as t,Y as u,N as p,Z as g}from"./iframe-UJriCXVl.js";import{r as h}from"./plugin-fx-_1HRS.js";import{S as l,u as c,a as x}from"./useSearchModal-CyTVKcDm.js";import{s as S,M}from"./api-B7VeJZLe.js";import{S as C}from"./SearchContext-BXel1g7A.js";import{B as m}from"./Button-c36bynCt.js";import{m as f}from"./makeStyles-njdNJK3x.js";import{D as j,a as y,b as B}from"./DialogTitle-DL2b-85Z.js";import{B as D}from"./Box-C1by_hut.js";import{S as n}from"./Grid-D6wRU41f.js";import{S as I}from"./SearchType-CKN-J5Eq.js";import{L as G}from"./List-DSt3hz_0.js";import{H as R}from"./DefaultResultListItem-BHQ1ghp9.js";import{w as k}from"./appWrappers-C5-t193K.js";import{SearchBar as v}from"./SearchBar-N13CGYdi.js";import{S as T}from"./SearchResult-w08u0C49.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKaM2xsk.js";import"./Plugin-iqe1oWeO.js";import"./componentData-CaZ0Zp9-.js";import"./useAnalytics-CEoER_mo.js";import"./useApp-grD3_ewi.js";import"./useRouteRef-DdNZogT9.js";import"./index-BSYbiaN1.js";import"./ArrowForward-DimrGAqF.js";import"./translation-CF4DgCeN.js";import"./Page-R9dApg72.js";import"./useMediaQuery-C5Hz2KM1.js";import"./Divider-CdxnWJl9.js";import"./ArrowBackIos-m_f9gJgj.js";import"./ArrowForwardIos-Dj0BA8Yf.js";import"./translation-BQLc27w0.js";import"./lodash-DkQ6ZSlp.js";import"./useAsync-BEYvHol3.js";import"./useMountedState-CWdL38Tt.js";import"./Modal-ZPU6ryA9.js";import"./Portal-C6ZN2ix7.js";import"./Backdrop-BnsYyBfG.js";import"./styled-DSaNCCR9.js";import"./ExpandMore-CkvIIUOp.js";import"./AccordionDetails-C8OigTMk.js";import"./index-B9sM2jn7.js";import"./Collapse-4SnexBkv.js";import"./ListItem-Bgv2V2Pm.js";import"./ListContext-n1hCo968.js";import"./ListItemIcon-DCEA2hpR.js";import"./ListItemText-BVXCXsbw.js";import"./Tabs-BmBX32AY.js";import"./KeyboardArrowRight-BTpR2ynx.js";import"./FormLabel-lONzkXwT.js";import"./formControlState-6VXbSKn5.js";import"./InputLabel-Ca891Cuu.js";import"./Select-Dl4Pnirk.js";import"./Popover-DQ81K7yD.js";import"./MenuItem-Bkzy8HUL.js";import"./Checkbox-B9cDwnpm.js";import"./SwitchBase-CZbcpaxf.js";import"./Chip-sTx1PZCN.js";import"./Link-BQi5yIop.js";import"./index-C960_4ke.js";import"./WebStorage-DHFLt1me.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BfEDm6ba.js";import"./useIsomorphicLayoutEffect-q820unle.js";import"./AppThemeApi-DlmVHrbI.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";import"./Search-0hitG77X.js";import"./useDebounce--MAmhnYS.js";import"./InputAdornment-DIBbg9ES.js";import"./TextField-CqeZPAT4.js";import"./useElementFilter-GU645A_K.js";import"./EmptyState-Cv0Z_Gef.js";import"./Progress-OiVyHNws.js";import"./LinearProgress-DpIYOt-C.js";import"./ResponseErrorPanel-DooAL5lX.js";import"./ErrorPanel-D67Eplqz.js";import"./WarningPanel-D4bdu5Z5.js";import"./MarkdownContent-D2qb8k4F.js";import"./CodeSnippet-BTN20w8A.js";import"./CopyTextButton-BCmP3F2H.js";import"./useCopyToClipboard-DE6RI971.js";import"./Tooltip-3VXaZMhT.js";import"./Popper-rQQJdySn.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
