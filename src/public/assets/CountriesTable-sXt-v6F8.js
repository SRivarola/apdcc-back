import{r as l,j as e,s as j,N as g,a as y,b as f,m as w,d as N,i as _,A as C,a5 as O}from"./index-mbCZtTUr.js";import{c as T}from"./chunk-OFH6WYRQ-_V9BFou5.js";import{u as v}from"./index.esm-IhMd47gu.js";import{m as S}from"./chunk-3S23ARPO-P2mz04ER.js";import{m as P}from"./chunk-EPDLEVDR-jqoi4nHe.js";import{m as k}from"./chunk-QY5NICTW-WAmmRIdi.js";import{P as F}from"./pen-square-QVIYUW54.js";import{F as $}from"./Filters-RnQvgvIE.js";import{d as L}from"./index-kasD6OSC.js";import{t as M,a as A,b as R,c as q,d as I,e as V}from"./chunk-YRZGWF2W-0PKtR4sA.js";import{p as z}from"./chunk-BIN3WWJN-OtNTI9Wo.js";import{g as D}from"./chunk-KARN4QIT-EsYOr2XJ.js";import"./search-Lc988XRk.js";import"./chunk-ZFWMN6TD-Ku-jY9ZS.js";import"./chunk-7F3ZLNJ6-zDwKUmcG.js";import"./chunk-MA2FG3JE-k8-uT5NW.js";import"./chunk-AMSULWPV-2PsRSNrO.js";function J({id:p}){const[c,d]=l.useState(!0),[s,n]=l.useState(null);return l.useEffect(()=>{(async()=>{try{const r=await fetch(`https://apdcc-back-production.up.railway.app/api/auth/bycountry/${p}`,{method:"GET",credentials:"include"});if(r.ok){const i=await r.json();n(i)}}catch(r){console.error(r)}finally{d(!1)}})()},[]),c?e.jsx(j,{}):s?e.jsxs("p",{children:[s.first_name," ",s.last_name]}):e.jsx(T,{color:"warning",variant:"flat",children:"No asignado"})}function U(){const{setRefresh:p}=g(),{isOpen:c,onOpen:d,onOpenChange:s}=y(),{register:n,handleSubmit:u,formState:{errors:r}}=v({defaultValues:{name:""}}),i=async o=>{C.promise(async()=>{try{if((await fetch("https://apdcc-back-production.up.railway.app/api/countries/create",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)return p(),"Country creado con éxito 😀";throw new Error("Oops, algo salió mal 😕")}catch(a){throw new Error("Error al procesar la solicitud: "+a.message)}},{loading:"Loading...",success:a=>a,error:a=>a.message})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{onPress:d,variant:"faded",color:"default",className:"mb-3",radius:"sm",children:"Nuevo Country"}),e.jsx(w,{isOpen:c,onOpenChange:s,className:"border dark text-foreground border-default-400",children:e.jsx(N,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"flex flex-col gap-1",children:"Crear Nuevo Country"}),e.jsx(P,{children:e.jsx(_,{placeholder:"Ingrese el nombre",variant:"underlined",label:"Nombre",isRequired:!0,...n("name")})}),e.jsx(k,{children:e.jsx(f,{className:"uppercase font-semibold bg-primary/60 hover:bg-primary",type:"submit",radius:"sm",onPress:()=>{u(i)(),o()},children:"Crear"})})]})})})]})}function B({id:p}){const{setRefresh:c}=g(),{isOpen:d,onOpen:s,onOpenChange:n}=y(),{register:u,handleSubmit:r}=v({defaultValues:{name:""}}),i=async o=>{C.promise(async()=>{try{if((await fetch(`https://apdcc-back-production.up.railway.app/api/countries/${p}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)return c(),"¡Country editado con éxito! 😄";throw new Error("Oops, algo salió mal 😕")}catch(a){throw new Error("Error al procesar la solicitud: "+a.message)}},{loading:"Loading...",success:a=>a,error:a=>a.message})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{isIconOnly:!0,onPress:s,color:"default",size:"sm",className:"bg-default/50 text-default-400 hover:text-white",children:e.jsx(F,{size:18})}),e.jsx(w,{isOpen:d,onOpenChange:n,className:"border dark text-foreground border-default-400",children:e.jsx(N,{children:o=>e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"flex flex-col gap-1 uppercase",children:"⚠️ Advertencia"}),e.jsxs(P,{children:[e.jsx("div",{children:"Esta acción es permanente y no se puede deshacer."}),e.jsx(_,{placeholder:"Nuevo nombre",label:"Nombre",isRequired:!0,variant:"underlined",...u("name")})]}),e.jsx(k,{children:e.jsx(f,{className:"uppercase font-semibold bg-primary/60 hover:bg-primary",variant:"solid",radius:"sm",onPress:()=>{r(i)(),o()},children:"Editar"})})]})})})]})}const G=[{label:"country",key:"name"},{label:"manager",key:"manager"},{label:"acciones",key:"actions"}],h={docs:[],totalDocs:0,limit:10,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:null,nextPage:null},H=function(){const{refresh:c,isHiddenTopBar:d}=g(),[s,n]=l.useState(h),[u,r]=l.useState(!0),[i,o]=l.useState(1),[a,x]=l.useState({name:""}),b=async()=>{const t=await O(i,a);if(t.ok){const m=await t.json();n(m.response)}r(!1)};l.useEffect(()=>{o(1),n(h),b()},[a,c]),l.useEffect(()=>{n(h),b()},[i]);const E=L(t=>{x({...a,name:t.target.value.toLowerCase()})},200);return e.jsxs("section",{className:` ${d?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16 lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between w-full gap-4 pb-4 ",children:[e.jsx(U,{}),e.jsx($,{setQueries:x,inputSearch:!0,handleInputSearch:E})]}),e.jsxs("div",{className:"flex items-center justify-between px-3",children:[e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Total ",s.totalDocs," countries"]}),e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Página ",s.page]})]}),e.jsxs(M,{"aria-label":"Users Table",bottomContent:s.page>0?e.jsx("div",{className:`${s.docs?"opacity-100":"opacity-0"} flex items-center justify-center w-full gap-4`,children:e.jsx(z,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:s.page,total:s.totalPages,onChange:t=>{r(!0),o(t)}})}):null,children:[e.jsx(A,{columns:G,children:t=>e.jsx(R,{className:"uppercase",allowsSorting:t.key!=="country"&&t.key!=="actions",children:t.label},t.key)}),e.jsx(q,{emptyContent:u?" ":s.docs.length===0?"No se encontraron countries":"",items:s.docs,isLoading:u,loadingContent:e.jsx(j,{className:"mt-12",label:"Loading..."}),children:t=>e.jsx(I,{children:m=>e.jsxs(V,{className:"capitalize",children:[m==="manager"&&e.jsx(J,{id:t._id}),m==="actions"?e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(B,{id:t._id})}):D(t,m)]})},t.name)})]})]})},ue=H;export{ue as default};