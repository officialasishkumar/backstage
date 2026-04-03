import{j as e}from"./iframe-B8N4GvwI.js";import{C as t}from"./CodeSnippet-q2WTZ-jj.js";import{I as o}from"./InfoCard-DyJf5ts9.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-MYHTFpuj.js";import"./styled-DnQPDG99.js";import"./CopyTextButton-DZNYK8sC.js";import"./useCopyToClipboard-HWdxJ6ki.js";import"./useMountedState-BUHmGH1y.js";import"./Tooltip-DW4X55ZT.js";import"./Popper-Bkk-r00N.js";import"./Portal-DI7AqiTH.js";import"./index-8D16w7r_.js";import"./CardContent-DFB3D3Y4.js";import"./ErrorBoundary-Dw-xKJQy.js";import"./ErrorPanel-8xco2MCR.js";import"./WarningPanel-Ku1v3GPQ.js";import"./ExpandMore-CqBUE46I.js";import"./AccordionDetails-CA8_s1mo.js";import"./index-B9sM2jn7.js";import"./Collapse-DZWChPOX.js";import"./MarkdownContent-BzPKdt5x.js";import"./makeStyles-_6Yu2_YB.js";import"./Link-PlY-q14u.js";import"./lodash-BgY7d7CH.js";import"./useAnalytics-BHUlNS6C.js";import"./useApp-BEeSmtgR.js";import"./Grid-QaPYXNRs.js";import"./List-0a88D0vi.js";import"./ListContext-Dw62DV8y.js";import"./ListItem-DavGzvU0.js";import"./ListItemText-DenrmzVf.js";import"./LinkButton-kh48Wix9.js";import"./Button-DPczMlP2.js";import"./CardHeader-Cm0J4QLT.js";import"./Divider-Bt_pjoAt.js";import"./CardActions-Bvqu90nG.js";import"./BottomLink-CvZ1-pJ0.js";import"./ArrowForward-C7dOEvsW.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
