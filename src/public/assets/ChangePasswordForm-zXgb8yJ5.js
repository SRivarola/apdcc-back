import{r as l,u as S,j as e,i as d,b as E,A as L}from"./index-3KicDlp5.js";import{u as k}from"./index.esm-1leBI28z.js";import{z as a,t as I}from"./index-oLTKutLD.js";import{E as c,a as m}from"./eye-X0xYNSqB.js";const R=a.object({oldPassword:a.string().min(8,{message:"La contraseña debe tener al menos 8 caracteres"}),newPassword:a.string().min(8,{message:"La contraseña debe tener al menos 8 caracteres"}),confirmPassword:a.string().min(8,{message:"La contraseña debe tener al menos 8 caracteres"})}).refine(s=>s.newPassword===s.confirmPassword,{message:"Las contraseñas no coinciden",path:["confirmPassword"]}).refine(s=>s.newPassword!==s.oldPassword,{message:"La nueva contraseña debe ser diferente a la anterior",path:["newPassword"]});function F(){var u,x,f;const[s,w]=l.useState(!1),[o,p]=l.useState(!1),[n,b]=l.useState(!1),g=S(),h=()=>w(!s),P=()=>p(!o),j=()=>b(!n),{register:r,handleSubmit:y,formState:{errors:i},reset:v}=k({defaultValues:{oldPassword:"",newPassword:"",confirmPassword:""},resolver:I(R)}),C=async N=>{const{oldPassword:z,newPassword:V}=N;L.promise(async()=>{try{if((await fetch("149.50.137.116:8080/api/auth/pass",{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:z,newPass:V})})).ok)return v(),g("/dashboard"),"¡Contraseña cambiada con éxito! 😄";throw new Error("Oops, algo salió mal en el cambio de contraseña. 😕")}catch(t){throw console.log(t),t}},{loading:"Loading...",success:t=>t,error:t=>t.message})};return e.jsx("section",{className:"flex items-center justify-center h-screen",children:e.jsxs("div",{className:"flex flex-col items-center justify-center max-w-xs p-10 m-auto rounded-xl xl:max-w-lg bg-white/10",children:[e.jsx("h1",{className:"pb-5 text-xl font-medium text-center md:text-2xl",children:"Cambiar Contraseña"}),e.jsxs("form",{onSubmit:y(C),children:[e.jsx(d,{type:s?"text":"password",id:"oldPassword",isRequired:!0,size:"lg",label:"Antigua Contraseña",variant:"underlined",placeholder:"pepe123",color:"default",endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:h,children:s?e.jsx(c,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(m,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),errorMessage:(u=i.oldPassword)==null?void 0:u.message,...r("oldPassword")}),e.jsx(d,{type:o?"text":"password",id:"newPassword",isRequired:!0,size:"lg",label:"Nueva Contraseña",variant:"underlined",placeholder:"juarez123",color:"default",endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:P,children:o?e.jsx(c,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(m,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),errorMessage:(x=i.newPassword)==null?void 0:x.message,...r("newPassword")}),e.jsx(d,{type:n?"text":"password",id:"confirmPassword",isRequired:!0,size:"lg",label:"Confirmar Contraseña",variant:"underlined",placeholder:"juarez123",color:"default",endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:j,children:n?e.jsx(c,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(m,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),errorMessage:(f=i.confirmPassword)==null?void 0:f.message,...r("confirmPassword")}),e.jsx(E,{type:"submit",radius:"sm",className:"w-full mt-2",variant:"solid",color:"default",children:"Cambiar"})]})]})})}export{F as default};