import{j as t}from"./iframe-BO_5tggG.js";import{HeaderWorldClock as m}from"./index-DwxNTgx6.js";import{H as a}from"./Header-CvoQm9yl.js";import{w as l}from"./appWrappers-CO2B089V.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-C2hlB1w5.js";import"./Grid-CnkSMyRl.js";import"./Link-Dg9RiCku.js";import"./index-BYPhHgSY.js";import"./lodash-B-_hEigx.js";import"./useAnalytics-DiFHt5PS.js";import"./makeStyles-qdsN5qZw.js";import"./useApp-DdxTl6og.js";import"./Helmet-D-ccEIKl.js";import"./Box-CfORvOdf.js";import"./styled-b9HJcToZ.js";import"./Breadcrumbs-b2ZVqEmS.js";import"./index-B9sM2jn7.js";import"./Popover-BygJlL56.js";import"./Modal-Cny2cXs_.js";import"./Portal-BrtXVkDD.js";import"./List-G7DDumso.js";import"./ListContext-B-Wc4pE1.js";import"./ListItem-sKW0pqw1.js";import"./Page-Bq-PPDmB.js";import"./useMediaQuery-DQlkKHPE.js";import"./Tooltip-D7P0enQt.js";import"./Popper-DLJkmYqC.js";import"./WebStorage-ksa_OCrH.js";import"./useAsync-X8ueQH82.js";import"./useMountedState-ob0FKbjJ.js";import"./componentData-BMtHd5OU.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-B9ExD75k.js";import"./useIsomorphicLayoutEffect-DYRDPzzy.js";import"./BUIProvider-BQQre2hP.js";import"./openLink-CrrHS3jY.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
