import{j as t}from"./iframe-D9Y8dNt-.js";import{HeaderWorldClock as m}from"./index-DFicMhb6.js";import{H as a}from"./Header-CkO7MkUE.js";import{w as l}from"./appWrappers-CN6V1Awt.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DqdEiZ6N.js";import"./makeStyles-BoqHtulH.js";import"./Grid-ta46I7or.js";import"./Link-CX6fYxme.js";import"./index-BX5foZ21.js";import"./lodash-h7tafzQQ.js";import"./index-C1uQgXas.js";import"./useAnalytics-CX_WCi2s.js";import"./useApp-jISuD9D7.js";import"./Helmet-Cg0saeAJ.js";import"./Box-BTwSaOGu.js";import"./styled-BgGpovFM.js";import"./Breadcrumbs-CH6uULLg.js";import"./index-B9sM2jn7.js";import"./Popover-BKRwm4sM.js";import"./Modal-71NnHFAX.js";import"./Portal-DVsLpO23.js";import"./List-mUIJSmYE.js";import"./ListContext-xNPrKmTk.js";import"./ListItem-CSMdPZ-4.js";import"./Page-VCRYfbSc.js";import"./useMediaQuery-jS43cflm.js";import"./Tooltip-Dx1D_B-m.js";import"./Popper-BSGP2tv0.js";import"./WebStorage-0dpj7iaf.js";import"./useAsync-D9Cc9Vp-.js";import"./useMountedState-B-arlFCl.js";import"./componentData-BVVUJjR2.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CgBswJiJ.js";import"./useIsomorphicLayoutEffect-BjXjpzjp.js";import"./AppThemeApi-1AtRSy4c.js";import"./BUIProvider-Cr5RdwXf.js";import"./openLink-CijSEPaD.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
