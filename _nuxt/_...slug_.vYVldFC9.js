import{_ as k}from"./MDC.vue.ZbG-xfvU.js";import{_ as D}from"./nuxt-img.1zinZa42.js";import{_ as N}from"./PageHero.vue.zmDS86_9.js";import P from"./ContentRenderer.iKQOcSOI.js";import{d as S,s as T,x as A,aC as m,aD as B,aE as R,b as i,c as p,g as n,w as c,ac as U,t as E,aA as e,a8 as d,f as u,ao as M,an as V,aF as f,aG as b,q as g,aH as q}from"./entry.odLbc5jC.js";import{_ as H,a as O}from"./PageBody.vue.2rWr15-E.js";import"./MDCRenderer.HbQTAHI8.js";import"./index.Wme0U9j4.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./ContentRendererMarkdown.vue.dWPyrjMo.js";const Z={key:0},at=S({__name:"[...slug]",async setup(j){let a,s;const r=T(),{seo:o}=A(),{data:t}=([a,s]=m(()=>f(r.path,()=>g(r.path).findOne(),"$g9rZZjXO3T")),a=await a,s(),a);if(!t.value)throw B({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:l}=([a,s]=m(()=>f(`${r.path}-surround`,()=>g("map").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(q(r.path)))),a=await a,s(),a);return R({titleTemplate:`%s - ${o==null?void 0:o.siteName}`,title:t.value.title,ogTitle:`${t.value.title} - ${o==null?void 0:o.siteName}`,description:t.value.description,ogDescription:t.value.description}),(z,F)=>{const h=k,x=D,v=N,C=P,y=b,$=H,w=O;return i(),p("div",null,[n(v,M(V(e(t))),{description:c(()=>[U(E(e(t).categories)+" ",1),n(h,{value:e(t).description},null,8,["value"])]),default:c(()=>[e(t).image?(i(),d(x,{key:0,src:e(t).image.src,alt:e(t).image.alt,class:"ml-auto",preset:"page"},null,8,["src","alt"])):u("",!0)]),_:1},16),n(w,{prose:""},{default:c(()=>{var _;return[n(y,null,{default:c(()=>[e(t).body?(i(),d(C,{key:0,value:e(t),class:"max-w-xl mx-auto"},null,8,["value"])):u("",!0)]),_:1}),(_=e(l))!=null&&_.length?(i(),p("hr",Z)):u("",!0),n($,{surround:e(l)},null,8,["surround"])]}),_:1})])}}});export{at as default};