import{d,bs as l,D as v,q as f,A as p,aM as g,bt as m,a$ as h,bn as y,U as i,aS as _}from"./entry.-2yh96Zm.js";const b=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=l(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&f("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const t=y(),{navigation:n}=u,o=e=>i(_,{to:e._path},()=>e.title),a=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),a(s.children,r+1)]):i("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),C=b;export{C as default};
