import{d as p,b as t,c as o,F as i,a8 as u,a9 as d,w as s,g as r,t as g,ad as l,f,a4 as y,aM as h,aN as k}from"./entry.0nGgSXsd.js";const x={key:0,class:"flex gap-x-2"},N=p({__name:"TagList",props:{base:{},tags:{},pageTag:{}},setup(n){return(e,C)=>{const c=y,_=h,m=k;return e.tags?(t(),o("div",x,[(t(!0),o(i,null,u(e.tags,a=>(t(),d(m,{key:a,class:"z-50",size:"md",color:a===e.pageTag?"primary":"gray"},{default:s(()=>[r(_,{to:a===e.pageTag?e.base:e.base+"?tag="+encodeURIComponent(a),class:"flex items-center gap-x-2"},{default:s(()=>[r(c,{name:"i-heroicons-tag"}),l(" "+g(a),1)]),_:2},1032,["to"])]),_:2},1032,["color"]))),128))])):f("",!0)}}});function T(n){return new Date(n.createdAt).toLocaleDateString("de-DE",{year:"numeric",month:"short",day:"numeric"})}export{N as _,T as a};
