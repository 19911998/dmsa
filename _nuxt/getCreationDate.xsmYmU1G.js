import{d as B,E as A,b as s,c as n,F as D,a7 as N,a8 as T,w as b,g as u,t as m,ac as f,aA as a,f as r,a3 as U,aC as L,aJ as V,ag as E,ah as w,e as v,n as l,ab as c,a9 as C,af as I}from"./entry.-AXDM9M9.js";const S={key:0,class:"flex gap-x-2"},P=B({__name:"TagList",props:{tags:{},pageTag:{}},setup(i){const d=i,p=A(()=>{var t;return(t=d.tags)==null?void 0:t.split(" ")});return(t,k)=>{const e=U,y=L,g=V;return t.tags?(s(),n("div",S,[(s(!0),n(D,null,N(a(p),o=>(s(),T(g,{key:o,class:"z-50",color:o===t.pageTag?"primary":"gray"},{default:b(()=>[u(y,{to:o===t.pageTag?"/blog":"/tags/"+o,class:"flex items-center gap-x-2"},{default:b(()=>[u(e,{name:"i-heroicons-tag"}),f(" "+m(o),1)]),_:2},1032,["to"])]),_:2},1032,["color"]))),128))])):r("",!0)}}}),z={key:2},j=B({inheritAttrs:!1,__name:"PageHero",props:{title:{default:""},description:{default:""},icon:{default:void 0},links:{default:()=>[]},align:{default:"left"},ui:{default:()=>({})},class:{default:void 0}},setup(i){const d={wrapper:"py-8 sm:py-16",container:"gap-8 sm:gap-y-16",base:"",icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5"},p=i,{ui:t,attrs:k}=E("page.hero",w(p,"ui"),d,w(p,"class"),!0);return(e,y)=>{var h,$;const g=U,o=I;return s(),n("div",C({class:a(t).wrapper},a(k)),[v("div",{class:l([a(t).container,e.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"])},[e.icon||e.$slots.icon||e.title||e.$slots.title||e.description||e.$slots.description||(h=e.links)!=null&&h.length||e.$slots.links?(s(),n("div",{key:0,class:l([a(t).base,e.align==="center"&&"text-center flex flex-col items-center",e.align==="right"&&"lg:order-last"])},[e.icon||e.$slots.icon?(s(),n("div",{key:0,class:l(a(t).icon.wrapper)},[c(e.$slots,"icon",{},()=>[u(g,{name:e.icon,class:l(a(t).icon.base)},null,8,["name","class"])])],2)):r("",!0),v("h2",{class:l(a(t).title)},[c(e.$slots,"title",{},()=>[f(m(e.title),1)])],2),e.description||e.$slots.description?(s(),n("p",{key:1,class:l(a(t).description)},[c(e.$slots,"description",{},()=>[f(m(e.description),1)])],2)):r("",!0),($=e.links)!=null&&$.length||e.$slots.links?(s(),n("div",{key:2,class:l([a(t).links,e.align==="center"&&"justify-center"])},[c(e.$slots,"links",{},()=>[(s(!0),n(D,null,N(e.links,(_,x)=>(s(),T(o,C({key:x},_,{onClick:_.click}),null,16,["onClick"]))),128))])],2)):r("",!0)],2)):r("",!0),e.$slots.default?c(e.$slots,"default",{key:1}):e.align==="right"?(s(),n("div",z)):r("",!0)],2)],16)}}});function H(i){return new Date(i.createdAt).toLocaleDateString("de-DE",{year:"numeric",month:"short",day:"numeric"})}export{P as _,j as a,H as b};
