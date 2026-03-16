import{j as t}from"./iframe-J174yHvZ.js";import{HeaderWorldClock as m}from"./index-CkWQeihn.js";import{H as a}from"./Header-DuIIO166.js";import{w as l}from"./appWrappers-D2dOxqm-.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-WmWgTM7p.js";import"./makeStyles-BWgkUCLK.js";import"./Grid-BrTJh83O.js";import"./Link-A8a46G72.js";import"./index-BpoiheRf.js";import"./lodash-Bh4q8uvP.js";import"./index-BWXGxvNf.js";import"./useAnalytics-josUN2Qr.js";import"./useApp-C7RdyiEa.js";import"./Helmet-CzCYzm0T.js";import"./Box-aKh7VtBH.js";import"./styled-N08b-WnT.js";import"./Breadcrumbs-BRP6aruy.js";import"./index-B9sM2jn7.js";import"./Popover-BnJNi-J2.js";import"./Modal-B51QAQQ-.js";import"./Portal-D1-QTUmg.js";import"./List-Cp0P4C75.js";import"./ListContext-PpjyVQKG.js";import"./ListItem-Sb5TY6iw.js";import"./Page-Dtc2Gaak.js";import"./useMediaQuery-XYLAyLTj.js";import"./Tooltip-CSb0gwMa.js";import"./Popper-DvvAk7i2.js";import"./useObservable-DkYyFvCh.js";import"./useIsomorphicLayoutEffect-DoTR87tR.js";import"./useAsync-BQNaoBzp.js";import"./useMountedState-B3OlZ-Af.js";import"./componentData-BQnVVK1I.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";const G={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
