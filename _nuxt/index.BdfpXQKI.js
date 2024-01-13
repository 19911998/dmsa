import{_ as G}from"./MDC.vue.7axTdvPu.js";import{d as O,ah as j,ai as B,b as a,c as n,ac as o,g as U,w as A,aB as s,n as l,f as r,t as m,ad as S,e as N,F as w,aa as f,a9 as v,a8 as _,ag as E,aO as F,a4 as H,aD as x,q as M,aF as P,o as T,aG as V,s as q}from"./entry.oiFEn2Y_.js";import{_ as z}from"./nuxt-img.RLBUpI2j.js";import{_ as R}from"./LandingCard._yYZtAxB.js";import"./MDCRenderer.ZF7ER7Rk.js";import"./index.Wme0U9j4.js";import"./node.kQagOfUD.js";import"./Card.Rs8gaCmD.js";const J=O({inheritAttrs:!1,__name:"LandingHero",props:{title:{default:""},description:{default:""},links:{default:()=>[]},orientation:{default:"vertical"},ui:{default:()=>({})},class:{default:void 0}},setup(C){const d={wrapper:"py-24 sm:py-32 md:py-40 relative",container:"gap-16 sm:gap-y-24",base:"",headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:"mt-10 flex flex-wrap gap-x-6 gap-y-3"},c=C,{ui:t,attrs:b}=j("landing.hero",B(c,"ui"),d,B(c,"class"),!0);return(e,k)=>{const u=E,g=F;return a(),n("div",f({class:s(t).wrapper},s(b)),[o(e.$slots,"top"),U(g,{class:l([s(t).container,e.orientation==="vertical"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"])},{default:A(()=>{var h;return[N("div",{class:l([s(t).base,e.orientation==="vertical"&&"text-center"])},[e.$slots.headline?(a(),n("div",{key:0,class:l(s(t).headline)},[o(e.$slots,"headline")],2)):r("",!0),N("h1",{class:l(s(t).title)},[o(e.$slots,"title",{},()=>[S(m(e.title),1)])],2),e.description||e.$slots.description?(a(),n("p",{key:1,class:l(s(t).description)},[o(e.$slots,"description",{},()=>[S(m(e.description),1)])],2)):r("",!0),(h=e.links)!=null&&h.length||e.$slots.links?(a(),n("div",{key:2,class:l([s(t).links,e.orientation==="vertical"&&"justify-center"])},[o(e.$slots,"links",{},()=>[(a(!0),n(w,null,_(e.links,(p,y)=>(a(),v(u,f({key:y},p,{onClick:p.click}),null,16,["onClick"]))),128))])],2)):r("",!0)],2),o(e.$slots,"default")]}),_:3},8,["class"]),o(e.$slots,"bottom")],16)}}}),K=O({inheritAttrs:!1,__name:"PageGrid",props:{ui:{},class:{}},setup(C){const d={wrapper:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"},c=C,{ui:t,attrs:b}=j("page.grid",B(c,"ui"),d,B(c,"class"),!0);return(e,k)=>(a(),n("div",f({class:s(t).wrapper},s(b)),[o(e.$slots,"default")],16))}}),Q={key:0},W={key:2},X={key:0},Y=O({inheritAttrs:!1,__name:"LandingSection",props:{icon:{default:void 0},headline:{default:void 0},title:{default:""},description:{default:void 0},features:{default:()=>[]},links:{default:()=>[]},slot:{default:void 0},align:{default:"center"},ui:{default:()=>({})},class:{default:void 0}},setup(C){const d={wrapper:"py-24 sm:py-32",container:"gap-16 sm:gap-y-24",base:"",icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:"i-heroicons-check-circle"}}},c=C,{ui:t,attrs:b}=j("landing.section",B(c,"ui"),d,B(c,"class"),!0);return(e,k)=>{const u=H,g=E,h=F;return a(),n("div",f({class:s(t).wrapper},s(b)),[o(e.$slots,"top"),U(h,{class:l([s(t).container,e.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"])},{default:A(()=>{var p,y,D,I,$;return[e.icon||e.$slots.icon||e.headline||e.$slots.headline||e.title||e.$slots.title||e.description||e.$slots.description||(p=e.links)!=null&&p.length||e.$slots.links?(a(),n("div",{key:0,class:l([s(t).base,e.align==="center"&&"text-center flex flex-col items-center",e.align==="right"&&"lg:order-last"])},[e.icon||e.$slots.icon?(a(),n("div",{key:0,class:l(s(t).icon.wrapper)},[o(e.$slots,"icon",{},()=>[U(u,{name:e.icon,class:l(s(t).icon.base)},null,8,["name","class"])])],2)):e.headline||e.$slots.headline?(a(),n("div",{key:1,class:l(s(t).headline)},[o(e.$slots,"headline",{},()=>[S(m(e.headline),1)])],2)):r("",!0),e.title||e.$slots.title?(a(),n("h2",{key:2,class:l(s(t).title)},[o(e.$slots,"title",{},()=>[S(m(e.title),1)])],2)):r("",!0),e.description||e.$slots.description?(a(),n("p",{key:3,class:l(s(t).description)},[o(e.$slots,"description",{},()=>[S(m(e.description),1)])],2)):r("",!0),e.align!=="center"&&((y=e.features)!=null&&y.length)?(a(),n("dl",{key:4,class:l([s(t).features.wrapper.base,s(t).features.wrapper.list])},[(a(!0),n(w,null,_(e.features,i=>(a(),n("div",{key:i.name,class:l(s(t).features.base)},[N("dt",{class:l(s(t).features.name)},[U(u,{name:i.icon||s(t).features.icon.name,class:l(s(t).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),i.name?(a(),n("span",Q,m(i.name),1)):r("",!0)],2),i.description?(a(),n("dd",{key:0,class:l(s(t).features.description)},m(i.description),3)):r("",!0)],2))),128))],2)):r("",!0),e.align!=="center"&&((D=e.links)!=null&&D.length||e.$slots.links)?(a(),n("div",{key:5,class:l(s(t).links)},[o(e.$slots,"links",{},()=>[(a(!0),n(w,null,_(e.links,(i,L)=>(a(),v(g,f({key:L},i,{onClick:i.click}),null,16,["onClick"]))),128))])],2)):r("",!0)],2)):r("",!0),e.$slots[e.slot||"default"]?o(e.$slots,e.slot||"default",{key:1}):e.align==="right"?(a(),n("div",W)):r("",!0),e.align==="center"&&((I=e.features)!=null&&I.length)?(a(),n("dl",{key:3,class:l([s(t).features.wrapper.base,s(t).features.wrapper.grid])},[(a(!0),n(w,null,_(e.features,i=>(a(),n("div",{key:i.name,class:l(s(t).features.base)},[N("dt",{class:l(s(t).features.name)},[U(u,{name:i.icon||s(t).features.icon.name,class:l(s(t).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),i.name?(a(),n("span",X,m(i.name),1)):r("",!0)],2),i.description?(a(),n("dd",{key:0,class:l(s(t).features.description)},m(i.description),3)):r("",!0)],2))),128))],2)):r("",!0),e.align==="center"&&(($=e.links)!=null&&$.length||e.$slots.links)?(a(),n("div",{key:4,class:l([s(t).links,"!mt-0 justify-center"])},[o(e.$slots,"links",{},()=>[(a(!0),n(w,null,_(e.links,(i,L)=>(a(),v(g,f({key:L},i,{onClick:i.click}),null,16,["onClick"]))),128))])],2)):r("",!0)]}),_:3},8,["class"]),o(e.$slots,"bottom")],16)}}}),re=O({__name:"index",async setup(C){let d,c;const{data:t}=([d,c]=x(()=>V("index",()=>q("/").findOne())),d=await d,c(),d),{data:b}=([d,c]=x(()=>V("blog-entries",()=>q("blog").sort({createdAt:-1}).limit(4).find())),d=await d,c(),d),e=M("header-links",()=>{});return e.value=Object.keys(t.value.cards).map(k=>({label:t.value.cards[k].headline,to:"#"+k,exactHash:!0})),P({title:t.value.title,ogTitle:t.value.title,description:t.value.description,ogDescription:t.value.description}),T(()=>{const k=new IntersectionObserver(u=>{u.forEach(g=>{const h=g.target.closest("[id]").getAttribute("id"),p=e.value.find(({to:y})=>y==="#"+h);p&&(p.class=g.isIntersecting?"text-primary":"!text-inherit hover:!text-primary")})},{threshold:1});document.querySelectorAll("div[id] > div").forEach(u=>{k.observe(u)})}),(k,u)=>{const g=G,h=J,p=z,y=R,D=K,I=Y;return a(),n("div",null,[s(t).hero?(a(),v(h,f({key:0},s(t).hero,{ui:{title:"text-4xl"}}),{title:A(()=>[U(g,{value:s(t).hero.title},null,8,["value"])]),_:1},16)):r("",!0),(a(!0),n(w,null,_(Object.keys(s(t).cards),$=>(a(),v(I,f(s(t).cards[$],{id:$,key:$,ui:{container:"gap-8 sm:gap-8",description:"max-w-3xl",links:"!mt-4",headline:"headline text-lg"}}),{default:A(()=>[$==="blog"?(a(),v(D,{key:0,class:"xl:grid-cols-4"},{default:A(()=>[(a(!0),n(w,null,_(s(b),(i,L)=>(a(),v(y,f({key:L},i,{to:i._path}),{default:A(()=>[i.image?(a(),v(p,{key:0,src:i.image.src,style:{order:"-2","max-width":"250px"},alt:i.image.alt,preset:"blog"},null,8,["src","alt"])):r("",!0)]),_:2},1040,["to"]))),128))]),_:1})):r("",!0)]),_:2},1040,["id"]))),128))])}}});export{re as default};