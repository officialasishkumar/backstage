import{j as t}from"./iframe-CIiIDGZ-.js";import{HeaderWorldClock as m}from"./index-D66D-oml.js";import{H as a}from"./Header-DXSnEzQD.js";import{w as l}from"./appWrappers-c2i-JRlv.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-ButwcpbO.js";import"./Grid-Zain3HUl.js";import"./Link-DJjPQadS.js";import"./index-Cc1WYh9h.js";import"./lodash-BzBabpH3.js";import"./useAnalytics-C8Elrazu.js";import"./makeStyles-DIRFdalX.js";import"./useApp-CeorHsAH.js";import"./Helmet-etmvMvtx.js";import"./Box-DtVUycxx.js";import"./styled-CIZpuVc6.js";import"./Breadcrumbs-Bb0VCU6h.js";import"./index-B9sM2jn7.js";import"./Popover-AKQjLAsz.js";import"./Modal-Do_LRYub.js";import"./Portal-BkGhIEsM.js";import"./List-BGk_33Kg.js";import"./ListContext-C8freVI4.js";import"./ListItem-CqGsN4UV.js";import"./Page-DdAqzCue.js";import"./useMediaQuery-ClthfgDG.js";import"./Tooltip-Dt97tpAm.js";import"./Popper-COve1U5T.js";import"./WebStorage-EqJM2U0F.js";import"./useAsync-B0vM_d2B.js";import"./useMountedState-IAzCyzSD.js";import"./componentData-NO4Ys3Nd.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Bpi2npx8.js";import"./useIsomorphicLayoutEffect-d_nSNOX-.js";import"./BUIProvider-gtQJ0CU8.js";import"./openLink-BYuufqBj.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
