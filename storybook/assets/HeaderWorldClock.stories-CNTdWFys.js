import{j as t}from"./iframe-hebBxzMS.js";import{HeaderWorldClock as m}from"./index-CIdWnaUA.js";import{H as a}from"./Header-WV1VkPm0.js";import{w as l}from"./appWrappers-DG3qkWtx.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-C_sPSxBG.js";import"./makeStyles-BuKfj6eo.js";import"./Grid-DR9XAO4b.js";import"./Link-Dwe8WTS_.js";import"./index-CF8ZGQqn.js";import"./lodash-Dh4D4KP7.js";import"./useAnalytics-DnJagaLH.js";import"./useApp-Di7SCwol.js";import"./Helmet-RA3_OGST.js";import"./Box-CsMG6Ed5.js";import"./styled-eU63C66P.js";import"./Breadcrumbs-ByEnK0Jx.js";import"./index-B9sM2jn7.js";import"./Popover-BcCigjgZ.js";import"./Modal-D8j_BW28.js";import"./Portal-DVg2kjtj.js";import"./List-B-7FtQra.js";import"./ListContext-vEx_JeiU.js";import"./ListItem-B2Xdmbv7.js";import"./Page-zjQLf-nB.js";import"./useMediaQuery-DEkKN8dk.js";import"./Tooltip-wRXpjfve.js";import"./Popper-Nu0-WiMx.js";import"./WebStorage-BH3gxhUZ.js";import"./useAsync-DBxU8MB7.js";import"./useMountedState-BOTwgk6q.js";import"./componentData-3dYIRIMh.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTCVMere.js";import"./useIsomorphicLayoutEffect-C2Wk8JSq.js";import"./AppThemeApi-C6IiMRx5.js";import"./BUIProvider-BOqmKnYE.js";import"./openLink-CPB6xqLo.js";const L={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
