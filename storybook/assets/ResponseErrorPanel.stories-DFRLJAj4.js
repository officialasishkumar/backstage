import{j as t}from"./iframe--MS66teN.js";import{R as s}from"./ResponseErrorPanel-CwLOQnYf.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-B3gZJdXQ.js";import"./ErrorPanel-Bh1a1UPB.js";import"./WarningPanel-BnkqOGJm.js";import"./ExpandMore-DUZaokGP.js";import"./AccordionDetails-VBd78_u6.js";import"./index-B9sM2jn7.js";import"./Collapse-MhVmOiVi.js";import"./MarkdownContent-CJkGmOGi.js";import"./CodeSnippet-CqmFnPzi.js";import"./Box-WcPrDxvm.js";import"./styled-BHy6FTvz.js";import"./CopyTextButton-Bs-ktsUP.js";import"./useCopyToClipboard-BjyPvKPz.js";import"./useMountedState-BkwGR7C4.js";import"./Tooltip-ymjnk5vs.js";import"./Popper-CVKGQzkO.js";import"./Portal-UjOrNlZC.js";import"./Grid-S31HS9ey.js";import"./List-BngRfJV6.js";import"./ListContext-DH8NOqlh.js";import"./ListItem-CtSgiNmU.js";import"./ListItemText-C1DcXRBw.js";import"./Divider-Ce5ITpnq.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
