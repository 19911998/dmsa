import{Y as x,r as j,o as G,G as i,ak as _,k as P,ae as ee,af as w,d as ae,a4 as L,ah as le,ai as p,b8 as ne,aM as te,al as I,b as d,c as o,e as ie,F as S,a8 as F,t as N,aa as re,n as A,ac as W,g as M,f as q,b9 as C}from"./entry.xmq7jK9G.js";const ue={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"ps-2",xs:"ps-2.5",sm:"ps-2.5",md:"ps-3",lg:"ps-3.5",xl:"ps-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"pe-2",xs:"pe-2.5",sm:"pe-2.5",md:"pe-3",lg:"pe-3.5",xl:"pe-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},se={...ue,form:"form-select",placeholder:"text-gray-900 dark:text-white",default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"}};let de=0;function oe(){return`nuid-${de++}`}const ge=(e,r)=>{const b=x("form-events",void 0),a=x("form-group",void 0),f=x("form-inputs",void 0),c=j(e==null?void 0:e.id);G(()=>{c.value=(e==null?void 0:e.legend)===null||e.legend?void 0:(e==null?void 0:e.id)??oe(),a&&(a.inputId.value=c.value,f&&(f.value[a.name.value]=c))});const v=j(!1);function n(g,u){b&&b.emit({type:g,path:u})}function m(){n("blur",a==null?void 0:a.name.value),v.value=!0}function t(){n("change",a==null?void 0:a.name.value)}const y=_(()=>{(v.value||a!=null&&a.eagerValidation.value)&&n("input",a==null?void 0:a.name.value)},300);return{inputId:c,name:i(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:i(()=>{var u;const g=r.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??g??((u=r==null?void 0:r.default)==null?void 0:u.size)}),color:i(()=>{var g;return(g=a==null?void 0:a.error)!=null&&g.value?"red":e==null?void 0:e.color}),emitFormBlur:m,emitFormInput:y,emitFormChange:t}},s=ee(w.ui.strategy,w.ui.select,se),ce=ae({components:{UIcon:L},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>s.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...w.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r,slots:b}){const{ui:a,attrs:f}=le("select",p(e,"ui"),s,p(e,"class")),{size:c,rounded:v}=ne({ui:a,props:e}),{emitFormChange:n,inputId:m,color:t,size:y,name:g}=ge(e,s),u=i(()=>c.value||y.value),T=l=>{r("update:modelValue",l.target.value)},U=l=>{n(),r("change",l)},D=l=>C(l,e.valueAttribute,C(l,e.optionAttribute)),E=l=>C(l,e.optionAttribute,C(l,e.valueAttribute)),$=l=>["string","number","boolean"].includes(typeof l)?{[e.valueAttribute]:l,[e.optionAttribute]:l}:{...l,[e.valueAttribute]:D(l),[e.optionAttribute]:E(l)},V=i(()=>e.options.map(l=>$(l))),B=i(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...V.value]:V.value),J=i(()=>{const l=$(e.modelValue),h=B.value.find(z=>z[e.valueAttribute]===l[e.valueAttribute]);return h?h[e.valueAttribute]:""}),R=i(()=>{var h,z;const l=((z=(h=a.value.color)==null?void 0:h[t.value])==null?void 0:z[e.variant])||a.value.variant[e.variant];return te(I(a.value.base,a.value.form,v.value,a.value.size[u.value],e.padded?a.value.padding[u.value]:"p-0",l==null?void 0:l.replaceAll("{color}",t.value),(k.value||b.leading)&&a.value.leading.padding[u.value],(O.value||b.trailing)&&a.value.trailing.padding[u.value]),e.selectClass)}),k=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),O=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),Y=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),H=i(()=>e.loading&&!k.value?e.loadingIcon:e.trailingIcon||e.icon),K=i(()=>I(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[u.value])),Q=i(()=>I(a.value.icon.base,t.value&&w.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[u.value],e.loading&&a.value.icon.loading)),X=i(()=>I(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[u.value])),Z=i(()=>I(a.value.icon.base,t.value&&w.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[u.value],e.loading&&!k.value&&a.value.icon.loading));return{ui:a,attrs:f,name:g,inputId:m,normalizedOptionsWithPlaceholder:B,normalizedValue:J,isLeading:k,isTrailing:O,selectClass:R,leadingIconName:Y,leadingIconClass:Q,leadingWrapperIconClass:K,trailingIconName:H,trailingIconClass:Z,trailingWrapperIconClass:X,onInput:T,onChange:U}}}),ve=["id","name","value","required","disabled"],me=["value","label"],be=["value","selected","disabled","textContent"],fe=["value","selected","disabled","textContent"];function ye(e,r,b,a,f,c){const v=L;return d(),o("div",{class:A(e.ui.wrapper)},[ie("select",re({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled||e.loading,class:e.selectClass},e.attrs,{onInput:r[0]||(r[0]=(...n)=>e.onInput&&e.onInput(...n)),onChange:r[1]||(r[1]=(...n)=>e.onChange&&e.onChange(...n))}),[(d(!0),o(S,null,F(e.normalizedOptionsWithPlaceholder,(n,m)=>(d(),o(S,null,[n.children?(d(),o("optgroup",{key:`${n[e.valueAttribute]}-optgroup-${m}`,value:n[e.valueAttribute],label:n[e.optionAttribute]},[(d(!0),o(S,null,F(n.children,(t,y)=>(d(),o("option",{key:`${t[e.valueAttribute]}-${m}-${y}`,value:t[e.valueAttribute],selected:t[e.valueAttribute]===e.normalizedValue,disabled:t.disabled,textContent:N(t[e.optionAttribute])},null,8,be))),128))],8,me)):(d(),o("option",{key:`${n[e.valueAttribute]}-${m}`,value:n[e.valueAttribute],selected:n[e.valueAttribute]===e.normalizedValue,disabled:n.disabled,textContent:N(n[e.optionAttribute])},null,8,fe))],64))),256))],16,ve),e.isLeading&&e.leadingIconName||e.$slots.leading?(d(),o("span",{key:0,class:A(e.leadingWrapperIconClass)},[W(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[M(v,{name:e.leadingIconName,class:A(e.leadingIconClass)},null,8,["name","class"])])],2)):q("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(d(),o("span",{key:1,class:A(e.trailingWrapperIconClass)},[W(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[M(v,{name:e.trailingIconName,class:A(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):q("",!0)],2)}const Ie=P(ce,[["render",ye]]);export{Ie as _,ue as i,ge as u};
