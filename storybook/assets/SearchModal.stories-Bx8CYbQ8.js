import{j as t,Y as u,N as p,Z as g}from"./iframe-CXYB6t6D.js";import{r as h}from"./plugin-C2V1cXyv.js";import{S as l,u as c,a as x}from"./useSearchModal-BlcB1gjW.js";import{s as S,M}from"./api-CB6iKWxI.js";import{S as C}from"./SearchContext-LELAUXf0.js";import{B as m}from"./Button-BTn6o9qz.js";import{m as f}from"./makeStyles-D9Wml1Qb.js";import{D as j,a as y,b as B}from"./DialogTitle-CO9apUw-.js";import{B as D}from"./Box-BBf7RVHa.js";import{S as n}from"./Grid-BOZ43D_m.js";import{S as I}from"./SearchType-DaMgJD3e.js";import{L as G}from"./List-DyaSGBv-.js";import{H as R}from"./DefaultResultListItem-UAgG4N_8.js";import{w as k}from"./appWrappers-DN-PfUuB.js";import{SearchBar as v}from"./SearchBar-Bs__hzD5.js";import{S as T}from"./SearchResult-BMuRp0yV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOoFz54S.js";import"./Plugin-C6l-3ExR.js";import"./componentData-RRXy5f2b.js";import"./useAnalytics-NJhHIdXr.js";import"./useApp-BzYXrb6N.js";import"./useRouteRef-B_p74fDp.js";import"./index-Cqb6C9TB.js";import"./ArrowForward-Bc2OfIxU.js";import"./translation-0eqFNg38.js";import"./Page-xijyx2l1.js";import"./useMediaQuery-BJu1U6Fj.js";import"./Divider-C7UoDtLG.js";import"./ArrowBackIos-R0ADSCef.js";import"./ArrowForwardIos-Cvh1ANJK.js";import"./translation-eSrDSVx-.js";import"./lodash-KoVF5YkZ.js";import"./useAsync-D5fQAFTG.js";import"./useMountedState-jjFDpjDr.js";import"./Modal-Cs-JCA8a.js";import"./Portal-DIGrr39M.js";import"./Backdrop-6JaTj0tK.js";import"./styled-C7sk4Fig.js";import"./ExpandMore-wJY1be09.js";import"./AccordionDetails-D5N7iZ82.js";import"./index-B9sM2jn7.js";import"./Collapse-CvWd8YhK.js";import"./ListItem-BmXO2GVD.js";import"./ListContext-CJZGy2dL.js";import"./ListItemIcon-3jq6WzQ6.js";import"./ListItemText-3WwYXMGs.js";import"./Tabs-DjDPaSwF.js";import"./KeyboardArrowRight-CHgcT-k7.js";import"./FormLabel-C2WyFgQi.js";import"./formControlState-C3eNDS3T.js";import"./InputLabel-nq5X6lYU.js";import"./Select-CC_w7yQI.js";import"./Popover-dtZt9s_G.js";import"./MenuItem-zW6igLas.js";import"./Checkbox-CT8SmImG.js";import"./SwitchBase-C5VeSIGR.js";import"./Chip-DxcuppLR.js";import"./Link-DM7aw648.js";import"./index-D1SHR_vt.js";import"./WebStorage-cO74hvRt.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-D0IPRkqN.js";import"./useIsomorphicLayoutEffect-DpO0wsP6.js";import"./AppThemeApi-DrEZGmPR.js";import"./BUIProvider-s_nHa8HH.js";import"./openLink-BHEYgROE.js";import"./Search-D84uBNYz.js";import"./useDebounce-DrPEVMjS.js";import"./InputAdornment-BzG3knsf.js";import"./TextField-C5jk1uqh.js";import"./useElementFilter-Dy_PuGZ0.js";import"./EmptyState-DijER61Y.js";import"./Progress-XanJcQq3.js";import"./LinearProgress-4NyvgcOI.js";import"./ResponseErrorPanel-CbucudAC.js";import"./ErrorPanel-Bql8UBdZ.js";import"./WarningPanel-DuINCOe-.js";import"./MarkdownContent-BiJx0EnO.js";import"./CodeSnippet-BJO83rcO.js";import"./CopyTextButton-BIsYxFWY.js";import"./useCopyToClipboard-DSM_b8Fw.js";import"./Tooltip-BKoVPHwY.js";import"./Popper-BQbRqMDd.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
