import{j as t}from"./iframe-DsZtuuTR.js";import{HeaderWorldClock as m}from"./index-D-bp_D1l.js";import{H as a}from"./Header-d0d9k3EU.js";import{w as l}from"./appWrappers-ar1MFznU.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DlKEUe2V.js";import"./makeStyles-41TQbijK.js";import"./Grid-CKFEL6Ss.js";import"./Link-DjvaMwo_.js";import"./index-Bqn1XTYQ.js";import"./lodash-BypptKGH.js";import"./index-uH1xIlYD.js";import"./useAnalytics-YS7OZ-uO.js";import"./useApp-bTnD5DHs.js";import"./Helmet-DMCutN_s.js";import"./Box-3ttDjC-9.js";import"./styled-bk62jvDu.js";import"./Breadcrumbs--eYGPXU5.js";import"./index-B9sM2jn7.js";import"./Popover-CRqXxO63.js";import"./Modal-XrZoVZ0I.js";import"./Portal-DR4gT_uM.js";import"./List-C6QPnNfT.js";import"./ListContext-DcgBfIsd.js";import"./ListItem-BwEWPFK6.js";import"./Page-BS-O74kW.js";import"./useMediaQuery-tEJSyBZN.js";import"./Tooltip-BnnSJaTg.js";import"./Popper-DOHUvbmz.js";import"./WebStorage-wbCsrwiK.js";import"./useAsync-gJD2Ho9T.js";import"./useMountedState-COxOjAGe.js";import"./componentData-DPwp5LM5.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-87F9ihSH.js";import"./useIsomorphicLayoutEffect-gF7jK0N4.js";import"./AppThemeApi-DfBY-Xua.js";import"./BUIProvider-CyUmZSwJ.js";import"./openLink-D7WjByac.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
