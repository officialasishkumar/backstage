import{j as t}from"./iframe-CtYv7QJ0.js";import{R as s}from"./ResponseErrorPanel-Os1-AVmD.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles--1ATzXv9.js";import"./ErrorPanel-BcQVobD_.js";import"./WarningPanel-BhMCHgOL.js";import"./ExpandMore-DTOI7x5U.js";import"./AccordionDetails-CgYFAgkJ.js";import"./index-B9sM2jn7.js";import"./Collapse-DsOs98CO.js";import"./MarkdownContent-zthL1thI.js";import"./CodeSnippet-DsQ3dv7j.js";import"./Box-CAZTqRm1.js";import"./styled-EsqOIvlg.js";import"./CopyTextButton-Bi-0WTaW.js";import"./useCopyToClipboard-ByhtPbW6.js";import"./useMountedState-DitFhSJJ.js";import"./Tooltip-BsOi6xxC.js";import"./Popper-BjMqL0rj.js";import"./Portal-BRtlHwp1.js";import"./Grid-BCbLl6WO.js";import"./List-DmvJHB8z.js";import"./ListContext-BuapdplI.js";import"./ListItem-CwRfUFQu.js";import"./ListItemText-DhC-3XdQ.js";import"./Divider-BaBH_gp0.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
