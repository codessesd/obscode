import{A as i}from"./AppLayout-48fb13e6.js";import o from"./DeleteTeamForm-7e2ffcdb.js";import{S as r}from"./SectionBorder-5b4e0068.js";import l from"./TeamMemberManager-c2ca2880.js";import n from"./UpdateTeamNameForm-da1290e0.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as u}from"./app-58381223.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-9212d91f.js";import"./SectionTitle-930cc2db.js";import"./ConfirmationModal-1a378462.js";import"./DangerButton-6f64a4e8.js";import"./SecondaryButton-ce97bf84.js";import"./ActionMessage-ca169033.js";import"./DialogModal-14ae4530.js";import"./FormSection-0a073c29.js";import"./TextInput-d7d21ca3.js";import"./InputLabel-5660a54f.js";import"./PrimaryButton-75faad5b.js";const f=a("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},D={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[f]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):u("",!0)])])]),_:1}))}};export{D as default};