import{j as t}from"./iframe-hebBxzMS.js";import{R as s}from"./ResponseErrorPanel-cON5L8g2.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BuKfj6eo.js";import"./ErrorPanel-CO9A7hwI.js";import"./WarningPanel-D4ZPrS8o.js";import"./ExpandMore-CmKg0nRc.js";import"./AccordionDetails-BV8AV73Z.js";import"./index-B9sM2jn7.js";import"./Collapse-BgREKGge.js";import"./MarkdownContent-Bpx0OAum.js";import"./CodeSnippet-lx8evZ3D.js";import"./Box-CsMG6Ed5.js";import"./styled-eU63C66P.js";import"./CopyTextButton-DZCMvCu6.js";import"./useCopyToClipboard-Onjtnqv6.js";import"./useMountedState-BOTwgk6q.js";import"./Tooltip-wRXpjfve.js";import"./Popper-Nu0-WiMx.js";import"./Portal-DVg2kjtj.js";import"./Grid-DR9XAO4b.js";import"./List-B-7FtQra.js";import"./ListContext-vEx_JeiU.js";import"./ListItem-B2Xdmbv7.js";import"./ListItemText-CZ2cZD8f.js";import"./Divider-DdU1homx.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
