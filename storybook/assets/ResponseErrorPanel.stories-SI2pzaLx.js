import{j as t}from"./iframe-LAkIJzV-.js";import{R as s}from"./ResponseErrorPanel-CaNgCBQt.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-COYpSGPM.js";import"./ErrorPanel-BrUaocJT.js";import"./WarningPanel-DYjUQMYU.js";import"./ExpandMore-eEdaDUD4.js";import"./AccordionDetails-DL2cDZ6B.js";import"./index-B9sM2jn7.js";import"./Collapse-Dx0oZfXh.js";import"./MarkdownContent-wUSRzQQd.js";import"./CodeSnippet-DxiggM9Y.js";import"./Box-B6_OswLq.js";import"./styled-qZchnbXI.js";import"./CopyTextButton-BiAweD2l.js";import"./useCopyToClipboard-jfSdv42E.js";import"./useMountedState-ChWc6m0m.js";import"./Tooltip-BYvgz8vj.js";import"./Popper-CrI57b7o.js";import"./Portal-B_B_DiH0.js";import"./Grid-D12OHFOV.js";import"./List-BdeCMfRK.js";import"./ListContext-g5fUsEsB.js";import"./ListItem-Dotf5yp5.js";import"./ListItemText-mc8R52PO.js";import"./Divider-D_oQ65g_.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
