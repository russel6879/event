import { _ as __nuxt_component_0 } from "./nuxt-link-DRGY1ko4.js";
import { ref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import "./authService--uU7v7w3.js";
import "./eventService-CeRXXBWR.js";
import "hookable";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "radix3";
import "defu";
import "devalue";
import "sweetalert2";
import "vue3-toastify";
import "axios";
const _sfc_main = {
  __name: "user-dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const events = ref([]);
    useRouter();
    const profile = ref({
      name: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      profile_image: "",
      profile_image_url: "",
      website: "",
      facebook: "",
      twitter: "",
      instagram: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb-area bread-bg py-5"><div class="overlay"></div><div class="container"><div class="breadcrumb-content text-center"><h2 class="sec__title text-white mb-3">Dashboard</h2><h2 class="sec__title text-white mb-3">Dashboard</h2><ul class="bread-list"><li><a href="index.html">home</a></li><li>pages</li><li>Dashboard</li></ul></div></div></section><section class="dashboard-area padding-bottom-70px"><div class="bg-white shadow-sm py-4"><div class="container"><div class="dashboard-nav d-flex flex-wrap align-items-center justify-content-between"><ul class="nav nav-tabs my-tabs my-tabs-2 justify-content-center my-1" id="myTab" role="tablist"><li class="nav-item" role="presentation"><a class="nav-link active" id="listings-tab" data-bs-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="true"><i class="fal fa-list me-1 font-size-14"></i> Listings </a></li><li class="nav-item" role="presentation"><a class="nav-link" id="settings-tab" data-bs-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false"><i class="fal fa-cog me-1 font-size-14"></i> Settings </a></li></ul><div class="my-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/6add-listing",
        class: "theme-btn theme-btn-sm bg-white shadow-sm border border-gray text-black font-weight-medium me-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fal fa-plus me-1"${_scopeId}></i> Add listing`);
          } else {
            return [
              createVNode("i", { class: "fal fa-plus me-1" }),
              createTextVNode(" Add listing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="theme-btn theme-btn-sm bg-white shadow-sm border border-gray text-black font-weight-medium"><i class="fal fa-sign-out me-1"></i> Log out</button></div></div></div></div><div class="container"><div class="tab-content mt-4" id="myTabContent"><div class="tab-pane fade show active" id="listings" role="tabpanel" aria-labelledby="listings-tab"><div class="row"><!--[-->`);
      ssrRenderList(events.value, (event) => {
        _push(`<div class="col-lg-4 col-md-6"><div class="card hover-y"><a class="card-image"><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top lazy" alt="card image"><span class="badge text-bg-success badge-pill">Now open</span></a><div class="card-body position-relative"><a href="#" class="card-cat mb-2"><span class="fal fa-utensils icon-element icon-element-sm"></span> ${ssrInterpolate(event.category)}</a><h4 class="card-title mb-1"><a href="listing-details.html">${ssrInterpolate(event.title)}</a></h4><p class="card-text">${ssrInterpolate(event.venue)} ${ssrInterpolate(event.country)}</p><div class="star-rating mt-1" data-rating="5"><div class="rating-counter">5 reviews</div></div></div><div class="card-footer bg-transparent border-top-gray">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/edit-listing/${event.id}`,
          class: "btn btn-sm edit-btn bg-success text-white me-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit `);
            } else {
              return [
                createTextVNode(" Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<a class="btn btn-sm delete-btn bg-danger text-white"> Delete </a></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab"><div class="row"><div class="col-lg-12"><h4 class="font-size-20 font-weight-semi-bold mb-3"> Edit Profile </h4></div><div class="edit-profile-photo media mb-4 col-lg-12"><img${ssrRenderAttr("src", profile.value.profile_image_url || `${_ctx.$config.public.baseURL}/` + profile.value.profile_image)} alt="avatar image" class="profile-img me-4 flex-shrink-0"><div class="file-upload-wrap file-upload-wrap-layout-2 media-body align-self-center"><input type="file" class="multi file-upload-input with-preview" multiple><span class="file-upload-text"><i class="fal fa-upload me-2"></i>Upload Photo</span></div></div><div class="col-lg-6 col-md-6"><label class="label-text">Your Name</label><div class="form-group"><span class="fal fa-user form-icon"></span><input class="form-control form--control" type="text"${ssrRenderAttr("value", profile.value.name)}></div></div><div class="col-lg-6 col-md-6"><label class="label-text">Your Email</label><div class="form-group"><span class="fal fa-envelope form-icon"></span><input class="form-control form--control" type="text"${ssrRenderAttr("value", profile.value.email)}></div></div><div class="col-lg-6 col-md-6"><label class="label-text">Phone Number</label><div class="form-group"><span class="fal fa-phone form-icon"></span><input class="form-control form--control" type="text"${ssrRenderAttr("value", profile.value.phone)}></div></div><div class="col-lg-6 col-md-6"><label class="label-text">Address</label><div class="form-group"><span class="fal fa-map-marker-alt form-icon"></span><input class="form-control form--control" type="text"${ssrRenderAttr("value", profile.value.address)}></div></div><div class="col-lg-12"><label class="label-text">Notes</label><div class="form-group"><textarea class="form-control form--control ps-3" rows="6">${ssrInterpolate(profile.value.description)}</textarea></div></div><div class="col-lg-12 col-md-6"><label class="label-text">Website</label><div class="form-group"><span class="fal fa-globe form-icon"></span><input class="form-control form--control" type="text"${ssrRenderAttr("value", profile.value.website)}></div></div><div class="col-lg-12"><button class="theme-btn mt-3 border-0" type="button"> Save Changes </button></div></div><hr class="border-top-gray my-5"><div class="row d-none"><div class="col-lg-12"><h4 class="font-size-20 font-weight-semi-bold mb-3"> Change Password </h4></div><div class="col-lg-6 col-md-6"><label class="label-text">Current Password</label><div class="form-group"><span class="fal fa-lock form-icon"></span><input class="form-control form--control password-field" type="password" name="password" placeholder="Current password"></div></div><div class="col-lg-6 col-md-6"><label class="label-text">New Password</label><div class="form-group"><span class="fal fa-lock form-icon"></span><input class="form-control form--control password-field" type="password" name="password" placeholder="New password"></div></div><div class="col-lg-6 col-md-6"><label class="label-text">New Password (again)</label><div class="form-group"><span class="fal fa-lock form-icon"></span><input class="form-control form--control password-field" type="password" name="password" placeholder="New password again"></div></div><div class="col-lg-12"><a href="javascript:void(0)" class="btn btn-light toggle-password" data-bs-toggle="tooltip" data-placement="right" title="toggle show/hide password"><i class="far fa-eye eye-on"></i><i class="far fa-eye-slash eye-off"></i></a></div><div class="col-lg-12"><button class="theme-btn mt-3 border-0" type="button"> Change Password </button></div></div><div class="border border-danger p-4 mt-5 rounded d-none"><h4 class="font-size-20 font-weight-semi-bold mb-1 text-danger"> Delete Account </h4><p class="mb-3"><span class="text-warning">Warning:</span> Once you delete your account, there is no going back. Please be certain. </p><a href="#" class="theme-btn bg-danger" data-bs-toggle="modal" data-bs-target="#deleteAccountModal">Delete Account</a></div></div></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user-dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=user-dashboard-CjPYQaPj.js.map
