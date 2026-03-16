import{j as t}from"./iframe-CYY79_Ch.js";import{HeaderWorldClock as m}from"./index-Dqryyzky.js";import{H as a}from"./Header-BBLsZd4b.js";import{w as l}from"./appWrappers-_KYTFwdK.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BCCBoYqp.js";import"./makeStyles-tbZFV_7j.js";import"./Grid-B6UmqXW5.js";import"./Link-9_IW04qp.js";import"./index-eUgSIfVW.js";import"./lodash-BCNhplaF.js";import"./index-CDv2I334.js";import"./useAnalytics-EAeWUmga.js";import"./useApp-2pwP5JR0.js";import"./Helmet-v4xDkDoH.js";import"./Box-DbAj5ghB.js";import"./styled-D9ECYKfc.js";import"./Breadcrumbs-BteUjqXq.js";import"./index-B9sM2jn7.js";import"./Popover-B7rEX1cK.js";import"./Modal-zlEEAh2C.js";import"./Portal-DIn4oRFY.js";import"./List-Cj-oPI3l.js";import"./ListContext-BaICr9Ho.js";import"./ListItem-Dtfo1o08.js";import"./Page-BQ6YgLSN.js";import"./useMediaQuery-HRD73TvP.js";import"./Tooltip-CRD-RFGK.js";import"./Popper-CzAHrzmM.js";import"./useObservable-Dtt1hA1B.js";import"./useIsomorphicLayoutEffect-C2P83XY8.js";import"./useAsync-CMPA6yod.js";import"./useMountedState-5pOa2Jmx.js";import"./componentData-DwiID7aS.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-BHR7bujX.js";import"./openLink-Mni93yRE.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
