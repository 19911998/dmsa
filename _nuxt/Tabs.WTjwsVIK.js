import{d as _,bh as k,ah as w,ai as C,r as B,G as I,b as s,c as o,e as d,n as l,aB as e,F as v,a8 as y,a9 as f,f as D,t as S,an as z,am as F,bm as G,aa as N,a4 as U}from"./entry.QzPenBuT.js";const V=["onClick"],E=_({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{},class:{}},setup(h){const g={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},b=h,i=k(),{ui:r,attrs:x}=w("content.codeGroup",void 0,g,C(b,"class"),!0),p=B(b.selectedIndex||0),u=I(()=>{var m;return((m=i.default)==null?void 0:m.call(i).map((n,c)=>{var t,a;return{index:c,label:((t=n.props)==null?void 0:t.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return(m,n)=>{const c=U;return s(),o("div",N({class:e(r).wrapper},e(x)),[d("div",{class:l(e(r).header)},[d("div",{class:l(e(r).border)},null,2),(s(!0),o(v,null,y(e(u),(t,a)=>(s(),o("button",{key:a,class:l([e(r).tab.base,e(p)===a?e(r).tab.active:e(r).tab.inactive]),onClick:$=>p.value=a},[t.icon?(s(),f(c,{key:0,name:t.icon,class:l(e(r).tab.icon.base)},null,8,["name","class"])):D("",!0),d("span",null,S(t.label),1)],10,V))),128))],2),(s(!0),o(v,null,y(e(u),(t,a)=>z((s(),o("div",{key:a},[(s(),f(G(t.component)))])),[[F,e(p)===a]])),128))],16)}}});export{E as default};
