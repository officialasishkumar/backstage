import{j as t}from"./iframe-DeVvrktA.js";import{HeaderWorldClock as m}from"./index-PjovSgMo.js";import{H as a}from"./Header-CbEBHxiC.js";import{w as l}from"./appWrappers-ClZPaWKL.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Dvrux9FL.js";import"./Grid-10XIJtv4.js";import"./Link-B6U9VXJa.js";import"./index-DTK3kZOY.js";import"./lodash-V1Qj8ZxO.js";import"./useAnalytics-Zw1fFqKc.js";import"./makeStyles-CDec1JgF.js";import"./useApp-web1meD-.js";import"./Helmet-BGs3aKrM.js";import"./Box-DOTqXu-6.js";import"./styled-oeuDQEze.js";import"./Breadcrumbs-BF1U6Exn.js";import"./index-B9sM2jn7.js";import"./Popover-DVzFdjxo.js";import"./Modal-D8wNxgQF.js";import"./Portal-BnHJ445C.js";import"./List-BmFOCbHw.js";import"./ListContext-Bl_Wg17k.js";import"./ListItem-DTIEUFkk.js";import"./Page-BpvJtsIx.js";import"./useMediaQuery-Cxykr1Wb.js";import"./Tooltip-CRaoVjQ4.js";import"./Popper-Cbnycm1A.js";import"./WebStorage-WIf174OD.js";import"./useAsync-Bu6SsVmg.js";import"./useMountedState-D8dcyD-P.js";import"./componentData-xmIIWjvp.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-A6QFNMf9.js";import"./useIsomorphicLayoutEffect-BgQSjFTs.js";import"./BUIProvider-CXiawPZL.js";import"./openLink-DB0X2oCJ.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
