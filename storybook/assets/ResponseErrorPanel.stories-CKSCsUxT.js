import{j as t}from"./iframe-BPVPwWzn.js";import{R as s}from"./ResponseErrorPanel-CgxDoCyS.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-DL3RdYST.js";import"./ErrorPanel-DHm2m4Ze.js";import"./WarningPanel-uQizXGZr.js";import"./ExpandMore-D8O-2EBc.js";import"./AccordionDetails-CSJmEjtJ.js";import"./index-B9sM2jn7.js";import"./Collapse-DVaK2Qis.js";import"./MarkdownContent-CX8OHgMG.js";import"./CodeSnippet-naesZI18.js";import"./Box-C9ZUlUpW.js";import"./styled-CYuGUrVD.js";import"./CopyTextButton-ObDSLj7c.js";import"./useCopyToClipboard-C3n22U8G.js";import"./useMountedState-e47W3NJl.js";import"./Tooltip-D-5NYnGf.js";import"./Popper-D0Hr6Gkt.js";import"./Portal-AbzTFUuq.js";import"./Grid-CXiQnKoR.js";import"./List-cqhA6xzX.js";import"./ListContext-DHM8dB5v.js";import"./ListItem-CXQlml-U.js";import"./ListItemText-DZwi-UMy.js";import"./Divider-B4SjF4fL.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
