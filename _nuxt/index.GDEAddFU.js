import{_ as S,a as q}from"./PageLinks.vue.SSWHSZ_z.js";import{_ as F,a as H}from"./PageBody.vue.ktXvUnBN.js";import{d as y,b as i,c as b,F as w,a9 as $,aa as p,w as a,t as U,j as x,g as l,f as B,aM as R,aN as V,H as h,aD as v,aE as z,aF as I,aB as n,ab as O,aq as j,x as G,aG as k,aH as Q,aO as J,v as f}from"./entry.lbvjluWs.js";import{_ as K,a as W}from"./BlogList.vue.RaZT6w4o.js";import{_ as X}from"./formatDate.R--iNgjV.js";import"./nuxt-img.ykZrtEe6.js";const Y={key:0,class:"flex gap-x-2"},Z=y({__name:"TagList",props:{base:{},tags:{},pageTag:{}},setup(C){return(e,c)=>{const t=R,u=V;return e.tags?(i(),b("div",Y,[(i(!0),b(w,null,$(e.tags,s=>(i(),p(u,{key:s,class:"z-50",variant:s===e.pageTag?"solid":"subtle",color:"primary"},{default:a(()=>[l(t,{to:s===e.pageTag?e.base:e.base+"?tag="+encodeURIComponent(s),class:"flex items-center gap-x-2"},{default:a(()=>[x(U(s),1)]),_:2},1032,["to"])]),_:2},1032,["variant"]))),128))])):B("",!0)}}}),re=y({__name:"index",async setup(C){let e,c;const t=h(()=>G().query.tag),{data:u}=([e,c]=v(()=>k(t.value?"tag-"+t.value:"blog-posts",()=>(t.value?f("blog").where({tags:{$contains:t.value}}):f("blog")).without("body").sort({date:-1}).find(),{watch:[t]})),e=await e,c(),e);if(!u.value.length)throw z({statusCode:404,statusMessage:"Page not found",fatal:!0});const s=h(()=>Array.from(u.value.reduce((r,m)=>{for(const g of m.tags)r.set(g,(r.get(g)||0)+1);return r},new Map)).sort((r,m)=>m[1]-r[1])),{data:_}=([e,c]=v(()=>k("blog-overview",()=>f("_blog").findOne())),e=await e,c(),e);return I({title:_.value.title,ogTitle:_.value.title,description:_.value.description,ogDescription:_.value.description}),(r,m)=>{const g=S,D=q,P=F,T=Z,L=W,A=K,N=H,E=Q,M=J;return i(),p(M,null,{default:a(()=>[l(E,null,{left:a(()=>[l(g,{links:n(_).links},null,8,["links"])]),right:a(()=>[l(g,null,{default:a(()=>[n(s).length?(i(),p(D,{key:0,links:[...n(s)].map(([o,d])=>({label:`${o} (${d})`,to:`/blog/?tag=${encodeURIComponent(o)}`,icon:"i-heroicons-tag",exactQuery:!0})),title:"Schlagworte"},null,8,["links"])):B("",!0)]),_:1})]),default:a(()=>[l(P,O(n(_).hero,{links:n(t)?[{label:"Alle Blog-Einträge",to:"/blog/",target:"_self",icon:"i-heroicons-arrow-uturn-left"}]:void 0}),j({_:2},[n(t)?{name:"headline",fn:a(()=>[x(" #"+U(n(t)),1)]),key:"0"}:void 0]),1040,["links"]),l(N,null,{default:a(()=>[l(A,{orientation:"vertical"},{default:a(()=>[(i(!0),b(w,null,$(n(u),(o,d)=>(i(),p(L,{key:d,to:o._path,title:o.title,description:o.description,image:o.image,date:("formatDate"in r?r.formatDate:n(X))(o.date),badge:o.badge,orientation:"horizontal",class:"col-span-full",ui:{description:"line-clamp-2"}},{badge:a(()=>[l(T,{base:"/blog/",tags:o.tags,"page-tag":n(t),class:"mt-4"},null,8,["tags","page-tag"])]),_:2},1032,["to","title","description","image","date","badge"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}});export{re as default};
