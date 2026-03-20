import{j as t}from"./iframe-D9Y8dNt-.js";import{R as s}from"./ResponseErrorPanel-DgjE292y.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BoqHtulH.js";import"./ErrorPanel-MHQ-AezQ.js";import"./WarningPanel-CW8xElMR.js";import"./ExpandMore-Dk-IyulX.js";import"./AccordionDetails-Cf0o6NFX.js";import"./index-B9sM2jn7.js";import"./Collapse-BLz0_YoS.js";import"./MarkdownContent-BVwCvq0M.js";import"./CodeSnippet-CZ92bXRb.js";import"./Box-BTwSaOGu.js";import"./styled-BgGpovFM.js";import"./CopyTextButton-BSG1bAcB.js";import"./useCopyToClipboard-4lPsz2vG.js";import"./useMountedState-B-arlFCl.js";import"./Tooltip-Dx1D_B-m.js";import"./Popper-BSGP2tv0.js";import"./Portal-DVsLpO23.js";import"./Grid-ta46I7or.js";import"./List-mUIJSmYE.js";import"./ListContext-xNPrKmTk.js";import"./ListItem-CSMdPZ-4.js";import"./ListItemText-CKifMqzR.js";import"./Divider-DmDI7hoL.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
