import{j as t}from"./iframe-2DflYetR.js";import{R as s}from"./ResponseErrorPanel-B1EjBVDe.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-B-9IZuRv.js";import"./ErrorPanel-D-PTWf53.js";import"./WarningPanel-C5dyiNxr.js";import"./ExpandMore-C6w4tJN-.js";import"./AccordionDetails-B20OXQ0W.js";import"./index-B9sM2jn7.js";import"./Collapse-5EaDmK-u.js";import"./MarkdownContent-Dl_nqGPI.js";import"./CodeSnippet-Dkg0Bkyz.js";import"./Box-Bu7Xw873.js";import"./styled-DLQ9JpXT.js";import"./CopyTextButton-CfYYSKMx.js";import"./useCopyToClipboard-BG5nGf-t.js";import"./useMountedState-BmHtpzcF.js";import"./Tooltip-D6zoDIUy.js";import"./Popper-ClGkD4o6.js";import"./Portal-DXJMcYAV.js";import"./Grid-DxUCjvP_.js";import"./List-Csw5dc-q.js";import"./ListContext-PWrJkRaZ.js";import"./ListItem-DUio0yug.js";import"./ListItemText-BOj27O3W.js";import"./Divider-B0vxDpCl.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
