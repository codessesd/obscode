import{o as l,d as a,n as N,C as A,D as S,a as e,E as g,F as h,g as w,c as C,w as d,f as B,t as y,e as $,b as i,r as x,G as I,u as c,H as v,Q as _,x as L,k as m,y as b,m as H}from"./app-b96db917.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const k=o=>(A("data-v-ae298962"),o=o(),S(),o),j=k(()=>e("div",{class:"circle-1 absolute rounded-full bg-[#ff0000] top-[50px]"},null,-1)),z=k(()=>e("div",{class:"circle-4 absolute rounded-full bg-[#ff00d9] top-[100px]"},null,-1)),T=k(()=>e("div",{class:"circle-3 absolute rounded-full bg-[#6933ff] top-[20px]"},null,-1)),D=k(()=>e("div",{class:"absolute top-0 left-0 bg-white/70 h-screen w-full"},null,-1)),V=[j,z,T,D],W={__name:"BgArtSimple",props:{showHardBlur:{type:Boolean,default:!1}},setup(o){return(n,r)=>(l(),a("div",{class:N(["bgArt fixed top-0 left-0 h-1 w-full filter -z-10",[o.showHardBlur?"blur-filter-50":"blur-filter-10"]])},V,2))}},F=p(W,[["__scopeId","data-v-ae298962"]]),P={class:"buttons-container flex"},E={__name:"NavigationColourBottom",props:{menuItems:Array},setup(o){return(n,r)=>{const s=g("Link");return l(),a("div",P,[(l(!0),a(h,null,w(o.menuItems,t=>(l(),a("span",null,[t.active?$("",!0):(l(),C(s,{key:0,href:t.url,as:"button",class:"the-button w-28 overflow-hidden mr-3 active:text-black transition-transform ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500 text-white py-[5px] px-5 rounded-full"},{default:d(()=>[B(y(t.label),1)]),_:2},1032,["href"]))]))),256))])}}};const O={class:"buttons-container flex"},G={class:"bg-white h-full py-[4px] w-full rounded-[5px]"},Q="bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500",R="bg-gray-200",q={__name:"NavigationColourTop",props:{menuItems:Array},setup(o){return(n,r)=>{const s=g("Link");return l(),a("div",O,[(l(!0),a(h,null,w(o.menuItems,t=>(l(),a("span",null,[i(s,{href:t.url,as:"button",class:N(["nav-btn w-28 overflow-hidden mr-3 active:text-black ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg text-black py-[1px] px-[1px] rounded-md",[t.active?Q:R]])},{default:d(()=>[e("p",G,y(t.label),1)]),_:2},1032,["href","class"])]))),256))])}}},J=p(q,[["__scopeId","data-v-305538a9"]]);const f=o=>(A("data-v-2e4d7127"),o=o(),S(),o),K={class:"mobile-nav"},X=f(()=>e("div",{class:"w-10/12 h-[2px] rounded-full bg-white"},null,-1)),Y=f(()=>e("div",{class:"w-10/12 h-[2px] rounded-full bg-white"},null,-1)),Z=f(()=>e("div",{class:"w-10/12 h-[2px] rounded-full bg-white"},null,-1)),U=[X,Y,Z],ee={key:0,class:"fixed w-full h-full left-0 top-0 z-40"},te=f(()=>e("div",{class:"absolute bg-white w-full h-full left-0 top-0"},null,-1)),se={class:"absolute w-full h-full z-20 grid grid-cols-2 overflow-auto"},oe={class:"pl-2 pt-10"},le={class:"pr-[5%] pt-10 justify-self-end"},ne=f(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)),ae=[ne],re={class:"pt-20 text-center col-span-2"},ie={class:"p-2 font-bold text-3xl"},ce=f(()=>e("div",{class:"text-center text-sm text-white w-full p-2 col-span-2 place-self-end bg-slate-500"},"©2024 Obscode",-1)),ue={__name:"NavMobile",props:{menuItems:Array},setup(o){let n=x(!1);return(r,s)=>{const t=g("Link");return l(),a("div",K,[e("div",{class:"hamburger-btn bg-white h-9 w-11 mt-1 shadow-xl rounded grid place-items-center py-[5px] px-1 bg-gradient-to-r from-red-400 to-purple-400 active:scale-95 active:ring-gray-400",onClick:s[0]||(s[0]=u=>I(n)?n.value=!0:n=!0)},U),i(v,null,{default:d(()=>[c(n)?(l(),a("div",ee,[te,e("div",se,[e("div",oe,[e("img",{class:"w-[150px]",src:"/graphics/logo750transparent.png",onClick:s[1]||(s[1]=u=>r.$inertia.visit("/")),alt:"logo"})]),e("div",le,[e("div",{class:"bg-white border border-gray-200 text-black h-9 w-11 mt-2 shadow-xl flex justify-center items-center rounded active:scale-95 active:bg-gray-200",onClick:s[2]||(s[2]=u=>I(n)?n.value=!1:n=!1)},ae)]),e("ul",re,[(l(!0),a(h,null,w(o.menuItems,u=>(l(),a("li",ie,[i(t,{href:u.url,as:"button",class:"w-full h-full",onClick:s[3]||(s[3]=M=>I(n)?n.value=!1:n=!1)},{default:d(()=>[B(y(u.label),1)]),_:2},1032,["href"])]))),256))]),ce])])):$("",!0)]),_:1})])}}},de=p(ue,[["__scopeId","data-v-2e4d7127"]]);const _e={class:"px-2 fixed w-full bottom-0 z-10"},pe={class:"buttons-container w-full flex nav-bottom bg-gray-700 py-3 justify-evenly rounded-t-2xl"},fe={__name:"NavMobileBottom",props:{menuItems:Array},setup(o){return(n,r)=>{const s=g("Link");return l(),a("div",_e,[e("div",pe,[(l(!0),a(h,null,w(o.menuItems,t=>(l(),a(h,null,[t.active?$("",!0):(l(),C(s,{key:0,href:t.url,as:"button",class:"the-button text-[1.3rem] px-3 overflow-hidden active:text-black transition-transform ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300 drop-shadow-lg bg-gradient-to-r from-red-500 to-purple-500 hover:to-red-500 hover:from-purple-500 text-white py-[2px] rounded"},{default:d(()=>[B(y(t.label),1)]),_:2},1032,["href"]))],64))),256))])])}}},ve=p(fe,[["__scopeId","data-v-6eed579e"]]),he={},me={class:"w-full h-20 bg-slate-600 flex justify-center items-center"},be=e("p",{class:"text-white text-sm"},"Copyright © 2023 Obscode",-1),xe=[be];function ge(o,n){return l(),a("div",me,xe)}const we=p(he,[["render",ge]]);const ye={class:"layout-outer-div relative min-h-screen overflow-hidden"},$e={class:"top-bar top-0 w-full flex justify-between items-center h-28 z-20"},ke={class:"h-20 flex items-center max-[768px]:hidden"},Ie={class:"h-20 flex items-center min-[769px]:hidden"},Ce={class:"flex justify-center mb-16"},Be={class:"nav-bottom fixed bottom-0 left-0 pb-10 z-20 max-[768px]:hidden"},Le={__name:"AppLayout",setup(o){let n=x(!1);console.log(_().url),L(()=>_().url,(t,u)=>{t!=u&&(n.value=!0,setTimeout(()=>n.value=!1,2e3))});let r=x(_().url=="/"),s=x([{label:"Home",url:"/",active:_().url=="/"},{label:"Products",url:"/pricing",active:_().url.startsWith("/pricing")},{label:"Services",url:"/services",active:_().url.startsWith("/services")}]);return L(()=>_().url,t=>{s.value=[{label:"Home",url:"/",active:t=="/"},{label:"Products",url:"/pricing",active:t.startsWith("/pricing")},{label:"Services",url:"/services",active:t.startsWith("/services")}],r=_().url=="/"}),(t,u)=>(l(),a("div",ye,[i(F,{showHardBlur:!c(r)},null,8,["showHardBlur"]),e("div",$e,[e("img",{class:"w-[250px]",src:"/graphics/logo750transparent.png",onClick:u[0]||(u[0]=M=>t.$inertia.visit("/")),alt:"logo"}),i(v,{name:"fade"},{default:d(()=>[m(e("div",ke,[i(J,{menuItems:c(s)},null,8,["menuItems"])],512),[[b,!c(r)]])]),_:1}),i(v,{name:"fade"},{default:d(()=>[m(e("div",Ie,[i(de,{menuItems:c(s)},null,8,["menuItems"])],512),[[b,!c(r)]])]),_:1})]),e("div",Ce,[H(t.$slots,"default",{},void 0,!0)]),i(v,{name:"scale"},{default:d(()=>[m(e("div",Be,[i(E,{menuItems:c(s)},null,8,["menuItems"])],512),[[b,c(r)]])]),_:1}),i(v,{name:"slide"},{default:d(()=>[m(i(ve,{class:"min-[769px]:hidden",menuItems:c(s)},null,8,["menuItems"]),[[b,c(r)]])]),_:1}),c(r)?$("",!0):(l(),C(we,{key:0}))]))}},Se=p(Le,[["__scopeId","data-v-e4e6f3d0"]]);export{Se as A};
