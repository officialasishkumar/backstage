import{j as t}from"./iframe--MS66teN.js";import{HeaderWorldClock as m}from"./index-Dl0bGj5Z.js";import{H as a}from"./Header-Bn6FTFDm.js";import{w as l}from"./appWrappers-BuSdHoSh.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DxGqIAZX.js";import"./makeStyles-B3gZJdXQ.js";import"./Grid-S31HS9ey.js";import"./Link-DnMo_TOp.js";import"./index-DGpF3VQV.js";import"./lodash-vaL5b5o-.js";import"./index-C8lN7z6e.js";import"./useAnalytics-B-3-tPoN.js";import"./useApp-P40Yy8FV.js";import"./Helmet-lxYIi9pL.js";import"./Box-WcPrDxvm.js";import"./styled-BHy6FTvz.js";import"./Breadcrumbs-BD2qpOXG.js";import"./index-B9sM2jn7.js";import"./Popover-D7kgfPEI.js";import"./Modal-ByYh99jW.js";import"./Portal-UjOrNlZC.js";import"./List-BngRfJV6.js";import"./ListContext-DH8NOqlh.js";import"./ListItem-CtSgiNmU.js";import"./Page-BhwBI_8z.js";import"./useMediaQuery-KS5OND7o.js";import"./Tooltip-ymjnk5vs.js";import"./Popper-CVKGQzkO.js";import"./WebStorage-D_nrcGMJ.js";import"./useAsync-BeXeBLNv.js";import"./useMountedState-BkwGR7C4.js";import"./componentData-BT2uJg7J.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-7Wh-bZ_e.js";import"./useIsomorphicLayoutEffect-Fxu556Ss.js";import"./AppThemeApi-CDpY_kGN.js";import"./BUIProvider-MOAkSoGK.js";import"./openLink-DbqcEISv.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
