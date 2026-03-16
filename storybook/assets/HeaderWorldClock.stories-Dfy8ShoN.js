import{j as t}from"./iframe-_E948MVz.js";import{HeaderWorldClock as m}from"./index-YbIm2I-j.js";import{H as a}from"./Header-Bv4TUzcO.js";import{w as l}from"./appWrappers-BKSzuyoD.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Byqhk_32.js";import"./makeStyles-CeVQhawL.js";import"./Grid-DjkXhwP0.js";import"./Link-yJri3-iz.js";import"./index-DJ6lgYrc.js";import"./lodash-C-i153t0.js";import"./index-B7hK4tkb.js";import"./useAnalytics-Jbkamk-n.js";import"./useApp-DqMZs1Wr.js";import"./Helmet-CfrOT7qk.js";import"./Box-CkUsT8sz.js";import"./styled-DbkjhS7C.js";import"./Breadcrumbs-C0wBFyi6.js";import"./index-B9sM2jn7.js";import"./Popover-DfDZbSHO.js";import"./Modal-wldFZbuS.js";import"./Portal-gFrfFYQV.js";import"./List-D7wngo3z.js";import"./ListContext-DMVOB75k.js";import"./ListItem-DZRnMDoX.js";import"./Page-QI8cx-pD.js";import"./useMediaQuery-DQaTlHr1.js";import"./Tooltip-CaMAvpLY.js";import"./Popper-DVCylAOX.js";import"./useObservable-Bx1dqyQ_.js";import"./useIsomorphicLayoutEffect-DoQKgtM6.js";import"./useAsync-DFpwKevH.js";import"./useMountedState-BylHk9na.js";import"./componentData-CKoVJSo9.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";const G={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const J=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,J as __namedExportsOrder,G as default};
