import{j as t}from"./iframe-D0nL_Agr.js";import{R as s}from"./ResponseErrorPanel-CNEtCLFX.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-CEEIeaPc.js";import"./ErrorPanel-BVtOabjF.js";import"./WarningPanel-CplvYfF5.js";import"./ExpandMore-DfFo8jQ4.js";import"./AccordionDetails-KA1uC9fh.js";import"./index-B9sM2jn7.js";import"./Collapse-PPyuJLE3.js";import"./MarkdownContent-DMq6MwFY.js";import"./CodeSnippet-B_McEZEi.js";import"./Box-BBeBWSpp.js";import"./styled-ud37gncL.js";import"./CopyTextButton-3ruE736v.js";import"./useCopyToClipboard-BufagX_d.js";import"./useMountedState-D6h1Oxy0.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";import"./Portal-CKyiLAPX.js";import"./Grid-Cj5fjV2g.js";import"./List-B6josrBo.js";import"./ListContext-Dwy-3B6k.js";import"./ListItem-BvZ21ujD.js";import"./ListItemText-COKbGLw8.js";import"./Divider-DZ5_AQ1V.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
