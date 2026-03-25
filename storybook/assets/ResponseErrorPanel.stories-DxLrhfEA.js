import{j as t}from"./iframe-CymjdxqK.js";import{R as s}from"./ResponseErrorPanel-BFsyEUiK.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BMXXhCWz.js";import"./ErrorPanel-SaJ0LFD4.js";import"./WarningPanel-B5NvOH5N.js";import"./ExpandMore-CbpUGRb_.js";import"./AccordionDetails-CoTvCA3a.js";import"./index-B9sM2jn7.js";import"./Collapse-CN7KcbzR.js";import"./MarkdownContent-O4wOoOgF.js";import"./CodeSnippet-CffUxl3a.js";import"./Box-D8DjMEPG.js";import"./styled-DoCAq6vJ.js";import"./CopyTextButton-BGfayOFy.js";import"./useCopyToClipboard-Dp_HjSkN.js";import"./useMountedState-BFsHBQyj.js";import"./Tooltip-DLsEhiTi.js";import"./Popper-BN6j66__.js";import"./Portal-D2IDO7m8.js";import"./Grid-Dr2ljIC_.js";import"./List-Dvm8L6Yt.js";import"./ListContext-uUolaWCt.js";import"./ListItem-CWxGd75q.js";import"./ListItemText-BrOCm4C7.js";import"./Divider-Dgrp-7AZ.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
