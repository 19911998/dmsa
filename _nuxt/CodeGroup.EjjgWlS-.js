import{_ as k}from"./ProseCodeIcon.vue.chxQwu43.js";import{d as x,bb as C,ag as w,ah as B,r as G,G as u,b as c,c as p,e as f,F as I,a8 as S,n as b,aw as e,g as $,t as A,a9 as D,bn as F,ab as N}from"./entry.2oh7BoJj.js";const P=["onClick"],E=x({inheritAttrs:!1,__name:"CodeGroup",props:{class:{type:[String,Object,Array],default:void 0}},setup(g){const v={wrapper:"relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5",header:"flex items-center gap-1 border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md overflow-hidden p-2",tab:{base:"px-2 py-1.5 focus:outline-none text-gray-700 dark:text-gray-200 text-sm rounded-md flex items-center gap-1.5",active:"bg-gray-100 dark:bg-gray-800",inactive:"hover:bg-gray-50 dark:hover:bg-gray-800/50",icon:{base:""}}},y=g,i=C(),{ui:t,attrs:_}=w("content.codeGroup",void 0,v,B(y,"class"),!0),l=G(0),m=u(()=>{var n;return((n=i.default)==null?void 0:n.call(i).map((a,d)=>{var o,r,s;return{label:((o=a.props)==null?void 0:o.filename)||((r=a.props)==null?void 0:r.label)||`${d}`,icon:(s=a.props)==null?void 0:s.icon,component:a}}))||[]}),h=u(()=>m.value.find((n,a)=>a===l.value));return(n,a)=>{var o;const d=k;return c(),p("div",N({class:e(t).wrapper},e(_)),[f("div",{class:b(e(t).header)},[(c(!0),p(I,null,S(e(m),(r,s)=>(c(),p("button",{key:s,tabindex:"-1",class:b([e(t).tab.base,e(l)===s?e(t).tab.active:e(t).tab.inactive]),onClick:V=>l.value=s},[$(d,{icon:r.icon,filename:r.label,class:b(e(t).tab.icon.base)},null,8,["icon","filename","class"]),f("span",null,A(r.label),1)],10,P))),128))],2),(c(),D(F((o=e(h))==null?void 0:o.component),{"hide-header":""}))],16)}}});export{E as default};
