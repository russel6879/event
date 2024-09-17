import _sfc_main$1 from "./Editor-BcrtJmcV.js";
import { ref, computed, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import Multiselect from "vue-multiselect";
import "./eventService-CeRXXBWR.js";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "axios";
import "ofetch";
import "unctx";
import "h3";
import "@unhead/vue";
import "@unhead/shared";
import "unhead";
import "vue-router";
import "radix3";
import "ufo";
import "sweetalert2";
import "vue3-toastify";
const _sfc_main = {
  __name: "add-listing",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedCategories = ref([]);
    const countries = ref([]);
    const venues = ref([]);
    const categories = ref([]);
    const formData = ref({
      title: "",
      user_id: "",
      event_type: "",
      country: "",
      venue: "",
      event_date_from: "",
      // New field
      event_date_to: "",
      // New field
      event_time_from: "",
      // New field
      event_time_to: "",
      // New field
      category: [],
      website_link: "",
      video_link: "",
      featured_photo: ""
    });
    const imagePreview = ref(null);
    const description = ref("");
    const editorKey = ref(0);
    const showLocationFields = computed(() => formData.value.event_type !== "online");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Editor = _sfc_main$1;
      _push(`<!--[--><section class="breadcrumb-area bread-bg" data-v-20def17f><div class="overlay" data-v-20def17f></div><div class="container" data-v-20def17f><div class="breadcrumb-content text-center" data-v-20def17f><h2 class="sec__title text-white mb-3" data-v-20def17f>Add Listing</h2><ul class="bread-list" data-v-20def17f><li data-v-20def17f><a href="index.html" data-v-20def17f>home</a></li><li data-v-20def17f>listing</li><li data-v-20def17f>Add Listing</li></ul></div></div><div class="bread-svg" data-v-20def17f><svg viewBox="0 0 500 150" preserveAspectRatio="none" data-v-20def17f><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" data-v-20def17f></path></svg></div></section><section class="add-listing-area padding-top-60px padding-bottom-90px" data-v-20def17f><div class="container" data-v-20def17f><div class="alert alert-info fade show mb-4" role="alert" data-v-20def17f><p data-v-20def17f><strong class="font-weight-semi-bold" data-v-20def17f>Returning User? Please</strong><a href="login.html" class="alert-link font-weight-semi-bold" data-v-20def17f>log in</a> and if you are a New User, Continue Below and register along with this submission. </p></div><form data-v-20def17f><div class="card" data-v-20def17f><div class="card-body" data-v-20def17f><h4 class="card-title mb-3" data-v-20def17f>Basic Information</h4><hr class="border-top-gray my-0" data-v-20def17f><div class="row mt-4" data-v-20def17f><div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Title <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="text"${ssrRenderAttr("value", formData.value.title)} placeholder="Title" required data-v-20def17f></div></div><div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Event Type <span class="required" data-v-20def17f>*</span></label><select class="form-control form--control ps-3" required data-v-20def17f><option value="online" data-v-20def17f${ssrIncludeBooleanAttr(Array.isArray(formData.value.event_type) ? ssrLooseContain(formData.value.event_type, "online") : ssrLooseEqual(formData.value.event_type, "online")) ? " selected" : ""}>Online</option><option value="physical" data-v-20def17f${ssrIncludeBooleanAttr(Array.isArray(formData.value.event_type) ? ssrLooseContain(formData.value.event_type, "physical") : ssrLooseEqual(formData.value.event_type, "physical")) ? " selected" : ""}>Physical</option><option value="hybrid" data-v-20def17f${ssrIncludeBooleanAttr(Array.isArray(formData.value.event_type) ? ssrLooseContain(formData.value.event_type, "hybrid") : ssrLooseEqual(formData.value.event_type, "hybrid")) ? " selected" : ""}>Hybrid</option></select></div></div>`);
      if (unref(showLocationFields)) {
        _push(`<div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Country <span class="required" data-v-20def17f>*</span></label><select class="form-control form--control ps-3" required data-v-20def17f><!--[-->`);
        ssrRenderList(countries.value, (country) => {
          _push(`<option${ssrRenderAttr("value", country.id)} data-v-20def17f>${ssrInterpolate(country.name)}</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showLocationFields)) {
        _push(`<div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Venue <span class="required" data-v-20def17f>*</span></label><select class="form-control form--control ps-3" required data-v-20def17f><!--[-->`);
        ssrRenderList(venues.value, (venue) => {
          _push(`<option${ssrRenderAttr("value", venue.id)} data-v-20def17f>${ssrInterpolate(venue.venue_name)}</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Event Date From <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="date"${ssrRenderAttr("value", formData.value.event_date_from)} required data-v-20def17f></div></div><div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Event Date To <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="date"${ssrRenderAttr("value", formData.value.event_date_to)} required data-v-20def17f></div></div><div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Event Time From <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="time"${ssrRenderAttr("value", formData.value.event_time_from)} required data-v-20def17f></div></div><div class="col-lg-6" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Event Time To <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="time"${ssrRenderAttr("value", formData.value.event_time_to)} required data-v-20def17f></div></div><div class="col-lg-12" data-v-20def17f><div class="form-control" data-v-20def17f><label class="label-text" data-v-20def17f>Category <span class="required" data-v-20def17f>*</span></label>`);
      _push(ssrRenderComponent(unref(Multiselect), {
        modelValue: selectedCategories.value,
        "onUpdate:modelValue": ($event) => selectedCategories.value = $event,
        options: categories.value,
        multiple: true,
        "close-on-select": false,
        placeholder: "Select categories",
        label: "name",
        "track-by": "id"
      }, null, _parent));
      _push(`</div></div><div class="col-lg-12" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Website Link <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="url"${ssrRenderAttr("value", formData.value.website_link)} required data-v-20def17f></div></div><div class="col-lg-12" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Description <span class="required" data-v-20def17f>*</span></label>`);
      _push(ssrRenderComponent(_component_Editor, {
        key: editorKey.value,
        content: description.value,
        "onUpdate:content": ($event) => description.value = $event
      }, null, _parent));
      _push(`</div></div><div class="col-lg-12" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Video Link</label><input class="form-control form--control ps-3" type="url"${ssrRenderAttr("value", formData.value.video_link)} data-v-20def17f></div></div><div class="col-lg-12" data-v-20def17f><div class="form-group" data-v-20def17f><label class="label-text" data-v-20def17f>Featured Photo <span class="required" data-v-20def17f>*</span></label><input class="form-control form--control ps-3" type="file" required data-v-20def17f>`);
      if (imagePreview.value) {
        _push(`<img${ssrRenderAttr("src", imagePreview.value)} class="img-thumbnail mt-2" data-v-20def17f>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><button class="theme-btn border-0 mt-3" type="submit" data-v-20def17f> Submit Listing </button></form></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/add-listing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addListing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20def17f"]]);
export {
  addListing as default
};
//# sourceMappingURL=add-listing-DnjMWxtr.js.map
