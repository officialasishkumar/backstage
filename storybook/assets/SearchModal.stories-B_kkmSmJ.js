import{j as t,Y as u,N as p,Z as g}from"./iframe-wkUvrVVn.js";import{r as h}from"./plugin-BFs4R4lK.js";import{S as l,u as c,a as x}from"./useSearchModal-D8kT4OKc.js";import{s as S,M}from"./api-BkpX0X9M.js";import{S as C}from"./SearchContext-CnWAEsmo.js";import{B as m}from"./Button-BZq6lWJS.js";import{m as f}from"./makeStyles-D6j-HRPe.js";import{D as j,a as y,b as B}from"./DialogTitle-Dhs6MHxR.js";import{B as D}from"./Box-BPqemAJi.js";import{S as n}from"./Grid-Bu0FSGfF.js";import{S as I}from"./SearchType-DYDY2qft.js";import{L as G}from"./List-LUFk3ZfG.js";import{H as R}from"./DefaultResultListItem-D2C1aBXa.js";import{w as k}from"./appWrappers-Bu5nTIfu.js";import{SearchBar as v}from"./SearchBar-BhK1c2m7.js";import{S as T}from"./SearchResult-n7MRB69H.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_YV75Mh.js";import"./Plugin-Dcw7i5k1.js";import"./componentData-C-cHGDZy.js";import"./useAnalytics-Ch7wjcGI.js";import"./useApp-3vTA-W2x.js";import"./useRouteRef-COVGBgTh.js";import"./index-B5HVCV75.js";import"./ArrowForward-C02MF-7w.js";import"./translation-Dm3cNdxg.js";import"./Page-DTpFzk5i.js";import"./useMediaQuery-BIN8STuc.js";import"./Divider-o68I0PqQ.js";import"./ArrowBackIos-CKeWioJj.js";import"./ArrowForwardIos-UKK3XotN.js";import"./translation-BHLmoc14.js";import"./lodash-DRqfpWl4.js";import"./useAsync-pejW5ESq.js";import"./useMountedState-BzjLIEtJ.js";import"./Modal-DSgOyAhr.js";import"./Portal-dimu2vGp.js";import"./Backdrop-Crr-GWXB.js";import"./styled-CLhLDE62.js";import"./ExpandMore-C5xiQ-gn.js";import"./AccordionDetails-BwugCVCB.js";import"./index-B9sM2jn7.js";import"./Collapse-7Grdvgci.js";import"./ListItem-BIrwQOB_.js";import"./ListContext-BPCBYmKN.js";import"./ListItemIcon-Cc2mHA9s.js";import"./ListItemText-BkZjYHeW.js";import"./Tabs-CjwBoH9p.js";import"./KeyboardArrowRight-Be9dFFRs.js";import"./FormLabel-BYlMWCJn.js";import"./formControlState-dTyBR-oT.js";import"./InputLabel-CulE1LFD.js";import"./Select-CvY1lbid.js";import"./Popover-DoK3K718.js";import"./MenuItem-DOKadWpH.js";import"./Checkbox-DcquN392.js";import"./SwitchBase-HdR1kOh5.js";import"./Chip-b17ryM8z.js";import"./Link-DO2my6Ck.js";import"./index-VlsBe5q3.js";import"./WebStorage--0UlxnmK.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-J1B-xOQ6.js";import"./useIsomorphicLayoutEffect-CXNMZHXl.js";import"./AppThemeApi-CjUUE6Rw.js";import"./BUIProvider-6lEx8047.js";import"./openLink-CRYj9xIm.js";import"./Search-CRbedbDZ.js";import"./useDebounce-CfrD_c-D.js";import"./InputAdornment-B0JABP5Q.js";import"./TextField-dbB9uUlz.js";import"./useElementFilter-cRs15sFB.js";import"./EmptyState-DKgon-ES.js";import"./Progress-CQCUNzSm.js";import"./LinearProgress-D7ybOUcx.js";import"./ResponseErrorPanel-OVIheA3H.js";import"./ErrorPanel-Bo88utn_.js";import"./WarningPanel-DYYTDM0q.js";import"./MarkdownContent-5lQjI-UR.js";import"./CodeSnippet-DD0Ga8Uf.js";import"./CopyTextButton-DU8iicLF.js";import"./useCopyToClipboard-B5ZjvYhx.js";import"./Tooltip-B3XA3GY2.js";import"./Popper-D_StAOcj.js";const b={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},uo={title:"Plugins/Search/SearchModal",component:l,decorators:[o=>k(t.jsx(u,{apis:[[S,new M(b)]],children:t.jsx(C,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":h}})],tags:["!manifest"]},e=()=>{const{state:o,toggleModal:s}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:s,children:"Toggle Search Modal"}),t.jsx(l,{...o,toggleModal:s})]})},N=f(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),r=()=>{const o=N(),{state:s,toggleModal:a}=c();return t.jsxs(t.Fragment,{children:[t.jsx(m,{variant:"contained",color:"primary",onClick:a,children:"Toggle Custom Search Modal"}),t.jsx(l,{...s,toggleModal:a,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(j,{children:t.jsxs(D,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(p,{"aria-label":"close",onClick:a,children:t.jsx(g,{})})]})}),t.jsx(y,{children:t.jsxs(n,{container:!0,direction:"column",children:[t.jsx(n,{item:!0,children:t.jsx(I.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(n,{item:!0,children:t.jsx(T,{children:({results:d})=>t.jsx(G,{children:d.map(({document:i})=>t.jsx("div",{role:"button",tabIndex:0,onClick:a,onKeyPress:a,children:t.jsx(R,{result:i},i.location)},`${i.location}-btn`))})})})]})}),t.jsx(B,{className:o.dialogActionsContainer,children:t.jsx(n,{container:!0,direction:"row",children:t.jsx(n,{item:!0,xs:12,children:t.jsx(x,{})})})})]})})]})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => {
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
