import{k as g,ad as l,ae as i,d as p,ag as c,ah as b,E as f,aD as y,ak as m,b as s,a8 as k,w as v,c as t,n as r,a9 as d,f as u,e as h,aa as $,b1 as w}from"./entry.9b64c227.js";const C={base:"overflow-hidden",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},B=l(i.ui.strategy,i.ui.card,C),S=p({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:o}=c("card",b(a,"ui"),B),n=f(()=>y(m(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:o,cardClass:n}}});function j(a,e,o,n,A,D){return s(),k(w(a.$attrs.onSubmit?"form":a.as),$({class:a.cardClass},a.attrs),{default:v(()=>[a.$slots.header?(s(),t("div",{key:0,class:r([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[d(a.$slots,"header")],2)):u("",!0),h("div",{class:r([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[d(a.$slots,"default")],2),a.$slots.footer?(s(),t("div",{key:1,class:r([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[d(a.$slots,"footer")],2)):u("",!0)]),_:3},16,["class"])}const N=g(S,[["render",j]]);export{N as _};
