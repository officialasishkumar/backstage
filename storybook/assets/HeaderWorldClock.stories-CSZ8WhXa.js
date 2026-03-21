import{j as t}from"./iframe-CTqAPkqN.js";import{HeaderWorldClock as m}from"./index-PX7Y4VW5.js";import{H as a}from"./Header-BWXNoUdo.js";import{w as l}from"./appWrappers-ByvhIwQq.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BSD72ycz.js";import"./makeStyles-DI4Xn9jK.js";import"./Grid-BTPqc0jk.js";import"./Link-DXOqSfzJ.js";import"./index-DK50nKwc.js";import"./lodash-BfbSSurr.js";import"./index-Bo89h57h.js";import"./useAnalytics-VN6Gc-5g.js";import"./useApp-4ydDLhug.js";import"./Helmet-PfqMgH96.js";import"./Box-CuoYE_bm.js";import"./styled-Dr66SpKq.js";import"./Breadcrumbs-BfuCMv1o.js";import"./index-B9sM2jn7.js";import"./Popover-B8fnCvZs.js";import"./Modal-Cvof-CyN.js";import"./Portal-CEy1WTiJ.js";import"./List-yUGuy5mk.js";import"./ListContext-rz4ELcuk.js";import"./ListItem-CSI66Z0A.js";import"./Page-MvEVRY4h.js";import"./useMediaQuery-CCtxSAwF.js";import"./Tooltip-DnGLXgIK.js";import"./Popper-CYb-6gU9.js";import"./WebStorage--fFr8sxx.js";import"./useAsync-Bp-OY9_W.js";import"./useMountedState-B0CBEazr.js";import"./componentData-CtmcFq88.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CiZPUid7.js";import"./useIsomorphicLayoutEffect-Bz_fp4QY.js";import"./AppThemeApi-bKanvrM1.js";import"./BUIProvider-Dw1aFK6j.js";import"./openLink-DuhEaLpg.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
