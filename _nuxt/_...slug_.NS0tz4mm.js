import{_ as T,a as O}from"./PageLinks.vue.DiT3lGrj.js";import{_ as R,a as V}from"./PageBody.vue.Q18FWMti.js";import E from"./ContentRenderer.aw58R1Uc.js";import{_ as F}from"./DocsSurround.vue.W2MKr8fj.js";import{d as Z,v as q,y as H,aB as f,aC as L,aD as M,b as s,a8 as h,w as u,g as m,az as e,e as g,c as i,a7 as b,F as d,f as p,aE as y,aF as I,t as k,j as J,aJ as K}from"./entry.sgBElhiv.js";import{q as x}from"./query.vEyoyXR4.js";import"./ContentRendererMarkdown.vue.LX8vAmwC.js";import"./MDCRenderer.Q0RHCwz9.js";import"./index.1dSrIji7.js";const X={class:"flex flex-col gap-y-2 text-sm"},G={key:0},Q={class:"text-primary font-semibold capitalize"},W={key:0},Y={key:1},mt=Z({__name:"[...slug]",async setup(tt){var w;let a,r;const c=q(),{seo:l}=H(),{data:t}=([a,r]=f(()=>y(c.path,()=>x(c.path).findOne(),"$g9rZZjXO3T")),a=await a,r(),a);if(!t.value)throw L({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:U}=([a,r]=f(()=>y("map-links",()=>x("_map").only("links").findOne())),a=await a,r(),a);(w=t.value.meta)!=null&&w.jahre&&(t.value.meta.zeitraum=t.value.meta.jahre.reduce((o,_)=>(!o.length||_>o.at(-1).at(-1)+1?o.push([_]):o.at(-1)[1]=_,o),[]).map(o=>o.length>1?o.join(" – "):o[0]));const{data:$}=([a,r]=f(()=>y(`${c.path}-surround`,()=>x("map").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(K(c.path)))),a=await a,r(),a);return M({titleTemplate:`%s - ${l==null?void 0:l.siteName}`,title:t.value.title,ogTitle:`${t.value.title} - ${l==null?void 0:l.siteName}`,description:t.value.description,ogDescription:t.value.description}),(o,_)=>{const C=T,A=O,B=R,N=E,j=F,z=V,D=I;return s(),h(D,null,{left:u(()=>[m(C,{links:e(U).links},null,8,["links"])]),right:u(()=>[m(C,null,{default:u(()=>[g("dl",X,[(s(),i(d,null,b(["bundesland","ort","träger","zeitraum","Organisationen"],n=>{var v;return s(),i(d,{key:n},[(v=e(t).meta)!=null&&v[n]?(s(),i("div",G,[g("dt",Q,k(n),1),g("dd",null,[Array.isArray(e(t).meta[n])?(s(),i("ul",W,[(s(!0),i(d,null,b(e(t).meta[n],(P,S)=>(s(),i("li",{key:S,class:"mb-2"},k(P),1))),128))])):(s(),i(d,{key:1},[J(k(e(t).meta[n]),1)],64))])])):p("",!0)],64)}),64))]),e(t).tags?(s(),h(A,{key:0,links:e(t).tags.map(n=>({label:n,to:`/map/?tag=${encodeURIComponent(n)}`,icon:"i-heroicons-hashtag"})),ui:{title:"text-primary"},class:"mt-8",title:"Hashtags"},null,8,["links"])):p("",!0)]),_:1})]),default:u(()=>[m(B,{title:e(t).title,description:e(t).description,links:[{label:"Zurück zur Karte",icon:"i-heroicons-arrow-uturn-left",to:"/map",target:"_self"}],ui:{links:"ml-4 min-w-fit"}},null,8,["title","description"]),m(z,{prose:""},{default:u(()=>{var n;return[e(t).body?(s(),h(N,{key:0,value:e(t),class:"max-w-xl"},null,8,["value"])):p("",!0),(n=e($))!=null&&n.length?(s(),i("hr",Y)):p("",!0),m(j,{surround:e($)},null,8,["surround"])]}),_:1})]),_:1})}}});export{mt as default};
