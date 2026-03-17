import{j as t}from"./iframe-w9ggzxzz.js";import{R as s}from"./ResponseErrorPanel-WMZqmSMK.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-z1EIRT_g.js";import"./ErrorPanel-C3hC_7F_.js";import"./WarningPanel-BsRHKIzL.js";import"./ExpandMore-DqK-T7ix.js";import"./AccordionDetails-B2XW6ZMf.js";import"./index-B9sM2jn7.js";import"./Collapse-DCg-Lfhc.js";import"./MarkdownContent-Qf8TPR7R.js";import"./CodeSnippet-sfMZ9dhz.js";import"./Box-CFGD6k5Z.js";import"./styled-CSrW_Lwl.js";import"./CopyTextButton-XQN1nXQi.js";import"./useCopyToClipboard-CQ_xHa_x.js";import"./useMountedState-RVVEE9Da.js";import"./Tooltip-Cbxoa4An.js";import"./Popper-CfzuFGS0.js";import"./Portal-C7nXiunF.js";import"./Grid-DTFxJLQY.js";import"./List-eHfcnFSH.js";import"./ListContext-iSayvcxx.js";import"./ListItem-Br9Axuyj.js";import"./ListItemText-Ct6CxcaK.js";import"./Divider-CDpKqRf5.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
