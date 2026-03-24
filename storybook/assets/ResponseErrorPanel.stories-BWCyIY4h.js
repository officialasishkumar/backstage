import{j as t}from"./iframe-BZrpTwFW.js";import{R as s}from"./ResponseErrorPanel-GuqqAGdV.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-CIE8BXXT.js";import"./ErrorPanel-CizJOqmr.js";import"./WarningPanel-Cn-Cqpc_.js";import"./ExpandMore-9-U3mgFl.js";import"./AccordionDetails-DCBjoM6V.js";import"./index-B9sM2jn7.js";import"./Collapse-CC7BzgTc.js";import"./MarkdownContent-e4Cn-ect.js";import"./CodeSnippet-BDpg6lQ2.js";import"./Box-D8g6naBP.js";import"./styled-Be8rlyJS.js";import"./CopyTextButton-DprLVpb7.js";import"./useCopyToClipboard-BokOU8dC.js";import"./useMountedState-DxKyG1Ea.js";import"./Tooltip-3sla5M5N.js";import"./Popper-Al3BzMOF.js";import"./Portal-BMtcgUVu.js";import"./Grid-OEz6aKRJ.js";import"./List-CNsgrFh7.js";import"./ListContext-_XocguZm.js";import"./ListItem-DP2OxpMh.js";import"./ListItemText-CSGeSg7i.js";import"./Divider-pXkKDCFF.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
