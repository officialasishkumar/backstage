import{j as t}from"./iframe-CymjdxqK.js";import{HeaderWorldClock as m}from"./index-Dbh9cirB.js";import{H as a}from"./Header-nkyJw-YW.js";import{w as l}from"./appWrappers-CKqDR5XN.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BEC68Pb7.js";import"./makeStyles-BMXXhCWz.js";import"./Grid-Dr2ljIC_.js";import"./Link-D1VqSDh4.js";import"./index-BQPBeHo1.js";import"./lodash-DJdMBrbC.js";import"./index-BW-EXu7a.js";import"./useAnalytics-Du0UI_Xd.js";import"./useApp-uGimLtOi.js";import"./Helmet-BprU2-6p.js";import"./Box-D8DjMEPG.js";import"./styled-DoCAq6vJ.js";import"./Breadcrumbs-NoV0nL2z.js";import"./index-B9sM2jn7.js";import"./Popover-Dv66xU2X.js";import"./Modal-BEQjsWT4.js";import"./Portal-D2IDO7m8.js";import"./List-Dvm8L6Yt.js";import"./ListContext-uUolaWCt.js";import"./ListItem-CWxGd75q.js";import"./Page-XJW9BGSO.js";import"./useMediaQuery-CU0cqV-i.js";import"./Tooltip-DLsEhiTi.js";import"./Popper-BN6j66__.js";import"./WebStorage-D7ewBRR_.js";import"./useAsync-DNPZfGZ5.js";import"./useMountedState-BFsHBQyj.js";import"./componentData-C0LwwTGy.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BH1nonIT.js";import"./useIsomorphicLayoutEffect-rE2UtcSW.js";import"./AppThemeApi-CCLkHGzt.js";import"./BUIProvider-B08yKp77.js";import"./openLink-CvTgs9Lx.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
