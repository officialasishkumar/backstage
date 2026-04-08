import{j as e}from"./iframe-CIiIDGZ-.js";import{C as t}from"./CodeSnippet-DwY_PwOK.js";import{I as o}from"./InfoCard-OnsrHmvf.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-DtVUycxx.js";import"./styled-CIZpuVc6.js";import"./CopyTextButton-Bs6n8yXa.js";import"./useCopyToClipboard-JljFEsym.js";import"./useMountedState-IAzCyzSD.js";import"./Tooltip-Dt97tpAm.js";import"./Popper-COve1U5T.js";import"./Portal-BkGhIEsM.js";import"./index-Cc1WYh9h.js";import"./CardContent-CJjTEZE_.js";import"./ErrorBoundary-CUFWafuP.js";import"./ErrorPanel-Chyz-mBS.js";import"./WarningPanel-84hZ_1ys.js";import"./ExpandMore-CcRp_gpL.js";import"./AccordionDetails-VSU2B5SU.js";import"./index-B9sM2jn7.js";import"./Collapse-DKwJiPfJ.js";import"./MarkdownContent-Db_Ar1Aw.js";import"./makeStyles-DIRFdalX.js";import"./Link-DJjPQadS.js";import"./lodash-BzBabpH3.js";import"./useAnalytics-C8Elrazu.js";import"./useApp-CeorHsAH.js";import"./Grid-Zain3HUl.js";import"./List-BGk_33Kg.js";import"./ListContext-C8freVI4.js";import"./ListItem-CqGsN4UV.js";import"./ListItemText-CVPwtYNm.js";import"./LinkButton-8qpL4LIe.js";import"./Button-MA1fMA7-.js";import"./CardHeader-DMaluaFh.js";import"./Divider-BGF6ekry.js";import"./CardActions-CjLOSnzw.js";import"./BottomLink-BasuuMnQ.js";import"./ArrowForward-B1gCV4rN.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
