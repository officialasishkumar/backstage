import{j as t}from"./iframe-D7TnLv8A.js";import{HeaderWorldClock as m}from"./index-8OwQlySe.js";import{H as a}from"./Header-D1DOn9To.js";import{w as l}from"./appWrappers-CzDE8X0z.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-t2bnvkQn.js";import"./makeStyles-BuB2Q7_j.js";import"./Grid-iTO1Arnu.js";import"./Link-BEBsz3Of.js";import"./index-DXGAHSD1.js";import"./lodash-Dr039tkm.js";import"./index-MOf-tiv5.js";import"./useAnalytics-AC0VHxKR.js";import"./useApp-CHEBI3qn.js";import"./Helmet-B8kEQz8l.js";import"./Box-z0c3JxTt.js";import"./styled-DHDYZuir.js";import"./Breadcrumbs-Dsw8BQ96.js";import"./index-B9sM2jn7.js";import"./Popover-DquKNcU4.js";import"./Modal-C7Rg7DHg.js";import"./Portal-DYix9A2M.js";import"./List-L4X_xhy8.js";import"./ListContext-UWf6-YWs.js";import"./ListItem-B56tmsM_.js";import"./Page-NBjC0kYZ.js";import"./useMediaQuery-BSac5Qyg.js";import"./Tooltip-C7iiPh4c.js";import"./Popper-2BigagmP.js";import"./useObservable-ynqU1pYv.js";import"./useIsomorphicLayoutEffect-mwHv5vMT.js";import"./useAsync-BF16R5Yc.js";import"./useMountedState-UFQmEtok.js";import"./componentData-CKizbvzi.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";const G={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const J=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,J as __namedExportsOrder,G as default};
