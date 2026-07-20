(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var Kv={exports:{}},Ho={},Zv;function g1(){if(Zv)return Ho;Zv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var $v;function v1(){return $v||($v=1,Kv.exports=g1()),Kv.exports}var Z=v1(),ff={exports:{}},Vo={},Qv={exports:{}},Jv={},e0;function _1(){return e0||(e0=1,(function(s){function e(U,z){var re=U.length;U.push(z);e:for(;0<re;){var fe=re-1>>>1,pe=U[fe];if(0<l(pe,z))U[fe]=z,U[re]=pe,re=fe;else break e}}function i(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var z=U[0],re=U.pop();if(re!==z){U[0]=re;e:for(var fe=0,pe=U.length,I=pe>>>1;fe<I;){var J=2*(fe+1)-1,ge=U[J],Ae=J+1,Ne=U[Ae];if(0>l(ge,re))Ae<pe&&0>l(Ne,ge)?(U[fe]=Ne,U[Ae]=re,fe=Ae):(U[fe]=ge,U[J]=re,fe=J);else if(Ae<pe&&0>l(Ne,re))U[fe]=Ne,U[Ae]=re,fe=Ae;else break e}}return z}function l(U,z){var re=U.sortIndex-z.sortIndex;return re!==0?re:U.id-z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,y=null,g=3,x=!1,E=!1,P=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(U){for(var z=i(p);z!==null;){if(z.callback===null)a(p);else if(z.startTime<=U)a(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function V(U){if(P=!1,L(U),!E)if(i(m)!==null)E=!0,N||(N=!0,G());else{var z=i(p);z!==null&&q(V,z.startTime-U)}}var N=!1,F=-1,w=5,k=-1;function X(){return S?!0:!(s.unstable_now()-k<w)}function O(){if(S=!1,N){var U=s.unstable_now();k=U;var z=!0;try{e:{E=!1,P&&(P=!1,C(F),F=-1),x=!0;var re=g;try{t:{for(L(U),y=i(m);y!==null&&!(y.expirationTime>U&&X());){var fe=y.callback;if(typeof fe=="function"){y.callback=null,g=y.priorityLevel;var pe=fe(y.expirationTime<=U);if(U=s.unstable_now(),typeof pe=="function"){y.callback=pe,L(U),z=!0;break t}y===i(m)&&a(m),L(U)}else a(m);y=i(m)}if(y!==null)z=!0;else{var I=i(p);I!==null&&q(V,I.startTime-U),z=!1}}break e}finally{y=null,g=re,x=!1}z=void 0}}finally{z?G():N=!1}}}var G;if(typeof D=="function")G=function(){D(O)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,oe=ue.port2;ue.port1.onmessage=O,G=function(){oe.postMessage(null)}}else G=function(){b(O,0)};function q(U,z){F=b(function(){U(s.unstable_now())},z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_next=function(U){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var re=g;g=z;try{return U()}finally{g=re}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var re=g;g=U;try{return z()}finally{g=re}},s.unstable_scheduleCallback=function(U,z,re){var fe=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?fe+re:fe):re=fe,U){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=re+pe,U={id:v++,callback:z,priorityLevel:U,startTime:re,expirationTime:pe,sortIndex:-1},re>fe?(U.sortIndex=re,e(p,U),i(m)===null&&U===i(p)&&(P?(C(F),F=-1):P=!0,q(V,re-fe))):(U.sortIndex=pe,e(m,U),E||x||(E=!0,N||(N=!0,G()))),U},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(U){var z=g;return function(){var re=g;g=z;try{return U.apply(this,arguments)}finally{g=re}}}})(Jv)),Jv}var t0;function y1(){return t0||(t0=1,Qv.exports=_1()),Qv.exports}var r0={exports:{}},pt={},i0;function x1(){if(i0)return pt;i0=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,S={};function b(I,J,ge){this.props=I,this.context=J,this.refs=S,this.updater=ge||E}b.prototype.isReactComponent={},b.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},b.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=b.prototype;function D(I,J,ge){this.props=I,this.context=J,this.refs=S,this.updater=ge||E}var L=D.prototype=new C;L.constructor=D,P(L,b.prototype),L.isPureReactComponent=!0;var V=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function k(I,J,ge){var Ae=ge.ref;return{$$typeof:s,type:I,key:J,ref:Ae!==void 0?Ae:null,props:ge}}function X(I,J){return k(I.type,J,I.props)}function O(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function G(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ge){return J[ge]})}var ue=/\/+/g;function oe(I,J){return typeof I=="object"&&I!==null&&I.key!=null?G(""+I.key):J.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function U(I,J,ge,Ae,Ne){var se=typeof I;(se==="undefined"||se==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(se){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case s:case e:ye=!0;break;case v:return ye=I._init,U(ye(I._payload),J,ge,Ae,Ne)}}if(ye)return Ne=Ne(I),ye=Ae===""?"."+oe(I,0):Ae,V(Ne)?(ge="",ye!=null&&(ge=ye.replace(ue,"$&/")+"/"),U(Ne,J,ge,"",function(lt){return lt})):Ne!=null&&(O(Ne)&&(Ne=X(Ne,ge+(Ne.key==null||I&&I.key===Ne.key?"":(""+Ne.key).replace(ue,"$&/")+"/")+ye)),J.push(Ne)),1;ye=0;var Se=Ae===""?".":Ae+":";if(V(I))for(var Le=0;Le<I.length;Le++)Ae=I[Le],se=Se+oe(Ae,Le),ye+=U(Ae,J,ge,se,Ne);else if(Le=x(I),typeof Le=="function")for(I=Le.call(I),Le=0;!(Ae=I.next()).done;)Ae=Ae.value,se=Se+oe(Ae,Le++),ye+=U(Ae,J,ge,se,Ne);else if(se==="object"){if(typeof I.then=="function")return U(q(I),J,ge,Ae,Ne);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ye}function z(I,J,ge){if(I==null)return I;var Ae=[],Ne=0;return U(I,Ae,"","",function(se){return J.call(ge,se,Ne++)}),Ae}function re(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(ge){(I._status===0||I._status===-1)&&(I._status=1,I._result=ge)},function(ge){(I._status===0||I._status===-1)&&(I._status=2,I._result=ge)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var fe=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},pe={map:z,forEach:function(I,J,ge){z(I,function(){J.apply(this,arguments)},ge)},count:function(I){var J=0;return z(I,function(){J++}),J},toArray:function(I){return z(I,function(J){return J})||[]},only:function(I){if(!O(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return pt.Activity=y,pt.Children=pe,pt.Component=b,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=D,pt.StrictMode=a,pt.Suspense=m,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},pt.cache=function(I){return function(){return I.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(I,J,ge){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Ae=P({},I.props),Ne=I.key;if(J!=null)for(se in J.key!==void 0&&(Ne=""+J.key),J)!w.call(J,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&J.ref===void 0||(Ae[se]=J[se]);var se=arguments.length-2;if(se===1)Ae.children=ge;else if(1<se){for(var ye=Array(se),Se=0;Se<se;Se++)ye[Se]=arguments[Se+2];Ae.children=ye}return k(I.type,Ne,Ae)},pt.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},pt.createElement=function(I,J,ge){var Ae,Ne={},se=null;if(J!=null)for(Ae in J.key!==void 0&&(se=""+J.key),J)w.call(J,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Ne[Ae]=J[Ae]);var ye=arguments.length-2;if(ye===1)Ne.children=ge;else if(1<ye){for(var Se=Array(ye),Le=0;Le<ye;Le++)Se[Le]=arguments[Le+2];Ne.children=Se}if(I&&I.defaultProps)for(Ae in ye=I.defaultProps,ye)Ne[Ae]===void 0&&(Ne[Ae]=ye[Ae]);return k(I,se,Ne)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(I){return{$$typeof:h,render:I}},pt.isValidElement=O,pt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:re}},pt.memo=function(I,J){return{$$typeof:p,type:I,compare:J===void 0?null:J}},pt.startTransition=function(I){var J=F.T,ge={};F.T=ge;try{var Ae=I(),Ne=F.S;Ne!==null&&Ne(ge,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(N,fe)}catch(se){fe(se)}finally{J!==null&&ge.types!==null&&(J.types=ge.types),F.T=J}},pt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pt.use=function(I){return F.H.use(I)},pt.useActionState=function(I,J,ge){return F.H.useActionState(I,J,ge)},pt.useCallback=function(I,J){return F.H.useCallback(I,J)},pt.useContext=function(I){return F.H.useContext(I)},pt.useDebugValue=function(){},pt.useDeferredValue=function(I,J){return F.H.useDeferredValue(I,J)},pt.useEffect=function(I,J){return F.H.useEffect(I,J)},pt.useEffectEvent=function(I){return F.H.useEffectEvent(I)},pt.useId=function(){return F.H.useId()},pt.useImperativeHandle=function(I,J,ge){return F.H.useImperativeHandle(I,J,ge)},pt.useInsertionEffect=function(I,J){return F.H.useInsertionEffect(I,J)},pt.useLayoutEffect=function(I,J){return F.H.useLayoutEffect(I,J)},pt.useMemo=function(I,J){return F.H.useMemo(I,J)},pt.useOptimistic=function(I,J){return F.H.useOptimistic(I,J)},pt.useReducer=function(I,J,ge){return F.H.useReducer(I,J,ge)},pt.useRef=function(I){return F.H.useRef(I)},pt.useState=function(I){return F.H.useState(I)},pt.useSyncExternalStore=function(I,J,ge){return F.H.useSyncExternalStore(I,J,ge)},pt.useTransition=function(){return F.H.useTransition()},pt.version="19.2.3",pt}var n0;function $h(){return n0||(n0=1,r0.exports=x1()),r0.exports}var hf={exports:{}},Lr={},a0;function b1(){if(a0)return Lr;a0=1;var s=$h();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:v}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Lr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Lr.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Lr.flushSync=function(m){var p=d.T,v=a.p;try{if(d.T=null,a.p=2,m)return m()}finally{d.T=p,a.p=v,a.d.f()}},Lr.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Lr.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Lr.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,y=h(v,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:x}):v==="script"&&a.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Lr.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Lr.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,y=h(v,p.crossOrigin);a.d.L(m,v,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Lr.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Lr.requestFormReset=function(m){a.d.r(m)},Lr.unstable_batchedUpdates=function(m,p){return m(p)},Lr.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Lr.useFormStatus=function(){return d.H.useHostTransitionStatus()},Lr.version="19.2.3",Lr}var s0;function S1(){if(s0)return hf.exports;s0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),hf.exports=b1(),hf.exports}var o0;function M1(){if(o0)return Vo;o0=1;var s=y1(),e=$h(),i=S1();function a(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var r=t,n=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(n=r.return),t=r.return;while(t)}return r.tag===3?n:null}function d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function h(t){if(t.tag===31){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var r=t.alternate;if(!r){if(r=c(t),r===null)throw Error(a(188));return r!==t?null:t}for(var n=t,o=r;;){var u=n.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){n=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===n)return m(u),t;if(f===o)return m(u),r;f=f.sibling}throw Error(a(188))}if(n.return!==o.return)n=u,o=f;else{for(var _=!1,A=u.child;A;){if(A===n){_=!0,n=u,o=f;break}if(A===o){_=!0,o=u,n=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===n){_=!0,n=f,o=u;break}if(A===o){_=!0,o=f,n=u;break}A=A.sibling}if(!_)throw Error(a(189))}}if(n.alternate!==o)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?t:r}function v(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=v(t),r!==null)return r;t=t.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ue?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case P:return"Fragment";case b:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case k:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case L:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return r=t.displayName||null,r!==null?r:oe(t.type)||"Memo";case w:r=t._payload,t=t._init;try{return oe(t(r))}catch{}}return null}var q=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function I(t){return{current:t}}function J(t){0>pe||(t.current=fe[pe],fe[pe]=null,pe--)}function ge(t,r){pe++,fe[pe]=t.current,t.current=r}var Ae=I(null),Ne=I(null),se=I(null),ye=I(null);function Se(t,r){switch(ge(se,r),ge(Ne,t),ge(Ae,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?_v(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=_v(r),t=yv(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Ae),ge(Ae,t)}function Le(){J(Ae),J(Ne),J(se)}function lt(t){t.memoizedState!==null&&ge(ye,t);var r=Ae.current,n=yv(r,t.type);r!==n&&(ge(Ne,t),ge(Ae,n))}function ze(t){Ne.current===t&&(J(Ae),J(Ne)),ye.current===t&&(J(ye),ko._currentValue=re)}var dt,Ee;function Me(t){if(dt===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);dt=r&&r[1]||"",Ee=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+t+Ee}var De=!1;function He(t,r){if(!t||De)return"";De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(de){var ce=de}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(de){ce=de}t.call(xe.prototype)}}else{try{throw Error()}catch(de){ce=de}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(de){if(de&&ce&&typeof de.stack=="string")return[de.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var B=_.split(`
`),ne=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===ne.length)for(o=B.length-1,u=ne.length-1;1<=o&&0<=u&&B[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==ne[u]){var me=`
`+B[o].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=o&&0<=u);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Me(n):""}function We(t,r){switch(t.tag){case 26:case 27:case 5:return Me(t.type);case 16:return Me("Lazy");case 13:return t.child!==r&&r!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return He(t.type,!1);case 11:return He(t.type.render,!1);case 1:return He(t.type,!0);case 31:return Me("Activity");default:return""}}function $e(t){try{var r="",n=null;do r+=We(t,n),n=t,t=t.return;while(t);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var nt=Object.prototype.hasOwnProperty,H=s.unstable_scheduleCallback,ft=s.unstable_cancelCallback,et=s.unstable_shouldYield,gt=s.unstable_requestPaint,Ce=s.unstable_now,Mt=s.unstable_getCurrentPriorityLevel,R=s.unstable_ImmediatePriority,M=s.unstable_UserBlockingPriority,ee=s.unstable_NormalPriority,ve=s.unstable_LowPriority,be=s.unstable_IdlePriority,Ie=s.log,Fe=s.unstable_setDisableYieldValue,Y=null,Re=null;function Oe(t){if(typeof Ie=="function"&&Fe(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Y,t)}catch{}}var ke=Math.clz32?Math.clz32:ht,we=Math.log,rt=Math.LN2;function ht(t){return t>>>=0,t===0?32:31-(we(t)/rt|0)|0}var yt=256,Rt=262144,W=4194304;function he(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Pe(t,r,n){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=he(o):(_&=A,_!==0?u=he(_):n||(n=A&~t,n!==0&&(u=he(n))))):(A=o&~f,A!==0?u=he(A):_!==0?u=he(_):n||(n=o&~t,n!==0&&(u=he(n)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,n=r&-r,f>=n||f===32&&(n&4194048)!==0)?r:u}function Ye(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function Be(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Je(t){for(var r=[],n=0;31>n;n++)r.push(t);return r}function at(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mr(t,r,n,o,u,f){var _=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,ne=t.hiddenUpdates;for(n=_&~n;0<n;){var me=31-ke(n),xe=1<<me;A[me]=0,B[me]=-1;var ce=ne[me];if(ce!==null)for(ne[me]=null,me=0;me<ce.length;me++){var de=ce[me];de!==null&&(de.lane&=-536870913)}n&=~xe}o!==0&&Wt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~r))}function Wt(t,r,n){t.pendingLanes|=r,t.suspendedLanes&=~r;var o=31-ke(r);t.entangledLanes|=r,t.entanglements[o]=t.entanglements[o]|1073741824|n&261930}function li(t,r){var n=t.entangledLanes|=r;for(t=t.entanglements;n;){var o=31-ke(n),u=1<<o;u&r|t[o]&r&&(t[o]|=r),n&=~u}}function Yr(t,r){var n=r&-r;return n=(n&42)!==0?1:fa(n),(n&(t.suspendedLanes|r))!==0?0:n}function fa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ks(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Vv(t.type))}function Zs(t,r){var n=z.p;try{return z.p=t,r()}finally{z.p=n}}var Pr=Math.random().toString(36).slice(2),ar="__reactFiber$"+Pr,Er="__reactProps$"+Pr,Zi="__reactContainer$"+Pr,An="__reactEvents$"+Pr,ul="__reactListeners$"+Pr,ja="__reactHandles$"+Pr,$s="__reactResources$"+Pr,Cn="__reactMarker$"+Pr;function Qs(t){delete t[ar],delete t[Er],delete t[An],delete t[ul],delete t[ja]}function Rn(t){var r=t[ar];if(r)return r;for(var n=t.parentNode;n;){if(r=n[Zi]||n[ar]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(t=Tv(t);t!==null;){if(n=t[ar])return n;t=Tv(t)}return r}t=n,n=t.parentNode}return null}function Pn(t){if(t=t[ar]||t[Zi]){var r=t.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return t}return null}function ha(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(a(33))}function Nn(t){var r=t[$s];return r||(r=t[$s]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function lr(t){t[Cn]=!0}var dl=new Set,T={};function K(t,r){le(t,r),le(t+"Capture",r)}function le(t,r){for(T[t]=r,t=0;t<r.length;t++)dl.add(r[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Ue={};function Ge(t){return nt.call(Ue,t)?!0:nt.call(te,t)?!1:ae.test(t)?Ue[t]=!0:(te[t]=!0,!1)}function Xe(t,r,n){if(Ge(r))if(n===null)t.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+n)}}function qe(t,r,n){if(n===null)t.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+n)}}function tt(t,r,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(r,n,""+o)}}function ot(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bt(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function st(t,r,n){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r);if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(_){n=""+_,f.call(this,_)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(_){n=""+_},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function zt(t){if(!t._valueTracker){var r=bt(t)?"checked":"value";t._valueTracker=st(t,r,""+t[r])}}function Jt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return t&&(o=bt(t)?t.checked?"true":"false":t.value),t=o,t!==n?(r.setValue(t),!0):!1}function jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xt=/[\n"\\]/g;function Lt(t){return t.replace(Xt,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ke(t,r,n,o,u,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),r!=null?_==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+ot(r)):t.value!==""+ot(r)&&(t.value=""+ot(r)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),r!=null?_i(t,_,ot(r)):n!=null?_i(t,_,ot(n)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ot(A):t.removeAttribute("name")}function Nr(t,r,n,o,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),r!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||r!=null)){zt(t);return}n=n!=null?""+ot(n):"",r=r!=null?""+ot(r):n,A||r===t.value||(t.value=r),t.defaultValue=r}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),zt(t)}function _i(t,r,n){r==="number"&&jt(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function gr(t,r,n,o){if(t=t.options,r){r={};for(var u=0;u<n.length;u++)r["$"+n[u]]=!0;for(n=0;n<t.length;n++)u=r.hasOwnProperty("$"+t[n].value),t[n].selected!==u&&(t[n].selected=u),u&&o&&(t[n].defaultSelected=!0)}else{for(n=""+ot(n),r=null,u=0;u<t.length;u++){if(t[u].value===n){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function Kr(t,r,n){if(r!=null&&(r=""+ot(r),r!==t.value&&(t.value=r),n==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=n!=null?""+ot(n):""}function yi(t,r,n,o){if(r==null){if(o!=null){if(n!=null)throw Error(a(92));if(q(o)){if(1<o.length)throw Error(a(93));o=o[0]}n=o}n==null&&(n=""),r=n}n=ot(r),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o),zt(t)}function Zr(t,r){if(r){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=r;return}}t.textContent=r}var Bt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function er(t,r,n){var o=r.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":o?t.setProperty(r,n):typeof n!="number"||n===0||Bt.has(r)?r==="float"?t.cssFloat=n:t[r]=(""+n).trim():t[r]=n+"px"}function xi(t,r,n){if(r!=null&&typeof r!="object")throw Error(a(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in r)o=r[u],r.hasOwnProperty(u)&&n[u]!==o&&er(t,u,o)}else for(var f in r)r.hasOwnProperty(f)&&er(t,f,r[f])}function It(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ma(t){return Ln.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var lu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,qa=null;function vp(t){var r=Pn(t);if(r&&(t=r.stateNode)){var n=t[Er]||null;e:switch(t=r.stateNode,r.type){case"input":if(Ke(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),r=n.name,n.type==="radio"&&r!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Lt(""+r)+'"][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==t&&o.form===t.form){var u=o[Er]||null;if(!u)throw Error(a(90));Ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(r=0;r<n.length;r++)o=n[r],o.form===t.form&&Jt(o)}break e;case"textarea":Kr(t,n.value,n.defaultValue);break e;case"select":r=n.value,r!=null&&gr(t,!!n.multiple,r,!1)}}}var uu=!1;function _p(t,r,n){if(uu)return t(r,n);uu=!0;try{var o=t(r);return o}finally{if(uu=!1,(Xa!==null||qa!==null)&&(Ql(),Xa&&(r=Xa,t=qa,qa=Xa=null,vp(r),t)))for(r=0;r<t.length;r++)vp(t[r])}}function Js(t,r){var n=t.stateNode;if(n===null)return null;var o=n[Er]||null;if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(a(231,r,typeof n));return n}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Qi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){du=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{du=!1}var Dn=null,fu=null,fl=null;function yp(){if(fl)return fl;var t,r=fu,n=r.length,o,u="value"in Dn?Dn.value:Dn.textContent,f=u.length;for(t=0;t<n&&r[t]===u[t];t++);var _=n-t;for(o=1;o<=_&&r[n-o]===u[f-o];o++);return fl=u.slice(t,1<o?1-o:void 0)}function hl(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function xp(){return!1}function Br(t){function r(n,o,u,f,_){this._reactName=n,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(n=t[A],this[A]=n?n(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:xp,this.isPropagationStopped=xp,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),r}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Br(ga),to=y({},ga,{view:0,detail:0}),py=Br(to),hu,pu,ro,gl=y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(hu=t.screenX-ro.screenX,pu=t.screenY-ro.screenY):pu=hu=0,ro=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),bp=Br(gl),my=y({},gl,{dataTransfer:0}),gy=Br(my),vy=y({},to,{relatedTarget:0}),mu=Br(vy),_y=y({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=Br(_y),xy=y({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),by=Br(xy),Sy=y({},ga,{data:0}),Sp=Br(Sy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=wy[t])?!!r[t]:!1}function gu(){return Ty}var Ay=y({},to,{key:function(t){if(t.key){var r=My[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cy=Br(Ay),Ry=y({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Br(Ry),Py=y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Ny=Br(Py),Ly=y({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Br(Ly),Uy=y({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Iy=Br(Uy),Oy=y({},ga,{newState:0,oldState:0}),ky=Br(Oy),Fy=[9,13,27,32],vu=Qi&&"CompositionEvent"in window,io=null;Qi&&"documentMode"in document&&(io=document.documentMode);var zy=Qi&&"TextEvent"in window&&!io,Ep=Qi&&(!vu||io&&8<io&&11>=io),wp=" ",Tp=!1;function Ap(t,r){switch(t){case"keyup":return Fy.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ya=!1;function By(t,r){switch(t){case"compositionend":return Cp(r);case"keypress":return r.which!==32?null:(Tp=!0,wp);case"textInput":return t=r.data,t===wp&&Tp?null:t;default:return null}}function Hy(t,r){if(Ya)return t==="compositionend"||!vu&&Ap(t,r)?(t=yp(),fl=fu=Dn=null,Ya=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ep&&r.locale!=="ko"?null:r.data;default:return null}}var Vy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Vy[t.type]:r==="textarea"}function Pp(t,r,n,o){Xa?qa?qa.push(o):qa=[o]:Xa=o,r=ac(r,"onChange"),0<r.length&&(n=new ml("onChange","change",null,n,o),t.push({event:n,listeners:r}))}var no=null,ao=null;function Gy(t){fv(t,0)}function vl(t){var r=ha(t);if(Jt(r))return t}function Np(t,r){if(t==="change")return r}var Lp=!1;if(Qi){var _u;if(Qi){var yu="oninput"in document;if(!yu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),yu=typeof Dp.oninput=="function"}_u=yu}else _u=!1;Lp=_u&&(!document.documentMode||9<document.documentMode)}function Up(){no&&(no.detachEvent("onpropertychange",Ip),ao=no=null)}function Ip(t){if(t.propertyName==="value"&&vl(ao)){var r=[];Pp(r,ao,t,cu(t)),_p(Gy,r)}}function Wy(t,r,n){t==="focusin"?(Up(),no=r,ao=n,no.attachEvent("onpropertychange",Ip)):t==="focusout"&&Up()}function jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(ao)}function Xy(t,r){if(t==="click")return vl(r)}function qy(t,r){if(t==="input"||t==="change")return vl(r)}function Yy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var $r=typeof Object.is=="function"?Object.is:Yy;function so(t,r){if($r(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var n=Object.keys(t),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var u=n[o];if(!nt.call(r,u)||!$r(t[u],r[u]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,r){var n=Op(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=r&&o>=r)return{node:n,offset:r-t};t=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Op(n)}}function Fp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Fp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=jt(t.document);r instanceof t.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)t=r.contentWindow;else break;r=jt(t.document)}return r}function xu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var Ky=Qi&&"documentMode"in document&&11>=document.documentMode,Ka=null,bu=null,oo=null,Su=!1;function Bp(t,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||Ka==null||Ka!==jt(o)||(o=Ka,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=ac(bu,"onSelect"),0<o.length&&(r=new ml("onSelect","select",null,r,n),t.push({event:r,listeners:o}),r.target=Ka)))}function va(t,r){var n={};return n[t.toLowerCase()]=r.toLowerCase(),n["Webkit"+t]="webkit"+r,n["Moz"+t]="moz"+r,n}var Za={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},Mu={},Hp={};Qi&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function _a(t){if(Mu[t])return Mu[t];if(!Za[t])return t;var r=Za[t],n;for(n in r)if(r.hasOwnProperty(n)&&n in Hp)return Mu[t]=r[n];return t}var Vp=_a("animationend"),Gp=_a("animationiteration"),Wp=_a("animationstart"),Zy=_a("transitionrun"),$y=_a("transitionstart"),Qy=_a("transitioncancel"),jp=_a("transitionend"),Xp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function bi(t,r){Xp.set(t,r),K(r,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],$a=0,wu=0;function yl(){for(var t=$a,r=wu=$a=0;r<t;){var n=ci[r];ci[r++]=null;var o=ci[r];ci[r++]=null;var u=ci[r];ci[r++]=null;var f=ci[r];if(ci[r++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&qp(n,u,f)}}function xl(t,r,n,o){ci[$a++]=t,ci[$a++]=r,ci[$a++]=n,ci[$a++]=o,wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Tu(t,r,n,o){return xl(t,r,n,o),bl(t)}function ya(t,r){return xl(t,null,null,r),bl(t)}function qp(t,r,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var u=!1,f=t.return;f!==null;)f.childLanes|=n,o=f.alternate,o!==null&&(o.childLanes|=n),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&r!==null&&(u=31-ke(n),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[r]:o.push(r),r.lane=n|536870912),f):null}function bl(t){if(50<Po)throw Po=0,Id=null,Error(a(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Qa={};function Jy(t,r,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qr(t,r,n,o){return new Jy(t,r,n,o)}function Au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,r){var n=t.alternate;return n===null?(n=Qr(t.tag,r,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=r,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,r=t.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Yp(t,r){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,r=n.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Sl(t,r,n,o,u,f){var _=0;if(o=t,typeof t=="function")Au(t)&&(_=1);else if(typeof t=="string")_=n1(t,n,Ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case k:return t=Qr(31,n,r,u),t.elementType=k,t.lanes=f,t;case P:return xa(n.children,u,f,r);case S:_=8,u|=24;break;case b:return t=Qr(12,n,r,u|2),t.elementType=b,t.lanes=f,t;case V:return t=Qr(13,n,r,u),t.elementType=V,t.lanes=f,t;case N:return t=Qr(19,n,r,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:_=10;break e;case C:_=9;break e;case L:_=11;break e;case F:_=14;break e;case w:_=16,o=null;break e}_=29,n=Error(a(130,t===null?"null":typeof t,"")),o=null}return r=Qr(_,n,r,u),r.elementType=t,r.type=o,r.lanes=f,r}function xa(t,r,n,o){return t=Qr(7,t,o,r),t.lanes=n,t}function Cu(t,r,n){return t=Qr(6,t,null,r),t.lanes=n,t}function Kp(t){var r=Qr(18,null,null,0);return r.stateNode=t,r}function Ru(t,r,n){return r=Qr(4,t.children!==null?t.children:[],t.key,r),r.lanes=n,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Zp=new WeakMap;function ui(t,r){if(typeof t=="object"&&t!==null){var n=Zp.get(t);return n!==void 0?n:(r={value:t,source:r,stack:$e(r)},Zp.set(t,r),r)}return{value:t,source:r,stack:$e(r)}}var Ja=[],es=0,Ml=null,lo=0,di=[],fi=0,Un=null,Ni=1,Li="";function en(t,r){Ja[es++]=lo,Ja[es++]=Ml,Ml=t,lo=r}function $p(t,r,n){di[fi++]=Ni,di[fi++]=Li,di[fi++]=Un,Un=t;var o=Ni;t=Li;var u=32-ke(o)-1;o&=~(1<<u),n+=1;var f=32-ke(r)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Ni=1<<32-ke(r)+u|n<<u|o,Li=f+t}else Ni=1<<f|n<<u|o,Li=t}function Pu(t){t.return!==null&&(en(t,1),$p(t,1,0))}function Nu(t){for(;t===Ml;)Ml=Ja[--es],Ja[es]=null,lo=Ja[--es],Ja[es]=null;for(;t===Un;)Un=di[--fi],di[fi]=null,Li=di[--fi],di[fi]=null,Ni=di[--fi],di[fi]=null}function Qp(t,r){di[fi++]=Ni,di[fi++]=Li,di[fi++]=Un,Ni=r.id,Li=r.overflow,Un=t}var wr=null,$t=null,Pt=!1,In=null,hi=!1,Lu=Error(a(519));function On(t){var r=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(ui(r,t)),Lu}function Jp(t){var r=t.stateNode,n=t.type,o=t.memoizedProps;switch(r[ar]=t,r[Er]=o,n){case"dialog":wt("cancel",r),wt("close",r);break;case"iframe":case"object":case"embed":wt("load",r);break;case"video":case"audio":for(n=0;n<Lo.length;n++)wt(Lo[n],r);break;case"source":wt("error",r);break;case"img":case"image":case"link":wt("error",r),wt("load",r);break;case"details":wt("toggle",r);break;case"input":wt("invalid",r),Nr(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":wt("invalid",r);break;case"textarea":wt("invalid",r),yi(r,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||r.textContent===""+n||o.suppressHydrationWarning===!0||gv(r.textContent,n)?(o.popover!=null&&(wt("beforetoggle",r),wt("toggle",r)),o.onScroll!=null&&wt("scroll",r),o.onScrollEnd!=null&&wt("scrollend",r),o.onClick!=null&&(r.onclick=$i),r=!0):r=!1,r||On(t,!0)}function em(t){for(wr=t.return;wr;)switch(wr.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:wr=wr.return}}function ts(t){if(t!==wr)return!1;if(!Pt)return em(t),Pt=!0,!1;var r=t.tag,n;if((n=r!==3&&r!==27)&&((n=r===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zd(t.type,t.memoizedProps)),n=!n),n&&$t&&On(t),em(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=wv(t)}else if(r===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));$t=wv(t)}else r===27?(r=$t,Zn(t.type)?(t=tf,tf=null,$t=t):$t=r):$t=wr?pi(t.stateNode.nextSibling):null;return!0}function ba(){$t=wr=null,Pt=!1}function Du(){var t=In;return t!==null&&(Wr===null?Wr=t:Wr.push.apply(Wr,t),In=null),t}function co(t){In===null?In=[t]:In.push(t)}var Uu=I(null),Sa=null,tn=null;function kn(t,r,n){ge(Uu,r._currentValue),r._currentValue=n}function rn(t){t._currentValue=Uu.current,J(Uu)}function Iu(t,r,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),t===n)break;t=t.return}}function Ou(t,r,n,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var B=0;B<r.length;B++)if(A.context===r[B]){f.lanes|=n,A=f.alternate,A!==null&&(A.lanes|=n),Iu(f.return,n,t),o||(_=null);break e}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(a(341));_.lanes|=n,f=_.alternate,f!==null&&(f.lanes|=n),Iu(_,n,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function rs(t,r,n,o){t=null;for(var u=r,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var A=u.type;$r(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===ye.current){if(_=u.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ko):t=[ko])}u=u.return}t!==null&&Ou(r,t,n,o),r.flags|=262144}function El(t){for(t=t.firstContext;t!==null;){if(!$r(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ma(t){Sa=t,tn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tr(t){return tm(Sa,t)}function wl(t,r){return Sa===null&&Ma(t),tm(t,r)}function tm(t,r){var n=r._currentValue;if(r={context:r,memoizedValue:n,next:null},tn===null){if(t===null)throw Error(a(308));tn=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else tn=tn.next=r;return n}var ex=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){r.aborted=!0,t.forEach(function(n){return n()})}},tx=s.unstable_scheduleCallback,rx=s.unstable_NormalPriority,cr={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new ex,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&tx(rx,function(){t.controller.abort()})}var fo=null,Fu=0,is=0,ns=null;function ix(t,r){if(fo===null){var n=fo=[];Fu=0,is=Hd(),ns={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Fu++,r.then(rm,rm),r}function rm(){if(--Fu===0&&fo!==null){ns!==null&&(ns.status="fulfilled");var t=fo;fo=null,is=0,ns=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function nx(t,r){var n=[],o={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return t.then(function(){o.status="fulfilled",o.value=r;for(var u=0;u<n.length;u++)(0,n[u])(r)},function(u){for(o.status="rejected",o.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),o}var im=U.S;U.S=function(t,r){Bg=Ce(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&ix(t,r),im!==null&&im(t,r)};var Ea=I(null);function zu(){var t=Ea.current;return t!==null?t:Zt.pooledCache}function Tl(t,r){r===null?ge(Ea,Ea.current):ge(Ea,r.pool)}function nm(){var t=zu();return t===null?null:{parent:cr._currentValue,pool:t}}var as=Error(a(460)),Bu=Error(a(474)),Al=Error(a(542)),Cl={then:function(){}};function am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function sm(t,r,n){switch(n=t[n],n===void 0?t.push(r):n!==r&&(r.then($i,$i),r=n),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,lm(t),t;default:if(typeof r.status=="string")r.then($i,$i);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=r,t.status="pending",t.then(function(o){if(r.status==="pending"){var u=r;u.status="fulfilled",u.value=o}},function(o){if(r.status==="pending"){var u=r;u.status="rejected",u.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,lm(t),t}throw Ta=r,as}}function wa(t){try{var r=t._init;return r(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ta=n,as):n}}var Ta=null;function om(){if(Ta===null)throw Error(a(459));var t=Ta;return Ta=null,t}function lm(t){if(t===as||t===Al)throw Error(a(483))}var ss=null,ho=0;function Rl(t){var r=ho;return ho+=1,ss===null&&(ss=[]),sm(ss,t,r)}function po(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Pl(t,r){throw r.$$typeof===g?Error(a(525)):(t=Object.prototype.toString.call(r),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function cm(t){function r($,j){if(t){var ie=$.deletions;ie===null?($.deletions=[j],$.flags|=16):ie.push(j)}}function n($,j){if(!t)return null;for(;j!==null;)r($,j),j=j.sibling;return null}function o($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=Ji($,j),$.index=0,$.sibling=null,$}function f($,j,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<j?($.flags|=67108866,j):ie):($.flags|=67108866,j)):($.flags|=1048576,j)}function _($){return t&&$.alternate===null&&($.flags|=67108866),$}function A($,j,ie,_e){return j===null||j.tag!==6?(j=Cu(ie,$.mode,_e),j.return=$,j):(j=u(j,ie),j.return=$,j)}function B($,j,ie,_e){var it=ie.type;return it===P?me($,j,ie.props.children,_e,ie.key):j!==null&&(j.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===w&&wa(it)===j.type)?(j=u(j,ie.props),po(j,ie),j.return=$,j):(j=Sl(ie.type,ie.key,ie.props,null,$.mode,_e),po(j,ie),j.return=$,j)}function ne($,j,ie,_e){return j===null||j.tag!==4||j.stateNode.containerInfo!==ie.containerInfo||j.stateNode.implementation!==ie.implementation?(j=Ru(ie,$.mode,_e),j.return=$,j):(j=u(j,ie.children||[]),j.return=$,j)}function me($,j,ie,_e,it){return j===null||j.tag!==7?(j=xa(ie,$.mode,_e,it),j.return=$,j):(j=u(j,ie),j.return=$,j)}function xe($,j,ie){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Cu(""+j,$.mode,ie),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return ie=Sl(j.type,j.key,j.props,null,$.mode,ie),po(ie,j),ie.return=$,ie;case E:return j=Ru(j,$.mode,ie),j.return=$,j;case w:return j=wa(j),xe($,j,ie)}if(q(j)||G(j))return j=xa(j,$.mode,ie,null),j.return=$,j;if(typeof j.then=="function")return xe($,Rl(j),ie);if(j.$$typeof===D)return xe($,wl($,j),ie);Pl($,j)}return null}function ce($,j,ie,_e){var it=j!==null?j.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return it!==null?null:A($,j,""+ie,_e);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case x:return ie.key===it?B($,j,ie,_e):null;case E:return ie.key===it?ne($,j,ie,_e):null;case w:return ie=wa(ie),ce($,j,ie,_e)}if(q(ie)||G(ie))return it!==null?null:me($,j,ie,_e,null);if(typeof ie.then=="function")return ce($,j,Rl(ie),_e);if(ie.$$typeof===D)return ce($,j,wl($,ie),_e);Pl($,ie)}return null}function de($,j,ie,_e,it){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return $=$.get(ie)||null,A(j,$,""+_e,it);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return $=$.get(_e.key===null?ie:_e.key)||null,B(j,$,_e,it);case E:return $=$.get(_e.key===null?ie:_e.key)||null,ne(j,$,_e,it);case w:return _e=wa(_e),de($,j,ie,_e,it)}if(q(_e)||G(_e))return $=$.get(ie)||null,me(j,$,_e,it,null);if(typeof _e.then=="function")return de($,j,ie,Rl(_e),it);if(_e.$$typeof===D)return de($,j,ie,wl(j,_e),it);Pl(j,_e)}return null}function Ze($,j,ie,_e){for(var it=null,Ot=null,Qe=j,vt=j=0,Ct=null;Qe!==null&&vt<ie.length;vt++){Qe.index>vt?(Ct=Qe,Qe=null):Ct=Qe.sibling;var kt=ce($,Qe,ie[vt],_e);if(kt===null){Qe===null&&(Qe=Ct);break}t&&Qe&&kt.alternate===null&&r($,Qe),j=f(kt,j,vt),Ot===null?it=kt:Ot.sibling=kt,Ot=kt,Qe=Ct}if(vt===ie.length)return n($,Qe),Pt&&en($,vt),it;if(Qe===null){for(;vt<ie.length;vt++)Qe=xe($,ie[vt],_e),Qe!==null&&(j=f(Qe,j,vt),Ot===null?it=Qe:Ot.sibling=Qe,Ot=Qe);return Pt&&en($,vt),it}for(Qe=o(Qe);vt<ie.length;vt++)Ct=de(Qe,$,vt,ie[vt],_e),Ct!==null&&(t&&Ct.alternate!==null&&Qe.delete(Ct.key===null?vt:Ct.key),j=f(Ct,j,vt),Ot===null?it=Ct:Ot.sibling=Ct,Ot=Ct);return t&&Qe.forEach(function(ta){return r($,ta)}),Pt&&en($,vt),it}function ct($,j,ie,_e){if(ie==null)throw Error(a(151));for(var it=null,Ot=null,Qe=j,vt=j=0,Ct=null,kt=ie.next();Qe!==null&&!kt.done;vt++,kt=ie.next()){Qe.index>vt?(Ct=Qe,Qe=null):Ct=Qe.sibling;var ta=ce($,Qe,kt.value,_e);if(ta===null){Qe===null&&(Qe=Ct);break}t&&Qe&&ta.alternate===null&&r($,Qe),j=f(ta,j,vt),Ot===null?it=ta:Ot.sibling=ta,Ot=ta,Qe=Ct}if(kt.done)return n($,Qe),Pt&&en($,vt),it;if(Qe===null){for(;!kt.done;vt++,kt=ie.next())kt=xe($,kt.value,_e),kt!==null&&(j=f(kt,j,vt),Ot===null?it=kt:Ot.sibling=kt,Ot=kt);return Pt&&en($,vt),it}for(Qe=o(Qe);!kt.done;vt++,kt=ie.next())kt=de(Qe,$,vt,kt.value,_e),kt!==null&&(t&&kt.alternate!==null&&Qe.delete(kt.key===null?vt:kt.key),j=f(kt,j,vt),Ot===null?it=kt:Ot.sibling=kt,Ot=kt);return t&&Qe.forEach(function(m1){return r($,m1)}),Pt&&en($,vt),it}function Kt($,j,ie,_e){if(typeof ie=="object"&&ie!==null&&ie.type===P&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case x:e:{for(var it=ie.key;j!==null;){if(j.key===it){if(it=ie.type,it===P){if(j.tag===7){n($,j.sibling),_e=u(j,ie.props.children),_e.return=$,$=_e;break e}}else if(j.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===w&&wa(it)===j.type){n($,j.sibling),_e=u(j,ie.props),po(_e,ie),_e.return=$,$=_e;break e}n($,j);break}else r($,j);j=j.sibling}ie.type===P?(_e=xa(ie.props.children,$.mode,_e,ie.key),_e.return=$,$=_e):(_e=Sl(ie.type,ie.key,ie.props,null,$.mode,_e),po(_e,ie),_e.return=$,$=_e)}return _($);case E:e:{for(it=ie.key;j!==null;){if(j.key===it)if(j.tag===4&&j.stateNode.containerInfo===ie.containerInfo&&j.stateNode.implementation===ie.implementation){n($,j.sibling),_e=u(j,ie.children||[]),_e.return=$,$=_e;break e}else{n($,j);break}else r($,j);j=j.sibling}_e=Ru(ie,$.mode,_e),_e.return=$,$=_e}return _($);case w:return ie=wa(ie),Kt($,j,ie,_e)}if(q(ie))return Ze($,j,ie,_e);if(G(ie)){if(it=G(ie),typeof it!="function")throw Error(a(150));return ie=it.call(ie),ct($,j,ie,_e)}if(typeof ie.then=="function")return Kt($,j,Rl(ie),_e);if(ie.$$typeof===D)return Kt($,j,wl($,ie),_e);Pl($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,j!==null&&j.tag===6?(n($,j.sibling),_e=u(j,ie),_e.return=$,$=_e):(n($,j),_e=Cu(ie,$.mode,_e),_e.return=$,$=_e),_($)):n($,j)}return function($,j,ie,_e){try{ho=0;var it=Kt($,j,ie,_e);return ss=null,it}catch(Qe){if(Qe===as||Qe===Al)throw Qe;var Ot=Qr(29,Qe,null,$.mode);return Ot.lanes=_e,Ot.return=$,Ot}}}var Aa=cm(!0),um=cm(!1),Fn=!1;function Hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(t,r,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),o.pending=r,r=bl(t),qp(t,null,n),r}return xl(t,o,r,n),bl(t)}function mo(t,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194048)!==0)){var o=r.lanes;o&=t.pendingLanes,n|=o,r.lanes=n,li(t,n)}}function Gu(t,r){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var u=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var _={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,n=n.next}while(n!==null);f===null?u=f=r:f=f.next=r}else u=f=r;n={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=r:t.next=r,n.lastBaseUpdate=r}var Wu=!1;function go(){if(Wu){var t=ns;if(t!==null)throw t}}function vo(t,r,n,o){Wu=!1;var u=t.updateQueue;Fn=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,ne=B.next;B.next=null,_===null?f=ne:_.next=ne,_=B;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==_&&(A===null?me.firstBaseUpdate=ne:A.next=ne,me.lastBaseUpdate=B))}if(f!==null){var xe=u.baseState;_=0,me=ne=B=null,A=f;do{var ce=A.lane&-536870913,de=ce!==A.lane;if(de?(At&ce)===ce:(o&ce)===ce){ce!==0&&ce===is&&(Wu=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ze=t,ct=A;ce=r;var Kt=n;switch(ct.tag){case 1:if(Ze=ct.payload,typeof Ze=="function"){xe=Ze.call(Kt,xe,ce);break e}xe=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=ct.payload,ce=typeof Ze=="function"?Ze.call(Kt,xe,ce):Ze,ce==null)break e;xe=y({},xe,ce);break e;case 2:Fn=!0}}ce=A.callback,ce!==null&&(t.flags|=64,de&&(t.flags|=8192),de=u.callbacks,de===null?u.callbacks=[ce]:de.push(ce))}else de={lane:ce,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(ne=me=de,B=xe):me=me.next=de,_|=ce;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;de=A,A=de.next,de.next=null,u.lastBaseUpdate=de,u.shared.pending=null}}while(!0);me===null&&(B=xe),u.baseState=B,u.firstBaseUpdate=ne,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),jn|=_,t.lanes=_,t.memoizedState=xe}}function dm(t,r){if(typeof t!="function")throw Error(a(191,t));t.call(r)}function fm(t,r){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)dm(n[t],r)}var os=I(null),Nl=I(0);function hm(t,r){t=fn,ge(Nl,t),ge(os,r),fn=t|r.baseLanes}function ju(){ge(Nl,fn),ge(os,os.current)}function Xu(){fn=Nl.current,J(os),J(Nl)}var Jr=I(null),Si=null;function Hn(t){var r=t.alternate;ge(sr,sr.current&1),ge(Jr,t),Si===null&&(r===null||os.current!==null||r.memoizedState!==null)&&(Si=t)}function qu(t){ge(sr,sr.current),ge(Jr,t),Si===null&&(Si=t)}function pm(t){t.tag===22?(ge(sr,sr.current),ge(Jr,t),Si===null&&(Si=t)):Vn()}function Vn(){ge(sr,sr.current),ge(Jr,Jr.current)}function ei(t){J(Jr),Si===t&&(Si=null),J(sr)}var sr=I(0);function Ll(t){for(var r=t;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Jd(n)||ef(n)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var nn=0,mt=null,qt=null,ur=null,Dl=!1,ls=!1,Ca=!1,Ul=0,_o=0,cs=null,ax=0;function ir(){throw Error(a(321))}function Yu(t,r){if(r===null)return!1;for(var n=0;n<r.length&&n<t.length;n++)if(!$r(t[n],r[n]))return!1;return!0}function Ku(t,r,n,o,u,f){return nn=f,mt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,U.H=t===null||t.memoizedState===null?$m:ud,Ca=!1,f=n(o,u),Ca=!1,ls&&(f=gm(r,n,o,u)),mm(t),f}function mm(t){U.H=bo;var r=qt!==null&&qt.next!==null;if(nn=0,ur=qt=mt=null,Dl=!1,_o=0,cs=null,r)throw Error(a(300));t===null||dr||(t=t.dependencies,t!==null&&El(t)&&(dr=!0))}function gm(t,r,n,o){mt=t;var u=0;do{if(ls&&(cs=null),_o=0,ls=!1,25<=u)throw Error(a(301));if(u+=1,ur=qt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=Qm,f=r(n,o)}while(ls);return f}function sx(){var t=U.H,r=t.useState()[0];return r=typeof r.then=="function"?yo(r):r,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(mt.flags|=1024),r}function Zu(){var t=Ul!==0;return Ul=0,t}function $u(t,r,n){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~n}function Qu(t){if(Dl){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Dl=!1}nn=0,ur=qt=mt=null,ls=!1,_o=Ul=0,cs=null}function kr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ur===null?mt.memoizedState=ur=t:ur=ur.next=t,ur}function or(){if(qt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var r=ur===null?mt.memoizedState:ur.next;if(r!==null)ur=r,qt=t;else{if(t===null)throw mt.alternate===null?Error(a(467)):Error(a(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},ur===null?mt.memoizedState=ur=t:ur=ur.next=t}return ur}function Il(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var r=_o;return _o+=1,cs===null&&(cs=[]),t=sm(cs,t,r),r=mt,(ur===null?r.memoizedState:ur.next)===null&&(r=r.alternate,U.H=r===null||r.memoizedState===null?$m:ud),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===D)return Tr(t)}throw Error(a(438,String(t)))}function Ju(t){var r=null,n=mt.updateQueue;if(n!==null&&(r=n.memoCache),r==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(u){return u.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),n===null&&(n=Il(),mt.updateQueue=n),n.memoCache=r,n=r.data[r.index],n===void 0)for(n=r.data[r.index]=Array(t),o=0;o<t;o++)n[o]=X;return r.index++,n}function an(t,r){return typeof r=="function"?r(t):r}function kl(t){var r=or();return ed(r,qt,t)}function ed(t,r,n){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=n;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}r.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{r=u.next;var A=_=null,B=null,ne=r,me=!1;do{var xe=ne.lane&-536870913;if(xe!==ne.lane?(At&xe)===xe:(nn&xe)===xe){var ce=ne.revertLane;if(ce===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),xe===is&&(me=!0);else if((nn&ce)===ce){ne=ne.next,ce===is&&(me=!0);continue}else xe={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(A=B=xe,_=f):B=B.next=xe,mt.lanes|=ce,jn|=ce;xe=ne.action,Ca&&n(f,xe),f=ne.hasEagerState?ne.eagerState:n(f,xe)}else ce={lane:xe,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},B===null?(A=B=ce,_=f):B=B.next=ce,mt.lanes|=xe,jn|=xe;ne=ne.next}while(ne!==null&&ne!==r);if(B===null?_=f:B.next=A,!$r(f,t.memoizedState)&&(dr=!0,me&&(n=ns,n!==null)))throw n;t.memoizedState=f,t.baseState=_,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function td(t){var r=or(),n=r.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=t;var o=n.dispatch,u=n.pending,f=r.memoizedState;if(u!==null){n.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);$r(f,r.memoizedState)||(dr=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),n.lastRenderedState=f}return[f,o]}function vm(t,r,n){var o=mt,u=or(),f=Pt;if(f){if(n===void 0)throw Error(a(407));n=n()}else n=r();var _=!$r((qt||u).memoizedState,n);if(_&&(u.memoizedState=n,dr=!0),u=u.queue,nd(xm.bind(null,o,u,t),[t]),u.getSnapshot!==r||_||ur!==null&&ur.memoizedState.tag&1){if(o.flags|=2048,us(9,{destroy:void 0},ym.bind(null,o,u,n,r),null),Zt===null)throw Error(a(349));f||(nn&127)!==0||_m(o,r,n)}return n}function _m(t,r,n){t.flags|=16384,t={getSnapshot:r,value:n},r=mt.updateQueue,r===null?(r=Il(),mt.updateQueue=r,r.stores=[t]):(n=r.stores,n===null?r.stores=[t]:n.push(t))}function ym(t,r,n,o){r.value=n,r.getSnapshot=o,bm(r)&&Sm(t)}function xm(t,r,n){return n(function(){bm(r)&&Sm(t)})}function bm(t){var r=t.getSnapshot;t=t.value;try{var n=r();return!$r(t,n)}catch{return!0}}function Sm(t){var r=ya(t,2);r!==null&&jr(r,t,2)}function rd(t){var r=kr();if(typeof t=="function"){var n=t;if(t=n(),Ca){Oe(!0);try{n()}finally{Oe(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:t},r}function Mm(t,r,n,o){return t.baseState=n,ed(t,qt,typeof o=="function"?o:an)}function ox(t,r,n,o,u){if(Bl(t))throw Error(a(485));if(t=r.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?n(!0):f.isTransition=!1,o(f),n=r.pending,n===null?(f.next=r.pending=f,Em(r,f)):(f.next=n.next,r.pending=n.next=f)}}function Em(t,r){var n=r.action,o=r.payload,u=t.state;if(r.isTransition){var f=U.T,_={};U.T=_;try{var A=n(u,o),B=U.S;B!==null&&B(_,A),wm(t,r,A)}catch(ne){id(t,r,ne)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=n(u,o),wm(t,r,f)}catch(ne){id(t,r,ne)}}function wm(t,r,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Tm(t,r,o)},function(o){return id(t,r,o)}):Tm(t,r,n)}function Tm(t,r,n){r.status="fulfilled",r.value=n,Am(r),t.state=n,r=t.pending,r!==null&&(n=r.next,n===r?t.pending=null:(n=n.next,r.next=n,Em(t,n)))}function id(t,r,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=n,Am(r),r=r.next;while(r!==o)}t.action=null}function Am(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Cm(t,r){return r}function Rm(t,r){if(Pt){var n=Zt.formState;if(n!==null){e:{var o=mt;if(Pt){if($t){t:{for(var u=$t,f=hi;u.nodeType!==8;){if(!f){u=null;break t}if(u=pi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=pi(u.nextSibling),o=u.data==="F!";break e}}On(o)}o=!1}o&&(r=n[0])}}return n=kr(),n.memoizedState=n.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:r},n.queue=o,n=Ym.bind(null,mt,o),o.dispatch=n,o=rd(!1),f=cd.bind(null,mt,!1,o.queue),o=kr(),u={state:r,dispatch:null,action:t,pending:null},o.queue=u,n=ox.bind(null,mt,u,f,n),u.dispatch=n,o.memoizedState=t,[r,n,!1]}function Pm(t){var r=or();return Nm(r,qt,t)}function Nm(t,r,n){if(r=ed(t,r,Cm)[0],t=kl(an)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var o=yo(r)}catch(_){throw _===as?Al:_}else o=r;r=or();var u=r.queue,f=u.dispatch;return n!==r.memoizedState&&(mt.flags|=2048,us(9,{destroy:void 0},lx.bind(null,u,n),null)),[o,f,t]}function lx(t,r){t.action=r}function Lm(t){var r=or(),n=qt;if(n!==null)return Nm(r,n,t);or(),r=r.memoizedState,n=or();var o=n.queue.dispatch;return n.memoizedState=t,[r,o,!1]}function us(t,r,n,o){return t={tag:t,create:n,deps:o,inst:r,next:null},r=mt.updateQueue,r===null&&(r=Il(),mt.updateQueue=r),n=r.lastEffect,n===null?r.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,r.lastEffect=t),t}function Dm(){return or().memoizedState}function Fl(t,r,n,o){var u=kr();mt.flags|=t,u.memoizedState=us(1|r,{destroy:void 0},n,o===void 0?null:o)}function zl(t,r,n,o){var u=or();o=o===void 0?null:o;var f=u.memoizedState.inst;qt!==null&&o!==null&&Yu(o,qt.memoizedState.deps)?u.memoizedState=us(r,f,n,o):(mt.flags|=t,u.memoizedState=us(1|r,f,n,o))}function Um(t,r){Fl(8390656,8,t,r)}function nd(t,r){zl(2048,8,t,r)}function cx(t){mt.flags|=4;var r=mt.updateQueue;if(r===null)r=Il(),mt.updateQueue=r,r.events=[t];else{var n=r.events;n===null?r.events=[t]:n.push(t)}}function Im(t){var r=or().memoizedState;return cx({ref:r,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}function Om(t,r){return zl(4,2,t,r)}function km(t,r){return zl(4,4,t,r)}function Fm(t,r){if(typeof r=="function"){t=t();var n=r(t);return function(){typeof n=="function"?n():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function zm(t,r,n){n=n!=null?n.concat([t]):null,zl(4,4,Fm.bind(null,r,t),n)}function ad(){}function Bm(t,r){var n=or();r=r===void 0?null:r;var o=n.memoizedState;return r!==null&&Yu(r,o[1])?o[0]:(n.memoizedState=[t,r],t)}function Hm(t,r){var n=or();r=r===void 0?null:r;var o=n.memoizedState;if(r!==null&&Yu(r,o[1]))return o[0];if(o=t(),Ca){Oe(!0);try{t()}finally{Oe(!1)}}return n.memoizedState=[o,r],o}function sd(t,r,n){return n===void 0||(nn&1073741824)!==0&&(At&261930)===0?t.memoizedState=r:(t.memoizedState=n,t=Vg(),mt.lanes|=t,jn|=t,n)}function Vm(t,r,n,o){return $r(n,r)?n:os.current!==null?(t=sd(t,n,o),$r(t,r)||(dr=!0),t):(nn&42)===0||(nn&1073741824)!==0&&(At&261930)===0?(dr=!0,t.memoizedState=n):(t=Vg(),mt.lanes|=t,jn|=t,r)}function Gm(t,r,n,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var _=U.T,A={};U.T=A,cd(t,!1,r,n);try{var B=u(),ne=U.S;if(ne!==null&&ne(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var me=nx(B,o);xo(t,r,me,ii(t))}else xo(t,r,o,ii(t))}catch(xe){xo(t,r,{then:function(){},status:"rejected",reason:xe},ii())}finally{z.p=f,_!==null&&A.types!==null&&(_.types=A.types),U.T=_}}function ux(){}function od(t,r,n,o){if(t.tag!==5)throw Error(a(476));var u=Wm(t).queue;Gm(t,u,r,re,n===null?ux:function(){return jm(t),n(o)})}function Wm(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:re},next:null};var n={};return r.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:an,lastRenderedState:n},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function jm(t){var r=Wm(t);r.next===null&&(r=t.alternate.memoizedState),xo(t,r.next.queue,{},ii())}function ld(){return Tr(ko)}function Xm(){return or().memoizedState}function qm(){return or().memoizedState}function dx(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var n=ii();t=zn(n);var o=Bn(r,t,n);o!==null&&(jr(o,r,n),mo(o,r,n)),r={cache:ku()},t.payload=r;return}r=r.return}}function fx(t,r,n){var o=ii();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bl(t)?Km(r,n):(n=Tu(t,r,n,o),n!==null&&(jr(n,t,o),Zm(n,r,o)))}function Ym(t,r,n){var o=ii();xo(t,r,n,o)}function xo(t,r,n,o){var u={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bl(t))Km(r,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,A=f(_,n);if(u.hasEagerState=!0,u.eagerState=A,$r(A,_))return xl(t,r,u,0),Zt===null&&yl(),!1}catch{}if(n=Tu(t,r,u,o),n!==null)return jr(n,t,o),Zm(n,r,o),!0}return!1}function cd(t,r,n,o){if(o={lane:2,revertLane:Hd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Bl(t)){if(r)throw Error(a(479))}else r=Tu(t,n,o,2),r!==null&&jr(r,t,2)}function Bl(t){var r=t.alternate;return t===mt||r!==null&&r===mt}function Km(t,r){ls=Dl=!0;var n=t.pending;n===null?r.next=r:(r.next=n.next,n.next=r),t.pending=r}function Zm(t,r,n){if((n&4194048)!==0){var o=r.lanes;o&=t.pendingLanes,n|=o,r.lanes=n,li(t,n)}}var bo={readContext:Tr,use:Ol,useCallback:ir,useContext:ir,useEffect:ir,useImperativeHandle:ir,useLayoutEffect:ir,useInsertionEffect:ir,useMemo:ir,useReducer:ir,useRef:ir,useState:ir,useDebugValue:ir,useDeferredValue:ir,useTransition:ir,useSyncExternalStore:ir,useId:ir,useHostTransitionStatus:ir,useFormState:ir,useActionState:ir,useOptimistic:ir,useMemoCache:ir,useCacheRefresh:ir};bo.useEffectEvent=ir;var $m={readContext:Tr,use:Ol,useCallback:function(t,r){return kr().memoizedState=[t,r===void 0?null:r],t},useContext:Tr,useEffect:Um,useImperativeHandle:function(t,r,n){n=n!=null?n.concat([t]):null,Fl(4194308,4,Fm.bind(null,r,t),n)},useLayoutEffect:function(t,r){return Fl(4194308,4,t,r)},useInsertionEffect:function(t,r){Fl(4,2,t,r)},useMemo:function(t,r){var n=kr();r=r===void 0?null:r;var o=t();if(Ca){Oe(!0);try{t()}finally{Oe(!1)}}return n.memoizedState=[o,r],o},useReducer:function(t,r,n){var o=kr();if(n!==void 0){var u=n(r);if(Ca){Oe(!0);try{n(r)}finally{Oe(!1)}}}else u=r;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=fx.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var r=kr();return t={current:t},r.memoizedState=t},useState:function(t){t=rd(t);var r=t.queue,n=Ym.bind(null,mt,r);return r.dispatch=n,[t.memoizedState,n]},useDebugValue:ad,useDeferredValue:function(t,r){var n=kr();return sd(n,t,r)},useTransition:function(){var t=rd(!1);return t=Gm.bind(null,mt,t.queue,!0,!1),kr().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,n){var o=mt,u=kr();if(Pt){if(n===void 0)throw Error(a(407));n=n()}else{if(n=r(),Zt===null)throw Error(a(349));(At&127)!==0||_m(o,r,n)}u.memoizedState=n;var f={value:n,getSnapshot:r};return u.queue=f,Um(xm.bind(null,o,f,t),[t]),o.flags|=2048,us(9,{destroy:void 0},ym.bind(null,o,f,n,r),null),n},useId:function(){var t=kr(),r=Zt.identifierPrefix;if(Pt){var n=Li,o=Ni;n=(o&~(1<<32-ke(o)-1)).toString(32)+n,r="_"+r+"R_"+n,n=Ul++,0<n&&(r+="H"+n.toString(32)),r+="_"}else n=ax++,r="_"+r+"r_"+n.toString(32)+"_";return t.memoizedState=r},useHostTransitionStatus:ld,useFormState:Rm,useActionState:Rm,useOptimistic:function(t){var r=kr();r.memoizedState=r.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=n,r=cd.bind(null,mt,!0,n),n.dispatch=r,[t,r]},useMemoCache:Ju,useCacheRefresh:function(){return kr().memoizedState=dx.bind(null,mt)},useEffectEvent:function(t){var r=kr(),n={impl:t};return r.memoizedState=n,function(){if((Ft&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}},ud={readContext:Tr,use:Ol,useCallback:Bm,useContext:Tr,useEffect:nd,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:km,useMemo:Hm,useReducer:kl,useRef:Dm,useState:function(){return kl(an)},useDebugValue:ad,useDeferredValue:function(t,r){var n=or();return Vm(n,qt.memoizedState,t,r)},useTransition:function(){var t=kl(an)[0],r=or().memoizedState;return[typeof t=="boolean"?t:yo(t),r]},useSyncExternalStore:vm,useId:Xm,useHostTransitionStatus:ld,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,r){var n=or();return Mm(n,qt,t,r)},useMemoCache:Ju,useCacheRefresh:qm};ud.useEffectEvent=Im;var Qm={readContext:Tr,use:Ol,useCallback:Bm,useContext:Tr,useEffect:nd,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:km,useMemo:Hm,useReducer:td,useRef:Dm,useState:function(){return td(an)},useDebugValue:ad,useDeferredValue:function(t,r){var n=or();return qt===null?sd(n,t,r):Vm(n,qt.memoizedState,t,r)},useTransition:function(){var t=td(an)[0],r=or().memoizedState;return[typeof t=="boolean"?t:yo(t),r]},useSyncExternalStore:vm,useId:Xm,useHostTransitionStatus:ld,useFormState:Lm,useActionState:Lm,useOptimistic:function(t,r){var n=or();return qt!==null?Mm(n,qt,t,r):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:qm};Qm.useEffectEvent=Im;function dd(t,r,n,o){r=t.memoizedState,n=n(o,r),n=n==null?r:y({},r,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fd={enqueueSetState:function(t,r,n){t=t._reactInternals;var o=ii(),u=zn(o);u.payload=r,n!=null&&(u.callback=n),r=Bn(t,u,o),r!==null&&(jr(r,t,o),mo(r,t,o))},enqueueReplaceState:function(t,r,n){t=t._reactInternals;var o=ii(),u=zn(o);u.tag=1,u.payload=r,n!=null&&(u.callback=n),r=Bn(t,u,o),r!==null&&(jr(r,t,o),mo(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var n=ii(),o=zn(n);o.tag=2,r!=null&&(o.callback=r),r=Bn(t,o,n),r!==null&&(jr(r,t,n),mo(r,t,n))}};function Jm(t,r,n,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):r.prototype&&r.prototype.isPureReactComponent?!so(n,o)||!so(u,f):!0}function eg(t,r,n,o){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==t&&fd.enqueueReplaceState(r,r.state,null)}function Ra(t,r){var n=r;if("ref"in r){n={};for(var o in r)o!=="ref"&&(n[o]=r[o])}if(t=t.defaultProps){n===r&&(n=y({},n));for(var u in t)n[u]===void 0&&(n[u]=t[u])}return n}function tg(t){_l(t)}function rg(t){console.error(t)}function ig(t){_l(t)}function Hl(t,r){try{var n=t.onUncaughtError;n(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function ng(t,r,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hd(t,r,n){return n=zn(n),n.tag=3,n.payload={element:null},n.callback=function(){Hl(t,r)},n}function ag(t){return t=zn(t),t.tag=3,t}function sg(t,r,n,o){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){ng(r,n,o)}}var _=n.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){ng(r,n,o),typeof u!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function hx(t,r,n,o,u){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=n.alternate,r!==null&&rs(r,n,u,!0),n=Jr.current,n!==null){switch(n.tag){case 31:case 13:return Si===null?Jl():n.alternate===null&&nr===0&&(nr=3),n.flags&=-257,n.flags|=65536,n.lanes=u,o===Cl?n.flags|=16384:(r=n.updateQueue,r===null?n.updateQueue=new Set([o]):r.add(o),Fd(t,o,u)),!1;case 22:return n.flags|=65536,o===Cl?n.flags|=16384:(r=n.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=r):(n=r.retryQueue,n===null?r.retryQueue=new Set([o]):n.add(o)),Fd(t,o,u)),!1}throw Error(a(435,n.tag))}return Fd(t,o,u),Jl(),!1}if(Pt)return r=Jr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=u,o!==Lu&&(t=Error(a(422),{cause:o}),co(ui(t,n)))):(o!==Lu&&(r=Error(a(423),{cause:o}),co(ui(r,n))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,n),u=hd(t.stateNode,o,u),Gu(t,u),nr!==4&&(nr=2)),!1;var f=Error(a(520),{cause:o});if(f=ui(f,n),Ro===null?Ro=[f]:Ro.push(f),nr!==4&&(nr=2),r===null)return!0;o=ui(o,n),n=r;do{switch(n.tag){case 3:return n.flags|=65536,t=u&-u,n.lanes|=t,t=hd(n.stateNode,o,t),Gu(n,t),!1;case 1:if(r=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xn===null||!Xn.has(f))))return n.flags|=65536,u&=-u,n.lanes|=u,u=ag(u),sg(u,t,n,o),Gu(n,u),!1}n=n.return}while(n!==null);return!1}var pd=Error(a(461)),dr=!1;function Ar(t,r,n,o){r.child=t===null?um(r,null,n,o):Aa(r,t.child,n,o)}function og(t,r,n,o,u){n=n.render;var f=r.ref;if("ref"in o){var _={};for(var A in o)A!=="ref"&&(_[A]=o[A])}else _=o;return Ma(r),o=Ku(t,r,n,_,f,u),A=Zu(),t!==null&&!dr?($u(t,r,u),sn(t,r,u)):(Pt&&A&&Pu(r),r.flags|=1,Ar(t,r,o,u),r.child)}function lg(t,r,n,o,u){if(t===null){var f=n.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&n.compare===null?(r.tag=15,r.type=f,cg(t,r,f,o,u)):(t=Sl(n.type,null,o,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(f=t.child,!Sd(t,u)){var _=f.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(_,o)&&t.ref===r.ref)return sn(t,r,u)}return r.flags|=1,t=Ji(f,o),t.ref=r.ref,t.return=r,r.child=t}function cg(t,r,n,o,u){if(t!==null){var f=t.memoizedProps;if(so(f,o)&&t.ref===r.ref)if(dr=!1,r.pendingProps=o=f,Sd(t,u))(t.flags&131072)!==0&&(dr=!0);else return r.lanes=t.lanes,sn(t,r,u)}return md(t,r,n,o,u)}function ug(t,r,n,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((r.flags&128)!==0){if(f=f!==null?f.baseLanes|n:n,t!==null){for(o=r.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,r.child=null;return dg(t,r,f,n,o)}if((n&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Tl(r,f!==null?f.cachePool:null),f!==null?hm(r,f):ju(),pm(r);else return o=r.lanes=536870912,dg(t,r,f!==null?f.baseLanes|n:n,n,o)}else f!==null?(Tl(r,f.cachePool),hm(r,f),Vn(),r.memoizedState=null):(t!==null&&Tl(r,null),ju(),Vn());return Ar(t,r,u,n),r.child}function So(t,r){return t!==null&&t.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function dg(t,r,n,o,u){var f=zu();return f=f===null?null:{parent:cr._currentValue,pool:f},r.memoizedState={baseLanes:n,cachePool:f},t!==null&&Tl(r,null),ju(),pm(r),t!==null&&rs(t,r,o,!0),r.childLanes=u,null}function Vl(t,r){return r=Wl({mode:r.mode,children:r.children},t.mode),r.ref=t.ref,t.child=r,r.return=t,r}function fg(t,r,n){return Aa(r,t.child,null,n),t=Vl(r,r.pendingProps),t.flags|=2,ei(r),r.memoizedState=null,t}function px(t,r,n){var o=r.pendingProps,u=(r.flags&128)!==0;if(r.flags&=-129,t===null){if(Pt){if(o.mode==="hidden")return t=Vl(r,o),r.lanes=536870912,So(null,t);if(qu(r),(t=$t)?(t=Ev(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:Un!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},n=Kp(t),n.return=r,r.child=n,wr=r,$t=null)):t=null,t===null)throw On(r);return r.lanes=536870912,null}return Vl(r,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(qu(r),u)if(r.flags&256)r.flags&=-257,r=fg(t,r,n);else if(r.memoizedState!==null)r.child=t.child,r.flags|=128,r=null;else throw Error(a(558));else if(dr||rs(t,r,n,!1),u=(n&t.childLanes)!==0,dr||u){if(o=Zt,o!==null&&(_=Yr(o,n),_!==0&&_!==f.retryLane))throw f.retryLane=_,ya(t,_),jr(o,t,_),pd;Jl(),r=fg(t,r,n)}else t=f.treeContext,$t=pi(_.nextSibling),wr=r,Pt=!0,In=null,hi=!1,t!==null&&Qp(r,t),r=Vl(r,o),r.flags|=4096;return r}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=r.ref,r.child=t,t.return=r,t}function Gl(t,r){var n=r.ref;if(n===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(a(284));(t===null||t.ref!==n)&&(r.flags|=4194816)}}function md(t,r,n,o,u){return Ma(r),n=Ku(t,r,n,o,void 0,u),o=Zu(),t!==null&&!dr?($u(t,r,u),sn(t,r,u)):(Pt&&o&&Pu(r),r.flags|=1,Ar(t,r,n,u),r.child)}function hg(t,r,n,o,u,f){return Ma(r),r.updateQueue=null,n=gm(r,o,n,u),mm(t),o=Zu(),t!==null&&!dr?($u(t,r,f),sn(t,r,f)):(Pt&&o&&Pu(r),r.flags|=1,Ar(t,r,n,f),r.child)}function pg(t,r,n,o,u){if(Ma(r),r.stateNode===null){var f=Qa,_=n.contextType;typeof _=="object"&&_!==null&&(f=Tr(_)),f=new n(o,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=fd,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=o,f.state=r.memoizedState,f.refs={},Hu(r),_=n.contextType,f.context=typeof _=="object"&&_!==null?Tr(_):Qa,f.state=r.memoizedState,_=n.getDerivedStateFromProps,typeof _=="function"&&(dd(r,n,_,o),f.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&fd.enqueueReplaceState(f,f.state,null),vo(r,o,f,u),go(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(t===null){f=r.stateNode;var A=r.memoizedProps,B=Ra(n,A);f.props=B;var ne=f.context,me=n.contextType;_=Qa,typeof me=="object"&&me!==null&&(_=Tr(me));var xe=n.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ne!==_)&&eg(r,f,o,_),Fn=!1;var ce=r.memoizedState;f.state=ce,vo(r,o,f,u),go(),ne=r.memoizedState,A||ce!==ne||Fn?(typeof xe=="function"&&(dd(r,n,xe,o),ne=r.memoizedState),(B=Fn||Jm(r,n,B,o,ce,ne,_))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=ne),f.props=o,f.state=ne,f.context=_,o=B):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{f=r.stateNode,Vu(t,r),_=r.memoizedProps,me=Ra(n,_),f.props=me,xe=r.pendingProps,ce=f.context,ne=n.contextType,B=Qa,typeof ne=="object"&&ne!==null&&(B=Tr(ne)),A=n.getDerivedStateFromProps,(ne=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||ce!==B)&&eg(r,f,o,B),Fn=!1,ce=r.memoizedState,f.state=ce,vo(r,o,f,u),go();var de=r.memoizedState;_!==xe||ce!==de||Fn||t!==null&&t.dependencies!==null&&El(t.dependencies)?(typeof A=="function"&&(dd(r,n,A,o),de=r.memoizedState),(me=Fn||Jm(r,n,me,o,ce,de,B)||t!==null&&t.dependencies!==null&&El(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,de,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,de,B)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=de),f.props=o,f.state=de,f.context=B,o=me):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&ce===t.memoizedState||(r.flags|=1024),o=!1)}return f=o,Gl(t,r),o=(r.flags&128)!==0,f||o?(f=r.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,t!==null&&o?(r.child=Aa(r,t.child,null,u),r.child=Aa(r,null,n,u)):Ar(t,r,n,u),r.memoizedState=f.state,t=r.child):t=sn(t,r,u),t}function mg(t,r,n,o){return ba(),r.flags|=256,Ar(t,r,n,o),r.child}var gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vd(t){return{baseLanes:t,cachePool:nm()}}function _d(t,r,n){return t=t!==null?t.childLanes&~n:0,r&&(t|=ri),t}function gg(t,r,n){var o=r.pendingProps,u=!1,f=(r.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(sr.current&2)!==0),_&&(u=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,t===null){if(Pt){if(u?Hn(r):Vn(),(t=$t)?(t=Ev(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(r.memoizedState={dehydrated:t,treeContext:Un!==null?{id:Ni,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},n=Kp(t),n.return=r,r.child=n,wr=r,$t=null)):t=null,t===null)throw On(r);return ef(t)?r.lanes=32:r.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Vn(),u=r.mode,A=Wl({mode:"hidden",children:A},u),o=xa(o,u,n,null),A.return=r,o.return=r,A.sibling=o,r.child=A,o=r.child,o.memoizedState=vd(n),o.childLanes=_d(t,_,n),r.memoizedState=gd,So(null,o)):(Hn(r),yd(r,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)r.flags&256?(Hn(r),r.flags&=-257,r=xd(t,r,n)):r.memoizedState!==null?(Vn(),r.child=t.child,r.flags|=128,r=null):(Vn(),A=o.fallback,u=r.mode,o=Wl({mode:"visible",children:o.children},u),A=xa(A,u,n,null),A.flags|=2,o.return=r,A.return=r,o.sibling=A,r.child=o,Aa(r,t.child,null,n),o=r.child,o.memoizedState=vd(n),o.childLanes=_d(t,_,n),r.memoizedState=gd,r=So(null,o));else if(Hn(r),ef(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var ne=_.dgst;_=ne,o=Error(a(419)),o.stack="",o.digest=_,co({value:o,source:null,stack:null}),r=xd(t,r,n)}else if(dr||rs(t,r,n,!1),_=(n&t.childLanes)!==0,dr||_){if(_=Zt,_!==null&&(o=Yr(_,n),o!==0&&o!==B.retryLane))throw B.retryLane=o,ya(t,o),jr(_,t,o),pd;Jd(A)||Jl(),r=xd(t,r,n)}else Jd(A)?(r.flags|=192,r.child=t.child,r=null):(t=B.treeContext,$t=pi(A.nextSibling),wr=r,Pt=!0,In=null,hi=!1,t!==null&&Qp(r,t),r=yd(r,o.children),r.flags|=4096);return r}return u?(Vn(),A=o.fallback,u=r.mode,B=t.child,ne=B.sibling,o=Ji(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,ne!==null?A=Ji(ne,A):(A=xa(A,u,n,null),A.flags|=2),A.return=r,o.return=r,o.sibling=A,r.child=o,So(null,o),o=r.child,A=t.child.memoizedState,A===null?A=vd(n):(u=A.cachePool,u!==null?(B=cr._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=nm(),A={baseLanes:A.baseLanes|n,cachePool:u}),o.memoizedState=A,o.childLanes=_d(t,_,n),r.memoizedState=gd,So(t.child,o)):(Hn(r),n=t.child,t=n.sibling,n=Ji(n,{mode:"visible",children:o.children}),n.return=r,n.sibling=null,t!==null&&(_=r.deletions,_===null?(r.deletions=[t],r.flags|=16):_.push(t)),r.child=n,r.memoizedState=null,n)}function yd(t,r){return r=Wl({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Wl(t,r){return t=Qr(22,t,null,r),t.lanes=0,t}function xd(t,r,n){return Aa(r,t.child,null,n),t=yd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function vg(t,r,n){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r),Iu(t.return,r,n)}function bd(t,r,n,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:u,treeForkCount:f}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=n,_.tailMode=u,_.treeForkCount=f)}function _g(t,r,n){var o=r.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=sr.current,A=(_&2)!==0;if(A?(_=_&1|2,r.flags|=128):_&=1,ge(sr,_),Ar(t,r,o,n),o=Pt?lo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vg(t,n,r);else if(t.tag===19)vg(t,n,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(n=r.child,u=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(u=n),n=n.sibling;n=u,n===null?(u=r.child,r.child=null):(u=n.sibling,n.sibling=null),bd(r,!1,u,n,f,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&Ll(t)===null){r.child=u;break}t=u.sibling,u.sibling=n,n=u,u=t}bd(r,!0,n,null,f,o);break;case"together":bd(r,!1,null,null,void 0,o);break;default:r.memoizedState=null}return r.child}function sn(t,r,n){if(t!==null&&(r.dependencies=t.dependencies),jn|=r.lanes,(n&r.childLanes)===0)if(t!==null){if(rs(t,r,n,!1),(n&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(a(153));if(r.child!==null){for(t=r.child,n=Ji(t,t.pendingProps),r.child=n,n.return=r;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=r;n.sibling=null}return r.child}function Sd(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&El(t)))}function mx(t,r,n){switch(r.tag){case 3:Se(r,r.stateNode.containerInfo),kn(r,cr,t.memoizedState.cache),ba();break;case 27:case 5:lt(r);break;case 4:Se(r,r.stateNode.containerInfo);break;case 10:kn(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,qu(r),null;break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(Hn(r),r.flags|=128,null):(n&r.child.childLanes)!==0?gg(t,r,n):(Hn(r),t=sn(t,r,n),t!==null?t.sibling:null);Hn(r);break;case 19:var u=(t.flags&128)!==0;if(o=(n&r.childLanes)!==0,o||(rs(t,r,n,!1),o=(n&r.childLanes)!==0),u){if(o)return _g(t,r,n);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ge(sr,sr.current),o)break;return null;case 22:return r.lanes=0,ug(t,r,n,r.pendingProps);case 24:kn(r,cr,t.memoizedState.cache)}return sn(t,r,n)}function yg(t,r,n){if(t!==null)if(t.memoizedProps!==r.pendingProps)dr=!0;else{if(!Sd(t,n)&&(r.flags&128)===0)return dr=!1,mx(t,r,n);dr=(t.flags&131072)!==0}else dr=!1,Pt&&(r.flags&1048576)!==0&&$p(r,lo,r.index);switch(r.lanes=0,r.tag){case 16:e:{var o=r.pendingProps;if(t=wa(r.elementType),r.type=t,typeof t=="function")Au(t)?(o=Ra(t,o),r.tag=1,r=pg(null,r,t,o,n)):(r.tag=0,r=md(null,r,t,o,n));else{if(t!=null){var u=t.$$typeof;if(u===L){r.tag=11,r=og(null,r,t,o,n);break e}else if(u===F){r.tag=14,r=lg(null,r,t,o,n);break e}}throw r=oe(t)||t,Error(a(306,r,""))}}return r;case 0:return md(t,r,r.type,r.pendingProps,n);case 1:return o=r.type,u=Ra(o,r.pendingProps),pg(t,r,o,u,n);case 3:e:{if(Se(r,r.stateNode.containerInfo),t===null)throw Error(a(387));o=r.pendingProps;var f=r.memoizedState;u=f.element,Vu(t,r),vo(r,o,null,n);var _=r.memoizedState;if(o=_.cache,kn(r,cr,o),o!==f.cache&&Ou(r,[cr],n,!0),go(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=mg(t,r,o,n);break e}else if(o!==u){u=ui(Error(a(424)),r),co(u),r=mg(t,r,o,n);break e}else for(t=r.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,$t=pi(t.firstChild),wr=r,Pt=!0,In=null,hi=!0,n=um(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ba(),o===u){r=sn(t,r,n);break e}Ar(t,r,o,n)}r=r.child}return r;case 26:return Gl(t,r),t===null?(n=Pv(r.type,null,r.pendingProps,null))?r.memoizedState=n:Pt||(n=r.type,t=r.pendingProps,o=sc(se.current).createElement(n),o[ar]=r,o[Er]=t,Cr(o,n,t),lr(o),r.stateNode=o):r.memoizedState=Pv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return lt(r),t===null&&Pt&&(o=r.stateNode=Av(r.type,r.pendingProps,se.current),wr=r,hi=!0,u=$t,Zn(r.type)?(tf=u,$t=pi(o.firstChild)):$t=u),Ar(t,r,r.pendingProps.children,n),Gl(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&Pt&&((u=o=$t)&&(o=jx(o,r.type,r.pendingProps,hi),o!==null?(r.stateNode=o,wr=r,$t=pi(o.firstChild),hi=!1,u=!0):u=!1),u||On(r)),lt(r),u=r.type,f=r.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,Zd(u,f)?o=null:_!==null&&Zd(u,_)&&(r.flags|=32),r.memoizedState!==null&&(u=Ku(t,r,sx,null,null,n),ko._currentValue=u),Gl(t,r),Ar(t,r,o,n),r.child;case 6:return t===null&&Pt&&((t=n=$t)&&(n=Xx(n,r.pendingProps,hi),n!==null?(r.stateNode=n,wr=r,$t=null,t=!0):t=!1),t||On(r)),null;case 13:return gg(t,r,n);case 4:return Se(r,r.stateNode.containerInfo),o=r.pendingProps,t===null?r.child=Aa(r,null,o,n):Ar(t,r,o,n),r.child;case 11:return og(t,r,r.type,r.pendingProps,n);case 7:return Ar(t,r,r.pendingProps,n),r.child;case 8:return Ar(t,r,r.pendingProps.children,n),r.child;case 12:return Ar(t,r,r.pendingProps.children,n),r.child;case 10:return o=r.pendingProps,kn(r,r.type,o.value),Ar(t,r,o.children,n),r.child;case 9:return u=r.type._context,o=r.pendingProps.children,Ma(r),u=Tr(u),o=o(u),r.flags|=1,Ar(t,r,o,n),r.child;case 14:return lg(t,r,r.type,r.pendingProps,n);case 15:return cg(t,r,r.type,r.pendingProps,n);case 19:return _g(t,r,n);case 31:return px(t,r,n);case 22:return ug(t,r,n,r.pendingProps);case 24:return Ma(r),o=Tr(cr),t===null?(u=zu(),u===null&&(u=Zt,f=ku(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=n),u=f),r.memoizedState={parent:o,cache:u},Hu(r),kn(r,cr,u)):((t.lanes&n)!==0&&(Vu(t,r),vo(r,null,null,n),go()),u=t.memoizedState,f=r.memoizedState,u.parent!==o?(u={parent:o,cache:o},r.memoizedState=u,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=u),kn(r,cr,o)):(o=f.cache,kn(r,cr,o),o!==u.cache&&Ou(r,[cr],n,!0))),Ar(t,r,r.pendingProps.children,n),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function on(t){t.flags|=4}function Md(t,r,n,o,u){if((r=(t.mode&32)!==0)&&(r=!1),r){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Xg())t.flags|=8192;else throw Ta=Cl,Bu}else t.flags&=-16777217}function xg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Iv(r))if(Xg())t.flags|=8192;else throw Ta=Cl,Bu}function jl(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Te():536870912,t.lanes|=r,ps|=r)}function Mo(t,r){if(!Pt)switch(t.tailMode){case"hidden":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var r=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(r)for(var u=t.child;u!==null;)n|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)n|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=n,r}function gx(t,r,n){var o=r.pendingProps;switch(Nu(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(r),null;case 1:return Qt(r),null;case 3:return n=r.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),rn(cr),Le(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ts(r)?on(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Du())),Qt(r),null;case 26:var u=r.type,f=r.memoizedState;return t===null?(on(r),f!==null?(Qt(r),xg(r,f)):(Qt(r),Md(r,u,null,o,n))):f?f!==t.memoizedState?(on(r),Qt(r),xg(r,f)):(Qt(r),r.flags&=-16777217):(t=t.memoizedProps,t!==o&&on(r),Qt(r),Md(r,u,t,o,n)),null;case 27:if(ze(r),n=se.current,u=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&on(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Qt(r),null}t=Ae.current,ts(r)?Jp(r):(t=Av(u,o,n),r.stateNode=t,on(r))}return Qt(r),null;case 5:if(ze(r),u=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&on(r);else{if(!o){if(r.stateNode===null)throw Error(a(166));return Qt(r),null}if(f=Ae.current,ts(r))Jp(r);else{var _=sc(se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[ar]=r,f[Er]=o;e:for(_=r.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===r)break e;for(;_.sibling===null;){if(_.return===null||_.return===r)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}r.stateNode=f;e:switch(Cr(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&on(r)}}return Qt(r),Md(r,r.type,t===null?null:t.memoizedProps,r.pendingProps,n),null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==o&&on(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(a(166));if(t=se.current,ts(r)){if(t=r.stateNode,n=r.memoizedProps,o=null,u=wr,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ar]=r,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||gv(t.nodeValue,n)),t||On(r,!0)}else t=sc(t).createTextNode(o),t[ar]=r,r.stateNode=t}return Qt(r),null;case 31:if(n=r.memoizedState,t===null||t.memoizedState!==null){if(o=ts(r),n!==null){if(t===null){if(!o)throw Error(a(318));if(t=r.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[ar]=r}else ba(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qt(r),t=!1}else n=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return r.flags&256?(ei(r),r):(ei(r),null);if((r.flags&128)!==0)throw Error(a(558))}return Qt(r),null;case 13:if(o=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ts(r),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=r.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[ar]=r}else ba(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qt(r),u=!1}else u=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return r.flags&256?(ei(r),r):(ei(r),null)}return ei(r),(r.flags&128)!==0?(r.lanes=n,r):(n=o!==null,t=t!==null&&t.memoizedState!==null,n&&(o=r.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),n!==t&&n&&(r.child.flags|=8192),jl(r,r.updateQueue),Qt(r),null);case 4:return Le(),t===null&&jd(r.stateNode.containerInfo),Qt(r),null;case 10:return rn(r.type),Qt(r),null;case 19:if(J(sr),o=r.memoizedState,o===null)return Qt(r),null;if(u=(r.flags&128)!==0,f=o.rendering,f===null)if(u)Mo(o,!1);else{if(nr!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(f=Ll(t),f!==null){for(r.flags|=128,Mo(o,!1),t=f.updateQueue,r.updateQueue=t,jl(r,t),r.subtreeFlags=0,t=n,n=r.child;n!==null;)Yp(n,t),n=n.sibling;return ge(sr,sr.current&1|2),Pt&&en(r,o.treeForkCount),r.child}t=t.sibling}o.tail!==null&&Ce()>Zl&&(r.flags|=128,u=!0,Mo(o,!1),r.lanes=4194304)}else{if(!u)if(t=Ll(f),t!==null){if(r.flags|=128,u=!0,t=t.updateQueue,r.updateQueue=t,jl(r,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Pt)return Qt(r),null}else 2*Ce()-o.renderingStartTime>Zl&&n!==536870912&&(r.flags|=128,u=!0,Mo(o,!1),r.lanes=4194304);o.isBackwards?(f.sibling=r.child,r.child=f):(t=o.last,t!==null?t.sibling=f:r.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ce(),t.sibling=null,n=sr.current,ge(sr,u?n&1|2:n&1),Pt&&en(r,o.treeForkCount),t):(Qt(r),null);case 22:case 23:return ei(r),Xu(),o=r.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(n&536870912)!==0&&(r.flags&128)===0&&(Qt(r),r.subtreeFlags&6&&(r.flags|=8192)):Qt(r),n=r.updateQueue,n!==null&&jl(r,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==n&&(r.flags|=2048),t!==null&&J(Ea),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),r.memoizedState.cache!==n&&(r.flags|=2048),rn(cr),Qt(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function vx(t,r){switch(Nu(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return rn(cr),Le(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return ze(r),null;case 31:if(r.memoizedState!==null){if(ei(r),r.alternate===null)throw Error(a(340));ba()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 13:if(ei(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ba()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return J(sr),null;case 4:return Le(),null;case 10:return rn(r.type),null;case 22:case 23:return ei(r),Xu(),t!==null&&J(Ea),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return rn(cr),null;case 25:return null;default:return null}}function bg(t,r){switch(Nu(r),r.tag){case 3:rn(cr),Le();break;case 26:case 27:case 5:ze(r);break;case 4:Le();break;case 31:r.memoizedState!==null&&ei(r);break;case 13:ei(r);break;case 19:J(sr);break;case 10:rn(r.type);break;case 22:case 23:ei(r),Xu(),t!==null&&J(Ea);break;case 24:rn(cr)}}function Eo(t,r){try{var n=r.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var u=o.next;n=u;do{if((n.tag&t)===t){o=void 0;var f=n.create,_=n.inst;o=f(),_.destroy=o}n=n.next}while(n!==u)}}catch(A){Vt(r,r.return,A)}}function Gn(t,r,n){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=r;var B=n,ne=A;try{ne()}catch(me){Vt(u,B,me)}}}o=o.next}while(o!==f)}}catch(me){Vt(r,r.return,me)}}function Sg(t){var r=t.updateQueue;if(r!==null){var n=t.stateNode;try{fm(r,n)}catch(o){Vt(t,t.return,o)}}}function Mg(t,r,n){n.props=Ra(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){Vt(t,r,o)}}function wo(t,r){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(u){Vt(t,r,u)}}function Di(t,r){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,r,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){Vt(t,r,u)}else n.current=null}function Eg(t){var r=t.type,n=t.memoizedProps,o=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(u){Vt(t,t.return,u)}}function Ed(t,r,n){try{var o=t.stateNode;zx(o,t.type,n,r),o[Er]=r}catch(u){Vt(t,t.return,u)}}function wg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Zn(t.type)||t.tag===4}function wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Zn(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,r,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,r):(r=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.appendChild(t),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=$i));else if(o!==4&&(o===27&&Zn(t.type)&&(n=t.stateNode,r=null),t=t.child,t!==null))for(Td(t,r,n),t=t.sibling;t!==null;)Td(t,r,n),t=t.sibling}function Xl(t,r,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(o!==4&&(o===27&&Zn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Xl(t,r,n),t=t.sibling;t!==null;)Xl(t,r,n),t=t.sibling}function Tg(t){var r=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,u=r.attributes;u.length;)r.removeAttributeNode(u[0]);Cr(r,o,n),r[ar]=t,r[Er]=n}catch(f){Vt(t,t.return,f)}}var ln=!1,fr=!1,Ad=!1,Ag=typeof WeakSet=="function"?WeakSet:Set,xr=null;function _x(t,r){if(t=t.containerInfo,Yd=hc,t=zp(t),xu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var _=0,A=-1,B=-1,ne=0,me=0,xe=t,ce=null;t:for(;;){for(var de;xe!==n||u!==0&&xe.nodeType!==3||(A=_+u),xe!==f||o!==0&&xe.nodeType!==3||(B=_+o),xe.nodeType===3&&(_+=xe.nodeValue.length),(de=xe.firstChild)!==null;)ce=xe,xe=de;for(;;){if(xe===t)break t;if(ce===n&&++ne===u&&(A=_),ce===f&&++me===o&&(B=_),(de=xe.nextSibling)!==null)break;xe=ce,ce=xe.parentNode}xe=de}n=A===-1||B===-1?null:{start:A,end:B}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},hc=!1,xr=r;xr!==null;)if(r=xr,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,xr=t;else for(;xr!==null;){switch(r=xr,f=r.alternate,t=r.flags,r.tag){case 0:if((t&4)!==0&&(t=r.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)u=t[n],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,n=r,u=f.memoizedProps,f=f.memoizedState,o=n.stateNode;try{var Ze=Ra(n.type,u);t=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Vt(n,n.return,ct)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,n=t.nodeType,n===9)Qd(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Qd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=r.sibling,t!==null){t.return=r.return,xr=t;break}xr=r.return}}function Cg(t,r,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:un(t,n),o&4&&Eo(5,n);break;case 1:if(un(t,n),o&4)if(t=n.stateNode,r===null)try{t.componentDidMount()}catch(_){Vt(n,n.return,_)}else{var u=Ra(n.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(u,r,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Vt(n,n.return,_)}}o&64&&Sg(n),o&512&&wo(n,n.return);break;case 3:if(un(t,n),o&64&&(t=n.updateQueue,t!==null)){if(r=null,n.child!==null)switch(n.child.tag){case 27:case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}try{fm(t,r)}catch(_){Vt(n,n.return,_)}}break;case 27:r===null&&o&4&&Tg(n);case 26:case 5:un(t,n),r===null&&o&4&&Eg(n),o&512&&wo(n,n.return);break;case 12:un(t,n);break;case 31:un(t,n),o&4&&Ng(t,n);break;case 13:un(t,n),o&4&&Lg(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Ax.bind(null,n),qx(t,n))));break;case 22:if(o=n.memoizedState!==null||ln,!o){r=r!==null&&r.memoizedState!==null||fr,u=ln;var f=fr;ln=o,(fr=r)&&!f?dn(t,n,(n.subtreeFlags&8772)!==0):un(t,n),ln=u,fr=f}break;case 30:break;default:un(t,n)}}function Rg(t){var r=t.alternate;r!==null&&(t.alternate=null,Rg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Qs(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tr=null,Hr=!1;function cn(t,r,n){for(n=n.child;n!==null;)Pg(t,r,n),n=n.sibling}function Pg(t,r,n){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Y,n)}catch{}switch(n.tag){case 26:fr||Di(n,r),cn(t,r,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:fr||Di(n,r);var o=tr,u=Hr;Zn(n.type)&&(tr=n.stateNode,Hr=!1),cn(t,r,n),Uo(n.stateNode),tr=o,Hr=u;break;case 5:fr||Di(n,r);case 6:if(o=tr,u=Hr,tr=null,cn(t,r,n),tr=o,Hr=u,tr!==null)if(Hr)try{(tr.nodeType===9?tr.body:tr.nodeName==="HTML"?tr.ownerDocument.body:tr).removeChild(n.stateNode)}catch(f){Vt(n,r,f)}else try{tr.removeChild(n.stateNode)}catch(f){Vt(n,r,f)}break;case 18:tr!==null&&(Hr?(t=tr,Sv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Ss(t)):Sv(tr,n.stateNode));break;case 4:o=tr,u=Hr,tr=n.stateNode.containerInfo,Hr=!0,cn(t,r,n),tr=o,Hr=u;break;case 0:case 11:case 14:case 15:Gn(2,n,r),fr||Gn(4,n,r),cn(t,r,n);break;case 1:fr||(Di(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"&&Mg(n,r,o)),cn(t,r,n);break;case 21:cn(t,r,n);break;case 22:fr=(o=fr)||n.memoizedState!==null,cn(t,r,n),fr=o;break;default:cn(t,r,n)}}function Ng(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ss(t)}catch(n){Vt(r,r.return,n)}}}function Lg(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ss(t)}catch(n){Vt(r,r.return,n)}}function yx(t){switch(t.tag){case 31:case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Ag),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Ag),r;default:throw Error(a(435,t.tag))}}function ql(t,r){var n=yx(t);r.forEach(function(o){if(!n.has(o)){n.add(o);var u=Cx.bind(null,t,o);o.then(u,u)}})}function Vr(t,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var u=n[o],f=t,_=r,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Zn(A.type)){tr=A.stateNode,Hr=!1;break e}break;case 5:tr=A.stateNode,Hr=!1;break e;case 3:case 4:tr=A.stateNode.containerInfo,Hr=!0;break e}A=A.return}if(tr===null)throw Error(a(160));Pg(f,_,u),tr=null,Hr=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Dg(r,t),r=r.sibling}var Mi=null;function Dg(t,r){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vr(r,t),Gr(t),o&4&&(Gn(3,t,t.return),Eo(3,t),Gn(5,t,t.return));break;case 1:Vr(r,t),Gr(t),o&512&&(fr||n===null||Di(n,n.return)),o&64&&ln&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var u=Mi;if(Vr(r,t),Gr(t),o&512&&(fr||n===null||Di(n,n.return)),o&4){var f=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){e:{o=t.type,n=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Cn]||f[ar]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cr(f,o,n),f[ar]=t,lr(f),o=f;break e;case"link":var _=Dv("link","href",u).get(o+(n.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){_.splice(A,1);break t}}f=u.createElement(o),Cr(f,o,n),u.head.appendChild(f);break;case"meta":if(_=Dv("meta","content",u).get(o+(n.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){_.splice(A,1);break t}}f=u.createElement(o),Cr(f,o,n),u.head.appendChild(f);break;default:throw Error(a(468,o))}f[ar]=t,lr(f),o=f}t.stateNode=o}else Uv(u,t.type,t.stateNode);else t.stateNode=Lv(u,o,t.memoizedProps);else f!==o?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,o===null?Uv(u,t.type,t.stateNode):Lv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ed(t,t.memoizedProps,n.memoizedProps)}break;case 27:Vr(r,t),Gr(t),o&512&&(fr||n===null||Di(n,n.return)),n!==null&&o&4&&Ed(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Vr(r,t),Gr(t),o&512&&(fr||n===null||Di(n,n.return)),t.flags&32){u=t.stateNode;try{Zr(u,"")}catch(Ze){Vt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ed(t,u,n!==null?n.memoizedProps:u)),o&1024&&(Ad=!0);break;case 6:if(Vr(r,t),Gr(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(Ze){Vt(t,t.return,Ze)}}break;case 3:if(cc=null,u=Mi,Mi=oc(r.containerInfo),Vr(r,t),Mi=u,Gr(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Ss(r.containerInfo)}catch(Ze){Vt(t,t.return,Ze)}Ad&&(Ad=!1,Ug(t));break;case 4:o=Mi,Mi=oc(t.stateNode.containerInfo),Vr(r,t),Gr(t),Mi=o;break;case 12:Vr(r,t),Gr(t);break;case 31:Vr(r,t),Gr(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 13:Vr(r,t),Gr(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Kl=Ce()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 22:u=t.memoizedState!==null;var B=n!==null&&n.memoizedState!==null,ne=ln,me=fr;if(ln=ne||u,fr=me||B,Vr(r,t),fr=me,ln=ne,Gr(t),o&8192)e:for(r=t.stateNode,r._visibility=u?r._visibility&-2:r._visibility|1,u&&(n===null||B||ln||fr||Pa(t)),n=null,r=t;;){if(r.tag===5||r.tag===26){if(n===null){B=n=r;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=B.stateNode;var xe=B.memoizedProps.style,ce=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;A.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(Ze){Vt(B,B.return,Ze)}}}else if(r.tag===6){if(n===null){B=r;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ze){Vt(B,B.return,Ze)}}}else if(r.tag===18){if(n===null){B=r;try{var de=B.stateNode;u?Mv(de,!0):Mv(B.stateNode,!1)}catch(Ze){Vt(B,B.return,Ze)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,ql(t,n))));break;case 19:Vr(r,t),Gr(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ql(t,o)));break;case 30:break;case 21:break;default:Vr(r,t),Gr(t)}}function Gr(t){var r=t.flags;if(r&2){try{for(var n,o=t.return;o!==null;){if(wg(o)){n=o;break}o=o.return}if(n==null)throw Error(a(160));switch(n.tag){case 27:var u=n.stateNode,f=wd(t);Xl(t,f,u);break;case 5:var _=n.stateNode;n.flags&32&&(Zr(_,""),n.flags&=-33);var A=wd(t);Xl(t,A,_);break;case 3:case 4:var B=n.stateNode.containerInfo,ne=wd(t);Td(t,ne,B);break;default:throw Error(a(161))}}catch(me){Vt(t,t.return,me)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Ug(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Ug(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function un(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Cg(t,r.alternate,r),r=r.sibling}function Pa(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Gn(4,r,r.return),Pa(r);break;case 1:Di(r,r.return);var n=r.stateNode;typeof n.componentWillUnmount=="function"&&Mg(r,r.return,n),Pa(r);break;case 27:Uo(r.stateNode);case 26:case 5:Di(r,r.return),Pa(r);break;case 22:r.memoizedState===null&&Pa(r);break;case 30:Pa(r);break;default:Pa(r)}t=t.sibling}}function dn(t,r,n){for(n=n&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,u=t,f=r,_=f.flags;switch(f.tag){case 0:case 11:case 15:dn(u,f,n),Eo(4,f);break;case 1:if(dn(u,f,n),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Vt(o,o.return,ne)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)dm(B[u],A)}catch(ne){Vt(o,o.return,ne)}}n&&_&64&&Sg(f),wo(f,f.return);break;case 27:Tg(f);case 26:case 5:dn(u,f,n),n&&o===null&&_&4&&Eg(f),wo(f,f.return);break;case 12:dn(u,f,n);break;case 31:dn(u,f,n),n&&_&4&&Ng(u,f);break;case 13:dn(u,f,n),n&&_&4&&Lg(u,f);break;case 22:f.memoizedState===null&&dn(u,f,n),wo(f,f.return);break;case 30:break;default:dn(u,f,n)}r=r.sibling}}function Cd(t,r){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&uo(n))}function Rd(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&uo(t))}function Ei(t,r,n,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Ig(t,r,n,o),r=r.sibling}function Ig(t,r,n,o){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ei(t,r,n,o),u&2048&&Eo(9,r);break;case 1:Ei(t,r,n,o);break;case 3:Ei(t,r,n,o),u&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Ei(t,r,n,o),t=r.stateNode;try{var f=r.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Vt(r,r.return,B)}}else Ei(t,r,n,o);break;case 31:Ei(t,r,n,o);break;case 13:Ei(t,r,n,o);break;case 23:break;case 22:f=r.stateNode,_=r.alternate,r.memoizedState!==null?f._visibility&2?Ei(t,r,n,o):To(t,r):f._visibility&2?Ei(t,r,n,o):(f._visibility|=2,ds(t,r,n,o,(r.subtreeFlags&10256)!==0||!1)),u&2048&&Cd(_,r);break;case 24:Ei(t,r,n,o),u&2048&&Rd(r.alternate,r);break;default:Ei(t,r,n,o)}}function ds(t,r,n,o,u){for(u=u&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var f=t,_=r,A=n,B=o,ne=_.flags;switch(_.tag){case 0:case 11:case 15:ds(f,_,A,B,u),Eo(8,_);break;case 23:break;case 22:var me=_.stateNode;_.memoizedState!==null?me._visibility&2?ds(f,_,A,B,u):To(f,_):(me._visibility|=2,ds(f,_,A,B,u)),u&&ne&2048&&Cd(_.alternate,_);break;case 24:ds(f,_,A,B,u),u&&ne&2048&&Rd(_.alternate,_);break;default:ds(f,_,A,B,u)}r=r.sibling}}function To(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var n=t,o=r,u=o.flags;switch(o.tag){case 22:To(n,o),u&2048&&Cd(o.alternate,o);break;case 24:To(n,o),u&2048&&Rd(o.alternate,o);break;default:To(n,o)}r=r.sibling}}var Ao=8192;function fs(t,r,n){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)Og(t,r,n),t=t.sibling}function Og(t,r,n){switch(t.tag){case 26:fs(t,r,n),t.flags&Ao&&t.memoizedState!==null&&a1(n,Mi,t.memoizedState,t.memoizedProps);break;case 5:fs(t,r,n);break;case 3:case 4:var o=Mi;Mi=oc(t.stateNode.containerInfo),fs(t,r,n),Mi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,fs(t,r,n),Ao=o):fs(t,r,n));break;default:fs(t,r,n)}}function kg(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Co(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];xr=o,zg(o,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fg(t),t=t.sibling}function Fg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Gn(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,Yl(t)):Co(t);break;default:Co(t)}}function Yl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];xr=o,zg(o,t)}kg(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Gn(8,r,r.return),Yl(r);break;case 22:n=r.stateNode,n._visibility&2&&(n._visibility&=-3,Yl(r));break;default:Yl(r)}t=t.sibling}}function zg(t,r){for(;xr!==null;){var n=xr;switch(n.tag){case 0:case 11:case 15:Gn(8,n,r);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,xr=o;else e:for(n=t;xr!==null;){o=xr;var u=o.sibling,f=o.return;if(Rg(o),o===n){xr=null;break e}if(u!==null){u.return=f,xr=u;break e}xr=f}}}var xx={getCacheForType:function(t){var r=Tr(cr),n=r.data.get(t);return n===void 0&&(n=t(),r.data.set(t,n)),n},cacheSignal:function(){return Tr(cr).controller.signal}},bx=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Zt=null,Et=null,At=0,Ht=0,ti=null,Wn=!1,hs=!1,Pd=!1,fn=0,nr=0,jn=0,Na=0,Nd=0,ri=0,ps=0,Ro=null,Wr=null,Ld=!1,Kl=0,Bg=0,Zl=1/0,$l=null,Xn=null,vr=0,qn=null,ms=null,hn=0,Dd=0,Ud=null,Hg=null,Po=0,Id=null;function ii(){return(Ft&2)!==0&&At!==0?At&-At:U.T!==null?Hd():Ks()}function Vg(){if(ri===0)if((At&536870912)===0||Pt){var t=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ri=t}else ri=536870912;return t=Jr.current,t!==null&&(t.flags|=32),ri}function jr(t,r,n){(t===Zt&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(gs(t,0),Yn(t,At,ri,!1)),at(t,n),((Ft&2)===0||t!==Zt)&&(t===Zt&&((Ft&2)===0&&(Na|=n),nr===4&&Yn(t,At,ri,!1)),Ui(t))}function Gg(t,r,n){if((Ft&6)!==0)throw Error(a(327));var o=!n&&(r&127)===0&&(r&t.expiredLanes)===0||Ye(t,r),u=o?Ex(t,r):kd(t,r,!0),f=o;do{if(u===0){hs&&!o&&Yn(t,r,0,!1);break}else{if(n=t.current.alternate,f&&!Sx(n)){u=kd(t,r,!1),f=!1;continue}if(u===2){if(f=r,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var A=t;u=Ro;var B=A.current.memoizedState.isDehydrated;if(B&&(gs(A,_).flags|=256),_=kd(A,_,!1),_!==2){if(Pd&&!B){A.errorRecoveryDisabledLanes|=f,Na|=f,u=4;break e}f=Wr,Wr=u,f!==null&&(Wr===null?Wr=f:Wr.push.apply(Wr,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){gs(t,0),Yn(t,r,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Yn(o,r,ri,!Wn);break e;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(u=Kl+300-Ce(),10<u)){if(Yn(o,r,ri,!Wn),Pe(o,0,!0)!==0)break e;hn=r,o.timeoutHandle=xv(Wg.bind(null,o,n,Wr,$l,Ld,r,ri,Na,ps,Wn,f,"Throttled",-0,0),u);break e}Wg(o,n,Wr,$l,Ld,r,ri,Na,ps,Wn,f,null,-0,0)}}break}while(!0);Ui(t)}function Wg(t,r,n,o,u,f,_,A,B,ne,me,xe,ce,de){if(t.timeoutHandle=-1,xe=r.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Og(r,f,xe);var Ze=(f&62914560)===f?Kl-Ce():(f&4194048)===f?Bg-Ce():0;if(Ze=s1(xe,Ze),Ze!==null){hn=f,t.cancelPendingCommit=Ze(Qg.bind(null,t,r,f,n,o,u,_,A,B,me,xe,null,ce,de)),Yn(t,f,_,!ne);return}}Qg(t,r,f,n,o,u,_,A,B)}function Sx(t){for(var r=t;;){var n=r.tag;if((n===0||n===11||n===15)&&r.flags&16384&&(n=r.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var u=n[o],f=u.getSnapshot;u=u.value;try{if(!$r(f(),u))return!1}catch{return!1}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yn(t,r,n,o){r&=~Nd,r&=~Na,t.suspendedLanes|=r,t.pingedLanes&=~r,o&&(t.warmLanes|=r),o=t.expirationTimes;for(var u=r;0<u;){var f=31-ke(u),_=1<<f;o[f]=-1,u&=~_}n!==0&&Wt(t,n,r)}function Ql(){return(Ft&6)===0?(No(0),!1):!0}function Od(){if(Et!==null){if(Ht===0)var t=Et.return;else t=Et,tn=Sa=null,Qu(t),ss=null,ho=0,t=Et;for(;t!==null;)bg(t.alternate,t),t=t.return;Et=null}}function gs(t,r){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Vx(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),hn=0,Od(),Zt=t,Et=n=Ji(t.current,null),At=r,Ht=0,ti=null,Wn=!1,hs=Ye(t,r),Pd=!1,ps=ri=Nd=Na=jn=nr=0,Wr=Ro=null,Ld=!1,(r&8)!==0&&(r|=r&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=r;0<o;){var u=31-ke(o),f=1<<u;r|=t[u],o&=~f}return fn=r,yl(),n}function jg(t,r){mt=null,U.H=bo,r===as||r===Al?(r=om(),Ht=3):r===Bu?(r=om(),Ht=4):Ht=r===pd?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ti=r,Et===null&&(nr=1,Hl(t,ui(r,t.current)))}function Xg(){var t=Jr.current;return t===null?!0:(At&4194048)===At?Si===null:(At&62914560)===At||(At&536870912)!==0?t===Si:!1}function qg(){var t=U.H;return U.H=bo,t===null?bo:t}function Yg(){var t=U.A;return U.A=xx,t}function Jl(){nr=4,Wn||(At&4194048)!==At&&Jr.current!==null||(hs=!0),(jn&134217727)===0&&(Na&134217727)===0||Zt===null||Yn(Zt,At,ri,!1)}function kd(t,r,n){var o=Ft;Ft|=2;var u=qg(),f=Yg();(Zt!==t||At!==r)&&($l=null,gs(t,r)),r=!1;var _=nr;e:do try{if(Ht!==0&&Et!==null){var A=Et,B=ti;switch(Ht){case 8:Od(),_=6;break e;case 3:case 2:case 9:case 6:Jr.current===null&&(r=!0);var ne=Ht;if(Ht=0,ti=null,vs(t,A,B,ne),n&&hs){_=0;break e}break;default:ne=Ht,Ht=0,ti=null,vs(t,A,B,ne)}}Mx(),_=nr;break}catch(me){jg(t,me)}while(!0);return r&&t.shellSuspendCounter++,tn=Sa=null,Ft=o,U.H=u,U.A=f,Et===null&&(Zt=null,At=0,yl()),_}function Mx(){for(;Et!==null;)Kg(Et)}function Ex(t,r){var n=Ft;Ft|=2;var o=qg(),u=Yg();Zt!==t||At!==r?($l=null,Zl=Ce()+500,gs(t,r)):hs=Ye(t,r);e:do try{if(Ht!==0&&Et!==null){r=Et;var f=ti;t:switch(Ht){case 1:Ht=0,ti=null,vs(t,r,f,1);break;case 2:case 9:if(am(f)){Ht=0,ti=null,Zg(r);break}r=function(){Ht!==2&&Ht!==9||Zt!==t||(Ht=7),Ui(t)},f.then(r,r);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:am(f)?(Ht=0,ti=null,Zg(r)):(Ht=0,ti=null,vs(t,r,f,7));break;case 5:var _=null;switch(Et.tag){case 26:_=Et.memoizedState;case 5:case 27:var A=Et;if(_?Iv(_):A.stateNode.complete){Ht=0,ti=null;var B=A.sibling;if(B!==null)Et=B;else{var ne=A.return;ne!==null?(Et=ne,ec(ne)):Et=null}break t}}Ht=0,ti=null,vs(t,r,f,5);break;case 6:Ht=0,ti=null,vs(t,r,f,6);break;case 8:Od(),nr=6;break e;default:throw Error(a(462))}}wx();break}catch(me){jg(t,me)}while(!0);return tn=Sa=null,U.H=o,U.A=u,Ft=n,Et!==null?0:(Zt=null,At=0,yl(),nr)}function wx(){for(;Et!==null&&!et();)Kg(Et)}function Kg(t){var r=yg(t.alternate,t,fn);t.memoizedProps=t.pendingProps,r===null?ec(t):Et=r}function Zg(t){var r=t,n=r.alternate;switch(r.tag){case 15:case 0:r=hg(n,r,r.pendingProps,r.type,void 0,At);break;case 11:r=hg(n,r,r.pendingProps,r.type.render,r.ref,At);break;case 5:Qu(r);default:bg(n,r),r=Et=Yp(r,fn),r=yg(n,r,fn)}t.memoizedProps=t.pendingProps,r===null?ec(t):Et=r}function vs(t,r,n,o){tn=Sa=null,Qu(r),ss=null,ho=0;var u=r.return;try{if(hx(t,u,r,n,At)){nr=1,Hl(t,ui(n,t.current)),Et=null;return}}catch(f){if(u!==null)throw Et=u,f;nr=1,Hl(t,ui(n,t.current)),Et=null;return}r.flags&32768?(Pt||o===1?t=!0:hs||(At&536870912)!==0?t=!1:(Wn=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jr.current,o!==null&&o.tag===13&&(o.flags|=16384))),$g(r,t)):ec(r)}function ec(t){var r=t;do{if((r.flags&32768)!==0){$g(r,Wn);return}t=r.return;var n=gx(r.alternate,r,fn);if(n!==null){Et=n;return}if(r=r.sibling,r!==null){Et=r;return}Et=r=t}while(r!==null);nr===0&&(nr=5)}function $g(t,r){do{var n=vx(t.alternate,t);if(n!==null){n.flags&=32767,Et=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!r&&(t=t.sibling,t!==null)){Et=t;return}Et=t=n}while(t!==null);nr=6,Et=null}function Qg(t,r,n,o,u,f,_,A,B){t.cancelPendingCommit=null;do tc();while(vr!==0);if((Ft&6)!==0)throw Error(a(327));if(r!==null){if(r===t.current)throw Error(a(177));if(f=r.lanes|r.childLanes,f|=wu,Mr(t,n,f,_,A,B),t===Zt&&(Et=Zt=null,At=0),ms=r,qn=t,hn=n,Dd=f,Ud=u,Hg=o,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Rx(ee,function(){return iv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=z.p,z.p=2,_=Ft,Ft|=4;try{_x(t,r,n)}finally{Ft=_,z.p=u,U.T=o}}vr=1,Jg(),ev(),tv()}}function Jg(){if(vr===1){vr=0;var t=qn,r=ms,n=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||n){n=U.T,U.T=null;var o=z.p;z.p=2;var u=Ft;Ft|=4;try{Dg(r,t);var f=Kd,_=zp(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&Fp(A.ownerDocument.documentElement,A)){if(B!==null&&xu(A)){var ne=B.start,me=B.end;if(me===void 0&&(me=ne),"selectionStart"in A)A.selectionStart=ne,A.selectionEnd=Math.min(me,A.value.length);else{var xe=A.ownerDocument||document,ce=xe&&xe.defaultView||window;if(ce.getSelection){var de=ce.getSelection(),Ze=A.textContent.length,ct=Math.min(B.start,Ze),Kt=B.end===void 0?ct:Math.min(B.end,Ze);!de.extend&&ct>Kt&&(_=Kt,Kt=ct,ct=_);var $=kp(A,ct),j=kp(A,Kt);if($&&j&&(de.rangeCount!==1||de.anchorNode!==$.node||de.anchorOffset!==$.offset||de.focusNode!==j.node||de.focusOffset!==j.offset)){var ie=xe.createRange();ie.setStart($.node,$.offset),de.removeAllRanges(),ct>Kt?(de.addRange(ie),de.extend(j.node,j.offset)):(ie.setEnd(j.node,j.offset),de.addRange(ie))}}}}for(xe=[],de=A;de=de.parentNode;)de.nodeType===1&&xe.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xe.length;A++){var _e=xe[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}hc=!!Yd,Kd=Yd=null}finally{Ft=u,z.p=o,U.T=n}}t.current=r,vr=2}}function ev(){if(vr===2){vr=0;var t=qn,r=ms,n=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||n){n=U.T,U.T=null;var o=z.p;z.p=2;var u=Ft;Ft|=4;try{Cg(t,r.alternate,r)}finally{Ft=u,z.p=o,U.T=n}}vr=3}}function tv(){if(vr===4||vr===3){vr=0,gt();var t=qn,r=ms,n=hn,o=Hg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?vr=5:(vr=0,ms=qn=null,rv(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xn=null),Ys(n),r=r.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Y,r,void 0,(r.current.flags&128)===128)}catch{}if(o!==null){r=U.T,u=z.p,z.p=2,U.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var A=o[_];f(A.value,{componentStack:A.stack})}}finally{U.T=r,z.p=u}}(hn&3)!==0&&tc(),Ui(t),u=t.pendingLanes,(n&261930)!==0&&(u&42)!==0?t===Id?Po++:(Po=0,Id=t):Po=0,No(0)}}function rv(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,uo(r)))}function tc(){return Jg(),ev(),tv(),iv()}function iv(){if(vr!==5)return!1;var t=qn,r=Dd;Dd=0;var n=Ys(hn),o=U.T,u=z.p;try{z.p=32>n?32:n,U.T=null,n=Ud,Ud=null;var f=qn,_=hn;if(vr=0,ms=qn=null,hn=0,(Ft&6)!==0)throw Error(a(331));var A=Ft;if(Ft|=4,Fg(f.current),Ig(f,f.current,_,n),Ft=A,No(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Y,f)}catch{}return!0}finally{z.p=u,U.T=o,rv(t,r)}}function nv(t,r,n){r=ui(n,r),r=hd(t.stateNode,r,2),t=Bn(t,r,2),t!==null&&(at(t,2),Ui(t))}function Vt(t,r,n){if(t.tag===3)nv(t,t,n);else for(;r!==null;){if(r.tag===3){nv(r,t,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xn===null||!Xn.has(o))){t=ui(n,t),n=ag(2),o=Bn(r,n,2),o!==null&&(sg(n,o,r,t),at(o,2),Ui(o));break}}r=r.return}}function Fd(t,r,n){var o=t.pingCache;if(o===null){o=t.pingCache=new bx;var u=new Set;o.set(r,u)}else u=o.get(r),u===void 0&&(u=new Set,o.set(r,u));u.has(n)||(Pd=!0,u.add(n),t=Tx.bind(null,t,r,n),r.then(t,t))}function Tx(t,r,n){var o=t.pingCache;o!==null&&o.delete(r),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Zt===t&&(At&n)===n&&(nr===4||nr===3&&(At&62914560)===At&&300>Ce()-Kl?(Ft&2)===0&&gs(t,0):Nd|=n,ps===At&&(ps=0)),Ui(t)}function av(t,r){r===0&&(r=Te()),t=ya(t,r),t!==null&&(at(t,r),Ui(t))}function Ax(t){var r=t.memoizedState,n=0;r!==null&&(n=r.retryLane),av(t,n)}function Cx(t,r){var n=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(n=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(r),av(t,n)}function Rx(t,r){return H(t,r)}var rc=null,_s=null,zd=!1,ic=!1,Bd=!1,Kn=0;function Ui(t){t!==_s&&t.next===null&&(_s===null?rc=_s=t:_s=_s.next=t),ic=!0,zd||(zd=!0,Nx())}function No(t,r){if(!Bd&&ic){Bd=!0;do for(var n=!1,o=rc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-ke(42|t)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,cv(o,f))}else f=At,f=Pe(o,o===Zt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ye(o,f)||(n=!0,cv(o,f));o=o.next}while(n);Bd=!1}}function Px(){sv()}function sv(){ic=zd=!1;var t=0;Kn!==0&&Hx()&&(t=Kn);for(var r=Ce(),n=null,o=rc;o!==null;){var u=o.next,f=ov(o,r);f===0?(o.next=null,n===null?rc=u:n.next=u,u===null&&(_s=n)):(n=o,(t!==0||(f&3)!==0)&&(ic=!0)),o=u}vr!==0&&vr!==5||No(t),Kn!==0&&(Kn=0)}function ov(t,r){for(var n=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-ke(f),A=1<<_,B=u[_];B===-1?((A&n)===0||(A&o)!==0)&&(u[_]=Be(A,r)):B<=r&&(t.expiredLanes|=A),f&=~A}if(r=Zt,n=At,n=Pe(t,t===r?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===r&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ft(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ye(t,n)){if(r=n&-n,r===t.callbackPriority)return r;switch(o!==null&&ft(o),Ys(n)){case 2:case 8:n=M;break;case 32:n=ee;break;case 268435456:n=be;break;default:n=ee}return o=lv.bind(null,t),n=H(n,o),t.callbackPriority=r,t.callbackNode=n,r}return o!==null&&o!==null&&ft(o),t.callbackPriority=2,t.callbackNode=null,2}function lv(t,r){if(vr!==0&&vr!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(tc()&&t.callbackNode!==n)return null;var o=At;return o=Pe(t,t===Zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Gg(t,o,r),ov(t,Ce()),t.callbackNode!=null&&t.callbackNode===n?lv.bind(null,t):null)}function cv(t,r){if(tc())return null;Gg(t,r,!0)}function Nx(){Gx(function(){(Ft&6)!==0?H(R,Px):sv()})}function Hd(){if(Kn===0){var t=is;t===0&&(t=yt,yt<<=1,(yt&261888)===0&&(yt=256)),Kn=t}return Kn}function uv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ma(""+t)}function dv(t,r){var n=r.ownerDocument.createElement("input");return n.name=r.name,n.value=r.value,t.id&&n.setAttribute("form",t.id),r.parentNode.insertBefore(n,r),t=new FormData(t),n.parentNode.removeChild(n),t}function Lx(t,r,n,o,u){if(r==="submit"&&n&&n.stateNode===u){var f=uv((u[Er]||null).action),_=o.submitter;_&&(r=(r=_[Er]||null)?uv(r.formAction):_.getAttribute("formAction"),r!==null&&(f=r,_=null));var A=new ml("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Kn!==0){var B=_?dv(u,_):new FormData(u);od(n,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=_?dv(u,_):new FormData(u),od(n,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Vd=0;Vd<Eu.length;Vd++){var Gd=Eu[Vd],Dx=Gd.toLowerCase(),Ux=Gd[0].toUpperCase()+Gd.slice(1);bi(Dx,"on"+Ux)}bi(Vp,"onAnimationEnd"),bi(Gp,"onAnimationIteration"),bi(Wp,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Zy,"onTransitionRun"),bi($y,"onTransitionStart"),bi(Qy,"onTransitionCancel"),bi(jp,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function fv(t,r){r=(r&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],u=o.event;o=o.listeners;e:{var f=void 0;if(r)for(var _=o.length-1;0<=_;_--){var A=o[_],B=A.instance,ne=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ne;try{f(u)}catch(me){_l(me)}u.currentTarget=null,f=B}else for(_=0;_<o.length;_++){if(A=o[_],B=A.instance,ne=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=ne;try{f(u)}catch(me){_l(me)}u.currentTarget=null,f=B}}}}function wt(t,r){var n=r[An];n===void 0&&(n=r[An]=new Set);var o=t+"__bubble";n.has(o)||(hv(r,t,2,!1),n.add(o))}function Wd(t,r,n){var o=0;r&&(o|=4),hv(n,t,o,r)}var nc="_reactListening"+Math.random().toString(36).slice(2);function jd(t){if(!t[nc]){t[nc]=!0,dl.forEach(function(n){n!=="selectionchange"&&(Ix.has(n)||Wd(n,!1,t),Wd(n,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[nc]||(r[nc]=!0,Wd("selectionchange",!1,r))}}function hv(t,r,n,o){switch(Vv(r)){case 2:var u=c1;break;case 8:u=u1;break;default:u=of}n=u.bind(null,r,n,t),u=void 0,!du||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(r,n,{capture:!0,passive:u}):t.addEventListener(r,n,!0):u!==void 0?t.addEventListener(r,n,{passive:u}):t.addEventListener(r,n,!1)}function Xd(t,r,n,o,u){var f=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var A=o.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=o.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Rn(A),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){o=f=_;continue e}A=A.parentNode}}o=o.return}_p(function(){var ne=f,me=cu(n),xe=[];e:{var ce=Xp.get(t);if(ce!==void 0){var de=ml,Ze=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":de=Cy;break;case"focusin":Ze="focus",de=mu;break;case"focusout":Ze="blur",de=mu;break;case"beforeblur":case"afterblur":de=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Ny;break;case Vp:case Gp:case Wp:de=yy;break;case jp:de=Dy;break;case"scroll":case"scrollend":de=py;break;case"wheel":de=Iy;break;case"copy":case"cut":case"paste":de=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Mp;break;case"toggle":case"beforetoggle":de=ky}var ct=(r&4)!==0,Kt=!ct&&(t==="scroll"||t==="scrollend"),$=ct?ce!==null?ce+"Capture":null:ce;ct=[];for(var j=ne,ie;j!==null;){var _e=j;if(ie=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ie===null||$===null||(_e=Js(j,$),_e!=null&&ct.push(Do(j,_e,ie))),Kt)break;j=j.return}0<ct.length&&(ce=new de(ce,Ze,null,n,me),xe.push({event:ce,listeners:ct}))}}if((r&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",ce&&n!==lu&&(Ze=n.relatedTarget||n.fromElement)&&(Rn(Ze)||Ze[Zi]))break e;if((de||ce)&&(ce=me.window===me?me:(ce=me.ownerDocument)?ce.defaultView||ce.parentWindow:window,de?(Ze=n.relatedTarget||n.toElement,de=ne,Ze=Ze?Rn(Ze):null,Ze!==null&&(Kt=c(Ze),ct=Ze.tag,Ze!==Kt||ct!==5&&ct!==27&&ct!==6)&&(Ze=null)):(de=null,Ze=ne),de!==Ze)){if(ct=bp,_e="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Mp,_e="onPointerLeave",$="onPointerEnter",j="pointer"),Kt=de==null?ce:ha(de),ie=Ze==null?ce:ha(Ze),ce=new ct(_e,j+"leave",de,n,me),ce.target=Kt,ce.relatedTarget=ie,_e=null,Rn(me)===ne&&(ct=new ct($,j+"enter",Ze,n,me),ct.target=ie,ct.relatedTarget=Kt,_e=ct),Kt=_e,de&&Ze)t:{for(ct=Ox,$=de,j=Ze,ie=0,_e=$;_e;_e=ct(_e))ie++;_e=0;for(var it=j;it;it=ct(it))_e++;for(;0<ie-_e;)$=ct($),ie--;for(;0<_e-ie;)j=ct(j),_e--;for(;ie--;){if($===j||j!==null&&$===j.alternate){ct=$;break t}$=ct($),j=ct(j)}ct=null}else ct=null;de!==null&&pv(xe,ce,de,ct,!1),Ze!==null&&Kt!==null&&pv(xe,Kt,Ze,ct,!0)}}e:{if(ce=ne?ha(ne):window,de=ce.nodeName&&ce.nodeName.toLowerCase(),de==="select"||de==="input"&&ce.type==="file")var Ot=Np;else if(Rp(ce))if(Lp)Ot=qy;else{Ot=jy;var Qe=Wy}else de=ce.nodeName,!de||de.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?ne&&It(ne.elementType)&&(Ot=Np):Ot=Xy;if(Ot&&(Ot=Ot(t,ne))){Pp(xe,Ot,n,me);break e}Qe&&Qe(t,ce,ne),t==="focusout"&&ne&&ce.type==="number"&&ne.memoizedProps.value!=null&&_i(ce,"number",ce.value)}switch(Qe=ne?ha(ne):window,t){case"focusin":(Rp(Qe)||Qe.contentEditable==="true")&&(Ka=Qe,bu=ne,oo=null);break;case"focusout":oo=bu=Ka=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Bp(xe,n,me);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Bp(xe,n,me)}var vt;if(vu)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Ya?Ap(t,n)&&(Ct="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(Ct="onCompositionStart");Ct&&(Ep&&n.locale!=="ko"&&(Ya||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ya&&(vt=yp()):(Dn=me,fu="value"in Dn?Dn.value:Dn.textContent,Ya=!0)),Qe=ac(ne,Ct),0<Qe.length&&(Ct=new Sp(Ct,t,null,n,me),xe.push({event:Ct,listeners:Qe}),vt?Ct.data=vt:(vt=Cp(n),vt!==null&&(Ct.data=vt)))),(vt=zy?By(t,n):Hy(t,n))&&(Ct=ac(ne,"onBeforeInput"),0<Ct.length&&(Qe=new Sp("onBeforeInput","beforeinput",null,n,me),xe.push({event:Qe,listeners:Ct}),Qe.data=vt)),Lx(xe,t,ne,n,me)}fv(xe,r)})}function Do(t,r,n){return{instance:t,listener:r,currentTarget:n}}function ac(t,r){for(var n=r+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Js(t,n),u!=null&&o.unshift(Do(t,u,f)),u=Js(t,r),u!=null&&o.push(Do(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Ox(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function pv(t,r,n,o,u){for(var f=r._reactName,_=[];n!==null&&n!==o;){var A=n,B=A.alternate,ne=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||ne===null||(B=ne,u?(ne=Js(n,f),ne!=null&&_.unshift(Do(n,ne,B))):u||(ne=Js(n,f),ne!=null&&_.push(Do(n,ne,B)))),n=n.return}_.length!==0&&t.push({event:r,listeners:_})}var kx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function mv(t){return(typeof t=="string"?t:""+t).replace(kx,`
`).replace(Fx,"")}function gv(t,r){return r=mv(r),mv(t)===r}function Yt(t,r,n,o,u,f){switch(n){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||Zr(t,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&Zr(t,""+o);break;case"className":qe(t,"class",o);break;case"tabIndex":qe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(t,n,o);break;case"style":xi(t,o,f);break;case"data":if(r!=="object"){qe(t,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=ma(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(r!=="input"&&Yt(t,r,"name",u.name,u,null),Yt(t,r,"formEncType",u.formEncType,u,null),Yt(t,r,"formMethod",u.formMethod,u,null),Yt(t,r,"formTarget",u.formTarget,u,null)):(Yt(t,r,"encType",u.encType,u,null),Yt(t,r,"method",u.method,u,null),Yt(t,r,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=ma(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&wt("scroll",t);break;case"onScrollEnd":o!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(n=o.__html,n!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=ma(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":wt("beforetoggle",t),wt("toggle",t),Xe(t,"popover",o);break;case"xlinkActuate":tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":tt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":tt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":tt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":tt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pa.get(n)||n,Xe(t,n,o))}}function qd(t,r,n,o,u,f){switch(n){case"style":xi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(n=o.__html,n!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=n}}break;case"children":typeof o=="string"?Zr(t,o):(typeof o=="number"||typeof o=="bigint")&&Zr(t,""+o);break;case"onScroll":o!=null&&wt("scroll",t);break;case"onScrollEnd":o!=null&&wt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),r=n.slice(2,u?n.length-7:void 0),f=t[Er]||null,f=f!=null?f[n]:null,typeof f=="function"&&t.removeEventListener(r,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,o,u);break e}n in t?t[n]=o:o===!0?t.setAttribute(n,""):Xe(t,n,o)}}}function Cr(t,r,n){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var o=!1,u=!1,f;for(f in n)if(n.hasOwnProperty(f)){var _=n[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Yt(t,r,f,_,n,null)}}u&&Yt(t,r,"srcSet",n.srcSet,n,null),o&&Yt(t,r,"src",n.src,n,null);return;case"input":wt("invalid",t);var A=f=_=u=null,B=null,ne=null;for(o in n)if(n.hasOwnProperty(o)){var me=n[o];if(me!=null)switch(o){case"name":u=me;break;case"type":_=me;break;case"checked":B=me;break;case"defaultChecked":ne=me;break;case"value":f=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,r));break;default:Yt(t,r,o,me,n,null)}}Nr(t,f,A,B,ne,_,u,!1);return;case"select":wt("invalid",t),o=_=f=null;for(u in n)if(n.hasOwnProperty(u)&&(A=n[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":o=A;default:Yt(t,r,u,A,n,null)}r=f,n=_,t.multiple=!!o,r!=null?gr(t,!!o,r,!1):n!=null&&gr(t,!!o,n,!0);return;case"textarea":wt("invalid",t),f=u=o=null;for(_ in n)if(n.hasOwnProperty(_)&&(A=n[_],A!=null))switch(_){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Yt(t,r,_,A,n,null)}yi(t,o,u,f);return;case"option":for(B in n)n.hasOwnProperty(B)&&(o=n[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Yt(t,r,B,o,n,null));return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)wt(Lo[o],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in n)if(n.hasOwnProperty(ne)&&(o=n[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Yt(t,r,ne,o,n,null)}return;default:if(It(r)){for(me in n)n.hasOwnProperty(me)&&(o=n[me],o!==void 0&&qd(t,r,me,o,n,void 0));return}}for(A in n)n.hasOwnProperty(A)&&(o=n[A],o!=null&&Yt(t,r,A,o,n,null))}function zx(t,r,n,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,B=null,ne=null,me=null;for(de in n){var xe=n[de];if(n.hasOwnProperty(de)&&xe!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":B=xe;default:o.hasOwnProperty(de)||Yt(t,r,de,null,o,xe)}}for(var ce in o){var de=o[ce];if(xe=n[ce],o.hasOwnProperty(ce)&&(de!=null||xe!=null))switch(ce){case"type":f=de;break;case"name":u=de;break;case"checked":ne=de;break;case"defaultChecked":me=de;break;case"value":_=de;break;case"defaultValue":A=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,r));break;default:de!==xe&&Yt(t,r,ce,de,o,xe)}}Ke(t,_,A,B,ne,me,f,u);return;case"select":de=_=A=ce=null;for(f in n)if(B=n[f],n.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":de=B;default:o.hasOwnProperty(f)||Yt(t,r,f,null,o,B)}for(u in o)if(f=o[u],B=n[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ce=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==B&&Yt(t,r,u,f,o,B)}r=A,n=_,o=de,ce!=null?gr(t,!!n,ce,!1):!!o!=!!n&&(r!=null?gr(t,!!n,r,!0):gr(t,!!n,n?[]:"",!1));return;case"textarea":de=ce=null;for(A in n)if(u=n[A],n.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Yt(t,r,A,null,o,u)}for(_ in o)if(u=o[_],f=n[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ce=u;break;case"defaultValue":de=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&Yt(t,r,_,u,o,f)}Kr(t,ce,de);return;case"option":for(var Ze in n)ce=n[Ze],n.hasOwnProperty(Ze)&&ce!=null&&!o.hasOwnProperty(Ze)&&(Ze==="selected"?t.selected=!1:Yt(t,r,Ze,null,o,ce));for(B in o)ce=o[B],de=n[B],o.hasOwnProperty(B)&&ce!==de&&(ce!=null||de!=null)&&(B==="selected"?t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":Yt(t,r,B,ce,o,de));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in n)ce=n[ct],n.hasOwnProperty(ct)&&ce!=null&&!o.hasOwnProperty(ct)&&Yt(t,r,ct,null,o,ce);for(ne in o)if(ce=o[ne],de=n[ne],o.hasOwnProperty(ne)&&ce!==de&&(ce!=null||de!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,r));break;default:Yt(t,r,ne,ce,o,de)}return;default:if(It(r)){for(var Kt in n)ce=n[Kt],n.hasOwnProperty(Kt)&&ce!==void 0&&!o.hasOwnProperty(Kt)&&qd(t,r,Kt,void 0,o,ce);for(me in o)ce=o[me],de=n[me],!o.hasOwnProperty(me)||ce===de||ce===void 0&&de===void 0||qd(t,r,me,ce,o,de);return}}for(var $ in n)ce=n[$],n.hasOwnProperty($)&&ce!=null&&!o.hasOwnProperty($)&&Yt(t,r,$,null,o,ce);for(xe in o)ce=o[xe],de=n[xe],!o.hasOwnProperty(xe)||ce===de||ce==null&&de==null||Yt(t,r,xe,ce,o,de)}function vv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,r=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var u=n[o],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&vv(_)){for(_=0,A=u.responseEnd,o+=1;o<n.length;o++){var B=n[o],ne=B.startTime;if(ne>A)break;var me=B.transferSize,xe=B.initiatorType;me&&vv(xe)&&(B=B.responseEnd,_+=me*(B<A?1:(A-ne)/(B-ne)))}if(--o,r+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return r/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yd=null,Kd=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function _v(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Zd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $d=null;function Hx(){var t=window.event;return t&&t.type==="popstate"?t===$d?!1:($d=t,!0):($d=null,!1)}var xv=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,bv=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof bv<"u"?function(t){return bv.resolve(null).then(t).catch(Wx)}:xv;function Wx(t){setTimeout(function(){throw t})}function Zn(t){return t==="head"}function Sv(t,r){var n=r,o=0;do{var u=n.nextSibling;if(t.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"||n==="/&"){if(o===0){t.removeChild(u),Ss(r);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")Uo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Uo(n);for(var f=n.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[Cn]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=_}}else n==="body"&&Uo(t.ownerDocument.body);n=u}while(n);Ss(r)}function Mv(t,r){var n=t;t=0;do{var o=n.nextSibling;if(n.nodeType===1?r?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(r?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=o}while(n)}function Qd(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var n=r;switch(r=r.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Qd(n),Qs(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function jx(t,r,n,o){for(;t.nodeType===1;){var u=n;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Cn])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence")||f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function Xx(t,r,n){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Ev(t,r){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=pi(t.nextSibling),t===null))return null;return t}function Jd(t){return t.data==="$?"||t.data==="$~"}function ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function qx(t,r){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=r;else if(t.data!=="$?"||n.readyState!=="loading")r();else{var o=function(){r(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function pi(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return t}var tf=null;function wv(t){t=t.nextSibling;for(var r=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(r===0)return pi(t.nextSibling);r--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||r++}t=t.nextSibling}return null}function Tv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(r===0)return t;r--}else n!=="/$"&&n!=="/&"||r++}t=t.previousSibling}return null}function Av(t,r,n){switch(r=sc(n),t){case"html":if(t=r.documentElement,!t)throw Error(a(452));return t;case"head":if(t=r.head,!t)throw Error(a(453));return t;case"body":if(t=r.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Uo(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Qs(t)}var mi=new Map,Cv=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pn=z.d;z.d={f:Yx,r:Kx,D:Zx,C:$x,L:Qx,m:Jx,X:t1,S:e1,M:r1};function Yx(){var t=pn.f(),r=Ql();return t||r}function Kx(t){var r=Pn(t);r!==null&&r.tag===5&&r.type==="form"?jm(r):pn.r(t)}var ys=typeof document>"u"?null:document;function Rv(t,r,n){var o=ys;if(o&&typeof r=="string"&&r){var u=Lt(r);u='link[rel="'+t+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),Cv.has(u)||(Cv.add(u),t={rel:t,crossOrigin:n,href:r},o.querySelector(u)===null&&(r=o.createElement("link"),Cr(r,"link",t),lr(r),o.head.appendChild(r)))}}function Zx(t){pn.D(t),Rv("dns-prefetch",t,null)}function $x(t,r){pn.C(t,r),Rv("preconnect",t,r)}function Qx(t,r,n){pn.L(t,r,n);var o=ys;if(o&&t&&r){var u='link[rel="preload"][as="'+Lt(r)+'"]';r==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Lt(n.imageSizes)+'"]')):u+='[href="'+Lt(t)+'"]';var f=u;switch(r){case"style":f=xs(t);break;case"script":f=bs(t)}mi.has(f)||(t=y({rel:"preload",href:r==="image"&&n&&n.imageSrcSet?void 0:t,as:r},n),mi.set(f,t),o.querySelector(u)!==null||r==="style"&&o.querySelector(Io(f))||r==="script"&&o.querySelector(Oo(f))||(r=o.createElement("link"),Cr(r,"link",t),lr(r),o.head.appendChild(r)))}}function Jx(t,r){pn.m(t,r);var n=ys;if(n&&t){var o=r&&typeof r.as=="string"?r.as:"script",u='link[rel="modulepreload"][as="'+Lt(o)+'"][href="'+Lt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=bs(t)}if(!mi.has(f)&&(t=y({rel:"modulepreload",href:t},r),mi.set(f,t),n.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oo(f)))return}o=n.createElement("link"),Cr(o,"link",t),lr(o),n.head.appendChild(o)}}}function e1(t,r,n){pn.S(t,r,n);var o=ys;if(o&&t){var u=Nn(o).hoistableStyles,f=xs(t);r=r||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=o.querySelector(Io(f)))A.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":r},n),(n=mi.get(f))&&rf(t,n);var B=_=o.createElement("link");lr(B),Cr(B,"link",t),B._p=new Promise(function(ne,me){B.onload=ne,B.onerror=me}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(_,r,o)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function t1(t,r){pn.X(t,r);var n=ys;if(n&&t){var o=Nn(n).hoistableScripts,u=bs(t),f=o.get(u);f||(f=n.querySelector(Oo(u)),f||(t=y({src:t,async:!0},r),(r=mi.get(u))&&nf(t,r),f=n.createElement("script"),lr(f),Cr(f,"link",t),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function r1(t,r){pn.M(t,r);var n=ys;if(n&&t){var o=Nn(n).hoistableScripts,u=bs(t),f=o.get(u);f||(f=n.querySelector(Oo(u)),f||(t=y({src:t,async:!0,type:"module"},r),(r=mi.get(u))&&nf(t,r),f=n.createElement("script"),lr(f),Cr(f,"link",t),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Pv(t,r,n,o){var u=(u=se.current)?oc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(r=xs(n.href),n=Nn(u).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=xs(n.href);var f=Nn(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Io(t)))&&!f._p&&(_.instance=f,_.state.loading=5),mi.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mi.set(t,n),f||i1(u,t,n,_.state))),r&&o===null)throw Error(a(528,""));return _}if(r&&o!==null)throw Error(a(529,""));return null;case"script":return r=n.async,n=n.src,typeof n=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=bs(n),n=Nn(u).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function xs(t){return'href="'+Lt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function Nv(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function i1(t,r,n,o){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=t.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),Cr(r,"link",n),lr(r),t.head.appendChild(r))}function bs(t){return'[src="'+Lt(t)+'"]'}function Oo(t){return"script[async]"+t}function Lv(t,r,n){if(r.count++,r.instance===null)switch(r.type){case"style":var o=t.querySelector('style[data-href~="'+Lt(n.href)+'"]');if(o)return r.instance=o,lr(o),o;var u=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),lr(o),Cr(o,"style",u),lc(o,n.precedence,t),r.instance=o;case"stylesheet":u=xs(n.href);var f=t.querySelector(Io(u));if(f)return r.state.loading|=4,r.instance=f,lr(f),f;o=Nv(n),(u=mi.get(u))&&rf(o,u),f=(t.ownerDocument||t).createElement("link"),lr(f);var _=f;return _._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),Cr(f,"link",o),r.state.loading|=4,lc(f,n.precedence,t),r.instance=f;case"script":return f=bs(n.src),(u=t.querySelector(Oo(f)))?(r.instance=u,lr(u),u):(o=n,(u=mi.get(f))&&(o=y({},n),nf(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),lr(u),Cr(u,"link",o),t.head.appendChild(u),r.instance=u);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,lc(o,n.precedence,t));return r.instance}function lc(t,r,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var A=o[_];if(A.dataset.precedence===r)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(r=n.nodeType===9?n.head:n,r.insertBefore(t,r.firstChild))}function rf(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function nf(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var cc=null;function Dv(t,r,n){if(cc===null){var o=new Map,u=cc=new Map;u.set(n,o)}else u=cc,o=u.get(n),o||(o=new Map,u.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),u=0;u<n.length;u++){var f=n[u];if(!(f[Cn]||f[ar]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(r)||"";_=t+_;var A=o.get(_);A?A.push(f):o.set(_,[f])}}return o}function Uv(t,r,n){t=t.ownerDocument||t,t.head.insertBefore(n,r==="title"?t.querySelector("head > title"):null)}function n1(t,r,n){if(n===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(t=r.disabled,typeof r.precedence=="string"&&t==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Iv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function a1(t,r,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=xs(o.href),f=r.querySelector(Io(u));if(f){r=f._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(t.count++,t=uc.bind(t),r.then(t,t)),n.state.loading|=4,n.instance=f,lr(f);return}f=r.ownerDocument||r,o=Nv(o),(u=mi.get(u))&&rf(o,u),f=f.createElement("link"),lr(f);var _=f;_._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),Cr(f,"link",o),n.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,r),(r=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=uc.bind(t),r.addEventListener("load",n),r.addEventListener("error",n))}}var af=0;function s1(t,r){return t.stylesheets&&t.count===0&&fc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var o=setTimeout(function(){if(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+r);0<t.imgBytes&&af===0&&(af=62500*Bx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>af?50:800)+r);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function fc(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,r.forEach(o1,t),dc=null,uc.call(t))}function o1(t,r){if(!(r.state.loading&4)){var n=dc.get(t);if(n)var o=n.get(null);else{n=new Map,dc.set(t,n);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(n.set(_.dataset.precedence,_),o=_)}o&&n.set(null,o)}u=r.instance,_=u.getAttribute("data-precedence"),f=n.get(_)||o,f===o&&n.set(null,u),n.set(_,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),r.state.loading|=4}}var ko={$$typeof:D,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function l1(t,r,n,o,u,f,_,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Ov(t,r,n,o,u,f,_,A,B,ne,me,xe){return t=new l1(t,r,n,_,B,ne,me,xe,A),r=1,f===!0&&(r|=24),f=Qr(3,null,null,r),t.current=f,f.stateNode=t,r=ku(),r.refCount++,t.pooledCache=r,r.refCount++,f.memoizedState={element:o,isDehydrated:n,cache:r},Hu(f),t}function kv(t){return t?(t=Qa,t):Qa}function Fv(t,r,n,o,u,f){u=kv(u),o.context===null?o.context=u:o.pendingContext=u,o=zn(r),o.payload={element:n},f=f===void 0?null:f,f!==null&&(o.callback=f),n=Bn(t,o,r),n!==null&&(jr(n,t,r),mo(n,t,r))}function zv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<r?n:r}}function sf(t,r){zv(t,r),(t=t.alternate)&&zv(t,r)}function Bv(t){if(t.tag===13||t.tag===31){var r=ya(t,67108864);r!==null&&jr(r,t,67108864),sf(t,67108864)}}function Hv(t){if(t.tag===13||t.tag===31){var r=ii();r=fa(r);var n=ya(t,r);n!==null&&jr(n,t,r),sf(t,r)}}var hc=!0;function c1(t,r,n,o){var u=U.T;U.T=null;var f=z.p;try{z.p=2,of(t,r,n,o)}finally{z.p=f,U.T=u}}function u1(t,r,n,o){var u=U.T;U.T=null;var f=z.p;try{z.p=8,of(t,r,n,o)}finally{z.p=f,U.T=u}}function of(t,r,n,o){if(hc){var u=lf(o);if(u===null)Xd(t,r,o,pc,n),Gv(t,o);else if(f1(u,t,r,n,o))o.stopPropagation();else if(Gv(t,o),r&4&&-1<d1.indexOf(t)){for(;u!==null;){var f=Pn(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=he(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var B=1<<31-ke(_);A.entanglements[1]|=B,_&=~B}Ui(f),(Ft&6)===0&&(Zl=Ce()+500,No(0))}}break;case 31:case 13:A=ya(f,2),A!==null&&jr(A,f,2),Ql(),sf(f,2)}if(f=lf(o),f===null&&Xd(t,r,o,pc,n),f===u)break;u=f}u!==null&&o.stopPropagation()}else Xd(t,r,o,null,n)}}function lf(t){return t=cu(t),cf(t)}var pc=null;function cf(t){if(pc=null,t=Rn(t),t!==null){var r=c(t);if(r===null)t=null;else{var n=r.tag;if(n===13){if(t=d(r),t!==null)return t;t=null}else if(n===31){if(t=h(r),t!==null)return t;t=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return pc=t,null}function Vv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case R:return 2;case M:return 8;case ee:case ve:return 32;case be:return 268435456;default:return 32}default:return 32}}var uf=!1,$n=null,Qn=null,Jn=null,Fo=new Map,zo=new Map,ea=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gv(t,r){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":Fo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(r.pointerId)}}function Bo(t,r,n,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},r!==null&&(r=Pn(r),r!==null&&Bv(r)),t):(t.eventSystemFlags|=o,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function f1(t,r,n,o,u){switch(r){case"focusin":return $n=Bo($n,t,r,n,o,u),!0;case"dragenter":return Qn=Bo(Qn,t,r,n,o,u),!0;case"mouseover":return Jn=Bo(Jn,t,r,n,o,u),!0;case"pointerover":var f=u.pointerId;return Fo.set(f,Bo(Fo.get(f)||null,t,r,n,o,u)),!0;case"gotpointercapture":return f=u.pointerId,zo.set(f,Bo(zo.get(f)||null,t,r,n,o,u)),!0}return!1}function Wv(t){var r=Rn(t.target);if(r!==null){var n=c(r);if(n!==null){if(r=n.tag,r===13){if(r=d(n),r!==null){t.blockedOn=r,Zs(t.priority,function(){Hv(n)});return}}else if(r===31){if(r=h(n),r!==null){t.blockedOn=r,Zs(t.priority,function(){Hv(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var n=lf(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);lu=o,n.target.dispatchEvent(o),lu=null}else return r=Pn(n),r!==null&&Bv(r),t.blockedOn=n,!1;r.shift()}return!0}function jv(t,r,n){mc(t)&&n.delete(r)}function h1(){uf=!1,$n!==null&&mc($n)&&($n=null),Qn!==null&&mc(Qn)&&(Qn=null),Jn!==null&&mc(Jn)&&(Jn=null),Fo.forEach(jv),zo.forEach(jv)}function gc(t,r){t.blockedOn===r&&(t.blockedOn=null,uf||(uf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,h1)))}var vc=null;function Xv(t){vc!==t&&(vc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var r=0;r<t.length;r+=3){var n=t[r],o=t[r+1],u=t[r+2];if(typeof o!="function"){if(cf(o||n)===null)continue;break}var f=Pn(n);f!==null&&(t.splice(r,3),r-=3,od(f,{pending:!0,data:u,method:n.method,action:o},o,u))}}))}function Ss(t){function r(B){return gc(B,t)}$n!==null&&gc($n,t),Qn!==null&&gc(Qn,t),Jn!==null&&gc(Jn,t),Fo.forEach(r),zo.forEach(r);for(var n=0;n<ea.length;n++){var o=ea[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ea.length&&(n=ea[0],n.blockedOn===null);)Wv(n),n.blockedOn===null&&ea.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var u=n[o],f=n[o+1],_=u[Er]||null;if(typeof f=="function")_||Xv(n);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[Er]||null)A=_.formAction;else if(cf(u)!==null)continue}else A=_.action;typeof A=="function"?n[o+1]=A:(n.splice(o,3),o-=3),Xv(n)}}}function qv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function r(){u!==null&&(u(),u=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),u!==null&&(u(),u=null)}}}function df(t){this._internalRoot=t}_c.prototype.render=df.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(a(409));var n=r.current,o=ii();Fv(n,o,t,r,null,null)},_c.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Fv(t.current,2,null,t,null,null),Ql(),r[Zi]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var r=Ks();t={blockedOn:null,target:t,priority:r};for(var n=0;n<ea.length&&r!==0&&r<ea[n].priority;n++);ea.splice(n,0,t),n===0&&Wv(t)}};var Yv=e.version;if(Yv!=="19.2.3")throw Error(a(527,Yv,"19.2.3"));z.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(r),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var p1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{Y=yc.inject(p1),Re=yc}catch{}}return Vo.createRoot=function(t,r){if(!l(t))throw Error(a(299));var n=!1,o="",u=tg,f=rg,_=ig;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError)),r=Ov(t,1,!1,null,null,n,o,null,u,f,_,qv),t[Zi]=r.current,jd(t),new df(r)},Vo.hydrateRoot=function(t,r,n){if(!l(t))throw Error(a(299));var o=!1,u="",f=tg,_=rg,A=ig,B=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(_=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError),n.formState!==void 0&&(B=n.formState)),r=Ov(t,1,!0,r,n??null,o,u,B,f,_,A,qv),r.context=kv(null),n=r.current,o=ii(),o=fa(o),u=zn(o),u.callback=null,Bn(n,u,o),n=o,r.current.lanes=n,at(r,n),Ui(r),t[Zi]=r.current,jd(t),new _c(r)},Vo.version="19.2.3",Vo}var l0;function E1(){if(l0)return ff.exports;l0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ff.exports=M1(),ff.exports}var w1=E1(),St=$h();const c0=[{label:"Servicios",href:"#servicios"},{label:"Sectores",href:"#sectores"},{label:"Metodología",href:"#metodologia"},{label:"Contacto",href:"#contacto"}];function T1(){const[s,e]=St.useState(!1),[i,a]=St.useState(!1);St.useEffect(()=>{const c=()=>{e(window.scrollY>window.innerHeight*.8)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),St.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const l=(c,d)=>{c.preventDefault(),a(!1);const h=document.querySelector(d);h&&h.scrollIntoView({behavior:"smooth"})};return Z.jsxs(Z.Fragment,{children:[Z.jsx("nav",{"code-path":"src\\sections\\Navigation.tsx:44:7",className:"fixed top-0 left-0 right-0 z-[100] transition-all duration-300",style:{backgroundColor:s?"rgba(245, 243, 239, 0.95)":"transparent",backdropFilter:s?"blur(10px)":"none",borderBottom:s?"1px solid #d4d0ca":"1px solid transparent"},children:Z.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:52:9",className:"mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6",children:[Z.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:54:11",href:"#",onClick:c=>{c.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"text-lg font-bold uppercase tracking-[3px] transition-colors duration-300",style:{fontFamily:"'Space Grotesk', sans-serif",color:s?"#1a1a1a":"#ffffff"},children:"IMANTEK"}),Z.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:70:11",className:"hidden items-center gap-8 md:flex",children:c0.map(c=>Z.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:72:15",href:c.href,onClick:d=>l(d,c.href),className:"text-xs font-normal uppercase tracking-[1.5px] transition-colors duration-300 hover:opacity-70",style:{fontFamily:"'IBM Plex Mono', monospace",color:s?"#1a1a1a":"#ffffff"},children:c.label},c.href))}),Z.jsxs("button",{"code-path":"src\\sections\\Navigation.tsx:88:11",className:"flex flex-col gap-[5px] md:hidden",onClick:()=>a(!i),"aria-label":"Toggle menu",children:[Z.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:93:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:s?"#1a1a1a":"#ffffff",transform:i?"rotate(45deg) translate(3px, 3px)":"none"}}),Z.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:100:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:s?"#1a1a1a":"#ffffff",opacity:i?0:1}}),Z.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:107:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:s?"#1a1a1a":"#ffffff",transform:i?"rotate(-45deg) translate(3px, -3px)":"none"}})]})]})}),i&&Z.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:120:9",className:"fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8",style:{backgroundColor:"#1a1a1a"},children:c0.map(c=>Z.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:125:13",href:c.href,onClick:d=>l(d,c.href),className:"text-2xl font-medium uppercase tracking-[2px] text-white hover:text-[#c4713b] transition-colors",style:{fontFamily:"'Space Grotesk', sans-serif"},children:c.label},c.href))})]})}const Qh="184",A1=0,u0=1,C1=2,qc=1,R1=2,Zo=3,ua=0,qr=1,xn=2,Sn=0,Fs=1,d0=2,f0=3,h0=4,P1=5,ka=100,N1=101,L1=102,D1=103,U1=104,I1=200,O1=201,k1=202,F1=203,th=204,rh=205,z1=206,B1=207,H1=208,V1=209,G1=210,W1=211,j1=212,X1=213,q1=214,ih=0,nh=1,ah=2,Bs=3,sh=4,oh=5,lh=6,ch=7,m_=0,Y1=1,K1=2,Hi=0,g_=1,v_=2,__=3,Jh=4,y_=5,x_=6,b_=7,S_=300,Ha=301,Hs=302,pf=303,mf=304,nu=306,uh=1e3,bn=1001,dh=1002,Rr=1003,Z1=1004,xc=1005,Ir=1006,gf=1007,za=1008,oi=1009,M_=1010,E_=1011,tl=1012,ep=1013,Wi=1014,zi=1015,En=1016,tp=1017,rp=1018,rl=1020,w_=35902,T_=35899,A_=1021,C_=1022,Ri=1023,wn=1026,Ba=1027,R_=1028,ip=1029,Va=1030,np=1031,ap=1033,Yc=33776,Kc=33777,Zc=33778,$c=33779,fh=35840,hh=35841,ph=35842,mh=35843,gh=36196,vh=37492,_h=37496,yh=37488,xh=37489,Jc=37490,bh=37491,Sh=37808,Mh=37809,Eh=37810,wh=37811,Th=37812,Ah=37813,Ch=37814,Rh=37815,Ph=37816,Nh=37817,Lh=37818,Dh=37819,Uh=37820,Ih=37821,Oh=36492,kh=36494,Fh=36495,zh=36283,Bh=36284,eu=36285,Hh=36286,$1=3200,Vh=0,Q1=1,la="",vi="srgb",tu="srgb-linear",ru="linear",Gt="srgb",Ms=7680,p0=519,J1=512,eb=513,tb=514,sp=515,rb=516,ib=517,op=518,nb=519,m0=35044,g0="300 es",Bi=2e3,il=2001;function ab(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function iu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sb(){const s=iu("canvas");return s.style.display="block",s}const v0={};function _0(...s){const e="THREE."+s.shift();console.log(e,...s)}function P_(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ut(...s){s=P_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function Dt(...s){s=P_(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Gh(...s){const e=s.join(" ");e in v0||(v0[e]=!0,ut(...s))}function ob(s,e,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const lb={[ih]:nh,[ah]:lh,[sh]:ch,[Bs]:oh,[nh]:ih,[lh]:ah,[ch]:sh,[oh]:Bs};class Wa{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Dr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vf=Math.PI/180,Wh=180/Math.PI;function js(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Dr[s&255]+Dr[s>>8&255]+Dr[s>>16&255]+Dr[s>>24&255]+"-"+Dr[e&255]+Dr[e>>8&255]+"-"+Dr[e>>16&15|64]+Dr[e>>24&255]+"-"+Dr[i&63|128]+Dr[i>>8&255]+"-"+Dr[i>>16&255]+Dr[i>>24&255]+Dr[a&255]+Dr[a>>8&255]+Dr[a>>16&255]+Dr[a>>24&255]).toLowerCase()}function Tt(s,e,i){return Math.max(e,Math.min(i,s))}function cb(s,e){return(s%e+e)%e}function _f(s,e,i){return(1-i)*s+i*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const N_=class{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*a-d*l+e.x,this.y=c*l+d*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};N_.prototype.isVector2=!0;let je=N_;class Xs{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,d,h){let m=a[l+0],p=a[l+1],v=a[l+2],y=a[l+3],g=c[d+0],x=c[d+1],E=c[d+2],P=c[d+3];if(y!==P||m!==g||p!==x||v!==E){let S=m*g+p*x+v*E+y*P;S<0&&(g=-g,x=-x,E=-E,P=-P,S=-S);let b=1-h;if(S<.9995){const C=Math.acos(S),D=Math.sin(C);b=Math.sin(b*C)/D,h=Math.sin(h*C)/D,m=m*b+g*h,p=p*b+x*h,v=v*b+E*h,y=y*b+P*h}else{m=m*b+g*h,p=p*b+x*h,v=v*b+E*h,y=y*b+P*h;const C=1/Math.sqrt(m*m+p*p+v*v+y*y);m*=C,p*=C,v*=C,y*=C}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=y}static multiplyQuaternionsFlat(e,i,a,l,c,d){const h=a[l],m=a[l+1],p=a[l+2],v=a[l+3],y=c[d],g=c[d+1],x=c[d+2],E=c[d+3];return e[i]=h*E+v*y+m*x-p*g,e[i+1]=m*E+v*g+p*y-h*x,e[i+2]=p*E+v*x+h*g-m*y,e[i+3]=v*E-h*y-m*g-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(a/2),v=h(l/2),y=h(c/2),g=m(a/2),x=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=g*v*y+p*x*E,this._y=p*x*y-g*v*E,this._z=p*v*E+g*x*y,this._w=p*v*y-g*x*E;break;case"YXZ":this._x=g*v*y+p*x*E,this._y=p*x*y-g*v*E,this._z=p*v*E-g*x*y,this._w=p*v*y+g*x*E;break;case"ZXY":this._x=g*v*y-p*x*E,this._y=p*x*y+g*v*E,this._z=p*v*E+g*x*y,this._w=p*v*y-g*x*E;break;case"ZYX":this._x=g*v*y-p*x*E,this._y=p*x*y+g*v*E,this._z=p*v*E-g*x*y,this._w=p*v*y+g*x*E;break;case"YZX":this._x=g*v*y+p*x*E,this._y=p*x*y+g*v*E,this._z=p*v*E-g*x*y,this._w=p*v*y-g*x*E;break;case"XZY":this._x=g*v*y-p*x*E,this._y=p*x*y-g*v*E,this._z=p*v*E+g*x*y,this._w=p*v*y+g*x*E;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],y=i[10],g=a+h+y;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-m)*x,this._y=(c-p)*x,this._z=(d-l)*x}else if(a>h&&a>y){const x=2*Math.sqrt(1+a-h-y);this._w=(v-m)/x,this._x=.25*x,this._y=(l+d)/x,this._z=(c+p)/x}else if(h>y){const x=2*Math.sqrt(1+h-a-y);this._w=(c-p)/x,this._x=(l+d)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+y-a-h);this._w=(d-l)/x,this._x=(c+p)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=a*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-a*p,this._z=c*v+d*p+a*m-l*h,this._w=d*v-a*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let a=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(a=-a,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+a*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const L_=class{constructor(e=0,i=0,a=0){this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(y0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*a),v=2*(h*i-c*l),y=2*(c*a-d*i);return this.x=i+m*p+d*y-h*v,this.y=a+m*v+h*p-c*y,this.z=l+m*y+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-a*m,this.z=a*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};L_.prototype.isVector3=!0;let Q=L_;const yf=new Q,y0=new Xs,D_=class{constructor(e,i,a,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,d,h,m,p)}set(e,i,a,l,c,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=a,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,d=a[0],h=a[3],m=a[6],p=a[1],v=a[4],y=a[7],g=a[2],x=a[5],E=a[8],P=l[0],S=l[3],b=l[6],C=l[1],D=l[4],L=l[7],V=l[2],N=l[5],F=l[8];return c[0]=d*P+h*C+m*V,c[3]=d*S+h*D+m*N,c[6]=d*b+h*L+m*F,c[1]=p*P+v*C+y*V,c[4]=p*S+v*D+y*N,c[7]=p*b+v*L+y*F,c[2]=g*P+x*C+E*V,c[5]=g*S+x*D+E*N,c[8]=g*b+x*L+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-a*c*v+a*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],y=v*d-h*p,g=h*m-v*c,x=p*c-d*m,E=i*y+a*g+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=y*P,e[1]=(l*p-v*a)*P,e[2]=(h*a-l*d)*P,e[3]=g*P,e[4]=(v*i-l*m)*P,e[5]=(l*c-h*i)*P,e[6]=x*P,e[7]=(a*m-p*i)*P,e[8]=(d*i-a*c)*P,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(xf.makeScale(e,i)),this}rotate(e){return this.premultiply(xf.makeRotation(-e)),this}translate(e,i){return this.premultiply(xf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};D_.prototype.isMatrix3=!0;let _t=D_;const xf=new _t,x0=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b0=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ub(){const s={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Gt&&(l.r=Mn(l.r),l.g=Mn(l.g),l.b=Mn(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===la?ru:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Gh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Gh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[tu]:{primaries:e,whitePoint:a,transfer:ru,toXYZ:x0,fromXYZ:b0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:vi},outputColorSpaceConfig:{drawingBufferColorSpace:vi}},[vi]:{primaries:e,whitePoint:a,transfer:Gt,toXYZ:x0,fromXYZ:b0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:vi}}}),s}const Nt=ub();function Mn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class db{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Es===void 0&&(Es=iu("canvas")),Es.width=e.width,Es.height=e.height;const l=Es.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=Es}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=iu("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Mn(c[d]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(Mn(i[a]/255)*255):i[a]=Mn(i[a]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fb=0;class lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(bf(l[d].image)):c.push(bf(l[d]))}else c=bf(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function bf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?db.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let hb=0;const Sf=new Q;class zr extends Wa{constructor(e=zr.DEFAULT_IMAGE,i=zr.DEFAULT_MAPPING,a=bn,l=bn,c=Ir,d=za,h=Ri,m=oi,p=zr.DEFAULT_ANISOTROPY,v=la){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=js(),this.name="",this.source=new lp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uh:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uh:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zr.DEFAULT_IMAGE=null;zr.DEFAULT_MAPPING=S_;zr.DEFAULT_ANISOTROPY=1;const U_=class{constructor(e=0,i=0,a=0,l=1){this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*a+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*a+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*a+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*a+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const d=e.elements,h=d[0],m=d[4],p=d[8],v=d[1],y=d[5],g=d[9],x=d[2],E=d[6],P=d[10];if(Math.abs(m-v)<.01&&Math.abs(p-x)<.01&&Math.abs(g-E)<.01){if(Math.abs(m+v)<.1&&Math.abs(p+x)<.1&&Math.abs(g+E)<.1&&Math.abs(h+y+P-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const b=(h+1)/2,C=(y+1)/2,D=(P+1)/2,L=(m+v)/4,V=(p+x)/4,N=(g+E)/4;return b>C&&b>D?b<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(b),l=L/a,c=V/a):C>D?C<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),a=L/l,c=N/l):D<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(D),a=V/c,l=N/c),this.set(a,l,c,i),this}let S=Math.sqrt((E-g)*(E-g)+(p-x)*(p-x)+(v-m)*(v-m));return Math.abs(S)<.001&&(S=1),this.x=(E-g)/S,this.y=(p-x)/S,this.z=(v-m)/S,this.w=Math.acos((h+y+P-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Tt(this.x,e.x,i.x),this.y=Tt(this.y,e.y,i.y),this.z=Tt(this.z,e.z,i.z),this.w=Tt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Tt(this.x,e,i),this.y=Tt(this.y,e,i),this.z=Tt(this.z,e,i),this.w=Tt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};U_.prototype.isVector4=!0;let pr=U_;class pb extends Wa{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ir,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new pr(0,0,e,i),this.scissorTest=!1,this.viewport=new pr(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:a.depth},c=new zr(l),d=a.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:Ir,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new lp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends pb{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class I_ extends zr{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Rr,this.minFilter=Rr,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mb extends zr{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Rr,this.minFilter=Rr,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const O_=class k_{constructor(e,i,a,l,c,d,h,m,p,v,y,g,x,E,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,d,h,m,p,v,y,g,x,E,P,S)}set(e,i,a,l,c,d,h,m,p,v,y,g,x,E,P,S){const b=this.elements;return b[0]=e,b[4]=i,b[8]=a,b[12]=l,b[1]=c,b[5]=d,b[9]=h,b[13]=m,b[2]=p,b[6]=v,b[10]=y,b[14]=g,b[3]=x,b[7]=E,b[11]=P,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new k_().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,a=e.elements,l=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),d=1/ws.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*d,i[9]=a[9]*d,i[10]=a[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,d=Math.cos(a),h=Math.sin(a),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const g=d*v,x=d*y,E=h*v,P=h*y;i[0]=m*v,i[4]=-m*y,i[8]=p,i[1]=x+E*p,i[5]=g-P*p,i[9]=-h*m,i[2]=P-g*p,i[6]=E+x*p,i[10]=d*m}else if(e.order==="YXZ"){const g=m*v,x=m*y,E=p*v,P=p*y;i[0]=g+P*h,i[4]=E*h-x,i[8]=d*p,i[1]=d*y,i[5]=d*v,i[9]=-h,i[2]=x*h-E,i[6]=P+g*h,i[10]=d*m}else if(e.order==="ZXY"){const g=m*v,x=m*y,E=p*v,P=p*y;i[0]=g-P*h,i[4]=-d*y,i[8]=E+x*h,i[1]=x+E*h,i[5]=d*v,i[9]=P-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const g=d*v,x=d*y,E=h*v,P=h*y;i[0]=m*v,i[4]=E*p-x,i[8]=g*p+P,i[1]=m*y,i[5]=P*p+g,i[9]=x*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,x=d*p,E=h*m,P=h*p;i[0]=m*v,i[4]=P-g*y,i[8]=E*y+x,i[1]=y,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=x*y+E,i[10]=g-P*y}else if(e.order==="XZY"){const g=d*m,x=d*p,E=h*m,P=h*p;i[0]=m*v,i[4]=-y,i[8]=p*v,i[1]=g*y+P,i[5]=d*v,i[9]=x*y-E,i[2]=E*y-x,i[6]=h*v,i[10]=P*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gb,e,vb)}lookAt(e,i,a){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ra.crossVectors(a,ni),ra.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ra.crossVectors(a,ni)),ra.normalize(),bc.crossVectors(ni,ra),l[0]=ra.x,l[4]=bc.x,l[8]=ni.x,l[1]=ra.y,l[5]=bc.y,l[9]=ni.y,l[2]=ra.z,l[6]=bc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,d=a[0],h=a[4],m=a[8],p=a[12],v=a[1],y=a[5],g=a[9],x=a[13],E=a[2],P=a[6],S=a[10],b=a[14],C=a[3],D=a[7],L=a[11],V=a[15],N=l[0],F=l[4],w=l[8],k=l[12],X=l[1],O=l[5],G=l[9],ue=l[13],oe=l[2],q=l[6],U=l[10],z=l[14],re=l[3],fe=l[7],pe=l[11],I=l[15];return c[0]=d*N+h*X+m*oe+p*re,c[4]=d*F+h*O+m*q+p*fe,c[8]=d*w+h*G+m*U+p*pe,c[12]=d*k+h*ue+m*z+p*I,c[1]=v*N+y*X+g*oe+x*re,c[5]=v*F+y*O+g*q+x*fe,c[9]=v*w+y*G+g*U+x*pe,c[13]=v*k+y*ue+g*z+x*I,c[2]=E*N+P*X+S*oe+b*re,c[6]=E*F+P*O+S*q+b*fe,c[10]=E*w+P*G+S*U+b*pe,c[14]=E*k+P*ue+S*z+b*I,c[3]=C*N+D*X+L*oe+V*re,c[7]=C*F+D*O+L*q+V*fe,c[11]=C*w+D*G+L*U+V*pe,c[15]=C*k+D*ue+L*z+V*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],y=e[6],g=e[10],x=e[14],E=e[3],P=e[7],S=e[11],b=e[15],C=m*x-p*g,D=h*x-p*y,L=h*g-m*y,V=d*x-p*v,N=d*g-m*v,F=d*y-h*v;return i*(P*C-S*D+b*L)-a*(E*C-S*V+b*N)+l*(E*D-P*V+b*F)-c*(E*L-P*N+S*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],y=e[9],g=e[10],x=e[11],E=e[12],P=e[13],S=e[14],b=e[15],C=i*h-a*d,D=i*m-l*d,L=i*p-c*d,V=a*m-l*h,N=a*p-c*h,F=l*p-c*m,w=v*P-y*E,k=v*S-g*E,X=v*b-x*E,O=y*S-g*P,G=y*b-x*P,ue=g*b-x*S,oe=C*ue-D*G+L*O+V*X-N*k+F*w;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/oe;return e[0]=(h*ue-m*G+p*O)*q,e[1]=(l*G-a*ue-c*O)*q,e[2]=(P*F-S*N+b*V)*q,e[3]=(g*N-y*F-x*V)*q,e[4]=(m*X-d*ue-p*k)*q,e[5]=(i*ue-l*X+c*k)*q,e[6]=(S*L-E*F-b*D)*q,e[7]=(v*F-g*L+x*D)*q,e[8]=(d*G-h*X+p*w)*q,e[9]=(a*X-i*G-c*w)*q,e[10]=(E*N-P*L+b*C)*q,e[11]=(y*L-v*N-x*C)*q,e[12]=(h*k-d*O-m*w)*q,e[13]=(i*O-a*k+l*w)*q,e[14]=(P*D-E*V-S*C)*q,e[15]=(v*V-y*D+g*C)*q,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,d=e.x,h=e.y,m=e.z,p=c*d,v=c*h;return this.set(p*d+a,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+a,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,d){return this.set(1,a,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,y=h+h,g=c*p,x=c*v,E=c*y,P=d*v,S=d*y,b=h*y,C=m*p,D=m*v,L=m*y,V=a.x,N=a.y,F=a.z;return l[0]=(1-(P+b))*V,l[1]=(x+L)*V,l[2]=(E-D)*V,l[3]=0,l[4]=(x-L)*N,l[5]=(1-(g+b))*N,l[6]=(S+C)*N,l[7]=0,l[8]=(E+D)*F,l[9]=(S-C)*F,l[10]=(1-(g+P))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return a.set(1,1,1),i.identity(),this;let d=ws.set(l[0],l[1],l[2]).length();const h=ws.set(l[4],l[5],l[6]).length(),m=ws.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const p=1/d,v=1/h,y=1/m;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=y,wi.elements[9]*=y,wi.elements[10]*=y,i.setFromRotationMatrix(wi),a.x=d,a.y=h,a.z=m,this}makePerspective(e,i,a,l,c,d,h=Bi,m=!1){const p=this.elements,v=2*c/(i-e),y=2*c/(a-l),g=(i+e)/(i-e),x=(a+l)/(a-l);let E,P;if(m)E=c/(d-c),P=d*c/(d-c);else if(h===Bi)E=-(d+c)/(d-c),P=-2*d*c/(d-c);else if(h===il)E=-d/(d-c),P=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=P,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,a,l,c,d,h=Bi,m=!1){const p=this.elements,v=2/(i-e),y=2/(a-l),g=-(i+e)/(i-e),x=-(a+l)/(a-l);let E,P;if(m)E=1/(d-c),P=d/(d-c);else if(h===Bi)E=-2/(d-c),P=-(d+c)/(d-c);else if(h===il)E=-1/(d-c),P=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=P,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}};O_.prototype.isMatrix4=!0;let mr=O_;const ws=new Q,wi=new mr,gb=new Q(0,0,0),vb=new Q(1,1,1),ra=new Q,bc=new Q,ni=new Q,S0=new mr,M0=new Xs;class da{constructor(e=0,i=0,a=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],y=l[2],g=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,x),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Tt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return M0.setFromEuler(this),this.setFromQuaternion(M0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class F_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _b=0;const E0=new Q,Ts=new Xs,mn=new mr,Sc=new Q,Wo=new Q,yb=new Q,xb=new Xs,w0=new Q(1,0,0),T0=new Q(0,1,0),A0=new Q(0,0,1),C0={type:"added"},bb={type:"removed"},As={type:"childadded",child:null},Mf={type:"childremoved",child:null};class Or extends Wa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Or.DEFAULT_UP.clone();const e=new Q,i=new da,a=new Xs,l=new Q(1,1,1);function c(){a.setFromEuler(i,!1)}function d(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mr},normalMatrix:{value:new _t}}),this.matrix=new mr,this.matrixWorld=new mr,this.matrixAutoUpdate=Or.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Or.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new F_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(w0,e)}rotateY(e){return this.rotateOnAxis(T0,e)}rotateZ(e){return this.rotateOnAxis(A0,e)}translateOnAxis(e,i){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(w0,e)}translateY(e){return this.translateOnAxis(T0,e)}translateZ(e){return this.translateOnAxis(A0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Sc.copy(e):Sc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Wo,Sc,this.up):mn.lookAt(Sc,Wo,this.up),this.quaternion.setFromRotationMatrix(mn),l&&(mn.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(mn),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),As.child=e,this.dispatchEvent(As),As.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(bb),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const c=this.children[a].getObjectByProperty(e,i);if(c!==void 0)return c}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,xb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,a=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*a-c[8]*l,c[13]+=a-c[1]*i-c[5]*a-c[9]*l,c[14]+=l-c[2]*i-c[6]*a-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const y=m[p];c(e.shapes,y)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),y=d(e.shapes),g=d(e.skeletons),x=d(e.animations),E=d(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),y.length>0&&(a.shapes=y),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=l,a;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Or.DEFAULT_UP=new Q(0,1,0);Or.DEFAULT_MATRIX_AUTO_UPDATE=!0;Or.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mc extends Or{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const P of e.hand.values()){const S=i.getJointPose(P,a),b=this._getHandJoint(p,P);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=v.position.distanceTo(y.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new Mc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ia={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function wf(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=a,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Nt.workingColorSpace){if(e=cb(e,1),i=Tt(i,0,1),a=Tt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,d=2*a-c;this.r=wf(d,c,e+1/3),this.g=wf(d,c,e),this.b=wf(d,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=vi){function a(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=vi){const a=z_[e.toLowerCase()];return a!==void 0?this.setHex(a,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return Nt.workingToColorSpace(Ur.copy(this),e),Math.round(Tt(Ur.r*255,0,255))*65536+Math.round(Tt(Ur.g*255,0,255))*256+Math.round(Tt(Ur.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Ur.copy(this),i);const a=Ur.r,l=Ur.g,c=Ur.b,d=Math.max(a,l,c),h=Math.min(a,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const y=d-h;switch(p=v<=.5?y/(d+h):y/(2-d-h),d){case a:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-a)/y+2;break;case c:m=(a-l)/y+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Ur.copy(this),i),e.r=Ur.r,e.g=Ur.g,e.b=Ur.b,e}getStyle(e=vi){Nt.workingToColorSpace(Ur.copy(this),e);const i=Ur.r,a=Ur.g,l=Ur.b;return e!==vi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(ia),this.setHSL(ia.h+e,ia.s+i,ia.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(ia),e.getHSL(Ec);const a=_f(ia.h,Ec.h,i),l=_f(ia.s,Ec.s,i),c=_f(ia.l,Ec.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ur=new Ut;Ut.NAMES=z_;class cp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(e),this.density=i}clone(){return new cp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mb extends Or{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ti=new Q,gn=new Q,Tf=new Q,vn=new Q,Cs=new Q,Rs=new Q,R0=new Q,Af=new Q,Cf=new Q,Rf=new Q,Pf=new pr,Nf=new pr,Lf=new pr;class Ci{constructor(e=new Q,i=new Q,a=new Q){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Ti.subVectors(l,i),gn.subVectors(a,i),Tf.subVectors(e,i);const d=Ti.dot(Ti),h=Ti.dot(gn),m=Ti.dot(Tf),p=gn.dot(gn),v=gn.dot(Tf),y=d*p-h*h;if(y===0)return c.set(0,0,0),null;const g=1/y,x=(p*m-h*v)*g,E=(d*v-h*m)*g;return c.set(1-x-E,E,x)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,i,a,l,c,d,h,m){return this.getBarycoord(e,i,a,l,vn)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,vn.x),m.addScaledVector(d,vn.y),m.addScaledVector(h,vn.z),m)}static getInterpolatedAttribute(e,i,a,l,c,d){return Pf.setScalar(0),Nf.setScalar(0),Lf.setScalar(0),Pf.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,a),Lf.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Pf,c.x),d.addScaledVector(Nf,c.y),d.addScaledVector(Lf,c.z),d}static isFrontFacing(e,i,a,l){return Ti.subVectors(a,i),gn.subVectors(e,i),Ti.cross(gn).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ti.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let d,h;Cs.subVectors(l,a),Rs.subVectors(c,a),Af.subVectors(e,a);const m=Cs.dot(Af),p=Rs.dot(Af);if(m<=0&&p<=0)return i.copy(a);Cf.subVectors(e,l);const v=Cs.dot(Cf),y=Rs.dot(Cf);if(v>=0&&y<=v)return i.copy(l);const g=m*y-v*p;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(a).addScaledVector(Cs,d);Rf.subVectors(e,c);const x=Cs.dot(Rf),E=Rs.dot(Rf);if(E>=0&&x<=E)return i.copy(c);const P=x*p-m*E;if(P<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(a).addScaledVector(Rs,h);const S=v*E-x*y;if(S<=0&&y-v>=0&&x-E>=0)return R0.subVectors(c,l),h=(y-v)/(y-v+(x-E)),i.copy(l).addScaledVector(R0,h);const b=1/(S+P+g);return d=P*b,h=g*b,i.copy(a).addScaledVector(Cs,d).addScaledVector(Rs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ol{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ai):Ai.fromBufferAttribute(c,d),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),wc.copy(a.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Tc.subVectors(this.max,jo),Ps.subVectors(e.a,jo),Ns.subVectors(e.b,jo),Ls.subVectors(e.c,jo),na.subVectors(Ns,Ps),aa.subVectors(Ls,Ns),La.subVectors(Ps,Ls);let i=[0,-na.z,na.y,0,-aa.z,aa.y,0,-La.z,La.y,na.z,0,-na.x,aa.z,0,-aa.x,La.z,0,-La.x,-na.y,na.x,0,-aa.y,aa.x,0,-La.y,La.x,0];return!Df(i,Ps,Ns,Ls,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Df(i,Ps,Ns,Ls,Tc))?!1:(Ac.crossVectors(na,aa),i=[Ac.x,Ac.y,Ac.z],Df(i,Ps,Ns,Ls,Tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _n=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ai=new Q,wc=new ol,Ps=new Q,Ns=new Q,Ls=new Q,na=new Q,aa=new Q,La=new Q,jo=new Q,Tc=new Q,Ac=new Q,Da=new Q;function Df(s,e,i,a,l){for(let c=0,d=s.length-3;c<=d;c+=3){Da.fromArray(s,c);const h=l.x*Math.abs(Da.x)+l.y*Math.abs(Da.y)+l.z*Math.abs(Da.z),m=e.dot(Da),p=i.dot(Da),v=a.dot(Da);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const hr=new Q,Cc=new je;let Eb=0;class Gi extends Wa{constructor(e,i,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=m0,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(e),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)hr.fromBufferAttribute(this,i),hr.applyMatrix3(e),this.setXYZ(i,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)hr.fromBufferAttribute(this,i),hr.applyMatrix4(e),this.setXYZ(i,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)hr.fromBufferAttribute(this,i),hr.applyNormalMatrix(e),this.setXYZ(i,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)hr.fromBufferAttribute(this,i),hr.transformDirection(e),this.setXYZ(i,hr.x,hr.y,hr.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=Go(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Xr(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xr(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xr(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xr(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xr(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Xr(i,this.array),a=Xr(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Xr(i,this.array),a=Xr(a,this.array),l=Xr(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Xr(i,this.array),a=Xr(a,this.array),l=Xr(l,this.array),c=Xr(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==m0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class B_ extends Gi{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class H_ extends Gi{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Pi extends Gi{constructor(e,i,a){super(new Float32Array(e),i,a)}}const wb=new ol,Xo=new Q,Uf=new Q;class up{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):wb.setFromPoints(e).getCenter(a);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Xo,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Uf)),this.expandByPoint(Xo.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tb=0;const gi=new mr,If=new Or,Ds=new Q,ai=new ol,qo=new ol,br=new Q;class qi extends Wa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ab(e)?H_:B_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _t().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,a){return gi.makeTranslation(e,i,a),this.applyMatrix4(gi),this}scale(e,i,a){return gi.makeScale(e,i,a),this.applyMatrix4(gi),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];a.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Pi(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(br.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(br),br.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(br)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new up);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(br.addVectors(ai.min,qo.min),ai.expandByPoint(br),br.addVectors(ai.max,qo.max),ai.expandByPoint(br)):(ai.expandByPoint(qo.min),ai.expandByPoint(qo.max))}ai.getCenter(a);let l=0;for(let c=0,d=e.count;c<d;c++)br.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(br));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)br.fromBufferAttribute(h,p),m&&(Ds.fromBufferAttribute(e,p),br.add(Ds)),l=Math.max(l,a.distanceToSquared(br))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*a.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let w=0;w<a.count;w++)h[w]=new Q,m[w]=new Q;const p=new Q,v=new Q,y=new Q,g=new je,x=new je,E=new je,P=new Q,S=new Q;function b(w,k,X){p.fromBufferAttribute(a,w),v.fromBufferAttribute(a,k),y.fromBufferAttribute(a,X),g.fromBufferAttribute(c,w),x.fromBufferAttribute(c,k),E.fromBufferAttribute(c,X),v.sub(p),y.sub(p),x.sub(g),E.sub(g);const O=1/(x.x*E.y-E.x*x.y);isFinite(O)&&(P.copy(v).multiplyScalar(E.y).addScaledVector(y,-x.y).multiplyScalar(O),S.copy(y).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(O),h[w].add(P),h[k].add(P),h[X].add(P),m[w].add(S),m[k].add(S),m[X].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,k=C.length;w<k;++w){const X=C[w],O=X.start,G=X.count;for(let ue=O,oe=O+G;ue<oe;ue+=3)b(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const D=new Q,L=new Q,V=new Q,N=new Q;function F(w){V.fromBufferAttribute(l,w),N.copy(V);const k=h[w];D.copy(k),D.sub(V.multiplyScalar(V.dot(k))).normalize(),L.crossVectors(N,k);const X=L.dot(m[w])<0?-1:1;d.setXYZW(w,D.x,D.y,D.z,X)}for(let w=0,k=C.length;w<k;++w){const X=C[w],O=X.start,G=X.count;for(let ue=O,oe=O+G;ue<oe;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const l=new Q,c=new Q,d=new Q,h=new Q,m=new Q,p=new Q,v=new Q,y=new Q;if(e)for(let g=0,x=e.count;g<x;g+=3){const E=e.getX(g+0),P=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,S),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,P),p.fromBufferAttribute(a,S),h.add(v),m.add(v),p.add(v),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(P,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,x=i.count;g<x;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),a.setXYZ(g+0,v.x,v.y,v.z),a.setXYZ(g+1,v.x,v.y,v.z),a.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)br.fromBufferAttribute(e,i),br.normalize(),e.setXYZ(i,br.x,br.y,br.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,y=h.normalized,g=new p.constructor(m.length*v);let x=0,E=0;for(let P=0,S=m.length;P<S;P++){h.isInterleavedBufferAttribute?x=m[P]*h.data.stride+h.offset:x=m[P]*v;for(let b=0;b<v;b++)g[E++]=p[x++]}return new Gi(g,v,y)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qi,a=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,a);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,y=p.length;v<y;v++){const g=p[v],x=e(g,a);m.push(x)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let y=0,g=p.length;y<g;y++){const x=p[y];v.push(x.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=e.morphAttributes;for(const p in c){const v=[],y=c[p];for(let g=0,x=y.length;g<x;g++)v.push(y[g].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const y=d[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ab=0;class ll extends Wa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Fs,this.side=ua,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=rh,this.blendEquation=ka,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(a.blending=this.blending),this.side!==ua&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==th&&(a.blendSrc=this.blendSrc),this.blendDst!==rh&&(a.blendDst=this.blendDst),this.blendEquation!==ka&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(a.textures=c),d.length>0&&(a.images=d)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yn=new Q,Of=new Q,Rc=new Q,sa=new Q,kf=new Q,Pc=new Q,Ff=new Q;class Cb{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=yn.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,i),yn.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Of.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),sa.copy(this.origin).sub(Of);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Rc),h=sa.dot(this.direction),m=-sa.dot(Rc),p=sa.lengthSq(),v=Math.abs(1-d*d);let y,g,x,E;if(v>0)if(y=d*m-h,g=d*h-m,E=c*v,y>=0)if(g>=-E)if(g<=E){const P=1/v;y*=P,g*=P,x=y*(y+d*g+2*h)+g*(d*y+g+2*m)+p}else g=c,y=Math.max(0,-(d*g+h)),x=-y*y+g*(g+2*m)+p;else g=-c,y=Math.max(0,-(d*g+h)),x=-y*y+g*(g+2*m)+p;else g<=-E?(y=Math.max(0,-(-d*c+h)),g=y>0?-c:Math.min(Math.max(-c,-m),c),x=-y*y+g*(g+2*m)+p):g<=E?(y=0,g=Math.min(Math.max(-c,-m),c),x=g*(g+2*m)+p):(y=Math.max(0,-(d*c+h)),g=y>0?c:Math.min(Math.max(-c,-m),c),x=-y*y+g*(g+2*m)+p);else g=d>0?-c:c,y=Math.max(0,-(d*g+h)),x=-y*y+g*(g+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Of).addScaledVector(Rc,g),x}intersectSphere(e,i){yn.subVectors(e.center,this.origin);const a=yn.dot(this.direction),l=yn.dot(yn)-a*a,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=a-d,m=a+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(a=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(a=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),v>=0?(c=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),a>d||c>l||((c>a||isNaN(a))&&(a=c),(d<l||isNaN(l))&&(l=d),y>=0?(h=(e.min.z-g.z)*y,m=(e.max.z-g.z)*y):(h=(e.max.z-g.z)*y,m=(e.min.z-g.z)*y),a>m||h>l)||((h>a||a!==a)&&(a=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,i,a,l,c){kf.subVectors(i,e),Pc.subVectors(a,e),Ff.crossVectors(kf,Pc);let d=this.direction.dot(Ff),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;sa.subVectors(this.origin,e);const m=h*this.direction.dot(Pc.crossVectors(sa,Pc));if(m<0)return null;const p=h*this.direction.dot(kf.cross(sa));if(p<0||m+p>d)return null;const v=-h*sa.dot(Ff);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class V_ extends ll{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const P0=new mr,Ua=new Cb,Nc=new up,N0=new Q,Lc=new Q,Dc=new Q,Uc=new Q,zf=new Q,Ic=new Q,L0=new Q,Oc=new Q;class ji extends Or{constructor(e=new qi,i=new V_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,d=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],y=c[m];v!==0&&(zf.fromBufferAttribute(y,e),d?Ic.addScaledVector(zf,v):Ic.addScaledVector(zf.sub(i),v))}i.add(Ic)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(c),Ua.copy(e.ray).recast(e.near),!(Nc.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(Nc,N0)===null||Ua.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(P0.copy(c).invert(),Ua.copy(e.ray).applyMatrix4(P0),!(a.boundingBox!==null&&Ua.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,Ua)))}_computeIntersections(e,i,a){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,g=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,P=g.length;E<P;E++){const S=g[E],b=d[S.materialIndex],C=Math.max(S.start,x.start),D=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let L=C,V=D;L<V;L+=3){const N=h.getX(L),F=h.getX(L+1),w=h.getX(L+2);l=kc(this,b,e,a,p,v,y,N,F,w),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),P=Math.min(h.count,x.start+x.count);for(let S=E,b=P;S<b;S+=3){const C=h.getX(S),D=h.getX(S+1),L=h.getX(S+2);l=kc(this,d,e,a,p,v,y,C,D,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,P=g.length;E<P;E++){const S=g[E],b=d[S.materialIndex],C=Math.max(S.start,x.start),D=Math.min(m.count,Math.min(S.start+S.count,x.start+x.count));for(let L=C,V=D;L<V;L+=3){const N=L,F=L+1,w=L+2;l=kc(this,b,e,a,p,v,y,N,F,w),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),P=Math.min(m.count,x.start+x.count);for(let S=E,b=P;S<b;S+=3){const C=S,D=S+1,L=S+2;l=kc(this,d,e,a,p,v,y,C,D,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Rb(s,e,i,a,l,c,d,h){let m;if(e.side===qr?m=a.intersectTriangle(d,c,l,!0,h):m=a.intersectTriangle(l,c,d,e.side===ua,h),m===null)return null;Oc.copy(h),Oc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Oc);return p<i.near||p>i.far?null:{distance:p,point:Oc.clone(),object:s}}function kc(s,e,i,a,l,c,d,h,m,p){s.getVertexPosition(h,Lc),s.getVertexPosition(m,Dc),s.getVertexPosition(p,Uc);const v=Rb(s,e,i,a,Lc,Dc,Uc,L0);if(v){const y=new Q;Ci.getBarycoord(L0,Lc,Dc,Uc,y),l&&(v.uv=Ci.getInterpolatedAttribute(l,h,m,p,y,new je)),c&&(v.uv1=Ci.getInterpolatedAttribute(c,h,m,p,y,new je)),d&&(v.normal=Ci.getInterpolatedAttribute(d,h,m,p,y,new Q),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new Q,materialIndex:0};Ci.getNormal(Lc,Dc,Uc,g.normal),v.face=g,v.barycoord=y}return v}class Pb extends zr{constructor(e=null,i=1,a=1,l,c,d,h,m,p=Rr,v=Rr,y,g){super(null,d,h,m,p,v,l,c,y,g),this.isDataTexture=!0,this.image={data:e,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bf=new Q,Nb=new Q,Lb=new _t;class Oa{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=Bf.subVectors(a,i).cross(Nb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,a=!0){const l=e.delta(Bf),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return a===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||Lb.getNormalMatrix(e),l=this.coplanarPoint(Bf).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ia=new up,Db=new je(.5,.5),Fc=new Q;class dp{constructor(e=new Oa,i=new Oa,a=new Oa,l=new Oa,c=new Oa,d=new Oa){this.planes=[e,i,a,l,c,d]}set(e,i,a,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=Bi,a=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],y=c[5],g=c[6],x=c[7],E=c[8],P=c[9],S=c[10],b=c[11],C=c[12],D=c[13],L=c[14],V=c[15];if(l[0].setComponents(p-d,x-v,b-E,V-C).normalize(),l[1].setComponents(p+d,x+v,b+E,V+C).normalize(),l[2].setComponents(p+h,x+y,b+P,V+D).normalize(),l[3].setComponents(p-h,x-y,b-P,V-D).normalize(),a)l[4].setComponents(m,g,S,L).normalize(),l[5].setComponents(p-m,x-g,b-S,V-L).normalize();else if(l[4].setComponents(p-m,x-g,b-S,V-L).normalize(),i===Bi)l[5].setComponents(p+m,x+g,b+S,V+L).normalize();else if(i===il)l[5].setComponents(m,g,S,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ia.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ia)}intersectsSprite(e){Ia.center.set(0,0,0);const i=Db.distanceTo(e.center);return Ia.radius=.7071067811865476+i,Ia.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ia)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class G_ extends zr{constructor(e=[],i=Ha,a,l,c,d,h,m,p,v){super(e,i,a,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vs extends zr{constructor(e,i,a=Wi,l,c,d,h=Rr,m=Rr,p,v=wn,y=1){if(v!==wn&&v!==Ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:y};super(g,l,c,d,h,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ub extends Vs{constructor(e,i=Wi,a=Ha,l,c,d=Rr,h=Rr,m,p=wn){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,i,a,l,c,d,h,m,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W_ extends zr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cl extends qi{constructor(e=1,i=1,a=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],y=[];let g=0,x=0;E("z","y","x",-1,-1,a,i,e,d,c,0),E("z","y","x",1,-1,a,i,-e,d,c,1),E("x","z","y",1,1,e,a,i,l,d,2),E("x","z","y",1,-1,e,a,-i,l,d,3),E("x","y","z",1,-1,e,i,a,l,c,4),E("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new Pi(p,3)),this.setAttribute("normal",new Pi(v,3)),this.setAttribute("uv",new Pi(y,2));function E(P,S,b,C,D,L,V,N,F,w,k){const X=L/F,O=V/w,G=L/2,ue=V/2,oe=N/2,q=F+1,U=w+1;let z=0,re=0;const fe=new Q;for(let pe=0;pe<U;pe++){const I=pe*O-ue;for(let J=0;J<q;J++){const ge=J*X-G;fe[P]=ge*C,fe[S]=I*D,fe[b]=oe,p.push(fe.x,fe.y,fe.z),fe[P]=0,fe[S]=0,fe[b]=N>0?1:-1,v.push(fe.x,fe.y,fe.z),y.push(J/F),y.push(1-pe/w),z+=1}}for(let pe=0;pe<w;pe++)for(let I=0;I<F;I++){const J=g+I+q*pe,ge=g+I+q*(pe+1),Ae=g+(I+1)+q*(pe+1),Ne=g+(I+1)+q*pe;m.push(J,ge,Ne),m.push(ge,Ae,Ne),re+=6}h.addGroup(x,re,k),x+=re,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,i){const a=this.getUtoTmapping(e);return this.getPoint(a,i)}getPoints(e=5){const i=[];for(let a=0;a<=e;a++)i.push(this.getPoint(a/e));return i}getSpacedPoints(e=5){const i=[];for(let a=0;a<=e;a++)i.push(this.getPointAt(a/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,l=this.getPoint(0),c=0;i.push(0);for(let d=1;d<=e;d++)a=this.getPoint(d/e),c+=a.distanceTo(l),i.push(c),l=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const a=this.getLengths();let l=0;const c=a.length;let d;i?d=i:d=e*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=a[l]-d,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,a[l]===d)return l/(c-1);const v=a[l],y=a[l+1]-v,g=(d-v)/y;return(l+g)/(c-1)}getTangent(e,i){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),d=this.getPoint(l),h=i||(c.isVector2?new je:new Q);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,i){const a=this.getUtoTmapping(e);return this.getTangent(a,i)}computeFrenetFrames(e,i=!1){const a=new Q,l=[],c=[],d=[],h=new Q,m=new mr;for(let x=0;x<=e;x++){const E=x/e;l[x]=this.getTangentAt(E,new Q)}c[0]=new Q,d[0]=new Q;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),y=Math.abs(l[0].y),g=Math.abs(l[0].z);v<=p&&(p=v,a.set(1,0,0)),y<=p&&(p=y,a.set(0,1,0)),g<=p&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),d[0].crossVectors(l[0],c[0]);for(let x=1;x<=e;x++){if(c[x]=c[x-1].clone(),d[x]=d[x-1].clone(),h.crossVectors(l[x-1],l[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Tt(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(m.makeRotationAxis(h,E))}d[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Tt(c[0].dot(c[e]),-1,1));x/=e,l[0].dot(h.crossVectors(c[0],c[e]))>0&&(x=-x);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),d[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fp extends Yi{constructor(e=0,i=0,a=1,l=1,c=0,d=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=d,this.aClockwise=h,this.aRotation=m}getPoint(e,i=new je){const a=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const d=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(d?c=0:c=l),this.aClockwise===!0&&!d&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+e*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),y=Math.sin(this.aRotation),g=m-this.aX,x=p-this.aY;m=g*v-x*y+this.aX,p=g*y+x*v+this.aY}return a.set(m,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ib extends fp{constructor(e,i,a,l,c,d){super(e,i,a,a,l,c,d),this.isArcCurve=!0,this.type="ArcCurve"}}function hp(){let s=0,e=0,i=0,a=0;function l(c,d,h,m){s=c,e=h,i=-3*c+3*d-2*h-m,a=2*c-2*d+h+m}return{initCatmullRom:function(c,d,h,m,p){l(d,h,p*(h-c),p*(m-d))},initNonuniformCatmullRom:function(c,d,h,m,p,v,y){let g=(d-c)/p-(h-c)/(p+v)+(h-d)/v,x=(h-d)/v-(m-d)/(v+y)+(m-h)/y;g*=v,x*=v,l(d,h,g,x)},calc:function(c){const d=c*c,h=d*c;return s+e*c+i*d+a*h}}}const D0=new Q,U0=new Q,Hf=new hp,Vf=new hp,Gf=new hp;class Ob extends Yi{constructor(e=[],i=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=a,this.tension=l}getPoint(e,i=new Q){const a=i,l=this.points,c=l.length,d=(c-(this.closed?0:1))*e;let h=Math.floor(d),m=d-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,v;this.closed||h>0?p=l[(h-1)%c]:(U0.subVectors(l[0],l[1]).add(l[0]),p=U0);const y=l[h%c],g=l[(h+1)%c];if(this.closed||h+2<c?v=l[(h+2)%c]:(D0.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=D0),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(y),x),P=Math.pow(y.distanceToSquared(g),x),S=Math.pow(g.distanceToSquared(v),x);P<1e-4&&(P=1),E<1e-4&&(E=P),S<1e-4&&(S=P),Hf.initNonuniformCatmullRom(p.x,y.x,g.x,v.x,E,P,S),Vf.initNonuniformCatmullRom(p.y,y.y,g.y,v.y,E,P,S),Gf.initNonuniformCatmullRom(p.z,y.z,g.z,v.z,E,P,S)}else this.curveType==="catmullrom"&&(Hf.initCatmullRom(p.x,y.x,g.x,v.x,this.tension),Vf.initCatmullRom(p.y,y.y,g.y,v.y,this.tension),Gf.initCatmullRom(p.z,y.z,g.z,v.z,this.tension));return a.set(Hf.calc(m),Vf.calc(m),Gf.calc(m)),a}copy(e){super.copy(e),this.points=[];for(let i=0,a=e.points.length;i<a;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,a=e.points.length;i<a;i++){const l=e.points[i];this.points.push(new Q().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function I0(s,e,i,a,l){const c=(a-e)*.5,d=(l-i)*.5,h=s*s,m=s*h;return(2*i-2*a+c+d)*m+(-3*i+3*a-2*c-d)*h+c*s+i}function kb(s,e){const i=1-s;return i*i*e}function Fb(s,e){return 2*(1-s)*s*e}function zb(s,e){return s*s*e}function Jo(s,e,i,a){return kb(s,e)+Fb(s,i)+zb(s,a)}function Bb(s,e){const i=1-s;return i*i*i*e}function Hb(s,e){const i=1-s;return 3*i*i*s*e}function Vb(s,e){return 3*(1-s)*s*s*e}function Gb(s,e){return s*s*s*e}function el(s,e,i,a,l){return Bb(s,e)+Hb(s,i)+Vb(s,a)+Gb(s,l)}class j_ extends Yi{constructor(e=new je,i=new je,a=new je,l=new je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=a,this.v3=l}getPoint(e,i=new je){const a=i,l=this.v0,c=this.v1,d=this.v2,h=this.v3;return a.set(el(e,l.x,c.x,d.x,h.x),el(e,l.y,c.y,d.y,h.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wb extends Yi{constructor(e=new Q,i=new Q,a=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=a,this.v3=l}getPoint(e,i=new Q){const a=i,l=this.v0,c=this.v1,d=this.v2,h=this.v3;return a.set(el(e,l.x,c.x,d.x,h.x),el(e,l.y,c.y,d.y,h.y),el(e,l.z,c.z,d.z,h.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X_ extends Yi{constructor(e=new je,i=new je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new je){const a=i;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new je){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jb extends Yi{constructor(e=new Q,i=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new Q){const a=i;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new Q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q_ extends Yi{constructor(e=new je,i=new je,a=new je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=a}getPoint(e,i=new je){const a=i,l=this.v0,c=this.v1,d=this.v2;return a.set(Jo(e,l.x,c.x,d.x),Jo(e,l.y,c.y,d.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xb extends Yi{constructor(e=new Q,i=new Q,a=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=a}getPoint(e,i=new Q){const a=i,l=this.v0,c=this.v1,d=this.v2;return a.set(Jo(e,l.x,c.x,d.x),Jo(e,l.y,c.y,d.y),Jo(e,l.z,c.z,d.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y_ extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new je){const a=i,l=this.points,c=(l.length-1)*e,d=Math.floor(c),h=c-d,m=l[d===0?d:d-1],p=l[d],v=l[d>l.length-2?l.length-1:d+1],y=l[d>l.length-3?l.length-1:d+2];return a.set(I0(h,m.x,p.x,v.x,y.x),I0(h,m.y,p.y,v.y,y.y)),a}copy(e){super.copy(e),this.points=[];for(let i=0,a=e.points.length;i<a;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,a=e.points.length;i<a;i++){const l=e.points[i];this.points.push(new je().fromArray(l))}return this}}var jh=Object.freeze({__proto__:null,ArcCurve:Ib,CatmullRomCurve3:Ob,CubicBezierCurve:j_,CubicBezierCurve3:Wb,EllipseCurve:fp,LineCurve:X_,LineCurve3:jb,QuadraticBezierCurve:q_,QuadraticBezierCurve3:Xb,SplineCurve:Y_});class qb extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(i)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jh[a](i,e))}return this}getPoint(e,i){const a=e*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=a){const d=l[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-d/m;return h.getPointAt(p,i)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let i=0;for(let a=0,l=this.curves.length;a<l;a++)i+=this.curves[a].getLength(),e.push(i);return this.cacheLengths=e,e}getSpacedPoints(e=40){const i=[];for(let a=0;a<=e;a++)i.push(this.getPoint(a/e));return this.autoClose&&i.push(i[0]),i}getPoints(e=12){const i=[];let a;for(let l=0,c=this.curves;l<c.length;l++){const d=c[l],h=d.isEllipseCurve?e*2:d.isLineCurve||d.isLineCurve3?1:d.isSplineCurve?e*d.points.length:e,m=d.getPoints(h);for(let p=0;p<m.length;p++){const v=m[p];a&&a.equals(v)||(i.push(v),a=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let i=0,a=e.curves.length;i<a;i++){const l=e.curves[i];this.curves.push(l.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let i=0,a=this.curves.length;i<a;i++){const l=this.curves[i];e.curves.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let i=0,a=e.curves.length;i<a;i++){const l=e.curves[i];this.curves.push(new jh[l.type]().fromJSON(l))}return this}}class Xh extends qb{constructor(e){super(),this.type="Path",this.currentPoint=new je,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let i=1,a=e.length;i<a;i++)this.lineTo(e[i].x,e[i].y);return this}moveTo(e,i){return this.currentPoint.set(e,i),this}lineTo(e,i){const a=new X_(this.currentPoint.clone(),new je(e,i));return this.curves.push(a),this.currentPoint.set(e,i),this}quadraticCurveTo(e,i,a,l){const c=new q_(this.currentPoint.clone(),new je(e,i),new je(a,l));return this.curves.push(c),this.currentPoint.set(a,l),this}bezierCurveTo(e,i,a,l,c,d){const h=new j_(this.currentPoint.clone(),new je(e,i),new je(a,l),new je(c,d));return this.curves.push(h),this.currentPoint.set(c,d),this}splineThru(e){const i=[this.currentPoint.clone()].concat(e),a=new Y_(i);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,i,a,l,c,d){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(e+h,i+m,a,l,c,d),this}absarc(e,i,a,l,c,d){return this.absellipse(e,i,a,a,l,c,d),this}ellipse(e,i,a,l,c,d,h,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,i+v,a,l,c,d,h,m),this}absellipse(e,i,a,l,c,d,h,m){const p=new fp(e,i,a,l,c,d,h,m);if(this.curves.length>0){const y=p.getPoint(0);y.equals(this.currentPoint)||this.lineTo(y.x,y.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class K_ extends Xh{constructor(e){super(e),this.uuid=js(),this.type="Shape",this.holes=[]}getPointsHoles(e){const i=[];for(let a=0,l=this.holes.length;a<l;a++)i[a]=this.holes[a].getPoints(e);return i}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let i=0,a=e.holes.length;i<a;i++){const l=e.holes[i];this.holes.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let i=0,a=this.holes.length;i<a;i++){const l=this.holes[i];e.holes.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let i=0,a=e.holes.length;i<a;i++){const l=e.holes[i];this.holes.push(new Xh().fromJSON(l))}return this}}function Yb(s,e,i=2){const a=e&&e.length,l=a?e[0]*i:s.length;let c=Z_(s,0,l,i,!0);const d=[];if(!c||c.next===c.prev)return d;let h,m,p;if(a&&(c=Jb(s,e,c,i)),s.length>80*i){h=s[0],m=s[1];let v=h,y=m;for(let g=i;g<l;g+=i){const x=s[g],E=s[g+1];x<h&&(h=x),E<m&&(m=E),x>v&&(v=x),E>y&&(y=E)}p=Math.max(v-h,y-m),p=p!==0?32767/p:0}return nl(c,d,i,h,m,p,0),d}function Z_(s,e,i,a,l){let c;if(l===uS(s,e,i,a)>0)for(let d=e;d<i;d+=a)c=O0(d/a|0,s[d],s[d+1],c);else for(let d=i-a;d>=e;d-=a)c=O0(d/a|0,s[d],s[d+1],c);return c&&Gs(c,c.next)&&(sl(c),c=c.next),c}function Ga(s,e){if(!s)return s;e||(e=s);let i=s,a;do if(a=!1,!i.steiner&&(Gs(i,i.next)||rr(i.prev,i,i.next)===0)){if(sl(i),i=e=i.prev,i===i.next)break;a=!0}else i=i.next;while(a||i!==e);return e}function nl(s,e,i,a,l,c,d){if(!s)return;!d&&c&&nS(s,a,l,c);let h=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?Zb(s,a,l,c):Kb(s)){e.push(m.i,s.i,p.i),sl(s),s=p.next,h=p.next;continue}if(s=p,s===h){d?d===1?(s=$b(Ga(s),e),nl(s,e,i,a,l,c,2)):d===2&&Qb(s,e,i,a,l,c):nl(Ga(s),e,i,a,l,c,1);break}}}function Kb(s){const e=s.prev,i=s,a=s.next;if(rr(e,i,a)>=0)return!1;const l=e.x,c=i.x,d=a.x,h=e.y,m=i.y,p=a.y,v=Math.min(l,c,d),y=Math.min(h,m,p),g=Math.max(l,c,d),x=Math.max(h,m,p);let E=a.next;for(;E!==e;){if(E.x>=v&&E.x<=g&&E.y>=y&&E.y<=x&&$o(l,h,c,m,d,p,E.x,E.y)&&rr(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Zb(s,e,i,a){const l=s.prev,c=s,d=s.next;if(rr(l,c,d)>=0)return!1;const h=l.x,m=c.x,p=d.x,v=l.y,y=c.y,g=d.y,x=Math.min(h,m,p),E=Math.min(v,y,g),P=Math.max(h,m,p),S=Math.max(v,y,g),b=qh(x,E,e,i,a),C=qh(P,S,e,i,a);let D=s.prevZ,L=s.nextZ;for(;D&&D.z>=b&&L&&L.z<=C;){if(D.x>=x&&D.x<=P&&D.y>=E&&D.y<=S&&D!==l&&D!==d&&$o(h,v,m,y,p,g,D.x,D.y)&&rr(D.prev,D,D.next)>=0||(D=D.prevZ,L.x>=x&&L.x<=P&&L.y>=E&&L.y<=S&&L!==l&&L!==d&&$o(h,v,m,y,p,g,L.x,L.y)&&rr(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;D&&D.z>=b;){if(D.x>=x&&D.x<=P&&D.y>=E&&D.y<=S&&D!==l&&D!==d&&$o(h,v,m,y,p,g,D.x,D.y)&&rr(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;L&&L.z<=C;){if(L.x>=x&&L.x<=P&&L.y>=E&&L.y<=S&&L!==l&&L!==d&&$o(h,v,m,y,p,g,L.x,L.y)&&rr(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function $b(s,e){let i=s;do{const a=i.prev,l=i.next.next;!Gs(a,l)&&Q_(a,i,i.next,l)&&al(a,l)&&al(l,a)&&(e.push(a.i,i.i,l.i),sl(i),sl(i.next),i=s=l),i=i.next}while(i!==s);return Ga(i)}function Qb(s,e,i,a,l,c){let d=s;do{let h=d.next.next;for(;h!==d.prev;){if(d.i!==h.i&&oS(d,h)){let m=J_(d,h);d=Ga(d,d.next),m=Ga(m,m.next),nl(d,e,i,a,l,c,0),nl(m,e,i,a,l,c,0);return}h=h.next}d=d.next}while(d!==s)}function Jb(s,e,i,a){const l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c]*a,m=c<d-1?e[c+1]*a:s.length,p=Z_(s,h,m,a,!1);p===p.next&&(p.steiner=!0),l.push(sS(p))}l.sort(eS);for(let c=0;c<l.length;c++)i=tS(l[c],i);return i}function eS(s,e){let i=s.x-e.x;if(i===0&&(i=s.y-e.y,i===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),l=(e.next.y-e.y)/(e.next.x-e.x);i=a-l}return i}function tS(s,e){const i=rS(s,e);if(!i)return e;const a=J_(i,s);return Ga(a,a.next),Ga(i,i.next)}function rS(s,e){let i=e;const a=s.x,l=s.y;let c=-1/0,d;if(Gs(s,i))return i;do{if(Gs(s,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const y=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(y<=a&&y>c&&(c=y,d=i.x<i.next.x?i:i.next,y===a))return d}i=i.next}while(i!==e);if(!d)return null;const h=d,m=d.x,p=d.y;let v=1/0;i=d;do{if(a>=i.x&&i.x>=m&&a!==i.x&&$_(l<p?a:c,l,m,p,l<p?c:a,l,i.x,i.y)){const y=Math.abs(l-i.y)/(a-i.x);al(i,s)&&(y<v||y===v&&(i.x>d.x||i.x===d.x&&iS(d,i)))&&(d=i,v=y)}i=i.next}while(i!==h);return d}function iS(s,e){return rr(s.prev,s,e.prev)<0&&rr(e.next,s,s.next)<0}function nS(s,e,i,a){let l=s;do l.z===0&&(l.z=qh(l.x,l.y,e,i,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,aS(l)}function aS(s){let e,i=1;do{let a=s,l;s=null;let c=null;for(e=0;a;){e++;let d=a,h=0;for(let p=0;p<i&&(h++,d=d.nextZ,!!d);p++);let m=i;for(;h>0||m>0&&d;)h!==0&&(m===0||!d||a.z<=d.z)?(l=a,a=a.nextZ,h--):(l=d,d=d.nextZ,m--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;a=d}c.nextZ=null,i*=2}while(e>1);return s}function qh(s,e,i,a,l){return s=(s-i)*l|0,e=(e-a)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function sS(s){let e=s,i=s;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==s);return i}function $_(s,e,i,a,l,c,d,h){return(l-d)*(e-h)>=(s-d)*(c-h)&&(s-d)*(a-h)>=(i-d)*(e-h)&&(i-d)*(c-h)>=(l-d)*(a-h)}function $o(s,e,i,a,l,c,d,h){return!(s===d&&e===h)&&$_(s,e,i,a,l,c,d,h)}function oS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lS(s,e)&&(al(s,e)&&al(e,s)&&cS(s,e)&&(rr(s.prev,s,e.prev)||rr(s,e.prev,e))||Gs(s,e)&&rr(s.prev,s,s.next)>0&&rr(e.prev,e,e.next)>0)}function rr(s,e,i){return(e.y-s.y)*(i.x-e.x)-(e.x-s.x)*(i.y-e.y)}function Gs(s,e){return s.x===e.x&&s.y===e.y}function Q_(s,e,i,a){const l=Bc(rr(s,e,i)),c=Bc(rr(s,e,a)),d=Bc(rr(i,a,s)),h=Bc(rr(i,a,e));return!!(l!==c&&d!==h||l===0&&zc(s,i,e)||c===0&&zc(s,a,e)||d===0&&zc(i,s,a)||h===0&&zc(i,e,a))}function zc(s,e,i){return e.x<=Math.max(s.x,i.x)&&e.x>=Math.min(s.x,i.x)&&e.y<=Math.max(s.y,i.y)&&e.y>=Math.min(s.y,i.y)}function Bc(s){return s>0?1:s<0?-1:0}function lS(s,e){let i=s;do{if(i.i!==s.i&&i.next.i!==s.i&&i.i!==e.i&&i.next.i!==e.i&&Q_(i,i.next,s,e))return!0;i=i.next}while(i!==s);return!1}function al(s,e){return rr(s.prev,s,s.next)<0?rr(s,e,s.next)>=0&&rr(s,s.prev,e)>=0:rr(s,e,s.prev)<0||rr(s,s.next,e)<0}function cS(s,e){let i=s,a=!1;const l=(s.x+e.x)/2,c=(s.y+e.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(a=!a),i=i.next;while(i!==s);return a}function J_(s,e){const i=Yh(s.i,s.x,s.y),a=Yh(e.i,e.x,e.y),l=s.next,c=e.prev;return s.next=e,e.prev=s,i.next=l,l.prev=i,a.next=i,i.prev=a,c.next=a,a.prev=c,a}function O0(s,e,i,a){const l=Yh(s,e,i);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function sl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yh(s,e,i){return{i:s,x:e,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uS(s,e,i,a){let l=0;for(let c=e,d=i-a;c<i;c+=a)l+=(s[d]-s[c])*(s[c+1]+s[d+1]),d=c;return l}class dS{static triangulate(e,i,a=2){return Yb(e,i,a)}}class ks{static area(e){const i=e.length;let a=0;for(let l=i-1,c=0;c<i;l=c++)a+=e[l].x*e[c].y-e[c].x*e[l].y;return a*.5}static isClockWise(e){return ks.area(e)<0}static triangulateShape(e,i){const a=[],l=[],c=[];k0(e),F0(a,e);let d=e.length;i.forEach(k0);for(let m=0;m<i.length;m++)l.push(d),d+=i[m].length,F0(a,i[m]);const h=dS.triangulate(a,l);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function k0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function F0(s,e){for(let i=0;i<e.length;i++)s.push(e[i].x),s.push(e[i].y)}class pp extends qi{constructor(e=new K_([new je(.5,.5),new je(-.5,.5),new je(-.5,-.5),new je(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];const a=this,l=[],c=[];for(let h=0,m=e.length;h<m;h++){const p=e[h];d(p)}this.setAttribute("position",new Pi(l,3)),this.setAttribute("uv",new Pi(c,2)),this.computeVertexNormals();function d(h){const m=[],p=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,y=i.depth!==void 0?i.depth:1;let g=i.bevelEnabled!==void 0?i.bevelEnabled:!0,x=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:x-.1,P=i.bevelOffset!==void 0?i.bevelOffset:0,S=i.bevelSegments!==void 0?i.bevelSegments:3;const b=i.extrudePath,C=i.UVGenerator!==void 0?i.UVGenerator:fS;let D,L=!1,V,N,F,w;if(b){D=b.getSpacedPoints(v),L=!0,g=!1;const Ee=b.isCatmullRomCurve3?b.closed:!1;V=b.computeFrenetFrames(v,Ee),N=new Q,F=new Q,w=new Q}g||(S=0,x=0,E=0,P=0);const k=h.extractPoints(p);let X=k.shape;const O=k.holes;if(!ks.isClockWise(X)){X=X.reverse();for(let Ee=0,Me=O.length;Ee<Me;Ee++){const De=O[Ee];ks.isClockWise(De)&&(O[Ee]=De.reverse())}}function G(Ee){const Me=10000000000000001e-36;let De=Ee[0];for(let He=1;He<=Ee.length;He++){const We=He%Ee.length,$e=Ee[We],nt=$e.x-De.x,H=$e.y-De.y,ft=nt*nt+H*H,et=Math.max(Math.abs($e.x),Math.abs($e.y),Math.abs(De.x),Math.abs(De.y)),gt=Me*et*et;if(ft<=gt){Ee.splice(We,1),He--;continue}De=$e}}G(X),O.forEach(G);const ue=O.length,oe=X;for(let Ee=0;Ee<ue;Ee++){const Me=O[Ee];X=X.concat(Me)}function q(Ee,Me,De){return Me||Dt("ExtrudeGeometry: vec does not exist"),Ee.clone().addScaledVector(Me,De)}const U=X.length;function z(Ee,Me,De){let He,We,$e;const nt=Ee.x-Me.x,H=Ee.y-Me.y,ft=De.x-Ee.x,et=De.y-Ee.y,gt=nt*nt+H*H,Ce=nt*et-H*ft;if(Math.abs(Ce)>Number.EPSILON){const Mt=Math.sqrt(gt),R=Math.sqrt(ft*ft+et*et),M=Me.x-H/Mt,ee=Me.y+nt/Mt,ve=De.x-et/R,be=De.y+ft/R,Ie=((ve-M)*et-(be-ee)*ft)/(nt*et-H*ft);He=M+nt*Ie-Ee.x,We=ee+H*Ie-Ee.y;const Fe=He*He+We*We;if(Fe<=2)return new je(He,We);$e=Math.sqrt(Fe/2)}else{let Mt=!1;nt>Number.EPSILON?ft>Number.EPSILON&&(Mt=!0):nt<-Number.EPSILON?ft<-Number.EPSILON&&(Mt=!0):Math.sign(H)===Math.sign(et)&&(Mt=!0),Mt?(He=-H,We=nt,$e=Math.sqrt(gt)):(He=nt,We=H,$e=Math.sqrt(gt/2))}return new je(He/$e,We/$e)}const re=[];for(let Ee=0,Me=oe.length,De=Me-1,He=Ee+1;Ee<Me;Ee++,De++,He++)De===Me&&(De=0),He===Me&&(He=0),re[Ee]=z(oe[Ee],oe[De],oe[He]);const fe=[];let pe,I=re.concat();for(let Ee=0,Me=ue;Ee<Me;Ee++){const De=O[Ee];pe=[];for(let He=0,We=De.length,$e=We-1,nt=He+1;He<We;He++,$e++,nt++)$e===We&&($e=0),nt===We&&(nt=0),pe[He]=z(De[He],De[$e],De[nt]);fe.push(pe),I=I.concat(pe)}let J;if(S===0)J=ks.triangulateShape(oe,O);else{const Ee=[],Me=[];for(let De=0;De<S;De++){const He=De/S,We=x*Math.cos(He*Math.PI/2),$e=E*Math.sin(He*Math.PI/2)+P;for(let nt=0,H=oe.length;nt<H;nt++){const ft=q(oe[nt],re[nt],$e);Se(ft.x,ft.y,-We),He===0&&Ee.push(ft)}for(let nt=0,H=ue;nt<H;nt++){const ft=O[nt];pe=fe[nt];const et=[];for(let gt=0,Ce=ft.length;gt<Ce;gt++){const Mt=q(ft[gt],pe[gt],$e);Se(Mt.x,Mt.y,-We),He===0&&et.push(Mt)}He===0&&Me.push(et)}}J=ks.triangulateShape(Ee,Me)}const ge=J.length,Ae=E+P;for(let Ee=0;Ee<U;Ee++){const Me=g?q(X[Ee],I[Ee],Ae):X[Ee];L?(F.copy(V.normals[0]).multiplyScalar(Me.x),N.copy(V.binormals[0]).multiplyScalar(Me.y),w.copy(D[0]).add(F).add(N),Se(w.x,w.y,w.z)):Se(Me.x,Me.y,0)}for(let Ee=1;Ee<=v;Ee++)for(let Me=0;Me<U;Me++){const De=g?q(X[Me],I[Me],Ae):X[Me];L?(F.copy(V.normals[Ee]).multiplyScalar(De.x),N.copy(V.binormals[Ee]).multiplyScalar(De.y),w.copy(D[Ee]).add(F).add(N),Se(w.x,w.y,w.z)):Se(De.x,De.y,y/v*Ee)}for(let Ee=S-1;Ee>=0;Ee--){const Me=Ee/S,De=x*Math.cos(Me*Math.PI/2),He=E*Math.sin(Me*Math.PI/2)+P;for(let We=0,$e=oe.length;We<$e;We++){const nt=q(oe[We],re[We],He);Se(nt.x,nt.y,y+De)}for(let We=0,$e=O.length;We<$e;We++){const nt=O[We];pe=fe[We];for(let H=0,ft=nt.length;H<ft;H++){const et=q(nt[H],pe[H],He);L?Se(et.x,et.y+D[v-1].y,D[v-1].x+De):Se(et.x,et.y,y+De)}}}Ne(),se();function Ne(){const Ee=l.length/3;if(g){let Me=0,De=U*Me;for(let He=0;He<ge;He++){const We=J[He];Le(We[2]+De,We[1]+De,We[0]+De)}Me=v+S*2,De=U*Me;for(let He=0;He<ge;He++){const We=J[He];Le(We[0]+De,We[1]+De,We[2]+De)}}else{for(let Me=0;Me<ge;Me++){const De=J[Me];Le(De[2],De[1],De[0])}for(let Me=0;Me<ge;Me++){const De=J[Me];Le(De[0]+U*v,De[1]+U*v,De[2]+U*v)}}a.addGroup(Ee,l.length/3-Ee,0)}function se(){const Ee=l.length/3;let Me=0;ye(oe,Me),Me+=oe.length;for(let De=0,He=O.length;De<He;De++){const We=O[De];ye(We,Me),Me+=We.length}a.addGroup(Ee,l.length/3-Ee,1)}function ye(Ee,Me){let De=Ee.length;for(;--De>=0;){const He=De;let We=De-1;We<0&&(We=Ee.length-1);for(let $e=0,nt=v+S*2;$e<nt;$e++){const H=U*$e,ft=U*($e+1),et=Me+He+H,gt=Me+We+H,Ce=Me+We+ft,Mt=Me+He+ft;lt(et,gt,Ce,Mt)}}}function Se(Ee,Me,De){m.push(Ee),m.push(Me),m.push(De)}function Le(Ee,Me,De){ze(Ee),ze(Me),ze(De);const He=l.length/3,We=C.generateTopUV(a,l,He-3,He-2,He-1);dt(We[0]),dt(We[1]),dt(We[2])}function lt(Ee,Me,De,He){ze(Ee),ze(Me),ze(He),ze(Me),ze(De),ze(He);const We=l.length/3,$e=C.generateSideWallUV(a,l,We-6,We-3,We-2,We-1);dt($e[0]),dt($e[1]),dt($e[3]),dt($e[1]),dt($e[2]),dt($e[3])}function ze(Ee){l.push(m[Ee*3+0]),l.push(m[Ee*3+1]),l.push(m[Ee*3+2])}function dt(Ee){c.push(Ee.x),c.push(Ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),i=this.parameters.shapes,a=this.parameters.options;return hS(i,a,e)}static fromJSON(e,i){const a=[];for(let c=0,d=e.shapes.length;c<d;c++){const h=i[e.shapes[c]];a.push(h)}const l=e.options.extrudePath;return l!==void 0&&(e.options.extrudePath=new jh[l.type]().fromJSON(l)),new pp(a,e.options)}}const fS={generateTopUV:function(s,e,i,a,l){const c=e[i*3],d=e[i*3+1],h=e[a*3],m=e[a*3+1],p=e[l*3],v=e[l*3+1];return[new je(c,d),new je(h,m),new je(p,v)]},generateSideWallUV:function(s,e,i,a,l,c){const d=e[i*3],h=e[i*3+1],m=e[i*3+2],p=e[a*3],v=e[a*3+1],y=e[a*3+2],g=e[l*3],x=e[l*3+1],E=e[l*3+2],P=e[c*3],S=e[c*3+1],b=e[c*3+2];return Math.abs(h-v)<Math.abs(d-p)?[new je(d,1-m),new je(p,1-y),new je(g,1-E),new je(P,1-b)]:[new je(h,1-m),new je(v,1-y),new je(x,1-E),new je(S,1-b)]}};function hS(s,e,i){if(i.shapes=[],Array.isArray(s))for(let a=0,l=s.length;a<l;a++){const c=s[a];i.shapes.push(c.uuid)}else i.shapes.push(s.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}class au extends qi{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(a),m=Math.floor(l),p=h+1,v=m+1,y=e/h,g=i/m,x=[],E=[],P=[],S=[];for(let b=0;b<v;b++){const C=b*g-d;for(let D=0;D<p;D++){const L=D*y-c;E.push(L,-C,0),P.push(0,0,1),S.push(D/h),S.push(1-b/m)}}for(let b=0;b<m;b++)for(let C=0;C<h;C++){const D=C+p*b,L=C+p*(b+1),V=C+1+p*(b+1),N=C+1+p*b;x.push(D,L,N),x.push(L,V,N)}this.setIndex(x),this.setAttribute("position",new Pi(E,3)),this.setAttribute("normal",new Pi(P,3)),this.setAttribute("uv",new Pi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ws(s){const e={};for(const i in s){e[i]={};for(const a in s[i]){const l=s[i][a];if(z0(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone();else if(Array.isArray(l))if(z0(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[i][a]=c}else e[i][a]=l.slice();else e[i][a]=l}}return e}function Fr(s){const e={};for(let i=0;i<s.length;i++){const a=Ws(s[i]);for(const l in a)e[l]=a[l]}return e}function z0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function pS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function ey(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const mS={clone:Ws,merge:Fr};var gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends ll{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=vS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const c=this.uniforms[l].value;c&&c.isTexture?i.uniforms[l]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?i.uniforms[l]={type:"c",value:c.getHex()}:c&&c.isVector2?i.uniforms[l]={type:"v2",value:c.toArray()}:c&&c.isVector3?i.uniforms[l]={type:"v3",value:c.toArray()}:c&&c.isVector4?i.uniforms[l]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?i.uniforms[l]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?i.uniforms[l]={type:"m4",value:c.toArray()}:i.uniforms[l]={value:c}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class _S extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wf extends ll{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yS extends ll{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xS extends ll{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mp extends Or{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jf=new mr,B0=new Q,H0=new Q;class ty{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new mr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new pr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,a=this.matrix;B0.setFromMatrixPosition(e.matrixWorld),i.position.copy(B0),H0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(H0),i.updateMatrixWorld(),jf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===il||i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hc=new Q,Vc=new Xs,Ii=new Q;class ry extends Or{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mr,this.projectionMatrix=new mr,this.projectionMatrixInverse=new mr,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Hc,Vc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oa=new Q,V0=new je,G0=new je;class si extends ry{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oa.x,oa.y).multiplyScalar(-e/oa.z),oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(oa.x,oa.y).multiplyScalar(-e/oa.z)}getViewSize(e,i){return this.getViewBounds(e,V0,G0),i.subVectors(G0,V0)}setViewOffset(e,i,a,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vf*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*a/p,l*=d.width/m,a*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class bS extends ty{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class SS extends mp{constructor(e,i,a=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new bS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class gp extends ry{constructor(e=-1,i=1,a=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,d=a+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MS extends ty{constructor(){super(new gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xf extends mp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Or.DEFAULT_UP),this.updateMatrix(),this.target=new Or,this.shadow=new MS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ES extends mp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Us=-90,Is=1;class wS extends Or{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Us,Is,e,i);l.layers=this.layers,this.add(l);const c=new si(Us,Is,e,i);c.layers=this.layers,this.add(c);const d=new si(Us,Is,e,i);d.layers=this.layers,this.add(d);const h=new si(Us,Is,e,i);h.layers=this.layers,this.add(h);const m=new si(Us,Is,e,i);m.layers=this.layers,this.add(m);const p=new si(Us,Is,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===il)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const P=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(a,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(a,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(a,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(a,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(a,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),a.texture.generateMipmaps=P,e.setRenderTarget(a,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(y,g,x),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class TS extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class AS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function W0(s,e,i,a){const l=CS(a);switch(i){case A_:return s*e;case R_:return s*e/l.components*l.byteLength;case ip:return s*e/l.components*l.byteLength;case Va:return s*e*2/l.components*l.byteLength;case np:return s*e*2/l.components*l.byteLength;case C_:return s*e*3/l.components*l.byteLength;case Ri:return s*e*4/l.components*l.byteLength;case ap:return s*e*4/l.components*l.byteLength;case Yc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:case mh:return Math.max(s,16)*Math.max(e,8)/4;case fh:case ph:return Math.max(s,8)*Math.max(e,8)/2;case gh:case vh:case yh:case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _h:case Jc:case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Oh:case kh:case Fh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zh:case Bh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case eu:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CS(s){switch(s){case oi:case M_:return{byteLength:1,components:1};case tl:case E_:case En:return{byteLength:2,components:1};case tp:case rp:return{byteLength:2,components:4};case Wi:case ep:case zi:return{byteLength:4,components:1};case w_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);function iy(){let s=null,e=!1,i=null,a=null;function l(c,d){i(c,d),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function RS(s){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,y=p.byteLength,g=s.createBuffer();s.bindBuffer(m,g),s.bufferData(m,p,v),h.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function a(h,m,p){const v=m.array,y=m.updateRanges;if(s.bindBuffer(p,h),y.length===0)s.bufferSubData(p,0,v);else{y.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<y.length;x++){const E=y[g],P=y[x];P.start<=E.start+E.count+1?E.count=Math.max(E.count,P.start+P.count-E.start):(++g,y[g]=P)}y.length=g+1;for(let x=0,E=y.length;x<E;x++){const P=y[x];s.bufferSubData(p,P.start*v.BYTES_PER_ELEMENT,v,P.start,P.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var PS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NS=`#ifdef USE_ALPHAHASH
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
#endif`,LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OS=`#ifdef USE_AOMAP
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
#endif`,kS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FS=`#ifdef USE_BATCHING
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
#endif`,zS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GS=`#ifdef USE_IRIDESCENCE
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
#endif`,WS=`#ifdef USE_BUMPMAP
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
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JS=`#define PI 3.141592653589793
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
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tM=`vec3 transformedNormal = objectNormal;
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
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
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
#endif`,CM=`uniform sampler2D dfgLUT;
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
}`,RM=`
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
#endif`,PM=`#if defined( RE_IndirectDiffuse )
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
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,DM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BM=`#if defined( USE_POINTS_UV )
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
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
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
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JM=`#ifdef USE_NORMALMAP
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
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mE=`float getShadowMask() {
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
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,zE=`#define DISTANCE
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
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
}`,GE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,jE=`uniform vec3 diffuse;
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
}`,XE=`#define LAMBERT
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
}`,qE=`#define LAMBERT
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
}`,YE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,ZE=`#define NORMAL
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
}`,$E=`#define NORMAL
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
}`,QE=`#define PHONG
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
}`,JE=`#define PHONG
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
}`,ew=`#define STANDARD
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
}`,tw=`#define STANDARD
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
}`,rw=`#define TOON
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
}`,iw=`#define TOON
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
}`,nw=`uniform float size;
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
}`,aw=`uniform vec3 diffuse;
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
}`,sw=`#include <common>
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
}`,ow=`uniform vec3 color;
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
}`,lw=`uniform float rotation;
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
}`,cw=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:PS,alphahash_pars_fragment:NS,alphamap_fragment:LS,alphamap_pars_fragment:DS,alphatest_fragment:US,alphatest_pars_fragment:IS,aomap_fragment:OS,aomap_pars_fragment:kS,batching_pars_vertex:FS,batching_vertex:zS,begin_vertex:BS,beginnormal_vertex:HS,bsdfs:VS,iridescence_fragment:GS,bumpmap_pars_fragment:WS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:qS,clipping_planes_vertex:YS,color_fragment:KS,color_pars_fragment:ZS,color_pars_vertex:$S,color_vertex:QS,common:JS,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:rM,displacementmap_vertex:iM,emissivemap_fragment:nM,emissivemap_pars_fragment:aM,colorspace_fragment:sM,colorspace_pars_fragment:oM,envmap_fragment:lM,envmap_common_pars_fragment:cM,envmap_pars_fragment:uM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:SM,envmap_vertex:fM,fog_vertex:hM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:_M,lights_lambert_fragment:yM,lights_lambert_pars_fragment:xM,lights_pars_begin:bM,lights_toon_fragment:MM,lights_toon_pars_fragment:EM,lights_phong_fragment:wM,lights_phong_pars_fragment:TM,lights_physical_fragment:AM,lights_physical_pars_fragment:CM,lights_fragment_begin:RM,lights_fragment_maps:PM,lights_fragment_end:NM,lightprobes_pars_fragment:LM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:IM,logdepthbuf_vertex:OM,map_fragment:kM,map_pars_fragment:FM,map_particle_fragment:zM,map_particle_pars_fragment:BM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:VM,morphinstance_vertex:GM,morphcolor_vertex:WM,morphnormal_vertex:jM,morphtarget_pars_vertex:XM,morphtarget_vertex:qM,normal_fragment_begin:YM,normal_fragment_maps:KM,normal_pars_fragment:ZM,normal_pars_vertex:$M,normal_vertex:QM,normalmap_pars_fragment:JM,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:iE,opaque_fragment:nE,packing:aE,premultiplied_alpha_fragment:sE,project_vertex:oE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:fE,shadowmap_pars_vertex:hE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:vE,skinning_vertex:_E,skinnormal_vertex:yE,specularmap_fragment:xE,specularmap_pars_fragment:bE,tonemapping_fragment:SE,tonemapping_pars_fragment:ME,transmission_fragment:EE,transmission_pars_fragment:wE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:CE,worldpos_vertex:RE,background_vert:PE,background_frag:NE,backgroundCube_vert:LE,backgroundCube_frag:DE,cube_vert:UE,cube_frag:IE,depth_vert:OE,depth_frag:kE,distance_vert:FE,distance_frag:zE,equirect_vert:BE,equirect_frag:HE,linedashed_vert:VE,linedashed_frag:GE,meshbasic_vert:WE,meshbasic_frag:jE,meshlambert_vert:XE,meshlambert_frag:qE,meshmatcap_vert:YE,meshmatcap_frag:KE,meshnormal_vert:ZE,meshnormal_frag:$E,meshphong_vert:QE,meshphong_frag:JE,meshphysical_vert:ew,meshphysical_frag:tw,meshtoon_vert:rw,meshtoon_frag:iw,points_vert:nw,points_frag:aw,shadow_vert:sw,shadow_frag:ow,sprite_vert:lw,sprite_frag:cw},Ve={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Fi={basic:{uniforms:Fr([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Fr([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Fr([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Fr([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Fr([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Fr([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Fr([Ve.points,Ve.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Fr([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Fr([Ve.common,Ve.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Fr([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Fr([Ve.sprite,Ve.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Fr([Ve.common,Ve.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Fr([Ve.lights,Ve.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Fi.physical={uniforms:Fr([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Gc={r:0,b:0,g:0},uw=new mr,ny=new _t;ny.set(-1,0,0,0,1,0,0,0,1);function dw(s,e,i,a,l,c){const d=new Ut(0);let h=l===!0?0:1,m,p,v=null,y=0,g=null;function x(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const L=C.backgroundBlurriness>0;D=e.get(D,L)}return D}function E(C){let D=!1;const L=x(C);L===null?S(d,h):L&&L.isColor&&(S(L,1),D=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function P(C,D){const L=x(D);L&&(L.isCubeTexture||L.mapping===nu)?(p===void 0&&(p=new ji(new cl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Ws(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=L,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(uw.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(ny),p.material.toneMapped=Nt.getTransfer(L.colorSpace)!==Gt,(v!==L||y!==L.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=L,y=L.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new ji(new au(2,2),new Xi({name:"BackgroundMaterial",uniforms:Ws(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ua,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(L.colorSpace)!==Gt,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||y!==L.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=L,y=L.version,g=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function S(C,D){C.getRGB(Gc,ey(s)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,D,c)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,D=1){d.set(C),h=D,S(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,S(d,h)},render:E,addToRenderList:P,dispose:b}}function fw(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=g(null);let c=l,d=!1;function h(O,G,ue,oe,q){let U=!1;const z=y(O,oe,ue,G);c!==z&&(c=z,p(c.object)),U=x(O,oe,ue,q),U&&E(O,oe,ue,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,L(O,G,ue,oe),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return s.createVertexArray()}function p(O){return s.bindVertexArray(O)}function v(O){return s.deleteVertexArray(O)}function y(O,G,ue,oe){const q=oe.wireframe===!0;let U=a[G.id];U===void 0&&(U={},a[G.id]=U);const z=O.isInstancedMesh===!0?O.id:0;let re=U[z];re===void 0&&(re={},U[z]=re);let fe=re[ue.id];fe===void 0&&(fe={},re[ue.id]=fe);let pe=fe[q];return pe===void 0&&(pe=g(m()),fe[q]=pe),pe}function g(O){const G=[],ue=[],oe=[];for(let q=0;q<i;q++)G[q]=0,ue[q]=0,oe[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ue,attributeDivisors:oe,object:O,attributes:{},index:null}}function x(O,G,ue,oe){const q=c.attributes,U=G.attributes;let z=0;const re=ue.getAttributes();for(const fe in re)if(re[fe].location>=0){const pe=q[fe];let I=U[fe];if(I===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),pe===void 0||pe.attribute!==I||I&&pe.data!==I.data)return!0;z++}return c.attributesNum!==z||c.index!==oe}function E(O,G,ue,oe){const q={},U=G.attributes;let z=0;const re=ue.getAttributes();for(const fe in re)if(re[fe].location>=0){let pe=U[fe];pe===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor));const I={};I.attribute=pe,pe&&pe.data&&(I.data=pe.data),q[fe]=I,z++}c.attributes=q,c.attributesNum=z,c.index=oe}function P(){const O=c.newAttributes;for(let G=0,ue=O.length;G<ue;G++)O[G]=0}function S(O){b(O,0)}function b(O,G){const ue=c.newAttributes,oe=c.enabledAttributes,q=c.attributeDivisors;ue[O]=1,oe[O]===0&&(s.enableVertexAttribArray(O),oe[O]=1),q[O]!==G&&(s.vertexAttribDivisor(O,G),q[O]=G)}function C(){const O=c.newAttributes,G=c.enabledAttributes;for(let ue=0,oe=G.length;ue<oe;ue++)G[ue]!==O[ue]&&(s.disableVertexAttribArray(ue),G[ue]=0)}function D(O,G,ue,oe,q,U,z){z===!0?s.vertexAttribIPointer(O,G,ue,q,U):s.vertexAttribPointer(O,G,ue,oe,q,U)}function L(O,G,ue,oe){P();const q=oe.attributes,U=ue.getAttributes(),z=G.defaultAttributeValues;for(const re in U){const fe=U[re];if(fe.location>=0){let pe=q[re];if(pe===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(pe=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(pe=O.instanceColor)),pe!==void 0){const I=pe.normalized,J=pe.itemSize,ge=e.get(pe);if(ge===void 0)continue;const Ae=ge.buffer,Ne=ge.type,se=ge.bytesPerElement,ye=Ne===s.INT||Ne===s.UNSIGNED_INT||pe.gpuType===ep;if(pe.isInterleavedBufferAttribute){const Se=pe.data,Le=Se.stride,lt=pe.offset;if(Se.isInstancedInterleavedBuffer){for(let ze=0;ze<fe.locationSize;ze++)b(fe.location+ze,Se.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ze=0;ze<fe.locationSize;ze++)S(fe.location+ze);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ze=0;ze<fe.locationSize;ze++)D(fe.location+ze,J/fe.locationSize,Ne,I,Le*se,(lt+J/fe.locationSize*ze)*se,ye)}else{if(pe.isInstancedBufferAttribute){for(let Se=0;Se<fe.locationSize;Se++)b(fe.location+Se,pe.meshPerAttribute);O.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Se=0;Se<fe.locationSize;Se++)S(fe.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Se=0;Se<fe.locationSize;Se++)D(fe.location+Se,J/fe.locationSize,Ne,I,J*se,J/fe.locationSize*Se*se,ye)}}else if(z!==void 0){const I=z[re];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(fe.location,I);break;case 3:s.vertexAttrib3fv(fe.location,I);break;case 4:s.vertexAttrib4fv(fe.location,I);break;default:s.vertexAttrib1fv(fe.location,I)}}}}C()}function V(){k();for(const O in a){const G=a[O];for(const ue in G){const oe=G[ue];for(const q in oe){const U=oe[q];for(const z in U)v(U[z].object),delete U[z];delete oe[q]}}delete a[O]}}function N(O){if(a[O.id]===void 0)return;const G=a[O.id];for(const ue in G){const oe=G[ue];for(const q in oe){const U=oe[q];for(const z in U)v(U[z].object),delete U[z];delete oe[q]}}delete a[O.id]}function F(O){for(const G in a){const ue=a[G];for(const oe in ue){const q=ue[oe];if(q[O.id]===void 0)continue;const U=q[O.id];for(const z in U)v(U[z].object),delete U[z];delete q[O.id]}}}function w(O){for(const G in a){const ue=a[G],oe=O.isInstancedMesh===!0?O.id:0,q=ue[oe];if(q!==void 0){for(const U in q){const z=q[U];for(const re in z)v(z[re].object),delete z[re];delete q[U]}delete ue[oe],Object.keys(ue).length===0&&delete a[G]}}}function k(){X(),d=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:X,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:S,disableUnusedAttributes:C}}function hw(s,e,i){let a;function l(m){a=m}function c(m,p){s.drawArrays(a,m,p),i.update(p,a,1)}function d(m,p,v){v!==0&&(s.drawArraysInstanced(a,m,p,v),i.update(p,a,v))}function h(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,v);let y=0;for(let g=0;g<v;g++)y+=p[g];i.update(y,a,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function pw(s,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ri&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const w=F===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==oi&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!w)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ut("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:P,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:L,maxSamples:V,samples:N}}function mw(s){const e=this;let i=null,a=0,l=!1,c=!1;const d=new Oa,h=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const x=y.length!==0||g||a!==0||l;return l=g,a=y.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=v(y,g,0)},this.setState=function(y,g,x){const E=y.clippingPlanes,P=y.clipIntersection,S=y.clipShadows,b=s.get(y);if(!l||E===null||E.length===0||c&&!S)c?v(null):p();else{const C=c?0:a,D=C*4;let L=b.clippingState||null;m.value=L,L=v(E,g,D,x);for(let V=0;V!==D;++V)L[V]=i[V];b.clippingState=L,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(y,g,x,E){const P=y!==null?y.length:0;let S=null;if(P!==0){if(S=m.value,E!==!0||S===null){const b=x+P*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<b)&&(S=new Float32Array(b));for(let D=0,L=x;D!==P;++D,L+=4)d.copy(y[D]).applyMatrix4(C,h),d.normal.toArray(S,L),S[L+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,S}}const ca=4,j0=[.125,.215,.35,.446,.526,.582],Fa=20,gw=256,Yo=new gp,X0=new Ut;let qf=null,Yf=0,Kf=0,Zf=!1;const vw=new Q;class q0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,a=.1,l=100,c={}){const{size:d=256,position:h=vw}=c;qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Yf,Kf),this._renderer.xr.enabled=Zf,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ha||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Kf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Ir,minFilter:Ir,generateMipmaps:!1,type:En,format:Ri,colorSpace:tu,depthBuffer:!1},l=Y0(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,i,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_w(c)),this._blurMaterial=xw(c,e,i),this._ggxMaterial=yw(c,e,i)}return l}_compileMaterial(e){const i=new ji(new qi,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,a,l,c){const d=new si(90,1,i,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],p=this._renderer,v=p.autoClear,y=p.toneMapping;p.getClearColor(X0),p.toneMapping=Hi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new cl,new V_({name:"PMREM.Background",side:qr,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let E=!1;const P=e.background;P?P.isColor&&(x.color.copy(P),e.background=null,E=!0):(x.color.copy(X0),E=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(d.up.set(0,h[S],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+m[S],c.y,c.z)):b===1?(d.up.set(0,0,h[S]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+m[S],c.z)):(d.up.set(0,h[S],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+m[S]));const C=this._cubeSize;Os(l,b*C,S>2?C:0,C,C),p.setRenderTarget(l),E&&p.render(g,d),p.render(e,d)}p.toneMapping=y,p.autoClear=v,e.background=P}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Ha||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K0());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Os(i,0,0,3*m,2*m),a.setRenderTarget(i),a.render(d,Yo)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=a}_applyGGXFilter(e,i,a){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[a];h.material=d;const m=d.uniforms,p=a/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),y=Math.sqrt(p*p-v*v),g=0+p*1.25,x=y*g,{_lodMax:E}=this,P=this._sizeLods[a],S=3*P*(a>E-ca?a-E+ca:0),b=4*(this._cubeSize-P);m.envMap.value=e.texture,m.roughness.value=x,m.mipInt.value=E-i,Os(c,S,b,3*P,2*P),l.setRenderTarget(c),l.render(h,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Os(e,S,b,3*P,2*P),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,a,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,a,l,"latitudinal",c),this._halfBlur(d,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[l];y.material=p;const g=p.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Fa-1),P=c/E,S=isFinite(c)?1+Math.floor(v*P):Fa;S>Fa&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Fa}`);const b=[];let C=0;for(let F=0;F<Fa;++F){const w=F/P,k=Math.exp(-w*w/2);b.push(k),F===0?C+=k:F<S&&(C+=2*k)}for(let F=0;F<b.length;F++)b[F]=b[F]/C;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=b,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:D}=this;g.dTheta.value=E,g.mipInt.value=D-a;const L=this._sizeLods[l],V=3*L*(l>D-ca?l-D+ca:0),N=4*(this._cubeSize-L);Os(i,V,N,3*L,2*L),m.setRenderTarget(i),m.render(y,Yo)}}function _w(s){const e=[],i=[],a=[];let l=s;const c=s-ca+1+j0.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>s-ca?m=j0[d-s+ca-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,y=1+p,g=[v,v,y,v,y,y,v,v,y,y,v,y],x=6,E=6,P=3,S=2,b=1,C=new Float32Array(P*E*x),D=new Float32Array(S*E*x),L=new Float32Array(b*E*x);for(let N=0;N<x;N++){const F=N%3*2/3-1,w=N>2?0:-1,k=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];C.set(k,P*E*N),D.set(g,S*E*N);const X=[N,N,N,N,N,N];L.set(X,b*E*N)}const V=new qi;V.setAttribute("position",new Gi(C,P)),V.setAttribute("uv",new Gi(D,S)),V.setAttribute("faceIndex",new Gi(L,b)),a.push(new ji(V,null)),l>ca&&l--}return{lodMeshes:a,sizeLods:e,sigmas:i}}function Y0(s,e,i){const a=new Vi(s,e,i);return a.texture.mapping=nu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Os(s,e,i,a,l){s.viewport.set(e,i,a,l),s.scissor.set(e,i,a,l)}function yw(s,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function xw(s,e,i){const a=new Float32Array(Fa),l=new Q(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:Fa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function K0(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Z0(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}class ay extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new G_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:Ws(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:qr,blending:Sn});c.uniforms.tEquirect.value=i;const d=new ji(l,c),h=i.minFilter;return i.minFilter===za&&(i.minFilter=Ir),new wS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,a,l);e.setRenderTarget(c)}}function bw(s){let e=new WeakMap,i=new WeakMap,a=null;function l(g,x=!1){return g==null?null:x?d(g):c(g)}function c(g){if(g&&g.isTexture){const x=g.mapping;if(x===pf||x===mf)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const P=new ay(E.height);return P.fromEquirectangularTexture(s,g),e.set(g,P),g.addEventListener("dispose",p),h(P.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const x=g.mapping,E=x===pf||x===mf,P=x===Ha||x===Hs;if(E||P){let S=i.get(g);const b=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return a===null&&(a=new q0(s)),S=E?a.fromEquirectangular(g,S):a.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const C=g.image;return E&&C&&C.height>0||P&&C&&m(C)?(a===null&&(a=new q0(s)),S=E?a.fromEquirectangular(g):a.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function h(g,x){return x===pf?g.mapping=Ha:x===mf&&(g.mapping=Hs),g}function m(g){let x=0;const E=6;for(let P=0;P<E;P++)g[P]!==void 0&&x++;return x===E}function p(g){const x=g.target;x.removeEventListener("dispose",p);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const E=i.get(x);E!==void 0&&(i.delete(x),E.dispose())}function y(){e=new WeakMap,i=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:l,dispose:y}}function Sw(s){const e={};function i(a){if(e[a]!==void 0)return e[a];const l=s.getExtension(a);return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Gh("WebGLRenderer: "+a+" extension not supported."),l}}}function Mw(s,e,i,a){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete l[g.id];const x=c.get(g);x&&(e.remove(x),c.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function p(y){const g=[],x=y.index,E=y.attributes.position;let P=0;if(E===void 0)return;if(x!==null){const C=x.array;P=x.version;for(let D=0,L=C.length;D<L;D+=3){const V=C[D+0],N=C[D+1],F=C[D+2];g.push(V,N,N,F,F,V)}}else{const C=E.array;P=E.version;for(let D=0,L=C.length/3-1;D<L;D+=3){const V=D+0,N=D+1,F=D+2;g.push(V,N,N,F,F,V)}}const S=new(E.count>=65535?H_:B_)(g,1);S.version=P;const b=c.get(y);b&&e.remove(b),c.set(y,S)}function v(y){const g=c.get(y);if(g){const x=y.index;x!==null&&g.version<x.version&&p(y)}else p(y);return c.get(y)}return{get:h,update:m,getWireframeAttribute:v}}function Ew(s,e,i){let a;function l(y){a=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,g){s.drawElements(a,g,c,y*d),i.update(g,a,1)}function p(y,g,x){x!==0&&(s.drawElementsInstanced(a,g,c,y*d,x),i.update(g,a,x))}function v(y,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,c,y,0,x);let E=0;for(let P=0;P<x;P++)E+=g[P];i.update(E,a,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function ww(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Dt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function Tw(s,e,i){const a=new WeakMap,l=new pr;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=v!==void 0?v.length:0;let g=a.get(h);if(g===void 0||g.count!==y){let x=function(){w.dispose(),a.delete(h),h.removeEventListener("dispose",x)};g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,P=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let L=0;E===!0&&(L=1),P===!0&&(L=2),S===!0&&(L=3);let V=h.attributes.position.count*L,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const F=new Float32Array(V*N*4*y),w=new I_(F,V,N,y);w.type=zi,w.needsUpdate=!0;const k=L*4;for(let X=0;X<y;X++){const O=b[X],G=C[X],ue=D[X],oe=V*N*4*X;for(let q=0;q<O.count;q++){const U=q*k;E===!0&&(l.fromBufferAttribute(O,q),F[oe+U+0]=l.x,F[oe+U+1]=l.y,F[oe+U+2]=l.z,F[oe+U+3]=0),P===!0&&(l.fromBufferAttribute(G,q),F[oe+U+4]=l.x,F[oe+U+5]=l.y,F[oe+U+6]=l.z,F[oe+U+7]=0),S===!0&&(l.fromBufferAttribute(ue,q),F[oe+U+8]=l.x,F[oe+U+9]=l.y,F[oe+U+10]=l.z,F[oe+U+11]=ue.itemSize===4?l.w:1)}}g={count:y,texture:w,size:new je(V,N)},a.set(h,g),h.addEventListener("dispose",x)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let x=0;for(let P=0;P<p.length;P++)x+=p[P];const E=h.morphTargetsRelative?1:1-x;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function Aw(s,e,i,a,l){let c=new WeakMap;function d(p){const v=l.render.frame,y=p.geometry,g=e.get(p,y);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==v&&(x.update(),c.set(x,v))}return g}function h(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:h}}const Cw={[g_]:"LINEAR_TONE_MAPPING",[v_]:"REINHARD_TONE_MAPPING",[__]:"CINEON_TONE_MAPPING",[Jh]:"ACES_FILMIC_TONE_MAPPING",[x_]:"AGX_TONE_MAPPING",[b_]:"NEUTRAL_TONE_MAPPING",[y_]:"CUSTOM_TONE_MAPPING"};function Rw(s,e,i,a,l){const c=new Vi(e,i,{type:s,depthBuffer:a,stencilBuffer:l,depthTexture:a?new Vs(e,i):void 0}),d=new Vi(e,i,{type:En,depthBuffer:!1,stencilBuffer:!1}),h=new qi;h.setAttribute("position",new Pi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pi([0,2,0,0,2,0],2));const m=new _S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ji(h,m),v=new gp(-1,1,1,-1,0,1);let y=null,g=null,x=!1,E,P=null,S=[],b=!1;this.setSize=function(C,D){c.setSize(C,D),d.setSize(C,D);for(let L=0;L<S.length;L++){const V=S[L];V.setSize&&V.setSize(C,D)}},this.setEffects=function(C){S=C,b=S.length>0&&S[0].isRenderPass===!0;const D=c.width,L=c.height;for(let V=0;V<S.length;V++){const N=S[V];N.setSize&&N.setSize(D,L)}},this.begin=function(C,D){if(x||C.toneMapping===Hi&&S.length===0)return!1;if(P=D,D!==null){const L=D.width,V=D.height;(c.width!==L||c.height!==V)&&this.setSize(L,V)}return b===!1&&C.setRenderTarget(c),E=C.toneMapping,C.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(C,D){C.toneMapping=E,x=!0;let L=c,V=d;for(let N=0;N<S.length;N++){const F=S[N];if(F.enabled!==!1&&(F.render(C,V,L,D),F.needsSwap!==!1)){const w=L;L=V,V=w}}if(y!==C.outputColorSpace||g!==C.toneMapping){y=C.outputColorSpace,g=C.toneMapping,m.defines={},Nt.getTransfer(y)===Gt&&(m.defines.SRGB_TRANSFER="");const N=Cw[g];N&&(m.defines[N]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(P),C.render(p,v),P=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const sy=new zr,Kh=new Vs(1,1),oy=new I_,ly=new mb,cy=new G_,$0=[],Q0=[],J0=new Float32Array(16),e_=new Float32Array(9),t_=new Float32Array(4);function qs(s,e,i){const a=s[0];if(a<=0||a>0)return s;const l=e*i;let c=$0[l];if(c===void 0&&(c=new Float32Array(l),$0[l]=c),e!==0){a.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(c,h)}return c}function _r(s,e){if(s.length!==e.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==e[i])return!1;return!0}function yr(s,e){for(let i=0,a=e.length;i<a;i++)s[i]=e[i]}function ou(s,e){let i=Q0[e];i===void 0&&(i=new Int32Array(e),Q0[e]=i);for(let a=0;a!==e;++a)i[a]=s.allocateTextureUnit();return i}function Pw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function Nw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_r(i,e))return;s.uniform2fv(this.addr,e),yr(i,e)}}function Lw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_r(i,e))return;s.uniform3fv(this.addr,e),yr(i,e)}}function Dw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_r(i,e))return;s.uniform4fv(this.addr,e),yr(i,e)}}function Uw(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_r(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yr(i,e)}else{if(_r(i,a))return;t_.set(a),s.uniformMatrix2fv(this.addr,!1,t_),yr(i,a)}}function Iw(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_r(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yr(i,e)}else{if(_r(i,a))return;e_.set(a),s.uniformMatrix3fv(this.addr,!1,e_),yr(i,a)}}function Ow(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_r(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yr(i,e)}else{if(_r(i,a))return;J0.set(a),s.uniformMatrix4fv(this.addr,!1,J0),yr(i,a)}}function kw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function Fw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_r(i,e))return;s.uniform2iv(this.addr,e),yr(i,e)}}function zw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_r(i,e))return;s.uniform3iv(this.addr,e),yr(i,e)}}function Bw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_r(i,e))return;s.uniform4iv(this.addr,e),yr(i,e)}}function Hw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function Vw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_r(i,e))return;s.uniform2uiv(this.addr,e),yr(i,e)}}function Gw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_r(i,e))return;s.uniform3uiv(this.addr,e),yr(i,e)}}function Ww(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_r(i,e))return;s.uniform4uiv(this.addr,e),yr(i,e)}}function jw(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Kh.compareFunction=i.isReversedDepthBuffer()?op:sp,c=Kh):c=sy,i.setTexture2D(e||c,l)}function Xw(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||ly,l)}function qw(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||cy,l)}function Yw(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||oy,l)}function Kw(s){switch(s){case 5126:return Pw;case 35664:return Nw;case 35665:return Lw;case 35666:return Dw;case 35674:return Uw;case 35675:return Iw;case 35676:return Ow;case 5124:case 35670:return kw;case 35667:case 35671:return Fw;case 35668:case 35672:return zw;case 35669:case 35673:return Bw;case 5125:return Hw;case 36294:return Vw;case 36295:return Gw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return qw;case 36289:case 36303:case 36311:case 36292:return Yw}}function Zw(s,e){s.uniform1fv(this.addr,e)}function $w(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function Qw(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function Jw(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function eT(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function tT(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function rT(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function iT(s,e){s.uniform1iv(this.addr,e)}function nT(s,e){s.uniform2iv(this.addr,e)}function aT(s,e){s.uniform3iv(this.addr,e)}function sT(s,e){s.uniform4iv(this.addr,e)}function oT(s,e){s.uniform1uiv(this.addr,e)}function lT(s,e){s.uniform2uiv(this.addr,e)}function cT(s,e){s.uniform3uiv(this.addr,e)}function uT(s,e){s.uniform4uiv(this.addr,e)}function dT(s,e,i){const a=this.cache,l=e.length,c=ou(i,l);_r(a,c)||(s.uniform1iv(this.addr,c),yr(a,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Kh:d=sy;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,c[h])}function fT(s,e,i){const a=this.cache,l=e.length,c=ou(i,l);_r(a,c)||(s.uniform1iv(this.addr,c),yr(a,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||ly,c[d])}function hT(s,e,i){const a=this.cache,l=e.length,c=ou(i,l);_r(a,c)||(s.uniform1iv(this.addr,c),yr(a,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||cy,c[d])}function pT(s,e,i){const a=this.cache,l=e.length,c=ou(i,l);_r(a,c)||(s.uniform1iv(this.addr,c),yr(a,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||oy,c[d])}function mT(s){switch(s){case 5126:return Zw;case 35664:return $w;case 35665:return Qw;case 35666:return Jw;case 35674:return eT;case 35675:return tT;case 35676:return rT;case 5124:case 35670:return iT;case 35667:case 35671:return nT;case 35668:case 35672:return aT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=Kw(i.type)}}class vT{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mT(i.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],a)}}}const $f=/(\w+)(\])?(\[|\.)?/g;function r_(s,e){s.seq.push(e),s.map[e.id]=e}function yT(s,e,i){const a=s.name,l=a.length;for($f.lastIndex=0;;){const c=$f.exec(a),d=$f.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){r_(i,p===void 0?new gT(h,s,e):new vT(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new _T(h),r_(i,v)),i=v}}}class Qc{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<a;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);yT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&a.push(d)}return a}}function i_(s,e,i){const a=s.createShader(e);return s.shaderSource(a,i),s.compileShader(a),a}const xT=37297;let bT=0;function ST(s,e){const i=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;a.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return a.join(`
`)}const n_=new _t;function MT(s){Nt._getMatrix(n_,Nt.workingColorSpace,s);const e=`mat3( ${n_.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(s)){case ru:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function a_(s,e,i){const a=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+ST(s.getShaderSource(e),d)}else return l}function ET(s,e){const i=MT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const wT={[g_]:"Linear",[v_]:"Reinhard",[__]:"Cineon",[Jh]:"ACESFilmic",[x_]:"AgX",[b_]:"Neutral",[y_]:"Custom"};function TT(s,e){const i=wT[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Q;function AT(){Nt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function RT(s){const e=[];for(const i in s){const a=s[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function PT(s,e){const i={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function Qo(s){return s!==""}function s_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(s){return s.replace(NT,DT)}const LT=new Map;function DT(s,e){let i=xt[e];if(i===void 0){const a=LT.get(e);if(a!==void 0)i=xt[a],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Zh(i)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(s){return s.replace(UT,IT)}function IT(s,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OT={[qc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function kT(s){return OT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FT={[Ha]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function zT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":FT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const BT={[Hs]:"ENVMAP_MODE_REFRACTION"};function HT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":BT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VT={[m_]:"ENVMAP_BLENDING_MULTIPLY",[Y1]:"ENVMAP_BLENDING_MIX",[K1]:"ENVMAP_BLENDING_ADD"};function GT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":VT[s.combine]||"ENVMAP_BLENDING_NONE"}function WT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function jT(s,e,i,a){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=kT(i),p=zT(i),v=HT(i),y=GT(i),g=WT(i),x=CT(i),E=RT(c),P=l.createProgram();let S,b,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Qo).join(`
`),b.length>0&&(b+=`
`)):(S=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),b=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?TT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,ET("linearToOutputTexel",i.outputColorSpace),AT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),d=Zh(d),d=s_(d,i),d=o_(d,i),h=Zh(h),h=s_(h,i),h=o_(h,i),d=l_(d),h=l_(h),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",i.glslVersion===g0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===g0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const D=C+S+d,L=C+b+h,V=i_(l,l.VERTEX_SHADER,D),N=i_(l,l.FRAGMENT_SHADER,L);l.attachShader(P,V),l.attachShader(P,N),i.index0AttributeName!==void 0?l.bindAttribLocation(P,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(P,0,"position"),l.linkProgram(P);function F(O){if(s.debug.checkShaderErrors){const G=l.getProgramInfoLog(P)||"",ue=l.getShaderInfoLog(V)||"",oe=l.getShaderInfoLog(N)||"",q=G.trim(),U=ue.trim(),z=oe.trim();let re=!0,fe=!0;if(l.getProgramParameter(P,l.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,P,V,N);else{const pe=a_(l,V,"vertex"),I=a_(l,N,"fragment");Dt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(P,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+pe+`
`+I)}else q!==""?ut("WebGLProgram: Program Info Log:",q):(U===""||z==="")&&(fe=!1);fe&&(O.diagnostics={runnable:re,programLog:q,vertexShader:{log:U,prefix:S},fragmentShader:{log:z,prefix:b}})}l.deleteShader(V),l.deleteShader(N),w=new Qc(l,P),k=PT(l,P)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let k;this.getAttributes=function(){return k===void 0&&F(this),k};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(P,xT)),X},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(P),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bT++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=V,this.fragmentShader=N,this}let XT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new YT(e),i.set(e,a)),a}}class YT{constructor(e){this.id=XT++,this.code=e,this.usedTimes=0}}function KT(s){return s===Va||s===Jc||s===eu}function ZT(s,e,i,a,l,c){const d=new F_,h=new qT,m=new Set,p=[],v=new Map,y=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return m.add(w),w===0?"uv":`uv${w}`}function P(w,k,X,O,G,ue){const oe=O.fog,q=G.geometry,U=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,re=e.get(w.envMap||U,z),fe=re&&re.mapping===nu?re.image.height:null,pe=x[w.type];w.precision!==null&&(g=a.getMaxPrecision(w.precision),g!==w.precision&&ut("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const I=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,J=I!==void 0?I.length:0;let ge=0;q.morphAttributes.position!==void 0&&(ge=1),q.morphAttributes.normal!==void 0&&(ge=2),q.morphAttributes.color!==void 0&&(ge=3);let Ae,Ne,se,ye;if(pe){const at=Fi[pe];Ae=at.vertexShader,Ne=at.fragmentShader}else Ae=w.vertexShader,Ne=w.fragmentShader,h.update(w),se=h.getVertexShaderID(w),ye=h.getFragmentShaderID(w);const Se=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),lt=G.isInstancedMesh===!0,ze=G.isBatchedMesh===!0,dt=!!w.map,Ee=!!w.matcap,Me=!!re,De=!!w.aoMap,He=!!w.lightMap,We=!!w.bumpMap,$e=!!w.normalMap,nt=!!w.displacementMap,H=!!w.emissiveMap,ft=!!w.metalnessMap,et=!!w.roughnessMap,gt=w.anisotropy>0,Ce=w.clearcoat>0,Mt=w.dispersion>0,R=w.iridescence>0,M=w.sheen>0,ee=w.transmission>0,ve=gt&&!!w.anisotropyMap,be=Ce&&!!w.clearcoatMap,Ie=Ce&&!!w.clearcoatNormalMap,Fe=Ce&&!!w.clearcoatRoughnessMap,Y=R&&!!w.iridescenceMap,Re=R&&!!w.iridescenceThicknessMap,Oe=M&&!!w.sheenColorMap,ke=M&&!!w.sheenRoughnessMap,we=!!w.specularMap,rt=!!w.specularColorMap,ht=!!w.specularIntensityMap,yt=ee&&!!w.transmissionMap,Rt=ee&&!!w.thicknessMap,W=!!w.gradientMap,he=!!w.alphaMap,Pe=w.alphaTest>0,Ye=!!w.alphaHash,Be=!!w.extensions;let Te=Hi;w.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Je={shaderID:pe,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:Ne,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:ze,batchingColor:ze&&G._colorsTexture!==null,instancing:lt,instancingColor:lt&&G.instanceColor!==null,instancingMorph:lt&&G.morphTexture!==null,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:dt,matcap:Ee,envMap:Me,envMapMode:Me&&re.mapping,envMapCubeUVHeight:fe,aoMap:De,lightMap:He,bumpMap:We,normalMap:$e,displacementMap:nt,emissiveMap:H,normalMapObjectSpace:$e&&w.normalMapType===Q1,normalMapTangentSpace:$e&&w.normalMapType===Vh,packedNormalMap:$e&&w.normalMapType===Vh&&KT(w.normalMap.format),metalnessMap:ft,roughnessMap:et,anisotropy:gt,anisotropyMap:ve,clearcoat:Ce,clearcoatMap:be,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Fe,dispersion:Mt,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Re,sheen:M,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:we,specularColorMap:rt,specularIntensityMap:ht,transmission:ee,transmissionMap:yt,thicknessMap:Rt,gradientMap:W,opaque:w.transparent===!1&&w.blending===Fs&&w.alphaToCoverage===!1,alphaMap:he,alphaTest:Pe,alphaHash:Ye,combine:w.combine,mapUv:dt&&E(w.map.channel),aoMapUv:De&&E(w.aoMap.channel),lightMapUv:He&&E(w.lightMap.channel),bumpMapUv:We&&E(w.bumpMap.channel),normalMapUv:$e&&E(w.normalMap.channel),displacementMapUv:nt&&E(w.displacementMap.channel),emissiveMapUv:H&&E(w.emissiveMap.channel),metalnessMapUv:ft&&E(w.metalnessMap.channel),roughnessMapUv:et&&E(w.roughnessMap.channel),anisotropyMapUv:ve&&E(w.anisotropyMap.channel),clearcoatMapUv:be&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(w.sheenRoughnessMap.channel),specularMapUv:we&&E(w.specularMap.channel),specularColorMapUv:rt&&E(w.specularColorMap.channel),specularIntensityMapUv:ht&&E(w.specularIntensityMap.channel),transmissionMapUv:yt&&E(w.transmissionMap.channel),thicknessMapUv:Rt&&E(w.thicknessMap.channel),alphaMapUv:he&&E(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($e||gt),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(dt||he),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&$e===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Le,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ge,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numLightProbes:k.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:dt&&w.map.isVideoTexture===!0&&Nt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:H&&w.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xn,flipSided:w.side===qr,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Je.vertexUv1s=m.has(1),Je.vertexUv2s=m.has(2),Je.vertexUv3s=m.has(3),m.clear(),Je}function S(w){const k=[];if(w.shaderID?k.push(w.shaderID):(k.push(w.customVertexShaderID),k.push(w.customFragmentShaderID)),w.defines!==void 0)for(const X in w.defines)k.push(X),k.push(w.defines[X]);return w.isRawShaderMaterial===!1&&(b(k,w),C(k,w),k.push(s.outputColorSpace)),k.push(w.customProgramCacheKey),k.join()}function b(w,k){w.push(k.precision),w.push(k.outputColorSpace),w.push(k.envMapMode),w.push(k.envMapCubeUVHeight),w.push(k.mapUv),w.push(k.alphaMapUv),w.push(k.lightMapUv),w.push(k.aoMapUv),w.push(k.bumpMapUv),w.push(k.normalMapUv),w.push(k.displacementMapUv),w.push(k.emissiveMapUv),w.push(k.metalnessMapUv),w.push(k.roughnessMapUv),w.push(k.anisotropyMapUv),w.push(k.clearcoatMapUv),w.push(k.clearcoatNormalMapUv),w.push(k.clearcoatRoughnessMapUv),w.push(k.iridescenceMapUv),w.push(k.iridescenceThicknessMapUv),w.push(k.sheenColorMapUv),w.push(k.sheenRoughnessMapUv),w.push(k.specularMapUv),w.push(k.specularColorMapUv),w.push(k.specularIntensityMapUv),w.push(k.transmissionMapUv),w.push(k.thicknessMapUv),w.push(k.combine),w.push(k.fogExp2),w.push(k.sizeAttenuation),w.push(k.morphTargetsCount),w.push(k.morphAttributeCount),w.push(k.numDirLights),w.push(k.numPointLights),w.push(k.numSpotLights),w.push(k.numSpotLightMaps),w.push(k.numHemiLights),w.push(k.numRectAreaLights),w.push(k.numDirLightShadows),w.push(k.numPointLightShadows),w.push(k.numSpotLightShadows),w.push(k.numSpotLightShadowsWithMaps),w.push(k.numLightProbes),w.push(k.shadowMapType),w.push(k.toneMapping),w.push(k.numClippingPlanes),w.push(k.numClipIntersection),w.push(k.depthPacking)}function C(w,k){d.disableAll(),k.instancing&&d.enable(0),k.instancingColor&&d.enable(1),k.instancingMorph&&d.enable(2),k.matcap&&d.enable(3),k.envMap&&d.enable(4),k.normalMapObjectSpace&&d.enable(5),k.normalMapTangentSpace&&d.enable(6),k.clearcoat&&d.enable(7),k.iridescence&&d.enable(8),k.alphaTest&&d.enable(9),k.vertexColors&&d.enable(10),k.vertexAlphas&&d.enable(11),k.vertexUv1s&&d.enable(12),k.vertexUv2s&&d.enable(13),k.vertexUv3s&&d.enable(14),k.vertexTangents&&d.enable(15),k.anisotropy&&d.enable(16),k.alphaHash&&d.enable(17),k.batching&&d.enable(18),k.dispersion&&d.enable(19),k.batchingColor&&d.enable(20),k.gradientMap&&d.enable(21),k.packedNormalMap&&d.enable(22),k.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),k.fog&&d.enable(0),k.useFog&&d.enable(1),k.flatShading&&d.enable(2),k.logarithmicDepthBuffer&&d.enable(3),k.reversedDepthBuffer&&d.enable(4),k.skinning&&d.enable(5),k.morphTargets&&d.enable(6),k.morphNormals&&d.enable(7),k.morphColors&&d.enable(8),k.premultipliedAlpha&&d.enable(9),k.shadowMapEnabled&&d.enable(10),k.doubleSided&&d.enable(11),k.flipSided&&d.enable(12),k.useDepthPacking&&d.enable(13),k.dithering&&d.enable(14),k.transmission&&d.enable(15),k.sheen&&d.enable(16),k.opaque&&d.enable(17),k.pointsUvs&&d.enable(18),k.decodeVideoTexture&&d.enable(19),k.decodeVideoTextureEmissive&&d.enable(20),k.alphaToCoverage&&d.enable(21),k.numLightProbeGrids>0&&d.enable(22),w.push(d.mask)}function D(w){const k=x[w.type];let X;if(k){const O=Fi[k];X=mS.clone(O.uniforms)}else X=w.uniforms;return X}function L(w,k){let X=v.get(k);return X!==void 0?++X.usedTimes:(X=new jT(s,k,w,l),p.push(X),v.set(k,X)),X}function V(w){if(--w.usedTimes===0){const k=p.indexOf(w);p[k]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function N(w){h.remove(w)}function F(){h.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:D,acquireProgram:L,releaseProgram:V,releaseShaderCache:N,programs:p,dispose:F}}function $T(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function a(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function QT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function u_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function d_(){const s=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function d(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,E,P,S,b){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:x,material:E,materialVariant:d(g),groupOrder:P,renderOrder:g.renderOrder,z:S,group:b},s[e]=C):(C.id=g.id,C.object=g,C.geometry=x,C.material=E,C.materialVariant=d(g),C.groupOrder=P,C.renderOrder=g.renderOrder,C.z=S,C.group=b),e++,C}function m(g,x,E,P,S,b){const C=h(g,x,E,P,S,b);E.transmission>0?a.push(C):E.transparent===!0?l.push(C):i.push(C)}function p(g,x,E,P,S,b){const C=h(g,x,E,P,S,b);E.transmission>0?a.unshift(C):E.transparent===!0?l.unshift(C):i.unshift(C)}function v(g,x){i.length>1&&i.sort(g||QT),a.length>1&&a.sort(x||u_),l.length>1&&l.sort(x||u_)}function y(){for(let g=e,x=s.length;g<x;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:m,unshift:p,finish:y,sort:v}}function JT(){let s=new WeakMap;function e(a,l){const c=s.get(a);let d;return c===void 0?(d=new d_,s.set(a,[d])):l>=c.length?(d=new d_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function e2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Ut};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=i,i}}}function t2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let r2=0;function i2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function n2(s){const e=new e2,i=t2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new Q);const l=new Q,c=new mr,d=new mr;function h(p){let v=0,y=0,g=0;for(let k=0;k<9;k++)a.probe[k].set(0,0,0);let x=0,E=0,P=0,S=0,b=0,C=0,D=0,L=0,V=0,N=0,F=0;p.sort(i2);for(let k=0,X=p.length;k<X;k++){const O=p[k],G=O.color,ue=O.intensity,oe=O.distance;let q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Va?q=O.shadow.map.texture:q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)v+=G.r*ue,y+=G.g*ue,g+=G.b*ue;else if(O.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(O.sh.coefficients[U],ue);F++}else if(O.isDirectionalLight){const U=e.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const z=O.shadow,re=i.get(O);re.shadowIntensity=z.intensity,re.shadowBias=z.bias,re.shadowNormalBias=z.normalBias,re.shadowRadius=z.radius,re.shadowMapSize=z.mapSize,a.directionalShadow[x]=re,a.directionalShadowMap[x]=q,a.directionalShadowMatrix[x]=O.shadow.matrix,C++}a.directional[x]=U,x++}else if(O.isSpotLight){const U=e.get(O);U.position.setFromMatrixPosition(O.matrixWorld),U.color.copy(G).multiplyScalar(ue),U.distance=oe,U.coneCos=Math.cos(O.angle),U.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),U.decay=O.decay,a.spot[P]=U;const z=O.shadow;if(O.map&&(a.spotLightMap[V]=O.map,V++,z.updateMatrices(O),O.castShadow&&N++),a.spotLightMatrix[P]=z.matrix,O.castShadow){const re=i.get(O);re.shadowIntensity=z.intensity,re.shadowBias=z.bias,re.shadowNormalBias=z.normalBias,re.shadowRadius=z.radius,re.shadowMapSize=z.mapSize,a.spotShadow[P]=re,a.spotShadowMap[P]=q,L++}P++}else if(O.isRectAreaLight){const U=e.get(O);U.color.copy(G).multiplyScalar(ue),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),a.rectArea[S]=U,S++}else if(O.isPointLight){const U=e.get(O);if(U.color.copy(O.color).multiplyScalar(O.intensity),U.distance=O.distance,U.decay=O.decay,O.castShadow){const z=O.shadow,re=i.get(O);re.shadowIntensity=z.intensity,re.shadowBias=z.bias,re.shadowNormalBias=z.normalBias,re.shadowRadius=z.radius,re.shadowMapSize=z.mapSize,re.shadowCameraNear=z.camera.near,re.shadowCameraFar=z.camera.far,a.pointShadow[E]=re,a.pointShadowMap[E]=q,a.pointShadowMatrix[E]=O.shadow.matrix,D++}a.point[E]=U,E++}else if(O.isHemisphereLight){const U=e.get(O);U.skyColor.copy(O.color).multiplyScalar(ue),U.groundColor.copy(O.groundColor).multiplyScalar(ue),a.hemi[b]=U,b++}}S>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ve.LTC_FLOAT_1,a.rectAreaLTC2=Ve.LTC_FLOAT_2):(a.rectAreaLTC1=Ve.LTC_HALF_1,a.rectAreaLTC2=Ve.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=y,a.ambient[2]=g;const w=a.hash;(w.directionalLength!==x||w.pointLength!==E||w.spotLength!==P||w.rectAreaLength!==S||w.hemiLength!==b||w.numDirectionalShadows!==C||w.numPointShadows!==D||w.numSpotShadows!==L||w.numSpotMaps!==V||w.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=P,a.rectArea.length=S,a.point.length=E,a.hemi.length=b,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=L+V-N,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=F,w.directionalLength=x,w.pointLength=E,w.spotLength=P,w.rectAreaLength=S,w.hemiLength=b,w.numDirectionalShadows=C,w.numPointShadows=D,w.numSpotShadows=L,w.numSpotMaps=V,w.numLightProbes=F,a.version=r2++)}function m(p,v){let y=0,g=0,x=0,E=0,P=0;const S=v.matrixWorldInverse;for(let b=0,C=p.length;b<C;b++){const D=p[b];if(D.isDirectionalLight){const L=a.directional[y];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),y++}else if(D.isSpotLight){const L=a.spot[x];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const L=a.rectArea[E];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),d.identity(),c.copy(D.matrixWorld),c.premultiply(S),d.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),E++}else if(D.isPointLight){const L=a.point[g];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const L=a.hemi[P];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(S),P++}}}return{setup:h,setupView:m,state:a}}function f_(s){const e=new n2(s),i=[],a=[],l=[];function c(g){y.camera=g,i.length=0,a.length=0,l.length=0}function d(g){i.push(g)}function h(g){a.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function v(g){e.setupView(i,g)}const y={lightsArray:i,shadowsArray:a,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:p,setupLightsView:v,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function a2(s){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new f_(s),e.set(l,[h])):c>=d.length?(h=new f_(s),d.push(h)):h=d[c],h}function a(){e=new WeakMap}return{get:i,dispose:a}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
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
}`,l2=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],c2=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],h_=new mr,Ko=new Q,Qf=new Q;function u2(s,e,i){let a=new dp;const l=new je,c=new je,d=new pr,h=new yS,m=new xS,p={},v=i.maxTextureSize,y={[ua]:qr,[qr]:ua,[xn]:xn},g=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:s2,fragmentShader:o2}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new qi;E.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new ji(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let b=this.type;this.render=function(N,F,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;this.type===R1&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const k=s.getRenderTarget(),X=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Sn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ue=b!==this.type;ue&&F.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(q=>q.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,q=N.length;oe<q;oe++){const U=N[oe],z=U.shadow;if(z===void 0){ut("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const re=z.getFrameExtents();l.multiply(re),c.copy(z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/re.x),l.x=c.x*re.x,z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/re.y),l.y=c.y*re.y,z.mapSize.y=c.y));const fe=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=fe,z.map===null||ue===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zo){if(U.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Vi(l.x,l.y,{format:Va,type:En,minFilter:Ir,magFilter:Ir,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new Vs(l.x,l.y,zi),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=wn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rr,z.map.depthTexture.magFilter=Rr}else U.isPointLight?(z.map=new ay(l.x),z.map.depthTexture=new Ub(l.x,Wi)):(z.map=new Vi(l.x,l.y),z.map.depthTexture=new Vs(l.x,l.y,Wi)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=wn,this.type===qc?(z.map.depthTexture.compareFunction=fe?op:sp,z.map.depthTexture.minFilter=Ir,z.map.depthTexture.magFilter=Ir):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Rr,z.map.depthTexture.magFilter=Rr);z.camera.updateProjectionMatrix()}const pe=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<pe;I++){if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,I),s.clear();else{I===0&&(s.setRenderTarget(z.map),s.clear());const J=z.getViewport(I);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),G.viewport(d)}if(U.isPointLight){const J=z.camera,ge=z.matrix,Ae=U.distance||J.far;Ae!==J.far&&(J.far=Ae,J.updateProjectionMatrix()),Ko.setFromMatrixPosition(U.matrixWorld),J.position.copy(Ko),Qf.copy(J.position),Qf.add(l2[I]),J.up.copy(c2[I]),J.lookAt(Qf),J.updateMatrixWorld(),ge.makeTranslation(-Ko.x,-Ko.y,-Ko.z),h_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(h_,J.coordinateSystem,J.reversedDepth)}else z.updateMatrices(U);a=z.getFrustum(),L(F,w,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===Zo&&C(z,w),z.needsUpdate=!1}b=this.type,S.needsUpdate=!1,s.setRenderTarget(k,X,O)};function C(N,F){const w=e.update(P);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Vi(l.x,l.y,{format:Va,type:En})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,w,g,P,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,w,x,P,null)}function D(N,F,w,k){let X=null;const O=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)X=O;else if(X=w.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const G=X.uuid,ue=F.uuid;let oe=p[G];oe===void 0&&(oe={},p[G]=oe);let q=oe[ue];q===void 0&&(q=X.clone(),oe[ue]=q,F.addEventListener("dispose",V)),X=q}if(X.visible=F.visible,X.wireframe=F.wireframe,k===Zo?X.side=F.shadowSide!==null?F.shadowSide:F.side:X.side=F.shadowSide!==null?F.shadowSide:y[F.side],X.alphaMap=F.alphaMap,X.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,X.map=F.map,X.clipShadows=F.clipShadows,X.clippingPlanes=F.clippingPlanes,X.clipIntersection=F.clipIntersection,X.displacementMap=F.displacementMap,X.displacementScale=F.displacementScale,X.displacementBias=F.displacementBias,X.wireframeLinewidth=F.wireframeLinewidth,X.linewidth=F.linewidth,w.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const G=s.properties.get(X);G.light=w}return X}function L(N,F,w,k,X){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&X===Zo)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const G=e.update(N),ue=N.material;if(Array.isArray(ue)){const oe=G.groups;for(let q=0,U=oe.length;q<U;q++){const z=oe[q],re=ue[z.materialIndex];if(re&&re.visible){const fe=D(N,re,k,X);N.onBeforeShadow(s,N,F,w,G,fe,z),s.renderBufferDirect(w,null,G,fe,N,z),N.onAfterShadow(s,N,F,w,G,fe,z)}}}else if(ue.visible){const oe=D(N,ue,k,X);N.onBeforeShadow(s,N,F,w,G,oe,null),s.renderBufferDirect(w,null,G,oe,N,null),N.onAfterShadow(s,N,F,w,G,oe,null)}}const O=N.children;for(let G=0,ue=O.length;G<ue;G++)L(O[G],F,w,k,X)}function V(N){N.target.removeEventListener("dispose",V);for(const F in p){const w=p[F],k=N.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function d2(s,e){function i(){let W=!1;const he=new pr;let Pe=null;const Ye=new pr(0,0,0,0);return{setMask:function(Be){Pe!==Be&&!W&&(s.colorMask(Be,Be,Be,Be),Pe=Be)},setLocked:function(Be){W=Be},setClear:function(Be,Te,Je,at,Mr){Mr===!0&&(Be*=at,Te*=at,Je*=at),he.set(Be,Te,Je,at),Ye.equals(he)===!1&&(s.clearColor(Be,Te,Je,at),Ye.copy(he))},reset:function(){W=!1,Pe=null,Ye.set(-1,0,0,0)}}}function a(){let W=!1,he=!1,Pe=null,Ye=null,Be=null;return{setReversed:function(Te){if(he!==Te){const Je=e.get("EXT_clip_control");Te?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),he=Te;const at=Be;Be=null,this.setClear(at)}},getReversed:function(){return he},setTest:function(Te){Te?Se(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(Te){Pe!==Te&&!W&&(s.depthMask(Te),Pe=Te)},setFunc:function(Te){if(he&&(Te=lb[Te]),Ye!==Te){switch(Te){case ih:s.depthFunc(s.NEVER);break;case nh:s.depthFunc(s.ALWAYS);break;case ah:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case sh:s.depthFunc(s.EQUAL);break;case oh:s.depthFunc(s.GEQUAL);break;case lh:s.depthFunc(s.GREATER);break;case ch:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ye=Te}},setLocked:function(Te){W=Te},setClear:function(Te){Be!==Te&&(Be=Te,he&&(Te=1-Te),s.clearDepth(Te))},reset:function(){W=!1,Pe=null,Ye=null,Be=null,he=!1}}}function l(){let W=!1,he=null,Pe=null,Ye=null,Be=null,Te=null,Je=null,at=null,Mr=null;return{setTest:function(Wt){W||(Wt?Se(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(Wt){he!==Wt&&!W&&(s.stencilMask(Wt),he=Wt)},setFunc:function(Wt,li,Yr){(Pe!==Wt||Ye!==li||Be!==Yr)&&(s.stencilFunc(Wt,li,Yr),Pe=Wt,Ye=li,Be=Yr)},setOp:function(Wt,li,Yr){(Te!==Wt||Je!==li||at!==Yr)&&(s.stencilOp(Wt,li,Yr),Te=Wt,Je=li,at=Yr)},setLocked:function(Wt){W=Wt},setClear:function(Wt){Mr!==Wt&&(s.clearStencil(Wt),Mr=Wt)},reset:function(){W=!1,he=null,Pe=null,Ye=null,Be=null,Te=null,Je=null,at=null,Mr=null}}}const c=new i,d=new a,h=new l,m=new WeakMap,p=new WeakMap;let v={},y={},g={},x=new WeakMap,E=[],P=null,S=!1,b=null,C=null,D=null,L=null,V=null,N=null,F=null,w=new Ut(0,0,0),k=0,X=!1,O=null,G=null,ue=null,oe=null,q=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,re=0;const fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(fe)[1]),z=re>=1):fe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),z=re>=2);let pe=null,I={};const J=s.getParameter(s.SCISSOR_BOX),ge=s.getParameter(s.VIEWPORT),Ae=new pr().fromArray(J),Ne=new pr().fromArray(ge);function se(W,he,Pe,Ye){const Be=new Uint8Array(4),Te=s.createTexture();s.bindTexture(W,Te),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<Pe;Je++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,Ye,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(he+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Te}const ye={};ye[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Se(s.DEPTH_TEST),d.setFunc(Bs),We(!1),$e(u0),Se(s.CULL_FACE),De(Sn);function Se(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Le(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function lt(W,he){return g[W]!==he?(s.bindFramebuffer(W,he),g[W]=he,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=he),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=he),!0):!1}function ze(W,he){let Pe=E,Ye=!1;if(W){Pe=x.get(he),Pe===void 0&&(Pe=[],x.set(he,Pe));const Be=W.textures;if(Pe.length!==Be.length||Pe[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Je=Be.length;Te<Je;Te++)Pe[Te]=s.COLOR_ATTACHMENT0+Te;Pe.length=Be.length,Ye=!0}}else Pe[0]!==s.BACK&&(Pe[0]=s.BACK,Ye=!0);Ye&&s.drawBuffers(Pe)}function dt(W){return P!==W?(s.useProgram(W),P=W,!0):!1}const Ee={[ka]:s.FUNC_ADD,[N1]:s.FUNC_SUBTRACT,[L1]:s.FUNC_REVERSE_SUBTRACT};Ee[D1]=s.MIN,Ee[U1]=s.MAX;const Me={[I1]:s.ZERO,[O1]:s.ONE,[k1]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[G1]:s.SRC_ALPHA_SATURATE,[H1]:s.DST_COLOR,[z1]:s.DST_ALPHA,[F1]:s.ONE_MINUS_SRC_COLOR,[rh]:s.ONE_MINUS_SRC_ALPHA,[V1]:s.ONE_MINUS_DST_COLOR,[B1]:s.ONE_MINUS_DST_ALPHA,[W1]:s.CONSTANT_COLOR,[j1]:s.ONE_MINUS_CONSTANT_COLOR,[X1]:s.CONSTANT_ALPHA,[q1]:s.ONE_MINUS_CONSTANT_ALPHA};function De(W,he,Pe,Ye,Be,Te,Je,at,Mr,Wt){if(W===Sn){S===!0&&(Le(s.BLEND),S=!1);return}if(S===!1&&(Se(s.BLEND),S=!0),W!==P1){if(W!==b||Wt!==X){if((C!==ka||V!==ka)&&(s.blendEquation(s.FUNC_ADD),C=ka,V=ka),Wt)switch(W){case Fs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case d0:s.blendFunc(s.ONE,s.ONE);break;case f0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case h0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case d0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case f0:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h0:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}D=null,L=null,N=null,F=null,w.set(0,0,0),k=0,b=W,X=Wt}return}Be=Be||he,Te=Te||Pe,Je=Je||Ye,(he!==C||Be!==V)&&(s.blendEquationSeparate(Ee[he],Ee[Be]),C=he,V=Be),(Pe!==D||Ye!==L||Te!==N||Je!==F)&&(s.blendFuncSeparate(Me[Pe],Me[Ye],Me[Te],Me[Je]),D=Pe,L=Ye,N=Te,F=Je),(at.equals(w)===!1||Mr!==k)&&(s.blendColor(at.r,at.g,at.b,Mr),w.copy(at),k=Mr),b=W,X=!1}function He(W,he){W.side===xn?Le(s.CULL_FACE):Se(s.CULL_FACE);let Pe=W.side===qr;he&&(Pe=!Pe),We(Pe),W.blending===Fs&&W.transparent===!1?De(Sn):De(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ye=W.stencilWrite;h.setTest(Ye),Ye&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),H(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(W){O!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),O=W)}function $e(W){W!==A1?(Se(s.CULL_FACE),W!==G&&(W===u0?s.cullFace(s.BACK):W===C1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),G=W}function nt(W){W!==ue&&(z&&s.lineWidth(W),ue=W)}function H(W,he,Pe){W?(Se(s.POLYGON_OFFSET_FILL),(oe!==he||q!==Pe)&&(oe=he,q=Pe,d.getReversed()&&(he=-he),s.polygonOffset(he,Pe))):Le(s.POLYGON_OFFSET_FILL)}function ft(W){W?Se(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function et(W){W===void 0&&(W=s.TEXTURE0+U-1),pe!==W&&(s.activeTexture(W),pe=W)}function gt(W,he,Pe){Pe===void 0&&(pe===null?Pe=s.TEXTURE0+U-1:Pe=pe);let Ye=I[Pe];Ye===void 0&&(Ye={type:void 0,texture:void 0},I[Pe]=Ye),(Ye.type!==W||Ye.texture!==he)&&(pe!==Pe&&(s.activeTexture(Pe),pe=Pe),s.bindTexture(W,he||ye[W]),Ye.type=W,Ye.texture=he)}function Ce(){const W=I[pe];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function M(){try{s.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ee(){try{s.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ve(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function be(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ie(){try{s.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Fe(){try{s.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Y(){try{s.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Re(){try{s.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Oe(W){return y[W]!==void 0?y[W]:s.getParameter(W)}function ke(W,he){y[W]!==he&&(s.pixelStorei(W,he),y[W]=he)}function we(W){Ae.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Ae.copy(W))}function rt(W){Ne.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function ht(W,he){let Pe=p.get(he);Pe===void 0&&(Pe=new WeakMap,p.set(he,Pe));let Ye=Pe.get(W);Ye===void 0&&(Ye=s.getUniformBlockIndex(he,W.name),Pe.set(W,Ye))}function yt(W,he){const Pe=p.get(he).get(W);m.get(he)!==Pe&&(s.uniformBlockBinding(he,Pe,W.__bindingPointIndex),m.set(he,Pe))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},pe=null,I={},g={},x=new WeakMap,E=[],P=null,S=!1,b=null,C=null,D=null,L=null,V=null,N=null,F=null,w=new Ut(0,0,0),k=0,X=!1,O=null,G=null,ue=null,oe=null,q=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Se,disable:Le,bindFramebuffer:lt,drawBuffers:ze,useProgram:dt,setBlending:De,setMaterial:He,setFlipSided:We,setCullFace:$e,setLineWidth:nt,setPolygonOffset:H,setScissorTest:ft,activeTexture:et,bindTexture:gt,unbindTexture:Ce,compressedTexImage2D:Mt,compressedTexImage3D:R,texImage2D:Y,texImage3D:Re,pixelStorei:ke,getParameter:Oe,updateUBOMapping:ht,uniformBlockBinding:yt,texStorage2D:Ie,texStorage3D:Fe,texSubImage2D:M,texSubImage3D:ee,compressedTexSubImage2D:ve,compressedTexSubImage3D:be,scissor:we,viewport:rt,reset:Rt}}function f2(s,e,i,a,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new je,v=new WeakMap,y=new Set;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(R,M){return E?new OffscreenCanvas(R,M):iu("canvas")}function S(R,M,ee){let ve=1;const be=Mt(R);if((be.width>ee||be.height>ee)&&(ve=ee/Math.max(be.width,be.height)),ve<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ie=Math.floor(ve*be.width),Fe=Math.floor(ve*be.height);g===void 0&&(g=P(Ie,Fe));const Y=M?P(Ie,Fe):g;return Y.width=Ie,Y.height=Fe,Y.getContext("2d").drawImage(R,0,0,Ie,Fe),ut("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Ie+"x"+Fe+")."),Y}else return"data"in R&&ut("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),R;return R}function b(R){return R.generateMipmaps}function C(R){s.generateMipmap(R)}function D(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(R,M,ee,ve,be,Ie=!1){if(R!==null){if(s[R]!==void 0)return s[R];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Fe;ve&&(Fe=e.get("EXT_texture_norm16"),Fe||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===s.RED&&(ee===s.FLOAT&&(Y=s.R32F),ee===s.HALF_FLOAT&&(Y=s.R16F),ee===s.UNSIGNED_BYTE&&(Y=s.R8),ee===s.UNSIGNED_SHORT&&Fe&&(Y=Fe.R16_EXT),ee===s.SHORT&&Fe&&(Y=Fe.R16_SNORM_EXT)),M===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(Y=s.R8UI),ee===s.UNSIGNED_SHORT&&(Y=s.R16UI),ee===s.UNSIGNED_INT&&(Y=s.R32UI),ee===s.BYTE&&(Y=s.R8I),ee===s.SHORT&&(Y=s.R16I),ee===s.INT&&(Y=s.R32I)),M===s.RG&&(ee===s.FLOAT&&(Y=s.RG32F),ee===s.HALF_FLOAT&&(Y=s.RG16F),ee===s.UNSIGNED_BYTE&&(Y=s.RG8),ee===s.UNSIGNED_SHORT&&Fe&&(Y=Fe.RG16_EXT),ee===s.SHORT&&Fe&&(Y=Fe.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(Y=s.RG8UI),ee===s.UNSIGNED_SHORT&&(Y=s.RG16UI),ee===s.UNSIGNED_INT&&(Y=s.RG32UI),ee===s.BYTE&&(Y=s.RG8I),ee===s.SHORT&&(Y=s.RG16I),ee===s.INT&&(Y=s.RG32I)),M===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),ee===s.UNSIGNED_INT&&(Y=s.RGB32UI),ee===s.BYTE&&(Y=s.RGB8I),ee===s.SHORT&&(Y=s.RGB16I),ee===s.INT&&(Y=s.RGB32I)),M===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),ee===s.UNSIGNED_INT&&(Y=s.RGBA32UI),ee===s.BYTE&&(Y=s.RGBA8I),ee===s.SHORT&&(Y=s.RGBA16I),ee===s.INT&&(Y=s.RGBA32I)),M===s.RGB&&(ee===s.UNSIGNED_SHORT&&Fe&&(Y=Fe.RGB16_EXT),ee===s.SHORT&&Fe&&(Y=Fe.RGB16_SNORM_EXT),ee===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),ee===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),M===s.RGBA){const Re=Ie?ru:Nt.getTransfer(be);ee===s.FLOAT&&(Y=s.RGBA32F),ee===s.HALF_FLOAT&&(Y=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(Y=Re===Gt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT&&Fe&&(Y=Fe.RGBA16_EXT),ee===s.SHORT&&Fe&&(Y=Fe.RGBA16_SNORM_EXT),ee===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function V(R,M){let ee;return R?M===null||M===Wi||M===rl?ee=s.DEPTH24_STENCIL8:M===zi?ee=s.DEPTH32F_STENCIL8:M===tl&&(ee=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===rl?ee=s.DEPTH_COMPONENT24:M===zi?ee=s.DEPTH_COMPONENT32F:M===tl&&(ee=s.DEPTH_COMPONENT16),ee}function N(R,M){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rr&&R.minFilter!==Ir?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function F(R){const M=R.target;M.removeEventListener("dispose",F),k(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&y.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),O(M)}function k(R){const M=a.get(R);if(M.__webglInit===void 0)return;const ee=R.source,ve=x.get(ee);if(ve){const be=ve[M.__cacheKey];be.usedTimes--,be.usedTimes===0&&X(R),Object.keys(ve).length===0&&x.delete(ee)}a.remove(R)}function X(R){const M=a.get(R);s.deleteTexture(M.__webglTexture);const ee=R.source,ve=x.get(ee);delete ve[M.__cacheKey],d.memory.textures--}function O(R){const M=a.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),a.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(M.__webglFramebuffer[ve]))for(let be=0;be<M.__webglFramebuffer[ve].length;be++)s.deleteFramebuffer(M.__webglFramebuffer[ve][be]);else s.deleteFramebuffer(M.__webglFramebuffer[ve]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ve])}else{if(Array.isArray(M.__webglFramebuffer))for(let ve=0;ve<M.__webglFramebuffer.length;ve++)s.deleteFramebuffer(M.__webglFramebuffer[ve]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ve=0;ve<M.__webglColorRenderbuffer.length;ve++)M.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ve]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ee=R.textures;for(let ve=0,be=ee.length;ve<be;ve++){const Ie=a.get(ee[ve]);Ie.__webglTexture&&(s.deleteTexture(Ie.__webglTexture),d.memory.textures--),a.remove(ee[ve])}a.remove(R)}let G=0;function ue(){G=0}function oe(){return G}function q(R){G=R}function U(){const R=G;return R>=l.maxTextures&&ut("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),G+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function re(R,M){const ee=a.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ee.__version!==R.version){const ve=R.image;if(ve===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ee,R,M);return}}else R.isExternalTexture&&(ee.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+M)}function fe(R,M){const ee=a.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ee.__version!==R.version){Le(ee,R,M);return}else R.isExternalTexture&&(ee.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+M)}function pe(R,M){const ee=a.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ee.__version!==R.version){Le(ee,R,M);return}i.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+M)}function I(R,M){const ee=a.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&ee.__version!==R.version){lt(ee,R,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+M)}const J={[uh]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[dh]:s.MIRRORED_REPEAT},ge={[Rr]:s.NEAREST,[Z1]:s.NEAREST_MIPMAP_NEAREST,[xc]:s.NEAREST_MIPMAP_LINEAR,[Ir]:s.LINEAR,[gf]:s.LINEAR_MIPMAP_NEAREST,[za]:s.LINEAR_MIPMAP_LINEAR},Ae={[J1]:s.NEVER,[nb]:s.ALWAYS,[eb]:s.LESS,[sp]:s.LEQUAL,[tb]:s.EQUAL,[op]:s.GEQUAL,[rb]:s.GREATER,[ib]:s.NOTEQUAL};function Ne(R,M){if(M.type===zi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ir||M.magFilter===gf||M.magFilter===xc||M.magFilter===za||M.minFilter===Ir||M.minFilter===gf||M.minFilter===xc||M.minFilter===za)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,J[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,J[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,J[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ge[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ge[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Rr||M.minFilter!==xc&&M.minFilter!==za||M.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function se(R,M){let ee=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",F));const ve=M.source;let be=x.get(ve);be===void 0&&(be={},x.set(ve,be));const Ie=z(M);if(Ie!==R.__cacheKey){be[Ie]===void 0&&(be[Ie]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),be[Ie].usedTimes++;const Fe=be[R.__cacheKey];Fe!==void 0&&(be[R.__cacheKey].usedTimes--,Fe.usedTimes===0&&X(M)),R.__cacheKey=Ie,R.__webglTexture=be[Ie].texture}return ee}function ye(R,M,ee){return Math.floor(Math.floor(R/ee)/M)}function Se(R,M,ee,ve){const be=R.updateRanges;if(be.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,ee,ve,M.data);else{be.sort((Oe,ke)=>Oe.start-ke.start);let Ie=0;for(let Oe=1;Oe<be.length;Oe++){const ke=be[Ie],we=be[Oe],rt=ke.start+ke.count,ht=ye(we.start,M.width,4),yt=ye(ke.start,M.width,4);we.start<=rt+1&&ht===yt&&ye(we.start+we.count-1,M.width,4)===ht?ke.count=Math.max(ke.count,we.start+we.count-ke.start):(++Ie,be[Ie]=we)}be.length=Ie+1;const Fe=i.getParameter(s.UNPACK_ROW_LENGTH),Y=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Oe=0,ke=be.length;Oe<ke;Oe++){const we=be[Oe],rt=Math.floor(we.start/4),ht=Math.ceil(we.count/4),yt=rt%M.width,Rt=Math.floor(rt/M.width),W=ht;i.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(s.UNPACK_SKIP_ROWS,Rt),i.texSubImage2D(s.TEXTURE_2D,0,yt,Rt,W,1,ee,ve,M.data)}R.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,Fe),i.pixelStorei(s.UNPACK_SKIP_PIXELS,Y),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Le(R,M,ee){let ve=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ve=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ve=s.TEXTURE_3D);const be=se(R,M),Ie=M.source;i.bindTexture(ve,R.__webglTexture,s.TEXTURE0+ee);const Fe=a.get(Ie);if(Ie.version!==Fe.__version||be===!0){if(i.activeTexture(s.TEXTURE0+ee),!(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)){const he=Nt.getPrimaries(Nt.workingColorSpace),Pe=M.colorSpace===la?null:Nt.getPrimaries(M.colorSpace),Ye=M.colorSpace===la||he===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let Y=S(M.image,!1,l.maxTextureSize);Y=Ce(M,Y);const Re=c.convert(M.format,M.colorSpace),Oe=c.convert(M.type);let ke=L(M.internalFormat,Re,Oe,M.normalized,M.colorSpace,M.isVideoTexture);Ne(ve,M);let we;const rt=M.mipmaps,ht=M.isVideoTexture!==!0,yt=Fe.__version===void 0||be===!0,Rt=Ie.dataReady,W=N(M,Y);if(M.isDepthTexture)ke=V(M.format===Ba,M.type),yt&&(ht?i.texStorage2D(s.TEXTURE_2D,1,ke,Y.width,Y.height):i.texImage2D(s.TEXTURE_2D,0,ke,Y.width,Y.height,0,Re,Oe,null));else if(M.isDataTexture)if(rt.length>0){ht&&yt&&i.texStorage2D(s.TEXTURE_2D,W,ke,rt[0].width,rt[0].height);for(let he=0,Pe=rt.length;he<Pe;he++)we=rt[he],ht?Rt&&i.texSubImage2D(s.TEXTURE_2D,he,0,0,we.width,we.height,Re,Oe,we.data):i.texImage2D(s.TEXTURE_2D,he,ke,we.width,we.height,0,Re,Oe,we.data);M.generateMipmaps=!1}else ht?(yt&&i.texStorage2D(s.TEXTURE_2D,W,ke,Y.width,Y.height),Rt&&Se(M,Y,Re,Oe)):i.texImage2D(s.TEXTURE_2D,0,ke,Y.width,Y.height,0,Re,Oe,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ht&&yt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,W,ke,rt[0].width,rt[0].height,Y.depth);for(let he=0,Pe=rt.length;he<Pe;he++)if(we=rt[he],M.format!==Ri)if(Re!==null)if(ht){if(Rt)if(M.layerUpdates.size>0){const Ye=W0(we.width,we.height,M.format,M.type);for(const Be of M.layerUpdates){const Te=we.data.subarray(Be*Ye/we.data.BYTES_PER_ELEMENT,(Be+1)*Ye/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,Be,we.width,we.height,1,Re,Te)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Y.depth,Re,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,ke,we.width,we.height,Y.depth,0,we.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,Y.depth,Re,Oe,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,he,ke,we.width,we.height,Y.depth,0,Re,Oe,we.data)}else{ht&&yt&&i.texStorage2D(s.TEXTURE_2D,W,ke,rt[0].width,rt[0].height);for(let he=0,Pe=rt.length;he<Pe;he++)we=rt[he],M.format!==Ri?Re!==null?ht?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,we.width,we.height,Re,we.data):i.compressedTexImage2D(s.TEXTURE_2D,he,ke,we.width,we.height,0,we.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Rt&&i.texSubImage2D(s.TEXTURE_2D,he,0,0,we.width,we.height,Re,Oe,we.data):i.texImage2D(s.TEXTURE_2D,he,ke,we.width,we.height,0,Re,Oe,we.data)}else if(M.isDataArrayTexture)if(ht){if(yt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,W,ke,Y.width,Y.height,Y.depth),Rt)if(M.layerUpdates.size>0){const he=W0(Y.width,Y.height,M.format,M.type);for(const Pe of M.layerUpdates){const Ye=Y.data.subarray(Pe*he/Y.data.BYTES_PER_ELEMENT,(Pe+1)*he/Y.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,Y.width,Y.height,1,Re,Oe,Ye)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Re,Oe,Y.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,Y.width,Y.height,Y.depth,0,Re,Oe,Y.data);else if(M.isData3DTexture)ht?(yt&&i.texStorage3D(s.TEXTURE_3D,W,ke,Y.width,Y.height,Y.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Re,Oe,Y.data)):i.texImage3D(s.TEXTURE_3D,0,ke,Y.width,Y.height,Y.depth,0,Re,Oe,Y.data);else if(M.isFramebufferTexture){if(yt)if(ht)i.texStorage2D(s.TEXTURE_2D,W,ke,Y.width,Y.height);else{let he=Y.width,Pe=Y.height;for(let Ye=0;Ye<W;Ye++)i.texImage2D(s.TEXTURE_2D,Ye,ke,he,Pe,0,Re,Oe,null),he>>=1,Pe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),Y.parentNode!==he){he.appendChild(Y),y.add(M),he.onpaint=Je=>{const at=Je.changedElements;for(const Mr of y)at.includes(Mr.image)&&(Mr.needsUpdate=!0)},he.requestPaint();return}const Pe=0,Ye=s.RGBA,Be=s.RGBA,Te=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Pe,Ye,Be,Te,Y),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(rt.length>0){if(ht&&yt){const he=Mt(rt[0]);i.texStorage2D(s.TEXTURE_2D,W,ke,he.width,he.height)}for(let he=0,Pe=rt.length;he<Pe;he++)we=rt[he],ht?Rt&&i.texSubImage2D(s.TEXTURE_2D,he,0,0,Re,Oe,we):i.texImage2D(s.TEXTURE_2D,he,ke,Re,Oe,we);M.generateMipmaps=!1}else if(ht){if(yt){const he=Mt(Y);i.texStorage2D(s.TEXTURE_2D,W,ke,he.width,he.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Oe,Y)}else i.texImage2D(s.TEXTURE_2D,0,ke,Re,Oe,Y);b(M)&&C(ve),Fe.__version=Ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function lt(R,M,ee){if(M.image.length!==6)return;const ve=se(R,M),be=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+ee);const Ie=a.get(be);if(be.version!==Ie.__version||ve===!0){i.activeTexture(s.TEXTURE0+ee);const Fe=Nt.getPrimaries(Nt.workingColorSpace),Y=M.colorSpace===la?null:Nt.getPrimaries(M.colorSpace),Re=M.colorSpace===la||Fe===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Oe=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,we=[];for(let Te=0;Te<6;Te++)!Oe&&!ke?we[Te]=S(M.image[Te],!0,l.maxCubemapSize):we[Te]=ke?M.image[Te].image:M.image[Te],we[Te]=Ce(M,we[Te]);const rt=we[0],ht=c.convert(M.format,M.colorSpace),yt=c.convert(M.type),Rt=L(M.internalFormat,ht,yt,M.normalized,M.colorSpace),W=M.isVideoTexture!==!0,he=Ie.__version===void 0||ve===!0,Pe=be.dataReady;let Ye=N(M,rt);Ne(s.TEXTURE_CUBE_MAP,M);let Be;if(Oe){W&&he&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Rt,rt.width,rt.height);for(let Te=0;Te<6;Te++){Be=we[Te].mipmaps;for(let Je=0;Je<Be.length;Je++){const at=Be[Je];M.format!==Ri?ht!==null?W?Pe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,at.width,at.height,ht,at.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,Rt,at.width,at.height,0,at.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,0,0,at.width,at.height,ht,yt,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je,Rt,at.width,at.height,0,ht,yt,at.data)}}}else{if(Be=M.mipmaps,W&&he){Be.length>0&&Ye++;const Te=Mt(we[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Rt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ke){W?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,we[Te].width,we[Te].height,ht,yt,we[Te].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Rt,we[Te].width,we[Te].height,0,ht,yt,we[Te].data);for(let Je=0;Je<Be.length;Je++){const at=Be[Je].image[Te].image;W?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,at.width,at.height,ht,yt,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,Rt,at.width,at.height,0,ht,yt,at.data)}}else{W?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ht,yt,we[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Rt,ht,yt,we[Te]);for(let Je=0;Je<Be.length;Je++){const at=Be[Je];W?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,0,0,ht,yt,at.image[Te]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Je+1,Rt,ht,yt,at.image[Te])}}}b(M)&&C(s.TEXTURE_CUBE_MAP),Ie.__version=be.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ze(R,M,ee,ve,be,Ie){const Fe=c.convert(ee.format,ee.colorSpace),Y=c.convert(ee.type),Re=L(ee.internalFormat,Fe,Y,ee.normalized,ee.colorSpace),Oe=a.get(M),ke=a.get(ee);if(ke.__renderTarget=M,!Oe.__hasExternalTextures){const we=Math.max(1,M.width>>Ie),rt=Math.max(1,M.height>>Ie);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,Ie,Re,we,rt,M.depth,0,Fe,Y,null):i.texImage2D(be,Ie,Re,we,rt,0,Fe,Y,null)}i.bindFramebuffer(s.FRAMEBUFFER,R),et(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,be,ke.__webglTexture,0,ft(M)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ve,be,ke.__webglTexture,Ie),i.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(R,M,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const ve=M.depthTexture,be=ve&&ve.isDepthTexture?ve.type:null,Ie=V(M.stencilBuffer,be),Fe=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;et(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(M),Ie,M.width,M.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(M),Ie,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ie,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Fe,s.RENDERBUFFER,R)}else{const ve=M.textures;for(let be=0;be<ve.length;be++){const Ie=ve[be],Fe=c.convert(Ie.format,Ie.colorSpace),Y=c.convert(Ie.type),Re=L(Ie.internalFormat,Fe,Y,Ie.normalized,Ie.colorSpace);et(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(M),Re,M.width,M.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(M),Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(R,M,ee){const ve=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=a.get(M.depthTexture);if(be.__renderTarget=M,(!be.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ve){if(be.__webglInit===void 0&&(be.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),be.__webglTexture===void 0){be.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M.depthTexture);const Oe=c.convert(M.depthTexture.format),ke=c.convert(M.depthTexture.type);let we;M.depthTexture.format===wn?we=s.DEPTH_COMPONENT24:M.depthTexture.format===Ba&&(we=s.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,we,M.width,M.height,0,Oe,ke,null)}}else re(M.depthTexture,0);const Ie=be.__webglTexture,Fe=ft(M),Y=ve?s.TEXTURE_CUBE_MAP_POSITIVE_X+ee:s.TEXTURE_2D,Re=M.depthTexture.format===Ba?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===wn)et(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,Y,Ie,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,Re,Y,Ie,0);else if(M.depthTexture.format===Ba)et(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,Y,Ie,0,Fe):s.framebufferTexture2D(s.FRAMEBUFFER,Re,Y,Ie,0);else throw new Error("Unknown depthTexture format")}function Me(R){const M=a.get(R),ee=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ve=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ve){const be=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ve.removeEventListener("dispose",be)};ve.addEventListener("dispose",be),M.__depthDisposeCallback=be}M.__boundDepthTexture=ve}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(ee)for(let ve=0;ve<6;ve++)Ee(M.__webglFramebuffer[ve],R,ve);else{const ve=R.texture.mipmaps;ve&&ve.length>0?Ee(M.__webglFramebuffer[0],R,0):Ee(M.__webglFramebuffer,R,0)}else if(ee){M.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ve]),M.__webglDepthbuffer[ve]===void 0)M.__webglDepthbuffer[ve]=s.createRenderbuffer(),dt(M.__webglDepthbuffer[ve],R,!1);else{const be=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=M.__webglDepthbuffer[ve];s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,Ie)}}else{const ve=R.texture.mipmaps;if(ve&&ve.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),dt(M.__webglDepthbuffer,R,!1);else{const be=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,Ie)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function De(R,M,ee){const ve=a.get(R);M!==void 0&&ze(ve.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Me(R)}function He(R){const M=R.texture,ee=a.get(R),ve=a.get(M);R.addEventListener("dispose",w);const be=R.textures,Ie=R.isWebGLCubeRenderTarget===!0,Fe=be.length>1;if(Fe||(ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture()),ve.__version=M.version,d.memory.textures++),Ie){ee.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer[Y]=[];for(let Re=0;Re<M.mipmaps.length;Re++)ee.__webglFramebuffer[Y][Re]=s.createFramebuffer()}else ee.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)ee.__webglFramebuffer[Y]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Fe)for(let Y=0,Re=be.length;Y<Re;Y++){const Oe=a.get(be[Y]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),d.memory.textures++)}if(R.samples>0&&et(R)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Y=0;Y<be.length;Y++){const Re=be[Y];ee.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Y]);const Oe=c.convert(Re.format,Re.colorSpace),ke=c.convert(Re.type),we=L(Re.internalFormat,Oe,ke,Re.normalized,Re.colorSpace,R.isXRRenderTarget===!0),rt=ft(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,we,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(ee.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ie){i.bindTexture(s.TEXTURE_CUBE_MAP,ve.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ze(ee.__webglFramebuffer[Y][Re],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re);else ze(ee.__webglFramebuffer[Y],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);b(M)&&C(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let Y=0,Re=be.length;Y<Re;Y++){const Oe=be[Y],ke=a.get(Oe);let we=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,ke.__webglTexture),Ne(we,Oe),ze(ee.__webglFramebuffer,R,Oe,s.COLOR_ATTACHMENT0+Y,we,0),b(Oe)&&C(we)}i.unbindTexture()}else{let Y=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Y,ve.__webglTexture),Ne(Y,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)ze(ee.__webglFramebuffer[Re],R,M,s.COLOR_ATTACHMENT0,Y,Re);else ze(ee.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,Y,0);b(M)&&C(Y),i.unbindTexture()}R.depthBuffer&&Me(R)}function We(R){const M=R.textures;for(let ee=0,ve=M.length;ee<ve;ee++){const be=M[ee];if(b(be)){const Ie=D(R),Fe=a.get(be).__webglTexture;i.bindTexture(Ie,Fe),C(Ie),i.unbindTexture()}}}const $e=[],nt=[];function H(R){if(R.samples>0){if(et(R)===!1){const M=R.textures,ee=R.width,ve=R.height;let be=s.COLOR_BUFFER_BIT;const Ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=a.get(R),Y=M.length>1;if(Y)for(let Oe=0;Oe<M.length;Oe++)i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Re=R.texture.mipmaps;Re&&Re.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Oe=0;Oe<M.length;Oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const ke=a.get(M[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,ee,ve,0,0,ee,ve,be,s.NEAREST),m===!0&&($e.length=0,nt.length=0,$e.push(s.COLOR_ATTACHMENT0+Oe),R.depthBuffer&&R.resolveDepthBuffer===!1&&($e.push(Ie),nt.push(Ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let Oe=0;Oe<M.length;Oe++){i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Fe.__webglColorRenderbuffer[Oe]);const ke=a.get(M[Oe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ke,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function ft(R){return Math.min(l.maxSamples,R.samples)}function et(R){const M=a.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function gt(R){const M=d.render.frame;v.get(R)!==M&&(v.set(R,M),R.update())}function Ce(R,M){const ee=R.colorSpace,ve=R.format,be=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ee!==tu&&ee!==la&&(Nt.getTransfer(ee)===Gt?(ve!==Ri||be!==oi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",ee)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=U,this.resetTextureUnits=ue,this.getTextureUnits=oe,this.setTextureUnits=q,this.setTexture2D=re,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=I,this.rebindTextures=De,this.setupRenderTarget=He,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function h2(s,e){function i(a,l=la){let c;const d=Nt.getTransfer(l);if(a===oi)return s.UNSIGNED_BYTE;if(a===tp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===rp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===w_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===T_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===M_)return s.BYTE;if(a===E_)return s.SHORT;if(a===tl)return s.UNSIGNED_SHORT;if(a===ep)return s.INT;if(a===Wi)return s.UNSIGNED_INT;if(a===zi)return s.FLOAT;if(a===En)return s.HALF_FLOAT;if(a===A_)return s.ALPHA;if(a===C_)return s.RGB;if(a===Ri)return s.RGBA;if(a===wn)return s.DEPTH_COMPONENT;if(a===Ba)return s.DEPTH_STENCIL;if(a===R_)return s.RED;if(a===ip)return s.RED_INTEGER;if(a===Va)return s.RG;if(a===np)return s.RG_INTEGER;if(a===ap)return s.RGBA_INTEGER;if(a===Yc||a===Kc||a===Zc||a===$c)if(d===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fh||a===hh||a===ph||a===mh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ph)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===mh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===gh||a===vh||a===_h||a===yh||a===xh||a===Jc||a===bh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===gh||a===vh)return d===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===_h)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===yh)return c.COMPRESSED_R11_EAC;if(a===xh)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Jc)return c.COMPRESSED_RG11_EAC;if(a===bh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Sh||a===Mh||a===Eh||a===wh||a===Th||a===Ah||a===Ch||a===Rh||a===Ph||a===Nh||a===Lh||a===Dh||a===Uh||a===Ih)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Sh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Mh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Eh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===wh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Th)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ah)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ch)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Rh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ph)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Nh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Lh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Uh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ih)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Oh||a===kh||a===Fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Oh)return d===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===zh||a===Bh||a===eu||a===Hh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===zh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===eu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Hh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===rl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
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

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new W_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new Xi({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ji(new au(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends Wa{constructor(e,i){super();const a=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,y=null,g=null,x=null,E=null;const P=typeof XRWebGLBinding<"u",S=new g2,b={},C=i.getContextAttributes();let D=null,L=null;const V=[],N=[],F=new je;let w=null;const k=new si;k.viewport=new pr;const X=new si;X.viewport=new pr;const O=[k,X],G=new TS;let ue=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ye=V[se];return ye===void 0&&(ye=new Ef,V[se]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(se){let ye=V[se];return ye===void 0&&(ye=new Ef,V[se]=ye),ye.getGripSpace()},this.getHand=function(se){let ye=V[se];return ye===void 0&&(ye=new Ef,V[se]=ye),ye.getHandSpace()};function q(se){const ye=N.indexOf(se.inputSource);if(ye===-1)return;const Se=V[ye];Se!==void 0&&(Se.update(se.inputSource,se.frame,p||d),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function U(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",z);for(let se=0;se<V.length;se++){const ye=N[se];ye!==null&&(N[se]=null,V[se].disconnect(ye))}ue=null,oe=null,S.reset();for(const se in b)delete b[se];e.setRenderTarget(D),x=null,g=null,y=null,l=null,L=null,Ne.stop(),a.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,a.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,a.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return y===null&&P&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",U),l.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await i.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Se=null,Le=null;C.depth&&(Le=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=C.stencil?Ba:wn,Se=C.stencil?rl:Wi);const lt={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(lt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new Vi(g.textureWidth,g.textureHeight,{format:Ri,type:oi,depthTexture:new Vs(g.textureWidth,g.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Vi(x.framebufferWidth,x.framebufferHeight,{format:Ri,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ne.setContext(l),Ne.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function z(se){for(let ye=0;ye<se.removed.length;ye++){const Se=se.removed[ye],Le=N.indexOf(Se);Le>=0&&(N[Le]=null,V[Le].disconnect(Se))}for(let ye=0;ye<se.added.length;ye++){const Se=se.added[ye];let Le=N.indexOf(Se);if(Le===-1){for(let ze=0;ze<V.length;ze++)if(ze>=N.length){N.push(Se),Le=ze;break}else if(N[ze]===null){N[ze]=Se,Le=ze;break}if(Le===-1)break}const lt=V[Le];lt&&lt.connect(Se)}}const re=new Q,fe=new Q;function pe(se,ye,Se){re.setFromMatrixPosition(ye.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const Le=re.distanceTo(fe),lt=ye.projectionMatrix.elements,ze=Se.projectionMatrix.elements,dt=lt[14]/(lt[10]-1),Ee=lt[14]/(lt[10]+1),Me=(lt[9]+1)/lt[5],De=(lt[9]-1)/lt[5],He=(lt[8]-1)/lt[0],We=(ze[8]+1)/ze[0],$e=dt*He,nt=dt*We,H=Le/(-He+We),ft=H*-He;if(ye.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ft),se.translateZ(H),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),lt[10]===-1)se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const et=dt+H,gt=Ee+H,Ce=$e-ft,Mt=nt+(Le-ft),R=Me*Ee/gt*et,M=De*Ee/gt*et;se.projectionMatrix.makePerspective(Ce,Mt,R,M,et,gt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function I(se,ye){ye===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ye.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let ye=se.near,Se=se.far;S.texture!==null&&(S.depthNear>0&&(ye=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),G.near=X.near=k.near=ye,G.far=X.far=k.far=Se,(ue!==G.near||oe!==G.far)&&(l.updateRenderState({depthNear:G.near,depthFar:G.far}),ue=G.near,oe=G.far),G.layers.mask=se.layers.mask|6,k.layers.mask=G.layers.mask&-5,X.layers.mask=G.layers.mask&-3;const Le=se.parent,lt=G.cameras;I(G,Le);for(let ze=0;ze<lt.length;ze++)I(lt[ze],Le);lt.length===2?pe(G,k,X):G.projectionMatrix.copy(k.projectionMatrix),J(se,G,Le)};function J(se,ye,Se){Se===null?se.matrix.copy(ye.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(ye.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ye.projectionMatrix),se.projectionMatrixInverse.copy(ye.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Wh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&x===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(G)},this.getCameraTexture=function(se){return b[se]};let ge=null;function Ae(se,ye){if(v=ye.getViewerPose(p||d),E=ye,v!==null){const Se=v.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let Le=!1;Se.length!==G.cameras.length&&(G.cameras.length=0,Le=!0);for(let ze=0;ze<Se.length;ze++){const dt=Se[ze];let Ee=null;if(x!==null)Ee=x.getViewport(dt);else{const De=y.getViewSubImage(g,dt);Ee=De.viewport,ze===0&&(e.setRenderTargetTextures(L,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(L))}let Me=O[ze];Me===void 0&&(Me=new si,Me.layers.enable(ze),Me.viewport=new pr,O[ze]=Me),Me.matrix.fromArray(dt.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(dt.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ze===0&&(G.matrix.copy(Me.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Le===!0&&G.cameras.push(Me)}const lt=l.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&P){y=a.getBinding();const ze=y.getDepthInformation(Se[0]);ze&&ze.isValid&&ze.texture&&S.init(ze,l.renderState)}if(lt&&lt.includes("camera-access")&&P){e.state.unbindTexture(),y=a.getBinding();for(let ze=0;ze<Se.length;ze++){const dt=Se[ze].camera;if(dt){let Ee=b[dt];Ee||(Ee=new W_,b[dt]=Ee);const Me=y.getCameraImage(dt);Ee.sourceTexture=Me}}}}for(let Se=0;Se<V.length;Se++){const Le=N[Se],lt=V[Se];Le!==null&&lt!==void 0&&lt.update(Le,ye,p||d)}ge&&ge(se,ye),ye.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ne=new iy;Ne.setAnimationLoop(Ae),this.setAnimationLoop=function(se){ge=se},this.dispose=function(){}}}const _2=new mr,uy=new _t;uy.set(-1,0,0,0,1,0,0,0,1);function y2(s,e){function i(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function a(S,b){b.color.getRGB(S.fogColor.value,ey(s)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function l(S,b,C,D,L){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?c(S,b):b.isMeshLambertMaterial?(c(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(c(S,b),y(S,b)):b.isMeshPhongMaterial?(c(S,b),v(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(c(S,b),g(S,b),b.isMeshPhysicalMaterial&&x(S,b,L)):b.isMeshMatcapMaterial?(c(S,b),E(S,b)):b.isMeshDepthMaterial?c(S,b):b.isMeshDistanceMaterial?(c(S,b),P(S,b)):b.isMeshNormalMaterial?c(S,b):b.isLineBasicMaterial?(d(S,b),b.isLineDashedMaterial&&h(S,b)):b.isPointsMaterial?m(S,b,C,D):b.isSpriteMaterial?p(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function c(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,i(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===qr&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,i(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===qr&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,i(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,i(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,i(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const C=e.get(b),D=C.envMap,L=C.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(uy),S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,i(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,i(b.aoMap,S.aoMapTransform))}function d(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform))}function h(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function m(S,b,C,D){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*C,S.scale.value=D*.5,b.map&&(S.map.value=b.map,i(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function p(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,i(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,i(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function v(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function y(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function g(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,i(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,i(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function x(S,b,C){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,i(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,i(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,i(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,i(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,i(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===qr&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,i(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,i(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,i(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,i(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,i(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,i(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,i(b.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,b){b.matcap&&(S.matcap.value=b.matcap)}function P(S,b){const C=e.get(b).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function x2(s,e,i,a){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,D){const L=D.program;a.uniformBlockBinding(C,L)}function p(C,D){let L=l[C.id];L===void 0&&(E(C),L=v(C),l[C.id]=L,C.addEventListener("dispose",S));const V=D.program;a.updateUBOMapping(C,V);const N=e.render.frame;c[C.id]!==N&&(g(C),c[C.id]=N)}function v(C){const D=y();C.__bindingPointIndex=D;const L=s.createBuffer(),V=C.__size,N=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,V,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,L),L}function y(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=l[C.id],L=C.uniforms,V=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let N=0,F=L.length;N<F;N++){const w=Array.isArray(L[N])?L[N]:[L[N]];for(let k=0,X=w.length;k<X;k++){const O=w[k];if(x(O,N,k,V)===!0){const G=O.__offset,ue=Array.isArray(O.value)?O.value:[O.value];let oe=0;for(let q=0;q<ue.length;q++){const U=ue[q],z=P(U);typeof U=="number"||typeof U=="boolean"?(O.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,G+oe,O.__data)):U.isMatrix3?(O.__data[0]=U.elements[0],O.__data[1]=U.elements[1],O.__data[2]=U.elements[2],O.__data[3]=0,O.__data[4]=U.elements[3],O.__data[5]=U.elements[4],O.__data[6]=U.elements[5],O.__data[7]=0,O.__data[8]=U.elements[6],O.__data[9]=U.elements[7],O.__data[10]=U.elements[8],O.__data[11]=0):ArrayBuffer.isView(U)?O.__data.set(new U.constructor(U.buffer,U.byteOffset,O.__data.length)):(U.toArray(O.__data,oe),oe+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(C,D,L,V){const N=C.value,F=D+"_"+L;if(V[F]===void 0)return typeof N=="number"||typeof N=="boolean"?V[F]=N:ArrayBuffer.isView(N)?V[F]=N.slice():V[F]=N.clone(),!0;{const w=V[F];if(typeof N=="number"||typeof N=="boolean"){if(w!==N)return V[F]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(w.equals(N)===!1)return w.copy(N),!0}}return!1}function E(C){const D=C.uniforms;let L=0;const V=16;for(let F=0,w=D.length;F<w;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let X=0,O=k.length;X<O;X++){const G=k[X],ue=Array.isArray(G.value)?G.value:[G.value];for(let oe=0,q=ue.length;oe<q;oe++){const U=ue[oe],z=P(U),re=L%V,fe=re%z.boundary,pe=re+fe;L+=fe,pe!==0&&V-pe<z.storage&&(L+=V-pe),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=L,L+=z.storage}}}const N=L%V;return N>0&&(L+=V-N),C.__size=L,C.__cache={},this}function P(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",C),D}function S(C){const D=C.target;D.removeEventListener("dispose",S);const L=d.indexOf(D.__bindingPointIndex);d.splice(L,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function b(){for(const C in l)s.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:p,dispose:b}}const b2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function S2(){return Oi===null&&(Oi=new Pb(b2,16,16,Va,En),Oi.name="DFG_LUT",Oi.minFilter=Ir,Oi.magFilter=Ir,Oi.wrapS=bn,Oi.wrapT=bn,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class M2{constructor(e={}){const{canvas:i=sb(),context:a=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:x=oi}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=d;const P=x,S=new Set([ap,np,ip]),b=new Set([oi,Wi,tl,rl,tp,rp]),C=new Uint32Array(4),D=new Int32Array(4),L=new Q;let V=null,N=null;const F=[],w=[];let k=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let O=!1,G=null;this._outputColorSpace=vi;let ue=0,oe=0,q=null,U=-1,z=null;const re=new pr,fe=new pr;let pe=null;const I=new Ut(0);let J=0,ge=i.width,Ae=i.height,Ne=1,se=null,ye=null;const Se=new pr(0,0,ge,Ae),Le=new pr(0,0,ge,Ae);let lt=!1;const ze=new dp;let dt=!1,Ee=!1;const Me=new mr,De=new Q,He=new pr,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function nt(){return q===null?Ne:1}let H=a;function ft(T,K){return i.getContext(T,K)}try{const T={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qh}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",Je,!1),i.addEventListener("webglcontextcreationerror",at,!1),H===null){const K="webgl2";if(H=ft(K,T),H===null)throw ft(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Dt("WebGLRenderer: "+T.message),T}let et,gt,Ce,Mt,R,M,ee,ve,be,Ie,Fe,Y,Re,Oe,ke,we,rt,ht,yt,Rt,W,he,Pe;function Ye(){et=new Sw(H),et.init(),W=new h2(H,et),gt=new pw(H,et,e,W),Ce=new d2(H,et),gt.reversedDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Mt=new ww(H),R=new $T,M=new f2(H,et,Ce,R,gt,W,Mt),ee=new bw(X),ve=new RS(H),he=new fw(H,ve),be=new Mw(H,ve,Mt,he),Ie=new Aw(H,be,ve,he,Mt),ht=new Tw(H,gt,M),ke=new mw(R),Fe=new ZT(X,ee,et,gt,he,ke),Y=new y2(X,R),Re=new JT,Oe=new a2(et),rt=new dw(X,ee,Ce,Ie,E,m),we=new u2(X,Ie,gt),Pe=new x2(H,Mt,gt,Ce),yt=new hw(H,et,Mt),Rt=new Ew(H,et,Mt),Mt.programs=Fe.programs,X.capabilities=gt,X.extensions=et,X.properties=R,X.renderLists=Re,X.shadowMap=we,X.state=Ce,X.info=Mt}Ye(),P!==oi&&(k=new Rw(P,i.width,i.height,l,c));const Be=new v2(X,H);this.xr=Be,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(T){T!==void 0&&(Ne=T,this.setSize(ge,Ae,!1))},this.getSize=function(T){return T.set(ge,Ae)},this.setSize=function(T,K,le=!0){if(Be.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=T,Ae=K,i.width=Math.floor(T*Ne),i.height=Math.floor(K*Ne),le===!0&&(i.style.width=T+"px",i.style.height=K+"px"),k!==null&&k.setSize(i.width,i.height),this.setViewport(0,0,T,K)},this.getDrawingBufferSize=function(T){return T.set(ge*Ne,Ae*Ne).floor()},this.setDrawingBufferSize=function(T,K,le){ge=T,Ae=K,Ne=le,i.width=Math.floor(T*le),i.height=Math.floor(K*le),this.setViewport(0,0,T,K)},this.setEffects=function(T){if(P===oi){Dt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let K=0;K<T.length;K++)if(T[K].isOutputPass===!0){ut("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,K,le,ae){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,K,le,ae),Ce.viewport(re.copy(Se).multiplyScalar(Ne).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,K,le,ae){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,K,le,ae),Ce.scissor(fe.copy(Le).multiplyScalar(Ne).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(T){Ce.setScissorTest(lt=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){ye=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(T=!0,K=!0,le=!0){let ae=0;if(T){let te=!1;if(q!==null){const Ue=q.texture.format;te=S.has(Ue)}if(te){const Ue=q.texture.type,Ge=b.has(Ue),Xe=rt.getClearColor(),qe=rt.getClearAlpha(),tt=Xe.r,ot=Xe.g,bt=Xe.b;Ge?(C[0]=tt,C[1]=ot,C[2]=bt,C[3]=qe,H.clearBufferuiv(H.COLOR,0,C)):(D[0]=tt,D[1]=ot,D[2]=bt,D[3]=qe,H.clearBufferiv(H.COLOR,0,D))}else ae|=H.COLOR_BUFFER_BIT}K&&(ae|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ae|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&H.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),G=T},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",Je,!1),i.removeEventListener("webglcontextcreationerror",at,!1),rt.dispose(),Re.dispose(),Oe.dispose(),R.dispose(),ee.dispose(),Ie.dispose(),he.dispose(),Pe.dispose(),Fe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Ks),Be.removeEventListener("sessionend",Zs),Pr.stop()};function Te(T){T.preventDefault(),_0("WebGLRenderer: Context Lost."),O=!0}function Je(){_0("WebGLRenderer: Context Restored."),O=!1;const T=Mt.autoReset,K=we.enabled,le=we.autoUpdate,ae=we.needsUpdate,te=we.type;Ye(),Mt.autoReset=T,we.enabled=K,we.autoUpdate=le,we.needsUpdate=ae,we.type=te}function at(T){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mr(T){const K=T.target;K.removeEventListener("dispose",Mr),Wt(K)}function Wt(T){li(T),R.remove(T)}function li(T){const K=R.get(T).programs;K!==void 0&&(K.forEach(function(le){Fe.releaseProgram(le)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,K,le,ae,te,Ue){K===null&&(K=We);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Xe=Rn(T,K,le,ae,te);Ce.setMaterial(ae,Ge);let qe=le.index,tt=1;if(ae.wireframe===!0){if(qe=be.getWireframeAttribute(le),qe===void 0)return;tt=2}const ot=le.drawRange,bt=le.attributes.position;let st=ot.start*tt,zt=(ot.start+ot.count)*tt;Ue!==null&&(st=Math.max(st,Ue.start*tt),zt=Math.min(zt,(Ue.start+Ue.count)*tt)),qe!==null?(st=Math.max(st,0),zt=Math.min(zt,qe.count)):bt!=null&&(st=Math.max(st,0),zt=Math.min(zt,bt.count));const Jt=zt-st;if(Jt<0||Jt===1/0)return;he.setup(te,ae,Xe,le,qe);let jt,Xt=yt;if(qe!==null&&(jt=ve.get(qe),Xt=Rt,Xt.setIndex(jt)),te.isMesh)ae.wireframe===!0?(Ce.setLineWidth(ae.wireframeLinewidth*nt()),Xt.setMode(H.LINES)):Xt.setMode(H.TRIANGLES);else if(te.isLine){let Lt=ae.linewidth;Lt===void 0&&(Lt=1),Ce.setLineWidth(Lt*nt()),te.isLineSegments?Xt.setMode(H.LINES):te.isLineLoop?Xt.setMode(H.LINE_LOOP):Xt.setMode(H.LINE_STRIP)}else te.isPoints?Xt.setMode(H.POINTS):te.isSprite&&Xt.setMode(H.TRIANGLES);if(te.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Xt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Lt=te._multiDrawStarts,Ke=te._multiDrawCounts,Nr=te._multiDrawCount,_i=qe?ve.get(qe).bytesPerElement:1,gr=R.get(ae).currentProgram.getUniforms();for(let Kr=0;Kr<Nr;Kr++)gr.setValue(H,"_gl_DrawID",Kr),Xt.render(Lt[Kr]/_i,Ke[Kr])}else if(te.isInstancedMesh)Xt.renderInstances(st,Jt,te.count);else if(le.isInstancedBufferGeometry){const Lt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ke=Math.min(le.instanceCount,Lt);Xt.renderInstances(st,Jt,Ke)}else Xt.render(st,Jt)};function Yr(T,K,le){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=qr,T.needsUpdate=!0,ja(T,K,le),T.side=ua,T.needsUpdate=!0,ja(T,K,le),T.side=xn):ja(T,K,le)}this.compile=function(T,K,le=null){le===null&&(le=T),N=Oe.get(le),N.init(K),w.push(N),le.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),T!==le&&T.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights();const ae=new Set;return T.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let Ge=0;Ge<Ue.length;Ge++){const Xe=Ue[Ge];Yr(Xe,le,te),ae.add(Xe)}else Yr(Ue,le,te),ae.add(Ue)}),N=w.pop(),ae},this.compileAsync=function(T,K,le=null){const ae=this.compile(T,K,le);return new Promise(te=>{function Ue(){if(ae.forEach(function(Ge){R.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){te(T);return}setTimeout(Ue,10)}et.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let fa=null;function Ys(T){fa&&fa(T)}function Ks(){Pr.stop()}function Zs(){Pr.start()}const Pr=new iy;Pr.setAnimationLoop(Ys),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(T){fa=T,Be.setAnimationLoop(T),T===null?Pr.stop():Pr.start()},Be.addEventListener("sessionstart",Ks),Be.addEventListener("sessionend",Zs),this.render=function(T,K){if(K!==void 0&&K.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(T,K);const le=Be.enabled===!0&&Be.isPresenting===!0,ae=k!==null&&(q===null||le)&&k.begin(X,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(K),K=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(X,T,K,q),N=Oe.get(T,w.length),N.init(K),N.state.textureUnits=M.getTextureUnits(),w.push(N),Me.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ze.setFromProjectionMatrix(Me,Bi,K.reversedDepth),Ee=this.localClippingEnabled,dt=ke.init(this.clippingPlanes,Ee),V=Re.get(T,F.length),V.init(),F.push(V),Be.enabled===!0&&Be.isPresenting===!0){const Ue=X.xr.getDepthSensingMesh();Ue!==null&&ar(Ue,K,-1/0,X.sortObjects)}ar(T,K,0,X.sortObjects),V.finish(),X.sortObjects===!0&&V.sort(se,ye),$e=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,$e&&rt.addToRenderList(V,T),this.info.render.frame++,dt===!0&&ke.beginShadows();const te=N.state.shadowsArray;if(we.render(te,T,K),dt===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&k.hasRenderPass())===!1){const Ue=V.opaque,Ge=V.transmissive;if(N.setupLights(),K.isArrayCamera){const Xe=K.cameras;if(Ge.length>0)for(let qe=0,tt=Xe.length;qe<tt;qe++){const ot=Xe[qe];Zi(Ue,Ge,T,ot)}$e&&rt.render(T);for(let qe=0,tt=Xe.length;qe<tt;qe++){const ot=Xe[qe];Er(V,T,ot,ot.viewport)}}else Ge.length>0&&Zi(Ue,Ge,T,K),$e&&rt.render(T),Er(V,T,K)}q!==null&&oe===0&&(M.updateMultisampleRenderTarget(q),M.updateRenderTargetMipmap(q)),ae&&k.end(X),T.isScene===!0&&T.onAfterRender(X,T,K),he.resetDefaultState(),U=-1,z=null,w.pop(),w.length>0?(N=w[w.length-1],M.setTextureUnits(N.state.textureUnits),dt===!0&&ke.setGlobalState(X.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?V=F[F.length-1]:V=null,G!==null&&G.renderEnd()};function ar(T,K,le,ae){if(T.visible===!1)return;if(T.layers.test(K.layers)){if(T.isGroup)le=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(K);else if(T.isLightProbeGrid)N.pushLightProbeGrid(T);else if(T.isLight)N.pushLight(T),T.castShadow&&N.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){ae&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Me);const Ue=Ie.update(T),Ge=T.material;Ge.visible&&V.push(T,Ue,Ge,le,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const Ue=Ie.update(T),Ge=T.material;if(ae&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),He.copy(Ue.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(Me)),Array.isArray(Ge)){const Xe=Ue.groups;for(let qe=0,tt=Xe.length;qe<tt;qe++){const ot=Xe[qe],bt=Ge[ot.materialIndex];bt&&bt.visible&&V.push(T,Ue,bt,le,He.z,ot)}}else Ge.visible&&V.push(T,Ue,Ge,le,He.z,null)}}const te=T.children;for(let Ue=0,Ge=te.length;Ue<Ge;Ue++)ar(te[Ue],K,le,ae)}function Er(T,K,le,ae){const{opaque:te,transmissive:Ue,transparent:Ge}=T;N.setupLightsView(le),dt===!0&&ke.setGlobalState(X.clippingPlanes,le),ae&&Ce.viewport(re.copy(ae)),te.length>0&&An(te,K,le),Ue.length>0&&An(Ue,K,le),Ge.length>0&&An(Ge,K,le),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Zi(T,K,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ae.id]===void 0){const bt=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ae.id]=new Vi(1,1,{generateMipmaps:!0,type:bt?En:oi,minFilter:za,samples:Math.max(4,gt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const te=N.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||re;te.setSize(Ue.z*X.transmissionResolutionScale,Ue.w*X.transmissionResolutionScale);const Ge=X.getRenderTarget(),Xe=X.getActiveCubeFace(),qe=X.getActiveMipmapLevel();X.setRenderTarget(te),X.getClearColor(I),J=X.getClearAlpha(),J<1&&X.setClearColor(16777215,.5),X.clear(),$e&&rt.render(le);const tt=X.toneMapping;X.toneMapping=Hi;const ot=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),N.setupLightsView(ae),dt===!0&&ke.setGlobalState(X.clippingPlanes,ae),An(T,le,ae),M.updateMultisampleRenderTarget(te),M.updateRenderTargetMipmap(te),et.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let st=0,zt=K.length;st<zt;st++){const Jt=K[st],{object:jt,geometry:Xt,material:Lt,group:Ke}=Jt;if(Lt.side===xn&&jt.layers.test(ae.layers)){const Nr=Lt.side;Lt.side=qr,Lt.needsUpdate=!0,ul(jt,le,ae,Xt,Lt,Ke),Lt.side=Nr,Lt.needsUpdate=!0,bt=!0}}bt===!0&&(M.updateMultisampleRenderTarget(te),M.updateRenderTargetMipmap(te))}X.setRenderTarget(Ge,Xe,qe),X.setClearColor(I,J),ot!==void 0&&(ae.viewport=ot),X.toneMapping=tt}function An(T,K,le){const ae=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Ue=T.length;te<Ue;te++){const Ge=T[te],{object:Xe,geometry:qe,group:tt}=Ge;let ot=Ge.material;ot.allowOverride===!0&&ae!==null&&(ot=ae),Xe.layers.test(le.layers)&&ul(Xe,K,le,qe,ot,tt)}}function ul(T,K,le,ae,te,Ue){T.onBeforeRender(X,K,le,ae,te,Ue),T.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),te.onBeforeRender(X,K,le,ae,T,Ue),te.transparent===!0&&te.side===xn&&te.forceSinglePass===!1?(te.side=qr,te.needsUpdate=!0,X.renderBufferDirect(le,K,ae,te,T,Ue),te.side=ua,te.needsUpdate=!0,X.renderBufferDirect(le,K,ae,te,T,Ue),te.side=xn):X.renderBufferDirect(le,K,ae,te,T,Ue),T.onAfterRender(X,K,le,ae,te,Ue)}function ja(T,K,le){K.isScene!==!0&&(K=We);const ae=R.get(T),te=N.state.lights,Ue=N.state.shadowsArray,Ge=te.state.version,Xe=Fe.getParameters(T,te.state,Ue,K,le,N.state.lightProbeGridArray),qe=Fe.getProgramCacheKey(Xe);let tt=ae.programs;ae.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?K.environment:null,ae.fog=K.fog;const ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ae.envMap=ee.get(T.envMap||ae.environment,ot),ae.envMapRotation=ae.environment!==null&&T.envMap===null?K.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",Mr),tt=new Map,ae.programs=tt);let bt=tt.get(qe);if(bt!==void 0){if(ae.currentProgram===bt&&ae.lightsStateVersion===Ge)return Cn(T,Xe),bt}else Xe.uniforms=Fe.getUniforms(T),G!==null&&T.isNodeMaterial&&G.build(T,le,Xe),T.onBeforeCompile(Xe,X),bt=Fe.acquireProgram(Xe,qe),tt.set(qe,bt),ae.uniforms=Xe.uniforms;const st=ae.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(st.clippingPlanes=ke.uniform),Cn(T,Xe),ae.needsLights=ha(T),ae.lightsStateVersion=Ge,ae.needsLights&&(st.ambientLightColor.value=te.state.ambient,st.lightProbe.value=te.state.probe,st.directionalLights.value=te.state.directional,st.directionalLightShadows.value=te.state.directionalShadow,st.spotLights.value=te.state.spot,st.spotLightShadows.value=te.state.spotShadow,st.rectAreaLights.value=te.state.rectArea,st.ltc_1.value=te.state.rectAreaLTC1,st.ltc_2.value=te.state.rectAreaLTC2,st.pointLights.value=te.state.point,st.pointLightShadows.value=te.state.pointShadow,st.hemisphereLights.value=te.state.hemi,st.directionalShadowMatrix.value=te.state.directionalShadowMatrix,st.spotLightMatrix.value=te.state.spotLightMatrix,st.spotLightMap.value=te.state.spotLightMap,st.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.lightProbeGrid=N.state.lightProbeGridArray.length>0,ae.currentProgram=bt,ae.uniformsList=null,bt}function $s(T){if(T.uniformsList===null){const K=T.currentProgram.getUniforms();T.uniformsList=Qc.seqWithValue(K.seq,T.uniforms)}return T.uniformsList}function Cn(T,K){const le=R.get(T);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Qs(T,K){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;L.setFromMatrixPosition(K.matrixWorld);for(let le=0,ae=T.length;le<ae;le++){const te=T[le];if(te.texture!==null&&te.boundingBox.containsPoint(L))return te}return null}function Rn(T,K,le,ae,te){K.isScene!==!0&&(K=We),M.resetTextureUnits();const Ue=K.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?K.environment:null,Xe=q===null?X.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Nt.workingColorSpace,qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,tt=ee.get(ae.envMap||Ge,qe),ot=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,bt=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),st=!!le.morphAttributes.position,zt=!!le.morphAttributes.normal,Jt=!!le.morphAttributes.color;let jt=Hi;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(jt=X.toneMapping);const Xt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Lt=Xt!==void 0?Xt.length:0,Ke=R.get(ae),Nr=N.state.lights;if(dt===!0&&(Ee===!0||T!==z)){const It=T===z&&ae.id===U;ke.setState(ae,T,It)}let _i=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Nr.state.version||Ke.outputColorSpace!==Xe||te.isBatchedMesh&&Ke.batching===!1||!te.isBatchedMesh&&Ke.batching===!0||te.isBatchedMesh&&Ke.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ke.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||te.isInstancedMesh&&Ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ke.instancingMorph===!1&&te.morphTexture!==null||Ke.envMap!==tt||ae.fog===!0&&Ke.fog!==Ue||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ke.numPlanes||Ke.numIntersection!==ke.numIntersection)||Ke.vertexAlphas!==ot||Ke.vertexTangents!==bt||Ke.morphTargets!==st||Ke.morphNormals!==zt||Ke.morphColors!==Jt||Ke.toneMapping!==jt||Ke.morphTargetsCount!==Lt||!!Ke.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(_i=!0):(_i=!0,Ke.__version=ae.version);let gr=Ke.currentProgram;_i===!0&&(gr=ja(ae,K,te),G&&ae.isNodeMaterial&&G.onUpdateProgram(ae,gr,Ke));let Kr=!1,yi=!1,Zr=!1;const Bt=gr.getUniforms(),er=Ke.uniforms;if(Ce.useProgram(gr.program)&&(Kr=!0,yi=!0,Zr=!0),ae.id!==U&&(U=ae.id,yi=!0),Ke.needsLights){const It=Qs(N.state.lightProbeGridArray,te);Ke.lightProbeGrid!==It&&(Ke.lightProbeGrid=It,yi=!0)}if(Kr||z!==T){Ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Bt.setValue(H,"projectionMatrix",T.projectionMatrix),Bt.setValue(H,"viewMatrix",T.matrixWorldInverse);const It=Bt.map.cameraPosition;It!==void 0&&It.setValue(H,De.setFromMatrixPosition(T.matrixWorld)),gt.logarithmicDepthBuffer&&Bt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Bt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,yi=!0,Zr=!0)}if(Ke.needsLights&&(Nr.state.directionalShadowMap.length>0&&Bt.setValue(H,"directionalShadowMap",Nr.state.directionalShadowMap,M),Nr.state.spotShadowMap.length>0&&Bt.setValue(H,"spotShadowMap",Nr.state.spotShadowMap,M),Nr.state.pointShadowMap.length>0&&Bt.setValue(H,"pointShadowMap",Nr.state.pointShadowMap,M)),te.isSkinnedMesh){Bt.setOptional(H,te,"bindMatrix"),Bt.setOptional(H,te,"bindMatrixInverse");const It=te.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Bt.setValue(H,"boneTexture",It.boneTexture,M))}te.isBatchedMesh&&(Bt.setOptional(H,te,"batchingTexture"),Bt.setValue(H,"batchingTexture",te._matricesTexture,M),Bt.setOptional(H,te,"batchingIdTexture"),Bt.setValue(H,"batchingIdTexture",te._indirectTexture,M),Bt.setOptional(H,te,"batchingColorTexture"),te._colorsTexture!==null&&Bt.setValue(H,"batchingColorTexture",te._colorsTexture,M));const xi=le.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&ht.update(te,le,gr),(yi||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,Bt.setValue(H,"receiveShadow",te.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&K.environment!==null&&(er.envMapIntensity.value=K.environmentIntensity),er.dfgLUT!==void 0&&(er.dfgLUT.value=S2()),yi){if(Bt.setValue(H,"toneMappingExposure",X.toneMappingExposure),Ke.needsLights&&Pn(er,Zr),Ue&&ae.fog===!0&&Y.refreshFogUniforms(er,Ue),Y.refreshMaterialUniforms(er,ae,Ne,Ae,N.state.transmissionRenderTarget[T.id]),Ke.needsLights&&Ke.lightProbeGrid){const It=Ke.lightProbeGrid;er.probesSH.value=It.texture,er.probesMin.value.copy(It.boundingBox.min),er.probesMax.value.copy(It.boundingBox.max),er.probesResolution.value.copy(It.resolution)}Qc.upload(H,$s(Ke),er,M)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Qc.upload(H,$s(Ke),er,M),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Bt.setValue(H,"center",te.center),Bt.setValue(H,"modelViewMatrix",te.modelViewMatrix),Bt.setValue(H,"normalMatrix",te.normalMatrix),Bt.setValue(H,"modelMatrix",te.matrixWorld),ae.uniformsGroups!==void 0){const It=ae.uniformsGroups;for(let pa=0,Ln=It.length;pa<Ln;pa++){const ma=It[pa];Pe.update(ma,gr),Pe.bind(ma,gr)}}return gr}function Pn(T,K){T.ambientLightColor.needsUpdate=K,T.lightProbe.needsUpdate=K,T.directionalLights.needsUpdate=K,T.directionalLightShadows.needsUpdate=K,T.pointLights.needsUpdate=K,T.pointLightShadows.needsUpdate=K,T.spotLights.needsUpdate=K,T.spotLightShadows.needsUpdate=K,T.rectAreaLights.needsUpdate=K,T.hemisphereLights.needsUpdate=K}function ha(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,K,le){const ae=R.get(T);ae.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),R.get(T.texture).__webglTexture=K,R.get(T.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,K){const le=R.get(T);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const Nn=H.createFramebuffer();this.setRenderTarget=function(T,K=0,le=0){q=T,ue=K,oe=le;let ae=null,te=!1,Ue=!1;if(T){const Ge=R.get(T);if(Ge.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(H.FRAMEBUFFER,Ge.__webglFramebuffer),re.copy(T.viewport),fe.copy(T.scissor),pe=T.scissorTest,Ce.viewport(re),Ce.scissor(fe),Ce.setScissorTest(pe),U=-1;return}else if(Ge.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Ge.__hasExternalTextures)M.rebindTextures(T,R.get(T.texture).__webglTexture,R.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const tt=T.depthTexture;if(Ge.__boundDepthTexture!==tt){if(tt!==null&&R.has(tt)&&(T.width!==tt.image.width||T.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ue=!0);const qe=R.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[K])?ae=qe[K][le]:ae=qe[K],te=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?ae=R.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?ae=qe[le]:ae=qe,re.copy(T.viewport),fe.copy(T.scissor),pe=T.scissorTest}else re.copy(Se).multiplyScalar(Ne).floor(),fe.copy(Le).multiplyScalar(Ne).floor(),pe=lt;if(le!==0&&(ae=Nn),Ce.bindFramebuffer(H.FRAMEBUFFER,ae)&&Ce.drawBuffers(T,ae),Ce.viewport(re),Ce.scissor(fe),Ce.setScissorTest(pe),te){const Ge=R.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ge.__webglTexture,le)}else if(Ue){const Ge=K;for(let Xe=0;Xe<T.textures.length;Xe++){const qe=R.get(T.textures[Xe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Xe,qe.__webglTexture,le,Ge)}}else if(T!==null&&le!==0){const Ge=R.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ge.__webglTexture,le)}U=-1},this.readRenderTargetPixels=function(T,K,le,ae,te,Ue,Ge,Xe=0){if(!(T&&T.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){Ce.bindFramebuffer(H.FRAMEBUFFER,qe);try{const tt=T.textures[Xe],ot=tt.format,bt=tt.type;if(T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xe),!gt.textureFormatReadable(ot)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(bt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=T.width-ae&&le>=0&&le<=T.height-te&&H.readPixels(K,le,ae,te,W.convert(ot),W.convert(bt),Ue)}finally{const tt=q!==null?R.get(q).__webglFramebuffer:null;Ce.bindFramebuffer(H.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(T,K,le,ae,te,Ue,Ge,Xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=R.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe)if(K>=0&&K<=T.width-ae&&le>=0&&le<=T.height-te){Ce.bindFramebuffer(H.FRAMEBUFFER,qe);const tt=T.textures[Xe],ot=tt.format,bt=tt.type;if(T.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xe),!gt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,st),H.bufferData(H.PIXEL_PACK_BUFFER,Ue.byteLength,H.STREAM_READ),H.readPixels(K,le,ae,te,W.convert(ot),W.convert(bt),0);const zt=q!==null?R.get(q).__webglFramebuffer:null;Ce.bindFramebuffer(H.FRAMEBUFFER,zt);const Jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ob(H,Jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,st),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ue),H.deleteBuffer(st),H.deleteSync(Jt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,K=null,le=0){const ae=Math.pow(2,-le),te=Math.floor(T.image.width*ae),Ue=Math.floor(T.image.height*ae),Ge=K!==null?K.x:0,Xe=K!==null?K.y:0;M.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,le,0,0,Ge,Xe,te,Ue),Ce.unbindTexture()};const lr=H.createFramebuffer(),dl=H.createFramebuffer();this.copyTextureToTexture=function(T,K,le=null,ae=null,te=0,Ue=0){let Ge,Xe,qe,tt,ot,bt,st,zt,Jt;const jt=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(le!==null)Ge=le.max.x-le.min.x,Xe=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,ot=le.min.y,bt=le.isBox3?le.min.z:0;else{const er=Math.pow(2,-te);Ge=Math.floor(jt.width*er),Xe=Math.floor(jt.height*er),T.isDataArrayTexture?qe=jt.depth:T.isData3DTexture?qe=Math.floor(jt.depth*er):qe=1,tt=0,ot=0,bt=0}ae!==null?(st=ae.x,zt=ae.y,Jt=ae.z):(st=0,zt=0,Jt=0);const Xt=W.convert(K.format),Lt=W.convert(K.type);let Ke;K.isData3DTexture?(M.setTexture3D(K,0),Ke=H.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(M.setTexture2DArray(K,0),Ke=H.TEXTURE_2D_ARRAY):(M.setTexture2D(K,0),Ke=H.TEXTURE_2D),Ce.activeTexture(H.TEXTURE0),Ce.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),Ce.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Ce.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const Nr=Ce.getParameter(H.UNPACK_ROW_LENGTH),_i=Ce.getParameter(H.UNPACK_IMAGE_HEIGHT),gr=Ce.getParameter(H.UNPACK_SKIP_PIXELS),Kr=Ce.getParameter(H.UNPACK_SKIP_ROWS),yi=Ce.getParameter(H.UNPACK_SKIP_IMAGES);Ce.pixelStorei(H.UNPACK_ROW_LENGTH,jt.width),Ce.pixelStorei(H.UNPACK_IMAGE_HEIGHT,jt.height),Ce.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),Ce.pixelStorei(H.UNPACK_SKIP_ROWS,ot),Ce.pixelStorei(H.UNPACK_SKIP_IMAGES,bt);const Zr=T.isDataArrayTexture||T.isData3DTexture,Bt=K.isDataArrayTexture||K.isData3DTexture;if(T.isDepthTexture){const er=R.get(T),xi=R.get(K),It=R.get(er.__renderTarget),pa=R.get(xi.__renderTarget);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,It.__webglFramebuffer),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let Ln=0;Ln<qe;Ln++)Zr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(T).__webglTexture,te,bt+Ln),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(K).__webglTexture,Ue,Jt+Ln)),H.blitFramebuffer(tt,ot,Ge,Xe,st,zt,Ge,Xe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(te!==0||T.isRenderTargetTexture||R.has(T)){const er=R.get(T),xi=R.get(K);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,lr),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,dl);for(let It=0;It<qe;It++)Zr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,er.__webglTexture,te,bt+It):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,er.__webglTexture,te),Bt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,xi.__webglTexture,Ue,Jt+It):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xi.__webglTexture,Ue),te!==0?H.blitFramebuffer(tt,ot,Ge,Xe,st,zt,Ge,Xe,H.COLOR_BUFFER_BIT,H.NEAREST):Bt?H.copyTexSubImage3D(Ke,Ue,st,zt,Jt+It,tt,ot,Ge,Xe):H.copyTexSubImage2D(Ke,Ue,st,zt,tt,ot,Ge,Xe);Ce.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Bt?T.isDataTexture||T.isData3DTexture?H.texSubImage3D(Ke,Ue,st,zt,Jt,Ge,Xe,qe,Xt,Lt,jt.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,Ue,st,zt,Jt,Ge,Xe,qe,Xt,jt.data):H.texSubImage3D(Ke,Ue,st,zt,Jt,Ge,Xe,qe,Xt,Lt,jt):T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ue,st,zt,Ge,Xe,Xt,Lt,jt.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ue,st,zt,jt.width,jt.height,Xt,jt.data):H.texSubImage2D(H.TEXTURE_2D,Ue,st,zt,Ge,Xe,Xt,Lt,jt);Ce.pixelStorei(H.UNPACK_ROW_LENGTH,Nr),Ce.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_i),Ce.pixelStorei(H.UNPACK_SKIP_PIXELS,gr),Ce.pixelStorei(H.UNPACK_SKIP_ROWS,Kr),Ce.pixelStorei(H.UNPACK_SKIP_IMAGES,yi),Ue===0&&K.generateMipmaps&&H.generateMipmap(Ke),Ce.unbindTexture()},this.initRenderTarget=function(T){R.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){ue=0,oe=0,q=null,Ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}const E2=1/3,ki=1/6,Jf=s=>Math.floor(s)|0,eh=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function w2(s=Math.random){const e=T2(s),i=new Float64Array(e).map(c=>eh[c%12*3]),a=new Float64Array(e).map(c=>eh[c%12*3+1]),l=new Float64Array(e).map(c=>eh[c%12*3+2]);return function(c,d,h){let m,p,v,y;const g=(c+d+h)*E2,x=Jf(c+g),E=Jf(d+g),P=Jf(h+g),S=(x+E+P)*ki,b=x-S,C=E-S,D=P-S,L=c-b,V=d-C,N=h-D;let F,w,k,X,O,G;L>=V?V>=N?(F=1,w=0,k=0,X=1,O=1,G=0):L>=N?(F=1,w=0,k=0,X=1,O=0,G=1):(F=0,w=0,k=1,X=1,O=0,G=1):V<N?(F=0,w=0,k=1,X=0,O=1,G=1):L<N?(F=0,w=1,k=0,X=0,O=1,G=1):(F=0,w=1,k=0,X=1,O=1,G=0);const ue=L-F+ki,oe=V-w+ki,q=N-k+ki,U=L-X+2*ki,z=V-O+2*ki,re=N-G+2*ki,fe=L-1+3*ki,pe=V-1+3*ki,I=N-1+3*ki,J=x&255,ge=E&255,Ae=P&255;let Ne=.6-L*L-V*V-N*N;if(Ne<0)m=0;else{const Le=J+e[ge+e[Ae]];Ne*=Ne,m=Ne*Ne*(i[Le]*L+a[Le]*V+l[Le]*N)}let se=.6-ue*ue-oe*oe-q*q;if(se<0)p=0;else{const Le=J+F+e[ge+w+e[Ae+k]];se*=se,p=se*se*(i[Le]*ue+a[Le]*oe+l[Le]*q)}let ye=.6-U*U-z*z-re*re;if(ye<0)v=0;else{const Le=J+X+e[ge+O+e[Ae+G]];ye*=ye,v=ye*ye*(i[Le]*U+a[Le]*z+l[Le]*re)}let Se=.6-fe*fe-pe*pe-I*I;if(Se<0)y=0;else{const Le=J+1+e[ge+1+e[Ae+1]];Se*=Se,y=Se*Se*(i[Le]*fe+a[Le]*pe+l[Le]*I)}return 32*(m+p+v+y)}}function T2(s){const e=new Uint8Array(512);for(let i=0;i<512/2;i++)e[i]=i;for(let i=0;i<512/2-1;i++){const a=i+~~(s()*(256-i)),l=e[i];e[i]=e[a],e[a]=l}for(let i=256;i<512;i++)e[i]=e[i-256];return e}const Sr={charcoal:"#1a1a1a",charcoalDeep:"#101414",cream:"#f5f3ef",copper:"#c4713b",copperDark:"#8a5a2b",teal:"#69c9d2"};function A2(){const s=St.useRef(null),e=St.useRef(null),i=St.useRef(0);return St.useEffect(()=>{const a=s.current;if(!a)return;const l=w2(),c=new Mb;c.background=new Ut(Sr.charcoalDeep),c.fog=new cp(Sr.charcoalDeep,.018);const d=new si(60,a.clientWidth/a.clientHeight,.1,1e3);d.position.z=30;const h=new M2({antialias:!0,alpha:!0});h.setSize(a.clientWidth,a.clientHeight),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.toneMapping=Jh,a.appendChild(h.domElement),e.current=h;const m=new ES(4210752,1.4);c.add(m);const p=new Xf(16777215,1.8);p.position.set(10,10,10),c.add(p);const v=new Xf(Sr.copper,1.6);v.position.set(-10,-5,5),c.add(v);const y=new Xf(Sr.teal,.9);y.position.set(0,12,-8),c.add(y);const g=new SS(Sr.copper,3,50);g.position.set(0,0,15),c.add(g);const x=new Wf({color:Sr.copper,metalness:.88,roughness:.32,emissive:Sr.copperDark,emissiveIntensity:.08}),E=new Wf({color:Sr.copperDark,metalness:.92,roughness:.28,emissive:Sr.charcoal,emissiveIntensity:.05}),P=new Wf({color:Sr.teal,metalness:.75,roughness:.4,emissive:Sr.teal,emissiveIntensity:.12});function S(O,G){const ue=new K_,oe=O,q=O*.85,U=O*.3,z=O*.12;for(let fe=0;fe<=G*2;fe++){const pe=fe/(G*2)*Math.PI*2,I=fe%2===0?oe+z:q,J=Math.cos(pe)*I,ge=Math.sin(pe)*I;fe===0?ue.moveTo(J,ge):ue.lineTo(J,ge)}const re=new Xh;return re.absarc(0,0,U,0,Math.PI*2,!0),ue.holes.push(re),new pp(ue,{depth:O*.25,bevelEnabled:!0,bevelThickness:O*.05,bevelSize:O*.05,bevelSegments:2})}const b=[],C=650;for(let O=0;O<C;O++){const G=.4+Math.random()*1.8,ue=Math.floor(8+Math.random()*16),oe=S(G,ue),q=Math.random(),U=q>.82?P:q>.55?E:x,z=new ji(oe,U),re=Math.random()*Math.PI*2,fe=Math.acos(2*Math.random()-1),pe=5+Math.random()*35;z.position.x=pe*Math.sin(fe)*Math.cos(re),z.position.y=pe*Math.sin(fe)*Math.sin(re),z.position.z=pe*Math.cos(fe)*.6,z.rotation.x=Math.random()*Math.PI*2,z.rotation.y=Math.random()*Math.PI*2,z.rotation.z=Math.random()*Math.PI*2,c.add(z),b.push({mesh:z,speed:.1+Math.random()*.8,axis:new Q(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),noiseOffset:Math.random()*1e3})}const D={x:0,y:0},L={x:0,y:0},V=O=>{L.x=(O.clientX/window.innerWidth-.5)*2,L.y=(O.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",V);let N=.15;const F=()=>{N=.15+window.scrollY/window.innerHeight*.5};window.addEventListener("scroll",F);const w=new AS;function k(){i.current=requestAnimationFrame(k);const O=w.getElapsedTime();D.x+=(L.x-D.x)*.05,D.y+=(L.y-D.y)*.05,d.position.x=D.x*3,d.position.y=-D.y*2,d.lookAt(0,0,0),g.intensity=2.6+Math.sin(O*.8)*.6,b.forEach(G=>{const ue=l(G.noiseOffset,O*.1,0)*.02,oe=l(G.noiseOffset+100,O*.1,0)*.02;G.mesh.rotateOnAxis(G.axis,(G.speed*N+ue)*.01),G.mesh.rotation.x+=oe*.005,G.mesh.rotation.y+=ue*.005}),c.rotation.y=O*.018,h.render(c,d)}k();const X=()=>{if(!a)return;const O=a.clientWidth,G=a.clientHeight;d.aspect=O/G,d.updateProjectionMatrix(),h.setSize(O,G)};return window.addEventListener("resize",X),()=>{cancelAnimationFrame(i.current),window.removeEventListener("mousemove",V),window.removeEventListener("scroll",F),window.removeEventListener("resize",X),h.dispose(),a.contains(h.domElement)&&a.removeChild(h.domElement)}},[]),Z.jsx("div",{"code-path":"src\\sections\\GoldenGears.tsx:217:5",ref:s,"aria-hidden":"true",style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"}})}const C2=["Electricidad","Mantenimiento","Automatización","Instrumentación","TI & IoT","Suministros"];function R2(){const s=St.useRef(null);return St.useEffect(()=>{const e=s.current;e&&e.querySelectorAll(".hero-animate").forEach((i,a)=>{const l=i;l.style.opacity="0",l.style.transform="translateY(20px)",l.style.transition=`opacity 0.6s ease-out ${a*.2}s, transform 0.6s ease-out ${a*.2}s`,setTimeout(()=>{l.style.opacity="1",l.style.transform="translateY(0)"},100)})},[]),Z.jsxs("section",{"code-path":"src\\sections\\HeroSection.tsx:29:5",id:"hero",className:"relative min-h-screen overflow-hidden",style:{backgroundColor:Sr.charcoalDeep,clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)"},children:[Z.jsx(A2,{"code-path":"src\\sections\\HeroSection.tsx:37:7"}),Z.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:39:7",className:"absolute inset-0 z-[1]",style:{background:"linear-gradient(to bottom, rgba(16,20,20,0.25) 0%, rgba(26,26,26,0.72) 100%), radial-gradient(circle at 50% 42%, rgba(196,113,59,0.14), transparent 48%), radial-gradient(circle at 78% 18%, rgba(105,201,210,0.08), transparent 36%)"}}),Z.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:47:7",ref:s,className:"relative z-[2] flex min-h-screen flex-col items-center justify-center px-6 pb-24 text-center",children:[Z.jsx("p",{"code-path":"src\\sections\\HeroSection.tsx:51:9",className:"hero-animate mb-6 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"IMANTEK S.A.S. · NIT: 902069790-1"}),Z.jsx("h1",{"code-path":"src\\sections\\HeroSection.tsx:58:9",className:"hero-animate mb-6 max-w-[800px] text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:text-[52px]",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"Ingeniería y servicios técnicos integrales para operaciones seguras y confiables"}),Z.jsx("p",{"code-path":"src\\sections\\HeroSection.tsx:65:9",className:"hero-animate mb-8 max-w-[600px] text-base leading-relaxed sm:text-lg",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580"},children:"Servicios técnicos integrales para operaciones seguras y confiables"}),Z.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:73:9",className:"hero-animate mb-10 flex flex-wrap justify-center gap-3",children:C2.map(e=>Z.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:75:13",className:"border px-4 py-2 text-xs uppercase tracking-[1.5px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#cccccc",borderColor:"#555555"},children:e},e))}),Z.jsx("a",{"code-path":"src\\sections\\HeroSection.tsx:90:9",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"hero-animate px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#d4854a]",style:{fontFamily:"'IBM Plex Mono', monospace",backgroundColor:"#c4713b"},children:"Solicitar cotización"}),Z.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:104:9",className:"hero-animate absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center",children:Z.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:105:11",className:"relative h-10 w-[1px] overflow-hidden",style:{backgroundColor:"rgba(255,255,255,0.4)"},children:Z.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:106:13",className:"absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full",style:{backgroundColor:"rgba(255,255,255,0.6)",left:"50%",animation:"scrollBounce 2s ease-in-out infinite"}})})})]}),Z.jsx("style",{"code-path":"src\\sections\\HeroSection.tsx:118:7",children:`
        @keyframes scrollBounce {
          0%, 100% { top: 0; opacity: 0.6; }
          50% { top: 24px; opacity: 0; }
        }
      `})]})}function Tn(s={}){const e=St.useRef(null);return St.useEffect(()=>{const i=e.current;if(!i)return;const{threshold:a=.15,delay:l=0,duration:c=.6,translateY:d=40,translateX:h=0,scale:m=1}=s;i.style.opacity="0",i.style.transform=`translateY(${d}px) translateX(${h}px) scale(${m})`,i.style.transition=`opacity ${c}s ease-out ${l}s, transform ${c}s ease-out ${l}s`,i.style.willChange="transform, opacity";const p=new IntersectionObserver(v=>{v.forEach(y=>{y.isIntersecting&&(i.style.opacity="1",i.style.transform="translateY(0) translateX(0) scale(1)",i.addEventListener("transitionend",()=>{i.style.willChange="auto"},{once:!0}),p.unobserve(i))})},{threshold:a});return p.observe(i),()=>{p.disconnect()}},[]),e}const P2="./images/";function dy(s){return`${P2}${s}`}function fy(s){const e=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${Sr.charcoalDeep}"/><stop offset="55%" stop-color="${Sr.charcoal}"/><stop offset="100%" stop-color="${Sr.copperDark}"/></linearGradient></defs><rect width="1200" height="750" fill="url(#g)"/><circle cx="980" cy="120" r="180" fill="${Sr.teal}" opacity="0.12"/><circle cx="180" cy="620" r="220" fill="${Sr.copper}" opacity="0.16"/><text x="600" y="390" fill="${Sr.cream}" font-family="Arial,sans-serif" font-size="34" text-anchor="middle" letter-spacing="6">${s.toUpperCase()}</text></svg>`;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(e)}`}const N2=dy("about-image.jpg");function L2(){const[s,e]=St.useState(N2),i=Tn({translateX:-30,duration:.7}),a=Tn({translateX:30,duration:.7,delay:.15});return Z.jsx("section",{"code-path":"src\\sections\\AboutSection.tsx:20:5",id:"about",className:"relative",style:{backgroundColor:"#f5f3ef",marginTop:"-80px",paddingTop:"160px",paddingBottom:"100px"},children:Z.jsx("div",{"code-path":"src\\sections\\AboutSection.tsx:30:7",className:"mx-auto max-w-[1200px] px-6",children:Z.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:31:9",className:"grid items-center gap-16 md:grid-cols-[55%_45%]",children:[Z.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:33:11",ref:i,children:[Z.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:34:13",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Sobre nosotros"}),Z.jsx("h2",{"code-path":"src\\sections\\AboutSection.tsx:41:13",className:"mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Impulsando operaciones con criterio técnico"}),Z.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:48:13",className:"mb-8 text-base leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"IMANTEK es una empresa colombiana especializada en ingeniería, mantenimiento y tecnología industrial. Acompañamos a empresas, comercios y clientes residenciales con soluciones técnicas de alto impacto. Respondemos ante cada desafío con criterio, seguridad y ejecución en campo. Nuestro equipo combina experiencia práctica y conocimiento técnico para garantizar operaciones continuas y confiables."}),Z.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:56:13",className:"flex flex-col gap-6 sm:flex-row",children:[Z.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:57:15",className:"flex-1 border p-6",style:{borderColor:"#d4d0ca"},children:[Z.jsx("h3",{"code-path":"src\\sections\\AboutSection.tsx:58:17",className:"mb-3 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#c4713b"},children:"Misión"}),Z.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:64:17",className:"text-sm leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:"Brindar servicios técnicos integrales con criterio, seguridad y ejecución eficaz, siendo el aliado estratégico de nuestros clientes en el mantenimiento y la operación de sus activos críticos."})]}),Z.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:72:15",className:"flex-1 border p-6",style:{borderColor:"#d4d0ca"},children:[Z.jsx("h3",{"code-path":"src\\sections\\AboutSection.tsx:73:17",className:"mb-3 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#c4713b"},children:"Visión"}),Z.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:79:17",className:"text-sm leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:"Ser reconocidos como la empresa de servicios técnicos de mayor confiabilidad y alcance en Colombia, líderes en la integración de mantenimiento, automatización y tecnología."})]})]})]}),Z.jsx("div",{"code-path":"src\\sections\\AboutSection.tsx:90:11",ref:a,children:Z.jsx("img",{"code-path":"src\\sections\\AboutSection.tsx:91:13",src:s,alt:"Ingeniero industrial IMANTEK en instalación",loading:"lazy",decoding:"async",onError:()=>e(fy("IMANTEK")),className:"block min-h-[320px] w-full object-cover sm:min-h-0",style:{border:"2px solid #d4d0ca",aspectRatio:"3/4"}})})]})})})}const D2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,a)=>a?a.toUpperCase():i.toLowerCase()),p_=s=>{const e=U2(s);return e.charAt(0).toUpperCase()+e.slice(1)},hy=(...s)=>s.filter((e,i,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===i).join(" ").trim(),I2=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var O2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const k2=St.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:l="",children:c,iconNode:d,...h},m)=>St.createElement("svg",{ref:m,...O2,width:e,height:e,stroke:s,strokeWidth:a?Number(i)*24/Number(e):i,className:hy("lucide",l),...!c&&!I2(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,v])=>St.createElement(p,v)),...Array.isArray(c)?c:[c]])),Ki=(s,e)=>{const i=St.forwardRef(({className:a,...l},c)=>St.createElement(k2,{ref:c,iconNode:e,className:hy(`lucide-${D2(p_(s))}`,`lucide-${s}`,a),...l}));return i.displayName=p_(s),i},F2=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],z2=Ki("compass",F2),B2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],H2=Ki("cpu",B2),V2=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],G2=Ki("gauge",V2),W2=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],j2=Ki("hard-hat",W2),X2=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],q2=Ki("paintbrush",X2),Y2=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],K2=Ki("puzzle",Y2),Z2=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$2=Ki("settings",Z2),Q2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],J2=Ki("shield",Q2),e3=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],t3=Ki("thermometer",e3),r3=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],i3=Ki("wrench",r3),n3=[{icon:i3,title:"Mantenimiento",description:"Preventivo y correctivo de equipos industriales, eléctricos y mecánicos. Garantizamos continuidad operativa y vida útil prolongada de sus activos."},{icon:$2,title:"Montajes",description:"Instalación y montaje de sistemas eléctricos, mecánicos y estructurales bajo normas de seguridad industrial."},{icon:H2,title:"Automatización",description:"Diseño e implementación de sistemas automatizados para optimizar procesos y reducir costos operativos. PLCs, HMIs y sistemas SCADA."},{icon:G2,title:"Instrumentación",description:"Instalación, calibración y gestión de instrumentos de medición y control para procesos industriales."},{icon:t3,title:"Refrigeración",description:"Instalación, mantenimiento y reparación de sistemas de aire acondicionado industrial, comercial y residencial."},{icon:q2,title:"Obras Civiles",description:"Pinturas de fachadas, estructuras en drywall, remodelaciones industriales e impermeabilización."}];function a3(){const s=Tn({translateY:30}),e=St.useRef(null);return St.useEffect(()=>{const i=e.current;if(!i)return;i.querySelectorAll(".service-card").forEach(l=>{const c=l;c.style.opacity="0",c.style.transform="translateY(40px)"});const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(c.target.querySelectorAll(".service-card").forEach((d,h)=>{const m=d;m.style.transition=`opacity 0.6s ease-out ${h*.1}s, transform 0.6s ease-out ${h*.1}s`,m.style.opacity="1",m.style.transform="translateY(0)"}),a.unobserve(c.target))})},{threshold:.1});return a.observe(i),()=>a.disconnect()},[]),Z.jsx("section",{"code-path":"src\\sections\\ServicesSection.tsx:76:5",id:"servicios",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:81:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:83:9",ref:s,children:[Z.jsx("p",{"code-path":"src\\sections\\ServicesSection.tsx:84:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Lo que hacemos"}),Z.jsx("h2",{"code-path":"src\\sections\\ServicesSection.tsx:90:11",className:"mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Portafolio de servicios"}),Z.jsx("p",{"code-path":"src\\sections\\ServicesSection.tsx:96:11",className:"mb-12 max-w-[700px] leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"Ofrecemos una solución técnica completa: desde el diagnóstico hasta la ejecución y el mantenimiento continuo, bajo un mismo equipo de confianza."})]}),Z.jsx("div",{"code-path":"src\\sections\\ServicesSection.tsx:105:9",ref:e,className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:n3.map(i=>{const a=i.icon;return Z.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:109:15",className:"service-card group border p-8 transition-all duration-300",style:{borderColor:"#d4d0ca",backgroundColor:"transparent"},onMouseEnter:l=>{l.currentTarget.style.borderColor="#c4713b",l.currentTarget.style.backgroundColor="rgba(196, 113, 59, 0.04)"},onMouseLeave:l=>{l.currentTarget.style.borderColor="#d4d0ca",l.currentTarget.style.backgroundColor="transparent"},children:[Z.jsx("div",{"code-path":"src\\sections\\ServicesSection.tsx:126:17",className:"mb-5 flex h-12 w-12 items-center justify-center border transition-all duration-300 group-hover:bg-[rgba(196,113,59,0.1)]",style:{borderColor:"#c4713b"},children:Z.jsx(a,{"code-path":"src\\sections\\ServicesSection.tsx:130:19",size:24,style:{color:"#c4713b"},strokeWidth:1.5})}),Z.jsx("h3",{"code-path":"src\\sections\\ServicesSection.tsx:134:17",className:"mb-3 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:i.title}),Z.jsx("p",{"code-path":"src\\sections\\ServicesSection.tsx:142:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:i.description})]},i.title)})})]})})}const s3=[{number:"01",title:"Diagnóstico",description:"Análisis exhaustivo del sistema o activo. Identificamos el problema con precisión antes de proponer cualquier intervención."},{number:"02",title:"Propuesta",description:"Presentamos un plan de acción claro con alcance, recursos, tiempo y costo definidos para la aprobación del cliente."},{number:"03",title:"Ejecución",description:"Intervención en campo con personal calificado, equipos adecuados y protocolos de seguridad industrial vigentes."},{number:"04",title:"Entrega y Seguimiento",description:"Informe técnico detallado, garantía sobre el trabajo realizado y acompañamiento post-servicio."}];function o3(){const s=Tn({translateY:30}),e=St.useRef(null),i=St.useRef(null);return St.useEffect(()=>{const a=e.current,l=i.current;if(!a||!l)return;const c=a.querySelectorAll(".method-step");c.forEach(h=>{const m=h;m.style.opacity="0",m.style.transform="translateY(30px)"}),l.style.transform="scaleX(0)",l.style.transformOrigin="left";const d=new IntersectionObserver(h=>{h.forEach(m=>{m.isIntersecting&&(setTimeout(()=>{l.style.transition="transform 0.8s ease-out",l.style.transform="scaleX(1)"},300),c.forEach((p,v)=>{const y=p;setTimeout(()=>{y.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",y.style.opacity="1",y.style.transform="translateY(0)"},v*150)}),d.unobserve(m.target))})},{threshold:.2});return d.observe(a),()=>d.disconnect()},[]),Z.jsx("section",{"code-path":"src\\sections\\MethodologySection.tsx:79:5",id:"metodologia",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:84:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:86:9",ref:s,className:"mb-12",children:[Z.jsx("p",{"code-path":"src\\sections\\MethodologySection.tsx:87:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Cómo trabajamos"}),Z.jsx("h2",{"code-path":"src\\sections\\MethodologySection.tsx:93:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Nuestra metodología"})]}),Z.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:102:9",ref:e,className:"relative",children:[Z.jsx("div",{"code-path":"src\\sections\\MethodologySection.tsx:104:11",ref:i,className:"absolute left-0 right-0 top-[30px] hidden h-[1px] md:block",style:{backgroundColor:"#d4d0ca"}}),Z.jsx("div",{"code-path":"src\\sections\\MethodologySection.tsx:110:11",className:"grid gap-10 md:grid-cols-4 md:gap-6",children:s3.map(a=>Z.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:112:15",className:"method-step",children:[Z.jsx("div",{"code-path":"src\\sections\\MethodologySection.tsx:114:17",className:"mb-4 text-5xl",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:a.number}),Z.jsx("h3",{"code-path":"src\\sections\\MethodologySection.tsx:122:17",className:"mb-3 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:a.title}),Z.jsx("p",{"code-path":"src\\sections\\MethodologySection.tsx:130:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:a.description})]},a.number))})]})]})})}const jc=[{name:"Industrial & Logístico",description:"Soluciones de ingeniería y mantenimiento preventivo/correctivo diseñadas para garantizar la continuidad operativa.",items:["Plantas de producción","Fábricas","Centros de distribución","Bodegas"],image:"sector-industrial.jpg",layout:"large"},{name:"Comercial & Retail",description:"Instalaciones eléctricas, climatización y mantenimiento de infraestructura orientados a crear entornos confortables y seguros.",items:["Centros comerciales","Hoteles","Restaurantes"],image:"sector-commercial.jpg",layout:"small"},{name:"Salud & Corporativo",description:"Soporte técnico especializado para infraestructuras con exigencias normativas estrictas.",items:["Clínicas","Laboratorios","Edificios corporativos"],image:"sector-health.jpg",layout:"small"},{name:"Residencial & Copropiedades",description:"Servicios preventivos programados y atención técnica oportuna para la conservación física.",items:["Conjuntos residenciales","Condominios","Zonas comunes"],image:"sector-residential.jpg",layout:"large"}];function l3(){const s=Tn({translateY:30}),e=St.useRef(null);return St.useEffect(()=>{const i=e.current;if(!i)return;i.querySelectorAll(".sector-card").forEach((l,c)=>{const d=l;d.style.opacity="0",d.style.transform=c%2===0?"translateX(-30px)":"translateX(30px)"});const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(c.target.querySelectorAll(".sector-card").forEach((d,h)=>{const m=d;setTimeout(()=>{m.style.transition="opacity 0.7s ease-out, transform 0.7s ease-out",m.style.opacity="1",m.style.transform="translateX(0)"},h*120)}),a.unobserve(c.target))})},{threshold:.15});return a.observe(i),()=>a.disconnect()},[]),Z.jsx("section",{"code-path":"src\\sections\\SectorsSection.tsx:76:5",id:"sectores",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:81:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:83:9",ref:s,className:"mb-14",children:[Z.jsx("p",{"code-path":"src\\sections\\SectorsSection.tsx:84:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Mercado"}),Z.jsx("h2",{"code-path":"src\\sections\\SectorsSection.tsx:90:11",className:"mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Sectores que atendemos"}),Z.jsx("p",{"code-path":"src\\sections\\SectorsSection.tsx:96:11",className:"max-w-[700px] leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"Adaptamos nuestras soluciones técnicas a las exigencias operativas, de seguridad y normativas de cada sector económico."})]}),Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:105:9",ref:e,className:"flex flex-col gap-6",children:[Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:107:11",className:"flex flex-col gap-6 md:flex-row",children:[Z.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:108:13",className:"sector-card md:w-[60%]",children:Z.jsx(Xc,{"code-path":"src\\sections\\SectorsSection.tsx:109:15",sector:jc[0]})}),Z.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:111:13",className:"sector-card md:w-[40%]",children:Z.jsx(Xc,{"code-path":"src\\sections\\SectorsSection.tsx:112:15",sector:jc[1]})})]}),Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:117:11",className:"flex flex-col gap-6 md:flex-row",children:[Z.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:118:13",className:"sector-card md:w-[40%]",children:Z.jsx(Xc,{"code-path":"src\\sections\\SectorsSection.tsx:119:15",sector:jc[2]})}),Z.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:121:13",className:"sector-card md:w-[60%]",children:Z.jsx(Xc,{"code-path":"src\\sections\\SectorsSection.tsx:122:15",sector:jc[3]})})]})]})]})})}function Xc({sector:s}){const[e,i]=St.useState(dy(s.image));return Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:135:5",className:"group h-full",children:[Z.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:136:7",className:"min-h-[210px] overflow-hidden sm:min-h-0",style:{aspectRatio:"16/10"},children:Z.jsx("img",{"code-path":"src\\sections\\SectorsSection.tsx:137:9",src:e,alt:s.name,loading:"lazy",decoding:"async",onError:()=>i(fy(s.name)),className:"block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"})}),Z.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:148:7",className:"border border-t-0 p-6",style:{borderColor:"#d4d0ca"},children:[Z.jsx("h3",{"code-path":"src\\sections\\SectorsSection.tsx:149:9",className:"mb-2 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:s.name}),Z.jsx("p",{"code-path":"src\\sections\\SectorsSection.tsx:155:9",className:"mb-4 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:s.description}),Z.jsx("ul",{"code-path":"src\\sections\\SectorsSection.tsx:161:9",className:"flex flex-wrap gap-x-4 gap-y-2",children:s.items.map(a=>Z.jsxs("li",{"code-path":"src\\sections\\SectorsSection.tsx:163:13",className:"flex items-center gap-2 text-sm",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#8a8580"},children:[Z.jsx("span",{"code-path":"src\\sections\\SectorsSection.tsx:168:15",className:"inline-block h-1 w-1 rounded-full",style:{backgroundColor:"#c4713b"}}),a]},a))})]})]})}const c3=[{icon:K2,title:"Solución 360°",description:"Un solo proveedor para múltiples disciplinas técnicas: eléctrica, mecánica, TI e instrumentación."},{icon:j2,title:"Ejecución en campo",description:"Presencia directa en el lugar de trabajo con técnicos calificados y equipamiento adecuado."},{icon:J2,title:"Seguridad primero",description:"Protocolos de seguridad industrial en cada intervención. Cumplimiento normativo garantizado."},{icon:z2,title:"Criterio técnico",description:"Diagnóstico preciso antes de actuar. Soluciones sostenibles, no parches temporales."}],u3=[{title:"Creciente demanda",text:"La industria y el comercio en Colombia incrementan su inversión en mantenimiento preventivo y automatización para reducir costos operativos y tiempos de parada."},{title:"Transformación digital",text:"Las empresas buscan integrar IoT, SCADA y automatización para mejorar su competitividad, creando oportunidad para proveedores con capacidad multidisciplinaria."},{title:"Déficit de proveedores integrales",text:"La mayoría de los proveedores son especialistas en una sola disciplina. IMANTEK cubre múltiples frentes, reduciendo la complejidad logística del cliente."},{title:"Eficiencia energética",text:"La transición hacia energías más eficientes abre nuevas verticales de negocio donde IMANTEK puede ofrecer soluciones de alto valor."}];function d3(){const s=Tn({translateY:30}),e=St.useRef(null),i=St.useRef(null);return St.useEffect(()=>{const a=e.current;if(!a)return;a.querySelectorAll(".diff-card").forEach(c=>{const d=c;d.style.opacity="0",d.style.transform="translateY(30px)"});const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&(d.target.querySelectorAll(".diff-card").forEach((h,m)=>{const p=h;setTimeout(()=>{p.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",p.style.opacity="1",p.style.transform="translateY(0)"},m*120)}),l.unobserve(d.target))})},{threshold:.15});return l.observe(a),()=>l.disconnect()},[]),St.useEffect(()=>{const a=i.current;if(!a)return;a.querySelectorAll(".opp-block").forEach(c=>{const d=c;d.style.opacity="0",d.style.transform="translateY(30px)"});const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&(d.target.querySelectorAll(".opp-block").forEach((h,m)=>{const p=h;setTimeout(()=>{p.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",p.style.opacity="1",p.style.transform="translateY(0)"},m*80)}),l.unobserve(d.target))})},{threshold:.1});return l.observe(a),()=>l.disconnect()},[]),Z.jsx("section",{"code-path":"src\\sections\\WhyUsSection.tsx:123:5",id:"porque",style:{backgroundColor:"#1a1a1a",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:127:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsx("div",{"code-path":"src\\sections\\WhyUsSection.tsx:129:9",ref:s,className:"mb-12",children:Z.jsx("h2",{"code-path":"src\\sections\\WhyUsSection.tsx:130:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"¿Por qué elegir IMANTEK?"})}),Z.jsx("div",{"code-path":"src\\sections\\WhyUsSection.tsx:138:9",ref:e,className:"mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:c3.map(a=>{const l=a.icon;return Z.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:142:15",className:"diff-card border p-8 transition-all duration-300 hover:border-[#c4713b]",style:{borderColor:"#333333"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="rgba(196, 113, 59, 0.05)"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="transparent"},children:[Z.jsx(l,{"code-path":"src\\sections\\WhyUsSection.tsx:153:17",size:40,style:{color:"#c4713b"},strokeWidth:1.2}),Z.jsx("h3",{"code-path":"src\\sections\\WhyUsSection.tsx:154:17",className:"mb-3 mt-5 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:a.title}),Z.jsx("p",{"code-path":"src\\sections\\WhyUsSection.tsx:160:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"15px"},children:a.description})]},a.title)})}),Z.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:172:9",className:"border-t pt-16",style:{borderColor:"#333333"},children:[Z.jsx("p",{"code-path":"src\\sections\\WhyUsSection.tsx:176:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Contexto estratégico"}),Z.jsx("h3",{"code-path":"src\\sections\\WhyUsSection.tsx:182:11",className:"mb-8 text-2xl font-medium uppercase sm:text-3xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"Oportunidad de mercado"}),Z.jsx("div",{"code-path":"src\\sections\\WhyUsSection.tsx:189:11",ref:i,className:"grid gap-8 sm:grid-cols-2",children:u3.map(a=>Z.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:191:15",className:"opp-block",children:[Z.jsx("h4",{"code-path":"src\\sections\\WhyUsSection.tsx:192:17",className:"mb-2 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:a.title}),Z.jsx("p",{"code-path":"src\\sections\\WhyUsSection.tsx:198:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"15px"},children:a.text})]},a.title))})]})]})})}const f3=[{year:"2025",title:"Consolidación",items:["Estructurar portafolio de servicios completo","Captar primeros clientes ancla industriales y comerciales","Establecer procesos operativos y de calidad","Presencia digital sólida"]},{year:"2026",title:"Crecimiento",items:["Ampliar cartera de clientes en 3+ sectores","Lanzar servicio de contratos de mantenimiento recurrente","Incorporar capacidades en automatización e IoT","Crecer equipo técnico especializado"]},{year:"2027",title:"Expansión",items:["Presencia en múltiples ciudades de Colombia","Plataforma propia de monitoreo y gestión de activos","Alianzas estratégicas con fabricantes y distribuidores","Certificaciones industriales y de calidad"]}];function h3(){const s=Tn({translateY:30}),e=St.useRef(null),i=St.useRef(null);return St.useEffect(()=>{const a=e.current,l=i.current;if(!a||!l)return;const c=a.querySelectorAll(".year-badge"),d=a.querySelectorAll(".phase-list");c.forEach(m=>{const p=m;p.style.opacity="0",p.style.transform="scale(0.8)"}),d.forEach(m=>{const p=m;p.style.opacity="0",p.style.transform="translateY(20px)"}),l.style.transform="scaleX(0)",l.style.transformOrigin="left";const h=new IntersectionObserver(m=>{m.forEach(p=>{p.isIntersecting&&(setTimeout(()=>{l.style.transition="transform 1s ease-out",l.style.transform="scaleX(1)"},200),c.forEach((v,y)=>{const g=v;setTimeout(()=>{g.style.transition="opacity 0.5s ease-out, transform 0.5s ease-out",g.style.opacity="1",g.style.transform="scale(1)"},400+y*200)}),d.forEach((v,y)=>{const g=v;setTimeout(()=>{g.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",g.style.opacity="1",g.style.transform="translateY(0)"},600+y*150)}),h.unobserve(p.target))})},{threshold:.15});return h.observe(a),()=>h.disconnect()},[]),Z.jsx("section",{"code-path":"src\\sections\\RoadmapSection.tsx:107:5",id:"roadmap",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:112:7",className:"mx-auto max-w-[1200px] px-6",children:[Z.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:114:9",ref:s,className:"mb-14",children:[Z.jsx("p",{"code-path":"src\\sections\\RoadmapSection.tsx:115:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Hoja de ruta"}),Z.jsx("h2",{"code-path":"src\\sections\\RoadmapSection.tsx:121:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Metas estratégicas 2025 – 2027"})]}),Z.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:130:9",ref:e,className:"relative",children:[Z.jsx("div",{"code-path":"src\\sections\\RoadmapSection.tsx:132:11",ref:i,className:"absolute left-0 right-0 top-[22px] hidden h-[1px] md:block",style:{backgroundColor:"#d4d0ca"}}),Z.jsx("div",{"code-path":"src\\sections\\RoadmapSection.tsx:138:11",className:"grid gap-10 md:grid-cols-3 md:gap-8",children:f3.map(a=>Z.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:140:15",children:[Z.jsx("div",{"code-path":"src\\sections\\RoadmapSection.tsx:142:17",className:"year-badge mb-6 inline-block border px-4 py-1.5 text-sm",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b",borderColor:"#c4713b"},children:a.year}),Z.jsx("h3",{"code-path":"src\\sections\\RoadmapSection.tsx:154:17",className:"mb-4 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:a.title}),Z.jsx("ul",{"code-path":"src\\sections\\RoadmapSection.tsx:162:17",className:"phase-list space-y-2",children:a.items.map(l=>Z.jsxs("li",{"code-path":"src\\sections\\RoadmapSection.tsx:164:21",className:"flex items-start gap-3 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:[Z.jsx("span",{"code-path":"src\\sections\\RoadmapSection.tsx:169:23",className:"mt-2 inline-block h-[2px] w-3 shrink-0",style:{backgroundColor:"#c4713b"}}),l]},l))})]},a.year))})]})]})})}function p3(){const s=Tn({translateX:-20,duration:.6}),e=Tn({translateX:20,duration:.6,delay:.15});return Z.jsx("section",{"code-path":"src\\sections\\ContactSection.tsx:8:5",id:"contacto",className:"border-t",style:{backgroundColor:"#1a1a1a",borderColor:"#333333",paddingTop:"100px",paddingBottom:"100px"},children:Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:18:7",className:"mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-2",children:[Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:20:9",ref:s,children:[Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:21:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Hablemos"}),Z.jsx("h2",{"code-path":"src\\sections\\ContactSection.tsx:27:11",className:"mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"¿Listo para optimizar sus operaciones?"}),Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:33:11",className:"mb-8 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"17px"},children:"Contacte a nuestro equipo de ingeniería y reciba una propuesta técnica personalizada sin costo."}),Z.jsx("a",{"code-path":"src\\sections\\ContactSection.tsx:39:11",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#d4854a]",style:{fontFamily:"'IBM Plex Mono', monospace",backgroundColor:"#c4713b"},children:"Solicitar cotización"})]}),Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:54:9",ref:e,className:"md:mt-0 mt-12",children:[Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:55:11",className:"mb-7",children:[Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:56:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Sitio web"}),Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:62:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"imantek.com.co"})]}),Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:67:11",className:"mb-7",children:[Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:68:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Correo electrónico"}),Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:74:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"Imanteksas@gmail.com"})]}),Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:79:11",className:"mb-7",children:[Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:80:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Teléfono / WhatsApp"}),Z.jsx("a",{"code-path":"src\\sections\\ContactSection.tsx:86:13",href:"https://wa.me/573181419074",target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-[#c4713b]",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"+57 318 141 9074"})]}),Z.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:97:11",children:[Z.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:98:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Ubicación"}),Z.jsxs("p",{"code-path":"src\\sections\\ContactSection.tsx:104:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:["Br. Villa Estrella Transv.54 #80-863,",Z.jsx("br",{"code-path":"src\\sections\\ContactSection.tsx:105:52"}),"Cartagena de Indias, Colombia"]})]})]})]})})}function m3(){const s=St.useRef(null),e=St.useRef(0),i=St.useRef(!1);return St.useEffect(()=>{const a=s.current;if(!a)return;const l=a.getContext("2d");if(!l)return;const c=Math.min(window.devicePixelRatio,2);function d(){if(!a)return;const C=a.parentElement;C&&(a.width=C.clientWidth*c,a.height=C.clientHeight*c,a.style.width=C.clientWidth+"px",a.style.height=C.clientHeight+"px",l.setTransform(c,0,0,c,0,0))}d();const h=["#ffffff","#cccccc","#aaaaaa","#888888"],m=2e3,p=120,v=[];for(let C=0;C<m;C++)v.push({x:Math.random()*(a?.clientWidth||0),y:Math.random()*(a?.clientHeight||0),vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:.5+Math.random()*1.5,color:h[Math.floor(Math.random()*h.length)],alpha:.2+Math.random()*.5});let y=0,g=0,x=!1;const E=C=>{const D=a.getBoundingClientRect();y=C.clientX-D.left,g=C.clientY-D.top,x=!0,setTimeout(()=>{x=!1},500)};a.addEventListener("click",E);const P=new IntersectionObserver(C=>{C.forEach(D=>{i.current=D.isIntersecting})},{threshold:.05});P.observe(a);function S(){if(e.current=requestAnimationFrame(S),!i.current||!l||!a)return;const C=a.clientWidth,D=a.clientHeight,L=C/2,V=D/2;l.fillStyle="rgba(26, 26, 26, 0.15)",l.fillRect(0,0,C,D);for(const N of v){const F=L-N.x,w=V-N.y,k=Math.sqrt(F*F+w*w)+1,X=p/(k*k);if(N.vx+=F/k*X*.01,N.vy+=w/k*X*.01,x){const O=y-N.x,G=g-N.y,ue=Math.sqrt(O*O+G*G)+1,oe=200/(ue*ue);N.vx-=O/ue*oe*.1,N.vy-=G/ue*oe*.1}N.vx*=.995,N.vy*=.995,N.x+=N.vx,N.y+=N.vy,N.x<0&&(N.x=C),N.x>C&&(N.x=0),N.y<0&&(N.y=D),N.y>D&&(N.y=0),l.beginPath(),l.arc(N.x,N.y,N.size,0,Math.PI*2),l.fillStyle=N.color,l.globalAlpha=N.alpha,l.fill()}l.globalAlpha=1}S();const b=()=>d();return window.addEventListener("resize",b),()=>{cancelAnimationFrame(e.current),P.disconnect(),a.removeEventListener("click",E),window.removeEventListener("resize",b)}},[]),Z.jsx("canvas",{"code-path":"src\\sections\\ParticleField.tsx:155:5",ref:s,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"auto"}})}function g3(){return Z.jsxs("footer",{"code-path":"src\\sections\\Footer.tsx:5:5",className:"relative overflow-hidden border-t",style:{backgroundColor:"#1a1a1a",borderColor:"#333333"},children:[Z.jsx(m3,{"code-path":"src\\sections\\Footer.tsx:13:7"}),Z.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:16:7",className:"relative z-[1] mx-auto max-w-[1200px] px-6",style:{paddingTop:"80px",paddingBottom:"40px"},children:[Z.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:20:9",className:"mb-16 grid gap-10 sm:grid-cols-3",children:[Z.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:22:11",children:[Z.jsx("h3",{"code-path":"src\\sections\\Footer.tsx:23:13",className:"mb-2 text-3xl font-bold uppercase tracking-[4px]",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"IMANTEK"}),Z.jsx("p",{"code-path":"src\\sections\\Footer.tsx:29:13",className:"text-sm",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:"Ingeniería · Mantenimiento · Tecnología"})]}),Z.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:38:11",children:[Z.jsx("p",{"code-path":"src\\sections\\Footer.tsx:39:13",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#c4713b"},children:"Síguenos"}),Z.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:45:13",className:"flex flex-col gap-2",children:[Z.jsx("a",{"code-path":"src\\sections\\Footer.tsx:46:15",href:"https://www.instagram.com/imanteksas",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"Instagram"}),Z.jsx("a",{"code-path":"src\\sections\\Footer.tsx:55:15",href:"https://www.facebook.com/people/Imantek-SAS",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"Facebook"}),Z.jsx("a",{"code-path":"src\\sections\\Footer.tsx:64:15",href:"https://wa.me/573181419074",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"WhatsApp"})]})]}),Z.jsx("div",{"code-path":"src\\sections\\Footer.tsx:77:11",className:"sm:text-right",children:Z.jsxs("p",{"code-path":"src\\sections\\Footer.tsx:78:13",className:"text-sm",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:["© 2025 IMANTEK S.A.S.",Z.jsx("br",{"code-path":"src\\sections\\Footer.tsx:82:36"}),"Colombia · imantek.com.co"]})})]}),Z.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:89:9",className:"flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row",style:{borderColor:"#333333"},children:[Z.jsx("p",{"code-path":"src\\sections\\Footer.tsx:93:11",className:"text-xs",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:"© 2025 IMANTEK S.A.S. · Colombia · imantek.com.co"}),Z.jsx("p",{"code-path":"src\\sections\\Footer.tsx:99:11",className:"text-xs",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#555555"},children:"Brochure Corporativo 2025–2027"})]})]})]})}function v3(){const[s,e]=St.useState(!1);return St.useEffect(()=>{const i=()=>{e(window.scrollY>window.innerHeight*.5)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),Z.jsxs("a",{"code-path":"src\\sections\\WhatsAppButton.tsx:15:5",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105",style:{fontFamily:"'Inter', sans-serif",backgroundColor:"#25D366",opacity:s?1:0,transform:s?"translateY(0)":"translateY(20px)",pointerEvents:s?"auto":"none"},children:[Z.jsx("svg",{"code-path":"src\\sections\\WhatsAppButton.tsx:28:7",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:Z.jsx("path",{"code-path":"src\\sections\\WhatsAppButton.tsx:35:9",d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})}function _3(){return Z.jsxs("div",{"code-path":"src\\App.tsx:15:5",className:"min-h-screen",children:[Z.jsx(T1,{"code-path":"src\\App.tsx:16:7"}),Z.jsx(R2,{"code-path":"src\\App.tsx:17:7"}),Z.jsx(L2,{"code-path":"src\\App.tsx:18:7"}),Z.jsx(a3,{"code-path":"src\\App.tsx:19:7"}),Z.jsx(o3,{"code-path":"src\\App.tsx:20:7"}),Z.jsx(l3,{"code-path":"src\\App.tsx:21:7"}),Z.jsx(d3,{"code-path":"src\\App.tsx:22:7"}),Z.jsx(h3,{"code-path":"src\\App.tsx:23:7"}),Z.jsx(p3,{"code-path":"src\\App.tsx:24:7"}),Z.jsx(g3,{"code-path":"src\\App.tsx:25:7"}),Z.jsx(v3,{"code-path":"src\\App.tsx:26:7"})]})}w1.createRoot(document.getElementById("root")).render(Z.jsx(_3,{"code-path":"src\\main.tsx:11:53"}));
