import{a0 as S,S as H,j as u,h as E,N as X,r as P,bA as Z,bB as N}from"./iframe-D2P1gL3G.js";import{b as ee,w as U}from"./appWrappers-BVoJaVZG.js";import{u as te}from"./useAsync-C1jF7UF0.js";import{q as ne}from"./index-Dum5ERxG.js";import{l as D}from"./lodash-DhI4PBPP.js";import{c as J}from"./api-BHZ--JHt.js";import{D as I,s as $,p as ie}from"./ref-C0VTUPuL.js";import"./get-Cgwkj2jE.js";import{g as B,b as ae,R as re,u as se,E as oe,o as le,a as F}from"./translation-CWZKAvwL.js";import{u as ue}from"./useRouteRef-QvnDxwUA.js";import{S as x}from"./Grid-Dr3D4icg.js";import{B as O}from"./Box-ZH5bpM8G.js";import{m as K}from"./makeStyles-Clh2njjY.js";import{c as M}from"./createStyles-Bp4GwXob.js";import{P as de}from"./Progress-BfmJvB2c.js";import{R as ce}from"./ResponseErrorPanel-BRgeHMIq.js";import{O as pe}from"./OverflowTooltip-BsZxZ1qk.js";import{L as me}from"./Link-DWOvRufO.js";import{S as he}from"./Switch-CGw-ZnD0.js";import"./preload-helper-PPVm8Dsz.js";import"./WebStorage-De27rWs7.js";import"./useAnalytics-CZuK40Zw.js";import"./componentData--5TJ8chb.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BSt5tewj.js";import"./useIsomorphicLayoutEffect-EkDceSba.js";import"./useApp-Dr4H7OwE.js";import"./BUIProvider-ClcL8Pie.js";import"./openLink-CB6NMuvw.js";import"./useMountedState-B2-kdrdQ.js";import"./index-DGJxFe6q.js";import"./Card-DkRW2ljq.js";import"./Button-BbbNOE2b.js";import"./utils-D8szjJ2c.js";import"./useObjectRef-BXCH-BGa.js";import"./Label-BCMZO17W.js";import"./Hidden-BT-65IzW.js";import"./useNumberFormatter-HjpxQVG6.js";import"./context-CcQnNqSB.js";import"./useFocusable-BZMh4--7.js";import"./useLabel-CsNWXzKr.js";import"./useLabels-B47DhNpl.js";import"./useButton-BJ2e-LYD.js";import"./usePress-BE3xf_K_.js";import"./textSelection-CdkfQTHO.js";import"./useFocusRing-D4TU62mb.js";import"./Link-DD2FWL33.js";import"./getNodeText-DFa42uib.js";import"./useLink-B80Nkn1m.js";import"./Flex-DM-kMu6_.js";import"./Text-nwmGBrZo.js";import"./styled-CvACks6z.js";import"./createStyles-yD3y8ldD.js";import"./LinearProgress-CM0FzvgH.js";import"./ErrorPanel-DoFCUs5p.js";import"./WarningPanel-CTck5SRQ.js";import"./ExpandMore-h7Ug34IM.js";import"./AccordionDetails-BpmcLgT4.js";import"./index-B9sM2jn7.js";import"./Collapse-DUSW-jqM.js";import"./MarkdownContent-B9HVEd1F.js";import"./CodeSnippet-DNtfGivc.js";import"./CopyTextButton-B_aOyIY6.js";import"./useCopyToClipboard-P5UWRi0Z.js";import"./Tooltip-BrmdzuQO.js";import"./Popper-Jb_2zun_.js";import"./Portal-CZcmajaJ.js";import"./List-BN_I58y-.js";import"./ListContext-gHvGwQdG.js";import"./ListItem-BjwKQPwC.js";import"./ListItemText-WS6vwabx.js";import"./Divider-BCJX_69r.js";import"./useToggleState-DI0m2cq9.js";import"./useControlledState-DJUJGBnA.js";import"./useToggle-PwZaDl5N.js";import"./useFormReset-BxUBJ7_5.js";import"./VisuallyHidden-CEZKru5T.js";class fe{[ee]="external";id;params;optional;defaultTarget;constructor(a,r,t,n){this.id=a,this.params=r,this.optional=t,this.defaultTarget=n}toString(){return this.#e?`externalRouteRef{id=${this.#e},legacyId=${this.id}}`:`routeRef{type=external,id=${this.id}}`}getDefaultTarget(){return this.defaultTarget}$$type="@backstage/ExternalRouteRef";version="v1";T=void 0;#e=void 0;getParams(){return this.params}getDescription(){return this.#e?this.#e:this.id}setId(a){if(!a)throw new Error("ExternalRouteRef id must be a non-empty string");if(this.#e&&this.#e!==a)throw new Error(`ExternalRouteRef was referenced twice as both '${this.#e}' and '${a}'`);this.#e=a}}function ge(e){return new fe(e.id,e.params??[],!!e.optional,e?.defaultTarget)}function ye(e,a){const r=a?.defaultKind;let t,n,o;return"metadata"in e?(t=e.kind,n=e.metadata.namespace,o=e.metadata.name):(t=e.kind,n=e.namespace,o=e.name),(n===void 0||n==="")&&(n=I),a?.defaultNamespace!==void 0?a?.defaultNamespace===n&&(n=void 0):n===I&&(n=void 0),t=t.toLocaleLowerCase("en-US"),t=r.toLocaleLowerCase("en-US")===t?void 0:t,`${t?`${t}:`:""}${n?`${n}/`:""}${o}`}const L=ge({id:"catalog-index",optional:!0,defaultTarget:"catalog.catalogIndex"});function ve(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var q={exports:{}},be=q.exports,z;function we(){return z||(z=1,(function(e,a){(function(r,t){typeof ve=="function"?e.exports=t():r.pluralize=t()})(be,function(){var r=[],t=[],n={},o={},l={};function h(i){return typeof i=="string"?new RegExp("^"+i+"$","i"):i}function f(i,s){return i===s?s:i===i.toLowerCase()?s.toLowerCase():i===i.toUpperCase()?s.toUpperCase():i[0]===i[0].toUpperCase()?s.charAt(0).toUpperCase()+s.substr(1).toLowerCase():s.toLowerCase()}function m(i,s){return i.replace(/\$(\d{1,2})/g,function(b,g){return s[g]||""})}function p(i,s){return i.replace(s[0],function(b,g){var v=m(s[1],arguments);return f(b===""?i[g-1]:b,v)})}function c(i,s,b){if(!i.length||n.hasOwnProperty(i))return s;for(var g=b.length;g--;){var v=b[g];if(v[0].test(s))return p(s,v)}return s}function w(i,s,b){return function(g){var v=g.toLowerCase();return s.hasOwnProperty(v)?f(g,v):i.hasOwnProperty(v)?f(g,i[v]):c(v,g,b)}}function y(i,s,b,g){return function(v){var k=v.toLowerCase();return s.hasOwnProperty(k)?!0:i.hasOwnProperty(k)?!1:c(k,k,b)===k}}function d(i,s,b){var g=s===1?d.singular(i):d.plural(i);return(b?s+" ":"")+g}return d.plural=w(l,o,r),d.isPlural=y(l,o,r),d.singular=w(o,l,t),d.isSingular=y(o,l,t),d.addPluralRule=function(i,s){r.push([h(i),s])},d.addSingularRule=function(i,s){t.push([h(i),s])},d.addUncountableRule=function(i){if(typeof i=="string"){n[i.toLowerCase()]=!0;return}d.addPluralRule(i,"$0"),d.addSingularRule(i,"$0")},d.addIrregularRule=function(i,s){s=s.toLowerCase(),i=i.toLowerCase(),l[i]=s,o[s]=i},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(i){return d.addIrregularRule(i[0],i[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(i){return d.addPluralRule(i[0],i[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(i){return d.addSingularRule(i[0],i[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d})})(q)),q.exports}var $e=we();const xe=S($e);var j,_;function ke(){if(_)return j;_=1;class e{constructor(t){this.value=t,this.next=void 0}}class a{constructor(){this.clear()}enqueue(t){const n=new e(t);this._head?(this._tail.next=n,this._tail=n):(this._head=n,this._tail=n),this._size++}dequeue(){const t=this._head;if(t)return this._head=this._head.next,this._size--,t.value}clear(){this._head=void 0,this._tail=void 0,this._size=0}get size(){return this._size}*[Symbol.iterator](){let t=this._head;for(;t;)yield t.value,t=t.next}}return j=a,j}var C,G;function Te(){if(G)return C;G=1;const e=ke();return C=r=>{if(!((Number.isInteger(r)||r===1/0)&&r>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up");const t=new e;let n=0;const o=()=>{n--,t.size>0&&t.dequeue()()},l=async(m,p,...c)=>{n++;const w=(async()=>m(...c))();p(w);try{await w}catch{}o()},h=(m,p,...c)=>{t.enqueue(l.bind(null,m,p,...c)),(async()=>(await Promise.resolve(),n<r&&t.size>0&&t.dequeue()()))()},f=(m,...p)=>new Promise(c=>{h(m,c,...p)});return Object.defineProperties(f,{activeCount:{get:()=>n},pendingCount:{get:()=>t.size},clearQueue:{value:()=>{t.clear()}}}),f},C}var Re=Te();const qe=S(Re),Ae=qe(5),Ee=(e,a)=>{const{kind:r,type:t}=a,n=e.map(l=>ye(ie(l),{defaultKind:"group"})),o={kind:r.toLocaleLowerCase("en-US"),type:t,owners:n,user:"all"};return ne.stringify({filters:o},{arrayFormat:"repeat"})},je=e=>[...B(e,re,{kind:"Group"}).map(({kind:t,namespace:n,name:o})=>$({kind:t,namespace:n,name:o})),$(e)],Ce=e=>e!==void 0,V=async(e,a,r=[])=>{const t=B(e,ae,{kind:"Group"}),n=t.length>0,o=$(e);if(n){const l=t.map(c=>$(c)),m=(await Ae(()=>a.getEntitiesByRefs({fields:["kind","metadata.namespace","metadata.name","relations"],entityRefs:l}))).items.filter(Ce).filter(c=>!r.includes($(c))),p=(await Promise.all(m.map(c=>V(c,a,[...r,o])))).flatMap(c=>c);return D.uniq([...p,o])}return[o]},Le=async(e,a,r)=>{const t=e.kind==="Group",n=a==="aggregated",o=e.kind==="User";return n&&t?V(e,r):n&&o?je(e):[$(e)]},Pe=e=>new Promise(a=>setTimeout(a,e)),Ie=async(e,a,r,t=100,n=100)=>{const o=[];for(let l=0;l<e.length;l+=t){const h=e.slice(l,l+t),f=await r.getEntities({filter:[{kind:a,"relations.ownedBy":h}],fields:["kind","metadata.name","metadata.namespace","spec.type","relations"]});o.push(...f.items),l+t<e.length&&await Pe(n)}return D.uniqBy(o,$)};function Oe(e,a,r,t=6){const n=H(J),o=r??["Component","API","System","Resource"],{loading:l,error:h,value:f}=te(async()=>{const m=await Le(e,a,n);return(await Ie(m,o,n)).reduce((y,d)=>{const i=y.find(s=>s.kind===d.kind&&s.type===d.spec?.type);return i?i.count+=1:y.push({kind:d.kind,type:d.spec?.type?.toString(),count:1}),y},[]).sort((y,d)=>d.count-y.count).slice(0,t).map(y=>({counter:y.count,type:y.type,kind:y.kind,queryParams:Ee(m,y)}))},[n,e,a]);return{componentsWithCounters:f,loading:l,error:h}}const ze=K(e=>M({card:{border:`1px solid ${e.palette.divider}`,boxShadow:e.shadows[2],borderRadius:"4px",padding:e.spacing(2),transition:`${e.transitions.duration.standard}ms`,"&:hover":{boxShadow:e.shadows[4]},height:"100%"},bold:{fontWeight:e.typography.fontWeightBold},smallFont:{fontSize:e.typography.body2.fontSize},entityTypeBox:{background:a=>e.getPageTheme({themeId:a.type}).backgroundImage,color:a=>e.getPageTheme({themeId:a.type}).fontColor}}),{name:"PluginOrgComponentsGrid"}),_e=({counter:e,type:a,kind:r,url:t})=>{const n=ze({type:a??r}),o=a??r,l=o.length>10,h=u.jsxs(O,{className:`${n.card} ${n.entityTypeBox}`,display:"flex",flexDirection:"column",alignItems:"center",children:[u.jsx(E,{className:n.bold,variant:"h6",children:e}),u.jsx(O,{sx:{width:"100%",textAlign:"center"},children:u.jsx(E,{className:`${n.bold} ${l&&n.smallFont}`,variant:"h6",children:u.jsx(pe,{text:xe(o.toLocaleUpperCase("en-US"),e)})})}),a&&u.jsx(E,{variant:"subtitle1",children:r})]});return t?u.jsx(me,{to:t,variant:"body2",children:h}):h},W=({className:e,entity:a,relationsType:r,relationAggregation:t,entityFilterKind:n,entityLimit:o=6})=>{const l=ue(L);if(!r&&!t)throw new Error("The relationAggregation property must be set as an EntityRelationAggregation type.");const{componentsWithCounters:h,loading:f,error:m}=Oe(a,t??r,n,o);return f?u.jsx(de,{}):m?u.jsx(ce,{error:m}):u.jsx(x,{container:!0,className:e,children:h?.map(p=>u.jsx(x,{item:!0,xs:6,md:6,lg:4,children:u.jsx(_e,{counter:p.counter,kind:p.kind,type:p.type,url:l&&`${l()}?${p.queryParams}`})},p.type??p.kind))})};W.__docgenInfo={description:"",methods:[],displayName:"ComponentsGrid",props:{className:{required:!1,tsType:{name:"string"},description:""},entity:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  /**
   * The version of specification format for this particular entity that
   * this is written against.
   */
  apiVersion: string;

  /**
   * The high level entity type being described.
   */
  kind: string;

  /**
   * Metadata related to the entity.
   */
  metadata: EntityMeta;

  /**
   * The specification data describing the entity itself.
   */
  spec?: JsonObject;

  /**
   * The relations that this entity has with other entities.
   */
  relations?: EntityRelation[];
}`,signature:{properties:[{key:"apiVersion",value:{name:"string",required:!0},description:`The version of specification format for this particular entity that
this is written against.`},{key:"kind",value:{name:"string",required:!0},description:"The high level entity type being described."},{key:"metadata",value:{name:"intersection",raw:`JsonObject & {
  /**
   * A globally unique ID for the entity.
   *
   * This field can not be set by the user at creation time, and the server
   * will reject an attempt to do so. The field will be populated in read
   * operations. The field can (optionally) be specified when performing
   * update or delete operations, but the server is free to reject requests
   * that do so in such a way that it breaks semantics.
   */
  uid?: string;

  /**
   * An opaque string that changes for each update operation to any part of
   * the entity, including metadata.
   *
   * This field can not be set by the user at creation time, and the server
   * will reject an attempt to do so. The field will be populated in read
   * operations. The field can (optionally) be specified when performing
   * update or delete operations, and the server will then reject the
   * operation if it does not match the current stored value.
   */
  etag?: string;

  /**
   * The name of the entity.
   *
   * Must be unique within the catalog at any given point in time, for any
   * given namespace + kind pair. This value is part of the technical
   * identifier of the entity, and as such it will appear in URLs, database
   * tables, entity references, and similar. It is subject to restrictions
   * regarding what characters are allowed.
   *
   * If you want to use a different, more human readable string with fewer
   * restrictions on it in user interfaces, see the \`title\` field below.
   */
  name: string;

  /**
   * The namespace that the entity belongs to.
   */
  namespace?: string;

  /**
   * A display name of the entity, to be presented in user interfaces instead
   * of the \`name\` property above, when available.
   *
   * This field is sometimes useful when the \`name\` is cumbersome or ends up
   * being perceived as overly technical. The title generally does not have
   * as stringent format requirements on it, so it may contain special
   * characters and be more explanatory. Do keep it very short though, and
   * avoid situations where a title can be confused with the name of another
   * entity, or where two entities share a title.
   *
   * Note that this is only for display purposes, and may be ignored by some
   * parts of the code. Entity references still always make use of the \`name\`
   * property, not the title.
   */
  title?: string;

  /**
   * A short (typically relatively few words, on one line) description of the
   * entity.
   */
  description?: string;

  /**
   * Key/value pairs of identifying information attached to the entity.
   */
  labels?: Record<string, string>;

  /**
   * Key/value pairs of non-identifying auxiliary information attached to the
   * entity.
   */
  annotations?: Record<string, string>;

  /**
   * A list of single-valued strings, to for example classify catalog entities in
   * various ways.
   */
  tags?: string[];

  /**
   * A list of external hyperlinks related to the entity.
   */
  links?: EntityLink[];
}`,elements:[{name:"signature",type:"object",raw:"{ [key in string]?: JsonValue }",signature:{properties:[{key:{name:"string",required:!1},value:{name:"union",raw:"JsonObject | JsonArray | JsonPrimitive",elements:[{name:"JsonObject"},{name:"JsonArray"},{name:"union",raw:"number | string | boolean | null",elements:[{name:"number"},{name:"string"},{name:"boolean"},{name:"null"}]}]}}]},required:!1},{name:"signature",type:"object",raw:`{
  /**
   * A globally unique ID for the entity.
   *
   * This field can not be set by the user at creation time, and the server
   * will reject an attempt to do so. The field will be populated in read
   * operations. The field can (optionally) be specified when performing
   * update or delete operations, but the server is free to reject requests
   * that do so in such a way that it breaks semantics.
   */
  uid?: string;

  /**
   * An opaque string that changes for each update operation to any part of
   * the entity, including metadata.
   *
   * This field can not be set by the user at creation time, and the server
   * will reject an attempt to do so. The field will be populated in read
   * operations. The field can (optionally) be specified when performing
   * update or delete operations, and the server will then reject the
   * operation if it does not match the current stored value.
   */
  etag?: string;

  /**
   * The name of the entity.
   *
   * Must be unique within the catalog at any given point in time, for any
   * given namespace + kind pair. This value is part of the technical
   * identifier of the entity, and as such it will appear in URLs, database
   * tables, entity references, and similar. It is subject to restrictions
   * regarding what characters are allowed.
   *
   * If you want to use a different, more human readable string with fewer
   * restrictions on it in user interfaces, see the \`title\` field below.
   */
  name: string;

  /**
   * The namespace that the entity belongs to.
   */
  namespace?: string;

  /**
   * A display name of the entity, to be presented in user interfaces instead
   * of the \`name\` property above, when available.
   *
   * This field is sometimes useful when the \`name\` is cumbersome or ends up
   * being perceived as overly technical. The title generally does not have
   * as stringent format requirements on it, so it may contain special
   * characters and be more explanatory. Do keep it very short though, and
   * avoid situations where a title can be confused with the name of another
   * entity, or where two entities share a title.
   *
   * Note that this is only for display purposes, and may be ignored by some
   * parts of the code. Entity references still always make use of the \`name\`
   * property, not the title.
   */
  title?: string;

  /**
   * A short (typically relatively few words, on one line) description of the
   * entity.
   */
  description?: string;

  /**
   * Key/value pairs of identifying information attached to the entity.
   */
  labels?: Record<string, string>;

  /**
   * Key/value pairs of non-identifying auxiliary information attached to the
   * entity.
   */
  annotations?: Record<string, string>;

  /**
   * A list of single-valued strings, to for example classify catalog entities in
   * various ways.
   */
  tags?: string[];

  /**
   * A list of external hyperlinks related to the entity.
   */
  links?: EntityLink[];
}`,signature:{properties:[{key:"uid",value:{name:"string",required:!1},description:`A globally unique ID for the entity.

This field can not be set by the user at creation time, and the server
will reject an attempt to do so. The field will be populated in read
operations. The field can (optionally) be specified when performing
update or delete operations, but the server is free to reject requests
that do so in such a way that it breaks semantics.`},{key:"etag",value:{name:"string",required:!1},description:`An opaque string that changes for each update operation to any part of
the entity, including metadata.

This field can not be set by the user at creation time, and the server
will reject an attempt to do so. The field will be populated in read
operations. The field can (optionally) be specified when performing
update or delete operations, and the server will then reject the
operation if it does not match the current stored value.`},{key:"name",value:{name:"string",required:!0},description:`The name of the entity.

Must be unique within the catalog at any given point in time, for any
given namespace + kind pair. This value is part of the technical
identifier of the entity, and as such it will appear in URLs, database
tables, entity references, and similar. It is subject to restrictions
regarding what characters are allowed.

If you want to use a different, more human readable string with fewer
restrictions on it in user interfaces, see the \`title\` field below.`},{key:"namespace",value:{name:"string",required:!1},description:"The namespace that the entity belongs to."},{key:"title",value:{name:"string",required:!1},description:`A display name of the entity, to be presented in user interfaces instead
of the \`name\` property above, when available.

This field is sometimes useful when the \`name\` is cumbersome or ends up
being perceived as overly technical. The title generally does not have
as stringent format requirements on it, so it may contain special
characters and be more explanatory. Do keep it very short though, and
avoid situations where a title can be confused with the name of another
entity, or where two entities share a title.

Note that this is only for display purposes, and may be ignored by some
parts of the code. Entity references still always make use of the \`name\`
property, not the title.`},{key:"description",value:{name:"string",required:!1},description:`A short (typically relatively few words, on one line) description of the
entity.`},{key:"labels",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:"Key/value pairs of identifying information attached to the entity."},{key:"annotations",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1},description:`Key/value pairs of non-identifying auxiliary information attached to the
entity.`},{key:"tags",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1},description:`A list of single-valued strings, to for example classify catalog entities in
various ways.`},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The url to the external site, document, etc.
   */
  url: string;

  /**
   * An optional descriptive title for the link.
   */
  title?: string;

  /**
   * An optional semantic key that represents a visual icon.
   */
  icon?: string;

  /**
   * An optional value to categorize links into specific groups
   */
  type?: string;
}`,signature:{properties:[{key:"url",value:{name:"string",required:!0},description:"The url to the external site, document, etc."},{key:"title",value:{name:"string",required:!1},description:"An optional descriptive title for the link."},{key:"icon",value:{name:"string",required:!1},description:"An optional semantic key that represents a visual icon."},{key:"type",value:{name:"string",required:!1},description:"An optional value to categorize links into specific groups"}]}}],raw:"EntityLink[]",required:!1},description:"A list of external hyperlinks related to the entity."}]}}],required:!0},description:"Metadata related to the entity."},{key:"spec",value:{name:"signature",type:"object",raw:"{ [key in string]?: JsonValue }",signature:{properties:[{key:{name:"string",required:!1},value:{name:"union",raw:"JsonObject | JsonArray | JsonPrimitive",elements:[{name:"JsonObject"},{name:"JsonArray"},{name:"union",raw:"number | string | boolean | null",elements:[{name:"number"},{name:"string"},{name:"boolean"},{name:"null"}]}]}}]},required:!1},description:"The specification data describing the entity itself."},{key:"relations",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /**
   * The type of the relation.
   */
  type: string;

  /**
   * The entity ref of the target of this relation.
   */
  targetRef: string;
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0},description:"The type of the relation."},{key:"targetRef",value:{name:"string",required:!0},description:"The entity ref of the target of this relation."}]}}],raw:"EntityRelation[]",required:!1},description:"The relations that this entity has with other entities."}]}},description:""},relationsType:{required:!1,tsType:{name:"union",raw:"'direct' | 'aggregated'",elements:[{name:"literal",value:"'direct'"},{name:"literal",value:"'aggregated'"}]},description:"@deprecated Please use relationAggregation instead"},relationAggregation:{required:!1,tsType:{name:"union",raw:"'direct' | 'aggregated'",elements:[{name:"literal",value:"'direct'"},{name:"literal",value:"'aggregated'"}]},description:""},entityFilterKind:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},entityLimit:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}}}};const Ge=K(()=>M({grid:{overflowY:"auto",marginTop:0}}),{name:"PluginOrgOwnershipCard"}),A=e=>{const{entityFilterKind:a,hideRelationsToggle:r,entityLimit:t=6}=e,n=e.relationAggregation??e.relationsType,o=r===void 0?!1:r,l=Ge(),{entity:h}=se(),{t:f}=X(le),m=h.kind==="User"?"aggregated":"direct",[p,c]=P.useState(n??m);return P.useEffect(()=>{n||c(m)},[c,m,n]),u.jsx(oe,{title:f("ownershipCard.title"),headerActions:!o&&u.jsx(he,{isSelected:p!=="direct",onChange:w=>c(w?"aggregated":"direct"),label:f("ownershipCard.aggregateRelationsToggle.label")}),children:u.jsx(W,{className:l.grid,entity:h,entityLimit:t,relationAggregation:p,entityFilterKind:a})})};A.__docgenInfo={description:"@public",methods:[],displayName:"OwnershipCard",props:{entityFilterKind:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},hideRelationsToggle:{required:!1,tsType:{name:"boolean"},description:""},relationsType:{required:!1,tsType:{name:"union",raw:"'direct' | 'aggregated'",elements:[{name:"literal",value:"'direct'"},{name:"literal",value:"'aggregated'"}]},description:"@deprecated Please use relationAggregation instead"},relationAggregation:{required:!1,tsType:{name:"union",raw:"'direct' | 'aggregated'",elements:[{name:"literal",value:"'direct'"},{name:"literal",value:"'aggregated'"}]},description:""},entityLimit:{required:!1,tsType:{name:"number"},description:""}}};const hn={title:"Plugins/Org/Ownership Card",component:A,tags:["!manifest"]},Q={apiVersion:"backstage.io/v1alpha1",kind:"Group",metadata:{name:"team-a",description:"Team A"},spec:{profile:{displayName:"Team A",email:"team-a@example.com",picture:"https://api.dicebear.com/7.x/identicon/svg?seed=Fluffy&backgroundType=solid,gradientLinear&backgroundColor=ffd5dc,b6e3f4"},type:"group",children:[]}},Se=({type:e,name:a})=>({apiVersion:"backstage.io/v1alpha1",kind:"Component",metadata:{name:a},spec:{type:e},relations:[{type:"ownedBy",targetRef:"group:default/team-a",target:{namespace:"default",kind:"group",name:"team-a"}}]}),Ne=["service","website","api","playlist","grpc","trpc","library"],Ue=Ne.map((e,a)=>Se({type:e,name:`${e}-${a}`})),De={getEntities:()=>Promise.resolve({items:Ue})},Y=Z.from([J,De]),T=()=>U(u.jsx(N,{apis:Y,children:u.jsx(F,{entity:Q,children:u.jsx(x,{container:!0,spacing:4,children:u.jsx(x,{item:!0,xs:12,md:6,style:{maxHeight:320,overflow:"hidden"},children:u.jsx(A,{})})})})}),{mountedRoutes:{"/catalog":L}}),R={argTypes:{entityLimit:{control:{type:"number"}}},render:({entityLimit:e})=>U(u.jsx(N,{apis:Y,children:u.jsx(F,{entity:Q,children:u.jsx(x,{container:!0,spacing:4,children:u.jsx(x,{item:!0,xs:12,md:6,children:u.jsx(A,{entityLimit:e})})})})}),{mountedRoutes:{"/catalog":L}})};T.__docgenInfo={description:"",methods:[],displayName:"Default"};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => wrapInTestApp(<ApiProvider apis={apis}>
      <EntityProvider entity={defaultEntity}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} style={{
        maxHeight: 320,
        overflow: 'hidden'
      }}>
            <OwnershipCard />
          </Grid>
        </Grid>
      </EntityProvider>
    </ApiProvider>, {
  mountedRoutes: {
    '/catalog': catalogIndexRouteRef
  }
})`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  argTypes: {
    entityLimit: {
      control: {
        type: 'number'
      }
    }
  },
  render: ({
    entityLimit
  }: {
    entityLimit: number;
  }) => wrapInTestApp(<ApiProvider apis={apis}>
        <EntityProvider entity={defaultEntity}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <OwnershipCard entityLimit={entityLimit} />
            </Grid>
          </Grid>
        </EntityProvider>
      </ApiProvider>, {
    mountedRoutes: {
      '/catalog': catalogIndexRouteRef
    }
  })
}`,...R.parameters?.docs?.source}}};const fn=["Default","WithVariableEntityList"];export{T as Default,R as WithVariableEntityList,fn as __namedExportsOrder,hn as default};
