import{j as t}from"./iframe-BzMU8KOh.js";import{HeaderWorldClock as m}from"./index-BwAxOdSq.js";import{H as a}from"./Header-B9JarwQr.js";import{w as l}from"./appWrappers-3CU-FzBM.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Bzoq8Zax.js";import"./makeStyles-C3oh1vXh.js";import"./Grid-D2HTVDY3.js";import"./Link-BFHx4W-6.js";import"./index-DkmrC5fw.js";import"./lodash-BBveFXvI.js";import"./useAnalytics-TOERclJD.js";import"./useApp-BFWv9POw.js";import"./Helmet-uPtLH6Xr.js";import"./Box-Dy1i5PnV.js";import"./styled-DjuCxYRu.js";import"./Breadcrumbs-BJtt8e4q.js";import"./index-B9sM2jn7.js";import"./Popover-DImwXMSd.js";import"./Modal-DL3jvVCv.js";import"./Portal-ZMtLzGP0.js";import"./List-D4klNrOh.js";import"./ListContext-C2BSnJyA.js";import"./ListItem-TAK5bns_.js";import"./Page-B7iolmA1.js";import"./useMediaQuery-BVLmw7ec.js";import"./Tooltip-DIsjQrri.js";import"./Popper-B7Pqac31.js";import"./WebStorage-BREh09HC.js";import"./useAsync-Bt8_R9Ow.js";import"./useMountedState-CgLAe5As.js";import"./componentData-BLYnLKQK.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-N2-6CX_d.js";import"./useIsomorphicLayoutEffect-Cx74PdDa.js";import"./AppThemeApi-BKCm30lm.js";import"./BUIProvider-DfdR5q2S.js";import"./openLink-CrfJEFwX.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
