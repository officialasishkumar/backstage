import{j as t}from"./iframe-D_dthwJh.js";import{HeaderWorldClock as m}from"./index-DU8D1W9I.js";import{H as a}from"./Header-95-U1251.js";import{w as l}from"./appWrappers-CNajVLMi.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DfsHLffj.js";import"./Grid-BjyqMpwT.js";import"./Link-DIS7qTGn.js";import"./index-DMgM-NvI.js";import"./lodash-BGiaY2vY.js";import"./useAnalytics-BFleSJbt.js";import"./makeStyles-DvB3MZbd.js";import"./useApp-DOW2ZF1x.js";import"./Helmet-BCk8U9gI.js";import"./Box-BkfaYvLl.js";import"./styled-ClS6a4l6.js";import"./Breadcrumbs-ECvpB-Z4.js";import"./index-B9sM2jn7.js";import"./Popover-65jxITH8.js";import"./Modal-uU7908xY.js";import"./Portal-BUjXNiYO.js";import"./List-BtLOYLzX.js";import"./ListContext-C98V7euk.js";import"./ListItem-DTl55zDW.js";import"./Page-uEg4WuQL.js";import"./useMediaQuery-CMJucivG.js";import"./Tooltip-Cd-sen2U.js";import"./Popper-D6KVGLgx.js";import"./WebStorage-D-iTsV2i.js";import"./useAsync-CtEvpLQU.js";import"./useMountedState-Cazxj0V9.js";import"./componentData-CSbiHDN7.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BI_fhvCL.js";import"./useIsomorphicLayoutEffect-COm_ITkd.js";import"./BUIProvider-kgegLBnx.js";import"./openLink-DtEOuHfv.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
