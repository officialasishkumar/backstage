import{j as t}from"./iframe-Cvt_X182.js";import{HeaderWorldClock as m}from"./index-DRNLo7Mu.js";import{H as a}from"./Header-DseP1SdI.js";import{w as l}from"./appWrappers-B2OA6H91.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-lD3TKMId.js";import"./makeStyles-C2GLBazK.js";import"./Grid-Fa5sAGyT.js";import"./Link-Cm_XN3RO.js";import"./index-4OD0R2yY.js";import"./lodash-wfJ_V-c-.js";import"./index-CGcTZ4mm.js";import"./useAnalytics-C-sF4Up2.js";import"./useApp-B7teYX-A.js";import"./Helmet-D_S9SlGB.js";import"./Box-X6UqKYV6.js";import"./styled-It9bTCH_.js";import"./Breadcrumbs-BWl8Sg5S.js";import"./index-B9sM2jn7.js";import"./Popover-DtxdJ-Yw.js";import"./Modal-BZN5-otl.js";import"./Portal-Br5yZBqf.js";import"./List-O0e_0tnH.js";import"./ListContext-jbH0b5HF.js";import"./ListItem-DypDUMAf.js";import"./Page-CMzwQhXk.js";import"./useMediaQuery-BLiIAlr1.js";import"./Tooltip-B659PVdL.js";import"./Popper-DOugWYTx.js";import"./WebStorage-B3jyENY0.js";import"./useAsync-KSm2sTfX.js";import"./useMountedState-Cfd5-rEZ.js";import"./componentData-B2P8fcq6.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DOJIJuXx.js";import"./useIsomorphicLayoutEffect-csaJIBTD.js";import"./AppThemeApi-CcIx1JpM.js";import"./BUIProvider-BemZ3N2Z.js";import"./openLink-BX21WjU1.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const Q=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,Q as __namedExportsOrder,M as default};
