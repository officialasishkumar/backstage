import{j as t}from"./iframe-Bc_t70P9.js";import{R as s}from"./ResponseErrorPanel-DD42mciD.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BFdqtOa2.js";import"./ErrorPanel-CCc0ZGgd.js";import"./WarningPanel-Ch6DOrYw.js";import"./ExpandMore-DtIbnEjr.js";import"./AccordionDetails-DH4LMTy9.js";import"./index-B9sM2jn7.js";import"./Collapse-C9xEupKI.js";import"./MarkdownContent-BaWTYFCU.js";import"./CodeSnippet-B9ZWUDRn.js";import"./Box-DIBB98s_.js";import"./styled-Dt6lPGno.js";import"./CopyTextButton-UfYVoCAh.js";import"./useCopyToClipboard-B-U2q8b4.js";import"./useMountedState-P4R8GCuk.js";import"./Tooltip-C9G2JH2w.js";import"./Popper-YDAw3qJA.js";import"./Portal-BfeqdU27.js";import"./Grid-C636lq8b.js";import"./List-CCzJZ__r.js";import"./ListContext-o__9M1dS.js";import"./ListItem-DX5nOJCZ.js";import"./ListItemText-Ct0at1L8.js";import"./Divider-DQ8PL2By.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
