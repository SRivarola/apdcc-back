import{aX as ue,r as l,k as pe,B as Z,l as C,v as fe,a1 as be,a2 as $e,aY as me,aN as ve,G as he,aZ as W,a_ as Te,a$ as xe,b0 as ge,b1 as Pe,C as R,b2 as Y,z as ye,b3 as Oe,w as Ce,j as p,E as we,ar as De,au as Re,b4 as G,aT as Ee}from"./index-1H0UXaiS.js";import{w as je}from"./chunk-AMSULWPV-aeVZFjgM.js";const Ae=1500,X=500;let y={},Ie=0,A=!1,T=null,O=null;function Ne(e={}){let{delay:t=Ae,closeDelay:s=X}=e,{isOpen:i,open:m,close:f}=ue(e),r=l.useMemo(()=>`${++Ie}`,[]),o=l.useRef(),v=()=>{y[r]=x},c=()=>{for(let n in y)n!==r&&(y[n](!0),delete y[n])},a=()=>{clearTimeout(o.current),o.current=null,c(),v(),A=!0,m(),T&&(clearTimeout(T),T=null),O&&(clearTimeout(O),O=null)},x=n=>{n||s<=0?(clearTimeout(o.current),o.current=null,f()):o.current||(o.current=setTimeout(()=>{o.current=null,f()},s)),T&&(clearTimeout(T),T=null),A&&(O&&clearTimeout(O),O=setTimeout(()=>{delete y[r],O=null,A=!1},Math.max(X,s)))},g=()=>{c(),v(),!i&&!T&&!A?T=setTimeout(()=>{T=null,A=!0,a()},t):i||a()};return l.useEffect(()=>()=>{clearTimeout(o.current),y[r]&&delete y[r]},[r]),{isOpen:i,open:n=>{!n&&t>0&&!o.current?g():a()},close:x}}function He(e,t){let s=pe(e,{labelable:!0}),{hoverProps:i}=Z({onHoverStart:()=>t==null?void 0:t.open(!0),onHoverEnd:()=>t==null?void 0:t.close()});return{tooltipProps:C(s,i,{role:"tooltip"})}}function Se(e,t,s){let{isDisabled:i,trigger:m}=e,f=fe(),r=l.useRef(!1),o=l.useRef(!1),v=()=>{(r.current||o.current)&&t.open(o.current)},c=b=>{!r.current&&!o.current&&t.close(b)};l.useEffect(()=>{let b=h=>{s&&s.current&&h.key==="Escape"&&(h.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",b,!0),()=>{document.removeEventListener("keydown",b,!0)}},[s,t]);let a=()=>{m!=="focus"&&(me()==="pointer"?r.current=!0:r.current=!1,v())},x=()=>{m!=="focus"&&(o.current=!1,r.current=!1,c())},g=()=>{o.current=!1,r.current=!1,c(!0)},n=()=>{ve()&&(o.current=!0,v())},d=()=>{o.current=!1,r.current=!1,c(!0)},{hoverProps:w}=Z({isDisabled:i,onHoverStart:a,onHoverEnd:x}),{pressProps:D}=be({onPressStart:g}),{focusableProps:u}=$e({isDisabled:i,onFocus:n,onBlur:d},s);return{triggerProps:{"aria-describedby":t.isOpen?f:void 0,...C(u,w,D)},tooltipProps:{id:f}}}function ke(e){const[t,s]=he(e,W.variantKeys),{ref:i,as:m,isOpen:f,content:r,children:o,defaultOpen:v,onOpenChange:c,isDisabled:a,trigger:x,shouldFlip:g=!0,containerPadding:n=12,placement:d="top",delay:w=0,closeDelay:D=500,showArrow:u=!1,offset:b=7,crossOffset:h=0,isDismissable:J,shouldCloseOnBlur:Q=!0,portalContainer:ee,isKeyboardDismissDisabled:te=!1,updatePositionDeps:F=[],shouldCloseOnInteractOutside:oe,className:re,onClose:z,motionProps:le,classNames:E,...L}=t,se=m||"div",j=Ne({delay:w,closeDelay:D,isDisabled:a,defaultOpen:v,isOpen:f,onOpenChange:P=>{c==null||c(P),P||z==null||z()}}),I=l.useRef(null),N=l.useRef(null),H=l.useId(),$=j.isOpen&&!a;l.useImperativeHandle(i,()=>Te(N));const{triggerProps:B,tooltipProps:ae}=Se({isDisabled:a,trigger:x},j,I),{tooltipProps:M}=He({isOpen:$,...C(t,ae)},j),{overlayProps:V,placement:S,updatePosition:ne}=xe({isOpen:$,targetRef:I,placement:Oe(d),overlayRef:N,offset:u?b+3:b,crossOffset:h,shouldFlip:g,containerPadding:n});l.useLayoutEffect(()=>{F.length&&ne()},F);const{overlayProps:K}=ge({isOpen:$,onClose:j.close,isDismissable:J,shouldCloseOnBlur:Q,isKeyboardDismissDisabled:te,shouldCloseOnInteractOutside:oe},N),k=l.useMemo(()=>{var P,_,U;return W({...s,radius:(P=e==null?void 0:e.radius)!=null?P:"md",size:(_=e==null?void 0:e.size)!=null?_:"md",shadow:(U=e==null?void 0:e.shadow)!=null?U:"sm"})},[...Object.values(s),e==null?void 0:e.radius,e==null?void 0:e.size,e==null?void 0:e.shadow]),ie=l.useCallback((P={},_=null)=>({...C(B,P),ref:Pe(_,I),"aria-describedby":$?H:void 0}),[B,$,H,j]),ce=l.useCallback(()=>({ref:N,"data-slot":"base","data-open":R($),"data-arrow":R(u),"data-disabled":R(a),"data-placement":Y(S,d),...C(M,K,L),style:C(V.style,L.style,t.style),className:k.base({class:E==null?void 0:E.base}),id:H}),[k,$,u,a,S,d,M,K,L,V,t,H]),de=l.useCallback(()=>({"data-slot":"content","data-open":R($),"data-arrow":R(u),"data-disabled":R(a),"data-placement":Y(S,d),className:k.content({class:ye(E==null?void 0:E.content,re)})}),[k,$,u,a,S,d,E]);return{Component:se,content:r,children:o,isOpen:$,triggerRef:I,showArrow:u,portalContainer:ee,placement:d,disableAnimation:e==null?void 0:e.disableAnimation,isDisabled:a,motionProps:le,getTooltipContentProps:de,getTriggerProps:ie,getTooltipProps:ce}}var q=Ce((e,t)=>{const{Component:s,children:i,content:m,isOpen:f,portalContainer:r,placement:o,disableAnimation:v,motionProps:c,getTriggerProps:a,getTooltipProps:x,getTooltipContentProps:g}=ke({...e,ref:t});let n;try{const h=l.Children.only(i);n=l.cloneElement(h,a(h.props,h.ref))}catch{n=p.jsx("span",{}),je("Tooltip must have only one child node. Please, check your code.")}const{ref:d,id:w,style:D,...u}=x(),b=p.jsx("div",{ref:d,id:w,style:D,children:p.jsx(we.div,{animate:"enter",exit:"exit",initial:"exit",variants:De.scaleSpring,...C(c,u),style:{...Re(o)},children:p.jsx(s,{...g(),children:m})})});return p.jsxs(p.Fragment,{children:[n,v&&f?p.jsx(G,{portalContainer:r,children:p.jsx("div",{ref:d,id:w,style:D,...u,children:p.jsx(s,{...g(),children:m})})}):p.jsx(Ee,{children:f?p.jsx(G,{portalContainer:r,children:b}):null})]})});q.displayName="NextUI.Tooltip";var Fe=q;export{Fe as t};