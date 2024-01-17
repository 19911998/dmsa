import{_ as M,a as R}from"./PageLinks.vue.fnzAwTMh.js";import{_ as V,a as q}from"./PageBody.vue.qA7cWOAY.js";import{d as y,b as l,c as b,F as w,ag as $,ah as p,w as a,t as U,j as x,g as i,f as C,aS as z,aT as F,E as h,aJ as v,aK as I,aL as j,G as n,ai as G,ax as H,x as J,aM as k,aN as K,aU as O,v as f}from"./entry.LpGTPBIw.js";import{_ as Q,a as W}from"./BlogList.vue.ZvHoVh0V.js";import{_ as X}from"./formatDate.R--iNgjV.js";import"./nuxt-img.w5FHjr9K.js";const Y={key:0,class:"flex gap-x-2"},Z=y({__name:"TagList",props:{base:{},tags:{},pageTag:{}},setup(B){return(e,c)=>{const t=z,u=F;return e.tags?(l(),b("div",Y,[(l(!0),b(w,null,$(e.tags,s=>(l(),p(u,{key:s,class:"z-50",variant:s===e.pageTag?"solid":"subtle",color:"primary"},{default:a(()=>[i(t,{to:s===e.pageTag?e.base:e.base+"?tag="+encodeURIComponent(s),class:"flex items-center gap-x-2"},{default:a(()=>[x(U(s),1)]),_:2},1032,["to"])]),_:2},1032,["variant"]))),128))])):C("",!0)}}}),re=y({__name:"index",async setup(B){let e,c;const t=h(()=>J().query.tag),{data:u}=([e,c]=v(()=>k(t.value?"tag-"+t.value:"blog-posts",()=>(t.value?f("blog").where({tags:{$contains:t.value}}):f("blog")).without("body").sort({date:-1}).find(),{watch:[t]})),e=await e,c(),e);if(!u.value.length)throw I({statusCode:404,statusMessage:"Page not found",fatal:!0});const s=h(()=>Array.from(u.value.reduce((r,m)=>{for(const g of m.tags)r.set(g,(r.get(g)||0)+1);return r},new Map)).sort((r,m)=>m[1]-r[1])),{data:_}=([e,c]=v(()=>k("blog-overview",()=>f("_blog").findOne())),e=await e,c(),e);return j({title:_.value.title,ogTitle:_.value.title,description:_.value.description,ogDescription:_.value.description}),(r,m)=>{const g=M,T=R,L=V,P=Z,D=W,A=Q,N=q,S=K,E=O;return l(),p(E,null,{default:a(()=>[i(S,null,{left:a(()=>[i(g,{links:n(_).links},null,8,["links"])]),right:a(()=>[i(g,null,{default:a(()=>[n(s).length?(l(),p(T,{key:0,links:[...n(s)].map(([o,d])=>({label:`${o} (${d})`,to:`/blog?tag=${encodeURIComponent(o)}`,icon:"i-heroicons-tag",exactQuery:!0})),title:"Schlagworte"},null,8,["links"])):C("",!0)]),_:1})]),default:a(()=>[i(L,G(n(_).hero,{links:n(t)?[{label:"Alle Blog-Einträge",to:"/blog",target:"_self",icon:"i-heroicons-arrow-uturn-left"}]:void 0}),H({_:2},[n(t)?{name:"headline",fn:a(()=>[x(" #"+U(n(t)),1)]),key:"0"}:void 0]),1040,["links"]),i(N,null,{default:a(()=>[i(A,{orientation:"vertical"},{default:a(()=>[(l(!0),b(w,null,$(n(u),(o,d)=>(l(),p(D,{key:d,to:o._path,title:o.title,description:o.description,image:o.image,date:("formatDate"in r?r.formatDate:n(X))(o.date),badge:o.badge,orientation:"horizontal",class:"col-span-full",ui:{description:"line-clamp-2"}},{badge:a(()=>[i(P,{base:"/blog",tags:o.tags,"page-tag":n(t),class:"mt-4"},null,8,["tags","page-tag"])]),_:2},1032,["to","title","description","image","date","badge"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{re as default};
