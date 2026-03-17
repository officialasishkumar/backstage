import{j as t}from"./iframe-w9ggzxzz.js";import{HeaderWorldClock as m}from"./index-DPXTZrAw.js";import{H as a}from"./Header-CKhmcF_x.js";import{w as l}from"./appWrappers-BAQfRbE-.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-xseIH6x-.js";import"./makeStyles-z1EIRT_g.js";import"./Grid-DTFxJLQY.js";import"./Link-CugHXzD0.js";import"./index-D7Wpl0IF.js";import"./lodash-B7vYRLmK.js";import"./index-BvT0XEY0.js";import"./useAnalytics-BaEnm4t3.js";import"./useApp-D1hU9Nxa.js";import"./Helmet-sStT3_AJ.js";import"./Box-CFGD6k5Z.js";import"./styled-CSrW_Lwl.js";import"./Breadcrumbs-CUer9S6g.js";import"./index-B9sM2jn7.js";import"./Popover-DYRofrki.js";import"./Modal-CbdXoRek.js";import"./Portal-C7nXiunF.js";import"./List-eHfcnFSH.js";import"./ListContext-iSayvcxx.js";import"./ListItem-Br9Axuyj.js";import"./Page-ChYdMsiM.js";import"./useMediaQuery-CYL0sLFh.js";import"./Tooltip-Cbxoa4An.js";import"./Popper-CfzuFGS0.js";import"./useObservable-DiihgjLj.js";import"./useIsomorphicLayoutEffect-DzCoblkv.js";import"./useAsync-DSDwJ_45.js";import"./useMountedState-RVVEE9Da.js";import"./componentData-DYkgPOGz.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-C_WciRRp.js";import"./openLink-CDFTvsp6.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
