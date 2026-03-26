import{j as t}from"./iframe-qq9LRUBn.js";import{HeaderWorldClock as m}from"./index-vb5xErgo.js";import{H as a}from"./Header-BJMzgLrM.js";import{w as l}from"./appWrappers-CkqvCYZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-B0VZEjWK.js";import"./makeStyles-DysICvYt.js";import"./Grid-D9rzqufp.js";import"./Link-2oUoFlGt.js";import"./index-CWHolahi.js";import"./lodash-BM8QDDk-.js";import"./index-29ewTlsg.js";import"./useAnalytics-NY-e7y1h.js";import"./useApp-DDQS_rrk.js";import"./Helmet-Bin5sx7v.js";import"./Box-Crws65o2.js";import"./styled-PVBWrc0h.js";import"./Breadcrumbs-1A1WAoFq.js";import"./index-B9sM2jn7.js";import"./Popover-yyr5Crli.js";import"./Modal-D3q_Fx9n.js";import"./Portal-DZBLnBHG.js";import"./List-uoGoLAIL.js";import"./ListContext-BhhEycMB.js";import"./ListItem-5YDEHKiI.js";import"./Page-Bgdlyhpw.js";import"./useMediaQuery-dQ_-sOEI.js";import"./Tooltip-CzhL_Bru.js";import"./Popper-C-HsXTN5.js";import"./WebStorage-DBgpTxHB.js";import"./useAsync-BvqGBP4s.js";import"./useMountedState-e54cfxno.js";import"./componentData-g0Y7Tr3a.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-sfeOjMZC.js";import"./useIsomorphicLayoutEffect-DCCJvql9.js";import"./AppThemeApi-DuUscH2P.js";import"./BUIProvider-Dsng5cuc.js";import"./openLink-DhqiiT6V.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
