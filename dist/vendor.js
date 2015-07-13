/*
 AngularJS v1.4.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,t){'use strict';function J(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.2/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ea(b){if(null==b||Wa(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:L(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(z(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Ea(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Xa.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(H(g)||z(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],r=g[n];c&&H(r)?aa(r)?b[n]=new Date(r.valueOf()):(H(b[n])||
(b[n]=G(r)?[]:{}),Nb(b[n],[r],!0)):b[n]=r}}qc(b,d);return b}function P(b){return Nb(b,za.call(arguments,1),!1)}function Vd(b){return Nb(b,za.call(arguments,1),!0)}function W(b){return parseInt(b,10)}function Ob(b,a){return P(Object.create(b),a)}function v(){}function Ya(b){return b}function ra(b){return function(){return b}}function rc(b){return z(b.toString)&&b.toString!==Object.prototype.toString}function A(b){return"undefined"===typeof b}function w(b){return"undefined"!==typeof b}function H(b){return null!==
b&&"object"===typeof b}function nc(b){return null!==b&&"object"===typeof b&&!sc(b)}function L(b){return"string"===typeof b}function V(b){return"number"===typeof b}function aa(b){return"[object Date]"===sa.call(b)}function z(b){return"function"===typeof b}function Za(b){return"[object RegExp]"===sa.call(b)}function Wa(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}
function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Wa(b)||$a(b))throw Fa("cpws");if(uc.test(sa.call(a)))throw Fa("cpta");if(a){if(b===a)throw Fa("cpi");c=c||[];d=d||[];H(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?a.length=0:m(a,function(b,
c){delete a[c]});if(nc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Xa.call(b,e)&&(a[e]=fa(b[e],null,c,d));qc(a,f)}}else if(a=b,H(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(uc.test(sa.call(b)))a=new b.constructor(b);else if(aa(b))a=new Date(b.getTime());else if(Za(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex;else return e=
Object.create(sc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(aa(b))return aa(a)?
ka(b.getTime(),a.getTime()):!1;if(Za(b))return Za(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Wa(b)||Wa(a)||G(a)||aa(a)||Za(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!z(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===t||z(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(za.call(a,c))}function vc(b,a){var c=2<arguments.length?za.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Wa(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function wc(b){return L(b)?JSON.parse(b):b}function xc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Pb(b,
a,c){c=c?-1:1;var d=xc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return b[0].nodeType===Na?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function yc(b){try{return decodeURIComponent(b)}catch(a){}}function zc(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,
"%20").split("="),d=yc(c[0]),w(d)&&(b=w(c[1])?yc(c[1]):!0,Xa.call(a,d)?G(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function ob(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,
"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Oa.length;for(d=0;d<e;++d)if(c=Oa[d]+a,L(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Oa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Oa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),a(c,d?[d]:[],e))}function Ac(b,a,c){H(c)||
(c={});c=P({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===U?"document":ua(b);throw Fa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=
/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");ca.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function $d(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function ae(b){b=ca.element(b).injector();if(!b)throw Fa("test");return b.get("$$testability")}function Bc(b,a){a=a||
"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Cc){var a=pb();la=O.jQuery;w(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(y=la,P(la.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):y=Q;ca.element=y;Cc=!0}}function Sb(b,
a,c){if(!b)throw Fa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&G(b)&&(b=b[b.length-1]);Sb(z(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ra(b,a){if("hasOwnProperty"===b)throw Fa("badname",a);}function Dc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?vc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return y(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=J("$injector"),d=J("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||J;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return C}}function b(a,c){return function(b,e){e&&z(e)&&
(e.$$moduleName=f);d.push([a,c,arguments]);return C}}if(!g)throw c("nomod",f);var d=[],e=[],s=[],x=a("$injector","invoke","push",e),C={_invokeQueue:d,_configBlocks:e,_runBlocks:s,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:x,run:function(a){s.push(a);return this}};h&&x(h);return C})}})}function ee(b){P(b,{bootstrap:Ac,copy:fa,extend:P,merge:Vd,equals:ka,element:y,forEach:m,injector:eb,noop:v,bind:vc,toJson:db,fromJson:wc,identity:Ya,isUndefined:A,isDefined:w,isString:L,isFunction:z,isObject:H,isNumber:V,isElement:tc,isArray:G,version:fe,isDate:aa,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:J,$$csp:fb,reloadWithDebugInfo:$d});
gb=de(O);try{gb("ngLocale")}catch(a){gb("ngLocale",[]).provider("$locale",ge)}gb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:he});a.provider("$compile",Ec).directive({a:ie,input:Fc,textarea:Fc,form:je,script:ke,select:le,style:me,option:ne,ngBind:oe,ngBindHtml:pe,ngBindTemplate:qe,ngClass:re,ngClassEven:se,ngClassOdd:te,ngCloak:ue,ngController:ve,ngForm:we,ngHide:xe,ngIf:ye,ngInclude:ze,ngInit:Ae,ngNonBindable:Be,ngPluralize:Ce,ngRepeat:De,ngShow:Ee,ngStyle:Fe,ngSwitch:Ge,
ngSwitchWhen:He,ngSwitchDefault:Ie,ngOptions:Je,ngTransclude:Ke,ngModel:Le,ngList:Me,ngChange:Ne,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Oe,ngModelOptions:Pe}).directive({ngInclude:Qe}).directive(sb).directive(Kc);a.provider({$anchorScroll:Re,$animate:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Lc,$interpolate:$e,$interval:af,$http:bf,$httpParamSerializer:cf,
$httpParamSerializerJQLike:df,$httpBackend:ef,$location:ff,$log:gf,$parse:hf,$rootScope:jf,$q:kf,$$q:lf,$sce:mf,$sceDelegate:nf,$sniffer:of,$templateCache:pf,$templateRequest:qf,$$testability:rf,$timeout:sf,$window:tf,$$rAF:uf,$$asyncCallback:vf,$$jqLite:wf,$$HashMap:xf,$$cookieReader:yf})}])}function hb(b){return b.replace(zf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Af,"Moz$1")}function Mc(b){b=b.nodeType;return b===qa||!b||9===b}function Nc(b,a){var c,d,e=a.createDocumentFragment(),
f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Bf.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Cf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;var a;L(b)&&(b=R(b),a=!0);if(!(this instanceof Q)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new Q(b)}if(a){a=
U;var c;b=(c=Df.exec(b))?[a.createElement(c[1])]:(c=Nc(b,a))?c.childNodes:[]}Oc(this,b)}function Vb(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Pc(b,a,c,d){if(w(d))throw Ub("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(w(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,
f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&ib[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Pc(b)),delete ib[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&ib[c];a&&!c&&(b.ng339=c=++Ef,c=ib[c]={events:{},data:{},handle:t});return c}function Wb(b,a,c){if(Mc(b)){var d=w(c),e=!d&&a&&!H(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];P(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+
" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",R((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+R(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=R(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",R(c))}}function Oc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=
a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Qc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=y.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Rc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ff(b,
a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);else y(a).on("load",b)}function Sc(b,a){var c=Ab[a.toLowerCase()];return c&&Tc[ta(b)]&&c}function Gf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Uc[a]}function Hf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(A(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function wf(){this.$get=function(){return P(Q,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Sa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function If(b){return(b=b.toString().replace(Vc,"").match(Wc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(H(b))m(b,pc(a));else return a(b,c)}}function d(a,b){Ra(a,"service");if(z(b)||G(b))b=s.instantiate(b);
if(!b.$get)throw Ha("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=C.invoke(b,this);if(A(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{L(a)?(c=gb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(s.invoke(a)):G(a)?
b.push(s.invoke(a)):Qa(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,
a,g),l,s,n;s=0;for(l=k.length;s<l;s++){n=k[s];if("string"!==typeof n)throw Ha("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Sa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ra(b),!1)}),constant:c(function(a,b){Ra(a,"constant");r[a]=b;x[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){ca.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),x={},C=x.$injector=h(x,function(a,b){var c=s.get(a+"Provider",b);return C.invoke(c.$get,c,t,a)});m(g(b),
function(a){a&&C.invoke(a)});return C}function Re(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():tc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,
0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ff(function(){d.$evalAsync(g)})});return g}]}function jb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function Jf(b){L(b)&&(b=b.split(" "));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return H(b)?
b:{}}function vf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function Kf(b,a,c,d){function e(a){try{a.apply(null,za.call(arguments,1))}finally{if(C--,0===C)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=A(u)?null:u;ka(u,D)&&(u=D);D=u}function h(){if(K!==l.url()||p!==u)K=l.url(),p=u,m(B,function(a){a(l.url(),u)})}var l=this,k=b.location,n=
b.history,r=b.setTimeout,s=b.clearTimeout,x={};l.isMock=!1;var C=0,F=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){C++};l.notifyWhenNoOutstandingRequests=function(a){0===C?a():F.push(a)};var u,p,K=k.href,q=a.find("base"),I=null;g();p=u;l.url=function(a,c,e){A(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(K===a&&(!d.history||f))return l;var h=K&&Ja(K)===Ja(a);K=a;p=e;if(!d.history||h&&f){if(!h||I)I=a;c?k.replace(a):h?(c=
k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else n[c?"replaceState":"pushState"](e,"",a),g(),p=u;return l}return I||k.href.replace(/%27/g,"'")};l.state=function(){return u};var B=[],N=!1,D=null;l.onUrlChange=function(a){if(!N){if(d.history)y(b).on("popstate",f);y(b).on("hashchange",f);N=!0}B.push(a);return a};l.$$applicationDestroyed=function(){y(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,
""):""};l.defer=function(a,b){var c;C++;c=r(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};l.defer.cancel=function(a){return x[a]?(delete x[a],s(a),e(v),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Kf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw J("$cacheFactory")("iid",b);var g=0,h=P({},
d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},r=null,s=null;return a[b]={put:function(a,b){if(!A(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};r=s=null},destroy:function(){n=h=
l=null;delete a[b]},info:function(){return P({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function pf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Ec(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===
g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Ra(a,"directive");L(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",
function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);z(h)?h={compile:ra(h)}:!h.compile&&h.link&&(h.compile=ra(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,s=h.name,n={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,s,!0),n.isolateScope={}):n.isolateScope=c(l.scope,s,!1));H(l.bindToController)&&(n.bindToController=c(l.bindToController,
s,!0));if(H(n.bindToController)){var C=l.controller,$=l.controllerAs;if(!C)throw ea("noctrl",s);var ha;a:if($&&L($))ha=$;else{if(L(C)){var m=Xc.exec(C);if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea("noident",s);}var q=k.$$bindings=n;H(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,pc(s));return this};this.aHrefSanitizationWhitelist=function(b){return w(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};
this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,K,q,I,B,N){function D(a,b){try{a.addClass(b)}catch(c){}}function Z(a,b,c,d,e){a instanceof y||(a=y(a));m(a,function(b,c){b.nodeType==
Na&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);Z.$$addScopeClass(a);var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?y(Yb(g,y("<div>").append(a).html())):c?Pa.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",
h[k].instance);Z.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,s,n,B,C;if(p)for(C=Array(c.length),s=0;s<h.length;s+=3)f=h[s],C[f]=c[f];else C=c;s=0;for(n=h.length;s<n;)if(k=C[h[s++]],c=h[s++],f=h[s++],c){if(c.scope){if(l=a.$new(),Z.$$addScopeInfo(y(k),l),B=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",B)}else l=a;B=c.transcludeOnThisElement?$(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?$(a,b):null;c(f,l,k,d,
B,c)}else f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,s,n,p,B=0;B<a.length;B++){k=new aa;l=ha(a[B],[],k,0===B?d:t,e);(f=l.length?E(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&Z.$$addScopeClass(k.$$element);k=f&&f.terminal||!(s=a[B].childNodes)||!s.length?null:S(s,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),n=!0,p=p||f;f=null}return n?g:null}function $(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,
transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case qa:w(b,wa(ta(a)),"E",d,e);for(var l,s,n,p=a.attributes,B=0,C=p&&p.length;B<C;B++){var x=!1,S=!1;l=p[B];k=l.name;s=R(l.value);l=wa(k);if(n=ia.test(l))k=k.replace(Zc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=l.replace(/(Start|End)$/,"");A(F)&&l===F+"Start"&&(x=k,S=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=
s,Sc(a,l)&&(c[l]=!0);V(a,b,s,l,n);w(b,l,"A",d,e,x,S)}a=a.className;H(a)&&(a=a.animVal);if(L(a)&&""!==a)for(;k=g.exec(a);)l=wa(k[2]),w(b,l,"C",d,e)&&(c[l]=R(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ua)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);xa(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),w(b,l,"M",d,e)&&(c[l]=R(k[2]))}catch($){}}b.sort(Aa);return b}function va(a,
b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function Yc(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,s){function n(a,b,c,d){if(a){c&&(a=Yc(a,c,d));a.require=E.require;a.directiveName=w;if(u===E||E.$$isolateScope)a=X(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Yc(b,c,d));b.require=
E.require;b.directiveName=w;if(u===E||E.$$isolateScope)b=X(b,{isolateScope:!0});k.push(b)}}function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function x(a,b,c,d,e,f){var g=ga(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?
e:f,$element:a,$attrs:b,$transclude:c},s=k.controller;"@"==s&&(s=b[k.name]);l=p(s,l,!0,k.controllerAs);g[k.name]=l;q||a.data("$"+k.name+"Controller",l.instance)}return g}function S(a,c,e,f,g,l){function s(a,b,c){var d;$a(a)||(c=b,b=a,a=t);q&&(d=m);c||(c=q?ja.parent():ja);return g(a,b,d,c,va)}var n,p,C,F,m,ha,ja;b===e?(f=d,ja=d.$$element):(ja=y(e),f=new aa(ja,d));u&&(F=c.$new(!0));g&&(ha=s,ha.$$boundTransclude=g);N&&(m=x(ja,f,ha,N,F,c));u&&(Z.$$addScopeInfo(ja,F,!0,!(D&&(D===u||D===u.$$originalDirective))),
Z.$$addScopeClass(ja,!0),F.$$isolateBindings=u.$$isolateBindings,W(c,f,F,F.$$isolateBindings,u,F));if(m){var K=u||$,I;K&&m[K.name]&&(p=K.$$bindings.bindToController,(C=m[K.name])&&C.identifier&&p&&(I=C,l.$$destroyBindings=W(c,f,C.instance,p,K)));for(n in m){C=m[n];var E=C();E!==C.instance&&(C.instance=E,ja.data("$"+n+"Controller",E),C===I&&(l.$$destroyBindings(),l.$$destroyBindings=W(c,f,E,p,K)))}}n=0;for(l=h.length;n<l;n++)p=h[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,
ja,m),ha);var va=c;u&&(u.template||null===u.templateUrl)&&(va=F);a&&a(va,e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,ja,m),ha)}s=s||{};for(var F=-Number.MAX_VALUE,$=s.newScopeDirective,N=s.controllerDirectives,u=s.newIsolateScopeDirective,D=s.templateDirective,m=s.nonTlbTranscludeDirective,K=!1,I=!1,q=s.hasElementTranscludeDirective,ba=d.$$element=y(b),E,w,v,A=e,Aa,xa=0,Ta=a.length;xa<Ta;xa++){E=a[xa];var M=E.$$start,P=E.$$end;
M&&(ba=va(b,M,P));v=t;if(F>E.priority)break;if(v=E.scope)E.templateUrl||(H(v)?(O("new/isolated scope",u||$,E,ba),u=E):O("new/isolated scope",u,E,ba)),$=$||E;w=E.name;!E.templateUrl&&E.controller&&(v=E.controller,N=N||ga(),O("'"+w+"' controller",N[w],E,ba),N[w]=E);if(v=E.transclude)K=!0,E.$$tlb||(O("transclusion",m,E,ba),m=E),"element"==v?(q=!0,F=E.priority,v=ba,ba=d.$$element=y(U.createComment(" "+w+": "+d[w]+" ")),b=ba[0],T(f,za.call(v,0),b),A=Z(v,e,F,g&&g.name,{nonTlbTranscludeDirective:m})):(v=
y(Vb(b)).contents(),ba.empty(),A=Z(v,e));if(E.template)if(I=!0,O("template",D,E,ba),D=E,v=z(E.template)?E.template(ba,d):E.template,v=fa(v),E.replace){g=E;v=Tb.test(v)?$c(Yb(E.templateNamespace,R(v))):[];b=v[0];if(1!=v.length||b.nodeType!==qa)throw ea("tplrt",w,"");T(f,ba,b);Ta={$attr:{}};v=ha(b,[],Ta);var Q=a.splice(xa+1,a.length-(xa+1));u&&ad(v);a=a.concat(v).concat(Q);J(d,Ta);Ta=a.length}else ba.html(v);if(E.templateUrl)I=!0,O("template",D,E,ba),D=E,E.replace&&(g=E),S=Mf(a.splice(xa,a.length-xa),
ba,d,f,K&&A,h,k,{controllerDirectives:N,newScopeDirective:$!==E&&$,newIsolateScopeDirective:u,templateDirective:D,nonTlbTranscludeDirective:m}),Ta=a.length;else if(E.compile)try{Aa=E.compile(ba,d,A),z(Aa)?n(null,Aa,M,P):Aa&&n(Aa.pre,Aa.post,M,P)}catch(Lf){c(Lf,ua(ba))}E.terminal&&(S.terminal=!0,F=Math.max(F,E.priority))}S.scope=$&&!0===$.scope;S.transcludeOnThisElement=K;S.templateOnThisElement=I;S.transclude=A;s.hasElementTranscludeDirective=q;return S}function ad(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Ob(a[b],{$$isolateScope:!0})}function w(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Ob(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(x){c(x)}}return h}function A(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function J(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,
e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==f?(D(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Mf(a,b,c,e,f,g,h,k){var l=[],s,n,p=b[0],B=a.shift(),C=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),x=z(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,
N=B.templateNamespace;b.empty();d(x).then(function(d){var F,u;d=fa(d);if(B.replace){d=Tb.test(d)?$c(Yb(N,R(d))):[];F=d[0];if(1!=d.length||F.nodeType!==qa)throw ea("tplrt",B.name,x);d={$attr:{}};T(e,b,F);var K=ha(F,[],d);H(B.scope)&&ad(K);a=K.concat(a);J(c,d)}else F=p,b.html(d);a.unshift(C);s=E(a,F,c,f,b,B,g,h,k);m(e,function(a,c){a==F&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var I=l.shift(),va=l.shift(),K=b[0];if(!d.$$destroyed){if(u!==p){var Z=u.className;k.hasElementTranscludeDirective&&
B.replace||(K=Vb(F));T(I,y(u),K);D(y(K),Z)}u=s.transcludeOnThisElement?$(d,s.transclude,va):va;s(n,d,K,e,u,s)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(s.transcludeOnThisElement&&(a=$(b,s.transclude,e)),s(n,b,c,d,a,s)))}}function Aa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),
a,ua(d));}function xa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&Z.$$addBindingClass(a);return function(a,c){var e=c.parent();b||Z.$$addBindingClass(e);Z.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return I.HTML;
var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return I.RESOURCE_URL}function V(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var s=h[e];s!==d&&(l=s&&b(s,!0,g,f),d=s);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||
a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);y.hasData(d)&&(y(c).data(y(d).data()),la?(Rb=!0,la.cleanData([d])):delete y.cache[d[y.expando]]);d=1;for(e=b.length;d<e;d++)f=
b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function X(a,b){return P(function(){return a.apply(null,arguments)},a,b)}function Y(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function W(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,s=e.mode,n,p,B,C;Xa.call(c,k)||(c[k]=t);switch(s){case "@":c[k]||l||(d[g]=t);c.$observe(k,function(a){d[g]=a});c.$$observers[k].$$scope=a;c[k]&&(d[g]=b(c[k])(a));break;case "=":if(l&&!c[k])break;p=u(c[k]);C=p.literal?ka:function(a,
b){return a===b||a!==a&&b!==b};B=p.assign||function(){n=d[g]=p(a);throw ea("nonassign",c[k],f.name);};n=d[g]=p(a);l=function(b){C(b,d[g])||(C(b,n)?B(a,b=d[g]):d[g]=b);return n=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,p.literal);h=h||[];h.push(l);break;case "&":p=u(c[k]);if(p===v&&l)break;d[g]=function(b){return p(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),
d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&B.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Sc(f,a),h=Gf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):
h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=N(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=R(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var s=2*l,g=g+N(R(h[s]),!0),g=g+(" "+R(h[s+1]));h=R(h[2*l]).split(/\s/);g+=N(R(h[0]),!0);2===h.length&&(g+=" "+R(h[1]));this[a]=b=g}!1!==d&&(null===b||
b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&m(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Ya:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;Z.$$addBindingInfo=n?function(a,b){var c=
a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;Z.$$addBindingClass=n?function(a){D(a,"ng-binding")}:v;Z.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;Z.$$addScopeClass=n?function(a,b){D(a,b?"ng-isolate-scope":"ng-scope")}:v;return Z}]}function wa(b){return hb(b.replace(Zc,""))}function bd(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;
c+=(0<c.length?" ":"")+g}return c}function $c(b){b=y(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Nf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ra(a,"controller");H(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!H(a.$scope))throw J("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,r;h=!0===h;l&&L(l)&&(r=l);if(L(f)){l=f.match(Xc);if(!l)throw Of("ctrlfmt",
f);n=l[1];r=r||l[3];f=b.hasOwnProperty(n)?b[n]:Dc(g.$scope,n,!0)||(a?Dc(d,n,!0):t);Qa(f,n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,n||f.name),P(function(){var a=c.invoke(f,k,g,n);a!==k&&(H(a)||z(a))&&(k=a,r&&e(g,r,k,n||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,n);r&&e(g,r,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return y(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,
arguments)}}]}function Zb(b){return H(b)?aa(b)?b.toISOString():db(b):b}function cf(){this.$get=function(){return function(b){if(!b)return"";var a=[];oc(b,function(b,d){null===b||A(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+"="+ma(Zb(b)))}):a.push(ma(d)+"="+ma(Zb(b))))});return a.join("&")}}}function df(){this.$get=function(){return function(b){function a(b,e,f){null===b||A(b)||(G(b)?m(b,function(b){a(b,e+"[]")}):H(b)&&!aa(b)?oc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Zb(b))))}
if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function $b(b,a){if(L(b)){var c=b.replace(Pf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(cd))||(d=(d=c.match(Qf))&&Rf[d[0]].test(c));d&&(b=wc(c))}}return b}function dd(b){var a=ga(),c;L(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=M(R(b.substr(0,c)));b=R(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):H(b)&&m(b,function(b,c){var f=M(c),g=R(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function ed(b){var a;return function(c){a||
(a=dd(b));return c?(c=a[M(c)],void 0===c&&(c=null),c):a}}function fd(b,a,c,d){if(z(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function bf(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
a=!1;this.useApplyAsync=function(b){return w(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=P({},a);b.data=a.data?fd(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};m(a,function(a,d){z(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ca.isObject(a))throw J("$http")("badreq",
a);var e=P({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=P({},a.headers),f,g,h,c=P({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in e)if(M(h)===g)continue a;e[f]=c[f]}return d(e,ia(a))}(a);e.method=rb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=fd(a.data,ed(d),t,a.transformRequest);A(e)&&
m(d,function(a,b){"content-type"===M(b)&&delete d[b]});A(a.withCredentials)&&!A(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(m(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Qa(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Qa(a,
"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){n(c,b,d,e)}N&&(200<=b&&300>b?N.put(S,[b,c,dd(d),e]):N.remove(S));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:ed(d),config:c,statusText:e})}function x(a){n(a.data,a.status,ia(a.headers()),a.statusText)}function m(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,
1)}var I=h.defer(),B=I.promise,N,D,q=c.headers,S=r(c.url,c.paramSerializer(c.params));k.pendingRequests.push(c);B.then(m,m);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=H(c.cache)?c.cache:H(b.cache)?b.cache:s);N&&(D=N.get(S),w(D)?D&&z(D.then)?D.then(x,x):G(D)?n(D[1],D[0],ia(D[2]),D[3]):n(D,200,{},"OK"):N.put(S,B));A(D)&&((D=gd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(q[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,S,f,l,q,c.timeout,c.withCredentials,c.responseType));
return B}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=f("$http");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var x=[];m(c,function(a){x.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){m(arguments,function(a){k[a]=function(b,c){return k(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){k[a]=function(b,c,d){return k(P({},d||{},{method:a,url:b,data:c}))}})})("post",
"put","patch");k.defaults=b;return k}]}function Sf(){return new O.XMLHttpRequest}function ef(){this.$get=["$browser","$window","$document",function(b,a,c){return Tf(b,Sf,b.defer,a.angular.callbacks,c[0])}]}function Tf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||d[b].called||(a=
{type:"error"}),x=a.type,g="error"===a.type?404:200);c&&c(g,x)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,r,s,x){function C(){p&&p();K&&K.abort()}function F(a,d,e,f,g){I!==t&&c.cancel(I);p=K=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==M(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK",
"angular.callbacks."+u),u,function(a,b){F(k,a,d[u].data,"",b);d[u]=v})}else{var K=a();K.open(e,h,!0);m(n,function(a,b){w(a)&&K.setRequestHeader(b,a)});K.onload=function(){var a=K.statusText||"",b="response"in K?K.response:K.responseText,c=1223===K.status?204:K.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);F(k,c,b,K.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,"")};K.onerror=e;K.onabort=e;s&&(K.withCredentials=!0);if(x)try{K.responseType=x}catch(q){if("json"!==x)throw q;}K.send(l)}if(0<
r)var I=c(C,r);else r&&z(r.then)&&r.then(C)}}function $e(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(r,a)}function h(f,h,n,r){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(r&&!w(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=
""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}r=!!r;for(var p,m,q=0,I=[],B=[],N=f.length,D=[],t=[];q<N;)if(-1!=(p=f.indexOf(b,q))&&-1!=(m=f.indexOf(a,p+l)))q!==p&&D.push(g(f.substring(q,p))),q=f.substring(p+l,m),I.push(q),B.push(c(q,u)),q=m+k,t.push(D.length),D.push("");else{q!==N&&D.push(g(f.substring(q)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!h||I.length){var S=function(a){for(var b=0,c=I.length;b<c;b++){if(r&&A(a[b]))return;D[t[b]]=a[b]}return D.join("")};return P(function(a){var b=
0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return S(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=S(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function af(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,
h,l,k){var n=4<arguments.length,r=n?za.call(arguments,4):[],s=a.setInterval,x=a.clearInterval,C=0,F=w(k)&&!k,u=(F?d:c).defer(),p=u.promise;l=w(l)?l:0;p.then(null,null,n?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){u.notify(C++);0<l&&C>=l&&(u.resolve(C),x(p.$$intervalId),delete f[p.$$intervalId]);F||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],
!0):!1};return e}]}function ge(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);
return b.join("/")}function hd(b,a){var c=Ba(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=W(c.port)||Uf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=zc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ja(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);hd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb("ipthprfx",a,c);id(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);hd(b,this);this.$$parse=function(d){var e=ya(b,d)||ya(c,d),f;A(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",A(e)&&(b=d,this.replace())):(f=ya(a,e),A(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?
f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=
c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function kd(b,a){return function(c){if(A(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ff(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?
(a.enabled=b,this):H(b)?(ab(b.enabled)&&(a.enabled=b.enabled),ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var r=d.url(),
s;if(a.enabled){if(!n&&a.requireBase)throw Cb("nobase");s=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(n||"/");n=e.history?dc:jd}else s=Ja(r),n=ec;k=new n(s,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var x=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=y(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===
h.toString()&&(h=Ba(h.animVal).href);x.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Bb(k.absUrl())!=Bb(r)&&d.url(k.absUrl(),!0);var C=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(C=
!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(C||n)C=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function gf(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};
this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=
e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Ca(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",
a);if(b===Vf||b===Wf||b===Xf)throw da("isecff",a);}}function Yf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function T(b,a){var c,d;switch(b.type){case q.Program:c=!0;m(b.body,function(b){T(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:T(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:T(b.left,
a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:T(b.test,a);T(b.alternate,a);T(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:T(b.object,
a);b.computed&&T(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){T(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];m(b.elements,
function(b){T(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];m(b.properties,function(b){T(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===q.Identifier||b.type===q.MemberExpression}
function pd(b){if(1===b.body.length&&od(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){oa(b,d);a=a.split(".");
for(var e,f=0;1<a.length;f++){e=Ca(a.shift(),d);var g=oa(b[e],d);g||(g={},b[e]=g);b=g}e=Ca(a.shift(),d);oa(b[e],d);return b[e]=c}function Fb(b){return"constructor"==b}function fc(b){return z(b.valueOf)?b.valueOf():Zf.call(b)}function hf(){var b=ga(),a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=
g(a);e(b,k)||(h=d(a,t,t,[b]),k=b&&fc(b));return h},b,c,f)}for(var l=[],n=[],r=0,m=g.length;r<m;r++)l[r]=e,n[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))n[c]=k,l[c]=k&&fc(k)}b&&(h=d(a,t,t,n));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&d.$$postDigest(function(){w(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){w(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,C){var m,u,p;switch(typeof d){case "string":p=d=d.trim();var q=C?a:b;m=q[p];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),C=C?r:n,m=new gc(C),m=(new hc(m,c,C)).parse(d),m.constant?m.$$watchDelegate=l:u?m.$$watchDelegate=m.literal?h:g:m.inputs&&(m.$$watchDelegate=f),q[p]=m);return k(m,
e);case "function":return k(d,e);default:return v}}}]}function kf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function lf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=J("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function x(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof x))return new x(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=n;r.resolve=n;r.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function uf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=
n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function jf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=J("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function F(){for(;I.length;)try{I.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=
l.defer(function(){p.$apply(F)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l=
{fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;z(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);s(this,1);return function(){0<=bb(k,l)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,
f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(H(e))if(Ea(e))for(f!==r&&(f=r,m=f.length=0,l++),a=e.length,m!==a&&(l++,f.length=m=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==s&&(f=s={},m=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(m++,f[b]=g,l++));if(m>a)for(b in l++,f)e.hasOwnProperty(b)||
(m--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,n=h(a,c),r=[],s={},p=!0,m=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(Ea(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Xa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,s,m=a,x,u=[],E,I;r("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),F());d=null;do{s=!1;for(x=this;t.length;){try{I=t.shift(),
I.scope.$eval(I.expression,I.locals)}catch(v){g(v)}d=null}a:do{if(k=x.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(x))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===q?f:h,x),5>m&&(E=4-m,u[E]||(u[E]=[]),u[E].push({msg:z(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(A){g(A)}if(!(k=x.$$watchersCount&&x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==
this&&!(k=x.$$nextSibling);)x=x.$parent}while(x=k);if((s||t.length)&&!m--)throw p.$$phase=null,c("infdig",a,u);}while(s||t.length);for(p.$$phase=null;w.length;)try{w.shift()()}catch(y){g(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==
this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},
$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){w.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&I.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,n--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],w=p.$$postDigestQueue=[],I=p.$$applyAsyncQueue=[];return p}]}function he(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function $f(b){if("self"===b)return b;if(L(b)){if(-1<b.indexOf("***"))throw Da("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Za(b))return new RegExp("^"+b.source+"$");throw Da("imatcher");}function vd(b){var a=[];w(b)&&m(b,function(b){a.push($f(b))});return a}function nf(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Da("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Da("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Da("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Ba(e.toString()),r,s,m=!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){m=!0;break}if(m)for(r=
0,s=a.length;r<s;r++)if(d(a[r],g)){m=!1;break}if(m)return e;throw Da("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Da("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function mf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ua)throw Da("iequirks");var d=ia(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=Ya);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(pa,function(a,b){var c=M(b);d[hb("parse_as_"+c)]=function(b){return e(a,b)};d[hb("get_trusted_"+c)]=function(b){return f(a,b)};d[hb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function of(){this.$get=["$window","$document",function(b,a){var c={},d=W((/android (\d+)/.exec(M((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=L(l.webkitTransition),n=L(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Ua)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:fb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function qf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;L(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,
a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function rf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=ca.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function sf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){z(f)||(k=l,l=f,f=v);var n=za.call(arguments,3),r=w(k)&&!k,s=(r?d:c).defer(),
m=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,n))}catch(a){s.reject(a),e(a)}finally{delete g[m.$$timeoutId]}r||b.$apply()},l);m.$$timeoutId=q;g[q]=s;return m}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ua&&(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,
search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function gd(b){b=L(b)?Ba(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function tf(){this.$get=ra(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function yf(){this.$get=xd}function Lc(b){function a(c,d){if(H(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",ag);a("json",bg);a("limitTo",cg);a("lowercase",dg);a("number",Ad);a("orderBy",Bd);a("uppercase",eg)}function ag(){return function(b,
a,c){if(!Ea(b)){if(null==b)return b;throw J("filter")("notarray",b);}var d;switch(ic(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=fg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function fg(b,a,c){var d=H(b)&&"$"in b;!0===a?a=ka:z(a)||(a=function(a,b){if(A(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!rc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?La(e,
b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!z(e)&&!A(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function ic(b){return null===
b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){A(d)&&(d=a.CURRENCY_SYM);A(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(H(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");
if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",r=0,s=a.lgSize,m=a.gSize;if(h.length>=s+m)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%m&&0!==k&&(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&
(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=
(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=W(b[9]+b[10]),g=W(b[9]+b[11]));h.call(a,W(b[1]),
W(b[2])-1,W(b[3]));f=W(b[4]||0)-f;g=W(b[5]||0)-g;h=W(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=gg.test(c)?W(c):a(c));V(c)&&(c=new Date(c));if(!aa(c)||!isFinite(c.getTime()))return c;for(;e;)(k=hg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();
f&&(n=xc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));m(h,function(a){l=ig[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function bg(){return function(b,a){A(a)&&(a=2);return db(b,a)}}function cg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):W(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!G(b)&&!L(b))return b;c=!c||isNaN(c)?0:W(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,
c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Ya;if(z(a))h=a;else if(L(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Ea(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);b=Array.prototype.map.call(b,
function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(rc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],m=0;c.type===f.type?c.value!==f.value&&(m=c.value<f.value?-1:1):m=c.type<f.type?
-1:1;if(c=m*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){z(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ra(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=
function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,
c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Va);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Va,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,
"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function kb(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=R(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};
if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(aa(c))return c;if(L(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));
if(jg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function lb(b,a,c,d){return function(e,f,g,h,l,k,n){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)?
aa(a)?a:c(a):t}Id(e,f,g,h);kb(e,f,g,h,l,k);var m=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),m&&(b=Pb(b,m)),b):t});h.$formatters.push(function(a){if(a&&!aa(a))throw Lb("datefmt",a);if(r(a))return(q=a)&&m&&(q=Pb(q,m,!0)),n("date")(a,d,m);q=null;return""});if(w(g.min)||g.ngMin){var F;h.$validators.min=function(a){return!r(a)||A(F)||c(a)>=F};g.$observe("min",function(a){F=s(a);h.$validate()})}if(w(g.max)||g.ngMax){var u;
h.$validators.max=function(a){return!r(a)||A(u)||c(a)<=u};g.$observe("max",function(a){u=s(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(w(d)){b=b(d);if(!b.constant)throw J("ngModel")("constexpr",c,d);return b(a)}return e}function lc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(" "):H(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=
l(k,1);h.$addClass(m)}else if(!ka(b,n)){var q=e(n),m=d(k,q),k=d(q,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}
function c(b,c){b=b?"-"+Bc(b,"-"):"";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=t,c("",null)):(a(Md,
!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var kg=/^\/(.+)\/([a-z]*)$/,M=function(b){return L(b)?b.toLowerCase():b},Xa=Object.prototype.hasOwnProperty,rb=function(b){return L(b)?b.toUpperCase():b},Ua,y,la,za=[].slice,Nf=[].splice,lg=[].push,sa=Object.prototype.toString,sc=Object.getPrototypeOf,Fa=J("ng"),ca=
O.angular||(O.angular={}),gb,nb=0;Ua=U.documentMode;v.$inject=[];Ya.$inject=[];var G=Array.isArray,uc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,R=function(b){return L(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},fb=function(){if(w(fb.isActive_))return fb.isActive_;var b=!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return fb.isActive_=
b},pb=function(){if(w(pb.name_))return pb.name_;var b,a,c=Oa.length,d,e;for(a=0;a<c;++a)if(d=Oa[a],b=U.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Cc=!1,Rb,qa=1,Na=3,fe={full:"1.4.2",major:1,minor:4,dot:2,codeName:"nebular-readjustment"};Q.expando="ng339";var ib=Q.cache={},Ef=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var zf=/([\:\-\_]+(.))/g,Af=/^moz([A-Z])/,mg={mouseleave:"mouseout",
mouseenter:"mouseover"},Ub=J("jqLite"),Df=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Bf=/<([\w:]+)/,Cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;
na.th=na.td;var Pa=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(O).on("load",a))},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:lg,sort:[].sort,splice:[].splice},Ab={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[M(b)]=b});var Tc={};m("input select option textarea button form details".split(" "),
function(b){Tc[b]=!0});var Uc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Wb,removeData:ub,hasData:function(b){for(var a in ib[b.ng339])return!0;return!1}},function(b,a){Q[a]=b});m({data:Wb,inheritedData:zb,scope:function(b){return y.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y.data(b,"$isolateScope")||y.data(b,"$isolateScopeNoTemplate")},controller:Qc,injector:function(b){return zb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=hb(a);if(w(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Na&&2!==d&&8!==d)if(d=M(a),Ab[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},
text:function(){function b(a,b){if(A(b)){var d=a.nodeType;return d===qa||d===Na?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(A(a)){if(b.multiple&&"select"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Rc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Rc&&(2==b.length&&b!==wb&&b!==Qc?
a:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,on:function a(c,d,e,f){if(w(f))throw Ub("onargs");if(Mc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Hf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===
d?a(c,mg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Pc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);m(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new Q(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;m(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,
d.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=d;A(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===
this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=P(e,c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)A(g)?(g=a(this[h],c,e,f),w(g)&&(g=y(g))):Oc(g,a(this[h],c,e,f));return w(g)?g:this};Q.prototype.bind=
Q.prototype.on;Q.prototype.unbind=Q.prototype.off});Sa.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var xf=[function(){this.$get=[function(){return Sa}]}],Wc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,ng=/,/,og=/^\s*(_?)(\S+?)\1\s*$/,Vc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=J("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=
[];if(a.length){if(c)throw L(d)&&d||(d=a.name||If(a)),Ha("strictdi",d);c=a.toString().replace(Vc,"");c=c.match(Wc);m(c[1].split(ng),function(a){a.replace(og,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Qa(a[c],"fn"),e=a.slice(0,c)):Qa(a,"fn",!0);return e};var Nd=J("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,
f)}};return d}]},Te=function(){var a=new Sa,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&m(f.split(" "),function(a){a&&(k[a]=!0)});l&&m(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=Jf(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});
c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Se=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=
g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=jb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=jb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=jb(l.addClass,
e);l.removeClass=jb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?P(k.from,e):e;k.to=k.to?P(k.to,h):h;k.tempClasses=jb(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ea=J("$compile");Ec.$inject=["$provide","$$sanitizeUriProvider"];var Zc=/^((?:x|data)[\:\-_])/i,Of=J("$controller"),Xc=/^(\S+)(\s+as\s+(\w+))?$/,cd="application/json",ac={"Content-Type":cd+";charset=utf-8"},Qf=/^\[|^\{(?!\{)/,Rf={"[":/]$/,"{":/}$/},Pf=/^\)\]\}',?\n/,
Ka=ca.$interpolateMinErr=J("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var pg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Uf={http:80,https:443,ftp:21},Cb=J("$location"),qg={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(A(a))return this.$$url;var c=pg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Db("$$protocol"),
host:Db("$$host"),port:Db("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||V(a))a=a.toString(),this.$$search=zc(a);else if(H(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,ec,dc],function(a){a.prototype=Object.create(qg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb("nostate");this.$$state=A(c)?null:c;return this}});var da=J("$parse"),Vf=Function.prototype.call,Wf=Function.prototype.apply,Xf=Function.prototype.bind,Mb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var rg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=w(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();
if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=rg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,
value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal=
"Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,
body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?
(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,
operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:q.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},
throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];
var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,value:null},undefined:{type:q.Literal,value:t},"this":{type:q.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};T(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";m(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+
"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Ca,oa,ld,Yf,md,a);this.state=this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},
generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,r;e=e||v;if(!g&&w(a.watchId))c=c||this.nextId(),this.if_("i",
this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,
t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});r="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);
break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ca(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Ca(a.property.name);
f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));r=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,r);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),r=l+
"("+n.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):r=l+"("+n.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r)},function(){k.assign(c,"undefined")});e(c)}));break;case q.AssignmentExpression:l=
this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});r="["+n.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,
k.nextId(),t,function(c){n.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+n.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||
(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+
"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+
a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";
if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;T(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);
a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=
this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Ca(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),
c,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ca(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var m=
[],q=0;q<h.length;++q)m.push(h[q](a,d,e,g));a=f.apply(t,m,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,r){var m=f(a,d,e,r),q;if(null!=m.value){oa(m.context,g.expression);ld(m.value,g.expression);q=[];for(var t=0;t<h.length;++t)q.push(oa(h[t](a,d,e,r),g.expression));q=oa(m.value.apply(m.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,r){var m=e(a,d,h,r);a=f(a,d,h,r);oa(m.value,g.expression);
m.context[m.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case q.ObjectExpression:return h=[],m(a.properties,function(a){h.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?
{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,
f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(w(l)?l:0)-(w(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,
c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?
{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&oa(h,f);return d?{context:g,name:a,value:h}:h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),m,s;null!=n&&(m=c(g,h,l,k),Ca(m,f),e&&1!==e&&n&&!n[m]&&(n[m]={}),s=n[m],oa(s,f));return d?{context:n,name:m,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});
l=null!=h?h[c]:t;(d||Fb(c))&&oa(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Zf=Object.prototype.valueOf,Da=J("$sce"),pa={HTML:"html",CSS:"css",URL:"url",
RESOURCE_URL:"resourceUrl",JS:"js"},ea=J("$compile"),X=U.createElement("a"),wd=Ba(O.location.href);xd.$inject=["$document"];Lc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var Dd=".",ig={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",
1),sss:Y("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},hg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,gg=/^\-?\d+$/;zd.$inject=["$locale"];var dg=ra(M),eg=ra(rb);Bd.$inject=
["$parse"];var ie=ra({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=wa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",
priority:100,link:f}}}});m(Uc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(kg))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ua&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,e){d.addClass(Va).addClass(mb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var m=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,t,k.$name),m.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){m.$removeControl(k);f&&Eb(a,e[f],t,
k.$name);P(k,Ib)})}}}}}]},je=Od(),we=Od(!0),jg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,sg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,tg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,ug=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,
Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e)},date:lb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":lb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:lb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:lb("week",mc,function(a,c){if(aa(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:lb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,c,d,e);kb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:ug.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb("numfmt",a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
A(h)||a>=h};d.$observe("min",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(w(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||A(l)||a<=l};d.$observe("max",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},email:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||tg.test(d)}},radio:function(a,c,d,e){A(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,button:v,submit:v,reset:v,file:v},Fc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],vg=/^(true|false|\d+)$/,Oe=function(){return{restrict:"A",priority:100,compile:function(a,
c){return vg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},oe=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],qe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],pe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ne=ra({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
re=lc("",!0),te=lc("Odd",0),se=lc("Even",1),ue=Ma({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),ve=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},wg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Kc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};wg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ye=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ze=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,s,q){var t=0,F,u,p,v=function(){u&&(u.remove(),u=null);F&&(F.$destroy(),F=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};e.$watch(g,function(g){var m=function(){!w(l)||l&&!e.$eval(l)||
c()},r=++t;g?(a(g,!0).then(function(a){if(r===t){var c=e.$new();s.template=a;a=q(c,function(a){v();d.enter(a,null,f).then(m)});F=c;p=a;F.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){r===t&&(v(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(v(),s.template=null)})}}}}],Qe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Nc(f.template,U).childNodes)(c,function(a){d.append(a)},
{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],Ae=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Me=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?R(f):f;e.$parsers.push(function(a){if(!A(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?R(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Kd="ng-invalid",Va="ng-pristine",Jb="ng-dirty",Md="ng-pending",Lb=new J("ngModel"),xg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=
!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,C=s,F=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);z(d)&&(d=c(a));return d};C=function(a,c){z(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Lb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return A(a)||
""===a||null===a||a!==a};var K=e.inheritedData("$formController")||Ib,y=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:K,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Va)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Va);g.addClass(e,Jb);K.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(F);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!z(k.then))throw Lb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===y&&p.$setValidity(a,c)}function h(a){l===y&&d(a)}y++;var l=y;(function(){var a=
p.$$parserName||"parse";if(u===t)g(a,null);else return u||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(F);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=A(c)?t:!0)for(var d=
0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),A(c)){u=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){C(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&w(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(F);d?F=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=
p.$$rawModelValue=c;u=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Le=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:xg,priority:1,compile:function(c){c.addClass(Va).addClass("ng-untouched").addClass(mb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],yg=/(\s+|^)default(\s+|$)/,Pe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));
this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=R(this.$options.updateOn.replace(yg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Be=Ma({terminal:!0,priority:1E3}),zg=J("ngOptions"),Ag=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Je=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}function n(a){var c;if(!q&&Ea(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Ag);if(!m)throw zg("iexp",a,ua(d));var s=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:s);var v=a&&c(a)||d,u=t&&c(t),p=t?function(a,c){return u(e,c)}:function(a){return Ga(a)},w=function(a,
c){return p(a,z(a,c))},y=c(m[2]||m[1]),A=c(m[3]||""),B=c(m[4]||""),N=c(m[8]),D={},z=q?function(a,c){D[q]=c;D[s]=a;return D}:function(a){D[s]=a;return D};return{trackBy:t,getTrackByValue:w,getWatchables:c(N,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=z(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=B(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=N(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var r=d===g?m:g[m],s=
z(d[r],r),q=v(e,s),r=p(q,s),u=y(e,s),x=A(e,s),s=B(e,s),q=new f(r,q,u,x,s);a.push(q);c[r]=q}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[w(a)]},getViewValueFromOption:function(a){return t?ca.copy(a.viewValue):a.viewValue}}}}}var e=U.createElement("option"),f=U.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==
c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function s(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}function q(a){var c=p&&p[0],d=N&&N[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=D&&u.readValue();D=z.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=q(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,"optgroup",f),d=
g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){s(c[a].currentOptionElement)});s(d);v.$render();if(!v.$isEmpty(a)){var g=u.readValue();(z.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var u=k[0];k=l.multiple;for(var p,w=0,A=h.children(),I=A.length;w<
I;w++)if(""===A[w].value){p=A.eq(w);break}var B=!!p,N=y(e.cloneNode(!1));N.val("?");var D,z=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},z.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return z.getTrackByValue(a)})},
function(){v.$render()})):(u.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(N.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(N.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(N),h.val("?"),N.prop("selected",!0),N.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?
(B||p.remove(),N.remove(),D.getViewValueFromOption(a)):null},z.trackBy&&c.$watch(function(){return z.getTrackByValue(v.$viewValue)},function(){v.$render()}));B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=y(e.cloneNode(!1));t();c.$watchCollection(z.getWatchables,t)}}}}],Ce=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,r=l.$attr.when&&h.attr(l.$attr.when),s=l.offset||0,q=g.$eval(r)||{},t=
{},w=c.startSymbol(),u=c.endSymbol(),p=w+n+"-"+s+u,y=ca.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+M(d[2]),q[d]=h.attr(l.$attr[c]))});m(q,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in q||(e=a.pluralCat(e-s));e===z||f&&V(z)&&isNaN(z)||(y(),f=t[e],A(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),y=v,k()):y=g.$watch(f,k),z=e)})}}}],De=["$parse","$animate",function(a,c){var d=J("ngRepeat"),e=function(a,c,
d,e,k,m,r){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===r-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=U.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],r=k[2],s=k[3],q=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
if(!k)throw d("iidexp",n);var v=k[3]||k[1],w=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw d("badident",s);var u,p,z,A,I={$id:Ga};q?u=a(q):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,g,k,n){u&&(p=function(c,d,e){w&&(I[w]=c);I[v]=d;I.$index=e;return u(a,I)});var q=ga();a.$watchCollection(r,function(g){var k,r,u=f[0],x,D=ga(),I,H,L,G,M,J,O;s&&(a[s]=g);if(Ea(g))M=
g,r=p||z;else for(O in r=p||A,M=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&M.push(O);I=M.length;O=Array(I);for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],G=r(H,L,k),q[G])J=q[G],delete q[G],D[G]=J,O[k]=J;else{if(D[G])throw m(O,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,G,L);O[k]={id:G,scope:t,clone:t};D[G]=!0}for(x in q){J=q[x];G=qb(J.clone);c.leave(G);if(G[0].parentNode)for(k=0,r=G.length;k<r;k++)G[k].$$NG_REMOVED=!0;J.scope.$destroy()}for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],J=O[k],J.scope){x=
u;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);J.clone[0]!=x&&c.move(qb(J.clone),null,y(u));u=J.clone[J.clone.length-1];e(J.scope,k,v,L,w,H,I)}else n(function(a,d){J.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,y(u));u=f;J.clone=a;D[J.id]=J;e(J.scope,k,v,L,w,H,I)});q=D})}}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],xe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Fe=Ma(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ge=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||
e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=U.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,
f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ie=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ke=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw J("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),ke=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Bg={$setViewValue:v,$render:v},Cg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Sa;e.ngModelCtrl=Bg;e.unknownOption=y(U.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=
function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Ra(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],
le=function(){return{restrict:"E",require:["select","?ngModel"],controller:Cg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Sa(a);m(c.find("option"),function(a){a.selected=w(d.get(a.value))})};var h,
l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},ne=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&
(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],me=ra({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){L(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw J("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||A(f)||f.test(a)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=W(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=W(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(ca),y(U).ready(function(){Zd(U,Ac)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.4.2
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/* jshint ignore:start */
var noop        = angular.noop;
var extend      = angular.extend;
var jqLite      = angular.element;
var forEach     = angular.forEach;
var isArray     = angular.isArray;
var isString    = angular.isString;
var isObject    = angular.isObject;
var isUndefined = angular.isUndefined;
var isDefined   = angular.isDefined;
var isFunction  = angular.isFunction;
var isElement   = angular.isElement;

var ELEMENT_NODE = 1;
var COMMENT_NODE = 8;

var NG_ANIMATE_CLASSNAME = 'ng-animate';
var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';

var isPromiseLike = function(p) {
  return p && p.then ? true : false;
}

function assertArg(arg, name, reason) {
  if (!arg) {
    throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
  }
  return arg;
}

function mergeClasses(a,b) {
  if (!a && !b) return '';
  if (!a) return b;
  if (!b) return a;
  if (isArray(a)) a = a.join(' ');
  if (isArray(b)) b = b.join(' ');
  return a + ' ' + b;
}

function packageStyles(options) {
  var styles = {};
  if (options && (options.to || options.from)) {
    styles.to = options.to;
    styles.from = options.from;
  }
  return styles;
}

function pendClasses(classes, fix, isPrefix) {
  var className = '';
  classes = isArray(classes)
      ? classes
      : classes && isString(classes) && classes.length
          ? classes.split(/\s+/)
          : [];
  forEach(classes, function(klass, i) {
    if (klass && klass.length > 0) {
      className += (i > 0) ? ' ' : '';
      className += isPrefix ? fix + klass
                            : klass + fix;
    }
  });
  return className;
}

function removeFromArray(arr, val) {
  var index = arr.indexOf(val);
  if (val >= 0) {
    arr.splice(index, 1);
  }
}

function stripCommentsFromElement(element) {
  if (element instanceof jqLite) {
    switch (element.length) {
      case 0:
        return [];
        break;

      case 1:
        // there is no point of stripping anything if the element
        // is the only element within the jqLite wrapper.
        // (it's important that we retain the element instance.)
        if (element[0].nodeType === ELEMENT_NODE) {
          return element;
        }
        break;

      default:
        return jqLite(extractElementNode(element));
        break;
    }
  }

  if (element.nodeType === ELEMENT_NODE) {
    return jqLite(element);
  }
}

function extractElementNode(element) {
  if (!element[0]) return element;
  for (var i = 0; i < element.length; i++) {
    var elm = element[i];
    if (elm.nodeType == ELEMENT_NODE) {
      return elm;
    }
  }
}

function $$addClass($$jqLite, element, className) {
  forEach(element, function(elm) {
    $$jqLite.addClass(elm, className);
  });
}

function $$removeClass($$jqLite, element, className) {
  forEach(element, function(elm) {
    $$jqLite.removeClass(elm, className);
  });
}

function applyAnimationClassesFactory($$jqLite) {
  return function(element, options) {
    if (options.addClass) {
      $$addClass($$jqLite, element, options.addClass);
      options.addClass = null;
    }
    if (options.removeClass) {
      $$removeClass($$jqLite, element, options.removeClass);
      options.removeClass = null;
    }
  }
}

function prepareAnimationOptions(options) {
  options = options || {};
  if (!options.$$prepared) {
    var domOperation = options.domOperation || noop;
    options.domOperation = function() {
      options.$$domOperationFired = true;
      domOperation();
      domOperation = noop;
    };
    options.$$prepared = true;
  }
  return options;
}

function applyAnimationStyles(element, options) {
  applyAnimationFromStyles(element, options);
  applyAnimationToStyles(element, options);
}

function applyAnimationFromStyles(element, options) {
  if (options.from) {
    element.css(options.from);
    options.from = null;
  }
}

function applyAnimationToStyles(element, options) {
  if (options.to) {
    element.css(options.to);
    options.to = null;
  }
}

function mergeAnimationOptions(element, target, newOptions) {
  var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
  var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
  var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);

  extend(target, newOptions);

  if (classes.addClass) {
    target.addClass = classes.addClass;
  } else {
    target.addClass = null;
  }

  if (classes.removeClass) {
    target.removeClass = classes.removeClass;
  } else {
    target.removeClass = null;
  }

  return target;
}

function resolveElementClasses(existing, toAdd, toRemove) {
  var ADD_CLASS = 1;
  var REMOVE_CLASS = -1;

  var flags = {};
  existing = splitClassesToLookup(existing);

  toAdd = splitClassesToLookup(toAdd);
  forEach(toAdd, function(value, key) {
    flags[key] = ADD_CLASS;
  });

  toRemove = splitClassesToLookup(toRemove);
  forEach(toRemove, function(value, key) {
    flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
  });

  var classes = {
    addClass: '',
    removeClass: ''
  };

  forEach(flags, function(val, klass) {
    var prop, allow;
    if (val === ADD_CLASS) {
      prop = 'addClass';
      allow = !existing[klass];
    } else if (val === REMOVE_CLASS) {
      prop = 'removeClass';
      allow = existing[klass];
    }
    if (allow) {
      if (classes[prop].length) {
        classes[prop] += ' ';
      }
      classes[prop] += klass;
    }
  });

  function splitClassesToLookup(classes) {
    if (isString(classes)) {
      classes = classes.split(' ');
    }

    var obj = {};
    forEach(classes, function(klass) {
      // sometimes the split leaves empty string values
      // incase extra spaces were applied to the options
      if (klass.length) {
        obj[klass] = true;
      }
    });
    return obj;
  }

  return classes;
}

function getDomNode(element) {
  return (element instanceof angular.element) ? element[0] : element;
}

var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
  var tickQueue = [];
  var cancelFn;

  function scheduler(tasks) {
    // we make a copy since RAFScheduler mutates the state
    // of the passed in array variable and this would be difficult
    // to track down on the outside code
    tickQueue.push([].concat(tasks));
    nextTick();
  }

  /* waitUntilQuiet does two things:
   * 1. It will run the FINAL `fn` value only when an uncancelled RAF has passed through
   * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
   *
   * The motivation here is that animation code can request more time from the scheduler
   * before the next wave runs. This allows for certain DOM properties such as classes to
   * be resolved in time for the next animation to run.
   */
  scheduler.waitUntilQuiet = function(fn) {
    if (cancelFn) cancelFn();

    cancelFn = $$rAF(function() {
      cancelFn = null;
      fn();
      nextTick();
    });
  };

  return scheduler;

  function nextTick() {
    if (!tickQueue.length) return;

    var updatedQueue = [];
    for (var i = 0; i < tickQueue.length; i++) {
      var innerQueue = tickQueue[i];
      runNextTask(innerQueue);
      if (innerQueue.length) {
        updatedQueue.push(innerQueue);
      }
    }
    tickQueue = updatedQueue;

    if (!cancelFn) {
      $$rAF(function() {
        if (!cancelFn) nextTick();
      });
    }
  }

  function runNextTask(tasks) {
    var nextTask = tasks.shift();
    nextTask();
  }
}];

var $$AnimateChildrenDirective = [function() {
  return function(scope, element, attrs) {
    var val = attrs.ngAnimateChildren;
    if (angular.isString(val) && val.length === 0) { //empty attribute
      element.data(NG_ANIMATE_CHILDREN_DATA, true);
    } else {
      attrs.$observe('ngAnimateChildren', function(value) {
        value = value === 'on' || value === 'true';
        element.data(NG_ANIMATE_CHILDREN_DATA, value);
      });
    }
  };
}];

/**
 * @ngdoc service
 * @name $animateCss
 * @kind object
 *
 * @description
 * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
 * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
 * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
 * directives to create more complex animations that can be purely driven using CSS code.
 *
 * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
 * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
 *
 * ## Usage
 * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
 * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
 * any automatic control over cancelling animations and/or preventing animations from being run on
 * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
 * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
 * the CSS animation.
 *
 * The example below shows how we can create a folding animation on an element using `ng-if`:
 *
 * ```html
 * <!-- notice the `fold-animation` CSS class -->
 * <div ng-if="onOff" class="fold-animation">
 *   This element will go BOOM
 * </div>
 * <button ng-click="onOff=true">Fold In</button>
 * ```
 *
 * Now we create the **JavaScript animation** that will trigger the CSS transition:
 *
 * ```js
 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var height = element[0].offsetHeight;
 *       return $animateCss(element, {
 *         from: { height:'0px' },
 *         to: { height:height + 'px' },
 *         duration: 1 // one second
 *       });
 *     }
 *   }
 * }]);
 * ```
 *
 * ## More Advanced Uses
 *
 * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
 * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
 *
 * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
 * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
 * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
 * to provide a working animation that will run in CSS.
 *
 * The example below showcases a more advanced version of the `.fold-animation` from the example above:
 *
 * ```js
 * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var height = element[0].offsetHeight;
 *       return $animateCss(element, {
 *         addClass: 'red large-text pulse-twice',
 *         easing: 'ease-out',
 *         from: { height:'0px' },
 *         to: { height:height + 'px' },
 *         duration: 1 // one second
 *       });
 *     }
 *   }
 * }]);
 * ```
 *
 * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
 *
 * ```css
 * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
 * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
 * .red { background:red; }
 * .large-text { font-size:20px; }
 *
 * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
 * .pulse-twice {
 *   animation: 0.5s pulse linear 2;
 *   -webkit-animation: 0.5s pulse linear 2;
 * }
 *
 * @keyframes pulse {
 *   from { transform: scale(0.5); }
 *   to { transform: scale(1.5); }
 * }
 *
 * @-webkit-keyframes pulse {
 *   from { -webkit-transform: scale(0.5); }
 *   to { -webkit-transform: scale(1.5); }
 * }
 * ```
 *
 * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
 *
 * ## How the Options are handled
 *
 * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
 * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
 * styles using the `from` and `to` properties.
 *
 * ```js
 * var animator = $animateCss(element, {
 *   from: { background:'red' },
 *   to: { background:'blue' }
 * });
 * animator.start();
 * ```
 *
 * ```css
 * .rotating-animation {
 *   animation:0.5s rotate linear;
 *   -webkit-animation:0.5s rotate linear;
 * }
 *
 * @keyframes rotate {
 *   from { transform: rotate(0deg); }
 *   to { transform: rotate(360deg); }
 * }
 *
 * @-webkit-keyframes rotate {
 *   from { -webkit-transform: rotate(0deg); }
 *   to { -webkit-transform: rotate(360deg); }
 * }
 * ```
 *
 * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
 * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
 * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
 * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
 * and spread across the transition and keyframe animation.
 *
 * ## What is returned
 *
 * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
 * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
 * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
 *
 * ```js
 * var animator = $animateCss(element, { ... });
 * ```
 *
 * Now what do the contents of our `animator` variable look like:
 *
 * ```js
 * {
 *   // starts the animation
 *   start: Function,
 *
 *   // ends (aborts) the animation
 *   end: Function
 * }
 * ```
 *
 * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
 * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and stlyes may have been
 * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
 * and that changing them will not reconfigure the parameters of the animation.
 *
 * ### runner.done() vs runner.then()
 * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
 * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
 * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
 * unless you really need a digest to kick off afterwards.
 *
 * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
 * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
 * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
 *
 * @param {DOMElement} element the element that will be animated
 * @param {object} options the animation-related options that will be applied during the animation
 *
 * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
 * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
 * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
 * * `transition` - The raw CSS transition style that will be used (e.g. `1s linear all`).
 * * `keyframe` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
 * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
 * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
 * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
 * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
 * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
 * is provided then the animation will be skipped entirely.
 * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
 * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
 * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
 * CSS delay value.
 * * `stagger` - A numeric time value representing the delay between successively animated elements
 * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
 * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
 * `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
 * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occuring on the classes being added and removed.)
 *
 * @return {object} an object with start and end methods and details about the animation.
 *
 * * `start` - The method to start the animation. This will return a `Promise` when called.
 * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
 */

// Detect proper transitionend/animationend event names.
var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

// If unprefixed events are not supported but webkit-prefixed are, use the latter.
// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
// Register both events in case `window.onanimationend` is not supported because of that,
// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
// therefore there is no reason to test anymore for other vendor prefixes:
// http://caniuse.com/#search=transition
if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
  CSS_PREFIX = '-webkit-';
  TRANSITION_PROP = 'WebkitTransition';
  TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
} else {
  TRANSITION_PROP = 'transition';
  TRANSITIONEND_EVENT = 'transitionend';
}

if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
  CSS_PREFIX = '-webkit-';
  ANIMATION_PROP = 'WebkitAnimation';
  ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
} else {
  ANIMATION_PROP = 'animation';
  ANIMATIONEND_EVENT = 'animationend';
}

var DURATION_KEY = 'Duration';
var PROPERTY_KEY = 'Property';
var DELAY_KEY = 'Delay';
var TIMING_KEY = 'TimingFunction';
var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
var ANIMATION_PLAYSTATE_KEY = 'PlayState';
var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
var CLOSING_TIME_BUFFER = 1.5;
var ONE_SECOND = 1000;
var BASE_TEN = 10;

var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;

var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;

var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;

var DETECT_CSS_PROPERTIES = {
  transitionDuration:      TRANSITION_DURATION_PROP,
  transitionDelay:         TRANSITION_DELAY_PROP,
  transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
  animationDuration:       ANIMATION_DURATION_PROP,
  animationDelay:          ANIMATION_DELAY_PROP,
  animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
};

var DETECT_STAGGER_CSS_PROPERTIES = {
  transitionDuration:      TRANSITION_DURATION_PROP,
  transitionDelay:         TRANSITION_DELAY_PROP,
  animationDuration:       ANIMATION_DURATION_PROP,
  animationDelay:          ANIMATION_DELAY_PROP
};

function computeCssStyles($window, element, properties) {
  var styles = Object.create(null);
  var detectedStyles = $window.getComputedStyle(element) || {};
  forEach(properties, function(formalStyleName, actualStyleName) {
    var val = detectedStyles[formalStyleName];
    if (val) {
      var c = val.charAt(0);

      // only numerical-based values have a negative sign or digit as the first value
      if (c === '-' || c === '+' || c >= 0) {
        val = parseMaxTime(val);
      }

      // by setting this to null in the event that the delay is not set or is set directly as 0
      // then we can still allow for zegative values to be used later on and not mistake this
      // value for being greater than any other negative value.
      if (val === 0) {
        val = null;
      }
      styles[actualStyleName] = val;
    }
  });

  return styles;
}

function parseMaxTime(str) {
  var maxValue = 0;
  var values = str.split(/\s*,\s*/);
  forEach(values, function(value) {
    // it's always safe to consider only second values and omit `ms` values since
    // getComputedStyle will always handle the conversion for us
    if (value.charAt(value.length - 1) == 's') {
      value = value.substring(0, value.length - 1);
    }
    value = parseFloat(value) || 0;
    maxValue = maxValue ? Math.max(value, maxValue) : value;
  });
  return maxValue;
}

function truthyTimingValue(val) {
  return val === 0 || val != null;
}

function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
  var style = TRANSITION_PROP;
  var value = duration + 's';
  if (applyOnlyDuration) {
    style += DURATION_KEY;
  } else {
    value += ' linear all';
  }
  return [style, value];
}

function getCssKeyframeDurationStyle(duration) {
  return [ANIMATION_DURATION_PROP, duration + 's'];
}

function getCssDelayStyle(delay, isKeyframeAnimation) {
  var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
  return [prop, delay + 's'];
}

function blockTransitions(node, duration) {
  // we use a negative delay value since it performs blocking
  // yet it doesn't kill any existing transitions running on the
  // same element which makes this safe for class-based animations
  var value = duration ? '-' + duration + 's' : '';
  applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
  return [TRANSITION_DELAY_PROP, value];
}

function blockKeyframeAnimations(node, applyBlock) {
  var value = applyBlock ? 'paused' : '';
  var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
  applyInlineStyle(node, [key, value]);
  return [key, value];
}

function applyInlineStyle(node, styleTuple) {
  var prop = styleTuple[0];
  var value = styleTuple[1];
  node.style[prop] = value;
}

function createLocalCacheLookup() {
  var cache = Object.create(null);
  return {
    flush: function() {
      cache = Object.create(null);
    },

    count: function(key) {
      var entry = cache[key];
      return entry ? entry.total : 0;
    },

    get: function(key) {
      var entry = cache[key];
      return entry && entry.value;
    },

    put: function(key, value) {
      if (!cache[key]) {
        cache[key] = { total: 1, value: value };
      } else {
        cache[key].total++;
      }
    }
  };
}

var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
  var gcsLookup = createLocalCacheLookup();
  var gcsStaggerLookup = createLocalCacheLookup();

  this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
               '$document', '$sniffer', '$$rAFScheduler',
       function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
                $document,   $sniffer,   $$rAFScheduler) {

    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

    var parentCounter = 0;
    function gcsHashFn(node, extraClasses) {
      var KEY = "$$ngAnimateParentKey";
      var parentNode = node.parentNode;
      var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
      return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
    }

    function computeCachedCssStyles(node, className, cacheKey, properties) {
      var timings = gcsLookup.get(cacheKey);

      if (!timings) {
        timings = computeCssStyles($window, node, properties);
        if (timings.animationIterationCount === 'infinite') {
          timings.animationIterationCount = 1;
        }
      }

      // we keep putting this in multiple times even though the value and the cacheKey are the same
      // because we're keeping an interal tally of how many duplicate animations are detected.
      gcsLookup.put(cacheKey, timings);
      return timings;
    }

    function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
      var stagger;

      // if we have one or more existing matches of matching elements
      // containing the same parent + CSS styles (which is how cacheKey works)
      // then staggering is possible
      if (gcsLookup.count(cacheKey) > 0) {
        stagger = gcsStaggerLookup.get(cacheKey);

        if (!stagger) {
          var staggerClassName = pendClasses(className, '-stagger');

          $$jqLite.addClass(node, staggerClassName);

          stagger = computeCssStyles($window, node, properties);

          // force the conversion of a null value to zero incase not set
          stagger.animationDuration = Math.max(stagger.animationDuration, 0);
          stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);

          $$jqLite.removeClass(node, staggerClassName);

          gcsStaggerLookup.put(cacheKey, stagger);
        }
      }

      return stagger || {};
    }

    var bod = getDomNode($document).body;
    var rafWaitQueue = [];
    function waitUntilQuiet(callback) {
      rafWaitQueue.push(callback);
      $$rAFScheduler.waitUntilQuiet(function() {
        gcsLookup.flush();
        gcsStaggerLookup.flush();

        //the line below will force the browser to perform a repaint so
        //that all the animated elements within the animation frame will
        //be properly updated and drawn on screen. This is required to
        //ensure that the preparation animation is properly flushed so that
        //the active state picks up from there. DO NOT REMOVE THIS LINE.
        //DO NOT OPTIMIZE THIS LINE. THE MINIFIER WILL REMOVE IT OTHERWISE WHICH
        //WILL RESULT IN AN UNPREDICTABLE BUG THAT IS VERY HARD TO TRACK DOWN AND
        //WILL TAKE YEARS AWAY FROM YOUR LIFE.
        var width = bod.offsetWidth + 1;

        // we use a for loop to ensure that if the queue is changed
        // during this looping then it will consider new requests
        for (var i = 0; i < rafWaitQueue.length; i++) {
          rafWaitQueue[i](width);
        }
        rafWaitQueue.length = 0;
      });
    }

    return init;

    function computeTimings(node, className, cacheKey) {
      var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
      var aD = timings.animationDelay;
      var tD = timings.transitionDelay;
      timings.maxDelay = aD && tD
          ? Math.max(aD, tD)
          : (aD || tD);
      timings.maxDuration = Math.max(
          timings.animationDuration * timings.animationIterationCount,
          timings.transitionDuration);

      return timings;
    }

    function init(element, options) {
      var node = getDomNode(element);
      options = prepareAnimationOptions(options);

      var temporaryStyles = [];
      var classes = element.attr('class');
      var styles = packageStyles(options);
      var animationClosed;
      var animationPaused;
      var animationCompleted;
      var runner;
      var runnerHost;
      var maxDelay;
      var maxDelayTime;
      var maxDuration;
      var maxDurationTime;

      if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
        return closeAndReturnNoopAnimator();
      }

      var method = options.event && isArray(options.event)
            ? options.event.join(' ')
            : options.event;

      var isStructural = method && options.structural;
      var structuralClassName = '';
      var addRemoveClassName = '';

      if (isStructural) {
        structuralClassName = pendClasses(method, 'ng-', true);
      } else if (method) {
        structuralClassName = method;
      }

      if (options.addClass) {
        addRemoveClassName += pendClasses(options.addClass, '-add');
      }

      if (options.removeClass) {
        if (addRemoveClassName.length) {
          addRemoveClassName += ' ';
        }
        addRemoveClassName += pendClasses(options.removeClass, '-remove');
      }

      // there may be a situation where a structural animation is combined together
      // with CSS classes that need to resolve before the animation is computed.
      // However this means that there is no explicit CSS code to block the animation
      // from happening (by setting 0s none in the class name). If this is the case
      // we need to apply the classes before the first rAF so we know to continue if
      // there actually is a detected transition or keyframe animation
      if (options.applyClassesEarly && addRemoveClassName.length) {
        applyAnimationClasses(element, options);
        addRemoveClassName = '';
      }

      var setupClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
      var fullClassName = classes + ' ' + setupClasses;
      var activeClasses = pendClasses(setupClasses, '-active');
      var hasToStyles = styles.to && Object.keys(styles.to).length > 0;

      // there is no way we can trigger an animation since no styles and
      // no classes are being applied which would then trigger a transition
      if (!hasToStyles && !setupClasses) {
        return closeAndReturnNoopAnimator();
      }

      var cacheKey, stagger;
      if (options.stagger > 0) {
        var staggerVal = parseFloat(options.stagger);
        stagger = {
          transitionDelay: staggerVal,
          animationDelay: staggerVal,
          transitionDuration: 0,
          animationDuration: 0
        };
      } else {
        cacheKey = gcsHashFn(node, fullClassName);
        stagger = computeCachedCssStaggerStyles(node, setupClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
      }

      $$jqLite.addClass(element, setupClasses);

      var applyOnlyDuration;

      if (options.transitionStyle) {
        var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
        applyInlineStyle(node, transitionStyle);
        temporaryStyles.push(transitionStyle);
      }

      if (options.duration >= 0) {
        applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
        var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);

        // we set the duration so that it will be picked up by getComputedStyle later
        applyInlineStyle(node, durationStyle);
        temporaryStyles.push(durationStyle);
      }

      if (options.keyframeStyle) {
        var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
        applyInlineStyle(node, keyframeStyle);
        temporaryStyles.push(keyframeStyle);
      }

      var itemIndex = stagger
          ? options.staggerIndex >= 0
              ? options.staggerIndex
              : gcsLookup.count(cacheKey)
          : 0;

      var isFirst = itemIndex === 0;

      // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
      // without causing any combination of transitions to kick in. By adding a negative delay value
      // it forces the setup class' transition to end immediately. We later then remove the negative
      // transition delay to allow for the transition to naturally do it's thing. The beauty here is
      // that if there is no transition defined then nothing will happen and this will also allow
      // other transitions to be stacked on top of each other without any chopping them out.
      if (isFirst) {
        blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
      }

      var timings = computeTimings(node, fullClassName, cacheKey);
      var relativeDelay = timings.maxDelay;
      maxDelay = Math.max(relativeDelay, 0);
      maxDuration = timings.maxDuration;

      var flags = {};
      flags.hasTransitions          = timings.transitionDuration > 0;
      flags.hasAnimations           = timings.animationDuration > 0;
      flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
      flags.applyTransitionDuration = hasToStyles && (
                                        (flags.hasTransitions && !flags.hasTransitionAll)
                                         || (flags.hasAnimations && !flags.hasTransitions));
      flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
      flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
      flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
      flags.recalculateTimingStyles = addRemoveClassName.length > 0;

      if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
        maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;

        if (flags.applyTransitionDuration) {
          flags.hasTransitions = true;
          timings.transitionDuration = maxDuration;
          applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
          temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
        }

        if (flags.applyAnimationDuration) {
          flags.hasAnimations = true;
          timings.animationDuration = maxDuration;
          temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
        }
      }

      if (maxDuration === 0 && !flags.recalculateTimingStyles) {
        return closeAndReturnNoopAnimator();
      }

      // we need to recalculate the delay value since we used a pre-emptive negative
      // delay value and the delay value is required for the final event checking. This
      // property will ensure that this will happen after the RAF phase has passed.
      if (options.duration == null && timings.transitionDuration > 0) {
        flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
      }

      maxDelayTime = maxDelay * ONE_SECOND;
      maxDurationTime = maxDuration * ONE_SECOND;
      if (!options.skipBlocking) {
        flags.blockTransition = timings.transitionDuration > 0;
        flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
                                       stagger.animationDelay > 0 &&
                                       stagger.animationDuration === 0;
      }

      applyAnimationFromStyles(element, options);
      if (!flags.blockTransition) {
        blockTransitions(node, false);
      }

      applyBlocking(maxDuration);

      // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
      return {
        $$willAnimate: true,
        end: endFn,
        start: function() {
          if (animationClosed) return;

          runnerHost = {
            end: endFn,
            cancel: cancelFn,
            resume: null, //this will be set during the start() phase
            pause: null
          };

          runner = new $$AnimateRunner(runnerHost);

          waitUntilQuiet(start);

          // we don't have access to pause/resume the animation
          // since it hasn't run yet. AnimateRunner will therefore
          // set noop functions for resume and pause and they will
          // later be overridden once the animation is triggered
          return runner;
        }
      };

      function endFn() {
        close();
      }

      function cancelFn() {
        close(true);
      }

      function close(rejected) { // jshint ignore:line
        // if the promise has been called already then we shouldn't close
        // the animation again
        if (animationClosed || (animationCompleted && animationPaused)) return;
        animationClosed = true;
        animationPaused = false;

        $$jqLite.removeClass(element, setupClasses);
        $$jqLite.removeClass(element, activeClasses);

        blockKeyframeAnimations(node, false);
        blockTransitions(node, false);

        forEach(temporaryStyles, function(entry) {
          // There is only one way to remove inline style properties entirely from elements.
          // By using `removeProperty` this works, but we need to convert camel-cased CSS
          // styles down to hyphenated values.
          node.style[entry[0]] = '';
        });

        applyAnimationClasses(element, options);
        applyAnimationStyles(element, options);

        // the reason why we have this option is to allow a synchronous closing callback
        // that is fired as SOON as the animation ends (when the CSS is removed) or if
        // the animation never takes off at all. A good example is a leave animation since
        // the element must be removed just after the animation is over or else the element
        // will appear on screen for one animation frame causing an overbearing flicker.
        if (options.onDone) {
          options.onDone();
        }

        // if the preparation function fails then the promise is not setup
        if (runner) {
          runner.complete(!rejected);
        }
      }

      function applyBlocking(duration) {
        if (flags.blockTransition) {
          blockTransitions(node, duration);
        }

        if (flags.blockKeyframeAnimation) {
          blockKeyframeAnimations(node, !!duration);
        }
      }

      function closeAndReturnNoopAnimator() {
        runner = new $$AnimateRunner({
          end: endFn,
          cancel: cancelFn
        });

        close();

        return {
          $$willAnimate: false,
          start: function() {
            return runner;
          },
          end: endFn
        };
      }

      function start() {
        if (animationClosed) return;

        var startTime, events = [];

        // even though we only pause keyframe animations here the pause flag
        // will still happen when transitions are used. Only the transition will
        // not be paused since that is not possible. If the animation ends when
        // paused then it will not complete until unpaused or cancelled.
        var playPause = function(playAnimation) {
          if (!animationCompleted) {
            animationPaused = !playAnimation;
            if (timings.animationDuration) {
              var value = blockKeyframeAnimations(node, animationPaused);
              animationPaused
                  ? temporaryStyles.push(value)
                  : removeFromArray(temporaryStyles, value);
            }
          } else if (animationPaused && playAnimation) {
            animationPaused = false;
            close();
          }
        };

        // checking the stagger duration prevents an accidently cascade of the CSS delay style
        // being inherited from the parent. If the transition duration is zero then we can safely
        // rely that the delay value is an intential stagger delay style.
        var maxStagger = itemIndex > 0
                         && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
                            (timings.animationDuration && stagger.animationDuration === 0))
                         && Math.max(stagger.animationDelay, stagger.transitionDelay);
        if (maxStagger) {
          $timeout(triggerAnimationStart,
                   Math.floor(maxStagger * itemIndex * ONE_SECOND),
                   false);
        } else {
          triggerAnimationStart();
        }

        // this will decorate the existing promise runner with pause/resume methods
        runnerHost.resume = function() {
          playPause(true);
        };

        runnerHost.pause = function() {
          playPause(false);
        };

        function triggerAnimationStart() {
          // just incase a stagger animation kicks in when the animation
          // itself was cancelled entirely
          if (animationClosed) return;

          applyBlocking(false);

          forEach(temporaryStyles, function(entry) {
            var key = entry[0];
            var value = entry[1];
            node.style[key] = value;
          });

          applyAnimationClasses(element, options);
          $$jqLite.addClass(element, activeClasses);

          if (flags.recalculateTimingStyles) {
            fullClassName = node.className + ' ' + setupClasses;
            cacheKey = gcsHashFn(node, fullClassName);

            timings = computeTimings(node, fullClassName, cacheKey);
            relativeDelay = timings.maxDelay;
            maxDelay = Math.max(relativeDelay, 0);
            maxDuration = timings.maxDuration;

            if (maxDuration === 0) {
              close();
              return;
            }

            flags.hasTransitions = timings.transitionDuration > 0;
            flags.hasAnimations = timings.animationDuration > 0;
          }

          if (flags.applyTransitionDelay || flags.applyAnimationDelay) {
            relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
                  ? parseFloat(options.delay)
                  : relativeDelay;

            maxDelay = Math.max(relativeDelay, 0);

            var delayStyle;
            if (flags.applyTransitionDelay) {
              timings.transitionDelay = relativeDelay;
              delayStyle = getCssDelayStyle(relativeDelay);
              temporaryStyles.push(delayStyle);
              node.style[delayStyle[0]] = delayStyle[1];
            }

            if (flags.applyAnimationDelay) {
              timings.animationDelay = relativeDelay;
              delayStyle = getCssDelayStyle(relativeDelay, true);
              temporaryStyles.push(delayStyle);
              node.style[delayStyle[0]] = delayStyle[1];
            }
          }

          maxDelayTime = maxDelay * ONE_SECOND;
          maxDurationTime = maxDuration * ONE_SECOND;

          if (options.easing) {
            var easeProp, easeVal = options.easing;
            if (flags.hasTransitions) {
              easeProp = TRANSITION_PROP + TIMING_KEY;
              temporaryStyles.push([easeProp, easeVal]);
              node.style[easeProp] = easeVal;
            }
            if (flags.hasAnimations) {
              easeProp = ANIMATION_PROP + TIMING_KEY;
              temporaryStyles.push([easeProp, easeVal]);
              node.style[easeProp] = easeVal;
            }
          }

          if (timings.transitionDuration) {
            events.push(TRANSITIONEND_EVENT);
          }

          if (timings.animationDuration) {
            events.push(ANIMATIONEND_EVENT);
          }

          startTime = Date.now();
          element.on(events.join(' '), onAnimationProgress);
          $timeout(onAnimationExpired, maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime);

          applyAnimationToStyles(element, options);
        }

        function onAnimationExpired() {
          // although an expired animation is a failed animation, getting to
          // this outcome is very easy if the CSS code screws up. Therefore we
          // should still continue normally as if the animation completed correctly.
          close();
        }

        function onAnimationProgress(event) {
          event.stopPropagation();
          var ev = event.originalEvent || event;
          var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();

          /* Firefox (or possibly just Gecko) likes to not round values up
           * when a ms measurement is used for the animation */
          var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

          /* $manualTimeStamp is a mocked timeStamp value which is set
           * within browserTrigger(). This is only here so that tests can
           * mock animations properly. Real events fallback to event.timeStamp,
           * or, if they don't, then a timeStamp is automatically created for them.
           * We're checking to see if the timeStamp surpasses the expected delay,
           * but we're using elapsedTime instead of the timeStamp on the 2nd
           * pre-condition since animations sometimes close off early */
          if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
            // we set this flag to ensure that if the transition is paused then, when resumed,
            // the animation will automatically close itself since transitions cannot be paused.
            animationCompleted = true;
            close();
          }
        }
      }
    }
  }];
}];

var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
  $$animationProvider.drivers.push('$$animateCssDriver');

  var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
  var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';

  var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
  var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';

  this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$document', '$sniffer',
       function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $document,   $sniffer) {

    // only browsers that support these properties can render animations
    if (!$sniffer.animations && !$sniffer.transitions) return noop;

    var bodyNode = getDomNode($document).body;
    var rootNode = getDomNode($rootElement);

    var rootBodyElement = jqLite(bodyNode.parentNode === rootNode ? bodyNode : rootNode);

    return function initDriverFn(animationDetails) {
      return animationDetails.from && animationDetails.to
          ? prepareFromToAnchorAnimation(animationDetails.from,
                                         animationDetails.to,
                                         animationDetails.classes,
                                         animationDetails.anchors)
          : prepareRegularAnimation(animationDetails);
    };

    function filterCssClasses(classes) {
      //remove all the `ng-` stuff
      return classes.replace(/\bng-\S+\b/g, '');
    }

    function getUniqueValues(a, b) {
      if (isString(a)) a = a.split(' ');
      if (isString(b)) b = b.split(' ');
      return a.filter(function(val) {
        return b.indexOf(val) === -1;
      }).join(' ');
    }

    function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
      var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
      var startingClasses = filterCssClasses(getClassVal(clone));

      outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
      inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);

      clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);

      rootBodyElement.append(clone);

      var animatorIn, animatorOut = prepareOutAnimation();

      // the user may not end up using the `out` animation and
      // only making use of the `in` animation or vice-versa.
      // In either case we should allow this and not assume the
      // animation is over unless both animations are not used.
      if (!animatorOut) {
        animatorIn = prepareInAnimation();
        if (!animatorIn) {
          return end();
        }
      }

      var startingAnimator = animatorOut || animatorIn;

      return {
        start: function() {
          var runner;

          var currentAnimation = startingAnimator.start();
          currentAnimation.done(function() {
            currentAnimation = null;
            if (!animatorIn) {
              animatorIn = prepareInAnimation();
              if (animatorIn) {
                currentAnimation = animatorIn.start();
                currentAnimation.done(function() {
                  currentAnimation = null;
                  end();
                  runner.complete();
                });
                return currentAnimation;
              }
            }
            // in the event that there is no `in` animation
            end();
            runner.complete();
          });

          runner = new $$AnimateRunner({
            end: endFn,
            cancel: endFn
          });

          return runner;

          function endFn() {
            if (currentAnimation) {
              currentAnimation.end();
            }
          }
        }
      };

      function calculateAnchorStyles(anchor) {
        var styles = {};

        var coords = getDomNode(anchor).getBoundingClientRect();

        // we iterate directly since safari messes up and doesn't return
        // all the keys for the coods object when iterated
        forEach(['width','height','top','left'], function(key) {
          var value = coords[key];
          switch (key) {
            case 'top':
              value += bodyNode.scrollTop;
              break;
            case 'left':
              value += bodyNode.scrollLeft;
              break;
          }
          styles[key] = Math.floor(value) + 'px';
        });
        return styles;
      }

      function prepareOutAnimation() {
        var animator = $animateCss(clone, {
          addClass: NG_OUT_ANCHOR_CLASS_NAME,
          delay: true,
          from: calculateAnchorStyles(outAnchor)
        });

        // read the comment within `prepareRegularAnimation` to understand
        // why this check is necessary
        return animator.$$willAnimate ? animator : null;
      }

      function getClassVal(element) {
        return element.attr('class') || '';
      }

      function prepareInAnimation() {
        var endingClasses = filterCssClasses(getClassVal(inAnchor));
        var toAdd = getUniqueValues(endingClasses, startingClasses);
        var toRemove = getUniqueValues(startingClasses, endingClasses);

        var animator = $animateCss(clone, {
          to: calculateAnchorStyles(inAnchor),
          addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
          removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
          delay: true
        });

        // read the comment within `prepareRegularAnimation` to understand
        // why this check is necessary
        return animator.$$willAnimate ? animator : null;
      }

      function end() {
        clone.remove();
        outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
        inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
      }
    }

    function prepareFromToAnchorAnimation(from, to, classes, anchors) {
      var fromAnimation = prepareRegularAnimation(from);
      var toAnimation = prepareRegularAnimation(to);

      var anchorAnimations = [];
      forEach(anchors, function(anchor) {
        var outElement = anchor['out'];
        var inElement = anchor['in'];
        var animator = prepareAnchoredAnimation(classes, outElement, inElement);
        if (animator) {
          anchorAnimations.push(animator);
        }
      });

      // no point in doing anything when there are no elements to animate
      if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;

      return {
        start: function() {
          var animationRunners = [];

          if (fromAnimation) {
            animationRunners.push(fromAnimation.start());
          }

          if (toAnimation) {
            animationRunners.push(toAnimation.start());
          }

          forEach(anchorAnimations, function(animation) {
            animationRunners.push(animation.start());
          });

          var runner = new $$AnimateRunner({
            end: endFn,
            cancel: endFn // CSS-driven animations cannot be cancelled, only ended
          });

          $$AnimateRunner.all(animationRunners, function(status) {
            runner.complete(status);
          });

          return runner;

          function endFn() {
            forEach(animationRunners, function(runner) {
              runner.end();
            });
          }
        }
      };
    }

    function prepareRegularAnimation(animationDetails) {
      var element = animationDetails.element;
      var options = animationDetails.options || {};

      if (animationDetails.structural) {
        // structural animations ensure that the CSS classes are always applied
        // before the detection starts.
        options.structural = options.applyClassesEarly = true;

        // we special case the leave animation since we want to ensure that
        // the element is removed as soon as the animation is over. Otherwise
        // a flicker might appear or the element may not be removed at all
        options.event = animationDetails.event;
        if (options.event === 'leave') {
          options.onDone = options.domOperation;
        }
      } else {
        options.event = null;
      }

      var animator = $animateCss(element, options);

      // the driver lookup code inside of $$animation attempts to spawn a
      // driver one by one until a driver returns a.$$willAnimate animator object.
      // $animateCss will always return an object, however, it will pass in
      // a flag as a hint as to whether an animation was detected or not
      return animator.$$willAnimate ? animator : null;
    }
  }];
}];

// TODO(matsko): use caching here to speed things up for detection
// TODO(matsko): add documentation
//  by the time...

var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
  this.$get = ['$injector', '$$AnimateRunner', '$$rAFMutex', '$$jqLite',
       function($injector,   $$AnimateRunner,   $$rAFMutex,   $$jqLite) {

    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
         // $animateJs(element, 'enter');
    return function(element, event, classes, options) {
      // the `classes` argument is optional and if it is not used
      // then the classes will be resolved from the element's className
      // property as well as options.addClass/options.removeClass.
      if (arguments.length === 3 && isObject(classes)) {
        options = classes;
        classes = null;
      }

      options = prepareAnimationOptions(options);
      if (!classes) {
        classes = element.attr('class') || '';
        if (options.addClass) {
          classes += ' ' + options.addClass;
        }
        if (options.removeClass) {
          classes += ' ' + options.removeClass;
        }
      }

      var classesToAdd = options.addClass;
      var classesToRemove = options.removeClass;

      // the lookupAnimations function returns a series of animation objects that are
      // matched up with one or more of the CSS classes. These animation objects are
      // defined via the module.animation factory function. If nothing is detected then
      // we don't return anything which then makes $animation query the next driver.
      var animations = lookupAnimations(classes);
      var before, after;
      if (animations.length) {
        var afterFn, beforeFn;
        if (event == 'leave') {
          beforeFn = 'leave';
          afterFn = 'afterLeave'; // TODO(matsko): get rid of this
        } else {
          beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
          afterFn = event;
        }

        if (event !== 'enter' && event !== 'move') {
          before = packageAnimations(element, event, options, animations, beforeFn);
        }
        after  = packageAnimations(element, event, options, animations, afterFn);
      }

      // no matching animations
      if (!before && !after) return;

      function applyOptions() {
        options.domOperation();
        applyAnimationClasses(element, options);
      }

      return {
        start: function() {
          var closeActiveAnimations;
          var chain = [];

          if (before) {
            chain.push(function(fn) {
              closeActiveAnimations = before(fn);
            });
          }

          if (chain.length) {
            chain.push(function(fn) {
              applyOptions();
              fn(true);
            });
          } else {
            applyOptions();
          }

          if (after) {
            chain.push(function(fn) {
              closeActiveAnimations = after(fn);
            });
          }

          var animationClosed = false;
          var runner = new $$AnimateRunner({
            end: function() {
              endAnimations();
            },
            cancel: function() {
              endAnimations(true);
            }
          });

          $$AnimateRunner.chain(chain, onComplete);
          return runner;

          function onComplete(success) {
            animationClosed = true;
            applyOptions();
            applyAnimationStyles(element, options);
            runner.complete(success);
          }

          function endAnimations(cancelled) {
            if (!animationClosed) {
              (closeActiveAnimations || noop)(cancelled);
              onComplete(cancelled);
            }
          }
        }
      };

      function executeAnimationFn(fn, element, event, options, onDone) {
        var args;
        switch (event) {
          case 'animate':
            args = [element, options.from, options.to, onDone];
            break;

          case 'setClass':
            args = [element, classesToAdd, classesToRemove, onDone];
            break;

          case 'addClass':
            args = [element, classesToAdd, onDone];
            break;

          case 'removeClass':
            args = [element, classesToRemove, onDone];
            break;

          default:
            args = [element, onDone];
            break;
        }

        args.push(options);

        var value = fn.apply(fn, args);
        if (value) {
          if (isFunction(value.start)) {
            value = value.start();
          }

          if (value instanceof $$AnimateRunner) {
            value.done(onDone);
          } else if (isFunction(value)) {
            // optional onEnd / onCancel callback
            return value;
          }
        }

        return noop;
      }

      function groupEventedAnimations(element, event, options, animations, fnName) {
        var operations = [];
        forEach(animations, function(ani) {
          var animation = ani[fnName];
          if (!animation) return;

          // note that all of these animations will run in parallel
          operations.push(function() {
            var runner;
            var endProgressCb;

            var resolved = false;
            var onAnimationComplete = function(rejected) {
              if (!resolved) {
                resolved = true;
                (endProgressCb || noop)(rejected);
                runner.complete(!rejected);
              }
            };

            runner = new $$AnimateRunner({
              end: function() {
                onAnimationComplete();
              },
              cancel: function() {
                onAnimationComplete(true);
              }
            });

            endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
              var cancelled = result === false;
              onAnimationComplete(cancelled);
            });

            return runner;
          });
        });

        return operations;
      }

      function packageAnimations(element, event, options, animations, fnName) {
        var operations = groupEventedAnimations(element, event, options, animations, fnName);
        if (operations.length === 0) {
          var a,b;
          if (fnName === 'beforeSetClass') {
            a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
            b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
          } else if (fnName === 'setClass') {
            a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
            b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
          }

          if (a) {
            operations = operations.concat(a);
          }
          if (b) {
            operations = operations.concat(b);
          }
        }

        if (operations.length === 0) return;

        // TODO(matsko): add documentation
        return function startAnimation(callback) {
          var runners = [];
          if (operations.length) {
            forEach(operations, function(animateFn) {
              runners.push(animateFn());
            });
          }

          runners.length ? $$AnimateRunner.all(runners, callback) : callback();

          return function endFn(reject) {
            forEach(runners, function(runner) {
              reject ? runner.cancel() : runner.end();
            });
          };
        };
      }
    };

    function lookupAnimations(classes) {
      classes = isArray(classes) ? classes : classes.split(' ');
      var matches = [], flagMap = {};
      for (var i=0; i < classes.length; i++) {
        var klass = classes[i],
            animationFactory = $animateProvider.$$registeredAnimations[klass];
        if (animationFactory && !flagMap[klass]) {
          matches.push($injector.get(animationFactory));
          flagMap[klass] = true;
        }
      }
      return matches;
    }
  }];
}];

var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
  $$animationProvider.drivers.push('$$animateJsDriver');
  this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
    return function initDriverFn(animationDetails) {
      if (animationDetails.from && animationDetails.to) {
        var fromAnimation = prepareAnimation(animationDetails.from);
        var toAnimation = prepareAnimation(animationDetails.to);
        if (!fromAnimation && !toAnimation) return;

        return {
          start: function() {
            var animationRunners = [];

            if (fromAnimation) {
              animationRunners.push(fromAnimation.start());
            }

            if (toAnimation) {
              animationRunners.push(toAnimation.start());
            }

            $$AnimateRunner.all(animationRunners, done);

            var runner = new $$AnimateRunner({
              end: endFnFactory(),
              cancel: endFnFactory()
            });

            return runner;

            function endFnFactory() {
              return function() {
                forEach(animationRunners, function(runner) {
                  // at this point we cannot cancel animations for groups just yet. 1.5+
                  runner.end();
                });
              };
            }

            function done(status) {
              runner.complete(status);
            }
          }
        };
      } else {
        return prepareAnimation(animationDetails);
      }
    };

    function prepareAnimation(animationDetails) {
      // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
      var element = animationDetails.element;
      var event = animationDetails.event;
      var options = animationDetails.options;
      var classes = animationDetails.classes;
      return $$animateJs(element, event, classes, options);
    }
  }];
}];

var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
  var PRE_DIGEST_STATE = 1;
  var RUNNING_STATE = 2;

  var rules = this.rules = {
    skip: [],
    cancel: [],
    join: []
  };

  function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
    return rules[ruleType].some(function(fn) {
      return fn(element, currentAnimation, previousAnimation);
    });
  }

  function hasAnimationClasses(options, and) {
    options = options || {};
    var a = (options.addClass || '').length > 0;
    var b = (options.removeClass || '').length > 0;
    return and ? a && b : a || b;
  }

  rules.join.push(function(element, newAnimation, currentAnimation) {
    // if the new animation is class-based then we can just tack that on
    return !newAnimation.structural && hasAnimationClasses(newAnimation.options);
  });

  rules.skip.push(function(element, newAnimation, currentAnimation) {
    // there is no need to animate anything if no classes are being added and
    // there is no structural animation that will be triggered
    return !newAnimation.structural && !hasAnimationClasses(newAnimation.options);
  });

  rules.skip.push(function(element, newAnimation, currentAnimation) {
    // why should we trigger a new structural animation if the element will
    // be removed from the DOM anyway?
    return currentAnimation.event == 'leave' && newAnimation.structural;
  });

  rules.skip.push(function(element, newAnimation, currentAnimation) {
    // if there is a current animation then skip the class-based animation
    return currentAnimation.structural && !newAnimation.structural;
  });

  rules.cancel.push(function(element, newAnimation, currentAnimation) {
    // there can never be two structural animations running at the same time
    return currentAnimation.structural && newAnimation.structural;
  });

  rules.cancel.push(function(element, newAnimation, currentAnimation) {
    // if the previous animation is already running, but the new animation will
    // be triggered, but the new animation is structural
    return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
  });

  rules.cancel.push(function(element, newAnimation, currentAnimation) {
    var nO = newAnimation.options;
    var cO = currentAnimation.options;

    // if the exact same CSS class is added/removed then it's safe to cancel it
    return (nO.addClass && nO.addClass === cO.removeClass) || (nO.removeClass && nO.removeClass === cO.addClass);
  });

  this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
               '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite',
       function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
                $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite) {

    var activeAnimationsLookup = new $$HashMap();
    var disabledElementsLookup = new $$HashMap();

    var animationsEnabled = null;

    // Wait until all directive and route-related templates are downloaded and
    // compiled. The $templateRequest.totalPendingRequests variable keeps track of
    // all of the remote templates being currently downloaded. If there are no
    // templates currently downloading then the watcher will still fire anyway.
    var deregisterWatch = $rootScope.$watch(
      function() { return $templateRequest.totalPendingRequests === 0; },
      function(isEmpty) {
        if (!isEmpty) return;
        deregisterWatch();

        // Now that all templates have been downloaded, $animate will wait until
        // the post digest queue is empty before enabling animations. By having two
        // calls to $postDigest calls we can ensure that the flag is enabled at the
        // very end of the post digest queue. Since all of the animations in $animate
        // use $postDigest, it's important that the code below executes at the end.
        // This basically means that the page is fully downloaded and compiled before
        // any animations are triggered.
        $rootScope.$$postDigest(function() {
          $rootScope.$$postDigest(function() {
            // we check for null directly in the event that the application already called
            // .enabled() with whatever arguments that it provided it with
            if (animationsEnabled === null) {
              animationsEnabled = true;
            }
          });
        });
      }
    );

    var bodyElement = jqLite($document[0].body);

    var callbackRegistry = {};

    // remember that the classNameFilter is set during the provider/config
    // stage therefore we can optimize here and setup a helper function
    var classNameFilter = $animateProvider.classNameFilter();
    var isAnimatableClassName = !classNameFilter
              ? function() { return true; }
              : function(className) {
                return classNameFilter.test(className);
              };

    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

    function normalizeAnimationOptions(element, options) {
      return mergeAnimationOptions(element, options, {});
    }

    function findCallbacks(element, event) {
      var targetNode = getDomNode(element);

      var matches = [];
      var entries = callbackRegistry[event];
      if (entries) {
        forEach(entries, function(entry) {
          if (entry.node.contains(targetNode)) {
            matches.push(entry.callback);
          }
        });
      }

      return matches;
    }

    function triggerCallback(event, element, phase, data) {
      $$rAF(function() {
        forEach(findCallbacks(element, event), function(callback) {
          callback(element, phase, data);
        });
      });
    }

    return {
      on: function(event, container, callback) {
        var node = extractElementNode(container);
        callbackRegistry[event] = callbackRegistry[event] || [];
        callbackRegistry[event].push({
          node: node,
          callback: callback
        });
      },

      off: function(event, container, callback) {
        var entries = callbackRegistry[event];
        if (!entries) return;

        callbackRegistry[event] = arguments.length === 1
            ? null
            : filterFromRegistry(entries, container, callback);

        function filterFromRegistry(list, matchContainer, matchCallback) {
          var containerNode = extractElementNode(matchContainer);
          return list.filter(function(entry) {
            var isMatch = entry.node === containerNode &&
                            (!matchCallback || entry.callback === matchCallback);
            return !isMatch;
          });
        }
      },

      pin: function(element, parentElement) {
        assertArg(isElement(element), 'element', 'not an element');
        assertArg(isElement(parentElement), 'parentElement', 'not an element');
        element.data(NG_ANIMATE_PIN_DATA, parentElement);
      },

      push: function(element, event, options, domOperation) {
        options = options || {};
        options.domOperation = domOperation;
        return queueAnimation(element, event, options);
      },

      // this method has four signatures:
      //  () - global getter
      //  (bool) - global setter
      //  (element) - element getter
      //  (element, bool) - element setter<F37>
      enabled: function(element, bool) {
        var argCount = arguments.length;

        if (argCount === 0) {
          // () - Global getter
          bool = !!animationsEnabled;
        } else {
          var hasElement = isElement(element);

          if (!hasElement) {
            // (bool) - Global setter
            bool = animationsEnabled = !!element;
          } else {
            var node = getDomNode(element);
            var recordExists = disabledElementsLookup.get(node);

            if (argCount === 1) {
              // (element) - Element getter
              bool = !recordExists;
            } else {
              // (element, bool) - Element setter
              bool = !!bool;
              if (!bool) {
                disabledElementsLookup.put(node, true);
              } else if (recordExists) {
                disabledElementsLookup.remove(node);
              }
            }
          }
        }

        return bool;
      }
    };

    function queueAnimation(element, event, options) {
      var node, parent;
      element = stripCommentsFromElement(element);
      if (element) {
        node = getDomNode(element);
        parent = element.parent();
      }

      options = prepareAnimationOptions(options);

      // we create a fake runner with a working promise.
      // These methods will become available after the digest has passed
      var runner = new $$AnimateRunner();

      // there are situations where a directive issues an animation for
      // a jqLite wrapper that contains only comment nodes... If this
      // happens then there is no way we can perform an animation
      if (!node) {
        close();
        return runner;
      }

      if (isArray(options.addClass)) {
        options.addClass = options.addClass.join(' ');
      }

      if (isArray(options.removeClass)) {
        options.removeClass = options.removeClass.join(' ');
      }

      if (options.from && !isObject(options.from)) {
        options.from = null;
      }

      if (options.to && !isObject(options.to)) {
        options.to = null;
      }

      var className = [node.className, options.addClass, options.removeClass].join(' ');
      if (!isAnimatableClassName(className)) {
        close();
        return runner;
      }

      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

      // this is a hard disable of all animations for the application or on
      // the element itself, therefore  there is no need to continue further
      // past this point if not enabled
      var skipAnimations = !animationsEnabled || disabledElementsLookup.get(node);
      var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
      var hasExistingAnimation = !!existingAnimation.state;

      // there is no point in traversing the same collection of parent ancestors if a followup
      // animation will be run on the same element that already did all that checking work
      if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
        skipAnimations = !areAnimationsAllowed(element, parent, event);
      }

      if (skipAnimations) {
        close();
        return runner;
      }

      if (isStructural) {
        closeChildAnimations(element);
      }

      var newAnimation = {
        structural: isStructural,
        element: element,
        event: event,
        close: close,
        options: options,
        runner: runner
      };

      if (hasExistingAnimation) {
        var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
        if (skipAnimationFlag) {
          if (existingAnimation.state === RUNNING_STATE) {
            close();
            return runner;
          } else {
            mergeAnimationOptions(element, existingAnimation.options, options);
            return existingAnimation.runner;
          }
        }

        var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
        if (cancelAnimationFlag) {
          if (existingAnimation.state === RUNNING_STATE) {
            // this will end the animation right away and it is safe
            // to do so since the animation is already running and the
            // runner callback code will run in async
            existingAnimation.runner.end();
          } else if (existingAnimation.structural) {
            // this means that the animation is queued into a digest, but
            // hasn't started yet. Therefore it is safe to run the close
            // method which will call the runner methods in async.
            existingAnimation.close();
          } else {
            // this will merge the existing animation options into this new follow-up animation
            mergeAnimationOptions(element, newAnimation.options, existingAnimation.options);
          }
        } else {
          // a joined animation means that this animation will take over the existing one
          // so an example would involve a leave animation taking over an enter. Then when
          // the postDigest kicks in the enter will be ignored.
          var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
          if (joinAnimationFlag) {
            if (existingAnimation.state === RUNNING_STATE) {
              normalizeAnimationOptions(element, options);
            } else {
              event = newAnimation.event = existingAnimation.event;
              options = mergeAnimationOptions(element, existingAnimation.options, newAnimation.options);
              return runner;
            }
          }
        }
      } else {
        // normalization in this case means that it removes redundant CSS classes that
        // already exist (addClass) or do not exist (removeClass) on the element
        normalizeAnimationOptions(element, options);
      }

      // when the options are merged and cleaned up we may end up not having to do
      // an animation at all, therefore we should check this before issuing a post
      // digest callback. Structural animations will always run no matter what.
      var isValidAnimation = newAnimation.structural;
      if (!isValidAnimation) {
        // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
        isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
                            || hasAnimationClasses(newAnimation.options);
      }

      if (!isValidAnimation) {
        close();
        clearElementAnimationState(element);
        return runner;
      }

      if (isStructural) {
        closeParentClassBasedAnimations(parent);
      }

      // the counter keeps track of cancelled animations
      var counter = (existingAnimation.counter || 0) + 1;
      newAnimation.counter = counter;

      markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);

      $rootScope.$$postDigest(function() {
        var animationDetails = activeAnimationsLookup.get(node);
        var animationCancelled = !animationDetails;
        animationDetails = animationDetails || {};

        // if addClass/removeClass is called before something like enter then the
        // registered parent element may not be present. The code below will ensure
        // that a final value for parent element is obtained
        var parentElement = element.parent() || [];

        // animate/structural/class-based animations all have requirements. Otherwise there
        // is no point in performing an animation. The parent node must also be set.
        var isValidAnimation = parentElement.length > 0
                                && (animationDetails.event === 'animate'
                                    || animationDetails.structural
                                    || hasAnimationClasses(animationDetails.options));

        // this means that the previous animation was cancelled
        // even if the follow-up animation is the same event
        if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
          // if another animation did not take over then we need
          // to make sure that the domOperation and options are
          // handled accordingly
          if (animationCancelled) {
            applyAnimationClasses(element, options);
            applyAnimationStyles(element, options);
          }

          // if the event changed from something like enter to leave then we do
          // it, otherwise if it's the same then the end result will be the same too
          if (animationCancelled || (isStructural && animationDetails.event !== event)) {
            options.domOperation();
            runner.end();
          }

          // in the event that the element animation was not cancelled or a follow-up animation
          // isn't allowed to animate from here then we need to clear the state of the element
          // so that any future animations won't read the expired animation data.
          if (!isValidAnimation) {
            clearElementAnimationState(element);
          }

          return;
        }

        // this combined multiple class to addClass / removeClass into a setClass event
        // so long as a structural event did not take over the animation
        event = !animationDetails.structural && hasAnimationClasses(animationDetails.options, true)
            ? 'setClass'
            : animationDetails.event;

        if (animationDetails.structural) {
          closeParentClassBasedAnimations(parentElement);
        }

        markElementAnimationState(element, RUNNING_STATE);
        var realRunner = $$animation(element, event, animationDetails.options);
        realRunner.done(function(status) {
          close(!status);
          var animationDetails = activeAnimationsLookup.get(node);
          if (animationDetails && animationDetails.counter === counter) {
            clearElementAnimationState(getDomNode(element));
          }
          notifyProgress(runner, event, 'close', {});
        });

        // this will update the runner's flow-control events based on
        // the `realRunner` object.
        runner.setHost(realRunner);
        notifyProgress(runner, event, 'start', {});
      });

      return runner;

      function notifyProgress(runner, event, phase, data) {
        triggerCallback(event, element, phase, data);
        runner.progress(event, phase, data);
      }

      function close(reject) { // jshint ignore:line
        applyAnimationClasses(element, options);
        applyAnimationStyles(element, options);
        options.domOperation();
        runner.complete(!reject);
      }
    }

    function closeChildAnimations(element) {
      var node = getDomNode(element);
      var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
      forEach(children, function(child) {
        var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
        var animationDetails = activeAnimationsLookup.get(child);
        switch (state) {
          case RUNNING_STATE:
            animationDetails.runner.end();
            /* falls through */
          case PRE_DIGEST_STATE:
            if (animationDetails) {
              activeAnimationsLookup.remove(child);
            }
            break;
        }
      });
    }

    function clearElementAnimationState(element) {
      var node = getDomNode(element);
      node.removeAttribute(NG_ANIMATE_ATTR_NAME);
      activeAnimationsLookup.remove(node);
    }

    function isMatchingElement(nodeOrElmA, nodeOrElmB) {
      return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
    }

    function closeParentClassBasedAnimations(startingElement) {
      var parentNode = getDomNode(startingElement);
      do {
        if (!parentNode || parentNode.nodeType !== ELEMENT_NODE) break;

        var animationDetails = activeAnimationsLookup.get(parentNode);
        if (animationDetails) {
          examineParentAnimation(parentNode, animationDetails);
        }

        parentNode = parentNode.parentNode;
      } while (true);

      // since animations are detected from CSS classes, we need to flush all parent
      // class-based animations so that the parent classes are all present for child
      // animations to properly function (otherwise any CSS selectors may not work)
      function examineParentAnimation(node, animationDetails) {
        // enter/leave/move always have priority
        if (animationDetails.structural || !hasAnimationClasses(animationDetails.options)) return;

        if (animationDetails.state === RUNNING_STATE) {
          animationDetails.runner.end();
        }
        clearElementAnimationState(node);
      }
    }

    function areAnimationsAllowed(element, parentElement, event) {
      var bodyElementDetected = false;
      var rootElementDetected = false;
      var parentAnimationDetected = false;
      var animateChildren;

      var parentHost = element.data(NG_ANIMATE_PIN_DATA);
      if (parentHost) {
        parentElement = parentHost;
      }

      while (parentElement && parentElement.length) {
        if (!rootElementDetected) {
          // angular doesn't want to attempt to animate elements outside of the application
          // therefore we need to ensure that the rootElement is an ancestor of the current element
          rootElementDetected = isMatchingElement(parentElement, $rootElement);
        }

        var parentNode = parentElement[0];
        if (parentNode.nodeType !== ELEMENT_NODE) {
          // no point in inspecting the #document element
          break;
        }

        var details = activeAnimationsLookup.get(parentNode) || {};
        // either an enter, leave or move animation will commence
        // therefore we can't allow any animations to take place
        // but if a parent animation is class-based then that's ok
        if (!parentAnimationDetected) {
          parentAnimationDetected = details.structural || disabledElementsLookup.get(parentNode);
        }

        if (isUndefined(animateChildren) || animateChildren === true) {
          var value = parentElement.data(NG_ANIMATE_CHILDREN_DATA);
          if (isDefined(value)) {
            animateChildren = value;
          }
        }

        // there is no need to continue traversing at this point
        if (parentAnimationDetected && animateChildren === false) break;

        if (!rootElementDetected) {
          // angular doesn't want to attempt to animate elements outside of the application
          // therefore we need to ensure that the rootElement is an ancestor of the current element
          rootElementDetected = isMatchingElement(parentElement, $rootElement);
          if (!rootElementDetected) {
            parentHost = parentElement.data(NG_ANIMATE_PIN_DATA);
            if (parentHost) {
              parentElement = parentHost;
            }
          }
        }

        if (!bodyElementDetected) {
          // we also need to ensure that the element is or will be apart of the body element
          // otherwise it is pointless to even issue an animation to be rendered
          bodyElementDetected = isMatchingElement(parentElement, bodyElement);
        }

        parentElement = parentElement.parent();
      }

      var allowAnimation = !parentAnimationDetected || animateChildren;
      return allowAnimation && rootElementDetected && bodyElementDetected;
    }

    function markElementAnimationState(element, state, details) {
      details = details || {};
      details.state = state;

      var node = getDomNode(element);
      node.setAttribute(NG_ANIMATE_ATTR_NAME, state);

      var oldValue = activeAnimationsLookup.get(node);
      var newValue = oldValue
          ? extend(oldValue, details)
          : details;
      activeAnimationsLookup.put(node, newValue);
    }
  }];
}];

var $$rAFMutexFactory = ['$$rAF', function($$rAF) {
  return function() {
    var passed = false;
    $$rAF(function() {
      passed = true;
    });
    return function(fn) {
      passed ? fn() : $$rAF(fn);
    };
  };
}];

var $$AnimateRunnerFactory = ['$q', '$$rAFMutex', function($q, $$rAFMutex) {
  var INITIAL_STATE = 0;
  var DONE_PENDING_STATE = 1;
  var DONE_COMPLETE_STATE = 2;

  AnimateRunner.chain = function(chain, callback) {
    var index = 0;

    next();
    function next() {
      if (index === chain.length) {
        callback(true);
        return;
      }

      chain[index](function(response) {
        if (response === false) {
          callback(false);
          return;
        }
        index++;
        next();
      });
    }
  };

  AnimateRunner.all = function(runners, callback) {
    var count = 0;
    var status = true;
    forEach(runners, function(runner) {
      runner.done(onProgress);
    });

    function onProgress(response) {
      status = status && response;
      if (++count === runners.length) {
        callback(status);
      }
    }
  };

  function AnimateRunner(host) {
    this.setHost(host);

    this._doneCallbacks = [];
    this._runInAnimationFrame = $$rAFMutex();
    this._state = 0;
  }

  AnimateRunner.prototype = {
    setHost: function(host) {
      this.host = host || {};
    },

    done: function(fn) {
      if (this._state === DONE_COMPLETE_STATE) {
        fn();
      } else {
        this._doneCallbacks.push(fn);
      }
    },

    progress: noop,

    getPromise: function() {
      if (!this.promise) {
        var self = this;
        this.promise = $q(function(resolve, reject) {
          self.done(function(status) {
            status === false ? reject() : resolve();
          });
        });
      }
      return this.promise;
    },

    then: function(resolveHandler, rejectHandler) {
      return this.getPromise().then(resolveHandler, rejectHandler);
    },

    'catch': function(handler) {
      return this.getPromise()['catch'](handler);
    },

    'finally': function(handler) {
      return this.getPromise()['finally'](handler);
    },

    pause: function() {
      if (this.host.pause) {
        this.host.pause();
      }
    },

    resume: function() {
      if (this.host.resume) {
        this.host.resume();
      }
    },

    end: function() {
      if (this.host.end) {
        this.host.end();
      }
      this._resolve(true);
    },

    cancel: function() {
      if (this.host.cancel) {
        this.host.cancel();
      }
      this._resolve(false);
    },

    complete: function(response) {
      var self = this;
      if (self._state === INITIAL_STATE) {
        self._state = DONE_PENDING_STATE;
        self._runInAnimationFrame(function() {
          self._resolve(response);
        });
      }
    },

    _resolve: function(response) {
      if (this._state !== DONE_COMPLETE_STATE) {
        forEach(this._doneCallbacks, function(fn) {
          fn(response);
        });
        this._doneCallbacks.length = 0;
        this._state = DONE_COMPLETE_STATE;
      }
    }
  };

  return AnimateRunner;
}];

var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
  var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';

  var drivers = this.drivers = [];

  var RUNNER_STORAGE_KEY = '$$animationRunner';

  function setRunner(element, runner) {
    element.data(RUNNER_STORAGE_KEY, runner);
  }

  function removeRunner(element) {
    element.removeData(RUNNER_STORAGE_KEY);
  }

  function getRunner(element) {
    return element.data(RUNNER_STORAGE_KEY);
  }

  this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$rAFScheduler',
       function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$rAFScheduler) {

    var animationQueue = [];
    var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);

    var totalPendingClassBasedAnimations = 0;
    var totalActiveClassBasedAnimations = 0;
    var classBasedAnimationsQueue = [];

    // TODO(matsko): document the signature in a better way
    return function(element, event, options) {
      options = prepareAnimationOptions(options);
      var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;

      // there is no animation at the current moment, however
      // these runner methods will get later updated with the
      // methods leading into the driver's end/cancel methods
      // for now they just stop the animation from starting
      var runner = new $$AnimateRunner({
        end: function() { close(); },
        cancel: function() { close(true); }
      });

      if (!drivers.length) {
        close();
        return runner;
      }

      setRunner(element, runner);

      var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
      var tempClasses = options.tempClasses;
      if (tempClasses) {
        classes += ' ' + tempClasses;
        options.tempClasses = null;
      }

      var classBasedIndex;
      if (!isStructural) {
        classBasedIndex = totalPendingClassBasedAnimations;
        totalPendingClassBasedAnimations += 1;
      }

      animationQueue.push({
        // this data is used by the postDigest code and passed into
        // the driver step function
        element: element,
        classes: classes,
        event: event,
        classBasedIndex: classBasedIndex,
        structural: isStructural,
        options: options,
        beforeStart: beforeStart,
        close: close
      });

      element.on('$destroy', handleDestroyedElement);

      // we only want there to be one function called within the post digest
      // block. This way we can group animations for all the animations that
      // were apart of the same postDigest flush call.
      if (animationQueue.length > 1) return runner;

      $rootScope.$$postDigest(function() {
        totalActiveClassBasedAnimations = totalPendingClassBasedAnimations;
        totalPendingClassBasedAnimations = 0;
        classBasedAnimationsQueue.length = 0;

        var animations = [];
        forEach(animationQueue, function(entry) {
          // the element was destroyed early on which removed the runner
          // form its storage. This means we can't animate this element
          // at all and it already has been closed due to destruction.
          if (getRunner(entry.element)) {
            animations.push(entry);
          }
        });

        // now any future animations will be in another postDigest
        animationQueue.length = 0;

        forEach(groupAnimations(animations), function(animationEntry) {
          if (animationEntry.structural) {
            triggerAnimationStart();
          } else {
            classBasedAnimationsQueue.push({
              node: getDomNode(animationEntry.element),
              fn: triggerAnimationStart
            });

            if (animationEntry.classBasedIndex === totalActiveClassBasedAnimations - 1) {
              // we need to sort each of the animations in order of parent to child
              // relationships. This ensures that the child classes are applied at the
              // right time.
              classBasedAnimationsQueue = classBasedAnimationsQueue.sort(function(a,b) {
                return b.node.contains(a.node);
              }).map(function(entry) {
                return entry.fn;
              });

              $$rAFScheduler(classBasedAnimationsQueue);
            }
          }

          function triggerAnimationStart() {
            // it's important that we apply the `ng-animate` CSS class and the
            // temporary classes before we do any driver invoking since these
            // CSS classes may be required for proper CSS detection.
            animationEntry.beforeStart();

            var startAnimationFn, closeFn = animationEntry.close;

            // in the event that the element was removed before the digest runs or
            // during the RAF sequencing then we should not trigger the animation.
            var targetElement = animationEntry.anchors
                ? (animationEntry.from.element || animationEntry.to.element)
                : animationEntry.element;

            if (getRunner(targetElement)) {
              var operation = invokeFirstDriver(animationEntry);
              if (operation) {
                startAnimationFn = operation.start;
              }
            }

            if (!startAnimationFn) {
              closeFn();
            } else {
              var animationRunner = startAnimationFn();
              animationRunner.done(function(status) {
                closeFn(!status);
              });
              updateAnimationRunners(animationEntry, animationRunner);
            }
          }
        });
      });

      return runner;

      // TODO(matsko): change to reference nodes
      function getAnchorNodes(node) {
        var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
        var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
              ? [node]
              : node.querySelectorAll(SELECTOR);
        var anchors = [];
        forEach(items, function(node) {
          var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
          if (attr && attr.length) {
            anchors.push(node);
          }
        });
        return anchors;
      }

      function groupAnimations(animations) {
        var preparedAnimations = [];
        var refLookup = {};
        forEach(animations, function(animation, index) {
          var element = animation.element;
          var node = getDomNode(element);
          var event = animation.event;
          var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
          var anchorNodes = animation.structural ? getAnchorNodes(node) : [];

          if (anchorNodes.length) {
            var direction = enterOrMove ? 'to' : 'from';

            forEach(anchorNodes, function(anchor) {
              var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
              refLookup[key] = refLookup[key] || {};
              refLookup[key][direction] = {
                animationID: index,
                element: jqLite(anchor)
              };
            });
          } else {
            preparedAnimations.push(animation);
          }
        });

        var usedIndicesLookup = {};
        var anchorGroups = {};
        forEach(refLookup, function(operations, key) {
          var from = operations.from;
          var to = operations.to;

          if (!from || !to) {
            // only one of these is set therefore we can't have an
            // anchor animation since all three pieces are required
            var index = from ? from.animationID : to.animationID;
            var indexKey = index.toString();
            if (!usedIndicesLookup[indexKey]) {
              usedIndicesLookup[indexKey] = true;
              preparedAnimations.push(animations[index]);
            }
            return;
          }

          var fromAnimation = animations[from.animationID];
          var toAnimation = animations[to.animationID];
          var lookupKey = from.animationID.toString();
          if (!anchorGroups[lookupKey]) {
            var group = anchorGroups[lookupKey] = {
              structural: true,
              beforeStart: function() {
                fromAnimation.beforeStart();
                toAnimation.beforeStart();
              },
              close: function() {
                fromAnimation.close();
                toAnimation.close();
              },
              classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
              from: fromAnimation,
              to: toAnimation,
              anchors: [] // TODO(matsko): change to reference nodes
            };

            // the anchor animations require that the from and to elements both have at least
            // one shared CSS class which effictively marries the two elements together to use
            // the same animation driver and to properly sequence the anchor animation.
            if (group.classes.length) {
              preparedAnimations.push(group);
            } else {
              preparedAnimations.push(fromAnimation);
              preparedAnimations.push(toAnimation);
            }
          }

          anchorGroups[lookupKey].anchors.push({
            'out': from.element, 'in': to.element
          });
        });

        return preparedAnimations;
      }

      function cssClassesIntersection(a,b) {
        a = a.split(' ');
        b = b.split(' ');
        var matches = [];

        for (var i = 0; i < a.length; i++) {
          var aa = a[i];
          if (aa.substring(0,3) === 'ng-') continue;

          for (var j = 0; j < b.length; j++) {
            if (aa === b[j]) {
              matches.push(aa);
              break;
            }
          }
        }

        return matches.join(' ');
      }

      function invokeFirstDriver(animationDetails) {
        // we loop in reverse order since the more general drivers (like CSS and JS)
        // may attempt more elements, but custom drivers are more particular
        for (var i = drivers.length - 1; i >= 0; i--) {
          var driverName = drivers[i];
          if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check

          var factory = $injector.get(driverName);
          var driver = factory(animationDetails);
          if (driver) {
            return driver;
          }
        }
      }

      function beforeStart() {
        element.addClass(NG_ANIMATE_CLASSNAME);
        if (tempClasses) {
          $$jqLite.addClass(element, tempClasses);
        }
      }

      function updateAnimationRunners(animation, newRunner) {
        if (animation.from && animation.to) {
          update(animation.from.element);
          update(animation.to.element);
        } else {
          update(animation.element);
        }

        function update(element) {
          getRunner(element).setHost(newRunner);
        }
      }

      function handleDestroyedElement() {
        var runner = getRunner(element);
        if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
          runner.end();
        }
      }

      function close(rejected) { // jshint ignore:line
        element.off('$destroy', handleDestroyedElement);
        removeRunner(element);

        applyAnimationClasses(element, options);
        applyAnimationStyles(element, options);
        options.domOperation();

        if (tempClasses) {
          $$jqLite.removeClass(element, tempClasses);
        }

        element.removeClass(NG_ANIMATE_CLASSNAME);
        runner.complete(!rejected);
      }
    };
  }];
}];

/* global angularAnimateModule: true,

   $$rAFMutexFactory,
   $$rAFSchedulerFactory,
   $$AnimateChildrenDirective,
   $$AnimateRunnerFactory,
   $$AnimateQueueProvider,
   $$AnimationProvider,
   $AnimateCssProvider,
   $$AnimateCssDriverProvider,
   $$AnimateJsProvider,
   $$AnimateJsDriverProvider,
*/

/**
 * @ngdoc module
 * @name ngAnimate
 * @description
 *
 * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
 * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` then the animation hooks are enabled for an Angular app.
 *
 * <div doc-module-components="ngAnimate"></div>
 *
 * # Usage
 * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
 * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
 * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
 * the HTML element that the animation will be triggered on.
 *
 * ## Directive Support
 * The following directives are "animation aware":
 *
 * | Directive                                                                                                | Supported Animations                                                     |
 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
 *
 * (More information can be found by visiting each the documentation associated with each directive.)
 *
 * ## CSS-based Animations
 *
 * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
 * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
 *
 * The example below shows how an `enter` animation can be made possible on a element using `ng-if`:
 *
 * ```html
 * <div ng-if="bool" class="fade">
 *    Fade me in out
 * </div>
 * <button ng-click="bool=true">Fade In!</button>
 * <button ng-click="bool=false">Fade Out!</button>
 * ```
 *
 * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
 *
 * ```css
 * /&#42; The starting CSS styles for the enter animation &#42;/
 * .fade.ng-enter {
 *   transition:0.5s linear all;
 *   opacity:0;
 * }
 *
 * /&#42; The finishing CSS styles for the enter animation &#42;/
 * .fade.ng-enter.ng-enter-active {
 *   opacity:1;
 * }
 * ```
 *
 * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
 * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
 * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
 *
 * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
 *
 * ```css
 * /&#42; now the element will fade out before it is removed from the DOM &#42;/
 * .fade.ng-leave {
 *   transition:0.5s linear all;
 *   opacity:1;
 * }
 * .fade.ng-leave.ng-leave-active {
 *   opacity:0;
 * }
 * ```
 *
 * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
 *
 * ```css
 * /&#42; there is no need to define anything inside of the destination
 * CSS class since the keyframe will take charge of the animation &#42;/
 * .fade.ng-leave {
 *   animation: my_fade_animation 0.5s linear;
 *   -webkit-animation: my_fade_animation 0.5s linear;
 * }
 *
 * @keyframes my_fade_animation {
 *   from { opacity:1; }
 *   to { opacity:0; }
 * }
 *
 * @-webkit-keyframes my_fade_animation {
 *   from { opacity:1; }
 *   to { opacity:0; }
 * }
 * ```
 *
 * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
 *
 * ### CSS Class-based Animations
 *
 * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
 * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
 * and removed.
 *
 * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
 *
 * ```html
 * <div ng-show="bool" class="fade">
 *   Show and hide me
 * </div>
 * <button ng-click="bool=true">Toggle</button>
 *
 * <style>
 * .fade.ng-hide {
 *   transition:0.5s linear all;
 *   opacity:0;
 * }
 * </style>
 * ```
 *
 * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
 * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
 *
 * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
 * with CSS styles.
 *
 * ```html
 * <div ng-class="{on:onOff}" class="highlight">
 *   Highlight this box
 * </div>
 * <button ng-click="onOff=!onOff">Toggle</button>
 *
 * <style>
 * .highlight {
 *   transition:0.5s linear all;
 * }
 * .highlight.on-add {
 *   background:white;
 * }
 * .highlight.on {
 *   background:yellow;
 * }
 * .highlight.on-remove {
 *   background:black;
 * }
 * </style>
 * ```
 *
 * We can also make use of CSS keyframes by placing them within the CSS classes.
 *
 *
 * ### CSS Staggering Animations
 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
 *
 * ```css
 * .my-animation.ng-enter {
 *   /&#42; standard transition code &#42;/
 *   transition: 1s linear all;
 *   opacity:0;
 * }
 * .my-animation.ng-enter-stagger {
 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
 *   transition-delay: 0.1s;
 *
 *   /&#42; in case the stagger doesn't work then the duration value
 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
 *   transition-duration: 0s;
 * }
 * .my-animation.ng-enter.ng-enter-active {
 *   /&#42; standard transition styles &#42;/
 *   opacity:1;
 * }
 * ```
 *
 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
 * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
 *
 * The following code will issue the **ng-leave-stagger** event on the element provided:
 *
 * ```js
 * var kids = parent.children();
 *
 * $animate.leave(kids[0]); //stagger index=0
 * $animate.leave(kids[1]); //stagger index=1
 * $animate.leave(kids[2]); //stagger index=2
 * $animate.leave(kids[3]); //stagger index=3
 * $animate.leave(kids[4]); //stagger index=4
 *
 * window.requestAnimationFrame(function() {
 *   //stagger has reset itself
 *   $animate.leave(kids[5]); //stagger index=0
 *   $animate.leave(kids[6]); //stagger index=1
 *
 *   $scope.$digest();
 * });
 * ```
 *
 * Stagger animations are currently only supported within CSS-defined animations.
 *
 * ### The `ng-animate` CSS class
 *
 * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
 * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
 *
 * Therefore, animations can be applied to an element using this temporary class directly via CSS.
 *
 * ```css
 * .zipper.ng-animate {
 *   transition:0.5s linear all;
 * }
 * .zipper.ng-enter {
 *   opacity:0;
 * }
 * .zipper.ng-enter.ng-enter-active {
 *   opacity:1;
 * }
 * .zipper.ng-leave {
 *   opacity:1;
 * }
 * .zipper.ng-leave.ng-leave-active {
 *   opacity:0;
 * }
 * ```
 *
 * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
 * the CSS class once an animation has completed.)
 *
 *
 * ## JavaScript-based Animations
 *
 * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
 * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
 * `module.animation()` module function we can register the ainmation.
 *
 * Let's see an example of a enter/leave animation using `ngRepeat`:
 *
 * ```html
 * <div ng-repeat="item in items" class="slide">
 *   {{ item }}
 * </div>
 * ```
 *
 * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
 *
 * ```js
 * myModule.animation('.slide', [function() {
 *   return {
 *     // make note that other events (like addClass/removeClass)
 *     // have different function input parameters
 *     enter: function(element, doneFn) {
 *       jQuery(element).fadeIn(1000, doneFn);
 *
 *       // remember to call doneFn so that angular
 *       // knows that the animation has concluded
 *     },
 *
 *     move: function(element, doneFn) {
 *       jQuery(element).fadeIn(1000, doneFn);
 *     },
 *
 *     leave: function(element, doneFn) {
 *       jQuery(element).fadeOut(1000, doneFn);
 *     }
 *   }
 * }]
 * ```
 *
 * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
 * greensock.js and velocity.js.
 *
 * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
 * our animations inside of the same registered animation, however, the function input arguments are a bit different:
 *
 * ```html
 * <div ng-class="color" class="colorful">
 *   this box is moody
 * </div>
 * <button ng-click="color='red'">Change to red</button>
 * <button ng-click="color='blue'">Change to blue</button>
 * <button ng-click="color='green'">Change to green</button>
 * ```
 *
 * ```js
 * myModule.animation('.colorful', [function() {
 *   return {
 *     addClass: function(element, className, doneFn) {
 *       // do some cool animation and call the doneFn
 *     },
 *     removeClass: function(element, className, doneFn) {
 *       // do some cool animation and call the doneFn
 *     },
 *     setClass: function(element, addedClass, removedClass, doneFn) {
 *       // do some cool animation and call the doneFn
 *     }
 *   }
 * }]
 * ```
 *
 * ## CSS + JS Animations Together
 *
 * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
 * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
 * charge of the animation**:
 *
 * ```html
 * <div ng-if="bool" class="slide">
 *   Slide in and out
 * </div>
 * ```
 *
 * ```js
 * myModule.animation('.slide', [function() {
 *   return {
 *     enter: function(element, doneFn) {
 *       jQuery(element).slideIn(1000, doneFn);
 *     }
 *   }
 * }]
 * ```
 *
 * ```css
 * .slide.ng-enter {
 *   transition:0.5s linear all;
 *   transform:translateY(-100px);
 * }
 * .slide.ng-enter.ng-enter-active {
 *   transform:translateY(0);
 * }
 * ```
 *
 * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
 * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
 * our own JS-based animation code:
 *
 * ```js
 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
 *       var runner = $animateCss(element, {
 *         event: 'enter',
 *         structural: true
 *       }).start();
*        runner.done(doneFn);
 *     }
 *   }
 * }]
 * ```
 *
 * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
 *
 * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
 * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
 * data into `$animateCss` directly:
 *
 * ```js
 * myModule.animation('.slide', ['$animateCss', function($animateCss) {
 *   return {
 *     enter: function(element, doneFn) {
 *       var runner = $animateCss(element, {
 *         event: 'enter',
 *         addClass: 'maroon-setting',
 *         from: { height:0 },
 *         to: { height: 200 }
 *       }).start();
 *
 *       runner.done(doneFn);
 *     }
 *   }
 * }]
 * ```
 *
 * Now we can fill in the rest via our transition CSS code:
 *
 * ```css
 * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
 * .slide.ng-enter { transition:0.5s linear all; }
 *
 * /&#42; this extra CSS class will be absorbed into the transition
 * since the $animateCss code is adding the class &#42;/
 * .maroon-setting { background:red; }
 * ```
 *
 * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
 *
 * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
 *
 * ## Animation Anchoring (via `ng-animate-ref`)
 *
 * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
 * structural areas of an application (like views) by pairing up elements using an attribute
 * called `ng-animate-ref`.
 *
 * Let's say for example we have two views that are managed by `ng-view` and we want to show
 * that there is a relationship between two components situated in within these views. By using the
 * `ng-animate-ref` attribute we can identify that the two components are paired together and we
 * can then attach an animation, which is triggered when the view changes.
 *
 * Say for example we have the following template code:
 *
 * ```html
 * <!-- index.html -->
 * <div ng-view class="view-animation">
 * </div>
 *
 * <!-- home.html -->
 * <a href="#/banner-page">
 *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
 * </a>
 *
 * <!-- banner-page.html -->
 * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
 * ```
 *
 * Now, when the view changes (once the link is clicked), ngAnimate will examine the
 * HTML contents to see if there is a match reference between any components in the view
 * that is leaving and the view that is entering. It will scan both the view which is being
 * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
 * contain a matching ref value.
 *
 * The two images match since they share the same ref value. ngAnimate will now create a
 * transport element (which is a clone of the first image element) and it will then attempt
 * to animate to the position of the second image element in the next view. For the animation to
 * work a special CSS class called `ng-anchor` will be added to the transported element.
 *
 * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
 * ngAnimate will handle the entire transition for us as well as the addition and removal of
 * any changes of CSS classes between the elements:
 *
 * ```css
 * .banner.ng-anchor {
 *   /&#42; this animation will last for 1 second since there are
 *          two phases to the animation (an `in` and an `out` phase) &#42;/
 *   transition:0.5s linear all;
 * }
 * ```
 *
 * We also **must** include animations for the views that are being entered and removed
 * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
 *
 * ```css
 * .view-animation.ng-enter, .view-animation.ng-leave {
 *   transition:0.5s linear all;
 *   position:fixed;
 *   left:0;
 *   top:0;
 *   width:100%;
 * }
 * .view-animation.ng-enter {
 *   transform:translateX(100%);
 * }
 * .view-animation.ng-leave,
 * .view-animation.ng-enter.ng-enter-active {
 *   transform:translateX(0%);
 * }
 * .view-animation.ng-leave.ng-leave-active {
 *   transform:translateX(-100%);
 * }
 * ```
 *
 * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
 * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
 * from its origin. Once that animation is over then the `in` stage occurs which animates the
 * element to its destination. The reason why there are two animations is to give enough time
 * for the enter animation on the new element to be ready.
 *
 * The example above sets up a transition for both the in and out phases, but we can also target the out or
 * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
 *
 * ```css
 * .banner.ng-anchor-out {
 *   transition: 0.5s linear all;
 *
 *   /&#42; the scale will be applied during the out animation,
 *          but will be animated away when the in animation runs &#42;/
 *   transform: scale(1.2);
 * }
 *
 * .banner.ng-anchor-in {
 *   transition: 1s linear all;
 * }
 * ```
 *
 *
 *
 *
 * ### Anchoring Demo
 *
  <example module="anchoringExample"
           name="anchoringExample"
           id="anchoringExample"
           deps="angular-animate.js;angular-route.js"
           animations="true">
    <file name="index.html">
      <a href="#/">Home</a>
      <hr />
      <div class="view-container">
        <div ng-view class="view"></div>
      </div>
    </file>
    <file name="script.js">
      angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
          $routeProvider.when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController as home'
          });
          $routeProvider.when('/profile/:id', {
            templateUrl: 'profile.html',
            controller: 'ProfileController as profile'
          });
        }])
        .run(['$rootScope', function($rootScope) {
          $rootScope.records = [
            { id:1, title: "Miss Beulah Roob" },
            { id:2, title: "Trent Morissette" },
            { id:3, title: "Miss Ava Pouros" },
            { id:4, title: "Rod Pouros" },
            { id:5, title: "Abdul Rice" },
            { id:6, title: "Laurie Rutherford Sr." },
            { id:7, title: "Nakia McLaughlin" },
            { id:8, title: "Jordon Blanda DVM" },
            { id:9, title: "Rhoda Hand" },
            { id:10, title: "Alexandrea Sauer" }
          ];
        }])
        .controller('HomeController', [function() {
          //empty
        }])
        .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
          var index = parseInt($routeParams.id, 10);
          var record = $rootScope.records[index - 1];

          this.title = record.title;
          this.id = record.id;
        }]);
    </file>
    <file name="home.html">
      <h2>Welcome to the home page</h1>
      <p>Please click on an element</p>
      <a class="record"
         ng-href="#/profile/{{ record.id }}"
         ng-animate-ref="{{ record.id }}"
         ng-repeat="record in records">
        {{ record.title }}
      </a>
    </file>
    <file name="profile.html">
      <div class="profile record" ng-animate-ref="{{ profile.id }}">
        {{ profile.title }}
      </div>
    </file>
    <file name="animations.css">
      .record {
        display:block;
        font-size:20px;
      }
      .profile {
        background:black;
        color:white;
        font-size:100px;
      }
      .view-container {
        position:relative;
      }
      .view-container > .view.ng-animate {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        min-height:500px;
      }
      .view.ng-enter, .view.ng-leave,
      .record.ng-anchor {
        transition:0.5s linear all;
      }
      .view.ng-enter {
        transform:translateX(100%);
      }
      .view.ng-enter.ng-enter-active, .view.ng-leave {
        transform:translateX(0%);
      }
      .view.ng-leave.ng-leave-active {
        transform:translateX(-100%);
      }
      .record.ng-anchor-out {
        background:red;
      }
    </file>
  </example>
 *
 * ### How is the element transported?
 *
 * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
 * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
 * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
 * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
 * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
 * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
 * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
 * will become visible since the shim class will be removed.
 *
 * ### How is the morphing handled?
 *
 * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
 * what CSS classes differ between the starting element and the destination element. These different CSS classes
 * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
 * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
 * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
 * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
 * the cloned element is placed inside of root element which is likely close to the body element).
 *
 * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
 *
 *
 * ## Using $animate in your directive code
 *
 * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
 * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
 * imagine we have a greeting box that shows and hides itself when the data changes
 *
 * ```html
 * <greeting-box active="onOrOff">Hi there</greeting-box>
 * ```
 *
 * ```js
 * ngModule.directive('greetingBox', ['$animate', function($animate) {
 *   return function(scope, element, attrs) {
 *     attrs.$observe('active', function(value) {
 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
 *     });
 *   });
 * }]);
 * ```
 *
 * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
 * in our HTML code then we can trigger a CSS or JS animation to happen.
 *
 * ```css
 * /&#42; normally we would create a CSS class to reference on the element &#42;/
 * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
 * ```
 *
 * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
 * possible be sure to visit the {@link ng.$animate $animate service API page}.
 *
 *
 * ### Preventing Collisions With Third Party Libraries
 *
 * Some third-party frameworks place animation duration defaults across many element or className
 * selectors in order to make their code small and reuseable. This can lead to issues with ngAnimate, which
 * is expecting actual animations on these elements and has to wait for their completion.
 *
 * You can prevent this unwanted behavior by using a prefix on all your animation classes:
 *
 * ```css
 * /&#42; prefixed with animate- &#42;/
 * .animate-fade-add.animate-fade-add-active {
 *   transition:1s linear all;
 *   opacity:0;
 * }
 * ```
 *
 * You then configure `$animate` to enforce this prefix:
 *
 * ```js
 * $animateProvider.classNameFilter(/animate-/);
 * ```
 *
 * This also may provide your application with a speed boost since only specific elements containing CSS class prefix
 * will be evaluated for animation when any DOM changes occur in the application.
 *
 * ## Callbacks and Promises
 *
 * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
 * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
 * ended by chaining onto the returned promise that animation method returns.
 *
 * ```js
 * // somewhere within the depths of the directive
 * $animate.enter(element, parent).then(function() {
 *   //the animation has completed
 * });
 * ```
 *
 * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
 * anymore.)
 *
 * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
 * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
 * routing controller to hook into that:
 *
 * ```js
 * ngModule.controller('HomePageController', ['$animate', function($animate) {
 *   $animate.on('enter', ngViewElement, function(element) {
 *     // the animation for this route has completed
 *   }]);
 * }])
 * ```
 *
 * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
 */

/**
 * @ngdoc service
 * @name $animate
 * @kind object
 *
 * @description
 * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
 *
 * Click here {@link ng.$animate $animate to learn more about animations with `$animate`}.
 */
angular.module('ngAnimate', [])
  .directive('ngAnimateChildren', $$AnimateChildrenDirective)

  .factory('$$rAFMutex', $$rAFMutexFactory)
  .factory('$$rAFScheduler', $$rAFSchedulerFactory)

  .factory('$$AnimateRunner', $$AnimateRunnerFactory)

  .provider('$$animateQueue', $$AnimateQueueProvider)
  .provider('$$animation', $$AnimationProvider)

  .provider('$animateCss', $AnimateCssProvider)
  .provider('$$animateCssDriver', $$AnimateCssDriverProvider)

  .provider('$$animateJs', $$AnimateJsProvider)
  .provider('$$animateJsDriver', $$AnimateJsDriverProvider);


})(window, window.angular);

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.0 - 2015-05-02
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('collapse', ['$animate', function ($animate) {

    return {
      link: function (scope, element, attrs) {
        function expand() {
          element.removeClass('collapse').addClass('collapsing');
          $animate.addClass(element, 'in', {
            to: { height: element[0].scrollHeight + 'px' }
          }).then(expandDone);
        }

        function expandDone() {
          element.removeClass('collapsing');
          element.css({height: 'auto'});
        }

        function collapse() {
          element
            // IMPORTANT: The height must be set before adding "collapsing" class.
            // Otherwise, the browser attempts to animate from height 0 (in
            // collapsing class) to the given height here.
            .css({height: element[0].scrollHeight + 'px'})
            // initially all panel collapse have the collapse class, this removal
            // prevents the animation from jumping to collapsed state
            .removeClass('collapse')
            .addClass('collapsing');

          $animate.removeClass(element, 'in', {
            to: {height: '0'}
          }).then(collapseDone);
        }

        function collapseDone() {
          element.css({height: '0'}); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing');
          element.addClass('collapse');
        }

        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(index, 1);
    }
  };

}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('accordionGroup', function() {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function() {
        if ( !scope.isDisabled ) {
          scope.isOpen = !scope.isOpen;
        }
      };
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
// <accordion-group>
//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
// </accordion-group>
.directive('accordionHeading', function() {
  return {
    restrict: 'EA',
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^accordionGroup',
    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
// <div class="accordion-group">
//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
//   ...
// </div>
.directive('accordionTransclude', function() {
  return {
    require: '^accordionGroup',
    link: function(scope, element, attr, controller) {
      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
        if ( heading ) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
})

;

angular.module('ui.bootstrap.alert', [])

.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
  $scope.closeable = 'close' in $attrs;
  this.close = $scope.close;
}])

.directive('alert', function () {
  return {
    restrict:'EA',
    controller:'AlertController',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '@',
      close: '&'
    }
  };
})

.directive('dismissOnTimeout', ['$timeout', function($timeout) {
  return {
    require: 'alert',
    link: function(scope, element, attrs, alertCtrl) {
      $timeout(function(){
        alertCtrl.close();
      }, parseInt(attrs.dismissOnTimeout, 10));
    }
  };
}]);

angular.module('ui.bootstrap.bindHtml', [])

  .directive('bindHtmlUnsafe', function () {
    return function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
        element.html(value || '');
      });
    };
  });
angular.module('ui.bootstrap.buttons', [])

.constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('btnRadio', function () {
  return {
    require: ['btnRadio', 'ngModel'],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };

      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
})

.directive('btnCheckbox', function () {
  return {
    require: ['btnCheckbox', 'ngModel'],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', [])
.controller('CarouselController', ['$scope', '$interval', '$animate', function ($scope, $interval, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    currentIndex = -1,
    currentInterval, isPlaying;
  self.currentSlide = null;

  var destroyed = false;
  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = self.indexOfSlide(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      goNext();
    }
    function goNext() {
      // Scope has been destroyed, stop here.
      if (destroyed) { return; }

      angular.extend(nextSlide, {direction: direction, active: true});
      angular.extend(self.currentSlide || {}, {direction: direction, active: false});
      if ($animate.enabled() && !$scope.noTransition && nextSlide.$element) {
        $scope.$currentTransition = true;
        nextSlide.$element.one('$animate:close', function closeFn() {
          $scope.$currentTransition = null;
        });
      }

      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
  };
  $scope.$on('$destroy', function () {
    destroyed = true;
  });

  function getSlideByIndex(index) {
    if (angular.isUndefined(slides[index].index)) {
      return slides[index];
    }
    var i, len = slides.length;
    for (i = 0; i < slides.length; ++i) {
      if (slides[i].index == index) {
        return slides[i];
      }
    }
  }

  self.getCurrentIndex = function() {
    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
      return +self.currentSlide.index;
    }
    return currentIndex;
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(getSlideByIndex(newIndex), 'next');
    }
  };

  $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(getSlideByIndex(newIndex), 'prev');
    }
  };

  $scope.isActive = function(slide) {
     return self.currentSlide === slide;
  };

  $scope.$watch('interval', restartTimer);
  $scope.$on('$destroy', resetTimer);

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    if (angular.isDefined(slide.index)) {
      slides.sort(function(a, b) {
        return +a.index > +b.index;
      });
    }
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
    }
  };

}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:carousel
 * @restrict EA
 *
 * @description
 * Carousel is the outer container for a set of image 'slides' to showcase.
 *
 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <carousel>
      <slide>
        <img src="http://placekitten.com/150/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>Beautiful!</p>
        </div>
      </slide>
      <slide>
        <img src="http://placekitten.com/100/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>D'aww!</p>
        </div>
      </slide>
    </carousel>
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
 */
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:slide
 * @restrict EA
 *
 * @description
 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
 *
 * @param {boolean=} active Model binding, whether or not this slide is currently active.
 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
<div ng-controller="CarouselDemoCtrl">
  <carousel>
    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
      <img ng-src="{{slide.image}}" style="margin:auto;">
      <div class="carousel-caption">
        <h4>Slide {{$index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  Interval, in milliseconds: <input type="number" ng-model="myInterval">
  <br />Enter a negative number to stop the interval.
</div>
  </file>
  <file name="script.js">
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
}
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

.directive('slide', function() {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
      active: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
})

.animation('.item', [
         '$animate',
function ($animate) {
  return {
    beforeAddClass: function (element, className, done) {
      // Due to transclusion, noTransition property is on parent's scope
      if (className == 'active' && element.parent() &&
          !element.parent().scope().noTransition) {
        var stopped = false;
        var direction = element.isolateScope().direction;
        var directionClass = direction == 'next' ? 'left' : 'right';
        element.addClass(direction);
        $animate.addClass(element, directionClass).then(function () {
          if (!stopped) {
            element.removeClass(directionClass + ' ' + direction);
          }
          done();
        });

        return function () {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      // Due to transclusion, noTransition property is on parent's scope
      if (className == 'active' && element.parent() &&
          !element.parent().scope().noTransition) {
        var stopped = false;
        var direction = element.isolateScope().direction;
        var directionClass = direction == 'next' ? 'left' : 'right';
        $animate.addClass(element, directionClass).then(function () {
          if (!stopped) {
            element.removeClass(directionClass);
          }
          done();
        });
        return function () {
          stopped = true;
        };
      }
      done();
    }
  };

}])


;

angular.module('ui.bootstrap.dateparser', [])

.service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  this.parsers = {};

  var formatCodeToRegex = {
    'yyyy': {
      regex: '\\d{4}',
      apply: function(value) { this.year = +value; }
    },
    'yy': {
      regex: '\\d{2}',
      apply: function(value) { this.year = +value + 2000; }
    },
    'y': {
      regex: '\\d{1,4}',
      apply: function(value) { this.year = +value; }
    },
    'MMMM': {
      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
    },
    'MMM': {
      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
    },
    'MM': {
      regex: '0[1-9]|1[0-2]',
      apply: function(value) { this.month = value - 1; }
    },
    'M': {
      regex: '[1-9]|1[0-2]',
      apply: function(value) { this.month = value - 1; }
    },
    'dd': {
      regex: '[0-2][0-9]{1}|3[0-1]{1}',
      apply: function(value) { this.date = +value; }
    },
    'd': {
      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
      apply: function(value) { this.date = +value; }
    },
    'EEEE': {
      regex: $locale.DATETIME_FORMATS.DAY.join('|')
    },
    'EEE': {
      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
    },
    'HH': {
      regex: '(?:0|1)[0-9]|2[0-3]',
      apply: function(value) { this.hours = +value; }
    },
    'H': {
      regex: '1?[0-9]|2[0-3]',
      apply: function(value) { this.hours = +value; }
    },
    'mm': {
      regex: '[0-5][0-9]',
      apply: function(value) { this.minutes = +value; }
    },
    'm': {
      regex: '[0-9]|[1-5][0-9]',
      apply: function(value) { this.minutes = +value; }
    },
    'sss': {
      regex: '[0-9][0-9][0-9]',
      apply: function(value) { this.milliseconds = +value; }
    },
    'ss': {
      regex: '[0-5][0-9]',
      apply: function(value) { this.seconds = +value; }
    },
    's': {
      regex: '[0-9]|[1-5][0-9]',
      apply: function(value) { this.seconds = +value; }
    }
  };

  function createParser(format) {
    var map = [], regex = format.split('');

    angular.forEach(formatCodeToRegex, function(data, code) {
      var index = format.indexOf(code);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + code.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({ index: index, apply: data.apply });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  this.parse = function(input, format, baseDate) {
    if ( !angular.isString(input) || !format ) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ( !this.parsers[format] ) {
      this.parsers[format] = createParser(format);
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex);

    if ( results && results.length ) {
      var fields, dt;
      if (baseDate) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for( var i = 1, n = results.length; i < n; i++ ) {
        var mapper = map[i-1];
        if ( mapper.apply ) {
          mapper.apply.call(fields, results[i]);
        }
      }

      if ( isValid(fields.year, fields.month, fields.date) ) {
        dt = new Date(fields.year, fields.month, fields.date, fields.hours, fields.minutes, fields.seconds,
          fields.milliseconds || 0);
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if ( month === 1 && date > 28) {
        return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }

    if ( month === 3 || month === 5 || month === 8 || month === 10) {
        return date < 31;
    }

    return true;
  }
}]);

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },

      /**
       * Provides coordinates for the targetEl in relation to hostEl
       */
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

        var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;

        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');

        var shiftWidth = {
          center: function () {
            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function () {
            return hostElPos.left;
          },
          right: function () {
            return hostElPos.left + hostElPos.width;
          }
        };

        var shiftHeight = {
          center: function () {
            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function () {
            return hostElPos.top;
          },
          bottom: function () {
            return hostElPos.top + hostElPos.height;
          }
        };

        switch (pos0) {
          case 'right':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: shiftWidth[pos0]()
            };
            break;
          case 'left':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: hostElPos.left - targetElWidth
            };
            break;
          case 'bottom':
            targetElPos = {
              top: shiftHeight[pos0](),
              left: shiftWidth[pos1]()
            };
            break;
          default:
            targetElPos = {
              top: hostElPos.top - targetElHeight,
              left: shiftWidth[pos1]()
            };
            break;
        }

        return targetElPos;
      }
    };
  }]);

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

.constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null,
  shortcutPropagation: false
})

.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  // Configuration attributes
  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
                   'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function( key, index ) {
    self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
  });

  // Watchable date attributes
  angular.forEach(['minDate', 'maxDate'], function( key ) {
    if ( $attrs[key] ) {
      $scope.$parent.$watch($parse($attrs[key]), function(value) {
        self[key] = value ? new Date(value) : null;
        self.refreshView();
      });
    } else {
      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
    }
  });

  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
  $scope.maxMode = self.maxMode;
  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  if(angular.isDefined($attrs.initDate)) {
    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
    $scope.$parent.$watch($attrs.initDate, function(initDate){
      if(initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)){
        self.activeDate = initDate;
        self.refreshView();
      }
    });
  } else {
    this.activeDate =  new Date();
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function( ngModelCtrl_ ) {
    ngModelCtrl = ngModelCtrl_;

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if ( ngModelCtrl.$viewValue ) {
      var date = new Date( ngModelCtrl.$viewValue ),
          isValid = !isNaN(date);

      if ( isValid ) {
        this.activeDate = date;
      } else {
        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      }
      ngModelCtrl.$setValidity('date', isValid);
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if ( this.element ) {
      this._refreshView();

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    return {
      date: date,
      label: dateFilter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      current: this.compare(date, new Date()) === 0,
      customClass: this.customClass(date)
    };
  };

  this.isDisabled = function( date ) {
    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
  };

    this.customClass = function( date ) {
      return $scope.customClass({date: date, mode: $scope.datepickerMode});
    };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function( date ) {
    if ( $scope.datepickerMode === self.minMode ) {
      var dt = ngModelCtrl.$viewValue ? new Date( ngModelCtrl.$viewValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
      ngModelCtrl.$setViewValue( dt );
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
    }
  };

  $scope.move = function( direction ) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function( direction ) {
    direction = direction || 1;

    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
      return;
    }

    $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
  };

  // Key event mapper
  $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };

  var focusElement = function() {
    $timeout(function() {
      self.element[0].focus();
    }, 0 , false);
  };

  // Listen for focus requests from popup directive
  $scope.$on('datepicker.focus', focusElement);

  $scope.keydown = function( evt ) {
    var key = $scope.keys[evt.which];

    if ( !key || evt.shiftKey || evt.altKey ) {
      return;
    }

    evt.preventDefault();
    if(!self.shortcutPropagation){
        evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if ( self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
      focusElement();
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
      focusElement();
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };
}])

.directive( 'datepicker', function () {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&',
      customClass: '&',
      shortcutPropagation: '&?'
    },
    require: ['datepicker', '?^ngModel'],
    controller: 'DatepickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if ( ngModelCtrl ) {
        datepickerCtrl.init( ngModelCtrl );
      }
    }
  };
})

.directive('daypicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/day.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      scope.showWeeks = ctrl.showWeeks;

      ctrl.step = { months: 1 };
      ctrl.element = element;

      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function getDaysInMonth( year, month ) {
        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
      }

      function getDates(startDate, n) {
        var dates = new Array(n), current = new Date(startDate), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while ( i < n ) {
          dates[i++] = new Date(current);
          current.setDate( current.getDate() + 1 );
        }
        return dates;
      }

      ctrl._refreshView = function() {
        var year = ctrl.activeDate.getFullYear(),
          month = ctrl.activeDate.getMonth(),
          firstDayOfMonth = new Date(year, month, 1),
          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
          firstDate = new Date(firstDayOfMonth);

        if ( numDisplayedFromPreviousMonth > 0 ) {
          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
        }

        // 42 is the number of days on a six-month calendar
        var days = getDates(firstDate, 42);
        for (var i = 0; i < 42; i ++) {
          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
            secondary: days[i].getMonth() !== month,
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) {
          scope.labels[j] = {
            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
            full: dateFilter(days[j].date, 'EEEE')
          };
        }

        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
        scope.rows = ctrl.split(days, 7);

        if ( scope.showWeeks ) {
          scope.weekNumbers = [];
          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
              numWeeks = scope.rows.length;
          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
            scope.weekNumbers.push(
              getISO8601WeekNumber( scope.rows[curWeek][thursdayIndex].date ));
          }
        }
      };

      ctrl.compare = function(date1, date2) {
        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
      };

      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
        var time = checkDate.getTime();
        checkDate.setMonth(0); // Compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getDate();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 7;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 7;
        } else if (key === 'pageup' || key === 'pagedown') {
          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
          ctrl.activeDate.setMonth(month, 1);
          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
        } else if (key === 'home') {
          date = 1;
        } else if (key === 'end') {
          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
        }
        ctrl.activeDate.setDate(date);
      };

      ctrl.refreshView();
    }
  };
}])

.directive('monthpicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/month.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      ctrl.step = { years: 1 };
      ctrl.element = element;

      ctrl._refreshView = function() {
        var months = new Array(12),
            year = ctrl.activeDate.getFullYear();

        for ( var i = 0; i < 12; i++ ) {
          months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
        scope.rows = ctrl.split(months, 3);
      };

      ctrl.compare = function(date1, date2) {
        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
      };

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getMonth();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 3;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 3;
        } else if (key === 'pageup' || key === 'pagedown') {
          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
          ctrl.activeDate.setFullYear(year);
        } else if (key === 'home') {
          date = 0;
        } else if (key === 'end') {
          date = 11;
        }
        ctrl.activeDate.setMonth(date);
      };

      ctrl.refreshView();
    }
  };
}])

.directive('yearpicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/year.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      var range = ctrl.yearRange;

      ctrl.step = { years: range };
      ctrl.element = element;

      function getStartingYear( year ) {
        return parseInt((year - 1) / range, 10) * range + 1;
      }

      ctrl._refreshView = function() {
        var years = new Array(range);

        for ( var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++ ) {
          years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.title = [years[0].label, years[range - 1].label].join(' - ');
        scope.rows = ctrl.split(years, 5);
      };

      ctrl.compare = function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      };

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getFullYear();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 5;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 5;
        } else if (key === 'pageup' || key === 'pagedown') {
          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
        } else if (key === 'home') {
          date = getStartingYear( ctrl.activeDate.getFullYear() );
        } else if (key === 'end') {
          date = getStartingYear( ctrl.activeDate.getFullYear() ) + range - 1;
        }
        ctrl.activeDate.setFullYear(date);
      };

      ctrl.refreshView();
    }
  };
}])

.constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
})

.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig',
function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@',
      dateDisabled: '&',
      customClass: '&'
    },
    link: function(scope, element, attrs, ngModel) {
      var dateFormat,
          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

      scope.getText = function( key ) {
        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
      };

      var isHtml5DateInput = false;
      if (datepickerPopupConfig.html5Types[attrs.type]) {
        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
        isHtml5DateInput = true;
      } else {
        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
        attrs.$observe('datepickerPopup', function(value, oldValue) {
            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
            // Invalidate the $modelValue to ensure that formatters re-run
            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
            if (newDateFormat !== dateFormat) {
              dateFormat = newDateFormat;
              ngModel.$modelValue = null;

              if (!dateFormat) {
                throw new Error('datepickerPopup must have a date format specified.');
              }
            }
        });
      }

      if (!dateFormat) {
        throw new Error('datepickerPopup must have a date format specified.');
      }

      if (isHtml5DateInput && attrs.datepickerPopup) {
        throw new Error('HTML5 date input types do not support custom formats.');
      }

      // popup element used to display calendar
      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
      popupEl.attr({
        'ng-model': 'date',
        'ng-change': 'dateSelection()'
      });

      function cameltoDash( string ){
        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
      }

      // datepicker element
      var datepickerEl = angular.element(popupEl.children()[0]);
      if (isHtml5DateInput) {
        if (attrs.type == 'month') {
          datepickerEl.attr('datepicker-mode', '"month"');
          datepickerEl.attr('min-mode', 'month');
        }
      }

      if ( attrs.datepickerOptions ) {
        var options = scope.$parent.$eval(attrs.datepickerOptions);
        if(options.initDate) {
          scope.initDate = options.initDate;
          datepickerEl.attr( 'init-date', 'initDate' );
          delete options.initDate;
        }
        angular.forEach(options, function( value, option ) {
          datepickerEl.attr( cameltoDash(option), value );
        });
      }

      scope.watchData = {};
      angular.forEach(['minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function( key ) {
        if ( attrs[key] ) {
          var getAttribute = $parse(attrs[key]);
          scope.$parent.$watch(getAttribute, function(value){
            scope.watchData[key] = value;
          });
          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

          // Propagate changes from datepicker to outside
          if ( key === 'datepickerMode' ) {
            var setAttribute = getAttribute.assign;
            scope.$watch('watchData.' + key, function(value, oldvalue) {
              if ( value !== oldvalue ) {
                setAttribute(scope.$parent, value);
              }
            });
          }
        }
      });
      if (attrs.dateDisabled) {
        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
      }

      if (attrs.showWeeks) {
        datepickerEl.attr('show-weeks', attrs.showWeeks);
      }

      if (attrs.customClass){
        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
      }

      function parseDate(viewValue) {
        if (angular.isNumber(viewValue)) {
          // presumably timestamp to date object
          viewValue = new Date(viewValue);
        }

        if (!viewValue) {
          return null;
        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var date = dateParser.parse(viewValue, dateFormat, scope.date) || new Date(viewValue);
          if (isNaN(date)) {
            return undefined;
          } else {
            return date;
          }
        } else {
          return undefined;
        }
      }

      function validator(modelValue, viewValue) {
        var value = modelValue || viewValue;
        if (angular.isNumber(value)) {
          value = new Date(value);
        }
        if (!value) {
          return true;
        } else if (angular.isDate(value) && !isNaN(value)) {
          return true;
        } else if (angular.isString(value)) {
          var date = dateParser.parse(value, dateFormat) || new Date(value);
          return !isNaN(date);
        } else {
          return false;
        }
      }

      if (!isHtml5DateInput) {
        // Internal API to maintain the correct ng-invalid-[key] class
        ngModel.$$parserName = 'date';
        ngModel.$validators.date = validator;
        ngModel.$parsers.unshift(parseDate);
        ngModel.$formatters.push(function (value) {
          scope.date = value;
          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
        });
      }
      else {
        ngModel.$formatters.push(function (value) {
          scope.date = value;
          return value;
        });
      }

      // Inner change
      scope.dateSelection = function(dt) {
        if (angular.isDefined(dt)) {
          scope.date = dt;
        }
        var date = scope.date ? dateFilter(scope.date, dateFormat) : '';
        element.val(date);
        ngModel.$setViewValue(date);

        if ( closeOnDateSelection ) {
          scope.isOpen = false;
          element[0].focus();
        }
      };

      // Detect changes in the view from the text box
      ngModel.$viewChangeListeners.push(function () {
        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date) || new Date(ngModel.$viewValue);
      });

      var documentClickBind = function(event) {
        if (scope.isOpen && event.target !== element[0]) {
          scope.$apply(function() {
            scope.isOpen = false;
          });
        }
      };

      var keydown = function(evt, noApply) {
        scope.keydown(evt);
      };
      element.bind('keydown', keydown);

      scope.keydown = function(evt) {
        if (evt.which === 27) {
          evt.preventDefault();
          if (scope.isOpen) {
            evt.stopPropagation();
          }
          scope.close();
        } else if (evt.which === 40 && !scope.isOpen) {
          scope.isOpen = true;
        }
      };

      scope.$watch('isOpen', function(value) {
        if (value) {
          scope.$broadcast('datepicker.focus');
          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
          scope.position.top = scope.position.top + element.prop('offsetHeight');

          $document.bind('click', documentClickBind);
        } else {
          $document.unbind('click', documentClickBind);
        }
      });

      scope.select = function( date ) {
        if (date === 'today') {
          var today = new Date();
          if (angular.isDate(scope.date)) {
            date = new Date(scope.date);
            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
          } else {
            date = new Date(today.setHours(0, 0, 0, 0));
          }
        }
        scope.dateSelection( date );
      };

      scope.close = function() {
        scope.isOpen = false;
        element[0].focus();
      };

      var $popup = $compile(popupEl)(scope);
      // Prevent jQuery cache memory leak (template is now redundant after linking)
      popupEl.remove();

      if ( appendToBody ) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }

      scope.$on('$destroy', function() {
        $popup.remove();
        element.unbind('keydown', keydown);
        $document.unbind('click', documentClickBind);
      });
    }
  };
}])

.directive('datepickerPopupWrap', function() {
  return {
    restrict:'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link:function (scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

.constant('dropdownConfig', {
  openClass: 'open'
})

.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
  var openScope = null;

  this.open = function( dropdownScope ) {
    if ( !openScope ) {
      $document.bind('click', closeDropdown);
      $document.bind('keydown', escapeKeyBind);
    }

    if ( openScope && openScope !== dropdownScope ) {
        openScope.isOpen = false;
    }

    openScope = dropdownScope;
  };

  this.close = function( dropdownScope ) {
    if ( openScope === dropdownScope ) {
      openScope = null;
      $document.unbind('click', closeDropdown);
      $document.unbind('keydown', escapeKeyBind);
    }
  };

  var closeDropdown = function( evt ) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope) { return; }

    if( evt && openScope.getAutoClose() === 'disabled' )  { return ; }

    var toggleElement = openScope.getToggleElement();
    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
        return;
    }

    var $element = openScope.getElement();
    if( evt && openScope.getAutoClose() === 'outsideClick' && $element && $element[0].contains(evt.target) ) {
      return;
    }

    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  var escapeKeyBind = function( evt ) {
    if ( evt.which === 27 ) {
      openScope.focusToggleElement();
      closeDropdown();
    }
  };
}])

.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document) {
  var self = this,
      scope = $scope.$new(), // create a child scope so we are not polluting original one
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
      appendToBody = false;

  this.init = function( element ) {
    self.$element = element;

    if ( $attrs.isOpen ) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);

    if ( appendToBody && self.dropdownMenu ) {
      $document.find('body').append( self.dropdownMenu );
      element.on('$destroy', function handleDestroyEvent() {
        self.dropdownMenu.remove();
      });
    }
  };

  this.toggle = function( open ) {
    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return self.$element;
  };

  scope.focusToggleElement = function() {
    if ( self.toggleElement ) {
      self.toggleElement[0].focus();
    }
  };

  scope.$watch('isOpen', function( isOpen, wasOpen ) {
    if ( appendToBody && self.dropdownMenu ) {
      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
      self.dropdownMenu.css({
        top: pos.top + 'px',
        left: pos.left + 'px',
        display: isOpen ? 'block' : 'none'
      });
    }

    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

    if ( isOpen ) {
      scope.focusToggleElement();
      dropdownService.open( scope );
    } else {
      dropdownService.close( scope );
    }

    setIsOpen($scope, isOpen);
    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
      toggleInvoker($scope, { open: !!isOpen });
    }
  });

  $scope.$on('$locationChangeSuccess', function() {
    scope.isOpen = false;
  });

  $scope.$on('$destroy', function() {
    scope.$destroy();
  });
}])

.directive('dropdown', function() {
  return {
    controller: 'DropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init( element );
    }
  };
})

.directive('dropdownMenu', function() {
  return {
    restrict: 'AC',
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }
      dropdownCtrl.dropdownMenu = element;
    }
  };
})

.directive('dropdownToggle', function() {
  return {
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if ( !element.hasClass('disabled') && !attrs.disabled ) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.bind('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.modal', [])

/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function () {
    return {
      createNew: function () {
        var stack = [];

        return {
          add: function (key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function (key) {
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function () {
            return stack[stack.length - 1];
          },
          remove: function (key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function () {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function () {
            return stack.length;
          }
        };
      }
    };
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('modalBackdrop', ['$timeout', function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      compile: function (tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      scope.animate = false;

      //trigger CSS transitions
      $timeout(function () {
        scope.animate = true;
      });
    }
  }])

  .directive('modalWindow', ['$modalStack', '$q', function ($modalStack, $q) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'template/modal/window.html';
      },
      link: function (scope, element, attrs) {
        element.addClass(attrs.windowClass || '');
        scope.size = attrs.size;

        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is render.
        var modalRenderDeferObj = $q.defer();
        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
        attrs.$observe('modalRender', function (value) {
          if (value == 'true') {
            modalRenderDeferObj.resolve();
          }
        });

        modalRenderDeferObj.promise.then(function () {
          // trigger CSS transitions
          scope.animate = true;

          var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
          /**
           * Auto-focusing of a freshly-opened modal element causes any child elements
           * with the autofocus attribute to lose focus. This is an issue on touch
           * based devices which will show and then hide the onscreen keyboard.
           * Attempts to refocus the autofocus element via JavaScript will not reopen
           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
           * the modal element if the modal does not contain an autofocus element.
           */
          if (inputsWithAutofocus.length) {
            inputsWithAutofocus[0].focus();
          } else {
            element[0].focus();
          }

          // Notify {@link $modalStack} that modal is rendered.
          var modal = $modalStack.getTop();
          if (modal) {
            $modalStack.modalRendered(modal.key);
          }
        });
      }
    };
  }])

  .directive('modalAnimationClass', [
    function () {
      return {
        compile: function (tElement, tAttrs) {
          if (tAttrs.modalAnimation) {
            tElement.addClass(tAttrs.modalAnimationClass);
          }
        }
      };
    }])

  .directive('modalTransclude', function () {
    return {
      link: function($scope, $element, $attrs, controller, $transclude) {
        $transclude($scope.$parent, function(clone) {
          $element.empty();
          $element.append(clone);
        });
      }
    };
  })

  .factory('$modalStack', ['$animate', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
    function ($animate, $timeout, $document, $compile, $rootScope, $$stackedMap) {

      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var $modalStack = {};

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance) {

        var body = $document.find('body').eq(0);
        var modalWindow = openedWindows.get(modalInstance).value;

        //clean up the stack
        openedWindows.remove(modalInstance);

        //remove window DOM element
        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
          checkRemoveBackdrop();
        });
      }

      function checkRemoveBackdrop() {
          //remove backdrop if no longer needed
          if (backdropDomEl && backdropIndex() == -1) {
            var backdropScopeRef = backdropScope;
            removeAfterAnimate(backdropDomEl, backdropScope, function () {
              backdropScopeRef = null;
            });
            backdropDomEl = undefined;
            backdropScope = undefined;
          }
      }

      function removeAfterAnimate(domEl, scope, done) {
        // Closing animation
        scope.animate = false;

        if (domEl.attr('modal-animation') && $animate.enabled()) {
          // transition out
          domEl.one('$animate:close', function closeFn() {
            $rootScope.$evalAsync(afterAnimating);
          });
        } else {
          // Ensure this call is async
          $timeout(afterAnimating);
        }

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          domEl.remove();
          scope.$destroy();
          if (done) {
            done();
          }
        }
      }

      $document.bind('keydown', function (evt) {
        var modal;

        if (evt.which === 27) {
          modal = openedWindows.top();
          if (modal && modal.value.keyboard) {
            evt.preventDefault();
            $rootScope.$apply(function () {
              $modalStack.dismiss(modal.key, 'escape key press');
            });
          }
        }
      });

      $modalStack.open = function (modalInstance, modal) {

        var modalOpener = $document[0].activeElement;

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard
        });

        var body = $document.find('body').eq(0),
            currBackdropIndex = backdropIndex();

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.index = currBackdropIndex;
          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
          if (modal.animation) {
            angularBackgroundDomEl.attr('modal-animation', 'true');
          }
          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
          body.append(backdropDomEl);
        }

        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
        angularDomEl.attr({
          'template-url': modal.windowTemplateUrl,
          'window-class': modal.windowClass,
          'size': modal.size,
          'index': openedWindows.length() - 1,
          'animate': 'animate'
        }).html(modal.content);
        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl;
        openedWindows.top().value.modalOpener = modalOpener;
        body.append(modalDomEl);
        body.addClass(OPENED_MODAL_CLASS);
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      $modalStack.close = function (modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance);
          modalWindow.value.modalOpener.focus();
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismiss = function (modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance);
          modalWindow.value.modalOpener.focus();
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function (reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function () {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function (modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      return $modalStack;
    }])

  .provider('$modal', function () {

    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {

          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
          }

          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }

          $modal.open = function (modalOptions) {

            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;

              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;

              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });

                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                if (modalOptions.controllerAs) {
                  modalScope[modalOptions.controllerAs] = ctrlInstance;
                }
              }

              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                renderDeferred: modalRenderDeferred,
                content: tplAndVars[0],
                animation: modalOptions.animation,
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                backdropClass: modalOptions.backdropClass,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });

            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });

            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function (reason) {
              modalOpenedDeferred.reject(reason);
            });

            return modalInstance;
          };

          return $modal;
        }]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.pagination', [])

.controller('PaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

  this.init = function(ngModelCtrl_, config) {
    ngModelCtrl = ngModelCtrl_;
    this.config = config;

    ngModelCtrl.$render = function() {
      self.render();
    };

    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = config.itemsPerPage;
    }

    $scope.$watch('totalItems', function() {
      $scope.totalPages = self.calculateTotalPages();
    });

    $scope.$watch('totalPages', function(value) {
      setNumPages($scope.$parent, value); // Readonly variable

      if ( $scope.page > value ) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  };

  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };

  this.render = function() {
    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
  };

  $scope.selectPage = function(page, evt) {
    if ( $scope.page !== page && page > 0 && page <= $scope.totalPages) {
      if (evt && evt.target) {
        evt.target.blur();
      }
      ngModelCtrl.$setViewValue(page);
      ngModelCtrl.$render();
    }
  };

  $scope.getText = function( key ) {
    return $scope[key + 'Text'] || self.config[key + 'Text'];
  };
  $scope.noPrevious = function() {
    return $scope.page === 1;
  };
  $scope.noNext = function() {
    return $scope.page === $scope.totalPages;
  };
}])

.constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
})

.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@'
    },
    require: ['pagination', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      // Setup configuration parameters
      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

      paginationCtrl.init(ngModelCtrl, paginationConfig);

      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }

      // Create page object used in template
      function makePage(number, text, isActive) {
        return {
          number: number,
          text: text,
          active: isActive
        };
      }

      function getPages(currentPage, totalPages) {
        var pages = [];

        // Default page limits
        var startPage = 1, endPage = totalPages;
        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

        // recompute if maxSize
        if ( isMaxSized ) {
          if ( rotate ) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
            endPage   = startPage + maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > totalPages) {
              endPage   = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, number === currentPage);
          pages.push(page);
        }

        // Add links to move between page sets
        if ( isMaxSized && ! rotate ) {
          if ( startPage > 1 ) {
            var previousPageSet = makePage(startPage - 1, '...', false);
            pages.unshift(previousPageSet);
          }

          if ( endPage < totalPages ) {
            var nextPageSet = makePage(endPage + 1, '...', false);
            pages.push(nextPageSet);
          }
        }

        return pages;
      }

      var originalRender = paginationCtrl.render;
      paginationCtrl.render = function() {
        originalRender();
        if (scope.page > 0 && scope.page <= scope.totalPages) {
          scope.pages = getPages(scope.page, scope.totalPages);
        }
      };
    }
  };
}])

.constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('pager', ['pagerConfig', function(pagerConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@'
    },
    require: ['pager', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pager.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
      paginationCtrl.init(ngModelCtrl, pagerConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider( '$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    animation: true,
    popupDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur'
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function( value ) {
		angular.extend( globalOptions, value );
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers ( triggers ) {
    angular.extend( triggerMap, triggers );
  };

  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name){
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [ '$window', '$compile', '$timeout', '$document', '$position', '$interpolate', function ( $window, $compile, $timeout, $document, $position, $interpolate ) {
    return function $tooltip ( type, prefix, defaultTriggerShow, options ) {
      options = angular.extend( {}, defaultOptions, globalOptions, options );

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers ( trigger ) {
        var show = trigger || options.trigger || defaultTriggerShow;
        var hide = triggerMap[show] || show;
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case( type );

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName +'-popup '+
          'title="'+startSym+'title'+endSym+'" '+
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="'+startSym+'content'+endSym+'" ') +
          'placement="'+startSym+'placement'+endSym+'" '+
          'popup-class="'+startSym+'popupClass'+endSym+'" '+
          'animation="animation" '+
          'is-open="isOpen"'+
          'origin-scope="origScope" '+
          '>'+
        '</div>';

      return {
        restrict: 'EA',
        compile: function (tElem, tAttrs) {
          var tooltipLinker = $compile( template );

          return function link ( scope, element, attrs, tooltipCtrl ) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var popupTimeout;
            var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
            var triggers = getTriggers( undefined );
            var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);
            var ttScope = scope.$new(true);

            var positionTooltip = function () {
              if (!tooltip) { return; }

              var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
              ttPosition.top += 'px';
              ttPosition.left += 'px';

              // Now set the calculated positioning.
              tooltip.css( ttPosition );
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind () {
              if ( ! ttScope.isOpen ) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
                return;
              }

              prepareTooltip();

              if ( ttScope.popupDelay ) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!popupTimeout) {
                  popupTimeout = $timeout( show, ttScope.popupDelay, false );
                  popupTimeout.then(function(reposition){reposition();});
                }
              } else {
                show()();
              }
            }

            function hideTooltipBind () {
              scope.$apply(function () {
                hide();
              });
            }

            // Show the tooltip popup element.
            function show() {

              popupTimeout = null;

              // If there is a pending remove transition, we must cancel it, lest the
              // tooltip be mysteriously removed.
              if ( transitionTimeout ) {
                $timeout.cancel( transitionTimeout );
                transitionTimeout = null;
              }

              // Don't show empty tooltips.
              if ( !(options.useContentExp ? ttScope.contentExp() : ttScope.content) ) {
                return angular.noop;
              }

              createTooltip();

              // Set the initial positioning.
              tooltip.css({ top: 0, left: 0, display: 'block' });
              ttScope.$digest();

              positionTooltip();

              // And show the tooltip.
              ttScope.isOpen = true;
              ttScope.$apply(); // digest required as $apply is not called

              // Return positioning function as promise callback for correct
              // positioning after draw.
              return positionTooltip;
            }

            // Hide the tooltip popup element.
            function hide() {
              // First things first: we don't show it anymore.
              ttScope.isOpen = false;

              //if tooltip is going to be shown after delay, we must cancel this
              $timeout.cancel( popupTimeout );
              popupTimeout = null;

              // And now we remove it from the DOM. However, if we have animation, we
              // need to wait for it to expire beforehand.
              // FIXME: this is a placeholder for a port of the transitions library.
              if ( ttScope.animation ) {
                if (!transitionTimeout) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                }
              } else {
                removeTooltip();
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                removeTooltip();
              }
              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
                if ( appendToBody ) {
                  $document.find( 'body' ).append( tooltip );
                } else {
                  element.after( tooltip );
                }
              });

              tooltipLinkedScope.$watch(function () {
                $timeout(positionTooltip, 0, false);
              });

              if (options.useContentExp) {
                tooltipLinkedScope.$watch('contentExp()', function (val) {
                  if (!val && ttScope.isOpen ) {
                    hide();
                  }
                });
              }
            }

            function removeTooltip() {
              transitionTimeout = null;
              if (tooltip) {
                tooltip.remove();
                tooltip = null;
              }
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            function prepareTooltip() {
              prepPopupClass();
              prepPlacement();
              prepPopupDelay();
            }

            ttScope.contentExp = function () {
              return scope.$eval(attrs[type]);
            };

            /**
             * Observe the relevant attributes.
             */
            if (!options.useContentExp) {
              attrs.$observe( type, function ( val ) {
                ttScope.content = val;

                if (!val && ttScope.isOpen ) {
                  hide();
                }
              });
            }

            attrs.$observe( 'disabled', function ( val ) {
              if (val && ttScope.isOpen ) {
                hide();
              }
            });

            attrs.$observe( prefix+'Title', function ( val ) {
              ttScope.title = val;
            });

            function prepPopupClass() {
              ttScope.popupClass = attrs[prefix + 'Class'];
            }

            function prepPlacement() {
              var val = attrs[ prefix + 'Placement' ];
              ttScope.placement = angular.isDefined( val ) ? val : options.placement;
            }

            function prepPopupDelay() {
              var val = attrs[ prefix + 'PopupDelay' ];
              var delay = parseInt( val, 10 );
              ttScope.popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
            }

            var unregisterTriggers = function () {
              element.unbind(triggers.show, showTooltipBind);
              element.unbind(triggers.hide, hideTooltipBind);
            };

            function prepTriggers() {
              var val = attrs[ prefix + 'Trigger' ];
              unregisterTriggers();

              triggers = getTriggers( val );

              if ( triggers.show === triggers.hide ) {
                element.bind( triggers.show, toggleTooltipBind );
              } else {
                element.bind( triggers.show, showTooltipBind );
                element.bind( triggers.hide, hideTooltipBind );
              }
            }
            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // if a tooltip is attached to <body> we need to remove it on
            // location change as its parent scope will probably not be destroyed
            // by the change.
            if ( appendToBody ) {
              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
              if ( ttScope.isOpen ) {
                hide();
              }
            });
            }

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              $timeout.cancel( transitionTimeout );
              $timeout.cancel( popupTimeout );
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive( 'tooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate ,  $sce ,  $compile ,  $templateRequest) {
  return {
    link: function ( scope, elem, attrs ) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }
        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }
        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function (src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('tooltipClasses', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (scope.placement) {
        element.addClass(scope.placement);
      }
      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }
      if (scope.animation()) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
})

.directive( 'tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})

.directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
}])

.directive( 'tooltipTemplatePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'template/tooltip/tooltip-template-popup.html'
  };
})

.directive( 'tooltipTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive( 'tooltipHtmlPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-popup.html'
  };
})

.directive( 'tooltipHtml', [ '$tooltip', function ( $tooltip ) {
  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

/*
Deprecated
*/
.directive( 'tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
})

.value('tooltipHtmlUnsafeSuppressDeprecated', false)
.directive( 'tooltipHtmlUnsafe', [
          '$tooltip', 'tooltipHtmlUnsafeSuppressDeprecated', '$log',
function ( $tooltip ,  tooltipHtmlUnsafeSuppressDeprecated ,  $log) {
  if (!tooltipHtmlUnsafeSuppressDeprecated) {
    $log.warn('tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.');
  }
  return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

.directive( 'popoverTemplatePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'template/popover/popover-template.html'
  };
})

.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popoverTemplate', 'popover', 'click', {
    useContentExp: true
  } );
}])

.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})

.directive( 'popover', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('progressConfig', {
  animate: true,
  max: 100
})

.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
    var self = this,
        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

    this.bars = [];
    $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

    this.addBar = function(bar, element) {
        if ( !animate ) {
            element.css({'transition': 'none'});
        }

        this.bars.push(bar);

        bar.$watch('value', function( value ) {
            bar.percent = +(100 * value / $scope.max).toFixed(2);
        });

        bar.$on('$destroy', function() {
            element = null;
            self.removeBar(bar);
        });
    };

    this.removeBar = function(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
}])

.directive('progress', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        require: 'progress',
        scope: {},
        templateUrl: 'template/progressbar/progress.html'
    };
})

.directive('bar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^progress',
        scope: {
            value: '=',
            max: '=?',
            type: '@'
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, element);
        }
    };
})

.directive('progressbar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        scope: {
            value: '=',
            max: '=?',
            type: '@'
        },
        templateUrl: 'template/progressbar/progressbar.html',
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, angular.element(element.children()[0]));
        }
    };
});

angular.module('ui.bootstrap.rating', [])

.constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
})

.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl  = { $setViewValue: angular.noop };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }
      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) :
                        new Array( angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max );
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff }, states[i]);
    }
    return states;
  };

  $scope.rate = function(value) {
    if ( !$scope.readonly && value >= 0 && value <= $scope.range.length ) {
      ngModelCtrl.$setViewValue(value);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if ( !$scope.readonly ) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate( $scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1) );
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
  };
}])

.directive('rating', function() {
  return {
    restrict: 'EA',
    require: ['rating', 'ngModel'],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init( ngModelCtrl );
    }
  };
});

/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */

angular.module('ui.bootstrap.tabs', [])

.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
  var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];

  ctrl.select = function(selectedTab) {
    angular.forEach(tabs, function(tab) {
      if (tab.active && tab !== selectedTab) {
        tab.active = false;
        tab.onDeselect();
      }
    });
    selectedTab.active = true;
    selectedTab.onSelect();
  };

  ctrl.addTab = function addTab(tab) {
    tabs.push(tab);
    // we can't run the select function on the first tab
    // since that would select it twice
    if (tabs.length === 1 && tab.active !== false) {
      tab.active = true;
    } else if (tab.active) {
      ctrl.select(tab);
    }
    else {
      tab.active = false;
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index = tabs.indexOf(tab);
    //Select a new tab if the tab to be removed is selected and not destroyed
    if (tab.active && tabs.length > 1 && !destroyed) {
      //If this is the last tab, select the previous tab. else, the next tab.
      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab heading="Tab 1"><b>First</b> Content!</tab>
      <tab heading="Tab 2"><i>Second</i> Content!</tab>
    </tabset>
    <hr />
    <tabset vertical="true">
      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
    </tabset>
    <tabset justified="true">
      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
    </tabset>
  </file>
</example>
 */
.directive('tabset', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      type: '@'
    },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <div ng-controller="TabsDemoCtrl">
      <button class="btn btn-small" ng-click="items[0].active = true">
        Select item 1, using active binding
      </button>
      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
        Enable/disable item 2, using disabled binding
      </button>
      <br />
      <tabset>
        <tab heading="Tab 1">First Tab</tab>
        <tab select="alertMe()">
          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
          Second Tab, with alert callback and html heading!
        </tab>
        <tab ng-repeat="item in items"
          heading="{{item.title}}"
          disabled="item.disabled"
          active="item.active">
          {{item.content}}
        </tab>
      </tabset>
    </div>
  </file>
  <file name="script.js">
    function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
  </file>
</example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab>
        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
        And some content, too!
      </tab>
      <tab>
        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
        That's right.
      </tab>
    </tabset>
  </file>
</example>
 */
.directive('tab', ['$parse', '$log', function($parse, $log) {
  return {
    require: '^tabset',
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/tabs/tab.html',
    transclude: true,
    scope: {
      active: '=?',
      heading: '@',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    compile: function(elm, attrs, transclude) {
      return function postLink(scope, elm, attrs, tabsetCtrl) {
        scope.$watch('active', function(active) {
          if (active) {
            tabsetCtrl.select(scope);
          }
        });

        scope.disabled = false;
        if ( attrs.disable ) {
          scope.$parent.$watch($parse(attrs.disable), function(value) {
            scope.disabled = !! value;
          });
        }

        // Deprecation support of "disabled" parameter
        // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
        // This code is duplicated from the lines above to make it easy to remove once
        // the feature has been completely deprecated
        if ( attrs.disabled ) {
          $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
          scope.$parent.$watch($parse(attrs.disabled), function(value) {
            scope.disabled = !! value;
          });
        }

        scope.select = function() {
          if ( !scope.disabled ) {
            scope.active = true;
          }
        };

        tabsetCtrl.addTab(scope);
        scope.$on('$destroy', function() {
          tabsetCtrl.removeTab(scope);
        });

        //We need to transclude later, once the content container is ready.
        //when this link happens, we're inside a tab heading.
        scope.$transcludeFn = transclude;
      };
    }
  };
}])

.directive('tabHeadingTransclude', [function() {
  return {
    restrict: 'A',
    require: '^tab',
    link: function(scope, elm, attrs, tabCtrl) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}])

.directive('tabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName &&  (
      node.hasAttribute('tab-heading') ||
      node.hasAttribute('data-tab-heading') ||
      node.tagName.toLowerCase() === 'tab-heading' ||
      node.tagName.toLowerCase() === 'data-tab-heading'
    );
  }
})

;

angular.module('ui.bootstrap.timepicker', [])

.constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true
})

.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
  var selected = new Date(),
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

  this.init = function( ngModelCtrl_, inputs ) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function (modelValue) {
      return modelValue ? new Date( modelValue ) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1);

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
    if ( mousewheel ) {
      this.setupMousewheelEvents( hoursInputEl, minutesInputEl );
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents( hoursInputEl, minutesInputEl );
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents( hoursInputEl, minutesInputEl );
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = parseInt(value, 10);
    });
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = parseInt(value, 10);
    });
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if ( ngModelCtrl.$error.time ) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
          selected.setHours( hours );
          refresh();
        }
      } else {
        updateTemplate();
      }
    });
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate ( ) {
    var hours = parseInt( $scope.hours, 10 );
    var valid = ( $scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
    if ( !valid ) {
      return undefined;
    }

    if ( $scope.showMeridian ) {
      if ( hours === 12 ) {
        hours = 0;
      }
      if ( $scope.meridian === meridians[1] ) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = parseInt($scope.minutes, 10);
    return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
  }

  function pad( value ) {
    return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function( hoursInputEl, minutesInputEl ) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
      return (e.detail || delta > 0);
    };

    hoursInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours() );
      e.preventDefault();
    });

    minutesInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes() );
      e.preventDefault();
    });

  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function( hoursInputEl, minutesInputEl ) {
    hoursInputEl.bind('keydown', function(e) {
      if ( e.which === 38 ) { // up
        e.preventDefault();
        $scope.incrementHours();
        $scope.$apply();
      }
      else if ( e.which === 40 ) { // down
        e.preventDefault();
        $scope.decrementHours();
        $scope.$apply();
      }
    });

    minutesInputEl.bind('keydown', function(e) {
      if ( e.which === 38 ) { // up
        e.preventDefault();
        $scope.incrementMinutes();
        $scope.$apply();
      }
      else if ( e.which === 40 ) { // down
        e.preventDefault();
        $scope.decrementMinutes();
        $scope.$apply();
      }
    });
  };

  this.setupInputEvents = function( hoursInputEl, minutesInputEl ) {
    if ( $scope.readonlyInput ) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes) {
      ngModelCtrl.$setViewValue( null );
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
      }
      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate();

      if ( angular.isDefined(hours) ) {
        selected.setHours( hours );
        refresh( 'h' );
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.bind('blur', function(e) {
      if ( !$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply( function() {
          $scope.hours = pad( $scope.hours );
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate();

      if ( angular.isDefined(minutes) ) {
        selected.setMinutes( minutes );
        refresh( 'm' );
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.bind('blur', function(e) {
      if ( !$scope.invalidMinutes && $scope.minutes < 10 ) {
        $scope.$apply( function() {
          $scope.minutes = pad( $scope.minutes );
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if ( isNaN(date) ) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if ( date ) {
        selected = date;
      }
      makeValid();
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh( keyboardChange ) {
    makeValid();
    ngModelCtrl.$setViewValue( new Date(selected) );
    updateTemplate( keyboardChange );
  }

  function makeValid() {
    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
  }

  function updateTemplate( keyboardChange ) {
    var hours = selected.getHours(), minutes = selected.getMinutes();

    if ( $scope.showMeridian ) {
      hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
    }

    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
    if (keyboardChange !== 'm') {
      $scope.minutes = pad(minutes);
    }
    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
  }

  function addMinutes( minutes ) {
    var dt = new Date( selected.getTime() + minutes * 60000 );
    selected.setHours( dt.getHours(), dt.getMinutes() );
    refresh();
  }

  $scope.incrementHours = function() {
    addMinutes( hourStep * 60 );
  };
  $scope.decrementHours = function() {
    addMinutes( - hourStep * 60 );
  };
  $scope.incrementMinutes = function() {
    addMinutes( minuteStep );
  };
  $scope.decrementMinutes = function() {
    addMinutes( - minuteStep );
  };
  $scope.toggleMeridian = function() {
    addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
  };
}])

.directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: ['timepicker', '?^ngModel'],
    controller:'TimepickerController',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if ( ngModelCtrl ) {
        timepickerCtrl.init( ngModelCtrl, element.find('input') );
      }
    }
  };
});

angular.module('ui.bootstrap.transition', [])

.value('$transitionSuppressDeprecated', false)
/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', [
        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {

  if (!$transitionSuppressDeprecated) {
    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
  }

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('typeaheadParser', ['$parse', function ($parse) {

  //                      00000111000000000000022200000000000000003333333333333330000000000044000
  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;

  return {
    parse:function (input) {

      var match = input.match(TYPEAHEAD_REGEXP);
      if (!match) {
        throw new Error(
          'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
            ' but got "' + input + '".');
      }

      return {
        itemName:match[3],
        source:$parse(match[4]),
        viewMapper:$parse(match[2] || match[1]),
        modelMapper:$parse(match[1])
      };
    }
  };
}])

  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
    function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

  var HOT_KEYS = [9, 13, 27, 38, 40];

  return {
    require:'ngModel',
    link:function (originalScope, element, attrs, modelCtrl) {

      //SUPPORTED ATTRIBUTES (OPTIONS)

      //minimal no of characters that needs to be entered before typeahead kicks-in
      var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;

      //minimal wait time after last character typed before typeahead kicks-in
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

      //should it restrict model values to the ones selected from the popup only?
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

      //binding to a variable that indicates if matches are being retrieved asynchronously
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

      //a callback executed when a match is selected
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);

      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

      var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

      var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

      //INTERNAL VARIABLES

      //model setter executed upon match selection
      var $setModelValue = $parse(attrs.ngModel).assign;

      //expressions used by typeahead
      var parserResult = typeaheadParser.parse(attrs.typeahead);

      var hasFocus;

      //create a child scope for the typeahead directive so we are not polluting original scope
      //with typeahead-specific data (matches, query etc.)
      var scope = originalScope.$new();
      originalScope.$on('$destroy', function(){
        scope.$destroy();
      });

      // WAI-ARIA
      var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      element.attr({
        'aria-autocomplete': 'list',
        'aria-expanded': false,
        'aria-owns': popupId
      });

      //pop-up element used to display matches
      var popUpEl = angular.element('<div typeahead-popup></div>');
      popUpEl.attr({
        id: popupId,
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx)',
        query: 'query',
        position: 'position'
      });
      //custom item template
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }

      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
        element.attr('aria-expanded', false);
      };

      var getMatchId = function(index) {
        return popupId + '-option-' + index;
      };

      // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
      // This attribute is added or removed automatically when the `activeIdx` changes.
      scope.$watch('activeIdx', function(index) {
        if (index < 0) {
          element.removeAttr('aria-activedescendant');
        } else {
          element.attr('aria-activedescendant', getMatchId(index));
        }
      });

      var getMatchesAsync = function(inputValue) {

        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

          //it might happen that several async queries were in progress if a user were typing fast
          //but we are interested only in responses that correspond to the current view value
          var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
          if (onCurrentRequest && hasFocus) {
            if (matches && matches.length > 0) {

              scope.activeIdx = focusFirst ? 0 : -1;
              scope.matches.length = 0;

              //transform labels
              for(var i=0; i<matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  id: getMatchId(i),
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }

              scope.query = inputValue;
              //position pop-up with matches - we need to re-calculate its position each time we are opening a window
              //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
              //due to other elements being rendered
              scope.position = appendToBody ? $position.offset(element) : $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');

              element.attr('aria-expanded', true);
            } else {
              resetMatches();
            }
          }
          if (onCurrentRequest) {
            isLoadingSetter(originalScope, false);
          }
        }, function(){
          resetMatches();
          isLoadingSetter(originalScope, false);
        });
      };

      resetMatches();

      //we need to propagate user's query so we can higlight matches
      scope.query = undefined;

      //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
      var timeoutPromise;

      var scheduleSearchWithTimeout = function(inputValue) {
        timeoutPromise = $timeout(function () {
          getMatchesAsync(inputValue);
        }, waitTime);
      };

      var cancelPreviousTimeout = function() {
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }
      };

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function (inputValue) {

        hasFocus = true;

        if (inputValue && inputValue.length >= minSearch) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        } else {
          if (!inputValue) {
            // Reset in case user had typed something previously.
            modelCtrl.$setValidity('editable', true);
            return inputValue;
          } else {
            modelCtrl.$setValidity('editable', false);
            return undefined;
          }
        }
      });

      modelCtrl.$formatters.push(function (modelValue) {

        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {

          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);

        } else {

          //it might happen that we don't have enough info to properly render input value
          //we need to check for this situation and simply return model value if we can't apply custom formatting
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);

          return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
        }
      });

      scope.select = function (activeIdx) {
        //called from within the $digest() cycle
        var locals = {};
        var model, item;

        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);
        modelCtrl.$setValidity('parse', true);

        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals)
        });

        resetMatches();

        //return focus to the input element if a match was selected via a mouse click event
        // use timeout to avoid $rootScope:inprog error
        $timeout(function() { element[0].focus(); }, 0, false);
      };

      //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
      element.bind('keydown', function (evt) {

        //typeahead is open and an "interesting" key was pressed
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          return;
        }

        // if there's nothing selected (i.e. focusFirst) and enter is hit, don't do anything
        if (scope.activeIdx == -1 && (evt.which === 13 || evt.which === 9)) {
          return;
        }

        evt.preventDefault();

        if (evt.which === 40) {
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();

        } else if (evt.which === 38) {
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();

        } else if (evt.which === 13 || evt.which === 9) {
          scope.$apply(function () {
            scope.select(scope.activeIdx);
          });

        } else if (evt.which === 27) {
          evt.stopPropagation();

          resetMatches();
          scope.$digest();
        }
      });

      element.bind('blur', function (evt) {
        hasFocus = false;
      });

      // Keep reference to click handler to unbind it.
      var dismissClickHandler = function (evt) {
        if (element[0] !== evt.target) {
          resetMatches();
          scope.$digest();
        }
      };

      $document.bind('click', dismissClickHandler);

      originalScope.$on('$destroy', function(){
        $document.unbind('click', dismissClickHandler);
        if (appendToBody) {
          $popup.remove();
        }
        // Prevent jQuery cache memory leak
        popUpEl.remove();
      });

      var $popup = $compile(popUpEl)(scope);

      if (appendToBody) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
    }
  };

}])

  .directive('typeaheadPopup', function () {
    return {
      restrict:'EA',
      scope:{
        matches:'=',
        query:'=',
        active:'=',
        position:'=',
        select:'&'
      },
      replace:true,
      templateUrl:'template/typeahead/typeahead-popup.html',
      link:function (scope, element, attrs) {

        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function () {
          return scope.matches.length > 0;
        };

        scope.isActive = function (matchIdx) {
          return scope.active == matchIdx;
        };

        scope.selectActive = function (matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function (activeIdx) {
          scope.select({activeIdx:activeIdx});
        };
      }
    };
  })

  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function ($templateRequest, $compile, $parse) {
    return {
      restrict:'EA',
      scope:{
        index:'=',
        match:'=',
        query:'='
      },
      link:function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          $compile(tplContent.trim())(scope, function(clonedElement){
            element.replaceWith(clonedElement);
          });
        });
      }
    };
  }])

  .filter('typeaheadHighlight', function() {

    function escapeRegexp(queryToEscape) {
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    return function(matchItem, query) {
      return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
    };
  });

angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html",
    "<div class=\"panel panel-default\">\n" +
    "  <div class=\"panel-heading\">\n" +
    "    <h4 class=\"panel-title\">\n" +
    "      <a href=\"javascript:void(0)\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
    "    </h4>\n" +
    "  </div>\n" +
    "  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\n" +
    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion.html",
    "<div class=\"panel-group\" ng-transclude></div>");
}]);

angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html",
    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]\" role=\"alert\">\n" +
    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" +
    "        <span aria-hidden=\"true\">&times;</span>\n" +
    "        <span class=\"sr-only\">Close</span>\n" +
    "    </button>\n" +
    "    <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
    "        <li ng-repeat=\"slide in slides | orderBy:'index' track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
    "    </ol>\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/slide.html",
    "<div ng-class=\"{\n" +
    "    'active': active\n" +
    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
    "");
}]);

angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/datepicker.html",
    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
    "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
    "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
    "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
    "</div>");
}]);

angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/day.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\" ng-class=\"dt.customClass\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/month.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/popup.html",
    "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\">\n" +
    "	<li ng-transclude></li>\n" +
    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
    "		<span class=\"btn-group pull-left\">\n" +
    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" +
    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
    "		</span>\n" +
    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "");
}]);

angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datepicker/year.html",
    "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" +
    "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html",
    "<div class=\"modal-backdrop\"\n" +
    "     modal-animation-class=\"fade\"\n" +
    "     ng-class=\"{in: animate}\"\n" +
    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
    "></div>\n" +
    "");
}]);

angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html",
    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
    "    modal-animation-class=\"fade\"\n" +
    "	ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pager.html",
    "<ul class=\"pager\">\n" +
    "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li>\n" +
    "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pagination.html",
    "<ul class=\"pagination\">\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1, $event)\">{{getText('first')}}</a></li>\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a></li>\n" +
    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
    "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{getText('next')}}</a></li>\n" +
    "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages, $event)\">{{getText('last')}}</a></li>\n" +
    "</ul>");
}]);

angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-template-popup.html",
    "<div class=\"tooltip\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"tooltip-arrow\"></div>\n" +
    "  <div class=\"tooltip-inner\"\n" +
    "    tooltip-template-transclude=\"contentExp()\"\n" +
    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover-template.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
    "      <div class=\"popover-content\"\n" +
    "        tooltip-template-transclude=\"contentExp()\"\n" +
    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover-window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover-window.html",
    "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen, fade: animation }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" +
    "      <div class=\"popover-content\" tooltip-template-transclude></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/popover/popover.html",
    "<div class=\"popover\"\n" +
    "  tooltip-animation-class=\"fade\"\n" +
    "  tooltip-classes\n" +
    "  ng-class=\"{ in: isOpen() }\">\n" +
    "  <div class=\"arrow\"></div>\n" +
    "\n" +
    "  <div class=\"popover-inner\">\n" +
    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/bar.html",
    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" +
    "");
}]);

angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progress.html",
    "<div class=\"progress\" ng-transclude></div>");
}]);

angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progressbar.html",
    "<div class=\"progress\">\n" +
    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/rating/rating.html",
    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
    "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\">\n" +
    "        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
    "    </i>\n" +
    "</span>");
}]);

angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");
}]);

angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset.html",
    "<div>\n" +
    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
    "  <div class=\"tab-content\">\n" +
    "    <div class=\"tab-pane\" \n" +
    "         ng-repeat=\"tab in tabs\" \n" +
    "         ng-class=\"{active: tab.active}\"\n" +
    "         tab-content-transclude=\"tab\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/timepicker/timepicker.html",
    "<table>\n" +
    "	<tbody>\n" +
    "		<tr class=\"text-center\">\n" +
    "			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "			<td>&nbsp;</td>\n" +
    "			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
    "			<td ng-show=\"showMeridian\"></td>\n" +
    "		</tr>\n" +
    "		<tr>\n" +
    "			<td class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
    "				<input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
    "			</td>\n" +
    "			<td>:</td>\n" +
    "			<td class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
    "				<input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
    "			</td>\n" +
    "			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
    "		</tr>\n" +
    "		<tr class=\"text-center\">\n" +
    "			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "			<td>&nbsp;</td>\n" +
    "			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
    "			<td ng-show=\"showMeridian\"></td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>\n" +
    "");
}]);

angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-match.html",
    "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
}]);

angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead-popup.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\n" +
    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function objectKeys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function indexOf(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i].params) continue;
    parentParams = objectKeys(parents[i].params);
    if (!parentParams.length) continue;

    for (var j in parentParams) {
      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}

// like _.indexBy
// when you know that your index values will be unique, or you want last-one-in to win
function indexBy(array, propName) {
  var result = {};
  forEach(array, function(item) {
    result[item[propName]] = item;
  });
  return result;
}

// extracted from underscore.js
// Return a copy of the object only containing the whitelisted properties.
function pick(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  forEach(keys, function(key) {
    if (key in obj) copy[key] = obj[key];
  });
  return copy;
}

// extracted from underscore.js
// Return a copy of the object omitting the blacklisted properties.
function omit(obj) {
  var copy = {};
  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
  for (var key in obj) {
    if (indexOf(keys, key) == -1) copy[key] = obj[key];
  }
  return copy;
}

function pluck(collection, key) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = isFunction(key) ? key(val) : val[key];
  });
  return result;
}

function filter(collection, callback) {
  var array = isArray(collection);
  var result = array ? [] : {};
  forEach(collection, function(val, i) {
    if (callback(val, i)) {
      result[array ? result.length : i] = val;
    }
  });
  return result;
}

function map(collection, callback) {
  var result = isArray(collection) ? [] : {};

  forEach(collection, function(val, i) {
    result[i] = callback(val, i);
  });
  return result;
}

/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.state']);

angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
    var invocableKeys = objectKeys(invocables || {});
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, indexOf(cycle, key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required
    
    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = result.$$promises || true; // keep for isResolve()
          delete result.$$inheritedValues;
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }

      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      if (parent.$$inheritedValues) {
        merge(values, omit(parent.$$inheritedValues, invocableKeys));
      }

      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      extend(promises, parent.$$promises);
      if (parent.$$values) {
        merged = merge(values, omit(parent.$$values, invocableKeys));
        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
        done();
      } else {
        if (parent.$$inheritedValues) {
          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
        }        
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromProvider
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

var $$UMFP; // reference to $UrlMatcherFactoryProvider

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 *
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 *
 * Examples:
 *
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 * @param {string} pattern  The pattern to compile into a matcher.
 * @param {Object} config  A configuration object hash:
 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
 *   an existing UrlMatcher
 *
 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the constructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New `UrlMatcher` object
 */
function UrlMatcher(pattern, config, parentMatcher) {
  config = extend({ params: {} }, isObject(config) ? config : {});

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                       - anything other than curly braces or backslash
  //    \\.                            - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      compiled = '^', last = 0, m,
      segments = this.segments = [],
      parentParams = parentMatcher ? parentMatcher.params : {},
      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
      paramNames = [];

  function addParameter(id, type, config, location) {
    paramNames.push(id);
    if (parentParams[id]) return parentParams[id];
    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    params[id] = new $$UMFP.Param(id, type, config, location);
    return params[id];
  }

  function quoteRegExp(string, pattern, squash, optional) {
    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
    if (!pattern) return result;
    switch(squash) {
      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
      case true:  surroundPattern = ['?(', ')?']; break;
      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
    }
    return result + surroundPattern[0] + pattern + surroundPattern[1];
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  function matchDetails(m, isSearch) {
    var id, regexp, segment, type, cfg, arrayMode;
    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    cfg         = config.params[id];
    segment     = pattern.substring(last, m.index);
    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
    return {
      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
    };
  }

  var p, param, segment;
  while ((m = placeholder.exec(pattern))) {
    p = matchDetails(m, false);
    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

    param = addParameter(p.id, p.type, p.cfg, "path");
    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
    segments.push(p.segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');

  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last + i);

    if (search.length > 0) {
      last = 0;
      while ((m = searchPlaceholder.exec(search))) {
        p = matchDetails(m, true);
        param = addParameter(p.id, p.type, p.cfg, "search");
        last = placeholder.lastIndex;
        // check if ?&
      }
    }
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
  segments.push(segment);

  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
  this.prefix = segments[0];
  this.$$paramNames = paramNames;
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * <pre>
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * </pre>
 *
 * @param {string} pattern  The pattern to append.
 * @param {Object} config  An object hash of the configuration for the matcher.
 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern, config) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  var defaultConfig = {
    caseInsensitive: $$UMFP.caseInsensitive(),
    strict: $$UMFP.strictMode(),
    squash: $$UMFP.defaultSquashPolicy()
  };
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
 *   x: '1', q: 'hello'
 * });
 * // returns { id: 'bob', q: 'hello', r: null }
 * </pre>
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;
  searchParams = searchParams || {};

  var paramNames = this.parameters(), nTotal = paramNames.length,
    nPath = this.segments.length - 1,
    values = {}, i, j, cfg, paramName;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  function decodePathArray(string) {
    function reverseString(str) { return str.split("").reverse().join(""); }
    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

    var split = reverseString(string).split(/-(?!\\)/);
    var allReversed = map(split, reverseString);
    return map(allReversed, unquoteDashes).reverse();
  }

  for (i = 0; i < nPath; i++) {
    paramName = paramNames[i];
    var param = this.params[paramName];
    var paramVal = m[i+1];
    // if the param value matches a pre-replace pair, replace the value before decoding.
    for (j = 0; j < param.replace; j++) {
      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
    }
    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
    values[paramName] = param.value(paramVal);
  }
  for (/**/; i < nTotal; i++) {
    paramName = paramNames[i];
    values[paramName] = this.params[paramName].value(searchParams[paramName]);
  }

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 *
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function (param) {
  if (!isDefined(param)) return this.$$paramNames;
  return this.params[param] || null;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#validate
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Checks an object hash of parameters to validate their correctness according to the parameter
 * types of this `UrlMatcher`.
 *
 * @param {Object} params The object hash of parameters to validate.
 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
 */
UrlMatcher.prototype.validates = function (params) {
  return this.params.$$validates(params);
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * <pre>
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * </pre>
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  values = values || {};
  var segments = this.segments, params = this.parameters(), paramset = this.params;
  if (!this.validates(values)) return null;

  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

  function encodeDashes(str) { // Replace dashes with encoded "\-"
    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
  }

  for (i = 0; i < nTotal; i++) {
    var isPathParam = i < nPath;
    var name = params[i], param = paramset[name], value = param.value(values[name]);
    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
    var squash = isDefaultValue ? param.squash : false;
    var encoded = param.type.encode(value);

    if (isPathParam) {
      var nextSegment = segments[i + 1];
      if (squash === false) {
        if (encoded != null) {
          if (isArray(encoded)) {
            result += map(encoded, encodeDashes).join("-");
          } else {
            result += encodeURIComponent(encoded);
          }
        }
        result += nextSegment;
      } else if (squash === true) {
        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
        result += nextSegment.match(capture)[1];
      } else if (isString(squash)) {
        result += squash + nextSegment;
      }
    } else {
      if (encoded == null || (isDefaultValue && squash !== false)) continue;
      if (!isArray(encoded)) encoded = [ encoded ];
      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
      result += (search ? '&' : '?') + (name + '=' + encoded);
      search = true;
    }
  }

  return result;
};

/**
 * @ngdoc object
 * @name ui.router.util.type:Type
 *
 * @description
 * Implements an interface to define custom parameter types that can be decoded from and encoded to
 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
 * objects when matching or formatting URLs, or comparing or validating parameter values.
 *
 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
 * information on registering custom types.
 *
 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
 *        properties will override the default methods and/or pattern in `Type`'s public interface.
 * @example
 * <pre>
 * {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 * </pre>
 *
 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
 *           coming from a substring of a URL.
 *
 * @returns {Object}  Returns a new `Type` object.
 */
function Type(config) {
  extend(this, config);
}

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#is
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Detects whether a value is of a particular type. Accepts a native (decoded) value
 * and determines whether it matches the current `Type` object.
 *
 * @param {*} val  The value to check.
 * @param {string} key  Optional. If the type check is happening in the context of a specific
 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
 */
Type.prototype.is = function(val, key) {
  return true;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#encode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
 * only needs to be a representation of `val` that has been coerced to a string.
 *
 * @param {*} val  The value to encode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
 */
Type.prototype.encode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#decode
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Converts a parameter value (from URL string or transition param) to a custom/native value.
 *
 * @param {string} val  The URL parameter value to decode.
 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
 *        meta-programming of `Type` objects.
 * @returns {*}  Returns a custom representation of the URL parameter value.
 */
Type.prototype.decode = function(val, key) {
  return val;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:Type#equals
 * @methodOf ui.router.util.type:Type
 *
 * @description
 * Determines whether two decoded values are equivalent.
 *
 * @param {*} a  A value to compare against.
 * @param {*} b  A value to compare against.
 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
 */
Type.prototype.equals = function(a, b) {
  return a == b;
};

Type.prototype.$subPattern = function() {
  var sub = this.pattern.toString();
  return sub.substr(1, sub.length - 2);
};

Type.prototype.pattern = /.*/;

Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

/** Given an encoded string, or a decoded object, returns a decoded object */
Type.prototype.$normalize = function(val) {
  return this.is(val) ? val : this.decode(val);
};

/*
 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
 * e.g.:
 * - urlmatcher pattern "/path?{queryParam[]:int}"
 * - url: "/path?queryParam=1&queryParam=2
 * - $stateParams.queryParam will be [1, 2]
 * if `mode` is "auto", then
 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
 */
Type.prototype.$asArray = function(mode, isSearch) {
  if (!mode) return this;
  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

  function ArrayType(type, mode) {
    function bindTo(type, callbackName) {
      return function() {
        return type[callbackName].apply(type, arguments);
      };
    }

    // Wrap non-array value as array
    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
      switch(val.length) {
        case 0: return undefined;
        case 1: return mode === "auto" ? val[0] : val;
        default: return val;
      }
    }
    function falsey(val) { return !val; }

    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
      return function handleArray(val) {
        val = arrayWrap(val);
        var result = map(val, callback);
        if (allTruthyMode === true)
          return filter(result, falsey).length === 0;
        return arrayUnwrap(result);
      };
    }

    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
      return function handleArray(val1, val2) {
        var left = arrayWrap(val1), right = arrayWrap(val2);
        if (left.length !== right.length) return false;
        for (var i = 0; i < left.length; i++) {
          if (!callback(left[i], right[i])) return false;
        }
        return true;
      };
    }

    this.encode = arrayHandler(bindTo(type, 'encode'));
    this.decode = arrayHandler(bindTo(type, 'decode'));
    this.is     = arrayHandler(bindTo(type, 'is'), true);
    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
    this.pattern = type.pattern;
    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
    this.name = type.name;
    this.$arrayMode = mode;
  }

  return new ArrayType(this, mode);
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
 * is also available to providers under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {
  $$UMFP = this;

  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }

  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
    string: {
      encode: valToString,
      decode: valFromString,
      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
      // In 0.2.x, string params are optional by default for backwards compat
      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
      pattern: /[^/]*/
    },
    int: {
      encode: valToString,
      decode: function(val) { return parseInt(val, 10); },
      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
      pattern: /\d+/
    },
    bool: {
      encode: function(val) { return val ? 1 : 0; },
      decode: function(val) { return parseInt(val, 10) !== 0; },
      is: function(val) { return val === true || val === false; },
      pattern: /0|1/
    },
    date: {
      encode: function (val) {
        if (!this.is(val))
          return undefined;
        return [ val.getFullYear(),
          ('0' + (val.getMonth() + 1)).slice(-2),
          ('0' + val.getDate()).slice(-2)
        ].join("-");
      },
      decode: function (val) {
        if (this.is(val)) return val;
        var match = this.capture.exec(val);
        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
      },
      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    },
    json: {
      encode: angular.toJson,
      decode: angular.fromJson,
      is: angular.isObject,
      equals: angular.equals,
      pattern: /[^/]*/
    },
    any: { // does not encode/decode
      encode: angular.identity,
      decode: angular.identity,
      equals: angular.equals,
      pattern: /.*/
    }
  };

  function getDefaultConfig() {
    return {
      strict: isStrictMode,
      caseInsensitive: isCaseInsensitive
    };
  }

  function isInjectable(value) {
    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
  }

  /**
   * [Internal] Get the default value of a parameter, which may be an injectable function.
   */
  $UrlMatcherFactory.$$getDefaultValue = function(config) {
    if (!isInjectable(config.value)) return config.value;
    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
    return injector.invoke(config.value);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URL matching should be case sensitive (the default behavior), or not.
   *
   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
   * @returns {boolean} the current value of caseInsensitive
   */
  this.caseInsensitive = function(value) {
    if (isDefined(value))
      isCaseInsensitive = value;
    return isCaseInsensitive;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#strictMode
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Defines whether URLs should match trailing slashes, or not (the default behavior).
   *
   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
   * @returns {boolean} the current value of strictMode
   */
  this.strictMode = function(value) {
    if (isDefined(value))
      isStrictMode = value;
    return isStrictMode;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Sets the default behavior when generating or matching URLs with default parameter values.
   *
   * @param {string} value A string that defines the default parameter URL squashing behavior.
   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
   *             the parameter value from the URL and replace it with this string.
   */
  this.defaultSquashPolicy = function(value) {
    if (!isDefined(value)) return defaultSquashPolicy;
    if (value !== true && value !== false && !isString(value))
      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
    defaultSquashPolicy = value;
    return value;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
   *
   * @param {string} pattern  The URL pattern.
   * @param {Object} config  The config object hash.
   * @returns {UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern, config) {
    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
   *          implementing all the same methods.
   */
  this.isMatcher = function (o) {
    if (!isObject(o)) return false;
    var result = true;

    forEach(UrlMatcher.prototype, function(val, name) {
      if (isFunction(val)) {
        result = result && (isDefined(o[name]) && isFunction(o[name]));
      }
    });
    return result;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#type
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
   * generate URLs with typed parameters.
   *
   * @param {string} name  The type name.
   * @param {Object|Function} definition   The type definition. See
   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
   *        runtime starts.  The result of this function is merged into the existing `definition`.
   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
   *
   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
   *
   * @example
   * This is a simple example of a custom type that encodes and decodes items from an
   * array, using the array index as the URL-encoded value:
   *
   * <pre>
   * var list = ['John', 'Paul', 'George', 'Ringo'];
   *
   * $urlMatcherFactoryProvider.type('listItem', {
   *   encode: function(item) {
   *     // Represent the list item in the URL using its corresponding index
   *     return list.indexOf(item);
   *   },
   *   decode: function(item) {
   *     // Look up the list item by index
   *     return list[parseInt(item, 10)];
   *   },
   *   is: function(item) {
   *     // Ensure the item is valid by checking to see that it appears
   *     // in the list
   *     return list.indexOf(item) > -1;
   *   }
   * });
   *
   * $stateProvider.state('list', {
   *   url: "/list/{item:listItem}",
   *   controller: function($scope, $stateParams) {
   *     console.log($stateParams.item);
   *   }
   * });
   *
   * // ...
   *
   * // Changes URL to '/list/3', logs "Ringo" to the console
   * $state.go('list', { item: "Ringo" });
   * </pre>
   *
   * This is a more complex example of a type that relies on dependency injection to
   * interact with services, and uses the parameter name from the URL to infer how to
   * handle encoding and decoding parameter values:
   *
   * <pre>
   * // Defines a custom type that gets a value from a service,
   * // where each service gets different types of values from
   * // a backend API:
   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
   *
   *   // Matches up services to URL parameter names
   *   var services = {
   *     user: Users,
   *     post: Posts
   *   };
   *
   *   return {
   *     encode: function(object) {
   *       // Represent the object in the URL using its unique ID
   *       return object.id;
   *     },
   *     decode: function(value, key) {
   *       // Look up the object by ID, using the parameter
   *       // name (key) to call the correct service
   *       return services[key].findById(value);
   *     },
   *     is: function(object, key) {
   *       // Check that object is a valid dbObject
   *       return angular.isObject(object) && object.id && services[key];
   *     }
   *     equals: function(a, b) {
   *       // Check the equality of decoded objects by comparing
   *       // their unique IDs
   *       return a.id === b.id;
   *     }
   *   };
   * });
   *
   * // In a config() block, you can then attach URLs with
   * // type-annotated parameters:
   * $stateProvider.state('users', {
   *   url: "/users",
   *   // ...
   * }).state('users.item', {
   *   url: "/{user:dbObject}",
   *   controller: function($scope, $stateParams) {
   *     // $stateParams.user will now be an object returned from
   *     // the Users service
   *   },
   *   // ...
   * });
   * </pre>
   */
  this.type = function (name, definition, definitionFn) {
    if (!isDefined(definition)) return $types[name];
    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

    $types[name] = new Type(extend({ name: name }, definition));
    if (definitionFn) {
      typeQueue.push({ name: name, def: definitionFn });
      if (!enqueue) flushTypeQueue();
    }
    return this;
  };

  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
  function flushTypeQueue() {
    while(typeQueue.length) {
      var type = typeQueue.shift();
      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
      angular.extend($types[type.name], injector.invoke(type.def));
    }
  }

  // Register default types. Store them in the prototype of $types.
  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
  $types = inherit($types, {});

  /* No need to document $get, since it returns this */
  this.$get = ['$injector', function ($injector) {
    injector = $injector;
    enqueue = false;
    flushTypeQueue();

    forEach(defaultTypes, function(type, name) {
      if (!$types[name]) $types[name] = new Type(type);
    });
    return this;
  }];

  this.Param = function Param(id, type, config, location) {
    var self = this;
    config = unwrapShorthand(config);
    type = getType(config, type, location);
    var arrayMode = getArrayMode();
    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
    var isOptional = config.value !== undefined;
    var squash = getSquashPolicy(config, isOptional);
    var replace = getReplace(config, arrayMode, isOptional, squash);

    function unwrapShorthand(config) {
      var keys = isObject(config) ? objectKeys(config) : [];
      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
      if (isShorthand) config = { value: config };
      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
      return config;
    }

    function getType(config, urlType, location) {
      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
      if (urlType) return urlType;
      if (!config.type) return (location === "config" ? $types.any : $types.string);
      return config.type instanceof Type ? config.type : new Type(config.type);
    }

    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
    function getArrayMode() {
      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
      return extend(arrayDefaults, arrayParamNomenclature, config).array;
    }

    /**
     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
     */
    function getSquashPolicy(config, isOptional) {
      var squash = config.squash;
      if (!isOptional || squash === false) return false;
      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
      if (squash === true || isString(squash)) return squash;
      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
    }

    function getReplace(config, arrayMode, isOptional, squash) {
      var replace, configuredKeys, defaultPolicy = [
        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
        { from: null, to: (isOptional || arrayMode ? undefined : "") }
      ];
      replace = isArray(config.replace) ? config.replace : [];
      if (isString(squash))
        replace.push({ from: squash, to: undefined });
      configuredKeys = map(replace, function(item) { return item.from; } );
      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
    }

    /**
     * [Internal] Get the default value of a parameter, which may be an injectable function.
     */
    function $$getDefaultValue() {
      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
      var defaultValue = injector.invoke(config.$$fn);
      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
      return defaultValue;
    }

    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    function $value(value) {
      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
      function $replace(value) {
        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
        return replacement.length ? replacement[0] : value;
      }
      value = $replace(value);
      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
    }

    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

    extend(this, {
      id: id,
      type: type,
      location: location,
      array: arrayMode,
      squash: squash,
      replace: replace,
      isOptional: isOptional,
      value: $value,
      dynamic: undefined,
      config: config,
      toString: toString
    });
  };

  function ParamSet(params) {
    extend(this, params || {});
  }

  ParamSet.prototype = {
    $$new: function() {
      return inherit(this, extend(new ParamSet(), { $$parent: this}));
    },
    $$keys: function () {
      var keys = [], chain = [], parent = this,
        ignore = objectKeys(ParamSet.prototype);
      while (parent) { chain.push(parent); parent = parent.$$parent; }
      chain.reverse();
      forEach(chain, function(paramset) {
        forEach(objectKeys(paramset), function(key) {
            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
        });
      });
      return keys;
    },
    $$values: function(paramValues) {
      var values = {}, self = this;
      forEach(self.$$keys(), function(key) {
        values[key] = self[key].value(paramValues && paramValues[key]);
      });
      return values;
    },
    $$equals: function(paramValues1, paramValues2) {
      var equal = true, self = this;
      forEach(self.$$keys(), function(key) {
        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
        if (!self[key].type.equals(left, right)) equal = false;
      });
      return equal;
    },
    $$validates: function $$validate(paramValues) {
      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
      for (i = 0; i < keys.length; i++) {
        param = this[keys[i]];
        rawVal = paramValues[keys[i]];
        if ((rawVal === undefined || rawVal === null) && param.isOptional)
          break; // There was no parameter value, but the param is optional
        normalized = param.type.$normalize(rawVal);
        if (!param.type.is(normalized))
          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
        encoded = param.type.encode(normalized);
        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
      }
      return true;
    },
    $$parent: undefined
  };

  this.ParamSet = ParamSet;
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
  var rules = [], otherwise = null, interceptDeferred = false, listener;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider` to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.rule = function (rule) {
    if (!isFunction(rule)) throw new Error("'rule' must be a function");
    rules.push(rule);
    return this;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalid route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     return '/a/valid/url';
   *   });
   * });
   * </pre>
   *
   * @param {string|object} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services, and must return a url string.
   *
   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
   */
  this.otherwise = function (rule) {
    if (isString(rule)) {
      var redirect = rule;
      rule = function () { return redirect; };
    }
    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
    otherwise = rule;
    return this;
  };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syntax of match
   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
  this.when = function (what, handler) {
    var redirect, handlerIsString = isString(handler);
    if (isString(what)) what = $urlMatcherFactory.compile(what);

    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
      throw new Error("invalid 'handler' in when()");

    var strategies = {
      matcher: function (what, handler) {
        if (handlerIsString) {
          redirect = $urlMatcherFactory.compile(handler);
          handler = ['$match', function ($match) { return redirect.format($match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
        }, {
          prefix: isString(what.prefix) ? what.prefix : ''
        });
      },
      regex: function (what, handler) {
        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

        if (handlerIsString) {
          redirect = handler;
          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
        }
        return extend(function ($injector, $location) {
          return handleIfMatch($injector, handler, what.exec($location.path()));
        }, {
          prefix: regExpPrefix(what)
        });
      }
    };

    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

    for (var n in check) {
      if (check[n]) return this.rule(strategies[n](what, handler));
    }

    throw new Error("invalid 'what' in when()");
  };

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#deferIntercept
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Disables (or enables) deferring location change interception.
   *
   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
   * defer a transition but maintain the current URL), call this method at configuration time.
   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
   * `$locationChangeSuccess` event handler.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *
   *   // Prevent $urlRouter from automatically intercepting URL changes;
   *   // this allows you to configure custom behavior in between
   *   // location changes and route synchronization:
   *   $urlRouterProvider.deferIntercept();
   *
   * }).run(function ($rootScope, $urlRouter, UserService) {
   *
   *   $rootScope.$on('$locationChangeSuccess', function(e) {
   *     // UserService is an example service for managing user state
   *     if (UserService.isLoggedIn()) return;
   *
   *     // Prevent $urlRouter's default handler from firing
   *     e.preventDefault();
   *
   *     UserService.handleLogin().then(function() {
   *       // Once the user has logged in, sync the current URL
   *       // to the router:
   *       $urlRouter.sync();
   *     });
   *   });
   *
   *   // Configures $urlRouter's listener *after* your custom listener
   *   $urlRouter.listen();
   * });
   * </pre>
   *
   * @param {boolean} defer Indicates whether to defer location change interception. Passing
            no parameter is equivalent to `true`.
   */
  this.deferIntercept = function (defer) {
    if (defer === undefined) defer = true;
    interceptDeferred = defer;
  };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   * @requires $browser
   *
   * @description
   *
   */
  this.$get = $get;
  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
  function $get(   $location,   $rootScope,   $injector,   $browser) {

    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

    function appendBasePath(url, isHtml5, absolute) {
      if (baseHref === '/') return url;
      if (isHtml5) return baseHref.slice(0, -1) + url;
      if (absolute) return baseHref.slice(1) + url;
      return url;
    }

    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
    function update(evt) {
      if (evt && evt.defaultPrevented) return;
      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
      lastPushedUrl = undefined;
      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
      //if (ignoreUpdate) return true;

      function check(rule) {
        var handled = rule($injector, $location);

        if (!handled) return false;
        if (isString(handled)) $location.replace().url(handled);
        return true;
      }
      var n = rules.length, i;

      for (i = 0; i < n; i++) {
        if (check(rules[i])) return;
      }
      // always check otherwise last to allow dynamic updates to the set of rules
      if (otherwise) check(otherwise);
    }

    function listen() {
      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
      return listener;
    }

    if (!interceptDeferred) listen();

    return {
      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#sync
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
       * with the transition by calling `$urlRouter.sync()`.
       *
       * @example
       * <pre>
       * angular.module('app', ['ui.router'])
       *   .run(function($rootScope, $urlRouter) {
       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
       *       // Halt state change from even starting
       *       evt.preventDefault();
       *       // Perform custom logic
       *       var meetsRequirement = ...
       *       // Continue with the update and state transition if logic allows
       *       if (meetsRequirement) $urlRouter.sync();
       *     });
       * });
       * </pre>
       */
      sync: function() {
        update();
      },

      listen: function() {
        return listen();
      },

      update: function(read) {
        if (read) {
          location = $location.url();
          return;
        }
        if ($location.url() === location) return;

        $location.url(location);
        $location.replace();
      },

      push: function(urlMatcher, params, options) {
         var url = urlMatcher.format(params || {});

        // Handle the special hash param, if needed
        if (url !== null && params && params['#']) {
            url += '#' + params['#'];
        }

        $location.url(url);
        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
        if (options && options.replace) $location.replace();
      },

      /**
       * @ngdoc function
       * @name ui.router.router.$urlRouter#href
       * @methodOf ui.router.router.$urlRouter
       *
       * @description
       * A URL generation method that returns the compiled URL for a given
       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
       *
       * @example
       * <pre>
       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
       *   person: "bob"
       * });
       * // $bob == "/about/bob";
       * </pre>
       *
       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
       * @param {object=} options Options object. The options are:
       *
       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
       *
       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
       */
      href: function(urlMatcher, params, options) {
        if (!urlMatcher.validates(params)) return null;

        var isHtml5 = $locationProvider.html5Mode();
        if (angular.isObject(isHtml5)) {
          isHtml5 = isHtml5.enabled;
        }
        
        var url = urlMatcher.format(params);
        options = options || {};

        if (!isHtml5 && url !== null) {
          url = "#" + $locationProvider.hashPrefix() + url;
        }

        // Handle special hash param, if needed
        if (url !== null && params && params['#']) {
          url += '#' + params['#'];
        }

        url = appendBasePath(url, isHtml5, options.absolute);

        if (!options.absolute || !url) {
          return url;
        }

        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
        port = (port === 80 || port === 443 ? '' : ':' + port);

        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
      }
    };
  }
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = extend({}, state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url, config = { params: state.params || {} };

      if (isString(url)) {
        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
        return (state.parent.navigable || root).url.concat(url, config);
      }

      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
    ownParams: function(state) {
      var params = state.url && state.url.params || new $$UMFP.ParamSet();
      forEach(state.params || {}, function(config, id) {
        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
      });
      return params;
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    if (!stateOrName) return undefined;

    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      base = findState(base);
      
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function flushQueuedChildren(parentName) {
    var queued = queue[parentName] || [];
    while(queued.length) {
      registerState(queued.shift());
    }
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { inherit: true, location: false });
        }
      }]);
    }

    // Register any queued children
    flushQueuedChildren(name);

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf('*') > -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split('.'),
        segments = $state.$current.name.split('.');

    //match single stars
    for (var i = 0, l = globSegments.length; i < l; i++) {
      if (globSegments[i] === '*') {
        segments[i] = '*';
      }
    }

    //match greedy starts
    if (globSegments[0] === '**') {
       segments = segments.slice(indexOf(segments, globSegments[1]));
       segments.unshift('**');
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === '**') {
       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push('**');
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    return segments.join('') === globSegments.join('');
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
   *   or `null`.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a `$state.includes()` test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function (state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(views, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} stateConfig State configuration object.
   * @param {string|function=} stateConfig.template
   * <a id='template'></a>
   *   html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <pre>template:
   *   "<h1>inline template definition</h1>" +
   *   "<div ui-view></div>"</pre>
   * <pre>template: function(params) {
   *       return "<h1>generated template</h1>"; }</pre>
   * </div>
   *
   * @param {string|function=} stateConfig.templateUrl
   * <a id='templateUrl'></a>
   *
   *   path or function that returns a path to an html
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <pre>templateUrl: "home.html"</pre>
   * <pre>templateUrl: function(params) {
   *     return myTemplates[params.pageId]; }</pre>
   *
   * @param {function=} stateConfig.templateProvider
   * <a id='templateProvider'></a>
   *    Provider function that returns HTML content string.
   * <pre> templateProvider:
   *       function(MyTemplateService, params) {
   *         return MyTemplateService.getTemplate(params.pageId);
   *       }</pre>
   *
   * @param {string|function=} stateConfig.controller
   * <a id='controller'></a>
   *
   *  Controller fn that should be associated with newly
   *   related scope or the name of a registered controller if passed as a string.
   *   Optionally, the ControllerAs may be declared here.
   * <pre>controller: "MyRegisteredController"</pre>
   * <pre>controller:
   *     "MyRegisteredController as fooCtrl"}</pre>
   * <pre>controller: function($scope, MyService) {
   *     $scope.data = MyService.getData(); }</pre>
   *
   * @param {function=} stateConfig.controllerProvider
   * <a id='controllerProvider'></a>
   *
   * Injectable provider function that returns the actual controller or string.
   * <pre>controllerProvider:
   *   function(MyResolveData) {
   *     if (MyResolveData.foo)
   *       return "FooCtrl"
   *     else if (MyResolveData.bar)
   *       return "BarCtrl";
   *     else return function($scope) {
   *       $scope.baz = "Qux";
   *     }
   *   }</pre>
   *
   * @param {string=} stateConfig.controllerAs
   * <a id='controllerAs'></a>
   * 
   * A controller alias name. If present the controller will be
   *   published to scope under the controllerAs name.
   * <pre>controllerAs: "myCtrl"</pre>
   *
   * @param {string|object=} stateConfig.parent
   * <a id='parent'></a>
   * Optionally specifies the parent state of this state.
   *
   * <pre>parent: 'parentState'</pre>
   * <pre>parent: parentState // JS variable</pre>
   *
   * @param {object=} stateConfig.resolve
   * <a id='resolve'></a>
   *
   * An optional map&lt;string, function&gt; of dependencies which
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved before the controller is instantiated.
   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
   *   and the values of the resolved promises are injected into any controllers that reference them.
   *   If any  of the promises are rejected the $stateChangeError event is fired.
   *
   *   The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <pre>resolve: {
   *     myResolve1:
   *       function($http, $stateParams) {
   *         return $http.get("/api/foos/"+stateParams.fooID);
   *       }
   *     }</pre>
   *
   * @param {string=} stateConfig.url
   * <a id='url'></a>
   *
   *   A url fragment with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
   *   more details on acceptable patterns )
   *
   * examples:
   * <pre>url: "/home"
   * url: "/users/:userid"
   * url: "/books/{bookid:[a-zA-Z_-]}"
   * url: "/books/{categoryid:int}"
   * url: "/books/{publishername:string}/{categoryid:int}"
   * url: "/messages?before&after"
   * url: "/messages?{before:date}&{after:date}"
   * url: "/messages/:mailboxid?{before:date}&{after:date}"
   * </pre>
   *
   * @param {object=} stateConfig.views
   * <a id='views'></a>
   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
   * manually/explicitly.
   *
   * Examples:
   *
   * Targets three named `ui-view`s in the parent state's template
   * <pre>views: {
   *     header: {
   *       controller: "headerCtrl",
   *       templateUrl: "header.html"
   *     }, body: {
   *       controller: "bodyCtrl",
   *       templateUrl: "body.html"
   *     }, footer: {
   *       controller: "footCtrl",
   *       templateUrl: "footer.html"
   *     }
   *   }</pre>
   *
   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
   * <pre>views: {
   *     'header@top': {
   *       controller: "msgHeaderCtrl",
   *       templateUrl: "msgHeader.html"
   *     }, 'body': {
   *       controller: "messagesCtrl",
   *       templateUrl: "messages.html"
   *     }
   *   }</pre>
   *
   * @param {boolean=} [stateConfig.abstract=false]
   * <a id='abstract'></a>
   * An abstract state will never be directly activated,
   *   but can provide inherited properties to its common children states.
   * <pre>abstract: true</pre>
   *
   * @param {function=} stateConfig.onEnter
   * <a id='onEnter'></a>
   *
   * Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explictly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onEnter: function(MyService, $stateParams) {
   *     MyService.foo($stateParams.myParam);
   * }</pre>
   *
   * @param {function=} stateConfig.onExit
   * <a id='onExit'></a>
   *
   * Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   * If minifying your scripts, make sure to explictly annotate this function,
   * because it won't be automatically annotated by your build tools.
   *
   * <pre>onExit: function(MyService, $stateParams) {
   *     MyService.cleanup($stateParams.myParam);
   * }</pre>
   *
   * @param {boolean=} [stateConfig.reloadOnSearch=true]
   * <a id='reloadOnSearch'></a>
   *
   * If `false`, will not retrigger the same state
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   * <pre>reloadOnSearch: false</pre>
   *
   * @param {object=} stateConfig.data
   * <a id='data'></a>
   *
   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
   *   prototypally inherited.  In other words, adding a data property to a state adds it to
   *   the entire subtree via prototypal inheritance.
   *
   * <pre>data: {
   *     requiredRole: 'foo'
   * } </pre>
   *
   * @param {object=} stateConfig.params
   * <a id='params'></a>
   *
   * A map which optionally configures parameters declared in the `url`, or
   *   defines additional non-url parameters.  For each parameter being
   *   configured, add a configuration object keyed to the name of the parameter.
   *
   *   Each parameter configuration object may contain the following properties:
   *
   *   - ** value ** - {object|function=}: specifies the default value for this
   *     parameter.  This implicitly sets this parameter as optional.
   *
   *     When UI-Router routes to a state and no value is
   *     specified for this parameter in the URL or transition, the
   *     default value will be used instead.  If `value` is a function,
   *     it will be injected and invoked, and the return value used.
   *
   *     *Note*: `undefined` is treated as "no default value" while `null`
   *     is treated as "the default value is `null`".
   *
   *     *Shorthand*: If you only need to configure the default value of the
   *     parameter, you may use a shorthand syntax.   In the **`params`**
   *     map, instead mapping the param name to a full parameter configuration
   *     object, simply set map it to the default parameter value, e.g.:
   *
   * <pre>// define a parameter's default value
   * params: {
   *     param1: { value: "defaultValue" }
   * }
   * // shorthand default values
   * params: {
   *     param1: "defaultValue",
   *     param2: "param2Default"
   * }</pre>
   *
   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
   *     treated as an array of values.  If you specified a Type, the value will be
   *     treated as an array of the specified Type.  Note: query parameter values
   *     default to a special `"auto"` mode.
   *
   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
   *     value (e.g.: `{ foo: '1' }`).
   *
   * <pre>params: {
   *     param1: { array: true }
   * }</pre>
   *
   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
   *     configured default squash policy.
   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
   *
   *   There are three squash settings:
   *
   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
   *       This can allow for cleaner looking URLs.
   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
   *
   * <pre>params: {
   *     param1: {
   *       value: "defaultId",
   *       squash: true
   * } }
   * // squash "defaultValue" to "~"
   * params: {
   *     param1: {
   *       value: "defaultValue",
   *       squash: "~"
   * } }
   * </pre>
   *
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   * @requires ui.router.router.$urlRouter
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));

    // Handles the case where a state which is the target of a transition is not found, and the user
    // can optionally retry or defer the transition
    function handleRedirect(redirect, state, params, options) {
      /**
       * @ngdoc event
       * @name ui.router.state.$state#$stateNotFound
       * @eventOf ui.router.state.$state
       * @eventType broadcast on root scope
       * @description
       * Fired when a requested state **cannot be found** using the provided state name during transition.
       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
       *
       * @param {Object} event Event object.
       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
       * @param {State} fromState Current state object.
       * @param {Object} fromParams Current state params.
       *
       * @example
       *
       * <pre>
       * // somewhere, assume lazy.state has not been defined
       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
       *
       * // somewhere else
       * $scope.$on('$stateNotFound',
       * function(event, unfoundState, fromState, fromParams){
       *     console.log(unfoundState.to); // "lazy.state"
       *     console.log(unfoundState.toParams); // {a:1, b:2}
       *     console.log(unfoundState.options); // {inherit:false} + default options
       * })
       * </pre>
       */
      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

      if (evt.defaultPrevented) {
        $urlRouter.update();
        return TransitionAborted;
      }

      if (!evt.retry) {
        return null;
      }

      // Allow the handler to return a promise to defer state lookup retry
      if (options.$retry) {
        $urlRouter.update();
        return TransitionFailed;
      }
      var retryTransition = $state.transition = $q.when(evt.retry);

      retryTransition.then(function() {
        if (retryTransition !== $state.transition) return TransitionSuperseded;
        redirect.options.$retry = true;
        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
      }, function() {
        return TransitionAborted;
      });
      $urlRouter.update();

      return retryTransition;
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };

    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved,
     * controllers reinstantiated, and events re-fired.
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>
     *
     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
     * @example
     * <pre>
     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
     * //and current state is 'contacts.detail.item'
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload 'contact.detail' and 'contact.detail.item' states
     *     $state.reload('contact.detail');
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: true
     * });
     * </pre>

     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.reload = function reload(state) {
      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img src='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *    if String, then will reload the state with the name given in reload, and any children.
     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      // Store the hash param for later (since it will be stripped out by various methods)
      var hash = toParams['#'];

      if (!isDefined(toState)) {
        var redirect = { to: to, toParams: toParams, options: options };
        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

        if (redirectResult) {
          return redirectResult;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);

        if (!isDefined(toState)) {
          if (!options.relative) throw new Error("No such state '" + to + "'");
          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      if (!toState.params.$$validates(toParams)) return TransitionFailed;

      toParams = toState.params.$$values(toParams);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

      if (!options.reload) {
        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      } else if (isString(options.reload) || isObject(options.reload)) {
        if (isObject(options.reload) && !options.reload.name) {
          throw new Error('Invalid reload state object');
        }
        
        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
        if (options.reload && !reloadState) {
          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
        }

        while (state && state === fromPath[keep] && state !== reloadState) {
          locals = toLocals[keep] = state.locals;
          keep++;
          state = toPath[keep];
        }
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change
      // that we've initiated ourselves, because we might accidentally abort a legitimate
      // transition initiated from code?
      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
        if (hash) toParams['#'] = hash;
        $state.params = toParams;
        copy($state.params, $stateParams);
        if (options.location && to.navigable && to.navigable.url) {
          $urlRouter.push(to.navigable.url, toParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
          $urlRouter.update(true);
        }
        $state.transition = null;
        return $q.when($state.current);
      }

      // Filter parameters before we pass them to event handlers etc.
      toParams = filterByKeys(to.params.$$keys(), toParams || {});

      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
          $urlRouter.update();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);

      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l = fromPath.length - 1; l >= keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l = keep; l < toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Re-add the saved hash before we start returning things
        if (hash) toParams['#'] = hash;

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        if (options.location && to.navigable) {
          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
            $$avoidResync: true, replace: options.location === 'replace'
          });
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        $urlRouter.update(true);

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

        if (!evt.defaultPrevented) {
            $urlRouter.update();
        }

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be
     * tested for strict equality against the current active params object, so all params
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * </pre>
     *
     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
     * test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) { return undefined; }
      if ($state.$current !== state) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * Partial and relative names
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     *
     * // Using relative names (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
     * </pre>
     *
     * Basic globbing patterns
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name, relative name, or glob pattern
     * to be searched for within the current state name.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
     * that you'd like to test against the current active state.
     * @param {object=} options An options object.  The options are:
     *
     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
     * .includes will test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    $state.includes = function includes(stateOrName, params, options) {
      options = extend({ relative: $state.$current }, options || {});
      if (isString(stateOrName) && isGlob(stateOrName)) {
        if (!doesStateMatchGlob(stateOrName)) {
          return false;
        }
        stateOrName = $state.$current.name;
      }

      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) { return undefined; }
      if (!isDefined($state.$current.includes[state.name])) { return false; }
      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({
        lossy:    true,
        inherit:  true,
        absolute: false,
        relative: $state.$current
      }, options || {});

      var state = findState(stateOrName, options.relative);

      if (!isDefined(state)) return null;
      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
      
      var nav = (state && options.lossy) ? state.navigable : state;

      if (!nav || nav.url === undefined || nav.url === null) {
        return null;
      }
      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
        absolute: options.absolute
      });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
     * @returns {Object|Array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
      var state = findState(stateOrName, context || $state.$current);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [dst.resolve.then(function (globals) {
        dst.globals = globals;
      })];
      if (inherited) promises.push(inherited);

      function resolveViews() {
        var viewsPromises = [];

        // Resolve template and dependencies for all views.
        forEach(state.views, function (view, name) {
          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
          injectables.$template = [ function () {
            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
          }];

          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
            // References to the controller (only instantiated at link time)
            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
              var injectLocals = angular.extend({}, injectables, dst.globals);
              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
            } else {
              result.$$controller = view.controller;
            }
            // Provide access to the state itself for internal use
            result.$$state = state;
            result.$$controllerAs = view.controllerAs;
            dst[name] = result;
          }));
        });

        return $q.all(viewsPromises).then(function(){
          return dst.globals;
        });
      }

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(resolveViews).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
    // Return true if there are no differences in non-search (path/object) params, false if there are differences
    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
      function notSearchParam(key) {
        return fromAndToState.params[key].location != "search";
      }
      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
      return nonQueryParamSet.$$equals(fromParams, toParams);
    }

    // If reload was not explicitly requested
    // and we're transitioning to the same state we're already in
    // and    the locals didn't change
    //     or they changed in a way that doesn't merit reloading
    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
    // Then return true.
    if (!options.reload && to === from &&
      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .value('$stateParams', {})
  .provider('$state', $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        if (result && options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$viewContentLoading
         * @eventOf ui.router.state.$view
         * @eventType broadcast on root scope
         * @description
         *
         * Fired once the view **begins loading**, *before* the DOM is rendered.
         *
         * @param {Object} event Event object.
         * @param {Object} viewConfig The view config properties (template, controller, etc).
         *
         * @example
         *
         * <pre>
         * $scope.$on('$viewContentLoading',
         * function(event, viewConfig){
         *     // Access to all the view config properties.
         *     // and one special property 'targetView'
         *     // viewConfig.targetView
         * });
         * </pre>
         */
          $rootScope.$broadcast('$viewContentLoading', options);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      return $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} name A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div> 
 * 
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div> 
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * But typically you'll only use the views property if you name your view or have more than one view 
 * in the same template. There's not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre> 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div> 
 * <div ui-view="data"></div> 
 * </pre>
 * 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 */
$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = function() {
      return {
        enter: function (element, target, cb) { target.after(element); cb(); },
        leave: function (element, cb) { element.remove(); cb(); }
      };
    };

    if ($animate) {
      return {
        enter: function(element, target, cb) {
          var promise = $animate.enter(element, null, target, cb);
          if (promise && promise.then) promise.then(cb);
        },
        leave: function(element, cb) {
          var promise = $animate.leave(element, cb);
          if (promise && promise.then) promise.then(cb);
        }
      };
    }

    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics();
  }

  var directive = {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || '',
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope);

        scope.$on('$stateChangeSuccess', function() {
          updateView(false);
        });
        scope.$on('$viewContentLoading', function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          if (previousEl) {
            previousEl.remove();
            previousEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }

          if (currentEl) {
            renderer.leave(currentEl, function() {
              previousEl = null;
            });

            previousEl = currentEl;
            currentEl = null;
          }
        }

        function updateView(firstTime) {
          var newScope,
              name            = getUiViewName(scope, attrs, $element, $interpolate),
              previousLocals  = name && $state.$current && $state.$current.locals[name];

          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
          newScope = scope.$new();
          latestLocals = $state.$current.locals[name];

          var clone = $transclude(newScope, function(clone) {
            renderer.enter(clone, $element, function onUiViewEnter() {
              if(currentScope) {
                currentScope.$emit('$viewContentAnimationEnded');
              }

              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description           *
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           */
          currentScope.$emit('$viewContentLoaded');
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
  return {
    restrict: 'ECA',
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var current = $state.$current,
            name = getUiViewName(scope, attrs, $element, $interpolate),
            locals  = current && current.locals[name];

        if (! locals) {
          return;
        }

        $element.data('$uiView', { name: name, state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          locals.$element = $element;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
          }
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }

        link(scope);
      };
    }
  };
}

/**
 * Shared ui-view code for both directives:
 * Given scope, element, and its attributes, return the view's name
 */
function getUiViewName(scope, attrs, element, $interpolate) {
  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
  var inherited = element.inheritedData('$uiView');
  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);
angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

function parseStateRef(ref, current) {
  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
  if (preparsed) ref = current + '(' + preparsed[1] + ')';
  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
 * URL, the directive will automatically generate & update the `href` attribute via 
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
 * the link will trigger a state transition with optional parameters. 
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative 
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the 
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 * 
 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  var allowedOptions = ['location', 'inherit', 'reload', 'absolute'];

  return {
    restrict: 'A',
    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
    link: function(scope, element, attrs, uiSrefActive) {
      var ref = parseStateRef(attrs.uiSref, $state.current.name);
      var params = null, url = null, base = stateContext(element) || $state.$current;
      // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
      var hrefKind = Object.prototype.toString.call(element.prop('href')) === '[object SVGAnimatedString]' ?
                 'xlink:href' : 'href';
      var newHref = null, isAnchor = element.prop("tagName").toUpperCase() === "A";
      var isForm = element[0].nodeName === "FORM";
      var attr = isForm ? "action" : hrefKind, nav = true;

      var options = { relative: base, inherit: true };
      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

      angular.forEach(allowedOptions, function(option) {
        if (option in optionsOverride) {
          options[option] = optionsOverride[option];
        }
      });

      var update = function(newVal) {
        if (newVal) params = angular.copy(newVal);
        if (!nav) return;

        newHref = $state.href(ref.state, params, options);

        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
        if (activeDirective) {
          activeDirective.$$addStateInfo(ref.state, params);
        }
        if (newHref === null) {
          nav = false;
          return false;
        }
        attrs.$set(attr, newHref);
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
          if (newVal !== params) update(newVal);
        }, true);
        params = angular.copy(scope.$eval(ref.paramExpr));
      }
      update();

      if (isForm) return;

      element.bind("click", function(e) {
        var button = e.which || e.button;
        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
          var transition = $timeout(function() {
            $state.go(ref.state, params, options);
          });
          e.preventDefault();

          // if the state has no URL, ignore one preventDefault from the <a> directive.
          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
          e.preventDefault = function() {
            if (ignorePreventDefaultCount-- <= 0)
              $timeout.cancel(transition);
          };
        }
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
 * ui-sref-active found at the same level or above the ui-sref will be used.
 *
 * Will activate when the ui-sref's target state or any child state is active. If you
 * need to activate only when the ui-sref target state is active and *not* any of
 * it's children, then you will use
 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 *
 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 *
 * The class name is interpolated **once** during the directives link time (any further changes to the
 * interpolated value are ignored).
 *
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 */

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active-eq
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
 * when the exact target state used in the `ui-sref` is active; no child states.
 *
 */
$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateRefActiveDirective($state, $stateParams, $interpolate) {
  return  {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
      var states = [], activeClass;

      // There probably isn't much point in $observing this
      // uiSrefActive and uiSrefActiveEq share the same directive object with some
      // slight difference in logic routing
      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

      // Allow uiSref to communicate with uiSrefActive[Equals]
      this.$$addStateInfo = function (newState, newParams) {
        var state = $state.get(newState, stateContext($element));

        states.push({
          state: state || { name: newState },
          params: newParams
        });

        update();
      };

      $scope.$on('$stateChangeSuccess', update);

      // Update route state
      function update() {
        if (anyMatch()) {
          $element.addClass(activeClass);
        } else {
          $element.removeClass(activeClass);
        }
      }

      function anyMatch() {
        for (var i = 0; i < states.length; i++) {
          if (isMatch(states[i].state, states[i].params)) {
            return true;
          }
        }
        return false;
      }

      function isMatch(state, params) {
        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
          return $state.is(state.name, params);
        } else {
          return $state.includes(state.name, params);
        }
      }
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateRefActiveDirective)
  .directive('uiSrefActiveEq', $StateRefActiveDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  var isFilter = function (state) {
    return $state.is(state);
  };
  isFilter.$stateful = true;
  return isFilter;
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  var includesFilter = function (state) {
    return $state.includes(state);
  };
  includesFilter.$stateful = true;
  return  includesFilter;
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);
})(window, window.angular);
(function() {
    'use strict';

    angular.module('anim-in-out', ['ngAnimate'])
        .animation('.anim-in-out', ['$rootScope', '$timeout', '$window',
            function($rootScope, $timeout, $window) {
                return {
                    enter: function(element, done) {
                        var sync = $rootScope.$eval(angular.element(element).attr('data-anim-sync')) !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-sync')) : false,
                            speed = angular.element(element).attr('data-anim-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-speed')) : 1000,
                            inSpeed = angular.element(element).attr('data-anim-in-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-in-speed')) : speed,
                            outSpeed = angular.element(element).attr('data-anim-out-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-out-speed')) : speed;

                        try {
                            var observer = new MutationObserver(function(mutations) {
                                observer.disconnect();

                                $window.requestAnimationFrame(function() {
                                    $timeout(done, sync ? 0 : outSpeed);
                                });
                            });

                            observer.observe(element[0], {
                                attributes: true,
                                childList: false,
                                characterData: false
                            });

                        } catch (e) {
                            $timeout(done, Math.max(100, sync ? 0 : outSpeed));
                        }

                        angular.element(element).addClass('anim-in-setup');

                        return function(cancelled) {
                            angular.element(element).removeClass('anim-in-setup');
                            angular.element(element).addClass('anim-in');

                            if (!cancelled) {
                                if (angular.element(element).children().length > 0 && angular.element(element).children().scope() !== undefined) {
                                    angular.element(element).children().scope().$broadcast('animIn', element, inSpeed);
                                }

                                $timeout(function() {
                                    $rootScope.$emit('animEnd', element, inSpeed);

                                    angular.element(element).removeClass('anim-in');
                                }, inSpeed);
                            }
                        };
                    },
                    leave: function(element, done) {
                        var speed = angular.element(element).attr('data-anim-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-speed')) : 1000,
                            outSpeed = angular.element(element).attr('data-anim-out-speed') !== undefined ? $rootScope.$eval(angular.element(element).attr('data-anim-out-speed')) : speed;

                        $rootScope.$emit('animStart', element, outSpeed);

                        if (angular.element(element).children().length > 0) {
                            angular.element(element).children().scope().$broadcast('animOut', element, outSpeed);
                        }

                        try {
                            var observer = new MutationObserver(function(mutations) {
                                observer.disconnect();

                                $window.requestAnimationFrame(function() {
                                    angular.element(element).removeClass('anim-out-setup');
                                    angular.element(element).addClass('anim-out');

                                    $timeout(done, outSpeed);
                                });
                            });

                            observer.observe(element[0], {
                                attributes: true,
                                childList: false,
                                characterData: false
                            });

                        } catch(e) {
                            angular.element(element).removeClass('anim-out-setup');
                            angular.element(element).addClass('anim-out');

                            $timeout(done, Math.max(100, outSpeed));
                        }

                        angular.element(element).addClass('anim-out-setup');
                    }
                };
            }
        ]);

})();

/*! 
 * angular-loading-bar v0.8.0
 * https://chieffancypants.github.io/angular-loading-bar
 * Copyright (c) 2015 Wes Cruver
 * License: MIT
 */
/*
 * angular-loading-bar
 *
 * intercepts XHR requests and creates a loading bar.
 * Based on the excellent nprogress work by rstacruz (more info in readme)
 *
 * (c) 2013 Wes Cruver
 * License: MIT
 */


(function() {

'use strict';

// Alias the loading bar for various backwards compatibilities since the project has matured:
angular.module('angular-loading-bar', ['cfp.loadingBarInterceptor']);
angular.module('chieffancypants.loadingBar', ['cfp.loadingBarInterceptor']);


/**
 * loadingBarInterceptor service
 *
 * Registers itself as an Angular interceptor and listens for XHR requests.
 */
angular.module('cfp.loadingBarInterceptor', ['cfp.loadingBar'])
  .config(['$httpProvider', function ($httpProvider) {

    var interceptor = ['$q', '$cacheFactory', '$timeout', '$rootScope', '$log', 'cfpLoadingBar', function ($q, $cacheFactory, $timeout, $rootScope, $log, cfpLoadingBar) {

      /**
       * The total number of requests made
       */
      var reqsTotal = 0;

      /**
       * The number of requests completed (either successfully or not)
       */
      var reqsCompleted = 0;

      /**
       * The amount of time spent fetching before showing the loading bar
       */
      var latencyThreshold = cfpLoadingBar.latencyThreshold;

      /**
       * $timeout handle for latencyThreshold
       */
      var startTimeout;


      /**
       * calls cfpLoadingBar.complete() which removes the
       * loading bar from the DOM.
       */
      function setComplete() {
        $timeout.cancel(startTimeout);
        cfpLoadingBar.complete();
        reqsCompleted = 0;
        reqsTotal = 0;
      }

      /**
       * Determine if the response has already been cached
       * @param  {Object}  config the config option from the request
       * @return {Boolean} retrns true if cached, otherwise false
       */
      function isCached(config) {
        var cache;
        var defaultCache = $cacheFactory.get('$http');
        var defaults = $httpProvider.defaults;

        // Choose the proper cache source. Borrowed from angular: $http service
        if ((config.cache || defaults.cache) && config.cache !== false &&
          (config.method === 'GET' || config.method === 'JSONP')) {
            cache = angular.isObject(config.cache) ? config.cache
              : angular.isObject(defaults.cache) ? defaults.cache
              : defaultCache;
        }

        var cached = cache !== undefined ?
          cache.get(config.url) !== undefined : false;

        if (config.cached !== undefined && cached !== config.cached) {
          return config.cached;
        }
        config.cached = cached;
        return cached;
      }


      return {
        'request': function(config) {
          // Check to make sure this request hasn't already been cached and that
          // the requester didn't explicitly ask us to ignore this request:
          if (!config.ignoreLoadingBar && !isCached(config)) {
            $rootScope.$broadcast('cfpLoadingBar:loading', {url: config.url});
            if (reqsTotal === 0) {
              startTimeout = $timeout(function() {
                cfpLoadingBar.start();
              }, latencyThreshold);
            }
            reqsTotal++;
            cfpLoadingBar.set(reqsCompleted / reqsTotal);
          }
          return config;
        },

        'response': function(response) {
          if (!response || !response.config) {
            $log.error('Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50');
            return response;
          }

          if (!response.config.ignoreLoadingBar && !isCached(response.config)) {
            reqsCompleted++;
            $rootScope.$broadcast('cfpLoadingBar:loaded', {url: response.config.url, result: response});
            if (reqsCompleted >= reqsTotal) {
              setComplete();
            } else {
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
          }
          return response;
        },

        'responseError': function(rejection) {
          if (!rejection || !rejection.config) {
            $log.error('Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50');
            return $q.reject(rejection);
          }

          if (!rejection.config.ignoreLoadingBar && !isCached(rejection.config)) {
            reqsCompleted++;
            $rootScope.$broadcast('cfpLoadingBar:loaded', {url: rejection.config.url, result: rejection});
            if (reqsCompleted >= reqsTotal) {
              setComplete();
            } else {
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
          }
          return $q.reject(rejection);
        }
      };
    }];

    $httpProvider.interceptors.push(interceptor);
  }]);


/**
 * Loading Bar
 *
 * This service handles adding and removing the actual element in the DOM.
 * Generally, best practices for DOM manipulation is to take place in a
 * directive, but because the element itself is injected in the DOM only upon
 * XHR requests, and it's likely needed on every view, the best option is to
 * use a service.
 */
angular.module('cfp.loadingBar', [])
  .provider('cfpLoadingBar', function() {

    this.autoIncrement = true;
    this.includeSpinner = true;
    this.includeBar = true;
    this.latencyThreshold = 100;
    this.startSize = 0.02;
    this.parentSelector = 'body';
    this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
    this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';

    this.$get = ['$injector', '$document', '$timeout', '$rootScope', function ($injector, $document, $timeout, $rootScope) {
      var $animate;
      var $parentSelector = this.parentSelector,
        loadingBarContainer = angular.element(this.loadingBarTemplate),
        loadingBar = loadingBarContainer.find('div').eq(0),
        spinner = angular.element(this.spinnerTemplate);

      var incTimeout,
        completeTimeout,
        started = false,
        status = 0;

      var autoIncrement = this.autoIncrement;
      var includeSpinner = this.includeSpinner;
      var includeBar = this.includeBar;
      var startSize = this.startSize;

      /**
       * Inserts the loading bar element into the dom, and sets it to 2%
       */
      function _start() {
        if (!$animate) {
          $animate = $injector.get('$animate');
        }

        var $parent = $document.find($parentSelector).eq(0);
        $timeout.cancel(completeTimeout);

        // do not continually broadcast the started event:
        if (started) {
          return;
        }

        $rootScope.$broadcast('cfpLoadingBar:started');
        started = true;

        if (includeBar) {
          $animate.enter(loadingBarContainer, $parent, angular.element($parent[0].lastChild));
        }

        if (includeSpinner) {
          $animate.enter(spinner, $parent, angular.element($parent[0].lastChild));
        }

        _set(startSize);
      }

      /**
       * Set the loading bar's width to a certain percent.
       *
       * @param n any value between 0 and 1
       */
      function _set(n) {
        if (!started) {
          return;
        }
        var pct = (n * 100) + '%';
        loadingBar.css('width', pct);
        status = n;

        // increment loadingbar to give the illusion that there is always
        // progress but make sure to cancel the previous timeouts so we don't
        // have multiple incs running at the same time.
        if (autoIncrement) {
          $timeout.cancel(incTimeout);
          incTimeout = $timeout(function() {
            _inc();
          }, 250);
        }
      }

      /**
       * Increments the loading bar by a random amount
       * but slows down as it progresses
       */
      function _inc() {
        if (_status() >= 1) {
          return;
        }

        var rnd = 0;

        // TODO: do this mathmatically instead of through conditions

        var stat = _status();
        if (stat >= 0 && stat < 0.25) {
          // Start out between 3 - 6% increments
          rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (stat >= 0.25 && stat < 0.65) {
          // increment between 0 - 3%
          rnd = (Math.random() * 3) / 100;
        } else if (stat >= 0.65 && stat < 0.9) {
          // increment between 0 - 2%
          rnd = (Math.random() * 2) / 100;
        } else if (stat >= 0.9 && stat < 0.99) {
          // finally, increment it .5 %
          rnd = 0.005;
        } else {
          // after 99%, don't increment:
          rnd = 0;
        }

        var pct = _status() + rnd;
        _set(pct);
      }

      function _status() {
        return status;
      }

      function _completeAnimation() {
        status = 0;
        started = false;
      }

      function _complete() {
        if (!$animate) {
          $animate = $injector.get('$animate');
        }

        $rootScope.$broadcast('cfpLoadingBar:completed');
        _set(1);

        $timeout.cancel(completeTimeout);

        // Attempt to aggregate any start/complete calls within 500ms:
        completeTimeout = $timeout(function() {
          var promise = $animate.leave(loadingBarContainer, _completeAnimation);
          if (promise && promise.then) {
            promise.then(_completeAnimation);
          }
          $animate.leave(spinner);
        }, 500);
      }

      return {
        start            : _start,
        set              : _set,
        status           : _status,
        inc              : _inc,
        complete         : _complete,
        autoIncrement    : this.autoIncrement,
        includeSpinner   : this.includeSpinner,
        latencyThreshold : this.latencyThreshold,
        parentSelector   : this.parentSelector,
        startSize        : this.startSize
      };


    }];     //
  });       // wtf javascript. srsly
})();       //
