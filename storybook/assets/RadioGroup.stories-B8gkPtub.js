import{r as m,R as S,ax as H,av as U,j as r,p as re}from"./iframe-DyjKfHWP.js";import{$ as K,c as ie,d as se,b as J,a as Q,f as de,e as le}from"./utils-DR_NZBjG.js";import{$ as oe}from"./FieldError-b2DiV5_z.js";import{c as te,b as ne,a as ue}from"./Form-C910l1ZH.js";import{$ as ce}from"./Label-DAkixtdH.js";import{$ as pe,c as be,a as fe}from"./SelectionIndicator-BG4I083n.js";import{a as me}from"./Text-E1WRWeuL.js";import{b as j,d as ve,$ as $e,a as Re}from"./useObjectRef-7_hM05iQ.js";import{$ as he,a as k,u as xe,e as ge}from"./useFocusable-DdGM9NE4.js";import{$ as ye}from"./useControlledState-CeMfn_cd.js";import{$ as qe,b as Pe,a as De}from"./useFocusRing-0OqomWJ9.js";import{$ as Se}from"./useField-DsnjVxUu.js";import{$ as je}from"./context-pT42zyZM.js";import{$ as Ve}from"./useFormReset-BHnTRn45.js";import{$ as z}from"./usePress-B4lsLING.js";import{a as Ce}from"./VisuallyHidden-C6xu9piM.js";import{F as Ge}from"./FieldLabel-CbP5D59y.js";import{F as Be}from"./FieldError-BJlvB4E8.js";import"./preload-helper-PPVm8Dsz.js";import"./Hidden-B_goyCM1.js";import"./openLink-DApmBWn3.js";import"./useLabel-mgp2OWRO.js";import"./useLabels-BnLSBoeu.js";import"./textSelection-BAQRVi3u.js";const X=new WeakMap;function Ie(e,a,l){let{value:s,children:p,"aria-label":o,"aria-labelledby":v,onPressStart:d,onPressEnd:c,onPressChange:u,onPress:t,onPressUp:n,onClick:b}=e;const $=e.isDisabled||a.isDisabled;let P=a.selectedValue===s,q=G=>{G.stopPropagation(),a.setSelectedValue(s)},{pressProps:D,isPressed:B}=z({onPressStart:d,onPressEnd:c,onPressChange:u,onPress:t,onPressUp:n,onClick:b,isDisabled:$}),{pressProps:I,isPressed:C}=z({onPressStart:d,onPressEnd:c,onPressChange:u,onPressUp:n,onClick:b,isDisabled:$,onPress(G){var A;t?.(G),a.setSelectedValue(s),(A=l.current)===null||A===void 0||A.focus()}}),{focusableProps:T}=he(j(e,{onFocus:()=>a.setLastFocusedValue(s)}),l),y=j(D,T),f=k(e,{labelable:!0}),R=-1;a.selectedValue!=null?a.selectedValue===s&&(R=0):(a.lastFocusedValue===s||a.lastFocusedValue==null)&&(R=0),$&&(R=void 0);let{name:h,form:w,descriptionId:ee,errorMessageId:ae,validationBehavior:W}=X.get(a);return Ve(l,a.defaultSelectedValue,a.setSelectedValue),te({validationBehavior:W},a,l),{labelProps:j(I,m.useMemo(()=>({onClick:G=>G.preventDefault(),onMouseDown:G=>G.preventDefault()}),[])),inputProps:j(f,{...y,type:"radio",name:h,form:w,tabIndex:R,disabled:$,required:a.isRequired&&W==="native",checked:P,value:s,onChange:q,"aria-describedby":[e["aria-describedby"],a.isInvalid?ae:null,ee].filter(Boolean).join(" ")||void 0}),isDisabled:$,isSelected:P,isPressed:B||C}}function we(e,a){let{name:l,form:s,isReadOnly:p,isRequired:o,isDisabled:v,orientation:d="vertical",validationBehavior:c="aria"}=e,{direction:u}=je(),{isInvalid:t,validationErrors:n,validationDetails:b}=a.displayValidation,{labelProps:$,fieldProps:P,descriptionProps:q,errorMessageProps:D}=Se({...e,labelElementType:"span",isInvalid:a.isInvalid,errorMessage:e.errorMessage||n}),B=k(e,{labelable:!0}),{focusWithinProps:I}=qe({onBlurWithin(y){var f;(f=e.onBlur)===null||f===void 0||f.call(e,y),a.selectedValue||a.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),C=y=>{let f;switch(y.key){case"ArrowRight":u==="rtl"&&d!=="vertical"?f="prev":f="next";break;case"ArrowLeft":u==="rtl"&&d!=="vertical"?f="next":f="prev";break;case"ArrowDown":f="next";break;case"ArrowUp":f="prev";break;default:return}y.preventDefault();let R=pe(y.currentTarget,{from:ge(y),accept:w=>w instanceof xe(w).HTMLInputElement&&w.type==="radio"}),h;f==="next"?(h=R.nextNode(),h||(R.currentNode=y.currentTarget,h=R.firstChild())):(h=R.previousNode(),h||(R.currentNode=y.currentTarget,h=R.lastChild())),h&&(h.focus(),a.setSelectedValue(h.value))},T=ve(l);return X.set(a,{name:T,form:s,descriptionId:q.id,errorMessageId:D.id,validationBehavior:c}),{radioGroupProps:j(B,{role:"radiogroup",onKeyDown:C,"aria-invalid":a.isInvalid||void 0,"aria-errormessage":e["aria-errormessage"],"aria-readonly":p||void 0,"aria-required":o||void 0,"aria-disabled":v||void 0,"aria-orientation":d,...P,...I}),labelProps:$,descriptionProps:q,errorMessageProps:D,isInvalid:t,validationErrors:n,validationDetails:b}}let _e=Math.round(Math.random()*1e10),Fe=0;function Le(e){let a=m.useMemo(()=>e.name||`radio-group-${_e}-${++Fe}`,[e.name]);var l;let[s,p]=ye(e.value,(l=e.defaultValue)!==null&&l!==void 0?l:null,e.onChange),[o]=m.useState(s),[v,d]=m.useState(null),c=ne({...e,value:s}),u=b=>{!e.isReadOnly&&!e.isDisabled&&(p(b),c.commitValidation())},t=c.displayValidation.isInvalid;var n;return{...c,name:a,selectedValue:s,defaultSelectedValue:e.value!==void 0?o:(n=e.defaultValue)!==null&&n!==void 0?n:null,setSelectedValue:u,lastFocusedValue:v,setLastFocusedValue:d,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(t?"invalid":null),isInvalid:t}}const Ne=m.createContext(null),Oe=m.createContext(null),Y=m.createContext(null),Ee=m.forwardRef(function(a,l){[a,l]=K(a,l,Ne);let{validationBehavior:s}=ie(ue)||{};var p,o;let v=(o=(p=a.validationBehavior)!==null&&p!==void 0?p:s)!==null&&o!==void 0?o:"native",d=Le({...a,validationBehavior:v}),[c,u]=se(!a["aria-label"]&&!a["aria-labelledby"]),{radioGroupProps:t,labelProps:n,descriptionProps:b,errorMessageProps:$,...P}=we({...a,label:u,validationBehavior:v},d),q=J({...a,values:{orientation:a.orientation||"vertical",isDisabled:d.isDisabled,isReadOnly:d.isReadOnly,isRequired:d.isRequired,isInvalid:d.isInvalid,state:d},defaultClassName:"react-aria-RadioGroup"}),D=k(a,{global:!0});return S.createElement(Q.div,{...j(D,q,t),ref:l,slot:a.slot||void 0,"data-orientation":a.orientation||"vertical","data-invalid":d.isInvalid||void 0,"data-disabled":d.isDisabled||void 0,"data-readonly":d.isReadOnly||void 0,"data-required":d.isRequired||void 0},S.createElement(de,{values:[[Y,d],[ce,{...n,ref:c,elementType:"span"}],[me,{slots:{description:b,errorMessage:$}}],[oe,P]]},S.createElement(be,null,q.children)))}),Me=m.forwardRef(function(a,l){let{inputRef:s=null,...p}=a;[a,l]=K(p,l,Oe);let o=S.useContext(Y),v=$e(m.useMemo(()=>Re(s,a.inputRef!==void 0?a.inputRef:null),[s,a.inputRef])),{labelProps:d,inputProps:c,isSelected:u,isDisabled:t,isPressed:n}=Ie({...le(a),children:typeof a.children=="function"?!0:a.children},o,v),{isFocused:b,isFocusVisible:$,focusProps:P}=Pe(),q=t||o.isReadOnly,{hoverProps:D,isHovered:B}=De({...a,isDisabled:q}),I=J({...a,defaultClassName:"react-aria-Radio",values:{isSelected:u,isPressed:n,isHovered:B,isFocused:b,isFocusVisible:$,isDisabled:t,isReadOnly:o.isReadOnly,isInvalid:o.isInvalid,isRequired:o.isRequired}}),C=k(a,{global:!0});return delete C.id,delete C.onClick,S.createElement(Q.label,{...j(C,d,D,I),ref:l,"data-selected":u||void 0,"data-pressed":n||void 0,"data-hovered":B||void 0,"data-focused":b||void 0,"data-focus-visible":$||void 0,"data-disabled":t||void 0,"data-readonly":o.isReadOnly||void 0,"data-invalid":o.isInvalid||void 0,"data-required":o.isRequired||void 0},S.createElement(Ce,{elementType:"span"},S.createElement("input",{...j(c,P),ref:v})),S.createElement(fe.Provider,{value:{isSelected:u}},I.children))}),Z={"bui-RadioGroup":"_bui-RadioGroup_1tanw_20","bui-RadioGroupContent":"_bui-RadioGroupContent_1tanw_26","bui-Radio":"_bui-Radio_1tanw_20"},ke=H()({styles:Z,classNames:{root:"bui-RadioGroup",content:"bui-RadioGroupContent"},propDefs:{children:{},className:{},label:{},secondaryLabel:{},description:{},isRequired:{}}}),Te=H()({styles:Z,classNames:{root:"bui-Radio"},propDefs:{className:{}}}),g=m.forwardRef((e,a)=>{const{ownProps:l,restProps:s}=U(ke,e),{classes:p,label:o,secondaryLabel:v,description:d,isRequired:c,children:u}=l,t=s["aria-label"],n=s["aria-labelledby"];m.useEffect(()=>{!o&&!t&&!n&&console.warn("RadioGroup requires either a visible label, aria-label, or aria-labelledby for accessibility")},[o,t,n]);const b=v||(c?"Required":null);return r.jsxs(Ee,{className:p.root,...s,ref:a,children:[r.jsx(Ge,{label:o,secondaryLabel:b,description:d}),r.jsx("div",{className:p.content,children:u}),r.jsx(Be,{})]})});g.displayName="RadioGroup";const i=m.forwardRef((e,a)=>{const{ownProps:l,restProps:s}=U(Te,e);return r.jsx(Me,{className:l.classes.root,...s,ref:a})});i.displayName="Radio";g.__docgenInfo={description:`A group of radio buttons for selecting a single option from a set, with an integrated label, description, and error display.

@public`,methods:[],displayName:"RadioGroup",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"FieldLabelProps['label']",raw:"FieldLabelProps['label']"},description:""},secondaryLabel:{required:!1,tsType:{name:"FieldLabelProps['secondaryLabel']",raw:"FieldLabelProps['secondaryLabel']"},description:""},description:{required:!1,tsType:{name:"FieldLabelProps['description']",raw:"FieldLabelProps['description']"},description:""},isRequired:{required:!1,tsType:{name:"AriaRadioGroupProps['isRequired']",raw:"AriaRadioGroupProps['isRequired']"},description:""}},composes:["Omit"]};i.__docgenInfo={description:`A single radio button for use within a RadioGroup.

@public`,methods:[],displayName:"Radio",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const V=re.meta({title:"Backstage UI/RadioGroup",component:g}),x=V.story({args:{label:"What is your favorite pokemon?"},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),_=V.story({args:{...x.input.args,orientation:"horizontal"},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),F=V.story({args:{...x.input.args,isDisabled:!0},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),L=V.story({args:{...x.input.args},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",isDisabled:!0,children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),N=V.story({args:{...x.input.args,value:"charmander"},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",isDisabled:!0,children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),O=V.story({args:{...x.input.args,name:"pokemon",isInvalid:!0},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",isDisabled:!0,children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),E=V.story({args:{...x.input.args,name:"pokemon",defaultValue:"charmander",validationBehavior:"aria",validate:e=>e==="charmander"?"Nice try!":null},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})}),M=V.story({args:{...x.input.args,isReadOnly:!0,defaultValue:"charmander"},render:e=>r.jsxs(g,{...e,children:[r.jsx(i,{value:"bulbasaur",children:"Bulbasaur"}),r.jsx(i,{value:"charmander",children:"Charmander"}),r.jsx(i,{value:"squirtle",children:"Squirtle"})]})});x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'What is your favorite pokemon?'
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander">Charmander</Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...x.input.parameters?.docs?.source}}};_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    orientation: 'horizontal'
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander">Charmander</Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,..._.input.parameters?.docs?.source}}};F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    isDisabled: true
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander">Charmander</Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...F.input.parameters?.docs?.source}}};L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander" isDisabled>
        Charmander
      </Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...L.input.parameters?.docs?.source}}};N.input.parameters={...N.input.parameters,docs:{...N.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    value: 'charmander'
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander" isDisabled>
        Charmander
      </Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...N.input.parameters?.docs?.source}}};O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    name: 'pokemon',
    isInvalid: true
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander" isDisabled>
        Charmander
      </Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...O.input.parameters?.docs?.source}}};E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    name: 'pokemon',
    defaultValue: 'charmander',
    validationBehavior: 'aria',
    validate: value => value === 'charmander' ? 'Nice try!' : null
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander">Charmander</Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...E.input.parameters?.docs?.source}}};M.input.parameters={...M.input.parameters,docs:{...M.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    ...Default.input.args,
    isReadOnly: true,
    defaultValue: 'charmander'
  },
  render: args => <RadioGroup {...args}>
      <Radio value="bulbasaur">Bulbasaur</Radio>
      <Radio value="charmander">Charmander</Radio>
      <Radio value="squirtle">Squirtle</Radio>
    </RadioGroup>
})`,...M.input.parameters?.docs?.source}}};const ba=["Default","Horizontal","Disabled","DisabledSingle","DisabledAndSelected","Invalid","Validation","ReadOnly"];export{x as Default,F as Disabled,N as DisabledAndSelected,L as DisabledSingle,_ as Horizontal,O as Invalid,M as ReadOnly,E as Validation,ba as __namedExportsOrder};
