import{A as p}from"./AppLayout-0bfae4e4.js";import c from"./DeleteUserForm-17b5d3eb.js";import l from"./LogoutOtherBrowserSessionsForm-d86699ad.js";import{S as s}from"./SectionBorder-9997165d.js";import u from"./TwoFactorAuthenticationForm-78d5c2b7.js";import f from"./UpdatePasswordForm-b81c34ce.js";import d from"./UpdateProfileInformationForm-fc83816d.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-711413bb.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-f4ebe30e.js";import"./SectionTitle-7d9339be.js";import"./DangerButton-87ce81f7.js";import"./DialogModal-b1331124.js";import"./TextInput-1e635f99.js";import"./SecondaryButton-da8da5d1.js";import"./ActionMessage-fae7dff9.js";import"./PrimaryButton-af9da398.js";import"./InputLabel-abc8b78d.js";import"./FormSection-1f250f0f.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},k={key:1},w={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",y,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",w,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
