import{j as t}from"./iframe-CYY79_Ch.js";import{R as s}from"./ResponseErrorPanel-AFZeg5TH.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-tbZFV_7j.js";import"./ErrorPanel-DbWs71Iy.js";import"./WarningPanel-CFp4wDgL.js";import"./ExpandMore-CwjCnax4.js";import"./AccordionDetails-CbHCPen5.js";import"./index-B9sM2jn7.js";import"./Collapse-Ck8K9BIP.js";import"./MarkdownContent-DSiBR4BR.js";import"./CodeSnippet-2OzVUY27.js";import"./Box-DbAj5ghB.js";import"./styled-D9ECYKfc.js";import"./CopyTextButton-Du3KQe3m.js";import"./useCopyToClipboard-D9TZJEgR.js";import"./useMountedState-5pOa2Jmx.js";import"./Tooltip-CRD-RFGK.js";import"./Popper-CzAHrzmM.js";import"./Portal-DIn4oRFY.js";import"./Grid-B6UmqXW5.js";import"./List-Cj-oPI3l.js";import"./ListContext-BaICr9Ho.js";import"./ListItem-Dtfo1o08.js";import"./ListItemText-D0tr5sne.js";import"./Divider-BM7FVcP4.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
