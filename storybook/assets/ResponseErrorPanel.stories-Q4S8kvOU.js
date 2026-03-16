import{j as t}from"./iframe-Du1NhnRf.js";import{R as s}from"./ResponseErrorPanel-CejEP1Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BE8gP3w7.js";import"./ErrorPanel-BwoyPtDM.js";import"./WarningPanel-Cvz8Lm2Y.js";import"./ExpandMore-DcwGsMiQ.js";import"./AccordionDetails-CDgOYTsN.js";import"./index-B9sM2jn7.js";import"./Collapse-DAejmBzb.js";import"./MarkdownContent-Dj2l94n5.js";import"./CodeSnippet-L3kDdcEu.js";import"./Box-BLB9Ozy2.js";import"./styled-ED97p4bf.js";import"./CopyTextButton-BIt7iUmx.js";import"./useCopyToClipboard-C-OKAUZl.js";import"./useMountedState-D7sVuivw.js";import"./Tooltip-DWPPtYcc.js";import"./Popper-C0GxANyG.js";import"./Portal--jynCFKo.js";import"./Grid-O7pUBILR.js";import"./List-C_-v2Bm5.js";import"./ListContext-CHRkL_NO.js";import"./ListItem-D0I3ixrZ.js";import"./ListItemText-WaULkbXU.js";import"./Divider-VQH6-wlZ.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
