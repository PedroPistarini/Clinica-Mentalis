import{A as c,o as f,c as w,w as n,f as o,u as e,a as t,b as _,n as V,m as g,H as b}from"./app.fe2514dc.js";import{_ as k}from"./GuestLayout.6732b7b6.js";import{_ as l,a as m}from"./InputError.bd334212.js";import{_ as v}from"./PrimaryButton.22dd7816.js";import{_ as i}from"./TextInput.d05d359b.js";import"./ApplicationLogo.02a0e2a0.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x={class:"mt-4"},y={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},F={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return($,a)=>(f(),w(k,null,{default:n(()=>[o(e(b),{title:"Reset Password"}),t("form",{onSubmit:g(u,["prevent"])},[t("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",x,[o(l,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",y,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",P,[o(v,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[_(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{F as default};
