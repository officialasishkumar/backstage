import{j as t}from"./iframe-BzEx-mzh.js";import{R as s}from"./ResponseErrorPanel-CLy0VOFK.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-KrlZ5-Ut.js";import"./ErrorPanel-C-ex7Akp.js";import"./WarningPanel-BpNS9LUM.js";import"./ExpandMore-Cgn5AZkG.js";import"./AccordionDetails-BYGoRWll.js";import"./index-B9sM2jn7.js";import"./Collapse-DU2EA4DD.js";import"./MarkdownContent-DZOcrxIb.js";import"./CodeSnippet-CK4P2DfG.js";import"./Box-BtrO8NUR.js";import"./styled-BC6E7X8H.js";import"./CopyTextButton-CyNdxAF_.js";import"./useCopyToClipboard-CHOs8Fjj.js";import"./useMountedState-BkNjOVOx.js";import"./Tooltip-Co7RbJ52.js";import"./Popper-DIuKqKML.js";import"./Portal-BVejhVwL.js";import"./Grid-CQ4TX_Z5.js";import"./List-CuppT92S.js";import"./ListContext-CyskI8TW.js";import"./ListItem-C_KvzjzW.js";import"./ListItemText-S1uvxEmv.js";import"./Divider-DkJMH1v9.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
