import{_ as c}from"./entry.-2yh96Zm.js";import{v as u,t as d}from"./index.AP3uURW-.js";import"./MDCRenderer.t1AbwjxW.js";import"./index.1dSrIji7.js";import"./node.kQagOfUD.js";import"./BlogList.vue.SY0kLk39.js";import"./nuxt-img.J03erEPV.js";import"./formatDate.R--iNgjV.js";const f={theme:{default:"github-light",dark:"github-dark"},async highlighter(r,s,e,h){var a,i;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return c(()=>import("./highlighter.ZvySI0_a.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({useShikiHighlighter:t})=>t().getHighlightedAST(r,s,e,{highlights:h}));try{return await $fetch("/api/_mdc/highlight",{params:{code:r,lang:s,theme:JSON.stringify(e),highlights:JSON.stringify(h)}})}catch(t){if(((a=t==null?void 0:t.response)==null?void 0:a.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(i=this.highlighter)==null?void 0:i.call(this,r,s,e,h)}return Promise.resolve({tree:[{type:"text",value:r}],className:"",style:""})}};function y(r={}){const s={...f,...r};return async e=>{const h=[],a=[];u(e,i=>{var t,o;return["pre","code"].includes(i.tagName)&&!!((t=i.properties)!=null&&t.language||(o=i.properties)!=null&&o.highlights)},i=>{const t=i,o=s.highlighter(d(i),t.properties.language,s.theme,t.properties.highlights??[]).then(({tree:n,className:p,style:l,inlineStyle:g})=>{var m;t.properties.className=((t.properties.className||"")+" "+p).trim(),t.properties.style=((t.properties.style||"")+" "+g).trim(),((m=t.children[0])==null?void 0:m.tagName)==="code"?t.children[0].children=n:t.children=n[0].children||n[0],l&&a.push(l)});h.push(o)}),h.length&&(await Promise.all(h),e.children.push({type:"element",tagName:"style",children:[{type:"text",value:k(a.join(""))}],properties:{}}))}}const k=r=>{const s=r.split("}").filter(e=>!!e.trim()).map(e=>e.trim()+"}");return Array.from(new Set(s)).join("")},x={},A={highlight:{instance:y,options:{src:"/home/runner/work/dmsa/dmsa/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"}}},I={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"},preload:["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};export{I as highlight,A as rehypePlugins,x as remarkPlugins};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./highlighter.ZvySI0_a.js","./entry.-2yh96Zm.js","./entry.2p9d7H8O.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}