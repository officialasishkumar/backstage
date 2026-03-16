import{j as t}from"./iframe-CgH1me10.js";import{R as s}from"./ResponseErrorPanel-BWiH1C7n.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-DDQHR9TF.js";import"./ErrorPanel-B8hHJvwP.js";import"./WarningPanel-BeEkkwRK.js";import"./ExpandMore-DWFGPItE.js";import"./AccordionDetails-DW7fvu2B.js";import"./index-B9sM2jn7.js";import"./Collapse-IKUDMkEE.js";import"./MarkdownContent-CbJakm8B.js";import"./CodeSnippet-B7ZDF3Em.js";import"./Box-DjOcM7Al.js";import"./styled-HKXiKRGh.js";import"./CopyTextButton-g--1H6mO.js";import"./useCopyToClipboard-DDzhJDvq.js";import"./useMountedState-BYet7bvZ.js";import"./Tooltip-CuoRQ5pr.js";import"./Popper-Beqw8ii1.js";import"./Portal-BSxkgYw7.js";import"./Grid-JeE2fzwn.js";import"./List-BhhAC_dw.js";import"./ListContext-D3q8nz-e.js";import"./ListItem-jQhSzGlz.js";import"./ListItemText-BN7cn10S.js";import"./Divider-D9-Cdbnj.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
