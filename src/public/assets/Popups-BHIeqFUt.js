import{r as o,k as h,j as t,b as x,A as b}from"./index-5bQunjWd.js";import{I as w}from"./image-msGGfzWo.js";import{c as y}from"./chunk-AMSULWPV-HtUOCiZB.js";const j=function(){const[r,p]=o.useState(""),[c,n]=o.useState(!1),[l,u]=o.useState(null),[S,d]=o.useState(null),{isHiddenTopBar:m}=h(),g=s=>{const a=s.target.files[0],e=new FileReader;e.onload=i=>{p(i.target.result)},e.readAsDataURL(a)},f=async s=>{s.preventDefault();const a=new FormData;a.set("active",c),a.set("image",r),b.promise(async()=>{try{const e=await fetch("https://apdcc-back-production.up.railway.app/api/popups",{method:"PUT",credentials:"include",body:a});return e.ok?"Popup Creado con éxito! 😀":`${(await e.json()).message}`}catch(e){return console.error(e),"Algo salió mal 🤔"}},{loading:"Loading...",success:e=>e,error:e=>e.message})};return o.useEffect(()=>{async function s(){try{const a=await fetch("https://apdcc-back-production.up.railway.app/api/popups"),{response:e}=await a.json();d(e),e.active&&(n(!0),u(e.image.url))}catch(a){throw new Error(a)}}s()},[]),t.jsx("section",{className:`${m?"pt-12":"pt-36"} absolute top-0 left-0 w-full h-screen pl-5 lg:pl-[200px] pb-16 lg:pt-20 pr-5 overflow-y-scroll  bg-black`,children:t.jsxs("form",{onSubmit:f,className:"flex flex-col space-y-5",children:[t.jsx("label",{htmlFor:"imagen",className:"text-lg",children:"Selecciona una imagen:"}),t.jsx("input",{type:"file",id:"imagen",name:"imagen",accept:"image/*",onChange:g}),!r&&l&&t.jsx("img",{src:l,alt:"Previsualización de la imagen",className:"w-40 h-auto rounded-md"}),r&&t.jsx("img",{src:r,alt:"Previsualización de la imagen",className:"w-40 h-auto rounded-md"}),t.jsx(y,{isSelected:c,onValueChange:n,children:"Activar Popups"}),t.jsx(x,{type:"submit",className:"z-0 order-last font-semibold uppercase bg-primary/60 hover:bg-primary w-fit",variant:"solid",radius:"sm",startContent:t.jsx(w,{size:20}),children:"Actualizar"})]})})},A=j;export{A as default};