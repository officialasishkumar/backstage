import{j as n}from"./iframe-2DflYetR.js";import{m as y}from"./makeStyles-B-9IZuRv.js";import{B as h}from"./Box-Bu7Xw873.js";import{T as l}from"./Table-BLolGaqW.js";import{L as C}from"./Link-BPkxBY7v.js";import"./preload-helper-PPVm8Dsz.js";import"./styled-DLQ9JpXT.js";import"./objectWithoutProperties-DKecugNc.js";import"./FilterList-DNC_OA5E.js";import"./Backdrop-DHUWmnM1.js";import"./Grid-DxUCjvP_.js";import"./useMediaQuery-C6NHjMRx.js";import"./Select-BO_fswJj.js";import"./index-B9sM2jn7.js";import"./Popover-BMF1NX8p.js";import"./Modal-BdEpWCwy.js";import"./Portal-DXJMcYAV.js";import"./List-Csw5dc-q.js";import"./ListContext-PWrJkRaZ.js";import"./formControlState-DxFSGq27.js";import"./Popper-ClGkD4o6.js";import"./RadioGroup-B9gwLRxk.js";import"./SwitchBase-Bipl80KT.js";import"./Drawer-CIuwMpGh.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./AccordionDetails-B20OXQ0W.js";import"./Collapse-5EaDmK-u.js";import"./Avatar-BQRpsuK4.js";import"./Badge-BQisBC-n.js";import"./BottomNavigationAction-MhRgODmN.js";import"./Breadcrumbs-DB3arfWb.js";import"./Button-BUw_EM6g.js";import"./CardContent-Bh9Gced8.js";import"./CardActions-CxONjKpX.js";import"./CardHeader-BpfUmvam.js";import"./CardMedia-zc08otgO.js";import"./Checkbox-4JLVNe0B.js";import"./Chip-Bmkwg1Gm.js";import"./CircularProgress-BwOhFKfP.js";import"./CssBaseline-Bbrb9Kuy.js";import"./DialogTitle-30dI33Cs.js";import"./DialogContentText-BTtGNsq_.js";import"./Divider-B0vxDpCl.js";import"./FormLabel-gYBrXv-0.js";import"./FormControlLabel-D7gTzrlh.js";import"./TextField-B2Lhzx2D.js";import"./InputLabel-EeXCSUWY.js";import"./InputAdornment-B2JbtJuG.js";import"./LinearProgress-DWtZr-aS.js";import"./ListItem-DUio0yug.js";import"./ListItemAvatar-A3kyuMk4.js";import"./ListItemIcon-DrXxgZOE.js";import"./ListItemText-BOj27O3W.js";import"./ListSubheader-BK_-4wG6.js";import"./MenuItem-D58Um2gb.js";import"./Remove-0_ynRfWA.js";import"./StepLabel-QFaCryth.js";import"./Tabs-Cn-J_rtw.js";import"./KeyboardArrowRight-DGvyEYs0.js";import"./TableRow-v3DszMW3.js";import"./TableCell-DoYH2Gr9.js";import"./TablePagination-Byh6w2eX.js";import"./Tooltip-D6zoDIUy.js";import"./objectSpread2-DBrlCwuK.js";import"./index-DTvBFuUD.js";import"./ChevronRight-DMog16_1.js";import"./Edit-oEtBSPiU.js";import"./Search-CEWnfarX.js";import"./lodash-BK0iUhmk.js";import"./Select-BrB-ae4O.js";import"./Cancel-DGYVqhc_.js";import"./index-DAw4AdQ5.js";import"./useAnalytics-D8PbdUhp.js";import"./useApp-YlOXCksD.js";const T=y(t=>({value:{marginBottom:t.spacing(.75)},subvalue:{color:t.palette.textSubtle,fontWeight:"normal"}}),{name:"BackstageSubvalueCell"});function v(t){const{value:e,subvalue:a}=t,g=T();return n.jsxs(n.Fragment,{children:[n.jsx(h,{className:g.value,children:e}),n.jsx(h,{className:g.subvalue,children:a})]})}v.__docgenInfo={description:"",methods:[],displayName:"SubvalueCell",props:{value:{required:!0,tsType:{name:"ReactNode"},description:""},subvalue:{required:!0,tsType:{name:"ReactNode"},description:""}}};const ze={title:"Data Display/Table",component:l,tags:["!manifest"]},b=y(t=>({container:{width:850},empty:{padding:t.spacing(2),display:"flex",justifyContent:"center"}})),N=(t=10)=>{const e=[];for(;e.length<=t;)e.push({col1:`Some value ${e.length}`,col2:`More data ${e.length}`,subvalue:`Subvalue ${e.length}`,number:Math.round(Math.abs(Math.sin(e.length))*1e3),date:new Date(Math.abs(Math.sin(e.length))*1e13)});return e},f=N(10),s=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e,title:"Backstage Table"})})},o=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:[],columns:e,isLoading:!0,title:"Backstage Table"})})},i=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:[],columns:e,emptyContent:n.jsxs("div",{className:t.empty,children:["No data was added yet, ",n.jsx(C,{to:"http://backstage.io/",children:"learn how to add data"}),"."]}),title:"Backstage Table"})})},r=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e,title:"Backstage Table",subtitle:"Table Subtitle"})})},c=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1,search:!1},data:f,columns:e})})},u=()=>{const t=b(),e=[{title:"Column 1",customFilterAndSearch:(a,g)=>`${g.col1} ${g.subvalue}`.toLocaleUpperCase("en-US").includes(a.toLocaleUpperCase("en-US")),field:"col1",highlight:!0,render:a=>n.jsx(v,{value:a.col1,subvalue:a.subvalue})},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e})})},m=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1,padding:"dense"},data:f,columns:e,title:"Backstage Table"})})},d=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0},{title:"Column 2",field:"col2"},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}],a=[{column:"Column 1",type:"select"},{column:"Column 2",type:"multiple-select"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1,padding:"dense"},data:f,columns:e,filters:a})})},p=()=>{const t=b(),e=[{title:"Column 1",field:"col1",highlight:!0,cellStyle:(a,g)=>g.tableData.id%2===0?{color:"#6CD75F"}:{color:"#DC3D5A"}},{title:"Column 2",field:"col2",cellStyle:{color:"#2FA5DC"}},{title:"Numeric value",field:"number",type:"numeric"},{title:"A Date",field:"date",type:"date"}];return n.jsx("div",{className:t.container,children:n.jsx(l,{options:{paging:!1},data:f,columns:e,title:"Backstage Table"})})};s.__docgenInfo={description:"",methods:[],displayName:"DefaultTable"};o.__docgenInfo={description:"",methods:[],displayName:"LoadingTable"};i.__docgenInfo={description:"",methods:[],displayName:"EmptyTable"};r.__docgenInfo={description:"",methods:[],displayName:"SubtitleTable"};c.__docgenInfo={description:"",methods:[],displayName:"HiddenSearchTable"};u.__docgenInfo={description:"",methods:[],displayName:"SubvalueTable"};m.__docgenInfo={description:"",methods:[],displayName:"DenseTable"};d.__docgenInfo={description:"",methods:[],displayName:"FilterTable"};p.__docgenInfo={description:"",methods:[],displayName:"StyledTable"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const DefaultTable = () => {
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
