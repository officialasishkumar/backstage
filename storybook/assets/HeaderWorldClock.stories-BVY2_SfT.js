import{j as t}from"./iframe-v6zF9Gaf.js";import{HeaderWorldClock as m}from"./index-_ndkRuz8.js";import{H as a}from"./Header-Bpf4pKuw.js";import{w as l}from"./appWrappers-CavysmfH.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-Cz4FsY7A.js";import"./makeStyles-CnXLcFSM.js";import"./Grid-Cpghltf9.js";import"./Link-DqdRHmUD.js";import"./index-C2dRPvEc.js";import"./lodash-BcdJgnz3.js";import"./useAnalytics-BrIdl9nZ.js";import"./useApp-B9X-R3sY.js";import"./Helmet-BwmhN5ko.js";import"./Box-D8QaCveM.js";import"./styled-DI5Z0TIx.js";import"./Breadcrumbs-GjXyep0Y.js";import"./index-B9sM2jn7.js";import"./Popover-P49c5zXb.js";import"./Modal-8auFf5gZ.js";import"./Portal-D_MLevm5.js";import"./List-BckW65rp.js";import"./ListContext-DWGbobxz.js";import"./ListItem-oij8p5Hz.js";import"./Page-DJwX3Luo.js";import"./useMediaQuery-qDcEKBRg.js";import"./Tooltip-Bdf10fgk.js";import"./Popper-Ib5g_NV1.js";import"./WebStorage-lw-nY7kq.js";import"./useAsync-By65c0tc.js";import"./useMountedState-B4RaS-_B.js";import"./componentData-hTzXuu7t.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-7PDg4R1O.js";import"./useIsomorphicLayoutEffect-BwSGcGHF.js";import"./BUIProvider-DHQo4NNs.js";import"./openLink-CQrfrplF.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
