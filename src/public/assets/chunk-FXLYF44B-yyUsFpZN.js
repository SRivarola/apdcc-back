import{w as ae,ah as k,af as C,r as u,ai as j,aj as se,ak as re,C as oe,B as w,al as le,am as E,E as ne,an as de,G as ie,P as N,I as S,Q as V,K as L,j as h,T as ce,V as P,ao as G,ap as ue,W as be,ag as fe,aq as me}from"./index-v_uUvPJ9.js";import{t as pe}from"./index-taukuCH3.js";import{$ as ge}from"./import-C7LhSByU.js";var O=ae({slots:{base:"inline-flex",tabList:["flex","p-1","h-fit","gap-2","items-center","flex-nowrap","overflow-x-scroll","scrollbar-hide","bg-default-100"],tab:["z-0","w-full","px-3","py-1","flex","group","relative","justify-center","items-center","outline-none","cursor-pointer","transition-opacity","tap-highlight-transparent","data-[disabled=true]:cursor-not-allowed","data-[disabled=true]:opacity-30","data-[hover-unselected=true]:opacity-disabled",...k],tabContent:["relative","z-10","text-inherit","whitespace-nowrap","transition-colors","text-default-500","group-data-[selected=true]:text-foreground"],cursor:["absolute","z-0","bg-white"],panel:["py-3","px-1","outline-none",...k]},variants:{variant:{solid:{cursor:"inset-0"},light:{tabList:"bg-transparent dark:bg-transparent",cursor:"inset-0"},underlined:{tabList:"bg-transparent dark:bg-transparent",cursor:"h-[2px] w-[80%] bottom-0 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]"},bordered:{tabList:"bg-transparent dark:bg-transparent border-medium border-default-200 shadow-sm",cursor:"inset-0"}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{tabList:"rounded-medium",tab:"h-7 text-tiny rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"h-8 text-small rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"h-9 text-medium rounded-medium",cursor:"rounded-medium"}},radius:{none:{tabList:"rounded-none",tab:"rounded-none",cursor:"rounded-none"},sm:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},md:{tabList:"rounded-medium",tab:"rounded-small",cursor:"rounded-small"},lg:{tabList:"rounded-large",tab:"rounded-medium",cursor:"rounded-medium"},full:{tabList:"rounded-full",tab:"rounded-full",cursor:"rounded-full"}},fullWidth:{true:{base:"w-full",tabList:"w-full"}},isDisabled:{true:{tabList:"opacity-disabled pointer-events-none"}},disableAnimation:{true:{tab:"transition-none",tabContent:"transition-none"}}},defaultVariants:{color:"default",variant:"solid",size:"md",fullWidth:!1,isDisabled:!1,disableAnimation:!1},compoundVariants:[{variant:["solid","bordered","light"],color:"default",class:{cursor:["bg-background","dark:bg-default","shadow-small"],tabContent:"group-data-[selected=true]:text-default-foreground"}},{variant:["solid","bordered","light"],color:"primary",class:{cursor:C.solid.primary,tabContent:"group-data-[selected=true]:text-primary-foreground"}},{variant:["solid","bordered","light"],color:"secondary",class:{cursor:C.solid.secondary,tabContent:"group-data-[selected=true]:text-secondary-foreground"}},{variant:["solid","bordered","light"],color:"success",class:{cursor:C.solid.success,tabContent:"group-data-[selected=true]:text-success-foreground"}},{variant:["solid","bordered","light"],color:"warning",class:{cursor:C.solid.warning,tabContent:"group-data-[selected=true]:text-warning-foreground"}},{variant:["solid","bordered","light"],color:"danger",class:{cursor:C.solid.danger,tabContent:"group-data-[selected=true]:text-danger-foreground"}},{variant:"underlined",color:"default",class:{cursor:"bg-foreground",tabContent:"group-data-[selected=true]:text-foreground"}},{variant:"underlined",color:"primary",class:{cursor:"bg-primary",tabContent:"group-data-[selected=true]:text-primary"}},{variant:"underlined",color:"secondary",class:{cursor:"bg-secondary",tabContent:"group-data-[selected=true]:text-secondary"}},{variant:"underlined",color:"success",class:{cursor:"bg-success",tabContent:"group-data-[selected=true]:text-success"}},{variant:"underlined",color:"warning",class:{cursor:"bg-warning",tabContent:"group-data-[selected=true]:text-warning"}},{variant:"underlined",color:"danger",class:{cursor:"bg-danger",tabContent:"group-data-[selected=true]:text-danger"}},{disableAnimation:!0,variant:"underlined",class:{tab:["after:content-['']","after:absolute","after:bottom-0","after:h-[2px]","after:w-[80%]","after:opacity-0","after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]","data-[selected=true]:after:opacity-100"]}},{disableAnimation:!0,color:"default",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-default data-[selected=true]:text-default-foreground"}},{disableAnimation:!0,color:"primary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"}},{disableAnimation:!0,color:"secondary",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground"}},{disableAnimation:!0,color:"success",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-success data-[selected=true]:text-success-foreground"}},{disableAnimation:!0,color:"warning",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground"}},{disableAnimation:!0,color:"danger",variant:["solid","bordered","light"],class:{tab:"data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground"}},{disableAnimation:!0,color:"default",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-foreground"}},{disableAnimation:!0,color:"primary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-primary"}},{disableAnimation:!0,color:"secondary",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-secondary"}},{disableAnimation:!0,color:"success",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-success"}},{disableAnimation:!0,color:"warning",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-warning"}},{disableAnimation:!0,color:"danger",variant:"underlined",class:{tab:"data-[selected=true]:after:bg-danger"}}],compoundSlots:[{variant:"underlined",slots:["tab","tabList","cursor"],class:["rounded-none"]}]});const ye=u.createContext(null),ve=t=>!t.isLayoutDirty&&t.willUpdate(!1);function T(){const t=new Set,e=new WeakMap,a=()=>t.forEach(ve);return{add:r=>{t.add(r),e.set(r,r.addEventListener("willUpdate",a))},remove:r=>{t.delete(r);const s=e.get(r);s&&(s(),e.delete(r)),a()},dirty:a}}const z=t=>t===!0,he=t=>z(t===!0)||t==="id",xe=({children:t,id:e,inherit:a=!0})=>{const r=u.useContext(j),s=u.useContext(ye),[n,l]=se(),o=u.useRef(null),i=r.id||s;o.current===null&&(he(a)&&i&&(e=e?i+"-"+e:i),o.current={id:e,group:z(a)&&r.group||T()});const d=u.useMemo(()=>({...o.current,forceRender:n}),[l]);return u.createElement(j.Provider,{value:d},t)};function $e(t={}){const{rerender:e=!1,delay:a=0}=t,r=u.useRef(!1),[s,n]=u.useState(!1);return u.useEffect(()=>{r.current=!0;let l=null;return e&&(a>0?l=setTimeout(()=>{n(!0)},a):n(!0)),()=>{r.current=!1,e&&n(!1),l&&clearTimeout(l)}},[e]),[u.useCallback(()=>r.current,[]),s]}const B=new WeakMap;function D(t,e,a){return typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${B.get(t)}-${a}-${e}`}function Ke(t,e,a){var r;let{key:s,isDisabled:n,shouldSelectOnPressUp:l}=t,{selectionManager:o,selectedKey:i}=e,d=s===i,c=n||e.isDisabled||e.disabledKeys.has(s),{itemProps:b,isPressed:m}=re({selectionManager:o,key:s,ref:a,isDisabled:c,shouldSelectOnPressUp:l,linkBehavior:"selection"}),$=D(e,s,"tab"),g=D(e,s,"tabpanel"),{tabIndex:x}=b,p=e.collection.getItem(s),f=oe(p==null?void 0:p.props,{isLink:!!(!(p==null||(r=p.props)===null||r===void 0)&&r.href)});return delete f.id,{tabProps:w(f,b,{id:$,"aria-selected":d,"aria-disabled":c||void 0,"aria-controls":d?g:void 0,tabIndex:c?void 0:x,role:"tab"}),isSelected:d,isDisabled:c,isPressed:m}}function Pe(t,e,a){let r=le(a)?void 0:0;var s;const n=D(e,(s=t.id)!==null&&s!==void 0?s:e==null?void 0:e.selectedKey,"tabpanel"),l=E({...t,id:n,"aria-labelledby":D(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:w(l,{tabIndex:r,role:"tabpanel","aria-describedby":t["aria-describedby"],"aria-details":t["aria-details"]})}}class we{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.getPreviousKey(e)}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.getNextKey(e)}getKeyAbove(e){return this.getPreviousKey(e)}getKeyBelow(e){return this.getNextKey(e)}getFirstKey(){let e=this.collection.getFirstKey();return this.disabledKeys.has(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return this.disabledKeys.has(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.disabledKeys.has(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.disabledKeys.has(e));return e}constructor(e,a,r,s=new Set){this.collection=e,this.flipDirection=a==="rtl"&&r==="horizontal",this.disabledKeys=s}}function Ce(t,e,a){let{orientation:r="horizontal",keyboardActivation:s="automatic"}=t,{collection:n,selectionManager:l,disabledKeys:o}=e,{direction:i}=ne(),d=u.useMemo(()=>new we(n,i,r,o),[n,o,r,i]),{collectionProps:c}=de({ref:a,selectionManager:l,keyboardDelegate:d,selectOnFocus:s==="automatic",disallowEmptySelection:!0,scrollRef:a,linkBehavior:"selection"}),b=ie();B.set(e,b);let m=E({...t,id:b});return{tabListProps:{...w(c,m),role:"tablist","aria-orientation":r,tabIndex:void 0}}}var W=N((t,e)=>{var a,r,s;const{as:n,state:l,className:o,slots:i,classNames:d,...c}=t,b=n||"div",m=S(e),{tabPanelProps:$}=Pe(t,l,m),{focusProps:g,isFocused:x,isFocusVisible:p}=V(),f=l.selectedItem,y=(a=f==null?void 0:f.props)==null?void 0:a.children,K=L(d==null?void 0:d.panel,o,(r=f==null?void 0:f.props)==null?void 0:r.className);return y?h.jsx(b,{ref:m,"data-focus":x,"data-focus-visible":p,...w($,g,c),className:(s=i.panel)==null?void 0:s.call(i,{class:K}),"data-slot":"panel",children:y}):null});W.displayName="NextUI.TabPanel";var Le=W,q=N((t,e)=>{var a;const{className:r,as:s,item:n,state:l,classNames:o,isDisabled:i,listRef:d,slots:c,motionProps:b,disableAnimation:m,disableCursorAnimation:$,shouldSelectOnPressUp:g,onClick:x,...p}=t,{key:f}=n,y=S(e),K=s||(t.href?"a":"button"),I=typeof K=="string",{tabProps:A,isSelected:v,isDisabled:_,isPressed:M}=Ke({key:f,isDisabled:i,shouldSelectOnPressUp:g},l,y),F=i||_,{focusProps:Q,isFocused:J,isFocusVisible:X}=V(),{hoverProps:Y,isHovered:R}=ce({isDisabled:F}),Z=L(o==null?void 0:o.tab,r),[,ee]=$e({rerender:!0}),te=()=>{be(x,A.onClick),!(!(y!=null&&y.current)||!(d!=null&&d.current))&&pe(y.current,{scrollMode:"if-needed",behavior:"smooth",block:"end",inline:"end",boundary:d==null?void 0:d.current})};return h.jsxs(K,{ref:y,"data-disabled":P(_),"data-focus":P(J),"data-focus-visible":P(X),"data-hover":P(R),"data-hover-unselected":P((R||M)&&!v),"data-pressed":P(M),"data-selected":P(v),"data-slot":"tab",...w(A,F?{}:{...Q,...Y},G(p,{enabled:I,omitPropNames:new Set(["title"])})),className:(a=c.tab)==null?void 0:a.call(c,{class:Z}),title:p==null?void 0:p.titleValue,type:K==="button"?"button":void 0,onClick:te,children:[v&&!m&&!$&&ee?h.jsx(ue.span,{className:c.cursor({class:o==null?void 0:o.cursor}),"data-slot":"cursor",layoutDependency:!1,layoutId:"cursor",transition:{type:"spring",bounce:.15,duration:.5},...b}):null,h.jsx("div",{className:c.tabContent({class:o==null?void 0:o.tabContent}),"data-slot":"tabContent",children:n.rendered})]})});q.displayName="NextUI.Tab";var Ae=q;function De(t){var e;let a=ge({...t,suppressTextValueWarning:!0,defaultSelectedKey:(e=t.defaultSelectedKey)!==null&&e!==void 0?e:U(t.collection,t.disabledKeys?new Set(t.disabledKeys):new Set)}),{selectionManager:r,collection:s,selectedKey:n}=a,l=u.useRef(n);return u.useEffect(()=>{let o=n;(r.isEmpty||!s.getItem(o))&&(o=U(s,a.disabledKeys),o!=null&&r.setSelectedKeys([o])),(o!=null&&r.focusedKey==null||!r.isFocused&&o!==l.current)&&r.setFocusedKey(o),l.current=o}),{...a,isDisabled:t.isDisabled||!1}}function U(t,e){let a=null;if(t){for(a=t.getFirstKey();e.has(a)&&a!==t.getLastKey();)a=t.getKeyAfter(a);e.has(a)&&a===t.getLastKey()&&(a=t.getFirstKey())}return a}function Ie(t){const[e,a]=fe(t,O.variantKeys),{ref:r,as:s,className:n,classNames:l,children:o,disableCursorAnimation:i,shouldSelectOnPressUp:d=!0,motionProps:c,...b}=e,m=s||"div",$=typeof m=="string",g=S(r),x=De({children:o,...b}),{tabListProps:p}=Ce(b,x,g),f=u.useMemo(()=>O({...a,className:n}),[...Object.values(a),n]),y=L(l==null?void 0:l.base,n),K=u.useMemo(()=>({state:x,slots:f,classNames:l,motionProps:c,listRef:g,shouldSelectOnPressUp:d,disableCursorAnimation:i,isDisabled:t==null?void 0:t.isDisabled,disableAnimation:t==null?void 0:t.disableAnimation}),[x,f,g,c,i,d,t==null?void 0:t.disableAnimation,t==null?void 0:t.isDisabled,l]),I=u.useCallback(v=>({"data-slot":"base",className:f.base({class:L(y,v==null?void 0:v.className)}),...w(G(b,{enabled:$}),v)}),[y,b,f]),A=u.useCallback(v=>({ref:g,"data-slot":"tabList",className:f.tabList({class:L(l==null?void 0:l.tabList,v==null?void 0:v.className)}),...w(p,v)}),[g,p,l,f]);return{Component:m,domRef:g,state:x,values:K,getBaseProps:I,getTabListProps:A}}function H(t,e){var a;const{Component:r,values:s,state:n,getBaseProps:l,getTabListProps:o}=Ie({...t,ref:e}),i=u.useId(),d=!t.disableAnimation&&!t.disableCursorAnimation,c={state:n,listRef:s.listRef,slots:s.slots,classNames:s.classNames,isDisabled:s.isDisabled,motionProps:s.motionProps,disableAnimation:s.disableAnimation,shouldSelectOnPressUp:s.shouldSelectOnPressUp,disableCursorAnimation:s.disableCursorAnimation},b=[...n.collection].map(m=>h.jsx(Ae,{item:m,...c,...m.props},m.key));return h.jsxs(h.Fragment,{children:[h.jsx("div",{...l(),children:h.jsx(r,{...o(),children:d?h.jsx(xe,{id:i,children:b}):b})}),h.jsx(Le,{classNames:s.classNames,slots:s.slots,state:s.state},(a=n.selectedItem)==null?void 0:a.key)]})}var Fe=N(H);H.displayName="NextUI.Tabs";var Ne=me,Re=Ne;export{Re as a,Fe as t};