import{j as t}from"./iframe-BwbkeUNF.js";import{HeaderWorldClock as m}from"./index-DBldJe-D.js";import{H as a}from"./Header-BoCgIbgB.js";import{w as l}from"./appWrappers-DvogDdoA.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-BhZHxjwb.js";import"./Grid-DD0XASu5.js";import"./Link-CjNA6wJy.js";import"./index-zhCgspdl.js";import"./lodash-ClqrAeSM.js";import"./useAnalytics-B7PiVxCY.js";import"./makeStyles-CGCER2cu.js";import"./useApp-DGHdqxLG.js";import"./Helmet-B4MqQPcA.js";import"./Box-BpqKX1IA.js";import"./styled-DKzWxQyh.js";import"./Breadcrumbs-BDnXd8by.js";import"./index-B9sM2jn7.js";import"./Popover-HuCIbp-7.js";import"./Modal-C_w5RpoD.js";import"./Portal-qCFAxiUf.js";import"./List-ChwsDTGU.js";import"./ListContext-BDNI8oKK.js";import"./ListItem-BHaUgdJU.js";import"./Page-BtAYh_Il.js";import"./useMediaQuery-By5aL91l.js";import"./Tooltip-BCiMtrfJ.js";import"./Popper-CtD4YCCn.js";import"./WebStorage-CtgBqFKp.js";import"./useAsync-BhroUHYB.js";import"./useMountedState-Ddw8xbV-.js";import"./componentData-Bl56XdHh.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-BgaUvL8B.js";import"./useIsomorphicLayoutEffect-lsdh3kOT.js";import"./BUIProvider-BJAHywAp.js";import"./openLink-BuoNKP2_.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
