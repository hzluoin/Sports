(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4c58bda"],{1325:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return u}));var o=n("a142"),i=!1;if(!o["g"])try{var r={};Object.defineProperty(r,"passive",{get:function(){i=!0}}),window.addEventListener("test-passive",null,r)}catch(l){}function a(t,e,n,r){void 0===r&&(r=!1),o["g"]||t.addEventListener(e,n,!!i&&{capture:!1,passive:r})}function c(t,e,n){o["g"]||t.removeEventListener(e,n)}function s(t){t.stopPropagation()}function u(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&s(t)}},1812:function(t,e,n){},"19bf":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"base-panel"},[o("div",{staticClass:"title"},[o("img",{staticClass:"back",attrs:{src:n("1d96")},on:{click:function(e){return t.$router.push({name:"Home"})}}}),o("div",[o("span",{staticClass:"name"},[t._v(t._s(t.matchDetails.name))]),o("span",{staticClass:"time"},[t._v(t._s(t.matchDetails.matchTime))])]),o("img",{ref:"share",staticClass:"share",attrs:{src:n("eb30")}})]),o("div",{staticClass:"content"},[o("div",{staticClass:"home_team"},[o("img",{staticClass:"team_logo",attrs:{src:t.matchDetails.hteam_logo},on:{error:t.errorImg}}),o("span",{staticClass:"team_name line-word-hidden"},[t._v(t._s(t.matchDetails.hteam_name))])]),o("div",{staticClass:"info"},[o("span",{staticClass:"score"},[t._v(t._s(t.matchDetails.score))]),o("div",{staticClass:"btn-group"},[o("button",{staticClass:"btn",on:{click:function(e){return t.$emit("play",2)}}},[o("img",{staticClass:"animation",attrs:{src:n("207d")}}),o("span",[t._v("动画")])]),o("button",{staticClass:"btn",on:{click:function(e){return t.$emit("play",1)}}},[o("img",{staticClass:"video",attrs:{src:n("50d7")}}),o("span",[t._v("视频")])])])]),o("div",{staticClass:"guest_team"},[o("img",{staticClass:"team_logo",attrs:{src:t.matchDetails.ateam_logo},on:{error:t.errorImg}}),o("span",{staticClass:"team_name line-word-hidden"},[t._v(t._s(t.matchDetails.ateam_name))])])])])},i=[],r=(n("433b"),n("d399")),a=n("b311"),c=n.n(a),s=n("a313"),u=n.n(s),l={name:"BasePanel",props:{matchDetails:{type:Object,default:function(){return{name:"英超  第15轮",matchTime:"12-24 21:00",hteam_name:"热刺",ateam_name:"曼城",score:"2 - 1",des:"加时 12",halfScore:"半场 0 - 0"}}}},watch:{},data:function(){return{loading:!1}},created:function(){var t=this,e=new c.a(".share",{target:function(){return t.$refs.share}});e.on("success",(function(t){Object(r["a"])("地址已复制")})),e.on("error",(function(t){Object(r["a"])("地址复制失败")}))},methods:{errorImg:function(t){t.target.src=u.a}}},f=l,d=(n("2276"),n("2877")),h=Object(d["a"])(f,o,i,!1,null,"6b0c257e",null);e["default"]=h.exports},"1a44":function(t,e,n){},"1d96":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAfCAYAAACLSL/LAAACoklEQVRYR8WYTYhNYRjHf3+fEcrQrCyUsh4LZcFCYUZYDIlQZBaILNCQBUqUKZF8FIp8lygfiawUG2JBFFGkSEkhyudfz3Tczrxzx9y53XM9u3PueZ/nd973+fifK6o025OBI8BooF3SsSpdlV2mapzZbgEuAEOz9d+AUZK+VOOv3Jo+g9meC5wBBuccfgca/huY7SVAHNmAHJSBtZL212q3wk/FO2Z7JXAA6JcD+A2skXSollAVg9neAHQkL/ITWC7pZK2hKgKzvQ3YmgSPnFokKQqgEPvnUdreDaxLIn8F5km6XghR5rQsmO3Io4PAiiT4Z2COpFtFQpU9SttRcceBxUnwD8BMSXeLhuoGZnsQcA5oTYK/A2ZIelgPqC5gtqOLXwSak+CvgWmSntULqgRmewRwFZiSBH+RQb2sJ1QnmO0GICpsYhL8CTBd0pu/922PAdqAkQWBRsN+AJwOsNipWUmg+LFZ0vscVOTfU2BsQVB5t+0B9gkYnrsb1E2SHuWftD0OeF4HqAhxJcCiNSxNAr7KcqsEYrs/cA+YUDBciIK2AAv5cj4aZxLwbZZjj3PHOQwI2VNojkm609n5bQ8ETgALE7jIsRZJ9wvepW7uSyMpG0OHs6rLP/gRmC3pdj3husxK23G9N4RfAhGSuVXSzXrB9TTEdwCbE4jQ9QskXaoHXI+yx/YmYGciDn9EBUs6WzRcb3psNbAvkdO/gFWS4tOtMOtV89teBhwFoo+VOgewXtKeosh6BcvayXzgFBBjKW9bJG0vAq4isAwu5mk04iEJSIekjbWGqxgsg5sKXAZiAuRtl6QolppZn8AyuEnAtWQsxeCPL/FoxjWxPoNlcE3ADaAxowiF0igpel1NrCqwDG48EFUZ//ZEEQRozewPZijPnURVNiQAAAAASUVORK5CYII="},2276:function(t,e,n){"use strict";n("2b73")},"25bb":function(t,e,n){},2638:function(t,e,n){"use strict";function o(){return o=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)}var i=["attrs","props","domProps"],r=["class","style","directives"],a=["on","nativeOn"],c=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==i.indexOf(n))t[n]=o({},t[n],e[n]);else if(-1!==r.indexOf(n)){var c=t[n]instanceof Array?t[n]:[t[n]],u=e[n]instanceof Array?e[n]:[e[n]];t[n]=c.concat(u)}else if(-1!==a.indexOf(n))for(var l in e[n])if(t[n][l]){var f=t[n][l]instanceof Array?t[n][l]:[t[n][l]],d=e[n][l]instanceof Array?e[n][l]:[e[n][l]];t[n][l]=f.concat(d)}else t[n][l]=e[n][l];else if("hook"==n)for(var h in e[n])t[n][h]=t[n][h]?s(t[n][h],e[n][h]):e[n][h];else t[n]=e[n];else t[n]=e[n];return t}),{})},s=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=c},"2b73":function(t,e,n){},3875:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("1325"),i=10;function r(t,e){return t>e&&t>i?"horizontal":e>t&&e>i?"vertical":""}var a={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY),this.direction=this.direction||r(this.offsetX,this.offsetY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var e=this.onTouchStart,n=this.onTouchMove,i=this.onTouchEnd;Object(o["b"])(t,"touchstart",e),Object(o["b"])(t,"touchmove",n),i&&(Object(o["b"])(t,"touchend",i),Object(o["b"])(t,"touchcancel",i))}}}},"3cd0":function(t,e,n){},"433b":function(t,e,n){"use strict";n("3cd0"),n("1812"),n("1a44"),n("acc2"),n("5e5e"),n("25bb"),n("7f98")},"5e5e":function(t,e,n){},"5fbe":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("1325"),i=0;function r(t){var e="binded_"+i++;function n(){this[e]||(t.call(this,o["b"],!0),this[e]=!0)}function r(){this[e]&&(t.call(this,o["a"],!1),this[e]=!1)}return{mounted:n,activated:n,deactivated:r,beforeDestroy:r}}},"6f2f":function(t,e,n){"use strict";var o=n("2638"),i=n.n(o),r=n("d282"),a=n("a142"),c=n("ba31"),s=Object(r["a"])("info"),u=s[0],l=s[1];function f(t,e,n,o){var r=e.dot,s=e.info,u=Object(a["c"])(s)&&""!==s;if(r||u)return t("div",i()([{class:l({dot:r})},Object(c["a"])(o,!0)]),[r?"":e.info])}f.props={dot:Boolean,info:[Number,String]},e["a"]=u(f)},"7f98":function(t,e,n){},a142:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"g",(function(){return r})),n.d(e,"h",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"a",(function(){return f}));var o=n("2b0e"),i="undefined"!==typeof window,r=o["default"].prototype.$isServer;function a(){}function c(t){return void 0!==t&&null!==t}function s(t){return"function"===typeof t}function u(t){return null!==t&&"object"===typeof t}function l(t){return u(t)&&s(t.then)&&s(t.catch)}function f(t,e){var n=e.split("."),o=t;return n.forEach((function(t){var e;o=null!=(e=o[t])?e:""})),o}},a8c1:function(t,e,n){"use strict";function o(t){return t===window}n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return d}));var i=/scroll|auto/i;function r(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var o=window.getComputedStyle(n),r=o.overflowY;if(i.test(r))return n;n=n.parentNode}return e}function a(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}function c(t,e){"scrollTop"in t?t.scrollTop=e:t.scrollTo(t.scrollX,e)}function s(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function u(t){c(window,t),c(document.body,t)}function l(t,e){if(o(t))return 0;var n=e?a(e):s();return t.getBoundingClientRect().top+n}function f(t){return o(t)?t.innerHeight:t.getBoundingClientRect().height}function d(t){return o(t)?0:t.getBoundingClientRect().top}},acc2:function(t,e,n){},ad06:function(t,e,n){"use strict";var o=n("2638"),i=n.n(o),r=n("d282"),a=n("ea8e"),c=n("ba31"),s=n("6f2f"),u=Object(r["a"])("icon"),l=u[0],f=u[1];function d(t){return!!t&&-1!==t.indexOf("/")}var h={medel:"medal","medel-o":"medal-o","calender-o":"calendar-o"};function p(t){return t&&h[t]||t}function v(t,e,n,o){var r,u=p(e.name),l=d(u);return t(e.tag,i()([{class:[e.classPrefix,l?"":e.classPrefix+"-"+u],style:{color:e.color,fontSize:Object(a["a"])(e.size)}},Object(c["a"])(o,!0)]),[n.default&&n.default(),l&&t("img",{class:f("image"),attrs:{src:u}}),t(s["a"],{attrs:{dot:e.dot,info:null!=(r=e.badge)?r:e.info}})])}v.props={dot:Boolean,name:String,size:[Number,String],info:[Number,String],badge:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:f()}},e["a"]=l(v)},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var o=n(3),i=n(4);function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return a(t,e,n);if(o.nodeList(t))return c(t,e,n);if(o.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function s(t,e,n){return i(document.body,t,e,n)}t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var o=n(5);function i(t,e,n,o,i){var r=a.apply(this,arguments);return t.addEventListener(n,r,i),{destroy:function(){t.removeEventListener(n,r,i)}}}function r(t,e,n,o,r){return"function"===typeof t.addEventListener?i.apply(null,arguments):"function"===typeof n?i.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return i(t,e,n,o,r)})))}function a(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}t.exports=r},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}function i(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=i},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),u=s,l=n(1),f=n.n(l),d=n(2),h=n.n(d),p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var b=function(t){function e(t,n){m(this,e);var o=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return g(e,t),v(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===p(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=h()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return A("action",t)}},{key:"defaultTarget",value:function(t){var e=A("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return A("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(f.a);function A(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e["default"]=b}])["default"]}))},ba31:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var o=n("c31d"),i=n("2b0e"),r=["ref","style","class","attrs","refInFor","nativeOn","directives","staticClass","staticStyle"],a={nativeOn:"on"};function c(t,e){var n=r.reduce((function(e,n){return t.data[n]&&(e[a[n]||n]=t.data[n]),e}),{});return e&&(n.on=n.on||{},Object(o["a"])(n.on,t.data.on)),n}function s(t,e){var n=new i["default"]({el:document.createElement("div"),props:t.props,render:function(n){return n(t,Object(o["a"])({props:this.$props},e))}});return document.body.appendChild(n.$el),n}},c31d:function(t,e,n){"use strict";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o.apply(this,arguments)}n.d(e,"a",(function(){return o}))},d282:function(t,e,n){"use strict";function o(t,e){return e?"string"===typeof e?" "+t+"--"+e:Array.isArray(e)?e.reduce((function(e,n){return e+o(t,n)}),""):Object.keys(e).reduce((function(n,i){return n+(e[i]?o(t,i):"")}),""):""}function i(t){return function(e,n){return e&&"string"!==typeof e&&(n=e,e=""),e=e?t+"__"+e:t,""+e+o(e,n)}}n.d(e,"a",(function(){return k}));var r=n("a142"),a=/-(\w)/g;function c(t){return t.replace(a,(function(t,e){return e.toUpperCase()}))}var s={methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,o=this.$scopedSlots,i=o[t];return i?i(e):n[t]}}};function u(t){var e=this.name;t.component(e,this),t.component(c("-"+e),this)}function l(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach((function(t){e[t]||(e[t]=function(){return n[t]})})),e}function f(t){return{functional:!0,props:t.props,model:t.model,render:function(e,n){return t(e,n.props,l(n),n)}}}function d(t){return function(e){return Object(r["d"])(e)&&(e=f(e)),e.functional||(e.mixins=e.mixins||[],e.mixins.push(s)),e.name=t,e.install=u,e}}var h=n("2b0e"),p=Object.prototype.hasOwnProperty;function v(t,e,n){var o=e[n];Object(r["c"])(o)&&(p.call(t,n)&&Object(r["e"])(o)?t[n]=m(Object(t[n]),e[n]):t[n]=o)}function m(t,e){return Object.keys(e).forEach((function(n){v(t,e,n)})),t}var y={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(t,e){return t+"年"+e+"月"},rangePrompt:function(t){return"选择天数不能超过 "+t+" 天"}},vanCascader:{select:"请选择"},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}},g=h["default"].prototype,b=h["default"].util.defineReactive;b(g,"$vantLang","zh-CN"),b(g,"$vantMessages",{"zh-CN":y});var A={messages:function(){return g.$vantMessages[g.$vantLang]},use:function(t,e){var n;g.$vantLang=t,this.add((n={},n[t]=e,n))},add:function(t){void 0===t&&(t={}),m(g.$vantMessages,t)}};function O(t){var e=c(t)+".";return function(t){for(var n=A.messages(),o=Object(r["a"])(n,e+t)||Object(r["a"])(n,t),i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];return Object(r["d"])(o)?o.apply(void 0,a):o}}function k(t){return t="van-"+t,[d(t),i(t),O(t)]}},d399:function(t,e,n){"use strict";var o=n("c31d"),i=n("2b0e"),r=n("d282"),a=n("a142"),c=0;function s(t){t?(c||document.body.classList.add("van-toast--unclickable"),c++):(c--,c||document.body.classList.remove("van-toast--unclickable"))}var u={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]}},l=n("2638"),f=n.n(l),d=n("ba31"),h=n("1325"),p=Object(r["a"])("overlay"),v=p[0],m=p[1];function y(t){Object(h["c"])(t,!0)}function g(t,e,n,i){var r=Object(o["a"])({zIndex:e.zIndex},e.customStyle);return Object(a["c"])(e.duration)&&(r.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",f()([{directives:[{name:"show",value:e.show}],style:r,class:[m(),e.className],on:{touchmove:e.lockScroll?y:a["h"]}},Object(d["a"])(i,!0)]),[null==n.default?void 0:n.default()])])}g.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var b=v(g);function A(t){var e=t.parentNode;e&&e.removeChild(t)}var O={className:"",customStyle:{}};function k(t){return Object(d["b"])(b,{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function S(t){var e=u.find(t);if(e){var n=t.$el,i=e.config,r=e.overlay;n&&n.parentNode&&n.parentNode.insertBefore(r.$el,n),Object(o["a"])(r,O,i,{show:!0})}}function w(t,e){var n=u.find(t);if(n)n.config=e;else{var o=k(t);u.stack.push({vm:t,config:e,overlay:o})}S(t)}function C(t){var e=u.find(t);e&&(e.overlay.show=!1)}function x(t){var e=u.find(t);e&&A(e.overlay.$el)}var E=n("a8c1"),j=n("3875");function T(t){return"string"===typeof t?document.querySelector(t):t()}function L(t){var e=void 0===t?{}:t,n=e.ref,o=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,i=n?this.$refs[n]:this.$el;e?t=T(e):this.$parent&&(t=this.$parent.$el),t&&t!==i.parentNode&&t.appendChild(i),o&&o.call(this)}}}}var P=n("5fbe"),B={mixins:[Object(P["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?h["b"]:h["a"];e(window,"popstate",this.onPopstate)}}}},I={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function N(t){return void 0===t&&(t={}),{mixins:[j["a"],B,L({afterPortal:function(){this.overlay&&S()}})],props:I,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var n=e?"open":"close";this.inited=this.inited||this.value,this[n](),t.skipToggleEvent||this.$emit(n)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){x(this),this.opened&&this.removeLock(),this.getContainer&&A(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(u.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock())},addLock:function(){this.lockScroll&&(Object(h["b"])(document,"touchstart",this.touchStart),Object(h["b"])(document,"touchmove",this.onTouchMove),u.lockCount||document.body.classList.add("van-overflow-hidden"),u.lockCount++)},removeLock:function(){this.lockScroll&&u.lockCount&&(u.lockCount--,Object(h["a"])(document,"touchstart",this.touchStart),Object(h["a"])(document,"touchmove",this.onTouchMove),u.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(C(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",n=Object(E["c"])(t.target,this.$el),o=n.scrollHeight,i=n.offsetHeight,r=n.scrollTop,a="11";0===r?a=i>=o?"00":"01":r+i>=o&&(a="10"),"11"===a||"vertical"!==this.direction||parseInt(a,2)&parseInt(e,2)||Object(h["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?w(t,{zIndex:u.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):C(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++u.zIndex+t}}}}var R=n("ad06"),_=n("ea8e"),F=Object(r["a"])("loading"),z=F[0],M=F[1];function $(t,e){if("spinner"===e.type){for(var n=[],o=0;o<12;o++)n.push(t("i"));return n}return t("svg",{class:M("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function D(t,e,n){if(n.default){var o,i={fontSize:Object(_["a"])(e.textSize),color:null!=(o=e.textColor)?o:e.color};return t("span",{class:M("text"),style:i},[n.default()])}}function U(t,e,n,o){var i=e.color,r=e.size,a=e.type,c={color:i};if(r){var s=Object(_["a"])(r);c.width=s,c.height=s}return t("div",f()([{class:M([a,{vertical:e.vertical}])},Object(d["a"])(o,!0)]),[t("span",{class:M("spinner",a),style:c},[$(t,e)]),D(t,e,n)])}U.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}};var X=z(U),H=Object(r["a"])("toast"),Y=H[0],Z=H[1],Q=Y({mixins:[N()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,s(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,o=this.iconPrefix,i=this.loadingType,r=e||"success"===n||"fail"===n;return r?t(R["a"],{class:Z("icon"),attrs:{classPrefix:o,name:e||n}}):"loading"===n?t(X,{class:Z("loading"),attrs:{type:i}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if(Object(a["c"])(n)&&""!==n)return"html"===e?t("div",{class:Z("text"),domProps:{innerHTML:n}}):t("div",{class:Z("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[Z([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),K={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},V={},q=[],G=!1,W=Object(o["a"])({},K);function J(t){return Object(a["e"])(t)?t:{message:t}}function tt(t){return document.body.contains(t)}function et(){if(a["g"])return{};if(q=q.filter((function(t){return!t.$el.parentNode||tt(t.$el)})),!q.length||G){var t=new(i["default"].extend(Q))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),q.push(t)}return q[q.length-1]}function nt(t){return Object(o["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function ot(t){void 0===t&&(t={});var e=et();return e.value&&e.updateZIndex(),t=J(t),t=Object(o["a"])({},W,V[t.type||W.type],t),t.clear=function(){e.value=!1,t.onClose&&(t.onClose(),t.onClose=null),G&&!a["g"]&&e.$on("closed",(function(){clearTimeout(e.timer),q=q.filter((function(t){return t!==e})),A(e.$el),e.$destroy()}))},Object(o["a"])(e,nt(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var it=function(t){return function(e){return ot(Object(o["a"])({type:t},J(e)))}};["loading","success","fail"].forEach((function(t){ot[t]=it(t)})),ot.clear=function(t){q.length&&(t?(q.forEach((function(t){t.clear()})),q=[]):G?q.shift().clear():q[0].clear())},ot.setDefaultOptions=function(t,e){"string"===typeof t?V[t]=e:Object(o["a"])(W,t)},ot.resetDefaultOptions=function(t){"string"===typeof t?V[t]=null:(W=Object(o["a"])({},K),V={})},ot.allowMultiple=function(t){void 0===t&&(t=!0),G=t},ot.install=function(){i["default"].use(Q)},i["default"].prototype.$toast=ot;e["a"]=ot},ea8e:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return f}));var o,i=n("a142");function r(t){return/^\d+(\.\d+)?$/.test(t)}function a(t){if(Object(i["c"])(t))return t=String(t),r(t)?t+"px":t}function c(){if(!o){var t=document.documentElement,e=t.style.fontSize||window.getComputedStyle(t).fontSize;o=parseFloat(e)}return o}function s(t){return t=t.replace(/rem/g,""),+t*c()}function u(t){return t=t.replace(/vw/g,""),+t*window.innerWidth/100}function l(t){return t=t.replace(/vh/g,""),+t*window.innerHeight/100}function f(t){if("number"===typeof t)return t;if(i["b"]){if(-1!==t.indexOf("rem"))return s(t);if(-1!==t.indexOf("vw"))return u(t);if(-1!==t.indexOf("vh"))return l(t)}return parseFloat(t)}},eb30:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABIFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9D4RmfAAAAX3RSTlMAAQIDBAUHCAkLEBMUFRYXGBscIyQmKCwzNzo+SE9RVFZXWFliZmh1eHl6hoeJiouOkpWWl5idnqKrrK+wtLm7vsLFxsjMz9HS09TX3d7f4ePk6err7PP29/j5+vv9/vVhPhcAAAG7SURBVDjLjZRrX9MwFMZjOwWduk2ms95holVrmWxeqG44GeAUcIwoCyr/7/8teNFsv6TZWp5Xp6dPcnJujxAmvCDcGsqzXw9FLmrRiBTf8mjltmKKJIe3JjVpPOhtVhbSSh0AVNKs5r5uuQswibM3re+88a37ugD9evb8yn/4dMVwdABavhPo7jmwaeQB8CpD8u80Go0vANGsLhJo2bk93/47qxUvtLcN9K24wU9MDHQ/FEysPJ6cWjzepe4IiE3e/VOAvfdRFG2cAT+up3MwAmXWz9sHDtKxiIE/9/R7sq19BhylJ2/+A5raHxq2EEKIBHiUmjeUUcYEsPor4XBqP/4aX53aQxibvGvnC6bs96xOKW4DHzKc+u7xU6GgV0T8CCeXIvZACXmJ0AOQTjLziGP47pTnlkusAltOwf0TeGkTm0DotvDB57dLNjEBAncoHFQUjLw5Y5ZFrNfBHdxMWyagavNXwVqyPtBetFwGWoAs56yrxmuA1SIBEH4LoFMoKfU+QLdUIFKVeALQXc6VvWozSXW1U8oR0t5grD/kar40a6h2uUDsARhFtYXt8oIwGUql5DAJA8/6dQEZ16l9sMTcbQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=chunk-d4c58bda.68c214ff.js.map