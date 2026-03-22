import{j as t}from"./iframe-BMq-ZiT3.js";import{HeaderWorldClock as m}from"./index-CpvEcCXB.js";import{H as a}from"./Header-CKYxCRMf.js";import{w as l}from"./appWrappers-CzymjXER.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DMZjPDJl.js";import"./makeStyles-DEf-u--3.js";import"./Grid-hHhpklqM.js";import"./Link-IOlKDP1t.js";import"./index-C9NLBdM0.js";import"./lodash-C6_451h_.js";import"./index-dAFNSupn.js";import"./useAnalytics-BK5GAN-T.js";import"./useApp-BJgXgSkF.js";import"./Helmet-CTKTytpf.js";import"./Box-BQ5qGVFB.js";import"./styled-CHmBoQLP.js";import"./Breadcrumbs-qnN4IsKA.js";import"./index-B9sM2jn7.js";import"./Popover-BOHa14yd.js";import"./Modal-BTVEQgEn.js";import"./Portal-B2V-y6sd.js";import"./List-DSrfcbCV.js";import"./ListContext-CPK4kohg.js";import"./ListItem-BZt49fth.js";import"./Page-C84zvT_I.js";import"./useMediaQuery-BMBw358W.js";import"./Tooltip-DuxpNUeS.js";import"./Popper-Bm-X7l9u.js";import"./WebStorage-CWRKPj_B.js";import"./useAsync-CF5ddlT2.js";import"./useMountedState-Cs8qVXdF.js";import"./componentData-DaTCFJYN.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DBNCI3Qd.js";import"./useIsomorphicLayoutEffect-Cxykuaei.js";import"./AppThemeApi-ZeM0F4k_.js";import"./BUIProvider-IzMHjHXy.js";import"./openLink-Brx0WDUe.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
