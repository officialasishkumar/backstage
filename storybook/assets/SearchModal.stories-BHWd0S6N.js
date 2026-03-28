import{j as t,a2 as u,V as p,a3 as g}from"./iframe-DIo-SVbu.js";import{r as h}from"./plugin-C169tTFd.js";import{S as l,u as c,a as x}from"./useSearchModal-W1tZeqwa.js";import{s as S,M}from"./api-KlxuL8JE.js";import{S as C}from"./SearchContext-DFouf2wk.js";import{B as m}from"./Button-CKN9jD3U.js";import{m as f}from"./makeStyles-DQU7Dv0P.js";import{D as j,a as y,b as B}from"./DialogTitle-B_TdlDRv.js";import{B as D}from"./Box-DSdsOjrk.js";import{S as n}from"./Grid-CQTc9qXc.js";import{S as I}from"./SearchType-CoCg0nw5.js";import{L as G}from"./List-DIbhVy0B.js";import{H as R}from"./DefaultResultListItem-BaslxeM_.js";import{w as k}from"./appWrappers-DR3WgLiZ.js";import{SearchBar as v}from"./SearchBar-CsYkvWCu.js";import{S as T}from"./SearchResult-CkSYjcHD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVRMfSGy.js";import"./Plugin-BiTAoXGr.js";import"./componentData-Cq2oJfSV.js";import"./useAnalytics-Dz8yJH5J.js";import"./useApp-DoXX_S3p.js";import"./useRouteRef-DWfPmhX9.js";import"./ArrowForward-D_cz6pFK.js";import"./translation-DrJDz4rc.js";import"./Page-D4AJVexu.js";import"./useMediaQuery-DSyBS49A.js";import"./Divider-Bv1BaoB-.js";import"./ArrowBackIos-DDik1qTj.js";import"./ArrowForwardIos-DTNcSHTI.js";import"./translation-qZhn7YJ9.js";import"./lodash-CorumTZI.js";import"./useAsync-CZHEyuUs.js";import"./useMountedState-CYCgoyDm.js";import"./Modal-D5veMRiH.js";import"./Portal-CvYRjmi_.js";import"./Backdrop-CDA57Xua.js";import"./styled-BsApB3tE.js";import"./ExpandMore-BgSlDM6I.js";import"./AccordionDetails-q-sTEdd4.js";import"./index-B9sM2jn7.js";import"./Collapse-BsSPbFVQ.js";import"./ListItem-B48sv7Dp.js";import"./ListContext-maWUp7BP.js";import"./ListItemIcon-C7UESPSZ.js";import"./ListItemText-Bj8x_bGs.js";import"./Tabs-Ruf0F0A2.js";import"./KeyboardArrowRight-zxyi5K4F.js";import"./FormLabel-dBpgxstR.js";import"./formControlState-BxS7n7YR.js";import"./InputLabel-KPIiug0-.js";import"./Select-Dd91sM0K.js";import"./Popover-CgcEC2FX.js";import"./MenuItem-DGiznast.js";import"./Checkbox-hajP45SL.js";import"./SwitchBase-BrHy_X0B.js";import"./Chip-DqUZQtMs.js";import"./Link-nV2wBi6-.js";import"./index-BWhcP_hn.js";import"./WebStorage-BK2KlcPz.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-rc5V7nNm.js";import"./useIsomorphicLayoutEffect-DFFlChJX.js";import"./AppThemeApi-napO7fl3.js";import"./BUIProvider-CiWIfurT.js";import"./openLink-Cz27Urod.js";import"./Search-GQbCIAb9.js";import"./useDebounce-DeyQNAGS.js";import"./InputAdornment-CFlPfHwo.js";import"./TextField-M1KJEkWw.js";import"./useElementFilter-BHjcvPuv.js";import"./EmptyState-NxxFH6k5.js";import"./Progress-oTgYKPOB.js";import"./LinearProgress-CUHxQVkv.js";import"./ResponseErrorPanel-BgI62Ijw.js";import"./ErrorPanel-BmaIqUxn.js";import"./WarningPanel-BOHyomdW.js";import"./MarkdownContent-ZKdzag3g.js";import"./CodeSnippet-CeX8qwwK.js";import"./CopyTextButton-DPzAxb5N.js";import"./useCopyToClipboard-Ch1BFfQF.js";import"./Tooltip-RSYyjwWd.js";import"./Popper-Mh-qpcao.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},mo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
