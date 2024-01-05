import{aK as Y,aL as z,r as M,aM as Q,aN as j,aO as H,d as R,aP as J,aQ as K,E as C,aR as P,ak as O,ag as T,ah as A,aS as W,b as o,c as r,g as v,w as N,aA as t,n as l,a9 as B,a8 as V,f as i,ab as c,t as f,ac as x,e as E,aC as q,a3 as D,p as G,i as Z,k as _,F as I,a7 as U,af as ee,aH as te}from"./entry.zDkUehRg.js";import{_ as se}from"./Card.QWT_huUC.js";const ae=Y(z);function oe(p,h={}){const{x:u,y:a}=ae(h),k=M(p??(window==null?void 0:window.document.body)),e=M(0),w=M(0);return Q&&j([k,u,a],()=>{const g=H(k);if(!g)return;const{left:b,top:d}=g.getBoundingClientRect(),m=u.value-(b+window.scrollX),y=a.value-(d+window.scrollY);Math.abs(m)>1500||Math.abs(y)>1500||window.screen.width<=800||(e.value=m,w.value=y)},{immediate:!0,throttle:50}),{x:u,y:a,elementX:e,elementY:w}}const ne=p=>(G("data-v-de5c9f56"),p=p(),Z(),p),re=ne(()=>E("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)),le=R({inheritAttrs:!1,__name:"LandingCard",props:{title:{default:""},description:{default:void 0},icon:{default:void 0},color:{default:"primary"},orientation:{default:"vertical"},ui:{default:()=>({})},class:{default:void 0},active:{type:Boolean},exact:{type:Boolean},exactQuery:{type:Boolean},exactMatch:{type:Boolean},inactiveClass:{},to:{},href:{},external:{type:Boolean},replace:{type:Boolean},custom:{type:Boolean},target:{},rel:{},noRel:{type:Boolean},prefetch:{type:Boolean},noPrefetch:{type:Boolean},activeClass:{},exactActiveClass:{},ariaCurrentValue:{}},setup(p){J(s=>({"306b53e6":t(w),"600092b4":t(g)}));const h=M(),u=K(),{elementX:a,elementY:k}=oe(h),e=p,w=C(()=>{var s;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((s=P[e.color])==null?void 0:s["500"])||e.color}),g=C(()=>{var s;return e.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((s=P[e.color])==null?void 0:s["400"])||e.color}),b=C(()=>({wrapper:"relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow",to:"hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200",base:"flex-1 flex flex-col",container:"",body:{base:O("gap-x-8 gap-y-4 rounded-xl flex-1",e.orientation==="vertical"&&"flex flex-col",!!u.default&&e.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center")},background:"bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]",ring:"",rounded:"rounded-xl",shadow:"",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},title:"text-gray-900 dark:text-white text-base font-bold truncate",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1"})),{ui:d,attrs:m}=T("landing.card",A(e,"ui"),b,A(e,"class"),!0),y=new Set(["title","description","icon","color","orientation","ui","class"]),S=C(()=>{const s={};for(const n in e)y.has(n)||!e[n]||(s[n]=e[n]);return s}),L=C(()=>(e.title||u.title&&W(u.title())||"Card link").trim());return(s,n)=>{const $=q,F=D,X=se;return o(),r("div",B({ref_key:"el",ref:h,style:{"--x":`${t(a)}px`,"--y":`${t(k)}px`},class:[t(d).wrapper,s.to&&t(d).to]},t(m)),[v(X,{ui:t(d)},{default:N(()=>[E("div",{class:l(t(d).container)},[s.to?(o(),V($,B({key:0,"aria-label":t(L)},t(S),{class:"focus:outline-none",tabindex:"-1"}),{default:N(()=>[re]),_:1},16,["aria-label"])):i("",!0),s.icon||s.$slots.icon?(o(),r("div",{key:1,class:l(t(d).icon.wrapper)},[c(s.$slots,"icon",{},()=>[v(F,{name:s.icon,class:l(t(d).icon.base)},null,8,["name","class"])],!0)],2)):i("",!0),s.title||s.$slots.title?(o(),r("p",{key:2,class:l(t(d).title)},[c(s.$slots,"title",{},()=>[x(f(s.title),1)],!0)],2)):i("",!0),s.description||s.$slots.description?(o(),r("p",{key:3,class:l(t(d).description)},[c(s.$slots,"description",{},()=>[x(f(s.description),1)],!0)],2)):i("",!0),c(s.$slots,"container",{},void 0,!0)],2),s.$slots.default?c(s.$slots,"default",{key:0},void 0,!0):i("",!0)]),_:3},8,["ui"])],16)}}}),fe=_(le,[["__scopeId","data-v-de5c9f56"]]),ie={key:0},ce={key:2},de={key:0},ge=R({inheritAttrs:!1,__name:"LandingSection",props:{icon:{default:void 0},headline:{default:void 0},title:{default:""},description:{default:void 0},features:{default:()=>[]},links:{default:()=>[]},slot:{default:void 0},align:{default:"center"},ui:{default:()=>({})},class:{default:void 0}},setup(p){const h={wrapper:"py-24 sm:py-32",container:"gap-16 sm:gap-y-24",base:"",icon:{wrapper:"flex mb-6",base:"w-10 h-10 flex-shrink-0 text-primary"},headline:"mb-2 text-base/7 font-semibold text-primary",title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-6 text-lg/8 text-gray-600 dark:text-gray-300",links:"mt-8 flex flex-wrap gap-x-3 gap-y-1.5",features:{wrapper:{base:"mt-6 leading-7",list:"space-y-4",grid:"grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"},base:"relative pl-8",name:"font-semibold text-gray-900 dark:text-white",description:"text-gray-500 dark:text-gray-400 leading-6",icon:{base:"absolute left-0 top-1 h-5 w-5 text-primary",name:"i-heroicons-check-circle"}}},u=p,{ui:a,attrs:k}=T("landing.section",A(u,"ui"),h,A(u,"class"),!0);return(e,w)=>{const g=D,b=ee,d=te;return o(),r("div",B({class:t(a).wrapper},t(k)),[c(e.$slots,"top"),v(d,{class:l([t(a).container,e.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"])},{default:N(()=>{var m,y,S,L,s;return[e.icon||e.$slots.icon||e.headline||e.$slots.headline||e.title||e.$slots.title||e.description||e.$slots.description||(m=e.links)!=null&&m.length||e.$slots.links?(o(),r("div",{key:0,class:l([t(a).base,e.align==="center"&&"text-center flex flex-col items-center",e.align==="right"&&"lg:order-last"])},[e.icon||e.$slots.icon?(o(),r("div",{key:0,class:l(t(a).icon.wrapper)},[c(e.$slots,"icon",{},()=>[v(g,{name:e.icon,class:l(t(a).icon.base)},null,8,["name","class"])])],2)):e.headline||e.$slots.headline?(o(),r("div",{key:1,class:l(t(a).headline)},[c(e.$slots,"headline",{},()=>[x(f(e.headline),1)])],2)):i("",!0),e.title||e.$slots.title?(o(),r("h2",{key:2,class:l(t(a).title)},[c(e.$slots,"title",{},()=>[x(f(e.title),1)])],2)):i("",!0),e.description||e.$slots.description?(o(),r("p",{key:3,class:l(t(a).description)},[c(e.$slots,"description",{},()=>[x(f(e.description),1)])],2)):i("",!0),e.align!=="center"&&((y=e.features)!=null&&y.length)?(o(),r("dl",{key:4,class:l([t(a).features.wrapper.base,t(a).features.wrapper.list])},[(o(!0),r(I,null,U(e.features,n=>(o(),r("div",{key:n.name,class:l(t(a).features.base)},[E("dt",{class:l(t(a).features.name)},[v(g,{name:n.icon||t(a).features.icon.name,class:l(t(a).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),n.name?(o(),r("span",ie,f(n.name),1)):i("",!0)],2),n.description?(o(),r("dd",{key:0,class:l(t(a).features.description)},f(n.description),3)):i("",!0)],2))),128))],2)):i("",!0),e.align!=="center"&&((S=e.links)!=null&&S.length||e.$slots.links)?(o(),r("div",{key:5,class:l(t(a).links)},[c(e.$slots,"links",{},()=>[(o(!0),r(I,null,U(e.links,(n,$)=>(o(),V(b,B({key:$},n,{onClick:n.click}),null,16,["onClick"]))),128))])],2)):i("",!0)],2)):i("",!0),e.$slots[e.slot||"default"]?c(e.$slots,e.slot||"default",{key:1}):e.align==="right"?(o(),r("div",ce)):i("",!0),e.align==="center"&&((L=e.features)!=null&&L.length)?(o(),r("dl",{key:3,class:l([t(a).features.wrapper.base,t(a).features.wrapper.grid])},[(o(!0),r(I,null,U(e.features,n=>(o(),r("div",{key:n.name,class:l(t(a).features.base)},[E("dt",{class:l(t(a).features.name)},[v(g,{name:n.icon||t(a).features.icon.name,class:l(t(a).features.icon.base),"aria-hidden":"true"},null,8,["name","class"]),n.name?(o(),r("span",de,f(n.name),1)):i("",!0)],2),n.description?(o(),r("dd",{key:0,class:l(t(a).features.description)},f(n.description),3)):i("",!0)],2))),128))],2)):i("",!0),e.align==="center"&&((s=e.links)!=null&&s.length||e.$slots.links)?(o(),r("div",{key:4,class:l([t(a).links,"!mt-0 justify-center"])},[c(e.$slots,"links",{},()=>[(o(!0),r(I,null,U(e.links,(n,$)=>(o(),V(b,B({key:$},n,{onClick:n.click}),null,16,["onClick"]))),128))])],2)):i("",!0)]}),_:3},8,["class"]),c(e.$slots,"bottom")],16)}}});export{ge as _,fe as a};
