import{j as t}from"./iframe-DsZtuuTR.js";import{R as s}from"./ResponseErrorPanel-C5brLZAl.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-41TQbijK.js";import"./ErrorPanel-ZgxPD86n.js";import"./WarningPanel-DipgI77I.js";import"./ExpandMore-DtBN2rYv.js";import"./AccordionDetails-CxZDo9a4.js";import"./index-B9sM2jn7.js";import"./Collapse-BUUKqCGo.js";import"./MarkdownContent-DB1kk9i3.js";import"./CodeSnippet-JP7TOjyx.js";import"./Box-3ttDjC-9.js";import"./styled-bk62jvDu.js";import"./CopyTextButton-D-5lHwa1.js";import"./useCopyToClipboard-CcNicMOF.js";import"./useMountedState-COxOjAGe.js";import"./Tooltip-BnnSJaTg.js";import"./Popper-DOHUvbmz.js";import"./Portal-DR4gT_uM.js";import"./Grid-CKFEL6Ss.js";import"./List-C6QPnNfT.js";import"./ListContext-DcgBfIsd.js";import"./ListItem-BwEWPFK6.js";import"./ListItemText-Z6OFOiSE.js";import"./Divider-B9lqRyMe.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
