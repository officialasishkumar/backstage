import{j as t}from"./iframe-Bc_t70P9.js";import{HeaderWorldClock as m}from"./index-DhWJ1CCx.js";import{H as a}from"./Header-DdeCdZBc.js";import{w as l}from"./appWrappers-ARkgjiFN.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BxYLnF-c.js";import"./makeStyles-BFdqtOa2.js";import"./Grid-C636lq8b.js";import"./Link-C9qCwjy4.js";import"./index-eprtpxlx.js";import"./lodash-D5G25FpY.js";import"./index-BCiK2kdg.js";import"./useAnalytics-B6nhj7pL.js";import"./useApp--yeriI7g.js";import"./Helmet-DsMwJdPN.js";import"./Box-DIBB98s_.js";import"./styled-Dt6lPGno.js";import"./Breadcrumbs-CbLI6gZX.js";import"./index-B9sM2jn7.js";import"./Popover-CgPAMYEH.js";import"./Modal-BraqcO88.js";import"./Portal-BfeqdU27.js";import"./List-CCzJZ__r.js";import"./ListContext-o__9M1dS.js";import"./ListItem-DX5nOJCZ.js";import"./Page-C35fLpaJ.js";import"./useMediaQuery-RrPptwYs.js";import"./Tooltip-C9G2JH2w.js";import"./Popper-YDAw3qJA.js";import"./WebStorage-B1Xqa_0m.js";import"./useAsync-wj_PVQkh.js";import"./useMountedState-P4R8GCuk.js";import"./componentData-B03hUwNt.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DXFbYSDT.js";import"./useIsomorphicLayoutEffect-CZch1A4s.js";import"./AppThemeApi-D0kZ4W1Y.js";import"./BUIProvider-DlGeXRAl.js";import"./openLink-BJkfNliT.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
