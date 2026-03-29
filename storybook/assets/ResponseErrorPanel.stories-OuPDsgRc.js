import{j as t}from"./iframe-DbF3iEvf.js";import{R as s}from"./ResponseErrorPanel-DRAQaEfT.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-Ddzw_WnF.js";import"./ErrorPanel-BN83QwgD.js";import"./WarningPanel-DluC_mYZ.js";import"./ExpandMore-Bj5F8PiN.js";import"./AccordionDetails-2CErljQI.js";import"./index-B9sM2jn7.js";import"./Collapse-fv2mDykP.js";import"./MarkdownContent-Br4E5qSu.js";import"./CodeSnippet-DShAfocv.js";import"./Box-k_BPQh5L.js";import"./styled-BqEwKtoO.js";import"./CopyTextButton-BfprJmvP.js";import"./useCopyToClipboard-JrRUisDn.js";import"./useMountedState-ETLXQmd3.js";import"./Tooltip-CJhXFAid.js";import"./Popper-C413ylWX.js";import"./Portal-hbPr6RYI.js";import"./Grid-CVypMrLh.js";import"./List-jjp85zn8.js";import"./ListContext-CAU0vplw.js";import"./ListItem-BXU8AvHT.js";import"./ListItemText-DZspTlhz.js";import"./Divider-DO54HmUy.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
