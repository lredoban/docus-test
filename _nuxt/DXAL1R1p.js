import{d,G as a,W as b,c as S,h as v,n as w,H as f,e as I,k as _,u as P,aq as C,L as c,r as x,a1 as D}from"./bQmF0_h8.js";import E from"./rxJaCqkI.js";import"./BMyWW4-y.js";import"./C6w2OZjJ.js";import"./UhHP790m.js";import"./mTHRvK45.js";import"./Dx0Z7p6n.js";import"./BGDLOcEW.js";import"./76o_WpOd.js";import"./DvkFJiKI.js";import"./9LHvnK76.js";import"./Pshvrbt-.js";const j=d({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const n=a(()=>((t=s)=>t.top)()),o=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),l=a(()=>((t=s)=>t.zIndex)()),m=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),y=a(()=>((t=s)=>`blur(${t.blur})`)()),h=a(()=>((t=s)=>{var i,p,u;return`linear-gradient(97.62deg, ${(i=t==null?void 0:t.colors)==null?void 0:i[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(u=t==null?void 0:t.colors)==null?void 0:u[2]} 98.48%)`})()),s=e,{$pinceau:$}=b(s,void 0,{_cCN_top:n,_eih_insetInlineStart:o,_IfB_insetInlineEnd:r,_SsE_zIndex:l,_wj8_maxWidth:m,_t33_height:g,_Jfd_filter:y,_yUj_background:h});return(t,i)=>(I(),S("div",{class:w(["ellipsis",[f($)]])},i[0]||(i[0]=[v("div",{class:"ellipsis-item"},null,-1)]),2))}}),z=_(j,[["__scopeId","data-v-afd30313"]]);async function B(e){P();const n=f(e);{const{data:o}=await C(`nuxt-component-meta${n?`-${n}`:""}`,()=>$fetch(`/api/component-meta${n?`/${n}`:""}`));return a(()=>o.value)}}const N=d({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const n=a(()=>D(e.component)),o=x({...e.props}),r=await B(e.component);return{as:n,formProps:o,componentData:r}},render(e){const n=Object.entries(this.$slots).reduce((o,[r,l])=>{if(r.startsWith("component-")){const m=r.replace("component-","");o[m]=l}return o},{});return c("div",{class:"component-playground"},[c("div",{class:"component-playground-wrapper"},[c(z,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),c(e.as,{...e.formProps,class:"component-playground-component"},{...n})]),c(E,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":o=>e.formProps=o})])}}),M=_(N,[["__scopeId","data-v-fcd67bbf"]]);export{M as default};
