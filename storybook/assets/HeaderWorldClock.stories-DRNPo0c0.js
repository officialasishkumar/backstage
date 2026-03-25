import{j as t}from"./iframe-BNkUY5HA.js";import{HeaderWorldClock as m}from"./index-DapMiYLq.js";import{H as a}from"./Header-CQPqED3I.js";import{w as l}from"./appWrappers--MLEicpW.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Bv6vPvtI.js";import"./makeStyles-D1M3cvTC.js";import"./Grid-T8Evs-aA.js";import"./Link-CGPyZy0_.js";import"./index-DlAQjt7D.js";import"./lodash-Bpc3Agjj.js";import"./index-DN_6yxbn.js";import"./useAnalytics-dAdITyCa.js";import"./useApp-DK-Jjl42.js";import"./Helmet-BbiWqRE8.js";import"./Box-vbuApI20.js";import"./styled-s8twt4bb.js";import"./Breadcrumbs-CLW69czY.js";import"./index-B9sM2jn7.js";import"./Popover-DFC8wnp9.js";import"./Modal-BKtoBYKW.js";import"./Portal-DQf1B4dl.js";import"./List-Dwb4XmJ7.js";import"./ListContext-i5jXFFIx.js";import"./ListItem-BtLTcDqZ.js";import"./Page-BPdbQlIM.js";import"./useMediaQuery-BZjAG3Ln.js";import"./Tooltip-Dh1IM1oZ.js";import"./Popper-Dy4ol0j8.js";import"./WebStorage-BSZ3f6rC.js";import"./useAsync-B5fuvW4L.js";import"./useMountedState-D6BGeb6K.js";import"./componentData-CbggJDax.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-Cxumsgpz.js";import"./useIsomorphicLayoutEffect-CEtA1_c_.js";import"./AppThemeApi-DdnvDi-C.js";import"./BUIProvider-COrfszv7.js";import"./openLink-CO4LZzkY.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
