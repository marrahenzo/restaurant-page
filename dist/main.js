(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),l=new URL(t(354),t.b),d=i()(a()),m=s()(l);d.push([e.id,":root {\n  --nav-color: rgba(3, 39, 117, 0.85);\n}\n\nbody {\n  margin: 0;\n  background-image: url("+m+");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n#navbar {\n  background-color: var(--nav-color);\n  display: grid;\n  grid-template-rows: 1fr 0.2fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n  padding: 0 30vw;\n  padding-bottom: 10px;\n}\n\n#navbar a {\n  height: 80px;\n  width: 150px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 25px;\n  font-family: 'Radio Canada', sans-serif;\n  font-weight: bold;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  grid-row: 2/3;\n}\n\n#navbar a:hover {\n  transform: translateY(-10px);\n}\n\n#navbar a.active {\n  border-bottom: 2px solid white;\n}\n\n#navbar p {\n  grid-row: 1/2;\n  grid-column: 1/4;\n  font-family: 'Josefin Sans', sans-serif;\n  font-style: italic;\n  font-weight: bold;\n  font-size: 60px;\n  margin: 0;\n  margin-top: 35px;\n  color: white;\n}\n\n#background {\n  padding: 100px;\n  display: flex;\n  justify-content: center;\n}\n\n#main {\n  background-color: var(--nav-color);\n  color: white;\n  font-size: 30px;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: bold;\n  padding: 20px;\n  text-align: center;\n  border-radius: 20px;\n  width: 60vw;\n  text-align: center;\n  border: 5px solid rgb(0, 25, 78);\n}\n\n#main.menu {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n}\n\n.pizza {\n  background-color: rgba(3, 39, 117, 0.4);\n  margin: 10px;\n  padding: 10px;\n  border: 0.5px solid white;\n  border-radius: 10px;\n  transition: all 0.2s ease;\n  box-shadow: 3px 3px;\n}\n\n.pizza:hover {\n  transform: translateY(-10px);\n}\n\n.pizza img {\n  max-width: 350px;\n}\n\n#main img {\n  border-radius: 10px;\n}\n\n#email {\n  color: rgb(77, 177, 243);\n}\n\n#footer {\n  background-color: var(--nav-color);\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#footer a {\n  text-decoration: none;\n  color: white;\n}\n\n#footer > div:last-child {\n  padding-bottom: 10px;\n  transition: all 0.2s ease;\n}\n\n#footer > div:last-child:hover {\n  transform: translateY(-5px);\n}\n\n#footer img {\n  padding-left: 10px;\n  position: relative;\n  top: 5px;\n}\n",""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,m="".concat(l," ").concat(d);r[l]=d+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=a(p,o);o.byIndex=c,n.splice(c,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},354:(e,n,t)=>{e.exports=t.p+"e2b78f5fd8423792f5cd.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(){const e=document.querySelector("#main"),n=[document.createElement("p"),document.createElement("p"),document.createElement("p")];n[0].textContent="PizzaPodi provides the tastiest pizzas in the region",n[1].textContent="With decades of experience in our hands, we employ some of the best chefs, so that you can enjoy the best food",n[2].textContent="Ask us about our daily specialties and promos! We may even give you some extras if you ask nicely ;)";const t=document.createElement("img");t.src="../media/home.jpg",t.style.width="500px";const o=document.createElement("p");o.textContent="Your best pizza, since 1998",e.append(...n,t,o)}class n{constructor(e,n,t){this.name=e,this.image=n,this.ingredients=t}}var o=t(379),a=t.n(o),r=t(795),i=t.n(r),c=t(569),s=t.n(c),l=t(565),d=t.n(l),m=t(216),u=t.n(m),p=t(589),f=t.n(p),g=t(426),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,function(){const e=document.querySelector("#content"),n=document.createElement("div");n.id="navbar";const t=[document.createElement("p"),document.createElement("a"),document.createElement("a"),document.createElement("a")];t[0].id="logo",t[0].textContent="PizzaPodi",t[1].id="home",t[1].textContent="Home",t[2].id="menu",t[2].textContent="Menu",t[3].id="contact",t[3].textContent="Contact";const o=document.createElement("div");o.id="background";const a=document.createElement("div");a.id="main";const r=document.createElement("div");r.id="footer";const i=document.createElement("a");i.textContent="2022 © Hernán Marrapodi",i.href="https://github.com/marrahenzo";const c=document.createElement("p");c.textContent="Photos by Aurélien Lemasson-Théobald, Brenna Huff and Tamara Malaniy from unsplash.com as well as photos from pizzasargentinas.com";const s=document.createElement("a");s.href="https://github.com/marrahenzo";const l=document.createElement("img");l.src="../media/github-logo.png",l.width=20;const d=document.createElement("div");n.append(...t),o.append(a),s.append(l),d.append(i,s),r.append(c,d),e.append(n,o,r)}(),e(),document.querySelector("#content");const h=document.querySelector("#main"),x=document.querySelector("#home"),b=document.querySelector("#menu"),y=document.querySelector("#contact");function w(){x.className="",b.className="",y.className=""}x.className="active",x.addEventListener("click",(()=>{h.innerHTML="",h.className="",e(),w(),x.className="active"})),b.addEventListener("click",(()=>{h.innerHTML="",h.className="menu",function(){const e=document.querySelector("#main"),t=[new n("Primavera","../media/primavera.jpg","Tomato sauce, Mozarella, Tomato, Olives, Hard-boiled eggs and Oregano"),new n("Ham and Eggs","../media/hamandeggs.jpg","Tomato sauce, Mozarella, Ham, Olives, Hard-boiled eggs and Oregano"),new n("Fugazza","../media/fugazza.jpg","Provolone, Onions, Olives and Oregano"),new n("Fried Eggs","../media/friedeggs.jpg","Tomato sauce, Mozzarella, 4 Fried eggs, Olive oil and Oregano"),new n("Hard-Boiled Eggs","../media/boiledeggs.jpg","Tomato sauce, Mozarella, Hard-boiled eggs, Olive oil and Oregano"),new n("Corn","../media/corn.jpg","Tomato sauce, Mozarella, Corn, Olives and Oregano"),new n("Roquefort","../media/roquefort.jpg","Tomato Sauce, Mozarella, Roquefort, Olives and Oregano"),new n("Napolitana","../media/napolitana.jpg","Tomato sauce, Mozarella, Tomato, Provolone, Garlic, Parsley, Olives and Oregano")];for(let n of t){let t=document.createElement("div"),o=document.createElement("p");o.textContent=n.name;let a=document.createElement("img");a.src=n.image;let r=document.createElement("p");r.textContent=n.ingredients,t.className="pizza",t.append(o,a,r),e.append(t)}}(),w(),b.className="active"})),y.addEventListener("click",(()=>{h.innerHTML="",h.className="",function(){const e=document.querySelector("#main"),n=document.createElement("p");n.textContent="You can find us at Calle Falsa 123, Ciudad Autónoma de Buenos Aires, Argentina";const t=document.createElement("p");t.textContent="Call Us! 📞 +54 9 11 1234 5678";const o=document.createElement("img");o.src="../media/contact.jpg",o.style.width="500px";const a=document.createElement("p");a.textContent="Questions? Complaints? Just wanna talk to someone? Send us an email at ";const r=document.createElement("span");r.id="email",r.textContent="pizzapodi@totallylegitemail.com",a.append(r),e.append(n,o,t,a)}(),w(),y.className="active"}))})()})();