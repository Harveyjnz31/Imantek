(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dh={exports:{}},Go={};var sv;function _y(){if(sv)return Go;sv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Go.Fragment=t,Go.jsx=i,Go.jsxs=i,Go}var rv;function xy(){return rv||(rv=1,dh.exports=_y()),dh.exports}var Z=xy(),ph={exports:{}},Vo={},mh={exports:{}},gh={};var ov;function Sy(){return ov||(ov=1,(function(r){function t(O,F){var et=O.length;O.push(F);t:for(;0<et;){var ut=et-1>>>1,xt=O[ut];if(0<l(xt,F))O[ut]=F,O[et]=xt,et=ut;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var F=O[0],et=O.pop();if(et!==F){O[0]=et;t:for(var ut=0,xt=O.length,P=xt>>>1;ut<P;){var K=2*(ut+1)-1,gt=O[K],Ct=K+1,Nt=O[Ct];if(0>l(gt,et))Ct<xt&&0>l(Nt,gt)?(O[ut]=Nt,O[Ct]=et,ut=Ct):(O[ut]=gt,O[K]=et,ut=K);else if(Ct<xt&&0>l(Nt,et))O[ut]=Nt,O[Ct]=et,ut=Ct;else break t}}return F}function l(O,F){var et=O.sortIndex-F.sortIndex;return et!==0?et:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,_=null,g=3,y=!1,b=!1,N=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(O){for(var F=i(p);F!==null;){if(F.callback===null)s(p);else if(F.startTime<=O)s(p),F.sortIndex=F.expirationTime,t(m,F);else break;F=i(p)}}function V(O){if(N=!1,L(O),!b)if(i(m)!==null)b=!0,U||(U=!0,Y());else{var F=i(p);F!==null&&k(V,F.startTime-O)}}var U=!1,B=-1,T=5,I=-1;function q(){return M?!0:!(r.unstable_now()-I<T)}function z(){if(M=!1,U){var O=r.unstable_now();I=O;var F=!0;try{t:{b=!1,N&&(N=!1,w(B),B=-1),y=!0;var et=g;try{e:{for(L(O),_=i(m);_!==null&&!(_.expirationTime>O&&q());){var ut=_.callback;if(typeof ut=="function"){_.callback=null,g=_.priorityLevel;var xt=ut(_.expirationTime<=O);if(O=r.unstable_now(),typeof xt=="function"){_.callback=xt,L(O),F=!0;break e}_===i(m)&&s(m),L(O)}else s(m);_=i(m)}if(_!==null)F=!0;else{var P=i(p);P!==null&&k(V,P.startTime-O),F=!1}}break t}finally{_=null,g=et,y=!1}F=void 0}}finally{F?Y():U=!1}}}var Y;if(typeof D=="function")Y=function(){D(z)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ft=rt.port2;rt.port1.onmessage=z,Y=function(){ft.postMessage(null)}}else Y=function(){S(z,0)};function k(O,F){B=S(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var et=g;g=F;try{return O()}finally{g=et}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var et=g;g=O;try{return F()}finally{g=et}},r.unstable_scheduleCallback=function(O,F,et){var ut=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?ut+et:ut):et=ut,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=et+xt,O={id:v++,callback:F,priorityLevel:O,startTime:et,expirationTime:xt,sortIndex:-1},et>ut?(O.sortIndex=et,t(p,O),i(m)===null&&O===i(p)&&(N?(w(B),B=-1):N=!0,k(V,et-ut))):(O.sortIndex=xt,t(m,O),b||y||(b=!0,U||(U=!0,Y()))),O},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(O){var F=g;return function(){var et=g;g=F;try{return O.apply(this,arguments)}finally{g=et}}}})(gh)),gh}var lv;function yy(){return lv||(lv=1,mh.exports=Sy()),mh.exports}var vh={exports:{}},me={};var cv;function My(){if(cv)return me;cv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function S(P,K,gt){this.props=P,this.context=K,this.refs=M,this.updater=gt||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=S.prototype;function D(P,K,gt){this.props=P,this.context=K,this.refs=M,this.updater=gt||b}var L=D.prototype=new w;L.constructor=D,N(L,S.prototype),L.isPureReactComponent=!0;var V=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function I(P,K,gt){var Ct=gt.ref;return{$$typeof:r,type:P,key:K,ref:Ct!==void 0?Ct:null,props:gt}}function q(P,K){return I(P.type,K,P.props)}function z(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function Y(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(gt){return K[gt]})}var rt=/\/+/g;function ft(P,K){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):K.toString(36)}function k(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(U,U):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,K,gt,Ct,Nt){var st=typeof P;(st==="undefined"||st==="boolean")&&(P=null);var Mt=!1;if(P===null)Mt=!0;else switch(st){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(P.$$typeof){case r:case t:Mt=!0;break;case v:return Mt=P._init,O(Mt(P._payload),K,gt,Ct,Nt)}}if(Mt)return Nt=Nt(P),Mt=Ct===""?"."+ft(P,0):Ct,V(Nt)?(gt="",Mt!=null&&(gt=Mt.replace(rt,"$&/")+"/"),O(Nt,K,gt,"",function(jt){return jt})):Nt!=null&&(z(Nt)&&(Nt=q(Nt,gt+(Nt.key==null||P&&P.key===Nt.key?"":(""+Nt.key).replace(rt,"$&/")+"/")+Mt)),K.push(Nt)),1;Mt=0;var Et=Ct===""?".":Ct+":";if(V(P))for(var Lt=0;Lt<P.length;Lt++)Ct=P[Lt],st=Et+ft(Ct,Lt),Mt+=O(Ct,K,gt,st,Nt);else if(Lt=y(P),typeof Lt=="function")for(P=Lt.call(P),Lt=0;!(Ct=P.next()).done;)Ct=Ct.value,st=Et+ft(Ct,Lt++),Mt+=O(Ct,K,gt,st,Nt);else if(st==="object"){if(typeof P.then=="function")return O(k(P),K,gt,Ct,Nt);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function F(P,K,gt){if(P==null)return P;var Ct=[],Nt=0;return O(P,Ct,"","",function(st){return K.call(gt,st,Nt++)}),Ct}function et(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(gt){(P._status===0||P._status===-1)&&(P._status=1,P._result=gt)},function(gt){(P._status===0||P._status===-1)&&(P._status=2,P._result=gt)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var ut=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xt={map:F,forEach:function(P,K,gt){F(P,function(){K.apply(this,arguments)},gt)},count:function(P){var K=0;return F(P,function(){K++}),K},toArray:function(P){return F(P,function(K){return K})||[]},only:function(P){if(!z(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return me.Activity=_,me.Children=xt,me.Component=S,me.Fragment=i,me.Profiler=l,me.PureComponent=D,me.StrictMode=s,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,me.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},me.cache=function(P){return function(){return P.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(P,K,gt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ct=N({},P.props),Nt=P.key;if(K!=null)for(st in K.key!==void 0&&(Nt=""+K.key),K)!T.call(K,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&K.ref===void 0||(Ct[st]=K[st]);var st=arguments.length-2;if(st===1)Ct.children=gt;else if(1<st){for(var Mt=Array(st),Et=0;Et<st;Et++)Mt[Et]=arguments[Et+2];Ct.children=Mt}return I(P.type,Nt,Ct)},me.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},me.createElement=function(P,K,gt){var Ct,Nt={},st=null;if(K!=null)for(Ct in K.key!==void 0&&(st=""+K.key),K)T.call(K,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Nt[Ct]=K[Ct]);var Mt=arguments.length-2;if(Mt===1)Nt.children=gt;else if(1<Mt){for(var Et=Array(Mt),Lt=0;Lt<Mt;Lt++)Et[Lt]=arguments[Lt+2];Nt.children=Et}if(P&&P.defaultProps)for(Ct in Mt=P.defaultProps,Mt)Nt[Ct]===void 0&&(Nt[Ct]=Mt[Ct]);return I(P,st,Nt)},me.createRef=function(){return{current:null}},me.forwardRef=function(P){return{$$typeof:d,render:P}},me.isValidElement=z,me.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:et}},me.memo=function(P,K){return{$$typeof:p,type:P,compare:K===void 0?null:K}},me.startTransition=function(P){var K=B.T,gt={};B.T=gt;try{var Ct=P(),Nt=B.S;Nt!==null&&Nt(gt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(U,ut)}catch(st){ut(st)}finally{K!==null&&gt.types!==null&&(K.types=gt.types),B.T=K}},me.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},me.use=function(P){return B.H.use(P)},me.useActionState=function(P,K,gt){return B.H.useActionState(P,K,gt)},me.useCallback=function(P,K){return B.H.useCallback(P,K)},me.useContext=function(P){return B.H.useContext(P)},me.useDebugValue=function(){},me.useDeferredValue=function(P,K){return B.H.useDeferredValue(P,K)},me.useEffect=function(P,K){return B.H.useEffect(P,K)},me.useEffectEvent=function(P){return B.H.useEffectEvent(P)},me.useId=function(){return B.H.useId()},me.useImperativeHandle=function(P,K,gt){return B.H.useImperativeHandle(P,K,gt)},me.useInsertionEffect=function(P,K){return B.H.useInsertionEffect(P,K)},me.useLayoutEffect=function(P,K){return B.H.useLayoutEffect(P,K)},me.useMemo=function(P,K){return B.H.useMemo(P,K)},me.useOptimistic=function(P,K){return B.H.useOptimistic(P,K)},me.useReducer=function(P,K,gt){return B.H.useReducer(P,K,gt)},me.useRef=function(P){return B.H.useRef(P)},me.useState=function(P){return B.H.useState(P)},me.useSyncExternalStore=function(P,K,gt){return B.H.useSyncExternalStore(P,K,gt)},me.useTransition=function(){return B.H.useTransition()},me.version="19.2.7",me}var uv;function np(){return uv||(uv=1,vh.exports=My()),vh.exports}var _h={exports:{}},On={};var fv;function Ey(){if(fv)return On;fv=1;var r=np();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},On.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.7",On}var hv;function by(){if(hv)return _h.exports;hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),_h.exports=Ey(),_h.exports}var dv;function Ty(){if(dv)return Vo;dv=1;var r=yy(),t=np(),i=by();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=h;break}if(R===o){x=!0,o=u,a=h;break}R=R.sibling}if(!x){for(R=h.child;R;){if(R===a){x=!0,a=h,o=u;break}if(R===o){x=!0,o=h,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case U:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var k=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},ut=[],xt=-1;function P(e){return{current:e}}function K(e){0>xt||(e.current=ut[xt],ut[xt]=null,xt--)}function gt(e,n){xt++,ut[xt]=e.current,e.current=n}var Ct=P(null),Nt=P(null),st=P(null),Mt=P(null);function Et(e,n){switch(gt(st,n),gt(Nt,e),gt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Cg(n),e=wg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Ct),gt(Ct,e)}function Lt(){K(Ct),K(Nt),K(st)}function jt(e){e.memoizedState!==null&&gt(Mt,e);var n=Ct.current,a=wg(n,e.type);n!==a&&(gt(Nt,e),gt(Ct,a))}function ie(e){Nt.current===e&&(K(Ct),K(Nt)),Mt.current===e&&(K(Mt),Io._currentValue=et)}var Me,le;function yt(e){if(Me===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Me=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Me+e+le}var wt=!1;function bt(e,n){if(!e||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ct){var lt=ct}Reflect.construct(e,[],St)}else{try{St.call()}catch(ct){lt=ct}e.call(St.prototype)}}else{try{throw Error()}catch(ct){lt=ct}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ct){if(ct&&lt&&typeof ct.stack=="string")return[ct.stack,lt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],R=h[1];if(x&&R){var G=x.split(`
`),nt=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===nt.length)for(o=G.length-1,u=nt.length-1;1<=o&&0<=u&&G[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==nt[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?yt(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return e.child!==n&&n!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return bt(e.type,!1);case 11:return bt(e.type.render,!1);case 1:return bt(e.type,!0);case 31:return yt("Activity");default:return""}}function Ft(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var oe=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,ue=r.unstable_cancelCallback,$t=r.unstable_shouldYield,fe=r.unstable_requestPaint,At=r.unstable_now,Oe=r.unstable_getCurrentPriorityLevel,C=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,vt=r.unstable_LowPriority,Tt=r.unstable_IdlePriority,Ut=r.log,Pt=r.unstable_setDisableYieldValue,ht=null,dt=null;function Bt(e){if(typeof Ut=="function"&&Pt(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ht,e)}catch{}}var Ht=Math.clz32?Math.clz32:de,zt=Math.log,Ot=Math.LN2;function de(e){return e>>>=0,e===0?32:31-(zt(e)/Ot|0)|0}var pe=256,Ee=262144,X=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Dt(o):(x&=R,x!==0?u=Dt(x):a||(a=R&~e,a!==0&&(u=Dt(a))))):(R=o&~h,R!==0?u=Dt(R):x!==0?u=Dt(x):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function It(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function he(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function an(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Ht(a),St=1<<pt;R[pt]=0,G[pt]=-1;var lt=nt[pt];if(lt!==null)for(nt[pt]=null,pt=0;pt<lt.length;pt++){var ct=lt[pt];ct!==null&&(ct.lane&=-536870913)}a&=~St}o!==0&&Fe(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Fe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ui(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Kn(e,n){var a=n&-n;return a=(a&42)!==0?1:ds(a),(a&(e.suspendedLanes|n))!==0?0:a}function ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zr(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Qg(e.type))}function Kr(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var Un=Math.random().toString(36).slice(2),un="__reactFiber$"+Un,An="__reactProps$"+Un,Qi="__reactContainer$"+Un,Ca="__reactEvents$"+Un,ul="__reactListeners$"+Un,Ws="__reactHandles$"+Un,Jr="__reactResources$"+Un,wa="__reactMarker$"+Un;function Qr(e){delete e[un],delete e[An],delete e[Ca],delete e[ul],delete e[Ws]}function Da(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zg(e);e!==null;){if(a=e[un])return a;e=zg(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[un]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ps(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ua(e){var n=e[Jr];return n||(n=e[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function dn(e){e[wa]=!0}var fl=new Set,A={};function j(e,n){ot(e,n),ot(e+"Capture",n)}function ot(e,n){for(A[e]=n,e=0;e<n.length;e++)fl.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Vt={};function Zt(e){return oe.call(Vt,e)?!0:oe.call(at,e)?!1:it.test(e)?Vt[e]=!0:(at[e]=!0,!1)}function Gt(e,n,a){if(Zt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ne(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pe(e){if(!e._valueTracker){var n=ve(e)?"checked":"value";e._valueTracker=ne(e,n,""+e[n])}}function tn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ge=/[\n"\\]/g;function Ve(e){return e.replace(Ge,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yt(e,n,a,o,u,h,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?be(e,x,ae(n)):a!=null?be(e,x,ae(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ae(R):e.removeAttribute("name")}function Ln(e,n,a,o,u,h,x,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Pe(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Pe(e)}function be(e,n,a){n==="number"&&Ke(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Jn(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function Mi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(k(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Pe(e)}function Qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ke=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function en(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ke.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ei(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&en(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&en(e,h,n[h])}function He(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ms(e){return La.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var cu=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function Rp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[An]||null;t:switch(e=n.stateNode,n.type){case"input":if(Yt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[An]||null;if(!u)throw Error(s(90));Yt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&tn(o)}break t;case"textarea":Jn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var fu=!1;function Cp(e,n,a){if(fu)return e(n,a);fu=!0;try{var o=e(n);return o}finally{if(fu=!1,(qs!==null||Ys!==null)&&(Ql(),qs&&(n=qs,e=Ys,Ys=qs=null,Rp(n),e)))for(n=0;n<e.length;n++)Rp(e[n])}}function $r(e,n){var a=e.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(ta)try{var to={};Object.defineProperty(to,"passive",{get:function(){hu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{hu=!1}var Oa=null,du=null,hl=null;function wp(){if(hl)return hl;var e,n=du,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function Dp(){return!1}function Vn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pl:Dp,this.isPropagationStopped=Dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Vn(gs),eo=_({},gs,{view:0,detail:0}),gx=Vn(eo),pu,mu,no,gl=_({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(pu=e.screenX-no.screenX,mu=e.screenY-no.screenY):mu=pu=0,no=e),pu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),Np=Vn(gl),vx=_({},gl,{dataTransfer:0}),_x=Vn(vx),xx=_({},eo,{relatedTarget:0}),gu=Vn(xx),Sx=_({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Vn(Sx),Mx=_({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Vn(Mx),bx=_({},gs,{data:0}),Up=Vn(bx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rx[e])?!!n[e]:!1}function vu(){return Cx}var wx=_({},eo,{key:function(e){if(e.key){var n=Tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Vn(wx),Nx=_({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=Vn(Nx),Ux=_({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),Lx=Vn(Ux),Ox=_({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Vn(Ox),zx=_({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=Vn(zx),Fx=_({},gs,{newState:0,oldState:0}),Bx=Vn(Fx),Hx=[9,13,27,32],_u=ta&&"CompositionEvent"in window,io=null;ta&&"documentMode"in document&&(io=document.documentMode);var Gx=ta&&"TextEvent"in window&&!io,Op=ta&&(!_u||io&&8<io&&11>=io),Pp=" ",zp=!1;function Ip(e,n){switch(e){case"keyup":return Hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var js=!1;function Vx(e,n){switch(e){case"compositionend":return Fp(n);case"keypress":return n.which!==32?null:(zp=!0,Pp);case"textInput":return e=n.data,e===Pp&&zp?null:e;default:return null}}function kx(e,n){if(js)return e==="compositionend"||!_u&&Ip(e,n)?(e=wp(),hl=du=Oa=null,js=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xx[e.type]:n==="textarea"}function Hp(e,n,a,o){qs?Ys?Ys.push(o):Ys=[o]:qs=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ao=null,so=null;function Wx(e){Mg(e,0)}function vl(e){var n=ps(e);if(tn(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(ta){var xu;if(ta){var Su="oninput"in document;if(!Su){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Su=typeof kp.oninput=="function"}xu=Su}else xu=!1;Vp=xu&&(!document.documentMode||9<document.documentMode)}function Xp(){ao&&(ao.detachEvent("onpropertychange",Wp),so=ao=null)}function Wp(e){if(e.propertyName==="value"&&vl(so)){var n=[];Hp(n,so,e,uu(e)),Cp(Wx,n)}}function qx(e,n,a){e==="focusin"?(Xp(),ao=n,so=a,ao.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(so)}function jx(e,n){if(e==="click")return vl(n)}function Zx(e,n){if(e==="input"||e==="change")return vl(n)}function Kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Kx;function ro(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!oe.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ke(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ke(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Jx=ta&&"documentMode"in document&&11>=document.documentMode,Zs=null,Mu=null,oo=null,Eu=!1;function Kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Zs==null||Zs!==Ke(o)||(o=Zs,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&ro(oo,o)||(oo=o,o=sc(Mu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Zs)))}function vs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ks={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},bu={},Jp={};ta&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function _s(e){if(bu[e])return bu[e];if(!Ks[e])return e;var n=Ks[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return bu[e]=n[a];return e}var Qp=_s("animationend"),$p=_s("animationiteration"),tm=_s("animationstart"),Qx=_s("transitionrun"),$x=_s("transitionstart"),tS=_s("transitioncancel"),em=_s("transitionend"),nm=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function bi(e,n){nm.set(e,n),j(n,[e])}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Js=0,Au=0;function xl(){for(var e=Js,n=Au=Js=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var h=fi[n];if(fi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&im(a,u,h)}}function Sl(e,n,a,o){fi[Js++]=e,fi[Js++]=n,fi[Js++]=a,fi[Js++]=o,Au|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ru(e,n,a,o){return Sl(e,n,a,o),yl(e)}function xs(e,n){return Sl(e,null,null,n),yl(e)}function im(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ht(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function yl(e){if(50<Do)throw Do=0,If=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function eS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new eS(e,n,a,o)}function Cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function am(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")Cu(e)&&(x=1);else if(typeof e=="string")x=ry(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=ti(31,a,n,u),e.elementType=I,e.lanes=h,e;case N:return Ss(a.children,u,h,n);case M:x=8,u|=24;break;case S:return e=ti(12,a,n,u|2),e.elementType=S,e.lanes=h,e;case V:return e=ti(13,a,n,u),e.elementType=V,e.lanes=h,e;case U:return e=ti(19,a,n,u),e.elementType=U,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:x=10;break t;case w:x=9;break t;case L:x=11;break t;case B:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Ss(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function wu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function sm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Du(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var rm=new WeakMap;function hi(e,n){if(typeof e=="object"&&e!==null){var a=rm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ft(n)},rm.set(e,n),n)}return{value:e,source:n,stack:Ft(n)}}var $s=[],tr=0,El=null,lo=0,di=[],pi=0,Pa=null,Oi=1,Pi="";function na(e,n){$s[tr++]=lo,$s[tr++]=El,El=e,lo=n}function om(e,n,a){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Pa,Pa=e;var o=Oi;e=Pi;var u=32-Ht(o)-1;o&=~(1<<u),a+=1;var h=32-Ht(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Oi=1<<32-Ht(n)+u|a<<u|o,Pi=h+e}else Oi=1<<h|a<<u|o,Pi=e}function Nu(e){e.return!==null&&(na(e,1),om(e,1,0))}function Uu(e){for(;e===El;)El=$s[--tr],$s[tr]=null,lo=$s[--tr],$s[tr]=null;for(;e===Pa;)Pa=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null,Oi=di[--pi],di[pi]=null}function lm(e,n){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Pa,Oi=n.id,Pi=n.overflow,Pa=e}var Rn=null,Qe=null,De=!1,za=null,mi=!1,Lu=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(hi(n,e)),Lu}function cm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[An]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ae(Uo[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Mi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ag(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Ia(e,!0)}function um(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Rn=Rn.return}}function er(e){if(e!==Rn)return!1;if(!De)return um(e),De=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qf(e.type,e.memoizedProps)),a=!a),a&&Qe&&Ia(e),um(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=Pg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Qe=Pg(e)}else n===27?(n=Qe,Ja(e.type)?(e=ih,ih=null,Qe=e):Qe=n):Qe=Rn?vi(e.stateNode.nextSibling):null;return!0}function ys(){Qe=Rn=null,De=!1}function Ou(){var e=za;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),za=null),e}function co(e){za===null?za=[e]:za.push(e)}var Pu=P(null),Ms=null,ia=null;function Fa(e,n,a){gt(Pu,n._currentValue),n._currentValue=a}function aa(e){e._currentValue=Pu.current,K(Pu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Iu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),zu(h.return,a,e),o||(x=null);break t}h=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),zu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function nr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;$n(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Iu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return fm(Ms,e)}function Tl(e,n){return Ms===null&&Es(e),fm(e,n)}function fm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(s(308));ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ia=ia.next=n;return a}var nS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},iS=r.unstable_scheduleCallback,aS=r.unstable_NormalPriority,pn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fu(){return{controller:new nS,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&iS(aS,function(){e.controller.abort()})}var fo=null,Bu=0,ir=0,ar=null;function sS(e,n){if(fo===null){var a=fo=[];Bu=0,ir=kf(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bu++,n.then(hm,hm),n}function hm(){if(--Bu===0&&fo!==null){ar!==null&&(ar.status="fulfilled");var e=fo;fo=null,ir=0,ar=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var dm=O.S;O.S=function(e,n){K0=At(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sS(e,n),dm!==null&&dm(e,n)};var bs=P(null);function Hu(){var e=bs.current;return e!==null?e:Je.pooledCache}function Al(e,n){n===null?gt(bs,bs.current):gt(bs,n.pool)}function pm(){var e=Hu();return e===null?null:{parent:pn._currentValue,pool:e}}var sr=Error(s(460)),Gu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function mm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_m(e),e}throw As=n,sr}}function Ts(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,sr):a}}var As=null;function vm(){if(As===null)throw Error(s(459));var e=As;return As=null,e}function _m(e){if(e===sr||e===Rl)throw Error(s(483))}var rr=null,ho=0;function wl(e){var n=ho;return ho+=1,rr===null&&(rr=[]),gm(rr,e,n)}function po(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function xm(e){function n(J,W){if(e){var tt=J.deletions;tt===null?(J.deletions=[W],J.flags|=16):tt.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=ea(J,W),J.index=0,J.sibling=null,J}function h(J,W,tt){return J.index=tt,e?(tt=J.alternate,tt!==null?(tt=tt.index,tt<W?(J.flags|=67108866,W):tt):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function x(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,tt,_t){return W===null||W.tag!==6?(W=wu(tt,J.mode,_t),W.return=J,W):(W=u(W,tt),W.return=J,W)}function G(J,W,tt,_t){var se=tt.type;return se===N?pt(J,W,tt.props.children,_t,tt.key):W!==null&&(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===T&&Ts(se)===W.type)?(W=u(W,tt.props),po(W,tt),W.return=J,W):(W=Ml(tt.type,tt.key,tt.props,null,J.mode,_t),po(W,tt),W.return=J,W)}function nt(J,W,tt,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=Du(tt,J.mode,_t),W.return=J,W):(W=u(W,tt.children||[]),W.return=J,W)}function pt(J,W,tt,_t,se){return W===null||W.tag!==7?(W=Ss(tt,J.mode,_t,se),W.return=J,W):(W=u(W,tt),W.return=J,W)}function St(J,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=wu(""+W,J.mode,tt),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return tt=Ml(W.type,W.key,W.props,null,J.mode,tt),po(tt,W),tt.return=J,tt;case b:return W=Du(W,J.mode,tt),W.return=J,W;case T:return W=Ts(W),St(J,W,tt)}if(k(W)||Y(W))return W=Ss(W,J.mode,tt,null),W.return=J,W;if(typeof W.then=="function")return St(J,wl(W),tt);if(W.$$typeof===D)return St(J,Tl(J,W),tt);Dl(J,W)}return null}function lt(J,W,tt,_t){var se=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return se!==null?null:R(J,W,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===se?G(J,W,tt,_t):null;case b:return tt.key===se?nt(J,W,tt,_t):null;case T:return tt=Ts(tt),lt(J,W,tt,_t)}if(k(tt)||Y(tt))return se!==null?null:pt(J,W,tt,_t,null);if(typeof tt.then=="function")return lt(J,W,wl(tt),_t);if(tt.$$typeof===D)return lt(J,W,Tl(J,tt),_t);Dl(J,tt)}return null}function ct(J,W,tt,_t,se){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(tt)||null,R(W,J,""+_t,se);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return J=J.get(_t.key===null?tt:_t.key)||null,G(W,J,_t,se);case b:return J=J.get(_t.key===null?tt:_t.key)||null,nt(W,J,_t,se);case T:return _t=Ts(_t),ct(J,W,tt,_t,se)}if(k(_t)||Y(_t))return J=J.get(tt)||null,pt(W,J,_t,se,null);if(typeof _t.then=="function")return ct(J,W,tt,wl(_t),se);if(_t.$$typeof===D)return ct(J,W,tt,Tl(W,_t),se);Dl(W,_t)}return null}function Qt(J,W,tt,_t){for(var se=null,ze=null,ee=W,xe=W=0,we=null;ee!==null&&xe<tt.length;xe++){ee.index>xe?(we=ee,ee=null):we=ee.sibling;var Ie=lt(J,ee,tt[xe],_t);if(Ie===null){ee===null&&(ee=we);break}e&&ee&&Ie.alternate===null&&n(J,ee),W=h(Ie,W,xe),ze===null?se=Ie:ze.sibling=Ie,ze=Ie,ee=we}if(xe===tt.length)return a(J,ee),De&&na(J,xe),se;if(ee===null){for(;xe<tt.length;xe++)ee=St(J,tt[xe],_t),ee!==null&&(W=h(ee,W,xe),ze===null?se=ee:ze.sibling=ee,ze=ee);return De&&na(J,xe),se}for(ee=o(ee);xe<tt.length;xe++)we=ct(ee,J,xe,tt[xe],_t),we!==null&&(e&&we.alternate!==null&&ee.delete(we.key===null?xe:we.key),W=h(we,W,xe),ze===null?se=we:ze.sibling=we,ze=we);return e&&ee.forEach(function(ns){return n(J,ns)}),De&&na(J,xe),se}function re(J,W,tt,_t){if(tt==null)throw Error(s(151));for(var se=null,ze=null,ee=W,xe=W=0,we=null,Ie=tt.next();ee!==null&&!Ie.done;xe++,Ie=tt.next()){ee.index>xe?(we=ee,ee=null):we=ee.sibling;var ns=lt(J,ee,Ie.value,_t);if(ns===null){ee===null&&(ee=we);break}e&&ee&&ns.alternate===null&&n(J,ee),W=h(ns,W,xe),ze===null?se=ns:ze.sibling=ns,ze=ns,ee=we}if(Ie.done)return a(J,ee),De&&na(J,xe),se;if(ee===null){for(;!Ie.done;xe++,Ie=tt.next())Ie=St(J,Ie.value,_t),Ie!==null&&(W=h(Ie,W,xe),ze===null?se=Ie:ze.sibling=Ie,ze=Ie);return De&&na(J,xe),se}for(ee=o(ee);!Ie.done;xe++,Ie=tt.next())Ie=ct(ee,J,xe,Ie.value,_t),Ie!==null&&(e&&Ie.alternate!==null&&ee.delete(Ie.key===null?xe:Ie.key),W=h(Ie,W,xe),ze===null?se=Ie:ze.sibling=Ie,ze=Ie);return e&&ee.forEach(function(vy){return n(J,vy)}),De&&na(J,xe),se}function Ze(J,W,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===N&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var se=tt.key;W!==null;){if(W.key===se){if(se=tt.type,se===N){if(W.tag===7){a(J,W.sibling),_t=u(W,tt.props.children),_t.return=J,J=_t;break t}}else if(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===T&&Ts(se)===W.type){a(J,W.sibling),_t=u(W,tt.props),po(_t,tt),_t.return=J,J=_t;break t}a(J,W);break}else n(J,W);W=W.sibling}tt.type===N?(_t=Ss(tt.props.children,J.mode,_t,tt.key),_t.return=J,J=_t):(_t=Ml(tt.type,tt.key,tt.props,null,J.mode,_t),po(_t,tt),_t.return=J,J=_t)}return x(J);case b:t:{for(se=tt.key;W!==null;){if(W.key===se)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){a(J,W.sibling),_t=u(W,tt.children||[]),_t.return=J,J=_t;break t}else{a(J,W);break}else n(J,W);W=W.sibling}_t=Du(tt,J.mode,_t),_t.return=J,J=_t}return x(J);case T:return tt=Ts(tt),Ze(J,W,tt,_t)}if(k(tt))return Qt(J,W,tt,_t);if(Y(tt)){if(se=Y(tt),typeof se!="function")throw Error(s(150));return tt=se.call(tt),re(J,W,tt,_t)}if(typeof tt.then=="function")return Ze(J,W,wl(tt),_t);if(tt.$$typeof===D)return Ze(J,W,Tl(J,tt),_t);Dl(J,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(a(J,W.sibling),_t=u(W,tt),_t.return=J,J=_t):(a(J,W),_t=wu(tt,J.mode,_t),_t.return=J,J=_t),x(J)):a(J,W)}return function(J,W,tt,_t){try{ho=0;var se=Ze(J,W,tt,_t);return rr=null,se}catch(ee){if(ee===sr||ee===Rl)throw ee;var ze=ti(29,ee,null,J.mode);return ze.lanes=_t,ze.return=J,ze}}}var Rs=xm(!0),Sm=xm(!1),Ba=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),im(e,null,a),n}return Sl(e,o,n,a),yl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ui(e,a)}}function Xu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Wu=!1;function go(){if(Wu){var e=ar;if(e!==null)throw e}}function vo(e,n,a,o){Wu=!1;var u=e.updateQueue;Ba=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,nt=G.next;G.next=null,x===null?h=nt:x.next=nt,x=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==x&&(R===null?pt.firstBaseUpdate=nt:R.next=nt,pt.lastBaseUpdate=G))}if(h!==null){var St=u.baseState;x=0,pt=nt=G=null,R=h;do{var lt=R.lane&-536870913,ct=lt!==R.lane;if(ct?(Ce&lt)===lt:(o&lt)===lt){lt!==0&&lt===ir&&(Wu=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Qt=e,re=R;lt=n;var Ze=a;switch(re.tag){case 1:if(Qt=re.payload,typeof Qt=="function"){St=Qt.call(Ze,St,lt);break t}St=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=re.payload,lt=typeof Qt=="function"?Qt.call(Ze,St,lt):Qt,lt==null)break t;St=_({},St,lt);break t;case 2:Ba=!0}}lt=R.callback,lt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[lt]:ct.push(lt))}else ct={lane:lt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(nt=pt=ct,G=St):pt=pt.next=ct,x|=lt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),qa|=x,e.lanes=x,e.memoizedState=St}}function ym(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Mm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ym(a[e],n)}var or=P(null),Nl=P(0);function Em(e,n){e=da,gt(Nl,e),gt(or,n),da=e|n.baseLanes}function qu(){gt(Nl,da),gt(or,or.current)}function Yu(){da=Nl.current,K(or),K(Nl)}var ei=P(null),gi=null;function Va(e){var n=e.alternate;gt(fn,fn.current&1),gt(ei,e),gi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(gi=e)}function ju(e){gt(fn,fn.current),gt(ei,e),gi===null&&(gi=e)}function bm(e){e.tag===22?(gt(fn,fn.current),gt(ei,e),gi===null&&(gi=e)):ka()}function ka(){gt(fn,fn.current),gt(ei,ei.current)}function ni(e){K(ei),gi===e&&(gi=null),K(fn)}var fn=P(0);function Ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||eh(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,_e=null,Ye=null,mn=null,Ll=!1,lr=!1,Cs=!1,Ol=0,_o=0,cr=null,oS=0;function rn(){throw Error(s(321))}function Zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function Ku(e,n,a,o,u,h){return sa=h,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?o0:hf,Cs=!1,h=a(o,u),Cs=!1,lr&&(h=Am(n,a,o,u)),Tm(e),h}function Tm(e){O.H=yo;var n=Ye!==null&&Ye.next!==null;if(sa=0,mn=Ye=_e=null,Ll=!1,_o=0,cr=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&bl(e)&&(gn=!0))}function Am(e,n,a,o){_e=e;var u=0;do{if(lr&&(cr=null),_o=0,lr=!1,25<=u)throw Error(s(301));if(u+=1,mn=Ye=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=l0,h=n(a,o)}while(lr);return h}function lS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?xo(n):n,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(_e.flags|=1024),n}function Ju(){var e=Ol!==0;return Ol=0,e}function Qu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $u(e){if(Ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ll=!1}sa=0,mn=Ye=_e=null,lr=!1,_o=Ol=0,cr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?_e.memoizedState=mn=e:mn=mn.next=e,mn}function hn(){if(Ye===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=mn===null?_e.memoizedState:mn.next;if(n!==null)mn=n,Ye=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},mn===null?_e.memoizedState=mn=e:mn=mn.next=e}return mn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var n=_o;return _o+=1,cr===null&&(cr=[]),e=gm(cr,e,n),n=_e,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?o0:hf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===D)return Cn(e)}throw Error(s(438,String(e)))}function tf(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=q;return n.index++,a}function ra(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=hn();return ef(n,Ye,e)}function ef(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=x=null,G=null,nt=n,pt=!1;do{var St=nt.lane&-536870913;if(St!==nt.lane?(Ce&St)===St:(sa&St)===St){var lt=nt.revertLane;if(lt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),St===ir&&(pt=!0);else if((sa&lt)===lt){nt=nt.next,lt===ir&&(pt=!0);continue}else St={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=St,x=h):G=G.next=St,_e.lanes|=lt,qa|=lt;St=nt.action,Cs&&a(h,St),h=nt.hasEagerState?nt.eagerState:a(h,St)}else lt={lane:St,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=lt,x=h):G=G.next=lt,_e.lanes|=St,qa|=St;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?x=h:G.next=R,!$n(h,e.memoizedState)&&(gn=!0,pt&&(a=ar,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function nf(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);$n(h,n.memoizedState)||(gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Rm(e,n,a){var o=_e,u=hn(),h=De;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!$n((Ye||u).memoizedState,a);if(x&&(u.memoizedState=a,gn=!0),u=u.queue,rf(Dm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},wm.bind(null,o,u,a,n),null),Je===null)throw Error(s(349));h||(sa&127)!==0||Cm(o,n,a)}return a}function Cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Pl(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function wm(e,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Um(e)}function Dm(e,n,a){return a(function(){Nm(n)&&Um(e)})}function Nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Um(e){var n=xs(e,2);n!==null&&Yn(n,e,2)}function af(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Cs){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},n}function Lm(e,n,a,o){return e.baseState=a,ef(e,Ye,typeof o=="function"?o:ra)}function cS(e,n,a,o,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Om(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,x={};O.T=x;try{var R=a(u,o),G=O.S;G!==null&&G(x,R),Pm(e,n,R)}catch(nt){sf(e,n,nt)}finally{h!==null&&x.types!==null&&(h.types=x.types),O.T=h}}else try{h=a(u,o),Pm(e,n,h)}catch(nt){sf(e,n,nt)}}function Pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,n,o)},function(o){return sf(e,n,o)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Om(e,a)))}function sf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==o)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fm(e,n){return n}function Bm(e,n){if(De){var a=Je.formState;if(a!==null){t:{var o=_e;if(De){if(Qe){e:{for(var u=Qe,h=mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qe=vi(u.nextSibling),o=u.data==="F!";break t}}Ia(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:n},a.queue=o,a=a0.bind(null,_e,o),o.dispatch=a,o=af(!1),h=ff.bind(null,_e,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=cS.bind(null,_e,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Hm(e){var n=hn();return Gm(n,Ye,e)}function Gm(e,n,a){if(n=ef(e,n,Fm)[0],e=Il(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(x){throw x===sr?Rl:x}else o=n;n=hn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,ur(9,{destroy:void 0},uS.bind(null,u,a),null)),[o,h,e]}function uS(e,n){e.action=n}function Vm(e){var n=hn(),a=Ye;if(a!==null)return Gm(n,a,e);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ur(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Pl(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function km(){return hn().memoizedState}function Fl(e,n,a,o){var u=Bn();_e.flags|=e,u.memoizedState=ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function Bl(e,n,a,o){var u=hn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ye!==null&&o!==null&&Zu(o,Ye.memoizedState.deps)?u.memoizedState=ur(n,h,a,o):(_e.flags|=e,u.memoizedState=ur(1|n,h,a,o))}function Xm(e,n){Fl(8390656,8,e,n)}function rf(e,n){Bl(2048,8,e,n)}function fS(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Pl(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wm(e){var n=hn().memoizedState;return fS({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(e,n){return Bl(4,2,e,n)}function Ym(e,n){return Bl(4,4,e,n)}function jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zm(e,n,a){a=a!=null?a.concat([e]):null,Bl(4,4,jm.bind(null,n,e),a)}function of(){}function Km(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Zu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Jm(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Zu(n,o[1]))return o[0];if(o=e(),Cs){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function lf(e,n,a){return a===void 0||(sa&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Q0(),_e.lanes|=e,qa|=e,a)}function Qm(e,n,a,o){return $n(a,n)?a:or.current!==null?(e=lf(e,a,o),$n(e,n)||(gn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(Ce&261930)===0?(gn=!0,e.memoizedState=a):(e=Q0(),_e.lanes|=e,qa|=e,n)}function $m(e,n,a,o,u){var h=F.p;F.p=h!==0&&8>h?h:8;var x=O.T,R={};O.T=R,ff(e,!1,n,a);try{var G=u(),nt=O.S;if(nt!==null&&nt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=rS(G,o);So(e,n,pt,si(e))}else So(e,n,o,si(e))}catch(St){So(e,n,{then:function(){},status:"rejected",reason:St},si())}finally{F.p=h,x!==null&&R.types!==null&&(x.types=R.types),O.T=x}}function hS(){}function cf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=t0(e).queue;$m(e,u,n,et,a===null?hS:function(){return e0(e),a(o)})}function t0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function e0(e){var n=t0(e);n.next===null&&(n=e.alternate.memoizedState),So(e,n.next.queue,{},si())}function uf(){return Cn(Io)}function n0(){return hn().memoizedState}function i0(){return hn().memoizedState}function dS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ha(a);var o=Ga(n,e,a);o!==null&&(Yn(o,n,a),mo(o,n,a)),n={cache:Fu()},e.payload=n;return}n=n.return}}function pS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?s0(n,a):(a=Ru(e,n,a,o),a!==null&&(Yn(a,e,o),r0(a,n,o)))}function a0(e,n,a){var o=si();So(e,n,a,o)}function So(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))s0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,R=h(x,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,x))return Sl(e,n,u,0),Je===null&&xl(),!1}catch{}if(a=Ru(e,n,u,o),a!==null)return Yn(a,e,o),r0(a,n,o),!0}return!1}function ff(e,n,a,o){if(o={lane:2,revertLane:kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=Ru(e,a,o,2),n!==null&&Yn(n,e,2)}function Hl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function s0(e,n){lr=Ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function r0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ui(e,a)}}var yo={readContext:Cn,use:zl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};yo.useEffectEvent=rn;var o0={readContext:Cn,use:zl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:Xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fl(4194308,4,jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(Cs){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(Cs){Bt(!0);try{a(n)}finally{Bt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=pS.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=af(e);var n=e.queue,a=a0.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:of,useDeferredValue:function(e,n){var a=Bn();return lf(a,e,n)},useTransition:function(){var e=af(!1);return e=$m.bind(null,_e,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Bn();if(De){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Je===null)throw Error(s(349));(Ce&127)!==0||Cm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Xm(Dm.bind(null,o,h,e),[e]),o.flags|=2048,ur(9,{destroy:void 0},wm.bind(null,o,h,a,n),null),a},useId:function(){var e=Bn(),n=Je.identifierPrefix;if(De){var a=Pi,o=Oi;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:uf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:tf,useCacheRefresh:function(){return Bn().memoizedState=dS.bind(null,_e)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:Cn,use:zl,useCallback:Km,useContext:Cn,useEffect:rf,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Il,useRef:km,useState:function(){return Il(ra)},useDebugValue:of,useDeferredValue:function(e,n){var a=hn();return Qm(a,Ye.memoizedState,e,n)},useTransition:function(){var e=Il(ra)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:uf,useFormState:Hm,useActionState:Hm,useOptimistic:function(e,n){var a=hn();return Lm(a,Ye,e,n)},useMemoCache:tf,useCacheRefresh:i0};hf.useEffectEvent=Wm;var l0={readContext:Cn,use:zl,useCallback:Km,useContext:Cn,useEffect:rf,useImperativeHandle:Zm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:nf,useRef:km,useState:function(){return nf(ra)},useDebugValue:of,useDeferredValue:function(e,n){var a=hn();return Ye===null?lf(a,e,n):Qm(a,Ye.memoizedState,e,n)},useTransition:function(){var e=nf(ra)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:xo(e),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:uf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=hn();return Ye!==null?Lm(a,Ye,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:tf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Yn(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Yn(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(Yn(n,e,a),mo(n,e,a))}};function c0(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!ro(a,o)||!ro(u,h):!0}function u0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&pf.enqueueReplaceState(n,n.state,null)}function ws(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function f0(e){_l(e)}function h0(e){console.error(e)}function d0(e){_l(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function p0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function m0(e){return e=Ha(e),e.tag=3,e}function g0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){p0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){p0(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function mS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?$l():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Hf(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Hf(e,o,u)),!1}throw Error(s(435,a.tag))}return Hf(e,o,u),$l(),!1}if(De)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(e=Error(s(422),{cause:o}),co(hi(e,a)))):(o!==Lu&&(n=Error(s(423),{cause:o}),co(hi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=hi(o,a),u=mf(e.stateNode,o,u),Xu(e,u),on!==4&&(on=2)),!1;var h=Error(s(520),{cause:o});if(h=hi(h,a),wo===null?wo=[h]:wo.push(h),on!==4&&(on=2),n===null)return!0;o=hi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=mf(a.stateNode,o,e),Xu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ya===null||!Ya.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=m0(u),g0(u,e,a,o),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(s(461)),gn=!1;function wn(e,n,a,o){n.child=e===null?Sm(n,null,a,o):Rs(n,e.child,a,o)}function v0(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Es(n),o=Ku(e,n,a,x,h,u),R=Ju(),e!==null&&!gn?(Qu(e,n,u),oa(e,n,u)):(De&&R&&Nu(n),n.flags|=1,wn(e,n,o,u),n.child)}function _0(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Cu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,x0(e,n,h,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!bf(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(x,o)&&e.ref===n.ref)return oa(e,n,u)}return n.flags|=1,e=ea(h,o),e.ref=n.ref,e.return=n,n.child=e}function x0(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(ro(h,o)&&e.ref===n.ref)if(gn=!1,n.pendingProps=o=h,bf(e,u))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,oa(e,n,u)}return vf(e,n,a,o,u)}function S0(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return y0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,h!==null?h.cachePool:null),h!==null?Em(n,h):qu(),bm(n);else return o=n.lanes=536870912,y0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Al(n,h.cachePool),Em(n,h),ka(),n.memoizedState=null):(e!==null&&Al(n,null),qu(),ka());return wn(e,n,u,a),n.child}function Mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(e,n,a,o,u){var h=Hu();return h=h===null?null:{parent:pn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Al(n,null),qu(),bm(n),e!==null&&nr(e,n,o,!0),n.childLanes=u,null}function Vl(e,n){return n=Xl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function M0(e,n,a){return Rs(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function gS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(De){if(o.mode==="hidden")return e=Vl(n,o),n.lanes=536870912,Mo(null,e);if(ju(n),(e=Qe)?(e=Og(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Rn=n,Qe=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Vl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=M0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||nr(e,n,a,!1),u=(a&e.childLanes)!==0,gn||u){if(o=Je,o!==null&&(x=Kn(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,xs(e,x),Yn(o,e,x),gf;$l(),n=M0(e,n,a)}else e=h.treeContext,Qe=vi(x.nextSibling),Rn=n,De=!0,za=null,mi=!1,e!==null&&lm(n,e),n=Vl(n,o),n.flags|=4096;return n}return e=ea(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function vf(e,n,a,o,u){return Es(n),a=Ku(e,n,a,o,void 0,u),o=Ju(),e!==null&&!gn?(Qu(e,n,u),oa(e,n,u)):(De&&o&&Nu(n),n.flags|=1,wn(e,n,a,u),n.child)}function E0(e,n,a,o,u,h){return Es(n),n.updateQueue=null,a=Am(n,o,a,u),Tm(e),o=Ju(),e!==null&&!gn?(Qu(e,n,h),oa(e,n,h)):(De&&o&&Nu(n),n.flags|=1,wn(e,n,a,h),n.child)}function b0(e,n,a,o,u){if(Es(n),n.stateNode===null){var h=Qs,x=a.contextType;typeof x=="object"&&x!==null&&(h=Cn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=pf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Vu(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Cn(x):Qs,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(df(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&pf.enqueueReplaceState(h,h.state,null),vo(n,o,h,u),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,G=ws(a,R);h.props=G;var nt=h.context,pt=a.contextType;x=Qs,typeof pt=="object"&&pt!==null&&(x=Cn(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||nt!==x)&&u0(n,h,o,x),Ba=!1;var lt=n.memoizedState;h.state=lt,vo(n,o,h,u),go(),nt=n.memoizedState,R||lt!==nt||Ba?(typeof St=="function"&&(df(n,a,St,o),nt=n.memoizedState),(G=Ba||c0(n,a,G,o,lt,nt,x))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=x,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ku(e,n),x=n.memoizedProps,pt=ws(a,x),h.props=pt,St=n.pendingProps,lt=h.context,nt=a.contextType,G=Qs,typeof nt=="object"&&nt!==null&&(G=Cn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==St||lt!==G)&&u0(n,h,o,G),Ba=!1,lt=n.memoizedState,h.state=lt,vo(n,o,h,u),go();var ct=n.memoizedState;x!==St||lt!==ct||Ba||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof R=="function"&&(df(n,a,R,o),ct=n.memoizedState),(pt=Ba||c0(n,a,pt,o,lt,ct,G)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=G,o=pt):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,kl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Rs(n,e.child,null,u),n.child=Rs(n,null,a,u)):wn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=oa(e,n,u),e}function T0(e,n,a,o){return ys(),n.flags|=256,wn(e,n,a,o),n.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(e){return{baseLanes:e,cachePool:pm()}}function Sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function A0(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(De){if(u?Va(n):ka(),(e=Qe)?(e=Og(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=sm(e),a.return=n,n.child=a,Rn=n,Qe=null)):e=null,e===null)throw Ia(n);return nh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ka(),u=n.mode,R=Xl({mode:"hidden",children:R},u),o=Ss(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(e,x,a),n.memoizedState=_f,Mo(null,o)):(Va(n),yf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(Va(n),n.flags&=-257,n=Mf(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),R=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),R=Ss(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Rs(n,e.child,null,a),o=n.child,o.memoizedState=xf(a),o.childLanes=Sf(e,x,a),n.memoizedState=_f,n=Mo(null,o));else if(Va(n),nh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(s(419)),o.stack="",o.digest=x,co({value:o,source:null,stack:null}),n=Mf(e,n,a)}else if(gn||nr(e,n,a,!1),x=(a&e.childLanes)!==0,gn||x){if(x=Je,x!==null&&(o=Kn(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,xs(e,o),Yn(x,e,o),gf;eh(R)||$l(),n=Mf(e,n,a)}else eh(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Qe=vi(R.nextSibling),Rn=n,De=!0,za=null,mi=!1,e!==null&&lm(n,e),n=yf(n,o.children),n.flags|=4096);return n}return u?(ka(),R=o.fallback,u=n.mode,G=e.child,nt=G.sibling,o=ea(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,nt!==null?R=ea(nt,R):(R=Ss(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Mo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=xf(a):(u=R.cachePool,u!==null?(G=pn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=pm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Sf(e,x,a),n.memoizedState=_f,Mo(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function yf(e,n){return n=Xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Mf(e,n,a){return Rs(n,e.child,null,a),e=yf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function Ef(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function C0(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=fn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,gt(fn,x),wn(e,n,o,a),o=De?lo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,a,n);else if(e.tag===19)R0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ef(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ef(n,!0,a,null,h,o);break;case"together":Ef(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(nr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function vS(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),Fa(n,pn,e.memoizedState.cache),ys();break;case 27:case 5:jt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?A0(e,n,a):(Va(n),e=oa(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return C0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(fn,fn.current),o)break;return null;case 22:return n.lanes=0,S0(e,n,a,n.pendingProps);case 24:Fa(n,pn,e.memoizedState.cache)}return oa(e,n,a)}function w0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!bf(e,a)&&(n.flags&128)===0)return gn=!1,vS(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,De&&(n.flags&1048576)!==0&&om(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ts(n.elementType),n.type=e,typeof e=="function")Cu(e)?(o=ws(e,o),n.tag=1,n=b0(null,n,e,o,a)):(n.tag=0,n=vf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=v0(null,n,e,o,a);break t}else if(u===B){n.tag=14,n=_0(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return vf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ws(o,n.pendingProps),b0(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,ku(e,n),vo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Fa(n,pn,o),o!==h.cache&&Iu(n,[pn],a,!0),go(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=T0(e,n,o,a);break t}else if(o!==u){u=hi(Error(s(424)),n),co(u),n=T0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=vi(e.firstChild),Rn=n,De=!0,za=null,mi=!0,a=Sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),o===u){n=oa(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:De||(a=n.type,e=n.pendingProps,o=rc(st.current).createElement(a),o[un]=n,o[An]=e,Dn(o,a,e),dn(o),n.stateNode=o):n.memoizedState=Hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&De&&(o=n.stateNode=Ig(n.type,n.pendingProps,st.current),Rn=n,mi=!0,u=Qe,Ja(n.type)?(ih=u,Qe=vi(o.firstChild)):Qe=u),wn(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&De&&((u=o=Qe)&&(o=YS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Rn=n,Qe=vi(o.firstChild),mi=!1,u=!0):u=!1),u||Ia(n)),jt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,Qf(u,h)?o=null:x!==null&&Qf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(e,n,lS,null,null,a),Io._currentValue=u),kl(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&De&&((e=a=Qe)&&(a=jS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Rn=n,Qe=null,e=!0):e=!1),e||Ia(n)),null;case 13:return A0(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Rs(n,null,o,a):wn(e,n,o,a),n.child;case 11:return v0(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Es(n),u=Cn(u),o=o(u),n.flags|=1,wn(e,n,o,a),n.child;case 14:return _0(e,n,n.type,n.pendingProps,a);case 15:return x0(e,n,n.type,n.pendingProps,a);case 19:return C0(e,n,a);case 31:return gS(e,n,a);case 22:return S0(e,n,a,n.pendingProps);case 24:return Es(n),o=Cn(pn),e===null?(u=Hu(),u===null&&(u=Je,h=Fu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Vu(n),Fa(n,pn,u)):((e.lanes&a)!==0&&(ku(e,n),vo(n,null,null,a),go()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,pn,o)):(o=h.cache,Fa(n,pn,o),o!==u.cache&&Iu(n,[pn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(e){e.flags|=4}function Tf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ng())e.flags|=8192;else throw As=Cl,Gu}else e.flags&=-16777217}function D0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wg(n))if(ng())e.flags|=8192;else throw As=Cl,Gu}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,pr|=n)}function Eo(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _S(e,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(pn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(er(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),$e(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(la(n),h!==null?($e(n),D0(n,h)):($e(n),Tf(n,u,null,o,a))):h?h!==e.memoizedState?(la(n),$e(n),D0(n,h)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&la(n),$e(n),Tf(n,u,e,o,a)),null;case 27:if(ie(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}e=Ct.current,er(n)?cm(n):(e=Ig(u,o,a),n.stateNode=e,la(n))}return $e(n),null;case 5:if(ie(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $e(n),null}if(h=Ct.current,er(n))cm(n);else{var x=rc(st.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[un]=n,h[An]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(Dn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&la(n)}}return $e(n),Tf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ag(e.nodeValue,a)),e||Ia(n,!0)}else e=rc(e).createTextNode(o),e[un]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=Ou(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),$e(n),null);case 4:return Lt(),e===null&&Yf(n.stateNode.containerInfo),$e(n),null;case 10:return aa(n.type),$e(n),null;case 19:if(K(fn),o=n.memoizedState,o===null)return $e(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Eo(o,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ul(e),h!==null){for(n.flags|=128,Eo(o,!1),e=h.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)am(a,e),a=a.sibling;return gt(fn,fn.current&1|2),De&&na(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&At()>Kl&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ul(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!De)return $e(n),null}else 2*At()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,a=fn.current,gt(fn,u?a&1|2:a&1),De&&na(n,o.treeForkCount),e):($e(n),null);case 22:case 23:return ni(n),Yu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&K(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(pn),$e(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function xS(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return aa(pn),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ie(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(fn),null;case 4:return Lt(),null;case 10:return aa(n.type),null;case 22:case 23:return ni(n),Yu(),e!==null&&K(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return aa(pn),null;case 25:return null;default:return null}}function N0(e,n){switch(Uu(n),n.tag){case 3:aa(pn),Lt();break;case 26:case 27:case 5:ie(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:K(fn);break;case 10:aa(n.type);break;case 22:case 23:ni(n),Yu(),e!==null&&K(bs);break;case 24:aa(pn)}}function bo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){We(n,n.return,R)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var G=a,nt=R;try{nt()}catch(pt){We(u,G,pt)}}}o=o.next}while(o!==h)}}catch(pt){We(n,n.return,pt)}}function U0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mm(n,a)}catch(o){We(e,e.return,o)}}}function L0(e,n,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){We(e,n,o)}}function To(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){We(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(e,n,u)}else a.current=null}function O0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){We(e,e.return,u)}}function Af(e,n,a){try{var o=e.stateNode;GS(o,e.type,a,n),o[An]=n}catch(u){We(e,e.return,u)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ja(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ja(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Cf(e,n,a),e=e.sibling;e!==null;)Cf(e,n,a),e=e.sibling}function ql(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ja(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ql(e,n,a),e=e.sibling;e!==null;)ql(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[un]=e,n[An]=a}catch(h){We(e,e.return,h)}}var ca=!1,vn=!1,wf=!1,I0=typeof WeakSet=="function"?WeakSet:Set,En=null;function SS(e,n){if(e=e.containerInfo,Kf=dc,e=Zp(e),yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,R=-1,G=-1,nt=0,pt=0,St=e,lt=null;e:for(;;){for(var ct;St!==a||u!==0&&St.nodeType!==3||(R=x+u),St!==h||o!==0&&St.nodeType!==3||(G=x+o),St.nodeType===3&&(x+=St.nodeValue.length),(ct=St.firstChild)!==null;)lt=St,St=ct;for(;;){if(St===e)break e;if(lt===a&&++nt===u&&(R=x),lt===h&&++pt===o&&(G=x),(ct=St.nextSibling)!==null)break;St=lt,lt=St.parentNode}St=ct}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},dc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Qt=ws(a.type,u);e=o.getSnapshotBeforeUpdate(Qt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){We(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)th(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":th(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function F0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&bo(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){We(a,a.return,x)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){We(a,a.return,x)}}o&64&&U0(a),o&512&&To(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mm(e,n)}catch(x){We(a,a.return,x)}}break;case 27:n===null&&o&4&&z0(a);case 26:case 5:fa(e,a),n===null&&o&4&&O0(a),o&512&&To(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),o&4&&G0(e,a);break;case 13:fa(e,a),o&4&&V0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wS.bind(null,a),ZS(e,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||vn,u=ca;var h=vn;ca=o,(vn=n)&&!h?ha(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ca=u,vn=h}break;case 30:break;default:fa(e,a)}}function B0(e){var n=e.alternate;n!==null&&(e.alternate=null,B0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,kn=!1;function ua(e,n,a){for(a=a.child;a!==null;)H0(e,n,a),a=a.sibling}function H0(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:vn||zi(a,n),ua(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||zi(a,n);var o=nn,u=kn;Ja(a.type)&&(nn=a.stateNode,kn=!1),ua(e,n,a),Oo(a.stateNode),nn=o,kn=u;break;case 5:vn||zi(a,n);case 6:if(o=nn,u=kn,nn=null,ua(e,n,a),nn=o,kn=u,nn!==null)if(kn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(h){We(a,n,h)}else try{nn.removeChild(a.stateNode)}catch(h){We(a,n,h)}break;case 18:nn!==null&&(kn?(e=nn,Ug(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mr(e)):Ug(nn,a.stateNode));break;case 4:o=nn,u=kn,nn=a.stateNode.containerInfo,kn=!0,ua(e,n,a),nn=o,kn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),vn||Xa(4,a,n),ua(e,n,a);break;case 1:vn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&L0(a,n,o)),ua(e,n,a);break;case 21:ua(e,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ua(e,n,a),vn=o;break;default:ua(e,n,a)}}function G0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(a){We(n,n.return,a)}}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(a){We(n,n.return,a)}}function yS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I0),n;default:throw Error(s(435,e.tag))}}function Yl(e,n){var a=yS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=DS.bind(null,e,o);o.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(Ja(R.type)){nn=R.stateNode,kn=!1;break t}break;case 5:nn=R.stateNode,kn=!1;break t;case 3:case 4:nn=R.stateNode.containerInfo,kn=!0;break t}R=R.return}if(nn===null)throw Error(s(160));H0(h,x,u),nn=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,e),n=n.sibling}var Ti=null;function k0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),o&4&&(Xa(3,e,e.return),bo(3,e),Xa(5,e,e.return));break;case 1:Xn(n,e),Wn(e),o&512&&(vn||a===null||zi(a,a.return)),o&64&&ca&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(Xn(n,e),Wn(e),o&512&&(vn||a===null||zi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[wa]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Dn(h,o,a),h[un]=e,dn(h),o=h;break t;case"link":var x=kg("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(h=x[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}h=u.createElement(o),Dn(h,o,a),u.head.appendChild(h);break;case"meta":if(x=kg("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(h=x[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}h=u.createElement(o),Dn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[un]=e,dn(h),o=h}e.stateNode=o}else Xg(u,e.type,e.stateNode);else e.stateNode=Vg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Xg(u,e.type,e.stateNode):Vg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Af(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),o&512&&(vn||a===null||zi(a,a.return)),a!==null&&o&4&&Af(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),o&512&&(vn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Qn(u,"")}catch(Qt){We(e,e.return,Qt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Af(e,u,a!==null?a.memoizedProps:u)),o&1024&&(wf=!0);break;case 6:if(Xn(n,e),Wn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Qt){We(e,e.return,Qt)}}break;case 3:if(cc=null,u=Ti,Ti=oc(n.containerInfo),Xn(n,e),Ti=u,Wn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(Qt){We(e,e.return,Qt)}wf&&(wf=!1,X0(e));break;case 4:o=Ti,Ti=oc(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ti=o;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=At()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=ca,pt=vn;if(ca=nt||u,vn=pt||G,Xn(n,e),vn=pt,ca=nt,Wn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ca||vn||Ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var St=G.memoizedProps.style,lt=St!=null&&St.hasOwnProperty("display")?St.display:null;R.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Qt){We(G,G.return,Qt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qt){We(G,G.return,Qt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?Lg(ct,!0):Lg(G.stateNode,!1)}catch(Qt){We(G,G.return,Qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(e,a))));break;case 19:Xn(n,e),Wn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(P0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Rf(e);ql(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(Qn(x,""),a.flags&=-33);var R=Rf(e);ql(e,R,x);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=Rf(e);Cf(e,nt,G);break;default:throw Error(s(161))}}catch(pt){We(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function X0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(e,n.alternate,n),n=n.sibling}function Ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ds(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&L0(n,n.return,a),Ds(n);break;case 27:Oo(n.stateNode);case 26:case 5:zi(n,n.return),Ds(n);break;case 22:n.memoizedState===null&&Ds(n);break;case 30:Ds(n);break;default:Ds(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:ha(u,h,a),bo(4,h);break;case 1:if(ha(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){We(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)ym(G[u],R)}catch(nt){We(o,o.return,nt)}}a&&x&64&&U0(h),To(h,h.return);break;case 27:z0(h);case 26:case 5:ha(u,h,a),a&&o===null&&x&4&&O0(h),To(h,h.return);break;case 12:ha(u,h,a);break;case 31:ha(u,h,a),a&&x&4&&G0(u,h);break;case 13:ha(u,h,a),a&&x&4&&V0(u,h);break;case 22:h.memoizedState===null&&ha(u,h,a),To(h,h.return);break;case 30:break;default:ha(u,h,a)}n=n.sibling}}function Df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Nf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Ai(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(e,n,a,o),n=n.sibling}function W0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,o),u&2048&&bo(9,n);break;case 1:Ai(e,n,a,o);break;case 3:Ai(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){Ai(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,R=h.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){We(n,n.return,G)}}else Ai(e,n,a,o);break;case 31:Ai(e,n,a,o);break;case 13:Ai(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?Ai(e,n,a,o):Ao(e,n):h._visibility&2?Ai(e,n,a,o):(h._visibility|=2,fr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(x,n);break;case 24:Ai(e,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ai(e,n,a,o)}}function fr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,R=a,G=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:fr(h,x,R,G,u),bo(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?fr(h,x,R,G,u):Ao(h,x):(pt._visibility|=2,fr(h,x,R,G,u)),u&&nt&2048&&Df(x.alternate,x);break;case 24:fr(h,x,R,G,u),u&&nt&2048&&Nf(x.alternate,x);break;default:fr(h,x,R,G,u)}n=n.sibling}}function Ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ao(a,o),u&2048&&Df(o.alternate,o);break;case 24:Ao(a,o),u&2048&&Nf(o.alternate,o);break;default:Ao(a,o)}n=n.sibling}}var Ro=8192;function hr(e,n,a){if(e.subtreeFlags&Ro)for(e=e.child;e!==null;)q0(e,n,a),e=e.sibling}function q0(e,n,a){switch(e.tag){case 26:hr(e,n,a),e.flags&Ro&&e.memoizedState!==null&&oy(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:hr(e,n,a);break;case 3:case 4:var o=Ti;Ti=oc(e.stateNode.containerInfo),hr(e,n,a),Ti=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ro,Ro=16777216,hr(e,n,a),Ro=o):hr(e,n,a));break;default:hr(e,n,a)}}function Y0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Z0(o,e)}Y0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)j0(e),e=e.sibling}function j0(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,jl(e)):Co(e);break;default:Co(e)}}function jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Z0(o,e)}Y0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}e=e.sibling}}function Z0(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,h=o.return;if(B0(o),o===a){En=null;break t}if(u!==null){u.return=h,En=u;break t}En=h}}}var MS={getCacheForType:function(e){var n=Cn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},ES=typeof WeakMap=="function"?WeakMap:Map,Be=0,Je=null,Te=null,Ce=0,Xe=0,ii=null,Wa=!1,dr=!1,Uf=!1,da=0,on=0,qa=0,Ns=0,Lf=0,ai=0,pr=0,wo=null,qn=null,Of=!1,Zl=0,K0=0,Kl=1/0,Jl=null,Ya=null,Sn=0,ja=null,mr=null,pa=0,Pf=0,zf=null,J0=null,Do=0,If=null;function si(){return(Be&2)!==0&&Ce!==0?Ce&-Ce:O.T!==null?kf():Zr()}function Q0(){if(ai===0)if((Ce&536870912)===0||De){var e=Ee;Ee<<=1,(Ee&3932160)===0&&(Ee=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Yn(e,n,a){(e===Je&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(gr(e,0),Za(e,Ce,ai,!1)),he(e,a),((Be&2)===0||e!==Je)&&(e===Je&&((Be&2)===0&&(Ns|=a),on===4&&Za(e,Ce,ai,!1)),Ii(e))}function $0(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xt(e,n),u=o?AS(e,n):Bf(e,n,!0),h=o;do{if(u===0){dr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!bS(a)){u=Bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=wo;var G=R.current.memoizedState.isDehydrated;if(G&&(gr(R,x).flags|=256),x=Bf(R,x,!1),x!==2){if(Uf&&!G){R.errorRecoveryDisabledLanes|=h,Ns|=h,u=4;break t}h=qn,qn=u,h!==null&&(qn===null?qn=h:qn.push.apply(qn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){gr(e,0),Za(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,ai,!Wa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-At(),10<u)){if(Za(o,n,ai,!Wa),mt(o,0,!0)!==0)break t;pa=n,o.timeoutHandle=Dg(tg.bind(null,o,a,qn,Jl,Of,n,ai,Ns,pr,Wa,h,"Throttled",-0,0),u);break t}tg(o,a,qn,Jl,Of,n,ai,Ns,pr,Wa,h,null,-0,0)}}break}while(!0);Ii(e)}function tg(e,n,a,o,u,h,x,R,G,nt,pt,St,lt,ct){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},q0(n,h,St);var Qt=(h&62914560)===h?Zl-At():(h&4194048)===h?K0-At():0;if(Qt=ly(St,Qt),Qt!==null){pa=h,e.cancelPendingCommit=Qt(lg.bind(null,e,n,h,a,o,u,x,R,G,pt,St,null,lt,ct)),Za(e,h,x,!nt);return}}lg(e,n,h,a,o,u,x,R,G)}function bS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~Lf,n&=~Ns,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ht(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Fe(e,a,n)}function Ql(){return(Be&6)===0?(No(0),!1):!0}function Ff(){if(Te!==null){if(Xe===0)var e=Te.return;else e=Te,ia=Ms=null,$u(e),rr=null,ho=0,e=Te;for(;e!==null;)N0(e.alternate,e),e=e.return;Te=null}}function gr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,XS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,Ff(),Je=e,Te=a=ea(e.current,null),Ce=n,Xe=0,ii=null,Wa=!1,dr=Xt(e,n),Uf=!1,pr=ai=Lf=Ns=qa=on=0,qn=wo=null,Of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ht(o),h=1<<u;n|=e[u],o&=~h}return da=n,xl(),a}function eg(e,n){_e=null,O.H=yo,n===sr||n===Rl?(n=vm(),Xe=3):n===Gu?(n=vm(),Xe=4):Xe=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Te===null&&(on=1,Gl(e,hi(n,e.current)))}function ng(){var e=ei.current;return e===null?!0:(Ce&4194048)===Ce?gi===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===gi:!1}function ig(){var e=O.H;return O.H=yo,e===null?yo:e}function ag(){var e=O.A;return O.A=MS,e}function $l(){on=4,Wa||(Ce&4194048)!==Ce&&ei.current!==null||(dr=!0),(qa&134217727)===0&&(Ns&134217727)===0||Je===null||Za(Je,Ce,ai,!1)}function Bf(e,n,a){var o=Be;Be|=2;var u=ig(),h=ag();(Je!==e||Ce!==n)&&(Jl=null,gr(e,n)),n=!1;var x=on;t:do try{if(Xe!==0&&Te!==null){var R=Te,G=ii;switch(Xe){case 8:Ff(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var nt=Xe;if(Xe=0,ii=null,vr(e,R,G,nt),a&&dr){x=0;break t}break;default:nt=Xe,Xe=0,ii=null,vr(e,R,G,nt)}}TS(),x=on;break}catch(pt){eg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ia=Ms=null,Be=o,O.H=u,O.A=h,Te===null&&(Je=null,Ce=0,xl()),x}function TS(){for(;Te!==null;)sg(Te)}function AS(e,n){var a=Be;Be|=2;var o=ig(),u=ag();Je!==e||Ce!==n?(Jl=null,Kl=At()+500,gr(e,n)):dr=Xt(e,n);t:do try{if(Xe!==0&&Te!==null){n=Te;var h=ii;e:switch(Xe){case 1:Xe=0,ii=null,vr(e,n,h,1);break;case 2:case 9:if(mm(h)){Xe=0,ii=null,rg(n);break}n=function(){Xe!==2&&Xe!==9||Je!==e||(Xe=7),Ii(e)},h.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:mm(h)?(Xe=0,ii=null,rg(n)):(Xe=0,ii=null,vr(e,n,h,7));break;case 5:var x=null;switch(Te.tag){case 26:x=Te.memoizedState;case 5:case 27:var R=Te;if(x?Wg(x):R.stateNode.complete){Xe=0,ii=null;var G=R.sibling;if(G!==null)Te=G;else{var nt=R.return;nt!==null?(Te=nt,tc(nt)):Te=null}break e}}Xe=0,ii=null,vr(e,n,h,5);break;case 6:Xe=0,ii=null,vr(e,n,h,6);break;case 8:Ff(),on=6;break t;default:throw Error(s(462))}}RS();break}catch(pt){eg(e,pt)}while(!0);return ia=Ms=null,O.H=o,O.A=u,Be=a,Te!==null?0:(Je=null,Ce=0,xl(),on)}function RS(){for(;Te!==null&&!$t();)sg(Te)}function sg(e){var n=w0(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?tc(e):Te=n}function rg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:$u(n);default:N0(a,n),n=Te=am(n,da),n=w0(a,n,da)}e.memoizedProps=e.pendingProps,n===null?tc(e):Te=n}function vr(e,n,a,o){ia=Ms=null,$u(n),rr=null,ho=0;var u=n.return;try{if(mS(e,u,n,a,Ce)){on=1,Gl(e,hi(a,e.current)),Te=null;return}}catch(h){if(u!==null)throw Te=u,h;on=1,Gl(e,hi(a,e.current)),Te=null;return}n.flags&32768?(De||o===1?e=!0:dr||(Ce&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),og(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){og(n,Wa);return}e=n.return;var a=_S(n.alternate,n,da);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);on===0&&(on=5)}function og(e,n){do{var a=xS(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);on=6,Te=null}function lg(e,n,a,o,u,h,x,R,G){e.cancelPendingCommit=null;do ec();while(Sn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Au,an(e,a,h,x,R,G),e===Je&&(Te=Je=null,Ce=0),mr=n,ja=e,pa=a,Pf=h,zf=u,J0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,NS($,function(){return dg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=F.p,F.p=2,x=Be,Be|=4;try{SS(e,n,a)}finally{Be=x,F.p=u,O.T=o}}Sn=1,cg(),ug(),fg()}}function cg(){if(Sn===1){Sn=0;var e=ja,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Be;Be|=4;try{k0(n,e);var h=Jf,x=Zp(e.containerInfo),R=h.focusedElem,G=h.selectionRange;if(x!==R&&R&&R.ownerDocument&&jp(R.ownerDocument.documentElement,R)){if(G!==null&&yu(R)){var nt=G.start,pt=G.end;if(pt===void 0&&(pt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(pt,R.value.length);else{var St=R.ownerDocument||document,lt=St&&St.defaultView||window;if(lt.getSelection){var ct=lt.getSelection(),Qt=R.textContent.length,re=Math.min(G.start,Qt),Ze=G.end===void 0?re:Math.min(G.end,Qt);!ct.extend&&re>Ze&&(x=Ze,Ze=re,re=x);var J=Yp(R,re),W=Yp(R,Ze);if(J&&W&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==W.node||ct.focusOffset!==W.offset)){var tt=St.createRange();tt.setStart(J.node,J.offset),ct.removeAllRanges(),re>Ze?(ct.addRange(tt),ct.extend(W.node,W.offset)):(tt.setEnd(W.node,W.offset),ct.addRange(tt))}}}}for(St=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&St.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<St.length;R++){var _t=St[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}dc=!!Kf,Jf=Kf=null}finally{Be=u,F.p=o,O.T=a}}e.current=n,Sn=2}}function ug(){if(Sn===2){Sn=0;var e=ja,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=F.p;F.p=2;var u=Be;Be|=4;try{F0(e,n.alternate,n)}finally{Be=u,F.p=o,O.T=a}}Sn=3}}function fg(){if(Sn===4||Sn===3){Sn=0,fe();var e=ja,n=mr,a=pa,o=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,mr=ja=null,hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ya=null),jr(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=F.p,F.p=2,O.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];h(R.value,{componentStack:R.stack})}}finally{O.T=n,F.p=u}}(pa&3)!==0&&ec(),Ii(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===If?Do++:(Do=0,If=e):Do=0,No(0)}}function hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function ec(){return cg(),ug(),fg(),dg()}function dg(){if(Sn!==5)return!1;var e=ja,n=Pf;Pf=0;var a=jr(pa),o=O.T,u=F.p;try{F.p=32>a?32:a,O.T=null,a=zf,zf=null;var h=ja,x=pa;if(Sn=0,mr=ja=null,pa=0,(Be&6)!==0)throw Error(s(331));var R=Be;if(Be|=4,j0(h.current),W0(h,h.current,x,a),Be=R,No(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ht,h)}catch{}return!0}finally{F.p=u,O.T=o,hg(e,n)}}function pg(e,n,a){n=hi(a,n),n=mf(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(he(e,2),Ii(e))}function We(e,n,a){if(e.tag===3)pg(e,e,a);else for(;n!==null;){if(n.tag===3){pg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){e=hi(a,e),a=m0(2),o=Ga(n,a,2),o!==null&&(g0(a,o,n,e),he(o,2),Ii(o));break}}n=n.return}}function Hf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ES;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Uf=!0,u.add(a),e=CS.bind(null,e,n,a),n.then(e,e))}function CS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Je===e&&(Ce&a)===a&&(on===4||on===3&&(Ce&62914560)===Ce&&300>At()-Zl?(Be&2)===0&&gr(e,0):Lf|=a,pr===Ce&&(pr=0)),Ii(e)}function mg(e,n){n===0&&(n=Rt()),e=xs(e,n),e!==null&&(he(e,n),Ii(e))}function wS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),mg(e,a)}function DS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),mg(e,a)}function NS(e,n){return H(e,n)}var nc=null,_r=null,Gf=!1,ic=!1,Vf=!1,Ka=0;function Ii(e){e!==_r&&e.next===null&&(_r===null?nc=_r=e:_r=_r.next=e),ic=!0,Gf||(Gf=!0,LS())}function No(e,n){if(!Vf&&ic){Vf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ht(42|e)+1)-1,h&=u&~(x&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,xg(o,h))}else h=Ce,h=mt(o,o===Je?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Xt(o,h)||(a=!0,xg(o,h));o=o.next}while(a);Vf=!1}}function US(){gg()}function gg(){ic=Gf=!1;var e=0;Ka!==0&&kS()&&(e=Ka);for(var n=At(),a=null,o=nc;o!==null;){var u=o.next,h=vg(o,n);h===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(h&3)!==0)&&(ic=!0)),o=u}Sn!==0&&Sn!==5||No(e),Ka!==0&&(Ka=0)}function vg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-Ht(h),R=1<<x,G=u[x];G===-1?((R&a)===0||(R&o)!==0)&&(u[x]=It(R,n)):G<=n&&(e.expiredLanes|=R),h&=~R}if(n=Je,a=Ce,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ue(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ue(o),jr(a)){case 2:case 8:a=E;break;case 32:a=$;break;case 268435456:a=Tt;break;default:a=$}return o=_g.bind(null,e),a=H(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ue(o),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=Ce;return o=mt(e,e===Je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($0(e,o,n),vg(e,At()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function xg(e,n){if(ec())return null;$0(e,n,!0)}function LS(){WS(function(){(Be&6)!==0?H(C,US):gg()})}function kf(){if(Ka===0){var e=ir;e===0&&(e=pe,pe<<=1,(pe&261888)===0&&(pe=256)),Ka=e}return Ka}function Sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ms(""+e)}function yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function OS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Sg((u[An]||null).action),x=o.submitter;x&&(n=(n=x[An]||null)?Sg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var R=new ml("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var G=x?yg(u,x):new FormData(u);cf(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=x?yg(u,x):new FormData(u),cf(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],PS=Wf.toLowerCase(),zS=Wf[0].toUpperCase()+Wf.slice(1);bi(PS,"on"+zS)}bi(Qp,"onAnimationEnd"),bi($p,"onAnimationIteration"),bi(tm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Qx,"onTransitionRun"),bi($x,"onTransitionStart"),bi(tS,"onTransitionCancel"),bi(em,"onTransitionEnd"),ot("onMouseEnter",["mouseout","mouseover"]),ot("onMouseLeave",["mouseout","mouseover"]),ot("onPointerEnter",["pointerout","pointerover"]),ot("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function Mg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],G=R.instance,nt=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=nt;try{h(u)}catch(pt){_l(pt)}u.currentTarget=null,h=G}else for(x=0;x<o.length;x++){if(R=o[x],G=R.instance,nt=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=nt;try{h(u)}catch(pt){_l(pt)}u.currentTarget=null,h=G}}}}function Ae(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(Eg(n,e,2,!1),a.add(o))}function qf(e,n,a){var o=0;n&&(o|=4),Eg(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[ac]){e[ac]=!0,fl.forEach(function(a){a!=="selectionchange"&&(IS.has(a)||qf(a,!1,e),qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,qf("selectionchange",!1,n))}}function Eg(e,n,a,o){switch(Qg(n)){case 2:var u=fy;break;case 8:u=hy;break;default:u=lh}a=u.bind(null,n,a,e),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function jf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Da(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=h=x;continue t}R=R.parentNode}}o=o.return}Cp(function(){var nt=h,pt=uu(a),St=[];t:{var lt=nm.get(e);if(lt!==void 0){var ct=ml,Qt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":ct=Dx;break;case"focusin":Qt="focus",ct=gu;break;case"focusout":Qt="blur",ct=gu;break;case"beforeblur":case"afterblur":ct=gu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Lx;break;case Qp:case $p:case tm:ct=yx;break;case em:ct=Px;break;case"scroll":case"scrollend":ct=gx;break;case"wheel":ct=Ix;break;case"copy":case"cut":case"paste":ct=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Lp;break;case"toggle":case"beforetoggle":ct=Bx}var re=(n&4)!==0,Ze=!re&&(e==="scroll"||e==="scrollend"),J=re?lt!==null?lt+"Capture":null:lt;re=[];for(var W=nt,tt;W!==null;){var _t=W;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||J===null||(_t=$r(W,J),_t!=null&&re.push(Lo(W,_t,tt))),Ze)break;W=W.return}0<re.length&&(lt=new ct(lt,Qt,null,a,pt),St.push({event:lt,listeners:re}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",lt&&a!==cu&&(Qt=a.relatedTarget||a.fromElement)&&(Da(Qt)||Qt[Qi]))break t;if((ct||lt)&&(lt=pt.window===pt?pt:(lt=pt.ownerDocument)?lt.defaultView||lt.parentWindow:window,ct?(Qt=a.relatedTarget||a.toElement,ct=nt,Qt=Qt?Da(Qt):null,Qt!==null&&(Ze=c(Qt),re=Qt.tag,Qt!==Ze||re!==5&&re!==27&&re!==6)&&(Qt=null)):(ct=null,Qt=nt),ct!==Qt)){if(re=Np,_t="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(re=Lp,_t="onPointerLeave",J="onPointerEnter",W="pointer"),Ze=ct==null?lt:ps(ct),tt=Qt==null?lt:ps(Qt),lt=new re(_t,W+"leave",ct,a,pt),lt.target=Ze,lt.relatedTarget=tt,_t=null,Da(pt)===nt&&(re=new re(J,W+"enter",Qt,a,pt),re.target=tt,re.relatedTarget=Ze,_t=re),Ze=_t,ct&&Qt)e:{for(re=FS,J=ct,W=Qt,tt=0,_t=J;_t;_t=re(_t))tt++;_t=0;for(var se=W;se;se=re(se))_t++;for(;0<tt-_t;)J=re(J),tt--;for(;0<_t-tt;)W=re(W),_t--;for(;tt--;){if(J===W||W!==null&&J===W.alternate){re=J;break e}J=re(J),W=re(W)}re=null}else re=null;ct!==null&&bg(St,lt,ct,re,!1),Qt!==null&&Ze!==null&&bg(St,Ze,Qt,re,!0)}}t:{if(lt=nt?ps(nt):window,ct=lt.nodeName&&lt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&lt.type==="file")var ze=Gp;else if(Bp(lt))if(Vp)ze=Zx;else{ze=Yx;var ee=qx}else ct=lt.nodeName,!ct||ct.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?nt&&He(nt.elementType)&&(ze=Gp):ze=jx;if(ze&&(ze=ze(e,nt))){Hp(St,ze,a,pt);break t}ee&&ee(e,lt,nt),e==="focusout"&&nt&&lt.type==="number"&&nt.memoizedProps.value!=null&&be(lt,"number",lt.value)}switch(ee=nt?ps(nt):window,e){case"focusin":(Bp(ee)||ee.contentEditable==="true")&&(Zs=ee,Mu=nt,oo=null);break;case"focusout":oo=Mu=Zs=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Kp(St,a,pt);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":Kp(St,a,pt)}var xe;if(_u)t:{switch(e){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else js?Ip(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Op&&a.locale!=="ko"&&(js||we!=="onCompositionStart"?we==="onCompositionEnd"&&js&&(xe=wp()):(Oa=pt,du="value"in Oa?Oa.value:Oa.textContent,js=!0)),ee=sc(nt,we),0<ee.length&&(we=new Up(we,e,null,a,pt),St.push({event:we,listeners:ee}),xe?we.data=xe:(xe=Fp(a),xe!==null&&(we.data=xe)))),(xe=Gx?Vx(e,a):kx(e,a))&&(we=sc(nt,"onBeforeInput"),0<we.length&&(ee=new Up("onBeforeInput","beforeinput",null,a,pt),St.push({event:ee,listeners:we}),ee.data=xe)),OS(St,e,nt,a,pt)}Mg(St,n)})}function Lo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=$r(e,a),u!=null&&o.unshift(Lo(e,u,h)),u=$r(e,n),u!=null&&o.push(Lo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function FS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bg(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var R=a,G=R.alternate,nt=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||nt===null||(G=nt,u?(nt=$r(a,h),nt!=null&&x.unshift(Lo(a,nt,G))):u||(nt=$r(a,h),nt!=null&&x.push(Lo(a,nt,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var BS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function Tg(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(HS,"")}function Ag(e,n){return n=Tg(n),Tg(e)===n}function je(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Qn(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":Ei(e,o,h);break;case"data":if(n!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ms(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&je(e,n,"name",u.name,u,null),je(e,n,"formEncType",u.formEncType,u,null),je(e,n,"formMethod",u.formMethod,u,null),je(e,n,"formTarget",u.formTarget,u,null)):(je(e,n,"encType",u.encType,u,null),je(e,n,"method",u.method,u,null),je(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ms(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ms(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),Gt(e,"popover",o);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Gt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,Gt(e,a,o))}}function Zf(e,n,a,o,u,h){switch(a){case"style":Ei(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Qn(e,o):(typeof o=="number"||typeof o=="bigint")&&Qn(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[An]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Gt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(e,n,h,x,a,null)}}u&&je(e,n,"srcSet",a.srcSet,a,null),o&&je(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var R=h=x=u=null,G=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":x=pt;break;case"checked":G=pt;break;case"defaultChecked":nt=pt;break;case"value":h=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:je(e,n,o,pt,a,null)}}Ln(e,h,R,G,nt,x,u,!1);return;case"select":Ae("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:je(e,n,u,R,a,null)}n=h,a=x,e.multiple=!!o,n!=null?xn(e,!!o,n,!1):a!=null&&xn(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:je(e,n,x,R,a,null)}Mi(e,o,u,h);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":je(e,n,G,o,a,null));return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Ae(Uo[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:je(e,n,nt,o,a,null)}return;default:if(He(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Zf(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&je(e,n,R,o,a,null))}function GS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,R=null,G=null,nt=null,pt=null;for(ct in a){var St=a[ct];if(a.hasOwnProperty(ct)&&St!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ct)||je(e,n,ct,null,o,St)}}for(var lt in o){var ct=o[lt];if(St=a[lt],o.hasOwnProperty(lt)&&(ct!=null||St!=null))switch(lt){case"type":h=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":pt=ct;break;case"value":x=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==St&&je(e,n,lt,ct,o,St)}}Yt(e,x,R,G,nt,pt,h,u);return;case"select":ct=x=R=lt=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(h)||je(e,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":lt=h;break;case"defaultValue":R=h;break;case"multiple":x=h;default:h!==G&&je(e,n,u,h,o,G)}n=R,a=x,o=ct,lt!=null?xn(e,!!a,lt,!1):!!o!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":ct=lt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:je(e,n,R,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":lt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&je(e,n,x,u,o,h)}Jn(e,lt,ct);return;case"option":for(var Qt in a)lt=a[Qt],a.hasOwnProperty(Qt)&&lt!=null&&!o.hasOwnProperty(Qt)&&(Qt==="selected"?e.selected=!1:je(e,n,Qt,null,o,lt));for(G in o)lt=o[G],ct=a[G],o.hasOwnProperty(G)&&lt!==ct&&(lt!=null||ct!=null)&&(G==="selected"?e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol":je(e,n,G,lt,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)lt=a[re],a.hasOwnProperty(re)&&lt!=null&&!o.hasOwnProperty(re)&&je(e,n,re,null,o,lt);for(nt in o)if(lt=o[nt],ct=a[nt],o.hasOwnProperty(nt)&&lt!==ct&&(lt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:je(e,n,nt,lt,o,ct)}return;default:if(He(n)){for(var Ze in a)lt=a[Ze],a.hasOwnProperty(Ze)&&lt!==void 0&&!o.hasOwnProperty(Ze)&&Zf(e,n,Ze,void 0,o,lt);for(pt in o)lt=o[pt],ct=a[pt],!o.hasOwnProperty(pt)||lt===ct||lt===void 0&&ct===void 0||Zf(e,n,pt,lt,o,ct);return}}for(var J in a)lt=a[J],a.hasOwnProperty(J)&&lt!=null&&!o.hasOwnProperty(J)&&je(e,n,J,null,o,lt);for(St in o)lt=o[St],ct=a[St],!o.hasOwnProperty(St)||lt===ct||lt==null&&ct==null||je(e,n,St,lt,o,ct)}function Rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,R=u.duration;if(h&&R&&Rg(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],nt=G.startTime;if(nt>R)break;var pt=G.transferSize,St=G.initiatorType;pt&&Rg(St)&&(G=G.responseEnd,x+=pt*(G<R?1:(R-nt)/(G-nt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kf=null,Jf=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Qf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===$f?!1:($f=e,!0):($f=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(qS)}:Dg;function qS(e){setTimeout(function(){throw e})}function Ja(e){return e==="head"}function Ug(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Oo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Oo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,R=h.nodeName;h[wa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&Oo(e.ownerDocument.body);a=u}while(a);Mr(n)}function Lg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function th(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":th(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function YS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function jS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function Og(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function eh(e){return e.data==="$?"||e.data==="$~"}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ih=null;function Pg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ig(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Oo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var _i=new Map,Fg=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=F.d;F.d={f:KS,r:JS,D:QS,C:$S,L:ty,m:ey,X:iy,S:ny,M:ay};function KS(){var e=ma.f(),n=Ql();return e||n}function JS(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?e0(n):ma.r(e)}var xr=typeof document>"u"?null:document;function Bg(e,n,a){var o=xr;if(o&&typeof n=="string"&&n){var u=Ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Fg.has(u)||(Fg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),dn(n),o.head.appendChild(n)))}}function QS(e){ma.D(e),Bg("dns-prefetch",e,null)}function $S(e,n){ma.C(e,n),Bg("preconnect",e,n)}function ty(e,n,a){ma.L(e,n,a);var o=xr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ve(a.imageSizes)+'"]')):u+='[href="'+Ve(e)+'"]';var h=u;switch(n){case"style":h=Sr(e);break;case"script":h=yr(e)}_i.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(h))||n==="script"&&o.querySelector(zo(h))||(n=o.createElement("link"),Dn(n,"link",e),dn(n),o.head.appendChild(n)))}}function ey(e,n){ma.m(e,n);var a=xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=yr(e)}if(!_i.has(h)&&(e=_({rel:"modulepreload",href:e},n),_i.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(h)))return}o=a.createElement("link"),Dn(o,"link",e),dn(o),a.head.appendChild(o)}}}function ny(e,n,a){ma.S(e,n,a);var o=xr;if(o&&e){var u=Ua(o).hoistableStyles,h=Sr(e);n=n||"default";var x=u.get(h);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Po(h)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(h))&&ah(e,a);var G=x=o.createElement("link");dn(G),Dn(G,"link",e),G._p=new Promise(function(nt,pt){G.onload=nt,G.onerror=pt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(h,x)}}}function iy(e,n){ma.X(e,n);var a=xr;if(a&&e){var o=Ua(a).hoistableScripts,u=yr(e),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(e=_({src:e,async:!0},n),(n=_i.get(u))&&sh(e,n),h=a.createElement("script"),dn(h),Dn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function ay(e,n){ma.M(e,n);var a=xr;if(a&&e){var o=Ua(a).hoistableScripts,u=yr(e),h=o.get(u);h||(h=a.querySelector(zo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&sh(e,n),h=a.createElement("script"),dn(h),Dn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Hg(e,n,a,o){var u=(u=st.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Sr(a.href);var h=Ua(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(Po(e)))&&!h._p&&(x.instance=h,x.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),h||sy(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Sr(e){return'href="'+Ve(e)+'"'}function Po(e){return'link[rel="stylesheet"]['+e+"]"}function Gg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function sy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),dn(n),e.head.appendChild(n))}function yr(e){return'[src="'+Ve(e)+'"]'}function zo(e){return"script[async]"+e}function Vg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,dn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),dn(o),Dn(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Sr(a.href);var h=e.querySelector(Po(u));if(h)return n.state.loading|=4,n.instance=h,dn(h),h;o=Gg(a),(u=_i.get(u))&&ah(o,u),h=(e.ownerDocument||e).createElement("link"),dn(h);var x=h;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Dn(h,"link",o),n.state.loading|=4,lc(h,a.precedence,e),n.instance=h;case"script":return h=yr(a.src),(u=e.querySelector(zo(h)))?(n.instance=u,dn(u),u):(o=a,(u=_i.get(h))&&(o=_({},a),sh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),dn(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function kg(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[wa]||h[un]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(h):o.set(x,[h])}}return o}function Xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ry(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),h=n.querySelector(Po(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,dn(h);return}h=n.ownerDocument||n,o=Gg(o),(u=_i.get(u))&&ah(o,u),h=h.createElement("link"),dn(h);var x=h;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Dn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var rh=0;function ly(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&rh===0&&(rh=62500*VS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>rh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(cy,e),fc=null,uc.call(e))}function cy(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Io={$$typeof:D,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function uy(e,n,a,o,u,h,x,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=te(0),this.hiddenUpdates=te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function qg(e,n,a,o,u,h,x,R,G,nt,pt,St){return e=new uy(e,n,a,x,G,nt,pt,St,R),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=Fu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Vu(h),e}function Yg(e){return e?(e=Qs,e):Qs}function jg(e,n,a,o,u,h){u=Yg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ga(e,o,n),a!==null&&(Yn(a,e,n),mo(a,e,n))}function Zg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function oh(e,n){Zg(e,n),(e=e.alternate)&&Zg(e,n)}function Kg(e){if(e.tag===13||e.tag===31){var n=xs(e,67108864);n!==null&&Yn(n,e,67108864),oh(e,67108864)}}function Jg(e){if(e.tag===13||e.tag===31){var n=si();n=ds(n);var a=xs(e,n);a!==null&&Yn(a,e,n),oh(e,n)}}var dc=!0;function fy(e,n,a,o){var u=O.T;O.T=null;var h=F.p;try{F.p=2,lh(e,n,a,o)}finally{F.p=h,O.T=u}}function hy(e,n,a,o){var u=O.T;O.T=null;var h=F.p;try{F.p=8,lh(e,n,a,o)}finally{F.p=h,O.T=u}}function lh(e,n,a,o){if(dc){var u=ch(o);if(u===null)jf(e,n,o,pc,a),$g(e,o);else if(py(u,e,n,a,o))o.stopPropagation();else if($g(e,o),n&4&&-1<dy.indexOf(e)){for(;u!==null;){var h=Na(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Dt(h.pendingLanes);if(x!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-Ht(x);R.entanglements[1]|=G,x&=~G}Ii(h),(Be&6)===0&&(Kl=At()+500,No(0))}}break;case 31:case 13:R=xs(h,2),R!==null&&Yn(R,h,2),Ql(),oh(h,2)}if(h=ch(o),h===null&&jf(e,n,o,pc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else jf(e,n,o,null,a)}}function ch(e){return e=uu(e),uh(e)}var pc=null;function uh(e){if(pc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function Qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Oe()){case C:return 2;case E:return 8;case $:case vt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var fh=!1,Qa=null,$a=null,ts=null,Fo=new Map,Bo=new Map,es=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Ho(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&Kg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function py(e,n,a,o,u){switch(n){case"focusin":return Qa=Ho(Qa,e,n,a,o,u),!0;case"dragenter":return $a=Ho($a,e,n,a,o,u),!0;case"mouseover":return ts=Ho(ts,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Fo.set(h,Ho(Fo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Bo.set(h,Ho(Bo.get(h)||null,e,n,a,o,u)),!0}return!1}function tv(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Kr(e.priority,function(){Jg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Kr(e.priority,function(){Jg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ch(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);cu=o,a.target.dispatchEvent(o),cu=null}else return n=Na(a),n!==null&&Kg(n),e.blockedOn=a,!1;n.shift()}return!0}function ev(e,n,a){mc(e)&&a.delete(n)}function my(){fh=!1,Qa!==null&&mc(Qa)&&(Qa=null),$a!==null&&mc($a)&&($a=null),ts!==null&&mc(ts)&&(ts=null),Fo.forEach(ev),Bo.forEach(ev)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,fh||(fh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,my)))}var vc=null;function nv(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(uh(o||a)===null)continue;break}var h=Na(a);h!==null&&(e.splice(n,3),n-=3,cf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(e){function n(G){return gc(G,e)}Qa!==null&&gc(Qa,e),$a!==null&&gc($a,e),ts!==null&&gc(ts,e),Fo.forEach(n),Bo.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)tv(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[An]||null;if(typeof h=="function")x||nv(a);else if(x){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[An]||null)R=x.formAction;else if(uh(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),nv(a)}}}function iv(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(e){this._internalRoot=e}_c.prototype.render=hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();jg(a,o,e,n,null,null)},_c.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jg(e.current,2,null,e,null,null),Ql(),n[Qi]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&tv(e)}};var av=t.version;if(av!=="19.2.7")throw Error(s(527,av,"19.2.7"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var gy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{ht=xc.inject(gy),dt=xc}catch{}}return Vo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=f0,h=h0,x=d0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=qg(e,1,!1,null,null,a,o,null,u,h,x,iv),e[Qi]=n.current,Yf(e),new hh(n)},Vo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=f0,x=h0,R=d0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=qg(e,1,!0,n,a??null,o,u,G,h,x,R,iv),n.context=Yg(null),a=n.current,o=si(),o=ds(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,he(n,a),Ii(n),e[Qi]=n.current,Yf(e),new _c(n)},Vo.version="19.2.7",Vo}var pv;function Ay(){if(pv)return ph.exports;pv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ph.exports=Ty(),ph.exports}var Ry=Ay(),ye=np();const mv=[{label:"Servicios",href:"#servicios"},{label:"Sectores",href:"#sectores"},{label:"Metodología",href:"#metodologia"},{label:"Contacto",href:"#contacto"}];function Cy(){const[r,t]=ye.useState(!1),[i,s]=ye.useState(!1);ye.useEffect(()=>{const c=()=>{t(window.scrollY>window.innerHeight*.8)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),ye.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const l=(c,f)=>{c.preventDefault(),s(!1);const d=document.querySelector(f);d&&d.scrollIntoView({behavior:"smooth"})};return Z.jsxs(Z.Fragment,{children:[Z.jsx("nav",{"code-path":"src/sections/Navigation.tsx:44:7",className:"fixed top-0 left-0 right-0 z-[100] transition-all duration-300",style:{backgroundColor:r?"rgba(245, 243, 239, 0.95)":"transparent",backdropFilter:r?"blur(10px)":"none",borderBottom:r?"1px solid #d4d0ca":"1px solid transparent"},children:Z.jsxs("div",{"code-path":"src/sections/Navigation.tsx:52:9",className:"mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6",children:[Z.jsx("a",{"code-path":"src/sections/Navigation.tsx:54:11",href:"#",onClick:c=>{c.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"text-lg font-bold uppercase tracking-[3px] transition-colors duration-300",style:{fontFamily:"'Space Grotesk', sans-serif",color:r?"#1a1a1a":"#ffffff"},children:"IMANTEK"}),Z.jsx("div",{"code-path":"src/sections/Navigation.tsx:70:11",className:"hidden items-center gap-8 md:flex",children:mv.map(c=>Z.jsx("a",{"code-path":"src/sections/Navigation.tsx:72:15",href:c.href,onClick:f=>l(f,c.href),className:"text-xs font-normal uppercase tracking-[1.5px] transition-colors duration-300 hover:opacity-70",style:{fontFamily:"'IBM Plex Mono', monospace",color:r?"#1a1a1a":"#ffffff"},children:c.label},c.href))}),Z.jsxs("button",{"code-path":"src/sections/Navigation.tsx:88:11",className:"flex flex-col gap-[5px] md:hidden",onClick:()=>s(!i),"aria-label":"Toggle menu",children:[Z.jsx("span",{"code-path":"src/sections/Navigation.tsx:93:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:r?"#1a1a1a":"#ffffff",transform:i?"rotate(45deg) translate(3px, 3px)":"none"}}),Z.jsx("span",{"code-path":"src/sections/Navigation.tsx:100:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:r?"#1a1a1a":"#ffffff",opacity:i?0:1}}),Z.jsx("span",{"code-path":"src/sections/Navigation.tsx:107:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:r?"#1a1a1a":"#ffffff",transform:i?"rotate(-45deg) translate(3px, -3px)":"none"}})]})]})}),i&&Z.jsx("div",{"code-path":"src/sections/Navigation.tsx:120:9",className:"fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8",style:{backgroundColor:"#1a1a1a"},children:mv.map(c=>Z.jsx("a",{"code-path":"src/sections/Navigation.tsx:125:13",href:c.href,onClick:f=>l(f,c.href),className:"text-2xl font-medium uppercase tracking-[2px] text-white hover:text-[#c4713b] transition-colors",style:{fontFamily:"'Space Grotesk', sans-serif"},children:c.label},c.href))})]})}const ip="184",wy=0,gv=1,Dy=2,Yc=1,Ny=2,Ko=3,fs=0,Zn=1,ya=2,Ea=0,Fr=1,vv=2,_v=3,xv=4,Uy=5,Is=100,Ly=101,Oy=102,Py=103,zy=104,Iy=200,Fy=201,By=202,Hy=203,rd=204,od=205,Gy=206,Vy=207,ky=208,Xy=209,Wy=210,qy=211,Yy=212,jy=213,Zy=214,ld=0,cd=1,ud=2,Hr=3,fd=4,hd=5,dd=6,pd=7,M_=0,Ky=1,Jy=2,Xi=0,E_=1,b_=2,T_=3,ap=4,A_=5,R_=6,C_=7,w_=300,Gs=301,Gr=302,xh=303,Sh=304,su=306,md=1e3,Ma=1001,gd=1002,Nn=1003,Qy=1004,Sc=1005,In=1006,yh=1007,Bs=1008,ci=1009,D_=1010,N_=1011,el=1012,sp=1013,Yi=1014,Vi=1015,Ta=1016,rp=1017,op=1018,nl=1020,U_=35902,L_=35899,O_=1021,P_=1022,Ni=1023,Aa=1026,Hs=1027,z_=1028,lp=1029,Vs=1030,cp=1031,up=1033,jc=33776,Zc=33777,Kc=33778,Jc=33779,vd=35840,_d=35841,xd=35842,Sd=35843,yd=36196,Md=37492,Ed=37496,bd=37488,Td=37489,$c=37490,Ad=37491,Rd=37808,Cd=37809,wd=37810,Dd=37811,Nd=37812,Ud=37813,Ld=37814,Od=37815,Pd=37816,zd=37817,Id=37818,Fd=37819,Bd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Xd=36283,Wd=36284,tu=36285,qd=36286,$y=3200,Yd=0,t1=1,cs="",Si="srgb",eu="srgb-linear",nu="linear",qe="srgb",Er=7680,Sv=519,e1=512,n1=513,i1=514,fp=515,a1=516,s1=517,hp=518,r1=519,yv=35044,Mv="300 es",ki=2e3,il=2001;function o1(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function iu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function l1(){const r=iu("canvas");return r.style.display="block",r}const Ev={};function bv(...r){const t="THREE."+r.shift();console.log(t,...r)}function I_(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ce(...r){r=I_(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=I_(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function jd(...r){const t=r.join(" ");t in Ev||(Ev[t]=!0,ce(...r))}function c1(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const u1={[ld]:cd,[ud]:dd,[fd]:pd,[Hr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Hr};class Xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,Zd=180/Math.PI;function Wr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Re(r,t,i){return Math.max(t,Math.min(i,r))}function f1(r,t){return(r%t+t)%t}function Eh(r,t,i){return(1-i)*r+i*t}function ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mp=class Mp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mp.prototype.isVector2=!0;let qt=Mp;class qr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],g=c[f+0],y=c[f+1],b=c[f+2],N=c[f+3];if(_!==N||m!==g||p!==y||v!==b){let M=m*g+p*y+v*b+_*N;M<0&&(g=-g,y=-y,b=-b,N=-N,M=-M);let S=1-d;if(M<.9995){const w=Math.acos(M),D=Math.sin(w);S=Math.sin(S*w)/D,d=Math.sin(d*w)/D,m=m*S+g*d,p=p*S+y*d,v=v*S+b*d,_=_*S+N*d}else{m=m*S+g*d,p=p*S+y*d,v=v*S+b*d,_=_*S+N*d;const w=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=w,p*=w,v*=w,_*=w}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[f],g=c[f+1],y=c[f+2],b=c[f+3];return t[i]=d*b+v*_+m*y-p*g,t[i+1]=m*b+v*g+p*_-d*y,t[i+2]=p*b+v*y+d*g-m*_,t[i+3]=v*b-d*_-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=g*v*_+p*y*b,this._y=p*y*_-g*v*b,this._z=p*v*b+g*y*_,this._w=p*v*_-g*y*b;break;case"YXZ":this._x=g*v*_+p*y*b,this._y=p*y*_-g*v*b,this._z=p*v*b-g*y*_,this._w=p*v*_+g*y*b;break;case"ZXY":this._x=g*v*_-p*y*b,this._y=p*y*_+g*v*b,this._z=p*v*b+g*y*_,this._w=p*v*_-g*y*b;break;case"ZYX":this._x=g*v*_-p*y*b,this._y=p*y*_+g*v*b,this._z=p*v*b-g*y*_,this._w=p*v*_+g*y*b;break;case"YZX":this._x=g*v*_+p*y*b,this._y=p*y*_+g*v*b,this._z=p*v*b-g*y*_,this._w=p*v*_-g*y*b;break;case"XZY":this._x=g*v*_-p*y*b,this._y=p*y*_-g*v*b,this._z=p*v*b+g*y*_,this._w=p*v*_+g*y*b;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],g=s+d+_;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(v-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*d+l*p-c*m,this._y=l*v+f*m+c*d-s*p,this._z=c*v+f*p+s*m-l*d,this._w=f*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ep=class Ep{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),v=2*(d*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-d*v,this.y=s+m*v+d*p-c*_,this.z=l+m*_+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Re(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ep.prototype.isVector3=!0;let Q=Ep;const bh=new Q,Tv=new qr,bp=class bp{constructor(t,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p)}set(t,i,s,l,c,f,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],g=s[2],y=s[5],b=s[8],N=l[0],M=l[3],S=l[6],w=l[1],D=l[4],L=l[7],V=l[2],U=l[5],B=l[8];return c[0]=f*N+d*w+m*V,c[3]=f*M+d*D+m*U,c[6]=f*S+d*L+m*B,c[1]=p*N+v*w+_*V,c[4]=p*M+v*D+_*U,c[7]=p*S+v*L+_*B,c[2]=g*N+y*w+b*V,c[5]=g*M+y*D+b*U,c[8]=g*S+y*L+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*f*v-i*d*p-s*c*v+s*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*f-d*p,g=d*m-v*c,y=p*c-f*m,b=i*_+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/b;return t[0]=_*N,t[1]=(l*p-v*s)*N,t[2]=(d*s-l*f)*N,t[3]=g*N,t[4]=(v*i-l*m)*N,t[5]=(l*c-d*i)*N,t[6]=y*N,t[7]=(s*m-p*i)*N,t[8]=(f*i-s*c)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Th.makeScale(t,i)),this}rotate(t){return this.premultiply(Th.makeRotation(-t)),this}translate(t,i){return this.premultiply(Th.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bp.prototype.isMatrix3=!0;let ge=bp;const Th=new ge,Av=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rv=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function h1(){const r={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qe&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qe&&(l.r=Br(l.r),l.g=Br(l.g),l.b=Br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?nu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return jd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return jd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[eu]:{primaries:t,whitePoint:s,transfer:nu,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:qe,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ne=h1();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class d1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{br===void 0&&(br=iu("canvas")),br.width=t.width,br.height=t.height;const l=br.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=br}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=iu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let p1=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Ah(l[f].image)):c.push(Ah(l[f]))}else c=Ah(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ah(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?d1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let m1=0;const Rh=new Q;class Gn extends Xs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=Ma,l=Ma,c=In,f=Bs,d=Ni,m=ci,p=Gn.DEFAULT_ANISOTROPY,v=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Wr(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==w_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=w_;Gn.DEFAULT_ANISOTROPY=1;const Tp=class Tp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],g=m[1],y=m[5],b=m[9],N=m[2],M=m[6],S=m[10];if(Math.abs(v-g)<.01&&Math.abs(_-N)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+N)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,L=(y+1)/2,V=(S+1)/2,U=(v+g)/4,B=(_+N)/4,T=(b+M)/4;return D>L&&D>V?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=U/s,c=B/s):L>V?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=U/l,c=T/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=B/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((M-b)*(M-b)+(_-N)*(_-N)+(g-v)*(g-v));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(_-N)/w,this.z=(g-v)/w,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Re(this.x,t.x,i.x),this.y=Re(this.y,t.y,i.y),this.z=Re(this.z,t.z,i.z),this.w=Re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Re(this.x,t,i),this.y=Re(this.y,t,i),this.z=Re(this.z,t,i),this.w=Re(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tp.prototype.isVector4=!0;let ln=Tp;class g1 extends Xs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Gn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new dp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends g1{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class F_ extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class v1 extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=class au{constructor(t,i,s,l,c,f,d,m,p,v,_,g,y,b,N,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,m,p,v,_,g,y,b,N,M)}set(t,i,s,l,c,f,d,m,p,v,_,g,y,b,N,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=_,S[14]=g,S[3]=y,S[7]=b,S[11]=N,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new au().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Tr.setFromMatrixColumn(t,0).length(),c=1/Tr.setFromMatrixColumn(t,1).length(),f=1/Tr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const g=f*v,y=f*_,b=d*v,N=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=y+b*p,i[5]=g-N*p,i[9]=-d*m,i[2]=N-g*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const g=m*v,y=m*_,b=p*v,N=p*_;i[0]=g+N*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*_,i[5]=f*v,i[9]=-d,i[2]=y*d-b,i[6]=N+g*d,i[10]=f*m}else if(t.order==="ZXY"){const g=m*v,y=m*_,b=p*v,N=p*_;i[0]=g-N*d,i[4]=-f*_,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*v,i[9]=N-g*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const g=f*v,y=f*_,b=d*v,N=d*_;i[0]=m*v,i[4]=b*p-y,i[8]=g*p+N,i[1]=m*_,i[5]=N*p+g,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*p,b=d*m,N=d*p;i[0]=m*v,i[4]=N-g*_,i[8]=b*_+y,i[1]=_,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*_+b,i[10]=g-N*_}else if(t.order==="XZY"){const g=f*m,y=f*p,b=d*m,N=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=g*_+N,i[5]=f*v,i[9]=y*_-b,i[2]=b*_-y,i[6]=d*v,i[10]=N*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_1,t,x1)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),is.crossVectors(s,ri),is.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),is.crossVectors(s,ri)),is.normalize(),yc.crossVectors(ri,is),l[0]=is.x,l[4]=yc.x,l[8]=ri.x,l[1]=is.y,l[5]=yc.y,l[9]=ri.y,l[2]=is.z,l[6]=yc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],g=s[9],y=s[13],b=s[2],N=s[6],M=s[10],S=s[14],w=s[3],D=s[7],L=s[11],V=s[15],U=l[0],B=l[4],T=l[8],I=l[12],q=l[1],z=l[5],Y=l[9],rt=l[13],ft=l[2],k=l[6],O=l[10],F=l[14],et=l[3],ut=l[7],xt=l[11],P=l[15];return c[0]=f*U+d*q+m*ft+p*et,c[4]=f*B+d*z+m*k+p*ut,c[8]=f*T+d*Y+m*O+p*xt,c[12]=f*I+d*rt+m*F+p*P,c[1]=v*U+_*q+g*ft+y*et,c[5]=v*B+_*z+g*k+y*ut,c[9]=v*T+_*Y+g*O+y*xt,c[13]=v*I+_*rt+g*F+y*P,c[2]=b*U+N*q+M*ft+S*et,c[6]=b*B+N*z+M*k+S*ut,c[10]=b*T+N*Y+M*O+S*xt,c[14]=b*I+N*rt+M*F+S*P,c[3]=w*U+D*q+L*ft+V*et,c[7]=w*B+D*z+L*k+V*ut,c[11]=w*T+D*Y+L*O+V*xt,c[15]=w*I+D*rt+L*F+V*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],g=t[10],y=t[14],b=t[3],N=t[7],M=t[11],S=t[15],w=m*y-p*g,D=d*y-p*_,L=d*g-m*_,V=f*y-p*v,U=f*g-m*v,B=f*_-d*v;return i*(N*w-M*D+S*L)-s*(b*w-M*V+S*U)+l*(b*D-N*V+S*B)-c*(b*L-N*U+M*B)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],g=t[10],y=t[11],b=t[12],N=t[13],M=t[14],S=t[15],w=i*d-s*f,D=i*m-l*f,L=i*p-c*f,V=s*m-l*d,U=s*p-c*d,B=l*p-c*m,T=v*N-_*b,I=v*M-g*b,q=v*S-y*b,z=_*M-g*N,Y=_*S-y*N,rt=g*S-y*M,ft=w*rt-D*Y+L*z+V*q-U*I+B*T;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/ft;return t[0]=(d*rt-m*Y+p*z)*k,t[1]=(l*Y-s*rt-c*z)*k,t[2]=(N*B-M*U+S*V)*k,t[3]=(g*U-_*B-y*V)*k,t[4]=(m*q-f*rt-p*I)*k,t[5]=(i*rt-l*q+c*I)*k,t[6]=(M*L-b*B-S*D)*k,t[7]=(v*B-g*L+y*D)*k,t[8]=(f*Y-d*q+p*T)*k,t[9]=(s*q-i*Y-c*T)*k,t[10]=(b*U-N*L+S*w)*k,t[11]=(_*L-v*U-y*w)*k,t[12]=(d*I-f*z-m*T)*k,t[13]=(i*z-s*I+l*T)*k,t[14]=(N*D-b*V-M*w)*k,t[15]=(v*V-_*D+g*w)*k,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,m=t.z,p=c*f,v=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*f,0,p*m-l*d,v*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,v=f+f,_=d+d,g=c*p,y=c*v,b=c*_,N=f*v,M=f*_,S=d*_,w=m*p,D=m*v,L=m*_,V=s.x,U=s.y,B=s.z;return l[0]=(1-(N+S))*V,l[1]=(y+L)*V,l[2]=(b-D)*V,l[3]=0,l[4]=(y-L)*U,l[5]=(1-(g+S))*U,l[6]=(M+w)*U,l[7]=0,l[8]=(b+D)*B,l[9]=(M-w)*B,l[10]=(1-(g+N))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Tr.set(l[0],l[1],l[2]).length();const d=Tr.set(l[4],l[5],l[6]).length(),m=Tr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ri.copy(this);const p=1/f,v=1/d,_=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=f,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,f,d=ki,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,N;if(m)b=c/(f-c),N=f*c/(f-c);else if(d===ki)b=-(f+c)/(f-c),N=-2*f*c/(f-c);else if(d===il)b=-f/(f-c),N=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=N,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ki,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,N;if(m)b=1/(f-c),N=f/(f-c);else if(d===ki)b=-2/(f-c),N=-(f+c)/(f-c);else if(d===il)b=-1/(f-c),N=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=N,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};au.prototype.isMatrix4=!0;let cn=au;const Tr=new Q,Ri=new cn,_1=new Q(0,0,0),x1=new Q(1,1,1),is=new Q,yc=new Q,ri=new Q,Cv=new cn,wv=new qr;class hs{constructor(t=0,i=0,s=0,l=hs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Re(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Re(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Cv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wv.setFromEuler(this),this.setFromQuaternion(wv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hs.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let S1=0;const Dv=new Q,Ar=new qr,ga=new cn,Mc=new Q,Xo=new Q,y1=new Q,M1=new qr,Nv=new Q(1,0,0),Uv=new Q(0,1,0),Lv=new Q(0,0,1),Ov={type:"added"},E1={type:"removed"},Rr={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Fn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new Q,i=new hs,s=new qr,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ge}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,i){return Ar.setFromAxisAngle(t,i),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(Nv,t)}rotateY(t){return this.rotateOnAxis(Uv,t)}rotateZ(t){return this.rotateOnAxis(Lv,t)}translateOnAxis(t,i){return Dv.copy(t).applyQuaternion(this.quaternion),this.position.add(Dv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Nv,t)}translateY(t){return this.translateOnAxis(Uv,t)}translateZ(t){return this.translateOnAxis(Lv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Xo,Mc,this.up):ga.lookAt(Mc,Xo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Ar.setFromRotationMatrix(ga),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ov),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(E1),Ch.child=t,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ov),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,y1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,M1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),_=f(t.shapes),g=f(t.skeletons),y=f(t.animations),b=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new Q(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ec extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b1={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ec,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ec,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ec,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const N of t.hand.values()){const M=i.getJointPose(N,s),S=this._getHandJoint(p,N);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&g>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ec;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Dh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Le{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ne.workingColorSpace){if(t=f1(t,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Dh(f,c,t+1/3),this.g=Dh(f,c,t),this.b=Dh(f,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=H_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Ne.workingToColorSpace(zn.copy(this),t),Math.round(Re(zn.r*255,0,255))*65536+Math.round(Re(zn.g*255,0,255))*256+Math.round(Re(zn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=v<=.5?_/(f+d):_/(2-f-d),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Ne.workingColorSpace){return Ne.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Si){Ne.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(as),this.setHSL(as.h+t,as.s+i,as.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(as),t.getHSL(bc);const s=Eh(as.h,bc.h,i),l=Eh(as.s,bc.s,i),c=Eh(as.l,bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Le;Le.NAMES=H_;class pp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(t),this.density=i}clone(){return new pp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class T1 extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hs,this.environmentIntensity=1,this.environmentRotation=new hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new Q,va=new Q,Nh=new Q,_a=new Q,Cr=new Q,wr=new Q,Pv=new Q,Uh=new Q,Lh=new Q,Oh=new Q,Ph=new ln,zh=new ln,Ih=new ln;class Di{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),va.subVectors(s,i),Nh.subVectors(t,i);const f=Ci.dot(Ci),d=Ci.dot(va),m=Ci.dot(Nh),p=va.dot(va),v=va.dot(Nh),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const g=1/_,y=(p*m-d*v)*g,b=(f*v-d*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,f,d,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Ph.setScalar(0),zh.setScalar(0),Ih.setScalar(0),Ph.fromBufferAttribute(t,i),zh.fromBufferAttribute(t,s),Ih.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Ph,c.x),f.addScaledVector(zh,c.y),f.addScaledVector(Ih,c.z),f}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),va.subVectors(t,i),Ci.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ci.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Di.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;Cr.subVectors(l,s),wr.subVectors(c,s),Uh.subVectors(t,s);const m=Cr.dot(Uh),p=wr.dot(Uh);if(m<=0&&p<=0)return i.copy(s);Lh.subVectors(t,l);const v=Cr.dot(Lh),_=wr.dot(Lh);if(v>=0&&_<=v)return i.copy(l);const g=m*_-v*p;if(g<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Cr,f);Oh.subVectors(t,c);const y=Cr.dot(Oh),b=wr.dot(Oh);if(b>=0&&y<=b)return i.copy(c);const N=y*p-m*b;if(N<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(wr,d);const M=v*b-y*_;if(M<=0&&_-v>=0&&y-b>=0)return Pv.subVectors(c,l),d=(_-v)/(_-v+(y-b)),i.copy(l).addScaledVector(Pv,d);const S=1/(M+N+g);return f=N*S,d=g*S,i.copy(s).addScaledVector(Cr,f).addScaledVector(wr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ol{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Ac.subVectors(this.max,Wo),Dr.subVectors(t.a,Wo),Nr.subVectors(t.b,Wo),Ur.subVectors(t.c,Wo),ss.subVectors(Nr,Dr),rs.subVectors(Ur,Nr),Us.subVectors(Dr,Ur);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Us.z,Us.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Us.z,0,-Us.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Us.y,Us.x,0];return!Fh(i,Dr,Nr,Ur,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Fh(i,Dr,Nr,Ur,Ac))?!1:(Rc.crossVectors(ss,rs),i=[Rc.x,Rc.y,Rc.z],Fh(i,Dr,Nr,Ur,Ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],wi=new Q,Tc=new ol,Dr=new Q,Nr=new Q,Ur=new Q,ss=new Q,rs=new Q,Us=new Q,Wo=new Q,Ac=new Q,Rc=new Q,Ls=new Q;function Fh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ls.fromArray(r,c);const d=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),m=t.dot(Ls),p=i.dot(Ls),v=s.dot(Ls);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const _n=new Q,Cc=new qt;let A1=0;class qi extends Xs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=yv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yv&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class G_ extends qi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class V_ extends qi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ui extends qi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const R1=new ol,qo=new Q,Bh=new Q;class mp{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):R1.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Bh)),this.expandByPoint(qo.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let C1=0;const xi=new cn,Hh=new Fn,Lr=new Q,oi=new ol,Yo=new ol,bn=new Q;class Ki extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o1(t)?V_:G_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ge().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(oi.min,Yo.min),oi.expandByPoint(bn),bn.addVectors(oi.max,Yo.max),oi.expandByPoint(bn)):(oi.expandByPoint(Yo.min),oi.expandByPoint(Yo.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)bn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),bn.add(Lr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Q,m[T]=new Q;const p=new Q,v=new Q,_=new Q,g=new qt,y=new qt,b=new qt,N=new Q,M=new Q;function S(T,I,q){p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,I),_.fromBufferAttribute(s,q),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,I),b.fromBufferAttribute(c,q),v.sub(p),_.sub(p),y.sub(g),b.sub(g);const z=1/(y.x*b.y-b.x*y.y);isFinite(z)&&(N.copy(v).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(z),M.copy(_).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(z),d[T].add(N),d[I].add(N),d[q].add(N),m[T].add(M),m[I].add(M),m[q].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,I=w.length;T<I;++T){const q=w[T],z=q.start,Y=q.count;for(let rt=z,ft=z+Y;rt<ft;rt+=3)S(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const D=new Q,L=new Q,V=new Q,U=new Q;function B(T){V.fromBufferAttribute(l,T),U.copy(V);const I=d[T];D.copy(I),D.sub(V.multiplyScalar(V.dot(I))).normalize(),L.crossVectors(U,I);const z=L.dot(m[T])<0?-1:1;f.setXYZW(T,D.x,D.y,D.z,z)}for(let T=0,I=w.length;T<I;++T){const q=w[T],z=q.start,Y=q.count;for(let rt=z,ft=z+Y;rt<ft;rt+=3)B(t.getX(rt+0)),B(t.getX(rt+1)),B(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,f=new Q,d=new Q,m=new Q,p=new Q,v=new Q,_=new Q;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),N=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,M),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,N),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),v.subVectors(f,c),_.subVectors(l,c),v.cross(_),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,g=new p.constructor(m.length*v);let y=0,b=0;for(let N=0,M=m.length;N<M;N++){d.isInterleavedBufferAttribute?y=m[N]*d.data.stride+d.offset:y=m[N]*v;for(let S=0;S<v;S++)g[b++]=p[y++]}return new qi(g,v,_)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const g=p[v],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,g=p.length;_<g;_++){const y=p[_];v.push(y.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let g=0,y=_.length;g<y;g++)v.push(_[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let w1=0;class ll extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Fr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Sa=new Q,Gh=new Q,wc=new Q,os=new Q,Vh=new Q,Dc=new Q,kh=new Q;class D1{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Gh.copy(t).add(i).multiplyScalar(.5),wc.copy(i).sub(t).normalize(),os.copy(this.origin).sub(Gh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(wc),d=os.dot(this.direction),m=-os.dot(wc),p=os.lengthSq(),v=Math.abs(1-f*f);let _,g,y,b;if(v>0)if(_=f*m-d,g=f*d-m,b=c*v,_>=0)if(g>=-b)if(g<=b){const N=1/v;_*=N,g*=N,y=_*(_+f*g+2*d)+g*(f*_+g+2*m)+p}else g=c,_=Math.max(0,-(f*g+d)),y=-_*_+g*(g+2*m)+p;else g=-c,_=Math.max(0,-(f*g+d)),y=-_*_+g*(g+2*m)+p;else g<=-b?(_=Math.max(0,-(-f*c+d)),g=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+g*(g+2*m)+p):g<=b?(_=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(_=Math.max(0,-(f*c+d)),g=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+g*(g+2*m)+p);else g=f>0?-c:c,_=Math.max(0,-(f*g+d)),y=-_*_+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Gh).addScaledVector(wc,g),y}intersectSphere(t,i){Sa.subVectors(t.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),v>=0?(c=(t.min.y-g.y)*v,f=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,f=(t.min.y-g.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-g.z)*_,m=(t.max.z-g.z)*_):(d=(t.max.z-g.z)*_,m=(t.min.z-g.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Sa)!==null}intersectTriangle(t,i,s,l,c){Vh.subVectors(i,t),Dc.subVectors(s,t),kh.crossVectors(Vh,Dc);let f=this.direction.dot(kh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;os.subVectors(this.origin,t);const m=d*this.direction.dot(Dc.crossVectors(os,Dc));if(m<0)return null;const p=d*this.direction.dot(Vh.cross(os));if(p<0||m+p>f)return null;const v=-d*os.dot(kh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class k_ extends ll{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zv=new cn,Os=new D1,Nc=new mp,Iv=new Q,Uc=new Q,Lc=new Q,Oc=new Q,Xh=new Q,Pc=new Q,Fv=new Q,zc=new Q;class ji extends Fn{constructor(t=new Ki,i=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(Xh.fromBufferAttribute(_,t),f?Pc.addScaledVector(Xh,v):Pc.addScaledVector(Xh.sub(i),v))}i.add(Pc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(Nc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Nc,Iv)===null||Os.origin.distanceToSquared(Iv)>(t.far-t.near)**2))&&(zv.copy(c).invert(),Os.copy(t.ray).applyMatrix4(zv),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Os)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,N=g.length;b<N;b++){const M=g[b],S=f[M.materialIndex],w=Math.max(M.start,y.start),D=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,V=D;L<V;L+=3){const U=d.getX(L),B=d.getX(L+1),T=d.getX(L+2);l=Ic(this,S,t,s,p,v,_,U,B,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),N=Math.min(d.count,y.start+y.count);for(let M=b,S=N;M<S;M+=3){const w=d.getX(M),D=d.getX(M+1),L=d.getX(M+2);l=Ic(this,f,t,s,p,v,_,w,D,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,N=g.length;b<N;b++){const M=g[b],S=f[M.materialIndex],w=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,V=D;L<V;L+=3){const U=L,B=L+1,T=L+2;l=Ic(this,S,t,s,p,v,_,U,B,T),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),N=Math.min(m.count,y.start+y.count);for(let M=b,S=N;M<S;M+=3){const w=M,D=M+1,L=M+2;l=Ic(this,f,t,s,p,v,_,w,D,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function N1(r,t,i,s,l,c,f,d){let m;if(t.side===Zn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,t.side===fs,d),m===null)return null;zc.copy(d),zc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:r}}function Ic(r,t,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(p,Oc);const v=N1(r,t,i,s,Uc,Lc,Oc,Fv);if(v){const _=new Q;Di.getBarycoord(Fv,Uc,Lc,Oc,_),l&&(v.uv=Di.getInterpolatedAttribute(l,d,m,p,_,new qt)),c&&(v.uv1=Di.getInterpolatedAttribute(c,d,m,p,_,new qt)),f&&(v.normal=Di.getInterpolatedAttribute(f,d,m,p,_,new Q),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new Q,materialIndex:0};Di.getNormal(Uc,Lc,Oc,g.normal),v.face=g,v.barycoord=_}return v}class U1 extends Gn{constructor(t=null,i=1,s=1,l,c,f,d,m,p=Nn,v=Nn,_,g){super(null,f,d,m,p,v,l,c,_,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new Q,L1=new Q,O1=new ge;class zs{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Wh.subVectors(s,i).cross(L1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Wh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const f=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(t.start).addScaledVector(l,f)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||O1.getNormalMatrix(t),l=this.coplanarPoint(Wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new mp,P1=new qt(.5,.5),Fc=new Q;class gp{constructor(t=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],g=c[6],y=c[7],b=c[8],N=c[9],M=c[10],S=c[11],w=c[12],D=c[13],L=c[14],V=c[15];if(l[0].setComponents(p-f,y-v,S-b,V-w).normalize(),l[1].setComponents(p+f,y+v,S+b,V+w).normalize(),l[2].setComponents(p+d,y+_,S+N,V+D).normalize(),l[3].setComponents(p-d,y-_,S-N,V-D).normalize(),s)l[4].setComponents(m,g,M,L).normalize(),l[5].setComponents(p-m,y-g,S-M,V-L).normalize();else if(l[4].setComponents(p-m,y-g,S-M,V-L).normalize(),i===ki)l[5].setComponents(p+m,y+g,S+M,V+L).normalize();else if(i===il)l[5].setComponents(m,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const i=P1.distanceTo(t.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X_ extends Gn{constructor(t=[],i=Gs,s,l,c,f,d,m,p,v){super(t,i,s,l,c,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vr extends Gn{constructor(t,i,s=Yi,l,c,f,d=Nn,m=Nn,p,v=Aa,_=1){if(v!==Aa&&v!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:_};super(g,l,c,f,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class z1 extends Vr{constructor(t,i=Yi,s=Gs,l,c,f=Nn,d=Nn,m,p=Aa){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class W_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cl extends Ki{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],_=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Ui(p,3)),this.setAttribute("normal",new Ui(v,3)),this.setAttribute("uv",new Ui(_,2));function b(N,M,S,w,D,L,V,U,B,T,I){const q=L/B,z=V/T,Y=L/2,rt=V/2,ft=U/2,k=B+1,O=T+1;let F=0,et=0;const ut=new Q;for(let xt=0;xt<O;xt++){const P=xt*z-rt;for(let K=0;K<k;K++){const gt=K*q-Y;ut[N]=gt*w,ut[M]=P*D,ut[S]=ft,p.push(ut.x,ut.y,ut.z),ut[N]=0,ut[M]=0,ut[S]=U>0?1:-1,v.push(ut.x,ut.y,ut.z),_.push(K/B),_.push(1-xt/T),F+=1}}for(let xt=0;xt<T;xt++)for(let P=0;P<B;P++){const K=g+P+k*xt,gt=g+P+k*(xt+1),Ct=g+(P+1)+k*(xt+1),Nt=g+(P+1)+k*xt;m.push(K,gt,Nt),m.push(gt,Ct,Nt),et+=6}d.addGroup(y,et,I),y+=et,g+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const v=s[l],g=s[l+1]-v,y=(f-v)/g;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new qt:new Q);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new Q,l=[],c=[],f=[],d=new Q,m=new cn;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new Q)}c[0]=new Q,f[0]=new Q;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),g<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(Re(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,b))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(Re(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vp extends Ji{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new qt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=m-this.aX,y=p-this.aY;m=g*v-y*_+this.aX,p=g*_+y*v+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class I1 extends vp{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function _p(){let r=0,t=0,i=0,s=0;function l(c,f,d,m){r=c,t=d,i=-3*c+3*f-2*d-m,s=2*c-2*f+d+m}return{initCatmullRom:function(c,f,d,m,p){l(f,d,p*(d-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,d,m,p,v,_){let g=(f-c)/p-(d-c)/(p+v)+(d-f)/v,y=(d-f)/v-(m-f)/(v+_)+(m-d)/_;g*=v,y*=v,l(f,d,g,y)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Bv=new Q,Hv=new Q,qh=new _p,Yh=new _p,jh=new _p;class F1 extends Ji{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new Q){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%c]:(Hv.subVectors(l[0],l[1]).add(l[0]),p=Hv);const _=l[d%c],g=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Bv.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Bv),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),y),N=Math.pow(_.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(v),y);N<1e-4&&(N=1),b<1e-4&&(b=N),M<1e-4&&(M=N),qh.initNonuniformCatmullRom(p.x,_.x,g.x,v.x,b,N,M),Yh.initNonuniformCatmullRom(p.y,_.y,g.y,v.y,b,N,M),jh.initNonuniformCatmullRom(p.z,_.z,g.z,v.z,b,N,M)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(p.x,_.x,g.x,v.x,this.tension),Yh.initCatmullRom(p.y,_.y,g.y,v.y,this.tension),jh.initCatmullRom(p.z,_.z,g.z,v.z,this.tension));return s.set(qh.calc(m),Yh.calc(m),jh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gv(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*d+c*r+i}function B1(r,t){const i=1-r;return i*i*t}function H1(r,t){return 2*(1-r)*r*t}function G1(r,t){return r*r*t}function $o(r,t,i,s){return B1(r,t)+H1(r,i)+G1(r,s)}function V1(r,t){const i=1-r;return i*i*i*t}function k1(r,t){const i=1-r;return 3*i*i*r*t}function X1(r,t){return 3*(1-r)*r*r*t}function W1(r,t){return r*r*r*t}function tl(r,t,i,s,l){return V1(r,t)+k1(r,i)+X1(r,s)+W1(r,l)}class q_ extends Ji{constructor(t=new qt,i=new qt,s=new qt,l=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new qt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(tl(t,l.x,c.x,f.x,d.x),tl(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class q1 extends Ji{constructor(t=new Q,i=new Q,s=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Q){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(tl(t,l.x,c.x,f.x,d.x),tl(t,l.y,c.y,f.y,d.y),tl(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Y_ extends Ji{constructor(t=new qt,i=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new qt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Y1 extends Ji{constructor(t=new Q,i=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Q){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j_ extends Ji{constructor(t=new qt,i=new qt,s=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new qt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set($o(t,l.x,c.x,f.x),$o(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j1 extends Ji{constructor(t=new Q,i=new Q,s=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Q){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set($o(t,l.x,c.x,f.x),$o(t,l.y,c.y,f.y),$o(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z_ extends Ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new qt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,m=l[f===0?f:f-1],p=l[f],v=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(Gv(d,m.x,p.x,v.x,_.x),Gv(d,m.y,p.y,v.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new qt().fromArray(l))}return this}}var Kd=Object.freeze({__proto__:null,ArcCurve:I1,CatmullRomCurve3:F1,CubicBezierCurve:q_,CubicBezierCurve3:q1,EllipseCurve:vp,LineCurve:Y_,LineCurve3:Y1,QuadraticBezierCurve:j_,QuadraticBezierCurve3:j1,SplineCurve:Z_});class Z1 extends Ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const v=m[p];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new Kd[l.type]().fromJSON(l))}return this}}class Jd extends Z1{constructor(t){super(),this.type="Path",this.currentPoint=new qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new Y_(this.currentPoint.clone(),new qt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new j_(this.currentPoint.clone(),new qt(t,i),new qt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new q_(this.currentPoint.clone(),new qt(t,i),new qt(s,l),new qt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new Z_(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+p,i+v,s,l,c,f,d,m),this}absellipse(t,i,s,l,c,f,d,m){const p=new vp(t,i,s,l,c,f,d,m);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class K_ extends Jd{constructor(t){super(t),this.uuid=Wr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new Jd().fromJSON(l))}return this}}function K1(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=J_(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,m,p;if(s&&(c=eM(r,t,c,i)),r.length>80*i){d=r[0],m=r[1];let v=d,_=m;for(let g=i;g<l;g+=i){const y=r[g],b=r[g+1];y<d&&(d=y),b<m&&(m=b),y>v&&(v=y),b>_&&(_=b)}p=Math.max(v-d,_-m),p=p!==0?32767/p:0}return al(c,f,i,d,m,p,0),f}function J_(r,t,i,s,l){let c;if(l===hM(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=Vv(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=Vv(f/s|0,r[f],r[f+1],c);return c&&kr(c,c.next)&&(rl(c),c=c.next),c}function ks(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(kr(i,i.next)||sn(i.prev,i,i.next)===0)){if(rl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function al(r,t,i,s,l,c,f){if(!r)return;!f&&c&&rM(r,s,l,c);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?Q1(r,s,l,c):J1(r)){t.push(m.i,r.i,p.i),rl(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=$1(ks(r),t),al(r,t,i,s,l,c,2)):f===2&&tM(r,t,i,s,l,c):al(ks(r),t,i,s,l,c,1);break}}}function J1(r){const t=r.prev,i=r,s=r.next;if(sn(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,m=i.y,p=s.y,v=Math.min(l,c,f),_=Math.min(d,m,p),g=Math.max(l,c,f),y=Math.max(d,m,p);let b=s.next;for(;b!==t;){if(b.x>=v&&b.x<=g&&b.y>=_&&b.y<=y&&Jo(l,d,c,m,f,p,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Q1(r,t,i,s){const l=r.prev,c=r,f=r.next;if(sn(l,c,f)>=0)return!1;const d=l.x,m=c.x,p=f.x,v=l.y,_=c.y,g=f.y,y=Math.min(d,m,p),b=Math.min(v,_,g),N=Math.max(d,m,p),M=Math.max(v,_,g),S=Qd(y,b,t,i,s),w=Qd(N,M,t,i,s);let D=r.prevZ,L=r.nextZ;for(;D&&D.z>=S&&L&&L.z<=w;){if(D.x>=y&&D.x<=N&&D.y>=b&&D.y<=M&&D!==l&&D!==f&&Jo(d,v,m,_,p,g,D.x,D.y)&&sn(D.prev,D,D.next)>=0||(D=D.prevZ,L.x>=y&&L.x<=N&&L.y>=b&&L.y<=M&&L!==l&&L!==f&&Jo(d,v,m,_,p,g,L.x,L.y)&&sn(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;D&&D.z>=S;){if(D.x>=y&&D.x<=N&&D.y>=b&&D.y<=M&&D!==l&&D!==f&&Jo(d,v,m,_,p,g,D.x,D.y)&&sn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;L&&L.z<=w;){if(L.x>=y&&L.x<=N&&L.y>=b&&L.y<=M&&L!==l&&L!==f&&Jo(d,v,m,_,p,g,L.x,L.y)&&sn(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function $1(r,t){let i=r;do{const s=i.prev,l=i.next.next;!kr(s,l)&&$_(s,i,i.next,l)&&sl(s,l)&&sl(l,s)&&(t.push(s.i,i.i,l.i),rl(i),rl(i.next),i=r=l),i=i.next}while(i!==r);return ks(i)}function tM(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&cM(f,d)){let m=tx(f,d);f=ks(f,f.next),m=ks(m,m.next),al(f,t,i,s,l,c,0),al(m,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function eM(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=J_(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(lM(p))}l.sort(nM);for(let c=0;c<l.length;c++)i=iM(l[c],i);return i}function nM(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function iM(r,t){const i=aM(r,t);if(!i)return t;const s=tx(i,r);return ks(s,s.next),ks(i,i.next)}function aM(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(kr(r,i))return i;do{if(kr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const _=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(_<=s&&_>c&&(c=_,f=i.x<i.next.x?i:i.next,_===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&Q_(l<p?s:c,l,m,p,l<p?c:s,l,i.x,i.y)){const _=Math.abs(l-i.y)/(s-i.x);sl(i,r)&&(_<v||_===v&&(i.x>f.x||i.x===f.x&&sM(f,i)))&&(f=i,v=_)}i=i.next}while(i!==d);return f}function sM(r,t){return sn(r.prev,r,t.prev)<0&&sn(t.next,r,r.next)<0}function rM(r,t,i,s){let l=r;do l.z===0&&(l.z=Qd(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,oM(l)}function oM(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function Qd(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function lM(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function Q_(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function Jo(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&Q_(r,t,i,s,l,c,f,d)}function cM(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!uM(r,t)&&(sl(r,t)&&sl(t,r)&&fM(r,t)&&(sn(r.prev,r,t.prev)||sn(r,t.prev,t))||kr(r,t)&&sn(r.prev,r,r.next)>0&&sn(t.prev,t,t.next)>0)}function sn(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function kr(r,t){return r.x===t.x&&r.y===t.y}function $_(r,t,i,s){const l=Hc(sn(r,t,i)),c=Hc(sn(r,t,s)),f=Hc(sn(i,s,r)),d=Hc(sn(i,s,t));return!!(l!==c&&f!==d||l===0&&Bc(r,i,t)||c===0&&Bc(r,s,t)||f===0&&Bc(i,r,s)||d===0&&Bc(i,t,s))}function Bc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Hc(r){return r>0?1:r<0?-1:0}function uM(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&$_(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function sl(r,t){return sn(r.prev,r,r.next)<0?sn(r,t,r.next)>=0&&sn(r,r.prev,t)>=0:sn(r,t,r.prev)<0||sn(r,r.next,t)<0}function fM(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function tx(r,t){const i=$d(r.i,r.x,r.y),s=$d(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function Vv(r,t,i,s){const l=$d(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function rl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $d(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hM(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class dM{static triangulate(t,i,s=2){return K1(t,i,s)}}class Ir{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return Ir.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];kv(t),Xv(s,t);let f=t.length;i.forEach(kv);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,Xv(s,i[m]);const d=dM.triangulate(s,l);for(let m=0;m<d.length;m+=3)c.push(d.slice(m,m+3));return c}}function kv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Xv(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class xp extends Ki{constructor(t=new K_([new qt(.5,.5),new qt(-.5,.5),new qt(-.5,-.5),new qt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let d=0,m=t.length;d<m;d++){const p=t[d];f(p)}this.setAttribute("position",new Ui(l,3)),this.setAttribute("uv",new Ui(c,2)),this.computeVertexNormals();function f(d){const m=[],p=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,_=i.depth!==void 0?i.depth:1;let g=i.bevelEnabled!==void 0?i.bevelEnabled:!0,y=i.bevelThickness!==void 0?i.bevelThickness:.2,b=i.bevelSize!==void 0?i.bevelSize:y-.1,N=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const S=i.extrudePath,w=i.UVGenerator!==void 0?i.UVGenerator:pM;let D,L=!1,V,U,B,T;if(S){D=S.getSpacedPoints(v),L=!0,g=!1;const yt=S.isCatmullRomCurve3?S.closed:!1;V=S.computeFrenetFrames(v,yt),U=new Q,B=new Q,T=new Q}g||(M=0,y=0,b=0,N=0);const I=d.extractPoints(p);let q=I.shape;const z=I.holes;if(!Ir.isClockWise(q)){q=q.reverse();for(let yt=0,wt=z.length;yt<wt;yt++){const bt=z[yt];Ir.isClockWise(bt)&&(z[yt]=bt.reverse())}}function rt(yt){const bt=10000000000000001e-36;let kt=yt[0];for(let Ft=1;Ft<=yt.length;Ft++){const oe=Ft%yt.length,H=yt[oe],ue=H.x-kt.x,$t=H.y-kt.y,fe=ue*ue+$t*$t,At=Math.max(Math.abs(H.x),Math.abs(H.y),Math.abs(kt.x),Math.abs(kt.y)),Oe=bt*At*At;if(fe<=Oe){yt.splice(oe,1),Ft--;continue}kt=H}}rt(q),z.forEach(rt);const ft=z.length,k=q;for(let yt=0;yt<ft;yt++){const wt=z[yt];q=q.concat(wt)}function O(yt,wt,bt){return wt||Ue("ExtrudeGeometry: vec does not exist"),yt.clone().addScaledVector(wt,bt)}const F=q.length;function et(yt,wt,bt){let kt,Ft,oe;const H=yt.x-wt.x,ue=yt.y-wt.y,$t=bt.x-yt.x,fe=bt.y-yt.y,At=H*H+ue*ue,Oe=H*fe-ue*$t;if(Math.abs(Oe)>Number.EPSILON){const C=Math.sqrt(At),E=Math.sqrt($t*$t+fe*fe),$=wt.x-ue/C,vt=wt.y+H/C,Tt=bt.x-fe/E,Ut=bt.y+$t/E,Pt=((Tt-$)*fe-(Ut-vt)*$t)/(H*fe-ue*$t);kt=$+H*Pt-yt.x,Ft=vt+ue*Pt-yt.y;const ht=kt*kt+Ft*Ft;if(ht<=2)return new qt(kt,Ft);oe=Math.sqrt(ht/2)}else{let C=!1;H>Number.EPSILON?$t>Number.EPSILON&&(C=!0):H<-Number.EPSILON?$t<-Number.EPSILON&&(C=!0):Math.sign(ue)===Math.sign(fe)&&(C=!0),C?(kt=-ue,Ft=H,oe=Math.sqrt(At)):(kt=H,Ft=ue,oe=Math.sqrt(At/2))}return new qt(kt/oe,Ft/oe)}const ut=[];for(let yt=0,wt=k.length,bt=wt-1,kt=yt+1;yt<wt;yt++,bt++,kt++)bt===wt&&(bt=0),kt===wt&&(kt=0),ut[yt]=et(k[yt],k[bt],k[kt]);const xt=[];let P,K=ut.concat();for(let yt=0,wt=ft;yt<wt;yt++){const bt=z[yt];P=[];for(let kt=0,Ft=bt.length,oe=Ft-1,H=kt+1;kt<Ft;kt++,oe++,H++)oe===Ft&&(oe=0),H===Ft&&(H=0),P[kt]=et(bt[kt],bt[oe],bt[H]);xt.push(P),K=K.concat(P)}let gt;if(M===0)gt=Ir.triangulateShape(k,z);else{const yt=[],wt=[];for(let bt=0;bt<M;bt++){const kt=bt/M,Ft=y*Math.cos(kt*Math.PI/2),oe=b*Math.sin(kt*Math.PI/2)+N;for(let H=0,ue=k.length;H<ue;H++){const $t=O(k[H],ut[H],oe);Lt($t.x,$t.y,-Ft),kt===0&&yt.push($t)}for(let H=0,ue=ft;H<ue;H++){const $t=z[H];P=xt[H];const fe=[];for(let At=0,Oe=$t.length;At<Oe;At++){const C=O($t[At],P[At],oe);Lt(C.x,C.y,-Ft),kt===0&&fe.push(C)}kt===0&&wt.push(fe)}}gt=Ir.triangulateShape(yt,wt)}const Ct=gt.length,Nt=b+N;for(let yt=0;yt<F;yt++){const wt=g?O(q[yt],K[yt],Nt):q[yt];L?(B.copy(V.normals[0]).multiplyScalar(wt.x),U.copy(V.binormals[0]).multiplyScalar(wt.y),T.copy(D[0]).add(B).add(U),Lt(T.x,T.y,T.z)):Lt(wt.x,wt.y,0)}for(let yt=1;yt<=v;yt++)for(let wt=0;wt<F;wt++){const bt=g?O(q[wt],K[wt],Nt):q[wt];L?(B.copy(V.normals[yt]).multiplyScalar(bt.x),U.copy(V.binormals[yt]).multiplyScalar(bt.y),T.copy(D[yt]).add(B).add(U),Lt(T.x,T.y,T.z)):Lt(bt.x,bt.y,_/v*yt)}for(let yt=M-1;yt>=0;yt--){const wt=yt/M,bt=y*Math.cos(wt*Math.PI/2),kt=b*Math.sin(wt*Math.PI/2)+N;for(let Ft=0,oe=k.length;Ft<oe;Ft++){const H=O(k[Ft],ut[Ft],kt);Lt(H.x,H.y,_+bt)}for(let Ft=0,oe=z.length;Ft<oe;Ft++){const H=z[Ft];P=xt[Ft];for(let ue=0,$t=H.length;ue<$t;ue++){const fe=O(H[ue],P[ue],kt);L?Lt(fe.x,fe.y+D[v-1].y,D[v-1].x+bt):Lt(fe.x,fe.y,_+bt)}}}st(),Mt();function st(){const yt=l.length/3;if(g){let wt=0,bt=F*wt;for(let kt=0;kt<Ct;kt++){const Ft=gt[kt];jt(Ft[2]+bt,Ft[1]+bt,Ft[0]+bt)}wt=v+M*2,bt=F*wt;for(let kt=0;kt<Ct;kt++){const Ft=gt[kt];jt(Ft[0]+bt,Ft[1]+bt,Ft[2]+bt)}}else{for(let wt=0;wt<Ct;wt++){const bt=gt[wt];jt(bt[2],bt[1],bt[0])}for(let wt=0;wt<Ct;wt++){const bt=gt[wt];jt(bt[0]+F*v,bt[1]+F*v,bt[2]+F*v)}}s.addGroup(yt,l.length/3-yt,0)}function Mt(){const yt=l.length/3;let wt=0;Et(k,wt),wt+=k.length;for(let bt=0,kt=z.length;bt<kt;bt++){const Ft=z[bt];Et(Ft,wt),wt+=Ft.length}s.addGroup(yt,l.length/3-yt,1)}function Et(yt,wt){let bt=yt.length;for(;--bt>=0;){const kt=bt;let Ft=bt-1;Ft<0&&(Ft=yt.length-1);for(let oe=0,H=v+M*2;oe<H;oe++){const ue=F*oe,$t=F*(oe+1),fe=wt+kt+ue,At=wt+Ft+ue,Oe=wt+Ft+$t,C=wt+kt+$t;ie(fe,At,Oe,C)}}}function Lt(yt,wt,bt){m.push(yt),m.push(wt),m.push(bt)}function jt(yt,wt,bt){Me(yt),Me(wt),Me(bt);const kt=l.length/3,Ft=w.generateTopUV(s,l,kt-3,kt-2,kt-1);le(Ft[0]),le(Ft[1]),le(Ft[2])}function ie(yt,wt,bt,kt){Me(yt),Me(wt),Me(kt),Me(wt),Me(bt),Me(kt);const Ft=l.length/3,oe=w.generateSideWallUV(s,l,Ft-6,Ft-3,Ft-2,Ft-1);le(oe[0]),le(oe[1]),le(oe[3]),le(oe[1]),le(oe[2]),le(oe[3])}function Me(yt){l.push(m[yt*3+0]),l.push(m[yt*3+1]),l.push(m[yt*3+2])}function le(yt){c.push(yt.x),c.push(yt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return mM(i,s,t)}static fromJSON(t,i){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const d=i[t.shapes[c]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Kd[l.type]().fromJSON(l)),new xp(s,t.options)}}const pM={generateTopUV:function(r,t,i,s,l){const c=t[i*3],f=t[i*3+1],d=t[s*3],m=t[s*3+1],p=t[l*3],v=t[l*3+1];return[new qt(c,f),new qt(d,m),new qt(p,v)]},generateSideWallUV:function(r,t,i,s,l,c){const f=t[i*3],d=t[i*3+1],m=t[i*3+2],p=t[s*3],v=t[s*3+1],_=t[s*3+2],g=t[l*3],y=t[l*3+1],b=t[l*3+2],N=t[c*3],M=t[c*3+1],S=t[c*3+2];return Math.abs(d-v)<Math.abs(f-p)?[new qt(f,1-m),new qt(p,1-_),new qt(g,1-b),new qt(N,1-S)]:[new qt(d,1-m),new qt(v,1-_),new qt(y,1-b),new qt(M,1-S)]}};function mM(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class ru extends Ki{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,g=i/m,y=[],b=[],N=[],M=[];for(let S=0;S<v;S++){const w=S*g-f;for(let D=0;D<p;D++){const L=D*_-c;b.push(L,-w,0),N.push(0,0,1),M.push(D/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<d;w++){const D=w+p*S,L=w+p*(S+1),V=w+1+p*(S+1),U=w+1+p*S;y.push(D,L,U),y.push(L,V,U)}this.setIndex(y),this.setAttribute("position",new Ui(b,3)),this.setAttribute("normal",new Ui(N,3)),this.setAttribute("uv",new Ui(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.width,t.height,t.widthSegments,t.heightSegments)}}function Xr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(Wv(l))l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Wv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Xr(r[i]);for(const l in s)t[l]=s[l]}return t}function Wv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function gM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ex(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const vM={clone:Xr,merge:Hn};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends ll{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=gM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class SM extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zh extends ll{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yd,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yM extends ll{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MM extends ll{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Sp extends Fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Kh=new cn,qv=new Q,Yv=new Q;class nx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;qv.setFromMatrixPosition(t.matrixWorld),i.position.copy(qv),Yv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Yv),i.updateMatrixWorld(),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===il||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Gc=new Q,Vc=new qr,Fi=new Q;class ix extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gc,Vc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Gc,Vc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Vc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new Q,jv=new qt,Zv=new qt;class li extends ix{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,jv,Zv),i.subVectors(Zv,jv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Mh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class EM extends nx{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class bM extends Sp{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new EM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class yp extends ix{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class TM extends nx{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jh extends Sp{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new TM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class AM extends Sp{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Or=-90,Pr=1;class RM extends Fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Or,Pr,t,i);l.layers=this.layers,this.add(l);const c=new li(Or,Pr,t,i);c.layers=this.layers,this.add(c);const f=new li(Or,Pr,t,i);f.layers=this.layers,this.add(f);const d=new li(Or,Pr,t,i);d.layers=this.layers,this.add(d);const m=new li(Or,Pr,t,i);m.layers=this.layers,this.add(m);const p=new li(Or,Pr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===il)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(_,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class CM extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class wM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Ap=class Ap{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Ap.prototype.isMatrix2=!0;let Kv=Ap;function Jv(r,t,i,s){const l=DM(s);switch(i){case O_:return r*t;case z_:return r*t/l.components*l.byteLength;case lp:return r*t/l.components*l.byteLength;case Vs:return r*t*2/l.components*l.byteLength;case cp:return r*t*2/l.components*l.byteLength;case P_:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case up:return r*t*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case Sd:return Math.max(r,16)*Math.max(t,8)/4;case vd:case xd:return Math.max(r,8)*Math.max(t,8)/2;case yd:case Md:case bd:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ed:case $c:case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xd:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case tu:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function DM(r){switch(r){case ci:case D_:return{byteLength:1,components:1};case el:case N_:case Ta:return{byteLength:2,components:1};case rp:case op:return{byteLength:2,components:4};case Yi:case sp:case Vi:return{byteLength:4,components:1};case U_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ip}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ip);function ax(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function NM(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,v);else{_.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<_.length;y++){const b=_[g],N=_[y];N.start<=b.start+b.count+1?b.count=Math.max(b.count,N.start+N.count-b.start):(++g,_[g]=N)}_.length=g+1;for(let y=0,b=_.length;y<b;y++){const N=_[y];r.bufferSubData(p,N.start*v.BYTES_PER_ELEMENT,v,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,OM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,qM=`#ifdef USE_BUMPMAP
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`#define PI 3.141592653589793
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
} // validated`,nE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iE=`vec3 transformedNormal = objectNormal;
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
#endif`,aE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lE="gl_FragColor = linearToOutputTexel( gl_FragColor );",cE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
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
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xE=`#ifdef USE_GRADIENTMAP
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
}`,SE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EE=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,bE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,TE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,DE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,PE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VE=`#if defined( USE_POINTS_UV )
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
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
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
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,db=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,vb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lb=`uniform sampler2D t2D;
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`#include <common>
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
}`,Bb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hb=`#define DISTANCE
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
}`,Gb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,qb=`#include <common>
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
}`,Yb=`uniform vec3 diffuse;
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
}`,jb=`#define LAMBERT
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
}`,Zb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Kb=`#define MATCAP
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
}`,Jb=`#define MATCAP
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
}`,Qb=`#define NORMAL
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
}`,$b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
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
}`,eT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nT=`#define STANDARD
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
}`,iT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,aT=`#define TOON
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
}`,sT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,rT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,uT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,fT=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:UM,alphahash_pars_fragment:LM,alphamap_fragment:OM,alphamap_pars_fragment:PM,alphatest_fragment:zM,alphatest_pars_fragment:IM,aomap_fragment:FM,aomap_pars_fragment:BM,batching_pars_vertex:HM,batching_vertex:GM,begin_vertex:VM,beginnormal_vertex:kM,bsdfs:XM,iridescence_fragment:WM,bumpmap_pars_fragment:qM,clipping_planes_fragment:YM,clipping_planes_pars_fragment:jM,clipping_planes_pars_vertex:ZM,clipping_planes_vertex:KM,color_fragment:JM,color_pars_fragment:QM,color_pars_vertex:$M,color_vertex:tE,common:eE,cube_uv_reflection_fragment:nE,defaultnormal_vertex:iE,displacementmap_pars_vertex:aE,displacementmap_vertex:sE,emissivemap_fragment:rE,emissivemap_pars_fragment:oE,colorspace_fragment:lE,colorspace_pars_fragment:cE,envmap_fragment:uE,envmap_common_pars_fragment:fE,envmap_pars_fragment:hE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:bE,envmap_vertex:pE,fog_vertex:mE,fog_pars_vertex:gE,fog_fragment:vE,fog_pars_fragment:_E,gradientmap_pars_fragment:xE,lightmap_pars_fragment:SE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:ME,lights_pars_begin:EE,lights_toon_fragment:TE,lights_toon_pars_fragment:AE,lights_phong_fragment:RE,lights_phong_pars_fragment:CE,lights_physical_fragment:wE,lights_physical_pars_fragment:DE,lights_fragment_begin:NE,lights_fragment_maps:UE,lights_fragment_end:LE,lightprobes_pars_fragment:OE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:zE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:FE,map_fragment:BE,map_pars_fragment:HE,map_particle_fragment:GE,map_particle_pars_fragment:VE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:XE,morphinstance_vertex:WE,morphcolor_vertex:qE,morphnormal_vertex:YE,morphtarget_pars_vertex:jE,morphtarget_vertex:ZE,normal_fragment_begin:KE,normal_fragment_maps:JE,normal_pars_fragment:QE,normal_pars_vertex:$E,normal_vertex:tb,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:ab,iridescence_pars_fragment:sb,opaque_fragment:rb,packing:ob,premultiplied_alpha_fragment:lb,project_vertex:cb,dithering_fragment:ub,dithering_pars_fragment:fb,roughnessmap_fragment:hb,roughnessmap_pars_fragment:db,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:vb,skinbase_vertex:_b,skinning_pars_vertex:xb,skinning_vertex:Sb,skinnormal_vertex:yb,specularmap_fragment:Mb,specularmap_pars_fragment:Eb,tonemapping_fragment:bb,tonemapping_pars_fragment:Tb,transmission_fragment:Ab,transmission_pars_fragment:Rb,uv_pars_fragment:Cb,uv_pars_vertex:wb,uv_vertex:Db,worldpos_vertex:Nb,background_vert:Ub,background_frag:Lb,backgroundCube_vert:Ob,backgroundCube_frag:Pb,cube_vert:zb,cube_frag:Ib,depth_vert:Fb,depth_frag:Bb,distance_vert:Hb,distance_frag:Gb,equirect_vert:Vb,equirect_frag:kb,linedashed_vert:Xb,linedashed_frag:Wb,meshbasic_vert:qb,meshbasic_frag:Yb,meshlambert_vert:jb,meshlambert_frag:Zb,meshmatcap_vert:Kb,meshmatcap_frag:Jb,meshnormal_vert:Qb,meshnormal_frag:$b,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:sT,points_vert:rT,points_frag:oT,shadow_vert:lT,shadow_frag:cT,sprite_vert:uT,sprite_frag:fT},Wt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Hn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Hn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Hn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Le(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Hn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Hn([Wt.points,Wt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Hn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Hn([Wt.common,Wt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Hn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Hn([Wt.sprite,Wt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Hn([Wt.common,Wt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Hn([Wt.lights,Wt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const kc={r:0,b:0,g:0},hT=new cn,sx=new ge;sx.set(-1,0,0,0,1,0,0,0,1);function dT(r,t,i,s,l,c){const f=new Le(0);let d=l===!0?0:1,m,p,v=null,_=0,g=null;function y(w){let D=w.isScene===!0?w.background:null;if(D&&D.isTexture){const L=w.backgroundBlurriness>0;D=t.get(D,L)}return D}function b(w){let D=!1;const L=y(w);L===null?M(f,d):L&&L.isColor&&(M(L,1),D=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function N(w,D){const L=y(D);L&&(L.isCubeTexture||L.mapping===su)?(p===void 0&&(p=new ji(new cl(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Xr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(sx),p.material.toneMapped=Ne.getTransfer(L.colorSpace)!==qe,(v!==L||_!==L.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=L,_=L.version,g=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new ji(new ru(2,2),new Zi({name:"BackgroundMaterial",uniforms:Xr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(L.colorSpace)!==qe,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||_!==L.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=L,_=L.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,D){w.getRGB(kc,ex(r)),i.buffers.color.setClear(kc.r,kc.g,kc.b,D,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,D=1){f.set(w),d=D,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,M(f,d)},render:b,addToRenderList:N,dispose:S}}function pT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function d(z,Y,rt,ft,k){let O=!1;const F=_(z,ft,rt,Y);c!==F&&(c=F,p(c.object)),O=y(z,ft,rt,k),O&&b(z,ft,rt,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,L(z,Y,rt,ft),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function m(){return r.createVertexArray()}function p(z){return r.bindVertexArray(z)}function v(z){return r.deleteVertexArray(z)}function _(z,Y,rt,ft){const k=ft.wireframe===!0;let O=s[Y.id];O===void 0&&(O={},s[Y.id]=O);const F=z.isInstancedMesh===!0?z.id:0;let et=O[F];et===void 0&&(et={},O[F]=et);let ut=et[rt.id];ut===void 0&&(ut={},et[rt.id]=ut);let xt=ut[k];return xt===void 0&&(xt=g(m()),ut[k]=xt),xt}function g(z){const Y=[],rt=[],ft=[];for(let k=0;k<i;k++)Y[k]=0,rt[k]=0,ft[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:rt,attributeDivisors:ft,object:z,attributes:{},index:null}}function y(z,Y,rt,ft){const k=c.attributes,O=Y.attributes;let F=0;const et=rt.getAttributes();for(const ut in et)if(et[ut].location>=0){const P=k[ut];let K=O[ut];if(K===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;F++}return c.attributesNum!==F||c.index!==ft}function b(z,Y,rt,ft){const k={},O=Y.attributes;let F=0;const et=rt.getAttributes();for(const ut in et)if(et[ut].location>=0){let P=O[ut];P===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(P=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(P=z.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),k[ut]=K,F++}c.attributes=k,c.attributesNum=F,c.index=ft}function N(){const z=c.newAttributes;for(let Y=0,rt=z.length;Y<rt;Y++)z[Y]=0}function M(z){S(z,0)}function S(z,Y){const rt=c.newAttributes,ft=c.enabledAttributes,k=c.attributeDivisors;rt[z]=1,ft[z]===0&&(r.enableVertexAttribArray(z),ft[z]=1),k[z]!==Y&&(r.vertexAttribDivisor(z,Y),k[z]=Y)}function w(){const z=c.newAttributes,Y=c.enabledAttributes;for(let rt=0,ft=Y.length;rt<ft;rt++)Y[rt]!==z[rt]&&(r.disableVertexAttribArray(rt),Y[rt]=0)}function D(z,Y,rt,ft,k,O,F){F===!0?r.vertexAttribIPointer(z,Y,rt,k,O):r.vertexAttribPointer(z,Y,rt,ft,k,O)}function L(z,Y,rt,ft){N();const k=ft.attributes,O=rt.getAttributes(),F=Y.defaultAttributeValues;for(const et in O){const ut=O[et];if(ut.location>=0){let xt=k[et];if(xt===void 0&&(et==="instanceMatrix"&&z.instanceMatrix&&(xt=z.instanceMatrix),et==="instanceColor"&&z.instanceColor&&(xt=z.instanceColor)),xt!==void 0){const P=xt.normalized,K=xt.itemSize,gt=t.get(xt);if(gt===void 0)continue;const Ct=gt.buffer,Nt=gt.type,st=gt.bytesPerElement,Mt=Nt===r.INT||Nt===r.UNSIGNED_INT||xt.gpuType===sp;if(xt.isInterleavedBufferAttribute){const Et=xt.data,Lt=Et.stride,jt=xt.offset;if(Et.isInstancedInterleavedBuffer){for(let ie=0;ie<ut.locationSize;ie++)S(ut.location+ie,Et.meshPerAttribute);z.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let ie=0;ie<ut.locationSize;ie++)M(ut.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let ie=0;ie<ut.locationSize;ie++)D(ut.location+ie,K/ut.locationSize,Nt,P,Lt*st,(jt+K/ut.locationSize*ie)*st,Mt)}else{if(xt.isInstancedBufferAttribute){for(let Et=0;Et<ut.locationSize;Et++)S(ut.location+Et,xt.meshPerAttribute);z.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Et=0;Et<ut.locationSize;Et++)M(ut.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let Et=0;Et<ut.locationSize;Et++)D(ut.location+Et,K/ut.locationSize,Nt,P,K*st,K/ut.locationSize*Et*st,Mt)}}else if(F!==void 0){const P=F[et];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(ut.location,P);break;case 3:r.vertexAttrib3fv(ut.location,P);break;case 4:r.vertexAttrib4fv(ut.location,P);break;default:r.vertexAttrib1fv(ut.location,P)}}}}w()}function V(){I();for(const z in s){const Y=s[z];for(const rt in Y){const ft=Y[rt];for(const k in ft){const O=ft[k];for(const F in O)v(O[F].object),delete O[F];delete ft[k]}}delete s[z]}}function U(z){if(s[z.id]===void 0)return;const Y=s[z.id];for(const rt in Y){const ft=Y[rt];for(const k in ft){const O=ft[k];for(const F in O)v(O[F].object),delete O[F];delete ft[k]}}delete s[z.id]}function B(z){for(const Y in s){const rt=s[Y];for(const ft in rt){const k=rt[ft];if(k[z.id]===void 0)continue;const O=k[z.id];for(const F in O)v(O[F].object),delete O[F];delete k[z.id]}}}function T(z){for(const Y in s){const rt=s[Y],ft=z.isInstancedMesh===!0?z.id:0,k=rt[ft];if(k!==void 0){for(const O in k){const F=k[O];for(const et in F)v(F[et].object),delete F[et];delete k[O]}delete rt[ft],Object.keys(rt).length===0&&delete s[Y]}}}function I(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:q,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:N,enableAttribute:M,disableUnusedAttributes:w}}function mT(r,t,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,v){v!==0&&(r.drawArraysInstanced(s,m,p,v),i.update(p,s,v))}function d(m,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,v);let g=0;for(let y=0;y<v;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function gT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ni&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const T=B===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ci&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Vi&&!T)}function m(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ce("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:N,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:L,maxSamples:V,samples:U}}function vT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new zs,d=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const y=_.length!==0||g||s!==0||l;return l=g,s=_.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=v(_,g,0)},this.setState=function(_,g,y){const b=_.clippingPlanes,N=_.clipIntersection,M=_.clipShadows,S=r.get(_);if(!l||b===null||b.length===0||c&&!M)c?v(null):p();else{const w=c?0:s,D=w*4;let L=S.clippingState||null;m.value=L,L=v(b,g,D,y);for(let V=0;V!==D;++V)L[V]=i[V];S.clippingState=L,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,g,y,b){const N=_!==null?_.length:0;let M=null;if(N!==0){if(M=m.value,b!==!0||M===null){const S=y+N*4,w=g.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let D=0,L=y;D!==N;++D,L+=4)f.copy(_[D]).applyMatrix4(w,d),f.normal.toArray(M,L),M[L+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,M}}const us=4,Qv=[.125,.215,.35,.446,.526,.582],Fs=20,_T=256,jo=new yp,$v=new Le;let Qh=null,$h=0,td=0,ed=!1;const xT=new Q;class t_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=xT}=c;Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===Gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:eu,depthBuffer:!1},l=e_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ST(c)),this._blurMaterial=MT(c,t,i),this._ggxMaterial=yT(c,t,i)}return l}_compileMaterial(t){const i=new ji(new Ki,t);this._renderer.compile(i,jo)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,y=_.toneMapping;_.getClearColor($v),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new cl,new k_({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy($v),S=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[D],c.y,c.z)):L===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[D]));const V=this._cubeSize;zr(l,L*V,D>2?V:0,V,V),_.setRenderTarget(l),S&&_.render(N,m),_.render(t,m)}_.toneMapping=y,_.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Gs||t.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,jo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,y=_*g,{_lodMax:b}=this,N=this._sizeLods[s],M=3*N*(s>b-us?s-b+us:0),S=4*(this._cubeSize-N);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,zr(c,M,S,3*N,2*N),l.setRenderTarget(c),l.render(d,jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,zr(t,M,S,3*N,2*N),l.setRenderTarget(t),l.render(d,jo)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Fs-1),N=c/b,M=isFinite(c)?1+Math.floor(v*N):Fs;M>Fs&&ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Fs}`);const S=[];let w=0;for(let B=0;B<Fs;++B){const T=B/N,I=Math.exp(-T*T/2);S.push(I),B===0?w+=I:B<M&&(w+=2*I)}for(let B=0;B<S.length;B++)S[B]=S[B]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=f==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:D}=this;g.dTheta.value=b,g.mipInt.value=D-s;const L=this._sizeLods[l],V=3*L*(l>D-us?l-D+us:0),U=4*(this._cubeSize-L);zr(i,V,U,3*L,2*L),m.setRenderTarget(i),m.render(_,jo)}}function ST(r){const t=[],i=[],s=[];let l=r;const c=r-us+1+Qv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-us?m=Qv[f-r+us-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,b=6,N=3,M=2,S=1,w=new Float32Array(N*b*y),D=new Float32Array(M*b*y),L=new Float32Array(S*b*y);for(let U=0;U<y;U++){const B=U%3*2/3-1,T=U>2?0:-1,I=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];w.set(I,N*b*U),D.set(g,M*b*U);const q=[U,U,U,U,U,U];L.set(q,S*b*U)}const V=new Ki;V.setAttribute("position",new qi(w,N)),V.setAttribute("uv",new qi(D,M)),V.setAttribute("faceIndex",new qi(L,S)),s.push(new ji(V,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function e_(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function yT(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_T,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function MT(r,t,i){const s=new Float32Array(Fs),l=new Q(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function n_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function i_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}class rx extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new X_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:Xr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new ji(l,c),d=i.minFilter;return i.minFilter===Bs&&(i.minFilter=In),new RM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function ET(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===xh||y===Sh)if(t.has(g)){const b=t.get(g).texture;return d(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const N=new rx(b.height);return N.fromEquirectangularTexture(r,g),t.set(g,N),g.addEventListener("dispose",p),d(N.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,b=y===xh||y===Sh,N=y===Gs||y===Gr;if(b||N){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new t_(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const w=g.image;return b&&w&&w.height>0||N&&w&&m(w)?(s===null&&(s=new t_(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function d(g,y){return y===xh?g.mapping=Gs:y===Sh&&(g.mapping=Gr),g}function m(g){let y=0;const b=6;for(let N=0;N<b;N++)g[N]!==void 0&&y++;return y===b}function p(g){const y=g.target;y.removeEventListener("dispose",p);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function bT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&jd("WebGLRenderer: "+s+" extension not supported."),l}}}function TT(r,t,i,s){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function p(_){const g=[],y=_.index,b=_.attributes.position;let N=0;if(b===void 0)return;if(y!==null){const w=y.array;N=y.version;for(let D=0,L=w.length;D<L;D+=3){const V=w[D+0],U=w[D+1],B=w[D+2];g.push(V,U,U,B,B,V)}}else{const w=b.array;N=b.version;for(let D=0,L=w.length/3-1;D<L;D+=3){const V=D+0,U=D+1,B=D+2;g.push(V,U,U,B,B,V)}}const M=new(b.count>=65535?V_:G_)(g,1);M.version=N;const S=c.get(_);S&&t.remove(S),c.set(_,M)}function v(_){const g=c.get(_);if(g){const y=_.index;y!==null&&g.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function AT(r,t,i){let s;function l(_){s=_}let c,f;function d(_){c=_.type,f=_.bytesPerElement}function m(_,g){r.drawElements(s,g,c,_*f),i.update(g,s,1)}function p(_,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,_*f,y),i.update(g,s,y))}function v(_,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,y);let N=0;for(let M=0;M<y;M++)N+=g[M];i.update(N,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function RT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function CT(r,t,i){const s=new WeakMap,l=new ln;function c(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=s.get(d);if(g===void 0||g.count!==_){let q=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",q)};var y=q;g!==void 0&&g.texture.dispose();const b=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),N===!0&&(L=2),M===!0&&(L=3);let V=d.attributes.position.count*L,U=1;V>t.maxTextureSize&&(U=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const B=new Float32Array(V*U*4*_),T=new F_(B,V,U,_);T.type=Vi,T.needsUpdate=!0;const I=L*4;for(let z=0;z<_;z++){const Y=S[z],rt=w[z],ft=D[z],k=V*U*4*z;for(let O=0;O<Y.count;O++){const F=O*I;b===!0&&(l.fromBufferAttribute(Y,O),B[k+F+0]=l.x,B[k+F+1]=l.y,B[k+F+2]=l.z,B[k+F+3]=0),N===!0&&(l.fromBufferAttribute(rt,O),B[k+F+4]=l.x,B[k+F+5]=l.y,B[k+F+6]=l.z,B[k+F+7]=0),M===!0&&(l.fromBufferAttribute(ft,O),B[k+F+8]=l.x,B[k+F+9]=l.y,B[k+F+10]=l.z,B[k+F+11]=ft.itemSize===4?l.w:1)}}g={count:_,texture:T,size:new qt(V,U)},s.set(d,g),d.addEventListener("dispose",q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const N=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",N),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function wT(r,t,i,s,l){let c=new WeakMap;function f(p){const v=l.render.frame,_=p.geometry,g=t.get(p,_);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return g}function d(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:f,dispose:d}}const DT={[E_]:"LINEAR_TONE_MAPPING",[b_]:"REINHARD_TONE_MAPPING",[T_]:"CINEON_TONE_MAPPING",[ap]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[A_]:"CUSTOM_TONE_MAPPING"};function NT(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Vr(t,i):void 0}),f=new Wi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),d=new Ki;d.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const m=new SM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ji(d,m),v=new yp(-1,1,1,-1,0,1);let _=null,g=null,y=!1,b,N=null,M=[],S=!1;this.setSize=function(w,D){c.setSize(w,D),f.setSize(w,D);for(let L=0;L<M.length;L++){const V=M[L];V.setSize&&V.setSize(w,D)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const D=c.width,L=c.height;for(let V=0;V<M.length;V++){const U=M[V];U.setSize&&U.setSize(D,L)}},this.begin=function(w,D){if(y||w.toneMapping===Xi&&M.length===0)return!1;if(N=D,D!==null){const L=D.width,V=D.height;(c.width!==L||c.height!==V)&&this.setSize(L,V)}return S===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return S},this.end=function(w,D){w.toneMapping=b,y=!0;let L=c,V=f;for(let U=0;U<M.length;U++){const B=M[U];if(B.enabled!==!1&&(B.render(w,V,L,D),B.needsSwap!==!1)){const T=L;L=V,V=T}}if(_!==w.outputColorSpace||g!==w.toneMapping){_=w.outputColorSpace,g=w.toneMapping,m.defines={},Ne.getTransfer(_)===qe&&(m.defines.SRGB_TRANSFER="");const U=DT[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(N),w.render(p,v),N=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const ox=new Gn,tp=new Vr(1,1),lx=new F_,cx=new v1,ux=new X_,a_=[],s_=[],r_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function Yr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=a_[l];if(c===void 0&&(c=new Float32Array(l),a_[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function lu(r,t){let i=s_[t];i===void 0&&(i=new Int32Array(t),s_[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function UT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function LT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function OT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function PT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function zT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;l_.set(s),r.uniformMatrix2fv(this.addr,!1,l_),Mn(i,s)}}function IT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;o_.set(s),r.uniformMatrix3fv(this.addr,!1,o_),Mn(i,s)}}function FT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;r_.set(s),r.uniformMatrix4fv(this.addr,!1,r_),Mn(i,s)}}function BT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function GT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function VT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function kT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function XT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function YT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tp.compareFunction=i.isReversedDepthBuffer()?hp:fp,c=tp):c=ox,i.setTexture2D(t||c,l)}function jT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||cx,l)}function ZT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ux,l)}function KT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||lx,l)}function JT(r){switch(r){case 5126:return UT;case 35664:return LT;case 35665:return OT;case 35666:return PT;case 35674:return zT;case 35675:return IT;case 35676:return FT;case 5124:case 35670:return BT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return XT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return KT}}function QT(r,t){r.uniform1fv(this.addr,t)}function $T(r,t){const i=Yr(t,this.size,2);r.uniform2fv(this.addr,i)}function tA(r,t){const i=Yr(t,this.size,3);r.uniform3fv(this.addr,i)}function eA(r,t){const i=Yr(t,this.size,4);r.uniform4fv(this.addr,i)}function nA(r,t){const i=Yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function iA(r,t){const i=Yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function aA(r,t){const i=Yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function sA(r,t){r.uniform1iv(this.addr,t)}function rA(r,t){r.uniform2iv(this.addr,t)}function oA(r,t){r.uniform3iv(this.addr,t)}function lA(r,t){r.uniform4iv(this.addr,t)}function cA(r,t){r.uniform1uiv(this.addr,t)}function uA(r,t){r.uniform2uiv(this.addr,t)}function fA(r,t){r.uniform3uiv(this.addr,t)}function hA(r,t){r.uniform4uiv(this.addr,t)}function dA(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=tp:f=ox;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,c[d])}function pA(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||cx,c[f])}function mA(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||ux,c[f])}function gA(r,t,i){const s=this.cache,l=t.length,c=lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||lx,c[f])}function vA(r){switch(r){case 5126:return QT;case 35664:return $T;case 35665:return tA;case 35666:return eA;case 35674:return nA;case 35675:return iA;case 35676:return aA;case 5124:case 35670:return sA;case 35667:case 35671:return rA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return fA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return dA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}class _A{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=JT(i.type)}}class xA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vA(i.type)}}class SA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function c_(r,t){r.seq.push(t),r.map[t.id]=t}function yA(r,t,i){const s=r.name,l=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),f=nd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){c_(i,p===void 0?new _A(d,r,t):new xA(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new SA(d),c_(i,_)),i=_}}}class Qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);yA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function u_(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const MA=37297;let EA=0;function bA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const f_=new ge;function TA(r){Ne._getMatrix(f_,Ne.workingColorSpace,r);const t=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(r)){case nu:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function h_(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+bA(r.getShaderSource(t),d)}else return c}function AA(r,t){const i=TA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const RA={[E_]:"Linear",[b_]:"Reinhard",[T_]:"Cineon",[ap]:"ACESFilmic",[R_]:"AgX",[C_]:"Neutral",[A_]:"Custom"};function CA(r,t){const i=RA[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new Q;function wA(){Ne.getLuminanceCoefficients(Xc);const r=Xc.x.toFixed(4),t=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function NA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function UA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Qo(r){return r!==""}function d_(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(LA,PA)}const OA=new Map;function PA(r,t){let i=Se[t];if(i===void 0){const s=OA.get(t);if(s!==void 0)i=Se[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(i)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(r){return r.replace(zA,IA)}function IA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function g_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const FA={[Yc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function BA(r){return FA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const HA={[Gs]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function GA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":HA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const VA={[Gr]:"ENVMAP_MODE_REFRACTION"};function kA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":VA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XA={[M_]:"ENVMAP_BLENDING_MULTIPLY",[Ky]:"ENVMAP_BLENDING_MIX",[Jy]:"ENVMAP_BLENDING_ADD"};function WA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":XA[r.combine]||"ENVMAP_BLENDING_NONE"}function qA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function YA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=BA(i),p=GA(i),v=kA(i),_=WA(i),g=qA(i),y=DA(i),b=NA(c),N=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),S.length>0&&(S+=`
`)):(M=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),S=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Xi?CA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,AA("linearToOutputTexel",i.outputColorSpace),wA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=ep(f),f=d_(f,i),f=p_(f,i),d=ep(d),d=d_(d,i),d=p_(d,i),f=m_(f),d=m_(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=w+M+f,L=w+S+d,V=u_(l,l.VERTEX_SHADER,D),U=u_(l,l.FRAGMENT_SHADER,L);l.attachShader(N,V),l.attachShader(N,U),i.index0AttributeName!==void 0?l.bindAttribLocation(N,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(N,0,"position"),l.linkProgram(N);function B(z){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(N)||"",rt=l.getShaderInfoLog(V)||"",ft=l.getShaderInfoLog(U)||"",k=Y.trim(),O=rt.trim(),F=ft.trim();let et=!0,ut=!0;if(l.getProgramParameter(N,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,N,V,U);else{const xt=h_(l,V,"vertex"),P=h_(l,U,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(N,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+k+`
`+xt+`
`+P)}else k!==""?ce("WebGLProgram: Program Info Log:",k):(O===""||F==="")&&(ut=!1);ut&&(z.diagnostics={runnable:et,programLog:k,vertexShader:{log:O,prefix:M},fragmentShader:{log:F,prefix:S}})}l.deleteShader(V),l.deleteShader(U),T=new Qc(l,N),I=UA(l,N)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(N,MA)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=EA++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=V,this.fragmentShader=U,this}let jA=0;class ZA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new KA(t),i.set(t,s)),s}}class KA{constructor(t){this.id=jA++,this.code=t,this.usedTimes=0}}function JA(r){return r===Vs||r===$c||r===tu}function QA(r,t,i,s,l,c){const f=new B_,d=new ZA,m=new Set,p=[],v=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function N(T,I,q,z,Y,rt){const ft=z.fog,k=Y.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,et=t.get(T.envMap||O,F),ut=et&&et.mapping===su?et.image.height:null,xt=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ce("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,K=P!==void 0?P.length:0;let gt=0;k.morphAttributes.position!==void 0&&(gt=1),k.morphAttributes.normal!==void 0&&(gt=2),k.morphAttributes.color!==void 0&&(gt=3);let Ct,Nt,st,Mt;if(xt){const he=Gi[xt];Ct=he.vertexShader,Nt=he.fragmentShader}else Ct=T.vertexShader,Nt=T.fragmentShader,d.update(T),st=d.getVertexShaderID(T),Mt=d.getFragmentShaderID(T);const Et=r.getRenderTarget(),Lt=r.state.buffers.depth.getReversed(),jt=Y.isInstancedMesh===!0,ie=Y.isBatchedMesh===!0,Me=!!T.map,le=!!T.matcap,yt=!!et,wt=!!T.aoMap,bt=!!T.lightMap,kt=!!T.bumpMap,Ft=!!T.normalMap,oe=!!T.displacementMap,H=!!T.emissiveMap,ue=!!T.metalnessMap,$t=!!T.roughnessMap,fe=T.anisotropy>0,At=T.clearcoat>0,Oe=T.dispersion>0,C=T.iridescence>0,E=T.sheen>0,$=T.transmission>0,vt=fe&&!!T.anisotropyMap,Tt=At&&!!T.clearcoatMap,Ut=At&&!!T.clearcoatNormalMap,Pt=At&&!!T.clearcoatRoughnessMap,ht=C&&!!T.iridescenceMap,dt=C&&!!T.iridescenceThicknessMap,Bt=E&&!!T.sheenColorMap,Ht=E&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Ot=!!T.specularColorMap,de=!!T.specularIntensityMap,pe=$&&!!T.transmissionMap,Ee=$&&!!T.thicknessMap,X=!!T.gradientMap,Dt=!!T.alphaMap,mt=T.alphaTest>0,Xt=!!T.alphaHash,It=!!T.extensions;let Rt=Xi;T.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(Rt=r.toneMapping);const te={shaderID:xt,shaderType:T.type,shaderName:T.name,vertexShader:Ct,fragmentShader:Nt,defines:T.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ie,batchingColor:ie&&Y._colorsTexture!==null,instancing:jt,instancingColor:jt&&Y.instanceColor!==null,instancingMorph:jt&&Y.morphTexture!==null,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ne.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Me,matcap:le,envMap:yt,envMapMode:yt&&et.mapping,envMapCubeUVHeight:ut,aoMap:wt,lightMap:bt,bumpMap:kt,normalMap:Ft,displacementMap:oe,emissiveMap:H,normalMapObjectSpace:Ft&&T.normalMapType===t1,normalMapTangentSpace:Ft&&T.normalMapType===Yd,packedNormalMap:Ft&&T.normalMapType===Yd&&JA(T.normalMap.format),metalnessMap:ue,roughnessMap:$t,anisotropy:fe,anisotropyMap:vt,clearcoat:At,clearcoatMap:Tt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Pt,dispersion:Oe,iridescence:C,iridescenceMap:ht,iridescenceThicknessMap:dt,sheen:E,sheenColorMap:Bt,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Ot,specularIntensityMap:de,transmission:$,transmissionMap:pe,thicknessMap:Ee,gradientMap:X,opaque:T.transparent===!1&&T.blending===Fr&&T.alphaToCoverage===!1,alphaMap:Dt,alphaTest:mt,alphaHash:Xt,combine:T.combine,mapUv:Me&&b(T.map.channel),aoMapUv:wt&&b(T.aoMap.channel),lightMapUv:bt&&b(T.lightMap.channel),bumpMapUv:kt&&b(T.bumpMap.channel),normalMapUv:Ft&&b(T.normalMap.channel),displacementMapUv:oe&&b(T.displacementMap.channel),emissiveMapUv:H&&b(T.emissiveMap.channel),metalnessMapUv:ue&&b(T.metalnessMap.channel),roughnessMapUv:$t&&b(T.roughnessMap.channel),anisotropyMapUv:vt&&b(T.anisotropyMap.channel),clearcoatMapUv:Tt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(T.sheenRoughnessMap.channel),specularMapUv:zt&&b(T.specularMap.channel),specularColorMapUv:Ot&&b(T.specularColorMap.channel),specularIntensityMapUv:de&&b(T.specularIntensityMap.channel),transmissionMapUv:pe&&b(T.transmissionMap.channel),thicknessMapUv:Ee&&b(T.thicknessMap.channel),alphaMapUv:Dt&&b(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ft||fe),vertexNormals:!!k.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(Me||Dt),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||k.attributes.normal===void 0&&Ft===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Lt,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:gt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Me&&T.map.isVideoTexture===!0&&Ne.getTransfer(T.map.colorSpace)===qe,decodeVideoTextureEmissive:H&&T.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(T.emissiveMap.colorSpace)===qe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ya,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return te.vertexUv1s=m.has(1),te.vertexUv2s=m.has(2),te.vertexUv3s=m.has(3),m.clear(),te}function M(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)I.push(q),I.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(S(I,T),w(I,T),I.push(r.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function w(T,I){f.disableAll(),I.instancing&&f.enable(0),I.instancingColor&&f.enable(1),I.instancingMorph&&f.enable(2),I.matcap&&f.enable(3),I.envMap&&f.enable(4),I.normalMapObjectSpace&&f.enable(5),I.normalMapTangentSpace&&f.enable(6),I.clearcoat&&f.enable(7),I.iridescence&&f.enable(8),I.alphaTest&&f.enable(9),I.vertexColors&&f.enable(10),I.vertexAlphas&&f.enable(11),I.vertexUv1s&&f.enable(12),I.vertexUv2s&&f.enable(13),I.vertexUv3s&&f.enable(14),I.vertexTangents&&f.enable(15),I.anisotropy&&f.enable(16),I.alphaHash&&f.enable(17),I.batching&&f.enable(18),I.dispersion&&f.enable(19),I.batchingColor&&f.enable(20),I.gradientMap&&f.enable(21),I.packedNormalMap&&f.enable(22),I.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),I.fog&&f.enable(0),I.useFog&&f.enable(1),I.flatShading&&f.enable(2),I.logarithmicDepthBuffer&&f.enable(3),I.reversedDepthBuffer&&f.enable(4),I.skinning&&f.enable(5),I.morphTargets&&f.enable(6),I.morphNormals&&f.enable(7),I.morphColors&&f.enable(8),I.premultipliedAlpha&&f.enable(9),I.shadowMapEnabled&&f.enable(10),I.doubleSided&&f.enable(11),I.flipSided&&f.enable(12),I.useDepthPacking&&f.enable(13),I.dithering&&f.enable(14),I.transmission&&f.enable(15),I.sheen&&f.enable(16),I.opaque&&f.enable(17),I.pointsUvs&&f.enable(18),I.decodeVideoTexture&&f.enable(19),I.decodeVideoTextureEmissive&&f.enable(20),I.alphaToCoverage&&f.enable(21),I.numLightProbeGrids>0&&f.enable(22),T.push(f.mask)}function D(T){const I=y[T.type];let q;if(I){const z=Gi[I];q=vM.clone(z.uniforms)}else q=T.uniforms;return q}function L(T,I){let q=v.get(I);return q!==void 0?++q.usedTimes:(q=new YA(r,I,T,l),p.push(q),v.set(I,q)),q}function V(T){if(--T.usedTimes===0){const I=p.indexOf(T);p[I]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function U(T){d.remove(T)}function B(){d.dispose()}return{getParameters:N,getProgramCacheKey:M,getUniforms:D,acquireProgram:L,releaseProgram:V,releaseShaderCache:U,programs:p,dispose:B}}function $A(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function t2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function v_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function __(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,b,N,M,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:y,material:b,materialVariant:f(g),groupOrder:N,renderOrder:g.renderOrder,z:M,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=b,w.materialVariant=f(g),w.groupOrder=N,w.renderOrder=g.renderOrder,w.z=M,w.group=S),t++,w}function m(g,y,b,N,M,S){const w=d(g,y,b,N,M,S);b.transmission>0?s.push(w):b.transparent===!0?l.push(w):i.push(w)}function p(g,y,b,N,M,S){const w=d(g,y,b,N,M,S);b.transmission>0?s.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function v(g,y){i.length>1&&i.sort(g||t2),s.length>1&&s.sort(y||v_),l.length>1&&l.sort(y||v_)}function _(){for(let g=t,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:_,sort:v}}function e2(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new __,r.set(s,[f])):l>=c.length?(f=new __,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function n2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new Le};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function i2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let a2=0;function s2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function r2(r){const t=new n2,i=i2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new cn,f=new cn;function d(p){let v=0,_=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let y=0,b=0,N=0,M=0,S=0,w=0,D=0,L=0,V=0,U=0,B=0;p.sort(s2);for(let I=0,q=p.length;I<q;I++){const z=p[I],Y=z.color,rt=z.intensity,ft=z.distance;let k=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Vs?k=z.shadow.map.texture:k=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=Y.r*rt,_+=Y.g*rt,g+=Y.b*rt;else if(z.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(z.sh.coefficients[O],rt);B++}else if(z.isDirectionalLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const F=z.shadow,et=i.get(z);et.shadowIntensity=F.intensity,et.shadowBias=F.bias,et.shadowNormalBias=F.normalBias,et.shadowRadius=F.radius,et.shadowMapSize=F.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=k,s.directionalShadowMatrix[y]=z.shadow.matrix,w++}s.directional[y]=O,y++}else if(z.isSpotLight){const O=t.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(Y).multiplyScalar(rt),O.distance=ft,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,s.spot[N]=O;const F=z.shadow;if(z.map&&(s.spotLightMap[V]=z.map,V++,F.updateMatrices(z),z.castShadow&&U++),s.spotLightMatrix[N]=F.matrix,z.castShadow){const et=i.get(z);et.shadowIntensity=F.intensity,et.shadowBias=F.bias,et.shadowNormalBias=F.normalBias,et.shadowRadius=F.radius,et.shadowMapSize=F.mapSize,s.spotShadow[N]=et,s.spotShadowMap[N]=k,L++}N++}else if(z.isRectAreaLight){const O=t.get(z);O.color.copy(Y).multiplyScalar(rt),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=O,M++}else if(z.isPointLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const F=z.shadow,et=i.get(z);et.shadowIntensity=F.intensity,et.shadowBias=F.bias,et.shadowNormalBias=F.normalBias,et.shadowRadius=F.radius,et.shadowMapSize=F.mapSize,et.shadowCameraNear=F.camera.near,et.shadowCameraFar=F.camera.far,s.pointShadow[b]=et,s.pointShadowMap[b]=k,s.pointShadowMatrix[b]=z.shadow.matrix,D++}s.point[b]=O,b++}else if(z.isHemisphereLight){const O=t.get(z);O.skyColor.copy(z.color).multiplyScalar(rt),O.groundColor.copy(z.groundColor).multiplyScalar(rt),s.hemi[S]=O,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==N||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==D||T.numSpotShadows!==L||T.numSpotMaps!==V||T.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=N,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+V-U,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=B,T.directionalLength=y,T.pointLength=b,T.spotLength=N,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=D,T.numSpotShadows=L,T.numSpotMaps=V,T.numLightProbes=B,s.version=a2++)}function m(p,v){let _=0,g=0,y=0,b=0,N=0;const M=v.matrixWorldInverse;for(let S=0,w=p.length;S<w;S++){const D=p[S];if(D.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),_++}else if(D.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const L=s.rectArea[b];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),f.identity(),c.copy(D.matrixWorld),c.premultiply(M),f.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const L=s.point[g];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(M),g++}else if(D.isHemisphereLight){const L=s.hemi[N];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(M),N++}}}return{setup:d,setupView:m,state:s}}function x_(r){const t=new r2(r),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function v(g){t.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:v,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function o2(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new x_(r),t.set(l,[d])):c>=f.length?(d=new x_(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,u2=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],f2=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],S_=new cn,Zo=new Q,id=new Q;function h2(r,t,i){let s=new gp;const l=new qt,c=new qt,f=new ln,d=new yM,m=new MM,p={},v=i.maxTextureSize,_={[fs]:Zn,[Zn]:fs,[ya]:ya},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:l2,fragmentShader:c2}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ki;b.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new ji(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let S=this.type;this.render=function(U,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===Ny&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const I=r.getRenderTarget(),q=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ea),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const rt=S!==this.type;rt&&B.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(k=>k.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,k=U.length;ft<k;ft++){const O=U[ft],F=O.shadow;if(F===void 0){ce("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const et=F.getFrameExtents();l.multiply(et),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/et.x),l.x=c.x*et.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/et.y),l.y=c.y*et.y,F.mapSize.y=c.y));const ut=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ut,F.map===null||rt===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ko){if(O.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Wi(l.x,l.y,{format:Vs,type:Ta,minFilter:In,magFilter:In,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new Vr(l.x,l.y,Vi),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=Aa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn}else O.isPointLight?(F.map=new rx(l.x),F.map.depthTexture=new z1(l.x,Yi)):(F.map=new Wi(l.x,l.y),F.map.depthTexture=new Vr(l.x,l.y,Yi)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=Aa,this.type===Yc?(F.map.depthTexture.compareFunction=ut?hp:fp,F.map.depthTexture.minFilter=In,F.map.depthTexture.magFilter=In):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nn,F.map.depthTexture.magFilter=Nn);F.camera.updateProjectionMatrix()}const xt=F.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<xt;P++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,P),r.clear();else{P===0&&(r.setRenderTarget(F.map),r.clear());const K=F.getViewport(P);f.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Y.viewport(f)}if(O.isPointLight){const K=F.camera,gt=F.matrix,Ct=O.distance||K.far;Ct!==K.far&&(K.far=Ct,K.updateProjectionMatrix()),Zo.setFromMatrixPosition(O.matrixWorld),K.position.copy(Zo),id.copy(K.position),id.add(u2[P]),K.up.copy(f2[P]),K.lookAt(id),K.updateMatrixWorld(),gt.makeTranslation(-Zo.x,-Zo.y,-Zo.z),S_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(S_,K.coordinateSystem,K.reversedDepth)}else F.updateMatrices(O);s=F.getFrustum(),L(B,T,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Ko&&w(F,T),F.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(I,q,z)};function w(U,B){const T=t.update(N);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Wi(l.x,l.y,{format:Vs,type:Ta})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(B,null,T,g,N,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(B,null,T,y,N,null)}function D(U,B,T,I){let q=null;const z=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)q=z;else if(q=T.isPointLight===!0?m:d,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=q.uuid,rt=B.uuid;let ft=p[Y];ft===void 0&&(ft={},p[Y]=ft);let k=ft[rt];k===void 0&&(k=q.clone(),ft[rt]=k,B.addEventListener("dispose",V)),q=k}if(q.visible=B.visible,q.wireframe=B.wireframe,I===Ko?q.side=B.shadowSide!==null?B.shadowSide:B.side:q.side=B.shadowSide!==null?B.shadowSide:_[B.side],q.alphaMap=B.alphaMap,q.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,q.map=B.map,q.clipShadows=B.clipShadows,q.clippingPlanes=B.clippingPlanes,q.clipIntersection=B.clipIntersection,q.displacementMap=B.displacementMap,q.displacementScale=B.displacementScale,q.displacementBias=B.displacementBias,q.wireframeLinewidth=B.wireframeLinewidth,q.linewidth=B.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Y=r.properties.get(q);Y.light=T}return q}function L(U,B,T,I,q){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&q===Ko)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const rt=t.update(U),ft=U.material;if(Array.isArray(ft)){const k=rt.groups;for(let O=0,F=k.length;O<F;O++){const et=k[O],ut=ft[et.materialIndex];if(ut&&ut.visible){const xt=D(U,ut,I,q);U.onBeforeShadow(r,U,B,T,rt,xt,et),r.renderBufferDirect(T,null,rt,xt,U,et),U.onAfterShadow(r,U,B,T,rt,xt,et)}}}else if(ft.visible){const k=D(U,ft,I,q);U.onBeforeShadow(r,U,B,T,rt,k,null),r.renderBufferDirect(T,null,rt,k,U,null),U.onAfterShadow(r,U,B,T,rt,k,null)}}const Y=U.children;for(let rt=0,ft=Y.length;rt<ft;rt++)L(Y[rt],B,T,I,q)}function V(U){U.target.removeEventListener("dispose",V);for(const T in p){const I=p[T],q=U.target.uuid;q in I&&(I[q].dispose(),delete I[q])}}}function d2(r,t){function i(){let X=!1;const Dt=new ln;let mt=null;const Xt=new ln(0,0,0,0);return{setMask:function(It){mt!==It&&!X&&(r.colorMask(It,It,It,It),mt=It)},setLocked:function(It){X=It},setClear:function(It,Rt,te,he,an){an===!0&&(It*=he,Rt*=he,te*=he),Dt.set(It,Rt,te,he),Xt.equals(Dt)===!1&&(r.clearColor(It,Rt,te,he),Xt.copy(Dt))},reset:function(){X=!1,mt=null,Xt.set(-1,0,0,0)}}}function s(){let X=!1,Dt=!1,mt=null,Xt=null,It=null;return{setReversed:function(Rt){if(Dt!==Rt){const te=t.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Dt=Rt;const he=It;It=null,this.setClear(he)}},getReversed:function(){return Dt},setTest:function(Rt){Rt?Et(r.DEPTH_TEST):Lt(r.DEPTH_TEST)},setMask:function(Rt){mt!==Rt&&!X&&(r.depthMask(Rt),mt=Rt)},setFunc:function(Rt){if(Dt&&(Rt=u1[Rt]),Xt!==Rt){switch(Rt){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xt=Rt}},setLocked:function(Rt){X=Rt},setClear:function(Rt){It!==Rt&&(It=Rt,Dt&&(Rt=1-Rt),r.clearDepth(Rt))},reset:function(){X=!1,mt=null,Xt=null,It=null,Dt=!1}}}function l(){let X=!1,Dt=null,mt=null,Xt=null,It=null,Rt=null,te=null,he=null,an=null;return{setTest:function(Fe){X||(Fe?Et(r.STENCIL_TEST):Lt(r.STENCIL_TEST))},setMask:function(Fe){Dt!==Fe&&!X&&(r.stencilMask(Fe),Dt=Fe)},setFunc:function(Fe,ui,Kn){(mt!==Fe||Xt!==ui||It!==Kn)&&(r.stencilFunc(Fe,ui,Kn),mt=Fe,Xt=ui,It=Kn)},setOp:function(Fe,ui,Kn){(Rt!==Fe||te!==ui||he!==Kn)&&(r.stencilOp(Fe,ui,Kn),Rt=Fe,te=ui,he=Kn)},setLocked:function(Fe){X=Fe},setClear:function(Fe){an!==Fe&&(r.clearStencil(Fe),an=Fe)},reset:function(){X=!1,Dt=null,mt=null,Xt=null,It=null,Rt=null,te=null,he=null,an=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},g={},y=new WeakMap,b=[],N=null,M=!1,S=null,w=null,D=null,L=null,V=null,U=null,B=null,T=new Le(0,0,0),I=0,q=!1,z=null,Y=null,rt=null,ft=null,k=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,et=0;const ut=r.getParameter(r.VERSION);ut.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(ut)[1]),F=et>=1):ut.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),F=et>=2);let xt=null,P={};const K=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),Ct=new ln().fromArray(K),Nt=new ln().fromArray(gt);function st(X,Dt,mt,Xt){const It=new Uint8Array(4),Rt=r.createTexture();r.bindTexture(X,Rt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<mt;te++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,Xt,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(Dt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return Rt}const Mt={};Mt[r.TEXTURE_2D]=st(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=st(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=st(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=st(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Et(r.DEPTH_TEST),f.setFunc(Hr),kt(!1),Ft(gv),Et(r.CULL_FACE),wt(Ea);function Et(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Lt(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function jt(X,Dt){return g[X]!==Dt?(r.bindFramebuffer(X,Dt),g[X]=Dt,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Dt),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ie(X,Dt){let mt=b,Xt=!1;if(X){mt=y.get(Dt),mt===void 0&&(mt=[],y.set(Dt,mt));const It=X.textures;if(mt.length!==It.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let Rt=0,te=It.length;Rt<te;Rt++)mt[Rt]=r.COLOR_ATTACHMENT0+Rt;mt.length=It.length,Xt=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,Xt=!0);Xt&&r.drawBuffers(mt)}function Me(X){return N!==X?(r.useProgram(X),N=X,!0):!1}const le={[Is]:r.FUNC_ADD,[Ly]:r.FUNC_SUBTRACT,[Oy]:r.FUNC_REVERSE_SUBTRACT};le[Py]=r.MIN,le[zy]=r.MAX;const yt={[Iy]:r.ZERO,[Fy]:r.ONE,[By]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[Wy]:r.SRC_ALPHA_SATURATE,[ky]:r.DST_COLOR,[Gy]:r.DST_ALPHA,[Hy]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[Xy]:r.ONE_MINUS_DST_COLOR,[Vy]:r.ONE_MINUS_DST_ALPHA,[qy]:r.CONSTANT_COLOR,[Yy]:r.ONE_MINUS_CONSTANT_COLOR,[jy]:r.CONSTANT_ALPHA,[Zy]:r.ONE_MINUS_CONSTANT_ALPHA};function wt(X,Dt,mt,Xt,It,Rt,te,he,an,Fe){if(X===Ea){M===!0&&(Lt(r.BLEND),M=!1);return}if(M===!1&&(Et(r.BLEND),M=!0),X!==Uy){if(X!==S||Fe!==q){if((w!==Is||V!==Is)&&(r.blendEquation(r.FUNC_ADD),w=Is,V=Is),Fe)switch(X){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vv:r.blendFunc(r.ONE,r.ONE);break;case _v:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",X);break}else switch(X){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _v:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xv:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",X);break}D=null,L=null,U=null,B=null,T.set(0,0,0),I=0,S=X,q=Fe}return}It=It||Dt,Rt=Rt||mt,te=te||Xt,(Dt!==w||It!==V)&&(r.blendEquationSeparate(le[Dt],le[It]),w=Dt,V=It),(mt!==D||Xt!==L||Rt!==U||te!==B)&&(r.blendFuncSeparate(yt[mt],yt[Xt],yt[Rt],yt[te]),D=mt,L=Xt,U=Rt,B=te),(he.equals(T)===!1||an!==I)&&(r.blendColor(he.r,he.g,he.b,an),T.copy(he),I=an),S=X,q=!1}function bt(X,Dt){X.side===ya?Lt(r.CULL_FACE):Et(r.CULL_FACE);let mt=X.side===Zn;Dt&&(mt=!mt),kt(mt),X.blending===Fr&&X.transparent===!1?wt(Ea):wt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Xt=X.stencilWrite;d.setTest(Xt),Xt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),H(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(r.SAMPLE_ALPHA_TO_COVERAGE):Lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function kt(X){z!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),z=X)}function Ft(X){X!==wy?(Et(r.CULL_FACE),X!==Y&&(X===gv?r.cullFace(r.BACK):X===Dy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Lt(r.CULL_FACE),Y=X}function oe(X){X!==rt&&(F&&r.lineWidth(X),rt=X)}function H(X,Dt,mt){X?(Et(r.POLYGON_OFFSET_FILL),(ft!==Dt||k!==mt)&&(ft=Dt,k=mt,f.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,mt))):Lt(r.POLYGON_OFFSET_FILL)}function ue(X){X?Et(r.SCISSOR_TEST):Lt(r.SCISSOR_TEST)}function $t(X){X===void 0&&(X=r.TEXTURE0+O-1),xt!==X&&(r.activeTexture(X),xt=X)}function fe(X,Dt,mt){mt===void 0&&(xt===null?mt=r.TEXTURE0+O-1:mt=xt);let Xt=P[mt];Xt===void 0&&(Xt={type:void 0,texture:void 0},P[mt]=Xt),(Xt.type!==X||Xt.texture!==Dt)&&(xt!==mt&&(r.activeTexture(mt),xt=mt),r.bindTexture(X,Dt||Mt[X]),Xt.type=X,Xt.texture=Dt)}function At(){const X=P[xt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Oe(){try{r.compressedTexImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function $(){try{r.texSubImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Tt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Ut(){try{r.texStorage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Pt(){try{r.texStorage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function ht(){try{r.texImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function dt(){try{r.texImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Bt(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function Ht(X,Dt){_[X]!==Dt&&(r.pixelStorei(X,Dt),_[X]=Dt)}function zt(X){Ct.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ct.copy(X))}function Ot(X){Nt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Nt.copy(X))}function de(X,Dt){let mt=p.get(Dt);mt===void 0&&(mt=new WeakMap,p.set(Dt,mt));let Xt=mt.get(X);Xt===void 0&&(Xt=r.getUniformBlockIndex(Dt,X.name),mt.set(X,Xt))}function pe(X,Dt){const Xt=p.get(Dt).get(X);m.get(Dt)!==Xt&&(r.uniformBlockBinding(Dt,Xt,X.__bindingPointIndex),m.set(Dt,Xt))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},xt=null,P={},g={},y=new WeakMap,b=[],N=null,M=!1,S=null,w=null,D=null,L=null,V=null,U=null,B=null,T=new Le(0,0,0),I=0,q=!1,z=null,Y=null,rt=null,ft=null,k=null,Ct.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Et,disable:Lt,bindFramebuffer:jt,drawBuffers:ie,useProgram:Me,setBlending:wt,setMaterial:bt,setFlipSided:kt,setCullFace:Ft,setLineWidth:oe,setPolygonOffset:H,setScissorTest:ue,activeTexture:$t,bindTexture:fe,unbindTexture:At,compressedTexImage2D:Oe,compressedTexImage3D:C,texImage2D:ht,texImage3D:dt,pixelStorei:Ht,getParameter:Bt,updateUBOMapping:de,uniformBlockBinding:pe,texStorage2D:Ut,texStorage3D:Pt,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:vt,compressedTexSubImage3D:Tt,scissor:zt,viewport:Ot,reset:Ee}}function p2(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,v=new WeakMap,_=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(C,E){return b?new OffscreenCanvas(C,E):iu("canvas")}function M(C,E,$){let vt=1;const Tt=Oe(C);if((Tt.width>$||Tt.height>$)&&(vt=$/Math.max(Tt.width,Tt.height)),vt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Ut=Math.floor(vt*Tt.width),Pt=Math.floor(vt*Tt.height);g===void 0&&(g=N(Ut,Pt));const ht=E?N(Ut,Pt):g;return ht.width=Ut,ht.height=Pt,ht.getContext("2d").drawImage(C,0,0,Ut,Pt),ce("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+Ut+"x"+Pt+")."),ht}else return"data"in C&&ce("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),C;return C}function S(C){return C.generateMipmaps}function w(C){r.generateMipmap(C)}function D(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(C,E,$,vt,Tt,Ut=!1){if(C!==null){if(r[C]!==void 0)return r[C];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pt;vt&&(Pt=t.get("EXT_texture_norm16"),Pt||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=E;if(E===r.RED&&($===r.FLOAT&&(ht=r.R32F),$===r.HALF_FLOAT&&(ht=r.R16F),$===r.UNSIGNED_BYTE&&(ht=r.R8),$===r.UNSIGNED_SHORT&&Pt&&(ht=Pt.R16_EXT),$===r.SHORT&&Pt&&(ht=Pt.R16_SNORM_EXT)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.R8UI),$===r.UNSIGNED_SHORT&&(ht=r.R16UI),$===r.UNSIGNED_INT&&(ht=r.R32UI),$===r.BYTE&&(ht=r.R8I),$===r.SHORT&&(ht=r.R16I),$===r.INT&&(ht=r.R32I)),E===r.RG&&($===r.FLOAT&&(ht=r.RG32F),$===r.HALF_FLOAT&&(ht=r.RG16F),$===r.UNSIGNED_BYTE&&(ht=r.RG8),$===r.UNSIGNED_SHORT&&Pt&&(ht=Pt.RG16_EXT),$===r.SHORT&&Pt&&(ht=Pt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RG8UI),$===r.UNSIGNED_SHORT&&(ht=r.RG16UI),$===r.UNSIGNED_INT&&(ht=r.RG32UI),$===r.BYTE&&(ht=r.RG8I),$===r.SHORT&&(ht=r.RG16I),$===r.INT&&(ht=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),$===r.UNSIGNED_INT&&(ht=r.RGB32UI),$===r.BYTE&&(ht=r.RGB8I),$===r.SHORT&&(ht=r.RGB16I),$===r.INT&&(ht=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),$===r.UNSIGNED_INT&&(ht=r.RGBA32UI),$===r.BYTE&&(ht=r.RGBA8I),$===r.SHORT&&(ht=r.RGBA16I),$===r.INT&&(ht=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_SHORT&&Pt&&(ht=Pt.RGB16_EXT),$===r.SHORT&&Pt&&(ht=Pt.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),E===r.RGBA){const dt=Ut?nu:Ne.getTransfer(Tt);$===r.FLOAT&&(ht=r.RGBA32F),$===r.HALF_FLOAT&&(ht=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ht=dt===qe?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Pt&&(ht=Pt.RGBA16_EXT),$===r.SHORT&&Pt&&(ht=Pt.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function V(C,E){let $;return C?E===null||E===Yi||E===nl?$=r.DEPTH24_STENCIL8:E===Vi?$=r.DEPTH32F_STENCIL8:E===el&&($=r.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===nl?$=r.DEPTH_COMPONENT24:E===Vi?$=r.DEPTH_COMPONENT32F:E===el&&($=r.DEPTH_COMPONENT16),$}function U(C,E){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function B(C){const E=C.target;E.removeEventListener("dispose",B),I(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&_.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),z(E)}function I(C){const E=s.get(C);if(E.__webglInit===void 0)return;const $=C.source,vt=y.get($);if(vt){const Tt=vt[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&q(C),Object.keys(vt).length===0&&y.delete($)}s.remove(C)}function q(C){const E=s.get(C);r.deleteTexture(E.__webglTexture);const $=C.source,vt=y.get($);delete vt[E.__cacheKey],f.memory.textures--}function z(C){const E=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let Tt=0;Tt<E.__webglFramebuffer[vt].length;Tt++)r.deleteFramebuffer(E.__webglFramebuffer[vt][Tt]);else r.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[vt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=C.textures;for(let vt=0,Tt=$.length;vt<Tt;vt++){const Ut=s.get($[vt]);Ut.__webglTexture&&(r.deleteTexture(Ut.__webglTexture),f.memory.textures--),s.remove($[vt])}s.remove(C)}let Y=0;function rt(){Y=0}function ft(){return Y}function k(C){Y=C}function O(){const C=Y;return C>=l.maxTextures&&ce("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),Y+=1,C}function F(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function et(C,E){const $=s.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&$.__version!==C.version){const vt=C.image;if(vt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt($,C,E);return}}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function ut(C,E){const $=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Lt($,C,E);return}else C.isExternalTexture&&($.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function xt(C,E){const $=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){Lt($,C,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function P(C,E){const $=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&$.__version!==C.version){jt($,C,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const K={[md]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},gt={[Nn]:r.NEAREST,[Qy]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},Ct={[e1]:r.NEVER,[r1]:r.ALWAYS,[n1]:r.LESS,[fp]:r.LEQUAL,[i1]:r.EQUAL,[hp]:r.GEQUAL,[a1]:r.GREATER,[s1]:r.NOTEQUAL};function Nt(C,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===yh||E.magFilter===Sc||E.magFilter===Bs||E.minFilter===In||E.minFilter===yh||E.minFilter===Sc||E.minFilter===Bs)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,K[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,gt[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Sc&&E.minFilter!==Bs||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function st(C,E){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",B));const vt=E.source;let Tt=y.get(vt);Tt===void 0&&(Tt={},y.set(vt,Tt));const Ut=F(E);if(Ut!==C.__cacheKey){Tt[Ut]===void 0&&(Tt[Ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),Tt[Ut].usedTimes++;const Pt=Tt[C.__cacheKey];Pt!==void 0&&(Tt[C.__cacheKey].usedTimes--,Pt.usedTimes===0&&q(E)),C.__cacheKey=Ut,C.__webglTexture=Tt[Ut].texture}return $}function Mt(C,E,$){return Math.floor(Math.floor(C/$)/E)}function Et(C,E,$,vt){const Ut=C.updateRanges;if(Ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,vt,E.data);else{Ut.sort((Ht,zt)=>Ht.start-zt.start);let Pt=0;for(let Ht=1;Ht<Ut.length;Ht++){const zt=Ut[Pt],Ot=Ut[Ht],de=zt.start+zt.count,pe=Mt(Ot.start,E.width,4),Ee=Mt(zt.start,E.width,4);Ot.start<=de+1&&pe===Ee&&Mt(Ot.start+Ot.count-1,E.width,4)===pe?zt.count=Math.max(zt.count,Ot.start+Ot.count-zt.start):(++Pt,Ut[Pt]=Ot)}Ut.length=Pt+1;const ht=i.getParameter(r.UNPACK_ROW_LENGTH),dt=i.getParameter(r.UNPACK_SKIP_PIXELS),Bt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ht=0,zt=Ut.length;Ht<zt;Ht++){const Ot=Ut[Ht],de=Math.floor(Ot.start/4),pe=Math.ceil(Ot.count/4),Ee=de%E.width,X=Math.floor(de/E.width),Dt=pe,mt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,Ee,X,Dt,mt,$,vt,E.data)}C.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ht),i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Bt)}}function Lt(C,E,$){let vt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=r.TEXTURE_3D);const Tt=st(C,E),Ut=E.source;i.bindTexture(vt,C.__webglTexture,r.TEXTURE0+$);const Pt=s.get(Ut);if(Ut.version!==Pt.__version||Tt===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const mt=Ne.getPrimaries(Ne.workingColorSpace),Xt=E.colorSpace===cs?null:Ne.getPrimaries(E.colorSpace),It=E.colorSpace===cs||mt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let dt=M(E.image,!1,l.maxTextureSize);dt=At(E,dt);const Bt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let zt=L(E.internalFormat,Bt,Ht,E.normalized,E.colorSpace,E.isVideoTexture);Nt(vt,E);let Ot;const de=E.mipmaps,pe=E.isVideoTexture!==!0,Ee=Pt.__version===void 0||Tt===!0,X=Ut.dataReady,Dt=U(E,dt);if(E.isDepthTexture)zt=V(E.format===Hs,E.type),Ee&&(pe?i.texStorage2D(r.TEXTURE_2D,1,zt,dt.width,dt.height):i.texImage2D(r.TEXTURE_2D,0,zt,dt.width,dt.height,0,Bt,Ht,null));else if(E.isDataTexture)if(de.length>0){pe&&Ee&&i.texStorage2D(r.TEXTURE_2D,Dt,zt,de[0].width,de[0].height);for(let mt=0,Xt=de.length;mt<Xt;mt++)Ot=de[mt],pe?X&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ht,Ot.data):i.texImage2D(r.TEXTURE_2D,mt,zt,Ot.width,Ot.height,0,Bt,Ht,Ot.data);E.generateMipmaps=!1}else pe?(Ee&&i.texStorage2D(r.TEXTURE_2D,Dt,zt,dt.width,dt.height),X&&Et(E,dt,Bt,Ht)):i.texImage2D(r.TEXTURE_2D,0,zt,dt.width,dt.height,0,Bt,Ht,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&Ee&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Dt,zt,de[0].width,de[0].height,dt.depth);for(let mt=0,Xt=de.length;mt<Xt;mt++)if(Ot=de[mt],E.format!==Ni)if(Bt!==null)if(pe){if(X)if(E.layerUpdates.size>0){const It=Jv(Ot.width,Ot.height,E.format,E.type);for(const Rt of E.layerUpdates){const te=Ot.data.subarray(Rt*It/Ot.data.BYTES_PER_ELEMENT,(Rt+1)*It/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,Rt,Ot.width,Ot.height,1,Bt,te)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,dt.depth,Bt,Ot.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,zt,Ot.width,Ot.height,dt.depth,0,Ot.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,dt.depth,Bt,Ht,Ot.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,zt,Ot.width,Ot.height,dt.depth,0,Bt,Ht,Ot.data)}else{pe&&Ee&&i.texStorage2D(r.TEXTURE_2D,Dt,zt,de[0].width,de[0].height);for(let mt=0,Xt=de.length;mt<Xt;mt++)Ot=de[mt],E.format!==Ni?Bt!==null?pe?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ot.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,zt,Ot.width,Ot.height,0,Ot.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?X&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Bt,Ht,Ot.data):i.texImage2D(r.TEXTURE_2D,mt,zt,Ot.width,Ot.height,0,Bt,Ht,Ot.data)}else if(E.isDataArrayTexture)if(pe){if(Ee&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Dt,zt,dt.width,dt.height,dt.depth),X)if(E.layerUpdates.size>0){const mt=Jv(dt.width,dt.height,E.format,E.type);for(const Xt of E.layerUpdates){const It=dt.data.subarray(Xt*mt/dt.data.BYTES_PER_ELEMENT,(Xt+1)*mt/dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Xt,dt.width,dt.height,1,Bt,Ht,It)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Bt,Ht,dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,dt.width,dt.height,dt.depth,0,Bt,Ht,dt.data);else if(E.isData3DTexture)pe?(Ee&&i.texStorage3D(r.TEXTURE_3D,Dt,zt,dt.width,dt.height,dt.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Bt,Ht,dt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,dt.width,dt.height,dt.depth,0,Bt,Ht,dt.data);else if(E.isFramebufferTexture){if(Ee)if(pe)i.texStorage2D(r.TEXTURE_2D,Dt,zt,dt.width,dt.height);else{let mt=dt.width,Xt=dt.height;for(let It=0;It<Dt;It++)i.texImage2D(r.TEXTURE_2D,It,zt,mt,Xt,0,Bt,Ht,null),mt>>=1,Xt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),dt.parentNode!==mt){mt.appendChild(dt),_.add(E),mt.onpaint=he=>{const an=he.changedElements;for(const Fe of _)an.includes(Fe.image)&&(Fe.needsUpdate=!0)},mt.requestPaint();return}const Xt=0,It=r.RGBA,Rt=r.RGBA,te=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Xt,It,Rt,te,dt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(pe&&Ee){const mt=Oe(de[0]);i.texStorage2D(r.TEXTURE_2D,Dt,zt,mt.width,mt.height)}for(let mt=0,Xt=de.length;mt<Xt;mt++)Ot=de[mt],pe?X&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Bt,Ht,Ot):i.texImage2D(r.TEXTURE_2D,mt,zt,Bt,Ht,Ot);E.generateMipmaps=!1}else if(pe){if(Ee){const mt=Oe(dt);i.texStorage2D(r.TEXTURE_2D,Dt,zt,mt.width,mt.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Ht,dt)}else i.texImage2D(r.TEXTURE_2D,0,zt,Bt,Ht,dt);S(E)&&w(vt),Pt.__version=Ut.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function jt(C,E,$){if(E.image.length!==6)return;const vt=st(C,E),Tt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+$);const Ut=s.get(Tt);if(Tt.version!==Ut.__version||vt===!0){i.activeTexture(r.TEXTURE0+$);const Pt=Ne.getPrimaries(Ne.workingColorSpace),ht=E.colorSpace===cs?null:Ne.getPrimaries(E.colorSpace),dt=E.colorSpace===cs||Pt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Bt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ht=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let Rt=0;Rt<6;Rt++)!Bt&&!Ht?zt[Rt]=M(E.image[Rt],!0,l.maxCubemapSize):zt[Rt]=Ht?E.image[Rt].image:E.image[Rt],zt[Rt]=At(E,zt[Rt]);const Ot=zt[0],de=c.convert(E.format,E.colorSpace),pe=c.convert(E.type),Ee=L(E.internalFormat,de,pe,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Dt=Ut.__version===void 0||vt===!0,mt=Tt.dataReady;let Xt=U(E,Ot);Nt(r.TEXTURE_CUBE_MAP,E);let It;if(Bt){X&&Dt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,Ee,Ot.width,Ot.height);for(let Rt=0;Rt<6;Rt++){It=zt[Rt].mipmaps;for(let te=0;te<It.length;te++){const he=It[te];E.format!==Ni?de!==null?X?mt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,0,0,he.width,he.height,de,he.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,Ee,he.width,he.height,0,he.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,0,0,he.width,he.height,de,pe,he.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,Ee,he.width,he.height,0,de,pe,he.data)}}}else{if(It=E.mipmaps,X&&Dt){It.length>0&&Xt++;const Rt=Oe(zt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,Ee,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(Ht){X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,zt[Rt].width,zt[Rt].height,de,pe,zt[Rt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ee,zt[Rt].width,zt[Rt].height,0,de,pe,zt[Rt].data);for(let te=0;te<It.length;te++){const an=It[te].image[Rt].image;X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,0,0,an.width,an.height,de,pe,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,Ee,an.width,an.height,0,de,pe,an.data)}}else{X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,de,pe,zt[Rt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ee,de,pe,zt[Rt]);for(let te=0;te<It.length;te++){const he=It[te];X?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,0,0,de,pe,he.image[Rt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,Ee,de,pe,he.image[Rt])}}}S(E)&&w(r.TEXTURE_CUBE_MAP),Ut.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ie(C,E,$,vt,Tt,Ut){const Pt=c.convert($.format,$.colorSpace),ht=c.convert($.type),dt=L($.internalFormat,Pt,ht,$.normalized,$.colorSpace),Bt=s.get(E),Ht=s.get($);if(Ht.__renderTarget=E,!Bt.__hasExternalTextures){const zt=Math.max(1,E.width>>Ut),Ot=Math.max(1,E.height>>Ut);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?i.texImage3D(Tt,Ut,dt,zt,Ot,E.depth,0,Pt,ht,null):i.texImage2D(Tt,Ut,dt,zt,Ot,0,Pt,ht,null)}i.bindFramebuffer(r.FRAMEBUFFER,C),$t(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Tt,Ht.__webglTexture,0,ue(E)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Tt,Ht.__webglTexture,Ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(C,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const vt=E.depthTexture,Tt=vt&&vt.isDepthTexture?vt.type:null,Ut=V(E.stencilBuffer,Tt),Pt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$t(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue(E),Ut,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue(E),Ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ut,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,C)}else{const vt=E.textures;for(let Tt=0;Tt<vt.length;Tt++){const Ut=vt[Tt],Pt=c.convert(Ut.format,Ut.colorSpace),ht=c.convert(Ut.type),dt=L(Ut.internalFormat,Pt,ht,Ut.normalized,Ut.colorSpace);$t(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue(E),dt,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(C,E,$){const vt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(E.depthTexture);if(Tt.__renderTarget=E,(!Tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Bt=c.convert(E.depthTexture.format),Ht=c.convert(E.depthTexture.type);let zt;E.depthTexture.format===Aa?zt=r.DEPTH_COMPONENT24:E.depthTexture.format===Hs&&(zt=r.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,zt,E.width,E.height,0,Bt,Ht,null)}}else et(E.depthTexture,0);const Ut=Tt.__webglTexture,Pt=ue(E),ht=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,dt=E.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)$t(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ht,Ut,0,Pt):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ht,Ut,0);else if(E.depthTexture.format===Hs)$t(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ht,Ut,0,Pt):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ht,Ut,0);else throw new Error("Unknown depthTexture format")}function yt(C){const E=s.get(C),$=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const vt=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",Tt)};vt.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=vt}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let vt=0;vt<6;vt++)le(E.__webglFramebuffer[vt],C,vt);else{const vt=C.texture.mipmaps;vt&&vt.length>0?le(E.__webglFramebuffer[0],C,0):le(E.__webglFramebuffer,C,0)}else if($){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=r.createRenderbuffer(),Me(E.__webglDepthbuffer[vt],C,!1);else{const Tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=E.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Ut)}}else{const vt=C.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Me(E.__webglDepthbuffer,C,!1);else{const Tt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(C,E,$){const vt=s.get(C);E!==void 0&&ie(vt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&yt(C)}function bt(C){const E=C.texture,$=s.get(C),vt=s.get(E);C.addEventListener("dispose",T);const Tt=C.textures,Ut=C.isWebGLCubeRenderTarget===!0,Pt=Tt.length>1;if(Pt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=E.version,f.memory.textures++),Ut){$.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ht]=[];for(let dt=0;dt<E.mipmaps.length;dt++)$.__webglFramebuffer[ht][dt]=r.createFramebuffer()}else $.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)$.__webglFramebuffer[ht]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let ht=0,dt=Tt.length;ht<dt;ht++){const Bt=s.get(Tt[ht]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),f.memory.textures++)}if(C.samples>0&&$t(C)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ht=0;ht<Tt.length;ht++){const dt=Tt[ht];$.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ht]);const Bt=c.convert(dt.format,dt.colorSpace),Ht=c.convert(dt.type),zt=L(dt.internalFormat,Bt,Ht,dt.normalized,dt.colorSpace,C.isXRRenderTarget===!0),Ot=ue(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot,zt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,$.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Me($.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ut){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)ie($.__webglFramebuffer[ht][dt],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else ie($.__webglFramebuffer[ht],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);S(E)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let ht=0,dt=Tt.length;ht<dt;ht++){const Bt=Tt[ht],Ht=s.get(Bt);let zt=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(zt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(zt,Ht.__webglTexture),Nt(zt,Bt),ie($.__webglFramebuffer,C,Bt,r.COLOR_ATTACHMENT0+ht,zt,0),S(Bt)&&w(zt)}i.unbindTexture()}else{let ht=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ht,vt.__webglTexture),Nt(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)ie($.__webglFramebuffer[dt],C,E,r.COLOR_ATTACHMENT0,ht,dt);else ie($.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,ht,0);S(E)&&w(ht),i.unbindTexture()}C.depthBuffer&&yt(C)}function kt(C){const E=C.textures;for(let $=0,vt=E.length;$<vt;$++){const Tt=E[$];if(S(Tt)){const Ut=D(C),Pt=s.get(Tt).__webglTexture;i.bindTexture(Ut,Pt),w(Ut),i.unbindTexture()}}}const Ft=[],oe=[];function H(C){if(C.samples>0){if($t(C)===!1){const E=C.textures,$=C.width,vt=C.height;let Tt=r.COLOR_BUFFER_BIT;const Ut=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=s.get(C),ht=E.length>1;if(ht)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const dt=C.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Bt]);const Ht=s.get(E[Bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,$,vt,0,0,$,vt,Tt,r.NEAREST),m===!0&&(Ft.length=0,oe.length=0,Ft.push(r.COLOR_ATTACHMENT0+Bt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ft.push(Ut),oe.push(Ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ft))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[Bt]);const Ht=s.get(E[Bt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Bt,r.TEXTURE_2D,Ht,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&m){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ue(C){return Math.min(l.maxSamples,C.samples)}function $t(C){const E=s.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function fe(C){const E=f.render.frame;v.get(C)!==E&&(v.set(C,E),C.update())}function At(C,E){const $=C.colorSpace,vt=C.format,Tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==eu&&$!==cs&&(Ne.getTransfer($)===qe?(vt!==Ni||Tt!==ci)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",$)),E}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(p.width=C.naturalWidth||C.width,p.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(p.width=C.displayWidth,p.height=C.displayHeight):(p.width=C.width,p.height=C.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=rt,this.getTextureUnits=ft,this.setTextureUnits=k,this.setTexture2D=et,this.setTexture2DArray=ut,this.setTexture3D=xt,this.setTextureCube=P,this.rebindTextures=wt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function m2(r,t){function i(s,l=cs){let c;const f=Ne.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===op)return r.UNSIGNED_SHORT_5_5_5_1;if(s===U_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===L_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===D_)return r.BYTE;if(s===N_)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===sp)return r.INT;if(s===Yi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===O_)return r.ALPHA;if(s===P_)return r.RGB;if(s===Ni)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===z_)return r.RED;if(s===lp)return r.RED_INTEGER;if(s===Vs)return r.RG;if(s===cp)return r.RG_INTEGER;if(s===up)return r.RGBA_INTEGER;if(s===jc||s===Zc||s===Kc||s===Jc)if(f===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vd||s===_d||s===xd||s===Sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yd||s===Md||s===Ed||s===bd||s===Td||s===$c||s===Ad)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===yd||s===Md)return f===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Ed)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===bd)return c.COMPRESSED_R11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(s===$c)return c.COMPRESSED_RG11_EAC;if(s===Ad)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Rd||s===Cd||s===wd||s===Dd||s===Nd||s===Ud||s===Ld||s===Od||s===Pd||s===zd||s===Id||s===Fd||s===Bd||s===Hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Rd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ud)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ld)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Od)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hd)return f===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gd||s===Vd||s===kd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Gd)return f===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xd||s===Wd||s===tu||s===qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Xd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v2=`
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

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new W_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:g2,fragmentShader:v2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ji(new ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class x2 extends Xs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,v=null,_=null,g=null,y=null,b=null;const N=typeof XRWebGLBinding<"u",M=new _2,S={},w=i.getContextAttributes();let D=null,L=null;const V=[],U=[],B=new qt;let T=null;const I=new li;I.viewport=new ln;const q=new li;q.viewport=new ln;const z=[I,q],Y=new CM;let rt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let Mt=V[st];return Mt===void 0&&(Mt=new wh,V[st]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(st){let Mt=V[st];return Mt===void 0&&(Mt=new wh,V[st]=Mt),Mt.getGripSpace()},this.getHand=function(st){let Mt=V[st];return Mt===void 0&&(Mt=new wh,V[st]=Mt),Mt.getHandSpace()};function k(st){const Mt=U.indexOf(st.inputSource);if(Mt===-1)return;const Et=V[Mt];Et!==void 0&&(Et.update(st.inputSource,st.frame,p||f),Et.dispatchEvent({type:st.type,data:st.inputSource}))}function O(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",F);for(let st=0;st<V.length;st++){const Mt=U[st];Mt!==null&&(U[st]=null,V[st].disconnect(Mt))}rt=null,ft=null,M.reset();for(const st in S)delete S[st];t.setRenderTarget(D),y=null,g=null,_=null,l=null,L=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){d=st,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",O),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(B),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Lt=null,jt=null;w.depth&&(jt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=w.stencil?Hs:Aa,Lt=w.stencil?nl:Yi);const ie={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(ie),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),L=new Wi(g.textureWidth,g.textureHeight,{format:Ni,type:ci,depthTexture:new Vr(g.textureWidth,g.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(st){for(let Mt=0;Mt<st.removed.length;Mt++){const Et=st.removed[Mt],Lt=U.indexOf(Et);Lt>=0&&(U[Lt]=null,V[Lt].disconnect(Et))}for(let Mt=0;Mt<st.added.length;Mt++){const Et=st.added[Mt];let Lt=U.indexOf(Et);if(Lt===-1){for(let ie=0;ie<V.length;ie++)if(ie>=U.length){U.push(Et),Lt=ie;break}else if(U[ie]===null){U[ie]=Et,Lt=ie;break}if(Lt===-1)break}const jt=V[Lt];jt&&jt.connect(Et)}}const et=new Q,ut=new Q;function xt(st,Mt,Et){et.setFromMatrixPosition(Mt.matrixWorld),ut.setFromMatrixPosition(Et.matrixWorld);const Lt=et.distanceTo(ut),jt=Mt.projectionMatrix.elements,ie=Et.projectionMatrix.elements,Me=jt[14]/(jt[10]-1),le=jt[14]/(jt[10]+1),yt=(jt[9]+1)/jt[5],wt=(jt[9]-1)/jt[5],bt=(jt[8]-1)/jt[0],kt=(ie[8]+1)/ie[0],Ft=Me*bt,oe=Me*kt,H=Lt/(-bt+kt),ue=H*-bt;if(Mt.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(ue),st.translateZ(H),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),jt[10]===-1)st.projectionMatrix.copy(Mt.projectionMatrix),st.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const $t=Me+H,fe=le+H,At=Ft-ue,Oe=oe+(Lt-ue),C=yt*le/fe*$t,E=wt*le/fe*$t;st.projectionMatrix.makePerspective(At,Oe,C,E,$t,fe),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function P(st,Mt){Mt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(Mt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let Mt=st.near,Et=st.far;M.texture!==null&&(M.depthNear>0&&(Mt=M.depthNear),M.depthFar>0&&(Et=M.depthFar)),Y.near=q.near=I.near=Mt,Y.far=q.far=I.far=Et,(rt!==Y.near||ft!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),rt=Y.near,ft=Y.far),Y.layers.mask=st.layers.mask|6,I.layers.mask=Y.layers.mask&-5,q.layers.mask=Y.layers.mask&-3;const Lt=st.parent,jt=Y.cameras;P(Y,Lt);for(let ie=0;ie<jt.length;ie++)P(jt[ie],Lt);jt.length===2?xt(Y,I,q):Y.projectionMatrix.copy(I.projectionMatrix),K(st,Y,Lt)};function K(st,Mt,Et){Et===null?st.matrix.copy(Mt.matrixWorld):(st.matrix.copy(Et.matrixWorld),st.matrix.invert(),st.matrix.multiply(Mt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(Mt.projectionMatrix),st.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Zd*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(st){m=st,g!==null&&(g.fixedFoveation=st),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(st){return S[st]};let gt=null;function Ct(st,Mt){if(v=Mt.getViewerPose(p||f),b=Mt,v!==null){const Et=v.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Lt=!1;Et.length!==Y.cameras.length&&(Y.cameras.length=0,Lt=!0);for(let le=0;le<Et.length;le++){const yt=Et[le];let wt=null;if(y!==null)wt=y.getViewport(yt);else{const kt=_.getViewSubImage(g,yt);wt=kt.viewport,le===0&&(t.setRenderTargetTextures(L,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(L))}let bt=z[le];bt===void 0&&(bt=new li,bt.layers.enable(le),bt.viewport=new ln,z[le]=bt),bt.matrix.fromArray(yt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(yt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(wt.x,wt.y,wt.width,wt.height),le===0&&(Y.matrix.copy(bt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Lt===!0&&Y.cameras.push(bt)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&N){_=s.getBinding();const le=_.getDepthInformation(Et[0]);le&&le.isValid&&le.texture&&M.init(le,l.renderState)}if(jt&&jt.includes("camera-access")&&N){t.state.unbindTexture(),_=s.getBinding();for(let le=0;le<Et.length;le++){const yt=Et[le].camera;if(yt){let wt=S[yt];wt||(wt=new W_,S[yt]=wt);const bt=_.getCameraImage(yt);wt.sourceTexture=bt}}}}for(let Et=0;Et<V.length;Et++){const Lt=U[Et],jt=V[Et];Lt!==null&&jt!==void 0&&jt.update(Lt,Mt,p||f)}gt&&gt(st,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),b=null}const Nt=new ax;Nt.setAnimationLoop(Ct),this.setAnimationLoop=function(st){gt=st},this.dispose=function(){}}}const S2=new cn,fx=new ge;fx.set(-1,0,0,0,1,0,0,0,1);function y2(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,ex(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,D,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),_(M,S)):S.isMeshPhongMaterial?(c(M,S),v(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,L)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),N(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,w,D):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Zn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Zn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),D=w.envMap,L=w.envMapRotation;D&&(M.envMap.value=D,M.envMapRotation.value.setFromMatrix4(S2.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(fx),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,D){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=D*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function N(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function M2(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,D){const L=D.program;s.uniformBlockBinding(w,L)}function p(w,D){let L=l[w.id];L===void 0&&(b(w),L=v(w),l[w.id]=L,w.addEventListener("dispose",M));const V=D.program;s.updateUBOMapping(w,V);const U=t.render.frame;c[w.id]!==U&&(g(w),c[w.id]=U)}function v(w){const D=_();w.__bindingPointIndex=D;const L=r.createBuffer(),V=w.__size,U=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,V,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,L),L}function _(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const D=l[w.id],L=w.uniforms,V=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let U=0,B=L.length;U<B;U++){const T=Array.isArray(L[U])?L[U]:[L[U]];for(let I=0,q=T.length;I<q;I++){const z=T[I];if(y(z,U,I,V)===!0){const Y=z.__offset,rt=Array.isArray(z.value)?z.value:[z.value];let ft=0;for(let k=0;k<rt.length;k++){const O=rt[k],F=N(O);typeof O=="number"||typeof O=="boolean"?(z.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,Y+ft,z.__data)):O.isMatrix3?(z.__data[0]=O.elements[0],z.__data[1]=O.elements[1],z.__data[2]=O.elements[2],z.__data[3]=0,z.__data[4]=O.elements[3],z.__data[5]=O.elements[4],z.__data[6]=O.elements[5],z.__data[7]=0,z.__data[8]=O.elements[6],z.__data[9]=O.elements[7],z.__data[10]=O.elements[8],z.__data[11]=0):ArrayBuffer.isView(O)?z.__data.set(new O.constructor(O.buffer,O.byteOffset,z.__data.length)):(O.toArray(z.__data,ft),ft+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(w,D,L,V){const U=w.value,B=D+"_"+L;if(V[B]===void 0)return typeof U=="number"||typeof U=="boolean"?V[B]=U:ArrayBuffer.isView(U)?V[B]=U.slice():V[B]=U.clone(),!0;{const T=V[B];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return V[B]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(T.equals(U)===!1)return T.copy(U),!0}}return!1}function b(w){const D=w.uniforms;let L=0;const V=16;for(let B=0,T=D.length;B<T;B++){const I=Array.isArray(D[B])?D[B]:[D[B]];for(let q=0,z=I.length;q<z;q++){const Y=I[q],rt=Array.isArray(Y.value)?Y.value:[Y.value];for(let ft=0,k=rt.length;ft<k;ft++){const O=rt[ft],F=N(O),et=L%V,ut=et%F.boundary,xt=et+ut;L+=ut,xt!==0&&V-xt<F.storage&&(L+=V-xt),Y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=F.storage}}}const U=L%V;return U>0&&(L+=V-U),w.__size=L,w.__cache={},this}function N(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(D.boundary=16,D.storage=w.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",w),D}function M(w){const D=w.target;D.removeEventListener("dispose",M);const L=f.indexOf(D.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const E2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function b2(){return Bi===null&&(Bi=new U1(E2,16,16,Vs,Ta),Bi.name="DFG_LUT",Bi.minFilter=In,Bi.magFilter=In,Bi.wrapS=Ma,Bi.wrapT=Ma,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class T2{constructor(t={}){const{canvas:i=l1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ci}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const N=y,M=new Set([up,cp,lp]),S=new Set([ci,Yi,el,nl,rp,op]),w=new Uint32Array(4),D=new Int32Array(4),L=new Q;let V=null,U=null;const B=[],T=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let z=!1,Y=null;this._outputColorSpace=Si;let rt=0,ft=0,k=null,O=-1,F=null;const et=new ln,ut=new ln;let xt=null;const P=new Le(0);let K=0,gt=i.width,Ct=i.height,Nt=1,st=null,Mt=null;const Et=new ln(0,0,gt,Ct),Lt=new ln(0,0,gt,Ct);let jt=!1;const ie=new gp;let Me=!1,le=!1;const yt=new cn,wt=new Q,bt=new ln,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function oe(){return k===null?Nt:1}let H=s;function ue(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ip}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",te,!1),i.addEventListener("webglcontextcreationerror",he,!1),H===null){const j="webgl2";if(H=ue(j,A),H===null)throw ue(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ue("WebGLRenderer: "+A.message),A}let $t,fe,At,Oe,C,E,$,vt,Tt,Ut,Pt,ht,dt,Bt,Ht,zt,Ot,de,pe,Ee,X,Dt,mt;function Xt(){$t=new bT(H),$t.init(),X=new m2(H,$t),fe=new gT(H,$t,t,X),At=new d2(H,$t),fe.reversedDepthBuffer&&g&&At.buffers.depth.setReversed(!0),Oe=new RT(H),C=new $A,E=new p2(H,$t,At,C,fe,X,Oe),$=new ET(q),vt=new NM(H),Dt=new pT(H,vt),Tt=new TT(H,vt,Oe,Dt),Ut=new wT(H,Tt,vt,Dt,Oe),de=new CT(H,fe,E),Ht=new vT(C),Pt=new QA(q,$,$t,fe,Dt,Ht),ht=new y2(q,C),dt=new e2,Bt=new o2($t),Ot=new dT(q,$,At,Ut,b,m),zt=new h2(q,Ut,fe),mt=new M2(H,Oe,fe,At),pe=new mT(H,$t,Oe),Ee=new AT(H,$t,Oe),Oe.programs=Pt.programs,q.capabilities=fe,q.extensions=$t,q.properties=C,q.renderLists=dt,q.shadowMap=zt,q.state=At,q.info=Oe}Xt(),N!==ci&&(I=new NT(N,i.width,i.height,l,c));const It=new x2(q,H);this.xr=It,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=$t.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$t.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(A){A!==void 0&&(Nt=A,this.setSize(gt,Ct,!1))},this.getSize=function(A){return A.set(gt,Ct)},this.setSize=function(A,j,ot=!0){if(It.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=A,Ct=j,i.width=Math.floor(A*Nt),i.height=Math.floor(j*Nt),ot===!0&&(i.style.width=A+"px",i.style.height=j+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(gt*Nt,Ct*Nt).floor()},this.setDrawingBufferSize=function(A,j,ot){gt=A,Ct=j,Nt=ot,i.width=Math.floor(A*ot),i.height=Math.floor(j*ot),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(N===ci){Ue("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,j,ot,it){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,j,ot,it),At.viewport(et.copy(Et).multiplyScalar(Nt).round())},this.getScissor=function(A){return A.copy(Lt)},this.setScissor=function(A,j,ot,it){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,j,ot,it),At.scissor(ut.copy(Lt).multiplyScalar(Nt).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(A){At.setScissorTest(jt=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ot=!0){let it=0;if(A){let at=!1;if(k!==null){const Vt=k.texture.format;at=M.has(Vt)}if(at){const Vt=k.texture.type,Zt=S.has(Vt),Gt=Ot.getClearColor(),Jt=Ot.getClearAlpha(),Kt=Gt.r,ae=Gt.g,ve=Gt.b;Zt?(w[0]=Kt,w[1]=ae,w[2]=ve,w[3]=Jt,H.clearBufferuiv(H.COLOR,0,w)):(D[0]=Kt,D[1]=ae,D[2]=ve,D[3]=Jt,H.clearBufferiv(H.COLOR,0,D))}else it|=H.COLOR_BUFFER_BIT}j&&(it|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(it|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&H.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",te,!1),i.removeEventListener("webglcontextcreationerror",he,!1),Ot.dispose(),dt.dispose(),Bt.dispose(),C.dispose(),$.dispose(),Ut.dispose(),Dt.dispose(),mt.dispose(),Pt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Zr),It.removeEventListener("sessionend",Kr),Un.stop()};function Rt(A){A.preventDefault(),bv("WebGLRenderer: Context Lost."),z=!0}function te(){bv("WebGLRenderer: Context Restored."),z=!1;const A=Oe.autoReset,j=zt.enabled,ot=zt.autoUpdate,it=zt.needsUpdate,at=zt.type;Xt(),Oe.autoReset=A,zt.enabled=j,zt.autoUpdate=ot,zt.needsUpdate=it,zt.type=at}function he(A){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function an(A){const j=A.target;j.removeEventListener("dispose",an),Fe(j)}function Fe(A){ui(A),C.remove(A)}function ui(A){const j=C.get(A).programs;j!==void 0&&(j.forEach(function(ot){Pt.releaseProgram(ot)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ot,it,at,Vt){j===null&&(j=kt);const Zt=at.isMesh&&at.matrixWorld.determinant()<0,Gt=Da(A,j,ot,it,at);At.setMaterial(it,Zt);let Jt=ot.index,Kt=1;if(it.wireframe===!0){if(Jt=Tt.getWireframeAttribute(ot),Jt===void 0)return;Kt=2}const ae=ot.drawRange,ve=ot.attributes.position;let ne=ae.start*Kt,Pe=(ae.start+ae.count)*Kt;Vt!==null&&(ne=Math.max(ne,Vt.start*Kt),Pe=Math.min(Pe,(Vt.start+Vt.count)*Kt)),Jt!==null?(ne=Math.max(ne,0),Pe=Math.min(Pe,Jt.count)):ve!=null&&(ne=Math.max(ne,0),Pe=Math.min(Pe,ve.count));const tn=Pe-ne;if(tn<0||tn===1/0)return;Dt.setup(at,it,Gt,ot,Jt);let Ke,Ge=pe;if(Jt!==null&&(Ke=vt.get(Jt),Ge=Ee,Ge.setIndex(Ke)),at.isMesh)it.wireframe===!0?(At.setLineWidth(it.wireframeLinewidth*oe()),Ge.setMode(H.LINES)):Ge.setMode(H.TRIANGLES);else if(at.isLine){let Ve=it.linewidth;Ve===void 0&&(Ve=1),At.setLineWidth(Ve*oe()),at.isLineSegments?Ge.setMode(H.LINES):at.isLineLoop?Ge.setMode(H.LINE_LOOP):Ge.setMode(H.LINE_STRIP)}else at.isPoints?Ge.setMode(H.POINTS):at.isSprite&&Ge.setMode(H.TRIANGLES);if(at.isBatchedMesh)if($t.get("WEBGL_multi_draw"))Ge.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Ve=at._multiDrawStarts,Yt=at._multiDrawCounts,Ln=at._multiDrawCount,be=Jt?vt.get(Jt).bytesPerElement:1,xn=C.get(it).currentProgram.getUniforms();for(let Jn=0;Jn<Ln;Jn++)xn.setValue(H,"_gl_DrawID",Jn),Ge.render(Ve[Jn]/be,Yt[Jn])}else if(at.isInstancedMesh)Ge.renderInstances(ne,tn,at.count);else if(ot.isInstancedBufferGeometry){const Ve=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Yt=Math.min(ot.instanceCount,Ve);Ge.renderInstances(ne,tn,Yt)}else Ge.render(ne,tn)};function Kn(A,j,ot){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Ws(A,j,ot),A.side=fs,A.needsUpdate=!0,Ws(A,j,ot),A.side=ya):Ws(A,j,ot)}this.compile=function(A,j,ot=null){ot===null&&(ot=A),U=Bt.get(ot),U.init(j),T.push(U),ot.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),A!==ot&&A.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Vt=at.material;if(Vt)if(Array.isArray(Vt))for(let Zt=0;Zt<Vt.length;Zt++){const Gt=Vt[Zt];Kn(Gt,ot,at),it.add(Gt)}else Kn(Vt,ot,at),it.add(Vt)}),U=T.pop(),it},this.compileAsync=function(A,j,ot=null){const it=this.compile(A,j,ot);return new Promise(at=>{function Vt(){if(it.forEach(function(Zt){C.get(Zt).currentProgram.isReady()&&it.delete(Zt)}),it.size===0){at(A);return}setTimeout(Vt,10)}$t.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let ds=null;function jr(A){ds&&ds(A)}function Zr(){Un.stop()}function Kr(){Un.start()}const Un=new ax;Un.setAnimationLoop(jr),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){ds=A,It.setAnimationLoop(A),A===null?Un.stop():Un.start()},It.addEventListener("sessionstart",Zr),It.addEventListener("sessionend",Kr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(A,j);const ot=It.enabled===!0&&It.isPresenting===!0,it=I!==null&&(k===null||ot)&&I.begin(q,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(j),j=It.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,j,k),U=Bt.get(A,T.length),U.init(j),U.state.textureUnits=E.getTextureUnits(),T.push(U),yt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ie.setFromProjectionMatrix(yt,ki,j.reversedDepth),le=this.localClippingEnabled,Me=Ht.init(this.clippingPlanes,le),V=dt.get(A,B.length),V.init(),B.push(V),It.enabled===!0&&It.isPresenting===!0){const Zt=q.xr.getDepthSensingMesh();Zt!==null&&un(Zt,j,-1/0,q.sortObjects)}un(A,j,0,q.sortObjects),V.finish(),q.sortObjects===!0&&V.sort(st,Mt),Ft=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Ft&&Ot.addToRenderList(V,A),this.info.render.frame++,Me===!0&&Ht.beginShadows();const at=U.state.shadowsArray;if(zt.render(at,A,j),Me===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&I.hasRenderPass())===!1){const Zt=V.opaque,Gt=V.transmissive;if(U.setupLights(),j.isArrayCamera){const Jt=j.cameras;if(Gt.length>0)for(let Kt=0,ae=Jt.length;Kt<ae;Kt++){const ve=Jt[Kt];Qi(Zt,Gt,A,ve)}Ft&&Ot.render(A);for(let Kt=0,ae=Jt.length;Kt<ae;Kt++){const ve=Jt[Kt];An(V,A,ve,ve.viewport)}}else Gt.length>0&&Qi(Zt,Gt,A,j),Ft&&Ot.render(A),An(V,A,j)}k!==null&&ft===0&&(E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k)),it&&I.end(q),A.isScene===!0&&A.onAfterRender(q,A,j),Dt.resetDefaultState(),O=-1,F=null,T.pop(),T.length>0?(U=T[T.length-1],E.setTextureUnits(U.state.textureUnits),Me===!0&&Ht.setGlobalState(q.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?V=B[B.length-1]:V=null,Y!==null&&Y.renderEnd()};function un(A,j,ot,it){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){it&&bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Zt=Ut.update(A),Gt=A.material;Gt.visible&&V.push(A,Zt,Gt,ot,bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){const Zt=Ut.update(A),Gt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),bt.copy(A.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),bt.copy(Zt.boundingSphere.center)),bt.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(Gt)){const Jt=Zt.groups;for(let Kt=0,ae=Jt.length;Kt<ae;Kt++){const ve=Jt[Kt],ne=Gt[ve.materialIndex];ne&&ne.visible&&V.push(A,Zt,ne,ot,bt.z,ve)}}else Gt.visible&&V.push(A,Zt,Gt,ot,bt.z,null)}}const Vt=A.children;for(let Zt=0,Gt=Vt.length;Zt<Gt;Zt++)un(Vt[Zt],j,ot,it)}function An(A,j,ot,it){const{opaque:at,transmissive:Vt,transparent:Zt}=A;U.setupLightsView(ot),Me===!0&&Ht.setGlobalState(q.clippingPlanes,ot),it&&At.viewport(et.copy(it)),at.length>0&&Ca(at,j,ot),Vt.length>0&&Ca(Vt,j,ot),Zt.length>0&&Ca(Zt,j,ot),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Qi(A,j,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[it.id]===void 0){const ne=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[it.id]=new Wi(1,1,{generateMipmaps:!0,type:ne?Ta:ci,minFilter:Bs,samples:Math.max(4,fe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}const Vt=U.state.transmissionRenderTarget[it.id],Zt=it.viewport||et;Vt.setSize(Zt.z*q.transmissionResolutionScale,Zt.w*q.transmissionResolutionScale);const Gt=q.getRenderTarget(),Jt=q.getActiveCubeFace(),Kt=q.getActiveMipmapLevel();q.setRenderTarget(Vt),q.getClearColor(P),K=q.getClearAlpha(),K<1&&q.setClearColor(16777215,.5),q.clear(),Ft&&Ot.render(ot);const ae=q.toneMapping;q.toneMapping=Xi;const ve=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),U.setupLightsView(it),Me===!0&&Ht.setGlobalState(q.clippingPlanes,it),Ca(A,ot,it),E.updateMultisampleRenderTarget(Vt),E.updateRenderTargetMipmap(Vt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Pe=0,tn=j.length;Pe<tn;Pe++){const Ke=j[Pe],{object:Ge,geometry:Ve,material:Yt,group:Ln}=Ke;if(Yt.side===ya&&Ge.layers.test(it.layers)){const be=Yt.side;Yt.side=Zn,Yt.needsUpdate=!0,ul(Ge,ot,it,Ve,Yt,Ln),Yt.side=be,Yt.needsUpdate=!0,ne=!0}}ne===!0&&(E.updateMultisampleRenderTarget(Vt),E.updateRenderTargetMipmap(Vt))}q.setRenderTarget(Gt,Jt,Kt),q.setClearColor(P,K),ve!==void 0&&(it.viewport=ve),q.toneMapping=ae}function Ca(A,j,ot){const it=j.isScene===!0?j.overrideMaterial:null;for(let at=0,Vt=A.length;at<Vt;at++){const Zt=A[at],{object:Gt,geometry:Jt,group:Kt}=Zt;let ae=Zt.material;ae.allowOverride===!0&&it!==null&&(ae=it),Gt.layers.test(ot.layers)&&ul(Gt,j,ot,Jt,ae,Kt)}}function ul(A,j,ot,it,at,Vt){A.onBeforeRender(q,j,ot,it,at,Vt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(q,j,ot,it,A,Vt),at.transparent===!0&&at.side===ya&&at.forceSinglePass===!1?(at.side=Zn,at.needsUpdate=!0,q.renderBufferDirect(ot,j,it,at,A,Vt),at.side=fs,at.needsUpdate=!0,q.renderBufferDirect(ot,j,it,at,A,Vt),at.side=ya):q.renderBufferDirect(ot,j,it,at,A,Vt),A.onAfterRender(q,j,ot,it,at,Vt)}function Ws(A,j,ot){j.isScene!==!0&&(j=kt);const it=C.get(A),at=U.state.lights,Vt=U.state.shadowsArray,Zt=at.state.version,Gt=Pt.getParameters(A,at.state,Vt,j,ot,U.state.lightProbeGridArray),Jt=Pt.getProgramCacheKey(Gt);let Kt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,it.fog=j.fog;const ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=$.get(A.envMap||it.environment,ae),it.envMapRotation=it.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",an),Kt=new Map,it.programs=Kt);let ve=Kt.get(Jt);if(ve!==void 0){if(it.currentProgram===ve&&it.lightsStateVersion===Zt)return wa(A,Gt),ve}else Gt.uniforms=Pt.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,ot,Gt),A.onBeforeCompile(Gt,q),ve=Pt.acquireProgram(Gt,Jt),Kt.set(Jt,ve),it.uniforms=Gt.uniforms;const ne=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ne.clippingPlanes=Ht.uniform),wa(A,Gt),it.needsLights=ps(A),it.lightsStateVersion=Zt,it.needsLights&&(ne.ambientLightColor.value=at.state.ambient,ne.lightProbe.value=at.state.probe,ne.directionalLights.value=at.state.directional,ne.directionalLightShadows.value=at.state.directionalShadow,ne.spotLights.value=at.state.spot,ne.spotLightShadows.value=at.state.spotShadow,ne.rectAreaLights.value=at.state.rectArea,ne.ltc_1.value=at.state.rectAreaLTC1,ne.ltc_2.value=at.state.rectAreaLTC2,ne.pointLights.value=at.state.point,ne.pointLightShadows.value=at.state.pointShadow,ne.hemisphereLights.value=at.state.hemi,ne.directionalShadowMatrix.value=at.state.directionalShadowMatrix,ne.spotLightMatrix.value=at.state.spotLightMatrix,ne.spotLightMap.value=at.state.spotLightMap,ne.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=U.state.lightProbeGridArray.length>0,it.currentProgram=ve,it.uniformsList=null,ve}function Jr(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Qc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function wa(A,j){const ot=C.get(A);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Qr(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;L.setFromMatrixPosition(j.matrixWorld);for(let ot=0,it=A.length;ot<it;ot++){const at=A[ot];if(at.texture!==null&&at.boundingBox.containsPoint(L))return at}return null}function Da(A,j,ot,it,at){j.isScene!==!0&&(j=kt),E.resetTextureUnits();const Vt=j.fog,Zt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?j.environment:null,Gt=k===null?q.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ne.workingColorSpace,Jt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Kt=$.get(it.envMap||Zt,Jt),ae=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ve=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),ne=!!ot.morphAttributes.position,Pe=!!ot.morphAttributes.normal,tn=!!ot.morphAttributes.color;let Ke=Xi;it.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ke=q.toneMapping);const Ge=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ve=Ge!==void 0?Ge.length:0,Yt=C.get(it),Ln=U.state.lights;if(Me===!0&&(le===!0||A!==F)){const He=A===F&&it.id===O;Ht.setState(it,A,He)}let be=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ln.state.version||Yt.outputColorSpace!==Gt||at.isBatchedMesh&&Yt.batching===!1||!at.isBatchedMesh&&Yt.batching===!0||at.isBatchedMesh&&Yt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Yt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Yt.instancing===!1||!at.isInstancedMesh&&Yt.instancing===!0||at.isSkinnedMesh&&Yt.skinning===!1||!at.isSkinnedMesh&&Yt.skinning===!0||at.isInstancedMesh&&Yt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Yt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Yt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Yt.instancingMorph===!1&&at.morphTexture!==null||Yt.envMap!==Kt||it.fog===!0&&Yt.fog!==Vt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ht.numPlanes||Yt.numIntersection!==Ht.numIntersection)||Yt.vertexAlphas!==ae||Yt.vertexTangents!==ve||Yt.morphTargets!==ne||Yt.morphNormals!==Pe||Yt.morphColors!==tn||Yt.toneMapping!==Ke||Yt.morphTargetsCount!==Ve||!!Yt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Yt.__version=it.version);let xn=Yt.currentProgram;be===!0&&(xn=Ws(it,j,at),Y&&it.isNodeMaterial&&Y.onUpdateProgram(it,xn,Yt));let Jn=!1,Mi=!1,Qn=!1;const ke=xn.getUniforms(),en=Yt.uniforms;if(At.useProgram(xn.program)&&(Jn=!0,Mi=!0,Qn=!0),it.id!==O&&(O=it.id,Mi=!0),Yt.needsLights){const He=Qr(U.state.lightProbeGridArray,at);Yt.lightProbeGrid!==He&&(Yt.lightProbeGrid=He,Mi=!0)}if(Jn||F!==A){At.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ke.setValue(H,"projectionMatrix",A.projectionMatrix),ke.setValue(H,"viewMatrix",A.matrixWorldInverse);const Li=ke.map.cameraPosition;Li!==void 0&&Li.setValue(H,wt.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&ke.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ke.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Mi=!0,Qn=!0)}if(Yt.needsLights&&(Ln.state.directionalShadowMap.length>0&&ke.setValue(H,"directionalShadowMap",Ln.state.directionalShadowMap,E),Ln.state.spotShadowMap.length>0&&ke.setValue(H,"spotShadowMap",Ln.state.spotShadowMap,E),Ln.state.pointShadowMap.length>0&&ke.setValue(H,"pointShadowMap",Ln.state.pointShadowMap,E)),at.isSkinnedMesh){ke.setOptional(H,at,"bindMatrix"),ke.setOptional(H,at,"bindMatrixInverse");const He=at.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ke.setValue(H,"boneTexture",He.boneTexture,E))}at.isBatchedMesh&&(ke.setOptional(H,at,"batchingTexture"),ke.setValue(H,"batchingTexture",at._matricesTexture,E),ke.setOptional(H,at,"batchingIdTexture"),ke.setValue(H,"batchingIdTexture",at._indirectTexture,E),ke.setOptional(H,at,"batchingColorTexture"),at._colorsTexture!==null&&ke.setValue(H,"batchingColorTexture",at._colorsTexture,E));const Ei=ot.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&de.update(at,ot,xn),(Mi||Yt.receiveShadow!==at.receiveShadow)&&(Yt.receiveShadow=at.receiveShadow,ke.setValue(H,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&j.environment!==null&&(en.envMapIntensity.value=j.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=b2()),Mi){if(ke.setValue(H,"toneMappingExposure",q.toneMappingExposure),Yt.needsLights&&Na(en,Qn),Vt&&it.fog===!0&&ht.refreshFogUniforms(en,Vt),ht.refreshMaterialUniforms(en,it,Nt,Ct,U.state.transmissionRenderTarget[A.id]),Yt.needsLights&&Yt.lightProbeGrid){const He=Yt.lightProbeGrid;en.probesSH.value=He.texture,en.probesMin.value.copy(He.boundingBox.min),en.probesMax.value.copy(He.boundingBox.max),en.probesResolution.value.copy(He.resolution)}Qc.upload(H,Jr(Yt),en,E)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Qc.upload(H,Jr(Yt),en,E),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ke.setValue(H,"center",at.center),ke.setValue(H,"modelViewMatrix",at.modelViewMatrix),ke.setValue(H,"normalMatrix",at.normalMatrix),ke.setValue(H,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const He=it.uniformsGroups;for(let Li=0,La=He.length;Li<La;Li++){const ms=He[Li];mt.update(ms,xn),mt.bind(ms,xn)}}return xn}function Na(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function ps(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,j,ot){const it=C.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),C.get(A.texture).__webglTexture=j,C.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ot=C.get(A);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const Ua=H.createFramebuffer();this.setRenderTarget=function(A,j=0,ot=0){k=A,rt=j,ft=ot;let it=null,at=!1,Vt=!1;if(A){const Gt=C.get(A);if(Gt.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(H.FRAMEBUFFER,Gt.__webglFramebuffer),et.copy(A.viewport),ut.copy(A.scissor),xt=A.scissorTest,At.viewport(et),At.scissor(ut),At.setScissorTest(xt),O=-1;return}else if(Gt.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Gt.__hasExternalTextures)E.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ae=A.depthTexture;if(Gt.__boundDepthTexture!==ae){if(ae!==null&&C.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Vt=!0);const Kt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[j])?it=Kt[j][ot]:it=Kt[j],at=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?it=C.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?it=Kt[ot]:it=Kt,et.copy(A.viewport),ut.copy(A.scissor),xt=A.scissorTest}else et.copy(Et).multiplyScalar(Nt).floor(),ut.copy(Lt).multiplyScalar(Nt).floor(),xt=jt;if(ot!==0&&(it=Ua),At.bindFramebuffer(H.FRAMEBUFFER,it)&&At.drawBuffers(A,it),At.viewport(et),At.scissor(ut),At.setScissorTest(xt),at){const Gt=C.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,ot)}else if(Vt){const Gt=j;for(let Jt=0;Jt<A.textures.length;Jt++){const Kt=C.get(A.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,Kt.__webglTexture,ot,Gt)}}else if(A!==null&&ot!==0){const Gt=C.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,ot)}O=-1},this.readRenderTargetPixels=function(A,j,ot,it,at,Vt,Zt,Gt=0){if(!(A&&A.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt){At.bindFramebuffer(H.FRAMEBUFFER,Jt);try{const Kt=A.textures[Gt],ae=Kt.format,ve=Kt.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),!fe.textureFormatReadable(ae)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ve)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-it&&ot>=0&&ot<=A.height-at&&H.readPixels(j,ot,it,at,X.convert(ae),X.convert(ve),Vt)}finally{const Kt=k!==null?C.get(k).__webglFramebuffer:null;At.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,j,ot,it,at,Vt,Zt,Gt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Zt!==void 0&&(Jt=Jt[Zt]),Jt)if(j>=0&&j<=A.width-it&&ot>=0&&ot<=A.height-at){At.bindFramebuffer(H.FRAMEBUFFER,Jt);const Kt=A.textures[Gt],ae=Kt.format,ve=Kt.type;if(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),!fe.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.bufferData(H.PIXEL_PACK_BUFFER,Vt.byteLength,H.STREAM_READ),H.readPixels(j,ot,it,at,X.convert(ae),X.convert(ve),0);const Pe=k!==null?C.get(k).__webglFramebuffer:null;At.bindFramebuffer(H.FRAMEBUFFER,Pe);const tn=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await c1(H,tn,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Vt),H.deleteBuffer(ne),H.deleteSync(tn),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ot=0){const it=Math.pow(2,-ot),at=Math.floor(A.image.width*it),Vt=Math.floor(A.image.height*it),Zt=j!==null?j.x:0,Gt=j!==null?j.y:0;E.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ot,0,0,Zt,Gt,at,Vt),At.unbindTexture()};const dn=H.createFramebuffer(),fl=H.createFramebuffer();this.copyTextureToTexture=function(A,j,ot=null,it=null,at=0,Vt=0){let Zt,Gt,Jt,Kt,ae,ve,ne,Pe,tn;const Ke=A.isCompressedTexture?A.mipmaps[Vt]:A.image;if(ot!==null)Zt=ot.max.x-ot.min.x,Gt=ot.max.y-ot.min.y,Jt=ot.isBox3?ot.max.z-ot.min.z:1,Kt=ot.min.x,ae=ot.min.y,ve=ot.isBox3?ot.min.z:0;else{const en=Math.pow(2,-at);Zt=Math.floor(Ke.width*en),Gt=Math.floor(Ke.height*en),A.isDataArrayTexture?Jt=Ke.depth:A.isData3DTexture?Jt=Math.floor(Ke.depth*en):Jt=1,Kt=0,ae=0,ve=0}it!==null?(ne=it.x,Pe=it.y,tn=it.z):(ne=0,Pe=0,tn=0);const Ge=X.convert(j.format),Ve=X.convert(j.type);let Yt;j.isData3DTexture?(E.setTexture3D(j,0),Yt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Yt=H.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Yt=H.TEXTURE_2D),At.activeTexture(H.TEXTURE0),At.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),At.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),At.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const Ln=At.getParameter(H.UNPACK_ROW_LENGTH),be=At.getParameter(H.UNPACK_IMAGE_HEIGHT),xn=At.getParameter(H.UNPACK_SKIP_PIXELS),Jn=At.getParameter(H.UNPACK_SKIP_ROWS),Mi=At.getParameter(H.UNPACK_SKIP_IMAGES);At.pixelStorei(H.UNPACK_ROW_LENGTH,Ke.width),At.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ke.height),At.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),At.pixelStorei(H.UNPACK_SKIP_ROWS,ae),At.pixelStorei(H.UNPACK_SKIP_IMAGES,ve);const Qn=A.isDataArrayTexture||A.isData3DTexture,ke=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const en=C.get(A),Ei=C.get(j),He=C.get(en.__renderTarget),Li=C.get(Ei.__renderTarget);At.bindFramebuffer(H.READ_FRAMEBUFFER,He.__webglFramebuffer),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let La=0;La<Jt;La++)Qn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,C.get(A).__webglTexture,at,ve+La),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,C.get(j).__webglTexture,Vt,tn+La)),H.blitFramebuffer(Kt,ae,Zt,Gt,ne,Pe,Zt,Gt,H.DEPTH_BUFFER_BIT,H.NEAREST);At.bindFramebuffer(H.READ_FRAMEBUFFER,null),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||C.has(A)){const en=C.get(A),Ei=C.get(j);At.bindFramebuffer(H.READ_FRAMEBUFFER,dn),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,fl);for(let He=0;He<Jt;He++)Qn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,at,ve+He):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,at),ke?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ei.__webglTexture,Vt,tn+He):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ei.__webglTexture,Vt),at!==0?H.blitFramebuffer(Kt,ae,Zt,Gt,ne,Pe,Zt,Gt,H.COLOR_BUFFER_BIT,H.NEAREST):ke?H.copyTexSubImage3D(Yt,Vt,ne,Pe,tn+He,Kt,ae,Zt,Gt):H.copyTexSubImage2D(Yt,Vt,ne,Pe,Kt,ae,Zt,Gt);At.bindFramebuffer(H.READ_FRAMEBUFFER,null),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else ke?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Yt,Vt,ne,Pe,tn,Zt,Gt,Jt,Ge,Ve,Ke.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Yt,Vt,ne,Pe,tn,Zt,Gt,Jt,Ge,Ke.data):H.texSubImage3D(Yt,Vt,ne,Pe,tn,Zt,Gt,Jt,Ge,Ve,Ke):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Vt,ne,Pe,Zt,Gt,Ge,Ve,Ke.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Vt,ne,Pe,Ke.width,Ke.height,Ge,Ke.data):H.texSubImage2D(H.TEXTURE_2D,Vt,ne,Pe,Zt,Gt,Ge,Ve,Ke);At.pixelStorei(H.UNPACK_ROW_LENGTH,Ln),At.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be),At.pixelStorei(H.UNPACK_SKIP_PIXELS,xn),At.pixelStorei(H.UNPACK_SKIP_ROWS,Jn),At.pixelStorei(H.UNPACK_SKIP_IMAGES,Mi),Vt===0&&j.generateMipmaps&&H.generateMipmap(Yt),At.unbindTexture()},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){rt=0,ft=0,k=null,At.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const A2=1/3,Hi=1/6,ad=r=>Math.floor(r)|0,sd=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function R2(r=Math.random){const t=C2(r),i=new Float64Array(t).map(c=>sd[c%12*3]),s=new Float64Array(t).map(c=>sd[c%12*3+1]),l=new Float64Array(t).map(c=>sd[c%12*3+2]);return function(f,d,m){let p,v,_,g;const y=(f+d+m)*A2,b=ad(f+y),N=ad(d+y),M=ad(m+y),S=(b+N+M)*Hi,w=b-S,D=N-S,L=M-S,V=f-w,U=d-D,B=m-L;let T,I,q,z,Y,rt;V>=U?U>=B?(T=1,I=0,q=0,z=1,Y=1,rt=0):V>=B?(T=1,I=0,q=0,z=1,Y=0,rt=1):(T=0,I=0,q=1,z=1,Y=0,rt=1):U<B?(T=0,I=0,q=1,z=0,Y=1,rt=1):V<B?(T=0,I=1,q=0,z=0,Y=1,rt=1):(T=0,I=1,q=0,z=1,Y=1,rt=0);const ft=V-T+Hi,k=U-I+Hi,O=B-q+Hi,F=V-z+2*Hi,et=U-Y+2*Hi,ut=B-rt+2*Hi,xt=V-1+3*Hi,P=U-1+3*Hi,K=B-1+3*Hi,gt=b&255,Ct=N&255,Nt=M&255;let st=.6-V*V-U*U-B*B;if(st<0)p=0;else{const jt=gt+t[Ct+t[Nt]];st*=st,p=st*st*(i[jt]*V+s[jt]*U+l[jt]*B)}let Mt=.6-ft*ft-k*k-O*O;if(Mt<0)v=0;else{const jt=gt+T+t[Ct+I+t[Nt+q]];Mt*=Mt,v=Mt*Mt*(i[jt]*ft+s[jt]*k+l[jt]*O)}let Et=.6-F*F-et*et-ut*ut;if(Et<0)_=0;else{const jt=gt+z+t[Ct+Y+t[Nt+rt]];Et*=Et,_=Et*Et*(i[jt]*F+s[jt]*et+l[jt]*ut)}let Lt=.6-xt*xt-P*P-K*K;if(Lt<0)g=0;else{const jt=gt+1+t[Ct+1+t[Nt+1]];Lt*=Lt,g=Lt*Lt*(i[jt]*xt+s[jt]*P+l[jt]*K)}return 32*(p+v+_+g)}}function C2(r){const i=new Uint8Array(512);for(let s=0;s<512/2;s++)i[s]=s;for(let s=0;s<512/2-1;s++){const l=s+~~(r()*(256-s)),c=i[s];i[s]=i[l],i[l]=c}for(let s=256;s<512;s++)i[s]=i[s-256];return i}const Tn={charcoal:"#1a1a1a",charcoalDeep:"#101414",cream:"#f5f3ef",copper:"#c4713b",copperDark:"#8a5a2b",teal:"#69c9d2"};function w2(){const r=ye.useRef(null),t=ye.useRef(null),i=ye.useRef(0);return ye.useEffect(()=>{const s=r.current;if(!s)return;const l=R2(),c=new T1;c.background=new Le(Tn.charcoalDeep),c.fog=new pp(Tn.charcoalDeep,.018);const f=new li(60,s.clientWidth/s.clientHeight,.1,1e3);f.position.z=30;const d=new T2({antialias:!0,alpha:!0});d.setSize(s.clientWidth,s.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.toneMapping=ap,s.appendChild(d.domElement),t.current=d;const m=new AM(4210752,1.4);c.add(m);const p=new Jh(16777215,1.8);p.position.set(10,10,10),c.add(p);const v=new Jh(Tn.copper,1.6);v.position.set(-10,-5,5),c.add(v);const _=new Jh(Tn.teal,.9);_.position.set(0,12,-8),c.add(_);const g=new bM(Tn.copper,3,50);g.position.set(0,0,15),c.add(g);const y=new Zh({color:Tn.copper,metalness:.88,roughness:.32,emissive:Tn.copperDark,emissiveIntensity:.08}),b=new Zh({color:Tn.copperDark,metalness:.92,roughness:.28,emissive:Tn.charcoal,emissiveIntensity:.05}),N=new Zh({color:Tn.teal,metalness:.75,roughness:.4,emissive:Tn.teal,emissiveIntensity:.12});function M(z,Y){const rt=new K_,ft=z,k=z*.85,O=z*.3,F=z*.12;for(let ut=0;ut<=Y*2;ut++){const xt=ut/(Y*2)*Math.PI*2,P=ut%2===0?ft+F:k,K=Math.cos(xt)*P,gt=Math.sin(xt)*P;ut===0?rt.moveTo(K,gt):rt.lineTo(K,gt)}const et=new Jd;return et.absarc(0,0,O,0,Math.PI*2,!0),rt.holes.push(et),new xp(rt,{depth:z*.25,bevelEnabled:!0,bevelThickness:z*.05,bevelSize:z*.05,bevelSegments:2})}const S=[],w=650;for(let z=0;z<w;z++){const Y=.4+Math.random()*1.8,rt=Math.floor(8+Math.random()*16),ft=M(Y,rt),k=Math.random(),O=k>.82?N:k>.55?b:y,F=new ji(ft,O),et=Math.random()*Math.PI*2,ut=Math.acos(2*Math.random()-1),xt=5+Math.random()*35;F.position.x=xt*Math.sin(ut)*Math.cos(et),F.position.y=xt*Math.sin(ut)*Math.sin(et),F.position.z=xt*Math.cos(ut)*.6,F.rotation.x=Math.random()*Math.PI*2,F.rotation.y=Math.random()*Math.PI*2,F.rotation.z=Math.random()*Math.PI*2,c.add(F),S.push({mesh:F,speed:.1+Math.random()*.8,axis:new Q(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),noiseOffset:Math.random()*1e3})}const D={x:0,y:0},L={x:0,y:0},V=z=>{L.x=(z.clientX/window.innerWidth-.5)*2,L.y=(z.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",V);let U=.15;const B=()=>{U=.15+window.scrollY/window.innerHeight*.5};window.addEventListener("scroll",B);const T=new wM;function I(){i.current=requestAnimationFrame(I);const z=T.getElapsedTime();D.x+=(L.x-D.x)*.05,D.y+=(L.y-D.y)*.05,f.position.x=D.x*3,f.position.y=-D.y*2,f.lookAt(0,0,0),g.intensity=2.6+Math.sin(z*.8)*.6,S.forEach(Y=>{const rt=l(Y.noiseOffset,z*.1,0)*.02,ft=l(Y.noiseOffset+100,z*.1,0)*.02;Y.mesh.rotateOnAxis(Y.axis,(Y.speed*U+rt)*.01),Y.mesh.rotation.x+=ft*.005,Y.mesh.rotation.y+=rt*.005}),c.rotation.y=z*.018,d.render(c,f)}I();const q=()=>{if(!s)return;const z=s.clientWidth,Y=s.clientHeight;f.aspect=z/Y,f.updateProjectionMatrix(),d.setSize(z,Y)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(i.current),window.removeEventListener("mousemove",V),window.removeEventListener("scroll",B),window.removeEventListener("resize",q),d.dispose(),s.contains(d.domElement)&&s.removeChild(d.domElement)}},[]),Z.jsx("div",{"code-path":"src/sections/GoldenGears.tsx:217:5",ref:r,"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})}const D2=["Electricidad","Mantenimiento","Automatización","Instrumentación","TI & IoT","Suministros"];function N2(){const r=ye.useRef(null);return ye.useEffect(()=>{const t=r.current;if(!t)return;t.querySelectorAll(".hero-animate").forEach((s,l)=>{const c=s;c.style.opacity="0",c.style.transform="translateY(20px)",c.style.transition=`opacity 0.6s ease-out ${l*.2}s, transform 0.6s ease-out ${l*.2}s`,setTimeout(()=>{c.style.opacity="1",c.style.transform="translateY(0)"},100)})},[]),Z.jsxs("section",{"code-path":"src/sections/HeroSection.tsx:29:5",id:"hero",className:"relative min-h-screen overflow-hidden",style:{backgroundColor:Tn.charcoalDeep,clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)"},children:[Z.jsx(w2,{"code-path":"src/sections/HeroSection.tsx:37:7"}),Z.jsx("div",{"code-path":"src/sections/HeroSection.tsx:39:7",className:"absolute inset-0 z-[1]",style:{background:"linear-gradient(to bottom, rgba(16,20,20,0.25) 0%, rgba(26,26,26,0.72) 100%), radial-gradient(circle at 50% 42%, rgba(196,113,59,0.14), transparent 48%), radial-gradient(circle at 78% 18%, rgba(105,201,210,0.08), transparent 36%)"}}),Z.jsxs("div",{"code-path":"src/sections/HeroSection.tsx:47:7",ref:r,className:"relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 pb-24 text-center",children:[Z.jsx("p",{"code-path":"src/sections/HeroSection.tsx:51:9",className:"hero-animate mb-6 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"IMANTEK S.A.S. · NIT: 902069790-1"}),Z.jsx("h1",{"code-path":"src/sections/HeroSection.tsx:58:9",className:"hero-animate mb-6 max-w-[800px] text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:text-[52px]",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"Ingeniería y servicios técnicos integrales para operaciones seguras y confiables"}),Z.jsx("p",{"code-path":"src/sections/HeroSection.tsx:65:9",className:"hero-animate mb-8 max-w-[600px] text-base leading-relaxed sm:text-lg",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580"},children:"Servicios técnicos integrales para operaciones seguras y confiables"}),Z.jsx("div",{"code-path":"src/sections/HeroSection.tsx:73:9",className:"hero-animate mb-10 flex flex-wrap justify-center gap-3",children:D2.map(t=>Z.jsx("span",{"code-path":"src/sections/HeroSection.tsx:75:13",className:"border px-4 py-2 text-xs uppercase tracking-[1.5px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#cccccc",borderColor:"#555555"},children:t},t))}),Z.jsx("a",{"code-path":"src/sections/HeroSection.tsx:90:9",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"hero-animate px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#d4854a]",style:{fontFamily:"'IBM Plex Mono', monospace",backgroundColor:"#c4713b"},children:"Solicitar cotización"}),Z.jsx("div",{"code-path":"src/sections/HeroSection.tsx:104:9",className:"hero-animate absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center",children:Z.jsx("div",{"code-path":"src/sections/HeroSection.tsx:105:11",className:"relative h-10 w-[1px] overflow-hidden",style:{backgroundColor:"rgba(255,255,255,0.4)"},children:Z.jsx("div",{"code-path":"src/sections/HeroSection.tsx:106:13",className:"absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full",style:{backgroundColor:"rgba(255,255,255,0.6)",left:"50%",animation:"scrollBounce 2s ease-in-out infinite"}})})})]}),Z.jsx("style",{"code-path":"src/sections/HeroSection.tsx:118:7",children:`
        @keyframes scrollBounce {
          0%, 100% { top: 0; opacity: 0.6; }
          50% { top: 24px; opacity: 0; }
        }
      `})]})}function Ra(r={}){const t=ye.useRef(null);return ye.useEffect(()=>{const i=t.current;if(!i)return;const{threshold:s=.15,delay:l=0,duration:c=.6,translateY:f=40,translateX:d=0,scale:m=1}=r;i.style.opacity="0",i.style.transform=`translateY(${f}px) translateX(${d}px) scale(${m})`,i.style.transition=`opacity ${c}s ease-out ${l}s, transform ${c}s ease-out ${l}s`,i.style.willChange="transform, opacity";const p=new IntersectionObserver(v=>{v.forEach(_=>{_.isIntersecting&&(i.style.opacity="1",i.style.transform="translateY(0) translateX(0) scale(1)",i.addEventListener("transitionend",()=>{i.style.willChange="auto"},{once:!0}),p.unobserve(i))})},{threshold:s});return p.observe(i),()=>{p.disconnect()}},[]),t}const U2="./images/";function hx(r){return`${U2}${r}`}function dx(r){const t=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${Tn.charcoalDeep}"/><stop offset="55%" stop-color="${Tn.charcoal}"/><stop offset="100%" stop-color="${Tn.copperDark}"/></linearGradient></defs><rect width="1200" height="750" fill="url(#g)"/><circle cx="980" cy="120" r="180" fill="${Tn.teal}" opacity="0.12"/><circle cx="180" cy="620" r="220" fill="${Tn.copper}" opacity="0.16"/><text x="600" y="390" fill="${Tn.cream}" font-family="Arial,sans-serif" font-size="34" text-anchor="middle" letter-spacing="6">${r.toUpperCase()}</text></svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t)}`}const L2=hx("about-image.jpg");function O2(){const[r,t]=ye.useState(L2),i=Ra({translateX:-30,duration:.7}),s=Ra({translateX:30,duration:.7,delay:.15});return Z.jsx("section",{"code-path":"src/sections/AboutSection.tsx:20:5",id:"about",className:"relative",style:{backgroundColor:"#f5f3ef",marginTop:"-80px",paddingTop:"160px",paddingBottom:"100px"},children:Z.jsx("div",{"code-path":"src/sections/AboutSection.tsx:30:7",className:"mx-auto max-w-[1200px] px-6",children:Z.jsxs("div",{"code-path":"src/sections/AboutSection.tsx:31:9",className:"grid items-center gap-16 md:grid-cols-[55%_45%]",children:[Z.jsxs("div",{"code-path":"src/sections/AboutSection.tsx:33:11",ref:i,children:[Z.jsx("p",{"code-path":"src/sections/AboutSection.tsx:34:13",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Sobre nosotros"}),Z.jsx("h2",{"code-path":"src/sections/AboutSection.tsx:41:13",className:"mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Impulsando operaciones con criterio técnico"}),Z.jsx("p",{"code-path":"src/sections/AboutSection.tsx:48:13",className:"mb-8 text-base leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"IMANTEK es una empresa colombiana especializada en ingeniería, mantenimiento y tecnología industrial. Acompañamos a empresas, comercios y clientes residenciales con soluciones técnicas de alto impacto. Respondemos ante cada desafío con criterio, seguridad y ejecución en campo. Nuestro equipo combina experiencia práctica y conocimiento técnico para garantizar operaciones continuas y confiables."}),Z.jsxs("div",{"code-path":"src/sections/AboutSection.tsx:56:13",className:"flex flex-col gap-6 sm:flex-row",children:[Z.jsxs("div",{"code-path":"src/sections/AboutSection.tsx:57:15",className:"flex-1 border p-6",style:{borderColor:"#d4d0ca"},children:[Z.jsx("h3",{"code-path":"src/sections/AboutSection.tsx:58:17",className:"mb-3 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#c4713b"},children:"Misión"}),Z.jsx("p",{"code-path":"src/sections/AboutSection.tsx:64:17",className:"text-sm leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:"Brindar servicios técnicos integrales con criterio, seguridad y ejecución eficaz, siendo el aliado estratégico de nuestros clientes en el mantenimiento y la operación de sus activos críticos."})]}),Z.jsxs("div",{"code-path":"src/sections/AboutSection.tsx:72:15",className:"flex-1 border p-6",style:{borderColor:"#d4d0ca"},children:[Z.jsx("h3",{"code-path":"src/sections/AboutSection.tsx:73:17",className:"mb-3 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#c4713b"},children:"Visión"}),Z.jsx("p",{"code-path":"src/sections/AboutSection.tsx:79:17",className:"text-sm leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:"Ser reconocidos como la empresa de servicios técnicos de mayor confiabilidad y alcance en Colombia, líderes en la integración de mantenimiento, automatización y tecnología."})]})]})]}),Z.jsx("div",{"code-path":"src/sections/AboutSection.tsx:90:11",ref:s,children:Z.jsx("img",{"code-path":"src/sections/AboutSection.tsx:91:13",src:r,alt:"Ingeniero industrial IMANTEK en instalación",loading:"lazy",decoding:"async",onError:()=>t(dx("IMANTEK")),className:"block min-h-[320px] w-full object-cover sm:min-h-0",style:{border:"2px solid #d4d0ca",aspectRatio:"3/4"}})})]})})})}const P2=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z2=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),y_=r=>{const t=z2(r);return t.charAt(0).toUpperCase()+t.slice(1)},px=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),I2=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var F2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const B2=ye.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},m)=>ye.createElement("svg",{ref:m,...F2,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:px("lucide",l),...!c&&!I2(d)&&{"aria-hidden":"true"},...d},[...f.map(([p,v])=>ye.createElement(p,v)),...Array.isArray(c)?c:[c]]));const yi=(r,t)=>{const i=ye.forwardRef(({className:s,...l},c)=>ye.createElement(B2,{ref:c,iconNode:t,className:px(`lucide-${P2(y_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=y_(r),i};const H2=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],G2=yi("building-2",H2);const V2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mx=yi("compass",V2);const k2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],X2=yi("cpu",k2);const W2=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],q2=yi("gauge",W2);const Y2=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],j2=yi("hammer",Y2);const Z2=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],K2=yi("hard-hat",Z2);const J2=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m14.305 7.53.923-.382",key:"1mlnsw"}],["path",{d:"m15.228 4.852-.923-.383",key:"82mpwg"}],["path",{d:"m16.852 3.228-.383-.924",key:"ln4sir"}],["path",{d:"m16.852 8.772-.383.923",key:"1dejw0"}],["path",{d:"m19.148 3.228.383-.924",key:"192kgf"}],["path",{d:"m19.53 9.696-.382-.924",key:"fiavlr"}],["path",{d:"m20.772 4.852.924-.383",key:"1j8mgp"}],["path",{d:"m20.772 7.148.924.383",key:"zix9be"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],Q2=yi("monitor-cog",J2);const $2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],t3=yi("panels-top-left",$2);const e3=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],n3=yi("puzzle",e3);const i3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],a3=yi("shield",i3);const s3=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],r3=yi("wrench",s3);const o3=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],l3=yi("zap",o3),c3=[{icon:mx,title:"Servicios de Ingeniería",items:["Ingeniería eléctrica","Ingeniería electrónica","Ingeniería mecánica","Ingeniería industrial","Consultoría en ingeniería","Diseño y planeación de proyectos industriales","Supervisión e interventoría técnica"]},{icon:X2,title:"Automatización Industrial",items:["Automatización de procesos industriales","Programación de PLC","Desarrollo de interfaces HMI","Implementación de sistemas SCADA","Integración de sistemas industriales","Control e instrumentación industrial"]},{icon:l3,title:"Instalaciones Eléctricas",items:["Instalaciones eléctricas industriales","Instalaciones eléctricas comerciales","Instalaciones eléctricas residenciales","Montajes eléctricos","Redes eléctricas industriales","Diseño y construcción de sistemas eléctricos"]},{icon:t3,title:"Tableros Eléctricos",items:["Diseño de tableros eléctricos","Fabricación de tableros eléctricos","Armado de tableros eléctricos","Instalación de tableros eléctricos","Adecuación y modernización de tableros eléctricos"]},{icon:r3,title:"Mantenimiento Industrial",items:["Mantenimiento preventivo","Mantenimiento correctivo","Mantenimiento predictivo","Diagnóstico de fallas","Reparación de maquinaria industrial","Soporte técnico especializado"]},{icon:q2,title:"Instrumentación y Control",items:["Calibración de instrumentos","Puesta en marcha de sistemas","Optimización de procesos","Configuración de equipos de control","Instrumentación industrial"]},{icon:j2,title:"Metalmecánica",items:["Fabricación de estructuras metálicas","Montaje de estructuras metálicas","Mantenimiento de estructuras metálicas","Trabajos de soldadura especializada"]},{icon:G2,title:"Obras Industriales",items:["Montajes industriales","Obras civiles relacionadas con proyectos industriales","Adecuaciones técnicas para plantas industriales"]},{icon:Q2,title:"Tecnología Industrial",items:["Integración tecnológica","Desarrollo de soluciones industriales","Implementación de sistemas inteligentes para procesos productivos"]}];function u3(){const r=Ra({translateY:30}),t=ye.useRef(null);return ye.useEffect(()=>{const i=t.current;if(!i)return;i.querySelectorAll(".service-card").forEach(c=>{const f=c;f.style.opacity="0",f.style.transform="translateY(40px)"});const l=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(f.target.querySelectorAll(".service-card").forEach((m,p)=>{const v=m;v.style.transition=`opacity 0.6s ease-out ${p*.1}s, transform 0.6s ease-out ${p*.1}s`,v.style.opacity="1",v.style.transform="translateY(0)"}),l.unobserve(f.target))})},{threshold:.1});return l.observe(i),()=>l.disconnect()},[]),Z.jsx("section",{"code-path":"src/sections/ServicesSection.tsx:145:5",id:"servicios",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src/sections/ServicesSection.tsx:150:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src/sections/ServicesSection.tsx:152:9",ref:r,children:[Z.jsx("p",{"code-path":"src/sections/ServicesSection.tsx:153:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Lo que hacemos"}),Z.jsx("h2",{"code-path":"src/sections/ServicesSection.tsx:159:11",className:"mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Portafolio de servicios"}),Z.jsx("p",{"code-path":"src/sections/ServicesSection.tsx:165:11",className:"mb-12 max-w-[700px] leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"Ofrecemos una solución técnica completa: desde el diagnóstico hasta la ejecución y el mantenimiento continuo, bajo un mismo equipo de confianza."})]}),Z.jsx("div",{"code-path":"src/sections/ServicesSection.tsx:174:9",ref:t,className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:c3.map(i=>{const s=i.icon;return Z.jsxs("div",{"code-path":"src/sections/ServicesSection.tsx:178:15",className:"service-card group border p-8 transition-all duration-300",style:{borderColor:"#d4d0ca",backgroundColor:"transparent"},onMouseEnter:l=>{l.currentTarget.style.borderColor="#c4713b",l.currentTarget.style.backgroundColor="rgba(196, 113, 59, 0.04)"},onMouseLeave:l=>{l.currentTarget.style.borderColor="#d4d0ca",l.currentTarget.style.backgroundColor="transparent"},children:[Z.jsx("div",{"code-path":"src/sections/ServicesSection.tsx:195:17",className:"mb-5 flex h-12 w-12 items-center justify-center border transition-all duration-300 group-hover:bg-[rgba(196,113,59,0.1)]",style:{borderColor:"#c4713b"},children:Z.jsx(s,{"code-path":"src/sections/ServicesSection.tsx:199:19",size:24,style:{color:"#c4713b"},strokeWidth:1.5})}),Z.jsx("h3",{"code-path":"src/sections/ServicesSection.tsx:203:17",className:"mb-3 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:i.title}),Z.jsx("ul",{"code-path":"src/sections/ServicesSection.tsx:211:17",className:"space-y-2",children:i.items.map(l=>Z.jsxs("li",{"code-path":"src/sections/ServicesSection.tsx:213:21",className:"flex items-start gap-2 leading-snug",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"14.5px"},children:[Z.jsx("span",{"code-path":"src/sections/ServicesSection.tsx:218:23",className:"mt-[7px] h-1 w-1 flex-shrink-0 rounded-full",style:{backgroundColor:"#c4713b"}}),l]},l))})]},i.title)})})]})})}const f3=[{number:"01",title:"Diagnóstico",description:"Análisis exhaustivo del sistema o activo. Identificamos el problema con precisión antes de proponer cualquier intervención."},{number:"02",title:"Propuesta",description:"Presentamos un plan de acción claro con alcance, recursos, tiempo y costo definidos para la aprobación del cliente."},{number:"03",title:"Ejecución",description:"Intervención en campo con personal calificado, equipos adecuados y protocolos de seguridad industrial vigentes."},{number:"04",title:"Entrega y Seguimiento",description:"Informe técnico detallado, garantía sobre el trabajo realizado y acompañamiento post-servicio."}];function h3(){const r=Ra({translateY:30}),t=ye.useRef(null),i=ye.useRef(null);return ye.useEffect(()=>{const s=t.current,l=i.current;if(!s||!l)return;const c=s.querySelectorAll(".method-step");c.forEach(d=>{const m=d;m.style.opacity="0",m.style.transform="translateY(30px)"}),l.style.transform="scaleX(0)",l.style.transformOrigin="left";const f=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&(setTimeout(()=>{l.style.transition="transform 0.8s ease-out",l.style.transform="scaleX(1)"},300),c.forEach((p,v)=>{const _=p;setTimeout(()=>{_.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",_.style.opacity="1",_.style.transform="translateY(0)"},v*150)}),f.unobserve(m.target))})},{threshold:.2});return f.observe(s),()=>f.disconnect()},[]),Z.jsx("section",{"code-path":"src/sections/MethodologySection.tsx:79:5",id:"metodologia",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src/sections/MethodologySection.tsx:84:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src/sections/MethodologySection.tsx:86:9",ref:r,className:"mb-12",children:[Z.jsx("p",{"code-path":"src/sections/MethodologySection.tsx:87:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Cómo trabajamos"}),Z.jsx("h2",{"code-path":"src/sections/MethodologySection.tsx:93:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Nuestra metodología"})]}),Z.jsxs("div",{"code-path":"src/sections/MethodologySection.tsx:102:9",ref:t,className:"relative",children:[Z.jsx("div",{"code-path":"src/sections/MethodologySection.tsx:104:11",ref:i,className:"absolute left-0 right-0 top-[30px] hidden h-[1px] md:block",style:{backgroundColor:"#d4d0ca"}}),Z.jsx("div",{"code-path":"src/sections/MethodologySection.tsx:110:11",className:"grid gap-10 md:grid-cols-4 md:gap-6",children:f3.map(s=>Z.jsxs("div",{"code-path":"src/sections/MethodologySection.tsx:112:15",className:"method-step",children:[Z.jsx("div",{"code-path":"src/sections/MethodologySection.tsx:114:17",className:"mb-4 text-5xl",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:s.number}),Z.jsx("h3",{"code-path":"src/sections/MethodologySection.tsx:122:17",className:"mb-3 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:s.title}),Z.jsx("p",{"code-path":"src/sections/MethodologySection.tsx:130:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:s.description})]},s.number))})]})]})})}const Wc=[{name:"Industrial & Logístico",description:"Soluciones de ingeniería y mantenimiento preventivo/correctivo diseñadas para garantizar la continuidad operativa.",items:["Plantas de producción","Fábricas","Centros de distribución","Bodegas"],image:"sector-industrial.jpg",layout:"large"},{name:"Comercial & Retail",description:"Instalaciones eléctricas, climatización y mantenimiento de infraestructura orientados a crear entornos confortables y seguros.",items:["Centros comerciales","Hoteles","Restaurantes"],image:"sector-commercial.jpg",layout:"small"},{name:"Salud & Corporativo",description:"Soporte técnico especializado para infraestructuras con exigencias normativas estrictas.",items:["Clínicas","Laboratorios","Edificios corporativos"],image:"sector-health.jpg",layout:"small"},{name:"Residencial & Copropiedades",description:"Servicios preventivos programados y atención técnica oportuna para la conservación física.",items:["Conjuntos residenciales","Condominios","Zonas comunes"],image:"sector-residential.jpg",layout:"large"}];function d3(){const r=Ra({translateY:30}),t=ye.useRef(null);return ye.useEffect(()=>{const i=t.current;if(!i)return;i.querySelectorAll(".sector-card").forEach((c,f)=>{const d=c;d.style.opacity="0",d.style.transform=f%2===0?"translateX(-30px)":"translateX(30px)"});const l=new IntersectionObserver(c=>{c.forEach(f=>{f.isIntersecting&&(f.target.querySelectorAll(".sector-card").forEach((m,p)=>{const v=m;setTimeout(()=>{v.style.transition="opacity 0.7s ease-out, transform 0.7s ease-out",v.style.opacity="1",v.style.transform="translateX(0)"},p*120)}),l.unobserve(f.target))})},{threshold:.15});return l.observe(i),()=>l.disconnect()},[]),Z.jsx("section",{"code-path":"src/sections/SectorsSection.tsx:76:5",id:"sectores",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:81:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:83:9",ref:r,className:"mb-14",children:[Z.jsx("p",{"code-path":"src/sections/SectorsSection.tsx:84:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Mercado"}),Z.jsx("h2",{"code-path":"src/sections/SectorsSection.tsx:90:11",className:"mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Sectores que atendemos"}),Z.jsx("p",{"code-path":"src/sections/SectorsSection.tsx:96:11",className:"max-w-[700px] leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"Adaptamos nuestras soluciones técnicas a las exigencias operativas, de seguridad y normativas de cada sector económico."})]}),Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:105:9",ref:t,className:"flex flex-col gap-6",children:[Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:107:11",className:"flex flex-col gap-6 md:flex-row",children:[Z.jsx("div",{"code-path":"src/sections/SectorsSection.tsx:108:13",className:"sector-card md:w-[60%]",children:Z.jsx(qc,{"code-path":"src/sections/SectorsSection.tsx:109:15",sector:Wc[0]})}),Z.jsx("div",{"code-path":"src/sections/SectorsSection.tsx:111:13",className:"sector-card md:w-[40%]",children:Z.jsx(qc,{"code-path":"src/sections/SectorsSection.tsx:112:15",sector:Wc[1]})})]}),Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:117:11",className:"flex flex-col gap-6 md:flex-row",children:[Z.jsx("div",{"code-path":"src/sections/SectorsSection.tsx:118:13",className:"sector-card md:w-[40%]",children:Z.jsx(qc,{"code-path":"src/sections/SectorsSection.tsx:119:15",sector:Wc[2]})}),Z.jsx("div",{"code-path":"src/sections/SectorsSection.tsx:121:13",className:"sector-card md:w-[60%]",children:Z.jsx(qc,{"code-path":"src/sections/SectorsSection.tsx:122:15",sector:Wc[3]})})]})]})]})})}function qc({sector:r}){const[t,i]=ye.useState(hx(r.image));return Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:135:5",className:"group h-full",children:[Z.jsx("div",{"code-path":"src/sections/SectorsSection.tsx:136:7",className:"min-h-[210px] overflow-hidden sm:min-h-0",style:{aspectRatio:"16/10"},children:Z.jsx("img",{"code-path":"src/sections/SectorsSection.tsx:137:9",src:t,alt:r.name,loading:"lazy",decoding:"async",onError:()=>i(dx(r.name)),className:"block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"})}),Z.jsxs("div",{"code-path":"src/sections/SectorsSection.tsx:148:7",className:"border border-t-0 p-6",style:{borderColor:"#d4d0ca"},children:[Z.jsx("h3",{"code-path":"src/sections/SectorsSection.tsx:149:9",className:"mb-2 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:r.name}),Z.jsx("p",{"code-path":"src/sections/SectorsSection.tsx:155:9",className:"mb-4 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:r.description}),Z.jsx("ul",{"code-path":"src/sections/SectorsSection.tsx:161:9",className:"flex flex-wrap gap-x-4 gap-y-2",children:r.items.map(s=>Z.jsxs("li",{"code-path":"src/sections/SectorsSection.tsx:163:13",className:"flex items-center gap-2 text-sm",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#8a8580"},children:[Z.jsx("span",{"code-path":"src/sections/SectorsSection.tsx:168:15",className:"inline-block h-1 w-1 rounded-full",style:{backgroundColor:"#c4713b"}}),s]},s))})]})]})}const p3=[{icon:n3,title:"Solución 360°",description:"Un solo proveedor para múltiples disciplinas técnicas: eléctrica, mecánica, TI e instrumentación."},{icon:K2,title:"Ejecución en campo",description:"Presencia directa en el lugar de trabajo con técnicos calificados y equipamiento adecuado."},{icon:a3,title:"Seguridad primero",description:"Protocolos de seguridad industrial en cada intervención. Cumplimiento normativo garantizado."},{icon:mx,title:"Criterio técnico",description:"Diagnóstico preciso antes de actuar. Soluciones sostenibles, no parches temporales."}],m3=[{title:"Creciente demanda",text:"La industria y el comercio en Colombia incrementan su inversión en mantenimiento preventivo y automatización para reducir costos operativos y tiempos de parada."},{title:"Transformación digital",text:"Las empresas buscan integrar IoT, SCADA y automatización para mejorar su competitividad, creando oportunidad para proveedores con capacidad multidisciplinaria."},{title:"Déficit de proveedores integrales",text:"La mayoría de los proveedores son especialistas en una sola disciplina. IMANTEK cubre múltiples frentes, reduciendo la complejidad logística del cliente."},{title:"Eficiencia energética",text:"La transición hacia energías más eficientes abre nuevas verticales de negocio donde IMANTEK puede ofrecer soluciones de alto valor."}];function g3(){const r=Ra({translateY:30}),t=ye.useRef(null),i=ye.useRef(null);return ye.useEffect(()=>{const s=t.current;if(!s)return;s.querySelectorAll(".diff-card").forEach(f=>{const d=f;d.style.opacity="0",d.style.transform="translateY(30px)"});const c=new IntersectionObserver(f=>{f.forEach(d=>{d.isIntersecting&&(d.target.querySelectorAll(".diff-card").forEach((p,v)=>{const _=p;setTimeout(()=>{_.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",_.style.opacity="1",_.style.transform="translateY(0)"},v*120)}),c.unobserve(d.target))})},{threshold:.15});return c.observe(s),()=>c.disconnect()},[]),ye.useEffect(()=>{const s=i.current;if(!s)return;s.querySelectorAll(".opp-block").forEach(f=>{const d=f;d.style.opacity="0",d.style.transform="translateY(30px)"});const c=new IntersectionObserver(f=>{f.forEach(d=>{d.isIntersecting&&(d.target.querySelectorAll(".opp-block").forEach((p,v)=>{const _=p;setTimeout(()=>{_.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",_.style.opacity="1",_.style.transform="translateY(0)"},v*80)}),c.unobserve(d.target))})},{threshold:.1});return c.observe(s),()=>c.disconnect()},[]),Z.jsx("section",{"code-path":"src/sections/WhyUsSection.tsx:123:5",id:"porque",style:{backgroundColor:"#1a1a1a",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src/sections/WhyUsSection.tsx:127:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsx("div",{"code-path":"src/sections/WhyUsSection.tsx:129:9",ref:r,className:"mb-12",children:Z.jsx("h2",{"code-path":"src/sections/WhyUsSection.tsx:130:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"¿Por qué elegir IMANTEK?"})}),Z.jsx("div",{"code-path":"src/sections/WhyUsSection.tsx:138:9",ref:t,className:"mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:p3.map(s=>{const l=s.icon;return Z.jsxs("div",{"code-path":"src/sections/WhyUsSection.tsx:142:15",className:"diff-card border p-8 transition-all duration-300 hover:border-[#c4713b]",style:{borderColor:"#333333"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="rgba(196, 113, 59, 0.05)"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="transparent"},children:[Z.jsx(l,{"code-path":"src/sections/WhyUsSection.tsx:153:17",size:40,style:{color:"#c4713b"},strokeWidth:1.2}),Z.jsx("h3",{"code-path":"src/sections/WhyUsSection.tsx:154:17",className:"mb-3 mt-5 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:s.title}),Z.jsx("p",{"code-path":"src/sections/WhyUsSection.tsx:160:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"15px"},children:s.description})]},s.title)})}),Z.jsxs("div",{"code-path":"src/sections/WhyUsSection.tsx:172:9",className:"border-t pt-16",style:{borderColor:"#333333"},children:[Z.jsx("p",{"code-path":"src/sections/WhyUsSection.tsx:176:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Contexto estratégico"}),Z.jsx("h3",{"code-path":"src/sections/WhyUsSection.tsx:182:11",className:"mb-8 text-2xl font-medium uppercase sm:text-3xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"Oportunidad de mercado"}),Z.jsx("div",{"code-path":"src/sections/WhyUsSection.tsx:189:11",ref:i,className:"grid gap-8 sm:grid-cols-2",children:m3.map(s=>Z.jsxs("div",{"code-path":"src/sections/WhyUsSection.tsx:191:15",className:"opp-block",children:[Z.jsx("h4",{"code-path":"src/sections/WhyUsSection.tsx:192:17",className:"mb-2 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:s.title}),Z.jsx("p",{"code-path":"src/sections/WhyUsSection.tsx:198:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"15px"},children:s.text})]},s.title))})]})]})})}const v3=[{year:"2025",title:"Consolidación",items:["Estructurar portafolio de servicios completo","Captar primeros clientes ancla industriales y comerciales","Establecer procesos operativos y de calidad","Presencia digital sólida"]},{year:"2026",title:"Crecimiento",items:["Ampliar cartera de clientes en 3+ sectores","Lanzar servicio de contratos de mantenimiento recurrente","Incorporar capacidades en automatización e IoT","Crecer equipo técnico especializado"]},{year:"2027",title:"Expansión",items:["Presencia en múltiples ciudades de Colombia","Plataforma propia de monitoreo y gestión de activos","Alianzas estratégicas con fabricantes y distribuidores","Certificaciones industriales y de calidad"]}];function _3(){const r=Ra({translateY:30}),t=ye.useRef(null),i=ye.useRef(null);return ye.useEffect(()=>{const s=t.current,l=i.current;if(!s||!l)return;const c=s.querySelectorAll(".year-badge"),f=s.querySelectorAll(".phase-list");c.forEach(m=>{const p=m;p.style.opacity="0",p.style.transform="scale(0.8)"}),f.forEach(m=>{const p=m;p.style.opacity="0",p.style.transform="translateY(20px)"}),l.style.transform="scaleX(0)",l.style.transformOrigin="left";const d=new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting&&(setTimeout(()=>{l.style.transition="transform 1s ease-out",l.style.transform="scaleX(1)"},200),c.forEach((v,_)=>{const g=v;setTimeout(()=>{g.style.transition="opacity 0.5s ease-out, transform 0.5s ease-out",g.style.opacity="1",g.style.transform="scale(1)"},400+_*200)}),f.forEach((v,_)=>{const g=v;setTimeout(()=>{g.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",g.style.opacity="1",g.style.transform="translateY(0)"},600+_*150)}),d.unobserve(p.target))})},{threshold:.15});return d.observe(s),()=>d.disconnect()},[]),Z.jsx("section",{"code-path":"src/sections/RoadmapSection.tsx:107:5",id:"roadmap",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src/sections/RoadmapSection.tsx:112:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src/sections/RoadmapSection.tsx:114:9",ref:r,className:"mb-14",children:[Z.jsx("p",{"code-path":"src/sections/RoadmapSection.tsx:115:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Hoja de ruta"}),Z.jsx("h2",{"code-path":"src/sections/RoadmapSection.tsx:121:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Metas estratégicas 2025 – 2027"})]}),Z.jsxs("div",{"code-path":"src/sections/RoadmapSection.tsx:130:9",ref:t,className:"relative",children:[Z.jsx("div",{"code-path":"src/sections/RoadmapSection.tsx:132:11",ref:i,className:"absolute left-0 right-0 top-[22px] hidden h-[1px] md:block",style:{backgroundColor:"#d4d0ca"}}),Z.jsx("div",{"code-path":"src/sections/RoadmapSection.tsx:138:11",className:"grid gap-10 md:grid-cols-3 md:gap-8",children:v3.map(s=>Z.jsxs("div",{"code-path":"src/sections/RoadmapSection.tsx:140:15",children:[Z.jsx("div",{"code-path":"src/sections/RoadmapSection.tsx:142:17",className:"year-badge mb-6 inline-block border px-4 py-1.5 text-sm",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b",borderColor:"#c4713b"},children:s.year}),Z.jsx("h3",{"code-path":"src/sections/RoadmapSection.tsx:154:17",className:"mb-4 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:s.title}),Z.jsx("ul",{"code-path":"src/sections/RoadmapSection.tsx:162:17",className:"phase-list space-y-2",children:s.items.map(l=>Z.jsxs("li",{"code-path":"src/sections/RoadmapSection.tsx:164:21",className:"flex items-start gap-3 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:[Z.jsx("span",{"code-path":"src/sections/RoadmapSection.tsx:169:23",className:"mt-2 inline-block h-[2px] w-3 shrink-0",style:{backgroundColor:"#c4713b"}}),l]},l))})]},s.year))})]})]})})}function x3(){const r=Ra({translateX:-20,duration:.6}),t=Ra({translateX:20,duration:.6,delay:.15});return Z.jsx("section",{"code-path":"src/sections/ContactSection.tsx:8:5",id:"contacto",className:"border-t",style:{backgroundColor:"#1a1a1a",borderColor:"#333333",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:18:7",className:"mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-2",children:[Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:20:9",ref:r,children:[Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:21:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Hablemos"}),Z.jsx("h2",{"code-path":"src/sections/ContactSection.tsx:27:11",className:"mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"¿Listo para optimizar sus operaciones?"}),Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:33:11",className:"mb-8 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"17px"},children:"Contacte a nuestro equipo de ingeniería y reciba una propuesta técnica personalizada sin costo."}),Z.jsx("a",{"code-path":"src/sections/ContactSection.tsx:39:11",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#d4854a]",style:{fontFamily:"'IBM Plex Mono', monospace",backgroundColor:"#c4713b"},children:"Solicitar cotización"})]}),Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:54:9",ref:t,className:"md:mt-0 mt-12",children:[Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:55:11",className:"mb-7",children:[Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:56:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Sitio web"}),Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:62:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"imantek.com.co"})]}),Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:67:11",className:"mb-7",children:[Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:68:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Correo electrónico"}),Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:74:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"Imanteksas@gmail.com"})]}),Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:79:11",className:"mb-7",children:[Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:80:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Teléfono / WhatsApp"}),Z.jsx("a",{"code-path":"src/sections/ContactSection.tsx:86:13",href:"https://wa.me/573181419074",target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-[#c4713b]",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"+57 318 141 9074"})]}),Z.jsxs("div",{"code-path":"src/sections/ContactSection.tsx:97:11",children:[Z.jsx("p",{"code-path":"src/sections/ContactSection.tsx:98:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Ubicación"}),Z.jsxs("p",{"code-path":"src/sections/ContactSection.tsx:104:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:["Br. Villa Estrella Transv.54 #80-863,",Z.jsx("br",{"code-path":"src/sections/ContactSection.tsx:105:52"}),"Cartagena de Indias, Colombia"]})]})]})]})})}function S3(){const r=ye.useRef(null),t=ye.useRef(0),i=ye.useRef(!1);return ye.useEffect(()=>{const s=r.current;if(!s)return;const l=s.getContext("2d");if(!l)return;const c=Math.min(window.devicePixelRatio,2);function f(){if(!s)return;const w=s.parentElement;w&&(s.width=w.clientWidth*c,s.height=w.clientHeight*c,s.style.width=w.clientWidth+"px",s.style.height=w.clientHeight+"px",l.setTransform(c,0,0,c,0,0))}f();const d=["#ffffff","#cccccc","#aaaaaa","#888888"],m=2e3,p=120,v=[];for(let w=0;w<m;w++)v.push({x:Math.random()*(s?.clientWidth||0),y:Math.random()*(s?.clientHeight||0),vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:.5+Math.random()*1.5,color:d[Math.floor(Math.random()*d.length)],alpha:.2+Math.random()*.5});let _=0,g=0,y=!1;const b=w=>{const D=s.getBoundingClientRect();_=w.clientX-D.left,g=w.clientY-D.top,y=!0,setTimeout(()=>{y=!1},500)};s.addEventListener("click",b);const N=new IntersectionObserver(w=>{w.forEach(D=>{i.current=D.isIntersecting})},{threshold:.05});N.observe(s);function M(){if(t.current=requestAnimationFrame(M),!i.current||!l||!s)return;const w=s.clientWidth,D=s.clientHeight,L=w/2,V=D/2;l.fillStyle="rgba(26, 26, 26, 0.15)",l.fillRect(0,0,w,D);for(const U of v){const B=L-U.x,T=V-U.y,I=Math.sqrt(B*B+T*T)+1,q=p/(I*I);if(U.vx+=B/I*q*.01,U.vy+=T/I*q*.01,y){const z=_-U.x,Y=g-U.y,rt=Math.sqrt(z*z+Y*Y)+1,ft=200/(rt*rt);U.vx-=z/rt*ft*.1,U.vy-=Y/rt*ft*.1}U.vx*=.995,U.vy*=.995,U.x+=U.vx,U.y+=U.vy,U.x<0&&(U.x=w),U.x>w&&(U.x=0),U.y<0&&(U.y=D),U.y>D&&(U.y=0),l.beginPath(),l.arc(U.x,U.y,U.size,0,Math.PI*2),l.fillStyle=U.color,l.globalAlpha=U.alpha,l.fill()}l.globalAlpha=1}M();const S=()=>f();return window.addEventListener("resize",S),()=>{cancelAnimationFrame(t.current),N.disconnect(),s.removeEventListener("click",b),window.removeEventListener("resize",S)}},[]),Z.jsx("canvas",{"code-path":"src/sections/ParticleField.tsx:155:5",ref:r,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"auto"}})}function y3(){return Z.jsxs("footer",{"code-path":"src/sections/Footer.tsx:5:5",className:"relative overflow-hidden border-t",style:{backgroundColor:"#1a1a1a",borderColor:"#333333"},children:[Z.jsx(S3,{"code-path":"src/sections/Footer.tsx:13:7"}),Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:16:7",className:"relative z-[1] mx-auto max-w-[1200px] px-6",style:{paddingTop:"80px",paddingBottom:"40px"},children:[Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:20:9",className:"mb-16 grid gap-10 sm:grid-cols-3",children:[Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:22:11",children:[Z.jsx("h3",{"code-path":"src/sections/Footer.tsx:23:13",className:"mb-2 text-3xl font-bold uppercase tracking-[4px]",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"IMANTEK"}),Z.jsx("p",{"code-path":"src/sections/Footer.tsx:29:13",className:"text-sm",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:"Ingeniería · Mantenimiento · Tecnología"})]}),Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:38:11",children:[Z.jsx("p",{"code-path":"src/sections/Footer.tsx:39:13",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Síguenos"}),Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:45:13",className:"flex flex-col gap-2",children:[Z.jsx("a",{"code-path":"src/sections/Footer.tsx:46:15",href:"https://www.instagram.com/imanteksas",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"Instagram"}),Z.jsx("a",{"code-path":"src/sections/Footer.tsx:55:15",href:"https://www.facebook.com/people/Imantek-SAS",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"Facebook"}),Z.jsx("a",{"code-path":"src/sections/Footer.tsx:64:15",href:"https://wa.me/573181419074",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"WhatsApp"})]})]}),Z.jsx("div",{"code-path":"src/sections/Footer.tsx:77:11",className:"sm:text-right",children:Z.jsxs("p",{"code-path":"src/sections/Footer.tsx:78:13",className:"text-sm",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:["© 2025 IMANTEK S.A.S.",Z.jsx("br",{"code-path":"src/sections/Footer.tsx:82:36"}),"Colombia · imantek.com.co"]})})]}),Z.jsxs("div",{"code-path":"src/sections/Footer.tsx:89:9",className:"flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row",style:{borderColor:"#333333"},children:[Z.jsx("p",{"code-path":"src/sections/Footer.tsx:93:11",className:"text-xs",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:"© 2025 IMANTEK S.A.S. · Colombia · imantek.com.co"}),Z.jsx("p",{"code-path":"src/sections/Footer.tsx:99:11",className:"text-xs",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#555555"},children:"Brochure Corporativo 2025–2027"})]})]})]})}function M3(){const[r,t]=ye.useState(!1);return ye.useEffect(()=>{const i=()=>{t(window.scrollY>window.innerHeight*.5)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),Z.jsxs("a",{"code-path":"src/sections/WhatsAppButton.tsx:15:5",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105",style:{fontFamily:"'Inter', sans-serif",backgroundColor:"#25D366",opacity:r?1:0,transform:r?"translateY(0)":"translateY(20px)",pointerEvents:r?"auto":"none"},children:[Z.jsx("svg",{"code-path":"src/sections/WhatsAppButton.tsx:28:7",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:Z.jsx("path",{"code-path":"src/sections/WhatsAppButton.tsx:35:9",d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})}function E3(){return Z.jsxs("div",{"code-path":"src/App.tsx:15:5",className:"min-h-screen",children:[Z.jsx(Cy,{"code-path":"src/App.tsx:16:7"}),Z.jsx(N2,{"code-path":"src/App.tsx:17:7"}),Z.jsx(O2,{"code-path":"src/App.tsx:18:7"}),Z.jsx(u3,{"code-path":"src/App.tsx:19:7"}),Z.jsx(h3,{"code-path":"src/App.tsx:20:7"}),Z.jsx(d3,{"code-path":"src/App.tsx:21:7"}),Z.jsx(g3,{"code-path":"src/App.tsx:22:7"}),Z.jsx(_3,{"code-path":"src/App.tsx:23:7"}),Z.jsx(x3,{"code-path":"src/App.tsx:24:7"}),Z.jsx(y3,{"code-path":"src/App.tsx:25:7"}),Z.jsx(M3,{"code-path":"src/App.tsx:26:7"})]})}Ry.createRoot(document.getElementById("root")).render(Z.jsx(E3,{"code-path":"src/main.tsx:11:53"}));
