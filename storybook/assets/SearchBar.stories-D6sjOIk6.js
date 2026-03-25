const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-BhK1c2m7.js","./iframe-wkUvrVVn.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-CRbedbDZ.js","./useDebounce-CfrD_c-D.js","./translation-BHLmoc14.js","./SearchContext-CnWAEsmo.js","./lodash-DRqfpWl4.js","./useAsync-pejW5ESq.js","./useMountedState-BzjLIEtJ.js","./api-BkpX0X9M.js","./useAnalytics-Ch7wjcGI.js","./InputAdornment-B0JABP5Q.js","./formControlState-dTyBR-oT.js","./Button-BZq6lWJS.js","./TextField-dbB9uUlz.js","./Select-CvY1lbid.js","./index-B9sM2jn7.js","./Popover-DoK3K718.js","./Modal-DSgOyAhr.js","./Portal-dimu2vGp.js","./List-LUFk3ZfG.js","./ListContext-BPCBYmKN.js","./FormLabel-BYlMWCJn.js","./InputLabel-CulE1LFD.js","./useApp-3vTA-W2x.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-wkUvrVVn.js";import{s as d,M as l}from"./api-BkpX0X9M.js";import{SearchBar as m}from"./SearchBar-BhK1c2m7.js";import{S as h}from"./SearchContext-CnWAEsmo.js";import{S as p}from"./Grid-Bu0FSGfF.js";import{m as S}from"./makeStyles-D6j-HRPe.js";import{w as B}from"./appWrappers-Bu5nTIfu.js";import"./useAnalytics-Ch7wjcGI.js";import"./Search-CRbedbDZ.js";import"./useDebounce-CfrD_c-D.js";import"./translation-BHLmoc14.js";import"./InputAdornment-B0JABP5Q.js";import"./formControlState-dTyBR-oT.js";import"./Button-BZq6lWJS.js";import"./TextField-dbB9uUlz.js";import"./Select-CvY1lbid.js";import"./index-B9sM2jn7.js";import"./Popover-DoK3K718.js";import"./Modal-DSgOyAhr.js";import"./Portal-dimu2vGp.js";import"./List-LUFk3ZfG.js";import"./ListContext-BPCBYmKN.js";import"./FormLabel-BYlMWCJn.js";import"./InputLabel-CulE1LFD.js";import"./useApp-3vTA-W2x.js";import"./lodash-DRqfpWl4.js";import"./useAsync-pejW5ESq.js";import"./useMountedState-BzjLIEtJ.js";import"./WebStorage--0UlxnmK.js";import"./componentData-C-cHGDZy.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-B5HVCV75.js";import"./useObservable-J1B-xOQ6.js";import"./useIsomorphicLayoutEffect-CXNMZHXl.js";import"./AppThemeApi-CjUUE6Rw.js";import"./BUIProvider-6lEx8047.js";import"./openLink-CRYj9xIm.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-BhK1c2m7.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
