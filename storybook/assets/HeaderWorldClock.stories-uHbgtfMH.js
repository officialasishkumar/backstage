import{j as t}from"./iframe-AYVAkLn2.js";import{HeaderWorldClock as m}from"./index-zafnKYyi.js";import{H as a}from"./Header-BBkWhqo6.js";import{w as l}from"./appWrappers-B5DuOoBi.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-mZO4rJGL.js";import"./makeStyles-DiUzlV7t.js";import"./Grid-ByzVJJnk.js";import"./Link-idfQxFMB.js";import"./index-EB-9jFEh.js";import"./lodash-K-yyiTG_.js";import"./index-B51ZAw-h.js";import"./useAnalytics-BDuNGi_L.js";import"./useApp-BmNX3I2k.js";import"./Helmet-Wx5gF10y.js";import"./Box-D2M4kuqq.js";import"./styled-arALQvZ3.js";import"./Breadcrumbs-DCt1D0vI.js";import"./index-B9sM2jn7.js";import"./Popover-I1yJX9mq.js";import"./Modal-DAoau9we.js";import"./Portal-BKv0oT2g.js";import"./List-CeeewVqa.js";import"./ListContext-BEmmok3M.js";import"./ListItem-bQqWIE31.js";import"./Page-_eZ9TY5I.js";import"./useMediaQuery-CYqOyAVL.js";import"./Tooltip-Ddm6Pg3U.js";import"./Popper-DnG1iggd.js";import"./WebStorage-D-oUViat.js";import"./useAsync-vKq7afUQ.js";import"./useMountedState-DCewMNXE.js";import"./componentData-0L54AS5C.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DXQcsefc.js";import"./useIsomorphicLayoutEffect-DwKCTKAX.js";import"./AppThemeApi-CL6iFQID.js";import"./BUIProvider-DrYmLl9u.js";import"./openLink-LeSehfZZ.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
