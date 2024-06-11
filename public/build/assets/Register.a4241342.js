import{A as x,o as f,c as $,w as _,d as w,f as o,u as s,a as t,l as g,p as v,b as p,n as U,m as h,e as V,H as C,L as E,y as P,z as q}from"./app.fe2514dc.js";import{_ as R}from"./GuestLayout.6732b7b6.js";import{_ as r,a as n}from"./InputError.bd334212.js";import{_ as B}from"./PrimaryButton.22dd7816.js";import{_ as d}from"./TextInput.d05d359b.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.02a0e2a0.js";const b=i=>(P("data-v-d5b2630c"),i=i(),q(),i),I={key:0},S={class:"mt-4"},j={class:"mt-4"},F={class:"mt-4"},z={class:"flex items-center justify-end mt-4"},A={key:1,class:"page"},D=b(()=>t("div",{class:"message"},"Voc\xEA n\xE3o tem acesso",-1)),H=b(()=>t("a",{href:"/dashboard",class:"nav-button ml-4"},"Voltar",-1)),L=[D,H],M={__name:"Register",setup(i){const e=x({permissao:"",name:"",email:"",endereco:"",telefone:"",cep:"",password:"",password_confirmation:"",terms:!1}),y=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};function u(){e.endereco=""}async function k(){const m=e.cep.replace(/\D/g,"");if(m!=="")if(/^[0-9]{8}$/.test(m)){e.endereco="...";try{const c=await(await fetch(`https://viacep.com.br/ws/${m}/json/`)).json();"erro"in c?(u(),alert("CEP n\xE3o encontrado.")):e.endereco=`${c.logradouro}, ${c.localidade}`}catch{u(),alert("Erro ao buscar CEP.")}}else u(),alert("Formato de CEP inv\xE1lido.");else u()}return(m,a)=>(f(),$(R,null,{default:_(()=>[m.$page.props.auth.user.permissao===2?(f(),w("div",I,[o(s(C),{title:"Register"}),t("form",{onSubmit:h(y,["prevent"])},[t("div",null,[o(r,{for:"permissao"}),t("div",null,[t("label",null,[g(t("input",{type:"radio",id:"permissao",name:"permissao",value:"0","onUpdate:modelValue":a[0]||(a[0]=l=>s(e).permissao=l)},null,512),[[v,s(e).permissao]]),p(" Paciente ")]),t("label",null,[g(t("input",{type:"radio",id:"permissao",name:"permissao",value:"1","onUpdate:modelValue":a[1]||(a[1]=l=>s(e).permissao=l)},null,512),[[v,s(e).permissao]]),p(" Psicologo ")])]),o(n,{class:"mt-2",message:s(e).errors.permissao},null,8,["message"])]),t("div",null,[o(r,{for:"name",value:"Name"}),o(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",null,[o(r,{for:"cep",value:"CEP"}),o(d,{id:"cep",modelValue:s(e).cep,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).cep=l),onBlur:k,type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.cep,class:"mt-2"},null,8,["message"])]),t("div",null,[o(r,{for:"endereco",value:"Endere\xE7o"}),o(d,{id:"endereco",modelValue:s(e).endereco,"onUpdate:modelValue":a[4]||(a[4]=l=>s(e).endereco=l),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.endereco,class:"mt-2"},null,8,["message"])]),t("div",null,[o(r,{for:"telefone",value:"telefone"}),o(d,{id:"telefone",type:"text",class:"mt-1 block w-full",modelValue:s(e).telefone,"onUpdate:modelValue":a[5]||(a[5]=l=>s(e).telefone=l),required:"",autocomplete:"telefone"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.telefone},null,8,["message"])]),t("div",S,[o(r,{for:"email",value:"Email"}),o(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[6]||(a[6]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",j,[o(r,{for:"password",value:"Password"}),o(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[7]||(a[7]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",F,[o(r,{for:"password_confirmation",value:"Confirm Password"}),o(d,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[8]||(a[8]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",z,[o(s(E),{href:m.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:_(()=>[p(" Already registered? ")]),_:1},8,["href"]),o(B,{class:U(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:_(()=>[p(" Register ")]),_:1},8,["class","disabled"])])],32)])):V("",!0),m.$page.props.auth.user.permissao!==2?(f(),w("div",A,L)):V("",!0)]),_:1}))}},X=N(M,[["__scopeId","data-v-d5b2630c"]]);export{X as default};
