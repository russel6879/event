import { _ as __nuxt_component_0 } from "./nuxt-link-COteDoP9.js";
import { ref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
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
import "radix3";
import "defu";
import "devalue";
import "sweetalert2";
import "vue3-toastify";
import "axios";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const credentials = ref({
      email: "",
      password: ""
    });
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb-area bread-bg"><div class="overlay"></div><div class="container"><div class="breadcrumb-content text-center"><h2 class="sec__title text-white mb-3">Login</h2><ul class="bread-list"><li><a href="/">home</a></li><li>login</li></ul></div></div><div class="bread-svg"><svg viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"></path></svg></div></section><section class="contact-area padding-top-60px padding-bottom-90px"><div class="container"><div class="col-lg-7 mx-auto"><form class="card"><div class="card-body"><div class="text-center"><h4 class="font-size-28 font-weight-semi-bold mb-1"> Login to your account </h4></div><div class="d-flex align-items-center"><hr class="border-top-gray flex-grow-1"><hr class="border-top-gray flex-grow-1"></div><div class="form-group"><label class="label-text">Username or email</label><input${ssrRenderAttr("value", credentials.value.email)} class="form-control form--control ps-3" type="text" placeholder="Username, or email" required></div><div class="form-group"><label class="label-text">Password</label><div class="position-relative"><input${ssrRenderAttr("value", credentials.value.password)} class="form-control form--control ps-3 password-field" type="password" placeholder="Password" required><a href="javascript:void(0)" class="position-absolute top-0 right-0 h-100 toggle-password" title="toggle show/hide password"><i class="far fa-eye eye-on"></i><i class="far fa-eye-slash eye-off"></i></a></div></div><div class="form-group d-flex align-items-center justify-content-between"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="RememberMe"><label class="custom-control-label" for="RememberMe">Remember Me</label></div><a href="/recover" class="btn-link">Forgot password?</a></div><button class="theme-btn border-0" type="submit"> Login Now </button><p class="mt-3"> Not a member? `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/signup",
        class: "btn-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Register`);
          } else {
            return [
              createTextVNode("Register")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-CtWCa2rz.js.map
