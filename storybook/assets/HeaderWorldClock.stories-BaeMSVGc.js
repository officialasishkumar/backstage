import{j as t}from"./iframe-DIo-SVbu.js";import{HeaderWorldClock as m}from"./index-CbSYQc2C.js";import{H as a}from"./Header-DDp-HtJo.js";import{w as l}from"./appWrappers-DR3WgLiZ.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-pCo62V0Y.js";import"./makeStyles-DQU7Dv0P.js";import"./Grid-CQTc9qXc.js";import"./Link-nV2wBi6-.js";import"./index-BWhcP_hn.js";import"./lodash-CorumTZI.js";import"./useAnalytics-Dz8yJH5J.js";import"./useApp-DoXX_S3p.js";import"./Helmet-j69xXCIi.js";import"./Box-DSdsOjrk.js";import"./styled-BsApB3tE.js";import"./Breadcrumbs-BWg1DCWA.js";import"./index-B9sM2jn7.js";import"./Popover-CgcEC2FX.js";import"./Modal-D5veMRiH.js";import"./Portal-CvYRjmi_.js";import"./List-DIbhVy0B.js";import"./ListContext-maWUp7BP.js";import"./ListItem-B48sv7Dp.js";import"./Page-D4AJVexu.js";import"./useMediaQuery-DSyBS49A.js";import"./Tooltip-RSYyjwWd.js";import"./Popper-Mh-qpcao.js";import"./WebStorage-BK2KlcPz.js";import"./useAsync-CZHEyuUs.js";import"./useMountedState-CYCgoyDm.js";import"./componentData-Cq2oJfSV.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-rc5V7nNm.js";import"./useIsomorphicLayoutEffect-DFFlChJX.js";import"./AppThemeApi-napO7fl3.js";import"./BUIProvider-CiWIfurT.js";import"./openLink-Cz27Urod.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const M=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,M as __namedExportsOrder,L as default};
