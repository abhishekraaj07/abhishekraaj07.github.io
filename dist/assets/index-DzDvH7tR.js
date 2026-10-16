(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Tv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cp={exports:{}},cl={},Rp={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo=Symbol.for("react.element"),Av=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),bv=Symbol.for("react.profiler"),Pv=Symbol.for("react.provider"),Lv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Dv=Symbol.for("react.suspense"),Uv=Symbol.for("react.memo"),Iv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function Fv(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pp=Object.assign,Lp={};function xs(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||bp}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Np(){}Np.prototype=xs.prototype;function Gu(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||bp}var Wu=Gu.prototype=new Np;Wu.constructor=Gu;Pp(Wu,xs.prototype);Wu.isPureReactComponent=!0;var Zd=Array.isArray,Dp=Object.prototype.hasOwnProperty,ju={current:null},Up={key:!0,ref:!0,__self:!0,__source:!0};function Ip(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dp.call(e,i)&&!Up.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:vo,type:t,key:s,ref:o,props:r,_owner:ju.current}}function Ov(t,e){return{$$typeof:vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xu(t){return typeof t=="object"&&t!==null&&t.$$typeof===vo}function kv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qd=/\/+/g;function Il(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kv(""+t.key):e.toString(36)}function _a(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vo:case Av:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Il(o,0):i,Zd(r)?(n="",t!=null&&(n=t.replace(Qd,"$&/")+"/"),_a(r,e,n,"",function(c){return c})):r!=null&&(Xu(r)&&(r=Ov(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Il(s,a);o+=_a(s,e,n,l,r)}else if(l=Fv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Il(s,a++),o+=_a(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Po(t,e,n){if(t==null)return t;var i=[],r=0;return _a(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},xa={transition:null},Bv={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:xa,ReactCurrentOwner:ju};function Fp(){throw Error("act(...) is not supported in production builds of React.")}Ie.Children={map:Po,forEach:function(t,e,n){Po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Po(t,function(){e++}),e},toArray:function(t){return Po(t,function(e){return e})||[]},only:function(t){if(!Xu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ie.Component=xs;Ie.Fragment=Cv;Ie.Profiler=bv;Ie.PureComponent=Gu;Ie.StrictMode=Rv;Ie.Suspense=Dv;Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;Ie.act=Fp;Ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Pp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ju.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dp.call(e,l)&&!Up.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:vo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ie.createContext=function(t){return t={$$typeof:Lv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pv,_context:t},t.Consumer=t};Ie.createElement=Ip;Ie.createFactory=function(t){var e=Ip.bind(null,t);return e.type=t,e};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(t){return{$$typeof:Nv,render:t}};Ie.isValidElement=Xu;Ie.lazy=function(t){return{$$typeof:Iv,_payload:{_status:-1,_result:t},_init:zv}};Ie.memo=function(t,e){return{$$typeof:Uv,type:t,compare:e===void 0?null:e}};Ie.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};Ie.unstable_act=Fp;Ie.useCallback=function(t,e){return Ht.current.useCallback(t,e)};Ie.useContext=function(t){return Ht.current.useContext(t)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};Ie.useEffect=function(t,e){return Ht.current.useEffect(t,e)};Ie.useId=function(){return Ht.current.useId()};Ie.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};Ie.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};Ie.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};Ie.useMemo=function(t,e){return Ht.current.useMemo(t,e)};Ie.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};Ie.useRef=function(t){return Ht.current.useRef(t)};Ie.useState=function(t){return Ht.current.useState(t)};Ie.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};Ie.useTransition=function(){return Ht.current.useTransition()};Ie.version="18.3.1";Rp.exports=Ie;var dt=Rp.exports;const Hv=Tv(dt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=dt,Gv=Symbol.for("react.element"),Wv=Symbol.for("react.fragment"),jv=Object.prototype.hasOwnProperty,Xv=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yv={key:!0,ref:!0,__self:!0,__source:!0};function Op(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jv.call(e,i)&&!Yv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gv,type:t,key:s,ref:o,props:r,_owner:Xv.current}}cl.Fragment=Wv;cl.jsx=Op;cl.jsxs=Op;Cp.exports=cl;var L=Cp.exports,Bc={},kp={exports:{}},ln={},zp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,W){var j=N.length;N.push(W);e:for(;0<j;){var ie=j-1>>>1,me=N[ie];if(0<r(me,W))N[ie]=W,N[j]=me,j=ie;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var W=N[0],j=N.pop();if(j!==W){N[0]=j;e:for(var ie=0,me=N.length,Ve=me>>>1;ie<Ve;){var G=2*(ie+1)-1,te=N[G],ce=G+1,ae=N[ce];if(0>r(te,j))ce<me&&0>r(ae,te)?(N[ie]=ae,N[ce]=j,ie=ce):(N[ie]=te,N[G]=j,ie=G);else if(ce<me&&0>r(ae,j))N[ie]=ae,N[ce]=j,ie=ce;else break e}}return W}function r(N,W){var j=N.sortIndex-W.sortIndex;return j!==0?j:N.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,x=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=N)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(N){if(y=!1,p(N),!x)if(n(l)!==null)x=!0,J(b);else{var W=n(c);W!==null&&Q(M,W.startTime-N)}}function b(N,W){x=!1,y&&(y=!1,u(P),P=-1),g=!0;var j=f;try{for(p(W),h=n(l);h!==null&&(!(h.expirationTime>W)||N&&!U());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var me=ie(h.expirationTime<=W);W=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),p(W)}else i(l);h=n(l)}if(h!==null)var Ve=!0;else{var G=n(c);G!==null&&Q(M,G.startTime-W),Ve=!1}return Ve}finally{h=null,f=j,g=!1}}var A=!1,T=null,P=-1,E=5,_=-1;function U(){return!(t.unstable_now()-_<E)}function H(){if(T!==null){var N=t.unstable_now();_=N;var W=!0;try{W=T(!0,N)}finally{W?D():(A=!1,T=null)}}else A=!1}var D;if(typeof v=="function")D=function(){v(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=H,D=function(){X.postMessage(null)}}else D=function(){m(H,0)};function J(N){T=N,A||(A=!0,D())}function Q(N,W){P=m(function(){N(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,J(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var j=f;f=W;try{return N()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=f;f=N;try{return W()}finally{f=j}},t.unstable_scheduleCallback=function(N,W,j){var ie=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,N){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=j+me,N={id:d++,callback:W,priorityLevel:N,startTime:j,expirationTime:me,sortIndex:-1},j>ie?(N.sortIndex=j,e(c,N),n(l)===null&&N===n(c)&&(y?(u(P),P=-1):y=!0,Q(M,j-ie))):(N.sortIndex=me,e(l,N),x||g||(x=!0,J(b))),N},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(N){var W=f;return function(){var j=f;f=W;try{return N.apply(this,arguments)}finally{f=j}}}})(Bp);zp.exports=Bp;var qv=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=dt,an=qv;function Z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hp=new Set,Qs={};function yr(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(Qs[t]=e,t=0;t<e.length;t++)Hp.add(e[t])}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jd={},ef={};function Zv(t){return Hc.call(ef,t)?!0:Hc.call(Jd,t)?!1:Kv.test(t)?ef[t]=!0:(Jd[t]=!0,!1)}function Qv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jv(t,e,n,i){if(e===null||typeof e>"u"||Qv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){bt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];bt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){bt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){bt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){bt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){bt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){bt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){bt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){bt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yu=/[\-:]([a-z])/g;function qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yu,qu);bt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yu,qu);bt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yu,qu);bt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){bt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){bt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jv(e,n,r,i)&&(n=null),i||r===null?Zv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var di=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),Zu=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Wc=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),Wp=Symbol.for("react.offscreen"),tf=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=tf&&t[tf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,Fl;function ks(t){if(Fl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fl=e&&e[1]||""}return`
`+Fl+t}var Ol=!1;function kl(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ks(t):""}function e_(t){switch(t.tag){case 5:return ks(t.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return t=kl(t.type,!1),t;case 11:return t=kl(t.type.render,!1),t;case 1:return t=kl(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hr:return"Fragment";case Br:return"Portal";case Vc:return"Profiler";case Ku:return"StrictMode";case Gc:return"Suspense";case Wc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gp:return(t.displayName||"Context")+".Consumer";case Vp:return(t._context.displayName||"Context")+".Provider";case Zu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qu:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case yi:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function t_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n_(t){var e=jp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=n_(t))}function Xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jp(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function La(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yp(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function Yc(t,e){Yp(t,e);var n=zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||La(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var zs=Array.isArray;function Jr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Z(92));if(zs(n)){if(1<n.length)throw Error(Z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zi(n)}}function qp(t,e){var n=zi(e.value),i=zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function of(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $p(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$p(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,Kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){i_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Zp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function Qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Zp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var r_=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(t,e){if(e){if(r_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Qc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eu=null,es=null,ts=null;function af(t){if(t=yo(t)){if(typeof eu!="function")throw Error(Z(280));var e=t.stateNode;e&&(e=pl(e),eu(t.stateNode,t.type,e))}}function Jp(t){es?ts?ts.push(t):ts=[t]:es=t}function em(){if(es){var t=es,e=ts;if(ts=es=null,af(t),e)for(t=0;t<e.length;t++)af(e[t])}}function tm(t,e){return t(e)}function nm(){}var zl=!1;function im(t,e,n){if(zl)return t(e,n);zl=!0;try{return tm(t,e,n)}finally{zl=!1,(es!==null||ts!==null)&&(nm(),em())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var i=pl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Z(231,e,typeof n));return n}var tu=!1;if(oi)try{var As={};Object.defineProperty(As,"passive",{get:function(){tu=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{tu=!1}function s_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ws=!1,Na=null,Da=!1,nu=null,o_={onError:function(t){Ws=!0,Na=t}};function a_(t,e,n,i,r,s,o,a,l){Ws=!1,Na=null,s_.apply(o_,arguments)}function l_(t,e,n,i,r,s,o,a,l){if(a_.apply(this,arguments),Ws){if(Ws){var c=Na;Ws=!1,Na=null}else throw Error(Z(198));Da||(Da=!0,nu=c)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lf(t){if(Sr(t)!==t)throw Error(Z(188))}function c_(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(Z(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return lf(r),t;if(s===i)return lf(r),e;s=s.sibling}throw Error(Z(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(n.alternate!==i)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?t:e}function sm(t){return t=c_(t),t!==null?om(t):null}function om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=om(t);if(e!==null)return e;t=t.sibling}return null}var am=an.unstable_scheduleCallback,cf=an.unstable_cancelCallback,u_=an.unstable_shouldYield,d_=an.unstable_requestPaint,ht=an.unstable_now,f_=an.unstable_getCurrentPriorityLevel,ed=an.unstable_ImmediatePriority,lm=an.unstable_UserBlockingPriority,Ua=an.unstable_NormalPriority,h_=an.unstable_LowPriority,cm=an.unstable_IdlePriority,ul=null,Vn=null;function p_(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(ul,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:v_,m_=Math.log,g_=Math.LN2;function v_(t){return t>>>=0,t===0?32:31-(m_(t)/g_|0)|0}var Uo=64,Io=4194304;function Bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bs(a):(s&=o,s!==0&&(i=Bs(s)))}else o=n&~r,o!==0?i=Bs(o):s!==0&&(i=Bs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bn(e),r=1<<n,i|=t[n],e&=~r;return i}function __(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=__(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function um(){var t=Uo;return Uo<<=1,!(Uo&4194240)&&(Uo=64),t}function Bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Xe=0;function dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fm,nd,hm,pm,mm,ru=!1,Fo=[],Ri=null,bi=null,Pi=null,to=new Map,no=new Map,Mi=[],S_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uf(t,e){switch(t){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Pi=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function Cs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=yo(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M_(t,e,n,i,r){switch(e){case"focusin":return Ri=Cs(Ri,t,e,n,i,r),!0;case"dragenter":return bi=Cs(bi,t,e,n,i,r),!0;case"mouseover":return Pi=Cs(Pi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return to.set(s,Cs(to.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,no.set(s,Cs(no.get(s)||null,t,e,n,i,r)),!0}return!1}function gm(t){var e=ar(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=rm(n),e!==null){t.blockedOn=e,mm(t.priority,function(){hm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=su(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jc=i,n.target.dispatchEvent(i),Jc=null}else return e=yo(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function df(t,e,n){ya(t)&&n.delete(e)}function E_(){ru=!1,Ri!==null&&ya(Ri)&&(Ri=null),bi!==null&&ya(bi)&&(bi=null),Pi!==null&&ya(Pi)&&(Pi=null),to.forEach(df),no.forEach(df)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,E_)))}function io(t){function e(r){return Rs(r,t)}if(0<Fo.length){Rs(Fo[0],t);for(var n=1;n<Fo.length;n++){var i=Fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ri!==null&&Rs(Ri,t),bi!==null&&Rs(bi,t),Pi!==null&&Rs(Pi,t),to.forEach(e),no.forEach(e),n=0;n<Mi.length;n++)i=Mi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&Mi.shift()}var ns=di.ReactCurrentBatchConfig,Fa=!0;function w_(t,e,n,i){var r=Xe,s=ns.transition;ns.transition=null;try{Xe=1,id(t,e,n,i)}finally{Xe=r,ns.transition=s}}function T_(t,e,n,i){var r=Xe,s=ns.transition;ns.transition=null;try{Xe=4,id(t,e,n,i)}finally{Xe=r,ns.transition=s}}function id(t,e,n,i){if(Fa){var r=su(t,e,n,i);if(r===null)Kl(t,e,i,Oa,n),uf(t,i);else if(M_(r,t,e,n,i))i.stopPropagation();else if(uf(t,i),e&4&&-1<S_.indexOf(t)){for(;r!==null;){var s=yo(r);if(s!==null&&fm(s),s=su(t,e,n,i),s===null&&Kl(t,e,i,Oa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kl(t,e,i,null,n)}}var Oa=null;function su(t,e,n,i){if(Oa=null,t=Ju(i),t=ar(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oa=t,null}function vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f_()){case ed:return 1;case lm:return 4;case Ua:case h_:return 16;case cm:return 536870912;default:return 16}default:return 16}}var Ti=null,rd=null,Sa=null;function _m(){if(Sa)return Sa;var t,e=rd,n=e.length,i,r="value"in Ti?Ti.value:Ti.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Sa=r.slice(t,1<i?1-i:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function ff(){return!1}function cn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:ff,this.isPropagationStopped=ff,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=cn(ys),xo=ct({},ys,{view:0,detail:0}),A_=cn(xo),Hl,Vl,bs,dl=ct({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Hl=t.screenX-bs.screenX,Vl=t.screenY-bs.screenY):Vl=Hl=0,bs=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Vl}}),hf=cn(dl),C_=ct({},dl,{dataTransfer:0}),R_=cn(C_),b_=ct({},xo,{relatedTarget:0}),Gl=cn(b_),P_=ct({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=cn(P_),N_=ct({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D_=cn(N_),U_=ct({},ys,{data:0}),pf=cn(U_),I_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O_[t])?!!e[t]:!1}function od(){return k_}var z_=ct({},xo,{key:function(t){if(t.key){var e=I_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=cn(z_),H_=ct({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=cn(H_),V_=ct({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),G_=cn(V_),W_=ct({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=cn(W_),X_=ct({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=cn(X_),q_=[9,13,27,32],ad=oi&&"CompositionEvent"in window,js=null;oi&&"documentMode"in document&&(js=document.documentMode);var $_=oi&&"TextEvent"in window&&!js,xm=oi&&(!ad||js&&8<js&&11>=js),gf=" ",vf=!1;function ym(t,e){switch(t){case"keyup":return q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vr=!1;function K_(t,e){switch(t){case"compositionend":return Sm(e);case"keypress":return e.which!==32?null:(vf=!0,gf);case"textInput":return t=e.data,t===gf&&vf?null:t;default:return null}}function Z_(t,e){if(Vr)return t==="compositionend"||!ad&&ym(t,e)?(t=_m(),Sa=rd=Ti=null,Vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xm&&e.locale!=="ko"?null:e.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q_[t.type]:e==="textarea"}function Mm(t,e,n,i){Jp(i),e=ka(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xs=null,ro=null;function J_(t){Dm(t,0)}function fl(t){var e=jr(t);if(Xp(e))return t}function e0(t,e){if(t==="change")return e}var Em=!1;if(oi){var Wl;if(oi){var jl="oninput"in document;if(!jl){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),jl=typeof xf.oninput=="function"}Wl=jl}else Wl=!1;Em=Wl&&(!document.documentMode||9<document.documentMode)}function yf(){Xs&&(Xs.detachEvent("onpropertychange",wm),ro=Xs=null)}function wm(t){if(t.propertyName==="value"&&fl(ro)){var e=[];Mm(e,ro,t,Ju(t)),im(J_,e)}}function t0(t,e,n){t==="focusin"?(yf(),Xs=e,ro=n,Xs.attachEvent("onpropertychange",wm)):t==="focusout"&&yf()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(ro)}function i0(t,e){if(t==="click")return fl(e)}function r0(t,e){if(t==="input"||t==="change")return fl(e)}function s0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:s0;function so(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Hc.call(e,r)||!Nn(t[r],e[r]))return!1}return!0}function Sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mf(t,e){var n=Sf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function Tm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Am(){for(var t=window,e=La();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=La(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o0(t){var e=Am(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tm(n.ownerDocument.documentElement,n)){if(i!==null&&ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Mf(n,s);var o=Mf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a0=oi&&"documentMode"in document&&11>=document.documentMode,Gr=null,ou=null,Ys=null,au=!1;function Ef(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;au||Gr==null||Gr!==La(i)||(i=Gr,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ys&&so(Ys,i)||(Ys=i,i=ka(ou,"onSelect"),0<i.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gr)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wr={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},Xl={},Cm={};oi&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function hl(t){if(Xl[t])return Xl[t];if(!Wr[t])return t;var e=Wr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cm)return Xl[t]=e[n];return t}var Rm=hl("animationend"),bm=hl("animationiteration"),Pm=hl("animationstart"),Lm=hl("transitionend"),Nm=new Map,wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gi(t,e){Nm.set(t,e),yr(e,[t])}for(var Yl=0;Yl<wf.length;Yl++){var ql=wf[Yl],l0=ql.toLowerCase(),c0=ql[0].toUpperCase()+ql.slice(1);Gi(l0,"on"+c0)}Gi(Rm,"onAnimationEnd");Gi(bm,"onAnimationIteration");Gi(Pm,"onAnimationStart");Gi("dblclick","onDoubleClick");Gi("focusin","onFocus");Gi("focusout","onBlur");Gi(Lm,"onTransitionEnd");ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));function Tf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,l_(i,e,void 0,t),t.currentTarget=null}function Dm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Tf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Tf(r,a,c),s=l}}}if(Da)throw t=nu,Da=!1,nu=null,t}function Qe(t,e){var n=e[fu];n===void 0&&(n=e[fu]=new Set);var i=t+"__bubble";n.has(i)||(Um(e,t,2,!1),n.add(i))}function $l(t,e,n){var i=0;e&&(i|=4),Um(n,t,i,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[zo]){t[zo]=!0,Hp.forEach(function(n){n!=="selectionchange"&&(u0.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,$l("selectionchange",!1,e))}}function Um(t,e,n,i){switch(vm(e)){case 1:var r=w_;break;case 4:r=T_;break;default:r=id}n=r.bind(null,e,n,t),r=void 0,!tu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Kl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}im(function(){var c=s,d=Ju(n),h=[];e:{var f=Nm.get(t);if(f!==void 0){var g=sd,x=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":g=B_;break;case"focusin":x="focus",g=Gl;break;case"focusout":x="blur",g=Gl;break;case"beforeblur":case"afterblur":g=Gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=G_;break;case Rm:case bm:case Pm:g=L_;break;case Lm:g=j_;break;case"scroll":g=A_;break;case"wheel":g=Y_;break;case"copy":case"cut":case"paste":g=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=mf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,p;v!==null;){p=v;var M=p.stateNode;if(p.tag===5&&M!==null&&(p=M,u!==null&&(M=eo(v,u),M!=null&&y.push(ao(v,M,p)))),m)break;v=v.return}0<y.length&&(f=new g(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Jc&&(x=n.relatedTarget||n.fromElement)&&(ar(x)||x[ai]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=c,x=x?ar(x):null,x!==null&&(m=Sr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=c),g!==x)){if(y=hf,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=mf,M="onPointerLeave",u="onPointerEnter",v="pointer"),m=g==null?f:jr(g),p=x==null?f:jr(x),f=new y(M,v+"leave",g,n,d),f.target=m,f.relatedTarget=p,M=null,ar(d)===c&&(y=new y(u,v+"enter",x,n,d),y.target=p,y.relatedTarget=m,M=y),m=M,g&&x)t:{for(y=g,u=x,v=0,p=y;p;p=Mr(p))v++;for(p=0,M=u;M;M=Mr(M))p++;for(;0<v-p;)y=Mr(y),v--;for(;0<p-v;)u=Mr(u),p--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Mr(y),u=Mr(u)}y=null}else y=null;g!==null&&Af(h,f,g,y,!1),x!==null&&m!==null&&Af(h,m,x,y,!0)}}e:{if(f=c?jr(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=e0;else if(_f(f))if(Em)b=r0;else{b=n0;var A=t0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=i0);if(b&&(b=b(t,c))){Mm(h,b,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&qc(f,"number",f.value)}switch(A=c?jr(c):window,t){case"focusin":(_f(A)||A.contentEditable==="true")&&(Gr=A,ou=c,Ys=null);break;case"focusout":Ys=ou=Gr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Ef(h,n,d);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Ef(h,n,d)}var T;if(ad)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Vr?ym(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(xm&&n.locale!=="ko"&&(Vr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Vr&&(T=_m()):(Ti=d,rd="value"in Ti?Ti.value:Ti.textContent,Vr=!0)),A=ka(c,P),0<A.length&&(P=new pf(P,t,null,n,d),h.push({event:P,listeners:A}),T?P.data=T:(T=Sm(n),T!==null&&(P.data=T)))),(T=$_?K_(t,n):Z_(t,n))&&(c=ka(c,"onBeforeInput"),0<c.length&&(d=new pf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}Dm(h,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=eo(t,n),s!=null&&i.unshift(ao(t,s,r)),s=eo(t,e),s!=null&&i.push(ao(t,s,r))),t=t.return}return i}function Mr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Af(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=eo(n,s),l!=null&&o.unshift(ao(n,l,a))):r||(l=eo(n,s),l!=null&&o.push(ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var d0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function Cf(t){return(typeof t=="string"?t:""+t).replace(d0,`
`).replace(f0,"")}function Bo(t,e,n){if(e=Cf(e),Cf(t)!==e&&n)throw Error(Z(425))}function za(){}var lu=null,cu=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(t){return Rf.resolve(null).then(t).catch(m0)}:du;function m0(t){setTimeout(function(){throw t})}function Zl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),io(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);io(e)}function Li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),zn="__reactFiber$"+Ss,lo="__reactProps$"+Ss,ai="__reactContainer$"+Ss,fu="__reactEvents$"+Ss,g0="__reactListeners$"+Ss,v0="__reactHandles$"+Ss;function ar(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bf(t);t!==null;){if(n=t[zn])return n;t=bf(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[zn]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Z(33))}function pl(t){return t[lo]||null}var hu=[],Xr=-1;function Wi(t){return{current:t}}function et(t){0>Xr||(t.current=hu[Xr],hu[Xr]=null,Xr--)}function Ke(t,e){Xr++,hu[Xr]=t.current,t.current=e}var Bi={},Ot=Wi(Bi),Yt=Wi(!1),pr=Bi;function cs(t,e){var n=t.type.contextTypes;if(!n)return Bi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qt(t){return t=t.childContextTypes,t!=null}function Ba(){et(Yt),et(Ot)}function Pf(t,e,n){if(Ot.current!==Bi)throw Error(Z(168));Ke(Ot,e),Ke(Yt,n)}function Im(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,t_(t)||"Unknown",r));return ct({},n,i)}function Ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bi,pr=Ot.current,Ke(Ot,t),Ke(Yt,Yt.current),!0}function Lf(t,e,n){var i=t.stateNode;if(!i)throw Error(Z(169));n?(t=Im(t,e,pr),i.__reactInternalMemoizedMergedChildContext=t,et(Yt),et(Ot),Ke(Ot,t)):et(Yt),Ke(Yt,n)}var ei=null,ml=!1,Ql=!1;function Fm(t){ei===null?ei=[t]:ei.push(t)}function _0(t){ml=!0,Fm(t)}function ji(){if(!Ql&&ei!==null){Ql=!0;var t=0,e=Xe;try{var n=ei;for(Xe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ei=null,ml=!1}catch(r){throw ei!==null&&(ei=ei.slice(t+1)),am(ed,ji),r}finally{Xe=e,Ql=!1}}return null}var Yr=[],qr=0,Va=null,Ga=0,fn=[],hn=0,mr=null,ni=1,ii="";function tr(t,e){Yr[qr++]=Ga,Yr[qr++]=Va,Va=t,Ga=e}function Om(t,e,n){fn[hn++]=ni,fn[hn++]=ii,fn[hn++]=mr,mr=t;var i=ni;t=ii;var r=32-bn(i)-1;i&=~(1<<r),n+=1;var s=32-bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ni=1<<32-bn(e)+r|n<<r|i,ii=s+t}else ni=1<<s|n<<r|i,ii=t}function cd(t){t.return!==null&&(tr(t,1),Om(t,1,0))}function ud(t){for(;t===Va;)Va=Yr[--qr],Yr[qr]=null,Ga=Yr[--qr],Yr[qr]=null;for(;t===mr;)mr=fn[--hn],fn[hn]=null,ii=fn[--hn],fn[hn]=null,ni=fn[--hn],fn[hn]=null}var on=null,sn=null,rt=!1,An=null;function km(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,sn=Li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:ni,overflow:ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,sn=null,!0):!1;default:return!1}}function pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mu(t){if(rt){var e=sn;if(e){var n=e;if(!Nf(t,e)){if(pu(t))throw Error(Z(418));e=Li(n.nextSibling);var i=on;e&&Nf(t,e)?km(i,n):(t.flags=t.flags&-4097|2,rt=!1,on=t)}}else{if(pu(t))throw Error(Z(418));t.flags=t.flags&-4097|2,rt=!1,on=t}}}function Df(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function Ho(t){if(t!==on)return!1;if(!rt)return Df(t),rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=sn)){if(pu(t))throw zm(),Error(Z(418));for(;e;)km(t,e),e=Li(e.nextSibling)}if(Df(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){sn=Li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}sn=null}}else sn=on?Li(t.stateNode.nextSibling):null;return!0}function zm(){for(var t=sn;t;)t=Li(t.nextSibling)}function us(){sn=on=null,rt=!1}function dd(t){An===null?An=[t]:An.push(t)}var x0=di.ReactCurrentBatchConfig;function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var i=n.stateNode}if(!i)throw Error(Z(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(Z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uf(t){var e=t._init;return e(t._payload)}function Bm(t){function e(u,v){if(t){var p=u.deletions;p===null?(u.deletions=[v],u.flags|=16):p.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Ii(u,v),u.index=0,u.sibling=null,u}function s(u,v,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<v?(u.flags|=2,v):p):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,p,M){return v===null||v.tag!==6?(v=sc(p,u.mode,M),v.return=u,v):(v=r(v,p),v.return=u,v)}function l(u,v,p,M){var b=p.type;return b===Hr?d(u,v,p.props.children,M,p.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===yi&&Uf(b)===v.type)?(M=r(v,p.props),M.ref=Ps(u,v,p),M.return=u,M):(M=ba(p.type,p.key,p.props,null,u.mode,M),M.ref=Ps(u,v,p),M.return=u,M)}function c(u,v,p,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==p.containerInfo||v.stateNode.implementation!==p.implementation?(v=oc(p,u.mode,M),v.return=u,v):(v=r(v,p.children||[]),v.return=u,v)}function d(u,v,p,M,b){return v===null||v.tag!==7?(v=hr(p,u.mode,M,b),v.return=u,v):(v=r(v,p),v.return=u,v)}function h(u,v,p){if(typeof v=="string"&&v!==""||typeof v=="number")return v=sc(""+v,u.mode,p),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lo:return p=ba(v.type,v.key,v.props,null,u.mode,p),p.ref=Ps(u,null,v),p.return=u,p;case Br:return v=oc(v,u.mode,p),v.return=u,v;case yi:var M=v._init;return h(u,M(v._payload),p)}if(zs(v)||Ts(v))return v=hr(v,u.mode,p,null),v.return=u,v;Vo(u,v)}return null}function f(u,v,p,M){var b=v!==null?v.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return b!==null?null:a(u,v,""+p,M);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lo:return p.key===b?l(u,v,p,M):null;case Br:return p.key===b?c(u,v,p,M):null;case yi:return b=p._init,f(u,v,b(p._payload),M)}if(zs(p)||Ts(p))return b!==null?null:d(u,v,p,M,null);Vo(u,p)}return null}function g(u,v,p,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(p)||null,a(v,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Lo:return u=u.get(M.key===null?p:M.key)||null,l(v,u,M,b);case Br:return u=u.get(M.key===null?p:M.key)||null,c(v,u,M,b);case yi:var A=M._init;return g(u,v,p,A(M._payload),b)}if(zs(M)||Ts(M))return u=u.get(p)||null,d(v,u,M,b,null);Vo(v,M)}return null}function x(u,v,p,M){for(var b=null,A=null,T=v,P=v=0,E=null;T!==null&&P<p.length;P++){T.index>P?(E=T,T=null):E=T.sibling;var _=f(u,T,p[P],M);if(_===null){T===null&&(T=E);break}t&&T&&_.alternate===null&&e(u,T),v=s(_,v,P),A===null?b=_:A.sibling=_,A=_,T=E}if(P===p.length)return n(u,T),rt&&tr(u,P),b;if(T===null){for(;P<p.length;P++)T=h(u,p[P],M),T!==null&&(v=s(T,v,P),A===null?b=T:A.sibling=T,A=T);return rt&&tr(u,P),b}for(T=i(u,T);P<p.length;P++)E=g(T,u,P,p[P],M),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?P:E.key),v=s(E,v,P),A===null?b=E:A.sibling=E,A=E);return t&&T.forEach(function(U){return e(u,U)}),rt&&tr(u,P),b}function y(u,v,p,M){var b=Ts(p);if(typeof b!="function")throw Error(Z(150));if(p=b.call(p),p==null)throw Error(Z(151));for(var A=b=null,T=v,P=v=0,E=null,_=p.next();T!==null&&!_.done;P++,_=p.next()){T.index>P?(E=T,T=null):E=T.sibling;var U=f(u,T,_.value,M);if(U===null){T===null&&(T=E);break}t&&T&&U.alternate===null&&e(u,T),v=s(U,v,P),A===null?b=U:A.sibling=U,A=U,T=E}if(_.done)return n(u,T),rt&&tr(u,P),b;if(T===null){for(;!_.done;P++,_=p.next())_=h(u,_.value,M),_!==null&&(v=s(_,v,P),A===null?b=_:A.sibling=_,A=_);return rt&&tr(u,P),b}for(T=i(u,T);!_.done;P++,_=p.next())_=g(T,u,P,_.value,M),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?P:_.key),v=s(_,v,P),A===null?b=_:A.sibling=_,A=_);return t&&T.forEach(function(H){return e(u,H)}),rt&&tr(u,P),b}function m(u,v,p,M){if(typeof p=="object"&&p!==null&&p.type===Hr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Lo:e:{for(var b=p.key,A=v;A!==null;){if(A.key===b){if(b=p.type,b===Hr){if(A.tag===7){n(u,A.sibling),v=r(A,p.props.children),v.return=u,u=v;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===yi&&Uf(b)===A.type){n(u,A.sibling),v=r(A,p.props),v.ref=Ps(u,A,p),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}p.type===Hr?(v=hr(p.props.children,u.mode,M,p.key),v.return=u,u=v):(M=ba(p.type,p.key,p.props,null,u.mode,M),M.ref=Ps(u,v,p),M.return=u,u=M)}return o(u);case Br:e:{for(A=p.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===p.containerInfo&&v.stateNode.implementation===p.implementation){n(u,v.sibling),v=r(v,p.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=oc(p,u.mode,M),v.return=u,u=v}return o(u);case yi:return A=p._init,m(u,v,A(p._payload),M)}if(zs(p))return x(u,v,p,M);if(Ts(p))return y(u,v,p,M);Vo(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,p),v.return=u,u=v):(n(u,v),v=sc(p,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return m}var ds=Bm(!0),Hm=Bm(!1),Wa=Wi(null),ja=null,$r=null,fd=null;function hd(){fd=$r=ja=null}function pd(t){var e=Wa.current;et(Wa),t._currentValue=e}function gu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function is(t,e){ja=t,fd=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(fd!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(ja===null)throw Error(Z(308));$r=t,ja.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var lr=null;function md(t){lr===null?lr=[t]:lr.push(t)}function Vm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,md(e)):(n.next=r.next,r.next=n),e.interleaved=n,li(t,i)}function li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Si=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ni(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,He&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,li(t,n)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,li(t,n)}function Ea(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}function If(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xa(t,e,n,i){var r=t.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(g,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(g,h,f):x,f==null)break e;h=ct({},h,f);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vr|=o,t.lanes=o,t.memoizedState=h}}function Ff(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var So={},Gn=Wi(So),co=Wi(So),uo=Wi(So);function cr(t){if(t===So)throw Error(Z(174));return t}function vd(t,e){switch(Ke(uo,e),Ke(co,t),Ke(Gn,So),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kc(e,t)}et(Gn),Ke(Gn,e)}function fs(){et(Gn),et(co),et(uo)}function Wm(t){cr(uo.current);var e=cr(Gn.current),n=Kc(e,t.type);e!==n&&(Ke(co,t),Ke(Gn,n))}function _d(t){co.current===t&&(et(Gn),et(co))}var at=Wi(0);function Ya(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jl=[];function xd(){for(var t=0;t<Jl.length;t++)Jl[t]._workInProgressVersionPrimary=null;Jl.length=0}var wa=di.ReactCurrentDispatcher,ec=di.ReactCurrentBatchConfig,gr=0,lt=null,_t=null,wt=null,qa=!1,qs=!1,fo=0,y0=0;function Nt(){throw Error(Z(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function Sd(t,e,n,i,r,s){if(gr=s,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?w0:T0,t=n(i,r),qs){s=0;do{if(qs=!1,fo=0,25<=s)throw Error(Z(301));s+=1,wt=_t=null,e.updateQueue=null,wa.current=A0,t=n(i,r)}while(qs)}if(wa.current=$a,e=_t!==null&&_t.next!==null,gr=0,wt=_t=lt=null,qa=!1,e)throw Error(Z(300));return t}function Md(){var t=fo!==0;return fo=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?lt.memoizedState=wt=t:wt=wt.next=t,wt}function xn(){if(_t===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=wt===null?lt.memoizedState:wt.next;if(e!==null)wt=e,_t=t;else{if(t===null)throw Error(Z(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},wt===null?lt.memoizedState=wt=t:wt=wt.next=t}return wt}function ho(t,e){return typeof e=="function"?e(t):e}function tc(t){var e=xn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((gr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,lt.lanes|=d,vr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Nn(i,e.memoizedState)||(Xt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,lt.lanes|=s,vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nc(t){var e=xn(),n=e.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Nn(s,e.memoizedState)||(Xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jm(){}function Xm(t,e){var n=lt,i=xn(),r=e(),s=!Nn(i.memoizedState,r);if(s&&(i.memoizedState=r,Xt=!0),i=i.queue,Ed($m.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(n.flags|=2048,po(9,qm.bind(null,n,i,r,e),void 0,null),Tt===null)throw Error(Z(349));gr&30||Ym(n,e,r)}return r}function Ym(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qm(t,e,n,i){e.value=n,e.getSnapshot=i,Km(e)&&Zm(t)}function $m(t,e,n){return n(function(){Km(e)&&Zm(t)})}function Km(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function Zm(t){var e=li(t,1);e!==null&&Pn(e,t,1,-1)}function Of(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=E0.bind(null,lt,t),[e.memoizedState,t]}function po(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Qm(){return xn().memoizedState}function Ta(t,e,n,i){var r=Fn();lt.flags|=t,r.memoizedState=po(1|e,n,void 0,i===void 0?null:i)}function gl(t,e,n,i){var r=xn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&yd(i,o.deps)){r.memoizedState=po(e,n,s,i);return}}lt.flags|=t,r.memoizedState=po(1|e,n,s,i)}function kf(t,e){return Ta(8390656,8,t,e)}function Ed(t,e){return gl(2048,8,t,e)}function Jm(t,e){return gl(4,2,t,e)}function eg(t,e){return gl(4,4,t,e)}function tg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ng(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,tg.bind(null,e,t),n)}function wd(){}function ig(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rg(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sg(t,e,n){return gr&21?(Nn(n,e)||(n=um(),lt.lanes|=n,vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function S0(t,e){var n=Xe;Xe=n!==0&&4>n?n:4,t(!0);var i=ec.transition;ec.transition={};try{t(!1),e()}finally{Xe=n,ec.transition=i}}function og(){return xn().memoizedState}function M0(t,e,n){var i=Ui(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ag(t))lg(e,n);else if(n=Vm(t,e,n,i),n!==null){var r=Bt();Pn(n,t,i,r),cg(n,e,i)}}function E0(t,e,n){var i=Ui(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ag(t))lg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Nn(a,o)){var l=e.interleaved;l===null?(r.next=r,md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vm(t,e,r,i),n!==null&&(r=Bt(),Pn(n,t,i,r),cg(n,e,i))}}function ag(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function lg(t,e){qs=qa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}var $a={readContext:_n,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},w0={readContext:_n,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:kf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ta(4194308,4,tg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ta(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ta(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M0.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:Of,useDebugValue:wd,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=Of(!1),e=t[0];return t=S0.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Fn();if(rt){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=e(),Tt===null)throw Error(Z(349));gr&30||Ym(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kf($m.bind(null,i,s,t),[t]),i.flags|=2048,po(9,qm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=Tt.identifierPrefix;if(rt){var n=ii,i=ni;n=(i&~(1<<32-bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=y0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T0={readContext:_n,useCallback:ig,useContext:_n,useEffect:Ed,useImperativeHandle:ng,useInsertionEffect:Jm,useLayoutEffect:eg,useMemo:rg,useReducer:tc,useRef:Qm,useState:function(){return tc(ho)},useDebugValue:wd,useDeferredValue:function(t){var e=xn();return sg(e,_t.memoizedState,t)},useTransition:function(){var t=tc(ho)[0],e=xn().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:Xm,useId:og,unstable_isNewReconciler:!1},A0={readContext:_n,useCallback:ig,useContext:_n,useEffect:Ed,useImperativeHandle:ng,useInsertionEffect:Jm,useLayoutEffect:eg,useMemo:rg,useReducer:nc,useRef:Qm,useState:function(){return nc(ho)},useDebugValue:wd,useDeferredValue:function(t){var e=xn();return _t===null?e.memoizedState=t:sg(e,_t.memoizedState,t)},useTransition:function(){var t=nc(ho)[0],e=xn().memoizedState;return[t,e]},useMutableSource:jm,useSyncExternalStore:Xm,useId:og,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vl={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=Ui(t),s=si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ni(t,s,r),e!==null&&(Pn(e,t,r,i),Ea(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=Ui(t),s=si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ni(t,s,r),e!==null&&(Pn(e,t,r,i),Ea(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),i=Ui(t),r=si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ni(t,r,i),e!==null&&(Pn(e,t,i,n),Ea(e,t,i))}};function zf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,i)||!so(r,s):!0}function ug(t,e,n){var i=!1,r=Bi,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(r=qt(e)?pr:Ot.current,i=e.contextTypes,s=(i=i!=null)?cs(t,r):Bi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vl.enqueueReplaceState(e,e.state,null)}function _u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=_n(s):(s=qt(e)?pr:Ot.current,r.context=cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vl.enqueueReplaceState(r,r.state,null),Xa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e){try{var n="",i=e;do n+=e_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function dg(t,e,n){n=si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Za||(Za=!0,bu=i),xu(t,e)},n}function fg(t,e,n){n=si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xu(t,e),typeof i!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H0.bind(null,t,e,n),e.then(t,t))}function Vf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gf(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=si(-1,1),e.tag=2,Ni(n,e,1))),n.lanes|=1),t)}var R0=di.ReactCurrentOwner,Xt=!1;function zt(t,e,n,i){e.child=t===null?Hm(e,null,n,i):ds(e,t.child,n,i)}function Wf(t,e,n,i,r){n=n.render;var s=e.ref;return is(e,r),i=Sd(t,e,n,i,s,r),n=Md(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(rt&&n&&cd(e),e.flags|=1,zt(t,e,i,r),e.child)}function jf(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hg(t,e,s,i,r)):(t=ba(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,i)&&t.ref===e.ref)return ci(t,e,r)}return e.flags|=1,t=Ii(s,i),t.ref=e.ref,t.return=e,e.child=t}function hg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(so(s,i)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,ci(t,e,r)}return yu(t,e,n,i,r)}function pg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Zr,rn),rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ke(Zr,rn),rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ke(Zr,rn),rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ke(Zr,rn),rn|=i;return zt(t,e,r,n),e.child}function mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,i,r){var s=qt(n)?pr:Ot.current;return s=cs(e,s),is(e,r),n=Sd(t,e,n,i,s,r),i=Md(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ci(t,e,r)):(rt&&i&&cd(e),e.flags|=1,zt(t,e,n,r),e.child)}function Xf(t,e,n,i,r){if(qt(n)){var s=!0;Ha(e)}else s=!1;if(is(e,r),e.stateNode===null)Aa(t,e),ug(e,n,i),_u(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_n(c):(c=qt(n)?pr:Ot.current,c=cs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bf(e,o,i,c),Si=!1;var f=e.memoizedState;o.state=f,Xa(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Yt.current||Si?(typeof d=="function"&&(vu(e,n,d,i),l=e.memoizedState),(a=Si||zf(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gm(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:wn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=_n(l):(l=qt(n)?pr:Ot.current,l=cs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Bf(e,o,i,l),Si=!1,f=e.memoizedState,o.state=f,Xa(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Yt.current||Si?(typeof g=="function"&&(vu(e,n,g,i),x=e.memoizedState),(c=Si||zf(e,n,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Su(t,e,n,i,s,r)}function Su(t,e,n,i,r,s){mg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lf(e,n,!1),ci(t,e,s);i=e.stateNode,R0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ds(e,t.child,null,s),e.child=ds(e,null,a,s)):zt(t,e,a,s),e.memoizedState=i.state,r&&Lf(e,n,!0),e.child}function gg(t){var e=t.stateNode;e.pendingContext?Pf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pf(t,e.context,!1),vd(t,e.containerInfo)}function Yf(t,e,n,i,r){return us(),dd(r),e.flags|=256,zt(t,e,n,i),e.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vg(t,e,n){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ke(at,r&1),t===null)return mu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yl(o,i,0,null),t=hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eu(n),e.memoizedState=Mu,t):Td(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return b0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ii(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ii(a,s):(s=hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mu,i}return s=t.child,t=s.sibling,i=Ii(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Td(t,e){return e=yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,i){return i!==null&&dd(i),ds(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ic(Error(Z(422))),Go(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=yl({mode:"visible",children:i.children},r,0,null),s=hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ds(e,t.child,null,o),e.child.memoizedState=Eu(o),e.memoizedState=Mu,s);if(!(e.mode&1))return Go(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=ic(s,i,void 0),Go(t,e,o,i)}if(a=(o&t.childLanes)!==0,Xt||a){if(i=Tt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,li(t,r),Pn(i,t,r,-1))}return Ld(),i=ic(Error(Z(421))),Go(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=V0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,sn=Li(r.nextSibling),on=e,rt=!0,An=null,t!==null&&(fn[hn++]=ni,fn[hn++]=ii,fn[hn++]=mr,ni=t.id,ii=t.overflow,mr=e),e=Td(e,i.children),e.flags|=4096,e)}function qf(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gu(t.return,e,n)}function rc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _g(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qf(t,n,e);else if(t.tag===19)qf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ke(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ya(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),rc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ya(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}rc(e,!0,n,null,s);break;case"together":rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Aa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Z(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function P0(t,e,n){switch(e.tag){case 3:gg(e),us();break;case 5:Wm(e);break;case 1:qt(e.type)&&Ha(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ke(Wa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ke(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?vg(t,e,n):(Ke(at,at.current&1),t=ci(t,e,n),t!==null?t.sibling:null);Ke(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _g(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ke(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,pg(t,e,n)}return ci(t,e,n)}var xg,wu,yg,Sg;xg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};yg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,cr(Gn.current);var s=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=$c(t,r),i=$c(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=za)}Zc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Qe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ls(t,e){if(!rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L0(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return qt(e.type)&&Ba(),Dt(e),null;case 3:return i=e.stateNode,fs(),et(Yt),et(Ot),xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(Nu(An),An=null))),wu(t,e),Dt(e),null;case 5:_d(e);var r=cr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)yg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return Dt(e),null}if(t=cr(Gn.current),Ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[zn]=e,i[lo]=s,t=(e.mode&1)!==0,n){case"dialog":Qe("cancel",i),Qe("close",i);break;case"iframe":case"object":case"embed":Qe("load",i);break;case"video":case"audio":for(r=0;r<Hs.length;r++)Qe(Hs[r],i);break;case"source":Qe("error",i);break;case"img":case"image":case"link":Qe("error",i),Qe("load",i);break;case"details":Qe("toggle",i);break;case"input":nf(i,s),Qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Qe("invalid",i);break;case"textarea":sf(i,s),Qe("invalid",i)}Zc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bo(i.textContent,a,t),r=["children",""+a]):Qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Qe("scroll",i)}switch(n){case"input":No(i),rf(i,s,!0);break;case"textarea":No(i),of(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=za)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$p(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[zn]=e,t[lo]=i,xg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qc(n,i),n){case"dialog":Qe("cancel",t),Qe("close",t),r=i;break;case"iframe":case"object":case"embed":Qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<Hs.length;r++)Qe(Hs[r],t);r=i;break;case"source":Qe("error",t),r=i;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),r=i;break;case"details":Qe("toggle",t),r=i;break;case"input":nf(t,i),r=Xc(t,i),Qe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),Qe("invalid",t);break;case"textarea":sf(t,i),r=$c(t,i),Qe("invalid",t);break;default:r=i}Zc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Js(t,l):typeof l=="number"&&Js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Qe("scroll",t):l!=null&&$u(t,s,l,o))}switch(n){case"input":No(t),rf(t,i,!1);break;case"textarea":No(t),of(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Jr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Jr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Dt(e),null;case 6:if(t&&e.stateNode!=null)Sg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(n=cr(uo.current),cr(Gn.current),Ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[zn]=e,(s=i.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:Bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zn]=e,e.stateNode=i}return Dt(e),null;case 13:if(et(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(rt&&sn!==null&&e.mode&1&&!(e.flags&128))zm(),us(),e.flags|=98560,s=!1;else if(s=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[zn]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Dt(e),s=!1}else An!==null&&(Nu(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?xt===0&&(xt=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Dt(e),null);case 4:return fs(),wu(t,e),t===null&&oo(e.stateNode.containerInfo),Dt(e),null;case 10:return pd(e.type._context),Dt(e),null;case 17:return qt(e.type)&&Ba(),Dt(e),null;case 19:if(et(at),s=e.memoizedState,s===null)return Dt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ls(s,!1);else{if(xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ya(t),o!==null){for(e.flags|=128,Ls(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ke(at,at.current&1|2),e.child}t=t.sibling}s.tail!==null&&ht()>ps&&(e.flags|=128,i=!0,Ls(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ya(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!rt)return Dt(e),null}else 2*ht()-s.renderingStartTime>ps&&n!==1073741824&&(e.flags|=128,i=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,n=at.current,Ke(at,i?n&1|2:n&1),e):(Dt(e),null);case 22:case 23:return Pd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?rn&1073741824&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function N0(t,e){switch(ud(e),e.tag){case 1:return qt(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),et(Yt),et(Ot),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(et(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(at),null;case 4:return fs(),null;case 10:return pd(e.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Wo=!1,Ft=!1,D0=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ut(t,e,i)}else n.current=null}function Tu(t,e,n){try{n()}catch(i){ut(t,e,i)}}var $f=!1;function U0(t,e){if(lu=Fa,t=Am(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cu={focusedElem:t,selectionRange:n},Fa=!1,ue=e;ue!==null;)if(e=ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ue=t;else for(;ue!==null;){e=ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,m=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:wn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(M){ut(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}return x=$f,$f=!1,x}function $s(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tu(e,n,s)}r=r.next}while(r!==i)}}function _l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[lo],delete e[fu],delete e[g0],delete e[v0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Eg(t){return t.tag===5||t.tag===3||t.tag===4}function Kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(i!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Ru(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ru(t,e,n),t=t.sibling;t!==null;)Ru(t,e,n),t=t.sibling}var At=null,Tn=!1;function hi(t,e,n){for(n=n.child;n!==null;)wg(t,e,n),n=n.sibling}function wg(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(ul,n)}catch{}switch(n.tag){case 5:Ft||Kr(n,e);case 6:var i=At,r=Tn;At=null,hi(t,e,n),At=i,Tn=r,At!==null&&(Tn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Tn?(t=At,n=n.stateNode,t.nodeType===8?Zl(t.parentNode,n):t.nodeType===1&&Zl(t,n),io(t)):Zl(At,n.stateNode));break;case 4:i=At,r=Tn,At=n.stateNode.containerInfo,Tn=!0,hi(t,e,n),At=i,Tn=r;break;case 0:case 11:case 14:case 15:if(!Ft&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tu(n,e,o),r=r.next}while(r!==i)}hi(t,e,n);break;case 1:if(!Ft&&(Kr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ut(n,e,a)}hi(t,e,n);break;case 21:hi(t,e,n);break;case 22:n.mode&1?(Ft=(i=Ft)||n.memoizedState!==null,hi(t,e,n),Ft=i):hi(t,e,n);break;default:hi(t,e,n)}}function Zf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D0),e.forEach(function(i){var r=G0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Tn=!1;break e;case 3:At=a.stateNode.containerInfo,Tn=!0;break e;case 4:At=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(At===null)throw Error(Z(160));wg(s,o,r),At=null,Tn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tg(e,t),e=e.sibling}function Tg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),In(t),i&4){try{$s(3,t,t.return),_l(3,t)}catch(y){ut(t,t.return,y)}try{$s(5,t,t.return)}catch(y){ut(t,t.return,y)}}break;case 1:yn(e,t),In(t),i&512&&n!==null&&Kr(n,n.return);break;case 5:if(yn(e,t),In(t),i&512&&n!==null&&Kr(n,n.return),t.flags&32){var r=t.stateNode;try{Js(r,"")}catch(y){ut(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yp(r,s),Qc(a,o);var c=Qc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Qp(r,h):d==="dangerouslySetInnerHTML"?Kp(r,h):d==="children"?Js(r,h):$u(r,d,h,c)}switch(a){case"input":Yc(r,s);break;case"textarea":qp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Jr(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Jr(r,!!s.multiple,s.defaultValue,!0):Jr(r,!!s.multiple,s.multiple?[]:"",!1))}r[lo]=s}catch(y){ut(t,t.return,y)}}break;case 6:if(yn(e,t),In(t),i&4){if(t.stateNode===null)throw Error(Z(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){ut(t,t.return,y)}}break;case 3:if(yn(e,t),In(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{io(e.containerInfo)}catch(y){ut(t,t.return,y)}break;case 4:yn(e,t),In(t);break;case 13:yn(e,t),In(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rd=ht())),i&4&&Zf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ft=(c=Ft)||d,yn(e,t),Ft=c):yn(e,t),In(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ue=t,d=t.child;d!==null;){for(h=ue=d;ue!==null;){switch(f=ue,g=f.child,f.tag){case 0:case 11:case 14:case 15:$s(4,f,f.return);break;case 1:Kr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){ut(i,n,y)}}break;case 5:Kr(f,f.return);break;case 22:if(f.memoizedState!==null){Jf(h);continue}}g!==null?(g.return=f,ue=g):Jf(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zp("display",o))}catch(y){ut(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){ut(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yn(e,t),In(t),i&4&&Zf(t);break;case 21:break;default:yn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Eg(n)){var i=n;break e}n=n.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Js(r,""),i.flags&=-33);var s=Kf(t);Ru(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kf(t);Cu(t,a,o);break;default:throw Error(Z(161))}}catch(l){ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I0(t,e,n){ue=t,Ag(t)}function Ag(t,e,n){for(var i=(t.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ft;a=Wo;var c=Ft;if(Wo=o,(Ft=l)&&!c)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?eh(r):l!==null?(l.return=o,ue=l):eh(r);for(;s!==null;)ue=s,Ag(s),s=s.sibling;ue=r,Wo=a,Ft=c}Qf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ue=s):Qf(t)}}function Qf(t){for(;ue!==null;){var e=ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ft||_l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ft)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ff(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ff(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&io(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Ft||e.flags&512&&Au(e)}catch(f){ut(e,e.return,f)}}if(e===t){ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}}function Jf(t){for(;ue!==null;){var e=ue;if(e===t){ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ue=n;break}ue=e.return}}function eh(t){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_l(4,e)}catch(l){ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ut(e,r,l)}}var s=e.return;try{Au(e)}catch(l){ut(e,s,l)}break;case 5:var o=e.return;try{Au(e)}catch(l){ut(e,o,l)}}}catch(l){ut(e,e.return,l)}if(e===t){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var F0=Math.ceil,Ka=di.ReactCurrentDispatcher,Ad=di.ReactCurrentOwner,vn=di.ReactCurrentBatchConfig,He=0,Tt=null,mt=null,Rt=0,rn=0,Zr=Wi(0),xt=0,mo=null,vr=0,xl=0,Cd=0,Ks=null,Wt=null,Rd=0,ps=1/0,Jn=null,Za=!1,bu=null,Di=null,jo=!1,Ai=null,Qa=0,Zs=0,Pu=null,Ca=-1,Ra=0;function Bt(){return He&6?ht():Ca!==-1?Ca:Ca=ht()}function Ui(t){return t.mode&1?He&2&&Rt!==0?Rt&-Rt:x0.transition!==null?(Ra===0&&(Ra=um()),Ra):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:vm(t.type)),t):1}function Pn(t,e,n,i){if(50<Zs)throw Zs=0,Pu=null,Error(Z(185));_o(t,n,i),(!(He&2)||t!==Tt)&&(t===Tt&&(!(He&2)&&(xl|=n),xt===4&&Ei(t,Rt)),$t(t,i),n===1&&He===0&&!(e.mode&1)&&(ps=ht()+500,ml&&ji()))}function $t(t,e){var n=t.callbackNode;x_(t,e);var i=Ia(t,t===Tt?Rt:0);if(i===0)n!==null&&cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cf(n),e===1)t.tag===0?_0(th.bind(null,t)):Fm(th.bind(null,t)),p0(function(){!(He&6)&&ji()}),n=null;else{switch(dm(i)){case 1:n=ed;break;case 4:n=lm;break;case 16:n=Ua;break;case 536870912:n=cm;break;default:n=Ua}n=Ug(n,Cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cg(t,e){if(Ca=-1,Ra=0,He&6)throw Error(Z(327));var n=t.callbackNode;if(rs()&&t.callbackNode!==n)return null;var i=Ia(t,t===Tt?Rt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ja(t,i);else{e=i;var r=He;He|=2;var s=bg();(Tt!==t||Rt!==e)&&(Jn=null,ps=ht()+500,fr(t,e));do try{z0();break}catch(a){Rg(t,a)}while(!0);hd(),Ka.current=s,He=r,mt!==null?e=0:(Tt=null,Rt=0,e=xt)}if(e!==0){if(e===2&&(r=iu(t),r!==0&&(i=r,e=Lu(t,r))),e===1)throw n=mo,fr(t,0),Ei(t,i),$t(t,ht()),n;if(e===6)Ei(t,i);else{if(r=t.current.alternate,!(i&30)&&!O0(r)&&(e=Ja(t,i),e===2&&(s=iu(t),s!==0&&(i=s,e=Lu(t,s))),e===1))throw n=mo,fr(t,0),Ei(t,i),$t(t,ht()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:nr(t,Wt,Jn);break;case 3:if(Ei(t,i),(i&130023424)===i&&(e=Rd+500-ht(),10<e)){if(Ia(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Bt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=du(nr.bind(null,t,Wt,Jn),e);break}nr(t,Wt,Jn);break;case 4:if(Ei(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ht()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*F0(i/1960))-i,10<i){t.timeoutHandle=du(nr.bind(null,t,Wt,Jn),i);break}nr(t,Wt,Jn);break;case 5:nr(t,Wt,Jn);break;default:throw Error(Z(329))}}}return $t(t,ht()),t.callbackNode===n?Cg.bind(null,t):null}function Lu(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=Ja(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Nu(e)),t}function Nu(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function O0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Nn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(t,e){for(e&=~Cd,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),i=1<<n;t[n]=-1,e&=~i}}function th(t){if(He&6)throw Error(Z(327));rs();var e=Ia(t,0);if(!(e&1))return $t(t,ht()),null;var n=Ja(t,e);if(t.tag!==0&&n===2){var i=iu(t);i!==0&&(e=i,n=Lu(t,i))}if(n===1)throw n=mo,fr(t,0),Ei(t,e),$t(t,ht()),n;if(n===6)throw Error(Z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,Wt,Jn),$t(t,ht()),null}function bd(t,e){var n=He;He|=1;try{return t(e)}finally{He=n,He===0&&(ps=ht()+500,ml&&ji())}}function _r(t){Ai!==null&&Ai.tag===0&&!(He&6)&&rs();var e=He;He|=1;var n=vn.transition,i=Xe;try{if(vn.transition=null,Xe=1,t)return t()}finally{Xe=i,vn.transition=n,He=e,!(He&6)&&ji()}}function Pd(){rn=Zr.current,et(Zr)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h0(n)),mt!==null)for(n=mt.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ba();break;case 3:fs(),et(Yt),et(Ot),xd();break;case 5:_d(i);break;case 4:fs();break;case 13:et(at);break;case 19:et(at);break;case 10:pd(i.type._context);break;case 22:case 23:Pd()}n=n.return}if(Tt=t,mt=t=Ii(t.current,null),Rt=rn=e,xt=0,mo=null,Cd=xl=vr=0,Wt=Ks=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}lr=null}return t}function Rg(t,e){do{var n=mt;try{if(hd(),wa.current=$a,qa){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qa=!1}if(gr=0,wt=_t=lt=null,qs=!1,fo=0,Ad.current=null,n===null||n.return===null){xt=1,mo=e,mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Vf(o);if(g!==null){g.flags&=-257,Gf(g,o,a,s,e),g.mode&1&&Hf(s,c,e),e=g,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Hf(s,c,e),Ld();break e}l=Error(Z(426))}}else if(rt&&a.mode&1){var m=Vf(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Gf(m,o,a,s,e),dd(hs(l,a));break e}}s=l=hs(l,a),xt!==4&&(xt=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=dg(s,l,e);If(s,u);break e;case 1:a=l;var v=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Di===null||!Di.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=fg(s,a,e);If(s,M);break e}}s=s.return}while(s!==null)}Lg(n)}catch(b){e=b,mt===n&&n!==null&&(mt=n=n.return);continue}break}while(!0)}function bg(){var t=Ka.current;return Ka.current=$a,t===null?$a:t}function Ld(){(xt===0||xt===3||xt===2)&&(xt=4),Tt===null||!(vr&268435455)&&!(xl&268435455)||Ei(Tt,Rt)}function Ja(t,e){var n=He;He|=2;var i=bg();(Tt!==t||Rt!==e)&&(Jn=null,fr(t,e));do try{k0();break}catch(r){Rg(t,r)}while(!0);if(hd(),He=n,Ka.current=i,mt!==null)throw Error(Z(261));return Tt=null,Rt=0,xt}function k0(){for(;mt!==null;)Pg(mt)}function z0(){for(;mt!==null&&!u_();)Pg(mt)}function Pg(t){var e=Dg(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?Lg(t):mt=e,Ad.current=null}function Lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=N0(n,e),n!==null){n.flags&=32767,mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xt=6,mt=null;return}}else if(n=L0(n,e,rn),n!==null){mt=n;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=t}while(e!==null);xt===0&&(xt=5)}function nr(t,e,n){var i=Xe,r=vn.transition;try{vn.transition=null,Xe=1,B0(t,e,n,i)}finally{vn.transition=r,Xe=i}return null}function B0(t,e,n,i){do rs();while(Ai!==null);if(He&6)throw Error(Z(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y_(t,s),t===Tt&&(mt=Tt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,Ug(Ua,function(){return rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Xe;Xe=1;var a=He;He|=4,Ad.current=null,U0(t,n),Tg(n,t),o0(cu),Fa=!!lu,cu=lu=null,t.current=n,I0(n),d_(),He=a,Xe=o,vn.transition=s}else t.current=n;if(jo&&(jo=!1,Ai=t,Qa=r),s=t.pendingLanes,s===0&&(Di=null),p_(n.stateNode),$t(t,ht()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Za)throw Za=!1,t=bu,bu=null,t;return Qa&1&&t.tag!==0&&rs(),s=t.pendingLanes,s&1?t===Pu?Zs++:(Zs=0,Pu=t):Zs=0,ji(),null}function rs(){if(Ai!==null){var t=dm(Qa),e=vn.transition,n=Xe;try{if(vn.transition=null,Xe=16>t?16:t,Ai===null)var i=!1;else{if(t=Ai,Ai=null,Qa=0,He&6)throw Error(Z(331));var r=He;for(He|=4,ue=t.current;ue!==null;){var s=ue,o=s.child;if(ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ue=c;ue!==null;){var d=ue;switch(d.tag){case 0:case 11:case 15:$s(8,d,s)}var h=d.child;if(h!==null)h.return=d,ue=h;else for(;ue!==null;){d=ue;var f=d.sibling,g=d.return;if(Mg(d),d===c){ue=null;break}if(f!==null){f.return=g,ue=f;break}ue=g}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ue=u;break e}ue=s.return}}var v=t.current;for(ue=v;ue!==null;){o=ue;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,ue=p;else e:for(o=v;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_l(9,a)}}catch(b){ut(a,a.return,b)}if(a===o){ue=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ue=M;break e}ue=a.return}}if(He=r,ji(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(ul,t)}catch{}i=!0}return i}finally{Xe=n,vn.transition=e}}return!1}function nh(t,e,n){e=hs(n,e),e=dg(t,e,1),t=Ni(t,e,1),e=Bt(),t!==null&&(_o(t,1,e),$t(t,e))}function ut(t,e,n){if(t.tag===3)nh(t,t,n);else for(;e!==null;){if(e.tag===3){nh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Di===null||!Di.has(i))){t=hs(n,t),t=fg(e,t,1),e=Ni(e,t,1),t=Bt(),e!==null&&(_o(e,1,t),$t(e,t));break}}e=e.return}}function H0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,Tt===t&&(Rt&n)===n&&(xt===4||xt===3&&(Rt&130023424)===Rt&&500>ht()-Rd?fr(t,0):Cd|=n),$t(t,e)}function Ng(t,e){e===0&&(t.mode&1?(e=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):e=1);var n=Bt();t=li(t,e),t!==null&&(_o(t,e,n),$t(t,n))}function V0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ng(t,n)}function G0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),Ng(t,n)}var Dg;Dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,P0(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,rt&&e.flags&1048576&&Om(e,Ga,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Aa(t,e),t=e.pendingProps;var r=cs(e,Ot.current);is(e,n),r=Sd(null,e,i,t,r,n);var s=Md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(s=!0,Ha(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=vl,e.stateNode=r,r._reactInternals=e,_u(e,i,t,n),e=Su(null,e,i,!0,s,n)):(e.tag=0,rt&&s&&cd(e),zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Aa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j0(i),t=wn(i,t),r){case 0:e=yu(null,e,i,t,n);break e;case 1:e=Xf(null,e,i,t,n);break e;case 11:e=Wf(null,e,i,t,n);break e;case 14:e=jf(null,e,i,wn(i.type,t),n);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Xf(t,e,i,r,n);case 3:e:{if(gg(e),t===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gm(t,e),Xa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=hs(Error(Z(423)),e),e=Yf(t,e,i,n,r);break e}else if(i!==r){r=hs(Error(Z(424)),e),e=Yf(t,e,i,n,r);break e}else for(sn=Li(e.stateNode.containerInfo.firstChild),on=e,rt=!0,An=null,n=Hm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),i===r){e=ci(t,e,n);break e}zt(t,e,i,n)}e=e.child}return e;case 5:return Wm(e),t===null&&mu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,uu(i,r)?o=null:s!==null&&uu(i,s)&&(e.flags|=32),mg(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&mu(e),null;case 13:return vg(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ds(e,null,i,n):zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Wf(t,e,i,r,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ke(Wa,i._currentValue),i._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===r.children&&!Yt.current){e=ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=si(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,is(e,n),r=_n(r),i=i(r),e.flags|=1,zt(t,e,i,n),e.child;case 14:return i=e.type,r=wn(i,e.pendingProps),r=wn(i.type,r),jf(t,e,i,r,n);case 15:return hg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Aa(t,e),e.tag=1,qt(i)?(t=!0,Ha(e)):t=!1,is(e,n),ug(e,i,r),_u(e,i,r,n),Su(null,e,i,!0,t,n);case 19:return _g(t,e,n);case 22:return pg(t,e,n)}throw Error(Z(156,e.tag))};function Ug(t,e){return am(t,e)}function W0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,i){return new W0(t,e,n,i)}function Nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j0(t){if(typeof t=="function")return Nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zu)return 11;if(t===Qu)return 14}return 2}function Ii(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ba(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Nd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hr:return hr(n.children,r,s,e);case Ku:o=8,r|=8;break;case Vc:return t=mn(12,n,e,r|2),t.elementType=Vc,t.lanes=s,t;case Gc:return t=mn(13,n,e,r),t.elementType=Gc,t.lanes=s,t;case Wc:return t=mn(19,n,e,r),t.elementType=Wc,t.lanes=s,t;case Wp:return yl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vp:o=10;break e;case Gp:o=9;break e;case Zu:o=11;break e;case Qu:o=14;break e;case yi:o=16,i=null;break e}throw Error(Z(130,t==null?t:typeof t,""))}return e=mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function hr(t,e,n,i){return t=mn(7,t,i,e),t.lanes=n,t}function yl(t,e,n,i){return t=mn(22,t,i,e),t.elementType=Wp,t.lanes=n,t.stateNode={isHidden:!1},t}function sc(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function oc(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bl(0),this.expirationTimes=Bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dd(t,e,n,i,r,s,o,a,l){return t=new X0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(s),t}function Y0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ig(t){if(!t)return Bi;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(Z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(t.tag===1){var n=t.type;if(qt(n))return Im(t,n,e)}return e}function Fg(t,e,n,i,r,s,o,a,l){return t=Dd(n,i,!0,t,r,s,o,a,l),t.context=Ig(null),n=t.current,i=Bt(),r=Ui(n),s=si(i,r),s.callback=e??null,Ni(n,s,r),t.current.lanes=r,_o(t,r,i),$t(t,i),t}function Sl(t,e,n,i){var r=e.current,s=Bt(),o=Ui(r);return n=Ig(n),e.context===null?e.context=n:e.pendingContext=n,e=si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ni(r,e,o),t!==null&&(Pn(t,r,o,s),Ea(t,r,o)),o}function el(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ih(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){ih(t,e),(t=t.alternate)&&ih(t,e)}function q0(){return null}var Og=typeof reportError=="function"?reportError:function(t){console.error(t)};function Id(t){this._internalRoot=t}Ml.prototype.render=Id.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Z(409));Sl(t,e,null,null)};Ml.prototype.unmount=Id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Sl(null,t,null,null)}),e[ai]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mi.length&&e!==0&&e<Mi[n].priority;n++);Mi.splice(n,0,t),n===0&&gm(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function El(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rh(){}function $0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=el(o);s.call(c)}}var o=Fg(e,i,t,0,null,!1,!1,"",rh);return t._reactRootContainer=o,t[ai]=o.current,oo(t.nodeType===8?t.parentNode:t),_r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=el(l);a.call(c)}}var l=Dd(t,0,!1,null,null,!1,!1,"",rh);return t._reactRootContainer=l,t[ai]=l.current,oo(t.nodeType===8?t.parentNode:t),_r(function(){Sl(e,l,n,i)}),l}function wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=el(o);a.call(l)}}Sl(e,o,t,r)}else o=$0(n,e,t,r,i);return el(o)}fm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bs(e.pendingLanes);n!==0&&(td(e,n|1),$t(e,ht()),!(He&6)&&(ps=ht()+500,ji()))}break;case 13:_r(function(){var i=li(t,1);if(i!==null){var r=Bt();Pn(i,t,1,r)}}),Ud(t,1)}};nd=function(t){if(t.tag===13){var e=li(t,134217728);if(e!==null){var n=Bt();Pn(e,t,134217728,n)}Ud(t,134217728)}};hm=function(t){if(t.tag===13){var e=Ui(t),n=li(t,e);if(n!==null){var i=Bt();Pn(n,t,e,i)}Ud(t,e)}};pm=function(){return Xe};mm=function(t,e){var n=Xe;try{return Xe=t,e()}finally{Xe=n}};eu=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pl(i);if(!r)throw Error(Z(90));Xp(i),Yc(i,r)}}}break;case"textarea":qp(t,n);break;case"select":e=n.value,e!=null&&Jr(t,!!n.multiple,e,!1)}};tm=bd;nm=_r;var K0={usingClientEntryPoint:!1,Events:[yo,jr,pl,Jp,em,bd]},Ns={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{ul=Xo.inject(Z0),Vn=Xo}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(Z(200));return Y0(t,e,null,n)};ln.createRoot=function(t,e){if(!Fd(t))throw Error(Z(299));var n=!1,i="",r=Og;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dd(t,1,!1,null,null,n,!1,i,r),t[ai]=e.current,oo(t.nodeType===8?t.parentNode:t),new Id(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Z(188)):(t=Object.keys(t).join(","),Error(Z(268,t)));return t=sm(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return _r(t)};ln.hydrate=function(t,e,n){if(!El(e))throw Error(Z(200));return wl(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(Z(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Og;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fg(e,null,t,1,n??null,r,!1,s,o),t[ai]=e.current,oo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ml(e)};ln.render=function(t,e,n){if(!El(e))throw Error(Z(200));return wl(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!El(t))throw Error(Z(40));return t._reactRootContainer?(_r(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};ln.unstable_batchedUpdates=bd;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!El(n))throw Error(Z(200));if(t==null||t._reactInternals===void 0)throw Error(Z(38));return wl(t,e,n,!1,i)};ln.version="18.3.1-next-f1338f8080-20240426";function kg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kg)}catch(t){console.error(t)}}kg(),kp.exports=ln;var Q0=kp.exports,sh=Q0;Bc.createRoot=sh.createRoot,Bc.hydrateRoot=sh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="163",J0=0,oh=1,ex=2,zg=1,tx=2,Qn=3,Hi=0,Kt=1,ti=2,Fi=0,ss=1,Du=2,ah=3,lh=4,nx=5,sr=100,ix=101,rx=102,sx=103,ox=104,ax=200,lx=201,cx=202,ux=203,Uu=204,Iu=205,dx=206,fx=207,hx=208,px=209,mx=210,gx=211,vx=212,_x=213,xx=214,yx=0,Sx=1,Mx=2,tl=3,Ex=4,wx=5,Tx=6,Ax=7,Bg=0,Cx=1,Rx=2,Oi=0,bx=1,Px=2,Lx=3,Nx=4,Dx=5,Ux=6,Ix=7,Hg=300,ms=301,gs=302,Fu=303,Ou=304,Tl=306,ku=1e3,ur=1001,zu=1002,gn=1003,Fx=1004,Yo=1005,Cn=1006,ac=1007,dr=1008,ki=1009,Ox=1010,kx=1011,Vg=1012,Gg=1013,vs=1014,Ci=1015,nl=1016,Wg=1017,jg=1018,Mo=1020,zx=35902,Bx=1021,Hx=1022,Hn=1023,Vx=1024,Gx=1025,os=1026,go=1027,Wx=1028,Xg=1029,jx=1030,Yg=1031,qg=1033,lc=33776,cc=33777,uc=33778,dc=33779,ch=35840,uh=35841,dh=35842,fh=35843,$g=36196,hh=37492,ph=37496,mh=37808,gh=37809,vh=37810,_h=37811,xh=37812,yh=37813,Sh=37814,Mh=37815,Eh=37816,wh=37817,Th=37818,Ah=37819,Ch=37820,Rh=37821,fc=36492,bh=36494,Ph=36495,Xx=36283,Lh=36284,Nh=36285,Dh=36286,Yx=3200,qx=3201,$x=0,Kx=1,wi="",On="srgb",Xi="srgb-linear",kd="display-p3",Al="display-p3-linear",il="linear",Je="srgb",rl="rec709",sl="p3",Er=7680,Uh=519,Zx=512,Qx=513,Jx=514,Kg=515,ey=516,ty=517,ny=518,iy=519,Ih=35044,Fh="300 es",ri=2e3,ol=2001;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,Bu=180/Math.PI;function Eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function ry(t,e){return(t%e+e)%e}function pc(t,e,n){return(1-n)*t+n*e}function Ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,n=0){ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,n,i,r,s,o,a,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],x=i[8],y=r[0],m=r[3],u=r[6],v=r[1],p=r[4],M=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*m+a*p+l*A,s[6]=o*u+a*M+l*T,s[1]=c*y+d*v+h*b,s[4]=c*m+d*p+h*A,s[7]=c*u+d*M+h*T,s[2]=f*y+g*v+x*b,s[5]=f*m+g*p+x*A,s[8]=f*u+g*M+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,x=n*h+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new De;function Zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sy(){const t=al("canvas");return t.style.display="block",t}const Oh={};function oy(t){t in Oh||(Oh[t]=!0,console.warn(t))}const kh=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[Xi]:{transfer:il,primaries:rl,toReference:t=>t,fromReference:t=>t},[On]:{transfer:Je,primaries:rl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Al]:{transfer:il,primaries:sl,toReference:t=>t.applyMatrix3(zh),fromReference:t=>t.applyMatrix3(kh)},[kd]:{transfer:Je,primaries:sl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(zh),fromReference:t=>t.applyMatrix3(kh).convertLinearToSRGB()}},ay=new Set([Xi,Al]),Ye={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ay.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=qo[e].toReference,r=qo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return qo[t].primaries},getTransfer:function(t){return t===wi?il:qo[t].transfer}};function as(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let wr;class ly{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=al("canvas")),wr.width=e.width,wr.height=e.height;const i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=al("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=as(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(as(n[i]/255)*255):n[i]=as(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cy=0;class Qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vc(r[o].image)):s.push(vc(r[o]))}else s=vc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ly.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uy=0;class Zt extends Ms{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=ur,r=ur,s=Cn,o=dr,a=Hn,l=ki,c=Zt.DEFAULT_ANISOTROPY,d=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Eo(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ku:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ku:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Hg;Zt.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],x=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,M=(g+1)/2,b=(u+1)/2,A=(d+f)/4,T=(h+y)/4,P=(x+m)/4;return p>M&&p>b?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=A/i,s=T/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(h-y)/v,this.z=(f-d)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dy extends Ms{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends dy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jg extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fy extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==f||c!==g||d!==x){let m=1-a;const u=l*f+c*g+d*x+h*y,v=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const b=Math.sqrt(p),A=Math.atan2(b,u*v);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const M=a*v;if(l=l*m+f*M,c=c*m+g*M,d=d*m+x*M,h=h*m+y*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*g-c*f,e[n+1]=l*x+d*f+c*h-a*g,e[n+2]=c*x+d*g+a*f-l*h,e[n+3]=d*x-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"YXZ":this._x=f*d*h+c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"ZXY":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h-f*g*x;break;case"ZYX":this._x=f*d*h-c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h+f*g*x;break;case"YZX":this._x=f*d*h+c*g*x,this._y=c*g*h+f*d*x,this._z=c*d*x-f*g*h,this._w=c*d*h-f*g*x;break;case"XZY":this._x=f*d*h-c*g*x,this._y=c*g*h-f*d*x,this._z=c*d*x+f*g*h,this._w=c*d*h+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new F,Bh=new wo;class To{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ko.subVectors(this.max,Us),Tr.subVectors(e.a,Us),Ar.subVectors(e.b,Us),Cr.subVectors(e.c,Us),pi.subVectors(Ar,Tr),mi.subVectors(Cr,Ar),$i.subVectors(Tr,Cr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-$i.z,$i.y,pi.z,0,-pi.x,mi.z,0,-mi.x,$i.z,0,-$i.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-$i.y,$i.x,0];return!xc(n,Tr,Ar,Cr,Ko)||(n=[1,0,0,0,1,0,0,0,1],!xc(n,Tr,Ar,Cr,Ko))?!1:(Zo.crossVectors(pi,mi),n=[Zo.x,Zo.y,Zo.z],xc(n,Tr,Ar,Cr,Ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new F,new F,new F,new F,new F,new F,new F,new F],Sn=new F,$o=new To,Tr=new F,Ar=new F,Cr=new F,pi=new F,mi=new F,$i=new F,Us=new F,Ko=new F,Zo=new F,Ki=new F;function xc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ki.fromArray(t,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=n.dot(Ki),d=i.dot(Ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const hy=new To,Is=new F,yc=new F;class Cl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(yc)),this.expandByPoint(Is.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new F,Sc=new F,Qo=new F,gi=new F,Mc=new F,Jo=new F,Ec=new F;class ev{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sc.copy(e).add(n).multiplyScalar(.5),Qo.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(Sc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Qo),a=gi.dot(this.direction),l=-gi.dot(Qo),c=gi.lengthSq(),d=Math.abs(1-o*o);let h,f,g,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sc).addScaledVector(Qo,f),g}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){Mc.subVectors(n,e),Jo.subVectors(i,e),Ec.crossVectors(Mc,Jo);let o=this.direction.dot(Ec),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(Jo.crossVectors(gi,Jo));if(l<0)return null;const c=a*this.direction.dot(Mc.cross(gi));if(c<0||l+c>o)return null;const d=-a*gi.dot(Ec);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,x,y,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,x,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,x,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=x,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+x*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=x+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,x=c*d,y=c*h;n[0]=f+y*a,n[4]=x*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,x=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=x*c-g,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=g*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+x,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,g=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=g*h-x,n[2]=x*h-g,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(py,e,my)}lookAt(e,n,i){const r=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),vi.crossVectors(i,tn),vi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),vi.crossVectors(i,tn)),vi.normalize(),ea.crossVectors(tn,vi),r[0]=vi.x,r[4]=ea.x,r[8]=tn.x,r[1]=vi.y,r[5]=ea.y,r[9]=tn.y,r[2]=vi.z,r[6]=ea.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],x=i[2],y=i[6],m=i[10],u=i[14],v=i[3],p=i[7],M=i[11],b=i[15],A=r[0],T=r[4],P=r[8],E=r[12],_=r[1],U=r[5],H=r[9],D=r[13],Y=r[2],X=r[6],J=r[10],Q=r[14],N=r[3],W=r[7],j=r[11],ie=r[15];return s[0]=o*A+a*_+l*Y+c*N,s[4]=o*T+a*U+l*X+c*W,s[8]=o*P+a*H+l*J+c*j,s[12]=o*E+a*D+l*Q+c*ie,s[1]=d*A+h*_+f*Y+g*N,s[5]=d*T+h*U+f*X+g*W,s[9]=d*P+h*H+f*J+g*j,s[13]=d*E+h*D+f*Q+g*ie,s[2]=x*A+y*_+m*Y+u*N,s[6]=x*T+y*U+m*X+u*W,s[10]=x*P+y*H+m*J+u*j,s[14]=x*E+y*D+m*Q+u*ie,s[3]=v*A+p*_+M*Y+b*N,s[7]=v*T+p*U+M*X+b*W,s[11]=v*P+p*H+M*J+b*j,s[15]=v*E+p*D+M*Q+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],x=e[3],y=e[7],m=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+y*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+m*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],x=e[12],y=e[13],m=e[14],u=e[15],v=h*m*c-y*f*c+y*l*g-a*m*g-h*l*u+a*f*u,p=x*f*c-d*m*c-x*l*g+o*m*g+d*l*u-o*f*u,M=d*y*c-x*h*c+x*a*g-o*y*g-d*a*u+o*h*u,b=x*h*l-d*y*l-x*a*f+o*y*f+d*a*m-o*h*m,A=n*v+i*p+r*M+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*f*s-h*m*s-y*r*g+i*m*g+h*r*u-i*f*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*T,e[4]=p*T,e[5]=(d*m*s-x*f*s+x*r*g-n*m*g-d*r*u+n*f*u)*T,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*T,e[8]=M*T,e[9]=(x*h*s-d*y*s-x*i*g+n*y*g+d*i*u-n*h*u)*T,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*T,e[12]=b*T,e[13]=(d*y*r-x*h*r+x*i*f-n*y*f-d*i*m+n*h*m)*T,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,x=s*h,y=o*d,m=o*h,u=a*h,v=l*c,p=l*d,M=l*h,b=i.x,A=i.y,T=i.z;return r[0]=(1-(y+u))*b,r[1]=(g+M)*b,r[2]=(x-p)*b,r[3]=0,r[4]=(g-M)*A,r[5]=(1-(f+u))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(x+p)*T,r[9]=(m-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,d=1/o,h=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=d,Mn.elements[5]*=d,Mn.elements[6]*=d,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,n.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ri){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,x;if(a===ri)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ol)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let x,y;if(a===ri)x=(o+s)*h,y=-2*h;else if(a===ol)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new F,Mn=new gt,py=new F(0,0,0),my=new F(1,1,1),vi=new F,ea=new F,tn=new F,Hh=new gt,Vh=new wo;class ui{constructor(e=0,n=0,i=0,r=ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ui.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gy=0;const Gh=new F,br=new wo,$n=new gt,ta=new F,Fs=new F,vy=new F,_y=new wo,Wh=new F(1,0,0),jh=new F(0,1,0),Xh=new F(0,0,1),Yh={type:"added"},xy={type:"removed"},Pr={type:"childadded",child:null},wc={type:"childremoved",child:null};class Qt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new F,n=new ui,i=new wo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new De}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,n){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ta.copy(e):ta.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Fs,ta,this.up):$n.lookAt(ta,Fs,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),br.setFromRotationMatrix($n),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xy),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,_y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new F(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new F,Kn=new F,Tc=new F,Zn=new F,Lr=new F,Nr=new F,qh=new F,Ac=new F,Cc=new F,Rc=new F;class Bn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),En.subVectors(e,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){En.subVectors(r,n),Kn.subVectors(i,n),Tc.subVectors(e,n);const o=En.dot(En),a=En.dot(Kn),l=En.dot(Tc),c=Kn.dot(Kn),d=Kn.dot(Tc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static isFrontFacing(e,n,i,r){return En.subVectors(i,n),Kn.subVectors(e,n),En.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),En.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Nr.subVectors(s,i),Ac.subVectors(e,i);const l=Lr.dot(Ac),c=Nr.dot(Ac);if(l<=0&&c<=0)return n.copy(i);Cc.subVectors(e,r);const d=Lr.dot(Cc),h=Nr.dot(Cc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Lr,o);Rc.subVectors(e,s);const g=Lr.dot(Rc),x=Nr.dot(Rc);if(x>=0&&g<=x)return n.copy(s);const y=g*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Nr,a);const m=d*x-g*h;if(m<=0&&h-d>=0&&g-x>=0)return qh.subVectors(s,r),a=(h-d)/(h-d+(g-x)),n.copy(r).addScaledVector(qh,a);const u=1/(m+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(Lr,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},na={h:0,s:0,l:0};function bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=ry(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bc(o,s,e+1/3),this.g=bc(o,s,e),this.b=bc(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Ye.fromWorkingColorSpace(It.copy(this),e),Math.round(jt(It.r*255,0,255))*65536+Math.round(jt(It.g*255,0,255))*256+Math.round(jt(It.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(It.copy(this),n);const i=It.r,r=It.g,s=It.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(It.copy(this),n),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=On){Ye.fromWorkingColorSpace(It.copy(this),e);const n=It.r,i=It.g,r=It.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(na);const i=pc(_i.h,na.h,n),r=pc(_i.s,na.s,n),s=pc(_i.l,na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new je;je.NAMES=nv;let yy=0;class Ao extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=ss,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Iu,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uu&&(i.blendSrc=this.blendSrc),this.blendDst!==Iu&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ll extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new F,ia=new ke;class Ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ia.fromBufferAttribute(this,n),ia.applyMatrix3(e),this.setXY(n,ia.x,ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class iv extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rv extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wn extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Sy=0;const dn=new gt,Pc=new Qt,Dr=new F,nn=new To,Os=new To,Et=new F;class jn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?rv:iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(nn.min,Os.min),nn.expandByPoint(Et),Et.addVectors(nn.max,Os.max),nn.expandByPoint(Et)):(nn.expandByPoint(Os.min),nn.expandByPoint(Os.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Et.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(e,c),Et.add(Dr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const c=new F,d=new F,h=new F,f=new ke,g=new ke,x=new ke,y=new F,m=new F;function u(P,E,_){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,_),f.fromBufferAttribute(s,P),g.fromBufferAttribute(s,E),x.fromBufferAttribute(s,_),d.sub(c),h.sub(c),g.sub(f),x.sub(f);const U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(h,-g.y).multiplyScalar(U),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(U),a[P].add(y),a[E].add(y),a[_].add(y),l[P].add(m),l[E].add(m),l[_].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const _=v[P],U=_.start,H=_.count;for(let D=U,Y=U+H;D<Y;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const p=new F,M=new F,b=new F,A=new F;function T(P){b.fromBufferAttribute(r,P),A.copy(b);const E=a[P];p.copy(E),p.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(A,E);const U=M.dot(l[P])<0?-1:1;o.setXYZW(P,p.x,p.y,p.z,U)}for(let P=0,E=v.length;P<E;++P){const _=v[P],U=_.start,H=_.count;for(let D=U,Y=U+H;D<Y;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,d=new F,h=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*d;for(let u=0;u<d;u++)f[x++]=c[g++]}return new Ln(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new gt,Zi=new ev,ra=new Cl,Kh=new F,Ur=new F,Ir=new F,Fr=new F,Lc=new F,sa=new F,oa=new ke,aa=new ke,la=new ke,Zh=new F,Qh=new F,Jh=new F,ca=new F,ua=new F;class Rn extends Qt{constructor(e=new jn,n=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(Lc.fromBufferAttribute(h,e),o?sa.addScaledVector(Lc,d):sa.addScaledVector(Lc.sub(n),d))}n.add(sa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),!(ra.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(ra,Kh)===null||Zi.origin.distanceToSquared(Kh)>(e.far-e.near)**2))&&($h.copy(s).invert(),Zi.copy(e.ray).applyMatrix4($h),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Zi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],u=o[m.materialIndex],v=Math.max(m.start,g.start),p=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,b=p;M<b;M+=3){const A=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);r=da(this,u,e,i,c,d,h,A,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let m=x,u=y;m<u;m+=3){const v=a.getX(m),p=a.getX(m+1),M=a.getX(m+2);r=da(this,o,e,i,c,d,h,v,p,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const m=f[x],u=o[m.materialIndex],v=Math.max(m.start,g.start),p=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,b=p;M<b;M+=3){const A=M,T=M+1,P=M+2;r=da(this,u,e,i,c,d,h,A,T,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=x,u=y;m<u;m+=3){const v=m,p=m+1,M=m+2;r=da(this,o,e,i,c,d,h,v,p,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function My(t,e,n,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hi,a),l===null)return null;ua.copy(a),ua.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ua);return c<n.near||c>n.far?null:{distance:c,point:ua.clone(),object:t}}function da(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ur),t.getVertexPosition(l,Ir),t.getVertexPosition(c,Fr);const d=My(t,e,n,i,Ur,Ir,Fr,ca);if(d){r&&(oa.fromBufferAttribute(r,a),aa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,c),d.uv=Bn.getInterpolation(ca,Ur,Ir,Fr,oa,aa,la,new ke)),s&&(oa.fromBufferAttribute(s,a),aa.fromBufferAttribute(s,l),la.fromBufferAttribute(s,c),d.uv1=Bn.getInterpolation(ca,Ur,Ir,Fr,oa,aa,la,new ke)),o&&(Zh.fromBufferAttribute(o,a),Qh.fromBufferAttribute(o,l),Jh.fromBufferAttribute(o,c),d.normal=Bn.getInterpolation(ca,Ur,Ir,Fr,Zh,Qh,Jh,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Bn.getNormal(Ur,Ir,Fr,h.normal),d.face=h}return d}class Co extends jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(c,3)),this.setAttribute("normal",new Wn(d,3)),this.setAttribute("uv",new Wn(h,2));function x(y,m,u,v,p,M,b,A,T,P,E){const _=M/T,U=b/P,H=M/2,D=b/2,Y=A/2,X=T+1,J=P+1;let Q=0,N=0;const W=new F;for(let j=0;j<J;j++){const ie=j*U-D;for(let me=0;me<X;me++){const Ve=me*_-H;W[y]=Ve*v,W[m]=ie*p,W[u]=Y,c.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[u]=A>0?1:-1,d.push(W.x,W.y,W.z),h.push(me/T),h.push(1-j/P),Q+=1}}for(let j=0;j<P;j++)for(let ie=0;ie<T;ie++){const me=f+ie+X*j,Ve=f+ie+X*(j+1),G=f+(ie+1)+X*(j+1),te=f+(ie+1)+X*j;l.push(me,Ve,te),l.push(Ve,G,te),N+=6}a.addGroup(g,N,E),g+=N,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=_s(t[n]);for(const r in i)e[r]=i[r]}return e}function Ey(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const wy={clone:_s,merge:kt};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=Ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=Ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ov extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new F,ep=new ke,tp=new ke;class pn extends ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bu*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,n){return this.getViewBounds(e,ep,tp),n.subVectors(tp,ep)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Or=-90,kr=1;class Cy extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Or,kr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Or,kr,e,n);s.layers=this.layers,this.add(s);const o=new pn(Or,kr,e,n);o.layers=this.layers,this.add(o);const a=new pn(Or,kr,e,n);a.layers=this.layers,this.add(a);const l=new pn(Or,kr,e,n);l.layers=this.layers,this.add(l);const c=new pn(Or,kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class av extends Zt{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ms,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ry extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new av(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Co(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Fi});s.uniforms.tEquirect.value=n;const o=new Rn(r,s),a=n.minFilter;return n.minFilter===dr&&(n.minFilter=Cn),new Cy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nc=new F,by=new F,Py=new De;class ir{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nc.subVectors(i,n).cross(by.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Py.getNormalMatrix(e),r=this.coplanarPoint(Nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Cl,fa=new F;class lv{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,o=new ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],y=r[10],m=r[11],u=r[12],v=r[13],p=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,m-g,M-u).normalize(),i[1].setComponents(l+s,f+c,m+g,M+u).normalize(),i[2].setComponents(l+o,f+d,m+x,M+v).normalize(),i[3].setComponents(l-o,f-d,m-x,M-v).normalize(),i[4].setComponents(l-a,f-h,m-y,M-p).normalize(),n===ri)i[5].setComponents(l+a,f+h,m+y,M+p).normalize();else if(n===ol)i[5].setComponents(a,h,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ly(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let g=0,x=f.length;g<x;g++){const y=f[g];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Rl extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],x=[],y=[],m=[];for(let u=0;u<d;u++){const v=u*f-o;for(let p=0;p<c;p++){const M=p*h-s;x.push(M,-v,0),y.push(0,0,1),m.push(p/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const p=v+c*u,M=v+c*(u+1),b=v+1+c*(u+1),A=v+1+c*u;g.push(p,M,A),g.push(M,b,A)}this.setIndex(g),this.setAttribute("position",new Wn(x,3)),this.setAttribute("normal",new Wn(y,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,US=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,BM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Ny,alphahash_pars_fragment:Dy,alphamap_fragment:Uy,alphamap_pars_fragment:Iy,alphatest_fragment:Fy,alphatest_pars_fragment:Oy,aomap_fragment:ky,aomap_pars_fragment:zy,batching_pars_vertex:By,batching_vertex:Hy,begin_vertex:Vy,beginnormal_vertex:Gy,bsdfs:Wy,iridescence_fragment:jy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:Ky,color_fragment:Zy,color_pars_fragment:Qy,color_pars_vertex:Jy,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:rS,displacementmap_vertex:sS,emissivemap_fragment:oS,emissivemap_pars_fragment:aS,colorspace_fragment:lS,colorspace_pars_fragment:cS,envmap_fragment:uS,envmap_common_pars_fragment:dS,envmap_pars_fragment:fS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:TS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:vS,fog_pars_fragment:_S,gradientmap_pars_fragment:xS,lightmap_fragment:yS,lightmap_pars_fragment:SS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:ES,lights_pars_begin:wS,lights_toon_fragment:AS,lights_toon_pars_fragment:CS,lights_phong_fragment:RS,lights_phong_pars_fragment:bS,lights_physical_fragment:PS,lights_physical_pars_fragment:LS,lights_fragment_begin:NS,lights_fragment_maps:DS,lights_fragment_end:US,logdepthbuf_fragment:IS,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:kS,map_fragment:zS,map_pars_fragment:BS,map_particle_fragment:HS,map_particle_pars_fragment:VS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:WS,morphinstance_vertex:jS,morphcolor_vertex:XS,morphnormal_vertex:YS,morphtarget_pars_vertex:qS,morphtarget_vertex:$S,normal_fragment_begin:KS,normal_fragment_maps:ZS,normal_pars_fragment:QS,normal_pars_vertex:JS,normal_vertex:eM,normalmap_pars_fragment:tM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:rM,iridescence_pars_fragment:sM,opaque_fragment:oM,packing:aM,premultiplied_alpha_fragment:lM,project_vertex:cM,dithering_fragment:uM,dithering_pars_fragment:dM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:gM,shadowmask_pars_fragment:vM,skinbase_vertex:_M,skinning_pars_vertex:xM,skinning_vertex:yM,skinnormal_vertex:SM,specularmap_fragment:MM,specularmap_pars_fragment:EM,tonemapping_fragment:wM,tonemapping_pars_fragment:TM,transmission_fragment:AM,transmission_pars_fragment:CM,uv_pars_fragment:RM,uv_pars_vertex:bM,uv_vertex:PM,worldpos_vertex:LM,background_vert:NM,background_frag:DM,backgroundCube_vert:UM,backgroundCube_frag:IM,cube_vert:FM,cube_frag:OM,depth_vert:kM,depth_frag:zM,distanceRGBA_vert:BM,distanceRGBA_frag:HM,equirect_vert:VM,equirect_frag:GM,linedashed_vert:WM,linedashed_frag:jM,meshbasic_vert:XM,meshbasic_frag:YM,meshlambert_vert:qM,meshlambert_frag:$M,meshmatcap_vert:KM,meshmatcap_frag:ZM,meshnormal_vert:QM,meshnormal_frag:JM,meshphong_vert:eE,meshphong_frag:tE,meshphysical_vert:nE,meshphysical_frag:iE,meshtoon_vert:rE,meshtoon_frag:sE,points_vert:oE,points_frag:aE,shadow_vert:lE,shadow_frag:cE,sprite_vert:uE,sprite_frag:dE},oe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},kn={basic:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:kt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:kt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:kt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:kt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:kt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:kt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:kt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:kt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:kt([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:kt([oe.lights,oe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};kn.physical={uniforms:kt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ha={r:0,b:0,g:0},Ji=new ui,fE=new gt;function hE(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function x(m,u){let v=!1,p=u.isScene===!0?u.background:null;p&&p.isTexture&&(p=(u.backgroundBlurriness>0?n:e).get(p)),p===null?y(a,l):p&&p.isColor&&(y(p,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Tl)?(d===void 0&&(d=new Rn(new Co(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:_s(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ji.copy(u.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),d.material.uniforms.envMap.value=p,d.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fE.makeRotationFromEuler(Ji)),d.material.toneMapped=Ye.getTransfer(p.colorSpace)!==Je,(h!==p||f!==p.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):p&&p.isTexture&&(c===void 0&&(c=new Rn(new Rl(2,2),new Vi({name:"BackgroundMaterial",uniforms:_s(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=p,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(p.colorSpace)!==Je,p.matrixAutoUpdate===!0&&p.updateMatrix(),c.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||f!==p.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=p,f=p.version,g=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(ha,sv(t)),i.buffers.color.setClear(ha.r,ha.g,ha.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:x}}function pE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(_,U,H,D,Y){let X=!1;const J=h(D,H,U);s!==J&&(s=J,c(s.object)),X=g(_,D,H,Y),X&&x(_,D,H,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(_,U,H,D),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function d(_){return t.deleteVertexArray(_)}function h(_,U,H){const D=H.wireframe===!0;let Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let X=Y[U.id];X===void 0&&(X={},Y[U.id]=X);let J=X[D];return J===void 0&&(J=f(l()),X[D]=J),J}function f(_){const U=[],H=[],D=[];for(let Y=0;Y<n;Y++)U[Y]=0,H[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:D,object:_,attributes:{},index:null}}function g(_,U,H,D){const Y=s.attributes,X=U.attributes;let J=0;const Q=H.getAttributes();for(const N in Q)if(Q[N].location>=0){const j=Y[N];let ie=X[N];if(ie===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;J++}return s.attributesNum!==J||s.index!==D}function x(_,U,H,D){const Y={},X=U.attributes;let J=0;const Q=H.getAttributes();for(const N in Q)if(Q[N].location>=0){let j=X[N];j===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),Y[N]=ie,J++}s.attributes=Y,s.attributesNum=J,s.index=D}function y(){const _=s.newAttributes;for(let U=0,H=_.length;U<H;U++)_[U]=0}function m(_){u(_,0)}function u(_,U){const H=s.newAttributes,D=s.enabledAttributes,Y=s.attributeDivisors;H[_]=1,D[_]===0&&(t.enableVertexAttribArray(_),D[_]=1),Y[_]!==U&&(t.vertexAttribDivisor(_,U),Y[_]=U)}function v(){const _=s.newAttributes,U=s.enabledAttributes;for(let H=0,D=U.length;H<D;H++)U[H]!==_[H]&&(t.disableVertexAttribArray(H),U[H]=0)}function p(_,U,H,D,Y,X,J){J===!0?t.vertexAttribIPointer(_,U,H,Y,X):t.vertexAttribPointer(_,U,H,D,Y,X)}function M(_,U,H,D){y();const Y=D.attributes,X=H.getAttributes(),J=U.defaultAttributeValues;for(const Q in X){const N=X[Q];if(N.location>=0){let W=Y[Q];if(W===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(W=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(W=_.instanceColor)),W!==void 0){const j=W.normalized,ie=W.itemSize,me=e.get(W);if(me===void 0)continue;const Ve=me.buffer,G=me.type,te=me.bytesPerElement,ce=G===t.INT||G===t.UNSIGNED_INT||W.gpuType===Gg;if(W.isInterleavedBufferAttribute){const ae=W.data,Pe=ae.stride,Ue=W.offset;if(ae.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)u(N.location+ze,ae.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ze=0;ze<N.locationSize;ze++)m(N.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ze=0;ze<N.locationSize;ze++)p(N.location+ze,ie/N.locationSize,G,j,Pe*te,(Ue+ie/N.locationSize*ze)*te,ce)}else{if(W.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,W.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ae=0;ae<N.locationSize;ae++)m(N.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ae=0;ae<N.locationSize;ae++)p(N.location+ae,ie/N.locationSize,G,j,ie*te,ie/N.locationSize*ae*te,ce)}}else if(J!==void 0){const j=J[Q];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(N.location,j);break;case 3:t.vertexAttrib3fv(N.location,j);break;case 4:t.vertexAttrib4fv(N.location,j);break;default:t.vertexAttrib1fv(N.location,j)}}}}v()}function b(){P();for(const _ in i){const U=i[_];for(const H in U){const D=U[H];for(const Y in D)d(D[Y].object),delete D[Y];delete U[H]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const U=i[_.id];for(const H in U){const D=U[H];for(const Y in D)d(D[Y].object),delete D[Y];delete U[H]}delete i[_.id]}function T(_){for(const U in i){const H=i[U];if(H[_.id]===void 0)continue;const D=H[_.id];for(const Y in D)d(D[Y].object),delete D[Y];delete H[_.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function mE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function a(l,c,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];n.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function gE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const p=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(p){if(p==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";p="mediump"}return p==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=n.logarithmicDepthBuffer===!0,c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_TEXTURE_SIZE),f=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),u=d>0,v=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:u,maxSamples:v}}function vE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ir,a=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,p=v*4;let M=u.clippingState||null;l.value=M,M=d(x,f,p,g);for(let b=0;b!==p;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const u=g+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let p=0,M=g;p!==y;++p,M+=4)o.copy(h[p]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function _E(t){let e=new WeakMap;function n(o,a){return a===Fu?o.mapping=ms:a===Ou&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fu||a===Ou)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ry(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class xE extends ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qr=4,np=[.125,.215,.35,.446,.526,.582],or=20,Dc=new xE,ip=new je;let Uc=null,Ic=0,Fc=0,Oc=!1;const rr=(1+Math.sqrt(5))/2,zr=1/rr,rp=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,rr,zr),new F(0,rr,-zr),new F(zr,0,rr),new F(-zr,0,rr),new F(rr,zr,0),new F(-rr,zr,0)];class sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Uc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Ic,Fc),this._renderer.xr.enabled=Oc,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:nl,format:Hn,colorSpace:Xi,depthBuffer:!1},r=op(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yE(s)),this._blurMaterial=SE(s,e,n)}return r}_compileMaterial(e){const n=new Rn(this._lodPlanes[0],e);this._renderer.compile(n,Dc)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ip),d.toneMapping=Oi,d.autoClear=!1;const g=new ll({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),x=new Rn(new Co,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(ip),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;pa(r,v*p,u>2?p:0,p,p),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rp[(r-1)%rp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Rn(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*or-1),y=s/x,m=isFinite(s)?1+Math.floor(d*y):or;m>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);const u=[];let v=0;for(let T=0;T<or;++T){const P=T/y,E=Math.exp(-P*P/2);u.push(E),T===0?v+=E:T<m&&(v+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=x,f.mipInt.value=p-i;const M=this._sizeLods[r],b=3*M*(r>p-Qr?r-p+Qr:0),A=4*(this._cubeSize-M);pa(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(h,Dc)}}function yE(t){const e=[],n=[],i=[];let r=t;const s=t-Qr+1+np.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Qr?l=np[o-t+Qr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,x=6,y=3,m=2,u=1,v=new Float32Array(y*x*g),p=new Float32Array(m*x*g),M=new Float32Array(u*x*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,P=A>2?0:-1,E=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(E,y*x*A),p.set(f,m*x*A);const _=[A,A,A,A,A,A];M.set(_,u*x*A)}const b=new jn;b.setAttribute("position",new Ln(v,y)),b.setAttribute("uv",new Ln(p,m)),b.setAttribute("faceIndex",new Ln(M,u)),e.push(b),r>Qr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function op(t,e,n){const i=new xr(t,e,n);return i.texture.mapping=Tl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function SE(t,e,n){const i=new Float32Array(or),r=new F(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ap(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function lp(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ME(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fu||l===Ou,d=l===ms||l===gs;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new sp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new sp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function EE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const x in g){const y=g[x];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,x=h.attributes.position;let y=0;if(g!==null){const v=g.array;y=g.version;for(let p=0,M=v.length;p<M;p+=3){const b=v[p+0],A=v[p+1],T=v[p+2];f.push(b,A,A,T,T,b)}}else if(x!==void 0){const v=x.array;y=x.version;for(let p=0,M=v.length/3-1;p<M;p+=3){const b=p+0,A=p+1,T=p+2;f.push(b,A,A,T,T,b)}}else return;const m=new(Zg(f)?rv:iv)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function TE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*o),n.update(f,i,1)}function c(h,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,h*o,g),n.update(f,i,g))}function d(h,f,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g;y++)this.render(h[y]/o,f[y]);else{x.multiDrawElementsWEBGL(i,f,0,s,h,0,g);let y=0;for(let m=0;m<g;m++)y+=f[m];n.update(y,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function AE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function CE(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var g=_;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let b=a.attributes.position.count*M,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*A*4*h),P=new Jg(T,b,A,h);P.type=Ci,P.needsUpdate=!0;const E=M*4;for(let U=0;U<h;U++){const H=u[U],D=v[U],Y=p[U],X=b*A*4*U;for(let J=0;J<H.count;J++){const Q=J*E;x===!0&&(r.fromBufferAttribute(H,J),T[X+Q+0]=r.x,T[X+Q+1]=r.y,T[X+Q+2]=r.z,T[X+Q+3]=0),y===!0&&(r.fromBufferAttribute(D,J),T[X+Q+4]=r.x,T[X+Q+5]=r.y,T[X+Q+6]=r.z,T[X+Q+7]=0),m===!0&&(r.fromBufferAttribute(Y,J),T[X+Q+8]=r.x,T[X+Q+9]=r.y,T[X+Q+10]=r.z,T[X+Q+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new ke(b,A)},i.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function RE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class uv extends Zt{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:os,d!==os&&d!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===os&&(i=vs),i===void 0&&d===go&&(i=Mo),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const dv=new Zt,fv=new uv(1,1);fv.compareFunction=Kg;const hv=new Jg,pv=new fy,mv=new av,cp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),hp=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cp[r];if(s===void 0&&(s=new Float32Array(r),cp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function St(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bl(t,e){let n=up[e];n===void 0&&(n=new Int32Array(e),up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),St(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),St(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),St(n,e)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;hp.set(i),t.uniformMatrix2fv(this.addr,!1,hp),St(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;fp.set(i),t.uniformMatrix3fv(this.addr,!1,fp),St(n,i)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),St(n,e)}else{if(yt(n,i))return;dp.set(i),t.uniformMatrix4fv(this.addr,!1,dp),St(n,i)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),St(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),St(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),St(n,e)}}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),St(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),St(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),St(n,e)}}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?fv:dv;n.setTexture2D(e||s,r)}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||pv,r)}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mv,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hv,r)}function qE(t){switch(t){case 5126:return bE;case 35664:return PE;case 35665:return LE;case 35666:return NE;case 35674:return DE;case 35675:return UE;case 35676:return IE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return kE;case 35669:case 35673:return zE;case 5125:return BE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return YE}}function $E(t,e){t.uniform1fv(this.addr,e)}function KE(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function ZE(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function QE(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function JE(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function e1(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function t1(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function n1(t,e){t.uniform1iv(this.addr,e)}function i1(t,e){t.uniform2iv(this.addr,e)}function r1(t,e){t.uniform3iv(this.addr,e)}function s1(t,e){t.uniform4iv(this.addr,e)}function o1(t,e){t.uniform1uiv(this.addr,e)}function a1(t,e){t.uniform2uiv(this.addr,e)}function l1(t,e){t.uniform3uiv(this.addr,e)}function c1(t,e){t.uniform4uiv(this.addr,e)}function u1(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||dv,s[o])}function d1(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||pv,s[o])}function f1(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||mv,s[o])}function h1(t,e,n){const i=this.cache,r=e.length,s=bl(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hv,s[o])}function p1(t){switch(t){case 5126:return $E;case 35664:return KE;case 35665:return ZE;case 35666:return QE;case 35674:return JE;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}class m1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qE(n.type)}}class g1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p1(n.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function pp(t,e){t.seq.push(e),t.map[e.id]=e}function _1(t,e,n){const i=t.name,r=i.length;for(kc.lastIndex=0;;){const s=kc.exec(i),o=kc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pp(n,c===void 0?new m1(a,t,e):new g1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new v1(a),pp(n,h)),n=h}}}class Pa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);_1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function mp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const x1=37297;let y1=0;function S1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function M1(t){const e=Ye.getPrimaries(Ye.workingColorSpace),n=Ye.getPrimaries(t);let i;switch(e===n?i="":e===sl&&n===rl?i="LinearDisplayP3ToLinearSRGB":e===rl&&n===sl&&(i="LinearSRGBToLinearDisplayP3"),t){case Xi:case Al:return[i,"LinearTransferOETF"];case On:case kd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function gp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+S1(t.getShaderSource(e),o)}else return r}function E1(t,e){const n=M1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function w1(t,e){let n;switch(e){case bx:n="Linear";break;case Px:n="Reinhard";break;case Lx:n="OptimizedCineon";break;case Nx:n="ACESFilmic";break;case Ux:n="AgX";break;case Ix:n="Neutral";break;case Dx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function T1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function A1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function C1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vs(t){return t!==""}function vp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hu(t){return t.replace(R1,P1)}const b1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P1(t,e){let n=Ne[e];if(n===void 0){const i=b1.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hu(n)}const L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xp(t){return t.replace(L1,N1)}function N1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function U1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case Tl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function F1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bg:e="ENVMAP_BLENDING_MULTIPLY";break;case Cx:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function O1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function k1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=D1(n),c=U1(n),d=I1(n),h=F1(n),f=O1(n),g=T1(n),x=A1(s),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),u.length>0&&(u+=`
`)):(m=[yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),u=[yp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Oi?w1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,E1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Hu(o),o=vp(o,n),o=_p(o,n),a=Hu(a),a=vp(a,n),a=_p(a,n),o=xp(o),a=xp(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const p=v+m+o,M=v+u+a,b=mp(r,r.VERTEX_SHADER,p),A=mp(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(U){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),D=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(A).trim();let X=!0,J=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const Q=gp(r,b,"vertex"),N=gp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+Q+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||Y==="")&&(J=!1);J&&(U.diagnostics={runnable:X,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(b),r.deleteShader(A),P=new Pa(r,y),E=C1(r,y)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,x1)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let z1=0;class B1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new H1(e),n.set(e,i)),i}}class H1{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}}function V1(t,e,n,i,r,s,o){const a=new tv,l=new B1,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,_,U,H,D){const Y=H.fog,X=D.geometry,J=E.isMeshStandardMaterial?H.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||J),N=Q&&Q.mapping===Tl?Q.image.height:null,W=x[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=j!==void 0?j.length:0;let me=0;X.morphAttributes.position!==void 0&&(me=1),X.morphAttributes.normal!==void 0&&(me=2),X.morphAttributes.color!==void 0&&(me=3);let Ve,G,te,ce;if(W){const Pt=kn[W];Ve=Pt.vertexShader,G=Pt.fragmentShader}else Ve=E.vertexShader,G=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),ce=l.getFragmentShaderID(E);const ae=t.getRenderTarget(),Pe=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,ze=!!E.map,O=!!E.matcap,Fe=!!Q,Ee=!!E.aoMap,vt=!!E.lightMap,Te=!!E.bumpMap,qe=!!E.normalMap,C=!!E.displacementMap,S=!!E.emissiveMap,V=!!E.metalnessMap,q=!!E.roughnessMap,$=E.anisotropy>0,K=E.clearcoat>0,Se=E.iridescence>0,ee=E.sheen>0,_e=E.transmission>0,Me=$&&!!E.anisotropyMap,se=K&&!!E.clearcoatMap,de=K&&!!E.clearcoatNormalMap,Ae=K&&!!E.clearcoatRoughnessMap,fe=Se&&!!E.iridescenceMap,he=Se&&!!E.iridescenceThicknessMap,Oe=ee&&!!E.sheenColorMap,Be=ee&&!!E.sheenRoughnessMap,We=!!E.specularMap,Ge=!!E.specularColorMap,tt=!!E.specularIntensityMap,ge=_e&&!!E.transmissionMap,R=_e&&!!E.thicknessMap,re=!!E.gradientMap,ne=!!E.alphaMap,ve=E.alphaTest>0,xe=!!E.alphaHash,$e=!!E.extensions;let nt=Oi;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(nt=t.toneMapping);const st={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Ve,fragmentShader:G,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ue,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Xi,alphaToCoverage:!!E.alphaToCoverage,map:ze,matcap:O,envMap:Fe,envMapMode:Fe&&Q.mapping,envMapCubeUVHeight:N,aoMap:Ee,lightMap:vt,bumpMap:Te,normalMap:qe,displacementMap:f&&C,emissiveMap:S,normalMapObjectSpace:qe&&E.normalMapType===Kx,normalMapTangentSpace:qe&&E.normalMapType===$x,metalnessMap:V,roughnessMap:q,anisotropy:$,anisotropyMap:Me,clearcoat:K,clearcoatMap:se,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,iridescence:Se,iridescenceMap:fe,iridescenceThicknessMap:he,sheen:ee,sheenColorMap:Oe,sheenRoughnessMap:Be,specularMap:We,specularColorMap:Ge,specularIntensityMap:tt,transmission:_e,transmissionMap:ge,thicknessMap:R,gradientMap:re,opaque:E.transparent===!1&&E.blending===ss&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:xe,combine:E.combine,mapUv:ze&&y(E.map.channel),aoMapUv:Ee&&y(E.aoMap.channel),lightMapUv:vt&&y(E.lightMap.channel),bumpMapUv:Te&&y(E.bumpMap.channel),normalMapUv:qe&&y(E.normalMap.channel),displacementMapUv:C&&y(E.displacementMap.channel),emissiveMapUv:S&&y(E.emissiveMap.channel),metalnessMapUv:V&&y(E.metalnessMap.channel),roughnessMapUv:q&&y(E.roughnessMap.channel),anisotropyMapUv:Me&&y(E.anisotropyMap.channel),clearcoatMapUv:se&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:de&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&y(E.sheenRoughnessMap.channel),specularMapUv:We&&y(E.specularMap.channel),specularColorMapUv:Ge&&y(E.specularColorMap.channel),specularIntensityMapUv:tt&&y(E.specularIntensityMap.channel),transmissionMapUv:ge&&y(E.transmissionMap.channel),thicknessMapUv:R&&y(E.thicknessMap.channel),alphaMapUv:ne&&y(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qe||$),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(ze||ne),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:nt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ti,flipSided:E.side===Kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$e&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function u(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)_.push(U),_.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(_,E),p(_,E),_.push(t.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function v(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function p(E,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),E.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const _=x[E.type];let U;if(_){const H=kn[_];U=wy.clone(H.uniforms)}else U=E.uniforms;return U}function b(E,_){let U;for(let H=0,D=d.length;H<D;H++){const Y=d[H];if(Y.cacheKey===_){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new k1(t,_,E,s),d.push(U)),U}function A(E){if(--E.usedTimes===0){const _=d.indexOf(E);d[_]=d[d.length-1],d.pop(),E.destroy()}}function T(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:P}}function G1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function W1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,x,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function a(h,f,g,x,y,m){const u=o(h,f,g,x,y,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,x,y,m){const u=o(h,f,g,x,y,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||W1),i.length>1&&i.sort(f||Sp),r.length>1&&r.sort(f||Sp)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function j1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Mp,t.set(i,[o])):r>=s.length?(o=new Mp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function X1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new je};break;case"SpotLight":n={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Y1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let q1=0;function $1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function K1(t){const e=new X1,n=Y1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new gt,o=new gt;function a(c,d){let h=0,f=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let x=0,y=0,m=0,u=0,v=0,p=0,M=0,b=0,A=0,T=0,P=0;c.sort($1);const E=d===!0?Math.PI:1;for(let U=0,H=c.length;U<H;U++){const D=c[U],Y=D.color,X=D.intensity,J=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*X*E,f+=Y.g*X*E,g+=Y.b*X*E;else if(D.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(D.sh.coefficients[N],X);P++}else if(D.isDirectionalLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const W=D.shadow,j=n.get(D);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=Q,i.directionalShadowMatrix[x]=D.shadow.matrix,p++}i.directional[x]=N,x++}else if(D.isSpotLight){const N=e.get(D);N.position.setFromMatrixPosition(D.matrixWorld),N.color.copy(Y).multiplyScalar(X*E),N.distance=J,N.coneCos=Math.cos(D.angle),N.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),N.decay=D.decay,i.spot[m]=N;const W=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,W.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[m]=W.matrix,D.castShadow){const j=n.get(D);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=Q,b++}m++}else if(D.isRectAreaLight){const N=e.get(D);N.color.copy(Y).multiplyScalar(X),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),i.rectArea[u]=N,u++}else if(D.isPointLight){const N=e.get(D);if(N.color.copy(D.color).multiplyScalar(D.intensity*E),N.distance=D.distance,N.decay=D.decay,D.castShadow){const W=D.shadow,j=n.get(D);j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=Q,i.pointShadowMatrix[y]=D.shadow.matrix,M++}i.point[y]=N,y++}else if(D.isHemisphereLight){const N=e.get(D);N.skyColor.copy(D.color).multiplyScalar(X*E),N.groundColor.copy(D.groundColor).multiplyScalar(X*E),i.hemi[v]=N,v++}}u>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=g;const _=i.hash;(_.directionalLength!==x||_.pointLength!==y||_.spotLength!==m||_.rectAreaLength!==u||_.hemiLength!==v||_.numDirectionalShadows!==p||_.numPointShadows!==M||_.numSpotShadows!==b||_.numSpotMaps!==A||_.numLightProbes!==P)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=u,i.point.length=y,i.hemi.length=v,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,_.directionalLength=x,_.pointLength=y,_.spotLength=m,_.rectAreaLength=u,_.hemiLength=v,_.numDirectionalShadows=p,_.numPointShadows=M,_.numSpotShadows=b,_.numSpotMaps=A,_.numLightProbes=P,i.version=q1++)}function l(c,d){let h=0,f=0,g=0,x=0,y=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const p=c[u];if(p.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(p.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(p.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(p.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(p.width*.5,0,0),M.halfHeight.set(0,p.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(p.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(p.matrixWorld),M.position.applyMatrix4(m),f++}else if(p.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(p.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Ep(t){const e=new K1(t),n=[],i=[];function r(){n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Z1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ep(t),e.set(r,[a])):s>=o.length?(a=new Ep(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Q1 extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J1 extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nw(t,e,n){let i=new lv;const r=new ke,s=new ke,o=new Ct,a=new Q1({depthPacking:qx}),l=new J1,c={},d=n.maxTextureSize,h={[Hi]:Kt,[Kt]:Hi,[ti]:ti},f=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new jn;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Rn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg;let u=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),_=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const D=u!==Qn&&this.type===Qn,Y=u===Qn&&this.type!==Qn;for(let X=0,J=A.length;X<J;X++){const Q=A[X],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const W=N.getFrameExtents();if(r.multiply(W),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/W.x),r.x=s.x*W.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/W.y),r.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||D===!0||Y===!0){const ie=this.type!==Qn?{minFilter:gn,magFilter:gn}:{};N.map!==null&&N.map.dispose(),N.map=new xr(r.x,r.y,ie),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const j=N.getViewportCount();for(let ie=0;ie<j;ie++){const me=N.getViewport(ie);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(o),N.updateMatrices(Q,ie),i=N.getFrustum(),M(T,P,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===Qn&&v(N,P),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,_,U)};function v(A,T){const P=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,P,f,y,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,P,g,y,null)}function p(A,T,P,E){let _=null;const U=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)_=U;else if(_=P.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=_.uuid,D=T.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let X=Y[D];X===void 0&&(X=_.clone(),Y[D]=X,T.addEventListener("dispose",b)),_=X}if(_.visible=T.visible,_.wireframe=T.wireframe,E===Qn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:h[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=t.properties.get(_);H.light=P}return _}function M(A,T,P,E,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=e.update(A),Y=A.material;if(Array.isArray(Y)){const X=D.groups;for(let J=0,Q=X.length;J<Q;J++){const N=X[J],W=Y[N.materialIndex];if(W&&W.visible){const j=p(A,W,E,_);A.onBeforeShadow(t,A,T,P,D,j,N),t.renderBufferDirect(P,null,D,j,A,N),A.onAfterShadow(t,A,T,P,D,j,N)}}}else if(Y.visible){const X=p(A,Y,E,_);A.onBeforeShadow(t,A,T,P,D,X,null),t.renderBufferDirect(P,null,D,X,A,null),A.onAfterShadow(t,A,T,P,D,X,null)}}const H=A.children;for(let D=0,Y=H.length;D<Y;D++)M(H[D],T,P,E,_)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const E=c[P],_=A.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function iw(t){function e(){let R=!1;const re=new Ct;let ne=null;const ve=new Ct(0,0,0,0);return{setMask:function(xe){ne!==xe&&!R&&(t.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){R=xe},setClear:function(xe,$e,nt,st,Pt){Pt===!0&&(xe*=st,$e*=st,nt*=st),re.set(xe,$e,nt,st),ve.equals(re)===!1&&(t.clearColor(xe,$e,nt,st),ve.copy(re))},reset:function(){R=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let R=!1,re=null,ne=null,ve=null;return{setTest:function(xe){xe?ce(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(xe){re!==xe&&!R&&(t.depthMask(xe),re=xe)},setFunc:function(xe){if(ne!==xe){switch(xe){case yx:t.depthFunc(t.NEVER);break;case Sx:t.depthFunc(t.ALWAYS);break;case Mx:t.depthFunc(t.LESS);break;case tl:t.depthFunc(t.LEQUAL);break;case Ex:t.depthFunc(t.EQUAL);break;case wx:t.depthFunc(t.GEQUAL);break;case Tx:t.depthFunc(t.GREATER);break;case Ax:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=xe}},setLocked:function(xe){R=xe},setClear:function(xe){ve!==xe&&(t.clearDepth(xe),ve=xe)},reset:function(){R=!1,re=null,ne=null,ve=null}}}function i(){let R=!1,re=null,ne=null,ve=null,xe=null,$e=null,nt=null,st=null,Pt=null;return{setTest:function(Ze){R||(Ze?ce(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!R&&(t.stencilMask(Ze),re=Ze)},setFunc:function(Ze,Dn,Un){(ne!==Ze||ve!==Dn||xe!==Un)&&(t.stencilFunc(Ze,Dn,Un),ne=Ze,ve=Dn,xe=Un)},setOp:function(Ze,Dn,Un){($e!==Ze||nt!==Dn||st!==Un)&&(t.stencilOp(Ze,Dn,Un),$e=Ze,nt=Dn,st=Un)},setLocked:function(Ze){R=Ze},setClear:function(Ze){Pt!==Ze&&(t.clearStencil(Ze),Pt=Ze)},reset:function(){R=!1,re=null,ne=null,ve=null,xe=null,$e=null,nt=null,st=null,Pt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],g=null,x=!1,y=null,m=null,u=null,v=null,p=null,M=null,b=null,A=new je(0,0,0),T=0,P=!1,E=null,_=null,U=null,H=null,D=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=J>=2);let N=null,W={};const j=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),me=new Ct().fromArray(j),Ve=new Ct().fromArray(ie);function G(R,re,ne,ve){const xe=new Uint8Array(4),$e=t.createTexture();t.bindTexture(R,$e),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<ne;nt++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(re+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return $e}const te={};te[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(tl),Te(!1),qe(oh),ce(t.CULL_FACE),Ee(Fi);function ce(R){c[R]!==!0&&(t.enable(R),c[R]=!0)}function ae(R){c[R]!==!1&&(t.disable(R),c[R]=!1)}function Pe(R,re){return d[R]!==re?(t.bindFramebuffer(R,re),d[R]=re,R===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=re),R===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ue(R,re){let ne=f,ve=!1;if(R){ne=h.get(re),ne===void 0&&(ne=[],h.set(re,ne));const xe=R.textures;if(ne.length!==xe.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let $e=0,nt=xe.length;$e<nt;$e++)ne[$e]=t.COLOR_ATTACHMENT0+$e;ne.length=xe.length,ve=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ne)}function ze(R){return g!==R?(t.useProgram(R),g=R,!0):!1}const O={[sr]:t.FUNC_ADD,[ix]:t.FUNC_SUBTRACT,[rx]:t.FUNC_REVERSE_SUBTRACT};O[sx]=t.MIN,O[ox]=t.MAX;const Fe={[ax]:t.ZERO,[lx]:t.ONE,[cx]:t.SRC_COLOR,[Uu]:t.SRC_ALPHA,[mx]:t.SRC_ALPHA_SATURATE,[hx]:t.DST_COLOR,[dx]:t.DST_ALPHA,[ux]:t.ONE_MINUS_SRC_COLOR,[Iu]:t.ONE_MINUS_SRC_ALPHA,[px]:t.ONE_MINUS_DST_COLOR,[fx]:t.ONE_MINUS_DST_ALPHA,[gx]:t.CONSTANT_COLOR,[vx]:t.ONE_MINUS_CONSTANT_COLOR,[_x]:t.CONSTANT_ALPHA,[xx]:t.ONE_MINUS_CONSTANT_ALPHA};function Ee(R,re,ne,ve,xe,$e,nt,st,Pt,Ze){if(R===Fi){x===!0&&(ae(t.BLEND),x=!1);return}if(x===!1&&(ce(t.BLEND),x=!0),R!==nx){if(R!==y||Ze!==P){if((m!==sr||p!==sr)&&(t.blendEquation(t.FUNC_ADD),m=sr,p=sr),Ze)switch(R){case ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Du:t.blendFunc(t.ONE,t.ONE);break;case ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Du:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ah:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}u=null,v=null,M=null,b=null,A.set(0,0,0),T=0,y=R,P=Ze}return}xe=xe||re,$e=$e||ne,nt=nt||ve,(re!==m||xe!==p)&&(t.blendEquationSeparate(O[re],O[xe]),m=re,p=xe),(ne!==u||ve!==v||$e!==M||nt!==b)&&(t.blendFuncSeparate(Fe[ne],Fe[ve],Fe[$e],Fe[nt]),u=ne,v=ve,M=$e,b=nt),(st.equals(A)===!1||Pt!==T)&&(t.blendColor(st.r,st.g,st.b,Pt),A.copy(st),T=Pt),y=R,P=!1}function vt(R,re){R.side===ti?ae(t.CULL_FACE):ce(t.CULL_FACE);let ne=R.side===Kt;re&&(ne=!ne),Te(ne),R.blending===ss&&R.transparent===!1?Ee(Fi):Ee(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),r.setMask(R.colorWrite);const ve=R.stencilWrite;o.setTest(ve),ve&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),S(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(R){E!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),E=R)}function qe(R){R!==J0?(ce(t.CULL_FACE),R!==_&&(R===oh?t.cullFace(t.BACK):R===ex?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),_=R}function C(R){R!==U&&(X&&t.lineWidth(R),U=R)}function S(R,re,ne){R?(ce(t.POLYGON_OFFSET_FILL),(H!==re||D!==ne)&&(t.polygonOffset(re,ne),H=re,D=ne)):ae(t.POLYGON_OFFSET_FILL)}function V(R){R?ce(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function q(R){R===void 0&&(R=t.TEXTURE0+Y-1),N!==R&&(t.activeTexture(R),N=R)}function $(R,re,ne){ne===void 0&&(N===null?ne=t.TEXTURE0+Y-1:ne=N);let ve=W[ne];ve===void 0&&(ve={type:void 0,texture:void 0},W[ne]=ve),(ve.type!==R||ve.texture!==re)&&(N!==ne&&(t.activeTexture(ne),N=ne),t.bindTexture(R,re||te[R]),ve.type=R,ve.texture=re)}function K(){const R=W[N];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(R){me.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),me.copy(R))}function We(R){Ve.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),Ve.copy(R))}function Ge(R,re){let ne=l.get(re);ne===void 0&&(ne=new WeakMap,l.set(re,ne));let ve=ne.get(R);ve===void 0&&(ve=t.getUniformBlockIndex(re,R.name),ne.set(R,ve))}function tt(R,re){const ve=l.get(re).get(R);a.get(re)!==ve&&(t.uniformBlockBinding(re,ve,R.__bindingPointIndex),a.set(re,ve))}function ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,W={},d={},h=new WeakMap,f=[],g=null,x=!1,y=null,m=null,u=null,v=null,p=null,M=null,b=null,A=new je(0,0,0),T=0,P=!1,E=null,_=null,U=null,H=null,D=null,me.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ae,bindFramebuffer:Pe,drawBuffers:Ue,useProgram:ze,setBlending:Ee,setMaterial:vt,setFlipSided:Te,setCullFace:qe,setLineWidth:C,setPolygonOffset:S,setScissorTest:V,activeTexture:q,bindTexture:$,unbindTexture:K,compressedTexImage2D:Se,compressedTexImage3D:ee,texImage2D:he,texImage3D:Oe,updateUBOMapping:Ge,uniformBlockBinding:tt,texStorage2D:Ae,texStorage3D:fe,texSubImage2D:_e,texSubImage3D:Me,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Be,viewport:We,reset:ge}}function rw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return g?new OffscreenCanvas(C,S):al("canvas")}function y(C,S,V){let q=1;const $=qe(C);if(($.width>V||$.height>V)&&(q=V/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(q*$.width),Se=Math.floor(q*$.height);h===void 0&&(h=x(K,Se));const ee=S?x(K,Se):h;return ee.width=K,ee.height=Se,ee.getContext("2d").drawImage(C,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+Se+")."),ee}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==gn&&C.minFilter!==Cn}function u(C){t.generateMipmap(C)}function v(C,S,V,q,$=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===t.RED&&(V===t.FLOAT&&(K=t.R32F),V===t.HALF_FLOAT&&(K=t.R16F),V===t.UNSIGNED_BYTE&&(K=t.R8)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.R8UI),V===t.UNSIGNED_SHORT&&(K=t.R16UI),V===t.UNSIGNED_INT&&(K=t.R32UI),V===t.BYTE&&(K=t.R8I),V===t.SHORT&&(K=t.R16I),V===t.INT&&(K=t.R32I)),S===t.RG&&(V===t.FLOAT&&(K=t.RG32F),V===t.HALF_FLOAT&&(K=t.RG16F),V===t.UNSIGNED_BYTE&&(K=t.RG8)),S===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(K=t.RG8UI),V===t.UNSIGNED_SHORT&&(K=t.RG16UI),V===t.UNSIGNED_INT&&(K=t.RG32UI),V===t.BYTE&&(K=t.RG8I),V===t.SHORT&&(K=t.RG16I),V===t.INT&&(K=t.RG32I)),S===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),S===t.RGBA){const Se=$?il:Ye.getTransfer(q);V===t.FLOAT&&(K=t.RGBA32F),V===t.HALF_FLOAT&&(K=t.RGBA16F),V===t.UNSIGNED_BYTE&&(K=Se===Je?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function p(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==gn&&C.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){const S=C.target;S.removeEventListener("dispose",M),A(S),S.isVideoTexture&&d.delete(S)}function b(C){const S=C.target;S.removeEventListener("dispose",b),P(S)}function A(C){const S=i.get(C);if(S.__webglInit===void 0)return;const V=C.source,q=f.get(V);if(q){const $=q[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(C),Object.keys(q).length===0&&f.delete(V)}i.remove(C)}function T(C){const S=i.get(C);t.deleteTexture(S.__webglTexture);const V=C.source,q=f.get(V);delete q[S.__cacheKey],o.memory.textures--}function P(C){const S=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let $=0;$<S.__webglFramebuffer[q].length;$++)t.deleteFramebuffer(S.__webglFramebuffer[q][$]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=C.textures;for(let q=0,$=V.length;q<$;q++){const K=i.get(V[q]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(V[q])}i.remove(C)}let E=0;function _(){E=0}function U(){const C=E;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),E+=1,C}function H(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function D(C,S){const V=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,C,S);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function Y(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function X(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function J(C,S){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ve(V,C,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const Q={[ku]:t.REPEAT,[ur]:t.CLAMP_TO_EDGE,[zu]:t.MIRRORED_REPEAT},N={[gn]:t.NEAREST,[Fx]:t.NEAREST_MIPMAP_NEAREST,[Yo]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[ac]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},W={[Zx]:t.NEVER,[iy]:t.ALWAYS,[Qx]:t.LESS,[Kg]:t.LEQUAL,[Jx]:t.EQUAL,[ny]:t.GEQUAL,[ey]:t.GREATER,[ty]:t.NOTEQUAL};function j(C,S){if(S.type===Ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===ac||S.magFilter===Yo||S.magFilter===dr||S.minFilter===Cn||S.minFilter===ac||S.minFilter===Yo||S.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Q[S.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Q[S.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Q[S.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,N[S.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,W[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===gn||S.minFilter!==Yo&&S.minFilter!==dr||S.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",M));const q=S.source;let $=f.get(q);$===void 0&&($={},f.set(q,$));const K=H(S);if(K!==C.__cacheKey){$[K]===void 0&&($[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),$[K].usedTimes++;const Se=$[C.__cacheKey];Se!==void 0&&($[C.__cacheKey].usedTimes--,Se.usedTimes===0&&T(S)),C.__cacheKey=K,C.__webglTexture=$[K].texture}return V}function me(C,S,V){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const $=ie(C,S),K=S.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+V);const Se=i.get(K);if(K.version!==Se.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const ee=Ye.getPrimaries(Ye.workingColorSpace),_e=S.colorSpace===wi?null:Ye.getPrimaries(S.colorSpace),Me=S.colorSpace===wi||ee===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let se=y(S.image,!1,r.maxTextureSize);se=Te(S,se);const de=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type);let fe=v(S.internalFormat,de,Ae,S.colorSpace,S.isVideoTexture);j(q,S);let he;const Oe=S.mipmaps,Be=S.isVideoTexture!==!0&&fe!==$g,We=Se.__version===void 0||$===!0,Ge=K.dataReady,tt=p(S,se);if(S.isDepthTexture)fe=t.DEPTH_COMPONENT16,S.type===Ci?fe=t.DEPTH_COMPONENT32F:S.type===vs?fe=t.DEPTH_COMPONENT24:S.type===Mo&&(fe=t.DEPTH24_STENCIL8),We&&(Be?n.texStorage2D(t.TEXTURE_2D,1,fe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,fe,se.width,se.height,0,de,Ae,null));else if(S.isDataTexture)if(Oe.length>0){Be&&We&&n.texStorage2D(t.TEXTURE_2D,tt,fe,Oe[0].width,Oe[0].height);for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],Be?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,de,Ae,he.data):n.texImage2D(t.TEXTURE_2D,ge,fe,he.width,he.height,0,de,Ae,he.data);S.generateMipmaps=!1}else Be?(We&&n.texStorage2D(t.TEXTURE_2D,tt,fe,se.width,se.height),Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,de,Ae,se.data)):n.texImage2D(t.TEXTURE_2D,0,fe,se.width,se.height,0,de,Ae,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,fe,Oe[0].width,Oe[0].height,se.depth);for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],S.format!==Hn?de!==null?Be?Ge&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,se.depth,de,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,fe,he.width,he.height,se.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,he.width,he.height,se.depth,de,Ae,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,fe,he.width,he.height,se.depth,0,de,Ae,he.data)}else{Be&&We&&n.texStorage2D(t.TEXTURE_2D,tt,fe,Oe[0].width,Oe[0].height);for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],S.format!==Hn?de!==null?Be?Ge&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,he.width,he.height,de,Ae,he.data):n.texImage2D(t.TEXTURE_2D,ge,fe,he.width,he.height,0,de,Ae,he.data)}else if(S.isDataArrayTexture)Be?(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,tt,fe,se.width,se.height,se.depth),Ge&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Ae,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,se.width,se.height,se.depth,0,de,Ae,se.data);else if(S.isData3DTexture)Be?(We&&n.texStorage3D(t.TEXTURE_3D,tt,fe,se.width,se.height,se.depth),Ge&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Ae,se.data)):n.texImage3D(t.TEXTURE_3D,0,fe,se.width,se.height,se.depth,0,de,Ae,se.data);else if(S.isFramebufferTexture){if(We)if(Be)n.texStorage2D(t.TEXTURE_2D,tt,fe,se.width,se.height);else{let ge=se.width,R=se.height;for(let re=0;re<tt;re++)n.texImage2D(t.TEXTURE_2D,re,fe,ge,R,0,de,Ae,null),ge>>=1,R>>=1}}else if(Oe.length>0){if(Be&&We){const ge=qe(Oe[0]);n.texStorage2D(t.TEXTURE_2D,tt,fe,ge.width,ge.height)}for(let ge=0,R=Oe.length;ge<R;ge++)he=Oe[ge],Be?Ge&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,de,Ae,he):n.texImage2D(t.TEXTURE_2D,ge,fe,de,Ae,he);S.generateMipmaps=!1}else if(Be){if(We){const ge=qe(se);n.texStorage2D(t.TEXTURE_2D,tt,fe,ge.width,ge.height)}Ge&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ae,se)}else n.texImage2D(t.TEXTURE_2D,0,fe,de,Ae,se);m(S)&&u(q),Se.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ve(C,S,V){if(S.image.length!==6)return;const q=ie(C,S),$=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const K=i.get($);if($.version!==K.__version||q===!0){n.activeTexture(t.TEXTURE0+V);const Se=Ye.getPrimaries(Ye.workingColorSpace),ee=S.colorSpace===wi?null:Ye.getPrimaries(S.colorSpace),_e=S.colorSpace===wi||Se===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,de=[];for(let R=0;R<6;R++)!Me&&!se?de[R]=y(S.image[R],!0,r.maxCubemapSize):de[R]=se?S.image[R].image:S.image[R],de[R]=Te(S,de[R]);const Ae=de[0],fe=s.convert(S.format,S.colorSpace),he=s.convert(S.type),Oe=v(S.internalFormat,fe,he,S.colorSpace),Be=S.isVideoTexture!==!0,We=K.__version===void 0||q===!0,Ge=$.dataReady;let tt=p(S,Ae);j(t.TEXTURE_CUBE_MAP,S);let ge;if(Me){Be&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,tt,Oe,Ae.width,Ae.height);for(let R=0;R<6;R++){ge=de[R].mipmaps;for(let re=0;re<ge.length;re++){const ne=ge[re];S.format!==Hn?fe!==null?Be?Ge&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re,0,0,ne.width,ne.height,fe,ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re,Oe,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re,0,0,ne.width,ne.height,fe,he,ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re,Oe,ne.width,ne.height,0,fe,he,ne.data)}}}else{if(ge=S.mipmaps,Be&&We){ge.length>0&&tt++;const R=qe(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,tt,Oe,R.width,R.height)}for(let R=0;R<6;R++)if(se){Be?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,de[R].width,de[R].height,fe,he,de[R].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Oe,de[R].width,de[R].height,0,fe,he,de[R].data);for(let re=0;re<ge.length;re++){const ve=ge[re].image[R].image;Be?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re+1,0,0,ve.width,ve.height,fe,he,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re+1,Oe,ve.width,ve.height,0,fe,he,ve.data)}}else{Be?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,fe,he,de[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Oe,fe,he,de[R]);for(let re=0;re<ge.length;re++){const ne=ge[re];Be?Ge&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re+1,0,0,fe,he,ne.image[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,re+1,Oe,fe,he,ne.image[R])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),K.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,V,q,$,K){const Se=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),_e=v(V.internalFormat,Se,ee,V.colorSpace);if(!i.get(S).__hasExternalTextures){const se=Math.max(1,S.width>>K),de=Math.max(1,S.height>>K);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,K,_e,se,de,S.depth,0,Se,ee,null):n.texImage2D($,K,_e,se,de,0,Se,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ee(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,$,i.get(V).__webglTexture,0,Fe(S)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,$,i.get(V).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(C,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let q=t.DEPTH_COMPONENT24;if(V||Ee(S)){const $=S.depthTexture;$&&$.isDepthTexture&&($.type===Ci?q=t.DEPTH_COMPONENT32F:$.type===vs&&(q=t.DEPTH_COMPONENT24));const K=Fe(S);Ee(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,q,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,q,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const q=Fe(S);V&&Ee(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):Ee(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const q=S.textures;for(let $=0;$<q.length;$++){const K=q[$],Se=s.convert(K.format,K.colorSpace),ee=s.convert(K.type),_e=v(K.internalFormat,Se,ee,K.colorSpace),Me=Fe(S);V&&Ee(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,_e,S.width,S.height):Ee(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,_e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,_e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const q=i.get(S.depthTexture).__webglTexture,$=Fe(S);if(S.depthTexture.format===os)Ee(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===go)Ee(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ae(C){const S=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=t.createRenderbuffer(),te(S.__webglDepthbuffer[q],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),te(S.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(C,S,V){const q=i.get(C);S!==void 0&&G(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ae(C)}function Ue(C){const S=C.texture,V=i.get(C),q=i.get(S);C.addEventListener("dispose",b);const $=C.textures,K=C.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let _e=0;_e<S.mipmaps.length;_e++)V.__webglFramebuffer[ee][_e]=t.createFramebuffer()}else V.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)V.__webglFramebuffer[ee]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ee=0,_e=$.length;ee<_e;ee++){const Me=i.get($[ee]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ee(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<$.length;ee++){const _e=$[ee];V.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const Me=s.convert(_e.format,_e.colorSpace),se=s.convert(_e.type),de=v(_e.internalFormat,Me,se,_e.colorSpace,C.isXRRenderTarget===!0),Ae=Fe(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),te(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),j(t.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)G(V.__webglFramebuffer[ee][_e],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e);else G(V.__webglFramebuffer[ee],C,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ee=0,_e=$.length;ee<_e;ee++){const Me=$[ee],se=i.get(Me);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),j(t.TEXTURE_2D,Me),G(V.__webglFramebuffer,C,Me,t.COLOR_ATTACHMENT0+ee,t.TEXTURE_2D,0),m(Me)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),j(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let _e=0;_e<S.mipmaps.length;_e++)G(V.__webglFramebuffer[_e],C,S,t.COLOR_ATTACHMENT0,ee,_e);else G(V.__webglFramebuffer,C,S,t.COLOR_ATTACHMENT0,ee,0);m(S)&&u(ee),n.unbindTexture()}C.depthBuffer&&ae(C)}function ze(C){const S=C.textures;for(let V=0,q=S.length;V<q;V++){const $=S[V];if(m($)){const K=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get($).__webglTexture;n.bindTexture(K,Se),u(K),n.unbindTexture()}}}function O(C){if(C.samples>0&&Ee(C)===!1){const S=C.textures,V=C.width,q=C.height;let $=t.COLOR_BUFFER_BIT;const K=[],Se=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=i.get(C),_e=S.length>1;if(_e)for(let Me=0;Me<S.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){K.push(t.COLOR_ATTACHMENT0+Me),C.depthBuffer&&K.push(Se);const se=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(se===!1&&(C.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&ee.__isTransmissionRenderTarget!==!0&&($|=t.STENCIL_BUFFER_BIT)),_e&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ee.__webglColorRenderbuffer[Me]),se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),_e){const de=i.get(S[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,V,q,0,0,V,q,$,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<S.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,ee.__webglColorRenderbuffer[Me]);const se=i.get(S[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function Fe(C){return Math.min(r.maxSamples,C.samples)}function Ee(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function vt(C){const S=o.render.frame;d.get(C)!==S&&(d.set(C,S),C.update())}function Te(C,S){const V=C.colorSpace,q=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Xi&&V!==wi&&(Ye.getTransfer(V)===Je?(q!==Hn||$!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=_,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=Pe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Ee}function sw(t,e){function n(i,r=wi){let s;const o=Ye.getTransfer(r);if(i===ki)return t.UNSIGNED_BYTE;if(i===Wg)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ox)return t.BYTE;if(i===kx)return t.SHORT;if(i===Vg)return t.UNSIGNED_SHORT;if(i===Gg)return t.INT;if(i===vs)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===nl)return t.HALF_FLOAT;if(i===Bx)return t.ALPHA;if(i===Hx)return t.RGB;if(i===Hn)return t.RGBA;if(i===Vx)return t.LUMINANCE;if(i===Gx)return t.LUMINANCE_ALPHA;if(i===os)return t.DEPTH_COMPONENT;if(i===go)return t.DEPTH_STENCIL;if(i===Wx)return t.RED;if(i===Xg)return t.RED_INTEGER;if(i===jx)return t.RG;if(i===Yg)return t.RG_INTEGER;if(i===qg)return t.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===dc)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ch||i===uh||i===dh||i===fh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$g)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===hh||i===ph)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hh)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ph)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mh||i===gh||i===vh||i===_h||i===xh||i===yh||i===Sh||i===Mh||i===Eh||i===wh||i===Th||i===Ah||i===Ch||i===Rh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_h)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Th)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ah)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fc||i===bh||i===Ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fc)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xx||i===Lh||i===Nh||i===Dh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class ow extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ma extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,x=.005;c.inputState.pinching&&f>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Vi({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rn(new Rl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class dw extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,x=null;const y=new uw,m=n.getContextAttributes();let u=null,v=null;const p=[],M=[],b=new ke;let A=null;const T=new pn;T.layers.enable(1),T.viewport=new Ct;const P=new pn;P.layers.enable(2),P.viewport=new Ct;const E=[T,P],_=new ow;_.layers.enable(1),_.layers.enable(2);let U=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=p[G];return te===void 0&&(te=new zc,p[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=p[G];return te===void 0&&(te=new zc,p[G]=te),te.getGripSpace()},this.getHand=function(G){let te=p[G];return te===void 0&&(te=new zc,p[G]=te),te.getHandSpace()};function D(G){const te=M.indexOf(G.inputSource);if(te===-1)return;const ce=p[te];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||o),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",X);for(let G=0;G<p.length;G++){const te=M[G];te!==null&&(M[G]=null,p[G].disconnect(te))}U=null,H=null,y.reset(),e.setRenderTarget(u),g=null,f=null,h=null,r=null,v=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new xr(g.framebufferWidth,g.framebufferHeight,{format:Hn,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ce=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?go:os,ce=m.stencil?Mo:vs);const Pe={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new xr(f.textureWidth,f.textureHeight,{format:Hn,type:ki,depthTexture:new uv(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ue=e.properties.get(v);Ue.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(G){for(let te=0;te<G.removed.length;te++){const ce=G.removed[te],ae=M.indexOf(ce);ae>=0&&(M[ae]=null,p[ae].disconnect(ce))}for(let te=0;te<G.added.length;te++){const ce=G.added[te];let ae=M.indexOf(ce);if(ae===-1){for(let Ue=0;Ue<p.length;Ue++)if(Ue>=M.length){M.push(ce),ae=Ue;break}else if(M[Ue]===null){M[Ue]=ce,ae=Ue;break}if(ae===-1)break}const Pe=p[ae];Pe&&Pe.connect(ce)}}const J=new F,Q=new F;function N(G,te,ce){J.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const ae=J.distanceTo(Q),Pe=te.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,ze=Pe[14]/(Pe[10]-1),O=Pe[14]/(Pe[10]+1),Fe=(Pe[9]+1)/Pe[5],Ee=(Pe[9]-1)/Pe[5],vt=(Pe[8]-1)/Pe[0],Te=(Ue[8]+1)/Ue[0],qe=ze*vt,C=ze*Te,S=ae/(-vt+Te),V=S*-vt;te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(V),G.translateZ(S),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const q=ze+S,$=O+S,K=qe-V,Se=C+(ae-V),ee=Fe*O/$*q,_e=Ee*O/$*q;G.projectionMatrix.makePerspective(K,Se,ee,_e,q,$),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;y.texture!==null&&(G.near=y.depthNear,G.far=y.depthFar),_.near=P.near=T.near=G.near,_.far=P.far=T.far=G.far,(U!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),U=_.near,H=_.far,T.near=U,T.far=H,P.near=U,P.far=H,T.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const te=G.parent,ce=_.cameras;W(_,te);for(let ae=0;ae<ce.length;ae++)W(ce[ae],te);ce.length===2?N(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),j(G,_,te)};function j(G,te,ce){ce===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Bu*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function me(G,te){if(d=te.getViewerPose(c||o),x=te,d!==null){const ce=d.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let ae=!1;ce.length!==_.cameras.length&&(_.cameras.length=0,ae=!0);for(let Ue=0;Ue<ce.length;Ue++){const ze=ce[Ue];let O=null;if(g!==null)O=g.getViewport(ze);else{const Ee=h.getViewSubImage(f,ze);O=Ee.viewport,Ue===0&&(e.setRenderTargetTextures(v,Ee.colorTexture,f.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(v))}let Fe=E[Ue];Fe===void 0&&(Fe=new pn,Fe.layers.enable(Ue),Fe.viewport=new Ct,E[Ue]=Fe),Fe.matrix.fromArray(ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(O.x,O.y,O.width,O.height),Ue===0&&(_.matrix.copy(Fe.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ae===!0&&_.cameras.push(Fe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ue=h.getDepthInformation(ce[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(e,Ue,r.renderState)}}for(let ce=0;ce<p.length;ce++){const ae=M[ce],Pe=p[ce];ae!==null&&Pe!==void 0&&Pe.update(ae,te,c||o)}y.render(e,_),ie&&ie(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}const Ve=new cv;Ve.setAnimationLoop(me),this.setAnimationLoop=function(G){ie=G},this.dispose=function(){}}}const er=new ui,fw=new gt;function hw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,sv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,p,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,p):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Kt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Kt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),p=v.envMap,M=v.envMapRotation;if(p&&(m.envMap.value=p,er.copy(M),er.x*=-1,er.y*=-1,er.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),m.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(er)),m.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*b,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,p){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=p*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,p){const M=p.program;i.uniformBlockBinding(v,M)}function c(v,p){let M=r[v.id];M===void 0&&(x(v),M=d(v),r[v.id]=M,v.addEventListener("dispose",m));const b=p.program;i.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function d(v){const p=h();v.__bindingPointIndex=p;const M=t.createBuffer(),b=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const p=r[v.id],M=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let A=0,T=M.length;A<T;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,_=P.length;E<_;E++){const U=P[E];if(g(U,A,E,b)===!0){const H=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let Y=0;for(let X=0;X<D.length;X++){const J=D[X],Q=y(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,H+Y,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,p,M,b){const A=v.value,T=p+"_"+M;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const P=b[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function x(v){const p=v.uniforms;let M=0;const b=16;for(let T=0,P=p.length;T<P;T++){const E=Array.isArray(p[T])?p[T]:[p[T]];for(let _=0,U=E.length;_<U;_++){const H=E[_],D=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,X=D.length;Y<X;Y++){const J=D[Y],Q=y(J),N=M%b;N!==0&&b-N<Q.boundary&&(M+=b-N),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Q.storage}}}const A=M%b;return A>0&&(M+=b-A),v.__size=M,v.__cache={},this}function y(v){const p={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(p.boundary=4,p.storage=4):v.isVector2?(p.boundary=8,p.storage=8):v.isVector3||v.isColor?(p.boundary=16,p.storage=12):v.isVector4?(p.boundary=16,p.storage=16):v.isMatrix3?(p.boundary=48,p.storage=48):v.isMatrix4?(p.boundary=64,p.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),p}function m(v){const p=v.target;p.removeEventListener("dispose",m);const M=o.indexOf(p.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class mw{constructor(e={}){const{canvas:n=sy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),x=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this._useLegacyLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1;const p=this;let M=!1,b=0,A=0,T=null,P=-1,E=null;const _=new Ct,U=new Ct;let H=null;const D=new je(0);let Y=0,X=n.width,J=n.height,Q=1,N=null,W=null;const j=new Ct(0,0,X,J),ie=new Ct(0,0,X,J);let me=!1;const Ve=new lv;let G=!1,te=!1;const ce=new gt,ae=new ke,Pe=new F,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?Q:1}let O=i;function Fe(w,I){const z=n.getContext(w,I);return z!==null?z:null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",ve,!1),O===null){const I="webgl2";if(O=Fe(I,w),O===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,vt,Te,qe,C,S,V,q,$,K,Se,ee,_e,Me,se,de,Ae,fe,he,Oe,Be,We,Ge,tt;function ge(){Ee=new EE(O),Ee.init(),vt=new gE(O,Ee,e),We=new sw(O,Ee),Te=new iw(O),qe=new AE(O),C=new G1,S=new rw(O,Ee,Te,C,vt,We,qe),V=new _E(p),q=new ME(p),$=new Ly(O),Ge=new pE(O,$),K=new wE(O,$,qe,Ge),Se=new RE(O,K,$,qe),he=new CE(O,vt,S),de=new vE(C),ee=new V1(p,V,q,Ee,vt,Ge,de),_e=new hw(p,C),Me=new j1,se=new Z1(Ee),fe=new hE(p,V,q,Te,Se,f,l),Ae=new nw(p,Se,vt),tt=new pw(O,qe,vt,Te),Oe=new mE(O,Ee,qe),Be=new TE(O,Ee,qe),qe.programs=ee.programs,p.capabilities=vt,p.extensions=Ee,p.properties=C,p.renderLists=Me,p.shadowMap=Ae,p.state=Te,p.info=qe}ge();const R=new dw(p,O);this.xr=R,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(X,J,!1))},this.getSize=function(w){return w.set(X,J)},this.setSize=function(w,I,z=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,J=I,n.width=Math.floor(w*Q),n.height=Math.floor(I*Q),z===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(X*Q,J*Q).floor()},this.setDrawingBufferSize=function(w,I,z){X=w,J=I,Q=z,n.width=Math.floor(w*z),n.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,I,z,B){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,I,z,B),Te.viewport(_.copy(j).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,I,z,B){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,I,z,B),Te.scissor(U.copy(ie).multiplyScalar(Q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(w){Te.setScissorTest(me=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){W=w},this.getClearColor=function(w){return w.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(w=!0,I=!0,z=!0){let B=0;if(w){let k=!1;if(T!==null){const le=T.texture.format;k=le===qg||le===Yg||le===Xg}if(k){const le=T.texture.type,pe=le===ki||le===vs||le===Vg||le===Mo||le===Wg||le===jg,ye=fe.getClearColor(),we=fe.getClearAlpha(),Re=ye.r,Ce=ye.g,be=ye.b;pe?(g[0]=Re,g[1]=Ce,g[2]=be,g[3]=we,O.clearBufferuiv(O.COLOR,0,g)):(x[0]=Re,x[1]=Ce,x[2]=be,x[3]=we,O.clearBufferiv(O.COLOR,0,x))}else B|=O.COLOR_BUFFER_BIT}I&&(B|=O.DEPTH_BUFFER_BIT),z&&(B|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),se.dispose(),C.dispose(),V.dispose(),q.dispose(),Se.dispose(),Ge.dispose(),tt.dispose(),ee.dispose(),R.dispose(),R.removeEventListener("sessionstart",Dn),R.removeEventListener("sessionend",Un),Yi.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=qe.autoReset,I=Ae.enabled,z=Ae.autoUpdate,B=Ae.needsUpdate,k=Ae.type;ge(),qe.autoReset=w,Ae.enabled=I,Ae.autoUpdate=z,Ae.needsUpdate=B,Ae.type=k}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const I=w.target;I.removeEventListener("dispose",xe),$e(I)}function $e(w){nt(w),C.remove(w)}function nt(w){const I=C.get(w).programs;I!==void 0&&(I.forEach(function(z){ee.releaseProgram(z)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,B,k,le){I===null&&(I=Ue);const pe=k.isMesh&&k.matrixWorld.determinant()<0,ye=Sv(w,I,z,B,k);Te.setMaterial(B,pe);let we=z.index,Re=1;if(B.wireframe===!0){if(we=K.getWireframeAttribute(z),we===void 0)return;Re=2}const Ce=z.drawRange,be=z.attributes.position;let ft=Ce.start*Re,en=(Ce.start+Ce.count)*Re;le!==null&&(ft=Math.max(ft,le.start*Re),en=Math.min(en,(le.start+le.count)*Re)),we!==null?(ft=Math.max(ft,0),en=Math.min(en,we.count)):be!=null&&(ft=Math.max(ft,0),en=Math.min(en,be.count));const Mt=en-ft;if(Mt<0||Mt===1/0)return;Ge.setup(k,B,ye,z,we);let Xn,ot=Oe;if(we!==null&&(Xn=$.get(we),ot=Be,ot.setIndex(Xn)),k.isMesh)B.wireframe===!0?(Te.setLineWidth(B.wireframeLinewidth*ze()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(k.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),Te.setLineWidth(Le*ze()),k.isLineSegments?ot.setMode(O.LINES):k.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else k.isPoints?ot.setMode(O.POINTS):k.isSprite&&ot.setMode(O.TRIANGLES);if(k.isBatchedMesh)ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ot.renderInstances(ft,Mt,k.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ll=Math.min(z.instanceCount,Le);ot.renderInstances(ft,Mt,Ll)}else ot.render(ft,Mt)};function st(w,I,z){w.transparent===!0&&w.side===ti&&w.forceSinglePass===!1?(w.side=Kt,w.needsUpdate=!0,bo(w,I,z),w.side=Hi,w.needsUpdate=!0,bo(w,I,z),w.side=ti):bo(w,I,z)}this.compile=function(w,I,z=null){z===null&&(z=w),m=se.get(z),m.init(),v.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==z&&w.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(p._useLegacyLights);const B=new Set;return w.traverse(function(k){const le=k.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ye=le[pe];st(ye,z,k),B.add(ye)}else st(le,z,k),B.add(le)}),v.pop(),m=null,B},this.compileAsync=function(w,I,z=null){const B=this.compile(w,I,z);return new Promise(k=>{function le(){if(B.forEach(function(pe){C.get(pe).currentProgram.isReady()&&B.delete(pe)}),B.size===0){k(w);return}setTimeout(le,10)}Ee.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Pt=null;function Ze(w){Pt&&Pt(w)}function Dn(){Yi.stop()}function Un(){Yi.start()}const Yi=new cv;Yi.setAnimationLoop(Ze),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(w){Pt=w,R.setAnimationLoop(w),w===null?Yi.stop():Yi.start()},R.addEventListener("sessionstart",Dn),R.addEventListener("sessionend",Un),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(I),I=R.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,I,T),m=se.get(w,v.length),m.init(),v.push(m),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(ce),te=this.localClippingEnabled,G=de.init(this.clippingPlanes,te),y=Me.get(w,u.length),y.init(),u.push(y),Gd(w,I,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(N,W),this.info.render.frame++,G===!0&&de.beginShadows();const z=m.state.shadowsArray;if(Ae.render(z,w,I),G===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&fe.render(y,w),m.setupLights(p._useLegacyLights),I.isArrayCamera){const B=I.cameras;for(let k=0,le=B.length;k<le;k++){const pe=B[k];Wd(y,w,pe,pe.viewport)}}else Wd(y,w,I);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(p,w,I),Ge.resetDefaultState(),P=-1,E=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Gd(w,I,z,B){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ve.intersectsSprite(w)){B&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const pe=Se.update(w),ye=w.material;ye.visible&&y.push(w,pe,ye,z,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ve.intersectsObject(w))){const pe=Se.update(w),ye=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Pe.copy(pe.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(ye)){const we=pe.groups;for(let Re=0,Ce=we.length;Re<Ce;Re++){const be=we[Re],ft=ye[be.materialIndex];ft&&ft.visible&&y.push(w,pe,ft,z,Pe.z,be)}}else ye.visible&&y.push(w,pe,ye,z,Pe.z,null)}}const le=w.children;for(let pe=0,ye=le.length;pe<ye;pe++)Gd(le[pe],I,z,B)}function Wd(w,I,z,B){const k=w.opaque,le=w.transmissive,pe=w.transparent;m.setupLightsView(z),G===!0&&de.setGlobalState(p.clippingPlanes,z),le.length>0&&yv(k,le,I,z),B&&Te.viewport(_.copy(B)),k.length>0&&Ro(k,I,z),le.length>0&&Ro(le,I,z),pe.length>0&&Ro(pe,I,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function yv(w,I,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new xr(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?nl:ki,minFilter:dr,samples:4,stencilBuffer:s});const Re=C.get(m.state.transmissionRenderTarget);Re.__isTransmissionRenderTarget=!0}const le=m.state.transmissionRenderTarget;p.getDrawingBufferSize(ae),le.setSize(ae.x,ae.y);const pe=p.getRenderTarget();p.setRenderTarget(le),p.getClearColor(D),Y=p.getClearAlpha(),Y<1&&p.setClearColor(16777215,.5),p.clear();const ye=p.toneMapping;p.toneMapping=Oi,Ro(w,z,B),S.updateMultisampleRenderTarget(le),S.updateRenderTargetMipmap(le);let we=!1;for(let Re=0,Ce=I.length;Re<Ce;Re++){const be=I[Re],ft=be.object,en=be.geometry,Mt=be.material,Xn=be.group;if(Mt.side===ti&&ft.layers.test(B.layers)){const ot=Mt.side;Mt.side=Kt,Mt.needsUpdate=!0,jd(ft,z,B,en,Mt,Xn),Mt.side=ot,Mt.needsUpdate=!0,we=!0}}we===!0&&(S.updateMultisampleRenderTarget(le),S.updateRenderTargetMipmap(le)),p.setRenderTarget(pe),p.setClearColor(D,Y),p.toneMapping=ye}function Ro(w,I,z){const B=I.isScene===!0?I.overrideMaterial:null;for(let k=0,le=w.length;k<le;k++){const pe=w[k],ye=pe.object,we=pe.geometry,Re=B===null?pe.material:B,Ce=pe.group;ye.layers.test(z.layers)&&jd(ye,I,z,we,Re,Ce)}}function jd(w,I,z,B,k,le){w.onBeforeRender(p,I,z,B,k,le),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(p,I,z,B,w,le),k.transparent===!0&&k.side===ti&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,p.renderBufferDirect(z,I,B,k,w,le),k.side=Hi,k.needsUpdate=!0,p.renderBufferDirect(z,I,B,k,w,le),k.side=ti):p.renderBufferDirect(z,I,B,k,w,le),w.onAfterRender(p,I,z,B,k,le)}function bo(w,I,z){I.isScene!==!0&&(I=Ue);const B=C.get(w),k=m.state.lights,le=m.state.shadowsArray,pe=k.state.version,ye=ee.getParameters(w,k.state,le,I,z),we=ee.getProgramCacheKey(ye);let Re=B.programs;B.environment=w.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(w.isMeshStandardMaterial?q:V).get(w.envMap||B.environment),B.envMapRotation=B.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",xe),Re=new Map,B.programs=Re);let Ce=Re.get(we);if(Ce!==void 0){if(B.currentProgram===Ce&&B.lightsStateVersion===pe)return Yd(w,ye),Ce}else ye.uniforms=ee.getUniforms(w),w.onBuild(z,ye,p),w.onBeforeCompile(ye,p),Ce=ee.acquireProgram(ye,we),Re.set(we,Ce),B.uniforms=ye.uniforms;const be=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=de.uniform),Yd(w,ye),B.needsLights=Ev(w),B.lightsStateVersion=pe,B.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),B.currentProgram=Ce,B.uniformsList=null,Ce}function Xd(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Pa.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Yd(w,I){const z=C.get(w);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Sv(w,I,z,B,k){I.isScene!==!0&&(I=Ue),S.resetTextureUnits();const le=I.fog,pe=B.isMeshStandardMaterial?I.environment:null,ye=T===null?p.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xi,we=(B.isMeshStandardMaterial?q:V).get(B.envMap||pe),Re=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!z.morphAttributes.position,ft=!!z.morphAttributes.normal,en=!!z.morphAttributes.color;let Mt=Oi;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Mt=p.toneMapping);const Xn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=Xn!==void 0?Xn.length:0,Le=C.get(B),Ll=m.state.lights;if(G===!0&&(te===!0||w!==E)){const un=w===E&&B.id===P;de.setState(B,w,un)}let it=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ll.state.version||Le.outputColorSpace!==ye||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==we||B.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==de.numPlanes||Le.numIntersection!==de.numIntersection)||Le.vertexAlphas!==Re||Le.vertexTangents!==Ce||Le.morphTargets!==be||Le.morphNormals!==ft||Le.morphColors!==en||Le.toneMapping!==Mt||Le.morphTargetsCount!==ot)&&(it=!0):(it=!0,Le.__version=B.version);let qi=Le.currentProgram;it===!0&&(qi=bo(B,I,k));let qd=!1,ws=!1,Nl=!1;const Lt=qi.getUniforms(),fi=Le.uniforms;if(Te.useProgram(qi.program)&&(qd=!0,ws=!0,Nl=!0),B.id!==P&&(P=B.id,ws=!0),qd||E!==w){Lt.setValue(O,"projectionMatrix",w.projectionMatrix),Lt.setValue(O,"viewMatrix",w.matrixWorldInverse);const un=Lt.map.cameraPosition;un!==void 0&&un.setValue(O,Pe.setFromMatrixPosition(w.matrixWorld)),vt.logarithmicDepthBuffer&&Lt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Lt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,ws=!0,Nl=!0)}if(k.isSkinnedMesh){Lt.setOptional(O,k,"bindMatrix"),Lt.setOptional(O,k,"bindMatrixInverse");const un=k.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Lt.setValue(O,"boneTexture",un.boneTexture,S))}k.isBatchedMesh&&(Lt.setOptional(O,k,"batchingTexture"),Lt.setValue(O,"batchingTexture",k._matricesTexture,S));const Dl=z.morphAttributes;if((Dl.position!==void 0||Dl.normal!==void 0||Dl.color!==void 0)&&he.update(k,z,qi),(ws||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,Lt.setValue(O,"receiveShadow",k.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(fi.envMap.value=we,fi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(fi.envMapIntensity.value=I.environmentIntensity),ws&&(Lt.setValue(O,"toneMappingExposure",p.toneMappingExposure),Le.needsLights&&Mv(fi,Nl),le&&B.fog===!0&&_e.refreshFogUniforms(fi,le),_e.refreshMaterialUniforms(fi,B,Q,J,m.state.transmissionRenderTarget),Pa.upload(O,Xd(Le),fi,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Pa.upload(O,Xd(Le),fi,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Lt.setValue(O,"center",k.center),Lt.setValue(O,"modelViewMatrix",k.modelViewMatrix),Lt.setValue(O,"normalMatrix",k.normalMatrix),Lt.setValue(O,"modelMatrix",k.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const un=B.uniformsGroups;for(let Ul=0,wv=un.length;Ul<wv;Ul++){const $d=un[Ul];tt.update($d,qi),tt.bind($d,qi)}}return qi}function Mv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Ev(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,z){C.get(w.texture).__webglTexture=I,C.get(w.depthTexture).__webglTexture=z;const B=C.get(w);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const z=C.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){T=w,b=I,A=z;let B=!0,k=null,le=!1,pe=!1;if(w){const we=C.get(w);we.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(O.FRAMEBUFFER,null),B=!1):we.__webglFramebuffer===void 0?S.setupRenderTarget(w):we.__hasExternalTextures&&S.rebindTextures(w,C.get(w.texture).__webglTexture,C.get(w.depthTexture).__webglTexture);const Re=w.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(pe=!0);const Ce=C.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?k=Ce[I][z]:k=Ce[I],le=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?k=C.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?k=Ce[z]:k=Ce,_.copy(w.viewport),U.copy(w.scissor),H=w.scissorTest}else _.copy(j).multiplyScalar(Q).floor(),U.copy(ie).multiplyScalar(Q).floor(),H=me;if(Te.bindFramebuffer(O.FRAMEBUFFER,k)&&B&&Te.drawBuffers(w,k),Te.viewport(_),Te.scissor(U),Te.setScissorTest(H),le){const we=C.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,z)}else if(pe){const we=C.get(w.texture),Re=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,z||0,Re)}P=-1},this.readRenderTargetPixels=function(w,I,z,B,k,le,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=C.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){Te.bindFramebuffer(O.FRAMEBUFFER,ye);try{const we=w.texture,Re=we.format,Ce=we.type;if(Re!==Hn&&We.convert(Re)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const be=Ce===nl&&(Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float"));if(Ce!==ki&&We.convert(Ce)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&Ce!==Ci&&!be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-B&&z>=0&&z<=w.height-k&&O.readPixels(I,z,B,k,We.convert(Re),We.convert(Ce),le)}finally{const we=T!==null?C.get(T).__webglFramebuffer:null;Te.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,I,z=0){const B=Math.pow(2,-z),k=Math.floor(I.image.width*B),le=Math.floor(I.image.height*B);S.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,w.x,w.y,k,le),Te.unbindTexture()},this.copyTextureToTexture=function(w,I,z,B=0){const k=I.image.width,le=I.image.height,pe=We.convert(z.format),ye=We.convert(z.type);S.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,w.x,w.y,k,le,pe,ye,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,pe,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,B,w.x,w.y,pe,ye,I.image),B===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z,B,k=0){const le=Math.round(w.max.x-w.min.x),pe=Math.round(w.max.y-w.min.y),ye=w.max.z-w.min.z+1,we=We.convert(B.format),Re=We.convert(B.type);let Ce;if(B.isData3DTexture)S.setTexture3D(B,0),Ce=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),Ce=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const be=O.getParameter(O.UNPACK_ROW_LENGTH),ft=O.getParameter(O.UNPACK_IMAGE_HEIGHT),en=O.getParameter(O.UNPACK_SKIP_PIXELS),Mt=O.getParameter(O.UNPACK_SKIP_ROWS),Xn=O.getParameter(O.UNPACK_SKIP_IMAGES),ot=z.isCompressedTexture?z.mipmaps[k]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ot.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,w.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,w.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,w.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Ce,k,I.x,I.y,I.z,le,pe,ye,we,Re,ot.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Ce,k,I.x,I.y,I.z,le,pe,ye,we,ot.data):O.texSubImage3D(Ce,k,I.x,I.y,I.z,le,pe,ye,we,Re,ot),O.pixelStorei(O.UNPACK_ROW_LENGTH,be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft),O.pixelStorei(O.UNPACK_SKIP_PIXELS,en),O.pixelStorei(O.UNPACK_SKIP_ROWS,Mt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xn),k===0&&B.generateMipmaps&&O.generateMipmap(Ce),Te.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,Te.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kd?"display-p3":"srgb",n.unpackColorSpace=Ye.workingColorSpace===Al?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gw extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gv extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wp=new gt,Vu=new ev,ga=new Cl,va=new F;class vw extends Qt{constructor(e=new jn,n=new gv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(r),ga.radius+=s,e.ray.intersectsSphere(ga)===!1)return;wp.copy(r).invert(),Vu.copy(e.ray).applyMatrix4(wp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=f,y=g;x<y;x++){const m=c.getX(x);va.fromBufferAttribute(h,m),Tp(va,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,y=g;x<y;x++)va.fromBufferAttribute(h,x),Tp(va,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tp(t,e,n,i,r,s,o){const a=Vu.distanceSqToPoint(t);if(a<n){const l=new F;Vu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Pl extends jn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Wn(s,3)),this.setAttribute("normal",new Wn(s.slice(),3)),this.setAttribute("uv",new Wn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const p=new F,M=new F,b=new F;for(let A=0;A<n.length;A+=3)g(n[A+0],p),g(n[A+1],M),g(n[A+2],b),l(p,M,b,v)}function l(v,p,M,b){const A=b+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const E=v.clone().lerp(M,P/A),_=p.clone().lerp(M,P/A),U=A-P;for(let H=0;H<=U;H++)H===0&&P===A?T[P][H]=E:T[P][H]=E.clone().lerp(_,H/U)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const _=Math.floor(E/2);E%2===0?(f(T[P][_+1]),f(T[P+1][_]),f(T[P][_])):(f(T[P][_+1]),f(T[P+1][_+1]),f(T[P+1][_]))}}function c(v){const p=new F;for(let M=0;M<s.length;M+=3)p.x=s[M+0],p.y=s[M+1],p.z=s[M+2],p.normalize().multiplyScalar(v),s[M+0]=p.x,s[M+1]=p.y,s[M+2]=p.z}function d(){const v=new F;for(let p=0;p<s.length;p+=3){v.x=s[p+0],v.y=s[p+1],v.z=s[p+2];const M=m(v)/2/Math.PI+.5,b=u(v)/Math.PI+.5;o.push(M,1-b)}x(),h()}function h(){for(let v=0;v<o.length;v+=6){const p=o[v+0],M=o[v+2],b=o[v+4],A=Math.max(p,M,b),T=Math.min(p,M,b);A>.9&&T<.1&&(p<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function g(v,p){const M=v*3;p.x=e[M+0],p.y=e[M+1],p.z=e[M+2]}function x(){const v=new F,p=new F,M=new F,b=new F,A=new ke,T=new ke,P=new ke;for(let E=0,_=0;E<s.length;E+=9,_+=6){v.set(s[E+0],s[E+1],s[E+2]),p.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),A.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),P.set(o[_+4],o[_+5]),b.copy(v).add(p).add(M).divideScalar(3);const U=m(b);y(A,_+0,v,U),y(T,_+2,p,U),y(P,_+4,M,U)}}function y(v,p,M,b){b<0&&v.x===1&&(o[p]=v.x-1),M.x===0&&M.z===0&&(o[p]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.vertices,e.indices,e.radius,e.details)}}class Bd extends Pl{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Bd(e.radius,e.detail)}}class Hd extends Pl{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Hd(e.radius,e.detail)}}class _w{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ap(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ap();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ap(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);function xw(){const t=dt.useRef(null);return dt.useEffect(()=>{const e=t.current;if(!e)return;const n=new gw,i=new pn(70,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=26;const r=new mw({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const s=new Bd(9,1),o=new ll({color:3718648,wireframe:!0,transparent:!0,opacity:.12}),a=new Rn(s,o);n.add(a);const l=new Hd(4.5,0),c=new ll({color:8490232,wireframe:!0,transparent:!0,opacity:.22}),d=new Rn(l,c);n.add(d);const h=850,f=new jn,g=new Float32Array(h*3),x=[];for(let _=0;_<h*3;_+=3)g[_]=(Math.random()-.5)*85,g[_+1]=(Math.random()-.5)*85,g[_+2]=(Math.random()-.5)*55,x.push({x:(Math.random()-.5)*.012,y:(Math.random()-.5)*.012,z:(Math.random()-.5)*.012});f.setAttribute("position",new Ln(g,3));const y=new gv({color:16777215,size:.35,transparent:!0,opacity:.45,blending:Du}),m=new vw(f,y);n.add(m);let u=0,v=0,p=0,M=0;const b=_=>{u=(_.clientX-window.innerWidth/2)*.001,v=(_.clientY-window.innerHeight/2)*.001};window.addEventListener("mousemove",b,{passive:!0});const A=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",A);let T;const P=new _w,E=()=>{T=requestAnimationFrame(E);const _=P.getElapsedTime();p+=(u-p)*.04,M+=(v-M)*.04,i.position.x=p*14,i.position.y=-M*14,i.lookAt(n.position),a.rotation.x=_*.07,a.rotation.y=_*.11,d.rotation.x=-_*.14,d.rotation.y=-_*.18;const U=f.attributes.position.array;for(let H=0;H<h;H++){const D=H*3;U[D]+=x[H].x,U[D+1]+=x[H].y,U[D+2]+=x[H].z,Math.abs(U[D])>42&&(x[H].x*=-1),Math.abs(U[D+1])>42&&(x[H].y*=-1),Math.abs(U[D+2])>28&&(x[H].z*=-1)}f.attributes.position.needsUpdate=!0,r.render(n,i)};return E(),()=>{cancelAnimationFrame(T),window.removeEventListener("mousemove",b),window.removeEventListener("resize",A),e&&r.domElement&&e.removeChild(r.domElement),r.dispose()}},[]),L.jsx("div",{ref:t,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true"})}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=(t,e)=>{const n=dt.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...c},d)=>dt.createElement("svg",{ref:d,...yw,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Sw(t)}`,a].join(" "),...c},[...e.map(([h,f])=>dt.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=Jt("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=Jt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=Jt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=Jt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=Jt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=Jt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=Jt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=Jt("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=Jt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=Jt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=Jt("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=Jt("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=Jt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=Jt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Nw(){const[t,e]=dt.useState(!1);return dt.useEffect(()=>{const n=()=>{e(window.scrollY>20)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),L.jsx("header",{className:"fixed top-5 left-0 w-full z-50 flex justify-center px-4 pointer-events-none",children:L.jsxs("nav",{className:`pointer-events-auto flex items-center gap-3 sm:gap-6 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-2xl ${t?"bg-[#0d0d14]/80 backdrop-blur-xl border-white/15 shadow-black/80":"bg-[#0d0d14]/50 backdrop-blur-md border-white/10"}`,children:[L.jsxs("a",{href:"#",className:"flex items-center gap-2.5 font-bold text-sm tracking-tight text-white group",children:[L.jsx("div",{className:"w-6 h-6 rounded-md bg-white/10 border border-white/15 flex items-center justify-center font-mono text-xs text-sky-400 group-hover:border-sky-400/50 transition-colors",children:"AR"}),L.jsx("span",{className:"hidden sm:inline",children:"Abhishek Raj"})]}),L.jsx("div",{className:"h-4 w-[1px] bg-white/10"}),L.jsxs("ul",{className:"flex items-center gap-1 sm:gap-2",children:[L.jsx("li",{children:L.jsxs("a",{href:"#projects",className:"flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all",children:[L.jsx(Cw,{className:"w-3.5 h-3.5"}),L.jsx("span",{children:"Projects"})]})}),L.jsx("li",{children:L.jsxs("a",{href:"#capabilities",className:"flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all",children:[L.jsx(Tw,{className:"w-3.5 h-3.5"}),L.jsx("span",{children:"Systems"})]})}),L.jsx("li",{children:L.jsxs("a",{href:"#terminal",className:"flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all",children:[L.jsx(xv,{className:"w-3.5 h-3.5"}),L.jsx("span",{children:"Terminal"})]})})]}),L.jsx("div",{className:"h-4 w-[1px] bg-white/10"}),L.jsxs("a",{href:"https://github.com/abhishekraaj07",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all hover:scale-105 shadow-sm",children:[L.jsx(Vd,{className:"w-3.5 h-3.5"}),L.jsx("span",{children:"GitHub"})]})]})})}function Dw({onCopyEmail:t,copied:e}){return L.jsxs("section",{className:"min-h-screen flex flex-col justify-center pt-28 pb-16 relative z-10",children:[L.jsxs("div",{className:"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-xs w-fit mb-8 backdrop-blur-md",children:[L.jsxs("span",{className:"relative flex h-2 w-2",children:[L.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),L.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),L.jsx("span",{className:"font-medium tracking-wide",children:"AVAILABLE FOR HIGH-IMPACT ROLES & CONTRACTS"})]}),L.jsxs("h1",{className:"font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 max-w-4xl",children:["Architecting ",L.jsx("span",{className:"bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent",children:"3D Web Systems"})," & ",L.jsx("span",{className:"text-zinc-400 font-normal",children:"Resilient Code."})]}),L.jsxs("p",{className:"text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10",children:["I'm ",L.jsx("strong",{className:"text-white font-semibold",children:"Abhishek Raj"}),", a full-stack engineer building end-to-end distributed applications, zero-knowledge privacy protocols, and low-latency audio/streaming architectures."]}),L.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[L.jsxs("a",{href:"#projects",className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:shadow-white/10 hover:-translate-y-0.5",children:[L.jsx("span",{children:"Explore Projects"}),L.jsx(Mw,{className:"w-4 h-4"})]}),L.jsx("button",{onClick:t,className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all backdrop-blur-md hover:-translate-y-0.5",children:e?L.jsxs(L.Fragment,{children:[L.jsx(_v,{className:"w-4 h-4 text-emerald-400"}),L.jsx("span",{className:"text-emerald-400",children:"Email Copied to Clipboard"})]}):L.jsxs(L.Fragment,{children:[L.jsx(ww,{className:"w-4 h-4 text-zinc-400"}),L.jsx("span",{children:"Copy Contact Email"})]})})]}),L.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-20 pt-8 border-t border-white/10",children:[L.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm",children:[L.jsx("div",{className:"text-zinc-500 font-mono text-xs uppercase tracking-wider",children:"Architecture"}),L.jsx("div",{className:"text-2xl font-bold font-mono text-white mt-1",children:"Full-Stack"}),L.jsx("div",{className:"text-xs text-zinc-400 mt-0.5",children:"Distributed & Reactive"})]}),L.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm",children:[L.jsx("div",{className:"text-zinc-500 font-mono text-xs uppercase tracking-wider",children:"Privacy Model"}),L.jsx("div",{className:"text-2xl font-bold font-mono text-sky-400 mt-1",children:"Zero-Log"}),L.jsx("div",{className:"text-xs text-zinc-400 mt-0.5",children:"End-to-End Cryptography"})]}),L.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm",children:[L.jsx("div",{className:"text-zinc-500 font-mono text-xs uppercase tracking-wider",children:"Type Safety"}),L.jsx("div",{className:"text-2xl font-bold font-mono text-emerald-400 mt-1",children:"100%"}),L.jsx("div",{className:"text-xs text-zinc-400 mt-0.5",children:"TypeScript & Java 21"})]}),L.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm",children:[L.jsx("div",{className:"text-zinc-500 font-mono text-xs uppercase tracking-wider",children:"Visual Rendering"}),L.jsx("div",{className:"text-2xl font-bold font-mono text-indigo-400 mt-1",children:"WebGL 3D"}),L.jsx("div",{className:"text-xs text-zinc-400 mt-0.5",children:"Custom Three.js Scene"})]})]})]})}function Uw({project:t,onSelect:e}){const n=dt.useRef(null),[i,r]=dt.useState({x:50,y:50}),[s,o]=dt.useState({rotateX:0,rotateY:0}),a=c=>{if(!n.current)return;const d=n.current.getBoundingClientRect(),h=c.clientX-d.left,f=c.clientY-d.top,g=d.width/2,x=d.height/2,y=(f-x)/x*-8,m=(h-g)/g*8;r({x:h/d.width*100,y:f/d.height*100}),o({rotateX:y,rotateY:m})},l=()=>{o({rotateX:0,rotateY:0})};return L.jsxs("div",{ref:n,onMouseMove:a,onMouseLeave:l,onClick:()=>e(t),style:{transform:`perspective(1000px) rotateX(${s.rotateX}deg) rotateY(${s.rotateY}deg)`,transition:"transform 0.15s ease-out, border-color 0.2s, box-shadow 0.2s"},className:"group relative rounded-2xl bg-[#0b0b12]/80 border border-white/10 hover:border-white/25 p-7 flex flex-col justify-between cursor-pointer overflow-hidden backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-sky-500/5",children:[L.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{background:`radial-gradient(400px circle at ${i.x}% ${i.y}%, rgba(56, 189, 248, 0.12), transparent 80%)`}}),L.jsxs("div",{className:"relative z-10",children:[L.jsxs("div",{className:"flex items-center justify-between mb-4",children:[L.jsx("span",{className:"font-mono text-xs text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2.5 py-1 rounded-full",children:t.category}),L.jsxs("span",{className:"font-mono text-xs text-zinc-500",children:[t.number," // 06"]})]}),L.jsx("h3",{className:"font-display text-2xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight",children:t.title}),L.jsx("p",{className:"text-xs font-mono text-zinc-400 mb-3",children:t.subtitle}),L.jsx("p",{className:"text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6",children:t.description}),L.jsx("div",{className:"flex flex-wrap gap-1.5 mb-6",children:t.tags.map(c=>L.jsx("span",{className:"text-xs font-mono text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md",children:c},c))})]}),L.jsxs("div",{className:"relative z-10 pt-4 border-t border-white/10 flex items-center justify-between",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),L.jsxs("span",{className:"font-mono text-xs text-zinc-400",children:[t.stats.metric," • ",t.stats.label]})]}),L.jsxs("button",{className:"flex items-center gap-1 text-xs font-semibold text-white group-hover:text-sky-400 transition-colors",children:[L.jsx("span",{children:"Details"}),L.jsx(vv,{className:"w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})]})]})]})}function Iw({project:t,onClose:e}){return dt.useEffect(()=>{const n=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),t?L.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in",children:L.jsxs("div",{className:"relative w-full max-w-2xl bg-[#0d0d16] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:[L.jsx("button",{onClick:e,className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors",children:L.jsx(Lw,{className:"w-5 h-5"})}),L.jsxs("div",{className:"mb-6",children:[L.jsxs("div",{className:"flex items-center gap-2 mb-2 font-mono text-xs text-sky-400",children:[L.jsx("span",{children:t.category}),L.jsx("span",{children:"•"}),L.jsx("span",{className:"text-zinc-500",children:t.status})]}),L.jsx("h2",{className:"font-display text-3xl font-extrabold text-white tracking-tight",children:t.title}),L.jsx("p",{className:"font-mono text-xs text-zinc-400 mt-1",children:t.subtitle})]}),L.jsx("p",{className:"text-sm text-zinc-300 leading-relaxed mb-6",children:t.description}),L.jsxs("div",{className:"mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10",children:[L.jsx("h4",{className:"font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3 font-semibold",children:"Key Architecture & Engineering Highlights"}),L.jsx("ul",{className:"space-y-2",children:t.architecture.map((n,i)=>L.jsxs("li",{className:"flex items-start gap-2.5 text-xs text-zinc-300",children:[L.jsx(Ew,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),L.jsx("span",{children:n})]},i))})]}),L.jsxs("div",{className:"mb-8",children:[L.jsx("h4",{className:"font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 font-semibold",children:"Technologies & Frameworks"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(n=>L.jsx("span",{className:"font-mono text-xs text-zinc-200 bg-white/10 border border-white/10 px-3 py-1 rounded-md",children:n},n))})]}),L.jsxs("div",{className:"flex items-center gap-4 pt-4 border-t border-white/10",children:[L.jsxs("a",{href:t.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors",children:[L.jsx(Vd,{className:"w-4 h-4"}),L.jsx("span",{children:"Repository & Code"})]}),L.jsx("button",{onClick:e,className:"px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors",children:"Close"})]})]})}):null}const Fw=[{category:"Frontend & Creative Web",icon:"Layout",skills:[{name:"TypeScript / JavaScript",level:"Advanced",highlight:"ESNext / Async Patterns"},{name:"React 18 & Astro",level:"Advanced",highlight:"SSR, Islands Architecture"},{name:"Three.js & WebGL",level:"Intermediate",highlight:"Shaders, Geometries, Parallax"},{name:"Tailwind CSS",level:"Advanced",highlight:"Design Systems & Utility CSS"},{name:"WebSockets & Web Audio",level:"Advanced",highlight:"Realtime Duplex & Buffering"}]},{category:"Backend & Distributed Systems",icon:"Server",skills:[{name:"Python 3.12",level:"Advanced",highlight:"FastAPI, AsyncIO, Daemons"},{name:"Java 21 HotSpot",level:"Advanced",highlight:"Virtual Threads, Concurrency, OOP"},{name:"Node.js & Bun",level:"Advanced",highlight:"High-throughput microservices"},{name:"Cloudflare Workers",level:"Intermediate",highlight:"Edge Compute & KV Store"},{name:"REST & GraphQL APIs",level:"Advanced",highlight:"Strict Contracts & OpenAPI"}]},{category:"Databases & Infrastructure",icon:"Database",skills:[{name:"SQLite & Content-Addressable",level:"Advanced",highlight:"Embedded & Deduplication"},{name:"PostgreSQL & Redis",level:"Intermediate",highlight:"ACID Transactions & Caching"},{name:"Git & GitHub Actions",level:"Advanced",highlight:"Automated CI/CD Workflows"},{name:"Docker",level:"Intermediate",highlight:"Multi-stage Container Builds"},{name:"PowerShell & Bash Scripting",level:"Advanced",highlight:"Workstation OS Automation"}]}];function Ow(){const t=e=>{switch(e){case"Layout":return L.jsx(bw,{className:"w-5 h-5 text-sky-400"});case"Server":return L.jsx(Pw,{className:"w-5 h-5 text-emerald-400"});case"Database":return L.jsx(Aw,{className:"w-5 h-5 text-indigo-400"});default:return null}};return L.jsxs("section",{id:"capabilities",className:"py-24 relative z-10",children:[L.jsxs("div",{className:"flex flex-col mb-12",children:[L.jsxs("span",{className:"font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2",children:[L.jsx("span",{className:"w-4 h-[1px] bg-sky-400"}),"Technical Domains"]}),L.jsx("h2",{className:"font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Capabilities & Systems Stack"})]}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:Fw.map((e,n)=>L.jsxs("div",{className:"rounded-2xl bg-[#0b0b12]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl",children:[L.jsxs("div",{className:"flex items-center gap-3 mb-6 pb-4 border-b border-white/10",children:[L.jsx("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/10",children:t(e.icon)}),L.jsx("h3",{className:"font-display text-lg font-bold text-white tracking-tight",children:e.category})]}),L.jsx("div",{className:"space-y-4",children:e.skills.map((i,r)=>L.jsxs("div",{className:"group",children:[L.jsxs("div",{className:"flex justify-between items-center text-xs mb-1",children:[L.jsx("span",{className:"font-semibold text-zinc-200 group-hover:text-white transition-colors",children:i.name}),L.jsx("span",{className:"font-mono text-zinc-500",children:i.level})]}),L.jsx("div",{className:"text-[11px] font-mono text-zinc-400",children:i.highlight})]},r))})]},n))})]})}function kw(){const[t,e]=dt.useState([{type:"output",text:"Initializing Abhishek Raj Workstation Shell v3.2..."},{type:"output",text:"Type 'help' to view available commands."}]),[n,i]=dt.useState(""),r=dt.useRef(null),s={help:`Available commands:
• bio       - Overview & engineering focus
• projects  - Core production builds
• stack     - Languages & architecture
• contact   - Get in touch
• clear     - Clear terminal buffer`,bio:"Abhishek Raj is a software engineer specializing in high-throughput full-stack architectures, zero-knowledge privacy protocols, WebSockets, and audio streaming systems.",projects:`1. Private Chat App (E2EE/Astro/Capacitor)
2. Spotify Web Audio Engine (Web Audio API/Queue)
3. YouTube Stream Pipeline (Python/FFmpeg daemon)
4. Nexus Java Engine (Concurrent Loom workers)
5. MiroFish Swarm Simulation (Emergence physics)`,stack:`• Languages: TypeScript, JavaScript, Java 21, Python 3.12, SQL
• Frameworks: Astro, React 18, Tailwind CSS, Three.js
• Infrastructure: Cloudflare Workers, Docker, SQLite, Git`,contact:`• Email: abhishekraaj07@users.noreply.github.com
• GitHub: https://github.com/abhishekraaj07
• Location: New Delhi, India (IST)`},o=a=>{if(a.key==="Enter"){const l=n.trim().toLowerCase();if(i(""),!l)return;if(l==="clear"){e([]);return}const c=[...t,{type:"input",text:l}];s[l]?c.push({type:"output",text:s[l]}):c.push({type:"error",text:`Command not recognized: '${l}'. Type 'help' for options.`}),e(c)}};return dt.useEffect(()=>{var a;(a=r.current)==null||a.scrollIntoView({behavior:"smooth"})},[t]),L.jsxs("section",{id:"terminal",className:"py-16 relative z-10",children:[L.jsxs("div",{className:"flex flex-col mb-8",children:[L.jsxs("span",{className:"font-mono text-xs text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2",children:[L.jsx(xv,{className:"w-3.5 h-3.5"}),"Interactive Workstation"]}),L.jsx("h2",{className:"font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Developer Terminal"})]}),L.jsxs("div",{className:"rounded-2xl bg-[#08080d] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs",children:[L.jsxs("div",{className:"bg-[#101018] px-4 py-3 border-b border-white/10 flex items-center justify-between",children:[L.jsxs("div",{className:"flex items-center gap-2",children:[L.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500/80 inline-block"}),L.jsx("span",{className:"w-3 h-3 rounded-full bg-yellow-500/80 inline-block"}),L.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500/80 inline-block"})]}),L.jsx("span",{className:"text-zinc-500 font-medium",children:"guest@abhishek-workstation: ~"}),L.jsx("span",{className:"text-zinc-600",children:"bash"})]}),L.jsxs("div",{className:"p-5 min-h-[220px] max-h-[380px] overflow-y-auto space-y-2 leading-relaxed",children:[t.map((a,l)=>L.jsxs("div",{children:[a.type==="input"&&L.jsxs("div",{className:"text-emerald-400 font-semibold",children:[L.jsx("span",{className:"text-zinc-500 mr-2",children:"guest@abhishek:~$"}),a.text]}),a.type==="output"&&L.jsx("div",{className:"text-zinc-300 whitespace-pre-line pl-4 border-l border-white/10",children:a.text}),a.type==="error"&&L.jsx("div",{className:"text-red-400 pl-4 border-l border-red-500/30",children:a.text})]},l)),L.jsx("div",{ref:r})]}),L.jsxs("div",{className:"px-5 py-3.5 bg-[#0b0b12] border-t border-white/10 flex items-center gap-2",children:[L.jsx("span",{className:"text-emerald-400 font-bold shrink-0",children:"guest@abhishek:~$"}),L.jsx("input",{type:"text",value:n,onChange:a=>i(a.target.value),onKeyDown:o,placeholder:"Type 'bio', 'projects', 'stack', 'contact'...",className:"w-full bg-transparent border-none outline-none text-white font-mono text-xs placeholder:text-zinc-600",spellCheck:"false",autoComplete:"off"})]})]})]})}function zw({onCopyEmail:t,copied:e}){return L.jsx("section",{id:"contact",className:"py-24 relative z-10",children:L.jsxs("div",{className:"relative rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-8 sm:p-14 text-center overflow-hidden backdrop-blur-2xl shadow-2xl",children:[L.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-500/10 blur-[100px] pointer-events-none"}),L.jsx("h2",{className:"font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4",children:"Let's build something iconic."}),L.jsx("p",{className:"text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed",children:"Open for engineering roles, technical architecture collaborations, and ambitious software builds."}),L.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-4",children:[L.jsx("button",{onClick:t,className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:-translate-y-0.5",children:e?L.jsxs(L.Fragment,{children:[L.jsx(_v,{className:"w-4 h-4 text-emerald-600"}),L.jsx("span",{children:"Email Copied!"})]}):L.jsxs(L.Fragment,{children:[L.jsx(Rw,{className:"w-4 h-4"}),L.jsx("span",{children:"abhishekraaj07@users.noreply.github.com"})]})}),L.jsxs("a",{href:"https://github.com/abhishekraaj07",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/90 text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all hover:-translate-y-0.5",children:[L.jsx(Vd,{className:"w-4 h-4"}),L.jsx("span",{children:"GitHub Profile"}),L.jsx(vv,{className:"w-4 h-4 text-zinc-500"})]})]})]})})}function Bw(){const[t,e]=dt.useState("");return dt.useEffect(()=>{const n=()=>{const r={timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0},s=new Intl.DateTimeFormat("en-IN",r);e(s.format(new Date))};n();const i=setInterval(n,1e3);return()=>clearInterval(i)},[]),L.jsx("footer",{className:"py-12 border-t border-white/10 relative z-10 bg-[#040407]",children:L.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500",children:[L.jsxs("div",{children:["© ",new Date().getFullYear()," Abhishek Raj. Engineered with Three.js & Modern React."]}),L.jsxs("div",{className:"flex items-center gap-2 text-zinc-400",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-400 animate-pulse"}),L.jsxs("span",{children:["New Delhi, India — ",t," IST"]})]})]})})}const Hw=[{id:"private-chat",number:"01",title:"Private Chat App",subtitle:"Zero-Knowledge Ephemeral Messaging",category:"Privacy & WebSockets",description:"An end-to-end encrypted room messaging system with ephemeral channels, WebSockets, Cloudflare Workers backend, and a production Capacitor Android mobile APK build.",architecture:["Client-side room key negotiation (Zero-Knowledge)","Sub-50ms duplex WebSockets via Cloudflare Workers & Durable Objects","Native Android APK generation through Capacitor & Vite","Zero message logs or persistent telemetry on disk"],tags:["Astro","TypeScript","WebSockets","Cloudflare Workers","Capacitor","Tailwind CSS"],liveUrl:"https://github.com/abhishekraaj07/private-chat-app",githubUrl:"https://github.com/abhishekraaj07/private-chat-app",stats:{metric:"< 30ms",label:"Duplex Latency"},status:"Production Grade"},{id:"spotify-player",number:"02",title:"Spotify Web Audio Engine",subtitle:"High-Fidelity Audio Streaming & Queue Architecture",category:"Audio Streaming & UI/UX",description:"Custom Spotify client workstation featuring hierarchical playlist folder grouping, live queue reordering, and a responsive pitch-black Web Audio visualizer.",architecture:["Custom Web Audio API buffer management & gapless transitions","Nested folder & master mega-playlist aggregator logic","Stateful playback queue with drag-and-drop reordering","Optimized 60 FPS visualizer with zero CPU throttling"],tags:["JavaScript ESNext","Web Audio API","State Architecture","Tailwind CSS","Canvas"],liveUrl:"https://github.com/abhishekraaj07",githubUrl:"https://github.com/abhishekraaj07",stats:{metric:"60 FPS",label:"Audio Rendering"},status:"Live Audio Pipeline"},{id:"youtube-engine",number:"03",title:"YouTube Stream Pipeline",subtitle:"Automated Media Slicing & Transcoding Daemon",category:"Backend & Media Systems",description:"High-speed media extraction and automated transcode pipeline daemon built in Python. Features queue scheduling, format multiplexing, and robust retry backoff mechanisms.",architecture:["Asynchronous task workers with priority queue scheduling","Lossless FFmpeg audio/video stream muxing & demuxing","Exponential backoff and anti-rate-limit jitter algorithms","Headless CLI daemon interface with real-time progress events"],tags:["Python 3.12","yt-dlp","FFmpeg","AsyncIO","Stream Pipelines"],liveUrl:"https://github.com/abhishekraaj07",githubUrl:"https://github.com/abhishekraaj07",stats:{metric:"Multi-Format",label:"Lossless Transcoding"},status:"CLI Daemon"},{id:"nexus-java",number:"04",title:"Nexus Java Engine",subtitle:"High-Throughput Concurrent Event System",category:"Enterprise Concurrency",description:"High-performance concurrent event dispatch engine built on Java 21 HotSpot. Optimized for thread pool orchestration, immutable message pipelines, and sub-millisecond dispatch.",architecture:["Lock-free concurrent queues and memory-mapped state buffers","Virtual threads (Java Project Loom) for concurrent client scale","Strict domain-driven OOP boundaries with zero reflection overhead","Micro-benchmarked with JMH for predictable p99 latency"],tags:["Java 21","Virtual Threads","Concurrency","Event Dispatch","JMH Benchmarks"],liveUrl:"https://github.com/abhishekraaj07",githubUrl:"https://github.com/abhishekraaj07",stats:{metric:"< 1ms",label:"p99 Event Dispatch"},status:"High Concurrency"},{id:"mirofish-swarm",number:"05",title:"MiroFish Swarm Simulation",subtitle:"Multi-Agent Emergence & Physics Engine",category:"Simulation & WebGL",description:"Interactive multi-agent behavioral simulator exploring emergent algorithms, dynamic flocking vectors, spatial hashing, and real-time interactive physics in canvas.",architecture:["Reynolds Boids algorithm with flocking, separation, and cohesion","Spatial partitioning grid for O(N log N) collision queries","Interactive force attractors responding to cursor trajectory","Frame-budgeted canvas renderer with sub-pixel interpolation"],tags:["Canvas 2D","Agent Swarms","Emergence Physics","Spatial Hashing","Vector Math"],liveUrl:"https://github.com/abhishekraaj07",githubUrl:"https://github.com/abhishekraaj07",stats:{metric:"2000+",label:"Active Agent Entities"},status:"Interactive Engine"},{id:"open-dots-hub",number:"06",title:"Workstation Automation Hub",subtitle:"Developer Micro-Tools & OS Daemons",category:"DevOps & Tooling",description:"Modular workstation automation environment and developer micro-tool orchestrator with background cron scheduling and persistent configuration management.",architecture:["PowerShell & Python daemons for persistent background tasks","SQLite-backed local catalog for file indexing and metadata","Cross-platform CLI wrappers for automated workstation workflows","Config drift detection and automated environment provisioning"],tags:["PowerShell","Python","Node.js","SQLite","OS Automation"],liveUrl:"https://github.com/abhishekraaj07",githubUrl:"https://github.com/abhishekraaj07",stats:{metric:"100% Local",label:"Zero Cloud Dependency"},status:"Workstation OS"}];function Vw(){const[t,e]=dt.useState(null),[n,i]=dt.useState(!1),r=()=>{navigator.clipboard.writeText("abhishekraaj07@users.noreply.github.com"),i(!0),setTimeout(()=>i(!1),2500)};return L.jsxs("div",{className:"min-h-screen bg-[#030305] text-zinc-100 selection:bg-sky-400 selection:text-black relative",children:[L.jsx(xw,{}),L.jsx(Nw,{}),L.jsxs("div",{className:"max-w-6xl mx-auto px-6 relative z-10",children:[L.jsx(Dw,{onCopyEmail:r,copied:n}),L.jsxs("section",{id:"projects",className:"py-24 relative z-10",children:[L.jsxs("div",{className:"flex flex-col mb-12",children:[L.jsxs("span",{className:"font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 flex items-center gap-2",children:[L.jsx("span",{className:"w-4 h-[1px] bg-sky-400"}),"Engineering Portfolio"]}),L.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4",children:[L.jsx("h2",{className:"font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Featured Builds"}),L.jsx("p",{className:"text-sm font-mono text-zinc-400",children:"Click any project for deep-dive architecture specs"})]})]}),L.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Hw.map(s=>L.jsx(Uw,{project:s,onSelect:o=>e(o)},s.id))})]}),L.jsx(Ow,{}),L.jsx(kw,{}),L.jsx(zw,{onCopyEmail:r,copied:n}),L.jsx(Bw,{})]}),L.jsx(Iw,{project:t,onClose:()=>e(null)})]})}Bc.createRoot(document.getElementById("root")).render(L.jsx(Hv.StrictMode,{children:L.jsx(Vw,{})}));
