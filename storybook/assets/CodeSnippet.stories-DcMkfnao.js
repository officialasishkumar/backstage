import{j as e}from"./iframe-D_dthwJh.js";import{C as t}from"./CodeSnippet-BcxUzhJu.js";import{I as o}from"./InfoCard-D0nQVlFP.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BkfaYvLl.js";import"./styled-ClS6a4l6.js";import"./CopyTextButton-BuV8owy4.js";import"./useCopyToClipboard-D8URo-wA.js";import"./useMountedState-Cazxj0V9.js";import"./Tooltip-Cd-sen2U.js";import"./Popper-D6KVGLgx.js";import"./Portal-BUjXNiYO.js";import"./index-DMgM-NvI.js";import"./CardContent-CHm1wflM.js";import"./ErrorBoundary-CumB_Zrb.js";import"./ErrorPanel-KKX5LcYK.js";import"./WarningPanel-t1ChgcN0.js";import"./ExpandMore-juWm_omF.js";import"./AccordionDetails-DWfCLGSB.js";import"./index-B9sM2jn7.js";import"./Collapse-5abwWzAL.js";import"./MarkdownContent-BPIooCL5.js";import"./makeStyles-DvB3MZbd.js";import"./Link-DIS7qTGn.js";import"./lodash-BGiaY2vY.js";import"./useAnalytics-BFleSJbt.js";import"./useApp-DOW2ZF1x.js";import"./Grid-BjyqMpwT.js";import"./List-BtLOYLzX.js";import"./ListContext-C98V7euk.js";import"./ListItem-DTl55zDW.js";import"./ListItemText-CkW_v4PE.js";import"./LinkButton-CkhvFQWF.js";import"./Button-OdR2bCzv.js";import"./CardHeader-CY02dRit.js";import"./Divider-BMLrXSiB.js";import"./CardActions-Bsr1vB9L.js";import"./BottomLink-DbDXawz3.js";import"./ArrowForward-Cna7yfDE.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
