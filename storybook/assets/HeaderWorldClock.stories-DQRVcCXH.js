import{j as t}from"./iframe-9SnFn8NI.js";import{HeaderWorldClock as m}from"./index-fWPI2cFT.js";import{H as a}from"./Header-2x-jkEdw.js";import{w as l}from"./appWrappers-gCP1PHw1.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-S5L_xgAq.js";import"./makeStyles-V6CeBGqV.js";import"./Grid-DnbT5ToY.js";import"./Link-CwdNwFvc.js";import"./index-Cl14oj1p.js";import"./lodash-D_ItgaGX.js";import"./index-DSgRsb80.js";import"./useAnalytics-BPrcyc7d.js";import"./useApp-BcoyKQFG.js";import"./Helmet-OTqoMqxu.js";import"./Box-gvDFBePG.js";import"./styled-BqCxyJxR.js";import"./Breadcrumbs-DNV3wjhx.js";import"./index-B9sM2jn7.js";import"./Popover-DwK-7TXH.js";import"./Modal-shSMlX3e.js";import"./Portal-DzHAgIGh.js";import"./List-4wadUwvo.js";import"./ListContext-D6WBwJuB.js";import"./ListItem-DIdjPLO3.js";import"./Page-Bk2imvQR.js";import"./useMediaQuery-De9KxEic.js";import"./Tooltip-B3I0hJ1p.js";import"./Popper-2JEPo0EG.js";import"./useObservable-C04GqKKN.js";import"./useIsomorphicLayoutEffect-B1b_6019.js";import"./useAsync-Y4mVlgU0.js";import"./useMountedState-DS2oCoAt.js";import"./componentData-DFRBpqUL.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DWQLs8Cf.js";import"./openLink-Dxd353gg.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
