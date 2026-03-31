import{j as t}from"./iframe-BnLaYHT0.js";import{HeaderWorldClock as m}from"./index-CGZ9Sm37.js";import{H as a}from"./Header-B07v9Xxp.js";import{w as l}from"./appWrappers-hQuAQIk9.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-vu8CxwSV.js";import"./makeStyles-Ci9OQMMV.js";import"./Grid-BVx1ZeMm.js";import"./Link-Boy8ho4w.js";import"./index-Cpm2Va4W.js";import"./lodash-DpN-AoLg.js";import"./useAnalytics-DZdNMYw7.js";import"./useApp-DC1925IS.js";import"./Helmet-KSAoj-Rw.js";import"./Box-D4mbYqDO.js";import"./styled-Dah7uO8h.js";import"./Breadcrumbs-Bbj_lh_y.js";import"./index-B9sM2jn7.js";import"./Popover-B5d8YLfq.js";import"./Modal-BRJd5uSM.js";import"./Portal-CJRUocKS.js";import"./List-DXJGlMrG.js";import"./ListContext-ZUAJ6gMg.js";import"./ListItem-DEKaS7rV.js";import"./Page-D923VjGL.js";import"./useMediaQuery-Bq570aCt.js";import"./Tooltip-DEaAQANQ.js";import"./Popper-CajeHu2h.js";import"./WebStorage-Cxn_eKiJ.js";import"./useAsync-BIqxmOvv.js";import"./useMountedState-BzlV24-v.js";import"./componentData-Bmp4MCDj.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-_Nvkw-mQ.js";import"./useIsomorphicLayoutEffect-BfGqrP9P.js";import"./BUIProvider-BH9ORap1.js";import"./openLink-BEdMuLiR.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
