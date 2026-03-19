import{j as t}from"./iframe-CBVwdAXc.js";import{R as s}from"./ResponseErrorPanel-DR5GexjB.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-C24YcoXm.js";import"./ErrorPanel-Cjh5Rfea.js";import"./WarningPanel-B84MMbhk.js";import"./ExpandMore-D27FE5Cn.js";import"./AccordionDetails-D-kx-9TK.js";import"./index-B9sM2jn7.js";import"./Collapse-DTPgf8DZ.js";import"./MarkdownContent-5z85KvFH.js";import"./CodeSnippet-DaChzBFc.js";import"./Box-BGY1rYdD.js";import"./styled-DoLFZKqM.js";import"./CopyTextButton-uXAOa4MM.js";import"./useCopyToClipboard-BQllRWxf.js";import"./useMountedState-7qHVdg4Q.js";import"./Tooltip-D2y6AiO8.js";import"./Popper-DFPiCQu9.js";import"./Portal-DWyDC_bO.js";import"./Grid-DWkTHZrC.js";import"./List-7WrADx2K.js";import"./ListContext-D4A-UAeR.js";import"./ListItem-BSBetRD8.js";import"./ListItemText-D2GSy6i-.js";import"./Divider-SJkr3XHc.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
