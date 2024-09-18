import{_ as u}from"./DXXRXNzy.js";import{c,C as f,D as v,a1 as n,O as s,X as b,Y as a,a2 as l,Q as i,l as g,E as w,F as x}from"./_yjeeBRm.js";import{a as y}from"./DUIjPYqs.js";import{u as h}from"./PojQWPIc.js";import"./B4uVmeYG.js";const U={class:"contact-area padding-top-60px padding-bottom-90px"},V={class:"container"},A={class:"col-lg-7 mx-auto"},C={class:"card-body"},k={class:"form-group"},D={class:"form-group"},N={class:"form-group"},S={class:"position-relative"},F={class:"form-group"},P={class:"form-group"},B={class:"form-group"},E={class:"form-group"},L={class:"mt-3"},Y={__name:"signup",setup(M){const t=c({name:"",email:"",password:"",address:"",phone:"",description:"",website:""}),d=()=>{t.value={name:"",email:"",password:"",address:"",phone:"",description:"",website:""}},p=async()=>{try{const r={name:t.value.name,address:t.value.address,description:t.value.description,phone:t.value.phone,email:t.value.email,password:t.value.password,website:t.value.website};await y.registerUser(r),h().$toast.success("User registered successfully!",{autoClose:5e3,theme:"colored",dangerouslyHTMLString:!0}),d()}catch(r){console.error("Error registering user:",r),alert("Failed to register user. Please try again.")}};return(r,e)=>{const m=u;return f(),v(x,null,[e[21]||(e[21]=n('<section class="breadcrumb-area bread-bg"><div class="overlay"></div><div class="container"><div class="breadcrumb-content text-center"><h2 class="sec__title text-white mb-3">Sign Up</h2><ul class="bread-list"><li><a href="index.html">home</a></li><li>Sign Up</li></ul></div></div><div class="bread-svg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path></svg></div></section>',1)),s("section",U,[s("div",V,[s("div",A,[s("form",{onSubmit:b(p,["prevent"]),class:"card"},[s("div",C,[e[18]||(e[18]=n('<div class="text-center"><h4 class="font-size-28 font-weight-semi-bold mb-1"> Create an account! </h4><div class="d-flex flex-wrap align-items-center justify-content-between my-4 d-none"><a href="#" class="theme-btn flex-grow-1 mx-1 my-1"><i class="fab fa-google me-2"></i>Google</a><a href="#" class="theme-btn flex-grow-1 mx-1 my-1 bg-5"><i class="fab fa-facebook-f me-2"></i>Facebook</a><a href="#" class="theme-btn flex-grow-1 mx-1 my-1 bg-6"><i class="fab fa-twitter me-2"></i>Twitter</a></div></div><div class="d-flex align-items-center"><hr class="border-top-gray flex-grow-1"><hr class="border-top-gray flex-grow-1"></div>',2)),s("div",k,[e[7]||(e[7]=s("label",{class:"label-text"},"Company Name",-1)),a(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.value.name=o),class:"form-control form--control ps-3",type:"text",name:"name",placeholder:"e.g. Alex"},null,512),[[l,t.value.name]])]),s("div",D,[e[8]||(e[8]=s("label",{class:"label-text"},"Email Address",-1)),a(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.email=o),class:"form-control form--control ps-3",type:"email",name:"email",placeholder:"e.g. you@example.com"},null,512),[[l,t.value.email]])]),s("div",N,[e[10]||(e[10]=s("label",{class:"label-text"},"Password",-1)),s("div",S,[a(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.password=o),class:"form-control form--control ps-3 password-field",type:"password",name:"password",placeholder:"Password"},null,512),[[l,t.value.password]]),e[9]||(e[9]=s("a",{href:"javascript:void(0)",class:"position-absolute top-0 right-0 h-100 toggle-password",title:"toggle show/hide password"},[s("i",{class:"far fa-eye eye-on"}),s("i",{class:"far fa-eye-slash eye-off"})],-1))]),e[11]||(e[11]=s("p",{class:"font-size-14 mt-1 line-height-20 font-weight-regular"}," Your password must be at least 6 characters long and must contain letters, numbers, and special characters. Cannot contain whitespace. ",-1))]),s("div",F,[e[12]||(e[12]=s("label",{class:"label-text"},"Address",-1)),a(s("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.value.address=o),class:"form-control form--control ps-3",type:"text",name:"address",placeholder:"Address"},null,512),[[l,t.value.address]])]),s("div",P,[e[13]||(e[13]=s("label",{class:"label-text"},"Phone",-1)),a(s("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>t.value.phone=o),class:"form-control form--control ps-3",type:"tel",name:"phone",placeholder:"Phone"},null,512),[[l,t.value.phone]])]),s("div",B,[e[14]||(e[14]=s("label",{class:"label-text"},"Description",-1)),a(s("textarea",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.value.description=o),class:"form-control form--control ps-3",name:"description",rows:"3",placeholder:"Description"},null,512),[[l,t.value.description]])]),s("div",E,[e[15]||(e[15]=s("label",{class:"label-text"},"Website",-1)),a(s("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>t.value.website=o),class:"form-control form--control ps-3",type:"url",name:"website",placeholder:"Website"},null,512),[[l,t.value.website]])]),e[19]||(e[19]=s("div",{class:"form-group"},null,-1)),e[20]||(e[20]=s("button",{class:"theme-btn border-0",type:"submit"}," Register Account ",-1)),s("p",L,[e[17]||(e[17]=i(" Already have an account? ")),g(m,{to:"/login",class:"btn-link"},{default:w(()=>e[16]||(e[16]=[i("Login")])),_:1})])])],32)])])])],64)}}};export{Y as default};
