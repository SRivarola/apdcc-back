import{O as j,a1 as t,a4 as w,r as l,bf as y,Z as N,j as e,bg as v,X as c,P as k,Q as E,a2 as S}from"./index-kktxaFPp.js";import{U as C,E as L,a as z}from"./user-__PRf2n1.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=j("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),O=t.object({mail:t.string().email({message:"Por favor, ingresa una dirección de correo electrónico válida"}),password:t.string().min(8,{message:"La contraseña debe contener al menos 8 caracteres"})}),M="https://apdcc-back-production.up.railway.app/api/auth/login";function R(){var r,i;const d=w(),[a,m]=l.useState(!1),{setAuthChange:u}=l.useContext(y),x=()=>m(!a),{register:o,handleSubmit:p,formState:{errors:n}}=N({defaultValues:{mail:"",password:""},resolver:S(O)}),g=async f=>{E.promise(async()=>{try{const s=await fetch(M,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(s.ok){const h=await s.json();return u(b=>!b),localStorage.setItem("apdcc_token",h.token),d("/dashboard"),"¡Inicio de sesión exitoso! 😄 ¡Bienvenid@!"}else throw new Error("Oops, algo salió mal en el inicio de sesión. 😕")}catch(s){throw console.log(s),s}},{loading:"Loading...",success:s=>s,error:s=>s.message})};return e.jsxs("section",{className:"flex items-center justify-center min-h-screen px-3 pb-3 bg-black",children:[e.jsx(v,{}),e.jsxs("div",{className:"max-w-xs p-10 m-auto rounded-xl xl:max-w-lg bg-white/10",children:[e.jsxs("h1",{className:"flex items-center justify-center gap-1 pb-2 text-2xl font-medium text-center md:text-4xl md:gap-2",children:[e.jsx(C,{className:"w-6 h-6 md:w-9 md:h-9"}),"Login"]}),e.jsxs("form",{className:"flex flex-col items-center justify-center gap-3 ",onSubmit:p(g),children:[e.jsx(c,{type:"email",id:"mail",isRequired:!0,size:"lg",label:"Email",variant:"underlined",placeholder:"ejemplo@ejemplo.com",className:"max-w-xs",color:"default",errorMessage:(r=n.mail)==null?void 0:r.message,endContent:e.jsx(I,{className:"text-default-400 ",size:22}),...o("mail")}),e.jsx(c,{label:"Password",id:"password",isRequired:!0,size:"lg",variant:"underlined",placeholder:"Enter your password",color:"default",errorMessage:(i=n.password)==null?void 0:i.message,endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:x,children:a?e.jsx(L,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(z,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),type:a?"text":"password",className:"max-w-xs ",...o("password")}),e.jsx(k,{className:"w-full mt-2 uppercase font-semibold",type:"submit",variant:"solid",radius:"sm",color:"default",children:"Login"})]})]})]})}export{R as default};