import{j as t}from"./iframe-AYVAkLn2.js";import{R as s}from"./ResponseErrorPanel-DdKSPr1U.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-DiUzlV7t.js";import"./ErrorPanel-BY2IhfIo.js";import"./WarningPanel-BoJ9aoYA.js";import"./ExpandMore-C3pQ0Sn1.js";import"./AccordionDetails-7X1wxRUQ.js";import"./index-B9sM2jn7.js";import"./Collapse-B9jtcX64.js";import"./MarkdownContent-DEOg2-2Q.js";import"./CodeSnippet-7gg8gJBG.js";import"./Box-D2M4kuqq.js";import"./styled-arALQvZ3.js";import"./CopyTextButton-DGh4VrDV.js";import"./useCopyToClipboard-BtsQ6jti.js";import"./useMountedState-DCewMNXE.js";import"./Tooltip-Ddm6Pg3U.js";import"./Popper-DnG1iggd.js";import"./Portal-BKv0oT2g.js";import"./Grid-ByzVJJnk.js";import"./List-CeeewVqa.js";import"./ListContext-BEmmok3M.js";import"./ListItem-bQqWIE31.js";import"./ListItemText-CzSq17KJ.js";import"./Divider-CNyRbhte.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
