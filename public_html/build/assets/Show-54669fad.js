import{A as p}from"./AppLayout-68dba590.js";import c from"./DeleteUserForm-d38bea44.js";import l from"./LogoutOtherBrowserSessionsForm-6934426b.js";import{S as s}from"./SectionBorder-c45d7c23.js";import u from"./TwoFactorAuthenticationForm-1ceaea36.js";import f from"./UpdatePasswordForm-d5856268.js";import d from"./UpdateProfileInformationForm-7ef40057.js";import{o,c as _,w as n,a as i,d as r,b as t,e as a,F as h}from"./app-ba865409.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-58397ade.js";import"./SectionTitle-efcce3eb.js";import"./DangerButton-09b773ec.js";import"./DialogModal-b3c1066e.js";import"./TextInput-850b063b.js";import"./SecondaryButton-dad28d70.js";import"./ActionMessage-6b9fdf32.js";import"./PrimaryButton-d1d17292.js";import"./InputLabel-b7465cdd.js";import"./FormSection-7a8e9db4.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},k={key:1},w={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",y,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",w,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};