(self.webpackChunk_36_dot_22=self.webpackChunk_36_dot_22||[]).push([[99],{9483:function(e,t,n){var o=n(7854),a=n(4411),r=n(6330),i=o.TypeError;e.exports=function(e){if(a(e))return e;throw i(r(e)+" is not a constructor")}},1530:function(e,t,n){"use strict";var o=n(8710).charAt;e.exports=function(e,t,n){return t+(n?o(e,t).length:1)}},8544:function(e,t,n){var o=n(7293);e.exports=!o((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4994:function(e,t,n){"use strict";var o=n(3383).IteratorPrototype,a=n(30),r=n(9114),i=n(8003),c=n(7497),s=function(){return this};e.exports=function(e,t,n,l){var u=t+" Iterator";return e.prototype=a(o,{next:r(+!l,n)}),i(e,u,!1,!0),c[u]=s,e}},7850:function(e,t,n){var o=n(111),a=n(4326),r=n(5112)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==a(e))}},3383:function(e,t,n){"use strict";var o,a,r,i=n(7293),c=n(614),s=n(30),l=n(9518),u=n(1320),d=n(5112),f=n(1913),p=d("iterator"),m=!1;[].keys&&("next"in(r=[].keys())?(a=l(l(r)))!==Object.prototype&&(o=a):m=!0),null==o||i((function(){var e={};return o[p].call(e)!==e}))?o={}:f&&(o=s(o)),c(o[p])||u(o,p,(function(){return this})),e.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:m}},1070:function(e,t,n){var o=n(7854);e.exports=o.Promise},8523:function(e,t,n){"use strict";var o=n(9662),a=function(e){var t,n;this.promise=new e((function(e,o){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=o})),this.resolve=o(t),this.reject=o(n)};e.exports.f=function(e){return new a(e)}},9518:function(e,t,n){var o=n(7854),a=n(2597),r=n(614),i=n(7908),c=n(6200),s=n(8544),l=c("IE_PROTO"),u=o.Object,d=u.prototype;e.exports=s?u.getPrototypeOf:function(e){var t=i(e);if(a(t,l))return t[l];var n=t.constructor;return r(n)&&t instanceof n?n.prototype:t instanceof u?d:null}},9478:function(e,t,n){var o=n(9670),a=n(111),r=n(8523);e.exports=function(e,t){if(o(e),a(t)&&t.constructor===e)return t;var n=r.f(e);return(0,n.resolve)(t),n.promise}},7651:function(e,t,n){var o=n(7854),a=n(6916),r=n(9670),i=n(614),c=n(4326),s=n(2261),l=o.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var o=a(n,e,t);return null!==o&&r(o),o}if("RegExp"===c(e))return a(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},2261:function(e,t,n){"use strict";var o,a,r=n(6916),i=n(1702),c=n(1340),s=n(7066),l=n(2999),u=n(2309),d=n(30),f=n(9909).get,p=n(9441),m=n(7168),h=u("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,v=g,b=i("".charAt),w=i("".indexOf),x=i("".replace),y=i("".slice),I=(a=/b*/g,r(g,o=/a/,"a"),r(g,a,"a"),0!==o.lastIndex||0!==a.lastIndex),k=l.BROKEN_CARET,P=void 0!==/()??/.exec("")[1];(I||P||k||p||m)&&(v=function(e){var t,n,o,a,i,l,u,p=this,m=f(p),_=c(e),A=m.raw;if(A)return A.lastIndex=p.lastIndex,t=r(v,A,_),p.lastIndex=A.lastIndex,t;var E=m.groups,N=k&&p.sticky,S=r(s,p),R=p.source,K=0,M=_;if(N&&(S=x(S,"y",""),-1===w(S,"g")&&(S+="g"),M=y(_,p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==b(_,p.lastIndex-1))&&(R="(?: "+R+")",M=" "+M,K++),n=new RegExp("^(?:"+R+")",S)),P&&(n=new RegExp("^"+R+"$(?!\\s)",S)),I&&(o=p.lastIndex),a=r(g,N?n:p,M),N?a?(a.input=y(a.input,K),a[0]=y(a[0],K),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:I&&a&&(p.lastIndex=p.global?a.index+a[0].length:o),P&&a&&a.length>1&&r(h,a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a&&E)for(a.groups=l=d(null),i=0;i<E.length;i++)l[(u=E[i])[0]]=a[u[1]];return a}),e.exports=v},7066:function(e,t,n){"use strict";var o=n(9670);e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){var o=n(7293),a=n(7854).RegExp,r=o((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=r||o((function(){return!a("a","y").sticky})),c=r||o((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:i,UNSUPPORTED_Y:r}},9441:function(e,t,n){var o=n(7293),a=n(7854).RegExp;e.exports=o((function(){var e=a(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,t,n){var o=n(7293),a=n(7854).RegExp;e.exports=o((function(){var e=a("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},8003:function(e,t,n){var o=n(3070).f,a=n(2597),r=n(5112)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!a(e,r)&&o(e,r,{configurable:!0,value:t})}},6707:function(e,t,n){var o=n(9670),a=n(9483),r=n(5112)("species");e.exports=function(e,t){var n,i=o(e).constructor;return void 0===i||null==(n=o(i)[r])?t:a(n)}},8710:function(e,t,n){var o=n(1702),a=n(9303),r=n(1340),i=n(4488),c=o("".charAt),s=o("".charCodeAt),l=o("".slice),u=function(e){return function(t,n){var o,u,d=r(i(t)),f=a(n),p=d.length;return f<0||f>=p?e?"":void 0:(o=s(d,f))<55296||o>56319||f+1===p||(u=s(d,f+1))<56320||u>57343?e?c(d,f):o:e?l(d,f,f+2):u-56320+(o-55296<<10)+65536}};e.exports={codeAt:u(!1),charAt:u(!0)}},1340:function(e,t,n){var o=n(7854),a=n(648),r=o.String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},5837:function(e,t,n){n(2109)({global:!0},{globalThis:n(7854)})},5438:function(e,t,n){var o=n(2109),a=Math.hypot,r=Math.abs,i=Math.sqrt;o({target:"Math",stat:!0,forced:!!a&&a(1/0,NaN)!==1/0},{hypot:function(e,t){for(var n,o,a=0,c=0,s=arguments.length,l=0;c<s;)l<(n=r(arguments[c++]))?(a=a*(o=l/n)*o+1,l=n):a+=n>0?(o=n/l)*o:n;return l===1/0?1/0:l*i(a)}})},7727:function(e,t,n){"use strict";var o=n(2109),a=n(1913),r=n(1070),i=n(7293),c=n(5005),s=n(614),l=n(6707),u=n(9478),d=n(1320);if(o({target:"Promise",proto:!0,real:!0,forced:!!r&&i((function(){r.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=l(this,c("Promise")),n=s(e);return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),!a&&s(r)){var f=c("Promise").prototype.finally;r.prototype.finally!==f&&d(r.prototype,"finally",f,{unsafe:!0})}},6373:function(e,t,n){"use strict";var o=n(2109),a=n(7854),r=n(6916),i=n(1702),c=n(4994),s=n(4488),l=n(7466),u=n(1340),d=n(9670),f=n(4326),p=n(7976),m=n(7850),h=n(7066),g=n(8173),v=n(1320),b=n(7293),w=n(5112),x=n(6707),y=n(1530),I=n(7651),k=n(9909),P=n(1913),_=w("matchAll"),A="RegExp String",E="RegExp String Iterator",N=k.set,S=k.getterFor(E),R=RegExp.prototype,K=a.TypeError,M=i(h),z=i("".indexOf),O=i("".matchAll),L=!!O&&!b((function(){O("a",/./)})),j=c((function(e,t,n,o){N(this,{type:E,regexp:e,string:t,global:n,unicode:o,done:!1})}),A,(function(){var e=S(this);if(e.done)return{value:void 0,done:!0};var t=e.regexp,n=e.string,o=I(t,n);return null===o?{value:void 0,done:e.done=!0}:e.global?(""===u(o[0])&&(t.lastIndex=y(n,l(t.lastIndex),e.unicode)),{value:o,done:!1}):(e.done=!0,{value:o,done:!1})})),C=function(e){var t,n,o,a,r,i,c=d(this),s=u(e);return t=x(c,RegExp),void 0===(n=c.flags)&&p(R,c)&&!("flags"in R)&&(n=M(c)),o=void 0===n?"":u(n),a=new t(t===RegExp?c.source:c,o),r=!!~z(o,"g"),i=!!~z(o,"u"),a.lastIndex=l(c.lastIndex),new j(a,s,r,i)};o({target:"String",proto:!0,forced:L},{matchAll:function(e){var t,n,o,a,i=s(this);if(null!=e){if(m(e)&&(t=u(s("flags"in R?e.flags:M(e))),!~z(t,"g")))throw K("`.matchAll` does not allow non-global regexes");if(L)return O(i,e);if(void 0===(o=g(e,_))&&P&&"RegExp"==f(e)&&(o=C),o)return r(o,e,i)}else if(L)return O(i,e);return n=u(i),a=new RegExp(e,"g"),P?r(C,a,n):a[_](n)}}),P||_ in R||v(R,_,C)},5743:function(e,t,n){n(5837)},3728:function(e,t,n){n(6373)},653:function(e,t,n){"use strict";var o=n(3366),a=n(7294),r=n(8601),i=["className","style","title"];t.Z=function(e){var t=e.className,n=e.style,c=e.title,s=(0,o.Z)(e,i);return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",height:"1em",width:"1em",style:Object.assign({fill:"currentcolor"},n||{}),className:(0,r.AK)("plasmic-default__svg",t)},s),c&&a.createElement("title",null,c),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.854 4.646l3 3a.5.5 0 010 .708l-3 3-.708-.707L14.293 8.5H13c-.366 0-.705.135-1.06.38-.361.25-.704.591-1.086.974l-.017.016c-.363.363-.765.765-1.209 1.072-.458.318-.994.558-1.628.558-.339 0-.638-.086-.894-.253a1.813 1.813 0 01-.57-.62c-.254-.437-.394-.996-.511-1.467l-.01-.039c-.13-.52-.24-.943-.416-1.244a.823.823 0 00-.25-.286A.61.61 0 005 7.5c-.354 0-.618.125-.878.348-.225.193-.42.433-.658.723l-.205.25c-.32.383-.706.81-1.23 1.135-.534.332-1.188.544-2.029.544v-1c.659 0 1.13-.163 1.502-.394.382-.237.684-.56.989-.926l.169-.206c.244-.299.512-.628.811-.885C3.868 6.75 4.354 6.5 5 6.5c.339 0 .638.086.894.253.25.163.433.386.57.62.254.437.394.996.511 1.467l.01.039c.13.52.24.943.416 1.244.082.141.166.23.25.286A.61.61 0 008 10.5c.366 0 .705-.135 1.06-.38.362-.25.704-.591 1.086-.974l.017-.016c.363-.363.765-.765 1.209-1.072.458-.318.994-.558 1.628-.558h1.293l-2.147-2.146.708-.708z",fill:"currentColor"}))}},8042:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var o={};function a(e,t,n,o,a,r,i){try{var c=e[r](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(o,a)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function c(e){a(i,o,r,c,s,"next",e)}function s(e){a(i,o,r,c,s,"throw",e)}c(void 0)}))}}n.r(o),n.d(o,{jZ:function(){return j},um:function(){return R},DJ:function(){return L},C5:function(){return K},L5:function(){return Y},zd:function(){return U},lA:function(){return Z},Y5:function(){return D},JI:function(){return M},pb:function(){return H},jY:function(){return z},Dn:function(){return O},DW:function(){return S},jc:function(){return B},lp:function(){return $},IG:function(){return C},mp:function(){return T},Jz:function(){return N}});var i=n(7757),c=n.n(i),s=n(7294),l=n(8244),u=n(2982),d=n(1597),f=n(8601),p=n(3823),m=n(5546),h=n(3366),g=n(2318),v=n.n(g),b=n(3830),w=new Array,x=new Array("sketch","sketchDiv");var y={root:["root"]};var I,k,P=Object.assign(((k=function(e){var t=(0,f.xf)(e,{name:I,descendantNames:(0,u.Z)(y[I]),internalArgPropNames:x,internalVariantPropNames:w});return function(e){e.variants;var t,n=e.args,o=e.overrides,a=e.forNode,r=(0,f.LK)({mode:(0,l.yU)()});return(0,f.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":o.root,"data-plasmic-root":!0,"data-plasmic-for-node":a,className:(0,f.AK)(b.$6,b.WY,b.E,b.oY,"PlasmicP5Sketch-module--root--TbKwL",(t={},t[b.Y5]=(0,f.zK)(r,"mode","dark"),t))},f.nR({defaultContents:null,value:n.sketchDiv}))}({variants:t.variants,args:t.args,overrides:t.overrides,forNode:I})}).displayName="root"===(I="root")?"PlasmicP5Sketch":"PlasmicP5Sketch."+I,k),{internalVariantProps:w,internalArgProps:x}),_=["sketch","name","sketchDiv","ref"];var A=function(e){var t=e.sketch,n=e.name,o=(e.sketchDiv,e.ref,(0,h.Z)(e,_)),a=(0,s.useRef)();return(0,s.useEffect)((function(){new(v())(t,a.current)}),[t]),s.createElement(P,Object.assign({sketchDiv:s.createElement("div",{className:"p5sketch",id:n,ref:a})},o))},E=n(5216),N="PlasmicLatest-module--root--SO3dp",S="PlasmicLatest-module--nav__y4KKq--bxTeg",R="PlasmicLatest-module--info--YDin-",K="PlasmicLatest-module--infoIcon2--zLaLl",M="PlasmicLatest-module--link__pjSjj--D30rk",z="PlasmicLatest-module--logo--0tXOE",O="PlasmicLatest-module--modeToggle--T3SbC",L="PlasmicLatest-module--infoIcon--X5Ncd",j="PlasmicLatest-module--freeBox--gM1-t",C="PlasmicLatest-module--p5Sketch--FJ7o-",B="PlasmicLatest-module--nav__yl7QF--iBcpA",T="PlasmicLatest-module--prev--adX7O",Y="PlasmicLatest-module--infoIcon3--GyCoC",D="PlasmicLatest-module--link__jqUyF--4210H",H="PlasmicLatest-module--list--sREkz",Z="PlasmicLatest-module--infoIcon5--e2RO9",$="PlasmicLatest-module--next--gvXtc",U="PlasmicLatest-module--infoIcon4--y8kBA",X=n(7818),F=n(1145),W=["className","style","title"];var V=function(e){var t=e.className,n=e.style,o=e.title,a=(0,h.Z)(e,W);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",height:"1em",width:"1em",style:Object.assign({fill:"currentcolor"},n||{}),className:(0,f.AK)("plasmic-default__svg",t)},a),o&&s.createElement("title",null,o),s.createElement("path",{d:"M8 0l1.026 1.778H6.974L8 0zm0 13.037a4.74 4.74 0 110-9.481 4.74 4.74 0 010 9.481zm5.126-8.711l.53-1.983-1.982.531 1.452 1.452zM16 8l-1.778 1.026V6.974L16 8zm-4.326 5.126l1.983.53-.531-1.982-1.452 1.452zM8 16l1.026-1.778H6.974L8 16zm-3.674-2.874l-1.983.53.531-1.982 1.452 1.452zM0 8l1.778 1.026V6.974L0 8zm2.874-3.674l-.53-1.983 1.982.531-1.452 1.452z",fill:"currentColor"}))},Q=["className","style","title"];var q=function(e){var t=e.className,n=e.style,o=e.title,a=(0,h.Z)(e,Q);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",height:"1em",width:"1em",style:Object.assign({fill:"currentcolor"},n||{}),className:(0,f.AK)("plasmic-default__svg",t)},a),o&&s.createElement("title",null,o),s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.707 8.5l2.147 2.146-.708.708-3-3a.5.5 0 010-.708l3-3 .708.708L1.707 7.5H3c1.134 0 2.11.558 2.95 1.038l.048.028c.899.513 1.657.934 2.502.934.893 0 1.263-.243 1.487-.519a2.51 2.51 0 00.339-.602c.047-.11.093-.225.142-.348l.018-.046c.055-.14.115-.288.182-.438.273-.613.673-1.28 1.516-1.775C13.01 5.287 14.204 5 16 5v1c-1.704 0-2.698.275-3.31.634-.593.35-.88.807-1.108 1.32a11.154 11.154 0 00-.185.447c-.049.122-.1.249-.152.373-.12.278-.267.574-.482.839-.463.568-1.156.887-2.263.887-1.134 0-2.11-.558-2.95-1.038l-.048-.028C4.603 8.921 3.845 8.5 3 8.5H1.707z",fill:"currentColor"}))},G=["className","style","title"];var J=function(e){var t=e.className,n=e.style,o=e.title,a=(0,h.Z)(e,G);return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16",height:"1em",width:"1em",className:(0,f.AK)("plasmic-default__svg",t),style:n},a),o&&s.createElement("title",null,o),s.createElement("g",{clipPath:"url(#14zpeYc3Ka)",fill:"#000"},s.createElement("path",{d:"M3 15h10v10H3zM3-7h10V3H3zM3 4h10v10H3z"})),s.createElement("defs",null,s.createElement("clipPath",{id:"14zpeYc3Ka"},s.createElement("path",{fill:"#fff",d:"M0 0h16v16H0z"}))))},ee=n(653),te=new Array,ne=new Array;var oe={root:["root","info","infoIcon2","logo","modeToggle","infoIcon","freeBox","p5Sketch","prev","infoIcon3","list","infoIcon5","next","infoIcon4"],info:["info","infoIcon2"],infoIcon2:["infoIcon2"],logo:["logo"],modeToggle:["modeToggle","infoIcon"],infoIcon:["infoIcon"],freeBox:["freeBox","p5Sketch"],p5Sketch:["p5Sketch"],prev:["prev","infoIcon3"],infoIcon3:["infoIcon3"],list:["list","infoIcon5"],infoIcon5:["infoIcon5"],next:["next","infoIcon4"],infoIcon4:["infoIcon4"]};function ae(e){var t=function(t){var n=(0,f.xf)(t,{name:e,descendantNames:(0,u.Z)(oe[e]),internalArgPropNames:ne,internalVariantPropNames:te});return function(e){e.variants,e.args;var t,n,a,r,i=e.overrides,c=e.forNode,u=(0,f.LK)({screen:(0,E.Xj)(),mode:(0,l.yU)()});return(0,f.eh)(s.Fragment,null,(0,f.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,f.eh)("div",{className:b.jM},((0,f.zK)(u,"screen","desktopOnly"),(0,f.eh)("div",{"data-plasmic-name":"root","data-plasmic-override":i.root,"data-plasmic-root":!0,"data-plasmic-for-node":c,className:(0,f.AK)(b.$6,b.WY,b.E,b.oY,N,(t={},t[b.Y5]=(0,f.zK)(u,"mode","dark"),t[o.rootglobal_mode_dark]=(0,f.zK)(u,"mode","dark"),t))},(0,f.eh)("nav",{className:(0,f.AK)(b.$6,S,(n={},n[o.navglobal_mode_dark__y4KKQcm4Qj]=(0,f.zK)(u,"mode","dark"),n))},(0,f.eh)(p.Z,{"data-plasmic-name":"info","data-plasmic-override":i.info,className:(0,f.AK)("__wab_instance",R),icon:(0,f.eh)(X.Z,{"data-plasmic-name":"infoIcon2","data-plasmic-override":i.infoIcon2,className:(0,f.AK)(b.$6,K),role:"img"})}),(0,f.eh)(f.L,{className:(0,f.AK)(b.$6,b.a,M),component:d.rU,href:"/",platform:"gatsby"},((0,f.zK)(u,"screen","desktopOnly"),(0,f.eh)(m.Z,{"data-plasmic-name":"logo","data-plasmic-override":i.logo,className:(0,f.AK)("__wab_instance",z)}))),(0,f.eh)(p.Z,{"data-plasmic-name":"modeToggle","data-plasmic-override":i.modeToggle,className:(0,f.AK)("__wab_instance",O),icon:(0,f.eh)(f.HM,{"data-plasmic-name":"infoIcon","data-plasmic-override":i.infoIcon,PlasmicIconType:(0,f.zK)(u,"mode","dark")?V:F.Z,className:(0,f.AK)(b.$6,L,(a={},a[o.infoIconglobal_mode_dark]=(0,f.zK)(u,"mode","dark"),a)),role:"img"})})),((0,f.zK)(u,"screen","desktopOnly"),(0,f.eh)(f.Kq,{as:"div","data-plasmic-name":"freeBox","data-plasmic-override":i.freeBox,hasGap:!0,className:(0,f.AK)(b.$6,j)},(0,f.eh)(A,{"data-plasmic-name":"p5Sketch","data-plasmic-override":i.p5Sketch,className:(0,f.AK)("__wab_instance",C)}))),(0,f.eh)("nav",{className:(0,f.AK)(b.$6,B,(r={},r[o.navglobal_mode_dark__yl7QFcm4Qj]=(0,f.zK)(u,"mode","dark"),r))},(0,f.eh)(p.Z,{"data-plasmic-name":"prev","data-plasmic-override":i.prev,className:(0,f.AK)("__wab_instance",T),icon:(0,f.eh)(q,{"data-plasmic-name":"infoIcon3","data-plasmic-override":i.infoIcon3,className:(0,f.AK)(b.$6,Y),role:"img"})}),(0,f.eh)(f.L,{className:(0,f.AK)(b.$6,b.a,D),component:d.rU,href:"/list",platform:"gatsby"},((0,f.zK)(u,"screen","desktopOnly"),(0,f.eh)(p.Z,{"data-plasmic-name":"list","data-plasmic-override":i.list,className:(0,f.AK)("__wab_instance",H),icon:(0,f.eh)(J,{"data-plasmic-name":"infoIcon5","data-plasmic-override":i.infoIcon5,className:(0,f.AK)(b.$6,Z),role:"img"})}))),(0,f.eh)(p.Z,{"data-plasmic-name":"next","data-plasmic-override":i.next,className:(0,f.AK)("__wab_instance",$),icon:(0,f.eh)(ee.Z,{"data-plasmic-name":"infoIcon4","data-plasmic-override":i.infoIcon4,className:(0,f.AK)(b.$6,U),role:"img"})}))))))}({variants:n.variants,args:n.args,overrides:n.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicLatest":"PlasmicLatest."+e,t}var re,ie=Object.assign(ae("root"),{info:ae("info"),infoIcon2:ae("infoIcon2"),logo:ae("logo"),modeToggle:ae("modeToggle"),infoIcon:ae("infoIcon"),freeBox:ae("freeBox"),p5Sketch:ae("p5Sketch"),prev:ae("prev"),infoIcon3:ae("infoIcon3"),list:ae("list"),infoIcon5:ae("infoIcon5"),next:ae("next"),infoIcon4:ae("infoIcon4"),internalVariantProps:te,internalArgProps:ne}),ce={opacity:{low:10,lowMid:30,mid:50,highMid:75,high:90,full:100},black:{h:191,s:28,b:24,rr:43,gg:57,bb:60,hh:191,ss:17,ll:20,hex:"'#2b393c'"},white:{h:180,s:1,b:95,a:100},red:{h:12,s:86,b:95,a:100},orange:{h:32,s:85,b:98,a:100},yellow:{h:65,s:76,b:89,a:100},green:{h:121,s:78,b:96,a:100},mint:{h:166,s:94,b:93,a:100},blue:{h:203,s:52,b:93,a:100},violet:{h:280,s:55,b:92,a:100},pink:{h:338,s:22,b:100,a:100,hex:"#ffc8dc"}},se=n.p+"static/letterA-8b80923ddb1fb5df20983a1c2f281632.png",le=n.p+"static/letterA-back-75-f779ffa50d63d96d638ff7028756a2fe.png",ue=function(e){var t=e.windowWidth>768?.61*e.windowHeight:.81*e.windowWidth,n=e.createCanvas(t,t);return e.background(e.color(ce.black.h,ce.black.s,ce.black.s)),n},de=function(e){var t=e.windowWidth>768?.61*e.windowHeight:.81*e.windowWidth;e.resizeCanvas(t,t)},fe=function(e,t,n,o,a){e.push(),e.fill(e.color(t,n,o,a)),e.noStroke(),e.rect(0,0,e.width,e.height),e.pop()},pe=function(e){var t,n=function(){function t(e,t,n,o,a,r){this.id=e,this.x=t,this.y=n,this.speed=a,this.color=r,this.radius=o,this.angle=0,this.dead=!1}var n=t.prototype;return n.run=function(){this.update(),this.display()},n.update=function(){this.x>e.width&&(this.dead=!0),this.dead||(this.x+=this.speed)},n.display=function(){e.push(),e.translate(this.x,this.y),e.rotate(this.angle),e.fill(this.color),e.noStroke(),e.triangle(-this.radius,-this.radius,-this.radius,this.radius,1.5*this.radius,0),e.pop()},n.setAngle=function(e){this.angle=e},n.isDead=function(){return this.dead},t}(),o=[],a=Object.keys(ce);a.splice(0,2);var r,i,c=ce.opacity;e.preload=function(){r=e.loadImage(se),i=e.loadImage(le)},e.setup=function(){ue(e),t={x:e.width/2,y:e.height/2},e.ellipseMode(e.RADIUS),e.colorMode(e.HSB,360,100,100,100),e.frameRate(33),e.noCursor()},e.draw=function(){e.image(i,0,0,e.width,e.height);var n=a[Math.floor(e.random(5,8))],l=e.atan2(e.mouseY-t.x,e.mouseX-t.x);s(ce[n]);for(var u=o.length-1;u>0;u--)void 0!==o[u]&&(e.push(),e.translate(t.x,t.y),e.rotate(l),o[u].run(),e.pop(),o[u].isDead()&&o.splice(u,1));e.image(r,0,0,e.width,e.height),e.push(),e.fill(0,c.low),e.circle(e.mouseX,e.mouseY,15),e.pop()};var s=function(a){var r=o.length,i=-t.x,s=e.random(-t.y,t.y),l=e.random(1,8),u=e.random(1,20),d=e.color(a.h,a.s,a.b,c.full);o.push(new n(r,i,s,l,u,d))};e.windowResized=function(){de(e)}},me=n.p+"static/letterB-positive-dbb16f81f378805a55963cd2f4bd07c8.jpg",he=n.p+"static/letterB-negative-99c3dd08a2bf9c993aacfdee764209ca.jpg",ge=function(e){ue(e),Object.keys(ce).splice(0,1);var t,n,o,a,r,i=ce.opacity,c=ce.black,s=ce.white,l=0;e.preload=function(){a=e.loadImage(me),r=e.loadImage(he)},e.setup=function(){o=ue(e),e.colorMode(e.HSB,360,100,100,100),t=e.color(s.h,s.s,s.b,s.a),n=e.color(c.h,c.s,c.b,c.a),e.ellipseMode(e.RADIUS),e.noCursor(),e.frameRate(30),e.background(n)},e.draw=function(){var n=l%2?a:r;e.image(n,0,0,e.width,e.height),e.push(),e.translate(e.mouseX,e.mouseY),e.fill(t),e.noStroke(),e.circle(0,0,20),e.pop(),fe(e,c.h,c.s,c.b,i.low),o.mousePressed((function(){l++}))},e.windowResized=function(){de(e)}},ve=n.p+"static/cFull-e584cfff67bde21df731e396e68c37c8.png",be=n.p+"static/cBlue-baa92e3bb0db765f8fa60c7cd21de9bd.png",we=n.p+"static/cWhite-ca027cb604564ea1950c885ce7c4c6ab.png",xe=n.p+"static/cYellow-ead6f5b7fa4bff9881ce9e606c7b50f6.png",ye=function(e){ue(e),Object.keys(ce).splice(0,1);var t,n,o,a,r,i,c,s,l,u,d,f=ce.opacity,p=ce.mint,m=ce.white,h=0;e.preload=function(){a=e.loadImage(ve),r=e.loadImage(be),i=e.loadImage(we),c=e.loadImage(xe)},e.setup=function(){o=ue(e),e.colorMode(e.HSB,360,100,100,100),n=e.color(m.h,m.s,m.b,f.low),t=e.color(p.h,p.s,p.b,f.low),e.ellipseMode(e.RADIUS),e.noCursor(),e.frameRate(30),e.background(n),e.noStroke()};var g=.19*e.height,v=.35*e.height,b=.8*e.width,w=.4*e.width;e.draw=function(){switch(h%4){default:case 3:s=r;break;case 2:s=c;break;case 1:s=a;break;case 0:s=i}d=3*e.frameCount%540,t=e.color((p.h+1.5*e.frameCount)%360,p.s,p.b,f.low),d<90?(l=b-d/90*w,u=v):d<180?(l=b-w+g*Math.cos(-2*(d-90)*Math.PI/180-Math.PI/2),u=v+g+g*Math.sin(2*d*Math.PI/180+Math.PI/2)):d<270?(l=b-w+(d-180)/90*w,u=v+2*g):d<360?(l=b-(d-270)/90*w,u=v+2*g):d<450?(l=b-w+g*Math.cos(-2*(d-90)*Math.PI/180+Math.PI/2),u=v+g+g*Math.sin(2*d*Math.PI/180+Math.PI/2)):(l=b-w+(d-450)/90*w,u=v),e.push(),e.fill(t),e.push(),e.translate(l,u),e.circle(0,0,150),e.pop(),e.push(),e.translate(l,1.05*e.height-u),e.circle(0,0,150),e.pop(),e.pop(),e.image(s,0,0,e.width,e.height),e.image(r,0,0,e.width,e.height),fe(e,m.h,m.s,m.b,f.low),o.mousePressed((function(){h++}))},e.windowResized=function(){de(e)}},Ie=n.p+"static/dStaff-394cd5e9bfb28f08267ade02e6d6a0eb.png",ke=n.p+"static/dNote-bf58cdd1bc58c93d9c241b9e0cb4e0e5.png",Pe=function(e){ue(e),Object.keys(ce).splice(0,1);var t,n,o,a,r,i=ce.opacity,c=ce.white,s=1,l=.445*s;e.preload=function(){o=e.loadImage(Ie),a=e.loadImage(ke)},e.setup=function(){n=ue(e),e.colorMode(e.HSB,360,100,100,100),t=e.color(c.h,c.s,c.b,c.a),e.ellipseMode(e.RADIUS),e.noCursor(),e.frameRate(30),e.background(t),r=.4*e.width,l*=r,s*=r},e.draw=function(){e.image(o,0,0,e.width,e.height),e.push(),e.translate(e.mouseX,e.mouseY),e.fill(ce.red.h,ce.red.b,ce.red.b,i.low),e.noStroke(),e.circle(0,0,5),e.pop(),fe(e,c.h,c.s,c.b,i.low),n.mousePressed((function(){e.image(a,e.mouseX-l/2,e.mouseY-.85*s,l,s)}))},e.windowResized=function(){de(e),r=.4*e.width,l*=r,s*=r}},_e=n.p+"static/dotCalendar-efa60bcc15450710e0fc1ec127a6ad94.png",Ae=[pe,ge,ye,Pe,function(e){ue(e);e.width,e.height;Object.keys(ce).splice(0,1);var t,n,o=ce.opacity,a=ce.black,r=ce.pink;e.preload=function(){re=e.loadImage(_e)},e.setup=function(){ue(e),e.colorMode(e.HSB,360,100,100,100),t=e.color(a.h,a.s,a.b,a.a),n=e.color(r.h,r.s,r.b,r.a),e.ellipseMode(e.RADIUS),e.noCursor(),e.frameRate(30),e.background(n)},e.draw=function(){e.push(),e.translate(e.mouseX,e.mouseY),e.fill(t),e.noStroke(),e.circle(0,0,20),e.pop(),e.image(re,0,0,e.width,e.height),fe(e,r.h,r.s,r.b,o.low)},e.windowResized=function(){de(e)}}];var Ee=function(){var e=(0,s.useState)(Ae.length-1),t=e[0],n=e[1],o=(0,s.useState)(void 0),a=o[0],i=o[1],u=Ae[t-1],d=(0,s.useState)({props:{sketch:u,name:"day-"+t}}),f=d[0],p=d[1];(0,s.useEffect)((function(){u=Ae[t-1],console.log(u),p({props:{sketch:u,name:"day-"+t}})}),[t]);var m,h,g=function(){var e=r(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector("#day-"+t+" canvas");case 2:return n=e.sent,e.next=5,n.remove();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.createElement(l.QB.Provider,{value:a},s.createElement(ie,{p5Sketch:f,modeToggle:{onClick:function(){i("dark"===a?"light":"dark")}},prev:{onClick:(h=r(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n(t-1>0?t-1:Ae.length);case 4:case"end":return e.stop()}}),e)}))),function(){return h.apply(this,arguments)})},next:{onClick:(m=r(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n(t<Ae.length?t+1:1);case 4:case"end":return e.stop()}}),e)}))),function(){return m.apply(this,arguments)})}}))}}}]);
//# sourceMappingURL=component---src-pages-latest-jsx-d9f95dc66ad20d338cc3.js.map