import{j as t}from"./iframe-DyjKfHWP.js";import{HeaderWorldClock as m}from"./index-C_DA_XrT.js";import{H as a}from"./Header-DyYouZgS.js";import{w as l}from"./appWrappers-9Bnj1hGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-C3z1NniA.js";import"./Grid-Yb0gK3gi.js";import"./Link-GxS-0vqx.js";import"./index-BxgWU5HL.js";import"./lodash-C9XZXW9l.js";import"./useAnalytics-DcziEhY3.js";import"./makeStyles-BTx5IhEq.js";import"./useApp-lFVRdKSK.js";import"./Helmet-Dg750io9.js";import"./Box-DrwrZr2h.js";import"./styled-C09kP24H.js";import"./Breadcrumbs-D-aJyZAI.js";import"./index-B9sM2jn7.js";import"./Popover-ru3MB2c_.js";import"./Modal-BoG7Ezu7.js";import"./Portal-DshplTSh.js";import"./List-BPKCu-iI.js";import"./ListContext-Aak99S-R.js";import"./ListItem-d1LcQsBU.js";import"./Page-DR5hjz5-.js";import"./useMediaQuery-iCePdMaY.js";import"./Tooltip-gxRFNsDR.js";import"./Popper-BbowAVjj.js";import"./WebStorage-CLuCDckI.js";import"./useAsync-D5QtpZ-X.js";import"./useMountedState-CGjuPg1I.js";import"./componentData-C62ZTWZ4.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DqVCHxDT.js";import"./useIsomorphicLayoutEffect-SIM9JiqY.js";import"./BUIProvider-BWH1udh2.js";import"./openLink-DApmBWn3.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
