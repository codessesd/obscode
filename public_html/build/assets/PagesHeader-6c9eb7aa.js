import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";import{r as a,A as d,B as c,o as l,d as _,a as e,n as g,f as p,t as n}from"./app-b96db917.js";const u={class:"animate-page-enter-flipX mb-5"},h={class:"full-height-header min-h-[230px] h-screen-minus-120 flex rounded-3xl p-5"},f={class:"text-center pb-48"},m={class:"page-title font-bold mb-8"},x={class:"text-red-400"},v={class:"text-lg"},w={__name:"PagesHeader",props:{bigText:{type:String,default:"My Header"},subText:{type:String,default:"My subtext is a Lorem ipsum dolor sit amet, consectetur adipiscing elit."},redLetter:{type:String,default:""}},setup(t){const o=a(window.innerHeight),i=a(window.innerHeight>514),s=()=>{o.value=window.innerHeight,i.value=window.innerHeight>514};return d(()=>{window.addEventListener("resize",s),s()}),c(()=>{window.removeEventListener("resize",s)}),(H,b)=>(l(),_("div",u,[e("div",h,[e("div",{class:g(["flex-1 flex justify-center top-10",{"items-center":i.value}])},[e("div",f,[e("h1",m,[p(n(t.bigText),1),e("span",x,n(t.redLetter),1)]),e("p",v,n(t.subText),1)])],2)])]))}},L=r(w,[["__scopeId","data-v-dfa2d2ce"]]);export{L as P};
