import{r as u,R as q,ay as Le,aw as Ce,j as K,bi as Ee,p as Ie}from"./iframe-CY6p7HGj.js";import{$ as ce,d as Te,b as ie,f as xe,a as le,c as Ae}from"./utils-D5XzX9Cq.js";import{$ as Pe}from"./Label-BE618E0h.js";import{c as qe,b as X}from"./useObjectRef-B2AjDpdy.js";import{f as de,b as he,o as Ne,w as Ue,$ as _e,e as je,a as Se}from"./useFocusable-C6YNZBAX.js";import{b as ne,$ as me,a as Oe}from"./useNumberFormatter-Dzr0pJM0.js";import{$ as Be}from"./useControlledState-Cf6tZT7x.js";import{$ as We,a as ze}from"./textSelection-2lntyfVX.js";import{$ as De}from"./useLabel-B_Lop7rQ.js";import{$ as we}from"./context-DCpJGGDB.js";import{j as Ge}from"./openLink-D0hf0orl.js";import{$ as He}from"./useFormReset-Ao63ou2I.js";import{a as Re,b as Xe}from"./useFocusRing-BZ77H15a.js";import{a as Ye}from"./VisuallyHidden-BSKIM0Ta.js";import{F as Je}from"./FieldError-CtcW8Scu.js";import{F as Qe}from"./FieldLabel-D5p69Pkw.js";import"./preload-helper-PPVm8Dsz.js";import"./Hidden-hZ6rImco.js";import"./useLabels-CnWkm5k-.js";import"./FieldError-DYSn_E8h.js";import"./Text-CtkMnc2L.js";function Fe(n){let{onMoveStart:e,onMove:t,onMoveEnd:i}=n,s=u.useRef({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:l,removeGlobalListener:f}=de(),$=u.useCallback((c,p,o,a)=>{o===0&&a===0||(s.current.didMove||(s.current.didMove=!0,e?.({type:"movestart",pointerType:p,shiftKey:c.shiftKey,metaKey:c.metaKey,ctrlKey:c.ctrlKey,altKey:c.altKey})),t?.({type:"move",pointerType:p,deltaX:o,deltaY:a,shiftKey:c.shiftKey,metaKey:c.metaKey,ctrlKey:c.ctrlKey,altKey:c.altKey}))},[e,t,s]),b=he($),V=u.useCallback((c,p)=>{We(),s.current.didMove&&i?.({type:"moveend",pointerType:p,shiftKey:c.shiftKey,metaKey:c.metaKey,ctrlKey:c.ctrlKey,altKey:c.altKey})},[i,s]),g=he(V),[P,v]=u.useState(null);return qe(()=>{if(P==="pointer"){let c=o=>{if(o.pointerId===s.current.id){var a,h;let T=o.pointerType||"mouse";var S,R;b(o,T,o.pageX-((S=(a=s.current.lastPosition)===null||a===void 0?void 0:a.pageX)!==null&&S!==void 0?S:0),o.pageY-((R=(h=s.current.lastPosition)===null||h===void 0?void 0:h.pageY)!==null&&R!==void 0?R:0)),s.current.lastPosition={pageX:o.pageX,pageY:o.pageY}}},p=o=>{if(o.pointerId===s.current.id){let a=o.pointerType||"mouse";g(o,a),s.current.id=null,f(window,"pointermove",c,!1),f(window,"pointerup",p,!1),f(window,"pointercancel",p,!1),v(null)}};return l(window,"pointermove",c,!1),l(window,"pointerup",p,!1),l(window,"pointercancel",p,!1),()=>{f(window,"pointermove",c,!1),f(window,"pointerup",p,!1),f(window,"pointercancel",p,!1)}}},[P,l,f]),{moveProps:u.useMemo(()=>{let c={},p=()=>{ze(),s.current.didMove=!1};c.onPointerDown=a=>{a.button===0&&s.current.id==null&&(p(),a.stopPropagation(),a.preventDefault(),s.current.lastPosition={pageX:a.pageX,pageY:a.pageY},s.current.id=a.pointerId,v("pointer"))};let o=(a,h,S)=>{p(),$(a,"keyboard",h,S),V(a,"keyboard")};return c.onKeyDown=a=>{switch(a.key){case"Left":case"ArrowLeft":a.preventDefault(),a.stopPropagation(),o(a,-1,0);break;case"Right":case"ArrowRight":a.preventDefault(),a.stopPropagation(),o(a,1,0);break;case"Up":case"ArrowUp":a.preventDefault(),a.stopPropagation(),o(a,0,-1);break;case"Down":case"ArrowDown":a.preventDefault(),a.stopPropagation(),o(a,0,1);break}},c},[s,$,V])}}const Ze=0,et=100,tt=1;function at(n){const{isDisabled:e=!1,minValue:t=Ze,maxValue:i=et,numberFormatter:s,step:l=tt,orientation:f="horizontal"}=n;let $=u.useMemo(()=>{let r=(i-t)/10;return r=ne(r,0,r+l,l),Math.max(r,l)},[l,i,t]),b=u.useCallback(r=>r?.map((y,D)=>{let Z=D===0?t:r[D-1],ee=D===r.length-1?i:r[D+1];return ne(y,Z,ee,l)}),[t,i,l]),V=u.useMemo(()=>b(ve(n.value)),[n.value,b]),g=u.useMemo(()=>{var r;return b((r=ve(n.defaultValue))!==null&&r!==void 0?r:[t])},[n.defaultValue,t,b]),P=ye(n.value,n.defaultValue,n.onChange),v=ye(n.value,n.defaultValue,n.onChangeEnd);const[m,c]=Be(V,g,P);let[p]=u.useState(m);const[o,a]=u.useState(new Array(m.length).fill(!1)),h=u.useRef(new Array(m.length).fill(!0)),[S,R]=u.useState(void 0),T=u.useRef(m),x=u.useRef(o);let E=r=>{T.current=r,c(r)},I=r=>{x.current=r,a(r)};function Q(r){return(r-t)/(i-t)}function te(r){return r===0?t:m[r-1]}function ae(r){return r===m.length-1?i:m[r+1]}function Y(r){return h.current[r]}function A(r,y){h.current[r]=y}function w(r,y){if(e||!Y(r))return;const D=te(r),Z=ae(r);y=ne(y,D,Z,l);let ee=$e(T.current,r,y);E(ee)}function F(r,y){if(e||!Y(r))return;y&&(T.current=m);const D=x.current[r];x.current=$e(x.current,r,y),I(x.current),v&&D&&!x.current.some(Boolean)&&v(T.current)}function k(r){return s.format(r)}function d(r,y){w(r,L(y))}function M(r){return Math.round((r-t)/l)*l+t}function L(r){const y=r*(i-t)+t;return me(M(y),t,i)}function J(r,y=1){let D=Math.max(y,l);w(r,ne(m[r]+D,t,i,l))}function re(r,y=1){let D=Math.max(y,l);w(r,ne(m[r]-D,t,i,l))}return{values:m,defaultValues:n.defaultValue!==void 0?g:p,getThumbValue:r=>m[r],setThumbValue:w,setThumbPercent:d,isThumbDragging:r=>o[r],setThumbDragging:F,focusedThumb:S,setFocusedThumb:R,getThumbPercent:r=>Q(m[r]),getValuePercent:Q,getThumbValueLabel:r=>k(m[r]),getFormattedValue:k,getThumbMinValue:te,getThumbMaxValue:ae,getPercentValue:L,isThumbEditable:Y,setThumbEditable:A,incrementThumb:J,decrementThumb:re,step:l,pageSize:$,orientation:f,isDisabled:e}}function $e(n,e,t){return n[e]===t?n:[...n.slice(0,e),t,...n.slice(e+1)]}function ve(n){if(n!=null)return Array.isArray(n)?n:[n]}function ye(n,e,t){return i=>{t?.(typeof n=="number"||typeof e=="number"?i[0]:i)}}const pe=new WeakMap;function ue(n,e){let t=pe.get(n);if(!t)throw new Error("Unknown slider state");return`${t.id}-${e}`}function rt(n,e,t){let{labelProps:i,fieldProps:s}=De(n),l=n.orientation==="vertical";var f;pe.set(e,{id:(f=i.id)!==null&&f!==void 0?f:s.id,"aria-describedby":n["aria-describedby"],"aria-details":n["aria-details"]});let{direction:$}=we(),{addGlobalListener:b,removeGlobalListener:V}=de();const g=u.useRef(null),P=$==="rtl",v=u.useRef(null),{moveProps:m}=Fe({onMoveStart(){v.current=null},onMove({deltaX:a,deltaY:h}){if(!t.current)return;let{height:S,width:R}=t.current.getBoundingClientRect(),T=l?S:R;v.current==null&&g.current!=null&&(v.current=e.getThumbPercent(g.current)*T);let x=l?h:a;if((l||P)&&(x=-x),v.current+=x,g.current!=null&&t.current){const E=me(v.current/T,0,1);e.setThumbPercent(g.current,E)}},onMoveEnd(){g.current!=null&&(e.setThumbDragging(g.current,!1),g.current=null)}});let c=u.useRef(void 0),p=(a,h,S,R)=>{if(t.current&&!n.isDisabled&&e.values.every((T,x)=>!e.isThumbDragging(x))){let{height:T,width:x,top:E,left:I}=t.current.getBoundingClientRect(),Q=l?T:x,A=((l?R:S)-(l?E:I))/Q;($==="rtl"||l)&&(A=1-A);let w=e.getPercentValue(A),F,k=e.values.findIndex(d=>w-d<0);if(k===0)F=k;else if(k===-1)F=e.values.length-1;else{let d=e.values[k-1],M=e.values[k];Math.abs(d-w)<Math.abs(M-w)?F=k-1:F=k}F>=0&&e.isThumbEditable(F)?(a.preventDefault(),g.current=F,e.setFocusedThumb(F),c.current=h,e.setThumbDragging(g.current,!0),e.setThumbValue(F,w),b(window,"mouseup",o,!1),b(window,"touchend",o,!1),b(window,"pointerup",o,!1)):g.current=null}},o=a=>{var h,S;((S=a.pointerId)!==null&&S!==void 0?S:(h=a.changedTouches)===null||h===void 0?void 0:h[0].identifier)===c.current&&(g.current!=null&&(e.setThumbDragging(g.current,!1),g.current=null),V(window,"mouseup",o,!1),V(window,"touchend",o,!1),V(window,"pointerup",o,!1))};return"htmlFor"in i&&i.htmlFor&&(delete i.htmlFor,i.onClick=()=>{var a;(a=document.getElementById(ue(e,0)))===null||a===void 0||a.focus(),Ne("keyboard")}),{labelProps:i,groupProps:{role:"group",...s},trackProps:X({onMouseDown(a){a.button!==0||a.altKey||a.ctrlKey||a.metaKey||p(a,void 0,a.clientX,a.clientY)},onPointerDown(a){a.pointerType==="mouse"&&(a.button!==0||a.altKey||a.ctrlKey||a.metaKey)||p(a,a.pointerId,a.clientX,a.clientY)},onTouchStart(a){p(a,a.changedTouches[0].identifier,a.changedTouches[0].clientX,a.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},m),outputProps:{htmlFor:e.values.map((a,h)=>ue(e,h)).join(" "),"aria-live":"off"}}}function nt(n,e){let{index:t=0,isRequired:i,validationState:s,isInvalid:l,trackRef:f,inputRef:$,orientation:b=e.orientation,name:V,form:g}=n,P=n.isDisabled||e.isDisabled,v=b==="vertical",{direction:m}=we(),{addGlobalListener:c,removeGlobalListener:p}=de(),o=pe.get(e);var a;const{labelProps:h,fieldProps:S}=De({...n,id:ue(e,t),"aria-labelledby":`${o.id} ${(a=n["aria-labelledby"])!==null&&a!==void 0?a:""}`.trim()}),R=e.values[t],T=u.useCallback(()=>{$.current&&Ge($.current)},[$]),x=e.focusedThumb===t;u.useEffect(()=>{x&&T()},[x,T]);let E=m==="rtl",I=u.useRef(null),{keyboardProps:Q}=Ue({onKeyDown(d){let{getThumbMaxValue:M,getThumbMinValue:L,decrementThumb:J,incrementThumb:re,setThumbValue:r,setThumbDragging:y,pageSize:D}=e;if(!/^(PageUp|PageDown|Home|End)$/.test(d.key)){d.continuePropagation();return}switch(d.preventDefault(),y(t,!0),d.key){case"PageUp":re(t,D);break;case"PageDown":J(t,D);break;case"Home":r(t,L(t));break;case"End":r(t,M(t));break}y(t,!1)}}),{moveProps:te}=Fe({onMoveStart(){I.current=null,e.setThumbDragging(t,!0)},onMove({deltaX:d,deltaY:M,pointerType:L,shiftKey:J}){const{getThumbPercent:re,setThumbPercent:r,decrementThumb:y,incrementThumb:D,step:Z,pageSize:ee}=e;if(!f.current)return;let{width:Me,height:Ke}=f.current.getBoundingClientRect(),ge=v?Ke:Me;if(I.current==null&&(I.current=re(t)*ge),L==="keyboard")d>0&&E||d<0&&!E||M>0?y(t,J?ee:Z):D(t,J?ee:Z);else{let se=v?M:d;(v||E)&&(se=-se),I.current+=se,r(t,me(I.current/ge,0,1))}},onMoveEnd(){e.setThumbDragging(t,!1)}});e.setThumbEditable(t,!P);const{focusableProps:ae}=_e(X(n,{onFocus:()=>e.setFocusedThumb(t),onBlur:()=>e.setFocusedThumb(void 0)}),$);let Y=u.useRef(void 0),A=d=>{T(),Y.current=d,e.setThumbDragging(t,!0),c(window,"mouseup",w,!1),c(window,"touchend",w,!1),c(window,"pointerup",w,!1)},w=d=>{var M,L;((L=d.pointerId)!==null&&L!==void 0?L:(M=d.changedTouches)===null||M===void 0?void 0:M[0].identifier)===Y.current&&(T(),e.setThumbDragging(t,!1),p(window,"mouseup",w,!1),p(window,"touchend",w,!1),p(window,"pointerup",w,!1))},F=e.getThumbPercent(t);(v||m==="rtl")&&(F=1-F);let k=P?{}:X(Q,te,{onMouseDown:d=>{d.button!==0||d.altKey||d.ctrlKey||d.metaKey||A()},onPointerDown:d=>{d.button!==0||d.altKey||d.ctrlKey||d.metaKey||A(d.pointerId)},onTouchStart:d=>{A(d.changedTouches[0].identifier)}});return He($,e.defaultValues[t],d=>{e.setThumbValue(t,d)}),{inputProps:X(ae,S,{type:"range",tabIndex:P?void 0:0,min:e.getThumbMinValue(t),max:e.getThumbMaxValue(t),step:e.step,value:R,name:V,form:g,disabled:P,"aria-orientation":b,"aria-valuetext":e.getThumbValueLabel(t),"aria-required":i||void 0,"aria-invalid":l||s==="invalid"||void 0,"aria-errormessage":n["aria-errormessage"],"aria-describedby":[o["aria-describedby"],n["aria-describedby"]].filter(Boolean).join(" "),"aria-details":[o["aria-details"],n["aria-details"]].filter(Boolean).join(" "),onChange:d=>{e.setThumbValue(t,parseFloat(je(d).value))}}),thumbProps:{...k,style:{position:"absolute",[v?"top":"left"]:`${F*100}%`,transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:h,isDragging:e.isThumbDragging(t),isDisabled:P,isFocused:x}}const it=u.createContext(null),oe=u.createContext(null),fe=u.createContext(null),ke=u.createContext(null),lt=u.forwardRef(function(e,t){[e,t]=ce(e,t,it);let i=u.useRef(null),s=Oe(e.formatOptions),l=at({...e,numberFormatter:s}),[f,$]=Te(!e["aria-label"]&&!e["aria-labelledby"]),{groupProps:b,trackProps:V,labelProps:g,outputProps:P}=rt({...e,label:$},l,i),v=ie({...e,values:{orientation:l.orientation,isDisabled:l.isDisabled,state:l},defaultClassName:"react-aria-Slider"}),m=Se(e,{global:!0});return delete m.id,q.createElement(xe,{values:[[oe,l],[fe,{...V,ref:i}],[ke,P],[Pe,{...g,ref:f}]]},q.createElement(le.div,{...X(m,v,b),ref:t,slot:e.slot||void 0,"data-orientation":l.orientation,"data-disabled":l.isDisabled||void 0}))}),ot=u.forwardRef(function(e,t){[e,t]=ce(e,t,ke);let{children:i,style:s,className:l,render:f,...$}=e,b=u.useContext(oe),V=ie({className:l,style:s,children:i,render:f,defaultChildren:b.getThumbValueLabel(0),defaultClassName:"react-aria-SliderOutput",values:{orientation:b.orientation,isDisabled:b.isDisabled,state:b}});return q.createElement(le.output,{...$,...V,ref:t,"data-orientation":b.orientation||void 0,"data-disabled":b.isDisabled||void 0})}),st=u.forwardRef(function(e,t){[e,t]=ce(e,t,fe);let i=u.useContext(oe),{onHoverStart:s,onHoverEnd:l,onHoverChange:f,...$}=e,{hoverProps:b,isHovered:V}=Re({onHoverStart:s,onHoverEnd:l,onHoverChange:f}),g=ie({...e,defaultClassName:"react-aria-SliderTrack",values:{orientation:i.orientation,isDisabled:i.isDisabled,isHovered:V,state:i}});return q.createElement(le.div,{...X($,b),...g,ref:t,"data-hovered":V||void 0,"data-orientation":i.orientation||void 0,"data-disabled":i.isDisabled||void 0})}),Ve=u.forwardRef(function(e,t){let{inputRef:i=null}=e,s=u.useContext(oe),{ref:l}=Ae(fe),{index:f=0}=e,$=u.useRef(null),b=i||$,[V,g]=Te(!e["aria-label"]&&!e["aria-labelledby"]),{thumbProps:P,inputProps:v,labelProps:m,isDragging:c,isFocused:p,isDisabled:o}=nt({...e,index:f,trackRef:l,inputRef:b,label:g},s),{focusProps:a,isFocusVisible:h}=Xe(),{hoverProps:S,isHovered:R}=Re(e),T=ie({...e,defaultClassName:"react-aria-SliderThumb",values:{state:s,isHovered:R,isDragging:c,isFocused:p,isFocusVisible:h,isDisabled:o}}),x=Se(e,{global:!0});return delete x.id,q.createElement(le.div,{...X(x,P,S),...T,ref:t,style:{...P.style,...T.style},"data-hovered":R||void 0,"data-dragging":c||void 0,"data-focused":p||void 0,"data-focus-visible":h||void 0,"data-disabled":o||void 0},q.createElement(Ye,null,q.createElement("input",{ref:b,...X(v,a)})),q.createElement(xe,{values:[[Pe,{...m,ref:V}]]},T.children))}),ut={"bui-Slider":"_bui-Slider_y0lot_20","bui-SliderHeader":"_bui-SliderHeader_y0lot_33","bui-SliderOutput":"_bui-SliderOutput_y0lot_40","bui-SliderTrack":"_bui-SliderTrack_y0lot_47","bui-SliderTrackFill":"_bui-SliderTrackFill_y0lot_66","bui-SliderThumb":"_bui-SliderThumb_y0lot_84"},ct=Le()({styles:ut,classNames:{root:"bui-Slider",header:"bui-SliderHeader",track:"bui-SliderTrack",trackFill:"bui-SliderTrackFill",thumb:"bui-SliderThumb",output:"bui-SliderOutput"},propDefs:{className:{},label:{},secondaryLabel:{},description:{},isRequired:{}}});function dt(n,e){const{ownProps:t,restProps:i}=Ce(ct,n),{classes:s,className:l,label:f,secondaryLabel:$,description:b,isRequired:V}=t,g=u.useId(),P=u.useId();u.useEffect(()=>{!f&&!i["aria-label"]&&!i["aria-labelledby"]&&console.warn("Slider requires either a visible label, aria-label, or aria-labelledby for accessibility")},[f,i]);const v=$||(V?"Required":null);return K.jsxs(lt,{className:Ee(s.root,l),"aria-labelledby":f?g:void 0,"aria-describedby":f&&b?P:void 0,...i,ref:e,children:[f&&K.jsxs("div",{className:s.header,children:[K.jsx(Qe,{id:g,label:f,secondaryLabel:v,description:b,descriptionId:b?P:void 0}),K.jsx(ot,{className:s.output,children:({state:m})=>m.values.map((c,p)=>m.getThumbValueLabel(p)).join(" – ")})]}),K.jsx(st,{className:s.track,children:({state:m})=>{const c=m.values.length;let p;if(c===1){const o=m.getThumbPercent(0);p=m.orientation==="vertical"?{bottom:0,height:`${o*100}%`}:{left:0,width:`${o*100}%`}}else{const o=m.getThumbPercent(0),h=(m.getThumbPercent(1)-o)*100;p=m.orientation==="vertical"?{bottom:`${o*100}%`,height:`${h}%`}:{left:`${o*100}%`,width:`${h}%`}}return K.jsxs(K.Fragment,{children:[K.jsx("div",{className:s.trackFill,style:p}),K.jsx(Ve,{index:0,className:s.thumb}),c>1&&K.jsx(Ve,{index:1,className:s.thumb})]})}}),K.jsx(Je,{})]})}const be=u.forwardRef(dt);be.displayName="Slider";be.__docgenInfo={description:"@public",methods:[],displayName:"Slider",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"FieldLabelProps['label']",raw:"FieldLabelProps['label']"},description:""},secondaryLabel:{required:!1,tsType:{name:"FieldLabelProps['secondaryLabel']",raw:"FieldLabelProps['secondaryLabel']"},description:""},description:{required:!1,tsType:{name:"FieldLabelProps['description']",raw:"FieldLabelProps['description']"},description:""},isRequired:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const C=Ie.meta({title:"Backstage UI/Slider",component:be}),N=C.story({args:{label:"Volume",defaultValue:50}}),U=C.story({args:{label:"Brightness",minValue:0,maxValue:100,defaultValue:75,step:5}}),_=C.story({args:{label:"Price Range",defaultValue:[25,75]}}),j=C.story({args:{label:"Temperature (°C)",minValue:-20,maxValue:40,defaultValue:[0,20],step:5}}),O=C.story({args:{label:"Budget",minValue:0,maxValue:1e4,defaultValue:[2e3,8e3],step:100,formatOptions:{style:"currency",currency:"USD",maximumFractionDigits:0}}}),B=C.story({args:{label:"Age Range",description:"Select the age range for your target audience",minValue:0,maxValue:100,defaultValue:[18,65]}}),W=C.story({args:{label:"Score Range",defaultValue:[20,80],isRequired:!0}}),z=C.story({args:{label:"Disabled Range",defaultValue:[30,70],isDisabled:!0}}),G=C.story({args:{label:"Rating",minValue:0,maxValue:5,step:.5,defaultValue:3.5}}),H=C.story({args:{label:"Completion",minValue:0,maxValue:1,step:.01,defaultValue:.65,formatOptions:{style:"percent",minimumFractionDigits:0,maximumFractionDigits:0}}});N.input.parameters={...N.input.parameters,docs:{...N.input.parameters?.docs,source:{code:`const SingleThumb = () => <Slider label="Volume" defaultValue={50} />;
`,...N.input.parameters?.docs?.source}}};U.input.parameters={...U.input.parameters,docs:{...U.input.parameters?.docs,source:{code:`const SingleThumbWithRange = () => (
  <Slider
    label="Brightness"
    minValue={0}
    maxValue={100}
    defaultValue={75}
    step={5}
  />
);
`,...U.input.parameters?.docs?.source}}};_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{code:`const RangeSlider = () => (
  <Slider label="Price Range" defaultValue={[25, 75]} />
);
`,..._.input.parameters?.docs?.source}}};j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{code:`const WithCustomRange = () => (
  <Slider
    label="Temperature (°C)"
    minValue={-20}
    maxValue={40}
    defaultValue={[0, 20]}
    step={5}
  />
);
`,...j.input.parameters?.docs?.source}}};O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{code:`const WithFormattedValues = () => (
  <Slider
    label="Budget"
    minValue={0}
    maxValue={10000}
    defaultValue={[2000, 8000]}
    step={100}
    formatOptions={{
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }}
  />
);
`,...O.input.parameters?.docs?.source}}};B.input.parameters={...B.input.parameters,docs:{...B.input.parameters?.docs,source:{code:`const WithDescription = () => (
  <Slider
    label="Age Range"
    description="Select the age range for your target audience"
    minValue={0}
    maxValue={100}
    defaultValue={[18, 65]}
  />
);
`,...B.input.parameters?.docs?.source}}};W.input.parameters={...W.input.parameters,docs:{...W.input.parameters?.docs,source:{code:`const Required = () => (
  <Slider label="Score Range" defaultValue={[20, 80]} isRequired />
);
`,...W.input.parameters?.docs?.source}}};z.input.parameters={...z.input.parameters,docs:{...z.input.parameters?.docs,source:{code:`const Disabled = () => (
  <Slider label="Disabled Range" defaultValue={[30, 70]} isDisabled />
);
`,...z.input.parameters?.docs?.source}}};G.input.parameters={...G.input.parameters,docs:{...G.input.parameters?.docs,source:{code:`const WithSteps = () => (
  <Slider
    label="Rating"
    minValue={0}
    maxValue={5}
    step={0.5}
    defaultValue={3.5}
  />
);
`,...G.input.parameters?.docs?.source}}};H.input.parameters={...H.input.parameters,docs:{...H.input.parameters?.docs,source:{code:`const Percentage = () => (
  <Slider
    label="Completion"
    minValue={0}
    maxValue={1}
    step={0.01}
    defaultValue={0.65}
    formatOptions={{
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }}
  />
);
`,...H.input.parameters?.docs?.source}}};N.input.parameters={...N.input.parameters,docs:{...N.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Volume',
    defaultValue: 50
  }
})`,...N.input.parameters?.docs?.source}}};U.input.parameters={...U.input.parameters,docs:{...U.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Brightness',
    minValue: 0,
    maxValue: 100,
    defaultValue: 75,
    step: 5
  }
})`,...U.input.parameters?.docs?.source}}};_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Price Range',
    defaultValue: [25, 75]
  }
})`,..._.input.parameters?.docs?.source}}};j.input.parameters={...j.input.parameters,docs:{...j.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Temperature (°C)',
    minValue: -20,
    maxValue: 40,
    defaultValue: [0, 20],
    step: 5
  }
})`,...j.input.parameters?.docs?.source}}};O.input.parameters={...O.input.parameters,docs:{...O.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Budget',
    minValue: 0,
    maxValue: 10000,
    defaultValue: [2000, 8000],
    step: 100,
    formatOptions: {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }
  }
})`,...O.input.parameters?.docs?.source}}};B.input.parameters={...B.input.parameters,docs:{...B.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Age Range',
    description: 'Select the age range for your target audience',
    minValue: 0,
    maxValue: 100,
    defaultValue: [18, 65]
  }
})`,...B.input.parameters?.docs?.source}}};W.input.parameters={...W.input.parameters,docs:{...W.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Score Range',
    defaultValue: [20, 80],
    isRequired: true
  }
})`,...W.input.parameters?.docs?.source}}};z.input.parameters={...z.input.parameters,docs:{...z.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Disabled Range',
    defaultValue: [30, 70],
    isDisabled: true
  }
})`,...z.input.parameters?.docs?.source}}};G.input.parameters={...G.input.parameters,docs:{...G.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Rating',
    minValue: 0,
    maxValue: 5,
    step: 0.5,
    defaultValue: 3.5
  }
})`,...G.input.parameters?.docs?.source}}};H.input.parameters={...H.input.parameters,docs:{...H.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    label: 'Completion',
    minValue: 0,
    maxValue: 1,
    step: 0.01,
    defaultValue: 0.65,
    formatOptions: {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  }
})`,...H.input.parameters?.docs?.source}}};const Lt=["SingleThumb","SingleThumbWithRange","RangeSlider","WithCustomRange","WithFormattedValues","WithDescription","Required","Disabled","WithSteps","Percentage"];export{z as Disabled,H as Percentage,_ as RangeSlider,W as Required,N as SingleThumb,U as SingleThumbWithRange,j as WithCustomRange,B as WithDescription,O as WithFormattedValues,G as WithSteps,Lt as __namedExportsOrder};
