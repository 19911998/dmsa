import{_ as B,a as D}from"./DocsSurround.vue.0B9iLoBx.js";import{_ as j}from"./MDC.vue.MXthLYCT.js";import{_ as M}from"./TagList.vue.hSbIzIoe.js";import{_ as N}from"./PageHero.vue.rKYyj4Gf.js";import P from"./ContentRenderer.dggViHC8.js";import{d as S,s as U,x as z,aC as g,aD as L,aE as R,b as i,c as l,g as o,w as c,aA as e,e as d,F as h,a7 as E,ao as F,an as H,a8 as V,f as p,aF as y,aG as q,t as K,q as v,aK as O}from"./entry.od2Ijbo8.js";import{_ as Z}from"./PageBody.vue.RW6I4bXa.js";import"./MDCRenderer.hU4Vzchy.js";import"./index.Wme0U9j4.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./ContentRendererMarkdown.vue.fyUGyQ7o.js";const G={key:0,class:"grid grid-cols-3 gap-x-2"},X={class:"text-right font-semibold capitalize"},I=["innerHTML"],J={key:0},mt=S({__name:"[...slug]",async setup(Q){let s,u;const m=U(),{seo:r}=z(),{data:t}=([s,u]=g(()=>y(m.path,()=>v(m.path).findOne(),"$g9rZZjXO3T")),s=await s,u(),s);if(!t.value)throw L({statusCode:404,statusMessage:"Page not found",fatal:!0});t.value.meta.jahre&&(t.value.meta.zeitraum=t.value.meta.jahre.reduce((a,_)=>(!a.length||_>a.at(-1)[0]+1?a.push([_]):a.at(-1)[1]=_,a),[]).map(a=>a.length>1?a.join(" – "):a[0]));const{data:f}=([s,u]=g(()=>y(`${m.path}-surround`,()=>v("map").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(O(m.path)))),s=await s,u(),s);return R({titleTemplate:`%s - ${r==null?void 0:r.siteName}`,title:t.value.title,ogTitle:`${t.value.title} - ${r==null?void 0:r.siteName}`,description:t.value.description,ogDescription:t.value.description}),(a,_)=>{const x=B,C=j,$=M,w=N,k=P,T=q,b=D,A=Z;return i(),l("div",null,[o(x,{links:[{label:"Karte",icon:"i-heroicons-map",to:"/map"}],class:"mt-4"}),o(w,F(H(e(t))),{description:c(()=>[o(C,{value:e(t).description},null,8,["value"]),o($,{base:"/map",tags:e(t).tags,class:"mt-5"},null,8,["tags"])]),default:c(()=>[d("dl",null,[(i(),l(h,null,E(["ort","träger","zeitraum"],n=>(i(),l(h,{key:n},[e(t).meta[n]?(i(),l("div",G,[d("dt",X,K(n)+": ",1),d("dd",{class:"col-span-2",innerHTML:Array.isArray(e(t).meta[n])?e(t).meta[n].join(", "):e(t).meta[n]},null,8,I)])):p("",!0)],64))),64))])]),_:1},16),o(A,{prose:""},{default:c(()=>{var n;return[o(T,null,{default:c(()=>[e(t).body?(i(),V(k,{key:0,value:e(t),class:"max-w-lg mx-auto"},null,8,["value"])):p("",!0)]),_:1}),(n=e(f))!=null&&n.length?(i(),l("hr",J)):p("",!0),o(b,{surround:e(f)},null,8,["surround"])]}),_:1})])}}});export{mt as default};
