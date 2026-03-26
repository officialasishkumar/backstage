import{ay as B,aw as _,r as s,j as e,ax as G,B as Z,p as K,M as U}from"./iframe-hebBxzMS.js";import{f as J,g as Q,$ as X}from"./Dialog-CCuJFCEp.js";import{$ as Y}from"./Autocomplete-C8MjEggX.js";import{$ as ee}from"./Button-CBkijT0R.js";import{$ as te}from"./Input-C8KV3Opj.js";import{$ as ae,a as ne}from"./ListBox-DXsjERGm.js";import{$ as re}from"./SearchField-Drfzm0hM.js";import{a as ie}from"./OverlayArrow-Cp_qpEEI.js";import{Z as oe,A as se,d as z}from"./index-BAKL3Y3K.js";import{V as ue}from"./VisuallyHidden-CggorclP.js";import{F as N}from"./Flex-Cm4r2vAa.js";import{P as le}from"./PluginHeader-Dbl02KFZ.js";import{T as c}from"./Text-C_bPDOM3.js";import{B as k}from"./ButtonIcon-DYRLlx0W.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CAXHjz7j.js";import"./useObjectRef-DuE5YdCW.js";import"./RSPContexts-CQKlyhDe.js";import"./SelectionManager-NO3pQZe-.js";import"./useFocusable-DsSJxBOe.js";import"./openLink-CPB6xqLo.js";import"./useEvent-C7m6We2P.js";import"./SelectionIndicator-90zhwDRh.js";import"./context-BCF0FR97.js";import"./usePress-S5PQdJXQ.js";import"./textSelection-DdJol7Lo.js";import"./Hidden-DAOShLRR.js";import"./useControlledState-ceZeyNNr.js";import"./Separator-BcavHQ_x.js";import"./Text-DSIn8C-W.js";import"./useFocusRing-yBFCPJYO.js";import"./useLocalizedStringFormatter-2DhJujtG.js";import"./animation-DTo8OXUV.js";import"./useLabels-BFnETP_I.js";import"./VisuallyHidden-D9RvgFSb.js";import"./Label-2_4q4FCv.js";import"./useNumberFormatter-C7HOQuNo.js";import"./useLabel-BhhpXbfx.js";import"./useButton-D66X7izN.js";import"./useFormReset-CBuVw348.js";import"./useField-CaxnEag2.js";import"./Form-vAGA4che.js";import"./useListState-C3LkaYt0.js";import"./FieldError-Cd90l9Ka.js";import"./Link-Q-2QmBx5.js";import"./getNodeText-CbGFeybq.js";import"./useLink-CMVPuK6n.js";import"./Tabs-CoIyMvV8.js";import"./useHasTabbableChild-wRlTF1fE.js";import"./linkUtils-tKDL5Jm1.js";const F={"bui-SearchAutocomplete":"_bui-SearchAutocomplete_8wg5e_20","bui-SearchAutocompleteSearchField":"_bui-SearchAutocompleteSearchField_8wg5e_55","bui-SearchAutocompleteInput":"_bui-SearchAutocompleteInput_8wg5e_83","bui-SearchAutocompleteClear":"_bui-SearchAutocompleteClear_8wg5e_109","bui-SearchAutocompletePopover":"_bui-SearchAutocompletePopover_8wg5e_133","bui-SearchAutocompleteInner":"_bui-SearchAutocompleteInner_8wg5e_162","bui-SearchAutocompleteListBox":"_bui-SearchAutocompleteListBox_8wg5e_170","bui-SearchAutocompleteItem":"_bui-SearchAutocompleteItem_8wg5e_183","bui-SearchAutocompleteItemContent":"_bui-SearchAutocompleteItemContent_8wg5e_196","bui-SearchAutocompleteLoadingState":"_bui-SearchAutocompleteLoadingState_8wg5e_217","bui-SearchAutocompleteEmptyState":"_bui-SearchAutocompleteEmptyState_8wg5e_218"},O=B()({styles:F,bg:"consumer",classNames:{root:"bui-SearchAutocomplete",searchField:"bui-SearchAutocompleteSearchField",searchFieldInput:"bui-SearchAutocompleteInput",searchFieldClear:"bui-SearchAutocompleteClear",popover:"bui-SearchAutocompletePopover",inner:"bui-SearchAutocompleteInner",listBox:"bui-SearchAutocompleteListBox",loadingState:"bui-SearchAutocompleteLoadingState",emptyState:"bui-SearchAutocompleteEmptyState"},propDefs:{"aria-label":{},"aria-labelledby":{},size:{dataAttribute:!0,default:"small"},placeholder:{default:"Search"},inputValue:{},onInputChange:{},popoverWidth:{},popoverPlacement:{},children:{},isLoading:{},defaultOpen:{},className:{},style:{}}}),ce=B()({styles:F,resolveHref:!0,classNames:{root:"bui-SearchAutocompleteItem",itemContent:"bui-SearchAutocompleteItemContent"},propDefs:{children:{},className:{}}}),pe=()=>{const{ownProps:o}=_(O,{});return e.jsx("div",{className:o.classes.emptyState,children:"No results found."})};function l(o){const{ownProps:r,dataAttributes:a}=_(O,o),{classes:n,"aria-label":i,"aria-labelledby":t,inputValue:v,onInputChange:u,placeholder:d,popoverWidth:L,popoverPlacement:q="bottom start",children:$,isLoading:T,defaultOpen:D,style:E}=r,j=s.useRef(null),P=s.useRef(null),W=!!v,H=s.Children.count($)>0;let R="";T?R="Searching":W&&!H&&(R="No results found");const f=ie({defaultOpen:D});return J({ref:P,onInteractOutside:w=>{const M=w.target;j.current?.contains(M)||f.close()},isDisabled:!f.isOpen}),e.jsx(Q.Provider,{value:f,children:e.jsxs(Y,{inputValue:v,onInputChange:w=>{u?.(w),w?f.open():f.close()},children:[e.jsx(re,{className:n.searchField,"aria-label":i??(t?void 0:d),"aria-labelledby":t,"data-size":a["data-size"],onKeyDown:w=>{w.key==="Enter"&&!f.isOpen&&W&&(w.preventDefault(),f.open())},children:e.jsxs("div",{ref:j,className:n.root,...a,style:E,children:[e.jsx("div",{"aria-hidden":"true",children:e.jsx(oe,{})}),e.jsx(te,{className:n.searchFieldInput,placeholder:d}),e.jsx(ee,{className:n.searchFieldClear,style:{visibility:W?"visible":"hidden"},children:e.jsx(se,{})})]})}),e.jsx(X,{ref:P,className:n.popover,triggerRef:j,isNonModal:!0,placement:q,...L?{style:{width:L}}:{},children:e.jsx(G,{children:e.jsx(Z,{bg:"neutral",className:n.inner,children:e.jsx(ae,{className:n.listBox,autoFocus:"first",shouldFocusOnHover:!0,"aria-busy":T||void 0,"data-stale":T||void 0,renderEmptyState:()=>T?e.jsx("div",{className:n.loadingState,children:"Searching..."}):e.jsx(pe,{}),onAction:()=>{f.close()},children:$})})})}),e.jsx(ue,{"aria-live":"polite","aria-atomic":"true",children:R})]})})}function p(o){const{ownProps:r,restProps:a}=_(ce,o),{classes:n,children:i}=r;return e.jsx(ne,{textValue:typeof i=="string"?i:void 0,className:n.root,...a,children:e.jsx("div",{className:n.itemContent,children:i})})}l.__docgenInfo={description:"@public",methods:[],displayName:"SearchAutocomplete",props:{inputValue:{required:!1,tsType:{name:"string"},description:"The current value of the search input (controlled)."},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Handler called when the search input value changes."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | Partial<Record<Breakpoint, 'small' | 'medium'>>",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"Partial",elements:[{name:"Record",elements:[{name:"union",raw:"'initial' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]}],raw:"Record<Breakpoint, 'small' | 'medium'>"}],raw:"Partial<Record<Breakpoint, 'small' | 'medium'>>"}]},description:`The size of the search input.
@defaultValue 'small'`},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the search input."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of the element that labels the search input."},placeholder:{required:!1,tsType:{name:"string"},description:"The placeholder text for the search input."},popoverWidth:{required:!1,tsType:{name:"string"},description:`Width of the results popover. Accepts any CSS width value.
When not set, the popover matches the input width.`},popoverPlacement:{required:!1,tsType:{name:"AriaPopoverProps['placement']",raw:"AriaPopoverProps['placement']"},description:`Placement of the results popover relative to the input.
@defaultValue 'bottom start'`},children:{required:!1,tsType:{name:"ReactNode"},description:"The result items to render inside the autocomplete."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether results are currently loading.
When true, displays a loading indicator and announces the loading state to screen readers.`},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Whether the results popover is open by default."},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};p.__docgenInfo={description:"@public",methods:[],displayName:"SearchAutocompleteItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const m=K.meta({title:"Backstage UI/SearchAutocomplete",component:l,argTypes:{size:{control:"select",options:["small","medium"]},placeholder:{control:"text"},popoverWidth:{control:"text"}}}),h=[{id:"apple",name:"Apple",description:"A round fruit"},{id:"banana",name:"Banana",description:"A yellow curved fruit"},{id:"blueberry",name:"Blueberry",description:"A small blue berry"},{id:"cherry",name:"Cherry",description:"A small red stone fruit"},{id:"grape",name:"Grape",description:"Grows in clusters on vines"},{id:"lemon",name:"Lemon",description:"A sour yellow citrus fruit"},{id:"mango",name:"Mango",description:"A tropical stone fruit"},{id:"orange",name:"Orange",description:"A citrus fruit"},{id:"peach",name:"Peach",description:"A fuzzy stone fruit"},{id:"strawberry",name:"Strawberry",description:"A red fruit with seeds on its surface"}],S=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))})}}),x=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsxs(p,{id:t.id,textValue:t.name,children:[e.jsx(c,{weight:"bold",children:t.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:t.description})]},t.id))})}}),g=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),[i,t]=s.useState([]),[v,u]=s.useState(!1);return s.useEffect(()=>{if(!a){t([]);return}u(!0);const d=setTimeout(()=>{t(h.filter(L=>L.name.toLowerCase().includes(a.toLowerCase()))),u(!1)},2e3);return()=>clearTimeout(d)},[a]),e.jsx(l,{...r,inputValue:a,onInputChange:n,isLoading:v,children:i.map(d=>e.jsxs(p,{id:d.id,textValue:d.name,children:[e.jsx(c,{weight:"bold",children:d.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:d.description})]},d.id))})}}),y=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),[i,t]=s.useState(null),v=h.filter(u=>u.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs(N,{direction:"column",gap:"4",children:[e.jsx(l,{...r,inputValue:a,onInputChange:n,children:v.map(u=>e.jsx(p,{id:u.id,textValue:u.name,onAction:()=>{t(u.name),n("")},children:u.name},u.id))}),e.jsxs(c,{children:["Last selected: ",i??"none"]})]})}}),b=m.story({args:{"aria-label":"Search",placeholder:"Search..."},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsxs(N,{direction:"row",gap:"4",style:{width:"100%",maxWidth:"600px"},children:[e.jsx(l,{...r,size:"small",inputValue:a,onInputChange:n,children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))}),e.jsx(l,{...r,size:"medium",inputValue:a,onInputChange:n,children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))})]})}}),I=m.story({args:{"aria-label":"Search",placeholder:"Search..."},decorators:[o=>e.jsx(U,{children:e.jsx(o,{})})],render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(le,{title:"Title",customActions:e.jsxs(e.Fragment,{children:[e.jsx(k,{"aria-label":"Cactus icon button",icon:e.jsx(z,{}),size:"small",variant:"secondary"}),e.jsx(l,{...r,size:"small",inputValue:a,onInputChange:n,popoverWidth:"400px",children:i.map(t=>e.jsx(p,{id:t.id,textValue:t.name,children:t.name},t.id))}),e.jsx(k,{"aria-label":"Cactus icon button",icon:e.jsx(z,{}),size:"small",variant:"secondary"})]})})}}),V=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",popoverWidth:"500px",style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState(""),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsxs(p,{id:t.id,textValue:t.name,children:[e.jsx(c,{weight:"bold",children:t.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:t.description})]},t.id))})}}),A=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",defaultOpen:!0,style:{maxWidth:"300px"}},render:function(r){const[a,n]=s.useState("ap"),i=h.filter(t=>t.name.toLowerCase().includes(a.toLowerCase()));return e.jsx(l,{...r,inputValue:a,onInputChange:n,children:i.map(t=>e.jsxs(p,{id:t.id,textValue:t.name,children:[e.jsx(c,{weight:"bold",children:t.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:t.description})]},t.id))})}}),C=m.story({args:{"aria-label":"Search fruits",placeholder:"Search fruits...",defaultOpen:!0,isLoading:!0,inputValue:"ap",style:{maxWidth:"300px"}},render:function(r){return e.jsx(l,{...r,onInputChange:()=>{},children:h.slice(0,3).map(a=>e.jsxs(p,{id:a.id,textValue:a.name,children:[e.jsx(c,{weight:"bold",children:a.name}),e.jsx(c,{variant:"body-small",color:"secondary",children:a.description})]},a.id))})}});S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{code:`const WithItems = () => {
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
})`,...C.input.parameters?.docs?.source}}};const ut=["WithItems","WithRichContent","WithAsyncItems","WithSelection","Sizes","InHeader","WithPopoverWidth","OpenByDefault","OpenWithLoading"];export{I as InHeader,A as OpenByDefault,C as OpenWithLoading,b as Sizes,g as WithAsyncItems,S as WithItems,V as WithPopoverWidth,x as WithRichContent,y as WithSelection,ut as __namedExportsOrder};
