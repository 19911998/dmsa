import{_ as v}from"./MDC.vue.roZ61WOb.js";import{_ as C}from"./nuxt-img.RnnJYnPs.js";import{_ as x}from"./PageHero.vue.CjXirj9n.js";import y from"./ContentRenderer.IKqpQ5H0.js";import{d as $,v as h,y as w,aD as k,aE as B,aF as N,b as r,c as P,g as n,w as s,aB as t,a9 as m,f as _,ap as R,ao as D,aG as E,aH as A,s as M}from"./entry.-PtTLPNW.js";import{_ as U}from"./PageBody.vue.ejBMTbZs.js";import"./MDCRenderer.gK-15-xF.js";import"./index.Wme0U9j4.js";import"./node.kQagOfUD.js";import"./ContentRendererMarkdown.vue.E_7pJ8PN.js";const j=$({__name:"[...slug]",async setup(b){let o,c;const i=h(),{seo:a}=w(),{data:e}=([o,c]=k(()=>E(i.path,()=>M(i.path).findOne(),"$aROEKgqrzL")),o=await o,c(),o);if(!e.value)throw B({statusCode:404,statusMessage:"Page not found",fatal:!0});return N({titleTemplate:`%s - ${a==null?void 0:a.siteName}`,title:e.value.title,ogTitle:`${e.value.title} - ${a==null?void 0:a.siteName}`,description:e.value.description,ogDescription:e.value.description}),(q,z)=>{const l=v,p=C,u=x,d=y,f=A,g=U;return r(),P("div",null,[n(u,R(D(t(e))),{description:s(()=>[n(l,{value:t(e).description},null,8,["value"])]),default:s(()=>[t(e).image?(r(),m(p,{key:0,src:t(e).image.src,alt:t(e).image.alt,class:"ml-auto",preset:"page"},null,8,["src","alt"])):_("",!0)]),_:1},16),n(g,{prose:""},{default:s(()=>[n(f,null,{default:s(()=>[t(e).body?(r(),m(d,{key:0,value:t(e),class:"max-w-lg mx-auto"},null,8,["value"])):_("",!0)]),_:1})]),_:1})])}}});export{j as default};