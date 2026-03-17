import{j as t}from"./iframe-D94_c1Tp.js";import{R as s}from"./ResponseErrorPanel-CgXC_lll.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-CKqiAwnv.js";import"./ErrorPanel-Bk0fVb3Q.js";import"./WarningPanel-DjF7lxaz.js";import"./ExpandMore-JnmgCPCK.js";import"./AccordionDetails-CSGFzIhn.js";import"./index-B9sM2jn7.js";import"./Collapse-CJr-ts5n.js";import"./MarkdownContent-FdTFSuyH.js";import"./CodeSnippet-DyNQtRtm.js";import"./Box-Ctg7iXT5.js";import"./styled-DNDrER2-.js";import"./CopyTextButton-Ob2GavSp.js";import"./useCopyToClipboard-B2stAgrJ.js";import"./useMountedState-jRxC8-9y.js";import"./Tooltip-jf0VIgLY.js";import"./Popper-D6Rg0_UH.js";import"./Portal-D3nAj-4m.js";import"./Grid-TMpKdJdj.js";import"./List-C8oahujg.js";import"./ListContext-D3wa98z0.js";import"./ListItem-BvGB8g16.js";import"./ListItemText-B2K8i-DW.js";import"./Divider-CwddDQ4K.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
