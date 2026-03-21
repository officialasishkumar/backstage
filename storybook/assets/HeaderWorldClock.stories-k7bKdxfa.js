import{j as t}from"./iframe-UJriCXVl.js";import{HeaderWorldClock as m}from"./index-DCmdi2Sm.js";import{H as a}from"./Header-DMogMucB.js";import{w as l}from"./appWrappers-C5-t193K.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-spx0wF-S.js";import"./makeStyles-njdNJK3x.js";import"./Grid-D6wRU41f.js";import"./Link-BQi5yIop.js";import"./index-C960_4ke.js";import"./lodash-DkQ6ZSlp.js";import"./index-BSYbiaN1.js";import"./useAnalytics-CEoER_mo.js";import"./useApp-grD3_ewi.js";import"./Helmet-CL8_v78c.js";import"./Box-C1by_hut.js";import"./styled-DSaNCCR9.js";import"./Breadcrumbs-DkP-zhi6.js";import"./index-B9sM2jn7.js";import"./Popover-DQ81K7yD.js";import"./Modal-ZPU6ryA9.js";import"./Portal-C6ZN2ix7.js";import"./List-DSt3hz_0.js";import"./ListContext-n1hCo968.js";import"./ListItem-Bgv2V2Pm.js";import"./Page-R9dApg72.js";import"./useMediaQuery-C5Hz2KM1.js";import"./Tooltip-3VXaZMhT.js";import"./Popper-rQQJdySn.js";import"./WebStorage-DHFLt1me.js";import"./useAsync-BEYvHol3.js";import"./useMountedState-CWdL38Tt.js";import"./componentData-CaZ0Zp9-.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BfEDm6ba.js";import"./useIsomorphicLayoutEffect-q820unle.js";import"./AppThemeApi-DlmVHrbI.js";import"./BUIProvider-FlwkTN0D.js";import"./openLink-DRXvt-RN.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
