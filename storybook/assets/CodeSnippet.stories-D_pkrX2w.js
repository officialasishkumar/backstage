import{j as e}from"./iframe-C11JX4Ba.js";import{C as t}from"./CodeSnippet-C0j8Pixd.js";import{I as o}from"./InfoCard-BHdkntEN.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-BT_w3FeJ.js";import"./styled-CSoi2Z33.js";import"./CopyTextButton-C4rq1tpa.js";import"./useCopyToClipboard-pMSWKTpI.js";import"./useMountedState-hx0QwsHm.js";import"./Tooltip-UyoZLn60.js";import"./Popper-BYwa50Wf.js";import"./Portal-B1VPiTGn.js";import"./index-9AoUhYV3.js";import"./CardContent-Do1idHxH.js";import"./ErrorBoundary-CGLJwplc.js";import"./ErrorPanel-Dld1kl6l.js";import"./WarningPanel-x8J4gous.js";import"./ExpandMore-B4w4T5ib.js";import"./AccordionDetails-yQhzZXX7.js";import"./index-B9sM2jn7.js";import"./Collapse-mTxrPkGc.js";import"./MarkdownContent-CpG-ppn9.js";import"./makeStyles-gpfZ2MPN.js";import"./Link-DJcQ-aLb.js";import"./lodash-OqA7S4ml.js";import"./useAnalytics-C5cwZo0H.js";import"./useApp-CYq77aVU.js";import"./Grid-BSU_hxOH.js";import"./List-ClmQaIAH.js";import"./ListContext-C6SY7huE.js";import"./ListItem-C7uaqKnP.js";import"./ListItemText-3cbIjFw4.js";import"./LinkButton-DssXJLuV.js";import"./Button-BqLfAs2I.js";import"./CardHeader-DjWLYM9C.js";import"./Divider-CmidtaYf.js";import"./CardActions-OKIJgJxX.js";import"./BottomLink-Dw7jWVi8.js";import"./ArrowForward-BIoo2GYM.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
