(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91b0854e"],{1276:function(t,e,i){"use strict";var a=i("d784"),n=i("44e7"),s=i("825a"),o=i("1d80"),r=i("4840"),l=i("8aa5"),c=i("50c4"),u=i("14c3"),d=i("9263"),h=i("d039"),v=[].push,f=Math.min,p=4294967295,m=!h((function(){return!RegExp(p,"y")}));a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(o(this)),s=void 0===i?p:i>>>0;if(0===s)return[];if(void 0===t)return[a];if(!n(t))return e.call(a,t,s);var r,l,c,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,m=new RegExp(t.source,h+"g");while(r=d.call(m,a)){if(l=m.lastIndex,l>f&&(u.push(a.slice(f,r.index)),r.length>1&&r.index<a.length&&v.apply(u,r.slice(1)),c=r[0].length,f=l,u.length>=s))break;m.lastIndex===r.index&&m.lastIndex++}return f===a.length?!c&&m.test("")||u.push(""):u.push(a.slice(f)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var n=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,n,i):a.call(String(n),e,i)},function(t,n){var o=i(a,t,this,n,a!==e);if(o.done)return o.value;var d=s(t),h=String(this),v=r(d,RegExp),g=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),y=new v(m?d:"^(?:"+d.source+")",b),C=void 0===n?p:n>>>0;if(0===C)return[];if(0===h.length)return null===u(y,h)?[h]:[];var S=0,k=0,x=[];while(k<h.length){y.lastIndex=m?k:0;var A,O=u(y,m?h:h.slice(k));if(null===O||(A=f(c(y.lastIndex+(m?0:k)),h.length))===S)k=l(h,k,g);else{if(x.push(h.slice(S,k)),x.length===C)return x;for(var _=1;_<=O.length-1;_++)if(x.push(O[_]),x.length===C)return x;k=S=A}}return x.push(h.slice(S)),x}]}),!m)},"13d5":function(t,e,i){"use strict";var a=i("23e7"),n=i("d58f").left,s=i("a640"),o=i("ae40"),r=i("2d00"),l=i("605d"),c=s("reduce"),u=o("reduce",{1:0}),d=!l&&r>79&&r<83;a({target:"Array",proto:!0,forced:!c||!u||d},{reduce:function(t){return n(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},1812:function(t,e,i){},"237a":function(t,e,i){},"25bb":function(t,e,i){},"4a98":function(t,e,i){},"5e5e":function(t,e,i){},6798:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAADfklEQVRIS61Wz2tcVRT+vvveG1tFKtZKseh/IK4KBmzNpM3EmYkto6S2uGgXBbNoty66qFBBFwUrtNCVCzdCJ6ZJkzSdzkQTK0pBBRe6VARFqRiqTaHpvB+fvMn8eG/mzUwa5m7eu5wf3znnfufcS/RZKk6kAj34IJBeJvCzAs3Ya3e+4Ds/uP1s2+XsZ+BdyR8XcDqmJ/4rg3nHr17lsfLv/Xw05D3BJNCfys8K2AMB6NQWge8schrP3P+K6RWvF3BvsOL4kAdd3EzkpFYJXjOeNctjc38m2fQE8z/Pnw+EdLyEkQzDbMMVemlkLgUkbwu8amv71zwy5fcto4rZXR7NAgCr6WwzKUZ0SP0dENecdRb59vW7XTPzpnMnJU5GQm5LoyOl7nKDVTvFo4lgeg/Gfyk3J2D3IybTXZ3mTCKYO5vfJ+lCQ9g8joQjavce1Y06t42fnFl1JvsxoVc2DE3NnxDEjq7FiV5yU7Mh9JNduHGiIzNdz+12q5oDteGlbTVAutUrSW6Ic/bh0lwHmD+fm/SD4OQgQGoUItbsJ9ezTK+sx8BUnLC8bfcWROyKN1AEOgDqlY00WISZUXlA0OCK83rpfEOj6cldGEsLqAnqB5U0olqyqIf2Bq+7cDzzFgs3fukA8xbGLgbA0KDobsAf7fFS80iaZdT8yB7PcmYU1InR5H39yKN9EIumnRKtvbHMWTtbWmyoN8Gqi2OnAJ2ozbjo2gr9Nojxn31/R5ZHpqoxMC0P297D1KICPD2oEpL6zMlWPmqPG+7NzKiEDwcFFHaxH5iJ7dnSbx1gXnn0ciDuHSDY96lMebKjV1U5+IIrMw0l3MNbRCd1xslUyh1g1UrmNKTjiazoeArEbsnW7dM0ZtiXd51fV3NJDyJWK5kLgPZtMYmE5uenqdFy4lOC7vLYa/L990EmX6Th+AlXYyz32gtyLLfA9MofScHXAB5WDr4Ii0dJpSGlUOvrAOFgq31r5az/hwYxebivD0SD26l05VS3KsUH8fLwU67sQxQKop5/1NJS1rvOgfKXmwJrKAmge2tkrzy+SfBVQHY/YIH/fEtvPN3j7dj3RXxv6cDOx20eElSQ8FyLEeFfZJbRfJIaXrrcK6i+YM1sBXq3RoYAvqGQvYIVYbzn0ik8sf/mXwMBizpZ+ybz7GO+d1hgnsAOA16y9y9N9yv1/344YJQNNJT5AAAAAElFTkSuQmCC"},"6cc7":function(t,e,i){},7250:function(t,e,i){},"7e7d":function(t,e,i){"use strict";i("4a98")},"7f98":function(t,e,i){},"9b55":function(t,e,i){"use strict";i("c3fa")},"9d56":function(t,e,i){"use strict";i("a28b")},"9f52":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("BaseNavBar"),i("LivePlayer",{attrs:{matchDetails:t.matchDetails,video:t.video,animation:t.animation},on:{play:t.play},scopedSlots:t._u([{key:"live",fn:function(){return[1===t.params.type?[t.playing?i("BaseListItem",{directives:[{name:"loading",rawName:"v-loading",value:t.detailsLoading,expression:"detailsLoading"}],attrs:{match:t.matchDetails}}):t._e(),t._e(),i("FootballText",{attrs:{impTxtLive:t.impTxtLive,txtLive:t.txtLive}})]:t._e(),2===t.params.type?[t.playing?i("BaseListItem",{directives:[{name:"loading",rawName:"v-loading",value:t.detailsLoading,expression:"detailsLoading"}],attrs:{match:t.matchDetails}}):t._e(),t.isSocket?i("BasketballStatistics",{attrs:{score:t.score,match:t.matchDetails}}):t._e(),i("BasketballText",{attrs:{btlive:t.btlive}})]:t._e()]},proxy:!0}])})],1)},n=[],s=(i("99af"),i("4160"),i("d81d"),i("13d5"),i("b0c0"),i("b64b"),i("d3b7"),i("ac1f"),i("466d"),i("5319"),i("159b"),i("672d")),o=i("420c"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"football-statistics"},[t._m(0),i("div",{staticClass:"content"},[i("div",{staticClass:"charts"},[i("div",{staticClass:"item"},[i("div",{staticClass:"top"},[t._v("进攻")]),i("div",{staticClass:"bottom"},[i("span",[t._v("79")]),i("van-circle",{attrs:{rate:56,"layer-color":"#E5E5E5",color:"#F6BD35","stroke-width":"120"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),i("span",[t._v("79")])],1)]),i("div",{staticClass:"item"},[i("div",{staticClass:"top"},[t._v("危险进攻")]),i("div",{staticClass:"bottom"},[i("span",[t._v("79")]),i("van-circle",{attrs:{rate:56,"layer-color":"#E5E5E5",color:"#F6BD35","stroke-width":"120"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),i("span",[t._v("79")])],1)]),i("div",{staticClass:"item"},[i("div",{staticClass:"top"},[t._v("控球率")]),i("div",{staticClass:"bottom"},[i("span",[t._v("79")]),i("van-circle",{attrs:{rate:56,"layer-color":"#E5E5E5",color:"#F6BD35","stroke-width":"120"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),i("span",[t._v("79")])],1)])]),i("div",{staticClass:"shoot"},[t._m(1),t._m(2),t._m(3),i("span",{staticClass:"item"},[t._v("5")]),i("div",{staticClass:"progress"},[i("span",[t._v("射正球门")]),i("van-progress",{attrs:{percentage:50,"show-pivot":!1,color:"#F6BD35"}}),i("span")],1),i("span",{staticClass:"item align-right"},[t._v("5")]),t._m(4),t._m(5),t._m(6)]),i("div",{staticClass:"shoot"},[i("span",{staticClass:"item"},[t._v("5")]),i("span",{staticClass:"item"},[t._v("12")]),i("span",{staticClass:"item"},[t._v("5")]),i("span",{staticClass:"item"},[t._v("5")]),i("div",{staticClass:"progress"},[i("span",[t._v("射歪球门")]),i("van-progress",{attrs:{percentage:50,"show-pivot":!1,color:"#F6BD35"}}),i("span")],1),i("span",{staticClass:"item align-right"},[t._v("5")]),i("span",{staticClass:"item align-right"},[t._v("5")]),i("span",{staticClass:"item align-right"},[t._v("12")]),i("span",{staticClass:"item align-right"},[t._v("5")])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("span",{staticClass:"float-left"},[t._v("热刺")]),i("span",{staticClass:"float-right"},[t._v("曼城")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"item"},[a("img",{staticClass:"flag",attrs:{src:i("e938")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"item"},[a("img",{staticClass:"red",attrs:{src:i("be6f")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"item"},[a("img",{staticClass:"yellow",attrs:{src:i("6798")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"item align-right"},[a("img",{staticClass:"yellow",attrs:{src:i("6798")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"item align-right"},[a("img",{staticClass:"red",attrs:{src:i("be6f")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"item align-right"},[a("img",{staticClass:"flag",attrs:{src:i("e938")}})])}],c=(i("3cd0"),i("a232"),i("d282")),u=i("ea8e"),d=i("a142"),h=i("4598"),v=Object(c["a"])("circle"),f=v[0],p=v[1],m=3140,g=0;function b(t){return Math.min(Math.max(t,0),100)}function y(t,e){var i=t?1:0;return"M "+e/2+" "+e/2+" m 0, -500 a 500, 500 0 1, "+i+" 0, 1000 a 500, 500 0 1, "+i+" 0, -1000"}var C=f({props:{text:String,size:[Number,String],color:[String,Object],layerColor:String,strokeLinecap:String,value:{type:Number,default:0},speed:{type:[Number,String],default:0},fill:{type:String,default:"none"},rate:{type:[Number,String],default:100},strokeWidth:{type:[Number,String],default:40},clockwise:{type:Boolean,default:!0}},beforeCreate:function(){this.uid="van-circle-gradient-"+g++},computed:{style:function(){var t=Object(u["a"])(this.size);return{width:t,height:t}},path:function(){return y(this.clockwise,this.viewBoxSize)},viewBoxSize:function(){return+this.strokeWidth+1e3},layerStyle:function(){return{fill:""+this.fill,stroke:""+this.layerColor,strokeWidth:this.strokeWidth+"px"}},hoverStyle:function(){var t=m*this.value/100;return{stroke:""+this.color,strokeWidth:+this.strokeWidth+1+"px",strokeLinecap:this.strokeLinecap,strokeDasharray:t+"px "+m+"px"}},gradient:function(){return Object(d["e"])(this.color)},LinearGradient:function(){var t=this,e=this.$createElement;if(this.gradient){var i=Object.keys(this.color).sort((function(t,e){return parseFloat(t)-parseFloat(e)})).map((function(i,a){return e("stop",{key:a,attrs:{offset:i,"stop-color":t.color[i]}})}));return e("defs",[e("linearGradient",{attrs:{id:this.uid,x1:"100%",y1:"0%",x2:"0%",y2:"0%"}},[i])])}}},watch:{rate:{handler:function(t){this.startTime=Date.now(),this.startRate=this.value,this.endRate=b(t),this.increase=this.endRate>this.startRate,this.duration=Math.abs(1e3*(this.startRate-this.endRate)/this.speed),this.speed?(Object(h["a"])(this.rafId),this.rafId=Object(h["b"])(this.animate)):this.$emit("input",this.endRate)},immediate:!0}},methods:{animate:function(){var t=Date.now(),e=Math.min((t-this.startTime)/this.duration,1),i=e*(this.endRate-this.startRate)+this.startRate;this.$emit("input",b(parseFloat(i.toFixed(1)))),(this.increase?i<this.endRate:i>this.endRate)&&(this.rafId=Object(h["b"])(this.animate))}},render:function(){var t=arguments[0];return t("div",{class:p(),style:this.style},[t("svg",{attrs:{viewBox:"0 0 "+this.viewBoxSize+" "+this.viewBoxSize}},[this.LinearGradient,t("path",{class:p("layer"),style:this.layerStyle,attrs:{d:this.path}}),t("path",{attrs:{d:this.path,stroke:this.gradient?"url(#"+this.uid+")":this.color},class:p("hover"),style:this.hoverStyle})]),this.slots()||this.text&&t("div",{class:p("text")},[this.text])])}}),S=(i("d869"),Object(c["a"])("progress")),k=S[0],x=S[1],A=k({props:{color:String,inactive:Boolean,pivotText:String,textColor:String,pivotColor:String,trackColor:String,strokeWidth:[Number,String],percentage:{type:[Number,String],required:!0,validator:function(t){return t>=0&&t<=100}},showPivot:{type:Boolean,default:!0}},data:function(){return{pivotWidth:0,progressWidth:0}},mounted:function(){this.resize()},watch:{showPivot:"resize",pivotText:"resize"},methods:{resize:function(){var t=this;this.$nextTick((function(){t.progressWidth=t.$el.offsetWidth,t.pivotWidth=t.$refs.pivot?t.$refs.pivot.offsetWidth:0}))}},render:function(){var t=arguments[0],e=this.pivotText,i=this.percentage,a=null!=e?e:i+"%",n=this.showPivot&&a,s=this.inactive?"#cacaca":this.color,o={color:this.textColor,left:(this.progressWidth-this.pivotWidth)*i/100+"px",background:this.pivotColor||s},r={background:s,width:this.progressWidth*i/100+"px"},l={background:this.trackColor,height:Object(u["a"])(this.strokeWidth)};return t("div",{class:x(),style:l},[t("span",{class:x("portion"),style:r},[n&&t("span",{ref:"pivot",style:o,class:x("pivot")},[a])])])}}),O={name:"FootballStatistics",components:{VanProgress:A,VanCircle:C},data:function(){return{currentRate:88}}},_=O,D=(i("b488"),i("2877")),L=Object(D["a"])(_,r,l,!1,null,"52d6fc62",null),w=L.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot-text"},[a("ul",{staticClass:"nav"},[a("li",{class:{cur:t.tliveTab},on:{click:function(e){t.tliveTab=!0}}},[t._v("文字直播")]),a("li",{class:{cur:!t.tliveTab},on:{click:function(e){t.tliveTab=!1}}},[t._v("重要事件")])]),t.tliveTab?a("ul",{staticClass:"live"},[t.txtLiveData&&t.txtLiveData.length?t._l(t.txtLiveData,(function(e,n){return a("li",{key:n},[a("img",{attrs:{src:i("e938")}}),a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.data))]),1===e.position?a("i",{staticClass:"hColor"}):t._e(),2===e.position?a("i",{staticClass:"aColor"}):t._e()])])})):a("p",{staticClass:"notData"},[t._v("暂无文字直播数据")])],2):a("ul",{staticClass:"live"},[t.impTxtLiveData&&t.impTxtLiveData.length?t._l(t.impTxtLiveData,(function(e,n){return a("li",{key:n},[a("img",{attrs:{src:i("e938")}}),a("div",{staticClass:"content"},[a("p",[t._v(t._s(e.data))]),1===e.position?a("i",{staticClass:"hColor"}):t._e(),2===e.position?a("i",{staticClass:"aColor"}):t._e()])])})):a("p",{staticClass:"notData"},[t._v("暂无重要事件数据")])],2)])},N=[],T={name:"FootballStatistics",props:{txtLive:{type:Array,default:function(){return[]}},impTxtLive:{type:Array,default:function(){return[]}}},watch:{txtLive:{handler:function(t,e){this.txtLiveData=t},deep:!0},impTxtLive:{handler:function(t,e){this.impTxtLiveData=t},deep:!0}},data:function(){return{txtLiveData:[],impTxtLiveData:[],tliveTab:!0}},created:function(){this.txtLiveData=this.txtLive,this.impTxtLiveData=this.impTxtLive}},z=T,P=(i("9d56"),Object(D["a"])(z,E,N,!1,null,"3114ce0a",null)),j=P.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"basketball-statistics"},[i("div",{staticClass:"top"},[t.match&&Object.keys(t.match).length?i("div",{staticClass:"left"},[i("div",{staticClass:"guest"},[t._v(t._s(t.match.ateam_name||"-"))]),i("div",{staticClass:"home"},[t._v(t._s(t.match.hteam_name||"-"))])]):t._e(),i("div",{staticClass:"right"},[i("div",{staticClass:"body"},[t._l(t.scoreData[3],(function(e,a){return i("span",{key:a},[t._v(t._s(e||0))])})),i("span",[t._v(t._s(t.scoreData[3].reduce((function(t,e){return t+e}))))])],2),i("div",{staticClass:"body"},[t._l(t.scoreData[4],(function(e,a){return i("span",{key:a},[t._v(t._s(e||0))])})),i("span",[t._v(t._s(t.scoreData[4].reduce((function(t,e){return t+e}))))])],2),t._m(0)])]),t._e()])},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("span",[t._v("一")]),i("span",[t._v("二")]),i("span",[t._v("三")]),i("span",[t._v("四")]),i("span",[t._v("OT")]),i("span",[t._v("总分")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left"},[i("span",[t._v("本节犯规数")]),i("span",{staticClass:"home"},[t._v("1")]),i("span",[t._v("剩余暂停")]),i("span",{staticClass:"home"},[t._v("1")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right"},[i("span",[t._v("本节犯规数")]),i("span",{staticClass:"guest"},[t._v("1")]),i("span",[t._v("剩余暂停")]),i("span",{staticClass:"guest"},[t._v("1")])])}],M={name:"BasketBallStatistics",components:{VanProgress:A},props:{score:{type:Array,default:function(){return[]}},match:{type:Object,default:function(){}}},watch:{score:{handler:function(t,e){this.scoreData=t},deep:!0}},data:function(){return{scoreData:[]}},created:function(){this.scoreData=this.score}},Q=M,I=(i("7e7d"),Object(D["a"])(Q,B,R,!1,null,"3c272710",null)),F=I.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"basketball-text"},[i("p",{staticClass:"live-title"},[t._v("文字直播")]),i("van-tabs",{attrs:{type:"card"},model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},[t.btliveData&&t.btliveData.length?t._l(t.btliveData,(function(e,a){return i("van-tab",{key:a,attrs:{title:t.tabList[a]}},[e&&e.length?i("van-steps",{attrs:{direction:"vertical",active:-1}},t._l(e,(function(e,n){return i("van-step",{key:n},[i("div",{domProps:{innerHTML:t._s(t.parseItem(e,n,a))}})])})),1):i("p",{staticClass:"notData"},[t._v("暂无文字直播数据")])],1)})):i("van-tab",{attrs:{title:"暂无数据"}})],2)],1)},H=[],U=(i("1276"),i("1a44"),i("acc2"),i("c8b5"),i("b1d2")),$=i("9884"),K=i("2638"),J=i.n(K),W=i("ba31"),X=i("6f2f"),q=Object(c["a"])("icon"),G=q[0],Y=q[1];function Z(t){return!!t&&-1!==t.indexOf("/")}var tt={medel:"medal","medel-o":"medal-o","calender-o":"calendar-o"};function et(t){return t&&tt[t]||t}function it(t,e,i,a){var n,s=et(e.name),o=Z(s);return t(e.tag,J()([{class:[e.classPrefix,o?"":e.classPrefix+"-"+s],style:{color:e.color,fontSize:Object(u["a"])(e.size)}},Object(W["a"])(a,!0)]),[i.default&&i.default(),o&&t("img",{class:Y("image"),attrs:{src:s}}),t(X["a"],{attrs:{dot:e.dot,info:null!=(n=e.badge)?n:e.info}})])}it.props={dot:Boolean,name:String,size:[Number,String],info:[Number,String],badge:[Number,String],color:String,tag:{type:String,default:"i"},classPrefix:{type:String,default:Y()}};var at=G(it),nt=Object(c["a"])("step"),st=nt[0],ot=nt[1],rt=st({mixins:[Object($["a"])("vanSteps")],computed:{status:function(){return this.index<this.parent.active?"finish":this.index===+this.parent.active?"process":void 0},active:function(){return"process"===this.status},lineStyle:function(){return"finish"===this.status?{background:this.parent.activeColor}:{background:this.parent.inactiveColor}},titleStyle:function(){return this.active?{color:this.parent.activeColor}:this.status?void 0:{color:this.parent.inactiveColor}}},methods:{genCircle:function(){var t=this.$createElement,e=this.parent,i=e.activeIcon,a=e.activeColor,n=e.inactiveIcon;if(this.active)return this.slots("active-icon")||t(at,{class:ot("icon","active"),attrs:{name:i,color:a}});var s=this.slots("inactive-icon");return n||s?s||t(at,{class:ot("icon"),attrs:{name:n}}):t("i",{class:ot("circle"),style:this.lineStyle})},onClickStep:function(){this.parent.$emit("click-step",this.index)}},render:function(){var t,e=arguments[0],i=this.status,a=this.active,n=this.parent.direction;return e("div",{class:[U["a"],ot([n,(t={},t[i]=i,t)])]},[e("div",{class:ot("title",{active:a}),style:this.titleStyle,on:{click:this.onClickStep}},[this.slots()]),e("div",{class:ot("circle-container"),on:{click:this.onClickStep}},[this.genCircle()]),e("div",{class:ot("line"),style:this.lineStyle})])}}),lt=(i("237a"),Object(c["a"])("steps")),ct=lt[0],ut=lt[1],dt=ct({mixins:[Object($["b"])("vanSteps")],props:{activeColor:String,inactiveIcon:String,inactiveColor:String,active:{type:[Number,String],default:0},direction:{type:String,default:"horizontal"},activeIcon:{type:String,default:"checked"}},render:function(){var t=arguments[0];return t("div",{class:ut([this.direction])},[t("div",{class:ut("items")},[this.slots()])])}}),ht=(i("8990"),i("5e46")),vt=(i("558f"),i("0b33")),ft={name:"BaseBasketBallText",props:{btlive:{type:Array,default:function(){return[]}}},components:{VanTab:vt["a"],VanTabs:ht["a"],VanSteps:dt,VanStep:rt},watch:{btlive:{handler:function(t,e){this.btliveData=t},deep:!0}},data:function(){return{tabActive:"",tabList:["第一节","第二节","第三节","第四节","第五节","第六节","第七节","第八节"],btliveData:[]}},created:function(){this.btliveData=this.btlive},methods:{parseItem:function(t,e,i){var a=JSON.parse(JSON.stringify(t)).split("^");return'\n        <p>\n          <span class="title">'.concat(this.tabList[i]," ").concat(a[1],'</span>\n          <span class="sub-title">').concat(a[4],'</span>\n        </p>\n        <p class="content">').concat(a[5],"</p>\n      ")}}},pt=ft,mt=(i("9b55"),Object(D["a"])(pt,V,H,!1,null,null,null)),gt=mt.exports,bt=i("66af"),yt=i("f96b"),Ct=(i("1812"),i("5e5e"),i("25bb"),i("7f98"),i("c31d")),St=i("2b0e"),kt=0;function xt(t){t?(kt||document.body.classList.add("van-toast--unclickable"),kt++):(kt--,kt||document.body.classList.remove("van-toast--unclickable"))}var At={zIndex:2e3,lockCount:0,stack:[],find:function(t){return this.stack.filter((function(e){return e.vm===t}))[0]}},Ot=i("1325"),_t=Object(c["a"])("overlay"),Dt=_t[0],Lt=_t[1];function wt(t){Object(Ot["c"])(t,!0)}function Et(t,e,i,a){var n=Object(Ct["a"])({zIndex:e.zIndex},e.customStyle);return Object(d["c"])(e.duration)&&(n.animationDuration=e.duration+"s"),t("transition",{attrs:{name:"van-fade"}},[t("div",J()([{directives:[{name:"show",value:e.show}],style:n,class:[Lt(),e.className],on:{touchmove:e.lockScroll?wt:d["h"]}},Object(W["a"])(a,!0)]),[null==i.default?void 0:i.default()])])}Et.props={show:Boolean,zIndex:[Number,String],duration:[Number,String],className:null,customStyle:Object,lockScroll:{type:Boolean,default:!0}};var Nt=Dt(Et);function Tt(t){var e=t.parentNode;e&&e.removeChild(t)}var zt={className:"",customStyle:{}};function Pt(t){return Object(W["b"])(Nt,{on:{click:function(){t.$emit("click-overlay"),t.closeOnClickOverlay&&(t.onClickOverlay?t.onClickOverlay():t.close())}}})}function jt(t){var e=At.find(t);if(e){var i=t.$el,a=e.config,n=e.overlay;i&&i.parentNode&&i.parentNode.insertBefore(n.$el,i),Object(Ct["a"])(n,zt,a,{show:!0})}}function Bt(t,e){var i=At.find(t);if(i)i.config=e;else{var a=Pt(t);At.stack.push({vm:t,config:e,overlay:a})}jt(t)}function Rt(t){var e=At.find(t);e&&(e.overlay.show=!1)}function Mt(t){var e=At.find(t);e&&Tt(e.overlay.$el)}var Qt=i("a8c1"),It=i("3875");function Ft(t){return"string"===typeof t?document.querySelector(t):t()}function Vt(t){var e=void 0===t?{}:t,i=e.ref,a=e.afterPortal;return{props:{getContainer:[String,Function]},watch:{getContainer:"portal"},mounted:function(){this.getContainer&&this.portal()},methods:{portal:function(){var t,e=this.getContainer,n=i?this.$refs[i]:this.$el;e?t=Ft(e):this.$parent&&(t=this.$parent.$el),t&&t!==n.parentNode&&t.appendChild(n),a&&a.call(this)}}}}var Ht=i("5fbe"),Ut={mixins:[Object(Ht["a"])((function(t,e){this.handlePopstate(e&&this.closeOnPopstate)}))],props:{closeOnPopstate:Boolean},data:function(){return{bindStatus:!1}},watch:{closeOnPopstate:function(t){this.handlePopstate(t)}},methods:{onPopstate:function(){this.close(),this.shouldReopen=!1},handlePopstate:function(t){if(!this.$isServer&&this.bindStatus!==t){this.bindStatus=t;var e=t?Ot["b"]:Ot["a"];e(window,"popstate",this.onPopstate)}}}},$t={transitionAppear:Boolean,value:Boolean,overlay:Boolean,overlayStyle:Object,overlayClass:String,closeOnClickOverlay:Boolean,zIndex:[Number,String],lockScroll:{type:Boolean,default:!0},lazyRender:{type:Boolean,default:!0}};function Kt(t){return void 0===t&&(t={}),{mixins:[It["a"],Ut,Vt({afterPortal:function(){this.overlay&&jt()}})],props:$t,data:function(){return{inited:this.value}},computed:{shouldRender:function(){return this.inited||!this.lazyRender}},watch:{value:function(e){var i=e?"open":"close";this.inited=this.inited||this.value,this[i](),t.skipToggleEvent||this.$emit(i)},overlay:"renderOverlay"},mounted:function(){this.value&&this.open()},activated:function(){this.shouldReopen&&(this.$emit("input",!0),this.shouldReopen=!1)},beforeDestroy:function(){Mt(this),this.opened&&this.removeLock(),this.getContainer&&Tt(this.$el)},deactivated:function(){this.value&&(this.close(),this.shouldReopen=!0)},methods:{open:function(){this.$isServer||this.opened||(void 0!==this.zIndex&&(At.zIndex=this.zIndex),this.opened=!0,this.renderOverlay(),this.addLock())},addLock:function(){this.lockScroll&&(Object(Ot["b"])(document,"touchstart",this.touchStart),Object(Ot["b"])(document,"touchmove",this.onTouchMove),At.lockCount||document.body.classList.add("van-overflow-hidden"),At.lockCount++)},removeLock:function(){this.lockScroll&&At.lockCount&&(At.lockCount--,Object(Ot["a"])(document,"touchstart",this.touchStart),Object(Ot["a"])(document,"touchmove",this.onTouchMove),At.lockCount||document.body.classList.remove("van-overflow-hidden"))},close:function(){this.opened&&(Rt(this),this.opened=!1,this.removeLock(),this.$emit("input",!1))},onTouchMove:function(t){this.touchMove(t);var e=this.deltaY>0?"10":"01",i=Object(Qt["c"])(t.target,this.$el),a=i.scrollHeight,n=i.offsetHeight,s=i.scrollTop,o="11";0===s?o=n>=a?"00":"01":s+n>=a&&(o="10"),"11"===o||"vertical"!==this.direction||parseInt(o,2)&parseInt(e,2)||Object(Ot["c"])(t,!0)},renderOverlay:function(){var t=this;!this.$isServer&&this.value&&this.$nextTick((function(){t.updateZIndex(t.overlay?1:0),t.overlay?Bt(t,{zIndex:At.zIndex++,duration:t.duration,className:t.overlayClass,customStyle:t.overlayStyle}):Rt(t)}))},updateZIndex:function(t){void 0===t&&(t=0),this.$el.style.zIndex=++At.zIndex+t}}}}var Jt=Object(c["a"])("loading"),Wt=Jt[0],Xt=Jt[1];function qt(t,e){if("spinner"===e.type){for(var i=[],a=0;a<12;a++)i.push(t("i"));return i}return t("svg",{class:Xt("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function Gt(t,e,i){if(i.default){var a,n={fontSize:Object(u["a"])(e.textSize),color:null!=(a=e.textColor)?a:e.color};return t("span",{class:Xt("text"),style:n},[i.default()])}}function Yt(t,e,i,a){var n=e.color,s=e.size,o=e.type,r={color:n};if(s){var l=Object(u["a"])(s);r.width=l,r.height=l}return t("div",J()([{class:Xt([o,{vertical:e.vertical}])},Object(W["a"])(a,!0)]),[t("span",{class:Xt("spinner",o),style:r},[qt(t,e)]),Gt(t,e,i)])}Yt.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}};var Zt=Wt(Yt),te=Object(c["a"])("toast"),ee=te[0],ie=te[1],ae=ee({mixins:[Kt()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,xt(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,i=this.type,a=this.iconPrefix,n=this.loadingType,s=e||"success"===i||"fail"===i;return s?t(at,{class:ie("icon"),attrs:{classPrefix:a,name:e||i}}):"loading"===i?t(Zt,{class:ie("loading"),attrs:{type:n}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,i=this.message;if(Object(d["c"])(i)&&""!==i)return"html"===e?t("div",{class:ie("text"),domProps:{innerHTML:i}}):t("div",{class:ie("text")},[i])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[ie([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),ne={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},se={},oe=[],re=!1,le=Object(Ct["a"])({},ne);function ce(t){return Object(d["e"])(t)?t:{message:t}}function ue(t){return document.body.contains(t)}function de(){if(d["g"])return{};if(oe=oe.filter((function(t){return!t.$el.parentNode||ue(t.$el)})),!oe.length||re){var t=new(St["default"].extend(ae))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),oe.push(t)}return oe[oe.length-1]}function he(t){return Object(Ct["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function ve(t){void 0===t&&(t={});var e=de();return e.value&&e.updateZIndex(),t=ce(t),t=Object(Ct["a"])({},le,se[t.type||le.type],t),t.clear=function(){e.value=!1,t.onClose&&(t.onClose(),t.onClose=null),re&&!d["g"]&&e.$on("closed",(function(){clearTimeout(e.timer),oe=oe.filter((function(t){return t!==e})),Tt(e.$el),e.$destroy()}))},Object(Ct["a"])(e,he(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var fe=function(t){return function(e){return ve(Object(Ct["a"])({type:t},ce(e)))}};["loading","success","fail"].forEach((function(t){ve[t]=fe(t)})),ve.clear=function(t){oe.length&&(t?(oe.forEach((function(t){t.clear()})),oe=[]):re?oe.shift().clear():oe[0].clear())},ve.setDefaultOptions=function(t,e){"string"===typeof t?se[t]=e:Object(Ct["a"])(le,t)},ve.resetDefaultOptions=function(t){"string"===typeof t?se[t]=null:(le=Object(Ct["a"])({},ne),se={})},ve.allowMultiple=function(t){void 0===t&&(t=!0),re=t},ve.install=function(){St["default"].use(ae)},St["default"].prototype.$toast=ve;var pe=ve,me=null,ge=null,be=!1,ye=null,Ce=null,Se=null,ke=null,xe=null;function Ae(t,e,i){if(Se=t,ke=e,xe=i,i){if(!("WebSocket"in window))return pe.fail("您的浏览器不支持WebSocket协议,请更换浏览器!"),!1;be=!1,xe=i;var a="1"===ke?"zuqiu":"lanqiu",n="".concat("https:"===location.protocol?"wss":"ws","://").concat(location.host,"/api/ws/live/detail/").concat(a,"?token=").concat(xe);console.log(n),me=new WebSocket(n),me.onmessage=function(t){Oe(t)},me.onclose=function(t){De(t)},me.onopen=function(){we(),Se&&_e(Se)},me.onerror=function(t){console.log("WebSocket连接发生错误")}}}function Oe(t){ge(t)}function _e(t){t&&(console.log("数据发送",t),"string"===typeof t?me.send(t):me.send(JSON.stringify(t)))}function De(t){be||(clearTimeout(Ce),Ce=null,Ce=setTimeout((function(){Ae(Se,ke,xe)}),1e3))}function Le(t){me&&(be=!0,me.close())}function we(t){console.log("连接成功")}function Ee(t,e,i,a){t?(ge=a,me&&me.readyState===me.OPEN?_e(t):me&&me.readyState===me.CONNECTING?(clearTimeout(ye),ye=null,ye=setTimeout((function(){Ee(t,e,i,a)}),1e3)):Ae(t,e,i)):pe("数据不能为空")}var Ne={name:"Details",components:{BaseNavBar:s["a"],LivePlayer:o["default"],FootballStatistics:w,FootballText:j,BasketballStatistics:F,BasketballText:gt,BaseListItem:bt["a"]},props:{matchId:{type:String,default:""}},data:function(){return{params:{type:1,playType:1,channel:0,id:0},token:"",matchDetails:{},timer:null,isSocket:!1,msgContent:{},score:[],ftlive:[],txtLive:[],impTxtLive:[],btlive:[],playing:!1,video:{url:"",type:"hls"},animation:"",detailsLoading:!1,match:{live_urls:[],live_cartoon_url:[]}}},deactivated:function(){Le()},destroyed:function(){Le()},created:function(){var t=this.$route.params;t.type=parseInt(t.type),t.playType=parseInt(t.playType),t.channel=parseInt(t.channel),this.params=t,this.qryMatchDetails({mid:t.id,type:t.type})},methods:{qryMatchDetails:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.detailsLoading=!0,Object(yt["b"])(e).then((function(e){if(t.token=e.token,t.matchDetails=e.matchinfo,t.token&&0===e.matchinfo.status){var i=t.params,a=i.id,n=i.type;Ee(a,n,t.token,t.getMsgResult),t.loopSendMsg()}var s={},o=[];if(e.matchinfo.live_urls.forEach((function(t,e){o[e]=t,o[e].type="customHls"})),s.quality=o,1===t.params.playType?s.defaultQuality=t.params.channel:s.defaultQuality=0,t.video=s,e.matchinfo.live_cartoon_url.length>0&&(t.animation=e.matchinfo.live_cartoon_url[t.params.channel].url),t.match=e.matchinfo,e.matchinfo.matchTime=new Date(e.matchinfo.matchtime.replace(/-/g,"/")).format("hh:mm"),t.match.videoUrl=e.matchinfo.live_urls.map((function(t,e){return{disabled:0===t.status,text:t.name,value:t.url}})),t.match.animationUrl=e.matchinfo.live_cartoon_url.map((function(t,e){return{disabled:0===t.status,text:t.name,value:t.url}})),1===t.params.playType){if(e.matchinfo.live_urls.length>0){var r=e.matchinfo.live_urls[t.params.channel].url;t.selectVideoSource({index:t.params.channel,value:r})}}else if(e.matchinfo.live_cartoon_url.length>0){var l=e.matchinfo.live_cartoon_url[t.params.channel].url;t.selectAnimationSource({index:t.params.channel,value:l})}})).catch((function(){})).finally((function(){t.detailsLoading=!1}))},getMsgResult:function(t){var e=t.data;if("string"===typeof e&&(e=JSON.parse(e)),e&&Object.keys(e).length){this.isSocket=!0,this.msgContent=e;var i=e.score&&e.score.length&&e.score;if(this.score=i,"1"===this.params.type){var a=i[2][0],n=i[3][0];this.$set(this.matchDetails,"score","".concat(a,"-").concat(n)),this.ftlive=e.tlive&&e.tlive.length&&e.tlive.reverse();var s=[],o=[];this.ftlive.forEach((function(t){t.main?o.push(t):s.push(t)})),this.txtLive=s,this.impTxtLive=o}if("2"===this.params.type){var r=i[3].reduce((function(t,e){return t+e})),l=i[4].reduce((function(t,e){return t+e}));this.$set(this.matchDetails,"score","".concat(r,"-").concat(l)),this.btlive=e.tlive&&e.tlive.length&&e.tlive}}},loopSendMsg:function(){var t=this;this.timer&&window.clearInterval(this.timer),this.timer=window.setInterval((function(){var e=t.params,i=e.id,a=e.type;Ee(i,a,t.token,t.getMsgResult)}),1e4)},play:function(t){this.playType=t,this.playing=!0}}},Te=Ne,ze=(i("db14"),Object(D["a"])(Te,a,n,!1,null,"6856645c",null));e["default"]=ze.exports},a232:function(t,e,i){},a28b:function(t,e,i){},acc2:function(t,e,i){},b488:function(t,e,i){"use strict";i("7250")},be6f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAMAAADqx5XUAAABhlBMVEUAAAD/AAD/AAD/AFX/VVW/QED/QED/MzP/M2b/KlX/QED/QFDwLUvyQ1HzMVXzRlH0NVX1PUf1MU72OVX2QFL2NVj/REz3OFD4OlD4OVX0Pk/6QlD2NlX7Qk/3NlTzNFT3O073Qk33NVT7P1H4N1T4PlD0MlH7QE74O1P1OFL8RE36QU/0M1P6Qk/3OFT6RE71NFT4O1H6Qk71NVT4PVD4P1D6QlD2M1P2PFH2OVH3QU/5QU74NVP2M1b7Q074QE72OVH1NFT4PVD6QU/1M1P4PlH4PlH1MlP3O1D3OFP5Qk/5Q072NFT5Qk/3N1L1NVT3O1H5QU/1NFT1NlP4PlD4P0/0MlT3O1D3OFH6Q031M1X6QE/5QU76Qk71N1L5Qk31NFP2OVH3O1D1NFP3PFD5P0/5P1D5QE71MlT1M1L1M1T1NFL1NFT1NlL1N1H1N1L2N1H2N1L2OFH2OVD2OVH2O1D2PFD3PFD3PVD3Pk/3PlD3QE/3QFD5QE/5QFD5QU35QU/5Qk3+QfyWAAAAgnRSTlMAAQIDAwQEBQUGCBARExUWGBkaGxwdHiAjJC02OTo9QEFCQ0VGRkhISk5TXl9hZGVnaGlqbG1tb3J1hYmLjIyPkJKTlJaXmJmcoK+wsbK0tre4ubm6u7y9v7/ExsjIycnKysrLy8vLy8zMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz4ZoTQAAAV9JREFUKM9tk2V3gzAUhjvr1rm7u7u7u7u7tDCcAoUx2D9fwoUWODw3cnKeN59yEwrZRBZutzpzQoH0E1EiejlVEaDS9gmLt/XWsN/Vk+Q3giRisdOxUq+bpygyyfNKU0ZKFT5SAGlnjobzHTfIYCg3Z7ZMP6QZBwpncKwdXCPNsjRL0wzNcQyHdoZjmBpwyzyLJSyQY3ZAFb/wDiyLY8jSPeBGREEUeV7kXVznWirzWBBENKyJwW4GrjXHbXBCwDlU1eBW41Lch7ANquxVlmXJKVt2gxuXHbDEiyRdRSwVPldkD8jL03CtTbGRU5n3KnAbqqr4kDdBVX6qSRQn1gFuUtN07VdLIFRcmItscEu6pmNQAvOjqYnEhP2qXV8moKNhRfSPcufJa2fvTDe6uebqo7y+XY9t8XZn3dy9YRimgdVJlr9BCwYO/iyM0aDWblh8Qu6hJPhTFA3t3fQmT/+AoNwOKfVpCwAAAABJRU5ErkJggg=="},c3fa:function(t,e,i){},c8b5:function(t,e,i){},d58f:function(t,e,i){var a=i("1c0b"),n=i("7b0b"),s=i("44ad"),o=i("50c4"),r=function(t){return function(e,i,r,l){a(i);var c=n(e),u=s(c),d=o(c.length),h=t?d-1:0,v=t?-1:1;if(r<2)while(1){if(h in u){l=u[h],h+=v;break}if(h+=v,t?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=v)h in u&&(l=i(l,u[h],h,c));return l}};t.exports={left:r(!1),right:r(!0)}},d81d:function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").map,s=i("1dde"),o=i("ae40"),r=s("map"),l=o("map");a({target:"Array",proto:!0,forced:!r||!l},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},d869:function(t,e,i){},db14:function(t,e,i){"use strict";i("6cc7")},e938:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAt1BMVEUAAAD/AAD//wD/fwD/bSTqahX/ahXxcRz/cRz/dCH7dCL4diH8dyP5dCL6dCP4diL6diL4dCH6dSP6diP7dCL7diP5dCP7diH5dSL5dCH5diP6diL6diP6dSH4dSL6dSL5dSH6dSL5dCL6dSL6dSH4dCL6diL6dSH6dSL5dSL5dSL5dSL5dSL6dSL5dCH6dSH6dSL6dSL6dSL6dSL5dSH6dSL5dSH5dSL6dSL5dSL5dCH6dSL5dSI06fjCAAAAPHRSTlMAAQECBwwMEhIuREVJWmdoaGxtbnJ1fYKJioqNkZSYnaGjp76/wcXGydPf4eTr7e3v8PHy9PT19fj7/P6sEdTNAAAAhElEQVQoz+3RtxaCQABE0REBFXPCnDFijqjz/99FsYJ7ziKFhZWvveVD79wGoOe6S2/vlEzIPXgExieKdgUtgEQd5A3gu4UlKDujYuRqYNtDl4yysL99b895q1jtu1HmZMSz/FqxZjI4ajSuLzmUhcmlK9PtfTOppaCa1K/Ni7HOZfSJfFKUZcaovuAYAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-91b0854e.3ad6371a.js.map