(()=>{"use strict";var n={122:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(537),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"*{\n    box-sizing: border-box;\n     outline: 0;\n   }\n   .error-text{\n     font-size: 12px;\n     \n     color: rgb(207, 18, 18);\n   }\n   body{\n     background: #00ffff;\n     font-family: 'Open sans', sans-serif;\n     font-size: 1.3em;\n     line-height: 1.5em;\n     margin:0px ;\n       padding: 0px;\n   }\n   \n   .container{\n       width: 750px;\n       background: #fff;\n       padding: 20px;\n       border-radius: 10px;\n       margin: 50px auto;\n   }\n   form input, form label, form button {\n     display: block;\n     width: 100%;\n     margin-bottom: 10px;\n   }\n   \n   form input {\n     font-size: 24px;\n     height: 50px;\n     padding: 0 20px;\n   }\n   form button {\n     border: none;\n     background: #f1f1f1;\n     color: #fff;\n     font-size: 18px;\n     font-weight: 700;\n     height: 50px;\n     cursor: pointer;\n     margin-top: 30px;\n   }\n\n   .container h1{\n     text-align: center;\n     margin-bottom: 40px;\n   }\n   \n   .resuntado{\n    font-size: 2em;\n     color: green;\n     text-align: center;\n     font-weight: bold;\n     padding: 5px;\n   }\n   \n   \n   ","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,sBAAsB;KACrB,UAAU;GACZ;GACA;KACE,eAAe;;KAEf,uBAAuB;GACzB;GACA;KACE,mBAAmB;KACnB,oCAAoC;KACpC,gBAAgB;KAChB,kBAAkB;KAClB,WAAW;OACT,YAAY;GAChB;;GAEA;OACI,YAAY;OACZ,gBAAgB;OAChB,aAAa;OACb,mBAAmB;OACnB,iBAAiB;GACrB;GACA;KACE,cAAc;KACd,WAAW;KACX,mBAAmB;GACrB;;GAEA;KACE,eAAe;KACf,YAAY;KACZ,eAAe;GACjB;GACA;KACE,YAAY;KACZ,mBAAmB;KACnB,WAAW;KACX,eAAe;KACf,gBAAgB;KAChB,YAAY;KACZ,eAAe;KACf,gBAAgB;GAClB;;GAEA;KACE,kBAAkB;KAClB,mBAAmB;GACrB;;GAEA;IACC,cAAc;KACb,YAAY;KACZ,kBAAkB;KAClB,iBAAiB;KACjB,YAAY;GACd",sourcesContent:["*{\r\n    box-sizing: border-box;\r\n     outline: 0;\r\n   }\r\n   .error-text{\r\n     font-size: 12px;\r\n     \r\n     color: rgb(207, 18, 18);\r\n   }\r\n   body{\r\n     background: #00ffff;\r\n     font-family: 'Open sans', sans-serif;\r\n     font-size: 1.3em;\r\n     line-height: 1.5em;\r\n     margin:0px ;\r\n       padding: 0px;\r\n   }\r\n   \r\n   .container{\r\n       width: 750px;\r\n       background: #fff;\r\n       padding: 20px;\r\n       border-radius: 10px;\r\n       margin: 50px auto;\r\n   }\r\n   form input, form label, form button {\r\n     display: block;\r\n     width: 100%;\r\n     margin-bottom: 10px;\r\n   }\r\n   \r\n   form input {\r\n     font-size: 24px;\r\n     height: 50px;\r\n     padding: 0 20px;\r\n   }\r\n   form button {\r\n     border: none;\r\n     background: #f1f1f1;\r\n     color: #fff;\r\n     font-size: 18px;\r\n     font-weight: 700;\r\n     height: 50px;\r\n     cursor: pointer;\r\n     margin-top: 30px;\r\n   }\r\n\r\n   .container h1{\r\n     text-align: center;\r\n     margin-bottom: 40px;\r\n   }\r\n   \r\n   .resuntado{\r\n    font-size: 2em;\r\n     color: green;\r\n     text-align: center;\r\n     font-weight: bold;\r\n     padding: 5px;\r\n   }\r\n   \r\n   \r\n   "],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var f=0;f<n.length;f++){var s=[].concat(n[f]);t&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),e&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=e):s[2]=e),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),r.push(s))}},r}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],f=t.base?u[0]+t.base:u[0],s=i[f]||0,p="".concat(f," ").concat(s);i[f]=s+1;var l=e(p),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)r[l].references++,r[l].updater(A);else{var d=o(A,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:d,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var u=t(n,o),f=0;f<i.length;f++){var s=e(i[f]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}i=u}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(r)}function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}function t(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==n(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var o=t.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var o=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!1,value:r.replace(/\D+/g,"")})}var e,o,i;return e=n,i=[{key:"geraDigito",value:function(n){var e,t=0,o=n.length+1,i=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw a}}}}(n);try{for(i.s();!(e=i.n()).done;){var a=e.value;t+=o*Number(a),o--}}catch(n){i.e(n)}finally{i.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(o=[{key:"eSequencia",value:function(){return this.cpfLimpo.charAt(0).repeat(11)==this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var n=this.cpfLimpo.slice(0,-2),r=this.geraDigito(n),e=this.geraDigito(n+r);this.novoCpf=n+r+e}},{key:"Valida",value:function(){return!!this.cpfLimpo&&11==this.cpfLimpo.length&&"string"==typeof this.cpfLimpo&&!this.eSequencia()&&(this.geraNovoCpf(),this.novoCpf==this.cpfLimpo)}}])&&t(e.prototype,o),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),n}();function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function a(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,(void 0,o=function(n,r){if("object"!==i(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var t=e.call(n,"string");if("object"!==i(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t.key),"symbol"===i(o)?o:String(o)),t)}var o}console.log("até aqui");var c,u=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e;return r=n,e=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(n-r)+r))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),r=o.geraDigito(n),e=n+r+o.geraDigito(n+r);return this.formatado(e)}}],e&&a(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),n}(),f=e(379),s=e.n(f),p=e(795),l=e.n(p),A=e(569),d=e.n(A),m=e(565),v=e.n(m),g=e(216),y=e.n(g),b=e(589),h=e.n(b),C=e(122),x={};x.styleTagTransform=h(),x.setAttributes=v(),x.insert=d().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=y(),s()(C.Z,x),C.Z&&C.Z.locals&&C.Z.locals,c=new u,document.querySelector(".resuntado").innerHTML=c.geraNovoCpf()})()})();
//# sourceMappingURL=bundle.js.map