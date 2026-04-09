import{j as e}from"./iframe-BwbkeUNF.js";import{C as t}from"./CodeSnippet-DjXAHLDS.js";import{I as o}from"./InfoCard-CaCBXMcC.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BpqKX1IA.js";import"./styled-DKzWxQyh.js";import"./CopyTextButton-C3YB8r9r.js";import"./useCopyToClipboard-a9DkHHyX.js";import"./useMountedState-Ddw8xbV-.js";import"./Tooltip-BCiMtrfJ.js";import"./Popper-CtD4YCCn.js";import"./Portal-qCFAxiUf.js";import"./index-zhCgspdl.js";import"./CardContent-CY6eNhYz.js";import"./ErrorBoundary-CuTXkISQ.js";import"./ErrorPanel-CkbFRbXk.js";import"./WarningPanel-D6hRN00L.js";import"./ExpandMore-BFq6hzt-.js";import"./AccordionDetails-D-mRhsTv.js";import"./index-B9sM2jn7.js";import"./Collapse-DrBHssfd.js";import"./MarkdownContent-PQKKAggL.js";import"./makeStyles-CGCER2cu.js";import"./Link-CjNA6wJy.js";import"./lodash-ClqrAeSM.js";import"./useAnalytics-B7PiVxCY.js";import"./useApp-DGHdqxLG.js";import"./Grid-DD0XASu5.js";import"./List-ChwsDTGU.js";import"./ListContext-BDNI8oKK.js";import"./ListItem-BHaUgdJU.js";import"./ListItemText-0UFVefBy.js";import"./LinkButton-jgnAiZG3.js";import"./Button-CfqMoVXI.js";import"./CardHeader-CvsLJv4-.js";import"./Divider-MZaCHw5q.js";import"./CardActions-C4LaHG7S.js";import"./BottomLink-Cw6EBbzJ.js";import"./ArrowForward-BjRg6OBM.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
