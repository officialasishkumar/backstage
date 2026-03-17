import{j as t}from"./iframe-BPa6N3SD.js";import{HeaderWorldClock as m}from"./index-Crp1UaDR.js";import{H as a}from"./Header-CJuBUkPG.js";import{w as l}from"./appWrappers-DtPQmIZu.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Cu-RrJIj.js";import"./makeStyles-BPhOhugX.js";import"./Grid-DrfNOwcD.js";import"./Link-CTyMZEMw.js";import"./index-BdY7AnEA.js";import"./lodash-guIUsIxV.js";import"./index-CCMAs2uM.js";import"./useAnalytics-BfzgNjvV.js";import"./useApp-Hpyy33iD.js";import"./Helmet-DbWDmwUi.js";import"./Box-Cnz1HHCH.js";import"./styled-DR1Q9dRL.js";import"./Breadcrumbs-dnBaYuON.js";import"./index-B9sM2jn7.js";import"./Popover-ccHJV6L0.js";import"./Modal-B2cUeR8m.js";import"./Portal-CybimJf6.js";import"./List-2A5-ge2l.js";import"./ListContext-BukMsw43.js";import"./ListItem-D402ttc5.js";import"./Page-cT2nnb5Z.js";import"./useMediaQuery-K3YEw5GT.js";import"./Tooltip--dBTVPXa.js";import"./Popper-DYnRrkMR.js";import"./useObservable-DsHLmc1s.js";import"./useIsomorphicLayoutEffect-Cd1aE0vk.js";import"./useAsync-Cqtr7-4i.js";import"./useMountedState-B69jA6Y1.js";import"./componentData-Cq49ZqHf.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-BLvES4PE.js";import"./openLink-B0Vv0SU7.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const L=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,L as __namedExportsOrder,K as default};
