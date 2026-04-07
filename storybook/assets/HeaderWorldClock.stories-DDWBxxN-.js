import{j as t}from"./iframe-B7X4koWg.js";import{HeaderWorldClock as m}from"./index-D5Ct5QHJ.js";import{H as a}from"./Header-DZ9MBkYR.js";import{w as l}from"./appWrappers-BXEhvQIz.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-0R71mrNi.js";import"./Grid-CsLGBI0Z.js";import"./Link-DK73yQJ4.js";import"./index-Csz7HKtd.js";import"./lodash-CVU3dqUL.js";import"./useAnalytics-BwhwrTZ0.js";import"./makeStyles-CiNtEf1f.js";import"./useApp-CJfDpKhN.js";import"./Helmet-B2G_VwUH.js";import"./Box-D1NbE0qt.js";import"./styled-Bs9bCmQE.js";import"./Breadcrumbs-PaJlukHb.js";import"./index-B9sM2jn7.js";import"./Popover-DFCWHpJT.js";import"./Modal-ngIBWuwT.js";import"./Portal-BVLNQ5cR.js";import"./List-B4jJ8U2i.js";import"./ListContext-DYod19dm.js";import"./ListItem-BZPD3cNM.js";import"./Page-CTbMLMv3.js";import"./useMediaQuery-BagEMDdT.js";import"./Tooltip-5XmI3CNW.js";import"./Popper-BwLyAbb_.js";import"./WebStorage-Dzr--kWq.js";import"./useAsync-DWgoS754.js";import"./useMountedState-D8f8WPQV.js";import"./componentData-DOqoOySj.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Ce4iI7ED.js";import"./useIsomorphicLayoutEffect-BBNG1fnm.js";import"./BUIProvider-DidJ51L8.js";import"./openLink-DCeIGU84.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
