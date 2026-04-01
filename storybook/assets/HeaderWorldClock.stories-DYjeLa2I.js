import{j as t}from"./iframe-hODDjxEI.js";import{HeaderWorldClock as m}from"./index-tb0IXjH-.js";import{H as a}from"./Header-Bz9bjSxk.js";import{w as l}from"./appWrappers-DUNJ2DyT.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-FSDZ8h7p.js";import"./Grid-EriWvE-n.js";import"./Link-B3hayh6l.js";import"./index-CcwbHv03.js";import"./lodash-m16iCv2r.js";import"./useAnalytics-DnjR9eFY.js";import"./makeStyles-aIh2F1t-.js";import"./useApp-4cPWtTY3.js";import"./Helmet-DN_KUZSm.js";import"./Box-D9xbeeDr.js";import"./styled-0hYU00PK.js";import"./Breadcrumbs-DkiyFjCQ.js";import"./index-B9sM2jn7.js";import"./Popover-CAbPHxGr.js";import"./Modal-BHs76e9X.js";import"./Portal-CzdVLRe2.js";import"./List-W4gqv1lF.js";import"./ListContext-DIhobSxE.js";import"./ListItem-DDCqoUKb.js";import"./Page-CUklThtr.js";import"./useMediaQuery-DVliIEZ2.js";import"./Tooltip-D-EFxL80.js";import"./Popper-CHhNufeX.js";import"./WebStorage-BDXQz_Ed.js";import"./useAsync-DekbOmTi.js";import"./useMountedState-WIh-cZ-b.js";import"./componentData-Da0rDDu4.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DyFcC5QT.js";import"./useIsomorphicLayoutEffect-DPIVbu6L.js";import"./BUIProvider-DDQSxPNK.js";import"./openLink-DQgtmsfk.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
