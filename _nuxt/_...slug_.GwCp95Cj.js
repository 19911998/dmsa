import{_ as D}from"./MDC.vue.5HMtYAqS.js";import{_ as T}from"./PageHero.vue.liYw9-C_.js";import b from"./ContentRenderer.6R73G1ZJ.js";import{d as j,s as B,x as M,aC as g,aD as N,aE as P,b as r,c as i,g as u,w as _,aA as a,e as d,F as h,a7 as S,ao as z,an as H,a8 as R,f as p,aF as y,aG as U,t as E,q as v,aH as F}from"./entry.Bk61fWBw.js";import{_ as L,a as V}from"./PageBody.vue.auTBvA-r.js";import"./MDCRenderer.SKlxSwRd.js";import"./index.Wme0U9j4.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./ContentRendererMarkdown.vue.YWNE3A_T.js";const q={key:0,class:"grid grid-cols-3 gap-x-2"},O={class:"text-right font-semibold capitalize"},Z=["innerHTML"],G={key:0},se=j({__name:"[...slug]",async setup(X){let s,l;const m=B(),{seo:o}=M(),{data:e}=([s,l]=g(()=>y(m.path,()=>v(m.path).findOne(),"$g9rZZjXO3T")),s=await s,l(),s);if(!e.value)throw N({statusCode:404,statusMessage:"Page not found",fatal:!0});e.value.meta.jahre&&(e.value.meta.zeitraum=e.value.meta.jahre.reduce((t,c)=>(!t.length||c>t.at(-1)[0]+1?t.push([c]):t.at(-1)[1]=c,t),[]).map(t=>t.length>1?t.join(" – "):t[0]));const{data:f}=([s,l]=g(()=>y(`${m.path}-surround`,()=>v("map").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(F(m.path)))),s=await s,l(),s);return P({titleTemplate:`%s - ${o==null?void 0:o.siteName}`,title:e.value.title,ogTitle:`${e.value.title} - ${o==null?void 0:o.siteName}`,description:e.value.description,ogDescription:e.value.description}),(t,c)=>{const C=D,x=T,$=b,w=U,k=L,A=V;return r(),i("div",null,[u(x,z(H(a(e))),{description:_(()=>[u(C,{value:a(e).description},null,8,["value"])]),default:_(()=>[d("dl",null,[(r(),i(h,null,S(["bundesland","ort","träger","organisationen","zeitraum"],n=>(r(),i(h,{key:n},[a(e).meta[n]?(r(),i("div",q,[d("dt",O,E(n)+": ",1),d("dd",{class:"col-span-2",innerHTML:Array.isArray(a(e).meta[n])?a(e).meta[n].join(",<br>"):a(e).meta[n]},null,8,Z)])):p("",!0)],64))),64))])]),_:1},16),u(A,{prose:""},{default:_(()=>{var n;return[u(w,null,{default:_(()=>[a(e).body?(r(),R($,{key:0,value:a(e),class:"max-w-lg mx-auto"},null,8,["value"])):p("",!0)]),_:1}),(n=a(f))!=null&&n.length?(r(),i("hr",G)):p("",!0),u(k,{surround:a(f)},null,8,["surround"])]}),_:1})])}}});export{se as default};