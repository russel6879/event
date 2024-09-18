import { _ as __nuxt_component_0 } from "./nuxt-link-COteDoP9.js";
import { ref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "./authService-D4nWd8dI.js";
import "hookable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "devalue";
import "sweetalert2";
import "vue3-toastify";
import "axios";
const _sfc_main = {
  __name: "signup",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
      description: "",
      website: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb-area bread-bg"><div class="overlay"></div><div class="container"><div class="breadcrumb-content text-center"><h2 class="sec__title text-white mb-3">Sign Up</h2><ul class="bread-list"><li><a href="index.html">home</a></li><li>Sign Up</li></ul></div></div><div class="bread-svg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path></svg></div></section><section class="contact-area padding-top-60px padding-bottom-90px"><div class="container"><div class="col-lg-7 mx-auto"><form class="card"><div class="card-body"><div class="text-center"><h4 class="font-size-28 font-weight-semi-bold mb-1"> Create an account! </h4><div class="d-flex flex-wrap align-items-center justify-content-between my-4 d-none"><a href="#" class="theme-btn flex-grow-1 mx-1 my-1"><i class="fab fa-google me-2"></i>Google</a><a href="#" class="theme-btn flex-grow-1 mx-1 my-1 bg-5"><i class="fab fa-facebook-f me-2"></i>Facebook</a><a href="#" class="theme-btn flex-grow-1 mx-1 my-1 bg-6"><i class="fab fa-twitter me-2"></i>Twitter</a></div></div><div class="d-flex align-items-center"><hr class="border-top-gray flex-grow-1"><hr class="border-top-gray flex-grow-1"></div><div class="form-group"><label class="label-text">Company Name</label><input${ssrRenderAttr("value", formData.value.name)} class="form-control form--control ps-3" type="text" name="name" placeholder="e.g. Alex"></div><div class="form-group"><label class="label-text">Email Address</label><input${ssrRenderAttr("value", formData.value.email)} class="form-control form--control ps-3" type="email" name="email" placeholder="e.g. you@example.com"></div><div class="form-group"><label class="label-text">Password</label><div class="position-relative"><input${ssrRenderAttr("value", formData.value.password)} class="form-control form--control ps-3 password-field" type="password" name="password" placeholder="Password"><a href="javascript:void(0)" class="position-absolute top-0 right-0 h-100 toggle-password" title="toggle show/hide password"><i class="far fa-eye eye-on"></i><i class="far fa-eye-slash eye-off"></i></a></div><p class="font-size-14 mt-1 line-height-20 font-weight-regular"> Your password must be at least 6 characters long and must contain letters, numbers, and special characters. Cannot contain whitespace. </p></div><div class="form-group"><label class="label-text">Address</label><input${ssrRenderAttr("value", formData.value.address)} class="form-control form--control ps-3" type="text" name="address" placeholder="Address"></div><div class="form-group"><label class="label-text">Phone</label><input${ssrRenderAttr("value", formData.value.phone)} class="form-control form--control ps-3" type="tel" name="phone" placeholder="Phone"></div><div class="form-group"><label class="label-text">Description</label><textarea class="form-control form--control ps-3" name="description" rows="3" placeholder="Description">${ssrInterpolate(formData.value.description)}</textarea></div><div class="form-group"><label class="label-text">Website</label><input${ssrRenderAttr("value", formData.value.website)} class="form-control form--control ps-3" type="url" name="website" placeholder="Website"></div><div class="form-group"></div><button class="theme-btn border-0" type="submit"> Register Account </button><p class="mt-3"> Already have an account? `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/login",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></form></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=signup-7DKtcQZF.js.map
