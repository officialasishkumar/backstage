import{j as e}from"./iframe-D2P1gL3G.js";import{C as t}from"./CodeSnippet-DNtfGivc.js";import{I as o}from"./InfoCard-DjtGwFvE.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-ZH5bpM8G.js";import"./styled-CvACks6z.js";import"./CopyTextButton-B_aOyIY6.js";import"./useCopyToClipboard-P5UWRi0Z.js";import"./useMountedState-B2-kdrdQ.js";import"./Tooltip-BrmdzuQO.js";import"./Popper-Jb_2zun_.js";import"./Portal-CZcmajaJ.js";import"./index-DGJxFe6q.js";import"./CardContent-DP5KpsOM.js";import"./ErrorBoundary-CbEoeCBH.js";import"./ErrorPanel-DoFCUs5p.js";import"./WarningPanel-CTck5SRQ.js";import"./ExpandMore-h7Ug34IM.js";import"./AccordionDetails-BpmcLgT4.js";import"./index-B9sM2jn7.js";import"./Collapse-DUSW-jqM.js";import"./MarkdownContent-B9HVEd1F.js";import"./makeStyles-Clh2njjY.js";import"./Link-DWOvRufO.js";import"./lodash-DhI4PBPP.js";import"./useAnalytics-CZuK40Zw.js";import"./useApp-Dr4H7OwE.js";import"./Grid-Dr3D4icg.js";import"./List-BN_I58y-.js";import"./ListContext-gHvGwQdG.js";import"./ListItem-BjwKQPwC.js";import"./ListItemText-WS6vwabx.js";import"./LinkButton-BNzCbKIj.js";import"./Button-D92MPcOm.js";import"./CardHeader-BTJXSsRw.js";import"./Divider-BCJX_69r.js";import"./CardActions-D_D3hJDk.js";import"./BottomLink-BKBG1Nn3.js";import"./ArrowForward-cqDexfV_.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,m=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,c=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,s=()=>e.jsx(o,{title:"JavaScript example",children:e.jsx(t,{text:"const hello = 'World';",language:"javascript"})}),a=()=>e.jsx(o,{title:"JavaScript multi-line example",children:e.jsx(t,{text:r,language:"javascript"})}),i=()=>e.jsx(o,{title:"Show line numbers",children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})}),n=()=>e.jsxs(o,{title:"Overflow",children:[e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript"})}),e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})})]}),p=()=>e.jsxs(o,{title:"Multiple languages",children:[e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0}),e.jsx(t,{text:m,language:"typescript",showLineNumbers:!0}),e.jsx(t,{text:c,language:"python",showLineNumbers:!0})]}),l=()=>e.jsx(o,{title:"Copy Code",children:e.jsx(t,{text:r,language:"javascript",showCopyCodeButton:!0})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};i.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};n.__docgenInfo={description:"",methods:[],displayName:"Overflow"};p.__docgenInfo={description:"",methods:[],displayName:"Languages"};l.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...l.parameters?.docs?.source}}};const $=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{l as CopyCode,s as Default,p as Languages,i as LineNumbers,a as MultipleLines,n as Overflow,$ as __namedExportsOrder,Z as default};
