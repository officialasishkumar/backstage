import{j as t}from"./iframe-BzEx-mzh.js";import{HeaderWorldClock as m}from"./index-DFYfL--p.js";import{H as a}from"./Header-CkY0zyCj.js";import{w as l}from"./appWrappers-CZW9HA5c.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-CIRRxdb2.js";import"./makeStyles-KrlZ5-Ut.js";import"./Grid-CQ4TX_Z5.js";import"./Link-C3sIO6fl.js";import"./index-DixrjhsO.js";import"./lodash-Zfy8DO4K.js";import"./useAnalytics-CqkzYMRO.js";import"./useApp-X2JlXEhZ.js";import"./Helmet-9E2N72TU.js";import"./Box-BtrO8NUR.js";import"./styled-BC6E7X8H.js";import"./Breadcrumbs-C3KYcpF2.js";import"./index-B9sM2jn7.js";import"./Popover-DDK5Xqd9.js";import"./Modal-Gk5f0e77.js";import"./Portal-BVejhVwL.js";import"./List-CuppT92S.js";import"./ListContext-CyskI8TW.js";import"./ListItem-C_KvzjzW.js";import"./Page-B9dmLOjn.js";import"./useMediaQuery-CWt8aWiL.js";import"./Tooltip-Co7RbJ52.js";import"./Popper-DIuKqKML.js";import"./WebStorage-BrHL4_P6.js";import"./useAsync-DVTCMMKI.js";import"./useMountedState-BkNjOVOx.js";import"./componentData-CKHhX2z1.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BQUAgOP-.js";import"./useIsomorphicLayoutEffect-CdGTBNnL.js";import"./AppThemeApi-D70truRB.js";import"./BUIProvider-CKEPa0P4.js";import"./openLink-iXSrpszV.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...r.parameters?.docs?.source}}};const M=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,M as __namedExportsOrder,L as default};
