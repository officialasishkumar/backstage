import{j as t}from"./iframe-CsOrEaZh.js";import{HeaderWorldClock as m}from"./index-BmhgwOeB.js";import{H as a}from"./Header-BvmtTnpF.js";import{w as l}from"./appWrappers-BvxLm1EU.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-COfa34kp.js";import"./makeStyles-RXMzfVyC.js";import"./Grid-Cp5B6vj7.js";import"./Link-D7sNJ_Uq.js";import"./index-Clf9Nm3f.js";import"./lodash-BDBMyJpB.js";import"./useAnalytics-Dzy9lLMd.js";import"./useApp-xQCVi238.js";import"./Helmet-BAD8JOpI.js";import"./Box-ULaQRaNA.js";import"./styled-l3-sdTqB.js";import"./Breadcrumbs-Bs1RfipJ.js";import"./index-B9sM2jn7.js";import"./Popover-D5SZ32eH.js";import"./Modal-DbgEDtBN.js";import"./Portal-DzcrA5JX.js";import"./List-DZ50BoJB.js";import"./ListContext-DMLxEL-p.js";import"./ListItem-C5QPSfoJ.js";import"./Page-BdSEZwbq.js";import"./useMediaQuery-LCe4V9Dm.js";import"./Tooltip-DzgDEUmc.js";import"./Popper-CCI27zHX.js";import"./WebStorage-MTKsO0K2.js";import"./useAsync-SkXlsC6H.js";import"./useMountedState-BoYCIFcM.js";import"./componentData-D2PsLXfp.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DAaVJNgT.js";import"./useIsomorphicLayoutEffect-CGDSOLtL.js";import"./AppThemeApi-B_GxqhKP.js";import"./BUIProvider-DqcKutYD.js";import"./openLink-DxicnjxI.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
