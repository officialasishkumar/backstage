import{j as t}from"./iframe-D0nL_Agr.js";import{HeaderWorldClock as m}from"./index-C_1yB4ly.js";import{H as a}from"./Header-Cjp79_2G.js";import{w as l}from"./appWrappers-DpvrWMrt.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DcuemqXx.js";import"./makeStyles-CEEIeaPc.js";import"./Grid-Cj5fjV2g.js";import"./Link-ChRPIsYf.js";import"./index-DZW9dhqm.js";import"./lodash-C8hrBFZO.js";import"./index-C_CdmF_Y.js";import"./useAnalytics-DHjT-X03.js";import"./useApp-D1uJ25an.js";import"./Helmet-D84VAO4H.js";import"./Box-BBeBWSpp.js";import"./styled-ud37gncL.js";import"./Breadcrumbs-BsqQ8shu.js";import"./index-B9sM2jn7.js";import"./Popover-kGRCMEhn.js";import"./Modal-Ck9qjAe3.js";import"./Portal-CKyiLAPX.js";import"./List-B6josrBo.js";import"./ListContext-Dwy-3B6k.js";import"./ListItem-BvZ21ujD.js";import"./Page-Bk5MCW2k.js";import"./useMediaQuery-NqjKYLwT.js";import"./Tooltip-CDtWWtCQ.js";import"./Popper-Cb6XZt8l.js";import"./WebStorage-uwUF_EA0.js";import"./useAsync-CTfQC1T2.js";import"./useMountedState-D6h1Oxy0.js";import"./componentData-BbYq1rWo.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-DjKWsAL4.js";import"./useIsomorphicLayoutEffect-B453DNNn.js";import"./AppThemeApi-9X4i4Jd7.js";import"./BUIProvider-C5Dtv7Wb.js";import"./openLink-Cv7lDsZC.js";const M={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const Q=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,Q as __namedExportsOrder,M as default};
