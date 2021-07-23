(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=new URL(t(217),t.b),s=o()((function(n){return n[1]})),u=i()(c);s.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "montserrat", sans-serif;\n  background-image: url('+u+");\n  background-size: cover;\n  background-position: top center;\n}\n\n.app-wrap {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background-image: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.3),\n    rgba(0, 0, 0, 0.6)\n  );\n}\n\n.current_weather {\n  text-align: center;\n  margin-top: 30px;\n  color: #c9df00;\n  text-shadow: 2px 4px rgba(0, 0, 0, 0.6);\n  font-size: 36px;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px 15px 0px;\n  position: relative;\n}\n\nheader input {\n  width: 100%;\n  max-width: 280px;\n  padding: 10px 15px;\n  border: none;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 16px 0 16px 0;\n  border-bottom: 3px solid #c9df00;\n  transition: 0.2s ease-out;\n}\n\nheader input:focus {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.card {\n  width: 100%;\n  max-width: 280px;\n  background-color: rgba(89, 93, 100, 0.9);\n  margin: auto;\n  max-height: 100px;\n  height: 100%;\n}\n.card:hover {\n  background-color: rgba(61, 64, 68, 0.9);\n}\n.match-list {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  justify-self: center;\n  align-self: center;\n  max-width: 280px;\n  width: 100%;\n  max-height: 100px;\n  height: 100%;\n  top: 160px;\n  overflow-y: scroll;\n}\n\n.card h4 {\n  text-align: center;\n  padding: 5px 5px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #c9df00;\n  text-shadow: 2px 2px rgba(0, 0, 0, 0.6);\n}\n\nmain {\n  flex: 11 100%;\n  padding: 25px 25px 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.location .city {\n  color: #fff;\n  font-size: 32px;\n  font-weight: 500;\n  margin-bottom: 5px;\n}\n\n.location .date {\n  color: #fff;\n  font-size: 16px;\n}\n\n.current .temp {\n  color: #fff;\n  font-size: 102px;\n  font-weight: 900;\n  margin: 0px;\n  text-shadow: 2px 10px rgba(0, 0, 0, 0.6);\n}\n\n.current .temp span {\n  font-weight: 500;\n}\n\n.current .weather {\n  color: #fff;\n  font-size: 32px;\n  font-weight: 700;\n  font-style: italic;\n  margin-bottom: 15px;\n  margin-top: 25px;\n  text-shadow: 0px 3px rgba(0, 0, 0, 0.4);\n}\n\n.current .wind_speed {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  text-shadow: 0px 4px rgba(0, 0, 0, 0.4);\n  margin-bottom: 15px;\n}\n\n.current .humidity {\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  text-shadow: 0px 4px rgba(0, 0, 0, 0.4);\n}\n",""]);const d=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,p="".concat(u," ").concat(d);a[u]=d+1;var l=t(p),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(e[l].references++,e[l].updater(f)):e.push({identifier:p,updater:o(f,r),references:1}),i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var d=t(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},217:(n,e,t)=>{n.exports=t.p+"131b184345aca6d3774b.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),d=t.n(u),p=t(589),l=t.n(p),f=t(426),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=document.getElementById("search"),g=document.querySelector(".match-list");m.addEventListener("keypress",(function(n){13==n.keyCode&&x(m.value)}));const x=n=>{fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&appid=e5e29ebfa01d8c4d760211546a67ba41`).then((n=>n.json())).then(b)},b=n=>{console.log(n),document.querySelector(".location .city").innerText=`${n.name}, ${n.sys.country}`;let e=new Date;document.querySelector(".location .date").innerText=y(e),document.querySelector(".current .icon").innerHTML=`<img src="https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">`,document.querySelector(".current .temp").innerHTML=`${Math.round(n.main.temp)}<span>°c</span>`,document.querySelector(".current .weather").innerText=`${n.weather[0].description}`,document.querySelector(".current .wind_speed").innerHTML=`Wind speed: ${Math.round(n.wind.speed)} m/s`,document.querySelector(".current .humidity").innerHTML=`Humidity: ${n.main.humidity} %`},y=n=>`${["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]} ${n.getDate()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]} ${n.getFullYear()}`;m.addEventListener("input",(()=>(async n=>{const e=await fetch("http://localhost:3033/cities");let t=(await e.json()).filter((e=>{const t=new RegExp(`^${n}`,"gi");return e.name.match(t)}));0===n.length&&(t=[],g.innerHTML=""),(n=>{if(n.length>0){const e=n.map((n=>`\n    <div class="card">\n      <h4>${n.name}, ${n.country}</h4>\n    </div>`)).join("");g.innerHTML=e}g.onclick=function(n){m.value=n.target.innerText,x(m.value),g.innerHTML=""}})(t)})(m.value))),x("Tallinn")})()})();