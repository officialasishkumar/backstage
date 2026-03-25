import{j as t}from"./iframe-wkUvrVVn.js";import{R as s}from"./ResponseErrorPanel-OVIheA3H.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-D6j-HRPe.js";import"./ErrorPanel-Bo88utn_.js";import"./WarningPanel-DYYTDM0q.js";import"./ExpandMore-C5xiQ-gn.js";import"./AccordionDetails-BwugCVCB.js";import"./index-B9sM2jn7.js";import"./Collapse-7Grdvgci.js";import"./MarkdownContent-5lQjI-UR.js";import"./CodeSnippet-DD0Ga8Uf.js";import"./Box-BPqemAJi.js";import"./styled-CLhLDE62.js";import"./CopyTextButton-DU8iicLF.js";import"./useCopyToClipboard-B5ZjvYhx.js";import"./useMountedState-BzjLIEtJ.js";import"./Tooltip-B3XA3GY2.js";import"./Popper-D_StAOcj.js";import"./Portal-dimu2vGp.js";import"./Grid-Bu0FSGfF.js";import"./List-LUFk3ZfG.js";import"./ListContext-BPCBYmKN.js";import"./ListItem-BIrwQOB_.js";import"./ListItemText-BkZjYHeW.js";import"./Divider-o68I0PqQ.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
