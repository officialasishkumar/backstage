import{j as t}from"./iframe-CXYB6t6D.js";import{R as s}from"./ResponseErrorPanel-CbucudAC.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-D9Wml1Qb.js";import"./ErrorPanel-Bql8UBdZ.js";import"./WarningPanel-DuINCOe-.js";import"./ExpandMore-wJY1be09.js";import"./AccordionDetails-D5N7iZ82.js";import"./index-B9sM2jn7.js";import"./Collapse-CvWd8YhK.js";import"./MarkdownContent-BiJx0EnO.js";import"./CodeSnippet-BJO83rcO.js";import"./Box-BBf7RVHa.js";import"./styled-C7sk4Fig.js";import"./CopyTextButton-BIsYxFWY.js";import"./useCopyToClipboard-DSM_b8Fw.js";import"./useMountedState-jjFDpjDr.js";import"./Tooltip-BKoVPHwY.js";import"./Popper-BQbRqMDd.js";import"./Portal-DIGrr39M.js";import"./Grid-BOZ43D_m.js";import"./List-DyaSGBv-.js";import"./ListContext-CJZGy2dL.js";import"./ListItem-BmXO2GVD.js";import"./ListItemText-3WwYXMGs.js";import"./Divider-C7UoDtLG.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
