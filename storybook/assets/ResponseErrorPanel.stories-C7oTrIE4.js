import{j as t}from"./iframe-qq9LRUBn.js";import{R as s}from"./ResponseErrorPanel-Cv-dVM-C.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-DysICvYt.js";import"./ErrorPanel-DDVNQZWh.js";import"./WarningPanel-DKfwWske.js";import"./ExpandMore-6ohAsi3n.js";import"./AccordionDetails-DXjk0GFJ.js";import"./index-B9sM2jn7.js";import"./Collapse-CV3ZOVsg.js";import"./MarkdownContent-DFqe_flV.js";import"./CodeSnippet-DOnNjGBj.js";import"./Box-Crws65o2.js";import"./styled-PVBWrc0h.js";import"./CopyTextButton-DgTnm0fE.js";import"./useCopyToClipboard-BjJ6ocak.js";import"./useMountedState-e54cfxno.js";import"./Tooltip-CzhL_Bru.js";import"./Popper-C-HsXTN5.js";import"./Portal-DZBLnBHG.js";import"./Grid-D9rzqufp.js";import"./List-uoGoLAIL.js";import"./ListContext-BhhEycMB.js";import"./ListItem-5YDEHKiI.js";import"./ListItemText-DzcEQSyp.js";import"./Divider-Dt9n4you.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
