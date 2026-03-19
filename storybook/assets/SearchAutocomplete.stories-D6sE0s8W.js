import{ar as B,ao as _,r as s,j as e,ap as G,B as Z,p as K}from"./iframe-CBVwdAXc.js";import{f as U,g as J,$ as Q}from"./Dialog-BtdUUVlj.js";import{$ as X}from"./Autocomplete-gz8QQ9yr.js";import{$ as Y}from"./Button-e3tvbQef.js";import{$ as ee}from"./Input-956oaaad.js";import{$ as te,a as ae}from"./ListBox-Ca_tiiGT.js";import{$ as ne}from"./SearchField-FuBcP0wK.js";import{a as re}from"./OverlayArrow-Clg62Fcc.js";import{Z as ie,A as oe,d as z}from"./index-DMQI_7Ec.js";import{V as se}from"./VisuallyHidden-gi7LmvUQ.js";import{F as N}from"./Flex-ClF3ik7I.js";import{P as ue}from"./PluginHeader-DiASeJqw.js";import{M as le}from"./index-D9ejMs_C.js";import{T as c}from"./Text-B-l5WmZI.js";import{B as k}from"./ButtonIcon-Cx-1MPL_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-c0gmJLHB.js";import"./useObjectRef-BTJ41blJ.js";import"./RSPContexts-XWJ8kPIq.js";import"./SelectionManager-C-Kv50p8.js";import"./useFocusable-C2NxgIR7.js";import"./openLink-DK4oWnZh.js";import"./useEvent-C9PSVIlH.js";import"./SelectionIndicator-CxqNxpyh.js";import"./context-ByGyfvMq.js";import"./usePress-CrtdNndU.js";import"./Hidden-C1fwvozu.js";import"./useControlledState-v2lIFKOi.js";import"./Separator-MDkMLRAc.js";import"./Text-Djfo9fKf.js";import"./useFocusRing-DGtsrRBJ.js";import"./useLocalizedStringFormatter-BbfSUs2G.js";import"./animation-ClNEv7S9.js";import"./useLabels-1M4zWFoV.js";import"./VisuallyHidden-C_D6_d78.js";import"./Label-1g_-oxR9.js";import"./useLabel-D4DyP171.js";import"./useButton-Cw2f_iV-.js";import"./useFormReset-DBDFyliF.js";import"./useField-Dani3hIX.js";import"./Form-8AgzCCi7.js";import"./useListState-mr8xFsjk.js";import"./FieldError-DldMpNv_.js";import"./Link-2x_m5_YP.js";import"./useLink-DDVjSs5u.js";import"./Tabs-DvmRNXR2.js";import"./useHasTabbableChild-DXC7f3Jv.js";import"./linkUtils-tKDL5Jm1.js";import"./getNodeText-Vu-fYCCh.js";const F={"bui-SearchAutocomplete":"_bui-SearchAutocomplete_m19px_20","bui-SearchAutocompleteSearchField":"_bui-SearchAutocompleteSearchField_m19px_43","bui-SearchAutocompleteInput":"_bui-SearchAutocompleteInput_m19px_71","bui-SearchAutocompleteClear":"_bui-SearchAutocompleteClear_m19px_97","bui-SearchAutocompletePopover":"_bui-SearchAutocompletePopover_m19px_121","bui-SearchAutocompleteInner":"_bui-SearchAutocompleteInner_m19px_150","bui-SearchAutocompleteListBox":"_bui-SearchAutocompleteListBox_m19px_158","bui-SearchAutocompleteItem":"_bui-SearchAutocompleteItem_m19px_171","bui-SearchAutocompleteItemContent":"_bui-SearchAutocompleteItemContent_m19px_184","bui-SearchAutocompleteLoadingState":"_bui-SearchAutocompleteLoadingState_m19px_205","bui-SearchAutocompleteEmptyState":"_bui-SearchAutocompleteEmptyState_m19px_206"},O=B()({styles:F,classNames:{root:"bui-SearchAutocomplete",searchField:"bui-SearchAutocompleteSearchField",searchFieldInput:"bui-SearchAutocompleteInput",searchFieldClear:"bui-SearchAutocompleteClear",popover:"bui-SearchAutocompletePopover",inner:"bui-SearchAutocompleteInner",listBox:"bui-SearchAutocompleteListBox",loadingState:"bui-SearchAutocompleteLoadingState",emptyState:"bui-SearchAutocompleteEmptyState"},propDefs:{"aria-label":{},"aria-labelledby":{},size:{dataAttribute:!0,default:"small"},placeholder:{default:"Search"},inputValue:{},onInputChange:{},popoverWidth:{},popoverPlacement:{},children:{},isLoading:{},defaultOpen:{},className:{},style:{}}}),ce=B()({styles:F,classNames:{root:"bui-SearchAutocompleteItem",itemContent:"bui-SearchAutocompleteItemContent"},propDefs:{children:{},className:{}}}),pe=()=>{const{ownProps:o}=_(O,{});return e.jsx("div",{className:o.classes.emptyState,children:"No results found."})};function l(o){const{ownProps:r,dataAttributes:a}=_(O,o),{classes:n,"aria-label":i,"aria-labelledby":t,inputValue:v,onInputChange:u,placeholder:d,popoverWidth:L,popoverPlacement:q="bottom start",children:$,isLoading:T,defaultOpen:D,style:E}=r,j=s.useRef(null),P=s.useRef(null),W=!!v,H=s.Children.count($)>0;let R="";T?R="Searching":W&&!H&&(R="No results found");const f=re({defaultOpen:D});return U({ref:P,onInteractOutside:w=>{const M=w.target;j.current?.contains(M)||f.close()},isDisabled:!f.isOpen}),e.jsx(J.Provider,{value:f,children:e.jsxs(X,{inputValue:v,onInputChange:w=>{u?.(w),w?f.open():f.close()},children:[e.jsx(ne,{className:n.searchField,"aria-label":i??(t?void 0:d),"aria-labelledby":t,"data-size":a["data-size"],onKeyDown:w=>{w.key==="Enter"&&!f.isOpen&&W&&(w.preventDefault(),f.open())},children:e.jsxs("div",{ref:j,className:n.root,"data-size":a["data-size"],style:E,children:[e.jsx("div",{"aria-hidden":"true",children:e.jsx(ie,{})}),e.jsx(ee,{className:n.searchFieldInput,placeholder:d}),e.jsx(Y,{className:n.searchFieldClear,style:{visibility:W?"visible":"hidden"},children:e.jsx(oe,{})})]})}),e.jsx(Q,{ref:P,className:n.popover,triggerRef:j,isNonModal:!0,placement:q,...L?{style:{width:L}}:{},children:e.jsx(G,{children:e.jsx(Z,{bg:"neutral",className:n.inner,children:e.jsx(te,{className:n.listBox,autoFocus:"first",shouldFocusOnHover:!0,"aria-busy":T||void 0,"data-stale":T||void 0,renderEmptyState:()=>T?e.jsx("div",{className:n.loadingState,children:"Searching..."}):e.jsx(pe,{}),onAction:()=>{f.close()},children:$})})})}),e.jsx(se,{"aria-live":"polite","aria-atomic":"true",children:R})]})})}function p(o){const{ownProps:r,restProps:a}=_(ce,o),{classes:n,children:i}=r;return e.jsx(ae,{textValue:typeof i=="string"?i:void 0,className:n.root,...a,children:e.jsx("div",{className:n.itemContent,children:i})})}l.__docgenInfo={description:"@public",methods:[],displayName:"SearchAutocomplete",props:{inputValue:{required:!1,tsType:{name:"string"},description:"The current value of the search input (controlled)."},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Handler called when the search input value changes."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | Partial<Record<Breakpoint, 'small' | 'medium'>>",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Record<Breakpoint, 'small' | 'medium'>"}],raw:"Partial<Record<Breakpoint, 'small' | 'medium'>>"}]},description:`The size of the search input.
@defaultValue 'small'`},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the search input."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of the element that labels the search input."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text for the search input."},popoverWidth:{required:!1,tsType:{name:"string"},description:`Width of the results popover. Accepts any CSS width value.
When not set, the popover matches the input width.`},popoverPlacement:{required:!1,tsType:{name:"AriaPopoverProps['placement']",raw:"AriaPopoverProps['placement']"},description:`Placement of the results popover relative to the input.
@defaultValue 'bottom start'`},children:{required:!1,tsType:{name:"ReactNode"},description:"The result items to render inside the autocomplete."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether results are currently loading.
When true, displays a loading indicator and announces the loading state to screen readers.`},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the results popover is open by default."},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};p.__docgenInfo={description:"@public",methods:[],displayName:"SearchAutocompleteItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const m=K.meta({title:"Backstage UI/SearchAutocomplete",component:l,argTypes:{size:{control:"select",options:["small","medium"]},placeholder:{control:"text"},popoverWidth:{control:"text"}}}),h=[{id:"apple",name:"Apple",description:"A round fruit"},{id:"banana",name:"Banana",description:"A yellow curved fruit"},{id:"blueberry",name:"Blueberry",description:"A small blue berry"},{id:"cherry",name:"Cherry",description:"A small red stone fruit"},{id:"grape",name:"Grape",description:"Grows in clusters on vines"},{id:"lemon",name:"Lemon",description:"A sour yellow citrus fruit"},{id:"mango",name:"Mango",description:"A tropical stone fruit"},{id:"orange",name:"Orange",description:"A citrus fruit"},{id:"peach",name:"Peach",description:"A fuzzy stone fruit"},{id:"strawberry",name:"Strawberry",description:"A red fruit with seeds on its surface"}],S=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))})}}),x=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsxs(p,{id:t.id,textValue:t.name,children:[e.jsx(c,{weight:"bold",children:t.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:t.description})]},t.id))})}}),g=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),[i,t]=s.useState([]),[v,u]=s.useState(!1);return s.useEffect(()=>{if(!a){t([]);return}u(!0);const d=setTimeout(()=>{t(h.filter(L=>L.name.toLowerCase().includes(a.toLowerCase()))),u(!1)},2e3);return()=>clearTimeout(d)},[a]),e.jsx(l,{...r,inputValue:a,onInputChange:n,isLoading:v,children:i.map(d=>e.jsxs(p,{id:d.id,textValue:d.name,children:[e.jsx(c,{weight:"bold",children:d.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:d.description})]},d.id))})}}),y=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),[i,t]=s.useState(null),v=h.filter(u=>u.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs(N,{direction:"column",gap:"4",children:[e.jsx(l,{...r,inputValue:a,onInputChange:n,children:v.map(u=>e.jsx(p,{id:u.id,textValue:u.name,onAction:()=>{t(u.name),n("")},children:u.name},u.id))}),e.jsxs(c,{children:["Last selected: ",i??"none"]})]})}}),b=m.story({args:{"aria-label":"Search",placeholder:"Search..."},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs(N,{direction:"row",gap:"4",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(l,{...r,size:"small",inputValue:a,onInputChange:n,children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))}),e.jsx(l,{...r,size:"medium",inputValue:a,onInputChange:n,children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))})]})}}),I=m.story({args:{"aria-label":"Search",placeholder:"Search..."},decorators:[o=>e.jsx(le,{children:e.jsx(o,{})})],render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(ue,{title:"Title",customActions:e.jsxs(e.Fragment,{children:[e.jsx(k,{"aria-label":"Cactus icon button",icon:e.jsx(z,{}),size:"small",variant:"secondary"}),e.jsx(l,{...r,size:"small",inputValue:a,onInputChange:n,popoverWidth:"400px",children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))}),e.jsx(k,{"aria-label":"Cactus icon button",icon:e.jsx(z,{}),size:"small",variant:"secondary"})]})})}}),V=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",popoverWidth:"500px",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsxs(p,{id:t.id,textValue:t.name,children:[e.jsx(c,{weight:"bold",children:t.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:t.description})]},t.id))})}}),A=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",defaultOpen:!0,style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState("ap"),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsxs(p,{id:t.id,textValue:t.name,children:[e.jsx(c,{weight:"bold",children:t.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:t.description})]},t.id))})}}),C=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",defaultOpen:!0,isLoading:!0,inputValue:"ap",style:{maxWidth:"300px"}},render:function(r){return e.jsx(l,{...r,onInputChange:()=>{},children:h.slice(0,3).map(a=>e.jsxs(p,{id:a.id,textValue:a.name,children:[e.jsx(c,{weight:"bold",children:a.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:a.description})]},a.id))})}});S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{code:`const WithItems = () => {
  const [inputValue, setInputValue] = useState("");

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <SearchAutocomplete
      aria-label="Search fruits"
      placeholder="Search fruits..."
      style={{ maxWidth: "300px" }}
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      {filtered.map((fruit) => (
        <SearchAutocompleteItem
          key={fruit.id}
          id={fruit.id}
          textValue={fruit.name}
        >
          {fruit.name}
        </SearchAutocompleteItem>
      ))}
    </SearchAutocomplete>
  );
};
`,...S.input.parameters?.docs?.source}}};x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{code:`const WithRichContent = () => {
  const [inputValue, setInputValue] = useState("");

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <SearchAutocomplete
      aria-label="Search fruits"
      placeholder="Search fruits..."
      style={{ maxWidth: "300px" }}
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      {filtered.map((fruit) => (
        <SearchAutocompleteItem
          key={fruit.id}
          id={fruit.id}
          textValue={fruit.name}
        >
          <Text weight="bold">{fruit.name}</Text>
          <Text variant="body-small" color="secondary">
            {fruit.description}
          </Text>
        </SearchAutocompleteItem>
      ))}
    </SearchAutocomplete>
  );
};
`,...x.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{code:`const WithAsyncItems = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<typeof fruits>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      setItems([]);
      return undefined;
    }

    setIsLoading(true);
    const timeout = setTimeout(() => {
      setItems(
        fruits.filter((fruit) =>
          fruit.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <SearchAutocomplete
      aria-label="Search fruits"
      placeholder="Search fruits..."
      style={{ maxWidth: "300px" }}
      inputValue={inputValue}
      onInputChange={setInputValue}
      isLoading={isLoading}
    >
      {items.map((item) => (
        <SearchAutocompleteItem
          key={item.id}
          id={item.id}
          textValue={item.name}
        >
          <Text weight="bold">{item.name}</Text>
          <Text variant="body-small" color="secondary">
            {item.description}
          </Text>
        </SearchAutocompleteItem>
      ))}
    </SearchAutocomplete>
  );
};
`,...g.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{code:`const WithSelection = () => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Flex direction="column" gap="4">
      <SearchAutocomplete
        aria-label="Search fruits"
        placeholder="Search fruits..."
        style={{ maxWidth: "300px" }}
        inputValue={inputValue}
        onInputChange={setInputValue}
      >
        {filtered.map((fruit) => (
          <SearchAutocompleteItem
            key={fruit.id}
            id={fruit.id}
            textValue={fruit.name}
            onAction={() => {
              setSelected(fruit.name);
              setInputValue("");
            }}
          >
            {fruit.name}
          </SearchAutocompleteItem>
        ))}
      </SearchAutocomplete>
      <Text>Last selected: {selected ?? "none"}</Text>
    </Flex>
  );
};
`,...y.input.parameters?.docs?.source}}};b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{code:`const Sizes = () => {
  const [inputValue, setInputValue] = useState("");

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Flex direction="row" gap="4" style={{ width: "100%", maxWidth: "600px" }}>
      <SearchAutocomplete
        aria-label="Search"
        placeholder="Search..."
        size="small"
        inputValue={inputValue}
        onInputChange={setInputValue}
      >
        {filtered.map((fruit) => (
          <SearchAutocompleteItem
            key={fruit.id}
            id={fruit.id}
            textValue={fruit.name}
          >
            {fruit.name}
          </SearchAutocompleteItem>
        ))}
      </SearchAutocomplete>
      <SearchAutocomplete
        aria-label="Search"
        placeholder="Search..."
        size="medium"
        inputValue={inputValue}
        onInputChange={setInputValue}
      >
        {filtered.map((fruit) => (
          <SearchAutocompleteItem
            key={fruit.id}
            id={fruit.id}
            textValue={fruit.name}
          >
            {fruit.name}
          </SearchAutocompleteItem>
        ))}
      </SearchAutocomplete>
    </Flex>
  );
};
`,...b.input.parameters?.docs?.source}}};I.input.parameters={...I.input.parameters,docs:{...I.input.parameters?.docs,source:{code:`const InHeader = function Render(args) {
  const [inputValue, setInputValue] = useState("");

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <PluginHeader
      title="Title"
      customActions={
        <>
          <ButtonIcon
            aria-label="Cactus icon button"
            icon={<RiCactusLine />}
            size="small"
            variant="secondary"
          />
          <SearchAutocomplete
            {...args}
            size="small"
            inputValue={inputValue}
            onInputChange={setInputValue}
            popoverWidth="400px"
          >
            {filtered.map((fruit) => (
              <SearchAutocompleteItem
                key={fruit.id}
                id={fruit.id}
                textValue={fruit.name}
              >
                {fruit.name}
              </SearchAutocompleteItem>
            ))}
          </SearchAutocomplete>
          <ButtonIcon
            aria-label="Cactus icon button"
            icon={<RiCactusLine />}
            size="small"
            variant="secondary"
          />
        </>
      }
    />
  );
};
`,...I.input.parameters?.docs?.source}}};V.input.parameters={...V.input.parameters,docs:{...V.input.parameters?.docs,source:{code:`const WithPopoverWidth = () => {
  const [inputValue, setInputValue] = useState("");

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <SearchAutocomplete
      aria-label="Search fruits"
      placeholder="Search fruits..."
      popoverWidth="500px"
      style={{ maxWidth: "300px" }}
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      {filtered.map((fruit) => (
        <SearchAutocompleteItem
          key={fruit.id}
          id={fruit.id}
          textValue={fruit.name}
        >
          <Text weight="bold">{fruit.name}</Text>
          <Text variant="body-small" color="secondary">
            {fruit.description}
          </Text>
        </SearchAutocompleteItem>
      ))}
    </SearchAutocomplete>
  );
};
`,...V.input.parameters?.docs?.source}}};A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{code:`const OpenByDefault = () => {
  const [inputValue, setInputValue] = useState("ap");

  const filtered = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <SearchAutocomplete
      aria-label="Search fruits"
      placeholder="Search fruits..."
      defaultOpen
      style={{ maxWidth: "300px" }}
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      {filtered.map((fruit) => (
        <SearchAutocompleteItem
          key={fruit.id}
          id={fruit.id}
          textValue={fruit.name}
        >
          <Text weight="bold">{fruit.name}</Text>
          <Text variant="body-small" color="secondary">
            {fruit.description}
          </Text>
        </SearchAutocompleteItem>
      ))}
    </SearchAutocomplete>
  );
};
`,...A.input.parameters?.docs?.source}}};C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{code:`const OpenWithLoading = () => {
  return (
    <SearchAutocomplete
      aria-label="Search fruits"
      placeholder="Search fruits..."
      defaultOpen
      isLoading
      inputValue="ap"
      style={{ maxWidth: "300px" }}
      onInputChange={() => {}}
    >
      {fruits.slice(0, 3).map((fruit) => (
        <SearchAutocompleteItem
          key={fruit.id}
          id={fruit.id}
          textValue={fruit.name}
        >
          <Text weight="bold">{fruit.name}</Text>
          <Text variant="body-small" color="secondary">
            {fruit.description}
          </Text>
        </SearchAutocompleteItem>
      ))}
    </SearchAutocomplete>
  );
};
`,...C.input.parameters?.docs?.source}}};S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <SearchAutocomplete {...args} inputValue={inputValue} onInputChange={setInputValue}>
        {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
            {fruit.name}
          </SearchAutocompleteItem>)}
      </SearchAutocomplete>;
  }
})`,...S.input.parameters?.docs?.source}}};x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <SearchAutocomplete {...args} inputValue={inputValue} onInputChange={setInputValue}>
        {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
            <Text weight="bold">{fruit.name}</Text>
            <Text variant="body-small" color="secondary">
              {fruit.description}
            </Text>
          </SearchAutocompleteItem>)}
      </SearchAutocomplete>;
  }
})`,...x.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState<typeof fruits>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      if (!inputValue) {
        setItems([]);
        return undefined;
      }
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setItems(fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase())));
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [inputValue]);
    return <SearchAutocomplete {...args} inputValue={inputValue} onInputChange={setInputValue} isLoading={isLoading}>
        {items.map(item => <SearchAutocompleteItem key={item.id} id={item.id} textValue={item.name}>
            <Text weight="bold">{item.name}</Text>
            <Text variant="body-small" color="secondary">
              {item.description}
            </Text>
          </SearchAutocompleteItem>)}
      </SearchAutocomplete>;
  }
})`,...g.input.parameters?.docs?.source}}};y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const [selected, setSelected] = useState<string | null>(null);
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <Flex direction="column" gap="4">
        <SearchAutocomplete {...args} inputValue={inputValue} onInputChange={setInputValue}>
          {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name} onAction={() => {
          setSelected(fruit.name);
          setInputValue('');
        }}>
              {fruit.name}
            </SearchAutocompleteItem>)}
        </SearchAutocomplete>
        <Text>Last selected: {selected ?? 'none'}</Text>
      </Flex>;
  }
})`,...y.input.parameters?.docs?.source}}};b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search',
    placeholder: 'Search...'
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <Flex direction="row" gap="4" style={{
      width: '100%',
      maxWidth: '600px'
    }}>
        <SearchAutocomplete {...args} size="small" inputValue={inputValue} onInputChange={setInputValue}>
          {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
              {fruit.name}
            </SearchAutocompleteItem>)}
        </SearchAutocomplete>
        <SearchAutocomplete {...args} size="medium" inputValue={inputValue} onInputChange={setInputValue}>
          {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
              {fruit.name}
            </SearchAutocompleteItem>)}
        </SearchAutocomplete>
      </Flex>;
  }
})`,...b.input.parameters?.docs?.source}}};I.input.parameters={...I.input.parameters,docs:{...I.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search',
    placeholder: 'Search...'
  },
  decorators: [Story => <MemoryRouter>
        <Story />
      </MemoryRouter>],
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <PluginHeader title="Title" customActions={<>
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
            <SearchAutocomplete {...args} size="small" inputValue={inputValue} onInputChange={setInputValue} popoverWidth="400px">
              {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
                  {fruit.name}
                </SearchAutocompleteItem>)}
            </SearchAutocomplete>
            <ButtonIcon aria-label="Cactus icon button" icon={<RiCactusLine />} size="small" variant="secondary" />
          </>} />;
  }
})`,...I.input.parameters?.docs?.source}}};V.input.parameters={...V.input.parameters,docs:{...V.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    popoverWidth: '500px',
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('');
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <SearchAutocomplete {...args} inputValue={inputValue} onInputChange={setInputValue}>
        {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
            <Text weight="bold">{fruit.name}</Text>
            <Text variant="body-small" color="secondary">
              {fruit.description}
            </Text>
          </SearchAutocompleteItem>)}
      </SearchAutocomplete>;
  }
})`,...V.input.parameters?.docs?.source}}};A.input.parameters={...A.input.parameters,docs:{...A.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    defaultOpen: true,
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    const [inputValue, setInputValue] = useState('ap');
    const filtered = fruits.filter(fruit => fruit.name.toLowerCase().includes(inputValue.toLowerCase()));
    return <SearchAutocomplete {...args} inputValue={inputValue} onInputChange={setInputValue}>
        {filtered.map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
            <Text weight="bold">{fruit.name}</Text>
            <Text variant="body-small" color="secondary">
              {fruit.description}
            </Text>
          </SearchAutocompleteItem>)}
      </SearchAutocomplete>;
  }
})`,...A.input.parameters?.docs?.source}}};C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    'aria-label': 'Search fruits',
    placeholder: 'Search fruits...',
    defaultOpen: true,
    isLoading: true,
    inputValue: 'ap',
    style: {
      maxWidth: '300px'
    }
  },
  render: function Render(args) {
    return <SearchAutocomplete {...args} onInputChange={() => {}}>
        {fruits.slice(0, 3).map(fruit => <SearchAutocompleteItem key={fruit.id} id={fruit.id} textValue={fruit.name}>
            <Text weight="bold">{fruit.name}</Text>
            <Text variant="body-small" color="secondary">
              {fruit.description}
            </Text>
          </SearchAutocompleteItem>)}
      </SearchAutocomplete>;
  }
})`,...C.input.parameters?.docs?.source}}};const st=["WithItems","WithRichContent","WithAsyncItems","WithSelection","Sizes","InHeader","WithPopoverWidth","OpenByDefault","OpenWithLoading"];export{I as InHeader,A as OpenByDefault,C as OpenWithLoading,b as Sizes,g as WithAsyncItems,S as WithItems,V as WithPopoverWidth,x as WithRichContent,y as WithSelection,st as __namedExportsOrder};
