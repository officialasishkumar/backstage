import{j as t}from"./iframe-BYJEcONI.js";import{HeaderWorldClock as m}from"./index-DKss0xpN.js";import{H as a}from"./Header-vnjI1pmV.js";import{w as l}from"./appWrappers-BNw4uIDi.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-nLp1QEiY.js";import"./Grid-WhGNoc5-.js";import"./Link-DnuOEioG.js";import"./index-CXFg1uvL.js";import"./lodash-Du7UIGfI.js";import"./useAnalytics-CRhuHj1g.js";import"./makeStyles-l6ucUTqN.js";import"./useApp-DuvHdhuP.js";import"./Helmet-BSTCb-Rj.js";import"./Box-sr-PQbiK.js";import"./styled-BIP2wHBB.js";import"./Breadcrumbs-L1Mig-i-.js";import"./index-B9sM2jn7.js";import"./Popover-CL3IOnot.js";import"./Modal-DGwD98fw.js";import"./Portal-CBSxLcyA.js";import"./List-BwnJ0qw9.js";import"./ListContext-BBhf4A7_.js";import"./ListItem-CssaaKiD.js";import"./Page-DWQJPya3.js";import"./useMediaQuery-w82Yn6Oy.js";import"./Tooltip-BW3NBEpc.js";import"./Popper-BOCixRLe.js";import"./WebStorage-DUFxKWSj.js";import"./useAsync-f4NepNzS.js";import"./useMountedState-CBFV9pKo.js";import"./componentData-Dfoth2s8.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";import"./useObservable-L_ekLlp9.js";import"./useIsomorphicLayoutEffect-C-hHAnXT.js";import"./BUIProvider-ilvP8ZY_.js";import"./openLink-fvBOI5ql.js";const K={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
