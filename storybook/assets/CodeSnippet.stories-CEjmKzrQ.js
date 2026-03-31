import{j as e}from"./iframe-BnLaYHT0.js";import{C as t}from"./CodeSnippet-BpW7ax5j.js";import{I as o}from"./InfoCard-BFmUhr-z.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-D4mbYqDO.js";import"./styled-Dah7uO8h.js";import"./CopyTextButton-Bc5d_wml.js";import"./useCopyToClipboard-sGiklRSA.js";import"./useMountedState-BzlV24-v.js";import"./Tooltip-DEaAQANQ.js";import"./Popper-CajeHu2h.js";import"./Portal-CJRUocKS.js";import"./index-Cpm2Va4W.js";import"./makeStyles-Ci9OQMMV.js";import"./CardContent-B2hT5gPU.js";import"./ErrorBoundary-Df87RvFb.js";import"./ErrorPanel-3Vxyntfl.js";import"./WarningPanel-CwyYWRp0.js";import"./ExpandMore-CZNdg9bw.js";import"./AccordionDetails-DKUjEkWI.js";import"./index-B9sM2jn7.js";import"./Collapse-DK8ofP-6.js";import"./MarkdownContent-Df4yV8aW.js";import"./Grid-BVx1ZeMm.js";import"./List-DXJGlMrG.js";import"./ListContext-ZUAJ6gMg.js";import"./ListItem-DEKaS7rV.js";import"./ListItemText-BYfeNc6y.js";import"./LinkButton-XdpORiEc.js";import"./Link-Boy8ho4w.js";import"./lodash-DpN-AoLg.js";import"./useAnalytics-DZdNMYw7.js";import"./useApp-DC1925IS.js";import"./Button-CeY8NiEH.js";import"./CardHeader-CLSqfLFc.js";import"./Divider-CNZiFlqL.js";import"./CardActions-BVHEFTuo.js";import"./BottomLink-DPOefVDT.js";import"./ArrowForward-nfHtTg4B.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
