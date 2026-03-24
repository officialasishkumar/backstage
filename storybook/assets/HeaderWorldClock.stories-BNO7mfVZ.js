import{j as t}from"./iframe-BZrpTwFW.js";import{HeaderWorldClock as m}from"./index-s7H42an5.js";import{H as a}from"./Header-DpIECLj2.js";import{w as l}from"./appWrappers-CNh55iAq.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-NCKytbs1.js";import"./makeStyles-CIE8BXXT.js";import"./Grid-OEz6aKRJ.js";import"./Link-k2iaYon8.js";import"./index-u6uYn8Jj.js";import"./lodash-lol44oGD.js";import"./index-DNu1idMQ.js";import"./useAnalytics-CMcmWSHW.js";import"./useApp-4LCqZN-N.js";import"./Helmet-uMW1FhWe.js";import"./Box-D8g6naBP.js";import"./styled-Be8rlyJS.js";import"./Breadcrumbs-D4r658KM.js";import"./index-B9sM2jn7.js";import"./Popover-BIXbtjFD.js";import"./Modal-Bug_1Z_P.js";import"./Portal-BMtcgUVu.js";import"./List-CNsgrFh7.js";import"./ListContext-_XocguZm.js";import"./ListItem-DP2OxpMh.js";import"./Page-CA-R5fnF.js";import"./useMediaQuery-D_0ls_fC.js";import"./Tooltip-3sla5M5N.js";import"./Popper-Al3BzMOF.js";import"./WebStorage-nSp6U5ws.js";import"./useAsync-BpVftW-X.js";import"./useMountedState-DxKyG1Ea.js";import"./componentData-NRZfPv9y.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CVJtQh5m.js";import"./useIsomorphicLayoutEffect-BY-4ZLY0.js";import"./AppThemeApi-C8apqIYf.js";import"./BUIProvider-CVmOZZtr.js";import"./openLink-2h5lI_6H.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
