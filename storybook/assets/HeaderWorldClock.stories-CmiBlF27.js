import{j as t}from"./iframe-CY6p7HGj.js";import{HeaderWorldClock as m}from"./index-CLi0yREv.js";import{H as a}from"./Header-sAaq0dsi.js";import{w as l}from"./appWrappers-CAUZooA4.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-_tswO9Mv.js";import"./makeStyles-CL5QsbT9.js";import"./Grid-4GdRE04R.js";import"./Link-CJtSVBIH.js";import"./index-CpyjIR0Y.js";import"./lodash-CLoGCafV.js";import"./useAnalytics-BNh1pToN.js";import"./useApp-KaslIZzb.js";import"./Helmet-xbr46cUJ.js";import"./Box-B5BACm8K.js";import"./styled-BYQBwEWp.js";import"./Breadcrumbs-ChBk45aj.js";import"./index-B9sM2jn7.js";import"./Popover-DOA_iCiu.js";import"./Modal-C_tSa40p.js";import"./Portal-Bt03fp_h.js";import"./List-CTA8BryI.js";import"./ListContext-De_DMnNX.js";import"./ListItem-DNp7a9LI.js";import"./Page-2t1zCLuv.js";import"./useMediaQuery-MWcNdp_l.js";import"./Tooltip-80DLYrNl.js";import"./Popper-CquYwZgY.js";import"./WebStorage-DKR11xvB.js";import"./useAsync-Cd2u9r7E.js";import"./useMountedState-IBh66WXz.js";import"./componentData-DpgniKxn.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-dG0pRKNd.js";import"./useIsomorphicLayoutEffect-C2yLsHrc.js";import"./AppThemeApi-8OCpdy64.js";import"./BUIProvider-B87mDlDM.js";import"./openLink-D0hf0orl.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const M=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,M as __namedExportsOrder,L as default};
