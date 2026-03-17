import{j as t}from"./iframe-Bu39PmLp.js";import{R as s}from"./ResponseErrorPanel-D640XWh4.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BF75o2aM.js";import"./ErrorPanel-v1gSkFV1.js";import"./WarningPanel-DR6RE8HP.js";import"./ExpandMore-BokYQgAi.js";import"./AccordionDetails-B2NVmeh-.js";import"./index-B9sM2jn7.js";import"./Collapse-DqsO37Qc.js";import"./MarkdownContent-CW0GoH5Q.js";import"./CodeSnippet-C61-05Og.js";import"./Box-COypEvq8.js";import"./styled-DZeC-7HZ.js";import"./CopyTextButton-DcNGOVhO.js";import"./useCopyToClipboard-DcFppNfJ.js";import"./useMountedState-a3-IIk52.js";import"./Tooltip-CVo3tGMI.js";import"./Popper-BmbP9aP5.js";import"./Portal-Cnh7PMtZ.js";import"./Grid-88_alP5V.js";import"./List-plozWRZ-.js";import"./ListContext-U4JS0URp.js";import"./ListItem-CL7cp1ei.js";import"./ListItemText-BuTHvPeP.js";import"./Divider-ZPbdzwYD.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
