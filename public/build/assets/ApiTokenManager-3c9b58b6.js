import{T as b,r as h,o as i,d as r,b as t,w as e,a as l,e as v,f as a,u as n,F as x,g as $,t as k,n as A}from"./app-718f586e.js";import{_ as N}from"./ActionMessage-1ab9a5e5.js";import{_ as j}from"./Modal-04dbe873.js";import{_ as P}from"./Checkbox-a430a4f2.js";import{_ as U}from"./ConfirmationModal-f97d31e2.js";import{_ as L}from"./DangerButton-1a29cc1e.js";import{_ as T}from"./DialogModal-e9508084.js";import{_ as M}from"./FormSection-f330e7ae.js";import{_ as z,a as E}from"./TextInput-c8d2b9fe.js";import{_ as w}from"./InputLabel-ed4f0155.js";import{_ as S}from"./PrimaryButton-2091b87f.js";import{_ as C}from"./SecondaryButton-49b94903.js";import{S as Y}from"./SectionBorder-3370ec15.js";import"./SectionTitle-3fd8411e.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"col-span-6 sm:col-span-4"},G={key:0,class:"col-span-6"},H={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},J={class:"flex items-center"},K={class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},O={key:0},Q={class:"mt-10 sm:mt-0"},R={class:"space-y-6"},W={class:"break-all dark:text-white"},X={class:"flex items-center ms-2"},Z={key:0,class:"text-sm text-gray-400"},ee=["onClick"],se=["onClick"],te=l("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),oe={key:0,class:"mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"},ae={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ne={class:"flex items-center"},le={class:"ms-2 text-sm text-gray-600 dark:text-gray-400"},$e={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(m){const c=b({name:"",permissions:m.defaultPermissions}),u=b({permissions:[]}),y=b({}),g=h(!1),p=h(null),f=h(null),I=()=>{c.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,c.reset()}})},F=d=>{u.permissions=d.abilities,p.value=d},V=()=>{u.put(route("api-tokens.update",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})},D=d=>{f.value=d},B=()=>{y.delete(route("api-tokens.destroy",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})};return(d,o)=>(i(),r("div",null,[t(M,{onSubmitted:I},{title:e(()=>[a(" Create API Token ")]),description:e(()=>[a(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:e(()=>[l("div",q,[t(w,{for:"name",value:"Name"}),t(z,{id:"name",modelValue:n(c).name,"onUpdate:modelValue":o[0]||(o[0]=s=>n(c).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),t(E,{message:n(c).errors.name,class:"mt-2"},null,8,["message"])]),m.availablePermissions.length>0?(i(),r("div",G,[t(w,{for:"permissions",value:"Permissions"}),l("div",H,[(i(!0),r(x,null,$(m.availablePermissions,s=>(i(),r("div",{key:s},[l("label",J,[t(P,{checked:n(c).permissions,"onUpdate:checked":o[1]||(o[1]=_=>n(c).permissions=_),value:s},null,8,["checked","value"]),l("span",K,k(s),1)])]))),128))])])):v("",!0)]),actions:e(()=>[t(N,{on:n(c).recentlySuccessful,class:"me-3"},{default:e(()=>[a(" Created. ")]),_:1},8,["on"]),t(S,{class:A({"opacity-25":n(c).processing}),disabled:n(c).processing},{default:e(()=>[a(" Create ")]),_:1},8,["class","disabled"])]),_:1}),m.tokens.length>0?(i(),r("div",O,[t(Y),l("div",Q,[t(j,null,{title:e(()=>[a(" Manage API Tokens ")]),description:e(()=>[a(" You may delete any of your existing tokens if they are no longer needed. ")]),content:e(()=>[l("div",R,[(i(!0),r(x,null,$(m.tokens,s=>(i(),r("div",{key:s.id,class:"flex items-center justify-between"},[l("div",W,k(s.name),1),l("div",X,[s.last_used_ago?(i(),r("div",Z," Last used "+k(s.last_used_ago),1)):v("",!0),m.availablePermissions.length>0?(i(),r("button",{key:1,class:"cursor-pointer ms-6 text-sm text-gray-400 underline",onClick:_=>F(s)}," Permissions ",8,ee)):v("",!0),l("button",{class:"cursor-pointer ms-6 text-sm text-red-500",onClick:_=>D(s)}," Delete ",8,se)])]))),128))])]),_:1})])])):v("",!0),t(T,{show:g.value,onClose:o[3]||(o[3]=s=>g.value=!1)},{title:e(()=>[a(" API Token ")]),content:e(()=>[te,d.$page.props.jetstream.flash.token?(i(),r("div",oe,k(d.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:e(()=>[t(C,{onClick:o[2]||(o[2]=s=>g.value=!1)},{default:e(()=>[a(" Close ")]),_:1})]),_:1},8,["show"]),t(T,{show:p.value!=null,onClose:o[6]||(o[6]=s=>p.value=null)},{title:e(()=>[a(" API Token Permissions ")]),content:e(()=>[l("div",ae,[(i(!0),r(x,null,$(m.availablePermissions,s=>(i(),r("div",{key:s},[l("label",ne,[t(P,{checked:n(u).permissions,"onUpdate:checked":o[4]||(o[4]=_=>n(u).permissions=_),value:s},null,8,["checked","value"]),l("span",le,k(s),1)])]))),128))])]),footer:e(()=>[t(C,{onClick:o[5]||(o[5]=s=>p.value=null)},{default:e(()=>[a(" Cancel ")]),_:1}),t(S,{class:A(["ms-3",{"opacity-25":n(u).processing}]),disabled:n(u).processing,onClick:V},{default:e(()=>[a(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),t(U,{show:f.value!=null,onClose:o[8]||(o[8]=s=>f.value=null)},{title:e(()=>[a(" Delete API Token ")]),content:e(()=>[a(" Are you sure you would like to delete this API token? ")]),footer:e(()=>[t(C,{onClick:o[7]||(o[7]=s=>f.value=null)},{default:e(()=>[a(" Cancel ")]),_:1}),t(L,{class:A(["ms-3",{"opacity-25":n(y).processing}]),disabled:n(y).processing,onClick:B},{default:e(()=>[a(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{$e as default};
