import{j as a,a4 as N,p as $,h as k,r as o,a5 as g,a6 as v}from"./index-v_uUvPJ9.js";import{T as E,F as S}from"./TournamentTable-0oYroQaQ.js";import{b as A}from"./react-V3uQRdW2.js";import{S as p,F as j}from"./SectionContainer-TL0_p6Em.js";import{t as F,a as P,b as I,c as M,d as q,e as R}from"./chunk-YRZGWF2W-juR5stCP.js";import"./moment-WSJ9un1t.js";import"./lodash-cRAzv5cf.js";import"./chunk-MA2FG3JE-7BkTkT2y.js";import"./chunk-AMSULWPV-BiQyaFpB.js";import"./import-75dAXKzT.js";import"./pen-square-hMEUhyBV.js";import"./chunk-3S23ARPO-FvsT3oU3.js";import"./chunk-EPDLEVDR-ekoXcNWj.js";import"./chunk-QY5NICTW-mmnNTBfD.js";import"./chunk-TC4QW7OA-g3kXFU1-.js";import"./import-IvsrrCTe.js";import"./chunk-M3MASYO7-yxTjcScr.js";import"./ballIcon-IEVoP-Oq.js";import"./chunk-K3TANQWH-XlmNOlRK.js";import"./objectWithoutPropertiesLoose-pdUxmcoj.js";import"./chunk-ZFWMN6TD--pdsaEj1.js";import"./import-C7LhSByU.js";import"./chunk-7F3ZLNJ6-DwMGu4qv.js";import"./DownloadFixturePDF-CHnqxKMa.js";import"./react-pdf.browser-heRXbpJO.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./LOGO-NEGRO-HORIZONTAL-msT39if3.js";import"./chunk-MPX6TMFQ-GLmOimNL.js";import"./chunk-OFH6WYRQ-2yMIhOIz.js";import"./chunk-KARN4QIT-tVX_ogq9.js";const y=({infoHeader:t})=>{const s=t==null?void 0:t.name,c=`${t==null?void 0:t.sport} (${t==null?void 0:t.category}) / ${t.day} ${t==null?void 0:t.time}`,n=t==null?void 0:t.teams_quantity;return a.jsx(B,{_:s,_2:c,_3:n})},B=A(({_:t,_2:s,_3:c})=>a.jsxs("div",{className:"flex flex-col gap-1",children:[a.jsxs("div",{className:"lg:px-3 mb-6 text-center",children:[a.jsx("h1",{className:"text-xl lg:text-3xl font-bold uppercase",children:t}),a.jsx("span",{className:"font-semibold uppercase text-default-400",children:s})]}),a.jsx("div",{className:"flex items-center justify-between px-3",children:a.jsxs("p",{className:"mb-2 text-default-400 text-small",children:["Total ",c," equipos"]})})]}),{svg:!1,shouldUpdate:(t,s)=>(t==null?void 0:t._)!==(s==null?void 0:s._)||(t==null?void 0:t._2)!==(s==null?void 0:s._2)||(t==null?void 0:t._3)!==(s==null?void 0:s._3)});y.__block_callable__=!0;const C=y,z=[{label:"Jugador",key:"customName"},{label:"🟥",key:"cantidad"}],G=({targets:t})=>t?a.jsxs(F,{"aria-label":"Players Table",className:"max-h-[250px]",children:[a.jsx(P,{columns:z,children:s=>a.jsx(I,{className:"uppercase",children:s.label},s.key)}),a.jsx(M,{items:t,children:s=>a.jsx(q,{children:c=>a.jsx(R,{className:"capitalize",children:c==="customName"?a.jsx(N,{avatarProps:{radius:"md",src:s.player.avatar.url},name:`${s.player.last_name} ${s.player.first_name} `,description:s.player.country_id.name,children:`${s.first_name} ${s.last_name}`}):c==="cantidad"?a.jsx("p",{children:s.cantidad}):null})},s.player._id)})]}):null,jt=()=>{var u,d,h,x;const{id:t}=$(),{refresh:s,isHiddenTopBar:c}=k(),[n,i]=o.useState(!0),[e,f]=o.useState(null),[m,b]=o.useState(null),[T,w]=o.useState([]);return o.useEffect(()=>{(async()=>{const r=await g(t);if(r.ok){const{response:l}=await r.json();b({category:l.category_id.name,day:l.day,name:l.name,sport:l.sport,time:l.time,teams_quantity:l.teams_quantity,createdAt:l.createdAt,updatedAt:l.updatedAt})}})()},[t,s]),o.useEffect(()=>{(async()=>{const r=await v(t);if(!r.ok){console.log("Algo salio mal en el fetch");return}const{response:l}=await r.json();w(l)})()},[t,s]),o.useEffect(()=>{i(!0),(async()=>{try{const r=await fetch(`https://apdcc.com.ar/api/matches/tournament/${t}`,{method:"GET",credentials:"include"});if(r.ok){const l=await r.json();f(l)}}catch{throw new Error}finally{i(!1)}})()},[t,s]),a.jsxs("section",{className:`${c?"pt-12":"pt-36"} absolute top-0 left-0 w-full pl-5 lg:pl-[200px] pb-16  lg:pt-20 pr-5 overflow-y-scroll h-screen bg-black`,children:[m?a.jsx(C,{infoHeader:m}):null,a.jsx(E,{targets:e==null?void 0:e.matchsresults}),a.jsxs("div",{className:"flex w-full gap-5 mt-8 ",children:[a.jsx(p,{title:"juego limpio",isFetching:n,targets:e,children:a.jsx(j,{items:e!=null&&e.fair_play?[{...(u=e==null?void 0:e.fair_play)==null?void 0:u.player,cantidad:(d=e==null?void 0:e.fair_play)==null?void 0:d.cantidad}]:[],tournament:!0})}),a.jsx(p,{title:"mejor jugador",isFetching:n,targets:e,children:a.jsx(j,{items:e!=null&&e.best_player?[{...(h=e==null?void 0:e.best_player)==null?void 0:h.player,cantidad:(x=e==null?void 0:e.best_player)==null?void 0:x.cantidad}]:[],tournament:!0})}),a.jsx(p,{title:"jugadores con tarjetas rojas",isFetching:n,targets:e,children:a.jsx(G,{targets:e==null?void 0:e.red_cards_players})})]}),a.jsx(S,{matches:T,tournamentId:t})]})};export{jt as default};