import{A as i}from"./AppLayout-d78f0fcf.js";import o from"./DeleteTeamForm-5a4f3dc7.js";import{S as r}from"./SectionBorder-52b938d1.js";import l from"./TeamMemberManager-64d0130b.js";import n from"./UpdateTeamNameForm-50c3387a.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as u}from"./app-c3e9646d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-ee36c587.js";import"./SectionTitle-7e01cd60.js";import"./ConfirmationModal-1960800d.js";import"./DangerButton-dd37a8c5.js";import"./SecondaryButton-c5694eba.js";import"./ActionMessage-be454df5.js";import"./DialogModal-1e884678.js";import"./FormSection-7e060162.js";import"./TextInput-49ff92c7.js";import"./InputLabel-6111fda8.js";import"./PrimaryButton-90fd59af.js";const f=a("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[f]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):u("",!0)])])]),_:1}))}};export{D as default};
