import{c as R,e as w,a,h as s,i as E,p as q,l as P,d as K,g as H,r as u,f as M,j as z,k as m,w as O,o as I,_ as N,m as U,n as V,q as _,s as A,t as $}from"./index.992c2cc2.js";import{h as D,a as G}from"./render.b84ce0b8.js";import{Q as J,a as L}from"./QResizeObserver.625828c7.js";var X=R({name:"QPageContainer",setup(t,{slots:h}){const{proxy:{$q:r}}=H(),n=E(P,w);if(n===w)return console.error("QPageContainer needs to be child of QLayout"),w;q(K,!0);const d=a(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>s("div",{class:"q-page-container",style:d.value},D(h.default))}}),Y=R({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:h,emit:r}){const{proxy:{$q:n}}=H(),d=u(null),i=u(n.screen.height),y=u(t.container===!0?0:n.screen.width),S=u({position:0,direction:"down",inflectionPoint:0}),v=u(0),l=u(M.value===!0?0:z()),Q=a(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),T=a(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),F=a(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),W=a(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function B(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=o,t.onScroll!==void 0&&r("scroll",o)}}function k(e){const{height:o,width:c}=e;let f=!1;i.value!==o&&(f=!0,i.value=o,t.onScrollHeight!==void 0&&r("scrollHeight",o),b()),y.value!==c&&(f=!0,y.value=c),f===!0&&t.onResize!==void 0&&r("resize",e)}function j({height:e}){v.value!==e&&(v.value=e,b())}function b(){if(t.container===!0){const e=i.value>v.value?z():0;l.value!==e&&(l.value=e)}}let g=null;const x={instances:{},view:a(()=>t.view),isContainer:a(()=>t.container),rootRef:d,height:i,containerHeight:v,scrollbarWidth:l,totalWidth:a(()=>y.value+l.value),rows:a(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:m({size:0,offset:0,space:!1}),right:m({size:300,offset:0,space:!1}),footer:m({size:0,offset:0,space:!1}),left:m({size:300,offset:0,space:!1}),scroll:S,animate(){g!==null?clearTimeout(g):document.body.classList.add("q-body--layout-animate"),g=setTimeout(()=>{g=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,c){x[e][o]=c}};if(q(P,x),z()>0){let c=function(){e=null,o.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(c,300)},p=function(C){e!==null&&C==="remove"&&(clearTimeout(e),c()),window[`${C}EventListener`]("resize",f)},e=null;const o=document.body;O(()=>t.container!==!0?"add":"remove",p),t.container!==!0&&p("add"),I(()=>{p("remove")})}return()=>{const e=G(h.default,[s(J,{onScroll:B}),s(L,{onResize:k})]),o=s("div",{class:Q.value,style:T.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?s("div",{class:"q-layout-container overflow-hidden",ref:d},[s(L,{onResize:j}),s("div",{class:"absolute-full",style:F.value},[s("div",{class:"scroll",style:W.value},[o])])]):o}}});const Z={};function ee(t,h){const r=A("router-view");return U(),V(Y,{view:"lHh Lpr lFf"},{default:_(()=>[$(X,null,{default:_(()=>[$(r)]),_:1})]),_:1})}var ie=N(Z,[["render",ee]]);export{ie as default};
