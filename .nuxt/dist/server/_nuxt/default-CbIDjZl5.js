import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-COteDoP9.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
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
const _imports_0 = publicAssetsURL("/images/logo2.png");
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-area" }, _attrs))} data-v-d526d9a5><div class="main-header py-3 bg-white" data-v-d526d9a5><div class="container" data-v-d526d9a5><div class="main-header-action-wrap" data-v-d526d9a5><div class="logo" data-v-d526d9a5>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-d526d9a5${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><nav class="main-menu me-4 ms-auto main-menu-black" data-v-d526d9a5><ul data-v-d526d9a5><li data-v-d526d9a5>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home `);
          } else {
            return [
              createTextVNode("Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-d526d9a5><a href="#" data-v-d526d9a5>Pages <span class="fal fa-angle-down" data-v-d526d9a5></span></a><ul class="dropdown-menu-item" data-v-d526d9a5><li data-v-d526d9a5>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/user-dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`dashboard`);
          } else {
            return [
              createTextVNode("dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul></nav><div class="nav-right-content d-flex align-items-center" data-v-d526d9a5><div class="author-access-list author-access-list-black me-3" data-v-d526d9a5>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/login" }, {
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
      _push(`<span class="or-text" data-v-d526d9a5>or</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/signup" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up`);
          } else {
            return [
              createTextVNode("Sign Up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/add-listing",
        class: "theme-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="fal fa-plus me-1" data-v-d526d9a5${_scopeId}></span> Add Listing `);
          } else {
            return [
              createVNode("span", { class: "fal fa-plus me-1" }),
              createTextVNode(" Add Listing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="side-menu-open ms-2 side-menu-open-black" data-v-d526d9a5><i class="fal fa-bars" data-v-d526d9a5></i></div></div></div></div></div><div class="off-canvas" data-v-d526d9a5><div class="off-canvas-close icon-element icon-element-sm bg-white shadow-sm" data-v-d526d9a5><i class="fal fa-times" data-v-d526d9a5></i></div><ul class="off-canvas-menu padding-top-60px" data-v-d526d9a5><li data-v-d526d9a5><a href="#" data-v-d526d9a5>Home <span class="fal fa-angle-down sub-menu-toggler" data-v-d526d9a5></span></a><ul class="off-canvas-sub-menu" data-v-d526d9a5><li data-v-d526d9a5><a href="index.html" data-v-d526d9a5>Home one</a></li><li data-v-d526d9a5><a href="index2.html" data-v-d526d9a5>Home two </a></li><li data-v-d526d9a5><a href="index3.html" data-v-d526d9a5>Home three</a></li><li data-v-d526d9a5><a href="index4.html" data-v-d526d9a5>Home four</a></li><li data-v-d526d9a5><a href="index5.html" data-v-d526d9a5>Home five</a></li></ul></li><li data-v-d526d9a5><a href="#" data-v-d526d9a5>Categories <span class="fal fa-angle-down sub-menu-toggler" data-v-d526d9a5></span></a><ul class="off-canvas-sub-menu" data-v-d526d9a5><li data-v-d526d9a5><a href="all-categories.html" data-v-d526d9a5>All categories</a></li><li data-v-d526d9a5><a href="all-locations.html" data-v-d526d9a5>All locations</a></li><li data-v-d526d9a5><a href="top-place.html" data-v-d526d9a5>Top places </a></li></ul></li><li data-v-d526d9a5><a href="#" data-v-d526d9a5>Listings <span class="fal fa-angle-down sub-menu-toggler" data-v-d526d9a5></span></a><ul class="off-canvas-sub-menu" data-v-d526d9a5><li data-v-d526d9a5><a href="listing-grid.html" data-v-d526d9a5>Listing grid</a></li><li data-v-d526d9a5><a href="list-with-map.html" data-v-d526d9a5>list with map</a></li><li data-v-d526d9a5><a href="grid-with-map.html" data-v-d526d9a5>grid with map</a></li><li data-v-d526d9a5><a href="listing-list.html" data-v-d526d9a5>Listing list </a></li><li data-v-d526d9a5><a href="list-left-sidebar.html" data-v-d526d9a5>Left sidebar </a></li><li data-v-d526d9a5><a href="list-right-sidebar.html" data-v-d526d9a5>Right sidebar </a></li><li data-v-d526d9a5><a href="listing-details.html" data-v-d526d9a5>Listing details</a></li><li data-v-d526d9a5><a href="add-listing.html" data-v-d526d9a5>Add listing</a></li></ul></li><li data-v-d526d9a5><a href="#" data-v-d526d9a5>Pages <span class="fal fa-angle-down sub-menu-toggler" data-v-d526d9a5></span></a><ul class="off-canvas-sub-menu" data-v-d526d9a5><li data-v-d526d9a5><a href="user-profile.html" data-v-d526d9a5>user profile</a></li><li data-v-d526d9a5><a href="top-author.html" data-v-d526d9a5>top authors </a></li><li data-v-d526d9a5><a href="dashboard.html" data-v-d526d9a5>dashboard</a></li><li data-v-d526d9a5><a href="booking.html" data-v-d526d9a5>booking </a></li><li data-v-d526d9a5><a href="booking-confirmation.html" data-v-d526d9a5>booking confirmation </a></li><li data-v-d526d9a5><a href="invoice.html" data-v-d526d9a5>invoice</a></li><li data-v-d526d9a5><a href="pricing.html" data-v-d526d9a5>pricing</a></li><li data-v-d526d9a5><a href="about.html" data-v-d526d9a5>about</a></li><li data-v-d526d9a5><a href="faq.html" data-v-d526d9a5>faq</a></li><li data-v-d526d9a5><a href="contact.html" data-v-d526d9a5>contact</a></li><li data-v-d526d9a5><a href="page-404.html" data-v-d526d9a5>404 page</a></li><li data-v-d526d9a5><a href="recover.html" data-v-d526d9a5>recover pass</a></li></ul></li><li data-v-d526d9a5><a href="#" data-v-d526d9a5>blog <span class="fal fa-angle-down sub-menu-toggler" data-v-d526d9a5></span></a><ul class="off-canvas-sub-menu" data-v-d526d9a5><li data-v-d526d9a5><a href="blog-full-width.html" data-v-d526d9a5>full width</a></li><li data-v-d526d9a5><a href="blog-grid.html" data-v-d526d9a5>blog grid</a></li><li data-v-d526d9a5><a href="blog-left-sidebar.html" data-v-d526d9a5>left sidebar </a></li><li data-v-d526d9a5><a href="blog-right-sidebar.html" data-v-d526d9a5>right sidebar </a></li><li data-v-d526d9a5><a href="blog-single.html" data-v-d526d9a5>blog detail</a></li></ul></li></ul><div class="mt-4 text-center" data-v-d526d9a5><a href="login.html" class="theme-btn me-2" data-v-d526d9a5>Login</a><a href="sign-up.html" class="theme-btn" data-v-d526d9a5>Sign up</a></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d526d9a5"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-99247453><section class="footer-area bg-gray padding-top-80px pattern-bg" data-v-99247453><div class="container" data-v-99247453><div class="row" data-v-99247453><div class="col-lg-3 col-md-6" data-v-99247453><div class="footer-item" data-v-99247453><a href="index.html" class="footer-logo mb-4 d-inline-block" data-v-99247453><img${ssrRenderAttr("src", _imports_0)} alt="logo" data-v-99247453></a><p class="mb-4" data-v-99247453> Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros </p><div class="social-icons" data-v-99247453><a href="#" data-v-99247453><i class="fab fa-facebook-f" data-v-99247453></i></a><a href="#" data-v-99247453><i class="fab fa-twitter" data-v-99247453></i></a><a href="#" data-v-99247453><i class="fab fa-instagram" data-v-99247453></i></a><a href="#" data-v-99247453><i class="fab fa-youtube" data-v-99247453></i></a></div></div></div><div class="col-lg-3 col-md-6" data-v-99247453><div class="footer-item" data-v-99247453><h4 class="footer__title mb-3" data-v-99247453>Quick Links</h4><div class="stroke-shape mb-4" data-v-99247453></div><ul class="list-items list-items-underline" data-v-99247453><li data-v-99247453><a href="about.html" data-v-99247453>About us</a></li><li data-v-99247453><a href="sign-up.html" data-v-99247453>Sign up</a></li><li data-v-99247453><a href="login.html" data-v-99247453>Log in</a></li><li data-v-99247453><a href="#" data-v-99247453>Terms &amp; Conditions</a></li><li data-v-99247453><a href="#" data-v-99247453>Privacy Policy</a></li><li data-v-99247453><a href="#" data-v-99247453>Help Center</a></li></ul></div></div><div class="col-lg-3 col-md-6" data-v-99247453><div class="footer-item" data-v-99247453><h4 class="footer__title mb-3" data-v-99247453>Categories</h4><div class="stroke-shape mb-4" data-v-99247453></div><ul class="list-items list-items-underline" data-v-99247453><li data-v-99247453><a href="#" data-v-99247453>Shops</a></li><li data-v-99247453><a href="#" data-v-99247453>Hotels</a></li><li data-v-99247453><a href="#" data-v-99247453>Restaurants</a></li><li data-v-99247453><a href="#" data-v-99247453>Bars</a></li><li data-v-99247453><a href="#" data-v-99247453>Events</a></li><li data-v-99247453><a href="#" data-v-99247453>Fitness</a></li></ul></div></div><div class="col-lg-3 col-md-6" data-v-99247453><div class="footer-item" data-v-99247453><h4 class="footer__title mb-3" data-v-99247453>Contact with Us</h4><div class="stroke-shape mb-4" data-v-99247453></div><ul class="info-list" data-v-99247453><li data-v-99247453><span class="fal fa-home icon me-2" data-v-99247453></span> 12345 Little Baker St, Melbourne </li><li data-v-99247453><span class="fal fa-headphones icon me-2" data-v-99247453></span><a href="#" data-v-99247453>+ 61 23 8093 3400</a></li><li data-v-99247453><span class="fal fa-envelope icon me-2" data-v-99247453></span><a href="#" data-v-99247453>dirto@gmail.com</a></li></ul></div></div></div><hr class="border-top-gray" data-v-99247453><div class="copy-right d-flex flex-wrap align-items-center justify-content-between pb-4" data-v-99247453><p class="copy__desc py-2" data-v-99247453> © Copyright Dirto <span id="copyright-year" data-v-99247453></span>. Made with <span class="fas fa-heart bounce-anim" data-v-99247453></span> by <a href="https://techydevs.com/" data-v-99247453>TechyDevs</a></p><select class="select-picker select-picker-sm" data-width="130" data-size="5" data-v-99247453><option value="1" selected data-v-99247453>English</option><option value="2" data-v-99247453>French</option><option value="3" data-v-99247453>Czech</option><option value="4" data-v-99247453>German</option><option value="5" data-v-99247453>Italian</option><option value="6" data-v-99247453>Turkish</option></select></div></div></section><div id="back-to-top" data-v-99247453><i class="fal fa-angle-up" title="Go top" data-v-99247453></i></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-99247453"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e292c7ff>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e292c7ff"]]);
export {
  _default as default
};
//# sourceMappingURL=default-CbIDjZl5.js.map
