import{j as t}from"./iframe-CsOrEaZh.js";import{R as s}from"./ResponseErrorPanel-D_VkVDIl.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-RXMzfVyC.js";import"./ErrorPanel-DrJMIv3p.js";import"./WarningPanel-Da6yISQs.js";import"./ExpandMore-Cg-dfyMg.js";import"./AccordionDetails-B_DTUGKR.js";import"./index-B9sM2jn7.js";import"./Collapse-ncZbHNhG.js";import"./MarkdownContent-pTs0g2w_.js";import"./CodeSnippet-G8w_EFUb.js";import"./Box-ULaQRaNA.js";import"./styled-l3-sdTqB.js";import"./CopyTextButton-CRxzmPpF.js";import"./useCopyToClipboard-DkASlukr.js";import"./useMountedState-BoYCIFcM.js";import"./Tooltip-DzgDEUmc.js";import"./Popper-CCI27zHX.js";import"./Portal-DzcrA5JX.js";import"./Grid-Cp5B6vj7.js";import"./List-DZ50BoJB.js";import"./ListContext-DMLxEL-p.js";import"./ListItem-C5QPSfoJ.js";import"./ListItemText-Dv-KEU61.js";import"./Divider-5Slz6l7n.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
