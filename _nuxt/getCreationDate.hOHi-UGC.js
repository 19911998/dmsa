import{d as u,E as g,b as o,c as n,F as l,a7 as d,a8 as f,w as s,g as r,t as x,ac as y,aA as h,f as k,a3 as D,aI as T,aJ as B}from"./entry.Bk61fWBw.js";const C={key:0,class:"flex gap-x-2"},w=u({__name:"TagList",props:{tags:{},pageTag:{}},setup(a){const c=a,_=g(()=>{var e;return(e=c.tags)==null?void 0:e.split(" ")});return(e,L)=>{const p=D,m=T,i=B;return e.tags?(o(),n("div",C,[(o(!0),n(l,null,d(h(_),t=>(o(),f(i,{key:t,class:"z-50",color:t===e.pageTag?"primary":"gray"},{default:s(()=>[r(m,{to:t===e.pageTag?"/blog":"/tags/"+t,class:"flex items-center gap-x-2"},{default:s(()=>[r(p,{name:"i-heroicons-tag"}),y(" "+x(t),1)]),_:2},1032,["to"])]),_:2},1032,["color"]))),128))])):k("",!0)}}});function A(a){return new Date(a.createdAt).toLocaleDateString("de-DE",{year:"numeric",month:"short",day:"numeric"})}export{w as _,A as a};
