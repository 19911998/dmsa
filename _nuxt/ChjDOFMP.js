import{d as w,bk as C,aq as B,ar as I,r as y,E as S,bz as z,b as s,c as o,e as d,n as l,G as e,F as f,ai as g,aj as h,f as D,t as N,av as U,aw as j,bv as A,al as E,ac as F}from"./Df4-CTfB.js";const G=["onClick"],q=w({inheritAttrs:!1,__name:"Tabs",props:{selectedIndex:{type:Number,default:0},class:{type:[String,Object,Array],default:void 0}},setup(k){const x={wrapper:"relative my-5 space-y-6",header:"flex items-center relative",border:"absolute bottom-0 inset-x-0 w-full h-px bg-gray-200 dark:bg-gray-800",tab:{base:"px-4 py-2.5 font-semibold text-sm/6 flex items-center gap-1.5 border-b z-[1] focus-visible:outline-primary",active:"text-primary border-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-300 dark:hover:border-gray-700",icon:{base:"w-5 h-5 flex-shrink-0"}}},b=k,i=C(),{ui:t,attrs:_}=B("content.codeGroup",void 0,x,I(b,"class"),!0),p=y(b.selectedIndex||0),m=y(1),v=S(()=>{var u;return m.value,((u=i.default)==null?void 0:u.call(i).map((n,c)=>{var r,a;return{index:c,label:((r=n.props)==null?void 0:r.label)||`${c}`,icon:(a=n.props)==null?void 0:a.icon,component:n}}))||[]});return z(()=>{m.value+=1}),(u,n)=>{const c=F;return s(),o("div",E({class:e(t).wrapper},e(_)),[d("div",{class:l(e(t).header)},[d("div",{class:l(e(t).border)},null,2),(s(!0),o(f,null,g(e(v),(r,a)=>(s(),o("button",{key:a,class:l([e(t).tab.base,e(p)===a?e(t).tab.active:e(t).tab.inactive]),onClick:V=>p.value=a},[r.icon?(s(),h(c,{key:0,name:r.icon,class:l(e(t).tab.icon.base)},null,8,["name","class"])):D("",!0),d("span",null,N(r.label),1)],10,G))),128))],2),(s(!0),o(f,null,g(e(v),(r,a)=>U((s(),o("div",{key:a},[(s(),h(A(r.component)))])),[[j,e(p)===a]])),128))],16)}}});export{q as default};