(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const v of o)if(v.type==="childList")for(const c of v.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const v={};return o.integrity&&(v.integrity=o.integrity),o.referrerPolicy&&(v.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?v.credentials="include":o.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function f(o){if(o.ep)return;o.ep=!0;const v=a(o);fetch(o.href,v)}})();const s$=!1;var Tp=Array.isArray,c$=Array.from,_$=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,h$=Object.prototype,p$=Array.prototype,d$=Object.getPrototypeOf;const Nn=2,Op=4,kv=8,zv=16,Vn=32,It=64,Qv=128,ye=256,Rt=512,pn=1024,ve=2048,yi=4096,bt=8192,Ze=16384,g$=32768,m$=65536,$$=1<<19,Fp=1<<20,iu=Symbol("$state");function Cp(i){return i===this.v}function q$(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function R$(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function b$(i){throw new Error("https://svelte.dev/e/effect_orphan")}function y$(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function L$(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function I$(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function A$(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function w$(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let E$=!1;const S$=2,_n=Symbol();function Yn(i,e){var a={f:0,v:i,reactions:null,equals:Cp,version:0};return a}function N$(i){return P$(Yn(i))}function P$(i){return Or!==null&&Or.f&Nn&&(On===null?Q$([i]):On.push(i)),i}function Zn(i,e){return Or!==null&&k$()&&Or.f&(Nn|zv)&&(On===null||!On.includes(i))&&w$(),M$(i,e)}function M$(i,e){return i.equals(e)||(i.v=e,i.version=jp(),Hp(i,ve),yr!==null&&yr.f&pn&&!(yr.f&Vn)&&(Jr!==null&&Jr.includes(i)?(Qn(yr,ve),St(yr)):le===null?J$([i]):le.push(i))),e}function Hp(i,e){var a=i.reactions;if(a!==null)for(var f=a.length,o=0;o<f;o++){var v=a[o],c=v.f;c&ve||(Qn(v,e),c&(pn|ye)&&(c&Nn?Hp(v,yi):St(v)))}}function qe(i,e=null,a){if(typeof i!="object"||i===null||iu in i)return i;const f=d$(i);if(f!==h$&&f!==p$)return i;var o=new Map,v=Tp(i),c=Yn(0);v&&o.set("length",Yn(i.length));var p;return new Proxy(i,{defineProperty(g,m,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&L$();var q=o.get(m);return q===void 0?(q=Yn(d.value),o.set(m,q)):Zn(q,qe(d.value,p)),!0},deleteProperty(g,m){var d=o.get(m);if(d===void 0)m in g&&o.set(m,Yn(_n));else{if(v&&typeof m=="string"){var q=o.get("length"),A=Number(m);Number.isInteger(A)&&A<q.v&&Zn(q,A)}Zn(d,_n),Dc(c)}return!0},get(g,m,d){var E;if(m===iu)return i;var q=o.get(m),A=m in g;if(q===void 0&&(!A||(E=qi(g,m))!=null&&E.writable)&&(q=Yn(qe(A?g[m]:_n,p)),o.set(m,q)),q!==void 0){var h=oe(q);return h===_n?void 0:h}return Reflect.get(g,m,d)},getOwnPropertyDescriptor(g,m){var d=Reflect.getOwnPropertyDescriptor(g,m);if(d&&"value"in d){var q=o.get(m);q&&(d.value=oe(q))}else if(d===void 0){var A=o.get(m),h=A==null?void 0:A.v;if(A!==void 0&&h!==_n)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return d},has(g,m){var h;if(m===iu)return!0;var d=o.get(m),q=d!==void 0&&d.v!==_n||Reflect.has(g,m);if(d!==void 0||yr!==null&&(!q||(h=qi(g,m))!=null&&h.writable)){d===void 0&&(d=Yn(q?qe(g[m],p):_n),o.set(m,d));var A=oe(d);if(A===_n)return!1}return q},set(g,m,d,q){var G;var A=o.get(m),h=m in g;if(v&&m==="length")for(var E=d;E<A.v;E+=1){var y=o.get(E+"");y!==void 0?Zn(y,_n):E in g&&(y=Yn(_n),o.set(E+"",y))}A===void 0?(!h||(G=qi(g,m))!=null&&G.writable)&&(A=Yn(void 0),Zn(A,qe(d,p)),o.set(m,A)):(h=A.v!==_n,Zn(A,qe(d,p)));var R=Reflect.getOwnPropertyDescriptor(g,m);if(R!=null&&R.set&&R.set.call(q,d),!h){if(v&&typeof m=="string"){var S=o.get("length"),F=Number(m);Number.isInteger(F)&&F>=S.v&&Zn(S,F+1)}Dc(c)}return!0},ownKeys(g){oe(c);var m=Reflect.ownKeys(g).filter(A=>{var h=o.get(A);return h===void 0||h.v!==_n});for(var[d,q]of o)q.v!==_n&&!(d in g)&&m.push(d);return m},setPrototypeOf(){I$()}})}function Dc(i,e=1){Zn(i,i.v+e)}var Gc,Wp,Dp;function T$(){if(Gc===void 0){Gc=window;var i=Element.prototype,e=Node.prototype;Wp=qi(e,"firstChild").get,Dp=qi(e,"nextSibling").get,i.__click=void 0,i.__className="",i.__attributes=null,i.__styles=null,i.__e=void 0,Text.prototype.__t=void 0}}function O$(i=""){return document.createTextNode(i)}function Gp(i){return Wp.call(i)}function Bp(i){return Dp.call(i)}function tu(i,e){return Gp(i)}function F$(i,e=1,a=!1){let f=i;for(;e--;)f=Bp(f);return f}function C$(i){var e=Nn|ve;yr===null?e|=ye:yr.f|=Fp;var a=Or!==null&&Or.f&Nn?Or:null;const f={children:null,ctx:un,deps:null,equals:Cp,f:e,fn:i,reactions:null,v:null,version:0,parent:a??yr};return a!==null&&(a.children??(a.children=[])).push(f),f}function Up(i){var e=i.children;if(e!==null){i.children=null;for(var a=0;a<e.length;a+=1){var f=e[a];f.f&Nn?jv(f):be(f)}}}function H$(i){for(var e=i.parent;e!==null;){if(!(e.f&Nn))return e;e=e.parent}return null}function Xp(i){var e,a=yr;Ye(H$(i));try{Up(i),e=xp(i)}finally{Ye(a)}return e}function Kp(i){var e=Xp(i),a=(Re||i.f&ye)&&i.deps!==null?yi:pn;Qn(i,a),i.equals(e)||(i.v=e,i.version=jp())}function jv(i){Up(i),bi(i,0),Qn(i,Ze),i.v=i.children=i.deps=i.ctx=i.reactions=null}function W$(i){yr===null&&Or===null&&b$(),Or!==null&&Or.f&ye&&R$(),xv&&q$()}function D$(i,e){var a=e.last;a===null?e.last=e.first=i:(a.next=i,i.prev=a,e.last=i)}function At(i,e,a,f=!0){var o=(i&It)!==0,v=yr,c={ctx:un,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:i|ve,first:null,fn:e,last:null,next:null,parent:o?null:v,prev:null,teardown:null,transitions:null,version:0};if(a){var p=Xe;try{Bc(!0),r1(c),c.f|=g$}catch(d){throw be(c),d}finally{Bc(p)}}else e!==null&&St(c);var g=a&&c.deps===null&&c.first===null&&c.nodes_start===null&&c.teardown===null&&(c.f&Fp)===0;if(!g&&!o&&f&&(v!==null&&D$(c,v),Or!==null&&Or.f&Nn)){var m=Or;(m.children??(m.children=[])).push(c)}return c}function G$(i){W$();var e=yr!==null&&(yr.f&Vn)!==0&&un!==null&&!un.m;if(e){var a=un;(a.e??(a.e=[])).push({fn:i,effect:yr,reaction:Or})}else{var f=Yp(i);return f}}function B$(i){const e=At(It,i,!0);return(a={})=>new Promise(f=>{a.outro?Z$(e,()=>{be(e),f(void 0)}):(be(e),f(void 0))})}function Yp(i){return At(Op,i,!1)}function U$(i){return X$(i)}function X$(i,e=0){return At(kv|zv|e,i,!0)}function K$(i,e=!0){return At(kv|Vn,i,!0,e)}function Zp(i){var e=i.teardown;if(e!==null){const a=xv,f=Or;Uc(!0),Ke(null);try{e.call(null)}finally{Uc(a),Ke(f)}}}function Vp(i){var e=i.deriveds;if(e!==null){i.deriveds=null;for(var a=0;a<e.length;a+=1)jv(e[a])}}function Qp(i,e=!1){var a=i.first;for(i.first=i.last=null;a!==null;){var f=a.next;be(a,e),a=f}}function Y$(i){for(var e=i.first;e!==null;){var a=e.next;e.f&Vn||be(e),e=a}}function be(i,e=!0){var a=!1;if((e||i.f&$$)&&i.nodes_start!==null){for(var f=i.nodes_start,o=i.nodes_end;f!==null;){var v=f===o?null:Bp(f);f.remove(),f=v}a=!0}Qp(i,e&&!a),Vp(i),bi(i,0),Qn(i,Ze);var c=i.transitions;if(c!==null)for(const g of c)g.stop();Zp(i);var p=i.parent;p!==null&&p.first!==null&&Jp(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes_start=i.nodes_end=null}function Jp(i){var e=i.parent,a=i.prev,f=i.next;a!==null&&(a.next=f),f!==null&&(f.prev=a),e!==null&&(e.first===i&&(e.first=f),e.last===i&&(e.last=a))}function Z$(i,e){var a=[];kp(i,a,!0),V$(a,()=>{be(i),e&&e()})}function V$(i,e){var a=i.length;if(a>0){var f=()=>--a||e();for(var o of i)o.out(f)}else e()}function kp(i,e,a){if(!(i.f&bt)){if(i.f^=bt,i.transitions!==null)for(const c of i.transitions)(c.is_global||a)&&e.push(c);for(var f=i.first;f!==null;){var o=f.next,v=(f.f&m$)!==0||(f.f&Vn)!==0;kp(f,e,v?a:!1),f=o}}}let qt=!1,yt=!1,Lt=null,Xe=!1,xv=!1;function Bc(i){Xe=i}function Uc(i){xv=i}let Jv=[],Ri=0;let Or=null;function Ke(i){Or=i}let yr=null;function Ye(i){yr=i}let On=null;function Q$(i){On=i}let Jr=null,hn=0,le=null;function J$(i){le=i}let zp=1,Re=!1,un=null;function jp(){return++zp}function k$(){return!E$}function wt(i){var c,p;var e=i.f;if(e&ve)return!0;if(e&yi){var a=i.deps,f=(e&ye)!==0;if(a!==null){var o;if(e&Rt){for(o=0;o<a.length;o++)((c=a[o]).reactions??(c.reactions=[])).push(i);i.f^=Rt}for(o=0;o<a.length;o++){var v=a[o];if(wt(v)&&Kp(v),f&&yr!==null&&!Re&&!((p=v==null?void 0:v.reactions)!=null&&p.includes(i))&&(v.reactions??(v.reactions=[])).push(i),v.version>i.version)return!0}}(!f||yr!==null&&!Re)&&Qn(i,pn)}return!1}function z$(i,e){for(var a=e;a!==null;){if(a.f&Qv)try{a.fn(i);return}catch{a.f^=Qv}a=a.parent}throw qt=!1,i}function j$(i){return(i.f&Ze)===0&&(i.parent===null||(i.parent.f&Qv)===0)}function Et(i,e,a,f){if(qt){if(a===null&&(qt=!1),j$(e))throw i;return}a!==null&&(qt=!0);{z$(i,e);return}}function xp(i){var A;var e=Jr,a=hn,f=le,o=Or,v=Re,c=On,p=un,g=i.f;Jr=null,hn=0,le=null,Or=g&(Vn|It)?null:i,Re=!Xe&&(g&ye)!==0,On=null,un=i.ctx;try{var m=(0,i.fn)(),d=i.deps;if(Jr!==null){var q;if(bi(i,hn),d!==null&&hn>0)for(d.length=hn+Jr.length,q=0;q<Jr.length;q++)d[hn+q]=Jr[q];else i.deps=d=Jr;if(!Re)for(q=hn;q<d.length;q++)((A=d[q]).reactions??(A.reactions=[])).push(i)}else d!==null&&hn<d.length&&(bi(i,hn),d.length=hn);return m}finally{Jr=e,hn=a,le=f,Or=o,Re=v,On=c,un=p}}function x$(i,e){let a=e.reactions;if(a!==null){var f=a.indexOf(i);if(f!==-1){var o=a.length-1;o===0?a=e.reactions=null:(a[f]=a[o],a.pop())}}a===null&&e.f&Nn&&(Jr===null||!Jr.includes(e))&&(Qn(e,yi),e.f&(ye|Rt)||(e.f^=Rt),bi(e,0))}function bi(i,e){var a=i.deps;if(a!==null)for(var f=e;f<a.length;f++)x$(i,a[f])}function r1(i){var e=i.f;if(!(e&Ze)){Qn(i,pn);var a=yr,f=un;yr=i;try{e&zv?Y$(i):Qp(i),Vp(i),Zp(i);var o=xp(i);i.teardown=typeof o=="function"?o:null,i.version=zp}catch(v){Et(v,i,a,f||i.ctx)}finally{yr=a}}}function rq(){if(Ri>1e3){Ri=0;try{y$()}catch(i){if(Lt!==null)Et(i,Lt,null);else throw i}}Ri++}function nq(i){var e=i.length;if(e!==0){rq();var a=Xe;Xe=!0;try{for(var f=0;f<e;f++){var o=i[f];o.f&pn||(o.f^=pn);var v=[];r4(o,v),eq(v)}}finally{Xe=a}}}function eq(i){var e=i.length;if(e!==0)for(var a=0;a<e;a++){var f=i[a];if(!(f.f&(Ze|bt)))try{wt(f)&&(r1(f),f.deps===null&&f.first===null&&f.nodes_start===null&&(f.teardown===null?Jp(f):f.fn=null))}catch(o){Et(o,f,null,f.ctx)}}}function iq(){if(yt=!1,Ri>1001)return;const i=Jv;Jv=[],nq(i),yt||(Ri=0,Lt=null)}function St(i){yt||(yt=!0,queueMicrotask(iq)),Lt=i;for(var e=i;e.parent!==null;){e=e.parent;var a=e.f;if(a&(It|Vn)){if(!(a&pn))return;e.f^=pn}}Jv.push(e)}function r4(i,e){var a=i.first,f=[];r:for(;a!==null;){var o=a.f,v=(o&Vn)!==0,c=v&&(o&pn)!==0,p=a.next;if(!c&&!(o&bt))if(o&kv){if(v)a.f^=pn;else try{wt(a)&&r1(a)}catch(q){Et(q,a,null,a.ctx)}var g=a.first;if(g!==null){a=g;continue}}else o&Op&&f.push(a);if(p===null){let q=a.parent;for(;q!==null;){if(i===q)break r;var m=q.next;if(m!==null){a=m;continue r}q=q.parent}}a=p}for(var d=0;d<f.length;d++)g=f[d],e.push(g),r4(g,e)}function oe(i){var d;var e=i.f,a=(e&Nn)!==0;if(a&&e&Ze){var f=Xp(i);return jv(i),f}if(Or!==null){On!==null&&On.includes(i)&&A$();var o=Or.deps;Jr===null&&o!==null&&o[hn]===i?hn++:Jr===null?Jr=[i]:Jr.push(i),le!==null&&yr!==null&&yr.f&pn&&!(yr.f&Vn)&&le.includes(i)&&(Qn(yr,ve),St(yr))}else if(a&&i.deps===null)for(var v=i,c=v.parent,p=v;c!==null;)if(c.f&Nn){var g=c;p=g,c=g.parent}else{var m=c;(d=m.deriveds)!=null&&d.includes(p)||(m.deriveds??(m.deriveds=[])).push(p);break}return a&&(v=i,wt(v)&&Kp(v)),i.v}const tq=~(ve|yi|pn);function Qn(i,e){i.f=i.f&tq|e}function n4(i,e=!1,a){un={p:un,c:null,e:null,m:!1,s:i,x:null,l:null}}function e4(i){const e=un;if(e!==null){const c=e.e;if(c!==null){var a=yr,f=Or;e.e=null;try{for(var o=0;o<c.length;o++){var v=c[o];Ye(v.effect),Ke(v.reaction),Yp(v.fn)}}finally{Ye(a),Ke(f)}}un=e.p,e.m=!0}return{}}const aq=["touchstart","touchmove"];function uq(i){return aq.includes(i)}const fq=new Set,Xc=new Set;function gt(i){var F;var e=this,a=e.ownerDocument,f=i.type,o=((F=i.composedPath)==null?void 0:F.call(i))||[],v=o[0]||i.target,c=0,p=i.__root;if(p){var g=o.indexOf(p);if(g!==-1&&(e===document||e===window)){i.__root=e;return}var m=o.indexOf(e);if(m===-1)return;g<=m&&(c=g)}if(v=o[c]||i.target,v!==e){_$(i,"currentTarget",{configurable:!0,get(){return v||a}});var d=Or,q=yr;Ke(null),Ye(null);try{for(var A,h=[];v!==null;){var E=v.assignedSlot||v.parentNode||v.host||null;try{var y=v["__"+f];if(y!==void 0&&!v.disabled)if(Tp(y)){var[R,...S]=y;R.apply(v,[i,...S])}else y.call(v,i)}catch(G){A?h.push(G):A=G}if(i.cancelBubble||E===e||E===null)break;v=E}if(A){for(let G of h)queueMicrotask(()=>{throw G});throw A}}finally{i.__root=e,delete i.currentTarget,Ke(d),Ye(q)}}}function oq(i){var e=document.createElement("template");return e.innerHTML=i,e.content}function lq(i,e){var a=yr;a.nodes_start===null&&(a.nodes_start=i,a.nodes_end=e)}function vq(i,e){var a=(e&S$)!==0,f,o=!i.startsWith("<!>");return()=>{f===void 0&&(f=oq(o?i:"<!>"+i),f=Gp(f));var v=a?document.importNode(f,!0):f.cloneNode(!0);return lq(v,v),v}}function sq(i,e){i!==null&&i.before(e)}function Kc(i,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(i.__t??(i.__t=i.nodeValue))&&(i.__t=a,i.nodeValue=a==null?"":a+"")}function cq(i,e){return _q(i,e)}const Ue=new Map;function _q(i,{target:e,anchor:a,props:f={},events:o,context:v,intro:c=!0}){T$();var p=new Set,g=q=>{for(var A=0;A<q.length;A++){var h=q[A];if(!p.has(h)){p.add(h);var E=uq(h);e.addEventListener(h,gt,{passive:E});var y=Ue.get(h);y===void 0?(document.addEventListener(h,gt,{passive:E}),Ue.set(h,1)):Ue.set(h,y+1)}}};g(c$(fq)),Xc.add(g);var m=void 0,d=B$(()=>{var q=a??e.appendChild(O$());return K$(()=>{if(v){n4({});var A=un;A.c=v}o&&(f.$$events=o),m=i(q,f)||{},v&&e4()}),()=>{var E;for(var A of p){e.removeEventListener(A,gt);var h=Ue.get(A);--h===0?(document.removeEventListener(A,gt),Ue.delete(A)):Ue.set(A,h)}Xc.delete(g),q!==a&&((E=q.parentNode)==null||E.removeChild(q))}});return hq.set(m,d),m}let hq=new WeakMap;const pq="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pq);var mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dq(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var au,Yc;function gq(){if(Yc)return au;Yc=1;var i=typeof Object.defineProperty=="function"?Object.defineProperty:null;return au=i,au}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uu,Zc;function mq(){if(Zc)return uu;Zc=1;var i=gq();function e(){try{return i({},"x",{}),!0}catch{return!1}}return uu=e,uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fu,Vc;function $q(){if(Vc)return fu;Vc=1;var i=Object.defineProperty;return fu=i,fu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ou,Qc;function i4(){if(Qc)return ou;Qc=1;function i(e){return typeof e=="number"}return ou=i,ou}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lu,Jc;function t4(){if(Jc)return lu;Jc=1;function i(f){return f[0]==="-"}function e(f){var o="",v;for(v=0;v<f;v++)o+="0";return o}function a(f,o,v){var c=!1,p=o-f.length;return p<0||(i(f)&&(c=!0,f=f.substr(1)),f=v?f+e(p):e(p)+f,c&&(f="-"+f)),f}return lu=a,lu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vu,kc;function qq(){if(kc)return vu;kc=1;var i=i4(),e=t4(),a=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function o(v){var c,p,g;switch(v.specifier){case"b":c=2;break;case"o":c=8;break;case"x":case"X":c=16;break;case"d":case"i":case"u":default:c=10;break}if(p=v.arg,g=parseInt(p,10),!isFinite(g)){if(!i(p))throw new Error("invalid integer. Value: "+p);g=0}return g<0&&(v.specifier==="u"||c!==10)&&(g=4294967295+g+1),g<0?(p=(-g).toString(c),v.precision&&(p=e(p,v.precision,v.padRight)),p="-"+p):(p=g.toString(c),!g&&!v.precision?p="":v.precision&&(p=e(p,v.precision,v.padRight)),v.sign&&(p=v.sign+p)),c===16&&(v.alternate&&(p="0x"+p),p=v.specifier===f.call(v.specifier)?f.call(p):a.call(p)),c===8&&v.alternate&&p.charAt(0)!=="0"&&(p="0"+p),p}return vu=o,vu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var su,zc;function Rq(){if(zc)return su;zc=1;function i(e){return typeof e=="string"}return su=i,su}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cu,jc;function bq(){if(jc)return cu;jc=1;var i=i4(),e=Math.abs,a=String.prototype.toLowerCase,f=String.prototype.toUpperCase,o=String.prototype.replace,v=/e\+(\d)$/,c=/e-(\d)$/,p=/^(\d+)$/,g=/^(\d+)e/,m=/\.0$/,d=/\.0*e/,q=/(\..*[^0])0*e/;function A(h){var E,y,R=parseFloat(h.arg);if(!isFinite(R)){if(!i(h.arg))throw new Error("invalid floating-point number. Value: "+y);R=h.arg}switch(h.specifier){case"e":case"E":y=R.toExponential(h.precision);break;case"f":case"F":y=R.toFixed(h.precision);break;case"g":case"G":e(R)<1e-4?(E=h.precision,E>0&&(E-=1),y=R.toExponential(E)):y=R.toPrecision(h.precision),h.alternate||(y=o.call(y,q,"$1e"),y=o.call(y,d,"e"),y=o.call(y,m,""));break;default:throw new Error("invalid double notation. Value: "+h.specifier)}return y=o.call(y,v,"e+0$1"),y=o.call(y,c,"e-0$1"),h.alternate&&(y=o.call(y,p,"$1."),y=o.call(y,g,"$1.e")),R>=0&&h.sign&&(y=h.sign+y),y=h.specifier===f.call(h.specifier)?f.call(y):a.call(y),y}return cu=A,cu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _u,xc;function yq(){if(xc)return _u;xc=1;function i(a){var f="",o;for(o=0;o<a;o++)f+=" ";return f}function e(a,f,o){var v=f-a.length;return v<0||(a=o?a+i(v):i(v)+a),a}return _u=e,_u}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hu,r2;function Lq(){if(r2)return hu;r2=1;var i=qq(),e=Rq(),a=bq(),f=yq(),o=t4(),v=String.fromCharCode,c=Array.isArray;function p(d){return d!==d}function g(d){var q={};return q.specifier=d.specifier,q.precision=d.precision===void 0?1:d.precision,q.width=d.width,q.flags=d.flags||"",q.mapping=d.mapping,q}function m(d){var q,A,h,E,y,R,S,F,G;if(!c(d))throw new TypeError("invalid argument. First argument must be an array. Value: `"+d+"`.");for(R="",S=1,F=0;F<d.length;F++)if(h=d[F],e(h))R+=h;else{if(q=h.precision!==void 0,h=g(h),!h.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+F+"`. Value: `"+h+"`.");for(h.mapping&&(S=h.mapping),A=h.flags,G=0;G<A.length;G++)switch(E=A.charAt(G),E){case" ":h.sign=" ";break;case"+":h.sign="+";break;case"-":h.padRight=!0,h.padZeros=!1;break;case"0":h.padZeros=A.indexOf("-")<0;break;case"#":h.alternate=!0;break;default:throw new Error("invalid flag: "+E)}if(h.width==="*"){if(h.width=parseInt(arguments[S],10),S+=1,p(h.width))throw new TypeError("the argument for * width at position "+S+" is not a number. Value: `"+h.width+"`.");h.width<0&&(h.padRight=!0,h.width=-h.width)}if(q&&h.precision==="*"){if(h.precision=parseInt(arguments[S],10),S+=1,p(h.precision))throw new TypeError("the argument for * precision at position "+S+" is not a number. Value: `"+h.precision+"`.");h.precision<0&&(h.precision=1,q=!1)}switch(h.arg=arguments[S],h.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":q&&(h.padZeros=!1),h.arg=i(h);break;case"s":h.maxWidth=q?h.precision:-1,h.arg=String(h.arg);break;case"c":if(!p(h.arg)){if(y=parseInt(h.arg,10),y<0||y>127)throw new Error("invalid character code. Value: "+h.arg);h.arg=p(y)?String(h.arg):v(y)}break;case"e":case"E":case"f":case"F":case"g":case"G":q||(h.precision=6),h.arg=a(h);break;default:throw new Error("invalid specifier: "+h.specifier)}h.maxWidth>=0&&h.arg.length>h.maxWidth&&(h.arg=h.arg.substring(0,h.maxWidth)),h.padZeros?h.arg=o(h.arg,h.width||h.precision,h.padRight):h.width&&(h.arg=f(h.arg,h.width,h.padRight)),R+=h.arg||"",S+=1}return R}return hu=m,hu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pu,n2;function Iq(){if(n2)return pu;n2=1;var i=Lq();return pu=i,pu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var du,e2;function Aq(){if(e2)return du;e2=1;var i=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function e(f){var o={mapping:f[1]?parseInt(f[1],10):void 0,flags:f[2],width:f[3],precision:f[5],specifier:f[6]};return f[4]==="."&&f[5]===void 0&&(o.precision="1"),o}function a(f){var o,v,c,p;for(v=[],p=0,c=i.exec(f);c;)o=f.slice(p,i.lastIndex-c[0].length),o.length&&v.push(o),v.push(e(c)),p=i.lastIndex,c=i.exec(f);return o=f.slice(p),o.length&&v.push(o),v}return du=a,du}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gu,i2;function wq(){if(i2)return gu;i2=1;var i=Aq();return gu=i,gu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mu,t2;function Eq(){if(t2)return mu;t2=1;function i(e){return typeof e=="string"}return mu=i,mu}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $u,a2;function Sq(){if(a2)return $u;a2=1;var i=Iq(),e=wq(),a=Eq();function f(o){var v,c;if(!a(o))throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",o));for(v=[e(o)],c=1;c<arguments.length;c++)v.push(arguments[c]);return i.apply(null,v)}return $u=f,$u}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qu,u2;function Nq(){if(u2)return qu;u2=1;var i=Sq();return qu=i,qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ru,f2;function Pq(){if(f2)return Ru;f2=1;var i=Nq(),e=Object.prototype,a=e.toString,f=e.__defineGetter__,o=e.__defineSetter__,v=e.__lookupGetter__,c=e.__lookupSetter__;function p(g,m,d){var q,A,h,E;if(typeof g!="object"||g===null||a.call(g)==="[object Array]")throw new TypeError(i("invalid argument. First argument must be an object. Value: `%s`.",g));if(typeof d!="object"||d===null||a.call(d)==="[object Array]")throw new TypeError(i("invalid argument. Property descriptor must be an object. Value: `%s`.",d));if(A="value"in d,A&&(v.call(g,m)||c.call(g,m)?(q=g.__proto__,g.__proto__=e,delete g[m],g[m]=d.value,g.__proto__=q):g[m]=d.value),h="get"in d,E="set"in d,A&&(h||E))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&f&&f.call(g,m,d.get),E&&o&&o.call(g,m,d.set),g}return Ru=p,Ru}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bu,o2;function Mq(){if(o2)return bu;o2=1;var i=mq(),e=$q(),a=Pq(),f;return i()?f=e:f=a,bu=f,bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yu,l2;function Tq(){if(l2)return yu;l2=1;var i=Mq();function e(a,f,o){i(a,f,{configurable:!1,enumerable:!1,writable:!1,value:o})}return yu=e,yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lu,v2;function Ve(){if(v2)return Lu;v2=1;var i=Tq();return Lu=i,Lu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Iu,s2;function Oq(){if(s2)return Iu;s2=1;function i(e){return e!==e}return Iu=i,Iu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Au,c2;function Wr(){if(c2)return Au;c2=1;var i=Oq();return Au=i,Au}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wu,_2;function Gr(){if(_2)return wu;_2=1;var i=Number.POSITIVE_INFINITY;return wu=i,wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eu,h2;function Fq(){return h2||(h2=1,Eu=Number),Eu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Su,p2;function Cq(){if(p2)return Su;p2=1;var i=Fq();return Su=i,Su}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nu,d2;function xr(){if(d2)return Nu;d2=1;var i=Cq(),e=i.NEGATIVE_INFINITY;return Nu=e,Nu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pu,g2;function Hq(){if(g2)return Pu;g2=1;var i=Gr(),e=xr();function a(f){return f===i||f===e}return Pu=a,Pu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mu,m2;function Le(){if(m2)return Mu;m2=1;var i=Hq();return Mu=i,Mu}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Tu,$2;function Wq(){if($2)return Tu;$2=1;function i(e){return Math.abs(e)}return Tu=i,Tu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ou,q2;function Zr(){if(q2)return Ou;q2=1;var i=Wq();return Ou=i,Ou}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fu,R2;function Dq(){if(R2)return Fu;R2=1;function i(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}return Fu=i,Fu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cu,b2;function Gq(){if(b2)return Cu;b2=1;var i=Dq();return Cu=i,Cu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hu,y2;function Bq(){if(y2)return Hu;y2=1;var i=Gq(),e=i();function a(){return e&&typeof Symbol.toStringTag=="symbol"}return Hu=a,Hu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wu,L2;function Uq(){if(L2)return Wu;L2=1;var i=Bq();return Wu=i,Wu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Du,I2;function a4(){if(I2)return Du;I2=1;var i=Object.prototype.toString;return Du=i,Du}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gu,A2;function Xq(){if(A2)return Gu;A2=1;var i=a4();function e(a){return i.call(a)}return Gu=e,Gu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bu,w2;function Kq(){if(w2)return Bu;w2=1;var i=Object.prototype.hasOwnProperty;function e(a,f){return a==null?!1:i.call(a,f)}return Bu=e,Bu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uu,E2;function Yq(){if(E2)return Uu;E2=1;var i=Kq();return Uu=i,Uu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xu,S2;function Zq(){if(S2)return Xu;S2=1;var i=typeof Symbol=="function"?Symbol:void 0;return Xu=i,Xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ku,N2;function Vq(){if(N2)return Ku;N2=1;var i=Zq();return Ku=i,Ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yu,P2;function Qq(){if(P2)return Yu;P2=1;var i=Vq(),e=typeof i=="function"?i.toStringTag:"";return Yu=e,Yu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zu,M2;function Jq(){if(M2)return Zu;M2=1;var i=Yq(),e=Qq(),a=a4();function f(o){var v,c,p;if(o==null)return a.call(o);c=o[e],v=i(o,e);try{o[e]=void 0}catch{return a.call(o)}return p=a.call(o),v?o[e]=c:delete o[e],p}return Zu=f,Zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vu,T2;function Nt(){if(T2)return Vu;T2=1;var i=Uq(),e=Xq(),a=Jq(),f;return i()?f=a:f=e,Vu=f,Vu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qu,O2;function kq(){if(O2)return Qu;O2=1;var i=Nt(),e=typeof Uint32Array=="function";function a(f){return e&&f instanceof Uint32Array||i(f)==="[object Uint32Array]"}return Qu=a,Qu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ju,F2;function zq(){if(F2)return Ju;F2=1;var i=kq();return Ju=i,Ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ku,C2;function jq(){if(C2)return ku;C2=1;var i=4294967295;return ku=i,ku}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zu,H2;function xq(){if(H2)return zu;H2=1;var i=typeof Uint32Array=="function"?Uint32Array:null;return zu=i,zu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ju,W2;function rR(){if(W2)return ju;W2=1;var i=zq(),e=jq(),a=xq();function f(){var o,v;if(typeof a!="function")return!1;try{v=[1,3.14,-3.14,e+1,e+2],v=new a(v),o=i(v)&&v[0]===1&&v[1]===3&&v[2]===e-2&&v[3]===0&&v[4]===1}catch{o=!1}return o}return ju=f,ju}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xu,D2;function nR(){if(D2)return xu;D2=1;var i=rR();return xu=i,xu}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r0,G2;function eR(){if(G2)return r0;G2=1;var i=typeof Uint32Array=="function"?Uint32Array:void 0;return r0=i,r0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var n0,B2;function iR(){if(B2)return n0;B2=1;function i(){throw new Error("not implemented")}return n0=i,n0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e0,U2;function Qe(){if(U2)return e0;U2=1;var i=nR(),e=eR(),a=iR(),f;return i()?f=e:f=a,e0=f,e0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var i0,X2;function tR(){if(X2)return i0;X2=1;var i=Nt(),e=typeof Float64Array=="function";function a(f){return e&&f instanceof Float64Array||i(f)==="[object Float64Array]"}return i0=a,i0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t0,K2;function aR(){if(K2)return t0;K2=1;var i=tR();return t0=i,t0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var a0,Y2;function uR(){if(Y2)return a0;Y2=1;var i=typeof Float64Array=="function"?Float64Array:null;return a0=i,a0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var u0,Z2;function fR(){if(Z2)return u0;Z2=1;var i=aR(),e=uR();function a(){var f,o;if(typeof e!="function")return!1;try{o=new e([1,3.14,-3.14,NaN]),f=i(o)&&o[0]===1&&o[1]===3.14&&o[2]===-3.14&&o[3]!==o[3]}catch{f=!1}return f}return u0=a,u0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var f0,V2;function oR(){if(V2)return f0;V2=1;var i=fR();return f0=i,f0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var o0,Q2;function lR(){if(Q2)return o0;Q2=1;var i=typeof Float64Array=="function"?Float64Array:void 0;return o0=i,o0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var l0,J2;function vR(){if(J2)return l0;J2=1;function i(){throw new Error("not implemented")}return l0=i,l0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v0,k2;function Je(){if(k2)return v0;k2=1;var i=oR(),e=lR(),a=vR(),f;return i()?f=e:f=a,v0=f,v0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var s0,z2;function sR(){if(z2)return s0;z2=1;var i=Nt(),e=typeof Uint8Array=="function";function a(f){return e&&f instanceof Uint8Array||i(f)==="[object Uint8Array]"}return s0=a,s0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var c0,j2;function cR(){if(j2)return c0;j2=1;var i=sR();return c0=i,c0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _0,x2;function _R(){if(x2)return _0;x2=1;var i=255;return _0=i,_0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var h0,r_;function hR(){if(r_)return h0;r_=1;var i=typeof Uint8Array=="function"?Uint8Array:null;return h0=i,h0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var p0,n_;function pR(){if(n_)return p0;n_=1;var i=cR(),e=_R(),a=hR();function f(){var o,v;if(typeof a!="function")return!1;try{v=[1,3.14,-3.14,e+1,e+2],v=new a(v),o=i(v)&&v[0]===1&&v[1]===3&&v[2]===e-2&&v[3]===0&&v[4]===1}catch{o=!1}return o}return p0=f,p0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var d0,e_;function dR(){if(e_)return d0;e_=1;var i=pR();return d0=i,d0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var g0,i_;function gR(){if(i_)return g0;i_=1;var i=typeof Uint8Array=="function"?Uint8Array:void 0;return g0=i,g0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var m0,t_;function mR(){if(t_)return m0;t_=1;function i(){throw new Error("not implemented")}return m0=i,m0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $0,a_;function $R(){if(a_)return $0;a_=1;var i=dR(),e=gR(),a=mR(),f;return i()?f=e:f=a,$0=f,$0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var q0,u_;function qR(){if(u_)return q0;u_=1;var i=Nt(),e=typeof Uint16Array=="function";function a(f){return e&&f instanceof Uint16Array||i(f)==="[object Uint16Array]"}return q0=a,q0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var R0,f_;function RR(){if(f_)return R0;f_=1;var i=qR();return R0=i,R0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var b0,o_;function bR(){if(o_)return b0;o_=1;var i=65535;return b0=i,b0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var y0,l_;function yR(){if(l_)return y0;l_=1;var i=typeof Uint16Array=="function"?Uint16Array:null;return y0=i,y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var L0,v_;function LR(){if(v_)return L0;v_=1;var i=RR(),e=bR(),a=yR();function f(){var o,v;if(typeof a!="function")return!1;try{v=[1,3.14,-3.14,e+1,e+2],v=new a(v),o=i(v)&&v[0]===1&&v[1]===3&&v[2]===e-2&&v[3]===0&&v[4]===1}catch{o=!1}return o}return L0=f,L0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var I0,s_;function IR(){if(s_)return I0;s_=1;var i=LR();return I0=i,I0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var A0,c_;function AR(){if(c_)return A0;c_=1;var i=typeof Uint16Array=="function"?Uint16Array:void 0;return A0=i,A0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var w0,__;function wR(){if(__)return w0;__=1;function i(){throw new Error("not implemented")}return w0=i,w0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var E0,h_;function ER(){if(h_)return E0;h_=1;var i=IR(),e=AR(),a=wR(),f;return i()?f=e:f=a,E0=f,E0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var S0,p_;function SR(){if(p_)return S0;p_=1;var i=$R(),e=ER(),a={uint16:e,uint8:i};return S0=a,S0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var N0,d_;function NR(){if(d_)return N0;d_=1;var i=SR(),e;function a(){var f,o;return f=new i.uint16(1),f[0]=4660,o=new i.uint8(f.buffer),o[0]===52}return e=a(),N0=e,N0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var P0,g_;function ke(){if(g_)return P0;g_=1;var i=NR();return P0=i,P0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var M0,m_;function PR(){if(m_)return M0;m_=1;var i=ke(),e;return i===!0?e=1:e=0,M0=e,M0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var T0,$_;function MR(){if($_)return T0;$_=1;var i=Qe(),e=Je(),a=PR(),f=new e(1),o=new i(f.buffer);function v(c){return f[0]=c,o[a]}return T0=v,T0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var O0,q_;function rn(){if(q_)return O0;q_=1;var i=MR();return O0=i,O0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var F0,R_;function TR(){if(R_)return F0;R_=1;var i=ke(),e;return i===!0?e=1:e=0,F0=e,F0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var C0,b_;function OR(){if(b_)return C0;b_=1;var i=Qe(),e=Je(),a=TR(),f=new e(1),o=new i(f.buffer);function v(c,p){return f[0]=c,o[a]=p>>>0,f[0]}return C0=v,C0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var H0,y_;function Ie(){if(y_)return H0;y_=1;var i=OR();return H0=i,H0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var W0,L_;function Jn(){if(L_)return W0;L_=1;var i=1023;return W0=i,W0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var D0,I_;function FR(){if(I_)return D0;I_=1;function i(e){return e===0?.3999999999940942:.3999999999940942+e*(.22222198432149784+e*.15313837699209373)}return D0=i,D0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var G0,A_;function CR(){if(A_)return G0;A_=1;function i(e){return e===0?.6666666666666735:.6666666666666735+e*(.2857142874366239+e*(.1818357216161805+e*.14798198605116586))}return G0=i,G0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var B0,w_;function HR(){if(w_)return B0;w_=1;var i=rn(),e=Ie(),a=Wr(),f=Jn(),o=xr(),v=FR(),c=CR(),p=.6931471803691238,g=19082149292705877e-26,m=0x40000000000000,d=.3333333333333333,q=1048575,A=2146435072,h=1048576,E=1072693248;function y(R){var S,F,G,U,O,W,L,X,Q,P,N,D;return R===0?o:a(R)||R<0?NaN:(F=i(R),O=0,F<h&&(O-=54,R*=m,F=i(R)),F>=A?R+R:(O+=(F>>20)-f|0,F&=q,X=F+614244&1048576|0,R=e(R,F|X^E),O+=X>>20|0,L=R-1,(q&2+F)<3?L===0?O===0?0:O*p+O*g:(W=L*L*(.5-d*L),O===0?L-W:O*p-(W-O*g-L)):(P=L/(2+L),D=P*P,X=F-398458|0,N=D*D,Q=440401-F|0,U=N*v(N),G=D*c(N),X|=Q,W=G+U,X>0?(S=.5*L*L,O===0?L-(S-P*(S+W)):O*p-(S-(P*(S+W)+O*g)-L)):O===0?L-P*(L-W):O*p-(P*(L-W)-O*g-L))))}return B0=y,B0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var U0,E_;function Ae(){if(E_)return U0;E_=1;var i=HR();return U0=i,U0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var X0,S_;function WR(){if(S_)return X0;S_=1;var i=Math.floor;return X0=i,X0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var K0,N_;function ze(){if(N_)return K0;N_=1;var i=WR();return K0=i,K0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Y0,P_;function DR(){if(P_)return Y0;P_=1;var i=Math.ceil;return Y0=i,Y0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Z0,M_;function GR(){if(M_)return Z0;M_=1;var i=DR();return Z0=i,Z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var V0,T_;function BR(){if(T_)return V0;T_=1;var i=ze(),e=GR();function a(f){return f<0?e(f):i(f)}return V0=a,V0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Q0,O_;function n1(){if(O_)return Q0;O_=1;var i=BR();return Q0=i,Q0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var J0,F_;function UR(){if(F_)return J0;F_=1;function i(e){return e===0?.0416666666666666:.0416666666666666+e*(-.001388888888887411+e*2480158728947673e-20)}return J0=i,J0}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var k0,C_;function XR(){if(C_)return k0;C_=1;function i(e){return e===0?-27557314351390663e-23:-27557314351390663e-23+e*(2087572321298175e-24+e*-11359647557788195e-27)}return k0=i,k0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/k_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var z0,H_;function KR(){if(H_)return z0;H_=1;var i=UR(),e=XR();function a(f,o){var v,c,p,g;return g=f*f,p=g*g,c=g*i(g),c+=p*p*e(g),v=.5*g,p=1-v,p+(1-p-v+(g*c-f*o))}return z0=a,z0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j0,W_;function u4(){if(W_)return j0;W_=1;var i=KR();return j0=i,j0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var x0,D_;function YR(){if(D_)return x0;D_=1;var i=-.16666666666666632,e=.00833333333332249,a=-.0001984126982985795,f=27557313707070068e-22,o=-25050760253406863e-24,v=158969099521155e-24;function c(p,g){var m,d,q,A;return A=p*p,q=A*A,m=e+A*(a+A*f)+A*q*(o+A*v),d=A*p,g===0?p+d*(i+A*m):p-(A*(.5*g-d*m)-g-d*i)}return x0=c,x0}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rf,G_;function f4(){if(G_)return rf;G_=1;var i=YR();return rf=i,rf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nf,B_;function kn(){if(B_)return nf;B_=1;var i=2147483647;return nf=i,nf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ef,U_;function e1(){if(U_)return ef;U_=1;var i=2146435072;return ef=i,ef}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var tf,X_;function i1(){if(X_)return tf;X_=1;var i=1048575;return tf=i,tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var af,K_;function ZR(){if(K_)return af;K_=1;var i=ke(),e;return i===!0?e=0:e=1,af=e,af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uf,Y_;function VR(){if(Y_)return uf;Y_=1;var i=Qe(),e=Je(),a=ZR(),f=new e(1),o=new i(f.buffer);function v(c){return f[0]=c,o[a]}return uf=v,uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ff,Z_;function QR(){if(Z_)return ff;Z_=1;var i=VR();return ff=i,ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var of,V_;function JR(){if(V_)return of;V_=1;var i=ke(),e,a,f;return i===!0?(a=1,f=0):(a=0,f=1),e={HIGH:a,LOW:f},of=e,of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lf,Q_;function kR(){if(Q_)return lf;Q_=1;var i=Qe(),e=Je(),a=JR(),f=new e(1),o=new i(f.buffer),v=a.HIGH,c=a.LOW;function p(g,m){return o[v]=g,o[c]=m,f[0]}return lf=p,lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vf,J_;function Pt(){if(J_)return vf;J_=1;var i=kR();return vf=i,vf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sf,k_;function zR(){if(k_)return sf;k_=1;var i=1023;return sf=i,sf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cf,z_;function jR(){if(z_)return cf;z_=1;var i=-1023;return cf=i,cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _f,j_;function xR(){if(j_)return _f;j_=1;var i=-1074;return _f=i,_f}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hf,x_;function rb(){if(x_)return hf;x_=1;var i=2147483648;return hf=i,hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pf,rh;function nb(){if(rh)return pf;rh=1;var i=ke(),e,a,f;return i===!0?(a=1,f=0):(a=0,f=1),e={HIGH:a,LOW:f},pf=e,pf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var df,nh;function o4(){if(nh)return df;nh=1;var i=Qe(),e=Je(),a=nb(),f=new e(1),o=new i(f.buffer),v=a.HIGH,c=a.LOW;function p(g,m,d,q){return f[0]=g,m[q]=o[v],m[q+d]=o[c],m}return df=p,df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gf,eh;function eb(){if(eh)return gf;eh=1;var i=o4();function e(a){return i(a,[0,0],1,0)}return gf=e,gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mf,ih;function Mt(){if(ih)return mf;ih=1;var i=Ve(),e=eb(),a=o4();return i(e,"assign",a),mf=e,mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $f,th;function ib(){if(th)return $f;th=1;var i=rb(),e=kn(),a=Mt(),f=rn(),o=Pt(),v=[0,0];function c(p,g){var m,d;return a.assign(p,v,1,0),m=v[0],m&=e,d=f(g),d&=i,m|=d,o(m,v[1])}return $f=c,$f}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qf,ah;function Tt(){if(ah)return qf;ah=1;var i=ib();return qf=i,qf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rf,uh;function tb(){if(uh)return Rf;uh=1;var i=22250738585072014e-324;return Rf=i,Rf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bf,fh;function l4(){if(fh)return bf;fh=1;var i=tb(),e=Le(),a=Wr(),f=Zr(),o=4503599627370496;function v(c,p,g,m){return a(c)||e(c)?(p[m]=c,p[m+g]=0,p):c!==0&&f(c)<i?(p[m]=c*o,p[m+g]=-52,p):(p[m]=c,p[m+g]=0,p)}return bf=v,bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yf,oh;function ab(){if(oh)return yf;oh=1;var i=l4();function e(a){return i(a,[0,0],1,0)}return yf=e,yf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lf,lh;function ub(){if(lh)return Lf;lh=1;var i=Ve(),e=ab(),a=l4();return i(e,"assign",a),Lf=e,Lf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var If,vh;function fb(){if(vh)return If;vh=1;var i=rn(),e=e1(),a=Jn();function f(o){var v=i(o);return v=(v&e)>>>20,v-a|0}return If=f,If}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Af,sh;function ob(){if(sh)return Af;sh=1;var i=fb();return Af=i,Af}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wf,ch;function lb(){if(ch)return wf;ch=1;var i=Gr(),e=xr(),a=Jn(),f=zR(),o=jR(),v=xR(),c=Wr(),p=Le(),g=Tt(),m=ub().assign,d=ob(),q=Mt(),A=Pt(),h=2220446049250313e-31,E=2148532223,y=[0,0],R=[0,0];function S(F,G){var U,O;return G===0||F===0||c(F)||p(F)?F:(m(F,y,1,0),F=y[0],G+=y[1],G+=d(F),G<v?g(0,F):G>f?F<0?e:i:(G<=o?(G+=52,O=h):O=1,q.assign(F,R,1,0),U=R[0],U&=E,U|=G+a<<20,O*A(U,R[1])))}return wf=S,wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ef,_h;function Ot(){if(_h)return Ef;_h=1;var i=lb();return Ef=i,Ef}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sf,hh;function vb(){if(hh)return Sf;hh=1;function i(e,a){var f,o;for(f=[],o=0;o<a;o++)f.push(e);return f}return Sf=i,Sf}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nf,ph;function sb(){if(ph)return Nf;ph=1;var i=vb();return Nf=i,Nf}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pf,dh;function cb(){if(dh)return Pf;dh=1;var i=sb();function e(a){return i(0,a)}return Pf=e,Pf}/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mf,gh;function _b(){if(gh)return Mf;gh=1;var i=cb();return Mf=i,Mf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Tf,mh;function hb(){if(mh)return Tf;mh=1;var i=ze(),e=Ot(),a=_b(),f=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],o=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],v=16777216,c=5960464477539063e-23,p=a(20),g=a(20),m=a(20),d=a(20);function q(h,E,y,R,S,F,G,U,O){var W,L,X,Q,P,N,D,B,z;for(Q=F,z=R[y],B=y,P=0;B>0;P++)L=c*z|0,d[P]=z-v*L|0,z=R[B-1]+L,B-=1;if(z=e(z,S),z-=8*i(z*.125),D=z|0,z-=D,X=0,S>0?(P=d[y-1]>>24-S,D+=P,d[y-1]-=P<<24-S,X=d[y-1]>>23-S):S===0?X=d[y-1]>>23:z>=.5&&(X=2),X>0){for(D+=1,W=0,P=0;P<y;P++)B=d[P],W===0?B!==0&&(W=1,d[P]=16777216-B):d[P]=16777215-B;if(S>0)switch(S){case 1:d[y-1]&=8388607;break;case 2:d[y-1]&=4194303;break}X===2&&(z=1-z,W!==0&&(z-=e(1,S)))}if(z===0){for(B=0,P=y-1;P>=F;P--)B|=d[P];if(B===0){for(N=1;d[F-N]===0;N++);for(P=y+1;P<=y+N;P++){for(O[U+P]=f[G+P],L=0,B=0;B<=U;B++)L+=h[B]*O[U+(P-B)];R[P]=L}return y+=N,q(h,E,y,R,S,F,G,U,O)}}if(z===0)for(y-=1,S-=24;d[y]===0;)y-=1,S-=24;else z=e(z,-S),z>=v?(L=c*z|0,d[y]=z-v*L|0,y+=1,S+=24,d[y]=L):d[y]=z|0;for(L=e(1,S),P=y;P>=0;P--)R[P]=L*d[P],L*=c;for(P=y;P>=0;P--){for(L=0,N=0;N<=Q&&N<=y-P;N++)L+=o[N]*R[P+N];m[y-P]=L}for(L=0,P=y;P>=0;P--)L+=m[P];for(X===0?E[0]=L:E[0]=-L,L=m[0]-L,P=1;P<=y;P++)L+=m[P];return X===0?E[1]=L:E[1]=-L,D&7}function A(h,E,y,R){var S,F,G,U,O,W,L,X,Q;for(F=4,U=R-1,G=(y-3)/24|0,G<0&&(G=0),W=y-24*(G+1),X=G-U,Q=U+F,L=0;L<=Q;L++)X<0?p[L]=0:p[L]=f[X],X+=1;for(L=0;L<=F;L++){for(S=0,X=0;X<=U;X++)S+=h[X]*p[U+(L-X)];g[L]=S}return O=F,q(h,E,O,g,W,F,G,U,p)}return Tf=A,Tf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Of,$h;function pb(){if($h)return Of;$h=1;var i=Math.round;return Of=i,Of}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ff,qh;function db(){if(qh)return Ff;qh=1;var i=pb();return Ff=i,Ff}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Cf,Rh;function gb(){if(Rh)return Cf;Rh=1;var i=db(),e=rn(),a=.6366197723675814,f=1.5707963267341256,o=6077100506506192e-26,v=6077100506303966e-26,c=20222662487959506e-37,p=20222662487111665e-37,g=84784276603689e-45,m=2047;function d(q,A,h){var E,y,R,S,F,G,U;return y=i(q*a),S=q-y*f,F=y*o,U=A>>20|0,h[0]=S-F,E=e(h[0]),G=U-(E>>20&m),G>16&&(R=S,F=y*v,S=R-F,F=y*c-(R-S-F),h[0]=S-F,E=e(h[0]),G=U-(E>>20&m),G>49&&(R=S,F=y*p,S=R-F,F=y*g-(R-S-F),h[0]=S-F)),h[1]=S-h[0]-F,y}return Cf=d,Cf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_rem_pio2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
*
* Optimized by Bruce D. Evans.
* ```
*/var Hf,bh;function mb(){if(bh)return Hf;bh=1;var i=kn(),e=e1(),a=i1(),f=rn(),o=QR(),v=Pt(),c=hb(),p=gb(),g=0,m=16777216,d=1.5707963267341256,q=6077100506506192e-26,A=2*q,h=3*q,E=4*q,y=598523,R=1072243195,S=1073928572,F=1074752122,G=1074977148,U=1075183036,O=1075388923,W=1075594811,L=1094263291,X=[0,0,0],Q=[0,0];function P(N,D){var B,z,pr,Y,Z,J,gr,V;if(pr=f(N),Y=pr&i|0,Y<=R)return D[0]=N,D[1]=0,0;if(Y<=F)return(Y&a)===y?p(N,Y,D):Y<=S?N>0?(V=N-d,D[0]=V-q,D[1]=V-D[0]-q,1):(V=N+d,D[0]=V+q,D[1]=V-D[0]+q,-1):N>0?(V=N-2*d,D[0]=V-A,D[1]=V-D[0]-A,2):(V=N+2*d,D[0]=V+A,D[1]=V-D[0]+A,-2);if(Y<=W)return Y<=U?Y===G?p(N,Y,D):N>0?(V=N-3*d,D[0]=V-h,D[1]=V-D[0]-h,3):(V=N+3*d,D[0]=V+h,D[1]=V-D[0]+h,-3):Y===O?p(N,Y,D):N>0?(V=N-4*d,D[0]=V-E,D[1]=V-D[0]-E,4):(V=N+4*d,D[0]=V+E,D[1]=V-D[0]+E,-4);if(Y<L)return p(N,Y,D);if(Y>=e)return D[0]=NaN,D[1]=NaN,0;for(B=o(N),z=(Y>>20)-1046,V=v(Y-(z<<20|0),B),J=0;J<2;J++)X[J]=V|0,V=(V-X[J])*m;for(X[2]=V,Z=3;X[Z-1]===g;)Z-=1;return gr=c(X,Q,z,Z,1),N<0?(D[0]=-Q[0],D[1]=-Q[1],-gr):(D[0]=Q[0],D[1]=Q[1],gr)}return Hf=P,Hf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wf,yh;function v4(){if(yh)return Wf;yh=1;var i=mb();return Wf=i,Wf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_cos.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Df,Lh;function $b(){if(Lh)return Df;Lh=1;var i=rn(),e=u4(),a=f4(),f=v4(),o=[0,0],v=2147483647,c=1072243195,p=1044381696,g=2146435072;function m(d){var q,A;if(q=i(d),q&=v,q<=c)return q<p?1:e(d,0);if(q>=g)return NaN;switch(A=f(d,o),A&3){case 0:return e(o[0],o[1]);case 1:return-a(o[0],o[1]);case 2:return-e(o[0],o[1]);default:return a(o[0],o[1])}}return Df=m,Df}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gf,Ih;function qb(){if(Ih)return Gf;Ih=1;var i=$b();return Gf=i,Gf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_sin.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Bf,Ah;function Rb(){if(Ah)return Bf;Ah=1;var i=kn(),e=e1(),a=rn(),f=u4(),o=f4(),v=v4(),c=1072243195,p=1045430272,g=[0,0];function m(d){var q,A;if(q=a(d),q&=i,q<=c)return q<p?d:o(d,0);if(q>=e)return NaN;switch(A=v(d,g),A&3){case 0:return o(g[0],g[1]);case 1:return f(g[0],g[1]);case 2:return-o(g[0],g[1]);default:return-f(g[0],g[1])}}return Bf=m,Bf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uf,wh;function t1(){if(wh)return Uf;wh=1;var i=Rb();return Uf=i,Uf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xf,Eh;function Li(){if(Eh)return Xf;Eh=1;var i=3.141592653589793;return Xf=i,Xf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kf,Sh;function bb(){if(Sh)return Kf;Sh=1;var i=Wr(),e=Le(),a=qb(),f=t1(),o=Zr(),v=Tt(),c=Li();function p(g){var m,d;return i(g)?NaN:e(g)?NaN:(d=g%2,m=o(d),m===0||m===1?v(0,d):m<.25?f(c*d):m<.75?(m=.5-m,v(a(c*m),d)):m<1.25?(d=v(1,d)-d,f(c*d)):m<1.75?(m-=1.5,-v(a(c*m),d)):(d-=v(2,d),f(c*d)))}return Kf=p,Kf}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yf,Nh;function yb(){if(Nh)return Yf;Nh=1;var i=bb();return Yf=i,Yf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zf,Ph;function Lb(){if(Ph)return Zf;Ph=1;function i(e){return e===0?.06735230105312927:.06735230105312927+e*(.007385550860814029+e*(.0011927076318336207+e*(.00022086279071390839+e*25214456545125733e-21)))}return Zf=i,Zf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vf,Mh;function Ib(){if(Mh)return Vf;Mh=1;function i(e){return e===0?.020580808432516733:.020580808432516733+e*(.0028905138367341563+e*(.0005100697921535113+e*(.00010801156724758394+e*44864094961891516e-21)))}return Vf=i,Vf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qf,Th;function Ab(){if(Th)return Qf;Th=1;function i(e){return e===0?1.3920053346762105:1.3920053346762105+e*(.7219355475671381+e*(.17193386563280308+e*(.01864591917156529+e*(.0007779424963818936+e*7326684307446256e-21))))}return Qf=i,Qf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jf,Oh;function wb(){if(Oh)return Jf;Oh=1;function i(e){return e===0?.21498241596060885:.21498241596060885+e*(.325778796408931+e*(.14635047265246445+e*(.02664227030336386+e*(.0018402845140733772+e*3194753265841009e-20))))}return Jf=i,Jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kf,Fh;function Eb(){if(Fh)return kf;Fh=1;function i(e){return e===0?-.032788541075985965:-.032788541075985965+e*(.006100538702462913+e*(-.0014034646998923284+e*.00031563207090362595))}return kf=i,kf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zf,Ch;function Sb(){if(Ch)return zf;Ch=1;function i(e){return e===0?.01797067508118204:.01797067508118204+e*(-.0036845201678113826+e*(.000881081882437654+e*-.00031275416837512086))}return zf=i,zf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jf,Hh;function Nb(){if(Hh)return jf;Hh=1;function i(e){return e===0?-.010314224129834144:-.010314224129834144+e*(.0022596478090061247+e*(-.0005385953053567405+e*.0003355291926355191))}return jf=i,jf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xf,Wh;function Pb(){if(Wh)return xf;Wh=1;function i(e){return e===0?.6328270640250934:.6328270640250934+e*(1.4549225013723477+e*(.9777175279633727+e*(.22896372806469245+e*.013381091853678766)))}return xf=i,xf}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ro,Dh;function Mb(){if(Dh)return ro;Dh=1;function i(e){return e===0?2.4559779371304113:2.4559779371304113+e*(2.128489763798934+e*(.7692851504566728+e*(.10422264559336913+e*.003217092422824239)))}return ro=i,ro}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var no,Gh;function Tb(){if(Gh)return no;Gh=1;function i(e){return e===0?.08333333333333297:.08333333333333297+e*(-.0027777777772877554+e*(.0007936505586430196+e*(-.00059518755745034+e*(.0008363399189962821+e*-.0016309293409657527))))}return no=i,no}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_lgamma_r.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var eo,Bh;function Ob(){if(Bh)return eo;Bh=1;var i=Wr(),e=Le(),a=Zr(),f=Ae(),o=n1(),v=yb(),c=Li(),p=Gr(),g=Lb(),m=Ib(),d=Ab(),q=wb(),A=Eb(),h=Sb(),E=Nb(),y=Pb(),R=Mb(),S=Tb(),F=.07721566490153287,G=.3224670334241136,U=1,O=-.07721566490153287,W=.48383612272381005,L=-.1475877229945939,X=.06462494023913339,Q=-.07721566490153287,P=1,N=.4189385332046727,D=1.4616321449683622,B=4503599627370496,z=0x400000000000000,pr=8470329472543003e-37,Y=1.4616321449683622,Z=-.12148629053584961,J=-3638676997039505e-33;function gr(V){var _r,Er,sr,Lr,rr,Rr,mr,Dr,Pr,Sr,nr,lr,Mr;if(i(V)||e(V))return V;if(V===0)return p;if(V<0?(_r=!0,V=-V):_r=!1,V<pr)return-f(V);if(_r){if(V>=B||(Pr=v(V),Pr===0))return p;Er=f(c/a(Pr*V))}if(V===1||V===2)return 0;if(V<2)switch(V<=.9?(Mr=-f(V),V>=D-1+.27?(nr=1-V,sr=0):V>=D-1-.27?(nr=V-(Y-1),sr=1):(nr=V,sr=2)):(Mr=0,V>=D+.27?(nr=2-V,sr=0):V>=D-.27?(nr=V-Y,sr=1):(nr=V-1,sr=2)),sr){case 0:lr=nr*nr,Rr=F+lr*g(lr),rr=lr*(G+lr*m(lr)),mr=nr*Rr+rr,Mr+=mr-.5*nr;break;case 1:lr=nr*nr,Sr=lr*nr,Rr=W+Sr*A(Sr),rr=L+Sr*h(Sr),Lr=X+Sr*E(Sr),mr=lr*Rr-(J-Sr*(rr+nr*Lr)),Mr+=Z+mr;break;case 2:Rr=nr*(Q+nr*y(nr)),rr=P+nr*R(nr),Mr+=-.5*nr+Rr/rr;break}else if(V<8)switch(sr=o(V),nr=V-sr,mr=nr*(O+nr*q(nr)),Dr=U+nr*d(nr),Mr=.5*nr+mr/Dr,lr=1,sr){case 7:lr*=nr+6;case 6:lr*=nr+5;case 5:lr*=nr+4;case 4:lr*=nr+3;case 3:lr*=nr+2,Mr+=f(lr)}else V<z?(Pr=f(V),lr=1/V,nr=lr*lr,Sr=N+lr*S(nr),Mr=(V-.5)*(Pr-1)+Sr):Mr=V*(f(V)-1);return _r&&(Mr=Er-Mr),Mr}return eo=gr,eo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var io,Uh;function s4(){if(Uh)return io;Uh=1;var i=Ob();return io=i,io}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var to,Xh;function Fb(){if(Xh)return to;Xh=1;var i=ze();function e(a){return i(a)===a}return to=e,to}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ao,Kh;function Ii(){if(Kh)return ao;Kh=1;var i=Fb();return ao=i,ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uo,Yh;function Cb(){if(Yh)return uo;Yh=1;var i=xr();function e(a){return a===0&&1/a===i}return uo=e,uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fo,Zh;function a1(){if(Zh)return fo;Zh=1;var i=Cb();return fo=i,fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var oo,Vh;function u1(){if(Vh)return oo;Vh=1;var i=2.5066282746310007;return oo=i,oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lo,Qh;function Hb(){if(Qh)return lo;Qh=1;var i=Ii();function e(a){return i(a/2)}return lo=e,lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vo,Jh;function c4(){if(Jh)return vo;Jh=1;var i=Hb();return vo=i,vo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var so,kh;function Wb(){if(kh)return so;kh=1;var i=c4();function e(a){return a>0?i(a-1):i(a+1)}return so=e,so}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var co,zh;function _4(){if(zh)return co;zh=1;var i=Wb();return co=i,co}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _o,jh;function Db(){if(jh)return _o;jh=1;var i=Math.sqrt;return _o=i,_o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ho,xh;function Ai(){if(xh)return ho;xh=1;var i=Db();return ho=i,ho}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var po,r3;function Gb(){if(r3)return po;r3=1;var i=ke(),e;return i===!0?e=0:e=1,po=e,po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var go,n3;function Bb(){if(n3)return go;n3=1;var i=Qe(),e=Je(),a=Gb(),f=new e(1),o=new i(f.buffer);function v(c,p){return f[0]=c,o[a]=p>>>0,f[0]}return go=v,go}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mo,e3;function zn(){if(e3)return mo;e3=1;var i=Bb();return mo=i,mo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var $o,i3;function Ub(){if(i3)return $o;i3=1;function i(e){return e|0}return $o=i,$o}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qo,t3;function Ft(){if(t3)return qo;t3=1;var i=Ub();return qo=i,qo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Ro,a3;function Xb(){if(a3)return Ro;a3=1;var i=_4(),e=Tt(),a=xr(),f=Gr();function o(v,c){return c===a?f:c===f?0:c>0?i(c)?v:0:i(c)?e(f,v):f}return Ro=o,Ro}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var bo,u3;function Kb(){if(u3)return bo;u3=1;var i=kn(),e=rn(),a=1072693247,f=1e300,o=1e-300;function v(c,p){var g,m;return m=e(c),g=m&i,g<=a?p<0?f*f:o*o:p>0?f*f:o*o}return bo=v,bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yo,f3;function Yb(){if(f3)return yo;f3=1;var i=Zr(),e=Gr();function a(f,o){return f===-1?(f-f)/(f-f):f===1?1:i(f)<1==(o===e)?0:e}return yo=a,yo}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Lo,o3;function Zb(){if(o3)return Lo;o3=1;function i(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return Lo=i,Lo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Io,l3;function Vb(){if(l3)return Io;l3=1;var i=rn(),e=zn(),a=Ie(),f=Jn(),o=Zb(),v=1048575,c=1048576,p=1072693248,g=536870912,m=524288,d=20,q=9007199254740992,A=.9617966939259756,h=.9617967009544373,E=-7028461650952758e-24,y=[1,1.5],R=[0,.5849624872207642],S=[0,1350039202129749e-23];function F(G,U,O){var W,L,X,Q,P,N,D,B,z,pr,Y,Z,J,gr,V,_r,Er,sr,Lr,rr,Rr,mr;return rr=0,O<c&&(U*=q,rr-=53,O=i(U)),rr+=(O>>d)-f|0,Rr=O&v|0,O=Rr|p|0,Rr<=235662?mr=0:Rr<767610?mr=1:(mr=0,rr+=1,O-=c),U=a(U,O),B=y[mr],sr=U-B,Lr=1/(U+B),L=sr*Lr,Q=e(L,0),W=(O>>1|g)+m,W+=mr<<18,N=a(0,W),D=U-(N-B),P=Lr*(sr-Q*N-Q*D),X=L*L,Er=X*X*o(X),Er+=P*(Q+L),X=Q*Q,N=3+X+Er,N=e(N,0),D=Er-(N-3-X),sr=Q*N,Lr=P*N+D*L,pr=sr+Lr,pr=e(pr,0),Y=Lr-(pr-sr),Z=h*pr,J=E*pr+Y*A+S[mr],z=R[mr],_r=rr,gr=Z+J+z+_r,gr=e(gr,0),V=J-(gr-_r-z-Z),G[0]=gr,G[1]=V,G}return Io=F,Io}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ao,v3;function Qb(){if(v3)return Ao;v3=1;function i(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return Ao=i,Ao}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var wo,s3;function Jb(){if(s3)return wo;s3=1;var i=zn(),e=Qb(),a=1.4426950408889634,f=1.4426950216293335,o=19259629911266175e-24;function v(c,p){var g,m,d,q,A,h;return d=p-1,q=d*d*e(d),A=f*d,h=d*o-q*a,m=A+h,m=i(m,0),g=h-(m-A),c[0]=m,c[1]=g,c}return wo=v,wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Eo,c3;function h4(){if(c3)return Eo;c3=1;var i=.6931471805599453;return Eo=i,Eo}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var So,_3;function kb(){if(_3)return So;_3=1;function i(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return So=i,So}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var No,h3;function zb(){if(h3)return No;h3=1;var i=rn(),e=Ie(),a=zn(),f=Ft(),o=Ot(),v=h4(),c=Jn(),p=kn(),g=i1(),m=kb(),d=1048576,q=1071644672,A=20,h=.6931471824645996,E=-1904654299957768e-24;function y(R,S,F){var G,U,O,W,L,X,Q,P,N,D,B;return D=R&p|0,B=(D>>A)-c|0,N=0,D>q&&(N=R+(d>>B+1)>>>0,B=((N&p)>>A)-c|0,G=(N&~(g>>B))>>>0,O=e(0,G),N=(N&g|d)>>A-B>>>0,R<0&&(N=-N),S-=O),O=F+S,O=a(O,0),L=O*h,X=(F-(O-S))*v+O*E,P=L+X,Q=X-(P-L),O=P*P,U=P-O*m(O),W=P*U/(U-2)-(Q+P*Q),P=1-(W-P),R=i(P),R=f(R),R+=N<<A>>>0,R>>A<=0?P=o(P,N):P=e(P,R),P}return No=y,No}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Po,p3;function jb(){if(p3)return Po;p3=1;var i=Wr(),e=_4(),a=Le(),f=Ii(),o=Ai(),v=Zr(),c=Mt(),p=zn(),g=Ft(),m=xr(),d=Gr(),q=kn(),A=Xb(),h=Kb(),E=Yb(),y=Vb(),R=Jb(),S=zb(),F=1072693247,G=1105199104,U=1139802112,O=1083179008,W=1072693248,L=1083231232,X=3230714880,Q=31,P=1e300,N=1e-300,D=8008566259537294e-32,B=[0,0],z=[0,0];function pr(Y,Z){var J,gr,V,_r,Er,sr,Lr,rr,Rr,mr,Dr,Pr,Sr,nr,lr,Mr;if(i(Y)||i(Z))return NaN;if(c.assign(Z,B,1,0),sr=B[0],Lr=B[1],Lr===0){if(Z===0)return 1;if(Z===1)return Y;if(Z===-1)return 1/Y;if(Z===.5)return o(Y);if(Z===-.5)return 1/o(Y);if(Z===2)return Y*Y;if(Z===3)return Y*Y*Y;if(Z===4)return Y*=Y,Y*Y;if(a(Z))return E(Y,Z)}if(c.assign(Y,B,1,0),_r=B[0],Er=B[1],Er===0){if(_r===0)return A(Y,Z);if(Y===1)return 1;if(Y===-1&&e(Z))return-1;if(a(Y))return Y===m?pr(-0,-Z):Z<0?0:d}if(Y<0&&f(Z)===!1)return(Y-Y)/(Y-Y);if(V=v(Y),J=_r&q|0,gr=sr&q|0,rr=_r>>>Q|0,Rr=sr>>>Q|0,rr&&e(Z)?rr=-1:rr=1,gr>G){if(gr>U)return h(Y,Z);if(J<F)return Rr===1?rr*P*P:rr*N*N;if(J>W)return Rr===0?rr*P*P:rr*N*N;Sr=R(z,V)}else Sr=y(z,V,J);if(mr=p(Z,0),Pr=(Z-mr)*Sr[0]+Z*Sr[1],Dr=mr*Sr[0],nr=Pr+Dr,c.assign(nr,B,1,0),lr=g(B[0]),Mr=g(B[1]),lr>=O){if(lr-O|Mr||Pr+D>nr-Dr)return rr*P*P}else if((lr&q)>=L&&(lr-X|Mr||Pr<=nr-Dr))return rr*N*N;return nr=S(lr,Dr,Pr),rr*nr}return Po=pr,Po}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mo,d3;function wi(){if(d3)return Mo;d3=1;var i=jb();return Mo=i,Mo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var To,g3;function xb(){if(g3)return To;g3=1;function i(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return To=i,To}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Oo,m3;function ry(){if(m3)return Oo;m3=1;var i=Ot(),e=xb();function a(f,o,v){var c,p,g,m;return c=f-o,p=c*c,g=c-p*e(p),m=1-(o-c*g/(2-g)-f),i(m,v)}return Oo=a,Oo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyrights, licenses, and long comment were part of the original implementation available as part of [Go]{@link https://github.com/golang/go/blob/cb07765045aed5104a3df31507564ac99e6ddce8/src/math/exp.go}, which in turn was based on an implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2009 The Go Authors. All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are
* met:
*
*    * Redistributions of source code must retain the above copyright
* notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above
* copyright notice, this list of conditions and the following disclaimer
* in the documentation and/or other materials provided with the
* distribution.
*    * Neither the name of Google Inc. nor the names of its
* contributors may be used to endorse or promote products derived from
* this software without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
* OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
* LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
* DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
* THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
* OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Fo,$3;function ny(){if($3)return Fo;$3=1;var i=Wr(),e=n1(),a=xr(),f=Gr(),o=ry(),v=.6931471803691238,c=19082149292705877e-26,p=1.4426950408889634,g=709.782712893384,m=-745.1332191019411,d=1/(1<<28),q=-d;function A(h){var E,y,R;return i(h)||h===f?h:h===a?0:h>g?f:h<m?0:h>q&&h<d?1+h:(h<0?R=e(p*h-.5):R=e(p*h+.5),E=h-R*v,y=R*c,o(E,y,R))}return Fo=A,Fo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Co,q3;function jn(){if(q3)return Co;q3=1;var i=ny();return Co=i,Co}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ho,R3;function ey(){if(R3)return Ho;R3=1;function i(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return Ho=i,Ho}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Wo,b3;function iy(){if(b3)return Wo;b3=1;var i=u1(),e=wi(),a=jn(),f=ey(),o=143.01608;function v(c){var p,g,m;return p=1/c,p=1+p*f(p),g=a(c),c>o?(m=e(c,.5*c-.25),g=m*(m/g)):g=e(c,c-.5)/g,i*g*p}return Wo=v,Wo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Do,y3;function p4(){if(y3)return Do;y3=1;var i=.5772156649015329;return Do=i,Do}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Go,L3;function ty(){if(L3)return Go;L3=1;var i=p4();function e(a,f){return f/((1+i*a)*a)}return Go=e,Go}/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bo,I3;function ay(){if(I3)return Bo;I3=1;function i(e){var a,f,o;return e===0?1:(e<0?a=-e:a=e,a<=1?(f=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),o=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,f=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),o=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),f/o)}return Bo=i,Bo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var Uo,A3;function uy(){if(A3)return Uo;A3=1;var i=Wr(),e=Ii(),a=a1(),f=Zr(),o=ze(),v=t1(),c=Gr(),p=xr(),g=Li(),m=iy(),d=ty(),q=ay();function A(h){var E,y,R,S;if(e(h)&&h<0||h===p||i(h))return NaN;if(h===0)return a(h)?p:c;if(h>171.61447887182297)return c;if(h<-170.5674972726612)return 0;if(y=f(h),y>33)return h>=0?m(h):(R=o(y),R&1?E=1:E=-1,S=y-R,S>.5&&(R+=1,S=y-R),S=y*v(g*S),E*g/(f(S)*m(y)));for(S=1;h>=3;)h-=1,S*=h;for(;h<0;){if(h>-1e-9)return d(h,S);S/=h,h+=1}for(;h<2;){if(h<1e-9)return d(h,S);S/=h,h+=1}return h===2?S:(h-=2,S*q(h))}return Uo=A,Uo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xo,w3;function d4(){if(w3)return Xo;w3=1;var i=uy();return Xo=i,Xo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ko,E3;function fy(){if(E3)return Ko;E3=1;var i=14901161193847656e-24;return Ko=i,Ko}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yo,S3;function oy(){if(S3)return Yo;S3=1;var i=17976931348623157e292;return Yo=i,Yo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zo,N3;function f1(){if(N3)return Zo;N3=1;var i=709.782712893384;return Zo=i,Zo}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Vo,P3;function ly(){if(P3)return Vo;P3=1;var i=jn();function e(a,f){var o,v,c,p;if(c=i(-f),v=c,v!==0)for(o=v,p=1;p<a;++p)o/=p,o*=f,v+=o;return v}return Vo=e,Vo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qo,M3;function vy(){if(M3)return Qo;M3=1;function i(e){return e===0?-.3250421072470015:-.3250421072470015+e*(-.02848174957559851+e*(-.005770270296489442+e*-23763016656650163e-21))}return Qo=i,Qo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Jo,T3;function sy(){if(T3)return Jo;T3=1;function i(e){return e===0?.39791722395915535:.39791722395915535+e*(.0650222499887673+e*(.005081306281875766+e*(.00013249473800432164+e*-3960228278775368e-21)))}return Jo=i,Jo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ko,O3;function cy(){if(O3)return ko;O3=1;function i(e){return e===0?.41485611868374833:.41485611868374833+e*(-.3722078760357013+e*(.31834661990116175+e*(-.11089469428239668+e*(.035478304325618236+e*-.002166375594868791))))}return ko=i,ko}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zo,F3;function _y(){if(F3)return zo;F3=1;function i(e){return e===0?.10642088040084423:.10642088040084423+e*(.540397917702171+e*(.07182865441419627+e*(.12617121980876164+e*(.01363708391202905+e*.011984499846799107))))}return zo=i,zo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var jo,C3;function hy(){if(C3)return jo;C3=1;function i(e){return e===0?-.6938585727071818:-.6938585727071818+e*(-10.558626225323291+e*(-62.375332450326006+e*(-162.39666946257347+e*(-184.60509290671104+e*(-81.2874355063066+e*-9.814329344169145)))))}return jo=i,jo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xo,H3;function py(){if(H3)return xo;H3=1;function i(e){return e===0?19.651271667439257:19.651271667439257+e*(137.65775414351904+e*(434.56587747522923+e*(645.3872717332679+e*(429.00814002756783+e*(108.63500554177944+e*(6.570249770319282+e*-.0604244152148581))))))}return xo=i,xo}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var rl,W3;function dy(){if(W3)return rl;W3=1;function i(e){return e===0?-.799283237680523:-.799283237680523+e*(-17.757954917754752+e*(-160.63638485582192+e*(-637.5664433683896+e*(-1025.0951316110772+e*-483.5191916086514))))}return rl=i,rl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nl,D3;function gy(){if(D3)return nl;D3=1;function i(e){return e===0?30.33806074348246:30.33806074348246+e*(325.7925129965739+e*(1536.729586084437+e*(3199.8582195085955+e*(2553.0504064331644+e*(474.52854120695537+e*-22.44095244658582)))))}return nl=i,nl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_erf.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var el,G3;function my(){if(G3)return el;G3=1;var i=Wr(),e=jn(),a=zn(),f=Gr(),o=xr(),v=vy(),c=sy(),p=cy(),g=_y(),m=hy(),d=py(),q=dy(),A=gy(),h=1e-300,E=13877787807814457e-33,y=.8450629115104675,R=.12837916709551256,S=1,F=-.0023621185607526594,G=1,U=-.009864944034847148,O=1,W=-.0098649429247001,L=1;function X(Q){var P,N,D,B,z,pr,Y,Z;if(i(Q))return NaN;if(Q===f)return 0;if(Q===o)return 2;if(Q===0)return 1;if(Q<0?(P=!0,N=-Q):(P=!1,N=Q),N<.84375)return N<E?1-Q:(D=Q*Q,B=R+D*v(D),z=S+D*c(D),pr=B/z,Q<.25?1-(Q+Q*pr):(B=Q*pr,B+=Q-.5,.5-B));if(N<1.25)return z=N-1,Y=F+z*p(z),Z=G+z*g(z),P?1+y+Y/Z:1-y-Y/Z;if(N<28){if(z=1/(N*N),N<2.857142857142857)B=U+z*m(z),z=O+z*d(z);else{if(Q<-6)return 2-h;B=W+z*q(z),z=L+z*A(z)}return D=a(N,0),B=e(-(D*D)-.5625)*e((D-N)*(D+N)+B/z),P?2-B/N:B/N}return P?2-h:h*h}return el=X,el}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var il,B3;function g4(){if(B3)return il;B3=1;var i=my();return il=i,il}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var tl,U3;function $y(){if(U3)return tl;U3=1;var i=g4(),e=Ai(),a=jn(),f=Li();function o(v,c){var p,g,m,d,q;if(d=i(e(c)),d!==0&&v>1){for(g=a(-c)/e(f*c),g*=c,p=.5,g/=p,m=g,q=2;q<v;++q)g/=q-p,g*=c,m+=g;d+=m}return d}return tl=o,tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var al,X3;function m4(){if(X3)return al;X3=1;var i=-708.3964185322641;return al=i,al}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ul,K3;function qy(){if(K3)return ul;K3=1;var i=jn(),e=wi(),a=Ae(),f=f1(),o=m4();function v(c,p){var g,m;return m=c*a(p),p>=1?m<f&&-p>o?g=e(p,c)*i(-p):c>=1?g=e(p/i(p/c),c):g=i(m-p):m>o?g=e(p,c)*i(-p):p/c<f?g=e(p/i(p/c),c):g=i(m-p),g}return ul=v,ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fl,Y3;function $4(){if(Y3)return fl;Y3=1;function i(e,a){var f,o;if(o=e.length,o<2||a===0)return o===0?0:e[0];for(o-=1,f=e[o]*a+e[o-1],o-=2;o>=0;)f=f*a+e[o],o-=1;return f}return fl=i,fl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ol,Z3;function Ry(){if(Z3)return ol;Z3=1;var i=Function;return ol=i,ol}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ll,V3;function by(){if(V3)return ll;V3=1;var i=Ry();return ll=i,ll}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var vl,Q3;function yy(){if(Q3)return vl;Q3=1;var i=by(),e=$4();function a(f){var o,v,c,p;if(f.length>500)return g;if(o="return function evalpoly(x){",v=f.length,v===0)o+="return 0.0;";else if(v===1)o+="return "+f[0]+";";else{for(o+="if(x===0.0){return "+f[0]+";}",o+="return "+f[0],c=v-1,p=1;p<v;p++)o+="+x*",p<c&&(o+="("),o+=f[p];for(p=0;p<c-1;p++)o+=")";o+=";"}return o+="}",o+="//# sourceURL=evalpoly.factory.js",new i(o)();function g(m){return e(f,m)}}return vl=a,vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sl,J3;function Ly(){if(J3)return sl;J3=1;var i=Ve(),e=$4(),a=yy();return i(e,"factory",a),sl=e,sl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cl,k3;function je(){if(k3)return cl;k3=1;var i=2220446049250313e-31;return cl=i,cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var _l,z3;function Iy(){if(z3)return _l;z3=1;var i=eval;return _l=i,_l}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hl,j3;function Ay(){if(j3)return hl;j3=1;var i=Iy();function e(){var a;try{i('"use strict"; (function* () {})'),a=!0}catch{a=!1}return a}return hl=e,hl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pl,x3;function q4(){if(x3)return pl;x3=1;var i=Ay();return pl=i,pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var dl,r6;function wy(){if(r6)return dl;r6=1;var i=Zr(),e=je(),a=1e6;function f(o,v){var c,p,g,m,d,q;if(q={},arguments.length>1&&(q=v),p=q.tolerance||e,m=q.maxTerms||a,d=q.initialValue||0,c=typeof o.next=="function",c===!0){for(g of o)if(d+=g,i(p*d)>=i(g)||--m===0)break}else do g=o(),d+=g;while(i(p*d)<i(g)&&--m);return d}return dl=f,dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var gl,n6;function Ey(){if(n6)return gl;n6=1;var i=Zr(),e=je(),a=1e6;function f(o,v){var c,p,g,m,d;d={},arguments.length>1&&(d=v),c=d.tolerance||e,g=d.maxTerms||a,m=d.initialValue||0;do p=o(),m+=p;while(i(c*m)<i(p)&&--g);return m}return gl=f,gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ml,e6;function o1(){if(e6)return ml;e6=1;var i=q4(),e=wy(),a=Ey(),f;return i()?f=e:f=a,ml=f,ml}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
*/var $l,i6;function Sy(){if(i6)return $l;i6=1;function i(e){var a=-e,f=-1,o=0;return v;function v(){return f*=a,o+=1,f/o}}return $l=i,$l}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link https://www.boost.org/doc/libs/1_83_0/boost/math/special_functions/log1p.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2005-2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var ql,t6;function Ny(){if(t6)return ql;t6=1;var i=Zr(),e=Ae(),a=je(),f=o1(),o=Sy();function v(c){var p,g;return c<=-1?NaN:(g=i(c),g>.95?e(1+c)-c:g<a?-c*c/2:(p={initialValue:-c},f(o(c),p)))}return ql=v,ql}/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rl,a6;function Py(){if(a6)return Rl;a6=1;var i=Ny();return Rl=i,Rl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bl,u6;function My(){if(u6)return bl;u6=1;var i=6.283185307179586;return bl=i,bl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yl,f6;function Ty(){if(f6)return yl;f6=1;function i(e){return e===0?-.3333333333333333:-.3333333333333333+e*(.08333333333333333+e*(-.014814814814814815+e*(.0011574074074074073+e*(.0003527336860670194+e*(-.0001787551440329218+e*(3919263178522438e-20+e*(-21854485106799924e-22+e*(-185406221071516e-20+e*(8296711340953087e-22+e*(-17665952736826078e-23+e*(6707853543401498e-24+e*(10261809784240309e-24+e*(-4382036018453353e-24+e*914769958223679e-24)))))))))))))}return yl=i,yl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ll,o6;function Oy(){if(o6)return Ll;o6=1;function i(e){return e===0?-.001851851851851852:-.001851851851851852+e*(-.003472222222222222+e*(.0026455026455026454+e*(-.0009902263374485596+e*(.00020576131687242798+e*(-4018775720164609e-22+e*(-18098550334489977e-21+e*(764916091608111e-20+e*(-16120900894563446e-22+e*(4647127802807434e-24+e*(1378633446915721e-22+e*(-5752545603517705e-23+e*11951628599778148e-24)))))))))))}return Ll=i,Ll}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Il,l6;function Fy(){if(l6)return Il;l6=1;function i(e){return e===0?.004133597883597883:.004133597883597883+e*(-.0026813271604938273+e*(.0007716049382716049+e*(20093878600823047e-22+e*(-.00010736653226365161+e*(52923448829120125e-21+e*(-12760635188618728e-21+e*(3423578734096138e-23+e*(13721957309062932e-22+e*(-6298992138380055e-22+e*14280614206064242e-23)))))))))}return Il=i,Il}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Al,v6;function Cy(){if(v6)return Al;v6=1;function i(e){return e===0?.0006494341563786008:.0006494341563786008+e*(.00022947209362139917+e*(-.0004691894943952557+e*(.00026772063206283885+e*(-7561801671883977e-20+e*(-2396505113867297e-22+e*(11082654115347302e-21+e*(-56749528269915965e-22+e*14230900732435883e-22)))))))}return Al=i,Al}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var wl,s6;function Hy(){if(s6)return wl;s6=1;function i(e){return e===0?-.0008618882909167117:-.0008618882909167117+e*(.0007840392217200666+e*(-.0002990724803031902+e*(-14638452578843418e-22+e*(6641498215465122e-20+e*(-3968365047179435e-20+e*11375726970678419e-21)))))}return wl=i,wl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var El,c6;function Wy(){if(c6)return El;c6=1;function i(e){return e===0?-.00033679855336635813:-.00033679855336635813+e*(-6972813758365858e-20+e*(.0002772753244959392+e*(-.00019932570516188847+e*(6797780477937208e-20+e*(1419062920643967e-22+e*(-13594048189768693e-21+e*(8018470256334202e-21+e*-2291481176508095e-21)))))))}return El=i,El}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sl,_6;function Dy(){if(_6)return Sl;_6=1;function i(e){return e===0?.0005313079364639922:.0005313079364639922+e*(-.0005921664373536939+e*(.0002708782096718045+e*(7902353232660328e-22+e*(-8153969367561969e-20+e*(561168275310625e-19+e*-18329116582843375e-21)))))}return Sl=i,Sl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nl,h6;function Gy(){if(h6)return Nl;h6=1;function i(e){return e===0?.00034436760689237765:.00034436760689237765+e*(5171790908260592e-20+e*(-.00033493161081142234+e*(.0002812695154763237+e*-.00010976582244684731)))}return Nl=i,Nl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pl,p6;function By(){if(p6)return Pl;p6=1;function i(e){return e===0?-.0006526239185953094:-.0006526239185953094+e*(.0008394987206720873+e*-.000438297098541721)}return Pl=i,Pl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ml,d6;function Uy(){if(d6)return Ml;d6=1;var i=Ly(),e=Py(),a=g4(),f=Ai(),o=jn(),v=My(),c=Ty(),p=Oy(),g=Fy(),m=Cy(),d=Hy(),q=Wy(),A=Dy(),h=Gy(),E=By(),y=[0,0,0,0,0,0,0,0,0,0];function R(S,F){var G,U,O,W,L;return U=(F-S)/S,O=-e(U),W=S*O,L=f(2*O),F<S&&(L=-L),y[0]=c(L),y[1]=p(L),y[2]=g(L),y[3]=m(L),y[4]=d(L),y[5]=q(L),y[6]=A(L),y[7]=h(L),y[8]=E(L),y[9]=-.0005967612901927463,G=i(y,1/S),G*=o(-W)/f(v*S),F<S&&(G=-G),G+=a(f(W))/2,G}return Ml=R,Ml}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Tl,g6;function Xy(){if(g6)return Tl;g6=1;function i(e,a){var f=1,o=e,v=a;return c;function c(){var p=f;return o+=1,f*=v/o,p}}return Tl=i,Tl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ol,m6;function Ky(){if(m6)return Ol;m6=1;var i=o1(),e=Xy();function a(f,o,v){var c,p;return v=v||0,p=e(f,o),c=i(p,{initialValue:v}),c}return Ol=a,Ol}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Fl,$6;function Yy(){if($6)return Fl;$6=1;function i(e){var a,f,o;return e===0?1/0:(e<0?a=-e:a=e,a<=1?(f=709811.662581658+e*(679979.8474157227+e*(293136.7857211597+e*(74887.54032914672+e*(12555.290582413863+e*(1443.4299244417066+e*(115.24194596137347+e*(6.309239205732627+e*(.22668404630224365+e*(.004826466289237662+e*4624429436045379e-20))))))))),o=0+e*(362880+e*(1026576+e*(1172700+e*(723680+e*(269325+e*(63273+e*(9450+e*(870+e*(45+e*1)))))))))):(e=1/e,f=4624429436045379e-20+e*(.004826466289237662+e*(.22668404630224365+e*(6.309239205732627+e*(115.24194596137347+e*(1443.4299244417066+e*(12555.290582413863+e*(74887.54032914672+e*(293136.7857211597+e*(679979.8474157227+e*709811.662581658))))))))),o=1+e*(45+e*(870+e*(9450+e*(63273+e*(269325+e*(723680+e*(1172700+e*(1026576+e*(362880+e*0)))))))))),f/o)}return Fl=i,Fl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/lanczos.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Cl,q6;function Zy(){if(q6)return Cl;q6=1;var i=Yy();return Cl=i,Cl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hl,R6;function Vy(){if(R6)return Hl;R6=1;var i=Zy();return Hl=i,Hl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wl,b6;function Qy(){if(b6)return Wl;b6=1;function i(e){return e===0?.6666666666666735:.6666666666666735+e*(.3999999999940942+e*(.2857142874366239+e*(.22222198432149784+e*(.1818357216161805+e*(.15313837699209373+e*.14798198605116586)))))}return Wl=i,Wl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_log1p.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var Dl,y6;function Jy(){if(y6)return Dl;y6=1;var i=Wr(),e=rn(),a=Ie(),f=Gr(),o=xr(),v=Jn(),c=Qy(),p=.6931471803691238,g=19082149292705877e-26,m=.41421356237309503,d=-.2928932188134525,q=1862645149230957e-24,A=5551115123125783e-32,h=9007199254740992,E=.6666666666666666;function y(R){var S,F,G,U,O,W,L,X,Q,P;if(R<-1||i(R))return NaN;if(R===-1)return o;if(R===f||R===0)return R;if(R<0?G=-R:G=R,P=1,G<m){if(G<q)return G<A?R:R-R*R*.5;R>d&&(P=0,U=R,F=1)}return P!==0&&(G<h?(Q=1+R,F=e(Q),P=(F>>20)-v,P>0?O=1-(Q-R):O=R-(Q-1),O/=Q):(Q=R,F=e(Q),P=(F>>20)-v,O=0),F&=1048575,F<434334?Q=a(Q,F|1072693248):(P+=1,Q=a(Q,F|1071644672),F=1048576-F>>2),U=Q-1),S=.5*U*U,F===0?U===0?(O+=P*g,P*p+O):(X=S*(1-E*U),P*p-(X-(P*g+O)-U)):(W=U/(2+U),L=W*W,X=L*c(L),P===0?U-(S-W*(S+X)):P*p-(S-(W*(S+X)+(P*g+O))-U))}return Dl=y,Dl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gl,L6;function R4(){if(L6)return Gl;L6=1;var i=Jy();return Gl=i,Gl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bl,I6;function ky(){if(I6)return Bl;I6=1;var i=Gr();function e(a){return a===0&&1/a===i}return Bl=e,Bl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ul,A6;function zy(){if(A6)return Ul;A6=1;var i=ky();return Ul=i,Ul}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xl,w6;function jy(){if(w6)return Xl;w6=1;var i=zy(),e=Wr(),a=Gr();function f(o,v){return e(o)||e(v)?NaN:o===a||v===a?a:o===v&&o===0?i(o)?o:v:o>v?o:v}return Xl=f,Xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kl,E6;function xy(){if(E6)return Kl;E6=1;var i=jy();return Kl=i,Kl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yl,S6;function rL(){if(S6)return Yl;S6=1;var i=a1(),e=Wr(),a=xr();function f(o,v){return e(o)||e(v)?NaN:o===a||v===a?a:o===v&&o===0?i(o)?o:v:o<v?o:v}return Yl=f,Yl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zl,N6;function nL(){if(N6)return Zl;N6=1;var i=rL();return Zl=i,Zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vl,P6;function eL(){if(P6)return Vl;P6=1;var i=10.900511;return Vl=i,Vl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Ql,M6;function iL(){if(M6)return Ql;M6=1;var i=2.718281828459045;return Ql=i,Ql}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006-7, 2013-14.
* Copyright Paul A. Bristow 2007, 2013-14.
* Copyright Nikhar Agrawal 2013-14.
* Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Jl,T6;function tL(){if(T6)return Jl;T6=1;var i=Vy(),e=s4(),a=d4(),f=R4(),o=Ai(),v=Zr(),c=jn(),p=wi(),g=xy(),m=nL(),d=Ae(),q=f1(),A=m4(),h=eL(),E=iL();function y(R,S){var F,G,U,O,W,L,X;return U=R+h-.5,X=(S-R-h+.5)/U,R<1?S<=A?c(R*d(S)-S-e(R)):p(S,R)*c(-S)/a(R):(v(X*X*R)<=100&&R>150?(F=R*(f(X)-X)+S*(.5-h)/U,F=c(F)):(O=R*d(S/U),W=R-S,m(O,W)<=A||g(O,W)>=q?(G=W/R,m(O,W)/2>A&&g(O,W)/2<q?(L=p(S/U,R/2)*c(W/2),F=L*L):m(O,W)/4>A&&g(O,W)/4<q&&S>R?(L=p(S/U,R/4)*c(W/4),F=L*L,F*=F):G>A&&G<q?F=p(S*c(G)/U,R):F=c(O+W)):F=p(S/U,R)*c(W)),F*=o(U/E)/i(R),F)}return Jl=y,Jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var kl,O6;function aL(){if(O6)return kl;O6=1;var i=.34657359027997264;return kl=i,kl}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var zl,F6;function uL(){if(F6)return zl;F6=1;function i(e){return e===0?-.03333333333333313:-.03333333333333313+e*(.0015873015872548146+e*(-793650757867488e-19+e*(4008217827329362e-21+e*-20109921818362437e-23)))}return zl=i,zl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FDLIBM]{@link http://www.netlib.org/fdlibm/s_expm1.c} and [FreeBSD]{@link https://svnweb.freebsd.org/base/release/12.2.0/lib/msun/src/s_expm1.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var jl,C6;function fL(){if(C6)return jl;C6=1;var i=Wr(),e=rn(),a=Ie(),f=Pt(),o=Gr(),v=xr(),c=Jn(),p=aL(),g=uL(),m=709.782712893384,d=.6931471803691238,q=19082149292705877e-26,A=1.4426950408889634,h=38.816242111356935,E=1.0397207708399179;function y(R){var S,F,G,U,O,W,L,X,Q,P,N,D,B;if(R===o||i(R))return R;if(R===v)return-1;if(R===0)return R;if(R<0?(G=!0,X=-R):(G=!1,X=R),X>=h){if(G)return-1;if(X>=m)return o}if(W=e(X)|0,X>p)X<E?G?(U=R+d,O=-q,B=-1):(U=R-d,O=q,B=1):(G?B=A*R-.5:B=A*R+.5,B|=0,N=B,U=R-N*d,O=N*q),R=U-O,P=U-R-O;else{if(W<1016070144)return R;B=0}return S=.5*R,Q=R*S,L=1+Q*g(Q),N=3-L*S,D=Q*((L-N)/(6-R*N)),B===0?R-(R*D-Q):(F=f(c+B<<20,0),D=R*(D-P)-P,D-=Q,B===-1?.5*(R-D)-.5:B===1?R<-.25?-2*(D-(R+.5)):1+2*(R-D):B<=-2||B>56?(X=1-(D-R),B===1024?(U=e(X)+(B<<20)|0,X=a(X,U)):X*=F,X-1):(N=1,B<20?(U=1072693248-(2097152>>B)|0,N=a(N,U),X=N-(D-R)):(U=c-B<<20|0,N=a(N,U),X=R-(D+N),X+=1),X*=F,X))}return jl=y,jl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var xl,H6;function b4(){if(H6)return xl;H6=1;var i=fL();return xl=i,xl}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_85_0/boost/math/special_functions/powm1.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var rv,W6;function oL(){if(W6)return rv;W6=1;var i=Wr(),e=Le(),a=Zr(),f=b4(),o=Ae(),v=wi(),c=n1();function p(g,m){var d,q;if(i(g)||i(m))return NaN;if(m===0)return 0;if(g===0)return-1;if(g<0&&m%2===0&&(g=-g),g>0){if((a(m*(g-1))<.5||a(m)<.2)&&(q=o(g)*m,q<.5))return f(q)}else if(c(m)!==m)return NaN;return d=v(g,m)-1,e(d)||i(d)?NaN:d}return rv=p,rv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var nv,D6;function lL(){if(D6)return nv;D6=1;var i=oL();return nv=i,nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ev,G6;function vL(){if(G6)return ev;G6=1;var i=c4();function e(a){return a>0?i(a-1):i(a+1)}return ev=e,ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var iv,B6;function y4(){if(B6)return iv;B6=1;var i=vL();return iv=i,iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var tv,U6;function sL(){if(U6)return tv;U6=1;var i=y4(),e=Tt(),a=xr(),f=Gr();function o(v,c){return c===a?f:c===f?0:c>0?i(c)?v:0:i(c)?e(f,v):f}return tv=o,tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var av,X6;function cL(){if(X6)return av;X6=1;var i=kn(),e=rn(),a=1072693247,f=1e300,o=1e-300;function v(c,p){var g,m;return m=e(c),g=m&i,g<=a?p<0?f*f:o*o:p>0?f*f:o*o}return av=v,av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var uv,K6;function _L(){if(K6)return uv;K6=1;var i=Zr(),e=Gr();function a(f,o){return f===-1?(f-f)/(f-f):f===1?1:i(f)<1==(o===e)?0:e}return uv=a,uv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var fv,Y6;function hL(){if(Y6)return fv;Y6=1;function i(e){return e===0?.5999999999999946:.5999999999999946+e*(.4285714285785502+e*(.33333332981837743+e*(.272728123808534+e*(.23066074577556175+e*.20697501780033842))))}return fv=i,fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var ov,Z6;function pL(){if(Z6)return ov;Z6=1;var i=rn(),e=zn(),a=Ie(),f=Jn(),o=hL(),v=1048575,c=1048576,p=1072693248,g=536870912,m=524288,d=20,q=9007199254740992,A=.9617966939259756,h=.9617967009544373,E=-7028461650952758e-24,y=[1,1.5],R=[0,.5849624872207642],S=[0,1350039202129749e-23];function F(G,U,O){var W,L,X,Q,P,N,D,B,z,pr,Y,Z,J,gr,V,_r,Er,sr,Lr,rr,Rr,mr;return rr=0,O<c&&(U*=q,rr-=53,O=i(U)),rr+=(O>>d)-f|0,Rr=O&v|0,O=Rr|p|0,Rr<=235662?mr=0:Rr<767610?mr=1:(mr=0,rr+=1,O-=c),U=a(U,O),B=y[mr],sr=U-B,Lr=1/(U+B),L=sr*Lr,Q=e(L,0),W=(O>>1|g)+m,W+=mr<<18,N=a(0,W),D=U-(N-B),P=Lr*(sr-Q*N-Q*D),X=L*L,Er=X*X*o(X),Er+=P*(Q+L),X=Q*Q,N=3+X+Er,N=e(N,0),D=Er-(N-3-X),sr=Q*N,Lr=P*N+D*L,pr=sr+Lr,pr=e(pr,0),Y=Lr-(pr-sr),Z=h*pr,J=E*pr+Y*A+S[mr],z=R[mr],_r=rr,gr=Z+J+z+_r,gr=e(gr,0),V=J-(gr-_r-z-Z),G[0]=gr,G[1]=V,G}return ov=F,ov}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var lv,V6;function dL(){if(V6)return lv;V6=1;function i(e){return e===0?.5:.5+e*(-.3333333333333333+e*.25)}return lv=i,lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var vv,Q6;function gL(){if(Q6)return vv;Q6=1;var i=zn(),e=dL(),a=1.4426950408889634,f=1.4426950216293335,o=19259629911266175e-24;function v(c,p){var g,m,d,q,A,h;return d=p-1,q=d*d*e(d),A=f*d,h=d*o-q*a,m=A+h,m=i(m,0),g=h-(m-A),c[0]=m,c[1]=g,c}return vv=v,vv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var sv,J6;function mL(){if(J6)return sv;J6=1;function i(e){return e===0?.16666666666666602:.16666666666666602+e*(-.0027777777777015593+e*(6613756321437934e-20+e*(-16533902205465252e-22+e*41381367970572385e-24)))}return sv=i,sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var cv,k6;function $L(){if(k6)return cv;k6=1;var i=rn(),e=Ie(),a=zn(),f=Ft(),o=Ot(),v=h4(),c=Jn(),p=kn(),g=i1(),m=mL(),d=1048576,q=1071644672,A=20,h=.6931471824645996,E=-1904654299957768e-24;function y(R,S,F){var G,U,O,W,L,X,Q,P,N,D,B;return D=R&p|0,B=(D>>A)-c|0,N=0,D>q&&(N=R+(d>>B+1)>>>0,B=((N&p)>>A)-c|0,G=(N&~(g>>B))>>>0,O=e(0,G),N=(N&g|d)>>A-B>>>0,R<0&&(N=-N),S-=O),O=F+S,O=a(O,0),L=O*h,X=(F-(O-S))*v+O*E,P=L+X,Q=X-(P-L),O=P*P,U=P-O*m(O),W=P*U/(U-2)-(Q+P*Q),P=1-(W-P),R=i(P),R=f(R),R+=N<<A>>>0,R>>A<=0?P=o(P,N):P=e(P,R),P}return cv=y,cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var _v,z6;function qL(){if(z6)return _v;z6=1;var i=Wr(),e=y4(),a=Le(),f=Ii(),o=Ai(),v=Zr(),c=Mt(),p=zn(),g=Ft(),m=xr(),d=Gr(),q=kn(),A=sL(),h=cL(),E=_L(),y=pL(),R=gL(),S=$L(),F=1072693247,G=1105199104,U=1139802112,O=1083179008,W=1072693248,L=1083231232,X=3230714880,Q=31,P=1e300,N=1e-300,D=8008566259537294e-32,B=[0,0],z=[0,0];function pr(Y,Z){var J,gr,V,_r,Er,sr,Lr,rr,Rr,mr,Dr,Pr,Sr,nr,lr,Mr;if(i(Y)||i(Z))return NaN;if(c.assign(Z,B,1,0),sr=B[0],Lr=B[1],Lr===0){if(Z===0)return 1;if(Z===1)return Y;if(Z===-1)return 1/Y;if(Z===.5)return o(Y);if(Z===-.5)return 1/o(Y);if(Z===2)return Y*Y;if(Z===3)return Y*Y*Y;if(Z===4)return Y*=Y,Y*Y;if(a(Z))return E(Y,Z)}if(c.assign(Y,B,1,0),_r=B[0],Er=B[1],Er===0){if(_r===0)return A(Y,Z);if(Y===1)return 1;if(Y===-1&&e(Z))return-1;if(a(Y))return Y===m?pr(-0,-Z):Z<0?0:d}if(Y<0&&f(Z)===!1)return(Y-Y)/(Y-Y);if(V=v(Y),J=_r&q|0,gr=sr&q|0,rr=_r>>>Q|0,Rr=sr>>>Q|0,rr&&e(Z)?rr=-1:rr=1,gr>G){if(gr>U)return h(Y,Z);if(J<F)return Rr===1?rr*P*P:rr*N*N;if(J>W)return Rr===0?rr*P*P:rr*N*N;Sr=R(z,V)}else Sr=y(z,V,J);if(mr=p(Z,0),Pr=(Z-mr)*Sr[0]+Z*Sr[1],Dr=mr*Sr[0],nr=Pr+Dr,c.assign(nr,B,1,0),lr=g(B[0]),Mr=g(B[1]),lr>=O){if(lr-O|Mr||Pr+D>nr-Dr)return rr*P*P}else if((lr&q)>=L&&(lr-X|Mr||Pr<=nr-Dr))return rr*N*N;return nr=S(lr,Dr,Pr),rr*nr}return _v=pr,_v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var hv,j6;function RL(){if(j6)return hv;j6=1;var i=qL();return hv=i,hv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var pv,x6;function bL(){if(x6)return pv;x6=1;function i(e){return e===0?.08333333333334822:.08333333333334822+e*(.0034722222160545866+e*(-.0026813261780578124+e*(-.00022954996161337813+e*.0007873113957930937)))}return pv=i,pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var dv,rp;function yL(){if(rp)return dv;rp=1;var i=u1(),e=RL(),a=jn(),f=bL(),o=143.01608;function v(c){var p,g,m;return p=1/c,p=1+p*f(p),g=a(c),c>o?(m=e(c,.5*c-.25),g=m*(m/g)):g=e(c,c-.5)/g,i*g*p}return dv=v,dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var gv,np;function LL(){if(np)return gv;np=1;var i=p4();function e(a,f){return f/((1+i*a)*a)}return gv=e,gv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var mv,ep;function IL(){if(ep)return mv;ep=1;function i(e){var a,f,o;return e===0?1:(e<0?a=-e:a=e,a<=1?(f=1+e*(.4942148268014971+e*(.20744822764843598+e*(.04763678004571372+e*(.010421379756176158+e*(.0011913514700658638+e*(.00016011952247675185+e*0)))))),o=1+e*(.0714304917030273+e*(-.23459179571824335+e*(.035823639860549865+e*(.011813978522206043+e*(-.004456419138517973+e*(.0005396055804933034+e*-23158187332412014e-21))))))):(e=1/e,f=0+e*(.00016011952247675185+e*(.0011913514700658638+e*(.010421379756176158+e*(.04763678004571372+e*(.20744822764843598+e*(.4942148268014971+e*1)))))),o=-23158187332412014e-21+e*(.0005396055804933034+e*(-.004456419138517973+e*(.011813978522206043+e*(.035823639860549865+e*(-.23459179571824335+e*(.0714304917030273+e*1))))))),f/o)}return mv=i,mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code, long comment, copyright, license, and constants are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1987, 1989, 1992, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/var $v,ip;function AL(){if(ip)return $v;ip=1;var i=Wr(),e=Ii(),a=a1(),f=Zr(),o=ze(),v=t1(),c=Gr(),p=xr(),g=Li(),m=yL(),d=LL(),q=IL();function A(h){var E,y,R,S;if(e(h)&&h<0||h===p||i(h))return NaN;if(h===0)return a(h)?p:c;if(h>171.61447887182297)return c;if(h<-170.5674972726612)return 0;if(y=f(h),y>33)return h>=0?m(h):(R=o(y),R&1?E=1:E=-1,S=y-R,S>.5&&(R+=1,S=y-R),S=y*v(g*S),E*g/(f(S)*m(y)));for(S=1;h>=3;)h-=1,S*=h;for(;h<0;){if(h>-1e-9)return d(h,S);S/=h,h+=1}for(;h<2;){if(h<1e-9)return d(h,S);S/=h,h+=1}return h===2?S:(h-=2,S*q(h))}return $v=A,$v}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var qv,tp;function wL(){if(tp)return qv;tp=1;var i=AL();return qv=i,qv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Rv,ap;function EL(){if(ap)return Rv;ap=1;function i(e){var a,f,o;return e===0?-.01803556856784494:(e<0?a=-e:a=e,a<=1?(f=-.01803556856784494+e*(.02512664961998968+e*(.049410315156753225+e*(.0172491608709614+e*(-.0002594535632054381+e*(-.0005410098692152044+e*(-3245886498259485e-20+e*0)))))),o=1+e*(1.962029871977952+e*(1.4801966942423133+e*(.5413914320717209+e*(.09885042511280101+e*(.008213096746488934+e*(.00022493629192211576+e*-22335276320861708e-23))))))):(e=1/e,f=0+e*(-3245886498259485e-20+e*(-.0005410098692152044+e*(-.0002594535632054381+e*(.0172491608709614+e*(.049410315156753225+e*(.02512664961998968+e*-.01803556856784494)))))),o=-22335276320861708e-23+e*(.00022493629192211576+e*(.008213096746488934+e*(.09885042511280101+e*(.5413914320717209+e*(1.4801966942423133+e*(1.962029871977952+e*1))))))),f/o)}return Rv=i,Rv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var bv,up;function SL(){if(up)return bv;up=1;function i(e){var a,f,o;return e===0?.04906224540690395:(e<0?a=-e:a=e,a<=1?(f=.04906224540690395+e*(-.09691175301595212+e*(-.4149833583594954+e*(-.4065671242119384+e*(-.1584135863906922+e*(-.024014982064857155+e*-.0010034668769627955))))),o=1+e*(3.0234982984646304+e*(3.4873958536072385+e*(1.9141558827442668+e*(.5071377386143635+e*(.05770397226904519+e*.001957681026011072)))))):(e=1/e,f=-.0010034668769627955+e*(-.024014982064857155+e*(-.1584135863906922+e*(-.4065671242119384+e*(-.4149833583594954+e*(-.09691175301595212+e*.04906224540690395))))),o=.001957681026011072+e*(.05770397226904519+e*(.5071377386143635+e*(1.9141558827442668+e*(3.4873958536072385+e*(3.0234982984646304+e*1)))))),f/o)}return bv=i,bv}/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var yv,fp;function NL(){if(fp)return yv;fp=1;function i(e){var a,f,o;return e===0?-.029232972183027003:(e<0?a=-e:a=e,a<=1?(f=-.029232972183027003+e*(.14421626775719232+e*(-.14244039073863127+e*(.05428096940550536+e*(-.008505359768683364+e*(.0004311713426792973+e*0))))),o=1+e*(-1.5016935605448505+e*(.846973248876495+e*(-.22009515181499575+e*(.02558279715597587+e*(-.0010066679553914337+e*-8271935218912905e-22)))))):(e=1/e,f=0+e*(.0004311713426792973+e*(-.008505359768683364+e*(.05428096940550536+e*(-.14244039073863127+e*(.14421626775719232+e*-.029232972183027003))))),o=-8271935218912905e-22+e*(-.0010066679553914337+e*(.02558279715597587+e*(-.22009515181499575+e*(.846973248876495+e*(-1.5016935605448505+e*1)))))),f/o)}return yv=i,yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/detail/lgamma_small.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Lv,op;function PL(){if(op)return Lv;op=1;var i=Ae(),e=je(),a=EL(),f=SL(),o=NL(),v=.15896368026733398,c=.5281534194946289,p=.45201730728149414;function g(m,d,q){var A,h,E,y;if(m<e)return-i(m);if(d===0||q===0)return 0;if(h=0,m>2){if(m>=3){do m-=1,q-=1,h+=i(m);while(m>=3);q=m-2}return E=q*(m+1),y=a(q),h+=E*v+E*y,h}return m<1&&(h+=-i(m),q=d,d=m,m+=1),m<=1.5?(E=f(d),A=d*q,h+=A*c+A*E,h):(E=q*d,y=o(-q),h+=E*p+E*y,h)}return Lv=g,Lv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_64_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Copyright Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Iv,lp;function ML(){if(lp)return Iv;lp=1;var i=wL(),e=b4(),a=R4(),f=Wr(),o=PL();function v(c){return f(c)?NaN:c<0?c<-.5?i(1+c)-1:e(-a(c)+o(c+2,c+1,c)):c<2?e(o(c+1,c,c-1)):i(1+c)-1}return Iv=v,Iv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Av,vp;function TL(){if(vp)return Av;vp=1;var i=ML();return Av=i,Av}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var wv,sp;function OL(){if(sp)return wv;sp=1;function i(e,a){var f,o,v,c;return f=-a,a=-a,o=e+1,v=1,p;function p(){return c=f/o,f*=a,v+=1,f/=v,o+=1,c}}return wv=i,wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ev,cp;function FL(){if(cp)return Ev;cp=1;var i=lL(),e=o1(),a=TL(),f=OL();function o(v,c,p){var g,m,d,q,A;return m=a(v),d=(m+1)/v,q=i(c,v),m-=q,m/=v,A=f(v,c),q+=1,g=p?d:0,m=-q*e(A,{initialValue:(g-m)/q}),p&&(m=-m),[m,d]}return Ev=o,Ev}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Sv,_p;function L4(){if(_p)return Sv;_p=1;var i=11754943508222875e-54;return Sv=i,Sv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Nv,hp;function CL(){if(hp)return Nv;hp=1;var i=Zr(),e=L4(),a=je(),f=1e6;function o(p,g,m){var d,q,A,h,E,y,R;if(d=typeof p.next=="function",R=d?p.next().value:p(),h=R[1],A=R[0],h===0&&(h=e),E=h,y=0,d===!0)do R=p.next().value,R&&(y=R[1]+R[0]*y,y===0&&(y=e),E=R[1]+R[0]/E,E===0&&(E=e),y=1/y,q=E*y,h*=q);while(i(q-1)>g&&--m);else do R=p(),R&&(y=R[1]+R[0]*y,y===0&&(y=e),E=R[1]+R[0]/E,E===0&&(E=e),y=1/y,q=E*y,h*=q);while(R&&i(q-1)>g&&--m);return A/h}function v(p,g,m){var d,q,A,h,E,y;if(d=typeof p.next=="function",y=d?p.next().value:p(),A=y[1],A===0&&(A=e),h=A,E=0,d===!0)do y=p.next().value,y&&(E=y[1]+y[0]*E,E===0&&(E=e),h=y[1]+y[0]/h,h===0&&(h=e),E=1/E,q=h*E,A*=q);while(y&&i(q-1)>g&&--m);else do y=p(),y&&(E=y[1]+y[0]*E,E===0&&(E=e),h=y[1]+y[0]/h,h===0&&(h=e),E=1/E,q=h*E,A*=q);while(y&&i(q-1)>g&&--m);return A}function c(p,g){var m,d,q;return d={},arguments.length>1&&(d=g),m=d.maxIter||f,q=d.tolerance||a,d.keep?v(p,q,m):o(p,q,m)}return Nv=c,Nv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Pv,pp;function HL(){if(pp)return Pv;pp=1;var i=Zr(),e=je(),a=L4(),f=1e6;function o(p,g,m){var d,q,A,h,E,y;y=p(),E=y[1],q=y[0],E===0&&(E=a),A=E,h=0;do y=p(),y&&(h=y[1]+y[0]*h,h===0&&(h=a),A=y[1]+y[0]/A,A===0&&(A=a),h=1/h,d=A*h,E*=d);while(y&&i(d-1)>g&&--m);return q/E}function v(p,g,m){var d,q,A,h,E;E=p(),h=E[1],h===0&&(h=a),q=h,A=0;do E=p(),E&&(A=E[1]+E[0]*A,A===0&&(A=a),q=E[1]+E[0]/q,q===0&&(q=a),A=1/A,d=q*A,h*=d);while(E&&i(d-1)>g&&--m);return h}function c(p,g){var m,d,q;return d={},arguments.length>1&&(d=g),q=d.tolerance||e,m=d.maxIter||f,d.keep?v(p,q,m):o(p,q,m)}return Pv=c,Pv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Mv,dp;function WL(){if(dp)return Mv;dp=1;var i=q4(),e=CL(),a=HL(),f;return i()?f=e:f=a,Mv=f,Mv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Tv,gp;function DL(){if(gp)return Tv;gp=1;function i(e,a){var f=a-e+1,o=e,v=0;return c;function c(){return v+=1,f+=2,[v*(o-v),f]}}return Tv=i,Tv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_37_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Ov,mp;function GL(){if(mp)return Ov;mp=1;var i=WL(),e=DL();function a(f,o){var v=e(f,o);return 1/(o-f+1+i(v))}return Ov=a,Ov}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/gamma.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006-7, 2013-14.
* (C) Copyright Paul A. Bristow 2007, 2013-14.
* (C) Copyright Nikhar Agrawal 2013-14.
* (C) Christopher Kormanyos 2013-14.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var Fv,$p;function BL(){if($p)return Fv;$p=1;var i=s4(),e=ze(),a=d4(),f=Zr(),o=jn(),v=wi(),c=Ae(),p=fy(),g=oy(),m=u1(),d=f1(),q=Gr(),A=ly(),h=$y(),E=qy(),y=Uy(),R=Ky(),S=tL(),F=FL(),G=GL(),U=170;function O(W,L,X,Q){var P,N,D,B,z,pr,Y,Z,J,gr,V,_r,Er,sr,Lr;if(W<0||L<=0)return NaN;if(N=X===void 0?!0:X,Z=Q,J=0,L>=U&&!N)return Z&&L*4<W?(J=L*c(W)-W,J+=c(G(L,W))):!Z&&L>4*W?(J=L*c(W)-W,B=0,J+=c(R(L,W,B)/L)):(J=O(L,W,!0,Z),J===0?Z?(J=1+1/(12*L)+1/(288*L*L),J=c(J)-L+(L-.5)*c(L),J+=c(m)):(J=L*c(W)-W,B=0,J+=c(R(L,W,B)/L)):J=c(J)+i(L)),J>d?q:o(J);switch(Y=L<30&&L<=W+1&&W<d,Y?(sr=e(L),gr=sr===L,z=gr?!1:f(sr-L)===.5):gr=z=!1,gr&&W>.6?(Z=!Z,D=0):z&&W>.2?(Z=!Z,D=1):W<p&&L>1?D=6:W<.5?-.4/c(W)<L?D=2:D=3:W<1.1?W*.75<L?D=2:D=3:(pr=!1,N&&L>20&&(V=f((W-L)/L),L>200?20/L>V*V&&(pr=!0):V<.4&&(pr=!0)),pr?D=5:W-1/(3*W)<L?D=2:(D=4,Z=!Z)),D){case 0:J=A(L,W),N===!1&&(J*=a(L));break;case 1:J=h(L,W),N===!1&&(J*=a(L));break;case 2:J=N?S(L,W):E(L,W),J!==0&&(B=0,P=!1,Z&&(B=N?1:a(L),N||J>=1||g*J>B?(B/=J,N||L<1||g/L>B?(B*=-L,P=!0):B=0):B=0)),J*=R(L,W,B)/L,P&&(Z=!1,J=-J);break;case 3:Z=!Z,Er=F(L,W,Z),J=Er[0],Lr=Er[1],Z=!1,N&&(J/=Lr);break;case 4:J=N?S(L,W):E(L,W),J!==0&&(J*=G(L,W));break;case 5:J=y(L,W),W>=L&&(Z=!Z);break;case 6:J=N?v(W,L)/a(L+1):v(W,L)/L,J*=1-L*W/(L+1);break}return N&&J>1&&(J=1),Z&&(_r=N?1:a(L),J=_r-J),J}return Fv=O,Fv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Cv,qp;function I4(){if(qp)return Cv;qp=1;var i=BL();return Cv=i,Cv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Hv,Rp;function UL(){if(Rp)return Hv;Rp=1;var i=I4(),e=Wr(),a=Gr();function f(o,v,c){return e(o)||e(v)||e(c)||v<0||c<=0?NaN:v===0?o<0?0:1:o<=0?0:o===a?1:i(o*c,v)}return Hv=f,Hv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Wv,bp;function XL(){if(bp)return Wv;bp=1;function i(e){return a;function a(){return e}}return Wv=i,Wv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Dv,yp;function A4(){if(yp)return Dv;yp=1;var i=XL();return Dv=i,Dv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Gv,Lp;function KL(){if(Lp)return Gv;Lp=1;var i=Wr();function e(a,f){return i(a)||i(f)?NaN:a<f?0:1}return Gv=e,Gv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Bv,Ip;function YL(){if(Ip)return Bv;Ip=1;var i=A4(),e=Wr();function a(f){if(e(f))return i(NaN);return o;function o(v){return e(v)?NaN:v<f?0:1}}return Bv=a,Bv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Uv,Ap;function ZL(){if(Ap)return Uv;Ap=1;var i=Ve(),e=KL(),a=YL();return i(e,"factory",a),Uv=e,Uv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Xv,wp;function VL(){if(wp)return Xv;wp=1;var i=A4(),e=ZL().factory,a=I4(),f=Wr(),o=Gr();function v(c,p){if(f(c)||f(p)||c<0||p<=0)return i(NaN);if(c===0)return e(0);return g;function g(m){return m<=0?0:m===o?1:a(m*p,c)}}return Xv=v,Xv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Kv,Ep;function w4(){if(Ep)return Kv;Ep=1;var i=Ve(),e=UL(),a=VL();return i(e,"factory",a),Kv=e,Kv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Yv,Sp;function QL(){if(Sp)return Yv;Sp=1;var i=w4();function e(a,f){return i(a,f/2,.5)}return Yv=e,Yv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Zv,Np;function JL(){if(Np)return Zv;Np=1;var i=w4().factory;function e(a){return i(a/2,.5)}return Zv=e,Zv}/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Vv,Pp;function kL(){if(Pp)return Vv;Pp=1;var i=Ve(),e=QL(),a=JL();return i(e,"factory",a),Vv=e,Vv}var zL=kL();const jL=dq(zL);var $i={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var xL=$i.exports,Mp;function rI(){return Mp||(Mp=1,function(i,e){(function(){var a,f="4.17.21",o=200,v="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",p="Invalid `variable` option passed into `_.template`",g="__lodash_hash_undefined__",m=500,d="__lodash_placeholder__",q=1,A=2,h=4,E=1,y=2,R=1,S=2,F=4,G=8,U=16,O=32,W=64,L=128,X=256,Q=512,P=30,N="...",D=800,B=16,z=1,pr=2,Y=3,Z=1/0,J=9007199254740991,gr=17976931348623157e292,V=NaN,_r=4294967295,Er=_r-1,sr=_r>>>1,Lr=[["ary",L],["bind",R],["bindKey",S],["curry",G],["curryRight",U],["flip",Q],["partial",O],["partialRight",W],["rearg",X]],rr="[object Arguments]",Rr="[object Array]",mr="[object AsyncFunction]",Dr="[object Boolean]",Pr="[object Date]",Sr="[object DOMException]",nr="[object Error]",lr="[object Function]",Mr="[object GeneratorFunction]",Ln="[object Map]",xe="[object Number]",E4="[object Null]",Fn="[object Object]",l1="[object Promise]",S4="[object Proxy]",ri="[object RegExp]",In="[object Set]",ni="[object String]",Ei="[object Symbol]",N4="[object Undefined]",ei="[object WeakMap]",P4="[object WeakSet]",ii="[object ArrayBuffer]",we="[object DataView]",Ct="[object Float32Array]",Ht="[object Float64Array]",Wt="[object Int8Array]",Dt="[object Int16Array]",Gt="[object Int32Array]",Bt="[object Uint8Array]",Ut="[object Uint8ClampedArray]",Xt="[object Uint16Array]",Kt="[object Uint32Array]",M4=/\b__p \+= '';/g,T4=/\b(__p \+=) '' \+/g,O4=/(__e\(.*?\)|\b__t\)) \+\n'';/g,v1=/&(?:amp|lt|gt|quot|#39);/g,s1=/[&<>"']/g,F4=RegExp(v1.source),C4=RegExp(s1.source),H4=/<%-([\s\S]+?)%>/g,W4=/<%([\s\S]+?)%>/g,c1=/<%=([\s\S]+?)%>/g,D4=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G4=/^\w*$/,B4=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yt=/[\\^$.*+?()[\]{}|]/g,U4=RegExp(Yt.source),Zt=/^\s+/,X4=/\s/,K4=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Y4=/\{\n\/\* \[wrapped with (.+)\] \*/,Z4=/,? & /,V4=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Q4=/[()=,{}\[\]\/\s]/,J4=/\\(\\)?/g,k4=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_1=/\w*$/,z4=/^[-+]0x[0-9a-f]+$/i,j4=/^0b[01]+$/i,x4=/^\[object .+?Constructor\]$/,rd=/^0o[0-7]+$/i,nd=/^(?:0|[1-9]\d*)$/,ed=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Si=/($^)/,id=/['\n\r\u2028\u2029\\]/g,Ni="\\ud800-\\udfff",td="\\u0300-\\u036f",ad="\\ufe20-\\ufe2f",ud="\\u20d0-\\u20ff",h1=td+ad+ud,p1="\\u2700-\\u27bf",d1="a-z\\xdf-\\xf6\\xf8-\\xff",fd="\\xac\\xb1\\xd7\\xf7",od="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ld="\\u2000-\\u206f",vd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g1="A-Z\\xc0-\\xd6\\xd8-\\xde",m1="\\ufe0e\\ufe0f",$1=fd+od+ld+vd,Vt="['’]",sd="["+Ni+"]",q1="["+$1+"]",Pi="["+h1+"]",R1="\\d+",cd="["+p1+"]",b1="["+d1+"]",y1="[^"+Ni+$1+R1+p1+d1+g1+"]",Qt="\\ud83c[\\udffb-\\udfff]",_d="(?:"+Pi+"|"+Qt+")",L1="[^"+Ni+"]",Jt="(?:\\ud83c[\\udde6-\\uddff]){2}",kt="[\\ud800-\\udbff][\\udc00-\\udfff]",Ee="["+g1+"]",I1="\\u200d",A1="(?:"+b1+"|"+y1+")",hd="(?:"+Ee+"|"+y1+")",w1="(?:"+Vt+"(?:d|ll|m|re|s|t|ve))?",E1="(?:"+Vt+"(?:D|LL|M|RE|S|T|VE))?",S1=_d+"?",N1="["+m1+"]?",pd="(?:"+I1+"(?:"+[L1,Jt,kt].join("|")+")"+N1+S1+")*",dd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",P1=N1+S1+pd,md="(?:"+[cd,Jt,kt].join("|")+")"+P1,$d="(?:"+[L1+Pi+"?",Pi,Jt,kt,sd].join("|")+")",qd=RegExp(Vt,"g"),Rd=RegExp(Pi,"g"),zt=RegExp(Qt+"(?="+Qt+")|"+$d+P1,"g"),bd=RegExp([Ee+"?"+b1+"+"+w1+"(?="+[q1,Ee,"$"].join("|")+")",hd+"+"+E1+"(?="+[q1,Ee+A1,"$"].join("|")+")",Ee+"?"+A1+"+"+w1,Ee+"+"+E1,gd,dd,R1,md].join("|"),"g"),yd=RegExp("["+I1+Ni+h1+m1+"]"),Ld=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Id=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Ad=-1,wr={};wr[Ct]=wr[Ht]=wr[Wt]=wr[Dt]=wr[Gt]=wr[Bt]=wr[Ut]=wr[Xt]=wr[Kt]=!0,wr[rr]=wr[Rr]=wr[ii]=wr[Dr]=wr[we]=wr[Pr]=wr[nr]=wr[lr]=wr[Ln]=wr[xe]=wr[Fn]=wr[ri]=wr[In]=wr[ni]=wr[ei]=!1;var Ar={};Ar[rr]=Ar[Rr]=Ar[ii]=Ar[we]=Ar[Dr]=Ar[Pr]=Ar[Ct]=Ar[Ht]=Ar[Wt]=Ar[Dt]=Ar[Gt]=Ar[Ln]=Ar[xe]=Ar[Fn]=Ar[ri]=Ar[In]=Ar[ni]=Ar[Ei]=Ar[Bt]=Ar[Ut]=Ar[Xt]=Ar[Kt]=!0,Ar[nr]=Ar[lr]=Ar[ei]=!1;var wd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ed={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Sd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Nd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pd=parseFloat,Md=parseInt,M1=typeof mt=="object"&&mt&&mt.Object===Object&&mt,Td=typeof self=="object"&&self&&self.Object===Object&&self,Kr=M1||Td||Function("return this")(),jt=e&&!e.nodeType&&e,se=jt&&!0&&i&&!i.nodeType&&i,T1=se&&se.exports===jt,xt=T1&&M1.process,dn=function(){try{var I=se&&se.require&&se.require("util").types;return I||xt&&xt.binding&&xt.binding("util")}catch{}}(),O1=dn&&dn.isArrayBuffer,F1=dn&&dn.isDate,C1=dn&&dn.isMap,H1=dn&&dn.isRegExp,W1=dn&&dn.isSet,D1=dn&&dn.isTypedArray;function fn(I,T,M){switch(M.length){case 0:return I.call(T);case 1:return I.call(T,M[0]);case 2:return I.call(T,M[0],M[1]);case 3:return I.call(T,M[0],M[1],M[2])}return I.apply(T,M)}function Od(I,T,M,j){for(var ar=-1,$r=I==null?0:I.length;++ar<$r;){var Br=I[ar];T(j,Br,M(Br),I)}return j}function gn(I,T){for(var M=-1,j=I==null?0:I.length;++M<j&&T(I[M],M,I)!==!1;);return I}function Fd(I,T){for(var M=I==null?0:I.length;M--&&T(I[M],M,I)!==!1;);return I}function G1(I,T){for(var M=-1,j=I==null?0:I.length;++M<j;)if(!T(I[M],M,I))return!1;return!0}function xn(I,T){for(var M=-1,j=I==null?0:I.length,ar=0,$r=[];++M<j;){var Br=I[M];T(Br,M,I)&&($r[ar++]=Br)}return $r}function Mi(I,T){var M=I==null?0:I.length;return!!M&&Se(I,T,0)>-1}function ra(I,T,M){for(var j=-1,ar=I==null?0:I.length;++j<ar;)if(M(T,I[j]))return!0;return!1}function Nr(I,T){for(var M=-1,j=I==null?0:I.length,ar=Array(j);++M<j;)ar[M]=T(I[M],M,I);return ar}function re(I,T){for(var M=-1,j=T.length,ar=I.length;++M<j;)I[ar+M]=T[M];return I}function na(I,T,M,j){var ar=-1,$r=I==null?0:I.length;for(j&&$r&&(M=I[++ar]);++ar<$r;)M=T(M,I[ar],ar,I);return M}function Cd(I,T,M,j){var ar=I==null?0:I.length;for(j&&ar&&(M=I[--ar]);ar--;)M=T(M,I[ar],ar,I);return M}function ea(I,T){for(var M=-1,j=I==null?0:I.length;++M<j;)if(T(I[M],M,I))return!0;return!1}var Hd=ia("length");function Wd(I){return I.split("")}function Dd(I){return I.match(V4)||[]}function B1(I,T,M){var j;return M(I,function(ar,$r,Br){if(T(ar,$r,Br))return j=$r,!1}),j}function Ti(I,T,M,j){for(var ar=I.length,$r=M+(j?1:-1);j?$r--:++$r<ar;)if(T(I[$r],$r,I))return $r;return-1}function Se(I,T,M){return T===T?zd(I,T,M):Ti(I,U1,M)}function Gd(I,T,M,j){for(var ar=M-1,$r=I.length;++ar<$r;)if(j(I[ar],T))return ar;return-1}function U1(I){return I!==I}function X1(I,T){var M=I==null?0:I.length;return M?aa(I,T)/M:V}function ia(I){return function(T){return T==null?a:T[I]}}function ta(I){return function(T){return I==null?a:I[T]}}function K1(I,T,M,j,ar){return ar(I,function($r,Br,Ir){M=j?(j=!1,$r):T(M,$r,Br,Ir)}),M}function Bd(I,T){var M=I.length;for(I.sort(T);M--;)I[M]=I[M].value;return I}function aa(I,T){for(var M,j=-1,ar=I.length;++j<ar;){var $r=T(I[j]);$r!==a&&(M=M===a?$r:M+$r)}return M}function ua(I,T){for(var M=-1,j=Array(I);++M<I;)j[M]=T(M);return j}function Ud(I,T){return Nr(T,function(M){return[M,I[M]]})}function Y1(I){return I&&I.slice(0,J1(I)+1).replace(Zt,"")}function on(I){return function(T){return I(T)}}function fa(I,T){return Nr(T,function(M){return I[M]})}function ti(I,T){return I.has(T)}function Z1(I,T){for(var M=-1,j=I.length;++M<j&&Se(T,I[M],0)>-1;);return M}function V1(I,T){for(var M=I.length;M--&&Se(T,I[M],0)>-1;);return M}function Xd(I,T){for(var M=I.length,j=0;M--;)I[M]===T&&++j;return j}var Kd=ta(wd),Yd=ta(Ed);function Zd(I){return"\\"+Nd[I]}function Vd(I,T){return I==null?a:I[T]}function Ne(I){return yd.test(I)}function Qd(I){return Ld.test(I)}function Jd(I){for(var T,M=[];!(T=I.next()).done;)M.push(T.value);return M}function oa(I){var T=-1,M=Array(I.size);return I.forEach(function(j,ar){M[++T]=[ar,j]}),M}function Q1(I,T){return function(M){return I(T(M))}}function ne(I,T){for(var M=-1,j=I.length,ar=0,$r=[];++M<j;){var Br=I[M];(Br===T||Br===d)&&(I[M]=d,$r[ar++]=M)}return $r}function Oi(I){var T=-1,M=Array(I.size);return I.forEach(function(j){M[++T]=j}),M}function kd(I){var T=-1,M=Array(I.size);return I.forEach(function(j){M[++T]=[j,j]}),M}function zd(I,T,M){for(var j=M-1,ar=I.length;++j<ar;)if(I[j]===T)return j;return-1}function jd(I,T,M){for(var j=M+1;j--;)if(I[j]===T)return j;return j}function Pe(I){return Ne(I)?r5(I):Hd(I)}function An(I){return Ne(I)?n5(I):Wd(I)}function J1(I){for(var T=I.length;T--&&X4.test(I.charAt(T)););return T}var xd=ta(Sd);function r5(I){for(var T=zt.lastIndex=0;zt.test(I);)++T;return T}function n5(I){return I.match(zt)||[]}function e5(I){return I.match(bd)||[]}var i5=function I(T){T=T==null?Kr:Me.defaults(Kr.Object(),T,Me.pick(Kr,Id));var M=T.Array,j=T.Date,ar=T.Error,$r=T.Function,Br=T.Math,Ir=T.Object,la=T.RegExp,t5=T.String,mn=T.TypeError,Fi=M.prototype,a5=$r.prototype,Te=Ir.prototype,Ci=T["__core-js_shared__"],Hi=a5.toString,br=Te.hasOwnProperty,u5=0,k1=function(){var r=/[^.]+$/.exec(Ci&&Ci.keys&&Ci.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Wi=Te.toString,f5=Hi.call(Ir),o5=Kr._,l5=la("^"+Hi.call(br).replace(Yt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Di=T1?T.Buffer:a,ee=T.Symbol,Gi=T.Uint8Array,z1=Di?Di.allocUnsafe:a,Bi=Q1(Ir.getPrototypeOf,Ir),j1=Ir.create,x1=Te.propertyIsEnumerable,Ui=Fi.splice,rs=ee?ee.isConcatSpreadable:a,ai=ee?ee.iterator:a,ce=ee?ee.toStringTag:a,Xi=function(){try{var r=ge(Ir,"defineProperty");return r({},"",{}),r}catch{}}(),v5=T.clearTimeout!==Kr.clearTimeout&&T.clearTimeout,s5=j&&j.now!==Kr.Date.now&&j.now,c5=T.setTimeout!==Kr.setTimeout&&T.setTimeout,Ki=Br.ceil,Yi=Br.floor,va=Ir.getOwnPropertySymbols,_5=Di?Di.isBuffer:a,ns=T.isFinite,h5=Fi.join,p5=Q1(Ir.keys,Ir),Ur=Br.max,Vr=Br.min,d5=j.now,g5=T.parseInt,es=Br.random,m5=Fi.reverse,sa=ge(T,"DataView"),ui=ge(T,"Map"),ca=ge(T,"Promise"),Oe=ge(T,"Set"),fi=ge(T,"WeakMap"),oi=ge(Ir,"create"),Zi=fi&&new fi,Fe={},$5=me(sa),q5=me(ui),R5=me(ca),b5=me(Oe),y5=me(fi),Vi=ee?ee.prototype:a,li=Vi?Vi.valueOf:a,is=Vi?Vi.toString:a;function s(r){if(Fr(r)&&!ur(r)&&!(r instanceof hr)){if(r instanceof $n)return r;if(br.call(r,"__wrapped__"))return tc(r)}return new $n(r)}var Ce=function(){function r(){}return function(n){if(!Tr(n))return{};if(j1)return j1(n);r.prototype=n;var t=new r;return r.prototype=a,t}}();function Qi(){}function $n(r,n){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=a}s.templateSettings={escape:H4,evaluate:W4,interpolate:c1,variable:"",imports:{_:s}},s.prototype=Qi.prototype,s.prototype.constructor=s,$n.prototype=Ce(Qi.prototype),$n.prototype.constructor=$n;function hr(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=_r,this.__views__=[]}function L5(){var r=new hr(this.__wrapped__);return r.__actions__=nn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=nn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=nn(this.__views__),r}function I5(){if(this.__filtered__){var r=new hr(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function A5(){var r=this.__wrapped__.value(),n=this.__dir__,t=ur(r),u=n<0,l=t?r.length:0,_=W9(0,l,this.__views__),$=_.start,b=_.end,w=b-$,C=u?b:$-1,H=this.__iteratees__,K=H.length,k=0,x=Vr(w,this.__takeCount__);if(!t||!u&&l==w&&x==w)return ws(r,this.__actions__);var ir=[];r:for(;w--&&k<x;){C+=n;for(var or=-1,tr=r[C];++or<K;){var cr=H[or],dr=cr.iteratee,sn=cr.type,jr=dr(tr);if(sn==pr)tr=jr;else if(!jr){if(sn==z)continue r;break r}}ir[k++]=tr}return ir}hr.prototype=Ce(Qi.prototype),hr.prototype.constructor=hr;function _e(r){var n=-1,t=r==null?0:r.length;for(this.clear();++n<t;){var u=r[n];this.set(u[0],u[1])}}function w5(){this.__data__=oi?oi(null):{},this.size=0}function E5(r){var n=this.has(r)&&delete this.__data__[r];return this.size-=n?1:0,n}function S5(r){var n=this.__data__;if(oi){var t=n[r];return t===g?a:t}return br.call(n,r)?n[r]:a}function N5(r){var n=this.__data__;return oi?n[r]!==a:br.call(n,r)}function P5(r,n){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=oi&&n===a?g:n,this}_e.prototype.clear=w5,_e.prototype.delete=E5,_e.prototype.get=S5,_e.prototype.has=N5,_e.prototype.set=P5;function Cn(r){var n=-1,t=r==null?0:r.length;for(this.clear();++n<t;){var u=r[n];this.set(u[0],u[1])}}function M5(){this.__data__=[],this.size=0}function T5(r){var n=this.__data__,t=Ji(n,r);if(t<0)return!1;var u=n.length-1;return t==u?n.pop():Ui.call(n,t,1),--this.size,!0}function O5(r){var n=this.__data__,t=Ji(n,r);return t<0?a:n[t][1]}function F5(r){return Ji(this.__data__,r)>-1}function C5(r,n){var t=this.__data__,u=Ji(t,r);return u<0?(++this.size,t.push([r,n])):t[u][1]=n,this}Cn.prototype.clear=M5,Cn.prototype.delete=T5,Cn.prototype.get=O5,Cn.prototype.has=F5,Cn.prototype.set=C5;function Hn(r){var n=-1,t=r==null?0:r.length;for(this.clear();++n<t;){var u=r[n];this.set(u[0],u[1])}}function H5(){this.size=0,this.__data__={hash:new _e,map:new(ui||Cn),string:new _e}}function W5(r){var n=ft(this,r).delete(r);return this.size-=n?1:0,n}function D5(r){return ft(this,r).get(r)}function G5(r){return ft(this,r).has(r)}function B5(r,n){var t=ft(this,r),u=t.size;return t.set(r,n),this.size+=t.size==u?0:1,this}Hn.prototype.clear=H5,Hn.prototype.delete=W5,Hn.prototype.get=D5,Hn.prototype.has=G5,Hn.prototype.set=B5;function he(r){var n=-1,t=r==null?0:r.length;for(this.__data__=new Hn;++n<t;)this.add(r[n])}function U5(r){return this.__data__.set(r,g),this}function X5(r){return this.__data__.has(r)}he.prototype.add=he.prototype.push=U5,he.prototype.has=X5;function wn(r){var n=this.__data__=new Cn(r);this.size=n.size}function K5(){this.__data__=new Cn,this.size=0}function Y5(r){var n=this.__data__,t=n.delete(r);return this.size=n.size,t}function Z5(r){return this.__data__.get(r)}function V5(r){return this.__data__.has(r)}function Q5(r,n){var t=this.__data__;if(t instanceof Cn){var u=t.__data__;if(!ui||u.length<o-1)return u.push([r,n]),this.size=++t.size,this;t=this.__data__=new Hn(u)}return t.set(r,n),this.size=t.size,this}wn.prototype.clear=K5,wn.prototype.delete=Y5,wn.prototype.get=Z5,wn.prototype.has=V5,wn.prototype.set=Q5;function ts(r,n){var t=ur(r),u=!t&&$e(r),l=!t&&!u&&fe(r),_=!t&&!u&&!l&&Ge(r),$=t||u||l||_,b=$?ua(r.length,t5):[],w=b.length;for(var C in r)(n||br.call(r,C))&&!($&&(C=="length"||l&&(C=="offset"||C=="parent")||_&&(C=="buffer"||C=="byteLength"||C=="byteOffset")||Bn(C,w)))&&b.push(C);return b}function as(r){var n=r.length;return n?r[ya(0,n-1)]:a}function J5(r,n){return ot(nn(r),pe(n,0,r.length))}function k5(r){return ot(nn(r))}function _a(r,n,t){(t!==a&&!En(r[n],t)||t===a&&!(n in r))&&Wn(r,n,t)}function vi(r,n,t){var u=r[n];(!(br.call(r,n)&&En(u,t))||t===a&&!(n in r))&&Wn(r,n,t)}function Ji(r,n){for(var t=r.length;t--;)if(En(r[t][0],n))return t;return-1}function z5(r,n,t,u){return ie(r,function(l,_,$){n(u,l,t(l),$)}),u}function us(r,n){return r&&Mn(n,Xr(n),r)}function j5(r,n){return r&&Mn(n,tn(n),r)}function Wn(r,n,t){n=="__proto__"&&Xi?Xi(r,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[n]=t}function ha(r,n){for(var t=-1,u=n.length,l=M(u),_=r==null;++t<u;)l[t]=_?a:Qa(r,n[t]);return l}function pe(r,n,t){return r===r&&(t!==a&&(r=r<=t?r:t),n!==a&&(r=r>=n?r:n)),r}function qn(r,n,t,u,l,_){var $,b=n&q,w=n&A,C=n&h;if(t&&($=l?t(r,u,l,_):t(r)),$!==a)return $;if(!Tr(r))return r;var H=ur(r);if(H){if($=G9(r),!b)return nn(r,$)}else{var K=Qr(r),k=K==lr||K==Mr;if(fe(r))return Ns(r,b);if(K==Fn||K==rr||k&&!l){if($=w||k?{}:Js(r),!b)return w?S9(r,j5($,r)):E9(r,us($,r))}else{if(!Ar[K])return l?r:{};$=B9(r,K,b)}}_||(_=new wn);var x=_.get(r);if(x)return x;_.set(r,$),Lc(r)?r.forEach(function(tr){$.add(qn(tr,n,t,tr,r,_))}):bc(r)&&r.forEach(function(tr,cr){$.set(cr,qn(tr,n,t,cr,r,_))});var ir=C?w?Oa:Ta:w?tn:Xr,or=H?a:ir(r);return gn(or||r,function(tr,cr){or&&(cr=tr,tr=r[cr]),vi($,cr,qn(tr,n,t,cr,r,_))}),$}function x5(r){var n=Xr(r);return function(t){return fs(t,r,n)}}function fs(r,n,t){var u=t.length;if(r==null)return!u;for(r=Ir(r);u--;){var l=t[u],_=n[l],$=r[l];if($===a&&!(l in r)||!_($))return!1}return!0}function os(r,n,t){if(typeof r!="function")throw new mn(c);return gi(function(){r.apply(a,t)},n)}function si(r,n,t,u){var l=-1,_=Mi,$=!0,b=r.length,w=[],C=n.length;if(!b)return w;t&&(n=Nr(n,on(t))),u?(_=ra,$=!1):n.length>=o&&(_=ti,$=!1,n=new he(n));r:for(;++l<b;){var H=r[l],K=t==null?H:t(H);if(H=u||H!==0?H:0,$&&K===K){for(var k=C;k--;)if(n[k]===K)continue r;w.push(H)}else _(n,K,u)||w.push(H)}return w}var ie=Fs(Pn),ls=Fs(da,!0);function r9(r,n){var t=!0;return ie(r,function(u,l,_){return t=!!n(u,l,_),t}),t}function ki(r,n,t){for(var u=-1,l=r.length;++u<l;){var _=r[u],$=n(_);if($!=null&&(b===a?$===$&&!vn($):t($,b)))var b=$,w=_}return w}function n9(r,n,t,u){var l=r.length;for(t=fr(t),t<0&&(t=-t>l?0:l+t),u=u===a||u>l?l:fr(u),u<0&&(u+=l),u=t>u?0:Ac(u);t<u;)r[t++]=n;return r}function vs(r,n){var t=[];return ie(r,function(u,l,_){n(u,l,_)&&t.push(u)}),t}function Yr(r,n,t,u,l){var _=-1,$=r.length;for(t||(t=X9),l||(l=[]);++_<$;){var b=r[_];n>0&&t(b)?n>1?Yr(b,n-1,t,u,l):re(l,b):u||(l[l.length]=b)}return l}var pa=Cs(),ss=Cs(!0);function Pn(r,n){return r&&pa(r,n,Xr)}function da(r,n){return r&&ss(r,n,Xr)}function zi(r,n){return xn(n,function(t){return Un(r[t])})}function de(r,n){n=ae(n,r);for(var t=0,u=n.length;r!=null&&t<u;)r=r[Tn(n[t++])];return t&&t==u?r:a}function cs(r,n,t){var u=n(r);return ur(r)?u:re(u,t(r))}function kr(r){return r==null?r===a?N4:E4:ce&&ce in Ir(r)?H9(r):k9(r)}function ga(r,n){return r>n}function e9(r,n){return r!=null&&br.call(r,n)}function i9(r,n){return r!=null&&n in Ir(r)}function t9(r,n,t){return r>=Vr(n,t)&&r<Ur(n,t)}function ma(r,n,t){for(var u=t?ra:Mi,l=r[0].length,_=r.length,$=_,b=M(_),w=1/0,C=[];$--;){var H=r[$];$&&n&&(H=Nr(H,on(n))),w=Vr(H.length,w),b[$]=!t&&(n||l>=120&&H.length>=120)?new he($&&H):a}H=r[0];var K=-1,k=b[0];r:for(;++K<l&&C.length<w;){var x=H[K],ir=n?n(x):x;if(x=t||x!==0?x:0,!(k?ti(k,ir):u(C,ir,t))){for($=_;--$;){var or=b[$];if(!(or?ti(or,ir):u(r[$],ir,t)))continue r}k&&k.push(ir),C.push(x)}}return C}function a9(r,n,t,u){return Pn(r,function(l,_,$){n(u,t(l),_,$)}),u}function ci(r,n,t){n=ae(n,r),r=xs(r,n);var u=r==null?r:r[Tn(bn(n))];return u==null?a:fn(u,r,t)}function _s(r){return Fr(r)&&kr(r)==rr}function u9(r){return Fr(r)&&kr(r)==ii}function f9(r){return Fr(r)&&kr(r)==Pr}function _i(r,n,t,u,l){return r===n?!0:r==null||n==null||!Fr(r)&&!Fr(n)?r!==r&&n!==n:o9(r,n,t,u,_i,l)}function o9(r,n,t,u,l,_){var $=ur(r),b=ur(n),w=$?Rr:Qr(r),C=b?Rr:Qr(n);w=w==rr?Fn:w,C=C==rr?Fn:C;var H=w==Fn,K=C==Fn,k=w==C;if(k&&fe(r)){if(!fe(n))return!1;$=!0,H=!1}if(k&&!H)return _||(_=new wn),$||Ge(r)?Zs(r,n,t,u,l,_):F9(r,n,w,t,u,l,_);if(!(t&E)){var x=H&&br.call(r,"__wrapped__"),ir=K&&br.call(n,"__wrapped__");if(x||ir){var or=x?r.value():r,tr=ir?n.value():n;return _||(_=new wn),l(or,tr,t,u,_)}}return k?(_||(_=new wn),C9(r,n,t,u,l,_)):!1}function l9(r){return Fr(r)&&Qr(r)==Ln}function $a(r,n,t,u){var l=t.length,_=l,$=!u;if(r==null)return!_;for(r=Ir(r);l--;){var b=t[l];if($&&b[2]?b[1]!==r[b[0]]:!(b[0]in r))return!1}for(;++l<_;){b=t[l];var w=b[0],C=r[w],H=b[1];if($&&b[2]){if(C===a&&!(w in r))return!1}else{var K=new wn;if(u)var k=u(C,H,w,r,n,K);if(!(k===a?_i(H,C,E|y,u,K):k))return!1}}return!0}function hs(r){if(!Tr(r)||Y9(r))return!1;var n=Un(r)?l5:x4;return n.test(me(r))}function v9(r){return Fr(r)&&kr(r)==ri}function s9(r){return Fr(r)&&Qr(r)==In}function c9(r){return Fr(r)&&ht(r.length)&&!!wr[kr(r)]}function ps(r){return typeof r=="function"?r:r==null?an:typeof r=="object"?ur(r)?ms(r[0],r[1]):gs(r):Hc(r)}function qa(r){if(!di(r))return p5(r);var n=[];for(var t in Ir(r))br.call(r,t)&&t!="constructor"&&n.push(t);return n}function _9(r){if(!Tr(r))return J9(r);var n=di(r),t=[];for(var u in r)u=="constructor"&&(n||!br.call(r,u))||t.push(u);return t}function Ra(r,n){return r<n}function ds(r,n){var t=-1,u=en(r)?M(r.length):[];return ie(r,function(l,_,$){u[++t]=n(l,_,$)}),u}function gs(r){var n=Ca(r);return n.length==1&&n[0][2]?zs(n[0][0],n[0][1]):function(t){return t===r||$a(t,r,n)}}function ms(r,n){return Wa(r)&&ks(n)?zs(Tn(r),n):function(t){var u=Qa(t,r);return u===a&&u===n?Ja(t,r):_i(n,u,E|y)}}function ji(r,n,t,u,l){r!==n&&pa(n,function(_,$){if(l||(l=new wn),Tr(_))h9(r,n,$,t,ji,u,l);else{var b=u?u(Ga(r,$),_,$+"",r,n,l):a;b===a&&(b=_),_a(r,$,b)}},tn)}function h9(r,n,t,u,l,_,$){var b=Ga(r,t),w=Ga(n,t),C=$.get(w);if(C){_a(r,t,C);return}var H=_?_(b,w,t+"",r,n,$):a,K=H===a;if(K){var k=ur(w),x=!k&&fe(w),ir=!k&&!x&&Ge(w);H=w,k||x||ir?ur(b)?H=b:Cr(b)?H=nn(b):x?(K=!1,H=Ns(w,!0)):ir?(K=!1,H=Ps(w,!0)):H=[]:mi(w)||$e(w)?(H=b,$e(b)?H=wc(b):(!Tr(b)||Un(b))&&(H=Js(w))):K=!1}K&&($.set(w,H),l(H,w,u,_,$),$.delete(w)),_a(r,t,H)}function $s(r,n){var t=r.length;if(t)return n+=n<0?t:0,Bn(n,t)?r[n]:a}function qs(r,n,t){n.length?n=Nr(n,function(_){return ur(_)?function($){return de($,_.length===1?_[0]:_)}:_}):n=[an];var u=-1;n=Nr(n,on(er()));var l=ds(r,function(_,$,b){var w=Nr(n,function(C){return C(_)});return{criteria:w,index:++u,value:_}});return Bd(l,function(_,$){return w9(_,$,t)})}function p9(r,n){return Rs(r,n,function(t,u){return Ja(r,u)})}function Rs(r,n,t){for(var u=-1,l=n.length,_={};++u<l;){var $=n[u],b=de(r,$);t(b,$)&&hi(_,ae($,r),b)}return _}function d9(r){return function(n){return de(n,r)}}function ba(r,n,t,u){var l=u?Gd:Se,_=-1,$=n.length,b=r;for(r===n&&(n=nn(n)),t&&(b=Nr(r,on(t)));++_<$;)for(var w=0,C=n[_],H=t?t(C):C;(w=l(b,H,w,u))>-1;)b!==r&&Ui.call(b,w,1),Ui.call(r,w,1);return r}function bs(r,n){for(var t=r?n.length:0,u=t-1;t--;){var l=n[t];if(t==u||l!==_){var _=l;Bn(l)?Ui.call(r,l,1):Aa(r,l)}}return r}function ya(r,n){return r+Yi(es()*(n-r+1))}function g9(r,n,t,u){for(var l=-1,_=Ur(Ki((n-r)/(t||1)),0),$=M(_);_--;)$[u?_:++l]=r,r+=t;return $}function La(r,n){var t="";if(!r||n<1||n>J)return t;do n%2&&(t+=r),n=Yi(n/2),n&&(r+=r);while(n);return t}function vr(r,n){return Ba(js(r,n,an),r+"")}function m9(r){return as(Be(r))}function $9(r,n){var t=Be(r);return ot(t,pe(n,0,t.length))}function hi(r,n,t,u){if(!Tr(r))return r;n=ae(n,r);for(var l=-1,_=n.length,$=_-1,b=r;b!=null&&++l<_;){var w=Tn(n[l]),C=t;if(w==="__proto__"||w==="constructor"||w==="prototype")return r;if(l!=$){var H=b[w];C=u?u(H,w,b):a,C===a&&(C=Tr(H)?H:Bn(n[l+1])?[]:{})}vi(b,w,C),b=b[w]}return r}var ys=Zi?function(r,n){return Zi.set(r,n),r}:an,q9=Xi?function(r,n){return Xi(r,"toString",{configurable:!0,enumerable:!1,value:za(n),writable:!0})}:an;function R9(r){return ot(Be(r))}function Rn(r,n,t){var u=-1,l=r.length;n<0&&(n=-n>l?0:l+n),t=t>l?l:t,t<0&&(t+=l),l=n>t?0:t-n>>>0,n>>>=0;for(var _=M(l);++u<l;)_[u]=r[u+n];return _}function b9(r,n){var t;return ie(r,function(u,l,_){return t=n(u,l,_),!t}),!!t}function xi(r,n,t){var u=0,l=r==null?u:r.length;if(typeof n=="number"&&n===n&&l<=sr){for(;u<l;){var _=u+l>>>1,$=r[_];$!==null&&!vn($)&&(t?$<=n:$<n)?u=_+1:l=_}return l}return Ia(r,n,an,t)}function Ia(r,n,t,u){var l=0,_=r==null?0:r.length;if(_===0)return 0;n=t(n);for(var $=n!==n,b=n===null,w=vn(n),C=n===a;l<_;){var H=Yi((l+_)/2),K=t(r[H]),k=K!==a,x=K===null,ir=K===K,or=vn(K);if($)var tr=u||ir;else C?tr=ir&&(u||k):b?tr=ir&&k&&(u||!x):w?tr=ir&&k&&!x&&(u||!or):x||or?tr=!1:tr=u?K<=n:K<n;tr?l=H+1:_=H}return Vr(_,Er)}function Ls(r,n){for(var t=-1,u=r.length,l=0,_=[];++t<u;){var $=r[t],b=n?n($):$;if(!t||!En(b,w)){var w=b;_[l++]=$===0?0:$}}return _}function Is(r){return typeof r=="number"?r:vn(r)?V:+r}function ln(r){if(typeof r=="string")return r;if(ur(r))return Nr(r,ln)+"";if(vn(r))return is?is.call(r):"";var n=r+"";return n=="0"&&1/r==-Z?"-0":n}function te(r,n,t){var u=-1,l=Mi,_=r.length,$=!0,b=[],w=b;if(t)$=!1,l=ra;else if(_>=o){var C=n?null:T9(r);if(C)return Oi(C);$=!1,l=ti,w=new he}else w=n?[]:b;r:for(;++u<_;){var H=r[u],K=n?n(H):H;if(H=t||H!==0?H:0,$&&K===K){for(var k=w.length;k--;)if(w[k]===K)continue r;n&&w.push(K),b.push(H)}else l(w,K,t)||(w!==b&&w.push(K),b.push(H))}return b}function Aa(r,n){return n=ae(n,r),r=xs(r,n),r==null||delete r[Tn(bn(n))]}function As(r,n,t,u){return hi(r,n,t(de(r,n)),u)}function rt(r,n,t,u){for(var l=r.length,_=u?l:-1;(u?_--:++_<l)&&n(r[_],_,r););return t?Rn(r,u?0:_,u?_+1:l):Rn(r,u?_+1:0,u?l:_)}function ws(r,n){var t=r;return t instanceof hr&&(t=t.value()),na(n,function(u,l){return l.func.apply(l.thisArg,re([u],l.args))},t)}function wa(r,n,t){var u=r.length;if(u<2)return u?te(r[0]):[];for(var l=-1,_=M(u);++l<u;)for(var $=r[l],b=-1;++b<u;)b!=l&&(_[l]=si(_[l]||$,r[b],n,t));return te(Yr(_,1),n,t)}function Es(r,n,t){for(var u=-1,l=r.length,_=n.length,$={};++u<l;){var b=u<_?n[u]:a;t($,r[u],b)}return $}function Ea(r){return Cr(r)?r:[]}function Sa(r){return typeof r=="function"?r:an}function ae(r,n){return ur(r)?r:Wa(r,n)?[r]:ic(qr(r))}var y9=vr;function ue(r,n,t){var u=r.length;return t=t===a?u:t,!n&&t>=u?r:Rn(r,n,t)}var Ss=v5||function(r){return Kr.clearTimeout(r)};function Ns(r,n){if(n)return r.slice();var t=r.length,u=z1?z1(t):new r.constructor(t);return r.copy(u),u}function Na(r){var n=new r.constructor(r.byteLength);return new Gi(n).set(new Gi(r)),n}function L9(r,n){var t=n?Na(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}function I9(r){var n=new r.constructor(r.source,_1.exec(r));return n.lastIndex=r.lastIndex,n}function A9(r){return li?Ir(li.call(r)):{}}function Ps(r,n){var t=n?Na(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}function Ms(r,n){if(r!==n){var t=r!==a,u=r===null,l=r===r,_=vn(r),$=n!==a,b=n===null,w=n===n,C=vn(n);if(!b&&!C&&!_&&r>n||_&&$&&w&&!b&&!C||u&&$&&w||!t&&w||!l)return 1;if(!u&&!_&&!C&&r<n||C&&t&&l&&!u&&!_||b&&t&&l||!$&&l||!w)return-1}return 0}function w9(r,n,t){for(var u=-1,l=r.criteria,_=n.criteria,$=l.length,b=t.length;++u<$;){var w=Ms(l[u],_[u]);if(w){if(u>=b)return w;var C=t[u];return w*(C=="desc"?-1:1)}}return r.index-n.index}function Ts(r,n,t,u){for(var l=-1,_=r.length,$=t.length,b=-1,w=n.length,C=Ur(_-$,0),H=M(w+C),K=!u;++b<w;)H[b]=n[b];for(;++l<$;)(K||l<_)&&(H[t[l]]=r[l]);for(;C--;)H[b++]=r[l++];return H}function Os(r,n,t,u){for(var l=-1,_=r.length,$=-1,b=t.length,w=-1,C=n.length,H=Ur(_-b,0),K=M(H+C),k=!u;++l<H;)K[l]=r[l];for(var x=l;++w<C;)K[x+w]=n[w];for(;++$<b;)(k||l<_)&&(K[x+t[$]]=r[l++]);return K}function nn(r,n){var t=-1,u=r.length;for(n||(n=M(u));++t<u;)n[t]=r[t];return n}function Mn(r,n,t,u){var l=!t;t||(t={});for(var _=-1,$=n.length;++_<$;){var b=n[_],w=u?u(t[b],r[b],b,t,r):a;w===a&&(w=r[b]),l?Wn(t,b,w):vi(t,b,w)}return t}function E9(r,n){return Mn(r,Ha(r),n)}function S9(r,n){return Mn(r,Vs(r),n)}function nt(r,n){return function(t,u){var l=ur(t)?Od:z5,_=n?n():{};return l(t,r,er(u,2),_)}}function He(r){return vr(function(n,t){var u=-1,l=t.length,_=l>1?t[l-1]:a,$=l>2?t[2]:a;for(_=r.length>3&&typeof _=="function"?(l--,_):a,$&&zr(t[0],t[1],$)&&(_=l<3?a:_,l=1),n=Ir(n);++u<l;){var b=t[u];b&&r(n,b,u,_)}return n})}function Fs(r,n){return function(t,u){if(t==null)return t;if(!en(t))return r(t,u);for(var l=t.length,_=n?l:-1,$=Ir(t);(n?_--:++_<l)&&u($[_],_,$)!==!1;);return t}}function Cs(r){return function(n,t,u){for(var l=-1,_=Ir(n),$=u(n),b=$.length;b--;){var w=$[r?b:++l];if(t(_[w],w,_)===!1)break}return n}}function N9(r,n,t){var u=n&R,l=pi(r);function _(){var $=this&&this!==Kr&&this instanceof _?l:r;return $.apply(u?t:this,arguments)}return _}function Hs(r){return function(n){n=qr(n);var t=Ne(n)?An(n):a,u=t?t[0]:n.charAt(0),l=t?ue(t,1).join(""):n.slice(1);return u[r]()+l}}function We(r){return function(n){return na(Fc(Oc(n).replace(qd,"")),r,"")}}function pi(r){return function(){var n=arguments;switch(n.length){case 0:return new r;case 1:return new r(n[0]);case 2:return new r(n[0],n[1]);case 3:return new r(n[0],n[1],n[2]);case 4:return new r(n[0],n[1],n[2],n[3]);case 5:return new r(n[0],n[1],n[2],n[3],n[4]);case 6:return new r(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new r(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var t=Ce(r.prototype),u=r.apply(t,n);return Tr(u)?u:t}}function P9(r,n,t){var u=pi(r);function l(){for(var _=arguments.length,$=M(_),b=_,w=De(l);b--;)$[b]=arguments[b];var C=_<3&&$[0]!==w&&$[_-1]!==w?[]:ne($,w);if(_-=C.length,_<t)return Us(r,n,et,l.placeholder,a,$,C,a,a,t-_);var H=this&&this!==Kr&&this instanceof l?u:r;return fn(H,this,$)}return l}function Ws(r){return function(n,t,u){var l=Ir(n);if(!en(n)){var _=er(t,3);n=Xr(n),t=function(b){return _(l[b],b,l)}}var $=r(n,t,u);return $>-1?l[_?n[$]:$]:a}}function Ds(r){return Gn(function(n){var t=n.length,u=t,l=$n.prototype.thru;for(r&&n.reverse();u--;){var _=n[u];if(typeof _!="function")throw new mn(c);if(l&&!$&&ut(_)=="wrapper")var $=new $n([],!0)}for(u=$?u:t;++u<t;){_=n[u];var b=ut(_),w=b=="wrapper"?Fa(_):a;w&&Da(w[0])&&w[1]==(L|G|O|X)&&!w[4].length&&w[9]==1?$=$[ut(w[0])].apply($,w[3]):$=_.length==1&&Da(_)?$[b]():$.thru(_)}return function(){var C=arguments,H=C[0];if($&&C.length==1&&ur(H))return $.plant(H).value();for(var K=0,k=t?n[K].apply(this,C):H;++K<t;)k=n[K].call(this,k);return k}})}function et(r,n,t,u,l,_,$,b,w,C){var H=n&L,K=n&R,k=n&S,x=n&(G|U),ir=n&Q,or=k?a:pi(r);function tr(){for(var cr=arguments.length,dr=M(cr),sn=cr;sn--;)dr[sn]=arguments[sn];if(x)var jr=De(tr),cn=Xd(dr,jr);if(u&&(dr=Ts(dr,u,l,x)),_&&(dr=Os(dr,_,$,x)),cr-=cn,x&&cr<C){var Hr=ne(dr,jr);return Us(r,n,et,tr.placeholder,t,dr,Hr,b,w,C-cr)}var Sn=K?t:this,Kn=k?Sn[r]:r;return cr=dr.length,b?dr=z9(dr,b):ir&&cr>1&&dr.reverse(),H&&w<cr&&(dr.length=w),this&&this!==Kr&&this instanceof tr&&(Kn=or||pi(Kn)),Kn.apply(Sn,dr)}return tr}function Gs(r,n){return function(t,u){return a9(t,r,n(u),{})}}function it(r,n){return function(t,u){var l;if(t===a&&u===a)return n;if(t!==a&&(l=t),u!==a){if(l===a)return u;typeof t=="string"||typeof u=="string"?(t=ln(t),u=ln(u)):(t=Is(t),u=Is(u)),l=r(t,u)}return l}}function Pa(r){return Gn(function(n){return n=Nr(n,on(er())),vr(function(t){var u=this;return r(n,function(l){return fn(l,u,t)})})})}function tt(r,n){n=n===a?" ":ln(n);var t=n.length;if(t<2)return t?La(n,r):n;var u=La(n,Ki(r/Pe(n)));return Ne(n)?ue(An(u),0,r).join(""):u.slice(0,r)}function M9(r,n,t,u){var l=n&R,_=pi(r);function $(){for(var b=-1,w=arguments.length,C=-1,H=u.length,K=M(H+w),k=this&&this!==Kr&&this instanceof $?_:r;++C<H;)K[C]=u[C];for(;w--;)K[C++]=arguments[++b];return fn(k,l?t:this,K)}return $}function Bs(r){return function(n,t,u){return u&&typeof u!="number"&&zr(n,t,u)&&(t=u=a),n=Xn(n),t===a?(t=n,n=0):t=Xn(t),u=u===a?n<t?1:-1:Xn(u),g9(n,t,u,r)}}function at(r){return function(n,t){return typeof n=="string"&&typeof t=="string"||(n=yn(n),t=yn(t)),r(n,t)}}function Us(r,n,t,u,l,_,$,b,w,C){var H=n&G,K=H?$:a,k=H?a:$,x=H?_:a,ir=H?a:_;n|=H?O:W,n&=~(H?W:O),n&F||(n&=~(R|S));var or=[r,n,l,x,K,ir,k,b,w,C],tr=t.apply(a,or);return Da(r)&&rc(tr,or),tr.placeholder=u,nc(tr,r,n)}function Ma(r){var n=Br[r];return function(t,u){if(t=yn(t),u=u==null?0:Vr(fr(u),292),u&&ns(t)){var l=(qr(t)+"e").split("e"),_=n(l[0]+"e"+(+l[1]+u));return l=(qr(_)+"e").split("e"),+(l[0]+"e"+(+l[1]-u))}return n(t)}}var T9=Oe&&1/Oi(new Oe([,-0]))[1]==Z?function(r){return new Oe(r)}:ru;function Xs(r){return function(n){var t=Qr(n);return t==Ln?oa(n):t==In?kd(n):Ud(n,r(n))}}function Dn(r,n,t,u,l,_,$,b){var w=n&S;if(!w&&typeof r!="function")throw new mn(c);var C=u?u.length:0;if(C||(n&=~(O|W),u=l=a),$=$===a?$:Ur(fr($),0),b=b===a?b:fr(b),C-=l?l.length:0,n&W){var H=u,K=l;u=l=a}var k=w?a:Fa(r),x=[r,n,t,u,l,H,K,_,$,b];if(k&&Q9(x,k),r=x[0],n=x[1],t=x[2],u=x[3],l=x[4],b=x[9]=x[9]===a?w?0:r.length:Ur(x[9]-C,0),!b&&n&(G|U)&&(n&=~(G|U)),!n||n==R)var ir=N9(r,n,t);else n==G||n==U?ir=P9(r,n,b):(n==O||n==(R|O))&&!l.length?ir=M9(r,n,t,u):ir=et.apply(a,x);var or=k?ys:rc;return nc(or(ir,x),r,n)}function Ks(r,n,t,u){return r===a||En(r,Te[t])&&!br.call(u,t)?n:r}function Ys(r,n,t,u,l,_){return Tr(r)&&Tr(n)&&(_.set(n,r),ji(r,n,a,Ys,_),_.delete(n)),r}function O9(r){return mi(r)?a:r}function Zs(r,n,t,u,l,_){var $=t&E,b=r.length,w=n.length;if(b!=w&&!($&&w>b))return!1;var C=_.get(r),H=_.get(n);if(C&&H)return C==n&&H==r;var K=-1,k=!0,x=t&y?new he:a;for(_.set(r,n),_.set(n,r);++K<b;){var ir=r[K],or=n[K];if(u)var tr=$?u(or,ir,K,n,r,_):u(ir,or,K,r,n,_);if(tr!==a){if(tr)continue;k=!1;break}if(x){if(!ea(n,function(cr,dr){if(!ti(x,dr)&&(ir===cr||l(ir,cr,t,u,_)))return x.push(dr)})){k=!1;break}}else if(!(ir===or||l(ir,or,t,u,_))){k=!1;break}}return _.delete(r),_.delete(n),k}function F9(r,n,t,u,l,_,$){switch(t){case we:if(r.byteLength!=n.byteLength||r.byteOffset!=n.byteOffset)return!1;r=r.buffer,n=n.buffer;case ii:return!(r.byteLength!=n.byteLength||!_(new Gi(r),new Gi(n)));case Dr:case Pr:case xe:return En(+r,+n);case nr:return r.name==n.name&&r.message==n.message;case ri:case ni:return r==n+"";case Ln:var b=oa;case In:var w=u&E;if(b||(b=Oi),r.size!=n.size&&!w)return!1;var C=$.get(r);if(C)return C==n;u|=y,$.set(r,n);var H=Zs(b(r),b(n),u,l,_,$);return $.delete(r),H;case Ei:if(li)return li.call(r)==li.call(n)}return!1}function C9(r,n,t,u,l,_){var $=t&E,b=Ta(r),w=b.length,C=Ta(n),H=C.length;if(w!=H&&!$)return!1;for(var K=w;K--;){var k=b[K];if(!($?k in n:br.call(n,k)))return!1}var x=_.get(r),ir=_.get(n);if(x&&ir)return x==n&&ir==r;var or=!0;_.set(r,n),_.set(n,r);for(var tr=$;++K<w;){k=b[K];var cr=r[k],dr=n[k];if(u)var sn=$?u(dr,cr,k,n,r,_):u(cr,dr,k,r,n,_);if(!(sn===a?cr===dr||l(cr,dr,t,u,_):sn)){or=!1;break}tr||(tr=k=="constructor")}if(or&&!tr){var jr=r.constructor,cn=n.constructor;jr!=cn&&"constructor"in r&&"constructor"in n&&!(typeof jr=="function"&&jr instanceof jr&&typeof cn=="function"&&cn instanceof cn)&&(or=!1)}return _.delete(r),_.delete(n),or}function Gn(r){return Ba(js(r,a,fc),r+"")}function Ta(r){return cs(r,Xr,Ha)}function Oa(r){return cs(r,tn,Vs)}var Fa=Zi?function(r){return Zi.get(r)}:ru;function ut(r){for(var n=r.name+"",t=Fe[n],u=br.call(Fe,n)?t.length:0;u--;){var l=t[u],_=l.func;if(_==null||_==r)return l.name}return n}function De(r){var n=br.call(s,"placeholder")?s:r;return n.placeholder}function er(){var r=s.iteratee||ja;return r=r===ja?ps:r,arguments.length?r(arguments[0],arguments[1]):r}function ft(r,n){var t=r.__data__;return K9(n)?t[typeof n=="string"?"string":"hash"]:t.map}function Ca(r){for(var n=Xr(r),t=n.length;t--;){var u=n[t],l=r[u];n[t]=[u,l,ks(l)]}return n}function ge(r,n){var t=Vd(r,n);return hs(t)?t:a}function H9(r){var n=br.call(r,ce),t=r[ce];try{r[ce]=a;var u=!0}catch{}var l=Wi.call(r);return u&&(n?r[ce]=t:delete r[ce]),l}var Ha=va?function(r){return r==null?[]:(r=Ir(r),xn(va(r),function(n){return x1.call(r,n)}))}:nu,Vs=va?function(r){for(var n=[];r;)re(n,Ha(r)),r=Bi(r);return n}:nu,Qr=kr;(sa&&Qr(new sa(new ArrayBuffer(1)))!=we||ui&&Qr(new ui)!=Ln||ca&&Qr(ca.resolve())!=l1||Oe&&Qr(new Oe)!=In||fi&&Qr(new fi)!=ei)&&(Qr=function(r){var n=kr(r),t=n==Fn?r.constructor:a,u=t?me(t):"";if(u)switch(u){case $5:return we;case q5:return Ln;case R5:return l1;case b5:return In;case y5:return ei}return n});function W9(r,n,t){for(var u=-1,l=t.length;++u<l;){var _=t[u],$=_.size;switch(_.type){case"drop":r+=$;break;case"dropRight":n-=$;break;case"take":n=Vr(n,r+$);break;case"takeRight":r=Ur(r,n-$);break}}return{start:r,end:n}}function D9(r){var n=r.match(Y4);return n?n[1].split(Z4):[]}function Qs(r,n,t){n=ae(n,r);for(var u=-1,l=n.length,_=!1;++u<l;){var $=Tn(n[u]);if(!(_=r!=null&&t(r,$)))break;r=r[$]}return _||++u!=l?_:(l=r==null?0:r.length,!!l&&ht(l)&&Bn($,l)&&(ur(r)||$e(r)))}function G9(r){var n=r.length,t=new r.constructor(n);return n&&typeof r[0]=="string"&&br.call(r,"index")&&(t.index=r.index,t.input=r.input),t}function Js(r){return typeof r.constructor=="function"&&!di(r)?Ce(Bi(r)):{}}function B9(r,n,t){var u=r.constructor;switch(n){case ii:return Na(r);case Dr:case Pr:return new u(+r);case we:return L9(r,t);case Ct:case Ht:case Wt:case Dt:case Gt:case Bt:case Ut:case Xt:case Kt:return Ps(r,t);case Ln:return new u;case xe:case ni:return new u(r);case ri:return I9(r);case In:return new u;case Ei:return A9(r)}}function U9(r,n){var t=n.length;if(!t)return r;var u=t-1;return n[u]=(t>1?"& ":"")+n[u],n=n.join(t>2?", ":" "),r.replace(K4,`{
/* [wrapped with `+n+`] */
`)}function X9(r){return ur(r)||$e(r)||!!(rs&&r&&r[rs])}function Bn(r,n){var t=typeof r;return n=n??J,!!n&&(t=="number"||t!="symbol"&&nd.test(r))&&r>-1&&r%1==0&&r<n}function zr(r,n,t){if(!Tr(t))return!1;var u=typeof n;return(u=="number"?en(t)&&Bn(n,t.length):u=="string"&&n in t)?En(t[n],r):!1}function Wa(r,n){if(ur(r))return!1;var t=typeof r;return t=="number"||t=="symbol"||t=="boolean"||r==null||vn(r)?!0:G4.test(r)||!D4.test(r)||n!=null&&r in Ir(n)}function K9(r){var n=typeof r;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?r!=="__proto__":r===null}function Da(r){var n=ut(r),t=s[n];if(typeof t!="function"||!(n in hr.prototype))return!1;if(r===t)return!0;var u=Fa(t);return!!u&&r===u[0]}function Y9(r){return!!k1&&k1 in r}var Z9=Ci?Un:eu;function di(r){var n=r&&r.constructor,t=typeof n=="function"&&n.prototype||Te;return r===t}function ks(r){return r===r&&!Tr(r)}function zs(r,n){return function(t){return t==null?!1:t[r]===n&&(n!==a||r in Ir(t))}}function V9(r){var n=ct(r,function(u){return t.size===m&&t.clear(),u}),t=n.cache;return n}function Q9(r,n){var t=r[1],u=n[1],l=t|u,_=l<(R|S|L),$=u==L&&t==G||u==L&&t==X&&r[7].length<=n[8]||u==(L|X)&&n[7].length<=n[8]&&t==G;if(!(_||$))return r;u&R&&(r[2]=n[2],l|=t&R?0:F);var b=n[3];if(b){var w=r[3];r[3]=w?Ts(w,b,n[4]):b,r[4]=w?ne(r[3],d):n[4]}return b=n[5],b&&(w=r[5],r[5]=w?Os(w,b,n[6]):b,r[6]=w?ne(r[5],d):n[6]),b=n[7],b&&(r[7]=b),u&L&&(r[8]=r[8]==null?n[8]:Vr(r[8],n[8])),r[9]==null&&(r[9]=n[9]),r[0]=n[0],r[1]=l,r}function J9(r){var n=[];if(r!=null)for(var t in Ir(r))n.push(t);return n}function k9(r){return Wi.call(r)}function js(r,n,t){return n=Ur(n===a?r.length-1:n,0),function(){for(var u=arguments,l=-1,_=Ur(u.length-n,0),$=M(_);++l<_;)$[l]=u[n+l];l=-1;for(var b=M(n+1);++l<n;)b[l]=u[l];return b[n]=t($),fn(r,this,b)}}function xs(r,n){return n.length<2?r:de(r,Rn(n,0,-1))}function z9(r,n){for(var t=r.length,u=Vr(n.length,t),l=nn(r);u--;){var _=n[u];r[u]=Bn(_,t)?l[_]:a}return r}function Ga(r,n){if(!(n==="constructor"&&typeof r[n]=="function")&&n!="__proto__")return r[n]}var rc=ec(ys),gi=c5||function(r,n){return Kr.setTimeout(r,n)},Ba=ec(q9);function nc(r,n,t){var u=n+"";return Ba(r,U9(u,j9(D9(u),t)))}function ec(r){var n=0,t=0;return function(){var u=d5(),l=B-(u-t);if(t=u,l>0){if(++n>=D)return arguments[0]}else n=0;return r.apply(a,arguments)}}function ot(r,n){var t=-1,u=r.length,l=u-1;for(n=n===a?u:n;++t<n;){var _=ya(t,l),$=r[_];r[_]=r[t],r[t]=$}return r.length=n,r}var ic=V9(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(B4,function(t,u,l,_){n.push(l?_.replace(J4,"$1"):u||t)}),n});function Tn(r){if(typeof r=="string"||vn(r))return r;var n=r+"";return n=="0"&&1/r==-Z?"-0":n}function me(r){if(r!=null){try{return Hi.call(r)}catch{}try{return r+""}catch{}}return""}function j9(r,n){return gn(Lr,function(t){var u="_."+t[0];n&t[1]&&!Mi(r,u)&&r.push(u)}),r.sort()}function tc(r){if(r instanceof hr)return r.clone();var n=new $n(r.__wrapped__,r.__chain__);return n.__actions__=nn(r.__actions__),n.__index__=r.__index__,n.__values__=r.__values__,n}function x9(r,n,t){(t?zr(r,n,t):n===a)?n=1:n=Ur(fr(n),0);var u=r==null?0:r.length;if(!u||n<1)return[];for(var l=0,_=0,$=M(Ki(u/n));l<u;)$[_++]=Rn(r,l,l+=n);return $}function r7(r){for(var n=-1,t=r==null?0:r.length,u=0,l=[];++n<t;){var _=r[n];_&&(l[u++]=_)}return l}function n7(){var r=arguments.length;if(!r)return[];for(var n=M(r-1),t=arguments[0],u=r;u--;)n[u-1]=arguments[u];return re(ur(t)?nn(t):[t],Yr(n,1))}var e7=vr(function(r,n){return Cr(r)?si(r,Yr(n,1,Cr,!0)):[]}),i7=vr(function(r,n){var t=bn(n);return Cr(t)&&(t=a),Cr(r)?si(r,Yr(n,1,Cr,!0),er(t,2)):[]}),t7=vr(function(r,n){var t=bn(n);return Cr(t)&&(t=a),Cr(r)?si(r,Yr(n,1,Cr,!0),a,t):[]});function a7(r,n,t){var u=r==null?0:r.length;return u?(n=t||n===a?1:fr(n),Rn(r,n<0?0:n,u)):[]}function u7(r,n,t){var u=r==null?0:r.length;return u?(n=t||n===a?1:fr(n),n=u-n,Rn(r,0,n<0?0:n)):[]}function f7(r,n){return r&&r.length?rt(r,er(n,3),!0,!0):[]}function o7(r,n){return r&&r.length?rt(r,er(n,3),!0):[]}function l7(r,n,t,u){var l=r==null?0:r.length;return l?(t&&typeof t!="number"&&zr(r,n,t)&&(t=0,u=l),n9(r,n,t,u)):[]}function ac(r,n,t){var u=r==null?0:r.length;if(!u)return-1;var l=t==null?0:fr(t);return l<0&&(l=Ur(u+l,0)),Ti(r,er(n,3),l)}function uc(r,n,t){var u=r==null?0:r.length;if(!u)return-1;var l=u-1;return t!==a&&(l=fr(t),l=t<0?Ur(u+l,0):Vr(l,u-1)),Ti(r,er(n,3),l,!0)}function fc(r){var n=r==null?0:r.length;return n?Yr(r,1):[]}function v7(r){var n=r==null?0:r.length;return n?Yr(r,Z):[]}function s7(r,n){var t=r==null?0:r.length;return t?(n=n===a?1:fr(n),Yr(r,n)):[]}function c7(r){for(var n=-1,t=r==null?0:r.length,u={};++n<t;){var l=r[n];u[l[0]]=l[1]}return u}function oc(r){return r&&r.length?r[0]:a}function _7(r,n,t){var u=r==null?0:r.length;if(!u)return-1;var l=t==null?0:fr(t);return l<0&&(l=Ur(u+l,0)),Se(r,n,l)}function h7(r){var n=r==null?0:r.length;return n?Rn(r,0,-1):[]}var p7=vr(function(r){var n=Nr(r,Ea);return n.length&&n[0]===r[0]?ma(n):[]}),d7=vr(function(r){var n=bn(r),t=Nr(r,Ea);return n===bn(t)?n=a:t.pop(),t.length&&t[0]===r[0]?ma(t,er(n,2)):[]}),g7=vr(function(r){var n=bn(r),t=Nr(r,Ea);return n=typeof n=="function"?n:a,n&&t.pop(),t.length&&t[0]===r[0]?ma(t,a,n):[]});function m7(r,n){return r==null?"":h5.call(r,n)}function bn(r){var n=r==null?0:r.length;return n?r[n-1]:a}function $7(r,n,t){var u=r==null?0:r.length;if(!u)return-1;var l=u;return t!==a&&(l=fr(t),l=l<0?Ur(u+l,0):Vr(l,u-1)),n===n?jd(r,n,l):Ti(r,U1,l,!0)}function q7(r,n){return r&&r.length?$s(r,fr(n)):a}var R7=vr(lc);function lc(r,n){return r&&r.length&&n&&n.length?ba(r,n):r}function b7(r,n,t){return r&&r.length&&n&&n.length?ba(r,n,er(t,2)):r}function y7(r,n,t){return r&&r.length&&n&&n.length?ba(r,n,a,t):r}var L7=Gn(function(r,n){var t=r==null?0:r.length,u=ha(r,n);return bs(r,Nr(n,function(l){return Bn(l,t)?+l:l}).sort(Ms)),u});function I7(r,n){var t=[];if(!(r&&r.length))return t;var u=-1,l=[],_=r.length;for(n=er(n,3);++u<_;){var $=r[u];n($,u,r)&&(t.push($),l.push(u))}return bs(r,l),t}function Ua(r){return r==null?r:m5.call(r)}function A7(r,n,t){var u=r==null?0:r.length;return u?(t&&typeof t!="number"&&zr(r,n,t)?(n=0,t=u):(n=n==null?0:fr(n),t=t===a?u:fr(t)),Rn(r,n,t)):[]}function w7(r,n){return xi(r,n)}function E7(r,n,t){return Ia(r,n,er(t,2))}function S7(r,n){var t=r==null?0:r.length;if(t){var u=xi(r,n);if(u<t&&En(r[u],n))return u}return-1}function N7(r,n){return xi(r,n,!0)}function P7(r,n,t){return Ia(r,n,er(t,2),!0)}function M7(r,n){var t=r==null?0:r.length;if(t){var u=xi(r,n,!0)-1;if(En(r[u],n))return u}return-1}function T7(r){return r&&r.length?Ls(r):[]}function O7(r,n){return r&&r.length?Ls(r,er(n,2)):[]}function F7(r){var n=r==null?0:r.length;return n?Rn(r,1,n):[]}function C7(r,n,t){return r&&r.length?(n=t||n===a?1:fr(n),Rn(r,0,n<0?0:n)):[]}function H7(r,n,t){var u=r==null?0:r.length;return u?(n=t||n===a?1:fr(n),n=u-n,Rn(r,n<0?0:n,u)):[]}function W7(r,n){return r&&r.length?rt(r,er(n,3),!1,!0):[]}function D7(r,n){return r&&r.length?rt(r,er(n,3)):[]}var G7=vr(function(r){return te(Yr(r,1,Cr,!0))}),B7=vr(function(r){var n=bn(r);return Cr(n)&&(n=a),te(Yr(r,1,Cr,!0),er(n,2))}),U7=vr(function(r){var n=bn(r);return n=typeof n=="function"?n:a,te(Yr(r,1,Cr,!0),a,n)});function X7(r){return r&&r.length?te(r):[]}function K7(r,n){return r&&r.length?te(r,er(n,2)):[]}function Y7(r,n){return n=typeof n=="function"?n:a,r&&r.length?te(r,a,n):[]}function Xa(r){if(!(r&&r.length))return[];var n=0;return r=xn(r,function(t){if(Cr(t))return n=Ur(t.length,n),!0}),ua(n,function(t){return Nr(r,ia(t))})}function vc(r,n){if(!(r&&r.length))return[];var t=Xa(r);return n==null?t:Nr(t,function(u){return fn(n,a,u)})}var Z7=vr(function(r,n){return Cr(r)?si(r,n):[]}),V7=vr(function(r){return wa(xn(r,Cr))}),Q7=vr(function(r){var n=bn(r);return Cr(n)&&(n=a),wa(xn(r,Cr),er(n,2))}),J7=vr(function(r){var n=bn(r);return n=typeof n=="function"?n:a,wa(xn(r,Cr),a,n)}),k7=vr(Xa);function z7(r,n){return Es(r||[],n||[],vi)}function j7(r,n){return Es(r||[],n||[],hi)}var x7=vr(function(r){var n=r.length,t=n>1?r[n-1]:a;return t=typeof t=="function"?(r.pop(),t):a,vc(r,t)});function sc(r){var n=s(r);return n.__chain__=!0,n}function rg(r,n){return n(r),r}function lt(r,n){return n(r)}var ng=Gn(function(r){var n=r.length,t=n?r[0]:0,u=this.__wrapped__,l=function(_){return ha(_,r)};return n>1||this.__actions__.length||!(u instanceof hr)||!Bn(t)?this.thru(l):(u=u.slice(t,+t+(n?1:0)),u.__actions__.push({func:lt,args:[l],thisArg:a}),new $n(u,this.__chain__).thru(function(_){return n&&!_.length&&_.push(a),_}))});function eg(){return sc(this)}function ig(){return new $n(this.value(),this.__chain__)}function tg(){this.__values__===a&&(this.__values__=Ic(this.value()));var r=this.__index__>=this.__values__.length,n=r?a:this.__values__[this.__index__++];return{done:r,value:n}}function ag(){return this}function ug(r){for(var n,t=this;t instanceof Qi;){var u=tc(t);u.__index__=0,u.__values__=a,n?l.__wrapped__=u:n=u;var l=u;t=t.__wrapped__}return l.__wrapped__=r,n}function fg(){var r=this.__wrapped__;if(r instanceof hr){var n=r;return this.__actions__.length&&(n=new hr(this)),n=n.reverse(),n.__actions__.push({func:lt,args:[Ua],thisArg:a}),new $n(n,this.__chain__)}return this.thru(Ua)}function og(){return ws(this.__wrapped__,this.__actions__)}var lg=nt(function(r,n,t){br.call(r,t)?++r[t]:Wn(r,t,1)});function vg(r,n,t){var u=ur(r)?G1:r9;return t&&zr(r,n,t)&&(n=a),u(r,er(n,3))}function sg(r,n){var t=ur(r)?xn:vs;return t(r,er(n,3))}var cg=Ws(ac),_g=Ws(uc);function hg(r,n){return Yr(vt(r,n),1)}function pg(r,n){return Yr(vt(r,n),Z)}function dg(r,n,t){return t=t===a?1:fr(t),Yr(vt(r,n),t)}function cc(r,n){var t=ur(r)?gn:ie;return t(r,er(n,3))}function _c(r,n){var t=ur(r)?Fd:ls;return t(r,er(n,3))}var gg=nt(function(r,n,t){br.call(r,t)?r[t].push(n):Wn(r,t,[n])});function mg(r,n,t,u){r=en(r)?r:Be(r),t=t&&!u?fr(t):0;var l=r.length;return t<0&&(t=Ur(l+t,0)),pt(r)?t<=l&&r.indexOf(n,t)>-1:!!l&&Se(r,n,t)>-1}var $g=vr(function(r,n,t){var u=-1,l=typeof n=="function",_=en(r)?M(r.length):[];return ie(r,function($){_[++u]=l?fn(n,$,t):ci($,n,t)}),_}),qg=nt(function(r,n,t){Wn(r,t,n)});function vt(r,n){var t=ur(r)?Nr:ds;return t(r,er(n,3))}function Rg(r,n,t,u){return r==null?[]:(ur(n)||(n=n==null?[]:[n]),t=u?a:t,ur(t)||(t=t==null?[]:[t]),qs(r,n,t))}var bg=nt(function(r,n,t){r[t?0:1].push(n)},function(){return[[],[]]});function yg(r,n,t){var u=ur(r)?na:K1,l=arguments.length<3;return u(r,er(n,4),t,l,ie)}function Lg(r,n,t){var u=ur(r)?Cd:K1,l=arguments.length<3;return u(r,er(n,4),t,l,ls)}function Ig(r,n){var t=ur(r)?xn:vs;return t(r,_t(er(n,3)))}function Ag(r){var n=ur(r)?as:m9;return n(r)}function wg(r,n,t){(t?zr(r,n,t):n===a)?n=1:n=fr(n);var u=ur(r)?J5:$9;return u(r,n)}function Eg(r){var n=ur(r)?k5:R9;return n(r)}function Sg(r){if(r==null)return 0;if(en(r))return pt(r)?Pe(r):r.length;var n=Qr(r);return n==Ln||n==In?r.size:qa(r).length}function Ng(r,n,t){var u=ur(r)?ea:b9;return t&&zr(r,n,t)&&(n=a),u(r,er(n,3))}var Pg=vr(function(r,n){if(r==null)return[];var t=n.length;return t>1&&zr(r,n[0],n[1])?n=[]:t>2&&zr(n[0],n[1],n[2])&&(n=[n[0]]),qs(r,Yr(n,1),[])}),st=s5||function(){return Kr.Date.now()};function Mg(r,n){if(typeof n!="function")throw new mn(c);return r=fr(r),function(){if(--r<1)return n.apply(this,arguments)}}function hc(r,n,t){return n=t?a:n,n=r&&n==null?r.length:n,Dn(r,L,a,a,a,a,n)}function pc(r,n){var t;if(typeof n!="function")throw new mn(c);return r=fr(r),function(){return--r>0&&(t=n.apply(this,arguments)),r<=1&&(n=a),t}}var Ka=vr(function(r,n,t){var u=R;if(t.length){var l=ne(t,De(Ka));u|=O}return Dn(r,u,n,t,l)}),dc=vr(function(r,n,t){var u=R|S;if(t.length){var l=ne(t,De(dc));u|=O}return Dn(n,u,r,t,l)});function gc(r,n,t){n=t?a:n;var u=Dn(r,G,a,a,a,a,a,n);return u.placeholder=gc.placeholder,u}function mc(r,n,t){n=t?a:n;var u=Dn(r,U,a,a,a,a,a,n);return u.placeholder=mc.placeholder,u}function $c(r,n,t){var u,l,_,$,b,w,C=0,H=!1,K=!1,k=!0;if(typeof r!="function")throw new mn(c);n=yn(n)||0,Tr(t)&&(H=!!t.leading,K="maxWait"in t,_=K?Ur(yn(t.maxWait)||0,n):_,k="trailing"in t?!!t.trailing:k);function x(Hr){var Sn=u,Kn=l;return u=l=a,C=Hr,$=r.apply(Kn,Sn),$}function ir(Hr){return C=Hr,b=gi(cr,n),H?x(Hr):$}function or(Hr){var Sn=Hr-w,Kn=Hr-C,Wc=n-Sn;return K?Vr(Wc,_-Kn):Wc}function tr(Hr){var Sn=Hr-w,Kn=Hr-C;return w===a||Sn>=n||Sn<0||K&&Kn>=_}function cr(){var Hr=st();if(tr(Hr))return dr(Hr);b=gi(cr,or(Hr))}function dr(Hr){return b=a,k&&u?x(Hr):(u=l=a,$)}function sn(){b!==a&&Ss(b),C=0,u=w=l=b=a}function jr(){return b===a?$:dr(st())}function cn(){var Hr=st(),Sn=tr(Hr);if(u=arguments,l=this,w=Hr,Sn){if(b===a)return ir(w);if(K)return Ss(b),b=gi(cr,n),x(w)}return b===a&&(b=gi(cr,n)),$}return cn.cancel=sn,cn.flush=jr,cn}var Tg=vr(function(r,n){return os(r,1,n)}),Og=vr(function(r,n,t){return os(r,yn(n)||0,t)});function Fg(r){return Dn(r,Q)}function ct(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new mn(c);var t=function(){var u=arguments,l=n?n.apply(this,u):u[0],_=t.cache;if(_.has(l))return _.get(l);var $=r.apply(this,u);return t.cache=_.set(l,$)||_,$};return t.cache=new(ct.Cache||Hn),t}ct.Cache=Hn;function _t(r){if(typeof r!="function")throw new mn(c);return function(){var n=arguments;switch(n.length){case 0:return!r.call(this);case 1:return!r.call(this,n[0]);case 2:return!r.call(this,n[0],n[1]);case 3:return!r.call(this,n[0],n[1],n[2])}return!r.apply(this,n)}}function Cg(r){return pc(2,r)}var Hg=y9(function(r,n){n=n.length==1&&ur(n[0])?Nr(n[0],on(er())):Nr(Yr(n,1),on(er()));var t=n.length;return vr(function(u){for(var l=-1,_=Vr(u.length,t);++l<_;)u[l]=n[l].call(this,u[l]);return fn(r,this,u)})}),Ya=vr(function(r,n){var t=ne(n,De(Ya));return Dn(r,O,a,n,t)}),qc=vr(function(r,n){var t=ne(n,De(qc));return Dn(r,W,a,n,t)}),Wg=Gn(function(r,n){return Dn(r,X,a,a,a,n)});function Dg(r,n){if(typeof r!="function")throw new mn(c);return n=n===a?n:fr(n),vr(r,n)}function Gg(r,n){if(typeof r!="function")throw new mn(c);return n=n==null?0:Ur(fr(n),0),vr(function(t){var u=t[n],l=ue(t,0,n);return u&&re(l,u),fn(r,this,l)})}function Bg(r,n,t){var u=!0,l=!0;if(typeof r!="function")throw new mn(c);return Tr(t)&&(u="leading"in t?!!t.leading:u,l="trailing"in t?!!t.trailing:l),$c(r,n,{leading:u,maxWait:n,trailing:l})}function Ug(r){return hc(r,1)}function Xg(r,n){return Ya(Sa(n),r)}function Kg(){if(!arguments.length)return[];var r=arguments[0];return ur(r)?r:[r]}function Yg(r){return qn(r,h)}function Zg(r,n){return n=typeof n=="function"?n:a,qn(r,h,n)}function Vg(r){return qn(r,q|h)}function Qg(r,n){return n=typeof n=="function"?n:a,qn(r,q|h,n)}function Jg(r,n){return n==null||fs(r,n,Xr(n))}function En(r,n){return r===n||r!==r&&n!==n}var kg=at(ga),zg=at(function(r,n){return r>=n}),$e=_s(function(){return arguments}())?_s:function(r){return Fr(r)&&br.call(r,"callee")&&!x1.call(r,"callee")},ur=M.isArray,jg=O1?on(O1):u9;function en(r){return r!=null&&ht(r.length)&&!Un(r)}function Cr(r){return Fr(r)&&en(r)}function xg(r){return r===!0||r===!1||Fr(r)&&kr(r)==Dr}var fe=_5||eu,r8=F1?on(F1):f9;function n8(r){return Fr(r)&&r.nodeType===1&&!mi(r)}function e8(r){if(r==null)return!0;if(en(r)&&(ur(r)||typeof r=="string"||typeof r.splice=="function"||fe(r)||Ge(r)||$e(r)))return!r.length;var n=Qr(r);if(n==Ln||n==In)return!r.size;if(di(r))return!qa(r).length;for(var t in r)if(br.call(r,t))return!1;return!0}function i8(r,n){return _i(r,n)}function t8(r,n,t){t=typeof t=="function"?t:a;var u=t?t(r,n):a;return u===a?_i(r,n,a,t):!!u}function Za(r){if(!Fr(r))return!1;var n=kr(r);return n==nr||n==Sr||typeof r.message=="string"&&typeof r.name=="string"&&!mi(r)}function a8(r){return typeof r=="number"&&ns(r)}function Un(r){if(!Tr(r))return!1;var n=kr(r);return n==lr||n==Mr||n==mr||n==S4}function Rc(r){return typeof r=="number"&&r==fr(r)}function ht(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=J}function Tr(r){var n=typeof r;return r!=null&&(n=="object"||n=="function")}function Fr(r){return r!=null&&typeof r=="object"}var bc=C1?on(C1):l9;function u8(r,n){return r===n||$a(r,n,Ca(n))}function f8(r,n,t){return t=typeof t=="function"?t:a,$a(r,n,Ca(n),t)}function o8(r){return yc(r)&&r!=+r}function l8(r){if(Z9(r))throw new ar(v);return hs(r)}function v8(r){return r===null}function s8(r){return r==null}function yc(r){return typeof r=="number"||Fr(r)&&kr(r)==xe}function mi(r){if(!Fr(r)||kr(r)!=Fn)return!1;var n=Bi(r);if(n===null)return!0;var t=br.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&Hi.call(t)==f5}var Va=H1?on(H1):v9;function c8(r){return Rc(r)&&r>=-J&&r<=J}var Lc=W1?on(W1):s9;function pt(r){return typeof r=="string"||!ur(r)&&Fr(r)&&kr(r)==ni}function vn(r){return typeof r=="symbol"||Fr(r)&&kr(r)==Ei}var Ge=D1?on(D1):c9;function _8(r){return r===a}function h8(r){return Fr(r)&&Qr(r)==ei}function p8(r){return Fr(r)&&kr(r)==P4}var d8=at(Ra),g8=at(function(r,n){return r<=n});function Ic(r){if(!r)return[];if(en(r))return pt(r)?An(r):nn(r);if(ai&&r[ai])return Jd(r[ai]());var n=Qr(r),t=n==Ln?oa:n==In?Oi:Be;return t(r)}function Xn(r){if(!r)return r===0?r:0;if(r=yn(r),r===Z||r===-Z){var n=r<0?-1:1;return n*gr}return r===r?r:0}function fr(r){var n=Xn(r),t=n%1;return n===n?t?n-t:n:0}function Ac(r){return r?pe(fr(r),0,_r):0}function yn(r){if(typeof r=="number")return r;if(vn(r))return V;if(Tr(r)){var n=typeof r.valueOf=="function"?r.valueOf():r;r=Tr(n)?n+"":n}if(typeof r!="string")return r===0?r:+r;r=Y1(r);var t=j4.test(r);return t||rd.test(r)?Md(r.slice(2),t?2:8):z4.test(r)?V:+r}function wc(r){return Mn(r,tn(r))}function m8(r){return r?pe(fr(r),-J,J):r===0?r:0}function qr(r){return r==null?"":ln(r)}var $8=He(function(r,n){if(di(n)||en(n)){Mn(n,Xr(n),r);return}for(var t in n)br.call(n,t)&&vi(r,t,n[t])}),Ec=He(function(r,n){Mn(n,tn(n),r)}),dt=He(function(r,n,t,u){Mn(n,tn(n),r,u)}),q8=He(function(r,n,t,u){Mn(n,Xr(n),r,u)}),R8=Gn(ha);function b8(r,n){var t=Ce(r);return n==null?t:us(t,n)}var y8=vr(function(r,n){r=Ir(r);var t=-1,u=n.length,l=u>2?n[2]:a;for(l&&zr(n[0],n[1],l)&&(u=1);++t<u;)for(var _=n[t],$=tn(_),b=-1,w=$.length;++b<w;){var C=$[b],H=r[C];(H===a||En(H,Te[C])&&!br.call(r,C))&&(r[C]=_[C])}return r}),L8=vr(function(r){return r.push(a,Ys),fn(Sc,a,r)});function I8(r,n){return B1(r,er(n,3),Pn)}function A8(r,n){return B1(r,er(n,3),da)}function w8(r,n){return r==null?r:pa(r,er(n,3),tn)}function E8(r,n){return r==null?r:ss(r,er(n,3),tn)}function S8(r,n){return r&&Pn(r,er(n,3))}function N8(r,n){return r&&da(r,er(n,3))}function P8(r){return r==null?[]:zi(r,Xr(r))}function M8(r){return r==null?[]:zi(r,tn(r))}function Qa(r,n,t){var u=r==null?a:de(r,n);return u===a?t:u}function T8(r,n){return r!=null&&Qs(r,n,e9)}function Ja(r,n){return r!=null&&Qs(r,n,i9)}var O8=Gs(function(r,n,t){n!=null&&typeof n.toString!="function"&&(n=Wi.call(n)),r[n]=t},za(an)),F8=Gs(function(r,n,t){n!=null&&typeof n.toString!="function"&&(n=Wi.call(n)),br.call(r,n)?r[n].push(t):r[n]=[t]},er),C8=vr(ci);function Xr(r){return en(r)?ts(r):qa(r)}function tn(r){return en(r)?ts(r,!0):_9(r)}function H8(r,n){var t={};return n=er(n,3),Pn(r,function(u,l,_){Wn(t,n(u,l,_),u)}),t}function W8(r,n){var t={};return n=er(n,3),Pn(r,function(u,l,_){Wn(t,l,n(u,l,_))}),t}var D8=He(function(r,n,t){ji(r,n,t)}),Sc=He(function(r,n,t,u){ji(r,n,t,u)}),G8=Gn(function(r,n){var t={};if(r==null)return t;var u=!1;n=Nr(n,function(_){return _=ae(_,r),u||(u=_.length>1),_}),Mn(r,Oa(r),t),u&&(t=qn(t,q|A|h,O9));for(var l=n.length;l--;)Aa(t,n[l]);return t});function B8(r,n){return Nc(r,_t(er(n)))}var U8=Gn(function(r,n){return r==null?{}:p9(r,n)});function Nc(r,n){if(r==null)return{};var t=Nr(Oa(r),function(u){return[u]});return n=er(n),Rs(r,t,function(u,l){return n(u,l[0])})}function X8(r,n,t){n=ae(n,r);var u=-1,l=n.length;for(l||(l=1,r=a);++u<l;){var _=r==null?a:r[Tn(n[u])];_===a&&(u=l,_=t),r=Un(_)?_.call(r):_}return r}function K8(r,n,t){return r==null?r:hi(r,n,t)}function Y8(r,n,t,u){return u=typeof u=="function"?u:a,r==null?r:hi(r,n,t,u)}var Pc=Xs(Xr),Mc=Xs(tn);function Z8(r,n,t){var u=ur(r),l=u||fe(r)||Ge(r);if(n=er(n,4),t==null){var _=r&&r.constructor;l?t=u?new _:[]:Tr(r)?t=Un(_)?Ce(Bi(r)):{}:t={}}return(l?gn:Pn)(r,function($,b,w){return n(t,$,b,w)}),t}function V8(r,n){return r==null?!0:Aa(r,n)}function Q8(r,n,t){return r==null?r:As(r,n,Sa(t))}function J8(r,n,t,u){return u=typeof u=="function"?u:a,r==null?r:As(r,n,Sa(t),u)}function Be(r){return r==null?[]:fa(r,Xr(r))}function k8(r){return r==null?[]:fa(r,tn(r))}function z8(r,n,t){return t===a&&(t=n,n=a),t!==a&&(t=yn(t),t=t===t?t:0),n!==a&&(n=yn(n),n=n===n?n:0),pe(yn(r),n,t)}function j8(r,n,t){return n=Xn(n),t===a?(t=n,n=0):t=Xn(t),r=yn(r),t9(r,n,t)}function x8(r,n,t){if(t&&typeof t!="boolean"&&zr(r,n,t)&&(n=t=a),t===a&&(typeof n=="boolean"?(t=n,n=a):typeof r=="boolean"&&(t=r,r=a)),r===a&&n===a?(r=0,n=1):(r=Xn(r),n===a?(n=r,r=0):n=Xn(n)),r>n){var u=r;r=n,n=u}if(t||r%1||n%1){var l=es();return Vr(r+l*(n-r+Pd("1e-"+((l+"").length-1))),n)}return ya(r,n)}var rm=We(function(r,n,t){return n=n.toLowerCase(),r+(t?Tc(n):n)});function Tc(r){return ka(qr(r).toLowerCase())}function Oc(r){return r=qr(r),r&&r.replace(ed,Kd).replace(Rd,"")}function nm(r,n,t){r=qr(r),n=ln(n);var u=r.length;t=t===a?u:pe(fr(t),0,u);var l=t;return t-=n.length,t>=0&&r.slice(t,l)==n}function em(r){return r=qr(r),r&&C4.test(r)?r.replace(s1,Yd):r}function im(r){return r=qr(r),r&&U4.test(r)?r.replace(Yt,"\\$&"):r}var tm=We(function(r,n,t){return r+(t?"-":"")+n.toLowerCase()}),am=We(function(r,n,t){return r+(t?" ":"")+n.toLowerCase()}),um=Hs("toLowerCase");function fm(r,n,t){r=qr(r),n=fr(n);var u=n?Pe(r):0;if(!n||u>=n)return r;var l=(n-u)/2;return tt(Yi(l),t)+r+tt(Ki(l),t)}function om(r,n,t){r=qr(r),n=fr(n);var u=n?Pe(r):0;return n&&u<n?r+tt(n-u,t):r}function lm(r,n,t){r=qr(r),n=fr(n);var u=n?Pe(r):0;return n&&u<n?tt(n-u,t)+r:r}function vm(r,n,t){return t||n==null?n=0:n&&(n=+n),g5(qr(r).replace(Zt,""),n||0)}function sm(r,n,t){return(t?zr(r,n,t):n===a)?n=1:n=fr(n),La(qr(r),n)}function cm(){var r=arguments,n=qr(r[0]);return r.length<3?n:n.replace(r[1],r[2])}var _m=We(function(r,n,t){return r+(t?"_":"")+n.toLowerCase()});function hm(r,n,t){return t&&typeof t!="number"&&zr(r,n,t)&&(n=t=a),t=t===a?_r:t>>>0,t?(r=qr(r),r&&(typeof n=="string"||n!=null&&!Va(n))&&(n=ln(n),!n&&Ne(r))?ue(An(r),0,t):r.split(n,t)):[]}var pm=We(function(r,n,t){return r+(t?" ":"")+ka(n)});function dm(r,n,t){return r=qr(r),t=t==null?0:pe(fr(t),0,r.length),n=ln(n),r.slice(t,t+n.length)==n}function gm(r,n,t){var u=s.templateSettings;t&&zr(r,n,t)&&(n=a),r=qr(r),n=dt({},n,u,Ks);var l=dt({},n.imports,u.imports,Ks),_=Xr(l),$=fa(l,_),b,w,C=0,H=n.interpolate||Si,K="__p += '",k=la((n.escape||Si).source+"|"+H.source+"|"+(H===c1?k4:Si).source+"|"+(n.evaluate||Si).source+"|$","g"),x="//# sourceURL="+(br.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Ad+"]")+`
`;r.replace(k,function(tr,cr,dr,sn,jr,cn){return dr||(dr=sn),K+=r.slice(C,cn).replace(id,Zd),cr&&(b=!0,K+=`' +
__e(`+cr+`) +
'`),jr&&(w=!0,K+=`';
`+jr+`;
__p += '`),dr&&(K+=`' +
((__t = (`+dr+`)) == null ? '' : __t) +
'`),C=cn+tr.length,tr}),K+=`';
`;var ir=br.call(n,"variable")&&n.variable;if(!ir)K=`with (obj) {
`+K+`
}
`;else if(Q4.test(ir))throw new ar(p);K=(w?K.replace(M4,""):K).replace(T4,"$1").replace(O4,"$1;"),K="function("+(ir||"obj")+`) {
`+(ir?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(b?", __e = _.escape":"")+(w?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var or=Cc(function(){return $r(_,x+"return "+K).apply(a,$)});if(or.source=K,Za(or))throw or;return or}function mm(r){return qr(r).toLowerCase()}function $m(r){return qr(r).toUpperCase()}function qm(r,n,t){if(r=qr(r),r&&(t||n===a))return Y1(r);if(!r||!(n=ln(n)))return r;var u=An(r),l=An(n),_=Z1(u,l),$=V1(u,l)+1;return ue(u,_,$).join("")}function Rm(r,n,t){if(r=qr(r),r&&(t||n===a))return r.slice(0,J1(r)+1);if(!r||!(n=ln(n)))return r;var u=An(r),l=V1(u,An(n))+1;return ue(u,0,l).join("")}function bm(r,n,t){if(r=qr(r),r&&(t||n===a))return r.replace(Zt,"");if(!r||!(n=ln(n)))return r;var u=An(r),l=Z1(u,An(n));return ue(u,l).join("")}function ym(r,n){var t=P,u=N;if(Tr(n)){var l="separator"in n?n.separator:l;t="length"in n?fr(n.length):t,u="omission"in n?ln(n.omission):u}r=qr(r);var _=r.length;if(Ne(r)){var $=An(r);_=$.length}if(t>=_)return r;var b=t-Pe(u);if(b<1)return u;var w=$?ue($,0,b).join(""):r.slice(0,b);if(l===a)return w+u;if($&&(b+=w.length-b),Va(l)){if(r.slice(b).search(l)){var C,H=w;for(l.global||(l=la(l.source,qr(_1.exec(l))+"g")),l.lastIndex=0;C=l.exec(H);)var K=C.index;w=w.slice(0,K===a?b:K)}}else if(r.indexOf(ln(l),b)!=b){var k=w.lastIndexOf(l);k>-1&&(w=w.slice(0,k))}return w+u}function Lm(r){return r=qr(r),r&&F4.test(r)?r.replace(v1,xd):r}var Im=We(function(r,n,t){return r+(t?" ":"")+n.toUpperCase()}),ka=Hs("toUpperCase");function Fc(r,n,t){return r=qr(r),n=t?a:n,n===a?Qd(r)?e5(r):Dd(r):r.match(n)||[]}var Cc=vr(function(r,n){try{return fn(r,a,n)}catch(t){return Za(t)?t:new ar(t)}}),Am=Gn(function(r,n){return gn(n,function(t){t=Tn(t),Wn(r,t,Ka(r[t],r))}),r});function wm(r){var n=r==null?0:r.length,t=er();return r=n?Nr(r,function(u){if(typeof u[1]!="function")throw new mn(c);return[t(u[0]),u[1]]}):[],vr(function(u){for(var l=-1;++l<n;){var _=r[l];if(fn(_[0],this,u))return fn(_[1],this,u)}})}function Em(r){return x5(qn(r,q))}function za(r){return function(){return r}}function Sm(r,n){return r==null||r!==r?n:r}var Nm=Ds(),Pm=Ds(!0);function an(r){return r}function ja(r){return ps(typeof r=="function"?r:qn(r,q))}function Mm(r){return gs(qn(r,q))}function Tm(r,n){return ms(r,qn(n,q))}var Om=vr(function(r,n){return function(t){return ci(t,r,n)}}),Fm=vr(function(r,n){return function(t){return ci(r,t,n)}});function xa(r,n,t){var u=Xr(n),l=zi(n,u);t==null&&!(Tr(n)&&(l.length||!u.length))&&(t=n,n=r,r=this,l=zi(n,Xr(n)));var _=!(Tr(t)&&"chain"in t)||!!t.chain,$=Un(r);return gn(l,function(b){var w=n[b];r[b]=w,$&&(r.prototype[b]=function(){var C=this.__chain__;if(_||C){var H=r(this.__wrapped__),K=H.__actions__=nn(this.__actions__);return K.push({func:w,args:arguments,thisArg:r}),H.__chain__=C,H}return w.apply(r,re([this.value()],arguments))})}),r}function Cm(){return Kr._===this&&(Kr._=o5),this}function ru(){}function Hm(r){return r=fr(r),vr(function(n){return $s(n,r)})}var Wm=Pa(Nr),Dm=Pa(G1),Gm=Pa(ea);function Hc(r){return Wa(r)?ia(Tn(r)):d9(r)}function Bm(r){return function(n){return r==null?a:de(r,n)}}var Um=Bs(),Xm=Bs(!0);function nu(){return[]}function eu(){return!1}function Km(){return{}}function Ym(){return""}function Zm(){return!0}function Vm(r,n){if(r=fr(r),r<1||r>J)return[];var t=_r,u=Vr(r,_r);n=er(n),r-=_r;for(var l=ua(u,n);++t<r;)n(t);return l}function Qm(r){return ur(r)?Nr(r,Tn):vn(r)?[r]:nn(ic(qr(r)))}function Jm(r){var n=++u5;return qr(r)+n}var km=it(function(r,n){return r+n},0),zm=Ma("ceil"),jm=it(function(r,n){return r/n},1),xm=Ma("floor");function r$(r){return r&&r.length?ki(r,an,ga):a}function n$(r,n){return r&&r.length?ki(r,er(n,2),ga):a}function e$(r){return X1(r,an)}function i$(r,n){return X1(r,er(n,2))}function t$(r){return r&&r.length?ki(r,an,Ra):a}function a$(r,n){return r&&r.length?ki(r,er(n,2),Ra):a}var u$=it(function(r,n){return r*n},1),f$=Ma("round"),o$=it(function(r,n){return r-n},0);function l$(r){return r&&r.length?aa(r,an):0}function v$(r,n){return r&&r.length?aa(r,er(n,2)):0}return s.after=Mg,s.ary=hc,s.assign=$8,s.assignIn=Ec,s.assignInWith=dt,s.assignWith=q8,s.at=R8,s.before=pc,s.bind=Ka,s.bindAll=Am,s.bindKey=dc,s.castArray=Kg,s.chain=sc,s.chunk=x9,s.compact=r7,s.concat=n7,s.cond=wm,s.conforms=Em,s.constant=za,s.countBy=lg,s.create=b8,s.curry=gc,s.curryRight=mc,s.debounce=$c,s.defaults=y8,s.defaultsDeep=L8,s.defer=Tg,s.delay=Og,s.difference=e7,s.differenceBy=i7,s.differenceWith=t7,s.drop=a7,s.dropRight=u7,s.dropRightWhile=f7,s.dropWhile=o7,s.fill=l7,s.filter=sg,s.flatMap=hg,s.flatMapDeep=pg,s.flatMapDepth=dg,s.flatten=fc,s.flattenDeep=v7,s.flattenDepth=s7,s.flip=Fg,s.flow=Nm,s.flowRight=Pm,s.fromPairs=c7,s.functions=P8,s.functionsIn=M8,s.groupBy=gg,s.initial=h7,s.intersection=p7,s.intersectionBy=d7,s.intersectionWith=g7,s.invert=O8,s.invertBy=F8,s.invokeMap=$g,s.iteratee=ja,s.keyBy=qg,s.keys=Xr,s.keysIn=tn,s.map=vt,s.mapKeys=H8,s.mapValues=W8,s.matches=Mm,s.matchesProperty=Tm,s.memoize=ct,s.merge=D8,s.mergeWith=Sc,s.method=Om,s.methodOf=Fm,s.mixin=xa,s.negate=_t,s.nthArg=Hm,s.omit=G8,s.omitBy=B8,s.once=Cg,s.orderBy=Rg,s.over=Wm,s.overArgs=Hg,s.overEvery=Dm,s.overSome=Gm,s.partial=Ya,s.partialRight=qc,s.partition=bg,s.pick=U8,s.pickBy=Nc,s.property=Hc,s.propertyOf=Bm,s.pull=R7,s.pullAll=lc,s.pullAllBy=b7,s.pullAllWith=y7,s.pullAt=L7,s.range=Um,s.rangeRight=Xm,s.rearg=Wg,s.reject=Ig,s.remove=I7,s.rest=Dg,s.reverse=Ua,s.sampleSize=wg,s.set=K8,s.setWith=Y8,s.shuffle=Eg,s.slice=A7,s.sortBy=Pg,s.sortedUniq=T7,s.sortedUniqBy=O7,s.split=hm,s.spread=Gg,s.tail=F7,s.take=C7,s.takeRight=H7,s.takeRightWhile=W7,s.takeWhile=D7,s.tap=rg,s.throttle=Bg,s.thru=lt,s.toArray=Ic,s.toPairs=Pc,s.toPairsIn=Mc,s.toPath=Qm,s.toPlainObject=wc,s.transform=Z8,s.unary=Ug,s.union=G7,s.unionBy=B7,s.unionWith=U7,s.uniq=X7,s.uniqBy=K7,s.uniqWith=Y7,s.unset=V8,s.unzip=Xa,s.unzipWith=vc,s.update=Q8,s.updateWith=J8,s.values=Be,s.valuesIn=k8,s.without=Z7,s.words=Fc,s.wrap=Xg,s.xor=V7,s.xorBy=Q7,s.xorWith=J7,s.zip=k7,s.zipObject=z7,s.zipObjectDeep=j7,s.zipWith=x7,s.entries=Pc,s.entriesIn=Mc,s.extend=Ec,s.extendWith=dt,xa(s,s),s.add=km,s.attempt=Cc,s.camelCase=rm,s.capitalize=Tc,s.ceil=zm,s.clamp=z8,s.clone=Yg,s.cloneDeep=Vg,s.cloneDeepWith=Qg,s.cloneWith=Zg,s.conformsTo=Jg,s.deburr=Oc,s.defaultTo=Sm,s.divide=jm,s.endsWith=nm,s.eq=En,s.escape=em,s.escapeRegExp=im,s.every=vg,s.find=cg,s.findIndex=ac,s.findKey=I8,s.findLast=_g,s.findLastIndex=uc,s.findLastKey=A8,s.floor=xm,s.forEach=cc,s.forEachRight=_c,s.forIn=w8,s.forInRight=E8,s.forOwn=S8,s.forOwnRight=N8,s.get=Qa,s.gt=kg,s.gte=zg,s.has=T8,s.hasIn=Ja,s.head=oc,s.identity=an,s.includes=mg,s.indexOf=_7,s.inRange=j8,s.invoke=C8,s.isArguments=$e,s.isArray=ur,s.isArrayBuffer=jg,s.isArrayLike=en,s.isArrayLikeObject=Cr,s.isBoolean=xg,s.isBuffer=fe,s.isDate=r8,s.isElement=n8,s.isEmpty=e8,s.isEqual=i8,s.isEqualWith=t8,s.isError=Za,s.isFinite=a8,s.isFunction=Un,s.isInteger=Rc,s.isLength=ht,s.isMap=bc,s.isMatch=u8,s.isMatchWith=f8,s.isNaN=o8,s.isNative=l8,s.isNil=s8,s.isNull=v8,s.isNumber=yc,s.isObject=Tr,s.isObjectLike=Fr,s.isPlainObject=mi,s.isRegExp=Va,s.isSafeInteger=c8,s.isSet=Lc,s.isString=pt,s.isSymbol=vn,s.isTypedArray=Ge,s.isUndefined=_8,s.isWeakMap=h8,s.isWeakSet=p8,s.join=m7,s.kebabCase=tm,s.last=bn,s.lastIndexOf=$7,s.lowerCase=am,s.lowerFirst=um,s.lt=d8,s.lte=g8,s.max=r$,s.maxBy=n$,s.mean=e$,s.meanBy=i$,s.min=t$,s.minBy=a$,s.stubArray=nu,s.stubFalse=eu,s.stubObject=Km,s.stubString=Ym,s.stubTrue=Zm,s.multiply=u$,s.nth=q7,s.noConflict=Cm,s.noop=ru,s.now=st,s.pad=fm,s.padEnd=om,s.padStart=lm,s.parseInt=vm,s.random=x8,s.reduce=yg,s.reduceRight=Lg,s.repeat=sm,s.replace=cm,s.result=X8,s.round=f$,s.runInContext=I,s.sample=Ag,s.size=Sg,s.snakeCase=_m,s.some=Ng,s.sortedIndex=w7,s.sortedIndexBy=E7,s.sortedIndexOf=S7,s.sortedLastIndex=N7,s.sortedLastIndexBy=P7,s.sortedLastIndexOf=M7,s.startCase=pm,s.startsWith=dm,s.subtract=o$,s.sum=l$,s.sumBy=v$,s.template=gm,s.times=Vm,s.toFinite=Xn,s.toInteger=fr,s.toLength=Ac,s.toLower=mm,s.toNumber=yn,s.toSafeInteger=m8,s.toString=qr,s.toUpper=$m,s.trim=qm,s.trimEnd=Rm,s.trimStart=bm,s.truncate=ym,s.unescape=Lm,s.uniqueId=Jm,s.upperCase=Im,s.upperFirst=ka,s.each=cc,s.eachRight=_c,s.first=oc,xa(s,function(){var r={};return Pn(s,function(n,t){br.call(s.prototype,t)||(r[t]=n)}),r}(),{chain:!1}),s.VERSION=f,gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){s[r].placeholder=s}),gn(["drop","take"],function(r,n){hr.prototype[r]=function(t){t=t===a?1:Ur(fr(t),0);var u=this.__filtered__&&!n?new hr(this):this.clone();return u.__filtered__?u.__takeCount__=Vr(t,u.__takeCount__):u.__views__.push({size:Vr(t,_r),type:r+(u.__dir__<0?"Right":"")}),u},hr.prototype[r+"Right"]=function(t){return this.reverse()[r](t).reverse()}}),gn(["filter","map","takeWhile"],function(r,n){var t=n+1,u=t==z||t==Y;hr.prototype[r]=function(l){var _=this.clone();return _.__iteratees__.push({iteratee:er(l,3),type:t}),_.__filtered__=_.__filtered__||u,_}}),gn(["head","last"],function(r,n){var t="take"+(n?"Right":"");hr.prototype[r]=function(){return this[t](1).value()[0]}}),gn(["initial","tail"],function(r,n){var t="drop"+(n?"":"Right");hr.prototype[r]=function(){return this.__filtered__?new hr(this):this[t](1)}}),hr.prototype.compact=function(){return this.filter(an)},hr.prototype.find=function(r){return this.filter(r).head()},hr.prototype.findLast=function(r){return this.reverse().find(r)},hr.prototype.invokeMap=vr(function(r,n){return typeof r=="function"?new hr(this):this.map(function(t){return ci(t,r,n)})}),hr.prototype.reject=function(r){return this.filter(_t(er(r)))},hr.prototype.slice=function(r,n){r=fr(r);var t=this;return t.__filtered__&&(r>0||n<0)?new hr(t):(r<0?t=t.takeRight(-r):r&&(t=t.drop(r)),n!==a&&(n=fr(n),t=n<0?t.dropRight(-n):t.take(n-r)),t)},hr.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},hr.prototype.toArray=function(){return this.take(_r)},Pn(hr.prototype,function(r,n){var t=/^(?:filter|find|map|reject)|While$/.test(n),u=/^(?:head|last)$/.test(n),l=s[u?"take"+(n=="last"?"Right":""):n],_=u||/^find/.test(n);l&&(s.prototype[n]=function(){var $=this.__wrapped__,b=u?[1]:arguments,w=$ instanceof hr,C=b[0],H=w||ur($),K=function(cr){var dr=l.apply(s,re([cr],b));return u&&k?dr[0]:dr};H&&t&&typeof C=="function"&&C.length!=1&&(w=H=!1);var k=this.__chain__,x=!!this.__actions__.length,ir=_&&!k,or=w&&!x;if(!_&&H){$=or?$:new hr(this);var tr=r.apply($,b);return tr.__actions__.push({func:lt,args:[K],thisArg:a}),new $n(tr,k)}return ir&&or?r.apply(this,b):(tr=this.thru(K),ir?u?tr.value()[0]:tr.value():tr)})}),gn(["pop","push","shift","sort","splice","unshift"],function(r){var n=Fi[r],t=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",u=/^(?:pop|shift)$/.test(r);s.prototype[r]=function(){var l=arguments;if(u&&!this.__chain__){var _=this.value();return n.apply(ur(_)?_:[],l)}return this[t](function($){return n.apply(ur($)?$:[],l)})}}),Pn(hr.prototype,function(r,n){var t=s[n];if(t){var u=t.name+"";br.call(Fe,u)||(Fe[u]=[]),Fe[u].push({name:n,func:t})}}),Fe[et(a,S).name]=[{name:"wrapper",func:a}],hr.prototype.clone=L5,hr.prototype.reverse=I5,hr.prototype.value=A5,s.prototype.at=ng,s.prototype.chain=eg,s.prototype.commit=ig,s.prototype.next=tg,s.prototype.plant=ug,s.prototype.reverse=fg,s.prototype.toJSON=s.prototype.valueOf=s.prototype.value=og,s.prototype.first=s.prototype.head,ai&&(s.prototype[ai]=ag),s},Me=i5();se?((se.exports=Me)._=Me,jt._=Me):Kr._=Me}).call(xL)}($i,$i.exports)),$i.exports}var $t=rI(),nI=vq("<main><h1> </h1> <h2> </h2></main>");function eI(i,e){n4(e,!0);let a=N$(qe([]));const f=18e3;async function o(){const A=await(await fetch("https://raw.githubusercontent.com/smy20011/ScrapingFsd/refs/heads/main/extracted/latest.json")).json();Zn(a,qe(A))}let v=C$(()=>{if(oe(a).length==0)return{};const q=oe(a).map(R=>({miles:R.city_miles,failure:Math.round(R.runs*(1-R.success_rate)),version:R.version.split(".").slice(0,2).join(".")})),A=$t.groupBy(q,"version"),h=$t.mapValues(A,R=>{const S=R.map(G=>G.miles).reduce((G,U)=>G+U),F=R.map(G=>G.failure).reduce((G,U)=>G+U);return{miles:S,failure:F}}),E=$t.max($t.keys(h));if(!E)return{};const y=h[E];return{version:E,prob:jL(y.miles/f,y.failure)}});G$(()=>{o()});var c=nI(),p=tu(c),g=tu(p),m=F$(p,2),d=tu(m);U$(()=>{Kc(g,`The latest version of FSD is ${oe(v).version??""}`),Kc(d,`The probability of FSD achieving 18,000 miles per critical disengagement is ${(oe(v).prob??0)*100} %`)}),sq(i,c),e4()}cq(eI,{target:document.getElementById("app")});
