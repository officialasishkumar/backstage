import{j as e,r as d,Y as N}from"./iframe-Du1NhnRf.js";import{S as k,L as z}from"./Label-dbyqVLYu.js";import{s as B,M as W}from"./api-BAjKqota.js";import{S as T,u as q}from"./SearchContext-B-x1kr1F.js";import{m as E}from"./makeStyles-BE8gP3w7.js";import{SearchBar as H}from"./SearchBar-UvThREIF.js";import{A as M}from"./Autocomplete-MUHA-6KJ.js";import{C as V}from"./CircularProgress-B-GpEnOJ.js";import{S as P}from"./Grid-O7pUBILR.js";import{w as G}from"./appWrappers-Dy7pQDyw.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItemIcon-DFsV9ruc.js";import"./ListContext-CHRkL_NO.js";import"./ListItemText-WaULkbXU.js";import"./lodash-BSRFOEMl.js";import"./useAsync-C0CViB27.js";import"./useMountedState-D7sVuivw.js";import"./useAnalytics-Ms6WfRSX.js";import"./Search-BSBE9D8L.js";import"./useDebounce-C79pJ86S.js";import"./translation-DLWE9-X3.js";import"./InputAdornment-DT-BXHDu.js";import"./formControlState-Bw5sbh-V.js";import"./Button-_IONOL7e.js";import"./TextField-CHHanyFS.js";import"./Select-iPsqydas.js";import"./index-B9sM2jn7.js";import"./Popover-C3tQpyPo.js";import"./Modal-C6NV1WST.js";import"./Portal--jynCFKo.js";import"./List-C_-v2Bm5.js";import"./FormLabel-Bitjk_1S.js";import"./InputLabel-DOQIp7an.js";import"./useApp-DfeMOLKR.js";import"./Chip-usnFhkZ2.js";import"./Popper-C0GxANyG.js";import"./ListSubheader-VsWhePp6.js";import"./useObservable-DFKmxMmG.js";import"./useIsomorphicLayoutEffect-Bqw_eD0t.js";import"./componentData-CgD6suoV.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./index-Ck8n2OOF.js";import"./BUIProvider-CfT0m_qr.js";import"./openLink-CxapqtyB.js";const Y=E(t=>({loading:{right:t.spacing(1),position:"absolute"}})),F=t=>c=>e.jsx(T,{inheritParentContextIfAvailable:!0,children:e.jsx(t,{...c})}),J=()=>{const t=Y();return e.jsx(V,{className:t.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},p=F(function(c){const{loading:x,value:u,onChange:S=()=>{},options:w=[],getOptionLabel:h=o=>String(o),inputPlaceholder:g,inputDebounceTime:A,freeSolo:b=!0,fullWidth:j=!0,clearOnBlur:C=!1,"data-testid":_="search-autocomplete",...L}=c,{setTerm:y}=q(),l=d.useCallback(o=>o?typeof o=="string"?o:h(o):"",[h]),I=d.useMemo(()=>l(u),[u,l]),R=d.useCallback((o,m,f,O)=>{y(l(m)),S(o,m,f,O)},[l,y,S]),v=d.useCallback(({InputProps:{ref:o,className:m,endAdornment:f},InputLabelProps:O,...D})=>e.jsx(H,{...D,ref:o,clearButton:!1,value:I,placeholder:g,debounceTime:A,endAdornment:x?e.jsx(J,{}):f,InputProps:{className:m}}),[x,I,g,A]);return e.jsx(M,{...L,"data-testid":_,value:u,onChange:R,options:w,getOptionLabel:h,renderInput:v,freeSolo:b,fullWidth:j,clearOnBlur:C})});p.__docgenInfo={description:`Recommended search autocomplete when you use the Search Provider or Search Context.

@public`,methods:[],displayName:"SearchAutocomplete",props:{"data-testid":{required:!1,tsType:{name:"string"},description:""},inputPlaceholder:{required:!1,tsType:{name:"Partial['placeholder']",raw:"SearchBarProps['placeholder']"},description:""},inputDebounceTime:{required:!1,tsType:{name:"Partial['debounceTime']",raw:"SearchBarProps['debounceTime']"},description:""}}};const Ee={title:"Plugins/Search/SearchAutocomplete",component:p,decorators:[t=>G(e.jsx(N,{apis:[[B,new W]],children:e.jsx(T,{children:e.jsx(P,{container:!0,direction:"row",children:e.jsx(P,{item:!0,xs:12,children:e.jsx(t,{})})})})}))],tags:["!manifest"]},r=()=>e.jsx(p,{options:["hello-word","petstore","spotify"]}),s=()=>e.jsx(p,{options:["hello-word","petstore","spotify"]}),n=()=>{const t=["hello-word","petstore","spotify"];return e.jsx(p,{options:t,value:t[0]})},i=()=>e.jsx(p,{options:[],loading:!0}),a=()=>{const t=[{title:"hello-world",text:"Hello World example for gRPC"},{title:"petstore",text:"The petstore API"},{title:"spotify",text:"The Spotify web API"}];return e.jsx(p,{options:t,renderOption:c=>e.jsx(k,{icon:e.jsx(z,{titleAccess:"Option icon"}),primaryText:c.title,secondaryText:c.text})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Outlined"};n.__docgenInfo={description:"",methods:[],displayName:"Initialized"};i.__docgenInfo={description:"",methods:[],displayName:"LoadingOptions"};a.__docgenInfo={description:"",methods:[],displayName:"RenderingCustomOptions"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => {
  return <SearchAutocomplete options={["hello-word", "petstore", "spotify"]} />;
};
`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Outlined = () => {
  return <SearchAutocomplete options={["hello-word", "petstore", "spotify"]} />;
};
`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const Initialized = () => {
  const options = ["hello-word", "petstore", "spotify"];
  return <SearchAutocomplete options={options} value={options[0]} />;
};
`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{code:`const LoadingOptions = () => {
  return <SearchAutocomplete options={[]} loading />;
};
`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const RenderingCustomOptions = () => {
  const options = [
    {
      title: "hello-world",
      text: "Hello World example for gRPC",
    },
    {
      title: "petstore",
      text: "The petstore API",
    },
    {
      title: "spotify",
      text: "The Spotify web API",
    },
  ];

  return (
    <SearchAutocomplete
      options={options}
      renderOption={(option) => (
        <SearchAutocompleteDefaultOption
          icon={<LabelIcon titleAccess="Option icon" />}
          primaryText={option.title}
          secondaryText={option.text}
        />
      )}
    />
  );
};
`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <SearchAutocomplete options={['hello-word', 'petstore', 'spotify']} />;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <SearchAutocomplete options={['hello-word', 'petstore', 'spotify']} />;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const options = ['hello-word', 'petstore', 'spotify'];
  return <SearchAutocomplete options={options} value={options[0]} />;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <SearchAutocomplete options={[]} loading />;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const options = [{
    title: 'hello-world',
    text: 'Hello World example for gRPC'
  }, {
    title: 'petstore',
    text: 'The petstore API'
  }, {
    title: 'spotify',
    text: 'The Spotify web API'
  }];
  return <SearchAutocomplete options={options} renderOption={option => <SearchAutocompleteDefaultOption icon={<LabelIcon titleAccess="Option icon" />} primaryText={option.title} secondaryText={option.text} />} />;
}`,...a.parameters?.docs?.source}}};const He=["Default","Outlined","Initialized","LoadingOptions","RenderingCustomOptions"];export{r as Default,n as Initialized,i as LoadingOptions,s as Outlined,a as RenderingCustomOptions,He as __namedExportsOrder,Ee as default};
