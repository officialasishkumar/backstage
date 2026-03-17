import{j as t}from"./iframe-2DflYetR.js";import{HeaderWorldClock as m}from"./index-5CdTqcLq.js";import{H as a}from"./Header-DMyE2x-F.js";import{w as l}from"./appWrappers-DN6vgvpl.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DfI9z5a2.js";import"./makeStyles-B-9IZuRv.js";import"./Grid-DxUCjvP_.js";import"./Link-BPkxBY7v.js";import"./index-DTvBFuUD.js";import"./lodash-BK0iUhmk.js";import"./index-DAw4AdQ5.js";import"./useAnalytics-D8PbdUhp.js";import"./useApp-YlOXCksD.js";import"./Helmet-CA3mrpnw.js";import"./Box-Bu7Xw873.js";import"./styled-DLQ9JpXT.js";import"./Breadcrumbs-DB3arfWb.js";import"./index-B9sM2jn7.js";import"./Popover-BMF1NX8p.js";import"./Modal-BdEpWCwy.js";import"./Portal-DXJMcYAV.js";import"./List-Csw5dc-q.js";import"./ListContext-PWrJkRaZ.js";import"./ListItem-DUio0yug.js";import"./Page-BZ2fb4cC.js";import"./useMediaQuery-C6NHjMRx.js";import"./Tooltip-D6zoDIUy.js";import"./Popper-ClGkD4o6.js";import"./useObservable-C4UWlvAt.js";import"./useIsomorphicLayoutEffect-B_v2HVpB.js";import"./useAsync-N8VXAn8N.js";import"./useMountedState-BmHtpzcF.js";import"./componentData-Cq1ZACX6.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-CIE9UDb1.js";import"./openLink-C7ML4eFc.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
