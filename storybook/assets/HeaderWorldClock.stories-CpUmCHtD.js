import{j as t}from"./iframe-B8N4GvwI.js";import{HeaderWorldClock as m}from"./index-D8fuhFFE.js";import{H as a}from"./Header-BAvSg3Ov.js";import{w as l}from"./appWrappers-YTDhgaFi.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-B_JVPO_L.js";import"./Grid-QaPYXNRs.js";import"./Link-PlY-q14u.js";import"./index-8D16w7r_.js";import"./lodash-BgY7d7CH.js";import"./useAnalytics-BHUlNS6C.js";import"./makeStyles-_6Yu2_YB.js";import"./useApp-BEeSmtgR.js";import"./Helmet-zdjgl7UX.js";import"./Box-MYHTFpuj.js";import"./styled-DnQPDG99.js";import"./Breadcrumbs-B2gN0dyt.js";import"./index-B9sM2jn7.js";import"./Popover-CyULg1bi.js";import"./Modal-D8VPwsry.js";import"./Portal-DI7AqiTH.js";import"./List-0a88D0vi.js";import"./ListContext-Dw62DV8y.js";import"./ListItem-DavGzvU0.js";import"./Page-4I6CY_as.js";import"./useMediaQuery-Dcpb15WP.js";import"./Tooltip-DW4X55ZT.js";import"./Popper-Bkk-r00N.js";import"./WebStorage-BmgY5C-b.js";import"./useAsync-DfYgaazr.js";import"./useMountedState-BUHmGH1y.js";import"./componentData-CcL2xG2g.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-zEuNGP83.js";import"./useIsomorphicLayoutEffect-IuE3dwRY.js";import"./BUIProvider-Dc97VR6g.js";import"./openLink-D6fl38gK.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const L=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,L as __namedExportsOrder,K as default};
