import{j as t}from"./iframe-BNkUY5HA.js";import{R as s}from"./ResponseErrorPanel-BHFXoM-g.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-D1M3cvTC.js";import"./ErrorPanel-D6f5EQyW.js";import"./WarningPanel-CZRdxMlv.js";import"./ExpandMore-Bd1qtLN_.js";import"./AccordionDetails-DZsPPaZY.js";import"./index-B9sM2jn7.js";import"./Collapse-Dr1ZpXkZ.js";import"./MarkdownContent-DOVqI37K.js";import"./CodeSnippet-zLg_yl5x.js";import"./Box-vbuApI20.js";import"./styled-s8twt4bb.js";import"./CopyTextButton-BHJatCX9.js";import"./useCopyToClipboard-Bh39iCw_.js";import"./useMountedState-D6BGeb6K.js";import"./Tooltip-Dh1IM1oZ.js";import"./Popper-Dy4ol0j8.js";import"./Portal-DQf1B4dl.js";import"./Grid-T8Evs-aA.js";import"./List-Dwb4XmJ7.js";import"./ListContext-i5jXFFIx.js";import"./ListItem-BtLTcDqZ.js";import"./ListItemText-BqW4h_M6.js";import"./Divider-C-PR1OqW.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
