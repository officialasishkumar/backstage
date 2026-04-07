import{j as e}from"./iframe-DVcxdhoL.js";import{C as t}from"./CodeSnippet-BhCN8GVS.js";import{I as o}from"./InfoCard-CQIIG5c4.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CEEtJDX_.js";import"./styled-CFG22yA2.js";import"./CopyTextButton-CIwt-MUw.js";import"./useCopyToClipboard-DsXf1p_m.js";import"./useMountedState-CYBBtHKr.js";import"./Tooltip-CLapkFrU.js";import"./Popper-C6RVnZCX.js";import"./Portal-CN0zdblU.js";import"./index-D35Dverb.js";import"./CardContent-DXUnyFOt.js";import"./ErrorBoundary-d3d9uswQ.js";import"./ErrorPanel-BaiCN28C.js";import"./WarningPanel-BOlG15Vm.js";import"./ExpandMore-CHBMo2iS.js";import"./AccordionDetails-C0VBZ7GZ.js";import"./index-B9sM2jn7.js";import"./Collapse-CoJ6BoJZ.js";import"./MarkdownContent-CioScwrP.js";import"./makeStyles-DvhSq6P6.js";import"./Link-CDu7g4U_.js";import"./lodash-BarMUI2a.js";import"./useAnalytics-D67wwHSJ.js";import"./useApp-sEZYRDhs.js";import"./Grid-Dms4qLVU.js";import"./List-DXUnol4x.js";import"./ListContext-w1A3oPfR.js";import"./ListItem-BwR4C4uD.js";import"./ListItemText-CuFAvBLe.js";import"./LinkButton-B4jsUm1b.js";import"./Button-CD-VB3jZ.js";import"./CardHeader-Bhp_gDCz.js";import"./Divider-vP1lkIQX.js";import"./CardActions-BC5uXgBN.js";import"./BottomLink-CArFvYau.js";import"./ArrowForward-CmIu9Zxf.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
