import{j as t}from"./iframe-BPVPwWzn.js";import{HeaderWorldClock as m}from"./index-DoGaKfe3.js";import{H as a}from"./Header-BQShpNUP.js";import{w as l}from"./appWrappers-CJ8A4wmX.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DkhxG9en.js";import"./makeStyles-DL3RdYST.js";import"./Grid-CXiQnKoR.js";import"./Link-BrnKsdBt.js";import"./index-DRNmOV-A.js";import"./lodash-Da7OBv6p.js";import"./index-ClPDwBGK.js";import"./useAnalytics-DVBaEwk3.js";import"./useApp-C5rsfXEx.js";import"./Helmet-CchfkSxN.js";import"./Box-C9ZUlUpW.js";import"./styled-CYuGUrVD.js";import"./Breadcrumbs-BShyX8wB.js";import"./index-B9sM2jn7.js";import"./Popover-T_njOncE.js";import"./Modal-Bpx44tXR.js";import"./Portal-AbzTFUuq.js";import"./List-cqhA6xzX.js";import"./ListContext-DHM8dB5v.js";import"./ListItem-CXQlml-U.js";import"./Page-B-mLUE9M.js";import"./useMediaQuery-BgdO30di.js";import"./Tooltip-D-5NYnGf.js";import"./Popper-D0Hr6Gkt.js";import"./WebStorage-RsjDsUwp.js";import"./useAsync-BR7KsH4b.js";import"./useMountedState-e47W3NJl.js";import"./componentData-KR2ttMpT.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-D13vfogS.js";import"./useIsomorphicLayoutEffect-D_UToJE7.js";import"./AppThemeApi-CHrimYAf.js";import"./BUIProvider-CpcGyQIQ.js";import"./openLink-Bc-74F4f.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
