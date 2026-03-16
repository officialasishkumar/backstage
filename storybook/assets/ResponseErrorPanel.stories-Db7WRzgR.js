import{j as t}from"./iframe-_E948MVz.js";import{R as s}from"./ResponseErrorPanel-BGPDUxTY.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-CeVQhawL.js";import"./ErrorPanel-CyS2eQGF.js";import"./WarningPanel-B5w_AAvm.js";import"./ExpandMore-C1tdf9i4.js";import"./AccordionDetails-C0eIh-WX.js";import"./index-B9sM2jn7.js";import"./Collapse-BLf2ePuA.js";import"./MarkdownContent-BlWuHRlI.js";import"./CodeSnippet-BpCSOurq.js";import"./Box-CkUsT8sz.js";import"./styled-DbkjhS7C.js";import"./CopyTextButton-BOpnSgs5.js";import"./useCopyToClipboard-D1wlr4gB.js";import"./useMountedState-BylHk9na.js";import"./Tooltip-CaMAvpLY.js";import"./Popper-DVCylAOX.js";import"./Portal-gFrfFYQV.js";import"./Grid-DjkXhwP0.js";import"./List-D7wngo3z.js";import"./ListContext-DMVOB75k.js";import"./ListItem-DZRnMDoX.js";import"./ListItemText-DxsdUdg2.js";import"./Divider-Chvt_nSc.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
