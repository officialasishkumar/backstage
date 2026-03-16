import{j as t}from"./iframe-D7TnLv8A.js";import{R as s}from"./ResponseErrorPanel-GjYXWxg0.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BuB2Q7_j.js";import"./ErrorPanel-DfdT70Ao.js";import"./WarningPanel-XIrX9BMG.js";import"./ExpandMore-tmqJCok-.js";import"./AccordionDetails-CKMgSUof.js";import"./index-B9sM2jn7.js";import"./Collapse-DvLzuaJg.js";import"./MarkdownContent-DmO9VB6w.js";import"./CodeSnippet-DnTry-GV.js";import"./Box-z0c3JxTt.js";import"./styled-DHDYZuir.js";import"./CopyTextButton-CM-FUSii.js";import"./useCopyToClipboard-LvrDvEiG.js";import"./useMountedState-UFQmEtok.js";import"./Tooltip-C7iiPh4c.js";import"./Popper-2BigagmP.js";import"./Portal-DYix9A2M.js";import"./Grid-iTO1Arnu.js";import"./List-L4X_xhy8.js";import"./ListContext-UWf6-YWs.js";import"./ListItem-B56tmsM_.js";import"./ListItemText-YEWqdcQr.js";import"./Divider-3f_PtMhJ.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
