(function(){"use strict";var e={2449:function(e,t,n){var a=n(9242),r=n(1020);async function o(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var i=n(678),l=(n(7658),n(3396)),u=n(4870);const s="locations";function c(e){return e<11.25||e>=348.75?"N":e>=11.25&&e<33.75?"NNE":e>=33.75&&e<56.25?"NE":e>=56.25&&e<78.75?"ENE":e>=78.75&&e<101.25?"E":e>=101.25&&e<123.75?"ESE":e>=123.75&&e<146.25?"SE":e>=146.25&&e<168.75?"SSE":e>=168.75&&e<191.25?"S":e>=191.75&&e<213.75?"SSW":e>=213.75&&e<236.25?"SW":e>=236.25&&e<258.75?"WSW":e>=258.75&&e<281.25?"W":e>=281.25&&e<303.25?"WNW":e>=303.75&&e<326.25?"NW":"NNW"}function d(e){localStorage.setItem(s,JSON.stringify(e))}function f(){const e=localStorage.getItem(s);if(e)return JSON.parse(e)}function p(e){return 0===e.length?e:e.charAt(0).toUpperCase()+e.slice(1)}function m(e){return e<.5?"Calm":e>=.5&&e<1.6?"Light air":e>=1.6&&e<3.4?"Light breeze":e>=3.4&&e<5.5?"Gentle breeze":e>=5.5&&e<8?"Moderate breeze":e>=8&&e<10.8?"Fresh breeze":e>=10.8&&e<13.9?"Strong breeze":e>=13.9&&e<17.2?"High wind, moderate gale":e>=17.2&&e<20.8?"Gale":e>=20.8&&e<24.5?"Strong gale":e>=24.5&&e<28.5?"Storm":e>=28.5&&e<32.6?"Violent storm":"Hurricane"}var h=n(7327),v=n(4161);class w{constructor(e,t){(0,h.Z)(this,"server",void 0),(0,h.Z)(this,"apiKey",void 0),this.server=e,this.apiKey=t,this.server=e,this.apiKey=t}async getGeoCoordinates(e){let t;return await v.Z.get(`${this.server}/geo/1.0/direct`,{params:{q:e,appId:this.apiKey}}).then((e=>{const[n]=e.data;t=n})).catch((e=>{console.error(`Geo API call error, ${e.message}`)})),t}async getGeoWeather(e,t){let n;return await v.Z.get(`${this.server}/data/2.5/weather`,{params:{lat:e,lon:t,appid:this.apiKey,units:"metric"}}).then((e=>{n=e.data})).catch((e=>{console.error(`Weather API call error, ${e.message}`)})),n}}const g=new w("http://api.openweathermap.org","d69dbe30b946b4deb6ccfe5c430f6d4a");var y=g;function b(e){return(0,r.Q_)(`weather${e.name}`,(()=>{const t=(0,u.iH)(void 0);async function n(){t.value=await y.getGeoWeather(e.lat,e.lon)}return{weatherData:t,fetchWeatherData:n}}))()}async function _(e){const t=b(e);return void 0===t.weatherData&&await t.fetchWeatherData(),t}var W=n(7139),k=n(6639),j=n(6572),O=n(1332),x=n(1888),S=n(6824),z=n(8521),E=n(3289);const C={class:"d-flex weather-preview"},P=["src"],F={class:"text-h2 middle pl-2"};var N=(0,l.aZ)({__name:"WeatherWidget",props:{weather:{}},setup(e){const t=e,n=(0,u.Vh)(t,"weather").value,a=(0,l.Fl)((()=>n.wind.speed>20.8)),r=(0,l.Fl)((()=>`https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`)),o=(0,l.Fl)((()=>`${n.name}, ${n.sys.country}`)),i=(0,l.Fl)((()=>`Feels like ${Math.round(n.main.feels_like)}`)),s=(0,l.Fl)((()=>p(n.weather[0].description))),d=(0,l.Fl)((()=>m(n.wind.speed))),f=(0,l.Fl)((()=>Math.round(n.main.temp))),h=(0,l.Fl)((()=>`${n.wind.speed} m/s ${c(n.wind.deg)}`)),v=(0,l.Fl)((()=>(n.visibility/1e3).toFixed(1)));return(e,t)=>((0,l.wg)(),(0,l.j4)(k._,{class:"mx-auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(j.E,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,W.zw)(o.value),1)])),_:1}),a.value?((0,l.wg)(),(0,l.j4)(O.Q,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(E.t,{icon:"mdi-alert",size:"36",color:"error",class:"me-1 pb-1"}),(0,l.Uk)(" Extreme Weather Alert ")])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(x.Z,null,{default:(0,l.w5)((()=>[(0,l._)("div",C,[(0,l._)("img",{src:r.value,height:"72",width:"72",alt:"Weather icon"},null,8,P),(0,l._)("strong",F,(0,W.zw)(f.value)+"°C",1)]),(0,l.Wm)(S.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(z.D,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,W.zw)(i.value)+"°C. "+(0,W.zw)(s.value)+". "+(0,W.zw)(d.value)+". ",1)])),_:1}),(0,l.Wm)(z.D,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(E.t,{icon:"mdi-weather-windy pr-2"}),(0,l.Uk)((0,W.zw)(h.value),1)])),_:1}),(0,l.Wm)(z.D,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Wm)(E.t,{icon:"mdi-water-percent pr-2"}),(0,l.Uk)((0,W.zw)(e.weather.main.humidity)+"% ",1)])),_:1}),(0,l.Wm)(z.D,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Uk)("Pressure: "+(0,W.zw)(e.weather.main.pressure)+"hPa",1)])),_:1}),(0,l.Wm)(z.D,{cols:"6"},{default:(0,l.w5)((()=>[(0,l.Uk)("Visibility: "+(0,W.zw)(v.value)+"Km",1)])),_:1})])),_:1})])),_:1})])),_:1}))}}),V=n(89);const D=(0,V.Z)(N,[["__scopeId","data-v-059b6b9d"]]);var U=D,Z=n(3369);const $={class:"d-flex flex-end no-height"};var A=(0,l.aZ)({__name:"WidgetContainer",async setup(e){let t,n;const a=f();if(!a){const e=(0,i.tv)();e.push({path:"/settings"})}const r=[];a?.forEach((e=>{r.push(_(e))}));const o=([t,n]=(0,l.mv)((()=>Promise.all(r))),t=await t,n(),t);return(e,t)=>{const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(Z.K,null,{default:(0,l.w5)((()=>[(0,l._)("div",$,[(0,l.Wm)(n,{to:"/settings"},{default:(0,l.w5)((()=>[(0,l.Wm)(E.t,{icon:"mdi-cog",size:"24",class:"relative me-1 pb-1 settings-icon"})])),_:1})]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,u.SU)(o),((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:"weather"+t,class:"pt-2"},[e.weatherData?((0,l.wg)(),(0,l.j4)(U,{key:0,weather:e.weatherData},null,8,["weather"])):(0,l.kq)("",!0)])))),128))])),_:1})}}});const K=A;var L=K,H=n(6983),I=n.n(H);const M={class:"list-group-item d-flex pr-2 pt-4",style:{"justify-content":"space-between"}},T={class:"text"};var q=(0,l.aZ)({__name:"LocationList",props:{modelValue:Array},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,a=(0,l.Fl)({get:()=>n.modelValue,set:e=>t("update:modelValue",e)});function r(e){a.value?.splice(e,1)}return(e,t)=>((0,l.wg)(),(0,l.j4)((0,u.SU)(I()),{class:"pt-6",tag:"ul",list:a.value,handle:".handle","item-key":"name"},{item:(0,l.w5)((({element:e,index:t})=>[(0,l._)("li",M,[(0,l.Wm)(E.t,{icon:"mdi-menu",class:"handle"}),(0,l._)("span",T,(0,W.zw)(e.name)+", "+(0,W.zw)(e.country),1),(0,l.Wm)(E.t,{icon:"mdi-close",class:"close",onClick:e=>r(t)},null,8,["onClick"])])])),_:1},8,["list"]))}});const G=q;var B=G,Y=n(702),J=n(6422),Q=n(3208);const R={class:"d-flex flex-end pt-6 pr-1"};var X=(0,l.aZ)({__name:"WidgetSettings",setup(e){const t=(0,u.iH)(""),n=(0,u.iH)(!1),a=(0,u.qj)({}),r=(0,u.iH)(),o=(0,u.iH)(f()||[]);function i(){t.value="",n.value=!1,r.value?.resetValidation()}async function s(){return a.value=await y.getGeoCoordinates(t.value),void 0!==a.value}function c(){if(void 0!==a.value){const e={...a.value};o.value.push({name:e.name,lat:e.lat,lon:e.lon,country:e.country,state:e.state}),i()}}return(0,l.YP)((()=>a),((e,t)=>{c()}),{deep:!0}),(0,l.YP)((()=>o),((e,t)=>{d(e.value)}),{deep:!0}),(e,n)=>{const a=(0,l.up)("router-link");return(0,l.wg)(),(0,l.j4)(Z.K,{style:{"max-width":"368px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(J.O,{ref_key:"locationForm",ref:r},{default:(0,l.w5)((()=>[(0,l.Wm)(S.o,{class:"h-55"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q.h,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),variant:"filled","clear-icon":"mdi-close-circle",clearable:"",label:"Add location",type:"text","validate-on":"submit",rules:[()=>!!t.value||"Location is required",()=>!o.value.some((e=>e.name==t.value))||"Location already present!!",async()=>await s()||"Invalid Location!!"],"onClick:clear":i},null,8,["modelValue","rules"]),(0,l.Wm)(Y.T,{style:{height:"inherit","box-shadow":"none"},type:"submit",ref:"submitButton"},{default:(0,l.w5)((()=>[(0,l.Wm)(E.t,{icon:"mdi-send"})])),_:1},512)])),_:1})])),_:1},512),(0,l.Wm)(B,{modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=e=>o.value=e)},null,8,["modelValue"]),(0,l._)("div",R,[(0,l.Wm)(a,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Wm)(E.t,{icon:"mdi-weather-sunny",color:"black",size:"24",class:"me-1 pb-1"})])),_:1})])])),_:1})}}});const ee=(0,V.Z)(X,[["__scopeId","data-v-2c5d75a2"]]);var te=ee;const ne=(0,i.p7)({history:(0,i.PO)("https://github.com/claudio-ing/weather-app/"),routes:[{path:"/",name:"WidgetContainer",component:L},{path:"/settings",name:"WidgetSettings",component:te},{path:"/:pathMatch(.*)*",redirect:"/"}]});var ae=ne,re=n(8727),oe=(0,re.Rd)(),ie=n(4852);function le(e,t){const n=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(ie.q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Z.K,{style:{"max-width":"368px"}},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(l.n4,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n)])),_:1}))])),_:1})])),_:1})}const ue={},se=(0,V.Z)(ue,[["render",le]]);var ce=se;const de=(0,r.WB)();o(),(0,a.ri)(ce).use(ae).use(oe).use(de).mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],r=e[c][1],o=e[c][2];for(var l=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&r&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return a[e]}}));return i["default"]=function(){return a},n.d(o,i),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.06209ce1.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="weather-app:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var l,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=a),e[a]=[r];var f=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="https://github.com/claudio-ing/weather-app/"}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),l=new Error,u=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],l=a[1],u=a[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(t&&t(a);s<i.length;s++)o=i[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2449)}));a=n.O(a)})();
//# sourceMappingURL=app.f3086955.js.map