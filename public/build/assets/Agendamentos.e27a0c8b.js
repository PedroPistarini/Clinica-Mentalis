import{o,c as h,w as i,a as t,b as u,d as a,e as r,r as d,F as c,t as n,f as _,u as m,I as p}from"./app.b0e4f965.js";import{_ as g}from"./AuthenticatedLayout.ad6c13be.js";import"./ApplicationLogo.fcf73d97.js";import"./_plugin-vue_export-helper.cdc0426e.js";const y={class:"font-semibold text-xl text-gray-800 leading-tight"},f={key:0,href:"/agendamentos/agenda",class:"nav-button ml-4",style:{float:"right"}},A={class:"container"},k=t("h2",{class:"items-center justify-center titulo-secao"},"Agendamentos Passados",-1),b={class:"tabela"},N=t("th",null,"Nome Paciente",-1),$=t("th",null,"Nome Psicologo",-1),v=t("th",null,"Data",-1),P=t("th",null,"Hor\xE1rio",-1),V={key:0},B={key:0},x=t("div",{class:"separador"},null,-1),D=t("h2",{class:"titulo-secao"},"Agendamentos Futuros",-1),F={class:"tabela"},w=t("th",null,"Nome Paciente",-1),C=t("th",null,"Nome Psicologo",-1),E=t("th",null,"Data",-1),H=t("th",null,"Hor\xE1rio",-1),I={key:0},L={key:0},z={__name:"Agendamentos",props:{agendamentos_futuros:Array,agendamentos_passados:Array,psicologos:Array,pacientes:Array,users:Array},setup(s){return(l,j)=>(o(),h(g,null,{header:i(()=>[t("h2",y,[u(" Agendamentos "),l.$page.props.auth.user.permissao===0?(o(),a("a",f,"Agendar")):r("",!0)])]),default:i(()=>[t("div",A,[k,t("table",b,[t("thead",null,[t("tr",null,[N,$,v,P,l.$page.props.auth.user.permissao===1?(o(),a("th",V,"Anota\xE7\xE3o")):r("",!0)])]),t("tbody",null,[(o(!0),a(c,null,d(s.agendamentos_passados,e=>(o(),a("tr",{key:e.id},[t("td",null,n(s.users[s.pacientes[e.paciente_id-1].user_id-1].name),1),t("td",null,n(s.users[s.psicologos[e.psicologo_id-1].user_id-1].name),1),t("td",null,n(e.data),1),t("td",null,n(e.hora),1),l.$page.props.auth.user.permissao===1?(o(),a("td",B,n(e.anotacao),1)):r("",!0)]))),128))])]),x,D,t("table",F,[t("thead",null,[t("tr",null,[w,C,E,H,l.$page.props.auth.user.permissao===1?(o(),a("th",I,"Anota\xE7\xE3o")):r("",!0)])]),t("tbody",null,[(o(!0),a(c,null,d(s.agendamentos_futuros,e=>(o(),a("tr",{key:e.id},[t("td",null,n(s.users[s.pacientes[e.paciente_id-1].user_id-1].name),1),t("td",null,n(s.users[s.psicologos[e.psicologo_id-1].user_id-1].name),1),t("td",null,n(e.data),1),t("td",null,n(e.hora),1),l.$page.props.auth.user.permissao===1?(o(),a("td",L,[_(m(p),{href:`/anotacao/${e.id}`},{default:i(()=>[u("VER")]),_:2},1032,["href"])])):r("",!0)]))),128))])])])]),_:1}))}};export{z as default};
