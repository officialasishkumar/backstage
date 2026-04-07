import{j as t}from"./iframe-C11JX4Ba.js";import{HeaderWorldClock as m}from"./index-CoKP-SLt.js";import{H as a}from"./Header-C301Jocc.js";import{w as l}from"./appWrappers-BBEq3dId.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BWra9Vrz.js";import"./Grid-BSU_hxOH.js";import"./Link-DJcQ-aLb.js";import"./index-9AoUhYV3.js";import"./lodash-OqA7S4ml.js";import"./useAnalytics-C5cwZo0H.js";import"./makeStyles-gpfZ2MPN.js";import"./useApp-CYq77aVU.js";import"./Helmet--EcAIO28.js";import"./Box-BT_w3FeJ.js";import"./styled-CSoi2Z33.js";import"./Breadcrumbs-B1I4E-Rf.js";import"./index-B9sM2jn7.js";import"./Popover-DvOYHW_s.js";import"./Modal-Fp_BGzUO.js";import"./Portal-B1VPiTGn.js";import"./List-ClmQaIAH.js";import"./ListContext-C6SY7huE.js";import"./ListItem-C7uaqKnP.js";import"./Page-rZheMm-n.js";import"./useMediaQuery-DsWtJnGf.js";import"./Tooltip-UyoZLn60.js";import"./Popper-BYwa50Wf.js";import"./WebStorage-6y64_IYT.js";import"./useAsync-DVlmdlk_.js";import"./useMountedState-hx0QwsHm.js";import"./componentData-hJUGps3Y.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BRgP7wxM.js";import"./useIsomorphicLayoutEffect-CZkJMkcv.js";import"./BUIProvider-DMW7S9F-.js";import"./openLink-BVSL9EAg.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
