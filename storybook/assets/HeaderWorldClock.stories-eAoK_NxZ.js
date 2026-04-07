import{j as t}from"./iframe-DVcxdhoL.js";import{HeaderWorldClock as m}from"./index-CELFGCiX.js";import{H as a}from"./Header-DmoJuRyU.js";import{w as l}from"./appWrappers-Vsqlz-xm.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-PvFbBDCu.js";import"./Grid-Dms4qLVU.js";import"./Link-CDu7g4U_.js";import"./index-D35Dverb.js";import"./lodash-BarMUI2a.js";import"./useAnalytics-D67wwHSJ.js";import"./makeStyles-DvhSq6P6.js";import"./useApp-sEZYRDhs.js";import"./Helmet-C9AczZiA.js";import"./Box-CEEtJDX_.js";import"./styled-CFG22yA2.js";import"./Breadcrumbs-C9YiwJ0D.js";import"./index-B9sM2jn7.js";import"./Popover-C4IDm9xH.js";import"./Modal-44qXCa1H.js";import"./Portal-CN0zdblU.js";import"./List-DXUnol4x.js";import"./ListContext-w1A3oPfR.js";import"./ListItem-BwR4C4uD.js";import"./Page-CL7xcw_S.js";import"./useMediaQuery-CqT4KrJA.js";import"./Tooltip-CLapkFrU.js";import"./Popper-C6RVnZCX.js";import"./WebStorage-DJ9UBMaZ.js";import"./useAsync-DDYGRsJF.js";import"./useMountedState-CYBBtHKr.js";import"./componentData-DK9-izc0.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-C58lk-uV.js";import"./useIsomorphicLayoutEffect-CQpuWPbW.js";import"./BUIProvider-DQjUxi8m.js";import"./openLink-CcfjgoQ8.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
