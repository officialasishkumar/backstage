import{j as t}from"./iframe-CBVwdAXc.js";import{HeaderWorldClock as m}from"./index-S-BWEigX.js";import{H as a}from"./Header-C1GRNSKh.js";import{w as l}from"./appWrappers-BlnrEZL7.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-zHIs7kut.js";import"./makeStyles-C24YcoXm.js";import"./Grid-DWkTHZrC.js";import"./Link-D1_aKDnj.js";import"./index-CzoPzI6j.js";import"./lodash-CjA-X3cH.js";import"./index-D9ejMs_C.js";import"./useAnalytics-Qr-pKmLn.js";import"./useApp-Dv9wNNjs.js";import"./Helmet-i2YtugiZ.js";import"./Box-BGY1rYdD.js";import"./styled-DoLFZKqM.js";import"./Breadcrumbs-GjRWr6gI.js";import"./index-B9sM2jn7.js";import"./Popover-CCxOaT36.js";import"./Modal-B_9QibKY.js";import"./Portal-DWyDC_bO.js";import"./List-7WrADx2K.js";import"./ListContext-D4A-UAeR.js";import"./ListItem-BSBetRD8.js";import"./Page-qP1r18-i.js";import"./useMediaQuery-BzV5tgPq.js";import"./Tooltip-D2y6AiO8.js";import"./Popper-DFPiCQu9.js";import"./WebStorage-IOrvc26O.js";import"./useAsync-CxJRBM1A.js";import"./useMountedState-7qHVdg4Q.js";import"./componentData-BVLy2Ait.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CSuacsqV.js";import"./useIsomorphicLayoutEffect-BurP_Bj6.js";import"./AppThemeApi-lxpkfbFj.js";import"./BUIProvider-YZy9Wrqs.js";import"./openLink-DK4oWnZh.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
