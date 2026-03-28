import{j as t}from"./iframe-DbF3iEvf.js";import{HeaderWorldClock as m}from"./index-CmYD2151.js";import{H as a}from"./Header-BfklWcDY.js";import{w as l}from"./appWrappers-dpVZ4jgv.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-CJ2FeO3z.js";import"./makeStyles-Ddzw_WnF.js";import"./Grid-CVypMrLh.js";import"./Link-BOVc4nYr.js";import"./index-D0xg6uah.js";import"./lodash-C-McvsBm.js";import"./useAnalytics-CMjFjhus.js";import"./useApp-DSs-Xjlm.js";import"./Helmet-teo4O8Od.js";import"./Box-k_BPQh5L.js";import"./styled-BqEwKtoO.js";import"./Breadcrumbs-vYvTHLDl.js";import"./index-B9sM2jn7.js";import"./Popover-vZsHaVBW.js";import"./Modal-B0_egNjV.js";import"./Portal-hbPr6RYI.js";import"./List-jjp85zn8.js";import"./ListContext-CAU0vplw.js";import"./ListItem-BXU8AvHT.js";import"./Page-DMWn2weo.js";import"./useMediaQuery-C7oSbTbA.js";import"./Tooltip-CJhXFAid.js";import"./Popper-C413ylWX.js";import"./WebStorage-DLpT93Kd.js";import"./useAsync-CMcTC1HS.js";import"./useMountedState-ETLXQmd3.js";import"./componentData-FQ-FhVVe.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CvP8xTKq.js";import"./useIsomorphicLayoutEffect-BnEIHzDv.js";import"./AppThemeApi-DumGAAI-.js";import"./BUIProvider-BB5XGcE9.js";import"./openLink-B2ZDb-Dy.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
