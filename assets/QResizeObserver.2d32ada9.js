import{b as x,g as A,c as O}from"./dom.434377d1.js";import{w as T,x as p,y as w,z as L,g as P,A as g,r as Q,d as W,B as z,h as q}from"./index.c375c8bb.js";const D=[null,document,document.body,document.scrollingElement,document.documentElement];function F(e,n){let t=A(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return D.includes(t)?window:t}function C(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function R(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function H(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=C(e);if(t<=0){i!==n&&h(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;h(e,a),a!==n&&H(e,n,t-r,c)})}function M(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=R(e);if(t<=0){i!==n&&b(e,n);return}requestAnimationFrame(c=>{const r=c-o,a=i+(n-i)/Math.max(r,t)*r;b(e,a),a!==n&&M(e,n,t-r,c)})}function h(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function b(e,n){if(e===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=n}function j(e,n,t){if(t){H(e,n,t);return}h(e,n)}function k(e,n,t){if(t){M(e,n,t);return}b(e,n)}let v;function B(){if(v!==void 0)return v;const e=document.createElement("p"),n=document.createElement("div");x(e,{width:"100%",height:"200px"}),x(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=n.clientWidth),n.remove(),v=t-o,v}const{passive:S}=g,N=["both","horizontal","vertical"];var I=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>N.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,i,c;T(()=>e.scrollTarget,()=>{s(),a()});function r(){o!==null&&o();const f=Math.max(0,C(i)),m=R(i),u={top:f-t.position.top,left:m-t.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const y=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";t.position={top:f,left:m},t.directionChanged=t.direction!==y,t.delta=u,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),n("scroll",{...t})}function a(){i=F(c,e.scrollTarget),i.addEventListener("scroll",l,S),l(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",l,S),i=void 0)}function l(f){if(f===!0||e.debounce===0||e.debounce==="0")r();else if(o===null){const[m,u]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];o=()=>{u(m),o=null}}}const{proxy:d}=P();return T(()=>d.$q.lang.rtl,r),p(()=>{c=d.$el.parentNode,a()}),w(()=>{o!==null&&o(),s()}),Object.assign(d,{trigger:l,getPosition:()=>t}),L}});function X(){const e=Q(!W.value);return e.value===!1&&p(()=>{e.value=!0}),e}const V=typeof ResizeObserver!="undefined",E=V===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var U=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let t=null,o,i={width:-1,height:-1};function c(s){s===!0||e.debounce===0||e.debounce==="0"?r():t===null&&(t=setTimeout(r,e.debounce))}function r(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:s,offsetHeight:l}=o;(s!==i.width||l!==i.height)&&(i={width:s,height:l},n("resize",i))}}const{proxy:a}=P();if(V===!0){let s;const l=d=>{o=a.$el.parentNode,o?(s=new ResizeObserver(c),s.observe(o),r()):d!==!0&&z(()=>{l(!0)})};return p(()=>{l()}),w(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():o&&s.unobserve(o))}),L}else{let d=function(){t!==null&&(clearTimeout(t),t=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",c,g.passive),l=void 0)},f=function(){d(),o&&o.contentDocument&&(l=o.contentDocument.defaultView,l.addEventListener("resize",c,g.passive),r())};const s=X();let l;return p(()=>{z(()=>{o=a.$el,o&&f()})}),w(d),a.trigger=c,()=>{if(s.value===!0)return q("object",{style:E.style,tabindex:-1,type:"text/html",data:E.url,"aria-hidden":"true",onLoad:f})}}}});export{I as Q,U as a,k as b,B as g,j as s};
