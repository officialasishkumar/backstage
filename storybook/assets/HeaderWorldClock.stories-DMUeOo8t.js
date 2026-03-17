import{j as t}from"./iframe-Bu39PmLp.js";import{HeaderWorldClock as m}from"./index-B5lMHx4r.js";import{H as a}from"./Header-DNdemCdd.js";import{w as l}from"./appWrappers-Bxwu6RHO.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Buh9S1i-.js";import"./makeStyles-BF75o2aM.js";import"./Grid-88_alP5V.js";import"./Link-CbL8aN6w.js";import"./index-BySxz2Fm.js";import"./lodash-BP1SMfTv.js";import"./index-B4-sCELz.js";import"./useAnalytics-WQSTtdKZ.js";import"./useApp-CJiRzn9p.js";import"./Helmet-BK1H0qz9.js";import"./Box-COypEvq8.js";import"./styled-DZeC-7HZ.js";import"./Breadcrumbs-qHqL4NSh.js";import"./index-B9sM2jn7.js";import"./Popover-CgXZkw0s.js";import"./Modal-zPxLU0J0.js";import"./Portal-Cnh7PMtZ.js";import"./List-plozWRZ-.js";import"./ListContext-U4JS0URp.js";import"./ListItem-CL7cp1ei.js";import"./Page-620eNI18.js";import"./useMediaQuery-CQoRokpI.js";import"./Tooltip-CVo3tGMI.js";import"./Popper-BmbP9aP5.js";import"./useObservable-CQuFZjxf.js";import"./useIsomorphicLayoutEffect-6ZDZN3qg.js";import"./useAsync-Aa2CWgcM.js";import"./useMountedState-a3-IIk52.js";import"./componentData-ClXDGabG.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-fqCixX3i.js";import"./openLink-CfoeYFVv.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
