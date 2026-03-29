import{j as t}from"./iframe-zPAYUdEu.js";import{R as s}from"./ResponseErrorPanel-XiPQxCtR.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-novWPxOA.js";import"./ErrorPanel-D1j4lKBG.js";import"./WarningPanel-CVVeK7ix.js";import"./ExpandMore-SB0-MkPN.js";import"./AccordionDetails-zwaLsRDJ.js";import"./index-B9sM2jn7.js";import"./Collapse-Cs7yEyQl.js";import"./MarkdownContent-lvVY7zrB.js";import"./CodeSnippet-jNwDcREu.js";import"./Box-xRNo1G5I.js";import"./styled-3vIHv08M.js";import"./CopyTextButton-PCmoSJV-.js";import"./useCopyToClipboard-BIwQZdmN.js";import"./useMountedState-Dc-ywtxV.js";import"./Tooltip-Dv9iFuGM.js";import"./Popper-CGDdcMf9.js";import"./Portal-ceA7f9a1.js";import"./Grid-BhIWWG4z.js";import"./List-Blmd7r0h.js";import"./ListContext-CTsHD7ZV.js";import"./ListItem-YzTMx7m-.js";import"./ListItemText-JWVeunNl.js";import"./Divider-cmuo_SfV.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
