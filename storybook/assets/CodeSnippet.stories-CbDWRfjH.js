import{j as e}from"./iframe-DyjKfHWP.js";import{C as t}from"./CodeSnippet-BfxZ2cTt.js";import{I as o}from"./InfoCard-DRD9zf6-.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DrwrZr2h.js";import"./styled-C09kP24H.js";import"./CopyTextButton-BOnHpUDd.js";import"./useCopyToClipboard-K2-SSRbx.js";import"./useMountedState-CGjuPg1I.js";import"./Tooltip-gxRFNsDR.js";import"./Popper-BbowAVjj.js";import"./Portal-DshplTSh.js";import"./index-BxgWU5HL.js";import"./CardContent-CBywm-UF.js";import"./ErrorBoundary-B6j9AypH.js";import"./ErrorPanel-WS_MLd2q.js";import"./WarningPanel-Bzlxor5v.js";import"./ExpandMore-DJ2T2C8H.js";import"./AccordionDetails-DGHyCEBL.js";import"./index-B9sM2jn7.js";import"./Collapse-BMWOAJaZ.js";import"./MarkdownContent-C-irxnEP.js";import"./makeStyles-BTx5IhEq.js";import"./Grid-Yb0gK3gi.js";import"./List-BPKCu-iI.js";import"./ListContext-Aak99S-R.js";import"./ListItem-d1LcQsBU.js";import"./ListItemText-93JIksiO.js";import"./LinkButton-CpdguBMp.js";import"./Link-GxS-0vqx.js";import"./lodash-C9XZXW9l.js";import"./useAnalytics-DcziEhY3.js";import"./useApp-lFVRdKSK.js";import"./Button-DxHxm4FN.js";import"./CardHeader-BLSe9sjV.js";import"./Divider-C90KJOkZ.js";import"./CardActions-ChsCvdZY.js";import"./BottomLink-DQFR0ohV.js";import"./ArrowForward-B9cTQ4EB.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
