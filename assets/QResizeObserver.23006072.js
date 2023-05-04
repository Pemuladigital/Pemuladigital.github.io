import{c as w,w as p,v,x as m,y,z as E,g as S,A as b,B as R,C,r as L,f as P,D as z,h as D}from"./index.338254a1.js";const{passive:T}=b,Q=["both","horizontal","vertical"];var V=w({name:"QScrollObserver",props:{axis:{type:String,validator:n=>Q.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(n,{emit:g}){const e={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,c;p(()=>n.scrollTarget,()=>{o(),d()});function l(){t!==null&&t();const u=Math.max(0,R(r)),f=C(r),s={top:u-e.position.top,left:f-e.position.left};if(n.axis==="vertical"&&s.top===0||n.axis==="horizontal"&&s.left===0)return;const h=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";e.position={top:u,left:f},e.directionChanged=e.direction!==h,e.delta=s,e.directionChanged===!0&&(e.direction=h,e.inflectionPoint=e.position),g("scroll",{...e})}function d(){r=E(c,n.scrollTarget),r.addEventListener("scroll",i,T),i(!0)}function o(){r!==void 0&&(r.removeEventListener("scroll",i,T),r=void 0)}function i(u){if(u===!0||n.debounce===0||n.debounce==="0")l();else if(t===null){const[f,s]=n.debounce?[setTimeout(l,n.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];t=()=>{s(f),t=null}}}const{proxy:a}=S();return p(()=>a.$q.lang.rtl,l),v(()=>{c=a.$el.parentNode,d()}),m(()=>{t!==null&&t(),o()}),Object.assign(a,{trigger:i,getPosition:()=>e}),y}});function M(){const n=L(!P.value);return n.value===!1&&v(()=>{n.value=!0}),n}const O=typeof ResizeObserver!="undefined",x=O===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var $=w({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:g}){let e=null,t,r={width:-1,height:-1};function c(o){o===!0||n.debounce===0||n.debounce==="0"?l():e===null&&(e=setTimeout(l,n.debounce))}function l(){if(e!==null&&(clearTimeout(e),e=null),t){const{offsetWidth:o,offsetHeight:i}=t;(o!==r.width||i!==r.height)&&(r={width:o,height:i},g("resize",r))}}const{proxy:d}=S();if(O===!0){let o;const i=a=>{t=d.$el.parentNode,t?(o=new ResizeObserver(c),o.observe(t),l()):a!==!0&&z(()=>{i(!0)})};return v(()=>{i()}),m(()=>{e!==null&&clearTimeout(e),o!==void 0&&(o.disconnect!==void 0?o.disconnect():t&&o.unobserve(t))}),y}else{let a=function(){e!==null&&(clearTimeout(e),e=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",c,b.passive),i=void 0)},u=function(){a(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",c,b.passive),l())};const o=M();let i;return v(()=>{z(()=>{t=d.$el,t&&u()})}),m(a),d.trigger=c,()=>{if(o.value===!0)return D("object",{style:x.style,tabindex:-1,type:"text/html",data:x.url,"aria-hidden":"true",onLoad:u})}}}});export{V as Q,$ as a};
