import{f as z,h as I,r as a,j as e,b as O,k as A,o as L,a1 as R}from"./index-ol82rnvy.js";import{S as H}from"./search-tq63jGAX.js";import{i as q}from"./chunk-TC4QW7OA-NfwdGWv6.js";import{s as u,l as s}from"./chunk-ZFWMN6TD-1_FFBcN1.js";import{t as D}from"./chunk-MA2FG3JE-uiNWZ3S6.js";/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=z("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);function W({handleInputSearch:C,setQueries:g,inputSearch:b,countriesFilter:m,teamsFilter:h,genresFilter:y,sportsFilter:N,categoriesFilter:x}){const{adminRole:p}=I(),[_,K]=a.useState([]),[E,k]=a.useState([]),[F,M]=a.useState([]),[l,f]=a.useState(new Set([])),[o,w]=a.useState(new Set([])),[i,j]=a.useState(new Set([])),[r,S]=a.useState(new Set([])),[c,v]=a.useState(new Set([]));a.useEffect(()=>{m&&(async()=>{const n=await A();if(n.ok){const d=await n.json();K(d.response)}})(),x&&(async()=>{const n=await L();if(n.ok){const{response:d}=await n.json();M(d)}})(),h&&(async()=>{const n=await R();if(n.ok){const{response:d}=await n.json();k(d)}})()},[]),a.useEffect(()=>{g({country_id:(o==null?void 0:o.currentKey)||"",genre:(i==null?void 0:i.currentKey)||"",sport:(r==null?void 0:r.currentKey)||"",category_id:(c==null?void 0:c.currentKey)||"",team:(l==null?void 0:l.currentKey)||""})},[o,i,r,c,l]);const T=()=>{w(new Set([])),j(new Set([])),S(new Set([])),v(new Set([])),f(new Set([]))};return p?e.jsxs("div",{className:"relative flex flex-wrap items-center gap-4",children:[b&&e.jsx(q,{startContent:e.jsx(H,{}),name:"name",type:"search",size:"sm",variant:"underlined",placeholder:"Buscar",color:"warning",className:"w-[140px] md:w-[180px]",onChange:C}),p==="ADMIN"&&m?e.jsxs(u,{label:"Countries",className:"w-[140px] md:w-[180px] font-semibold",size:"sm",color:"warning",variant:"underlined",value:o,selectedKeys:o,onSelectionChange:w,children:[e.jsx(s,{value:"",children:"Todos"},""),_.map(t=>e.jsx(s,{value:t._id,children:t.name},t._id))]}):null,h?e.jsxs(u,{label:"Equipos",className:"w-[140px] md:w-[180px] font-semibold",size:"sm",color:"warning",variant:"underlined",selectedKeys:l,onSelectionChange:f,children:[e.jsx(s,{value:"",children:"Todos"},""),E.map(t=>e.jsx(s,{value:t._id,children:t.name},t._id))]}):null,y&&e.jsxs(u,{label:"Género",className:"w-[140px] md:w-[180px] font-semibold",size:"sm",color:"warning",variant:"underlined",selectedKeys:i,onSelectionChange:j,children:[e.jsx(s,{value:"",children:"Todos"},""),e.jsx(s,{value:"FEMENINO",children:"Femenino"},"FEMENINO"),e.jsx(s,{value:"MASCULINO",children:"Masculino"},"MASCULINO")]}),N&&e.jsxs(u,{label:"Deporte",className:"w-[140px] md:w-[180px] font-semibold",size:"sm",color:"warning",variant:"underlined",selectedKeys:r,onSelectionChange:S,children:[e.jsx(s,{value:"",children:"Todos"},""),e.jsx(s,{value:"F7",children:"Futbol 7"},"F7"),e.jsx(s,{value:"F11",children:"Futbol 11"},"F11"),e.jsx(s,{value:"HOCKEY",children:"Hockey"},"HOCKEY")]}),x&&e.jsxs(u,{label:"Categorías",className:"w-[140px] md:w-[180px] font-semibold",size:"sm",color:"warning",variant:"underlined",selectedKeys:c,onSelectionChange:v,children:[e.jsx(s,{value:"",children:"Todos"},""),F.map(t=>e.jsx(s,{value:t._id,children:t.name},t._id))]}),e.jsx("div",{className:"mx-3",children:e.jsx(D,{content:"Resetear Filtros",className:"flex items-end px-6",children:e.jsx(O,{isIconOnly:!0,variant:"bordered",radius:"full",onClick:T,children:e.jsx(G,{size:18})})})})]}):null}export{W as F};