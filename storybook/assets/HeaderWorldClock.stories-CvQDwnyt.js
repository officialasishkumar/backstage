import{j as t}from"./iframe-wkUvrVVn.js";import{HeaderWorldClock as m}from"./index-3qmZdGPc.js";import{H as a}from"./Header-CucLa6eg.js";import{w as l}from"./appWrappers-Bu5nTIfu.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-CqdPoEvr.js";import"./makeStyles-D6j-HRPe.js";import"./Grid-Bu0FSGfF.js";import"./Link-DO2my6Ck.js";import"./index-VlsBe5q3.js";import"./lodash-DRqfpWl4.js";import"./index-B5HVCV75.js";import"./useAnalytics-Ch7wjcGI.js";import"./useApp-3vTA-W2x.js";import"./Helmet-uLTO_I6G.js";import"./Box-BPqemAJi.js";import"./styled-CLhLDE62.js";import"./Breadcrumbs-BjgJK5-e.js";import"./index-B9sM2jn7.js";import"./Popover-DoK3K718.js";import"./Modal-DSgOyAhr.js";import"./Portal-dimu2vGp.js";import"./List-LUFk3ZfG.js";import"./ListContext-BPCBYmKN.js";import"./ListItem-BIrwQOB_.js";import"./Page-DTpFzk5i.js";import"./useMediaQuery-BIN8STuc.js";import"./Tooltip-B3XA3GY2.js";import"./Popper-D_StAOcj.js";import"./WebStorage--0UlxnmK.js";import"./useAsync-pejW5ESq.js";import"./useMountedState-BzjLIEtJ.js";import"./componentData-C-cHGDZy.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-J1B-xOQ6.js";import"./useIsomorphicLayoutEffect-CXNMZHXl.js";import"./AppThemeApi-CjUUE6Rw.js";import"./BUIProvider-6lEx8047.js";import"./openLink-CRYj9xIm.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
