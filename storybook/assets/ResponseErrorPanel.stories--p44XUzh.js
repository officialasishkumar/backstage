import{j as t}from"./iframe-Cvt_X182.js";import{R as s}from"./ResponseErrorPanel-Cno8fijB.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-C2GLBazK.js";import"./ErrorPanel-BiLTkN5s.js";import"./WarningPanel-Bl5SYjgK.js";import"./ExpandMore-DImPRkCV.js";import"./AccordionDetails-C9bcmhxI.js";import"./index-B9sM2jn7.js";import"./Collapse-BeBUcSgJ.js";import"./MarkdownContent-DDOh-Y1m.js";import"./CodeSnippet-PXww_Bmz.js";import"./Box-X6UqKYV6.js";import"./styled-It9bTCH_.js";import"./CopyTextButton-DBxqQh7v.js";import"./useCopyToClipboard-MR472fCQ.js";import"./useMountedState-Cfd5-rEZ.js";import"./Tooltip-B659PVdL.js";import"./Popper-DOugWYTx.js";import"./Portal-Br5yZBqf.js";import"./Grid-Fa5sAGyT.js";import"./List-O0e_0tnH.js";import"./ListContext-jbH0b5HF.js";import"./ListItem-DypDUMAf.js";import"./ListItemText-DmBGe6-U.js";import"./Divider-BOGM6Gyr.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
