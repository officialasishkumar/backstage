import{j as t}from"./iframe-BHNZ12cl.js";import{HeaderWorldClock as m}from"./index-DaqLmwXz.js";import{H as a}from"./Header-NZHBwlik.js";import{w as l}from"./appWrappers-DK-QbfHi.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-CAG91vkL.js";import"./Grid-DdfJ9ZJI.js";import"./Link-DlpkdDiW.js";import"./index-D4FdfQZK.js";import"./lodash-C-yslXNg.js";import"./useAnalytics-B3lGy6AO.js";import"./makeStyles-Cxj8tKnX.js";import"./useApp-CCki0BfS.js";import"./Helmet-BZzSJXE-.js";import"./Box-BN3Fmkib.js";import"./styled-Cc7guA68.js";import"./Breadcrumbs-vRyx48X7.js";import"./index-B9sM2jn7.js";import"./Popover-DAp868C0.js";import"./Modal-CQ4rSktf.js";import"./Portal-BHJRq7Zg.js";import"./List-qaLOTKU8.js";import"./ListContext-DOaaaMZI.js";import"./ListItem-CN6XPOwF.js";import"./Page-vZMSSyhy.js";import"./useMediaQuery-wfs55G1b.js";import"./Tooltip-BC5W00Jv.js";import"./Popper-CeXm3hhw.js";import"./WebStorage-BbrnPtyM.js";import"./useAsync-DrbxcMth.js";import"./useMountedState-D6njSPM_.js";import"./componentData-Dcx_7Mt2.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BhKLJjir.js";import"./useIsomorphicLayoutEffect-D_jKT49P.js";import"./BUIProvider-C-fu499B.js";import"./openLink-CKP5LQZU.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
