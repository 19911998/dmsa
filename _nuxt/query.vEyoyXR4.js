import{q as u,bt as m,bf as w,bg as g,aJ as y,bu as c,aT as p,bv as _,bw as d,_ as b,bx as P,by as $}from"./entry.sgBElhiv.js";const T=()=>async a=>{const{content:s}=u().public,r=a.params(),n=s.experimental.stripQueryParameters?c(`/query/${`${p(r)}.${s.integrity}`}/${_(r)}.json`):c(`/query/${p(r)}.${s.integrity}.json`);if(d())return(await b(()=>import("./client-db.1NxdniFF.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>e.useContentDatabase())).fetch(a);const t=await $fetch(n,{method:"GET",responseType:"json",params:s.experimental.stripQueryParameters?void 0:{_params:P(r),previewToken:$().getPreviewToken()}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function E(a,...s){const{content:r}=u().public,n=m(T(),{initialParams:typeof a!="string"?a:{},legacy:!0});let t;typeof a=="string"&&(t=w(g(a,...s)));const i=n.params;return n.params=()=>{var o,h,l;const e=i();return t&&(e.where=e.where||[],e.first&&(e.where||[]).length===0?e.where.push({_path:y(t)}):e.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(o=e.sort)!=null&&o.length||(e.sort=[{_file:1,$numeric:!0}]),r.locales.length&&((l=(h=e.where)==null?void 0:h.find(f=>f._locale))!=null&&l._locale||(e.where=e.where||[],e.where.push({_locale:r.defaultLocale}))),e},n}export{E as q};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.1NxdniFF.js","./entry.sgBElhiv.js","./entry.2p9d7H8O.css","./index.1dSrIji7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
