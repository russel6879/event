import { defineAsyncComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import "./eventService-CeRXXBWR.js";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import "axios";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "sweetalert2";
import "vue3-toastify";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const Editor = defineAsyncComponent(() => import("./Editor-BcrtJmcV.js"));
    const description = ref("");
    ref(0);
    const formData = ref({
      title: "",
      user_id: "",
      // You need to set this based on your authentication logic
      event_type: "",
      country: "",
      venue: "",
      event_date: "",
      event_time: "",
      category: "",
      website_link: "",
      video_link: "",
      featured_photo: ""
    });
    const imagePreview = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="breadcrumb-area bread-bg" data-v-3945dfdd><div class="overlay" data-v-3945dfdd></div><div class="container" data-v-3945dfdd><div class="breadcrumb-content text-center" data-v-3945dfdd><h2 class="sec__title text-white mb-3" data-v-3945dfdd>Edit Listing</h2><ul class="bread-list" data-v-3945dfdd><li data-v-3945dfdd><a href="/" data-v-3945dfdd>Home</a></li><li data-v-3945dfdd>Listing</li><li data-v-3945dfdd>Edit Listing</li></ul></div></div><div class="bread-svg" data-v-3945dfdd><svg viewBox="0 0 500 150" preserveAspectRatio="none" data-v-3945dfdd><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" data-v-3945dfdd></path></svg></div></section><section class="add-listing-area padding-top-60px padding-bottom-90px" data-v-3945dfdd><div class="container" data-v-3945dfdd><div class="alert alert-info fade show mb-4" role="alert" data-v-3945dfdd><p data-v-3945dfdd><strong class="font-weight-semi-bold" data-v-3945dfdd>Returning User? Please</strong> <a href="/login" class="alert-link font-weight-semi-bold" data-v-3945dfdd>log in</a> and if you are a New User, Continue Below and register along with this submission.</p></div><form data-v-3945dfdd><div class="card" data-v-3945dfdd><div class="card-body" data-v-3945dfdd><h4 class="card-title mb-3" data-v-3945dfdd>Basic Information</h4><hr class="border-top-gray my-0" data-v-3945dfdd><div class="row mt-4" data-v-3945dfdd><div class="col-lg-6" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Title <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="text"${ssrRenderAttr("value", formData.value.title)} placeholder="Title" required data-v-3945dfdd></div></div><div class="col-lg-6" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Event Type <span class="required" data-v-3945dfdd>*</span></label><select class="form-control form--control ps-3" required data-v-3945dfdd><option value="online" data-v-3945dfdd${ssrIncludeBooleanAttr(Array.isArray(formData.value.event_type) ? ssrLooseContain(formData.value.event_type, "online") : ssrLooseEqual(formData.value.event_type, "online")) ? " selected" : ""}>Online</option><option value="physical" data-v-3945dfdd${ssrIncludeBooleanAttr(Array.isArray(formData.value.event_type) ? ssrLooseContain(formData.value.event_type, "physical") : ssrLooseEqual(formData.value.event_type, "physical")) ? " selected" : ""}>Physical</option><option value="hybrid" data-v-3945dfdd${ssrIncludeBooleanAttr(Array.isArray(formData.value.event_type) ? ssrLooseContain(formData.value.event_type, "hybrid") : ssrLooseEqual(formData.value.event_type, "hybrid")) ? " selected" : ""}>Hybrid</option></select></div></div><div class="col-lg-6" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Country <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="text"${ssrRenderAttr("value", formData.value.country)} placeholder="Country" required data-v-3945dfdd></div></div><div class="col-lg-6" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Venue <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="text"${ssrRenderAttr("value", formData.value.venue)} placeholder="Venue" required data-v-3945dfdd></div></div><div class="col-lg-6" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Event Date <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="date"${ssrRenderAttr("value", formData.value.event_date)} required data-v-3945dfdd></div></div><div class="col-lg-6" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Event Time <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="time"${ssrRenderAttr("value", formData.value.event_time)} required data-v-3945dfdd></div></div><div class="col-lg-12" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Category <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="text"${ssrRenderAttr("value", formData.value.category)} required data-v-3945dfdd></div></div><div class="col-lg-12" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Website Link <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="url"${ssrRenderAttr("value", formData.value.website_link)} required data-v-3945dfdd></div></div><div class="col-lg-12" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Description <span class="required" data-v-3945dfdd>*</span></label>`);
      _push(ssrRenderComponent(unref(Editor), {
        content: description.value,
        "onUpdate:content": ($event) => description.value = $event
      }, null, _parent));
      _push(`</div></div><div class="col-lg-12" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Video Link</label><input class="form-control form--control ps-3" type="url"${ssrRenderAttr("value", formData.value.video_link)} data-v-3945dfdd></div></div><div class="col-lg-12" data-v-3945dfdd><div class="form-group" data-v-3945dfdd><label class="label-text" data-v-3945dfdd>Featured Photo <span class="required" data-v-3945dfdd>*</span></label><input class="form-control form--control ps-3" type="file" data-v-3945dfdd>`);
      if (imagePreview.value) {
        _push(`<img${ssrRenderAttr("src", imagePreview.value)} class="img-thumbnail mt-2" data-v-3945dfdd>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><button class="theme-btn border-0 mt-3" type="submit" data-v-3945dfdd>Update Listing</button></form></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/edit-listing/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3945dfdd"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-CKq9e3J_.js.map
