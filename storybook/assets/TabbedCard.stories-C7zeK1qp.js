import{r as d,j as e,w as O,e as W}from"./iframe-BPa6N3SD.js";import{m as f}from"./makeStyles-BPhOhugX.js";import{C as w,a as L}from"./CardContent-YgKXBj9n.js";import{E as _}from"./ErrorBoundary-v9isA-db.js";import{T as q,a as H}from"./Tabs-CuOzOYRQ.js";import{D as I}from"./Divider-Dr2s_Lqe.js";import{B}from"./BottomLink-BGmE-i79.js";import{C as M}from"./CardHeader-BfXCs8CQ.js";import{S}from"./Grid-DrfNOwcD.js";import{M as P}from"./index-CCMAs2uM.js";import"./preload-helper-PPVm8Dsz.js";import"./ErrorPanel-eT8hd-vo.js";import"./WarningPanel-BiqCtuVW.js";import"./ExpandMore-DqcL3_Ti.js";import"./AccordionDetails-D0ralmK5.js";import"./index-B9sM2jn7.js";import"./Collapse-BxVDKG_E.js";import"./MarkdownContent-Cj91Lx1J.js";import"./CodeSnippet-BardiS74.js";import"./Box-Cnz1HHCH.js";import"./styled-DR1Q9dRL.js";import"./CopyTextButton-C7QP5IPw.js";import"./useCopyToClipboard-CoHBkqe_.js";import"./useMountedState-B69jA6Y1.js";import"./Tooltip--dBTVPXa.js";import"./Popper-DYnRrkMR.js";import"./Portal-CybimJf6.js";import"./List-2A5-ge2l.js";import"./ListContext-BukMsw43.js";import"./ListItem-D402ttc5.js";import"./ListItemText-Dng-M9Mo.js";import"./LinkButton-D3OeU3pu.js";import"./Link-CTyMZEMw.js";import"./index-BdY7AnEA.js";import"./lodash-guIUsIxV.js";import"./useAnalytics-BfzgNjvV.js";import"./useApp-Hpyy33iD.js";import"./Button-CY4UCIcT.js";import"./KeyboardArrowRight-BFvCTBW2.js";import"./ArrowForward-CL0WZOFO.js";const D=f(n=>({root:{padding:n.spacing(0,2,0,2.5),minHeight:n.spacing(3)},indicator:{backgroundColor:n.palette.info.main,height:n.spacing(.3)}}),{name:"BackstageTabbedCard"}),V=O(n=>({root:{padding:n.spacing(2,2,2,2.5),display:"inline-block"},title:{fontWeight:700},subheader:{paddingTop:n.spacing(1)}}),{name:"BackstageTabbedCardBoldHeader"})(M);function m(n){const{slackChannel:c,errorBoundaryProps:p,children:s,title:b,deepLink:v,value:u,onChange:h}=n,x=D(),[g,j]=d.useState(0),k=h||((l,y)=>j(y));let C;u?d.Children.map(s,l=>{d.isValidElement(l)&&l?.props.value===u&&(C=l?.props.children)}):d.Children.map(s,(l,y)=>{d.isValidElement(l)&&y===g&&(C=l?.props.children)});const E=p||(c?{slackChannel:c}:{});return e.jsx(w,{children:e.jsxs(_,{...E,children:[b&&e.jsx(V,{title:b}),e.jsx(q,{classes:x,value:u||g,onChange:k,children:s}),e.jsx(I,{}),e.jsx(L,{children:C}),v&&e.jsx(B,{...v})]})})}const F=f(n=>({root:{minWidth:n.spacing(6),minHeight:n.spacing(3),margin:n.spacing(0,2,0,0),padding:n.spacing(.5,0,.5,0),textTransform:"none","&:hover":{opacity:1,backgroundColor:"transparent",color:n.palette.text.primary}},selected:{fontWeight:n.typography.fontWeightBold}}),{name:"BackstageCardTab"});function t(n){const{children:c,...p}=n,s=F();return e.jsx(H,{disableRipple:!0,classes:s,...p})}m.__docgenInfo={description:"",methods:[],displayName:"TabbedCard",props:{slackChannel:{required:!1,tsType:{name:"string"},description:"@deprecated Use errorBoundaryProps instead"},errorBoundaryProps:{required:!1,tsType:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}`,signature:{properties:[{key:"slackChannel",value:{name:"union",raw:"string | SlackChannel",elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  name: string;
  href?: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],required:!1}},{key:"onError",value:{name:"signature",type:"function",raw:"(error: Error, errorInfo: string) => null",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"string"},name:"errorInfo"}],return:{name:"null"}},required:!1}}]}}],raw:`PropsWithChildren<{
  slackChannel?: string | SlackChannel;
  onError?: (error: Error, errorInfo: string) => null;
}>`},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabProps"}],raw:"ReactElement<TabProps>"}],raw:"ReactElement<TabProps>[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<{}>, value: number | string) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}],raw:"ChangeEvent<{}>"},name:"event"},{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},deepLink:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  link: string;
  title: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}`,signature:{properties:[{key:"link",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLAnchorElement"}],raw:"MouseEvent<HTMLAnchorElement>"},name:"event"}],return:{name:"void"}},required:!1}}]}},description:""}}};t.__docgenInfo={description:`Card tab component used in {@link TabbedCard}

@public`,methods:[],displayName:"CardTab",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const r={height:200,width:500},T=({children:n})=>e.jsx(P,{children:n}),We={title:"Layout/Tabbed Card",component:m,decorators:[n=>e.jsx(S,{container:!0,spacing:4,children:e.jsx(S,{item:!0,children:n()})})],tags:["!manifest"]},a=()=>e.jsx(T,{children:e.jsxs(m,{title:"Default Example Header",children:[e.jsx(t,{label:"Option 1",children:e.jsx("div",{style:r,children:"Some content"})}),e.jsx(t,{label:"Option 2",children:e.jsx("div",{style:r,children:"Some content 2"})}),e.jsx(t,{label:"Option 3",children:e.jsx("div",{style:r,children:"Some content 3"})}),e.jsx(t,{label:"Option 4",children:e.jsx("div",{style:r,children:"Some content 4"})})]})}),R={title:"Go to XYZ Location",link:"#"},o=()=>e.jsx(T,{children:e.jsxs(m,{title:"Footer Link Example Header",deepLink:R,children:[e.jsx(t,{label:"Option 1",children:e.jsx("div",{style:r,children:"Some content"})}),e.jsx(t,{label:"Option 2",children:e.jsx("div",{style:r,children:"Some content 2"})}),e.jsx(t,{label:"Option 3",children:e.jsx("div",{style:r,children:"Some content 3"})}),e.jsx(t,{label:"Option 4",children:e.jsx("div",{style:r,children:"Some content 4"})})]})}),i=()=>{const[n,c]=d.useState("one"),p=(s,b)=>c(b);return e.jsxs(T,{children:[e.jsxs(W,{component:"span",children:["Selected tab is ",n]}),e.jsxs(m,{value:n,onChange:p,title:"Controlled Value Example",children:[e.jsx(t,{value:"one",label:"Option 1",children:e.jsx("div",{style:r,children:"Some content"})}),e.jsx(t,{value:"two",label:"Option 2",children:e.jsx("div",{style:r,children:"Some content 2"})}),e.jsx(t,{value:"three",label:"Option 3",children:e.jsx("div",{style:r,children:"Some content 3"})}),e.jsx(t,{value:"four",label:"Option 4",children:e.jsx("div",{style:r,children:"Some content 4"})})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"WithFooterLink"};i.__docgenInfo={description:"",methods:[],displayName:"WithControlledTabValue"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const Default = () => {
  return (
    <Wrapper>
      <TabbedCard title="Default Example Header">
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>
  );
};
`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const WithFooterLink = () => {
  return (
    <Wrapper>
      <TabbedCard title="Footer Link Example Header" deepLink={linkInfo}>
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>
  );
};
`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{code:`const WithControlledTabValue = () => {
  const [selectedTab, setSelectedTab] = useState<string | number>("one");

  const handleChange = (_ev: any, newSelectedTab: string | number) =>
    setSelectedTab(newSelectedTab);

  return (
    <Wrapper>
      <Typography component="span">Selected tab is {selectedTab}</Typography>

      <TabbedCard
        value={selectedTab}
        onChange={handleChange}
        title="Controlled Value Example"
      >
        <CardTab value="one" label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab value="two" label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab value="three" label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab value="four" label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>
  );
};
`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <TabbedCard title="Default Example Header">
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Wrapper>
      <TabbedCard title="Footer Link Example Header" deepLink={linkInfo}>
        <CardTab label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [selectedTab, setSelectedTab] = useState<string | number>('one');
  const handleChange = (_ev: any, newSelectedTab: string | number) => setSelectedTab(newSelectedTab);
  return <Wrapper>
      <Typography component="span">Selected tab is {selectedTab}</Typography>

      <TabbedCard value={selectedTab} onChange={handleChange} title="Controlled Value Example">
        <CardTab value="one" label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab value="two" label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab value="three" label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab value="four" label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
    </Wrapper>;
}`,...i.parameters?.docs?.source}}};const we=["Default","WithFooterLink","WithControlledTabValue"];export{a as Default,i as WithControlledTabValue,o as WithFooterLink,we as __namedExportsOrder,We as default};
