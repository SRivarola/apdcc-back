import{j as e,s as D,b as S,ar as _,h as P,r as c,v as z}from"./index-v_uUvPJ9.js";import{N as M}from"./NavbarPdf-Tkyvh-06.js";import{I as N}from"./InputDate-eEiae7bA.js";import{h as b}from"./moment-WSJ9un1t.js";import{S as E,D as Y,P as F,V as l,T as s,a as v}from"./react-pdf.browser-heRXbpJO.js";import{l as T}from"./chunk-MPX6TMFQ-GLmOimNL.js";import"./chunk-TC4QW7OA-g3kXFU1-.js";import"./import-IvsrrCTe.js";import"./import-75dAXKzT.js";import"./chunk-M3MASYO7-yxTjcScr.js";import"./objectWithoutPropertiesLoose-pdUxmcoj.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";const t=E.create({page:{flexDirection:"column",justifyContent:"space-between",backgroundcolumnor:"#E4E4E4",padding:15,marginBottom:5},header:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:"14px"},font_bold:{fontWeight:"extrabold",fontSize:"11px"},cardContainer:{width:"100%",flexDirection:"row",justifyContent:"center",gap:10},card:{marginTop:10,flexDirection:"column",alignItems:"center",width:"100%"},section:{marginBottom:3,textAlign:"center"},title:{fontSize:14,fontWeight:"extrabold"},table:{display:"table",width:"100%",borderStyle:"solid",borderColor:"#000",borderWidth:1,tableLayout:"fixed",marginTop:10},tableRow:{flexDirection:"row"},tableCell:{borderStyle:"solid",borderColor:"#000",borderWidth:1,padding:1,width:"100%",boxSizing:"border-box",textAlign:"center",fontSize:8},playerNameCell:{width:"35%",borderStyle:"solid",borderColor:"#000",borderWidth:1,padding:1,boxSizing:"border-box",textAlign:"center",fontSize:8},playerDNICell:{width:"20%",borderStyle:"solid",borderColor:"#000",borderWidth:1,padding:1,boxSizing:"border-box",textAlign:"center",fontSize:8}});function k({matches:o}){var h;const i=r=>r==="F7"?"FÚTBOL 7":r==="F11"?"FÚTBOL 11":"HOCKEY";return e.jsx(Y,{children:e.jsx(F,{size:"A4",style:t.page,children:e.jsxs(l,{style:t.rotate,children:[e.jsx(l,{style:t.header,children:e.jsxs(s,{children:["Partidos de la fecha: ",b((h=o[0])==null?void 0:h.date).format("DD-MM-YY")]})}),e.jsx(l,{style:t.cardContainer,children:e.jsx(l,{style:t.card,children:e.jsxs(l,{style:t.table,children:[e.jsxs(l,{style:t.tableRow,children:[e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:"Torneo"})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:"Deporte"})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:"Categoria"})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:"Hora"})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:"Local"})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:"Visitante"})})]}),o.map(r=>e.jsxs(l,{style:t.tableRow,children:[e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:r.tournament_id.name})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:i(r.tournament_id.sport)})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:r.local.team_id.category_id.name})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:r.time})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:r.local.team_id.name})}),e.jsx(l,{style:t.tableCell,children:e.jsx(s,{children:r.visit.team_id.name})})]},r._id))]})})})]})})})}function A({matches:o}){return e.jsx(v,{document:e.jsx(k,{matches:o}),fileName:`fixture_${b(o[0].date).add(1,"days").format("DD-MM-YYYY")}.pdf`,children:({loading:i})=>i?e.jsx("div",{className:"flex gap-2 px-4 py-2 text-sm font-semibold text-black bg-white rounded w-fit",children:e.jsx(D,{size:"sm"})}):e.jsx(S,{as:T,endContent:e.jsx(_,{size:20}),size:"sm",className:"flex gap-2 px-4 py-2 text-sm font-semibold text-black bg-white rounded w-fit",children:"FIXTURE"})})}const X=()=>{const{isHiddenTopBar:o}=P(),[i,h]=c.useState(b(new Date).format("YYYY-MM-DD")),[r,f]=c.useState(!0),[p,j]=c.useState([]),[y,u]=c.useState([]),g=async n=>{const a=await z(`?team=${n}&state=READY`);if(a.ok){const{response:d}=await a.json();return d}else throw new Error("Something went wrong")},w=async n=>{try{const a=await fetch(`https://apdcc.com.ar/api/matches/?date=${n}`);if(a.ok){const{response:d}=await a.json(),m=d.filter(x=>x.visit&&x.local.team_id&&x.visit.team_id);j(m)}}catch(a){console.log(a)}},C=async()=>{try{const n=p.map(async d=>{const[m,x]=await Promise.all([g(d.local.team_id._id),g(d.visit.team_id._id)]);return{...d,localPlayers:m,visitPlayers:x}}),a=await Promise.all(n);u(a)}catch(n){console.error("Error fetching players",n)}finally{f(!1)}};return c.useEffect(()=>{f(!0),u([]),j([]),i&&w(i)},[i]),c.useEffect(()=>{p.length?(f(!0),C()):f(!1)},[p]),e.jsxs("section",{className:`${o?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16  lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[e.jsx(M,{}),e.jsxs("div",{className:"w-full h-28 flex flex-col text-default-300 p-10 items-center gap-10",children:[e.jsx(N,{date:i,setDate:h}),i?r?e.jsx("p",{children:"Cargando..."}):y.length>0?e.jsx(A,{matches:y}):e.jsx("p",{className:"text-warning",children:"⚠️ No se encontraron fechas disponibles"}):e.jsx("p",{className:"font-medium",children:"Indique la fecha deseada"})]})]})};export{X as default};