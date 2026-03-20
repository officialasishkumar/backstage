import{j as t}from"./iframe-BfKy45FJ.js";import{HeaderWorldClock as m}from"./index-DTiQTgb2.js";import{H as a}from"./Header-CdP4tXbM.js";import{w as l}from"./appWrappers-BG_bTRVG.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BJy6CPEe.js";import"./makeStyles-CbJpsKKD.js";import"./Grid-DMQfW7fm.js";import"./Link-C9foY-1f.js";import"./index-DYvGN8yU.js";import"./lodash-Co90uFAP.js";import"./index-iCFn_EoD.js";import"./useAnalytics-CSNCMzqj.js";import"./useApp-BixXzEMi.js";import"./Helmet-lsyoJL4X.js";import"./Box-Chh9ILCj.js";import"./styled-Cz7jZRk5.js";import"./Breadcrumbs-DooKtqpR.js";import"./index-B9sM2jn7.js";import"./Popover-BQ2AXkI_.js";import"./Modal-BbTV6vLk.js";import"./Portal-C8YLi2oE.js";import"./List-C-G9AVhD.js";import"./ListContext-DvxZ_Ds9.js";import"./ListItem-DgDd4GZe.js";import"./Page-Bolk4mfZ.js";import"./useMediaQuery-Bsdrmyjs.js";import"./Tooltip-DoZw0snM.js";import"./Popper-DDZAuDQP.js";import"./WebStorage-D758RDgT.js";import"./useAsync-BjmE6g06.js";import"./useMountedState-DYHhDi6-.js";import"./componentData-DUYteM0k.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-uY-LHa7u.js";import"./useIsomorphicLayoutEffect-Dxa9ALL7.js";import"./AppThemeApi-Du7udc9h.js";import"./BUIProvider-CkXaGfx4.js";import"./openLink-Du3SpVTa.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
