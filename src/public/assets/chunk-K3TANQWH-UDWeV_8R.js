import{u as Z}from"./chunk-TC4QW7OA-NfwdGWv6.js";import{r as o,Q as q,j as l,C as I,W as F}from"./index-ol82rnvy.js";import{a as J,_ as K}from"./objectWithoutPropertiesLoose-pdUxmcoj.js";var V=o.useLayoutEffect,ee=function(e){var t=o.useRef(e);return V(function(){t.current=e}),t},P=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},te=function(e,t){var r=o.useRef();return o.useCallback(function(i){e.current=i,r.current&&P(r.current,null),r.current=t,t&&P(t,i)},[t])},M={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},re=function(e){Object.keys(M).forEach(function(t){e.style.setProperty(t,M[t],"important")})},B=re,a=null,$=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function ne(n,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),a||(a=document.createElement("textarea"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-hidden","true"),B(a)),a.parentNode===null&&document.body.appendChild(a);var i=n.paddingSize,u=n.borderSize,d=n.sizingStyle,b=d.boxSizing;Object.keys(d).forEach(function(p){var m=p;a.style[m]=d[m]}),B(a),a.value=e;var s=$(a,n);a.value=e,s=$(a,n),a.value="x";var f=a.scrollHeight-i,c=f*t;b==="border-box"&&(c=c+i+u),s=Math.max(c,s);var h=f*r;return b==="border-box"&&(h=h+i+u),s=Math.min(h,s),[s,f]}var A=function(){},ie=function(e,t){return e.reduce(function(r,i){return r[i]=t[i],r},{})},ae=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],oe=!!document.documentElement.currentStyle,de=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=ie(ae,t),i=r.boxSizing;if(i==="")return null;oe&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var u=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),d=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:u,borderSize:d}},se=de;function N(n,e,t){var r=ee(t);o.useLayoutEffect(function(){var i=function(d){return r.current(d)};if(n)return n.addEventListener(e,i),function(){return n.removeEventListener(e,i)}},[])}var ue=function(e){N(window,"resize",e)},le=function(e){N(document.fonts,"loadingdone",e)},ce=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],he=function(e,t){var r=e.cacheMeasurements,i=e.maxRows,u=e.minRows,d=e.onChange,b=d===void 0?A:d,s=e.onHeightChange,f=s===void 0?A:s,c=J(e,ce),h=c.value!==void 0,p=o.useRef(null),m=te(p,t),L=o.useRef(0),z=o.useRef(),v=function(){var g=p.current,x=r&&z.current?z.current:se(g);if(x){z.current=x;var H=ne(x,g.value||g.placeholder||"x",u,i),S=H[0],E=H[1];L.current!==S&&(L.current=S,g.style.setProperty("height",S+"px","important"),f(S,{rowHeight:E}))}},C=function(g){h||v(),b(g)};return o.useLayoutEffect(v),ue(v),le(v),o.createElement("textarea",K({},c,{onChange:C,ref:m}))},fe=o.forwardRef(he),k=q(({style:n,minRows:e=3,maxRows:t=8,cacheMeasurements:r=!1,disableAutosize:i=!1,onHeightChange:u,...d},b)=>{const{Component:s,label:f,description:c,startContent:h,endContent:p,hasHelper:m,shouldLabelBeOutside:L,shouldLabelBeInside:z,errorMessage:v,getBaseProps:C,getLabelProps:R,getInputProps:g,getInnerWrapperProps:x,getInputWrapperProps:H,getHelperWrapperProps:S,getDescriptionProps:E,getErrorMessageProps:_}=Z({...d,ref:b,isMultiline:!0}),[O,U]=o.useState(e>1),[Y,D]=o.useState(!1),T=f?l.jsx("label",{...R(),children:f}):null,y=g(),G=(w,W)=>{if(e===1&&U(w>=W.rowHeight*2),t>e){const X=w>=t*W.rowHeight;D(X)}u==null||u(w,W)},j=i?l.jsx("textarea",{...y,style:I(y.style,n??{})}):l.jsx(fe,{...y,cacheMeasurements:r,"data-hide-scroll":F(!Y),maxRows:t,minRows:e,style:I(y.style,n??{}),onHeightChange:G}),Q=o.useMemo(()=>h||p?l.jsxs("div",{...x(),children:[h,j,p]}):l.jsx("div",{...x(),children:j}),[h,y,p,x]);return l.jsxs(s,{...C(),children:[L?T:null,l.jsxs("div",{...H(),"data-has-multiple-rows":F(O),children:[z?T:null,Q]}),m?l.jsx("div",{...S(),children:v?l.jsx("div",{..._(),children:v}):c?l.jsx("div",{...E(),children:c}):null}):null]})});k.displayName="NextUI.Textarea";var xe=k;export{xe as t};