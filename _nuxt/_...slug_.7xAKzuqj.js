import{d as y,ag as w,ah as p,b as s,a8 as g,w as _,aA as e,n as k,g as i,c as u,f as m,t as v,e as h,a9 as b,a3 as N,aC as E,ab as V,s as q,x as z,aD as $,aE as M,aF as H,ac as O,ao as F,an as G,aG as D,aH as K,q as S,aI as j}from"./entry.tj_GE95_.js";import{_ as J,a as Q,b as W}from"./getCreationDate.3eOp-k5b.js";import{_ as X,a as Y}from"./nuxt-img.XnZT1j_m.js";import Z from"./ContentRenderer.VIpXAeDk.js";import"./MDCRenderer.qW_bEowb.js";import"./index.Wme0U9j4.js";import"./_commonjsHelpers.5-cIlDoe.js";import"./node.kQagOfUD.js";import"./ContentRendererMarkdown.vue.npgb2i_M.js";const ee=y({inheritAttrs:!1,__name:"DocsSurroundLink",props:{link:{},icon:{},ui:{},class:{}},setup(l){const a={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},o=l,{ui:n,attrs:r}=w("docs.surround.link",p(o,"ui"),a,p(o,"class"),!0);return(t,c)=>{const d=N,x=E;return s(),g(x,b({to:t.link._path,class:e(n).wrapper},e(r)),{default:_(()=>[t.icon||t.link.icon?(s(),u("div",{key:0,class:k(e(n).icon.wrapper)},[i(d,{name:t.icon||t.link.icon,class:k(e(n).icon.base)},null,8,["name","class"])],2)):m("",!0),h("p",{class:k(e(n).title)},v(t.link.title),3),h("p",{class:k(e(n).description)},v(t.link.description),3)]),_:1},16,["to","class"])}}}),te={key:1,class:"hidden sm:block"},ne=y({inheritAttrs:!1,__name:"DocsSurround",props:{surround:{},ui:{},class:{}},setup(l){const a={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},o=l,{ui:n,attrs:r}=w("docs.surround",p(o,"ui"),a,p(o,"class"),!0),[t,c]=o.surround||[];return(d,x)=>{const f=ee;return s(),u("div",b({class:e(n).wrapper},e(r)),[e(t)?(s(),g(f,{key:0,link:e(t),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(s(),u("span",te," ")),e(c)?(s(),g(f,{key:2,link:e(c),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),ae=y({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},ui:{default:()=>({})},class:{default:void 0}},setup(l){const a={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},o=l,{ui:n,attrs:r}=w("page.body",p(o,"ui"),a,p(o,"class"),!0);return(t,c)=>(s(),u("div",b({class:[e(n).wrapper,t.prose&&e(n).prose]},e(r)),[V(t.$slots,"default")],16))}}),oe={class:"mb-8 text-sky-600 dark:text-sky-300 text-sm flex items-baseline gap-x-4"},re={key:0},ge=y({__name:"[...slug]",async setup(l){let a,o;const n=q(),{seo:r}=z(),{data:t}=([a,o]=$(()=>D(n.path,()=>S(n.path).findOne(),"$aROEKgqrzL")),a=await a,o(),a);if(!t.value)throw M({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:c}=([a,o]=$(()=>D(`${n.path}-surround`,()=>S().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(j(n.path)))),a=await a,o(),a);return H({titleTemplate:`%s - ${r==null?void 0:r.siteName}`,title:t.value.title,ogTitle:`${t.value.title} - ${r==null?void 0:r.siteName}`,description:t.value.description,ogDescription:t.value.description}),(d,x)=>{const f=N,U=J,A=X,B=Y,P=Q,R=Z,I=K,L=ne,T=ae;return s(),u("div",null,[i(P,F(G(e(t))),{description:_(()=>[h("div",oe,[h("div",null,[i(f,{name:"i-heroicons-clock"}),O(" "+v(("getCreationDate"in d?d.getCreationDate:e(W))(e(t))),1)]),i(U,{tags:e(t).tags},null,8,["tags"])]),i(A,{value:e(t).description},null,8,["value"])]),default:_(()=>[e(t).image?(s(),g(B,{key:0,src:e(t).image.src,alt:e(t).image.alt,class:"ml-auto",preset:"page"},null,8,["src","alt"])):m("",!0)]),_:1},16),i(T,{prose:""},{default:_(()=>{var C;return[i(I,null,{default:_(()=>[e(t).body?(s(),g(R,{key:0,value:e(t),class:"max-w-xl mx-auto"},null,8,["value"])):m("",!0)]),_:1}),(C=e(c))!=null&&C.length?(s(),u("hr",re)):m("",!0),i(L,{surround:e(c)},null,8,["surround"])]}),_:1})])}}});export{ge as default};
