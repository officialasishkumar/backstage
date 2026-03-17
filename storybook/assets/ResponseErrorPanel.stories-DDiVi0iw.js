import{j as t}from"./iframe-9SnFn8NI.js";import{R as s}from"./ResponseErrorPanel-BkuVCGZn.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-V6CeBGqV.js";import"./ErrorPanel-DcHQVqeT.js";import"./WarningPanel-cvGmY0lU.js";import"./ExpandMore-C0S35r3E.js";import"./AccordionDetails-CNb3u0OW.js";import"./index-B9sM2jn7.js";import"./Collapse-DozpUEWY.js";import"./MarkdownContent-CgmyR75q.js";import"./CodeSnippet-BBLqagB4.js";import"./Box-gvDFBePG.js";import"./styled-BqCxyJxR.js";import"./CopyTextButton-DUFsx-XO.js";import"./useCopyToClipboard-DosVTOzT.js";import"./useMountedState-DS2oCoAt.js";import"./Tooltip-B3I0hJ1p.js";import"./Popper-2JEPo0EG.js";import"./Portal-DzHAgIGh.js";import"./Grid-DnbT5ToY.js";import"./List-4wadUwvo.js";import"./ListContext-D6WBwJuB.js";import"./ListItem-DIdjPLO3.js";import"./ListItemText-CYbf3I1M.js";import"./Divider-sVmCPwRJ.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
