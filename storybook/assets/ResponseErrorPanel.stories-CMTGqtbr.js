import{j as t}from"./iframe-CTqAPkqN.js";import{R as s}from"./ResponseErrorPanel-CK8jqS7J.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-DI4Xn9jK.js";import"./ErrorPanel-DRrDZ_Jv.js";import"./WarningPanel-Bx5_IboJ.js";import"./ExpandMore-CXY7uG6y.js";import"./AccordionDetails-EDKGcOp-.js";import"./index-B9sM2jn7.js";import"./Collapse-GjNbT6uG.js";import"./MarkdownContent-CpKT-NEs.js";import"./CodeSnippet-ygztmdOf.js";import"./Box-CuoYE_bm.js";import"./styled-Dr66SpKq.js";import"./CopyTextButton-kC5v9d4e.js";import"./useCopyToClipboard-dDkPrrLa.js";import"./useMountedState-B0CBEazr.js";import"./Tooltip-DnGLXgIK.js";import"./Popper-CYb-6gU9.js";import"./Portal-CEy1WTiJ.js";import"./Grid-BTPqc0jk.js";import"./List-yUGuy5mk.js";import"./ListContext-rz4ELcuk.js";import"./ListItem-CSI66Z0A.js";import"./ListItemText-C66ZPx1O.js";import"./Divider-DnRcqcYe.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
