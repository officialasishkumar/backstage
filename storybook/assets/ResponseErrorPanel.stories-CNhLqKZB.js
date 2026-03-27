import{j as t}from"./iframe-CY6p7HGj.js";import{R as s}from"./ResponseErrorPanel-DViwTR_y.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-CL5QsbT9.js";import"./ErrorPanel-Doy9tQIu.js";import"./WarningPanel-BBbxXWo9.js";import"./ExpandMore-DuQ3iud3.js";import"./AccordionDetails-Bu_LS_Bp.js";import"./index-B9sM2jn7.js";import"./Collapse-D3jkU9bl.js";import"./MarkdownContent-DWj6UmOy.js";import"./CodeSnippet-DmIQ_879.js";import"./Box-B5BACm8K.js";import"./styled-BYQBwEWp.js";import"./CopyTextButton-DELJm6mH.js";import"./useCopyToClipboard-CLnpbZNY.js";import"./useMountedState-IBh66WXz.js";import"./Tooltip-80DLYrNl.js";import"./Popper-CquYwZgY.js";import"./Portal-Bt03fp_h.js";import"./Grid-4GdRE04R.js";import"./List-CTA8BryI.js";import"./ListContext-De_DMnNX.js";import"./ListItem-DNp7a9LI.js";import"./ListItemText-Cf7TyVvh.js";import"./Divider-B25yG4Vu.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
