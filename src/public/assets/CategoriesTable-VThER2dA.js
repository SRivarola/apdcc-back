import{N as j,a as C,r as i,j as e,b as f,m as S,d as _,i as N,A as w,s as z}from"./index-FNMuquIZ.js";import{u as v}from"./index.esm-oKldKAMr.js";import{m as E}from"./chunk-3S23ARPO-8cnrHG7o.js";import{m as k}from"./chunk-EPDLEVDR-tZ_gKuZW.js";import{c as b}from"./chunk-AMSULWPV-VqtwE8ae.js";import{m as F}from"./chunk-QY5NICTW-bJTdfeu8.js";import{P as A}from"./pen-square-u5ga6cOV.js";import{t as R,a as V,b as H,c as L,d as q,e as Y}from"./chunk-YRZGWF2W-YiFfm13F.js";import{p as D}from"./chunk-BIN3WWJN-meKe1TlB.js";import"./chunk-7F3ZLNJ6-AKZ5HABt.js";function J(){const{setRefresh:r}=j(),{isOpen:d,onOpen:u,onOpenChange:m}=C(),[n,p]=i.useState(!1),[c,a]=i.useState(!1),[s,t]=i.useState(!1),[g,y]=i.useState([]),{register:O,handleSubmit:P,formState:{errors:B}}=v({defaultValues:{name:""}}),x=(h,o)=>{const l=h.target.name;if(!o)y([...g,l]);else{const T=g.filter(I=>I!==l);y(T)}},$=async h=>{const o={...h,sport:g};w.promise(async()=>{try{if((await fetch("http://localhost:8080/api/categories/create",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)return r(),"Categoria creado con éxito 😀";throw new Error("Oops, algo salió mal 😕")}catch(l){throw new Error("Error al procesar la solicitud: "+l.message)}},{loading:"Loading...",success:l=>l,error:l=>l.message})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{onPress:u,variant:"faded",color:"default",className:"mb-3",radius:"sm",children:"Nueva Categoria"}),e.jsx(S,{isOpen:d,onOpenChange:m,className:"border dark text-foreground border-default-400",children:e.jsx(_,{children:h=>e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"flex flex-col gap-1",children:"Crear Nueva Categoria"}),e.jsxs(k,{children:[e.jsx(N,{label:"Ingrese la categoria",placeholder:"ejemplo: 5-6",isRequired:!0,variant:"underlined",...O("name")}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(b,{size:"md",radius:"full",name:"F7",isSelected:n,onValueChange:p,onChange:o=>x(o,n),children:"Futbol 7"}),e.jsx(b,{size:"md",radius:"full",name:"F11",isSelected:c,onValueChange:a,onChange:o=>x(o,c),children:"Futbol 11"}),e.jsx(b,{size:"md",radius:"full",name:"HOCKEY",isSelected:s,onValueChange:t,onChange:o=>x(o,s),children:"Hockey"})]})]}),e.jsx(F,{children:e.jsx(f,{className:"font-semibold uppercase bg-primary/60 hover:bg-primary",radius:"sm",type:"submit",variant:"solid",onPress:()=>{P($)(),h()},children:"Crear"})})]})})})]})}function M({id:r}){const{setRefresh:d}=j(),{isOpen:u,onOpen:m,onOpenChange:n}=C(),{register:p,handleSubmit:c}=v({defaultValues:{name:""}}),a=async s=>{w.promise(async()=>{try{if((await fetch(`http://localhost:8080/api/categories/${r}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok)return d(),"¡Categoria editada con éxito! 😄";throw new Error("Oops, algo salió mal 😕")}catch(t){throw new Error("Error al procesar la solicitud: "+t.message)}},{loading:"Loading...",success:t=>t,error:t=>t.message})};return e.jsxs(e.Fragment,{children:[e.jsx(f,{isIconOnly:!0,onPress:m,color:"default",size:"sm",className:"bg-default/50 text-default-400 hover:text-white",children:e.jsx(A,{size:18})}),e.jsx(S,{isOpen:u,onOpenChange:n,className:"border dark text-foreground border-default-400",children:e.jsx(_,{children:s=>e.jsxs(e.Fragment,{children:[e.jsx(E,{className:"flex flex-col gap-1 uppercase",children:"⚠️ Advertencia"}),e.jsxs(k,{children:[e.jsx("div",{children:"Esta acción es permanente y no se puede deshacer."}),e.jsx(N,{placeholder:"Nuevo nombre",label:"Nombre",isRequired:!0,variant:"underlined",...p("name")})]}),e.jsx(F,{children:e.jsx(f,{className:"font-semibold uppercase bg-primary/60 hover:bg-primary",radius:"sm",variant:"solid",onPress:()=>{c(a)(),s()},children:"Editar"})})]})})})]})}const U=[{label:"Categoria",key:"name"},{label:"Años",key:"age"},{label:"Acciones",key:"actions"}];function re(){const[r,d]=i.useState([]),{refresh:u,isHiddenTopBar:m}=j(),[n,p]=i.useState(!0);i.useEffect(()=>{(async()=>{try{const s=await fetch("http://localhost:8080/api/categories",{method:"GET",credentials:"include"});if(s.ok){const{response:t}=await s.json();d(t)}}catch(s){throw new Error(s)}finally{p(!1)}})()},[u]);const c=a=>{const s=new Date().getFullYear(),t=a.split("-");return a==="+30"?`${s-a} o anteriores`:`${s-Number(t[1])} / ${s-Number(t[0])}`};return e.jsxs("section",{className:` ${m?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16 lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[e.jsx(J,{}),e.jsxs(R,{"aria-label":"Users Table",bottomContent:r.page>0?e.jsx("div",{className:`${r.docs?"opacity-100":"opacity-0"} flex items-center justify-center w-full gap-4`,children:e.jsx(D,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:r.page,total:r.totalPages})}):null,children:[e.jsx(V,{columns:U,children:a=>e.jsx(H,{className:"uppercase",children:a.label},a.key)}),e.jsx(L,{emptyContent:n?" ":r.length===0?"No se encontraron categorias":"",items:n?[]:r,isLoading:n,loadingContent:e.jsx(z,{className:"mt-12",label:"Loading..."}),children:a=>e.jsx(q,{children:s=>e.jsx(Y,{className:"capitalize",children:s==="name"?e.jsx("p",{children:a.name}):s==="age"?e.jsx("p",{className:"lowercase",children:c(a.name)}):s==="actions"?e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(M,{id:a._id})}):null})},a._id)})]})]})}export{re as default};