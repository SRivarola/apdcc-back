import{r as c,j as e,N as S,i as m,b as _,A as M,a as I,m as A,d as O,s as H,a9 as Q,ag as Y}from"./index-xmZz_dVr.js";import{z as w,t as W}from"./index-AtPXUekY.js";import{u as D}from"./index.esm-R5rBk-NY.js";import{s as J,l as P}from"./chunk-ZFWMN6TD-wqb0LABK.js";import{E as R,a as k}from"./eye-KYYhBrIX.js";import{U as X}from"./user-eo7phxL2.js";import{m as U}from"./chunk-3S23ARPO-cfJSPSJa.js";import{m as q}from"./chunk-EPDLEVDR-7rauohJS.js";import{T as K}from"./trash-2-2vtp-LkH.js";import{c as ee}from"./chunk-OFH6WYRQ-oOL0Muza.js";import{m as G}from"./chunk-QY5NICTW-wxar1i8N.js";import{F as se}from"./Filters-PqELCZib.js";import{P as ae}from"./pen-square-UjWlbLkS.js";import{t as re,a as te,b as le,c as ne,d as oe,e as ie}from"./chunk-YRZGWF2W-kSKG_PJ6.js";import{p as ce}from"./chunk-BIN3WWJN-bgKj0ua9.js";import{g as de}from"./chunk-KARN4QIT-8m4O0ZXZ.js";import"./chunk-7F3ZLNJ6-MN3Xv0Pm.js";import"./search-EfDpDDQb.js";import"./chunk-AMSULWPV-17NHkr1C.js";const me=w.object({mail:w.string().email({message:"Por favor, ingresa una dirección de correo electrónico válida"}),phone:w.string().min(8,{message:"Por favor, ingresa un número de telefono válido"}),first_name:w.string().min(3,{message:"El nombre debe tener al menos 3 caracteres"}),last_name:w.string().min(3,{message:"El apellido debe tener al menos 3 caracteres"}),password:w.string().min(8,{message:"La contraseña debe contener al menos 8 caracteres"}),confirmPassword:w.string().min(8,{message:"La contraseña de confirmación debe contener al menos 8 caracteres"}),role:w.string(),country_id:w.string().optional()}).refine(l=>l.confirmPassword===l.password,{message:"Las contraseñas no coinciden",path:["confirmPassword"]});function Z({register:l,isManagerSelected:t}){const[g,d]=c.useState([]);return c.useEffect(()=>{(async()=>{try{const n=await fetch("149.50.137.116:8080/api/countries/all");if(n.ok){const u=await n.json();d(u.response)}}catch(n){throw new Error(n)}})()},[]),e.jsx(J,{className:"max-w-xs dark text-foreground ",...t?{isRequired:!0}:{},label:"Countries",size:"sm",variant:"underlined",color:"default",...l("country_id"),children:g.map(a=>e.jsx(P,{variant:"flat",className:"uppercase",value:a._id,children:a.name},a._id))})}function B({register:l,setIsManagerSelected:t}){return e.jsxs(J,{isRequired:!0,id:"role",label:"Rol",size:"sm",variant:"underlined",...l("role"),children:[e.jsx(P,{id:"ADMIN",startContent:e.jsx("img",{className:"w-6 h-6 p-1 uppercase bg-black rounded-full",src:"/admin.svg",alt:"icono de admin"}),className:"uppercase",onClick:()=>t(!1),children:"Admin"},"ADMIN"),e.jsx(P,{id:"MANAGER",startContent:e.jsx("img",{className:"w-6 h-6 p-1 uppercase bg-black rounded-full ",src:"/arbitro.svg",alt:"icono de admin"}),className:"uppercase",onClick:()=>t(!0),children:"Coordinador"},"MANAGER"),e.jsx(P,{id:"JUEZ",startContent:e.jsx("img",{className:"w-6 h-6 p-1 uppercase bg-black rounded-full",src:"/manager.svg",alt:"icono de admin"}),className:"uppercase",onClick:()=>t(!1),children:"Árbitro"},"JUEZ")]})}function ue(){var i,b,p,E,j,z;const{setRefresh:l}=S(),[t,g]=c.useState(!1),[d,a]=c.useState(!1),[n,u]=c.useState(!1),y=()=>g(!t),r=()=>a(!d),{register:o,handleSubmit:v,formState:{errors:f},reset:C}=D({defaultValues:{mail:"",phone:0,first_name:"",last_name:"",password:"",confirmPassword:"",role:""},resolver:W(me)}),s=async N=>{N.last_name=N.last_name.toLowerCase();const x={...N,phone:Number(N.phone)};M.promise(async()=>{try{if((await fetch("149.50.137.116:8080/api/auth/register",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})).ok)return l(),C(),"¡Registro Exitoso! 😄 ¡Bienvenid@!";throw new Error("Oops, algo salió mal en el registro. 😕")}catch(h){throw console.log(h),h}},{loading:"Loading...",success:h=>h,error:h=>h.message})};return e.jsxs("form",{className:"flex flex-col items-center justify-center gap-3 ",onSubmit:v(s),children:[e.jsxs("div",{className:"flex flex-col w-full gap-4 md:flex-row",children:[e.jsx(m,{label:"Email",id:"mail",isRequired:!0,type:"email",size:"lg",placeholder:"ejemplo",variant:"underlined",color:"default",isInvalid:!1,errorMessage:(i=f.mail)==null?void 0:i.message,...o("mail")}),e.jsx(m,{label:"Telefono",id:"phone",type:"number",size:"lg",placeholder:"1131474847",variant:"underlined",color:"default",isInvalid:!1,errorMessage:(b=f.phone)==null?void 0:b.message,...o("phone")})]}),e.jsxs("div",{className:"flex flex-col w-full gap-4 md:flex-row",children:[e.jsx(m,{type:"text",id:"first_name",isRequired:!0,size:"lg",label:"Nombre",variant:"underlined",placeholder:"Juan",className:"max-w-xs",color:"default",isInvalid:!1,errorMessage:(p=f.first_name)==null?void 0:p.message,...o("first_name")}),e.jsx(m,{type:"text",id:"last_name",isRequired:!0,size:"lg",label:"Apellido",variant:"underlined",placeholder:"Perez",className:"max-w-xs",color:"default",isInvalid:!1,errorMessage:(E=f.last_name)==null?void 0:E.message,...o("last_name")})]}),e.jsxs("div",{className:"flex flex-col order-3 w-full gap-4 md:flex-row",children:[e.jsx(m,{label:"Contraseña",id:"password",isRequired:!0,size:"lg",variant:"underlined",placeholder:"Ingrese su contraseña",color:"default",isInvalid:!1,errorMessage:(j=f.password)==null?void 0:j.message,endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:y,children:t?e.jsx(R,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(k,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),type:t?"text":"password",className:"max-w-xs ",...o("password")}),e.jsx(m,{label:"Repetir contraseña",id:"confirmPassword",isRequired:!0,size:"lg",variant:"underlined",placeholder:"Repita su contraseña",color:"default",isInvalid:!1,errorMessage:(z=f.confirmPassword)==null?void 0:z.message,endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:r,children:d?e.jsx(R,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(k,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),type:d?"text":"password",className:"max-w-xs",...o("confirmPassword")})]}),e.jsxs("div",{className:"flex flex-col order-first w-full gap-4 md:flex-row",children:[e.jsx(B,{register:o,setIsManagerSelected:u}),n&&e.jsx(Z,{register:o,isManagerSelected:n})]}),e.jsx(_,{type:"submit",className:"order-last w-full mt-2 font-semibold uppercase bg-primary/60 hover:bg-primary",variant:"solid",radius:"sm",children:"Registrar"})]})}function fe(){const{isOpen:l,onOpen:t,onOpenChange:g}=I();return e.jsxs(e.Fragment,{children:[e.jsx(_,{onPress:t,variant:"faded",color:"default",className:"mb-3",radius:"sm",children:"Nuevo Usuario"}),e.jsx(A,{isOpen:l,onOpenChange:g,size:"2xl",backdrop:"blur",className:"border dark text-foreground border-default-400",children:e.jsx(O,{children:d=>e.jsxs(e.Fragment,{children:[e.jsxs(U,{className:"flex items-start gap-1",children:[e.jsx(X,{size:22}),"Registrar nuevo usuario"]}),e.jsx(q,{className:"pb-10",children:e.jsx(ue,{})})]})})})]})}function pe({id:l,role:t,name:g}){const{setRefresh:d}=S(),{isOpen:a,onOpen:n,onOpenChange:u}=I(),y=async()=>{M.promise(async()=>{try{if((await fetch(`149.50.137.116:8080/api/auth/${l}`,{method:"DELETE",credentials:"include"})).ok)return d(),"¡Usuario eliminado con éxito! 😄";throw new Error("Oops, algo salió mal 😕")}catch(r){throw new Error("Error al procesar la solicitud: "+r.message)}},{loading:"Loading...",success:r=>r,error:r=>r.message})};return e.jsxs(e.Fragment,{children:[e.jsx(_,{isIconOnly:!0,onPress:n,color:"danger",size:"sm",className:"transition-all bg-danger/40 hover:bg-danger duration-350",children:e.jsx(K,{size:18})}),e.jsx(A,{size:"xl",isOpen:a,onOpenChange:u,className:"border dark text-foreground border-default-400",children:e.jsx(O,{children:r=>e.jsxs(e.Fragment,{children:[e.jsx(U,{className:"flex flex-col gap-1 uppercase",children:"⚠️ Advertencia"}),e.jsx(q,{children:e.jsxs("div",{children:["Está a punto de eliminar un ",e.jsx(ee,{children:t})," (",g,"). Esta acción es permanente y no se puede deshacer. ¿Está seguro de que desea continuar?"]})}),e.jsx(G,{children:e.jsx(_,{className:"font-semibold uppercase rounded-md bg-danger/50 hover:bg-danger",onPress:()=>{y(),r()},children:"Eliminar"})})]})})})]})}function xe({id:l,role:t,name:g,state:d}){const{setRefresh:a}=S(),{isOpen:n,onOpen:u,onOpenChange:y}=I(),[r,o]=c.useState(!1),[v,f]=c.useState(!1),[C,s]=c.useState(!1),i=()=>o(!r),b=()=>f(!v),{register:p,handleSubmit:E,formState:{errors:j}}=D({defaultValues:{first_name:""}}),z=async N=>{M.promise(async()=>{try{if((await fetch(`149.50.137.116:8080/api/auth/${l}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).ok)return a(),"¡Usuario editado con éxito! 😄";throw new Error("Oops, algo salió mal 😕")}catch(x){throw new Error("Error al procesar la solicitud: "+x.message)}},{loading:"Loading...",success:x=>x,error:x=>x.message})};return e.jsxs(e.Fragment,{children:[e.jsx(_,{isIconOnly:!0,onPress:u,color:"default",size:"sm",className:`${d==="READY"?"opacity-0 cursor-default pointer-events-none":"opacity-100"} bg-default/50 text-default-400 hover:text-white`,children:e.jsx(ae,{size:18})}),e.jsx(A,{size:"2xl",isOpen:n,onOpenChange:y,className:"border dark text-foreground border-default-400",children:e.jsx(O,{children:N=>{var x,h,T,V,$,F;return e.jsxs(e.Fragment,{children:[e.jsx(U,{className:"flex flex-col gap-1 uppercase",children:"⚠️ Advertencia"}),e.jsxs(q,{children:[e.jsx("p",{children:"Esta acción es permanente y no se puede deshacer."}),e.jsxs("form",{className:"flex flex-col items-center justify-center gap-3 ",children:[e.jsxs("div",{className:"flex flex-col w-full gap-4 md:flex-row",children:[e.jsx(m,{label:"Email",id:"mail",isRequired:!0,type:"email",size:"lg",placeholder:"ejemplo",variant:"underlined",color:"default",isInvalid:!1,errorMessage:(x=j.mail)==null?void 0:x.message,...p("mail")}),e.jsx(m,{label:"Telefono",id:"phone",isRequired:!0,type:"number",size:"lg",placeholder:"1131474847",variant:"underlined",color:"default",isInvalid:!1,errorMessage:(h=j.phone)==null?void 0:h.message,...p("phone")})]}),e.jsxs("div",{className:"flex flex-col w-full gap-4 md:flex-row",children:[e.jsx(m,{type:"text",id:"first_name",isRequired:!0,size:"lg",label:"Nombre",variant:"underlined",placeholder:"Juan",className:"max-w-xs",color:"default",isInvalid:!1,errorMessage:(T=j.first_name)==null?void 0:T.message,...p("first_name")}),e.jsx(m,{type:"text",id:"last_name",isRequired:!0,size:"lg",label:"Apellido",variant:"underlined",placeholder:"Perez",className:"max-w-xs",color:"default",isInvalid:!1,errorMessage:(V=j.last_name)==null?void 0:V.message,...p("last_name")})]}),e.jsxs("div",{className:"flex flex-col order-3 w-full gap-4 md:flex-row",children:[e.jsx(m,{label:"Contraseña",id:"password",isRequired:!0,size:"lg",variant:"underlined",placeholder:"Ingrese su contraseña",color:"default",isInvalid:!1,errorMessage:($=j.password)==null?void 0:$.message,endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:i,children:r?e.jsx(R,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(k,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),type:r?"text":"password",className:"max-w-xs ",...p("password")}),e.jsx(m,{label:"Repetir contraseña",id:"confirmPassword",isRequired:!0,size:"lg",variant:"underlined",placeholder:"Repita su contraseña",color:"default",isInvalid:!1,errorMessage:(F=j.confirmPassword)==null?void 0:F.message,endContent:e.jsx("button",{className:"focus:outline-none",type:"button",onClick:b,children:v?e.jsx(R,{size:22,className:"text-2xl pointer-events-none text-default-400"}):e.jsx(k,{size:22,className:"text-2xl pointer-events-none text-default-400"})}),type:v?"text":"password",className:"max-w-xs",...p("confirmPassword")})]}),e.jsxs("div",{className:"flex flex-col order-first w-full gap-4 md:flex-row",children:[e.jsx(B,{register:p,setIsManagerSelected:s}),e.jsx(Z,{register:p})]})]})]}),e.jsx(G,{children:e.jsx(_,{variant:"solid",radius:"sm",className:"font-semibold uppercase bg-primary/60 hover:bg-primary",onPress:()=>{E(z)(),N()},children:"Editar"})})]})}})})]})}const ge=[{label:"nombre",key:"name"},{label:"función",key:"role"},{label:"country",key:"country"},{label:"telefono",key:"phone"},{label:"email",key:"mail"},{label:"acciones",key:"actions"}],L={docs:[],totalDocs:0,limit:10,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:null,nextPage:null},he=function(){const{refresh:t,isHiddenTopBar:g,setRefresh:d}=S(),[a,n]=c.useState(L),[u,y]=c.useState({category_id:{name:""}}),[r,o]=c.useState(!0),[v,f]=c.useState(1);c.useEffect(()=>{n(L),(async()=>{const i=await Y(v,u);if(i.ok){const b=await i.json();n(b.response)}setTimeout(()=>{o(!1)},200)})()},[v,t]),c.useEffect(()=>{o(!0),f(1),d()},[u]);function C(s){return s.charAt(0).toUpperCase()+s.slice(1)}return e.jsxs("section",{className:` ${g?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16 lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between w-full gap-4 pb-4 ",children:[e.jsx(fe,{}),e.jsx(se,{setQueries:y,queries:u,countriesFilter:!0})]}),e.jsxs("div",{className:"flex items-center justify-between px-3",children:[e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Total ",a.totalDocs," usuarios"]}),e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Página ",a.page]})]}),e.jsxs(re,{"aria-label":"Users Table",bottomContent:a.page>0?e.jsx("div",{className:`${a.docs?"opacity-100":"opacity-0"} flex items-center justify-center w-full gap-4`,children:e.jsx(ce,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:a.page,total:a.totalPages,onChange:s=>{o(!0),f(s)}})}):null,children:[e.jsx(te,{columns:ge,children:s=>e.jsx(le,{className:"uppercase",allowsSorting:s.key!=="country"&&s.key!=="actions",children:s.label},s.key)}),e.jsx(ne,{emptyContent:r?" ":a.docs.length===0?"No se encontraron usuarios":"",items:a.docs,isLoading:r,loadingContent:e.jsx(H,{className:"mt-12",label:"Loading..."}),children:s=>e.jsx(oe,{children:i=>{var b;return e.jsx(ie,{children:i==="name"?e.jsx(Q,{avatarProps:{size:"sm",className:"p-2",radius:"sm",src:s.role==="ADMIN"?"/admin.svg":s.role==="MANAGER"?"/manager.svg":"/arbitro.svg"},name:`${C(s.last_name)} ${C(s.first_name)}`}):i==="role"?e.jsx("p",{className:"capitalize",children:s.role==="JUEZ"?"Árbitro":s.role==="MANAGER"?"Coordinador":s.role.toLowerCase()}):i==="actions"?e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(xe,{id:s._id,role:s.role,name:`${s.first_name} ${s.last_name}`}),e.jsx(pe,{id:s._id,role:s.role,name:`${s.first_name} ${s.last_name}`})]}):i==="country"?e.jsx("p",{children:(b=s.country_id)!=null&&b.name?s.country_id.name.toLowerCase():"-"}):i==="phone"?e.jsx("p",{children:s.phone?s.phone:"-"}):de(s,i)})}},s._id)})]})]})},qe=he;export{qe as default};