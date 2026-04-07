import{j as e}from"./iframe-BO_5tggG.js";import{C as t}from"./CodeSnippet-zEQrw_T4.js";import{I as o}from"./InfoCard-Cbjb2qAc.js";import"./preload-helper-PPVm8Dsz.js";import"./Box-CfORvOdf.js";import"./styled-b9HJcToZ.js";import"./CopyTextButton-CFZUtUd7.js";import"./useCopyToClipboard-DOYygHqI.js";import"./useMountedState-ob0FKbjJ.js";import"./Tooltip-D7P0enQt.js";import"./Popper-DLJkmYqC.js";import"./Portal-BrtXVkDD.js";import"./index-BYPhHgSY.js";import"./CardContent-BodUW4MQ.js";import"./ErrorBoundary-DDtmjIS5.js";import"./ErrorPanel-Bkrc0pz5.js";import"./WarningPanel-C169mnk7.js";import"./ExpandMore-DpSubzLY.js";import"./AccordionDetails-Bi2IJ0Rx.js";import"./index-B9sM2jn7.js";import"./Collapse-CzexmusQ.js";import"./MarkdownContent-ET2mybt7.js";import"./makeStyles-qdsN5qZw.js";import"./Link-Dg9RiCku.js";import"./lodash-B-_hEigx.js";import"./useAnalytics-DiFHt5PS.js";import"./useApp-DdxTl6og.js";import"./Grid-CnkSMyRl.js";import"./List-G7DDumso.js";import"./ListContext-B-Wc4pE1.js";import"./ListItem-sKW0pqw1.js";import"./ListItemText-DyH15FQE.js";import"./LinkButton-C-BO2N11.js";import"./Button-RkeUke7l.js";import"./CardHeader-DBQnjW6-.js";import"./Divider-9aopozfB.js";import"./CardActions-Xoufa_E1.js";import"./BottomLink-DHEQeiJi.js";import"./ArrowForward-BAdzZtwk.js";const Z={title:"Data Display/CodeSnippet",component:t,tags:["!manifest"]},d={width:300},r=`const greeting = "Hello";
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
