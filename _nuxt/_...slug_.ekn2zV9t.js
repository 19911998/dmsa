import{_ as g}from"./nuxt-img.537e3jcv.js";import{_ as v,a as x}from"./PageBody.vue.zJQeZsdu.js";import C from"./ContentRenderer.j4GsL8xG.js";import{d as y,x as h,z as w,aJ as $,aK as N,aL as P,b as s,ah as n,w as r,g as _,G as a,f as l,aw as R,av as k,aM as z,aN as A,v as B}from"./entry.YOOJUZ67.js";import"./ContentRendererMarkdown.vue.tw7DaCSP.js";import"./MDCRenderer.hchoUy1e.js";import"./index.1dSrIji7.js";const V=y({__name:"[...slug]",async setup(M){let o,c;const i=h(),{seo:t}=w(),{data:e}=([o,c]=$(()=>z(i.path,()=>B(i.path).findOne(),"$aROEKgqrzL")),o=await o,c(),o);if(!e.value)throw N({statusCode:404,statusMessage:"Page not found",fatal:!0});return P({titleTemplate:`%s - ${t==null?void 0:t.siteName}`,title:e.value.title,ogTitle:`${e.value.title} - ${t==null?void 0:t.siteName}`,description:e.value.description,ogDescription:e.value.description}),(U,b)=>{const m=g,u=v,p=C,d=x,f=A;return s(),n(f,null,{default:r(()=>[_(u,R(k(a(e))),{default:r(()=>[a(e).image?(s(),n(m,{key:0,src:a(e).image.src,alt:a(e).image.alt,class:"ml-auto",preset:"page"},null,8,["src","alt"])):l("",!0)]),_:1},16),_(d,{prose:""},{default:r(()=>[a(e).body?(s(),n(p,{key:0,value:a(e),class:"max-w-xl"},null,8,["value"])):l("",!0)]),_:1})]),_:1})}}});export{V as default};