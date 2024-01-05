import{d as y,ag as w,ah as p,b as r,a8 as g,w as _,aA as e,n as k,g as i,c as u,f as m,t as v,e as h,a9 as b,a3 as N,aC as V,ab as E,s as H,x as M,aD as $,aE as q,aF as z,ac as G,ao as j,an as F,aG as D,aH as O,q as S,aI as J}from"./entry.-AXDM9M9.js";import{_ as K,a as Q,b as W}from"./getCreationDate.xsmYmU1G.js";import{_ as X,a as Y}from"./nuxt-img.RXegzpEW.js";import Z from"./ContentRenderer.Hal1f4WI.js";import"./MDCRenderer.lC8nJDik.js";import"./index.Wme0U9j4.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./ContentRendererMarkdown.vue.ZUsRFRVr.js";const ee=y({inheritAttrs:!1,__name:"DocsSurroundLink",props:{link:{},icon:{},ui:{},class:{}},setup(l){const o={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},a=l,{ui:n,attrs:s}=w("docs.surround.link",p(a,"ui"),o,p(a,"class"),!0);return(t,c)=>{const d=N,x=V;return r(),g(x,b({to:t.link._path,class:e(n).wrapper},e(s)),{default:_(()=>[t.icon||t.link.icon?(r(),u("div",{key:0,class:k(e(n).icon.wrapper)},[i(d,{name:t.icon||t.link.icon,class:k(e(n).icon.base)},null,8,["name","class"])],2)):m("",!0),h("p",{class:k(e(n).title)},v(t.link.title),3),h("p",{class:k(e(n).description)},v(t.link.description),3)]),_:1},16,["to","class"])}}}),te={key:1,class:"hidden sm:block"},ne=y({inheritAttrs:!1,__name:"DocsSurround",props:{surround:{},ui:{},class:{}},setup(l){const o={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},a=l,{ui:n,attrs:s}=w("docs.surround",p(a,"ui"),o,p(a,"class"),!0),[t,c]=a.surround||[];return(d,x)=>{const f=ee;return r(),u("div",b({class:e(n).wrapper},e(s)),[e(t)?(r(),g(f,{key:0,link:e(t),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(r(),u("span",te," ")),e(c)?(r(),g(f,{key:2,link:e(c),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),oe=y({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},ui:{default:()=>({})},class:{default:void 0}},setup(l){const o={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},a=l,{ui:n,attrs:s}=w("page.body",p(a,"ui"),o,p(a,"class"),!0);return(t,c)=>(r(),u("div",b({class:[e(n).wrapper,t.prose&&e(n).prose]},e(s)),[E(t.$slots,"default")],16))}}),ae={class:"mb-8 text-sky-600 dark:text-sky-300 text-sm flex items-baseline gap-x-4"},se={key:0},ge=y({__name:"[...slug]",async setup(l){let o,a;const n=H(),{seo:s}=M(),{data:t}=([o,a]=$(()=>D(n.path,()=>S(n.path).findOne(),"$ij35HG41ph")),o=await o,a(),o);if(!t.value)throw q({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:c}=([o,a]=$(()=>D(`${n.path}-surround`,()=>S().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(J(n.path)))),o=await o,a(),o);return z({titleTemplate:`%s - ${s==null?void 0:s.siteName}`,title:t.value.title,ogTitle:`${t.value.title} - ${s==null?void 0:s.siteName}`,description:t.value.description,ogDescription:t.value.description}),(d,x)=>{const f=N,U=K,A=X,B=Y,P=Q,I=Z,R=O,T=ne,L=oe;return r(),u("div",null,[i(P,j(F(e(t))),{description:_(()=>[h("div",ae,[h("div",null,[i(f,{name:"i-heroicons-clock"}),G(" "+v(("getCreationDate"in d?d.getCreationDate:e(W))(e(t))),1)]),i(U,{tags:e(t).tags},null,8,["tags"])]),i(A,{value:e(t).description},null,8,["value"])]),default:_(()=>[e(t).image?(r(),g(B,{key:0,src:e(t).image.src,alt:e(t).image.alt,class:"ml-auto",preset:"page"},null,8,["src","alt"])):m("",!0)]),_:1},16),i(L,{prose:""},{default:_(()=>{var C;return[i(R,null,{default:_(()=>[e(t).body?(r(),g(I,{key:0,value:e(t),class:"max-w-xl mx-auto"},null,8,["value"])):m("",!0)]),_:1}),(C=e(c))!=null&&C.length?(r(),u("hr",se)):m("",!0),i(T,{surround:e(c)},null,8,["surround"])]}),_:1})])}}});export{ge as default};
