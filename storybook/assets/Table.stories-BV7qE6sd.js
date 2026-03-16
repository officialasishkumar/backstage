import{j as n}from"./iframe-_E948MVz.js";import{m as y}from"./makeStyles-CeVQhawL.js";import{B as h}from"./Box-CkUsT8sz.js";import{T as l}from"./Table-Db5PahVX.js";import{L as C}from"./Link-yJri3-iz.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DbkjhS7C.js";import"./objectWithoutProperties-owYTYy8W.js";import"./FilterList-D32N29xZ.js";import"./Backdrop-DsKM21e-.js";import"./Grid-DjkXhwP0.js";import"./useMediaQuery-DQaTlHr1.js";import"./Select-B5x_g1zs.js";import"./index-B9sM2jn7.js";import"./Popover-DfDZbSHO.js";import"./Modal-wldFZbuS.js";import"./Portal-gFrfFYQV.js";import"./List-D7wngo3z.js";import"./ListContext-DMVOB75k.js";import"./formControlState-DOCor8U6.js";import"./Popper-DVCylAOX.js";import"./RadioGroup-a2NeIfB9.js";import"./SwitchBase-LdCvLIKQ.js";import"./Drawer-CR7hEOqz.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./AccordionDetails-C0eIh-WX.js";import"./Collapse-BLf2ePuA.js";import"./Avatar-4l-N_cmy.js";import"./Badge-abjp-M2b.js";import"./BottomNavigationAction-B9GJsAkn.js";import"./Breadcrumbs-C0wBFyi6.js";import"./Button-8HeP9eyX.js";import"./CardContent-CRtSiDNE.js";import"./CardActions-C1gWZfAI.js";import"./CardHeader-CdFRzJ5c.js";import"./CardMedia-DCYlaNyP.js";import"./Checkbox-D3iYa4gW.js";import"./Chip-CJoqH_YG.js";import"./CircularProgress-D3U3r9Au.js";import"./CssBaseline-DQQXJtn-.js";import"./DialogTitle-CFWs5kBx.js";import"./DialogContentText-B_Md1R7N.js";import"./Divider-Chvt_nSc.js";import"./FormLabel-DFurO3xJ.js";import"./FormControlLabel-k60YJ2CT.js";import"./TextField-Bg8gns-u.js";import"./InputLabel-BjDpJHWW.js";import"./InputAdornment-DYNUuC_T.js";import"./LinearProgress-CI63X4CN.js";import"./ListItem-DZRnMDoX.js";import"./ListItemAvatar-JOiGR9vn.js";import"./ListItemIcon-gYDkcPB3.js";import"./ListItemText-DxsdUdg2.js";import"./ListSubheader-DVHxQtFj.js";import"./MenuItem-DgcJIfE9.js";import"./Remove-BlyqgBvk.js";import"./StepLabel-CJIPSBrk.js";import"./Tabs-BkSWEHsy.js";import"./KeyboardArrowRight-DxfaTpKB.js";import"./TableRow-cxeQNMEq.js";import"./TableCell-1B-nxC1g.js";import"./TablePagination-DDuo_6gH.js";import"./Tooltip-CaMAvpLY.js";import"./objectSpread2-CL4tfFyS.js";import"./index-DJ6lgYrc.js";import"./ChevronRight-viSrtUhX.js";import"./Edit-DWGOTQmZ.js";import"./Search-vLlo2Lv9.js";import"./lodash-C-i153t0.js";import"./Select-CBakPHgT.js";import"./Cancel-q0wOfSJP.js";import"./index-B7hK4tkb.js";import"./useAnalytics-Jbkamk-n.js";import"./useApp-DqMZs1Wr.js";const T=y(t=>({value:{marginBottom:t.spacing(.75)},subvalue:{color:t.palette.textSubtle,fontWeight:"normal"}}),{name:"BackstageSubvalueCell"});function v(t){const{value:e,subvalue:a}=t,g=T();return n.jsxs(n.Fragment,{children:[n.jsx(h,{className:g.value,children:e}),n.jsx(h,{className:g.subvalue,children:a})]})}v.__docgenInfo={description:"",methods:[],displayName:"SubvalueCell",props:{value:{required:!0,tsType:{name:"ReactNode"},description:""},subvalue:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ze={title:"Data Display/Table",component:l,tags:["!manifest"]},b=y(t=>({container:{width:850},empty:{padding:t.spacing(2),display:"flex",justifyContent:"center"}})),N=(t=10)=>{const e=[];for(;e.length<=t;)e.push({col1:`Some value ${e.length}`,col2:`More data ${e.length}`,subvalue:`Subvalue ${e.length}`,number:Math.round(Math.abs(Math.sin(e.length))*1e3),date:new Date(Math.abs(Math.sin(e.length))*1e13)});return e},f=N(10),s=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e,title:"Backstage Table"})})},o=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:[],columns:e,isLoading:!0,title:"Backstage Table"})})},i=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:[],columns:e,emptyContent:n.jsxs("div",{className:t.empty,children:["No data was added yet, ",n.jsx(C,{to:"http://backstage.io/",children:"learn how to add data"}),"."]}),title:"Backstage Table"})})},r=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e,title:"Backstage Table",subtitle:"Table Subtitle"})})},c=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1,search:!1},data:f,columns:e})})},u=()=>{const t=b(),e=[{title:"Column 1",customFilterAndSearch:(a,g)=>`${g.col1} ${g.subvalue}`.toLocaleUpperCase("en-US").includes(a.toLocaleUpperCase("en-US")),field:"col1",highlight:!0,render:a=>n.jsx(v,{value:a.col1,subvalue:a.subvalue})},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e})})},m=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1,padding:"dense"},data:f,columns:e,title:"Backstage Table"})})},d=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}],a=[{column:"Column 1",type:"select"},{column:"Column 2",type:"multiple-select"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1,padding:"dense"},data:f,columns:e,filters:a})})},p=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0,cellStyle:(a,g)=>g.tableData.id%2===0?{color:"#6CD75F"}:{color:"#DC3D5A"}},{title:"Column 2",field:"col2",cellStyle:{color:"#2FA5DC"}},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e,title:"Backstage Table"})})};s.__docgenInfo={description:"",methods:[],displayName:"DefaultTable"};o.__docgenInfo={description:"",methods:[],displayName:"LoadingTable"};i.__docgenInfo={description:"",methods:[],displayName:"EmptyTable"};r.__docgenInfo={description:"",methods:[],displayName:"SubtitleTable"};c.__docgenInfo={description:"",methods:[],displayName:"HiddenSearchTable"};u.__docgenInfo={description:"",methods:[],displayName:"SubvalueTable"};m.__docgenInfo={description:"",methods:[],displayName:"DenseTable"};d.__docgenInfo={description:"",methods:[],displayName:"FilterTable"};p.__docgenInfo={description:"",methods:[],displayName:"StyledTable"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const DefaultTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false }}
        data={testData10}
        columns={columns}
        title="Backstage Table"
      />
    </div>
  );
};
`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const LoadingTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false }}
        data={[]}
        columns={columns}
        isLoading
        title="Backstage Table"
      />
    </div>
  );
};
`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{code:`const EmptyTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false }}
        data={[]}
        columns={columns}
        emptyContent={
          <div className={classes.empty}>
            No data was added yet,&nbsp;
            <Link to="http://backstage.io/">learn how to add data</Link>.
          </div>
        }
        title="Backstage Table"
      />
    </div>
  );
};
`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const SubtitleTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false }}
        data={testData10}
        columns={columns}
        title="Backstage Table"
        subtitle="Table Subtitle"
      />
    </div>
  );
};
`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{code:`const HiddenSearchTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false, search: false }}
        data={testData10}
        columns={columns}
      />
    </div>
  );
};
`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{code:`const SubvalueTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      customFilterAndSearch: (
        query,
        row: any // Only needed if you want subvalue searchable
      ) =>
        \`\${row.col1} \${row.subvalue}\`
          .toLocaleUpperCase("en-US")
          .includes(query.toLocaleUpperCase("en-US")),
      field: "col1",
      highlight: true,
      render: (row: any): ReactNode => (
        <SubvalueCell value={row.col1} subvalue={row.subvalue} />
      ),
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table options={{ paging: false }} data={testData10} columns={columns} />
    </div>
  );
};
`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{code:`const DenseTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false, padding: "dense" }}
        data={testData10}
        columns={columns}
        title="Backstage Table"
      />
    </div>
  );
};
`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{code:`const FilterTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
    },
    {
      title: "Column 2",
      field: "col2",
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  const filters: TableFilter[] = [
    {
      column: "Column 1",
      type: "select",
    },
    {
      column: "Column 2",
      type: "multiple-select",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false, padding: "dense" }}
        data={testData10}
        columns={columns}
        filters={filters}
      />
    </div>
  );
};
`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{code:`const StyledTable = () => {
  const classes = useStyles();
  const columns: TableColumn[] = [
    {
      title: "Column 1",
      field: "col1",
      highlight: true,
      cellStyle: (_, rowData: any & { tableData: { id: number } }) => {
        return rowData.tableData.id % 2 === 0
          ? {
              color: "#6CD75F",
            }
          : {
              color: "#DC3D5A",
            };
      },
    },
    {
      title: "Column 2",
      field: "col2",
      cellStyle: { color: "#2FA5DC" },
    },
    {
      title: "Numeric value",
      field: "number",
      type: "numeric",
    },
    {
      title: "A Date",
      field: "date",
      type: "date",
    },
  ];

  return (
    <div className={classes.container}>
      <Table
        options={{ paging: false }}
        data={testData10}
        columns={columns}
        title="Backstage Table"
      />
    </div>
  );
};
`,...p.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false
    }} data={testData10} columns={columns} title="Backstage Table" />
    </div>;
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false
    }} data={[]} columns={columns} isLoading title="Backstage Table" />
    </div>;
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false
    }} data={[]} columns={columns} emptyContent={<div className={classes.empty}>
            No data was added yet,&nbsp;
            <Link to="http://backstage.io/">learn how to add data</Link>.
          </div>} title="Backstage Table" />
    </div>;
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false
    }} data={testData10} columns={columns} title="Backstage Table" subtitle="Table Subtitle" />
    </div>;
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false,
      search: false
    }} data={testData10} columns={columns} />
    </div>;
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    customFilterAndSearch: (query, row // Only needed if you want subvalue searchable
    : any) => \`\${row.col1} \${row.subvalue}\`.toLocaleUpperCase('en-US').includes(query.toLocaleUpperCase('en-US')),
    field: 'col1',
    highlight: true,
    render: (row: any): ReactNode => <SubvalueCell value={row.col1} subvalue={row.subvalue} />
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false
    }} data={testData10} columns={columns} />
    </div>;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false,
      padding: 'dense'
    }} data={testData10} columns={columns} title="Backstage Table" />
    </div>;
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true
  }, {
    title: 'Column 2',
    field: 'col2'
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  const filters: TableFilter[] = [{
    column: 'Column 1',
    type: 'select'
  }, {
    column: 'Column 2',
    type: 'multiple-select'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false,
      padding: 'dense'
    }} data={testData10} columns={columns} filters={filters} />
    </div>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const columns: TableColumn[] = [{
    title: 'Column 1',
    field: 'col1',
    highlight: true,
    cellStyle: (_, rowData: any & {
      tableData: {
        id: number;
      };
    }) => {
      return rowData.tableData.id % 2 === 0 ? {
        color: '#6CD75F'
      } : {
        color: '#DC3D5A'
      };
    }
  }, {
    title: 'Column 2',
    field: 'col2',
    cellStyle: {
      color: '#2FA5DC'
    }
  }, {
    title: 'Numeric value',
    field: 'number',
    type: 'numeric'
  }, {
    title: 'A Date',
    field: 'date',
    type: 'date'
  }];
  return <div className={classes.container}>
      <Table options={{
      paging: false
    }} data={testData10} columns={columns} title="Backstage Table" />
    </div>;
}`,...p.parameters?.docs?.source}}};const Ge=["DefaultTable","LoadingTable","EmptyTable","SubtitleTable","HiddenSearchTable","SubvalueTable","DenseTable","FilterTable","StyledTable"];export{s as DefaultTable,m as DenseTable,i as EmptyTable,d as FilterTable,c as HiddenSearchTable,o as LoadingTable,p as StyledTable,r as SubtitleTable,u as SubvalueTable,Ge as __namedExportsOrder,ze as default};
