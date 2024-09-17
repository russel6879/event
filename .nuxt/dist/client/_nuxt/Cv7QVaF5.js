import{_ as p}from"./4vhGkfJh.js";import{b as u,u as _}from"./BghaiIeg.js";import{a as h,B as g,C as v,N as e,Y as b,Z as l,a2 as i,P as c,k as f,D as x,F as w,a4 as r}from"./zhf3nTjy.js";import{a as y}from"./Bzf_yli5.js";import"./B4uVmeYG.js";const k=r('<section class="breadcrumb-area bread-bg"><div class="overlay"></div><div class="container"><div class="breadcrumb-content text-center"><h2 class="sec__title text-white mb-3">Login</h2><ul class="bread-list"><li><a href="/">home</a></li><li>login</li></ul></div></div><div class="bread-svg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path></svg></div></section>',1),N={class:"contact-area padding-top-60px padding-bottom-90px"},M={class:"container"},L={class:"col-lg-7 mx-auto"},R={class:"card-body"},S=r('<div class="text-center"><h4 class="font-size-28 font-weight-semi-bold mb-1"> Login to your account </h4></div><div class="d-flex align-items-center"><hr class="border-top-gray flex-grow-1"><hr class="border-top-gray flex-grow-1"></div>',2),V={class:"form-group"},B=e("label",{class:"label-text"},"Username or email",-1),U={class:"form-group"},C=e("label",{class:"label-text"},"Password",-1),F={class:"position-relative"},P=e("a",{href:"javascript:void(0)",class:"position-absolute top-0 right-0 h-100 toggle-password",title:"toggle show/hide password"},[e("i",{class:"far fa-eye eye-on"}),e("i",{class:"far fa-eye-slash eye-off"})],-1),T=r('<div class="form-group d-flex align-items-center justify-content-between"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="RememberMe"><label class="custom-control-label" for="RememberMe">Remember Me</label></div><a href="/recover" class="btn-link">Forgot password?</a></div><button class="theme-btn border-0" type="submit"> Login Now </button>',2),j={class:"mt-3"},z={__name:"login",setup(q){const s=h({email:"",password:""}),n=u(),d=async()=>{try{const o=await y.login(s.value);localStorage.setItem("access_token",o.access_token),localStorage.setItem("user_id",o.user.id),n.push("/user-dashboard")}catch(o){console.error("Error logging in:",o),_().$toast.error("Failed to login. Please try again.",{autoClose:5e3,theme:"colored",dangerouslyHTMLString:!0})}};return(o,t)=>{const m=p;return g(),v(w,null,[k,e("section",N,[e("div",M,[e("div",L,[e("form",{onSubmit:b(d,["prevent"]),class:"card"},[e("div",R,[S,e("div",V,[B,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s.value.email=a),class:"form-control form--control ps-3",type:"text",placeholder:"Username, or email",required:""},null,512),[[i,s.value.email]])]),e("div",U,[C,e("div",F,[l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s.value.password=a),class:"form-control form--control ps-3 password-field",type:"password",placeholder:"Password",required:""},null,512),[[i,s.value.password]]),P])]),T,e("p",j,[c(" Not a member? "),f(m,{to:"/signup",class:"btn-link"},{default:x(()=>[c("Register")]),_:1})])])],32)])])])],64)}}};export{z as default};
