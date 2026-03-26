import{j as t}from"./iframe-LAkIJzV-.js";import{HeaderWorldClock as m}from"./index-BC77jw6X.js";import{H as a}from"./Header-Cj8OpJRi.js";import{w as l}from"./appWrappers-BsD5m44s.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Bcd6JOxU.js";import"./makeStyles-COYpSGPM.js";import"./Grid-D12OHFOV.js";import"./Link-CDvyJzZJ.js";import"./index-BEnojdoE.js";import"./lodash-DYu-YCIx.js";import"./index-DacU1fu4.js";import"./useAnalytics-D1LuewZq.js";import"./useApp-Bblngibf.js";import"./Helmet-DWZlE-Pi.js";import"./Box-B6_OswLq.js";import"./styled-qZchnbXI.js";import"./Breadcrumbs-CkCwNOnf.js";import"./index-B9sM2jn7.js";import"./Popover-Ba6fEJx1.js";import"./Modal-CLKqV01n.js";import"./Portal-B_B_DiH0.js";import"./List-BdeCMfRK.js";import"./ListContext-g5fUsEsB.js";import"./ListItem-Dotf5yp5.js";import"./Page-Db8eBOUe.js";import"./useMediaQuery-BGnta8dA.js";import"./Tooltip-BYvgz8vj.js";import"./Popper-CrI57b7o.js";import"./WebStorage-D3TO8Scz.js";import"./useAsync-CJtFMYov.js";import"./useMountedState-ChWc6m0m.js";import"./componentData-cMyYHDnN.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BF72Z5tz.js";import"./useIsomorphicLayoutEffect-C40l31eA.js";import"./AppThemeApi-BX6QlA5p.js";import"./BUIProvider-BCBhngHq.js";import"./openLink-DmaCgHpA.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
