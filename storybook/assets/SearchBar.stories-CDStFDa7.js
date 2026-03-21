const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SearchBar-N13CGYdi.js","./iframe-UJriCXVl.js","./preload-helper-PPVm8Dsz.js","./iframe-BOAyDjIC.css","./Search-0hitG77X.js","./useDebounce--MAmhnYS.js","./translation-BQLc27w0.js","./SearchContext-BXel1g7A.js","./lodash-DkQ6ZSlp.js","./useAsync-BEYvHol3.js","./useMountedState-CWdL38Tt.js","./api-B7VeJZLe.js","./useAnalytics-CEoER_mo.js","./InputAdornment-DIBbg9ES.js","./formControlState-6VXbSKn5.js","./Button-c36bynCt.js","./TextField-CqeZPAT4.js","./Select-Dl4Pnirk.js","./index-B9sM2jn7.js","./Popover-DQ81K7yD.js","./Modal-ZPU6ryA9.js","./Portal-C6ZN2ix7.js","./List-DSt3hz_0.js","./ListContext-n1hCo968.js","./FormLabel-lONzkXwT.js","./InputLabel-Ca891Cuu.js","./useApp-grD3_ewi.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-PPVm8Dsz.js";import{j as r,Y as u}from"./iframe-UJriCXVl.js";import{s as d,M as l}from"./api-B7VeJZLe.js";import{SearchBar as m}from"./SearchBar-N13CGYdi.js";import{S as h}from"./SearchContext-BXel1g7A.js";import{S as p}from"./Grid-D6wRU41f.js";import{m as S}from"./makeStyles-njdNJK3x.js";import{w as B}from"./appWrappers-C5-t193K.js";import"./useAnalytics-CEoER_mo.js";import"./Search-0hitG77X.js";import"./useDebounce--MAmhnYS.js";import"./translation-BQLc27w0.js";import"./InputAdornment-DIBbg9ES.js";import"./formControlState-6VXbSKn5.js";import"./Button-c36bynCt.js";import"./TextField-CqeZPAT4.js";import"./Select-Dl4Pnirk.js";import"./index-B9sM2jn7.js";import"./Popover-DQ81K7yD.js";import"./Modal-ZPU6ryA9.js";import"./Portal-C6ZN2ix7.js";import"./List-DSt3hz_0.js";import"./ListContext-n1hCo968.js";import"./FormLabel-lONzkXwT.js";import"./InputLabel-Ca891Cuu.js";import"./useApp-grD3_ewi.js";import"./lodash-DkQ6ZSlp.js";import"./useAsync-BEYvHol3.js";import"./useMountedState-CWdL38Tt.js";import"./WebStorage-DHFLt1me.js";import"./componentData-CaZ0Zp9-.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-BSYbiaN1.js";import"./useObservable-BfEDm6ba.js";import"./useIsomorphicLayoutEffect-q820unle.js";import"./AppThemeApi-DlmVHrbI.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";const ar={title:"Plugins/Search/SearchBar",component:m,loaders:[async()=>({component:(await i(async()=>{const{SearchBar:e}=await import("./SearchBar-N13CGYdi.js");return{SearchBar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url)).SearchBar})],decorators:[e=>B(r.jsx(u,{apis:[[d,new l]],children:r.jsx(h,{children:r.jsx(p,{container:!0,direction:"row",children:r.jsx(p,{item:!0,xs:12,children:r.jsx(e,{})})})})}))],tags:["!manifest"]},s=()=>r.jsx(m,{}),o=()=>r.jsx(m,{placeholder:"This is a custom placeholder"}),a=()=>r.jsx(m,{label:"This is a custom label"}),t=()=>r.jsx(m,{autoFocus:!0}),c=()=>r.jsx(m,{clearButton:!1}),f=S(e=>({searchBarRoot:{padding:"8px 16px",background:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:"50px"},searchBarOutline:{borderStyle:"none"}})),n=()=>{const e=f();return r.jsx(m,{InputProps:{classes:{root:e.searchBarRoot,notchedOutline:e.searchBarOutline}}})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"CustomPlaceholder"};a.__docgenInfo={description:"",methods:[],displayName:"CustomLabel"};t.__docgenInfo={description:"",methods:[],displayName:"Focused"};c.__docgenInfo={description:"",methods:[],displayName:"WithoutClearButton"};n.__docgenInfo={description:"",methods:[],displayName:"CustomStyles"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Default = () => {
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
