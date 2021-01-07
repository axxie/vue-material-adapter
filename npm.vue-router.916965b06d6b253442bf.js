/*! For license information please see npm.vue-router.916965b06d6b253442bf.js.LICENSE.txt */
(self.webpackChunkvue_material_adapter=self.webpackChunkvue_material_adapter||[]).push([[8074],{2119:function(e,t,n){"use strict";n.d(t,{p7:function(){return Pe},r5:function(){return F}});var r=n(5166);const o="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,a=e=>o?Symbol(e):"_vr_"+e,l=a("rvlm"),c=a("rvd"),s=a("r"),i=a("rl"),u=a("rvl"),f="undefined"!=typeof window,p=Object.assign;function h(e,t){const n={};for(const r in t){const o=t[r];n[r]=Array.isArray(o)?o.map(e):e(o)}return n}let d=()=>{};const m=/\/$/;function g(e,t,n="/"){let r,o={},a="",l="";const c=t.indexOf("?"),s=t.indexOf("#",c>-1?c:0);return c>-1&&(r=t.slice(0,c),a=t.slice(c+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),l=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,l=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],1!==l&&"."!==a){if(".."!==a)break;l--}return n.slice(0,l).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+l,path:r,query:o,hash:l}}function v(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function b(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return Array.isArray(e)?E(e,t):Array.isArray(t)?E(t,e):e===t}function E(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var O,k;!function(e){e.pop="pop",e.push="push"}(O||(O={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(k||(k={}));const A=/^[^#]+#/;function R(e,t){return e.replace(A,"#")+t}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e,t){return(history.state?history.state.position-t:-1)+e}const C=new Map;let $=()=>location.protocol+"//"+location.host;function S(e,t){const{pathname:n,search:r,hash:o}=t;if(e.indexOf("#")>-1){let e=o.slice(1);return"/"!==e[0]&&(e="/"+e),v(e,"")}return v(n,e)+r+o}function j(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?x():null}}function q(e){const t=function(e){const{history:t,location:n}=window;let r={value:S(e,n)},o={value:t.state};function a(r,a,l){const c=e.indexOf("#"),s=c>-1?e.slice(c)+r:$()+e+r;try{t[l?"replaceState":"pushState"](a,"",s),o.value=a}catch(e){console.error(e),n[l?"replace":"assign"](s)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const l=p({},o.value,t.state,{forward:e,scroll:x()});a(l.current,l,!0),a(e,p({},j(r.value,e,null),{position:l.position+1},n),!1),r.value=e},replace:function(e,n){a(e,p({},t.state,j(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(f){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(m,"")}(e)),n=function(e,t,n,r){let o=[],a=[],l=null;const c=({state:a})=>{const c=S(e,location),s=n.value,i=t.value;let u=0;if(a){if(n.value=c,t.value=a,l&&l===s)return void(l=null);u=i?a.position-i.position:0}else r(c);o.forEach((e=>{e(n.value,s,{delta:u,type:O.pop,direction:u?u>0?k.forward:k.back:k.unknown})}))};function s(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:x()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",s),{pauseListeners:function(){l=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",s)}}}(e,t.state,t.location,t.replace),r=p({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:R.bind(null,e)},t,n);return Object.defineProperty(r,"location",{get:()=>t.location.value}),Object.defineProperty(r,"state",{get:()=>t.state.value}),r}function F(e){return(e=location.host?e||location.pathname:"").indexOf("#")<0&&(e+="#"),q(e)}function _(e){return"string"==typeof e||"symbol"==typeof e}const L={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},U=a("nf");var B;function M(e,t){return p(new Error,{type:e,[U]:!0},t)}function I(e,t){return e instanceof Error&&U in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(B||(B={}));const G="[^/]+?",T={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function D(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function V(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=D(r[n],o[n]);if(e)return e;n++}return o.length-r.length}const W={type:0,value:""},H=/[a-zA-Z0-9_]/;function K(e,t,n){const r=function(e,t){const n=p({},T,t);let r=[],o=n.start?"^":"";const a=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let r=0;r<t.length;r++){const l=t[r];let c=40+(n.sensitive?.25:0);if(0===l.type)r||(o+="/"),o+=l.value.replace(J,"\\$&"),c+=40;else if(1===l.type){const{value:e,repeatable:t,optional:n,regexp:s}=l;a.push({name:e,repeatable:t,optional:n});const i=s||G;if(i!==G){c+=10;try{new RegExp(`(${i})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${i}): `+t.message)}}let u=t?`((?:${i})(?:/(?:${i}))*)`:`(${i})`;r||(u=n?`(?:/${u})`:"/"+u),n&&(u+="?"),o+=u,c+=20,n&&(c+=-8),t&&(c+=-20),".*"===i&&(c+=-50)}e.push(c)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");return{re:l,score:r,keys:a,parse:function(e){const t=e.match(l),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=a[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:a,optional:l}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const s=Array.isArray(c)?c.join("/"):c;if(!s){if(!l)throw new Error(`Missing required param "${o}"`);n.endsWith("/")?n=n.slice(0,-1):r=!0}n+=s}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[W]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function l(){a&&o.push(a),a=[]}let c,s=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),i="")}function p(){i+=c}for(;s<e.length;)if(c=e[s++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(i&&f(),l()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:H.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&s--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),l(),o}(e.path),n),o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Y(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function X(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Z(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function z(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const Q=/#/g,N=/&/g,ee=/\//g,te=/=/g,ne=/\?/g,re=/\+/g,oe=/%5B/g,ae=/%5D/g,le=/%5E/g,ce=/%60/g,se=/%7B/g,ie=/%7C/g,ue=/%7D/g,fe=/%20/g;function pe(e){return encodeURI(""+e).replace(ie,"|").replace(oe,"[").replace(ae,"]")}function he(e){return pe(e).replace(re,"%2B").replace(fe,"+").replace(Q,"%23").replace(N,"%26").replace(ce,"`").replace(se,"{").replace(ue,"}").replace(le,"^")}function de(e){return function(e){return pe(e).replace(Q,"%23").replace(ne,"%3F")}(e).replace(ee,"%2F")}function me(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function ge(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(re," ");let o=r.indexOf("="),a=me(o<0?r:r.slice(0,o)),l=o<0?null:me(r.slice(o+1));if(a in t){let e=t[a];Array.isArray(e)||(e=t[a]=[e]),e.push(l)}else t[a]=l}return t}function ve(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=he(n).replace(te,"%3D"),null==r){void 0!==r&&(t+=n);continue}let o=Array.isArray(r)?r.map((e=>e&&he(e))):[r&&he(r)];for(let e=0;e<o.length;e++)t+=(e?"&":"")+n,null!=o[e]&&(t+="="+o[e])}return t}function ye(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function be(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function we(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((l,c)=>{const s=e=>{var s;!1===e?c(M(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(s=e)||s&&"object"==typeof s?c(M(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),l())},i=e.call(r&&r.instances[o],t,n,s);let u=Promise.resolve(i);e.length<3&&(u=u.then(s)),u.catch((e=>c(e)))}))}function Ee(e,t,n,r){const a=[];for(const c of e)for(const e in c.components){let s=c.components[e];if("beforeRouteEnter"===t||c.instances[e])if("object"==typeof(l=s)||"displayName"in l||"props"in l||"__vccOpts"in l){const o=(s.__vccOpts||s)[t];o&&a.push(we(o,n,r,c,e))}else{let l=s();l=l.catch(console.error),a.push((()=>l.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${c.path}"`));const l=(s=a).__esModule||o&&"Module"===s[Symbol.toStringTag]?a.default:a;var s;c.components[e]=l;const i=l[t];return i&&we(i,n,r,c,e)()}))))}}var l;return a}const Oe=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t,attrs:n}){const o=(0,r.qj)(function(e){const t=(0,r.f3)(s),n=(0,r.f3)(i),o=(0,r.Fl)((()=>t.resolve((0,r.SU)(e.to)))),a=(0,r.Fl)((()=>{let{matched:e}=o.value,{length:t}=e;const r=e[t-1];let a=n.matched;if(!r||!a.length)return-1;let l=a.findIndex(y.bind(null,r));if(l>-1)return l;let c=ke(e[t-2]);return t>1&&ke(r)===c&&a[a.length-1].path!==c?a.findIndex(y.bind(null,e[t-2])):l})),l=(0,r.Fl)((()=>a.value>-1&&function(e,t){for(let n in t){let r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!Array.isArray(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,o.value.params))),c=(0,r.Fl)((()=>a.value>-1&&a.value===n.matched.length-1&&b(n.params,o.value.params)));return{route:o,href:(0,r.Fl)((()=>o.value.href)),isActive:l,isExactActive:c,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[(0,r.SU)(e.replace)?"replace":"push"]((0,r.SU)(e.to)):Promise.resolve()}}}(e)),{options:a}=(0,r.f3)(s),l=(0,r.Fl)((()=>({[Ae(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Ae(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive})));return()=>{const a=t.default&&t.default(o);return e.custom?a:(0,r.h)("a",p({"aria-current":o.isExactActive?e.ariaCurrentValue:null,onClick:o.navigate,href:o.href},n,{class:l.value}),a)}}});function ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ae=(e,t,n)=>null!=e?e:null!=t?t:n;function Re(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const o=(0,r.f3)(u),a=(0,r.Fl)((()=>e.route||o.value)),s=(0,r.f3)(c,0),i=(0,r.Fl)((()=>a.value.matched[s]));(0,r.JJ)(c,s+1),(0,r.JJ)(l,i),(0,r.JJ)(u,a);const f=(0,r.iH)();return(0,r.YP)((()=>[f.value,i.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards=o.leaveGuards,t.updateGuards=o.updateGuards)),!e||!t||o&&y(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=a.value,l=i.value,c=l&&l.components[e.name],s=e.name;if(!c)return Re(n.default,{Component:c,route:o});const u=l.props[e.name],h=u?!0===u?o.params:"function"==typeof u?u(o):u:null,d=(0,r.h)(c,p({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(l.instances[s]=null)},ref:f}));return Re(n.default,{Component:d,route:o})||d}}});function Pe(e){const t=function(e,t){const n=[],r=new Map;function o(e,n,r){let c=!r,s=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Y(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);s.aliasOf=r&&r.record;const i=z(t,e),u=[s];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s}))}let f,h;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=K(t,n,i),r?r.alias.push(f):(h=h||f,h!==f&&h.alias.push(f),c&&e.name&&!X(f)&&a(e.name)),"children"in s){let e=s.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,l(f)}return h?()=>{a(h)}:d}function a(e){if(_(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function l(e){let t=0;for(;t<n.length&&V(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!X(e)&&r.set(e.record.name,e)}return t=z({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,l,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw M(1,{location:e});l=o.record.name,c=p(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),l=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw M(1,{location:e,currentLocation:t});l=o.record.name,c=p({},t.params,e.params),a=o.stringify(c)}const s=[];let i=o;for(;i;)s.unshift(i.record),i=i.parent;return{name:l,path:a,params:c,matched:s,meta:Z(s)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}(e.routes,e);let n=e.parseQuery||ge,o=e.stringifyQuery||ve,a=e.history;const l=be(),c=be(),m=be(),v=(0,r.XI)(L);let w=L;f&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=h.bind(null,(e=>""+e)),O=h.bind(null,de),k=h.bind(null,me);function A(e,r){if(r=p({},r||v.value),"string"==typeof e){let o=g(n,e,r.path),l=t.resolve({path:o.path},r),c=a.createHref(o.fullPath);return p(o,l,{params:k(l.params),hash:me(o.hash),redirectedFrom:void 0,href:c})}let l;"path"in e?l=p({},e,{path:g(n,e.path,r.path).path}):(l=p({},e,{params:O(e.params)}),r.params=O(r.params));let c=t.resolve(l,r);const s=e.hash||"";c.params=E(k(c.params));const i=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(o,p({},e,{hash:(u=s,pe(u).replace(se,"{").replace(ue,"}").replace(le,"^")),path:c.path}));var u;let f=a.createHref(i);return p({fullPath:i,hash:s,query:o===ve?ye(e.query):e.query},c,{redirectedFrom:void 0,href:f})}function R(e){return"string"==typeof e?g(n,e,v.value.path):p({},e)}function $(e,t){if(w!==e)return M(8,{from:t,to:e})}function S(e){return q(e)}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=R(r):{path:r}),p({query:e.query,hash:e.hash,params:e.params},r)}}function q(e,t){const n=w=A(e),r=v.value,a=e.state,l=e.force,c=!0===e.replace,s=j(n);if(s)return q(p(R(s),{state:a,force:l,replace:c}),t||n);const i=n;let u;return i.redirectedFrom=t,!l&&function(e,t,n){let r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&y(t.matched[r],n.matched[o])&&b(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(o,r,n)&&(u=M(16,{to:i,from:r}),N(r,r,!0,!1)),(u?Promise.resolve(u):U(i,r)).catch((e=>I(e)?e:H(e))).then((e=>{if(e){if(I(e,2))return q(p(R(e.to),{state:a,force:l,replace:c}),t||i)}else e=G(i,r,!0,c,a);return B(i,r,e),e}))}function F(e,t){const n=$(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let l=0;l<a;l++){const a=t.matched[l];a&&(e.matched.indexOf(a)<0?n.push(a):r.push(a));const c=e.matched[l];c&&t.matched.indexOf(c)<0&&o.push(c)}return[n,r,o]}(e,t);n=Ee(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(we(r,e,t))}));const s=F.bind(null,e,t);return n.push(s),Ce(n).then((()=>{n=[];for(const r of l.list())n.push(we(r,e,t));return n.push(s),Ce(n)})).then((()=>{n=Ee(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(we(r,e,t))}));return n.push(s),Ce(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const o of r.beforeEnter)n.push(we(o,e,t));else n.push(we(r.beforeEnter,e,t));return n.push(s),Ce(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ee(a,"beforeRouteEnter",e,t),n.push(s),Ce(n)))).then((()=>{n=[];for(const r of c.list())n.push(we(r,e,t));return n.push(s),Ce(n)})).catch((e=>I(e,8)?e:Promise.reject(e)))}function B(e,t,n){for(const r of m.list())r(e,t,n)}function G(e,t,n,r,o){const l=$(e,t);if(l)return l;const c=t===L,s=f?history.state:{};n&&(r||c?a.replace(e.fullPath,p({scroll:c&&s&&s.scroll},o)):a.push(e.fullPath,o)),v.value=e,N(e,t,n,c),Q()}let T;let J,D=be(),W=be();function H(e){return Q(e),W.list().forEach((t=>t(e))),Promise.reject(e)}function Q(e){J||(J=!0,T=a.listen(((e,t,n)=>{let r=A(e);const o=j(r);if(o)return void q(p(o,{replace:!0}),r).catch(d);w=r;const l=v.value;var c,s;f&&(c=P(l.fullPath,n.delta),s=x(),C.set(c,s)),U(r,l).catch((e=>I(e,12)?e:I(e,2)?(q(e.to,r).catch(d),Promise.reject()):(n.delta&&a.go(-n.delta,!1),H(e)))).then((e=>{(e=e||G(r,l,!1))&&n.delta&&a.go(-n.delta,!1),B(r,l,e)})).catch(d)})),D.list().forEach((([t,n])=>e?n(e):t())),D.reset())}function N(t,n,o,a){const{scrollBehavior:l}=e;if(!f||!l)return Promise.resolve();let c=!o&&function(e){const t=C.get(e);return C.delete(e),t}(P(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>l(t,n,c))).then((e=>e&&function(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch(H)}const ee=e=>a.go(e);let te;const ne=new Set;return{currentRoute:v,addRoute:function(e,n){let r,o;return _(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:A,options:e,push:S,replace:function(e){return S(p(R(e),{replace:!0}))},go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:l.add,beforeResolve:c.add,afterEach:m.add,onError:W.add,isReady:function(){return J&&v.value!==L?Promise.resolve():new Promise(((e,t)=>{D.add([e,t])}))},install(e){e.component("RouterLink",Oe),e.component("RouterView",xe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>(0,r.SU)(v)}),f&&!te&&v.value===L&&(te=!0,S(a.location).catch((e=>{})));const t={};for(let e in L)t[e]=(0,r.Fl)((()=>v.value[e]));e.provide(s,this),e.provide(i,(0,r.qj)(t)),e.provide(u,v);let n=e.unmount;ne.add(e),e.unmount=function(){ne.delete(e),ne.size<1&&(T(),v.value=L,te=!1,J=!1),n.call(this,arguments)}}}}function Ce(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}]);
//# sourceMappingURL=npm.vue-router.916965b06d6b253442bf.js.map