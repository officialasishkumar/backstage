import{j as t}from"./iframe-D2P1gL3G.js";import{HeaderWorldClock as m}from"./index-BwG_OgHs.js";import{H as a}from"./Header-r3sFDjzp.js";import{w as l}from"./appWrappers-BVoJaVZG.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-icwNj1TG.js";import"./Grid-Dr3D4icg.js";import"./Link-DWOvRufO.js";import"./index-DGJxFe6q.js";import"./lodash-DhI4PBPP.js";import"./useAnalytics-CZuK40Zw.js";import"./makeStyles-Clh2njjY.js";import"./useApp-Dr4H7OwE.js";import"./Helmet-CvrvtC-r.js";import"./Box-ZH5bpM8G.js";import"./styled-CvACks6z.js";import"./Breadcrumbs-Zu52S3Ml.js";import"./index-B9sM2jn7.js";import"./Popover-CkkWms-p.js";import"./Modal-Bofap_l9.js";import"./Portal-CZcmajaJ.js";import"./List-BN_I58y-.js";import"./ListContext-gHvGwQdG.js";import"./ListItem-BjwKQPwC.js";import"./Page-u73d752j.js";import"./useMediaQuery-gCsaEkEA.js";import"./Tooltip-BrmdzuQO.js";import"./Popper-Jb_2zun_.js";import"./WebStorage-De27rWs7.js";import"./useAsync-C1jF7UF0.js";import"./useMountedState-B2-kdrdQ.js";import"./componentData--5TJ8chb.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BSt5tewj.js";import"./useIsomorphicLayoutEffect-EkDceSba.js";import"./BUIProvider-ClcL8Pie.js";import"./openLink-CB6NMuvw.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
