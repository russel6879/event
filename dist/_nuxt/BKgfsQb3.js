const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Xbr0Rz7q.js","./PojQWPIc.js","./_yjeeBRm.js","./swiper-vue.7m7mx8Sh.css","./entry.kBz33N0H.css","./Editor.lX4_aKuX.css"])))=>i.map(i=>d[i]);
import{_ as w,a as k,b as q,u as V,c as E}from"./PojQWPIc.js";import{c as u,y as U,C as p,D as c,a1 as h,O as t,Q as a,X as L,Y as n,a2 as d,a3 as C,l as D,u as F,a0 as T,F as N,J as P}from"./_yjeeBRm.js";import{e as m}from"./CTCEojIl.js";import"./B4uVmeYG.js";const R={class:"add-listing-area padding-top-60px padding-bottom-90px"},B={class:"container"},M={class:"card"},A={class:"card-body"},I={class:"row mt-4"},S={class:"col-lg-6"},H={class:"form-group"},O={class:"col-lg-6"},J={class:"form-group"},K={class:"col-lg-6"},Q={class:"form-group"},W={class:"col-lg-6"},X={class:"form-group"},Y={class:"col-lg-6"},Z={class:"form-group"},$={class:"col-lg-6"},j={class:"form-group"},z={class:"col-lg-12"},G={class:"form-group"},ee={class:"col-lg-12"},te={class:"form-group"},se={class:"col-lg-12"},le={class:"form-group"},oe={class:"col-lg-12"},ae={class:"form-group"},ne={class:"col-lg-12"},de={class:"form-group"},re=["src"],ie={__name:"[id]",setup(ue){const v=k();q();const f=P(()=>E(()=>import("./Xbr0Rz7q.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),r=u(""),_=u(0),s=u({title:"",user_id:"",event_type:"",country:"",venue:"",event_date:"",event_time:"",category:"",website_link:"",video_link:"",featured_photo:""}),i=u(null);U(async()=>{const o=v.params.id;if(o)try{const e=await m.getEvent(o);s.value={title:e.title,user_id:e.user_id,event_type:e.event_type,country:e.country,venue:e.venue,event_date:e.event_date,event_time:e.event_time,category:e.category,website_link:e.website_link,video_link:e.video_link,featured_photo:null},r.value=e.description}catch(e){console.error("Error fetching event:",e)}});const g=()=>{s.value={title:"",user_id:"",event_type:"",country:"",venue:"",event_date:"",event_time:"",category:"",website_link:"",video_link:"",featured_photo:""},r.value="",_.value+=1,i.value=null},b=o=>{const e=o.target.files[0];if(s.value.featured_photo=e,e){const l=new FileReader;l.onload=x=>{i.value=x.target.result},l.readAsDataURL(e)}},y=async()=>{try{const o=new FormData;o.append("title",s.value.title),o.append("description",r.value),o.append("featured_photo",s.value.featured_photo);const e=v.params.id;await m.updateEvent(e,o),V().$toast.success("Event updated successfully!",{autoClose:5e3,theme:"colored",dangerouslyHTMLString:!0}),g()}catch(o){console.error("Error updating event:",o),alert("Failed to update event. Please try again.")}};return(o,e)=>(p(),c(N,null,[e[26]||(e[26]=h('<section class="breadcrumb-area bread-bg" data-v-3945dfdd><div class="overlay" data-v-3945dfdd></div><div class="container" data-v-3945dfdd><div class="breadcrumb-content text-center" data-v-3945dfdd><h2 class="sec__title text-white mb-3" data-v-3945dfdd>Edit Listing</h2><ul class="bread-list" data-v-3945dfdd><li data-v-3945dfdd><a href="/" data-v-3945dfdd>Home</a></li><li data-v-3945dfdd>Listing</li><li data-v-3945dfdd>Edit Listing</li></ul></div></div><div class="bread-svg" data-v-3945dfdd><svg viewBox="0 0 500 150" preserveAspectRatio="none" data-v-3945dfdd><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" data-v-3945dfdd></path></svg></div></section>',1)),t("section",R,[t("div",B,[e[25]||(e[25]=t("div",{class:"alert alert-info fade show mb-4",role:"alert"},[t("p",null,[t("strong",{class:"font-weight-semi-bold"},"Returning User? Please"),a(),t("a",{href:"/login",class:"alert-link font-weight-semi-bold"},"log in"),a(" and if you are a New User, Continue Below and register along with this submission.")])],-1)),t("form",{onSubmit:L(y,["prevent"])},[t("div",M,[t("div",A,[e[22]||(e[22]=t("h4",{class:"card-title mb-3"},"Basic Information",-1)),e[23]||(e[23]=t("hr",{class:"border-top-gray my-0"},null,-1)),t("div",I,[t("div",S,[t("div",H,[e[10]||(e[10]=t("label",{class:"label-text"},[a("Title "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"text","onUpdate:modelValue":e[0]||(e[0]=l=>s.value.title=l),placeholder:"Title",required:""},null,512),[[d,s.value.title]])])]),t("div",O,[t("div",J,[e[12]||(e[12]=t("label",{class:"label-text"},[a("Event Type "),t("span",{class:"required"},"*")],-1)),n(t("select",{class:"form-control form--control ps-3","onUpdate:modelValue":e[1]||(e[1]=l=>s.value.event_type=l),required:""},e[11]||(e[11]=[t("option",{value:"online"},"Online",-1),t("option",{value:"physical"},"Physical",-1),t("option",{value:"hybrid"},"Hybrid",-1)]),512),[[C,s.value.event_type]])])]),t("div",K,[t("div",Q,[e[13]||(e[13]=t("label",{class:"label-text"},[a("Country "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"text","onUpdate:modelValue":e[2]||(e[2]=l=>s.value.country=l),placeholder:"Country",required:""},null,512),[[d,s.value.country]])])]),t("div",W,[t("div",X,[e[14]||(e[14]=t("label",{class:"label-text"},[a("Venue "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"text","onUpdate:modelValue":e[3]||(e[3]=l=>s.value.venue=l),placeholder:"Venue",required:""},null,512),[[d,s.value.venue]])])]),t("div",Y,[t("div",Z,[e[15]||(e[15]=t("label",{class:"label-text"},[a("Event Date "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"date","onUpdate:modelValue":e[4]||(e[4]=l=>s.value.event_date=l),required:""},null,512),[[d,s.value.event_date]])])]),t("div",$,[t("div",j,[e[16]||(e[16]=t("label",{class:"label-text"},[a("Event Time "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"time","onUpdate:modelValue":e[5]||(e[5]=l=>s.value.event_time=l),required:""},null,512),[[d,s.value.event_time]])])]),t("div",z,[t("div",G,[e[17]||(e[17]=t("label",{class:"label-text"},[a("Category "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"text","onUpdate:modelValue":e[6]||(e[6]=l=>s.value.category=l),required:""},null,512),[[d,s.value.category]])])]),t("div",ee,[t("div",te,[e[18]||(e[18]=t("label",{class:"label-text"},[a("Website Link "),t("span",{class:"required"},"*")],-1)),n(t("input",{class:"form-control form--control ps-3",type:"url","onUpdate:modelValue":e[7]||(e[7]=l=>s.value.website_link=l),required:""},null,512),[[d,s.value.website_link]])])]),t("div",se,[t("div",le,[e[19]||(e[19]=t("label",{class:"label-text"},[a("Description "),t("span",{class:"required"},"*")],-1)),D(F(f),{content:r.value,"onUpdate:content":e[8]||(e[8]=l=>r.value=l)},null,8,["content"])])]),t("div",oe,[t("div",ae,[e[20]||(e[20]=t("label",{class:"label-text"},"Video Link",-1)),n(t("input",{class:"form-control form--control ps-3",type:"url","onUpdate:modelValue":e[9]||(e[9]=l=>s.value.video_link=l)},null,512),[[d,s.value.video_link]])])]),t("div",ne,[t("div",de,[e[21]||(e[21]=t("label",{class:"label-text"},[a("Featured Photo "),t("span",{class:"required"},"*")],-1)),t("input",{class:"form-control form--control ps-3",type:"file",onChange:b},null,32),i.value?(p(),c("img",{key:0,src:i.value,class:"img-thumbnail mt-2"},null,8,re)):T("",!0)])])])])]),e[24]||(e[24]=t("button",{class:"theme-btn border-0 mt-3",type:"submit"},"Update Listing",-1))],32)])])],64))}},fe=w(ie,[["__scopeId","data-v-3945dfdd"]]);export{fe as default};