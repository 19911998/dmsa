import{bz as d,bA as u,d as l,ah as b,r as _,b as m,aa as y,ax as f,ag as C}from"./entry.KsJV5Du3.js";function v(t={}){const{copy:c,isSupported:i}=d(),o=u();function a(e,n={},r={}){i&&c(e).then(()=>{!n.title&&!n.description||o.add({...n,...t})},function(p){o.add({...r,description:r.description||p.message,...t})})}return{copy:a}}const x=l({__name:"ProseCodeButton",props:{code:{type:String,required:!0}},setup(t){const c=t,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=b("content.prose.code.button",void 0,i,void 0,!0),a=v({timeout:2e3}),e=_(o.value.icon.copy);function n(){a.copy(c.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(r,p)=>{const s=C;return m(),y(s,{icon:f(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}});export{x as _};
