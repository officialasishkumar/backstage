const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-CsYkvWCu.js","./iframe-DIo-SVbu.js","./preload-helper-PPVm8Dsz.js","./iframe-DlOGTgpE.css","./Search-GQbCIAb9.js","./useDebounce-DeyQNAGS.js","./translation-qZhn7YJ9.js","./SearchContext-DFouf2wk.js","./lodash-CorumTZI.js","./useAsync-CZHEyuUs.js","./useMountedState-CYCgoyDm.js","./api-KlxuL8JE.js","./useAnalytics-Dz8yJH5J.js","./InputAdornment-CFlPfHwo.js","./formControlState-BxS7n7YR.js","./Button-CKN9jD3U.js","./TextField-M1KJEkWw.js","./Select-Dd91sM0K.js","./index-B9sM2jn7.js","./Popover-CgcEC2FX.js","./Modal-D5veMRiH.js","./Portal-CvYRjmi_.js","./List-DIbhVy0B.js","./ListContext-maWUp7BP.js","./FormLabel-dBpgxstR.js","./InputLabel-KPIiug0-.js","./useApp-DoXX_S3p.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as e,a2 as u}from"./iframe-DIo-SVbu.js";import{s as d,M as l}from"./api-KlxuL8JE.js";import{SearchBar as m}from"./SearchBar-CsYkvWCu.js";import{S as h}from"./SearchContext-DFouf2wk.js";import{S as p}from"./Grid-CQTc9qXc.js";import{m as S}from"./makeStyles-DQU7Dv0P.js";import{w as B}from"./appWrappers-DR3WgLiZ.js";import"./useAnalytics-Dz8yJH5J.js";import"./Search-GQbCIAb9.js";import"./useDebounce-DeyQNAGS.js";import"./translation-qZhn7YJ9.js";import"./InputAdornment-CFlPfHwo.js";import"./formControlState-BxS7n7YR.js";import"./Button-CKN9jD3U.js";import"./TextField-M1KJEkWw.js";import"./Select-Dd91sM0K.js";import"./index-B9sM2jn7.js";import"./Popover-CgcEC2FX.js";import"./Modal-D5veMRiH.js";import"./Portal-CvYRjmi_.js";import"./List-DIbhVy0B.js";import"./ListContext-maWUp7BP.js";import"./FormLabel-dBpgxstR.js";import"./InputLabel-KPIiug0-.js";import"./useApp-DoXX_S3p.js";import"./lodash-CorumTZI.js";import"./useAsync-CZHEyuUs.js";import"./useMountedState-CYCgoyDm.js";import"./WebStorage-BK2KlcPz.js";import"./componentData-Cq2oJfSV.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-rc5V7nNm.js";import"./useIsomorphicLayoutEffect-DFFlChJX.js";import"./AppThemeApi-napO7fl3.js";import"./BUIProvider-CiWIfurT.js";import"./openLink-Cz27Urod.js";const oe={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:r}=await import("./SearchBar-CsYkvWCu.js");return{SearchBar:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[r=>B(e.jsx(u,{apis:[[d,new l]],children:e.jsx(h,{children:e.jsx(p,{container:!0,direction:"row",children:e.jsx(p,{item:!0,xs:12,children:e.jsx(r,{})})})})}))],tags:["!manifest"]},s=()=>e.jsx(m,{}),o=()=>e.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>e.jsx(m,{label:"This is a custom label"}),t=()=>e.jsx(m,{autoFocus:!0}),c=()=>e.jsx(m,{clearButton:!1}),f=S(r=>({searchBarRoot:{padding:"8px 16px",background:r.palette.background.paper,boxShadow:r.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const r=f();return e.jsx(m,{InputProps:{classes:{root:r.searchBarRoot,notchedOutline:r.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
}`,...n.parameters?.docs?.source}}};const ae=["Default","CustomPlaceholder","CustomLabel","Focused","WithoutClearButton","CustomStyles"];export{a as CustomLabel,o as CustomPlaceholder,n as CustomStyles,s as Default,t as Focused,c as WithoutClearButton,ae as __namedExportsOrder,oe as default};
