import{bx as d,by as u,d as l,ah as b,r as _,b as m,a9 as y,aB as f,ag as C}from"./entry.oiFEn2Y_.js";function v(c={}){const{copy:t,isSupported:i}=d(),o=u();function a(e,n={},r={}){i&&t(e).then(()=>{!n.title&&!n.description||o.add({...n,...c})},function(p){o.add({...r,description:r.description||p.message,...c})})}return{copy:a}}const x=l({__name:"ProseCodeButton",props:{code:{}},setup(c){const t=c,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=b("content.prose.code.button",void 0,i,void 0,!0),a=v({timeout:2e3}),e=_(o.value.icon.copy);function n(){a.copy(t.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(r,p)=>{const s=C;return m(),y(s,{icon:f(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}});export{x as _};