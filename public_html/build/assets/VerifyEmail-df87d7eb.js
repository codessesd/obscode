import{T as g,j as y,o as n,d,b as e,u as t,w as o,F as h,Z as p,e as _,a as s,n as x,f as i,i as f,h as v}from"./app-711413bb.js";import{A as k}from"./AuthenticationCard-672b4eaf.js";import{_ as b}from"./AuthenticationCardLogo-51bf83bf.js";import{_ as w}from"./PrimaryButton-af9da398.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=s("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:String},setup(u){const c=u,r=g({}),l=()=>{r.post(route("verification.send"))},m=y(()=>c.status==="verification-link-sent");return(a,C)=>(n(),d(h,null,[e(t(p),{title:"Email Verification"}),e(k,null,{logo:o(()=>[e(b)]),default:o(()=>[V,m.value?(n(),d("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):_("",!0),s("form",{onSubmit:v(l,["prevent"])},[s("div",B,[e(w,{class:x({"opacity-25":t(r).processing}),disabled:t(r).processing},{default:o(()=>[i(" Resend Verification Email ")]),_:1},8,["class","disabled"]),s("div",null,[e(t(f),{href:a.route("profile.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:o(()=>[i(" Edit Profile")]),_:1},8,["href"]),e(t(f),{href:a.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2"},{default:o(()=>[i(" Log Out ")]),_:1},8,["href"])])])],32)]),_:1})],64))}};export{L as default};
