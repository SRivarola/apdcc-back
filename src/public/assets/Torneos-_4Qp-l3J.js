import{e as B,f as q,r as o,j as e,s as k,u as N,b as T,E as F,m as E,a as v,g as G,i as U}from"./index-r9Kg18oU.js";import{F as C}from"./Fixture-dcthwelF.js";import{t as $,a as M,b as I,c as A,d as P,e as z}from"./chunk-YRZGWF2W-w1NnX_tl.js";import{g as O}from"./chunk-KARN4QIT-bcCKJh4V.js";import{m as S}from"./chunk-EPDLEVDR-KpDQe4Fi.js";import{m as W}from"./chunk-3S23ARPO-TZsoprM1.js";import{m as Y}from"./chunk-QY5NICTW-NSOp6BpZ.js";import{p as D}from"./chunk-BIN3WWJN-yOByDKU3.js";import"./moment-WSJ9un1t.js";import"./pen-square-ASzmK7IU.js";import"./chunk-TC4QW7OA-dCyx9Nqh.js";import"./import-Lz4LCkko.js";import"./import-E5yE7O2C.js";import"./chunk-M3MASYO7-T0v4DvfD.js";import"./chunk-K3TANQWH-LbGmkiCb.js";import"./chunk-ZFWMN6TD-E1DsTsm7.js";import"./chunk-7F3ZLNJ6-dNGPNpAD.js";import"./chunk-OFH6WYRQ-KI7hjY2J.js";import"./chunk-AMSULWPV-CTsAqdhD.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function R({id:i,isClient:x}){const m=[{label:"Equipo",key:"team_id"},{label:"PJ",key:"played_matches"},{label:"PG",key:"wins"},{label:"PP",key:"losses"},{label:"PE",key:"ties"},{label:"🟨",key:"yellow_card"},{label:"🟥",key:"red_card"},{label:"Pts",key:"points"}],{refresh:n}=q(),[d,u]=o.useState(!0),[p,j]=o.useState([]),[a,h]=o.useState(),[g,_]=o.useState([]);return o.useEffect(()=>{(async()=>{try{const t=await fetch(`https://apdcc-back-production.up.railway.app/api/tournaments/tournament/${i}`);if(!t.ok){console.log("Algo salio mal en el fetch");return}const{response:r}=await t.json();h({category:r.category_id.name,day:r.day,name:r.name,sport:r.sport,time:r.time,teams_quantity:r.teams_quantity,createdAt:r.createdAt,updatedAt:r.updatedAt})}catch(t){throw new Error(t)}})()},[i,n]),o.useEffect(()=>{(async()=>{try{const t=await fetch(`https://apdcc-back-production.up.railway.app/api/matches/?tournament_id=${i}`);if(!t.ok){console.log("Algo salio mal en el fetch");return}const{response:r}=await t.json();_(r)}catch(t){console.log(t)}})()},[i,n]),o.useEffect(()=>{(async()=>{try{const t=await fetch(`https://apdcc-back-production.up.railway.app/api/targets/tournament/${i}`);if(!t.ok){console.log("Algo salio mal en el fetch");return}const{response:r}=await t.json(),L=Object.values(r.reduce((c,l)=>{const f=l.team_id._id;return c[f]||(c[f]=[]),c[f].push(l),c},{})).map(c=>c.reduce((l,f)=>(Object.keys(f).forEach(b=>{typeof f[b]=="number"&&(l[b]=(l[b]||0)+f[b])}),l.team_id=f.team_id,l),{})).sort((c,l)=>l.points!==c.points?l.points-c.points:c.red_card!==l.red_card?c.red_card-l.red_card:c.yellow_card-l.yellow_card);j(L)}catch(t){console.error(t)}finally{u(!1)}})()},[i,n]),e.jsxs("div",{children:[a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lg:px-3 mb-6 text-center",children:[e.jsx("h1",{className:"text-xl lg:text-3xl font-bold uppercase",children:a==null?void 0:a.name}),e.jsx("span",{className:"font-semibold uppercase text-default-400",children:`${a==null?void 0:a.sport} (${a==null?void 0:a.category}) / ${a.day} ${a==null?void 0:a.time}`})]}),e.jsx("div",{className:"flex items-center justify-between px-3",children:e.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Total ",a==null?void 0:a.teams_quantity," equipos"]})})]}):null,e.jsxs($,{"aria-label":"Users Table",children:[e.jsx(M,{columns:m,children:s=>e.jsx(I,{className:"uppercase",children:s.label},s.key)}),e.jsx(A,{emptyContent:d?" ":p.length===0?"No se encontraron torneos":"",items:d?[]:p,isLoading:d,loadingContent:e.jsx(k,{label:"Loading..."}),children:s=>e.jsx(P,{className:"justify-center",children:t=>e.jsx(z,{children:t==="team_id"?e.jsx("p",{children:s.team_id.name}):O(s,t)})},s.team_id._id)})]}),x?null:e.jsx(C,{matches:g,tournamentId:i})]})}function V({name:i,id:x,placement:m}){const{isOpen:n,onOpen:d,onOpenChange:u}=N();return e.jsxs(e.Fragment,{children:[e.jsx(T,{onPress:d,variant:"faded",color:"primary",size:"sm",radius:"sm",isIconOnly:!0,children:e.jsx(F,{size:16})}),e.jsx(E,{scrollBehavior:"inside",placement:m,size:"3xl",isOpen:n,onOpenChange:u,className:"w-full border dark text-foreground border-default-400",children:e.jsx(v,{children:()=>e.jsx(S,{className:"px-0",children:e.jsx(R,{id:x,isClient:!0})})})})]})}function Z({name:i,id:x,placement:m}){const[n,d]=o.useState([]);o.useEffect(()=>{(async()=>{try{const h=await fetch(`https://apdcc-back-production.up.railway.app/api/matches/?tournament_id=${x}`);if(!h.ok){console.log("Algo salio mal en el fetch");return}const{response:g}=await h.json();d(g)}catch(h){console.log(h)}})()},[x]);const{isOpen:u,onOpen:p,onOpenChange:j}=N();return e.jsxs(e.Fragment,{children:[e.jsx(T,{onPress:p,variant:"faded",color:"primary",size:"sm",radius:"sm",isIconOnly:!0,children:e.jsx(F,{size:16})}),e.jsx(E,{placement:m,scrollBehavior:"inside",size:"4xl",isOpen:u,onOpenChange:j,className:"w-full border dark text-foreground border-default-400",children:e.jsx(v,{children:()=>e.jsxs(e.Fragment,{children:[e.jsxs(W,{className:"flex flex-col gap-1",children:["Fixture de ",i]}),e.jsx(S,{children:n.length?e.jsx(C,{matches:n}):e.jsxs("div",{className:"flex items-start gap-2 text-warning",children:[e.jsx(J,{size:20}),"No hay fechas disponibles en este momento."]})}),e.jsx(Y,{})]})})})]})}const Q=[{label:"Categoría",key:"category"},{label:"Torneos",key:"tournament"},{label:"Fixture",key:"fixture"},{label:"Posiciones",key:"positions"}],X=function(){const m=G().pathname,n=m.startsWith("/hockey"),d=m.startsWith("/futbol/masculino"),u=m.startsWith("/futbol/femenino"),[p,j]=o.useState([]),[a,h]=o.useState(1),[g,_]=o.useState(!0);return o.useEffect(()=>{(async()=>{try{const t=await fetch(`https://apdcc-back-production.up.railway.app/api/tournaments?page=${a}`);if(t.ok){const{response:r}=await t.json(),w=r.docs.filter(y=>n?y.sport==="HOCKEY":d?y.sport!=="HOCKEY"&&y.genre==="MASCULINO":u?y.sport!=="HOCKEY"&&y.genre==="FEMENINO":!1);j(w)}}catch(t){throw new Error(t)}finally{_(!1)}})()},[a,n,d,u]),o.useEffect(()=>{window.scrollTo(0,0)},[m]),e.jsxs("section",{className:"min-h-screen pt-20 bg-background dark text-foreground",children:[e.jsx("div",{className:"flex justify-center px-3 lg:px-0",children:e.jsx(U,{src:`${n?"https://res.cloudinary.com/dfnimrpzt/image/upload/v1705447091/photos/portada-hockey_v1buvo.png":d?"https://res.cloudinary.com/dfnimrpzt/image/upload/v1705447089/photos/portada-fut-masc_pf6pop.jpg":"https://res.cloudinary.com/dfnimrpzt/image/upload/v1705447090/photos/portada-fut-fem_hxyaym.jpg"}`,alt:"portada torneo",className:"h-[180px] md:h-[400px] object-cover "})}),e.jsxs("h1",{className:"pt-10 text-3xl font-medium text-center text-white",children:["Torneos de"," ",n?"Hockey":u?"Fútbol Femenino":"Fútbol Masculino"]}),e.jsx("h2",{className:"font-medium text-center text-warning",children:"Lorem ipsum dolor sit amet."}),e.jsx("div",{className:"py-10 mx-auto max-w-7xl",children:e.jsxs($,{isStriped:!0,"aria-label":"Users Table",className:"shadow-lg shadow-white/10",bottomContent:p.page>0?e.jsx("div",{className:`${p.docs?"opacity-100":"opacity-0"} flex items-center justify-center w-full gap-4`,children:e.jsx(D,{isCompact:!0,showControls:!0,showShadow:!0,color:"primary",page:p.page,total:p.totalPages,onChange:s=>{_(!0),h(s)}})}):null,children:[e.jsx(M,{columns:Q,children:s=>e.jsx(I,{className:"uppercase",children:s.label},s.key)}),e.jsx(A,{emptyContent:g?" ":p.length===0?"No se encontraron torneos":"",items:g?[]:p,isLoading:g,loadingContent:e.jsx(k,{label:"Loading..."}),children:s=>e.jsx(P,{children:t=>e.jsx(z,{className:"capitalize",children:t==="category"?e.jsx("p",{children:s.category_id.name}):t==="tournament"?e.jsx("p",{children:s.name}):t==="fixture"?e.jsx(Z,{placement:"center",name:s.name,id:s._id}):t==="positions"?e.jsx(V,{placement:"center",name:s.name,id:s._id}):O(s,t)})},s._id)})]})})]})},ge=X;export{ge as default};