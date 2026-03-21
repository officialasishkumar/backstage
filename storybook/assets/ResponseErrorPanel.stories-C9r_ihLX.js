import{j as t}from"./iframe-UJriCXVl.js";import{R as s}from"./ResponseErrorPanel-DooAL5lX.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-njdNJK3x.js";import"./ErrorPanel-D67Eplqz.js";import"./WarningPanel-D4bdu5Z5.js";import"./ExpandMore-CkvIIUOp.js";import"./AccordionDetails-C8OigTMk.js";import"./index-B9sM2jn7.js";import"./Collapse-4SnexBkv.js";import"./MarkdownContent-D2qb8k4F.js";import"./CodeSnippet-BTN20w8A.js";import"./Box-C1by_hut.js";import"./styled-DSaNCCR9.js";import"./CopyTextButton-BCmP3F2H.js";import"./useCopyToClipboard-DE6RI971.js";import"./useMountedState-CWdL38Tt.js";import"./Tooltip-3VXaZMhT.js";import"./Popper-rQQJdySn.js";import"./Portal-C6ZN2ix7.js";import"./Grid-D6wRU41f.js";import"./List-DSt3hz_0.js";import"./ListContext-n1hCo968.js";import"./ListItem-Bgv2V2Pm.js";import"./ListItemText-BVXCXsbw.js";import"./Divider-CdxnWJl9.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
