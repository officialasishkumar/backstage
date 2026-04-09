import{j as t}from"./iframe-Cfvhm_I_.js";import{HeaderWorldClock as m}from"./index-D_2-6-o9.js";import{H as a}from"./Header-KRCHU0JD.js";import{w as l}from"./appWrappers-CURMqnS7.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DLOIP3ts.js";import"./Grid-DkWQjsJu.js";import"./Link-CW8AiaF7.js";import"./index-BsVGjCRX.js";import"./lodash-KfD76xoT.js";import"./useAnalytics-CdOPkTnF.js";import"./makeStyles-Cjp1zSIN.js";import"./useApp-B2trGyyJ.js";import"./Helmet-B-mxw2VT.js";import"./Box-TWV5D5e5.js";import"./styled-CoxzwnbL.js";import"./Breadcrumbs-nqPbEMTY.js";import"./index-B9sM2jn7.js";import"./Popover-CDSWPwDj.js";import"./Modal-ClsUAoOV.js";import"./Portal-BcsYPVrx.js";import"./List-BiOyHWo0.js";import"./ListContext-CKJ6dXnp.js";import"./ListItem-CHJsmnzK.js";import"./Page-C78YjKgm.js";import"./useMediaQuery-w3s45jPq.js";import"./Tooltip-DafbC9NK.js";import"./Popper-BE9xQ5lf.js";import"./WebStorage-btWLm3Q3.js";import"./useAsync-sA0E2EEG.js";import"./useMountedState-BjiBWndZ.js";import"./componentData-Dr2I75va.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-CTFBjHza.js";import"./useIsomorphicLayoutEffect-C2bDZ_EO.js";import"./BUIProvider-DgTdUX3X.js";import"./openLink-Bg6urkNK.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
