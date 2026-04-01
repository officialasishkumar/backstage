import{j as e}from"./iframe-hODDjxEI.js";import{C as t}from"./CodeSnippet-yOWmTpVZ.js";import{I as o}from"./InfoCard-C1Hy_4-D.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D9xbeeDr.js";import"./styled-0hYU00PK.js";import"./CopyTextButton-D8PP4mnR.js";import"./useCopyToClipboard-BhfNCz1T.js";import"./useMountedState-WIh-cZ-b.js";import"./Tooltip-D-EFxL80.js";import"./Popper-CHhNufeX.js";import"./Portal-CzdVLRe2.js";import"./index-CcwbHv03.js";import"./CardContent-D8V96CnU.js";import"./ErrorBoundary-B-Vipw1w.js";import"./ErrorPanel-BSbqKZnS.js";import"./WarningPanel-DeG7cRwT.js";import"./ExpandMore-DFqQ2-AE.js";import"./AccordionDetails-DUzMIMZk.js";import"./index-B9sM2jn7.js";import"./Collapse-wne6B_is.js";import"./MarkdownContent-CzCrGaQE.js";import"./makeStyles-aIh2F1t-.js";import"./Link-B3hayh6l.js";import"./lodash-m16iCv2r.js";import"./useAnalytics-DnjR9eFY.js";import"./useApp-4cPWtTY3.js";import"./Grid-EriWvE-n.js";import"./List-W4gqv1lF.js";import"./ListContext-DIhobSxE.js";import"./ListItem-DDCqoUKb.js";import"./ListItemText-DasnL6-v.js";import"./LinkButton-Df8Z8lPj.js";import"./Button-CIAzspzG.js";import"./CardHeader-BQTJBfVY.js";import"./Divider-DXrAbp3F.js";import"./CardActions-s-_1EXnx.js";import"./BottomLink-CmQJjnM4.js";import"./ArrowForward-Cv5lwi6v.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
