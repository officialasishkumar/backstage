import{j as e}from"./iframe-BzMU8KOh.js";import{C as t}from"./CodeSnippet-eQgrZ502.js";import{I as o}from"./InfoCard-DcE-fBp5.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-Dy1i5PnV.js";import"./styled-DjuCxYRu.js";import"./CopyTextButton-DruBOno8.js";import"./useCopyToClipboard-CfMKFvN4.js";import"./useMountedState-CgLAe5As.js";import"./Tooltip-DIsjQrri.js";import"./Popper-B7Pqac31.js";import"./Portal-ZMtLzGP0.js";import"./index-DkmrC5fw.js";import"./makeStyles-C3oh1vXh.js";import"./CardContent-BI891Vis.js";import"./ErrorBoundary-BSo_nQqi.js";import"./ErrorPanel-Dhupsp7O.js";import"./WarningPanel-9H_hq8N6.js";import"./ExpandMore-CNhzQKkV.js";import"./AccordionDetails-DuzTLskc.js";import"./index-B9sM2jn7.js";import"./Collapse-DeqtQZib.js";import"./MarkdownContent-Bp2NqM-o.js";import"./Grid-D2HTVDY3.js";import"./List-D4klNrOh.js";import"./ListContext-C2BSnJyA.js";import"./ListItem-TAK5bns_.js";import"./ListItemText-CV7ylJAq.js";import"./LinkButton-nMnvvSBi.js";import"./Link-BFHx4W-6.js";import"./lodash-BBveFXvI.js";import"./useAnalytics-TOERclJD.js";import"./useApp-BFWv9POw.js";import"./Button-BjvxRy7t.js";import"./CardHeader-CHFmDYek.js";import"./Divider-B-br5j_L.js";import"./CardActions-mMslZWGj.js";import"./BottomLink-Dp6f1U5u.js";import"./ArrowForward-C16HnmAa.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
