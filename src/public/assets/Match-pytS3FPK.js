import{r as l,j as e,J as de,H as ce,k as se,u as ue,b as Z,m as me,c as pe,i as v,s as I,A as fe,q as xe,K as ge}from"./index-c-7AgJSM.js";import{S as F,F as R}from"./SectionContainer-WhiqucNy.js";import{b as H,s as _e}from"./ballIcon-1LKef6gm.js";import{P as je,m as he}from"./pen-square-B-SMglwo.js";import{m as ye}from"./chunk-3S23ARPO-ylvC5_do.js";import{m as ve}from"./chunk-EPDLEVDR-Y6WCjpw3.js";import{t as ee}from"./chunk-K3TANQWH-RItQL-s-.js";import{s as b,l as w}from"./chunk-ZFWMN6TD-5oE5lR2W.js";import{c as S}from"./chunk-AMSULWPV-5KvZ6nI2.js";import"./chunk-YRZGWF2W-opTg7P-7.js";import"./chunk-7F3ZLNJ6-Vn5Wnl-C.js";function be({match:t}){const[a,c]=l.useState([]),[m,i]=l.useState(!0);return l.useEffect(()=>{t&&(async(p,f)=>{const u=await de(p,f);if(u.ok){const{response:d}=await u.json();c([...d[0].red_cards,...d[1].red_cards])}i(!1)})(t.tournament_id._id,t._id)},[t]),e.jsxs("div",{className:"flex justify-center gap-10 p-5 px-20 mx-auto mt-16",children:[e.jsx(F,{title:"JUEGO LIMPIO",isFetching:m,targets:!0,children:e.jsx(R,{items:[t.fair_play],tournament:!1})}),e.jsx(F,{title:"MEJOR JUGADOR",isFetching:m,targets:!0,children:e.jsx(R,{items:[t.best_player],tournament:!1})}),e.jsx(F,{title:"tarjetas rojas 🟥",isFetching:m,targets:!0,children:e.jsx(R,{items:a,tournament:!1})})]})}function we({infoHeader:t,match:a}){return e.jsxs("div",{className:"mb-6 text-center lg:px-3",children:[e.jsx("h1",{className:"text-xl font-bold uppercase lg:text-3xl",children:t==null?void 0:t.name}),e.jsx("span",{className:"font-semibold uppercase text-default-400",children:`${ce(a.date).format("DD-MM-YYYY")} - ${t==null?void 0:t.time}`})]})}const Ne=function({match:a}){var p,f;const[c,m]=l.useState(),[i,_]=l.useState();return l.useEffect(()=>{async function u(){try{const d=await fetch(`https://apdcc-back-production.up.railway.app/api/targets/tournament/${a.tournament_id._id}/match/${a._id}`);if(d.ok){const{response:h}=await d.json();m(h.filter(y=>y.team_id._id===a.local.team_id._id)[0]),_(h.filter(y=>y.team_id._id===a.visit.team_id._id)[0])}}catch(d){console.log(d)}}a&&u()},[a]),e.jsxs("div",{className:"flex items-start justify-between max-w-6xl gap-5 pt-5 mx-auto lg:mt-10",children:[e.jsxs("div",{className:"flex flex-col items-center justify-end w-full",children:[e.jsx("p",{className:"text-default-400",children:"Local"}),e.jsx("h2",{className:"text-lg font-bold uppercase lg:text-2xl",children:(p=a==null?void 0:a.local)==null?void 0:p.team_id.name}),e.jsx("p",{className:`${(a==null?void 0:a.res_local)>(a==null?void 0:a.res_visit)?"text-success shadow-green-600 rounded-md shadow":"rounded-md shadow shadow-white"} p-5 m-5  text-7xl text-extrabold`,children:a==null?void 0:a.res_local}),e.jsx("p",{className:`${c!=null&&c.message?"":"text-default-400"} p-5`,children:(c==null?void 0:c.message)||"No hay mensaje"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-end w-full",children:[e.jsx("p",{className:"text-default-400",children:"Visitante"}),e.jsx("h2",{className:"text-lg font-bold uppercase lg:text-2xl",children:(f=a==null?void 0:a.visit)==null?void 0:f.team_id.name}),e.jsx("p",{className:`${(a==null?void 0:a.res_visit)>(a==null?void 0:a.res_local)?"text-success shadow-green-600 rounded-md shadow":"rounded-md shadow shadow-white"} p-5 m-5  text-7xl text-extrabold`,children:a==null?void 0:a.res_visit}),e.jsx("p",{className:`${i!=null&&i.message?"":"text-default-400"} p-5`,children:(i==null?void 0:i.message)||"No hay mensaje"})]})]})},Ce=Ne,Pe=Ce;function Se({match:t,tournamentId:a}){const{setRefresh:c}=se(),{isOpen:m,onOpen:i,onOpenChange:_}=ue(),[p,f]=l.useState(!1),[u,d]=l.useState(!1),[h,y]=l.useState(!1),[$,A]=l.useState(!1),[M,z]=l.useState(""),[T,D]=l.useState(""),[V,ae]=l.useState({res_local:0,res_visit:0}),[x,J]=l.useState({red_card:0,yellow_card:0,message:""}),[g,O]=l.useState({red_card:0,yellow_card:0,message:""}),[G,te]=l.useState(null),[k,le]=l.useState([]),[L,re]=l.useState([]),[N,ne]=l.useState([]),[C,ie]=l.useState([]),[q,W]=l.useState(null);l.useEffect(()=>{t&&(async()=>{try{const o=await fetch(`https://apdcc-back-production.up.railway.app/api/targets/tournament/${a}/match/${t._id}`);if(!o.ok){console.log("Algo salio mal en el fetch");return}const{response:n}=await o.json(),j=n.find(s=>s.team_id._id===t.local.team_id._id),P=n.find(s=>s.team_id._id===t.visit.team_id._id);te({local:j._id,visit:P._id})}catch(o){console.error(o)}})()},[a,t._id]);const Y=async(r,o)=>{try{const n=await fetch(`https://apdcc-back-production.up.railway.app/api/players/all/?team=${r}`,{method:"GET",credentials:"include"});if(n.ok){const{response:j}=await n.json();o?ne(j):ie(j)}}catch(n){throw new Error(n)}};l.useEffect(()=>{Y(t.local.team_id._id,!0)},[x]),l.useEffect(()=>{Y(t.visit.team_id._id,!1)},[g]),l.useEffect(()=>{f(!1),d(!1),y(!1),A(!1),z(null),D(null)},[_]);const K=r=>{ae({...V,[r.target.name]:Number(r.target.value)||0})},B=r=>{r.target.name==="message"?J({...x,message:r.target.value}):J({...x,[r.target.name]:Number(r.target.value)||0})},E=r=>{r.target.name==="message"?O({...g,message:r.target.value}):O({...g,[r.target.name]:Number(r.target.value)||0})},U=(r,o)=>{const n=r.target.value;if(o){le(n.split(","));return}else{re(n.split(","));return}},oe=async r=>{const o={res_local:V.res_local,res_visit:V.res_visit,best_player:M,fair_play:T,targetLocal:x,targetVisit:g,targetLocal_id:G.local,targetVisit_id:G.visit,redCards:{localPlayersWithRedCards:k,visitPlayersWithRedCards:L}};if(x.red_card!==k.length||g.red_card!==L.length){W("*¡Formulario completado incorrectamente, inténtelo nuevamente!");return}W(null),fe.promise(async()=>{try{if((await fetch(`https://apdcc-back-production.up.railway.app/api/matches/results/${t._id}`,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok)return c(),"Datos cargados con éxito 😀"}catch(n){return console.log(n),"Algo salio mal 😮‍💨"}finally{r()}},{loading:"Loading...",success:n=>n,error:n=>n.message})},Q=r=>{const{value:o}=r.target;z(o)},X=r=>{const{name:o,value:n}=r.target;D(n)};return e.jsxs(e.Fragment,{children:[e.jsx(Z,{onPress:i,color:"primary",size:"sm",endContent:e.jsx(je,{size:16}),className:"top-0 right-0 flex font-semibold hover:text-white ms-auto",children:"Editar"}),e.jsx(me,{isOpen:m,onOpenChange:_,size:"3xl",className:"w-full border dark text-foreground border-default-400",children:e.jsx(pe,{children:r=>{var o,n,j,P;return e.jsxs(e.Fragment,{children:[e.jsx(ye,{className:"flex flex-col gap-1",children:"Carga de datos"}),e.jsx(ve,{children:e.jsxs("div",{className:"grid grid-cols-12 gap-10",children:[e.jsxs("div",{className:"block w-full col-span-6",children:[e.jsx("h2",{className:"text-xl uppercase",children:(n=(o=t.local)==null?void 0:o.team_id)==null?void 0:n.name}),e.jsx(v,{size:"sm",variant:"underlined",type:"number",min:"0",step:"1",placeholder:"Goles anotados",startContent:H,defaultValue:0,name:"res_local",onChange:s=>K(s)}),e.jsx(v,{size:"sm",variant:"underlined",type:"number",min:"0",step:"1",placeholder:"Tarjetas Amarillas",startContent:e.jsx("span",{children:"🟨"}),defaultValue:0,name:"yellow_card",onChange:s=>B(s)}),e.jsx(v,{size:"sm",type:"number",variant:"underlined",min:"0",step:"1",placeholder:"Tarjetas Rojas",startContent:e.jsx("span",{children:"🟥"}),defaultValue:0,name:"red_card",onChange:s=>B(s)}),e.jsx(ee,{placeholder:"Mensaje",className:"pt-5 ",name:"message",onChange:s=>B(s)}),x.red_card>0&&N.length?e.jsx(b,{label:"Asignar tarjeta roja",isRequired:!0,className:"col-span-4",variant:"underlined",selectionMode:x.red_card>1?"multiple":"single",selectedKeys:k,onChange:s=>U(s,!0),children:N.map(s=>e.jsx(w,{value:s._id,children:`${s.first_name+" "+s.last_name}`},`${s._id}`))}):x.red_card>0?e.jsx("div",{className:"flex justify-center w-full mt-3",children:e.jsx(I,{})}):null,e.jsx(S,{isSelected:p,onValueChange:f,className:"mt-3",isDisabled:h,children:"Mejor Jugador"}),p&&e.jsx(b,{"aria-label":"Best Local Player",placeholder:"Selecciona al mejor jugador",variant:"underlined",name:"best_player",value:M,onChange:Q,children:N.map(s=>e.jsx(w,{value:s._id,children:`${s.first_name+" "+s.last_name}`},`${s._id}`))}),e.jsxs("div",{children:[e.jsx(S,{isSelected:u,onValueChange:d,className:"mt-3",isDisabled:$,children:"Juego Limpio"}),u&&e.jsx(b,{"aria-label":"Fair Local Player",placeholder:"Selecciona juego limpio",variant:"underlined",name:"fair_play",value:T,onChange:X,children:N.map(s=>e.jsx(w,{value:s._id,children:`${s.first_name+" "+s.last_name}`},`${s._id}`))})]})]}),e.jsxs("div",{className:"block w-full col-span-6",children:[e.jsx("h2",{className:"text-xl uppercase",children:(P=(j=t.visit)==null?void 0:j.team_id)==null?void 0:P.name}),e.jsx(v,{size:"sm",type:"number",variant:"underlined",min:"0",step:"1",placeholder:"Goles anotados",startContent:H,defaultValue:0,name:"res_visit",onChange:s=>K(s)}),e.jsx(v,{size:"sm",variant:"underlined",type:"number",min:"0",step:"1",placeholder:"Tarjetas Amarillas",startContent:e.jsx("span",{children:"🟨"}),defaultValue:0,name:"yellow_card",onChange:s=>E(s)}),e.jsx(v,{size:"sm",type:"number",variant:"underlined",min:"0",step:"1",placeholder:"Tarjetas Rojas",startContent:e.jsx("span",{children:"🟥"}),defaultValue:0,name:"red_card",onChange:s=>E(s)}),e.jsx(ee,{placeholder:"Mensaje",className:"pt-5 ",name:"message",onChange:s=>E(s)}),g.red_card>0&&C.length?e.jsx(b,{label:"Asignar tarjeta roja",isRequired:!0,className:"col-span-4",variant:"underlined",selectedKeys:L,selectionMode:g.red_card>1?"multiple":"single",onChange:s=>U(s,!1),children:C.map(s=>e.jsx(w,{value:s._id,children:`${s.first_name+" "+s.last_name}`},`${s._id}`))}):g.red_card>0?e.jsx("div",{className:"flex justify-center w-full mt-3",children:e.jsx(I,{})}):null,e.jsx(S,{isSelected:h,onValueChange:y,className:"mt-3",isDisabled:p,children:"Mejor Jugador"}),h&&e.jsx(b,{"aria-label":"Best Visit Player",placeholder:"Selecciona al mejor jugador",variant:"underlined",name:"best_player",value:M,onChange:Q,children:C.map(s=>e.jsx(w,{value:s._id,children:`${s.first_name+" "+s.last_name}`},`${s._id}`))}),e.jsxs("div",{children:[e.jsx(S,{isSelected:$,onValueChange:A,className:"mt-3",isDisabled:u,children:"Juego Limpio"}),$&&e.jsx(b,{"aria-label":"Fair Visit Player",placeholder:"Selecciona juego limpio",variant:"underlined",name:"fair_play",value:T,onChange:X,children:C.map(s=>e.jsx(w,{value:s._id,children:`${s.first_name+" "+s.last_name}`},`${s._id}`))})]})]})]})}),e.jsxs(he,{className:"flex flex-col",children:[q?e.jsx("p",{className:"text-sm font-semibold text-center text-danger",children:q}):null,e.jsx(Z,{className:"z-0 order-last w-full font-semibold uppercase bg-primary/60 hover:bg-primary",variant:"solid",radius:"sm",startContent:_e,onPress:()=>{oe(r)},children:"Guardar"})]})]})}})})]})}function Ae(){const{id:t}=xe(),{isHiddenTopBar:a}=se(),[c,m]=l.useState(),[i,_]=l.useState(null);return l.useEffect(()=>{t&&(async f=>{const u=await ge(f);if(u.ok){const{response:d}=await u.json();_(d),m(d.tournament_id)}})(t)},[t]),i?e.jsxs("section",{className:`${a?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16  lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[e.jsx(Se,{match:i,tournamentId:i.tournament_id._id}),e.jsx(we,{infoHeader:c,match:i}),e.jsx(Pe,{match:i}),e.jsx(be,{match:i})]}):e.jsx("div",{className:`${a?"pt-12":"pt-36"} absolute top-0 left-0 flex justify-center items-center w-full pl-5 lg:pl-[200px] pb-16  lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:e.jsx(I,{})})}export{Ae as default};