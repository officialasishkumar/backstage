import{j as t}from"./iframe-zPAYUdEu.js";import{HeaderWorldClock as m}from"./index-DzGQVPyG.js";import{H as a}from"./Header-D5yZeSw4.js";import{w as l}from"./appWrappers-CyGM0G9r.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Cqxistj5.js";import"./makeStyles-novWPxOA.js";import"./Grid-BhIWWG4z.js";import"./Link-Cpe82tDX.js";import"./index-DsHuEjY0.js";import"./lodash-BrIyKjTz.js";import"./useAnalytics-D1Ni702Z.js";import"./useApp-CLCQ45db.js";import"./Helmet-CelnCz2Z.js";import"./Box-xRNo1G5I.js";import"./styled-3vIHv08M.js";import"./Breadcrumbs-C0sewFDE.js";import"./index-B9sM2jn7.js";import"./Popover-DXqpzK7c.js";import"./Modal-Cb_IbwSz.js";import"./Portal-ceA7f9a1.js";import"./List-Blmd7r0h.js";import"./ListContext-CTsHD7ZV.js";import"./ListItem-YzTMx7m-.js";import"./Page-B9mMggpD.js";import"./useMediaQuery-DSgMbrvl.js";import"./Tooltip-Dv9iFuGM.js";import"./Popper-CGDdcMf9.js";import"./WebStorage-C59k_2-p.js";import"./useAsync--LCD2HHX.js";import"./useMountedState-Dc-ywtxV.js";import"./componentData-t9Gbpb6x.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CJ1HAHb6.js";import"./useIsomorphicLayoutEffect-DsJAhsMf.js";import"./AppThemeApi-m0ZHBHRS.js";import"./BUIProvider-YYza03_H.js";import"./openLink-CpupEye9.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
