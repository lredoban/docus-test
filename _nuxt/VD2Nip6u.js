import P from"./CpSGHYSs.js";import k from"./BhAO_kMZ.js";import L from"./Dlg_VXPT.js";import{d,u as b,D as g,P as x,s as R,E as S,G as B,H as r,I as m,r as C,a as N,J as j,K as H,L as p,M as O,N as T,S as A,O as D,Q as E,p as w,R as $,U as I,c as M,e as f,g as y,w as _,V as v}from"./bQmF0_h8.js";import"./Dtg3B92W.js";import"./76o_WpOd.js";import"./Dh6uvwQ3.js";import"./BGDLOcEW.js";const V=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,o){return()=>p(m[t.name],t.layoutProps,o.slots)}}),F={name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},G=d({name:"NuxtLayout",inheritAttrs:!1,props:F,setup(t,o){const e=b(),n=g(x),s=n===R()?S():n,u=B(()=>{let a=r(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=r(t.fallback)),a}),i=C();o.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);N().beforeEach(a)}return()=>{const a=u.value&&u.value in m,c=s.meta.layoutTransition??j;return H(a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{T(l)}},{default:()=>p(J,{layoutProps:O(o.attrs,{ref:i}),key:u.value||void 0,name:u.value,shouldProvide:!t.name,hasTransition:!!c},o.slots)})}).default()}}}),J=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,o){const e=t.name;return t.shouldProvide&&D(E,{isCurrent:n=>e===(n.meta.layout??"default")}),()=>{var n,s;return!e||typeof e=="string"&&!(e in m)?(s=(n=o.slots).default)==null?void 0:s.call(n):p(V,{key:e,layoutProps:t.layoutProps,name:e},o.slots)}}}),K={class:"document-driven-page"},ee=d({__name:"document-driven",setup(t){const{contentHead:o}=w().public.content,{page:e,layout:n}=$();return e.value,o&&I(e),(s,u)=>{const i=P,l=k,a=L,c=G;return f(),M("div",K,[y(c,{name:r(n)||"default"},{default:_(()=>[r(e)?(f(),v(l,{key:r(e)._id,value:r(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{ee as default};
