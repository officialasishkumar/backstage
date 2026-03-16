import{j as t}from"./iframe-J174yHvZ.js";import{R as s}from"./ResponseErrorPanel-BWVyTwXn.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-BWgkUCLK.js";import"./ErrorPanel-CmlK4tIB.js";import"./WarningPanel-B3QhAr4M.js";import"./ExpandMore-VxJVtCdA.js";import"./AccordionDetails-Dkx5Aj0j.js";import"./index-B9sM2jn7.js";import"./Collapse-gmNkm2WO.js";import"./MarkdownContent-g4XO5E99.js";import"./CodeSnippet-DnkQ9K-P.js";import"./Box-aKh7VtBH.js";import"./styled-N08b-WnT.js";import"./CopyTextButton-DdSJ2qU6.js";import"./useCopyToClipboard-ChlY_7AC.js";import"./useMountedState-B3OlZ-Af.js";import"./Tooltip-CSb0gwMa.js";import"./Popper-DvvAk7i2.js";import"./Portal-D1-QTUmg.js";import"./Grid-BrTJh83O.js";import"./List-Cp0P4C75.js";import"./ListContext-PpjyVQKG.js";import"./ListItem-Sb5TY6iw.js";import"./ListItemText-hpPAIP2l.js";import"./Divider-DoH51qxJ.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
