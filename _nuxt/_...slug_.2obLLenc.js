import{_ as J}from"./Aside.vue.nXwe0zRA.js";import{r as C,H as K,aO as Q,aP as W,d as H,u as X,ao as O,ap as D,b as c,c as b,F as Y,af as Z,n as _,E as e,e as I,t as N,aQ as ee,ag as w,f,ah as V,j as te,y as j,D as ne,aj as M,g,ab as q,v as ae,aJ as A,aK as oe,aL as se,w as x,ak as re,aM as S,aN as ie,s as T,aR as le}from"./entry.aIF1FHM7.js";import{_ as ce}from"./PageLinks.vue.3OiywA3f.js";import{_ as ue,a as pe}from"./PageBody.vue.Yjg23gxM.js";import{_ as de}from"./nuxt-img.xvYVlvnJ.js";import me from"./ContentRenderer.13Gey3Ij.js";import{_ as ge}from"./DocsSurround.vue.m1N6pqv5.js";import"./ContentRendererMarkdown.vue.o4azZyMD.js";import"./MDCRenderer.2bUHDSPN.js";import"./index.1dSrIji7.js";const _e=()=>{const l=C(),n=C([]),s=C([]),i=t=>{t.forEach(o=>{const r=o.target.id;o.isIntersecting?n.value=[...n.value,r]:n.value=n.value.filter(d=>d!==r)})},a=t=>{t.forEach(o=>{l.value&&l.value.observe(o)})};return K(n,(t,o)=>{t.length===0?s.value=o:s.value=t}),Q(()=>l.value=new IntersectionObserver(i)),W(()=>{var t;return(t=l.value)==null?void 0:t.disconnect()}),{visibleHeadings:n,activeHeadings:s,updateHeadings:a}},fe=["href","onClick"],F=H({inheritAttrs:!1,__name:"DocsTocLinks",props:{links:{},ui:{},class:{}},emits:["move"],setup(l,{emit:n}){const s={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},i=l,a=n,t=X(),o=te(),{activeHeadings:r,updateHeadings:d}=_e(),{ui:m,attrs:h}=O("docs.toc.links",D(i,"ui"),s,D(i,"class"),!0);o.hooks.hookOnce("page:finish",()=>{d([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const k=u=>{const v=encodeURIComponent(u);t.push(`#${v}`),a("move",u)};return(u,v)=>{var $;const U=F;return($=u.links)!=null&&$.length?(c(),b("ul",V({key:0,class:e(m).wrapper},e(h)),[(c(!0),b(Y,null,Z(u.links,p=>(c(),b("li",{key:p.text,class:_([e(m).wrapper,p.depth===3&&e(m).depth])},[I("a",{href:`#${p.id}`,class:_([e(m).base,e(r).includes(p.id)?e(m).active:e(m).inactive]),onClick:ee(B=>k(p.id),["prevent"])},N(p.text),11,fe),p.children?(c(),w(U,{key:0,links:p.children},null,8,["links"])):f("",!0)],2))),128))],16)):f("",!0)}}}),he=H({inheritAttrs:!1,__name:"DocsToc",props:{title:{default:"Table of Contents"},links:{default:()=>[]},ui:{default:()=>({})},class:{default:void 0}},setup(l){const n=j(),s=ne(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:n.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),i=l,{ui:a,attrs:t}=O("docs.toc",D(i,"ui"),s,D(i,"class"),!0),o=C(!1);return(r,d)=>{var k,u;const m=q,h=F;return c(),b("nav",V({class:e(a).wrapper},e(t)),[I("div",{class:_([(k=r.links)!=null&&k.length?e(a).container.base:e(a).container.empty])},[M(r.$slots,"top"),(u=r.links)!=null&&u.length?(c(),b("button",{key:0,class:_(e(a).button.base),tabindex:"-1",onClick:d[0]||(d[0]=v=>o.value=!e(o))},[I("span",{class:_(e(a).button.label)},N(r.title),3),g(m,{name:e(a).button.trailingIcon.name,class:_(["lg:!hidden",[e(a).button.trailingIcon.base,e(o)?e(a).button.trailingIcon.active:e(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):f("",!0),g(h,{links:r.links,ui:e(a).links,class:_([e(o)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),M(r.$slots,"bottom")],2)],16)}}});function ke(l){return new Date(l.createdAt).toLocaleDateString("de-DE",{year:"numeric",month:"short",day:"numeric"})}const be={class:"text-gray-500 dark:text-gray-400 text-sm/6 font-medium tracking-wide flex items-center gap-x-2 mb-8"},ve={key:2},Te=H({__name:"[...slug]",async setup(l){let n,s;const i=ae(),{seo:a}=j(),{data:t}=([n,s]=A(()=>S(i.path,()=>T(i.path).findOne(),"$ij35HG41ph")),n=await n,s(),n);if(!t.value)throw oe({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:o}=([n,s]=A(()=>S("blog-links",()=>T("_blog").only("links").findOne())),n=await n,s(),n),{data:r}=([n,s]=A(()=>S(`${i.path}-surround`,()=>T("blog").where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(le(i.path)))),n=await n,s(),n);return se({titleTemplate:`%s - ${a==null?void 0:a.siteName}`,title:t.value.title,ogTitle:`${t.value.title} - ${a==null?void 0:a.siteName}`,description:t.value.description,ogDescription:t.value.description}),(d,m)=>{const h=J,k=q,u=ce,v=he,U=ue,$=de,p=me,B=ge,z=pe,G=ie;return c(),w(G,null,{left:x(()=>[g(h,{links:e(o).links},null,8,["links"])]),right:x(()=>[g(h,null,{default:x(()=>{var y,R,L,P;return[I("div",be,[g(k,{name:"i-heroicons-calendar",class:"text-lg"}),re(" "+N(("getCreationDate"in d?d.getCreationDate:e(ke))(e(t))),1)]),g(u,{links:(y=e(t).tags)==null?void 0:y.map(E=>({label:E,to:`/blog?tag=${encodeURIComponent(E)}`,icon:"i-heroicons-tag"})),title:"Schlagworte"},null,8,["links"]),(P=(L=(R=e(t).body)==null?void 0:R.toc)==null?void 0:L.links)!=null&&P.length?(c(),w(v,{key:0,title:"Inhalt",links:e(t).body.toc.links},null,8,["links"])):f("",!0)]}),_:1})]),default:x(()=>[g(U,{title:e(t).title,description:e(t).description,links:[{label:"Blog",icon:"i-heroicons-arrow-uturn-left",to:"/blog",target:"_self"}],ui:{links:"ml-4 min-w-fit"}},null,8,["title","description"]),g(z,{prose:""},{default:x(()=>{var y;return[e(t).image?(c(),w($,{key:0,src:e(t).image.src,alt:e(t).image.alt,preset:"page"},null,8,["src","alt"])):f("",!0),e(t).body?(c(),w(p,{key:1,value:e(t),class:"max-w-xl"},null,8,["value"])):f("",!0),(y=e(r))!=null&&y.length?(c(),b("hr",ve)):f("",!0),g(B,{surround:e(r)},null,8,["surround"])]}),_:1})]),_:1})}}});export{Te as default};