import{j as t,W as u,K as p,X as g}from"./iframe-CgH1me10.js";import{r as h}from"./plugin-DZ8yQwMj.js";import{S as l,u as c,a as x}from"./useSearchModal-5wfIbRR9.js";import{s as S,M}from"./api-DpORWCH6.js";import{S as C}from"./SearchContext-B0-Pz4G8.js";import{B as m}from"./Button-C1eF25RY.js";import{m as f}from"./makeStyles-DDQHR9TF.js";import{D as j,a as y,b as B}from"./DialogTitle-CCMkF_r7.js";import{B as D}from"./Box-DjOcM7Al.js";import{S as n}from"./Grid-JeE2fzwn.js";import{S as I}from"./SearchType-BosnydBm.js";import{L as G}from"./List-BhhAC_dw.js";import{H as R}from"./DefaultResultListItem-WqdNRPYY.js";import{w as k}from"./appWrappers-NpBGgNln.js";import{SearchBar as v}from"./SearchBar-zP_FclRa.js";import{S as T}from"./SearchResult-aTRNn7gI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C9svulhu.js";import"./Plugin-_EKcKf6m.js";import"./componentData-BVRf5VfY.js";import"./useAnalytics-B6XkFFfD.js";import"./useApp-SFhNxW0M.js";import"./useRouteRef-ffn0kdYD.js";import"./index-DAoZozbk.js";import"./ArrowForward-DcJMzp6C.js";import"./translation-CKSmkGzU.js";import"./Page-B9driqAF.js";import"./useMediaQuery-BJFoZbIy.js";import"./Divider-D9-Cdbnj.js";import"./ArrowBackIos-yH-Wb2JE.js";import"./ArrowForwardIos-CcOSDFDL.js";import"./translation-DlhKr3Dq.js";import"./lodash-DA8KCwpH.js";import"./useAsync-Dh_jC-Gf.js";import"./useMountedState-BYet7bvZ.js";import"./Modal-C3QCofUv.js";import"./Portal-BSxkgYw7.js";import"./Backdrop--dbYxTCA.js";import"./styled-HKXiKRGh.js";import"./ExpandMore-DWFGPItE.js";import"./AccordionDetails-DW7fvu2B.js";import"./index-B9sM2jn7.js";import"./Collapse-IKUDMkEE.js";import"./ListItem-jQhSzGlz.js";import"./ListContext-D3q8nz-e.js";import"./ListItemIcon-DUFGZwl9.js";import"./ListItemText-BN7cn10S.js";import"./Tabs-CNJmUrFp.js";import"./KeyboardArrowRight-uigCDhLe.js";import"./FormLabel-DTgdw1Sg.js";import"./formControlState-D1o5e8Uj.js";import"./InputLabel-CiyB4rX_.js";import"./Select-CLqYiMG3.js";import"./Popover-C-sXbnMV.js";import"./MenuItem-DuJuCu1q.js";import"./Checkbox-B4rg_fY4.js";import"./SwitchBase-DkmMO63a.js";import"./Chip-Cu7Zb9fo.js";import"./Link-CyQAlTHt.js";import"./index-BEl4_Iip.js";import"./useObservable-92K9thiA.js";import"./useIsomorphicLayoutEffect-byGVp8_z.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./Search-DTiRenbv.js";import"./useDebounce-C0qohk-I.js";import"./InputAdornment-DRFBXAf7.js";import"./TextField-CLLVyioj.js";import"./useElementFilter-4C5PV6I0.js";import"./EmptyState-Dn7UM0OP.js";import"./Progress-W64aiN2_.js";import"./LinearProgress-BRdHiQS9.js";import"./ResponseErrorPanel-BWiH1C7n.js";import"./ErrorPanel-B8hHJvwP.js";import"./WarningPanel-BeEkkwRK.js";import"./MarkdownContent-CbJakm8B.js";import"./CodeSnippet-B7ZDF3Em.js";import"./CopyTextButton-g--1H6mO.js";import"./useCopyToClipboard-DDzhJDvq.js";import"./Tooltip-CuoRQ5pr.js";import"./Popper-Beqw8ii1.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},io={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
