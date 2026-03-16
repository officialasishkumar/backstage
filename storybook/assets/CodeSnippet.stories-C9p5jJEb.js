import{j as e}from"./iframe-_E948MVz.js";import{C as t}from"./CodeSnippet-BpCSOurq.js";import{I as d}from"./InfoCard-Cwg-ub0Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CkUsT8sz.js";import"./styled-DbkjhS7C.js";import"./CopyTextButton-BOpnSgs5.js";import"./useCopyToClipboard-D1wlr4gB.js";import"./useMountedState-BylHk9na.js";import"./Tooltip-CaMAvpLY.js";import"./Popper-DVCylAOX.js";import"./Portal-gFrfFYQV.js";import"./index-DJ6lgYrc.js";import"./makeStyles-CeVQhawL.js";import"./CardContent-CRtSiDNE.js";import"./ErrorBoundary-DZlwQdDH.js";import"./ErrorPanel-CyS2eQGF.js";import"./WarningPanel-B5w_AAvm.js";import"./ExpandMore-C1tdf9i4.js";import"./AccordionDetails-C0eIh-WX.js";import"./index-B9sM2jn7.js";import"./Collapse-BLf2ePuA.js";import"./MarkdownContent-BlWuHRlI.js";import"./Grid-DjkXhwP0.js";import"./List-D7wngo3z.js";import"./ListContext-DMVOB75k.js";import"./ListItem-DZRnMDoX.js";import"./ListItemText-DxsdUdg2.js";import"./LinkButton-DPDYmGZe.js";import"./Link-yJri3-iz.js";import"./lodash-C-i153t0.js";import"./index-B7hK4tkb.js";import"./useAnalytics-Jbkamk-n.js";import"./useApp-DqMZs1Wr.js";import"./Button-8HeP9eyX.js";import"./CardHeader-CdFRzJ5c.js";import"./Divider-Chvt_nSc.js";import"./CardActions-C1gWZfAI.js";import"./BottomLink-D1zWU7ER.js";import"./ArrowForward-1R6xO2kA.js";const $={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},c={width:300},p=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,l=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,m=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,r=()=>e.jsx(d,{title:"JavaScript example",children:e.jsx(t,{text:"const hello = 'World';",language:"javascript"})}),o=()=>e.jsx(d,{title:"JavaScript multi-line example",children:e.jsx(t,{text:p,language:"javascript"})}),a=()=>e.jsx(d,{title:"Show line numbers",children:e.jsx(t,{text:p,language:"javascript",showLineNumbers:!0})}),s=()=>e.jsxs(d,{title:"Overflow",children:[e.jsx("div",{style:c,children:e.jsx(t,{text:p,language:"javascript"})}),e.jsx("div",{style:c,children:e.jsx(t,{text:p,language:"javascript",showLineNumbers:!0})})]}),n=()=>e.jsxs(d,{title:"Multiple languages",children:[e.jsx(t,{text:p,language:"javascript",showLineNumbers:!0}),e.jsx(t,{text:l,language:"typescript",showLineNumbers:!0}),e.jsx(t,{text:m,language:"python",showLineNumbers:!0})]}),i=()=>e.jsx(d,{title:"Copy Code",children:e.jsx(t,{text:p,language:"javascript",showCopyCodeButton:!0})});r.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};a.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};s.__docgenInfo={description:"",methods:[],displayName:"Overflow"};n.__docgenInfo={description:"",methods:[],displayName:"Languages"};i.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => (
  <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>
);
`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const MultipleLines = () => (
  <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>
);
`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const LineNumbers = () => (
  <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>
);
`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Overflow = () => (
  <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>
);
`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const Languages = () => (
  <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>
);
`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{code:`const CopyCode = () => (
  <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>
);
`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...i.parameters?.docs?.source}}};const ee=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{i as CopyCode,r as Default,n as Languages,a as LineNumbers,o as MultipleLines,s as Overflow,ee as __namedExportsOrder,$ as default};
