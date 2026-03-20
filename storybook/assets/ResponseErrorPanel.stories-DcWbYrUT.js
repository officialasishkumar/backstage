import{j as t}from"./iframe-BfKy45FJ.js";import{R as s}from"./ResponseErrorPanel-CVayr1rj.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-CbJpsKKD.js";import"./ErrorPanel-CqsWA2Mj.js";import"./WarningPanel-BPahtXNb.js";import"./ExpandMore-C-KPBCy4.js";import"./AccordionDetails-1-O4arSX.js";import"./index-B9sM2jn7.js";import"./Collapse-CElEghiW.js";import"./MarkdownContent-BpI7x-Z3.js";import"./CodeSnippet-xU9Cu_UF.js";import"./Box-Chh9ILCj.js";import"./styled-Cz7jZRk5.js";import"./CopyTextButton-6xeF4gzZ.js";import"./useCopyToClipboard-BeCHjga7.js";import"./useMountedState-DYHhDi6-.js";import"./Tooltip-DoZw0snM.js";import"./Popper-DDZAuDQP.js";import"./Portal-C8YLi2oE.js";import"./Grid-DMQfW7fm.js";import"./List-C-G9AVhD.js";import"./ListContext-DvxZ_Ds9.js";import"./ListItem-DgDd4GZe.js";import"./ListItemText-DsL6_YTf.js";import"./Divider-B7qy_Xzd.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
  <ResponseErrorPanel
    error={new Error("Error message from error object")}
    defaultExpanded={false}
  />
);
`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const WithTitle = () => (
  <ResponseErrorPanel
    error={new Error("test")}
    defaultExpanded={false}
    title="Title prop is passed"
  />
);
`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"(args: ErrorPanelProps) => <ResponseErrorPanel {...args} />",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"(args: ErrorPanelProps) => <ResponseErrorPanel {...args} />",...e.parameters?.docs?.source}}};const N=["Default","WithTitle"];export{r as Default,e as WithTitle,N as __namedExportsOrder,I as default};
