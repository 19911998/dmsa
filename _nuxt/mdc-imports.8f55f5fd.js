import{_ as c}from"./entry.9b64c227.js";import{v as u,t as d}from"./index.771aac74.js";import"./MDCRenderer.4e18bbb3.js";import"./_commonjsHelpers.725317a4.js";import"./node.f7b4ab96.js";import"./Card.b179779a.js";const f={theme:{default:"github-light",dark:"github-dark"},async highlighter(r,s,t,h){var a,i;if(window.sessionStorage.getItem("mdc-shiki-highlighter")==="browser")return c(()=>import("./highlighter.5a9a901b.js"),["./highlighter.5a9a901b.js","./entry.9b64c227.js","./entry.cf693866.css"],import.meta.url).then(({useShikiHighlighter:e})=>e().getHighlightedAST(r,s,t,{highlights:h}));try{return await $fetch("/api/_mdc/highlight",{params:{code:r,lang:s,theme:JSON.stringify(t),highlights:JSON.stringify(h)}})}catch(e){if(((a=e==null?void 0:e.response)==null?void 0:a.status)===404)return window.sessionStorage.setItem("mdc-shiki-highlighter","browser"),(i=this.highlighter)==null?void 0:i.call(this,r,s,t,h)}return Promise.resolve({tree:[{type:"text",value:r}],className:"",style:""})}};function y(r={}){const s={...f,...r};return async t=>{const h=[],a=[];u(t,i=>{var e,n;return["pre","code"].includes(i.tagName)&&!!((e=i.properties)!=null&&e.language||(n=i.properties)!=null&&n.highlights)},i=>{const e=i,n=s.highlighter(d(i),e.properties.language,s.theme,e.properties.highlights??[]).then(({tree:o,className:p,style:l,inlineStyle:g})=>{var m;e.properties.className=((e.properties.className||"")+" "+p).trim(),e.properties.style=((e.properties.style||"")+" "+g).trim(),((m=e.children[0])==null?void 0:m.tagName)==="code"?e.children[0].children=o:e.children=o[0].children||o[0],l&&a.push(l)});h.push(n)}),h.length&&(await Promise.all(h),t.children.push({type:"element",tagName:"style",children:[{type:"text",value:k(a.join(""))}],properties:{}}))}}const k=r=>{const s=r.split("}").filter(t=>!!t.trim()).map(t=>t.trim()+"}");return Array.from(new Set(s)).join("")},P={},b={highlight:{instance:y,options:{src:"/home/runner/work/dmsa/dmsa/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"}}},x={theme:{light:"material-theme-lighter",default:"material-theme",dark:"material-theme-palenight"},preload:["json","js","ts","html","css","vue","diff","shell","markdown","yaml","bash","ini"]};export{x as highlight,b as rehypePlugins,P as remarkPlugins};
