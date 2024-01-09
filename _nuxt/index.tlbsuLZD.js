import{d as I,r as C,Y as $,o as M,_ as T,b1 as K,a1 as N,O as q,b2 as st,K as V,G as O,aJ as ye,N as _e,a as Le,b3 as it,ah as Se,ai as W,b as L,c as P,ac as Pe,aa as Ie,aB as w,ae as Ce,af as J,b4 as ut,b5 as dt,aM as ze,al as Ee,b6 as pt,k as ct,e as B,an as mt,b7 as ft,n as ee,ad as fe,t as U,f as re,v as yt,aD as be,q as xe,u as vt,aF as bt,g as R,w as k,F as le,a8 as pe,a9 as te,aC as gt,aG as ge,ag as ht,aH as _t,b8 as Lt,a$ as St,s as he}from"./entry.NXBMV2Co.js";import{_ as Ct}from"./LandingCard.ddLq2RvI.js";import{u as wt,_ as Ot}from"./Select.eN3Vc1aU.js";import{_ as At}from"./Card.Mu73UAzd.js";const xt={wrapper:{horizontal:"inline-flex -space-x-px",vertical:"inline-flex flex-col -space-y-px"},rounded:"rounded-md",shadow:"shadow-sm",orientation:{"rounded-none":{horizontal:{start:"rounded-s-none",end:"rounded-e-none"},vertical:{start:"rounded-t-none",end:"rounded-b-none"}},"rounded-sm":{horizontal:{start:"rounded-s-sm",end:"rounded-e-sm"},vertical:{start:"rounded-t-sm",end:"rounded-b-sm"}},rounded:{horizontal:{start:"rounded-s",end:"rounded-e"},vertical:{start:"rounded-t",end:"rounded-b"}},"rounded-md":{horizontal:{start:"rounded-s-md",end:"rounded-e-md"},vertical:{start:"rounded-t-md",end:"rounded-b-md"}},"rounded-lg":{horizontal:{start:"rounded-s-lg",end:"rounded-e-lg"},vertical:{start:"rounded-t-lg",end:"rounded-b-lg"}},"rounded-xl":{horizontal:{start:"rounded-s-xl",end:"rounded-e-xl"},vertical:{start:"rounded-t-xl",end:"rounded-b-xl"}},"rounded-2xl":{horizontal:{start:"rounded-s-2xl",end:"rounded-e-2xl"},vertical:{start:"rounded-t-2xl",end:"rounded-b-2xl"}},"rounded-3xl":{horizontal:{start:"rounded-s-3xl",end:"rounded-e-3xl"},vertical:{start:"rounded-t-3xl",end:"rounded-b-3xl"}},"rounded-full":{horizontal:{start:"rounded-s-full",end:"rounded-e-full"},vertical:{start:"rounded-t-full",end:"rounded-b-full"}}}},Bt={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},Be=(e,t)=>{for(const o of Object.keys(t))e.on(o,t[o])},Ve=e=>{for(const t of Object.keys(e)){const o=e[t];o&&D(o.cancel)&&o.cancel()}},Tt=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),D=e=>typeof e=="function",G=(e,t,o)=>{for(const n in o){const l="set"+Tt(n);e[l]?_e(()=>o[n],(a,s)=>{e[l](a,s)}):t[l]&&_e(()=>o[n],a=>{t[l](a)})}},X=(e,t,o={})=>{const n={...o};for(const l in e){const a=t[l],s=e[l];a&&(a&&a.custom===!0||s!==void 0&&(n[l]=s))}return n},Y=e=>{const t={},o={};for(const n in e)if(n.startsWith("on")&&!n.startsWith("onUpdate")&&n!=="onReady"){const l=n.slice(2).toLocaleLowerCase();t[l]=e[n]}else o[n]=e[n];return{listeners:t,attrs:o}},jt=async e=>{const t=await Promise.all([T(()=>import("./marker-icon-2x.ISnV03A7.js"),__vite__mapDeps([]),import.meta.url),T(()=>import("./marker-icon.v2plvzwn.js"),__vite__mapDeps([]),import.meta.url),T(()=>import("./marker-shadow.mNDLcDeE.js"),__vite__mapDeps([]),import.meta.url)]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},ce=e=>{const t=C((...n)=>console.warn(`Method ${e} has been invoked without being replaced`)),o=(...n)=>t.value(...n);return o.wrapped=t,V(e,o),o},me=(e,t)=>e.wrapped.value=t,z=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||globalThis,j=e=>{const t=$(e);if(t===void 0)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},F=Symbol("useGlobalLeaflet"),se=Symbol("addLayer"),Ne=Symbol("removeLayer"),Ue=Symbol("registerControl"),Rt=Symbol("registerLayerControl"),De=Symbol("canSetParentHtml"),$e=Symbol("setParentHtml"),Me=Symbol("setIcon"),qe=Symbol("bindPopup"),Ge=Symbol("bindTooltip"),Fe=Symbol("unbindPopup"),Ze=Symbol("unbindTooltip"),ie={options:{type:Object,default:()=>({}),custom:!0}},ue=e=>({options:e.options,methods:{}}),oe={...ie,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},He=(e,t,o)=>{const n=j(se),l=j(Ne),{options:a,methods:s}=ue(e),i=X(e,oe,a),d=()=>n({leafletObject:t.value}),m=()=>l({leafletObject:t.value}),u={...s,setAttribution(f){m(),t.value.options.attribution=f,e.visible&&d()},setName(){m(),e.visible&&d()},setLayerType(){m(),e.visible&&d()},setVisible(f){t.value&&(f?d():m())},bindPopup(f){if(!t.value||!D(t.value.bindPopup)){console.warn("Attempt to bind popup before bindPopup method available on layer.");return}t.value.bindPopup(f)},bindTooltip(f){if(!t.value||!D(t.value.bindTooltip)){console.warn("Attempt to bind tooltip before bindTooltip method available on layer.");return}t.value.bindTooltip(f)},unbindTooltip(){t.value&&(D(t.value.closeTooltip)&&t.value.closeTooltip(),D(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(D(t.value.closePopup)&&t.value.closePopup(),D(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(f){o.emit("update:visible",f)}};return V(qe,u.bindPopup),V(Ge,u.bindTooltip),V(Fe,u.unbindPopup),V(Ze,u.unbindTooltip),Le(()=>{u.unbindPopup(),u.unbindTooltip(),m()}),{options:i,methods:u}},kt=(e,t)=>{if(e&&t.default)return q("div",{style:{display:"none"}},t.default())},Pt={...oe,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},We={...Pt,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},It={...We,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}};({...It});const ne={...ie,position:{type:String}},zt=(e,t)=>{const{options:o,methods:n}=ue(e),l=X(e,ne,o),a={...n,setPosition(s){t.value&&t.value.setPosition(s)}};return Le(()=>{t.value&&t.value.remove()}),{options:l,methods:a}},Et=e=>e.default?q("div",{ref:"root"},e.default()):null;I({name:"LControl",props:{...ne,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const o=C(),n=C(),l=$(F),a=j(Ue),{options:s,methods:i}=zt(e,o);return M(async()=>{const{Control:d,DomEvent:m}=l?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url),u=d.extend({onAdd(){return n.value}});o.value=K(new u(s)),G(i,o.value,e),a({leafletObject:o.value}),e.disableClickPropagation&&n.value&&m.disableClickPropagation(n.value),e.disableScrollPropagation&&n.value&&m.disableScrollPropagation(n.value),N(()=>t.emit("ready",o.value))}),{root:n,leafletObject:o}},render(){return Et(this.$slots)}});({...ne});({...ne});({...ne});({...ne});const Je={...oe};({...Je});({...Je});const we={...oe,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},Ke=(e,t,o)=>{const{options:n,methods:l}=He(e,t,o),a=X(e,we,n),s={...l,setTileComponent(){var i;(i=t.value)==null||i.redraw()}};return Le(()=>{t.value.off()}),{options:a,methods:s}},Vt=(e,t,o,n)=>e.extend({initialize(l){this.tileComponents={},this.on("tileunload",this._unloadTile),o.setOptions(this,l)},createTile(l){const a=this._tileCoordsToKey(l);this.tileComponents[a]=t.create("div");const s=q({setup:n,props:["coords"]},{coords:l});return it(s,this.tileComponents[a]),this.tileComponents[a]},_unloadTile(l){const a=this._tileCoordsToKey(l.coords);this.tileComponents[a]&&(this.tileComponents[a].innerHTML="",this.tileComponents[a]=void 0)}});I({props:{...we,childRender:{type:Function,required:!0}},setup(e,t){const o=C(),n=C(null),l=C(!1),a=$(F),s=j(se),{options:i,methods:d}=Ke(e,o,t);return M(async()=>{const{GridLayer:m,DomUtil:u,Util:f}=a?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url),h=Vt(m,u,f,e.childRender);o.value=K(new h(i));const{listeners:y}=Y(t.attrs);o.value.on(y),G(d,o.value,e),s({...e,...d,leafletObject:o.value}),l.value=!0,N(()=>t.emit("ready",o.value))}),{root:n,ready:l,leafletObject:o}},render(){return this.ready?q("div",{style:{display:"none"},ref:"root"}):null}});const Te={iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}};I({name:"LIcon",props:{...Te,...ie},setup(e,t){const o=C(),n=$(F),l=j(De),a=j($e),s=j(Me);let i,d,m,u,f;const h=(_,v,r)=>{const c=_&&_.innerHTML;if(!v){r&&f&&l()&&a(c);return}const{listeners:A}=Y(t.attrs);f&&d(f,A);const{options:ae}=ue(e),x=X(e,Te,ae);c&&(x.html=c),f=x.html?m(x):u(x),i(f,A),s(f)},y=()=>{N(()=>h(o.value,!0,!1))},S=()=>{N(()=>h(o.value,!1,!0))},E={setIconUrl:y,setIconRetinaUrl:y,setIconSize:y,setIconAnchor:y,setPopupAnchor:y,setTooltipAnchor:y,setShadowUrl:y,setShadowRetinaUrl:y,setShadowAnchor:y,setBgPos:y,setClassName:y,setHtml:y};return M(async()=>{const{DomEvent:_,divIcon:v,icon:r}=n?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);i=_.on,d=_.off,m=v,u=r,G(E,{},e),new MutationObserver(S).observe(o.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),y()}),{root:o}},render(){const e=this.$slots.default?this.$slots.default():void 0;return q("div",{ref:"root"},e)}});({...oe});function Xe(e,t,o){var n,l,a;t===void 0&&(t=50),o===void 0&&(o={});var s=(n=o.isImmediate)!=null&&n,i=(l=o.callback)!=null&&l,d=o.maxWait,m=Date.now(),u=[];function f(){if(d!==void 0){var y=Date.now()-m;if(y+t>=d)return d-y}return t}var h=function(){var y=[].slice.call(arguments),S=this;return new Promise(function(E,_){var v=s&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,m=Date.now(),!s){var c=e.apply(S,y);i&&i(c),u.forEach(function(A){return(0,A.resolve)(c)}),u=[]}},f()),v){var r=e.apply(S,y);return i&&i(r),E(r)}u.push({resolve:E,reject:_})})};return h.cancel=function(y){a!==void 0&&clearTimeout(a),u.forEach(function(S){return(0,S.reject)(y)}),u=[]},h}const je={...ie,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},Nt=I({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:je,setup(e,t){const o=C(),n=st({ready:!1,layersToAdd:[],layersInControl:[]}),{options:l}=ue(e),a=X(e,je,l),{listeners:s,attrs:i}=Y(t.attrs),d=ce(se),m=ce(Ne),u=ce(Ue),f=ce(Rt);V(F,e.useGlobalLeaflet);const h=O(()=>{const v={};return e.noBlockingAnimations&&(v.animate=!1),v}),y=O(()=>{const v=h.value;return e.padding&&(v.padding=e.padding),e.paddingTopLeft&&(v.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(v.paddingBottomRight=e.paddingBottomRight),v}),S={moveend:Xe(v=>{n.leafletRef&&(t.emit("update:zoom",n.leafletRef.getZoom()),t.emit("update:center",n.leafletRef.getCenter()),t.emit("update:bounds",n.leafletRef.getBounds()))}),overlayadd(v){const r=n.layersInControl.find(c=>c.name===v.name);r&&r.updateVisibleProp(!0)},overlayremove(v){const r=n.layersInControl.find(c=>c.name===v.name);r&&r.updateVisibleProp(!1)}};M(async()=>{e.useGlobalLeaflet&&(z.L=z.L||await T(()=>import("./entry.NXBMV2Co.js").then(p=>p.l),__vite__mapDeps([0,1]),import.meta.url));const{map:v,CRS:r,Icon:c,latLngBounds:A,latLng:ae,stamp:x}=e.useGlobalLeaflet?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);try{a.beforeMapMount&&await a.beforeMapMount()}catch(p){console.error(`The following error occurred running the provided beforeMapMount hook ${p.message}`)}await jt(c);const ve=typeof a.crs=="string"?r[a.crs]:a.crs;a.crs=ve||r.EPSG3857;const Z={addLayer(p){p.layerType!==void 0&&(n.layerControl===void 0?n.layersToAdd.push(p):n.layersInControl.find(b=>x(b.leafletObject)===x(p.leafletObject))||(n.layerControl.addLayer(p),n.layersInControl.push(p))),p.visible!==!1&&n.leafletRef.addLayer(p.leafletObject)},removeLayer(p){p.layerType!==void 0&&(n.layerControl===void 0?n.layersToAdd=n.layersToAdd.filter(b=>b.name!==p.name):(n.layerControl.removeLayer(p.leafletObject),n.layersInControl=n.layersInControl.filter(b=>x(b.leafletObject)!==x(p.leafletObject)))),n.leafletRef.removeLayer(p.leafletObject)},registerLayerControl(p){n.layerControl=p,n.layersToAdd.forEach(b=>{n.layerControl.addLayer(b)}),n.layersToAdd=[],u(p)},registerControl(p){n.leafletRef.addControl(p.leafletObject)},setZoom(p){const b=n.leafletRef.getZoom();p!==b&&n.leafletRef.setZoom(p,h.value)},setCrs(p){const b=n.leafletRef.getBounds();n.leafletRef.options.crs=p,n.leafletRef.fitBounds(b,{animate:!1,padding:[0,0]})},fitBounds(p){n.leafletRef.fitBounds(p,y.value)},setBounds(p){if(!p)return;const b=A(p);b.isValid()&&!(n.lastSetBounds||n.leafletRef.getBounds()).equals(b,0)&&(n.lastSetBounds=b,n.leafletRef.fitBounds(b))},setCenter(p){if(p==null)return;const b=ae(p),de=n.lastSetCenter||n.leafletRef.getCenter();(de.lat!==b.lat||de.lng!==b.lng)&&(n.lastSetCenter=b,n.leafletRef.panTo(b,h.value))}};me(d,Z.addLayer),me(m,Z.removeLayer),me(u,Z.registerControl),me(f,Z.registerLayerControl),n.leafletRef=K(v(o.value,a)),G(Z,n.leafletRef,e),Be(n.leafletRef,S),Be(n.leafletRef,s),n.ready=!0,N(()=>t.emit("ready",n.leafletRef))}),ye(()=>{Ve(S),n.leafletRef&&(n.leafletRef.off(),n.leafletRef.remove())});const E=O(()=>n.leafletRef),_=O(()=>n.ready);return{root:o,ready:_,leafletObject:E,attrs:i}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),q("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),Ut=["Symbol(Comment)","Symbol(Text)"],Dt=["LTooltip","LPopup"],Ye={...oe,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},$t=(e,t,o)=>{const{options:n,methods:l}=He(e,t,o),a=X(e,Ye,n),s={...l,setDraggable(i){t.value.dragging&&(i?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(i){o.emit("update:latLng",i.latlng),o.emit("update:lat-lng",i.latlng)},setLatLng(i){if(i!=null&&t.value){const d=t.value.getLatLng();(!d||!d.equals(i))&&t.value.setLatLng(i)}}};return{options:a,methods:s}},Mt=(e,t)=>{const o=t.slots.default&&t.slots.default();return o&&o.length&&o.some(qt)};function qt(e){return!(Ut.includes(e.type.toString())||Dt.includes(e.type.name))}const Gt=I({name:"LMarker",props:Ye,setup(e,t){const o=C(),n=C(!1),l=$(F),a=j(se);V(De,()=>{var m;return!!((m=o.value)!=null&&m.getElement())}),V($e,m=>{var u,f;const h=D((u=o.value)==null?void 0:u.getElement)&&((f=o.value)==null?void 0:f.getElement());h&&(h.innerHTML=m)}),V(Me,m=>{var u;return((u=o.value)==null?void 0:u.setIcon)&&o.value.setIcon(m)});const{options:s,methods:i}=$t(e,o,t),d={moveHandler:Xe(i.latLngSync)};return M(async()=>{const{marker:m,divIcon:u}=l?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);Mt(s,t)&&(s.icon=u({className:""})),o.value=K(m(e.latLng,s));const{listeners:f}=Y(t.attrs);o.value.on(f),o.value.on("move",d.moveHandler),G(i,o.value,e),a({...e,...i,leafletObject:o.value}),n.value=!0,N(()=>t.emit("ready",o.value))}),ye(()=>Ve(d)),{ready:n,leafletObject:o}},render(){return kt(this.ready,this.$slots)}}),Ft={...We,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},Re={...Ft},Qe={...ie,content:{type:String,default:null}},et=(e,t)=>{const{options:o,methods:n}=ue(e),l={...n,setContent(a){t.value&&a!==null&&a!==void 0&&t.value.setContent(a)}};return{options:o,methods:l}},tt=e=>e.default?q("div",{ref:"root"},e.default()):null,Zt={...Qe,latLng:{type:[Object,Array],default:()=>[]}},Ht=(e,t)=>{const{options:o,methods:n}=et(e,t);return{options:o,methods:n}},Wt=I({name:"LPopup",props:Zt,setup(e,t){const o=C(),n=C(null),l=$(F),a=j(qe),s=j(Fe),{options:i,methods:d}=Ht(e,o);return M(async()=>{const{popup:m}=l?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);o.value=K(m(i)),e.latLng!==void 0&&o.value.setLatLng(e.latLng),G(d,o.value,e);const{listeners:u}=Y(t.attrs);o.value.on(u),o.value.setContent(e.content||n.value||""),a(o.value),N(()=>t.emit("ready",o.value))}),ye(()=>{s()}),{root:n,leafletObject:o}},render(){return tt(this.$slots)}});({...Re,latLngs:{...Re.latLngs}});const Oe={...we,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>typeof e=="string"?!0:Array.isArray(e)?e.every(t=>typeof t=="string"):!1},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}},Jt=(e,t,o)=>{const{options:n,methods:l}=Ke(e,t,o),a=X(e,Oe,n),s={...l};return{options:a,methods:s}},Kt=I({props:Oe,setup(e,t){const o=C(),n=$(F),l=j(se),{options:a,methods:s}=Jt(e,o,t);return M(async()=>{const{tileLayer:i}=n?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);o.value=K(i(e.url,a));const{listeners:d}=Y(t.attrs);o.value.on(d),G(s,o.value,e),l({...e,...s,leafletObject:o.value}),N(()=>t.emit("ready",o.value))}),{leafletObject:o}},render(){return null}}),Xt={...Qe},Yt=(e,t)=>{const{options:o,methods:n}=et(e,t),l=j(Ze);return ye(()=>{l()}),{options:o,methods:n}},Qt=I({name:"LTooltip",props:Xt,setup(e,t){const o=C(),n=C(null),l=$(F),a=j(Ge),{options:s,methods:i}=Yt(e,o);return M(async()=>{const{tooltip:d}=l?z.L:await T(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);o.value=K(d(s)),G(i,o.value,e);const{listeners:m}=Y(t.attrs);o.value.on(m),o.value.setContent(e.content||n.value||""),a(o.value),N(()=>t.emit("ready",o.value))}),{root:n,leafletObject:o}},render(){return tt(this.$slots)}});({...Oe});const eo=I({inheritAttrs:!1,__name:"LandingGrid",props:{ui:{},class:{}},setup(e){const t={wrapper:"flex flex-col lg:grid gap-8 lg:grid-cols-12 relative"},o=e,{ui:n,attrs:l}=Se("landing.grid",W(o,"ui"),t,W(o,"class"),!0);return(a,s)=>(L(),P("div",Ie({class:w(n).wrapper},w(l)),[Pe(a.$slots,"default")],16))}}),to=Ce(J.ui.strategy,J.ui.button,ut),oo=Ce(J.ui.strategy,J.ui.buttonGroup,xt),no=I({name:"ButtonGroup",inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(to.size).includes(e)}},orientation:{type:String,default:"horizontal",validator(e){return["horizontal","vertical"].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:t}){const{ui:o,attrs:n}=Se("buttonGroup",W(e,"ui"),oo),l=O(()=>dt(t)),a=O(()=>ze(Ee(o.value.wrapper[e.orientation],o.value.rounded,o.value.shadow),e.class)),s=O(()=>o.value.orientation[o.value.rounded][e.orientation]);return pt({orientation:W(e,"orientation"),size:W(e,"size"),ui:o,rounded:s}),()=>q("div",{class:a.value,...n.value},l.value)}}),ke=Ce(J.ui.strategy,J.ui.checkbox,Bt),ao=I({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>ke.default.color,validator(e){return J.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:o,attrs:n}=Se("checkbox",W(e,"ui"),ke,W(e,"class")),{emitFormChange:l,color:a,name:s,inputId:i}=wt(e),d=O({get(){return e.modelValue},set(f){t("update:modelValue",f)}}),m=f=>{t("change",f),l()},u=O(()=>ze(Ee(o.value.base,o.value.form,o.value.rounded,o.value.background,o.value.border,a.value&&o.value.ring.replaceAll("{color}",a.value),a.value&&o.value.color.replaceAll("{color}",a.value)),e.inputClass));return{ui:o,attrs:n,toggle:d,inputId:i,name:s,inputClass:u,onChange:m}}}),lo=["id","name","required","value","disabled","checked","indeterminate"],ro=["for"];function so(e,t,o,n,l,a){return L(),P("div",{class:ee(e.ui.wrapper)},[B("div",{class:ee(e.ui.container)},[mt(B("input",Ie({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=s=>e.toggle=s),name:e.name,required:e.required,value:e.value,disabled:e.disabled,checked:e.checked,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,lo),[[ft,e.toggle]])],2),e.label||e.$slots.label?(L(),P("div",{key:0,class:ee(e.ui.inner)},[B("label",{for:e.inputId,class:ee(e.ui.label)},[Pe(e.$slots,"label",{},()=>[fe(U(e.label),1)]),e.required?(L(),P("span",{key:0,class:ee(e.ui.required)},"*",2)):re("",!0)],10,ro),e.help?(L(),P("p",{key:0,class:ee(e.ui.help)},U(e.help),3)):re("",!0)],2)):re("",!0)],2)}const io=ct(ao,[["render",so]]),uo={style:{height:"calc(100vh - 65px)"},class:"flex"},po={class:"w-full"},co={class:"font-semibold"},mo={class:"font-semibold"},fo={class:"flex gap-2"},yo={class:"text-gray"},vo={class:"flex flex-col gap-4 items-start"},bo={class:"whitespace-nowrap flex items-center gap-x-1"},go={class:"pl-2 flex flex-col gap-2"},ho={key:0},_o={class:"text-primary text-sm tracking-wide"},Lo={class:"flex flex-col gap-1 mt-1"},Ao=I({__name:"index",async setup(e){let t,o;const n=yt(),l=O(()=>n.query.tag);let a;const s=C(null),i=C([]),{data:d}=([t,o]=be(()=>ge("map-overview",()=>he("_map").findOne())),t=await t,o(),t),{data:m}=([t,o]=be(()=>ge("filters",()=>he("schema").findOne())),t=await t,o(),t),{data:u}=([t,o]=be(()=>ge("map-entries",()=>he("map").sort({createdAt:-1}).find())),t=await t,o(),t);function f(r){return Object.keys(r).reduce((c,A)=>(Object.keys(r[A]).length===1?c[A]=!1:c[A]=f(r[A]),c),{})}const h=xe("filters",()=>f(m.value.meta.filter)),y=O(()=>u.value.filter(({meta:r,tags:c})=>{if(r!=null&&r.lng&&r.lat&&!(l.value&&!(c!=null&&c.includes(l.value))))return!0})),S=O(()=>y.value.filter(({meta:r})=>{if(!(_.value&&r.bundesland!==_.value))return!0})),E=O(()=>[{label:"Alle Bundesländer",value:""},...Array.from(u.value.reduce((r,{meta:c})=>(c!=null&&c.bundesland&&r.add(c.bundesland),r),new Set)).map(r=>({label:r,value:r,disabled:!y.value.find(c=>c.meta.bundesland===r)}))]),_=xe("state",()=>"");if(l.value){const r=E.value.find(c=>c.label.toLowerCase()===l.value.toLowerCase());r&&(_.value=r==null?void 0:r.label,vt().push(n.path))}const v=O(()=>[[Math.min(...S.value.map(r=>r.meta.lat)),Math.min(...S.value.map(r=>r.meta.lng))],[Math.max(...S.value.map(r=>r.meta.lat)),Math.max(...S.value.map(r=>r.meta.lng))]]);return _e([()=>{var r;return(r=s.value)==null?void 0:r.leafletObject},()=>v.value,()=>S.value],async([r])=>{r&&(a||(a=await T(()=>import("./entry.NXBMV2Co.js").then(c=>c.l),__vite__mapDeps([0,1]),import.meta.url)),r.fitBounds(a.latLngBounds(v.value),{padding:[50,50]}))}),bt({title:d.value.title,ogTitle:d.value.title,description:d.value.description,ogDescription:d.value.description}),(r,c)=>{const A=Kt,ae=Qt,x=ht,ve=Wt,Z=Ct,p=eo,b=_t,de=Lt,ot=St,nt=Ot,at=no,Ae=io,lt=At;return L(),P("div",uo,[B("div",po,[R(de,null,{fallback:k(()=>[R(b,{class:"mt-4"},{default:k(()=>[R(p,{class:"w-full"},{default:k(()=>[(L(!0),P(le,null,pe(w(S),(g,H)=>(L(),te(Z,{key:H,to:g==null?void 0:g._path,title:g.title+", "+g.meta.ort,description:g.description,class:"col-span-3"},null,8,["to","title","description"]))),128))]),_:1})]),_:1})]),default:k(()=>[R(w(Nt),{ref_key:"mapRef",ref:s,"min-zoom":5,"max-zoom":10},{default:k(()=>[R(A,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',"layer-type":"base",name:"OpenStreetMap"}),(L(!0),P(le,null,pe(w(S),g=>(L(),te(w(Gt),{ref_for:!0,ref_key:"markerRef",ref:i,key:g._path,"lat-lng":[g.meta.lat,g.meta.lng],options:{autoPanOnFocus:!0}},{default:k(()=>[R(ae,null,{default:k(()=>[fe(U(g.meta.name)+", ",1),B("span",co,U(g.meta.ort),1)]),_:2},1024),R(ve,null,{default:k(()=>[B("div",mo,U(g.title),1),B("div",fo,[B("div",yo,U(g.description),1),R(x,{to:g._path,size:"sm",icon:"i-heroicons-arrow-right-20-solid",trailing:""},{default:k(()=>[fe(" Mehr ")]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1032,["lat-lng"]))),128))]),_:1},512)]),_:1})]),R(lt,{class:"min-w-fit"},{default:k(()=>[B("div",vo,[w(l)?(L(),te(ot,{key:0,size:"md",class:"pr-1"},{default:k(()=>[B("div",bo,[fe(U(w(l))+" ",1),R(x,{icon:"i-heroicons-x-mark-20-solid",class:"text-md",padded:!1,to:w(n).path},null,8,["to"])])]),_:1})):re("",!0),R(at,null,{default:k(()=>[R(nt,{modelValue:w(_),"onUpdate:modelValue":c[0]||(c[0]=g=>gt(_)?_.value=g:null),options:w(E)},null,8,["modelValue","options"]),w(_)?(L(),te(x,{key:0,color:"gray",icon:"i-heroicons-x-mark-20-solid",onClick:c[1]||(c[1]=g=>_.value="")})):re("",!0)]),_:1}),B("div",go,[(L(!0),P(le,null,pe(w(h),(g,H)=>(L(),P(le,{key:H},[typeof g=="object"?(L(),P("div",ho,[B("div",_o,U(H),1),B("div",Lo,[(L(!0),P(le,null,pe(Object.keys(g),Q=>(L(),te(Ae,{key:Q,modelValue:g[Q],"onUpdate:modelValue":rt=>g[Q]=rt,label:Q,class:"bg-gray"},null,8,["modelValue","onUpdate:modelValue","label"]))),128))])])):(L(),te(Ae,{key:1,modelValue:w(h)[H],"onUpdate:modelValue":Q=>w(h)[H]=Q,label:H},null,8,["modelValue","onUpdate:modelValue","label"]))],64))),128))])])]),_:1})])}}});export{Ao as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./entry.NXBMV2Co.js","./entry.2p9d7H8O.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
