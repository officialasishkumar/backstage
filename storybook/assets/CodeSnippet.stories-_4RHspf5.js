import{j as e}from"./iframe-DeVvrktA.js";import{C as t}from"./CodeSnippet-BEmMmhuI.js";import{I as o}from"./InfoCard-9m9QeCVx.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DOTqXu-6.js";import"./styled-oeuDQEze.js";import"./CopyTextButton-CX30i4s7.js";import"./useCopyToClipboard-CkvHZi0N.js";import"./useMountedState-D8dcyD-P.js";import"./Tooltip-CRaoVjQ4.js";import"./Popper-Cbnycm1A.js";import"./Portal-BnHJ445C.js";import"./index-DTK3kZOY.js";import"./CardContent-CR8yGNlZ.js";import"./ErrorBoundary-DR1HMzNa.js";import"./ErrorPanel-D6SIioPU.js";import"./WarningPanel-WHRWSafU.js";import"./ExpandMore-DibpsI70.js";import"./AccordionDetails-BER2vuEo.js";import"./index-B9sM2jn7.js";import"./Collapse-DBmO3Kkh.js";import"./MarkdownContent-BjZszMqE.js";import"./makeStyles-CDec1JgF.js";import"./Link-B6U9VXJa.js";import"./lodash-V1Qj8ZxO.js";import"./useAnalytics-Zw1fFqKc.js";import"./useApp-web1meD-.js";import"./Grid-10XIJtv4.js";import"./List-BmFOCbHw.js";import"./ListContext-Bl_Wg17k.js";import"./ListItem-DTIEUFkk.js";import"./ListItemText-yFOw_HmD.js";import"./LinkButton-kaphAHKS.js";import"./Button-lN69gEUI.js";import"./CardHeader-KgoInzo2.js";import"./Divider-BBFNWUSp.js";import"./CardActions-DjXwd_we.js";import"./BottomLink-9Rx13Ryu.js";import"./ArrowForward-008iR1vx.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
