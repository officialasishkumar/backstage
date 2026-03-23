import{j as t}from"./iframe-CXYB6t6D.js";import{HeaderWorldClock as m}from"./index-CRHLsR2s.js";import{H as a}from"./Header-BcMwx-rW.js";import{w as l}from"./appWrappers-DN-PfUuB.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-ClweEmhU.js";import"./makeStyles-D9Wml1Qb.js";import"./Grid-BOZ43D_m.js";import"./Link-DM7aw648.js";import"./index-D1SHR_vt.js";import"./lodash-KoVF5YkZ.js";import"./index-Cqb6C9TB.js";import"./useAnalytics-NJhHIdXr.js";import"./useApp-BzYXrb6N.js";import"./Helmet-RwaZApfF.js";import"./Box-BBf7RVHa.js";import"./styled-C7sk4Fig.js";import"./Breadcrumbs-BNrIYvTQ.js";import"./index-B9sM2jn7.js";import"./Popover-dtZt9s_G.js";import"./Modal-Cs-JCA8a.js";import"./Portal-DIGrr39M.js";import"./List-DyaSGBv-.js";import"./ListContext-CJZGy2dL.js";import"./ListItem-BmXO2GVD.js";import"./Page-xijyx2l1.js";import"./useMediaQuery-BJu1U6Fj.js";import"./Tooltip-BKoVPHwY.js";import"./Popper-BQbRqMDd.js";import"./WebStorage-cO74hvRt.js";import"./useAsync-D5fQAFTG.js";import"./useMountedState-jjFDpjDr.js";import"./componentData-RRXy5f2b.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-D0IPRkqN.js";import"./useIsomorphicLayoutEffect-DpO0wsP6.js";import"./AppThemeApi-DrEZGmPR.js";import"./BUIProvider-s_nHa8HH.js";import"./openLink-BHEYgROE.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
