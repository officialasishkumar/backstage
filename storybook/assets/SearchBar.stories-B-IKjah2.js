const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-oVQvZKxV.js","./iframe-qq9LRUBn.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-DgIvh3ZZ.js","./useDebounce-3YiVPHzL.js","./translation-Bqp_dTC3.js","./SearchContext-Bz-zolQe.js","./lodash-BM8QDDk-.js","./useAsync-BvqGBP4s.js","./useMountedState-e54cfxno.js","./api-B9Gt_YoD.js","./useAnalytics-NY-e7y1h.js","./InputAdornment-CNBLgLbN.js","./formControlState-BGyz0aAs.js","./Button-DyTVCGiJ.js","./TextField-CmAvTm6A.js","./Select-Dlc5tsep.js","./index-B9sM2jn7.js","./Popover-yyr5Crli.js","./Modal-D3q_Fx9n.js","./Portal-DZBLnBHG.js","./List-uoGoLAIL.js","./ListContext-BhhEycMB.js","./FormLabel-BQNhSUen.js","./InputLabel-g1SJdEeH.js","./useApp-DDQS_rrk.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-qq9LRUBn.js";import{s as d,M as l}from"./api-B9Gt_YoD.js";import{SearchBar as m}from"./SearchBar-oVQvZKxV.js";import{S as h}from"./SearchContext-Bz-zolQe.js";import{S as p}from"./Grid-D9rzqufp.js";import{m as S}from"./makeStyles-DysICvYt.js";import{w as B}from"./appWrappers-CkqvCYZJ.js";import"./useAnalytics-NY-e7y1h.js";import"./Search-DgIvh3ZZ.js";import"./useDebounce-3YiVPHzL.js";import"./translation-Bqp_dTC3.js";import"./InputAdornment-CNBLgLbN.js";import"./formControlState-BGyz0aAs.js";import"./Button-DyTVCGiJ.js";import"./TextField-CmAvTm6A.js";import"./Select-Dlc5tsep.js";import"./index-B9sM2jn7.js";import"./Popover-yyr5Crli.js";import"./Modal-D3q_Fx9n.js";import"./Portal-DZBLnBHG.js";import"./List-uoGoLAIL.js";import"./ListContext-BhhEycMB.js";import"./FormLabel-BQNhSUen.js";import"./InputLabel-g1SJdEeH.js";import"./useApp-DDQS_rrk.js";import"./lodash-BM8QDDk-.js";import"./useAsync-BvqGBP4s.js";import"./useMountedState-e54cfxno.js";import"./WebStorage-DBgpTxHB.js";import"./componentData-g0Y7Tr3a.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-29ewTlsg.js";import"./useObservable-sfeOjMZC.js";import"./useIsomorphicLayoutEffect-DCCJvql9.js";import"./AppThemeApi-DuUscH2P.js";import"./BUIProvider-Dsng5cuc.js";import"./openLink-DhqiiT6V.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-oVQvZKxV.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
  return <SearchBar />;
};
`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const CustomPlaceholder = () => {
  return <SearchBar placeholder="This is a custom placeholder" />;
};
`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const CustomLabel = () => {
  return <SearchBar label="This is a custom label" />;
};
`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{code:`const Focused = () => {
  return (
    // decision up to adopter, read https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md#no-autofocus
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <SearchBar autoFocus />
  );
};
`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{code:`const WithoutClearButton = () => {
  return <SearchBar clearButton={false} />;
};
`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const CustomStyles = () => {
  const classes = useStyles();
  return (
    <SearchBar
      InputProps={{
        classes: {
          root: classes.searchBarRoot,
          notchedOutline: classes.searchBarOutline,
        },
      }}
    />
  );
};
`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar />;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar placeholder="This is a custom placeholder" />;
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar label="This is a custom label" />;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return (
    // decision up to adopter, read https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md#no-autofocus
    // eslint-disable-next-line jsx-a11y/no-autofocus
    <SearchBar autoFocus />
  );
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <SearchBar clearButton={false} />;
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  return <SearchBar InputProps={{
    classes: {
      root: classes.searchBarRoot,
      notchedOutline: classes.searchBarOutline
    }
  }} />;
}`,...n.parameters?.docs?.source}}};const tr=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,tr as __namedExportsOrder,ar as default};
