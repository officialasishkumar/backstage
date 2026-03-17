import{j as t}from"./iframe-CtYv7QJ0.js";import{HeaderWorldClock as m}from"./index-DqvDu1ab.js";import{H as a}from"./Header-BfAx1d-T.js";import{w as l}from"./appWrappers-Cqiwuyfc.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Gta_S-1_.js";import"./makeStyles--1ATzXv9.js";import"./Grid-BCbLl6WO.js";import"./Link-4m0BNJ_b.js";import"./index-r59YBeO4.js";import"./lodash-CtZ09CsL.js";import"./index-CgDq3XR-.js";import"./useAnalytics-Bl__AmNu.js";import"./useApp-CZQSE3E9.js";import"./Helmet-Bn-nVCZO.js";import"./Box-CAZTqRm1.js";import"./styled-EsqOIvlg.js";import"./Breadcrumbs-4i5SvteB.js";import"./index-B9sM2jn7.js";import"./Popover-Cetlf1AD.js";import"./Modal-D_Q7hd0G.js";import"./Portal-BRtlHwp1.js";import"./List-DmvJHB8z.js";import"./ListContext-BuapdplI.js";import"./ListItem-CwRfUFQu.js";import"./Page-DaTelRtr.js";import"./useMediaQuery-4i4hH4Z1.js";import"./Tooltip-BsOi6xxC.js";import"./Popper-BjMqL0rj.js";import"./useObservable-_9EJvrH2.js";import"./useIsomorphicLayoutEffect-DSWv8SaO.js";import"./useAsync-Cl2aaync.js";import"./useMountedState-DitFhSJJ.js";import"./componentData-Cxf138iF.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DCcFMRr-.js";import"./openLink-Bmz1Jei1.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
