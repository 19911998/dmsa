import{d as m,z as d,E as b,aq as f,b as _,aj as g,w as t,g as n,G as a,bw as v,n as o,e as x,t as r,bx as y,by as h,ac as w}from"./wdX3yiyX.js";import{r as C}from"./CfF_fgX-.js";import"./BneCoJRQ.js";const V=m({__name:"Collapsible",props:{name:{type:String,default:"properties"}},setup(c){const i=d(),l=b(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:i.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:e}=f("prose.collapsible",void 0,l,void 0,!0);return(p,k)=>{const u=w;return _(),g(a(h),null,{default:t(({open:s})=>[n(a(v),{class:o(a(e).button.base)},{default:t(()=>[n(u,{name:a(e).button.icon.name,class:o([a(e).button.icon.base,s?a(e).button.icon.active:a(e).button.icon.inactive])},null,8,["name","class"]),x("span",null,r(s?"Hide":"Show")+" "+r(c.name),1)]),_:2},1032,["class"]),n(a(y),{class:o(a(e).panel)},{default:t(()=>[C(p.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{V as default};
