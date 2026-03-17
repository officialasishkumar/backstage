import{j as t}from"./iframe-D94_c1Tp.js";import{HeaderWorldClock as m}from"./index-DvPfRBJw.js";import{H as a}from"./Header-Bl2VVai5.js";import{w as l}from"./appWrappers-ZQzcO08Y.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-fGEhldEJ.js";import"./makeStyles-CKqiAwnv.js";import"./Grid-TMpKdJdj.js";import"./Link-BjGX1L8G.js";import"./index-B5jp4Cu3.js";import"./lodash-AxW3xIV_.js";import"./index-BrZ8YAao.js";import"./useAnalytics-B9rHpaUX.js";import"./useApp-DAxCr7ZI.js";import"./Helmet-CB2zCy0P.js";import"./Box-Ctg7iXT5.js";import"./styled-DNDrER2-.js";import"./Breadcrumbs-BKUosUBq.js";import"./index-B9sM2jn7.js";import"./Popover-C-fjSaZv.js";import"./Modal-C1uYguhK.js";import"./Portal-D3nAj-4m.js";import"./List-C8oahujg.js";import"./ListContext-D3wa98z0.js";import"./ListItem-BvGB8g16.js";import"./Page-CMhY-hV3.js";import"./useMediaQuery-Bm75bjeH.js";import"./Tooltip-jf0VIgLY.js";import"./Popper-D6Rg0_UH.js";import"./useObservable-iN5Ns7Jc.js";import"./useIsomorphicLayoutEffect-CsFVC7Nn.js";import"./useAsync-DTqsCBT6.js";import"./useMountedState-jRxC8-9y.js";import"./componentData-4fd3-zn4.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./BUIProvider-DcamUp_A.js";import"./openLink-CpY4wZ7E.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
