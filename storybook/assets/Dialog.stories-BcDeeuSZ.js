import{p as H,j as e}from"./iframe-DIo-SVbu.js";import{D as f,a as x,b as D,c as v,d as y}from"./Dialog-BML2WmYs.js";import{T as j}from"./TextField-CeDXzd9D.js";import{B as n}from"./Button-DZeJRIiP.js";import{T as h}from"./Text-CDVRsAQ9.js";import{F as T}from"./Flex-DIORzv8p.js";import{S as C}from"./Select-BSkSEmof.js";import"./preload-helper-PPVm8Dsz.js";import"./Dialog-D9JsEBmM.js";import"./Button-8GrvdF4T.js";import"./utils-CYS9htll.js";import"./useObjectRef-CYY0dott.js";import"./Label-BoTQLzR3.js";import"./Hidden-C-Ndhyy_.js";import"./useNumberFormatter-JYUyCM4L.js";import"./context-j2z9a4Xi.js";import"./useFocusable-Ci82QAhh.js";import"./openLink-Cz27Urod.js";import"./useLabel-DdOJBI9V.js";import"./useLabels-Drwj7dKn.js";import"./useButton-DtrTAe4k.js";import"./usePress-jYtc8NtY.js";import"./textSelection-CDHWmXKz.js";import"./useFocusRing-C43gnGmm.js";import"./RSPContexts-Bq1VuA5F.js";import"./OverlayArrow-DRJZFMtV.js";import"./useControlledState-DgE4S3eY.js";import"./SelectionManager-DYy-wxYs.js";import"./useEvent-HquNyToH.js";import"./SelectionIndicator-CCkVWRKu.js";import"./Separator-DJzznsJa.js";import"./Text-k5LKOFo8.js";import"./useLocalizedStringFormatter-jZ7-R5Er.js";import"./animation-BcfCohEL.js";import"./VisuallyHidden-Clvnl8G1.js";import"./Heading-C-PcFBi4.js";import"./index-qzSKwXXE.js";import"./Input-CK0ucepI.js";import"./useFormReset-C8lCSTbk.js";import"./useField-DZ13AxkD.js";import"./Form-CM4cQlQY.js";import"./TextField-CWEYpOx6.js";import"./FieldError-BrN7C1a8.js";import"./FieldError-Bt0gzasb.js";import"./FieldLabel-CBJy3cHn.js";import"./ListBox-wz4m8rD6.js";import"./useListState-DAa2ekZn.js";import"./definition-Cw-s-vzw.js";import"./Autocomplete-DwEBIfbY.js";import"./SearchField-DjZcQexm.js";import"./useFilter-UgfunAAu.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,B=H.meta({title:"Backstage UI/Dialog",component:x,args:{isOpen:void 0,defaultOpen:void 0},argTypes:{isOpen:{control:"boolean"},defaultOpen:{control:"boolean"}}}),r=B.story({render:t=>e.jsxs(f,{children:[e.jsx(n,{variant:"secondary",children:"Open Dialog"}),e.jsxs(x,{...t,children:[e.jsx(D,{children:"Example Dialog"}),e.jsx(v,{children:e.jsx(h,{children:"This is a basic dialog example."})}),e.jsxs(y,{children:[e.jsx(n,{variant:"secondary",slot:"close",children:"Close"}),e.jsx(n,{variant:"primary",slot:"close",children:"Save"})]})]})]})}),i=r.extend({parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundImage:"radial-gradient(circle, var(--bui-border-1) 1px, transparent 1px)",backgroundSize:"16px 16px"},children:e.jsx(t,{})})],args:{defaultOpen:!0}}),s=B.story({args:{isOpen:!0},render:t=>{const[{isOpen:F},O]=w();return e.jsxs(x,{...t,isOpen:F,onOpenChange:b=>O({isOpen:b}),children:[e.jsx(D,{children:"Example Dialog"}),e.jsx(v,{children:e.jsx(h,{children:"This is a basic dialog example."})}),e.jsxs(y,{children:[e.jsx(n,{variant:"secondary",slot:"close",children:"Close"}),e.jsx(n,{variant:"primary",slot:"close",children:"Save"})]})]})}}),a=B.story({args:{defaultOpen:!0,width:600},render:t=>e.jsxs(f,{children:[e.jsx(n,{variant:"secondary",children:"Open Dialog"}),e.jsxs(x,{...t,children:[e.jsx(D,{children:"Long Content Dialog"}),e.jsx(v,{children:e.jsxs(T,{direction:"column",gap:"3",children:[e.jsx(h,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx(h,{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx(h,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]})}),e.jsxs(y,{children:[e.jsx(n,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(n,{variant:"primary",slot:"close",children:"Accept"})]})]})]})}),l=a.extend({args:{defaultOpen:!0,width:void 0,height:500}}),d=a.extend({args:{height:400}}),u=a.extend({args:{defaultOpen:!0,width:"100%",height:"100%"}}),c=B.story({args:{isOpen:!0},render:t=>e.jsxs(f,{...t,children:[e.jsx(n,{variant:"secondary",children:"Delete Item"}),e.jsxs(x,{children:[e.jsx(D,{children:"Confirm Delete"}),e.jsx(v,{children:e.jsx(h,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(y,{children:[e.jsx(n,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(n,{variant:"primary",slot:"close",children:"Delete"})]})]})]})}),o=B.story({args:{isOpen:!0},render:t=>e.jsxs(f,{...t,children:[e.jsx(n,{variant:"secondary",children:"Create User"}),e.jsxs(x,{children:[e.jsx(D,{children:"Create New User"}),e.jsx(v,{children:e.jsxs(T,{direction:"column",gap:"3",children:[e.jsx(j,{label:"Name",placeholder:"Enter full name"}),e.jsx(j,{label:"Email",placeholder:"Enter email address"}),e.jsx(C,{label:"Role",options:[{value:"admin",label:"Admin"},{value:"user",label:"User"},{value:"viewer",label:"Viewer"}]})]})}),e.jsxs(y,{children:[e.jsx(n,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(n,{variant:"primary",slot:"close",children:"Create User"})]})]})]})}),p=B.story({args:{defaultOpen:!0},render:t=>e.jsxs(f,{children:[e.jsx(n,{variant:"secondary",children:"Open Dialog"}),e.jsxs(x,{...t,children:[e.jsx(D,{children:"Overflow Without Height"}),e.jsx(v,{children:e.jsx(T,{direction:"column",gap:"3",children:Array.from({length:20},(F,O)=>e.jsxs(h,{children:["Line ",O+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},O))})}),e.jsxs(y,{children:[e.jsx(n,{variant:"secondary",slot:"close",children:"Cancel"}),e.jsx(n,{variant:"primary",slot:"close",children:"Confirm"})]})]})]})}),m=a.extend({args:{defaultOpen:void 0,width:600,height:400}}),g=o.extend({args:{isOpen:void 0}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{code:`const Default = () => {
  return (
    <DialogTrigger>
      <Button variant="secondary">Open Dialog</Button>
      <Dialog isOpen={undefined} defaultOpen={undefined}>
        <DialogHeader>Example Dialog</DialogHeader>
        <DialogBody>
          <Text>This is a basic dialog example.</Text>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary" slot="close">
            Save
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
  );
};
`,...r.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{code:`const Open = () => <Dialog isOpen={undefined} defaultOpen />;
`,...i.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{code:`const NoTrigger = () => {
  const [{ isOpen }, updateArgs] = useArgs();

  return (
    <Dialog
      defaultOpen={undefined}
      isOpen={isOpen}
      onOpenChange={(value) => updateArgs({ isOpen: value })}
    >
      <DialogHeader>Example Dialog</DialogHeader>
      <DialogBody>
        <Text>This is a basic dialog example.</Text>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Close
        </Button>
        <Button variant="primary" slot="close">
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
`,...s.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{code:`const FixedWidth = () => (
  <DialogTrigger>
    <Button variant="secondary">Open Dialog</Button>
    <Dialog isOpen={undefined} defaultOpen width={600}>
      <DialogHeader>Long Content Dialog</DialogHeader>
      <DialogBody>
        <Flex direction="column" gap="3">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Cancel
        </Button>
        <Button variant="primary" slot="close">
          Accept
        </Button>
      </DialogFooter>
    </Dialog>
  </DialogTrigger>
);
`,...a.input.parameters?.docs?.source}}};l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{code:`const FixedHeight = () => (
  <Dialog isOpen={undefined} defaultOpen width={undefined} height={500} />
);
`,...l.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{code:`const FixedWidthAndHeight = () => (
  <Dialog isOpen={undefined} defaultOpen={undefined} height={400} />
);
`,...d.input.parameters?.docs?.source}}};u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{code:`const FullWidthAndHeight = () => (
  <Dialog isOpen={undefined} defaultOpen width="100%" height="100%" />
);
`,...u.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{code:`const Confirmation = () => (
  <DialogTrigger isOpen defaultOpen={undefined}>
    <Button variant="secondary">Delete Item</Button>
    <Dialog>
      <DialogHeader>Confirm Delete</DialogHeader>
      <DialogBody>
        <Text>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Text>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Cancel
        </Button>
        <Button variant="primary" slot="close">
          Delete
        </Button>
      </DialogFooter>
    </Dialog>
  </DialogTrigger>
);
`,...c.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{code:`const WithForm = () => (
  <DialogTrigger isOpen defaultOpen={undefined}>
    <Button variant="secondary">Create User</Button>
    <Dialog>
      <DialogHeader>Create New User</DialogHeader>
      <DialogBody>
        <Flex direction="column" gap="3">
          <TextField label="Name" placeholder="Enter full name" />
          <TextField label="Email" placeholder="Enter email address" />
          <Select
            label="Role"
            options={[
              { value: "admin", label: "Admin" },
              { value: "user", label: "User" },
              { value: "viewer", label: "Viewer" },
            ]}
          />
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Cancel
        </Button>
        <Button variant="primary" slot="close">
          Create User
        </Button>
      </DialogFooter>
    </Dialog>
  </DialogTrigger>
);
`,...o.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{code:`const OverflowWithoutHeight = () => (
  <DialogTrigger>
    <Button variant="secondary">Open Dialog</Button>
    <Dialog isOpen={undefined} defaultOpen>
      <DialogHeader>Overflow Without Height</DialogHeader>
      <DialogBody>
        <Flex direction="column" gap="3">
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i}>
              Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Text>
          ))}
        </Flex>
      </DialogBody>
      <DialogFooter>
        <Button variant="secondary" slot="close">
          Cancel
        </Button>
        <Button variant="primary" slot="close">
          Confirm
        </Button>
      </DialogFooter>
    </Dialog>
  </DialogTrigger>
);
`,...p.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{code:`const PreviewFixedWidthAndHeight = () => (
  <Dialog isOpen={undefined} defaultOpen={undefined} width={600} height={400} />
);
`,...m.input.parameters?.docs?.source}}};g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{code:`const PreviewWithForm = () => (
  <Dialog isOpen={undefined} defaultOpen={undefined} />
);
`,...g.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  render: args => {
    return <DialogTrigger>
        <Button variant="secondary">Open Dialog</Button>
        <Dialog {...args}>
          <DialogHeader>Example Dialog</DialogHeader>
          <DialogBody>
            <Text>This is a basic dialog example.</Text>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" slot="close">
              Close
            </Button>
            <Button variant="primary" slot="close">
              Save
            </Button>
          </DialogFooter>
        </Dialog>
      </DialogTrigger>;
  }
})`,...r.input.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Default.extend({
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [Story => <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'radial-gradient(circle, var(--bui-border-1) 1px, transparent 1px)',
    backgroundSize: '16px 16px'
  }}>
        <Story />
      </div>],
  args: {
    defaultOpen: true
  }
})`,...i.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    isOpen: true
  },
  render: args => {
    const [{
      isOpen
    }, updateArgs] = useArgs();
    return <Dialog {...args} isOpen={isOpen} onOpenChange={value => updateArgs({
      isOpen: value
    })}>
        <DialogHeader>Example Dialog</DialogHeader>
        <DialogBody>
          <Text>This is a basic dialog example.</Text>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Close
          </Button>
          <Button variant="primary" slot="close">
            Save
          </Button>
        </DialogFooter>
      </Dialog>;
  }
})`,...s.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    defaultOpen: true,
    width: 600
  },
  render: args => <DialogTrigger>
      <Button variant="secondary">Open Dialog</Button>
      <Dialog {...args}>
        <DialogHeader>Long Content Dialog</DialogHeader>
        <DialogBody>
          <Flex direction="column" gap="3">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Text>
            <Text>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Text>
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Accept
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
})`,...a.input.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`FixedWidth.extend({
  args: {
    defaultOpen: true,
    width: undefined,
    height: 500
  }
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`FixedWidth.extend({
  args: {
    height: 400
  }
})`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`FixedWidth.extend({
  args: {
    defaultOpen: true,
    width: '100%',
    height: '100%'
  }
})`,...u.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    isOpen: true
  },
  render: args => <DialogTrigger {...args}>
      <Button variant="secondary">Delete Item</Button>
      <Dialog>
        <DialogHeader>Confirm Delete</DialogHeader>
        <DialogBody>
          <Text>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </Text>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
})`,...c.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    isOpen: true
  },
  render: args => <DialogTrigger {...args}>
      <Button variant="secondary">Create User</Button>
      <Dialog>
        <DialogHeader>Create New User</DialogHeader>
        <DialogBody>
          <Flex direction="column" gap="3">
            <TextField label="Name" placeholder="Enter full name" />
            <TextField label="Email" placeholder="Enter email address" />
            <Select label="Role" options={[{
            value: 'admin',
            label: 'Admin'
          }, {
            value: 'user',
            label: 'User'
          }, {
            value: 'viewer',
            label: 'Viewer'
          }]} />
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Create User
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
})`,...o.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    defaultOpen: true
  },
  render: args => <DialogTrigger>
      <Button variant="secondary">Open Dialog</Button>
      <Dialog {...args}>
        <DialogHeader>Overflow Without Height</DialogHeader>
        <DialogBody>
          <Flex direction="column" gap="3">
            {Array.from({
            length: 20
          }, (_, i) => <Text key={i}>
                Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Text>)}
          </Flex>
        </DialogBody>
        <DialogFooter>
          <Button variant="secondary" slot="close">
            Cancel
          </Button>
          <Button variant="primary" slot="close">
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </DialogTrigger>
})`,...p.input.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`FixedWidth.extend({
  args: {
    defaultOpen: undefined,
    width: 600,
    height: 400
  }
})`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`WithForm.extend({
  args: {
    isOpen: undefined
  }
})`,...g.parameters?.docs?.source}}};const He=["Default","Open","NoTrigger","FixedWidth","FixedHeight","FixedWidthAndHeight","FullWidthAndHeight","Confirmation","WithForm","OverflowWithoutHeight","PreviewFixedWidthAndHeight","PreviewWithForm"];export{c as Confirmation,r as Default,l as FixedHeight,a as FixedWidth,d as FixedWidthAndHeight,u as FullWidthAndHeight,s as NoTrigger,i as Open,p as OverflowWithoutHeight,m as PreviewFixedWidthAndHeight,g as PreviewWithForm,o as WithForm,He as __namedExportsOrder};
