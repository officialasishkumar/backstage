import{j as t}from"./iframe-BPa6N3SD.js";import{R as s}from"./ResponseErrorPanel-D9P1jniZ.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BPhOhugX.js";import"./ErrorPanel-eT8hd-vo.js";import"./WarningPanel-BiqCtuVW.js";import"./ExpandMore-DqcL3_Ti.js";import"./AccordionDetails-D0ralmK5.js";import"./index-B9sM2jn7.js";import"./Collapse-BxVDKG_E.js";import"./MarkdownContent-Cj91Lx1J.js";import"./CodeSnippet-BardiS74.js";import"./Box-Cnz1HHCH.js";import"./styled-DR1Q9dRL.js";import"./CopyTextButton-C7QP5IPw.js";import"./useCopyToClipboard-CoHBkqe_.js";import"./useMountedState-B69jA6Y1.js";import"./Tooltip--dBTVPXa.js";import"./Popper-DYnRrkMR.js";import"./Portal-CybimJf6.js";import"./Grid-DrfNOwcD.js";import"./List-2A5-ge2l.js";import"./ListContext-BukMsw43.js";import"./ListItem-D402ttc5.js";import"./ListItemText-Dng-M9Mo.js";import"./Divider-Dr2s_Lqe.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
