import{j as t}from"./iframe-CgH1me10.js";import{HeaderWorldClock as m}from"./index-BvtCQPQm.js";import{H as a}from"./Header-DIRamgi_.js";import{w as l}from"./appWrappers-NpBGgNln.js";import"./preload-helper-PPVm8Dsz.js";import"./HeaderLabel-DInYLaOe.js";import"./makeStyles-DDQHR9TF.js";import"./Grid-JeE2fzwn.js";import"./Link-CyQAlTHt.js";import"./index-BEl4_Iip.js";import"./lodash-DA8KCwpH.js";import"./index-DAoZozbk.js";import"./useAnalytics-B6XkFFfD.js";import"./useApp-SFhNxW0M.js";import"./Helmet-DeBDzdzx.js";import"./Box-DjOcM7Al.js";import"./styled-HKXiKRGh.js";import"./Breadcrumbs-BDp-NDCx.js";import"./index-B9sM2jn7.js";import"./Popover-C-sXbnMV.js";import"./Modal-C3QCofUv.js";import"./Portal-BSxkgYw7.js";import"./List-BhhAC_dw.js";import"./ListContext-D3q8nz-e.js";import"./ListItem-jQhSzGlz.js";import"./Page-B9driqAF.js";import"./useMediaQuery-BJFoZbIy.js";import"./Tooltip-CuoRQ5pr.js";import"./Popper-Beqw8ii1.js";import"./useObservable-92K9thiA.js";import"./useIsomorphicLayoutEffect-byGVp8_z.js";import"./useAsync-Dh_jC-Gf.js";import"./useMountedState-BYet7bvZ.js";import"./componentData-BVRf5VfY.js";import"./isSymbol-DYihM2bc.js";import"./isObject--vsEa_js.js";import"./toString-jlmj72dF.js";const G={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))],tags:["!manifest"]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
