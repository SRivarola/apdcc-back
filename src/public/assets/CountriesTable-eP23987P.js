import{r as l,j as e,s as j,N as g,a as y,b as f,m as w,d as N,i as _,A as C,a8 as O}from"./index-xmZz_dVr.js";import{c as T}from"./chunk-OFH6WYRQ-oOL0Muza.js";import{u as v}from"./index.esm-R5rBk-NY.js";import{m as S}from"./chunk-3S23ARPO-cfJSPSJa.js";import{m as P}from"./chunk-EPDLEVDR-7rauohJS.js";import{m as E}from"./chunk-QY5NICTW-wxar1i8N.js";import{P as F}from"./pen-square-UjWlbLkS.js";import{F as L}from"./Filters-PqELCZib.js";import{d as $}from"./index-S2J8Ch--.js";import{t as M,a as A,b as R,c as q,d as I,e as V}from"./chunk-YRZGWF2W-kSKG_PJ6.js";import{p as z}from"./chunk-BIN3WWJN-bgKj0ua9.js";import{g as D}from"./chunk-KARN4QIT-8m4O0ZXZ.js";import"./search-EfDpDDQb.js";import"./chunk-ZFWMN6TD-wqb0LABK.js";import"./chunk-7F3ZLNJ6-MN3Xv0Pm.js";import"./chunk-AMSULWPV-17NHkr1C.js";function J({id:m}){const[c,d]=l.useState(!0),[s,o]=l.useState(null);return l.useEffect(()=>{(async()=>{try{const n=await fetch(`149.50.137.116:8080/api/auth/bycountry/${m}`,{method:"GET",credentials:"include"});if(n.ok){const i=await n.json();o(i)}}catch(n){console.error(n)}finally{d(!1)}})()},[]),c?e.jsx(j,{}):s?e.jsxs("p",{children:[s.first_name," ",s.last_name]}):e.jsx(T,{color:"warning",variant:"flat",children:"No asignado"})}function U(){const{setRefresh:m}=g(),{isOpen:c,onOpen:d,onOpenChange:s}=y(),{register:o,handleSubmit:u,formState:{errors:n}}=v({defaultValues:{name:""}}),i=async r=>{r.name=r.name.toLowerCase(),C.promise(async()=>{try{if((await fetch("149.50.137.116:8080/api/countries/create",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)return m(),"Country creado con éxito 😀";throw new Error("Oops, algo salió mal 😕")}catch(a){throw new Error("Error al procesar la solicitud: "+a.message)}},{loading:"Loading...",success:a=>a,error:a=>a.message})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{onPress:d,variant:"faded",color:"default",className:"mb-3",radius:"sm",children:"Nuevo Country"}),e.jsx(w,{isOpen:c,onOpenChange:s,className:"border dark text-foreground border-default-400",children:e.jsx(N,{children:r=>e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"flex flex-col gap-1",children:"Crear Nuevo Country"}),e.jsx(P,{children:e.jsx(_,{placeholder:"Ingrese el nombre",variant:"underlined",label:"Nombre",isRequired:!0,...o("name")})}),e.jsx(E,{children:e.jsx(f,{className:"font-semibold uppercase bg-primary/60 hover:bg-primary",type:"submit",radius:"sm",onPress:()=>{u(i)(),r()},children:"Crear"})})]})})})]})}function B({id:m}){const{setRefresh:c}=g(),{isOpen:d,onOpen:s,onOpenChange:o}=y(),{register:u,handleSubmit:n}=v({defaultValues:{name:""}}),i=async r=>{C.promise(async()=>{try{if((await fetch(`149.50.137.116:8080/api/countries/${m}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)return c(),"¡Country editado con éxito! 😄";throw new Error("Oops, algo salió mal 😕")}catch(a){throw new Error("Error al procesar la solicitud: "+a.message)}},{loading:"Loading...",success:a=>a,error:a=>a.message})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{isIconOnly:!0,onPress:s,color:"default",size:"sm",className:"bg-default/50 text-default-400 hover:text-white",children:e.jsx(F,{size:18})}),e.jsx(w,{isOpen:d,onOpenChange:o,className:"border dark text-foreground border-default-400",children:e.jsx(N,{children:r=>e.jsxs(e.Fragment,{children:[e.jsx(S,{className:"flex flex-col gap-1 uppercase",children:"⚠️ Advertencia"}),e.jsxs(P,{children:[e.jsx("div",{children:"Esta acción es permanente y no se puede deshacer."}),e.jsx(_,{placeholder:"Nuevo nombre",label:"Nombre",isRequired:!0,variant:"underlined",...u("name")})]}),e.jsx(E,{children:e.jsx(f,{className:"uppercase font-semibold bg-primary/60 hover:bg-primary",variant:"solid",radius:"sm",onPress:()=>{n(i)(),r()},children:"Editar"})})]})})})]})}const G=[{label:"country",key:"name"},{label:"manager",key:"manager"},{label:"acciones",key:"actions"}],h={docs:[],totalDocs:0,limit:10,totalPages:0,page:0,pagingCounter:0,hasPrevPage:!1,hasNextPage:!1,prevPage:null,nextPage:null},H=function(){const{refresh:c,isHiddenTopBar:d}=g(),[s,o]=l.useState(h),[u,n]=l.useState(!0),[i,r]=l.useState(1),[a,x]=l.useState({name:""}),b=async()=>{const t=await O(i,a);if(t.ok){const p=await t.json();o(p.response)}n(!1)};l.useEffect(()=>{r(1),o(h),b()},[a,c]),l.useEffect(()=>{o(h),b()},[i]);const k=$(t=>{x({...a,name:t.target.value.toLowerCase()})},200);return e.jsxs("section",{className:` ${d?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16 lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[e.jsxs("div",{className:"flex flex-wrap items-start justify-between w-full gap-4 pb-4 ",children:[e.jsx(U,{}),e.jsx(L,{setQueries:x,inputSearch:!0,handleInputSearch:k})]}),e.jsxs("div",{className:"flex items-center justify-between px-3",children:[e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Total ",s.totalDocs," countries"]}),e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Página ",s.page]})]}),e.jsxs(M,{"aria-label":"Users Table",bottomContent:s.page>0?e.jsx("div",{className:`${s.docs?"opacity-100":"opacity-0"} flex items-center justify-center w-full gap-4`,children:e.jsx(z,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:s.page,total:s.totalPages,onChange:t=>{n(!0),r(t)}})}):null,children:[e.jsx(A,{columns:G,children:t=>e.jsx(R,{className:"uppercase",allowsSorting:t.key!=="country"&&t.key!=="actions",children:t.label},t.key)}),e.jsx(q,{emptyContent:u?" ":s.docs.length===0?"No se encontraron countries":"",items:s.docs,isLoading:u,loadingContent:e.jsx(j,{className:"mt-12",label:"Loading..."}),children:t=>e.jsx(I,{children:p=>e.jsxs(V,{className:"capitalize",children:[p==="manager"&&e.jsx(J,{id:t._id}),p==="actions"?e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(B,{id:t._id})}):D(t,p)]})},t.name)})]})]})},de=H;export{de as default};