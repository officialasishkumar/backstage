import{j as t}from"./iframe-DIo-SVbu.js";import{R as s}from"./ResponseErrorPanel-BgI62Ijw.js";import"./preload-helper-PPVm8Dsz.js";import"./makeStyles-DQU7Dv0P.js";import"./ErrorPanel-BmaIqUxn.js";import"./WarningPanel-BOHyomdW.js";import"./ExpandMore-BgSlDM6I.js";import"./AccordionDetails-q-sTEdd4.js";import"./index-B9sM2jn7.js";import"./Collapse-BsSPbFVQ.js";import"./MarkdownContent-ZKdzag3g.js";import"./CodeSnippet-CeX8qwwK.js";import"./Box-DSdsOjrk.js";import"./styled-BsApB3tE.js";import"./CopyTextButton-DPzAxb5N.js";import"./useCopyToClipboard-Ch1BFfQF.js";import"./useMountedState-CYCgoyDm.js";import"./Tooltip-RSYyjwWd.js";import"./Popper-Mh-qpcao.js";import"./Portal-CvYRjmi_.js";import"./Grid-CQTc9qXc.js";import"./List-DIbhVy0B.js";import"./ListContext-maWUp7BP.js";import"./ListItem-B48sv7Dp.js";import"./ListItemText-Bj8x_bGs.js";import"./Divider-Bv1BaoB-.js";const I={title:"Data Display/ResponseErrorPanel",component:s,tags:["!manifest"]},r=o=>t.jsx(s,{...o});r.args={error:new Error("Error message from error object"),defaultExpanded:!1};const e=o=>t.jsx(s,{...o});e.args={error:new Error("test"),defaultExpanded:!1,title:"Title prop is passed"};r.__docgenInfo={description:"",methods:[],displayName:"Default",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"WithTitle",props:{error:{required:!0,tsType:{name:"Error"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:""},titleFormat:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
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
