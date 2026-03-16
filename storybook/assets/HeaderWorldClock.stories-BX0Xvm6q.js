import{j as t}from"./iframe-Du1NhnRf.js";import{HeaderWorldClock as m}from"./index-CM7JLVpY.js";import{H as a}from"./Header-C_ey0nbC.js";import{w as l}from"./appWrappers-Dy7pQDyw.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-PU3GG9qO.js";import"./makeStyles-BE8gP3w7.js";import"./Grid-O7pUBILR.js";import"./Link-gdoezBv2.js";import"./index-Bepsy_Z3.js";import"./lodash-BSRFOEMl.js";import"./index-Ck8n2OOF.js";import"./useAnalytics-Ms6WfRSX.js";import"./useApp-DfeMOLKR.js";import"./Helmet-Be9_-pUt.js";import"./Box-BLB9Ozy2.js";import"./styled-ED97p4bf.js";import"./Breadcrumbs-BfCQkN15.js";import"./index-B9sM2jn7.js";import"./Popover-C3tQpyPo.js";import"./Modal-C6NV1WST.js";import"./Portal--jynCFKo.js";import"./List-C_-v2Bm5.js";import"./ListContext-CHRkL_NO.js";import"./ListItem-D0I3ixrZ.js";import"./Page-BYkLZ1Vg.js";import"./useMediaQuery-B8-nrfQa.js";import"./Tooltip-DWPPtYcc.js";import"./Popper-C0GxANyG.js";import"./useObservable-DFKmxMmG.js";import"./useIsomorphicLayoutEffect-Bqw_eD0t.js";import"./useAsync-C0CViB27.js";import"./useMountedState-D7sVuivw.js";import"./componentData-CgD6suoV.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-CfT0m_qr.js";import"./openLink-CxapqtyB.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
