import { _ as __nuxt_component_0 } from "./nuxt-link-DRGY1ko4.js";
import { ref, watch, computed, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { e as eventService } from "./eventService-DD8DRnKe.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
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
import "devalue";
import "sweetalert2";
import "vue3-toastify";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const events = ref({ data: [], prev_page_url: null, next_page_url: null, current_page: 1, last_page: 1 });
    const categoryName = ref("");
    const route = useRoute();
    const getCategoryEvents = async (page = 1) => {
      try {
        const categoryId = route.params.id;
        const data = await eventService.getEventsByCategory(categoryId, page);
        events.value = data.data;
        categoryName.value = data.category_name;
      } catch (error) {
        console.error("Error fetching category events:", error);
      }
    };
    watch(() => route.query.page, (newPage) => {
      getCategoryEvents(Number(newPage) || 1);
    });
    const totalPages = computed(() => {
      return Array.from({ length: events.value.last_page }, (_, i) => i + 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb-area bread-bg" data-v-3be0d3cb><div class="overlay" data-v-3be0d3cb></div><div class="container" data-v-3be0d3cb><div class="breadcrumb-content text-center" data-v-3be0d3cb><h2 class="sec__title text-white mb-3" data-v-3be0d3cb>Listings</h2><ul class="bread-list" data-v-3be0d3cb><li data-v-3be0d3cb>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`home`);
          } else {
            return [
              createTextVNode("home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-3be0d3cb>listings</li><li data-v-3be0d3cb>${ssrInterpolate(categoryName.value)}</li></ul></div></div><div class="bread-svg" data-v-3be0d3cb><svg viewBox="0 0 500 150" preserveAspectRatio="none" data-v-3be0d3cb><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" data-v-3be0d3cb></path></svg></div></section><section class="card-area section--padding pt-0" data-v-3be0d3cb><div class="container" data-v-3be0d3cb><div class="row mt-5 d-flex" data-v-3be0d3cb><!--[-->`);
      ssrRenderList(events.value.data, (event, index) => {
        _push(`<div class="col-lg-4 col-md-6" data-v-3be0d3cb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/listing-details/${event.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card mb-0 hover-y" data-v-3be0d3cb${_scopeId}><a class="card-image" data-v-3be0d3cb${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top" alt="Event Image" data-v-3be0d3cb${_scopeId}><span class="${ssrRenderClass([{
                "text-bg-danger": event.event_type === "online",
                "text-bg-success": event.event_type === "physical",
                "text-bg-primary": event.event_type === "hybrid"
              }, "badge badge-pill"])}" data-v-3be0d3cb${_scopeId}>${ssrInterpolate(event.event_type)}</span></a><div class="card-body position-relative" data-v-3be0d3cb${_scopeId}><a class="author-img" data-v-3be0d3cb${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.user.profile_image)} alt="Author Image" data-v-3be0d3cb${_scopeId}></a><div class="category-container" data-v-3be0d3cb${_scopeId}><!--[-->`);
              ssrRenderList(event.category_names.slice(0, 2), (category, index2) => {
                _push2(`<div class="category-item" data-v-3be0d3cb${_scopeId}><a href="#" class="card-cat" data-v-3be0d3cb${_scopeId}><span class="fal fa-tag icon-element icon-element-sm" data-v-3be0d3cb${_scopeId}></span> ${ssrInterpolate(category)}</a></div>`);
              });
              _push2(`<!--]--></div><div class="d-flex align-items-center mb-1" data-v-3be0d3cb${_scopeId}><h4 class="card-title mb-0" data-v-3be0d3cb${_scopeId}><a data-v-3be0d3cb${_scopeId}>${ssrInterpolate(event.title)}</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-3be0d3cb${_scopeId}></i></div><p class="card-text" data-v-3be0d3cb${_scopeId}>${ssrInterpolate(event.venue.venue_name)}, ${ssrInterpolate(event.country.name)}</p><ul class="info-list mt-3" data-v-3be0d3cb${_scopeId}><li data-v-3be0d3cb${_scopeId}><span class="fal fa-link icon" data-v-3be0d3cb${_scopeId}></span><a target="_blank"${ssrRenderAttr("href", event.website_link)} data-v-3be0d3cb${_scopeId}>${ssrInterpolate(event.website_link)}</a></li><li data-v-3be0d3cb${_scopeId}><span class="fal fa-calendar icon" data-v-3be0d3cb${_scopeId}></span> ${ssrInterpolate(event.event_date_from)}</li><li data-v-3be0d3cb${_scopeId}><span class="fal fa-watch icon" data-v-3be0d3cb${_scopeId}></span> ${ssrInterpolate(event.event_time_from)}</li></ul></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card mb-0 hover-y" }, [
                  createVNode("a", { class: "card-image" }, [
                    createVNode("img", {
                      src: `${_ctx.$config.public.baseURL}/` + event.featured_photo,
                      class: "card-img-top",
                      alt: "Event Image"
                    }, null, 8, ["src"]),
                    createVNode("span", {
                      class: ["badge badge-pill", {
                        "text-bg-danger": event.event_type === "online",
                        "text-bg-success": event.event_type === "physical",
                        "text-bg-primary": event.event_type === "hybrid"
                      }]
                    }, toDisplayString(event.event_type), 3)
                  ]),
                  createVNode("div", { class: "card-body position-relative" }, [
                    createVNode("a", { class: "author-img" }, [
                      createVNode("img", {
                        src: `${_ctx.$config.public.baseURL}/` + event.user.profile_image,
                        alt: "Author Image"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "category-container" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(event.category_names.slice(0, 2), (category, index2) => {
                        return openBlock(), createBlock("div", {
                          key: index2,
                          class: "category-item"
                        }, [
                          createVNode("a", {
                            href: "#",
                            class: "card-cat"
                          }, [
                            createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                            createTextVNode(" " + toDisplayString(category), 1)
                          ])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "d-flex align-items-center mb-1" }, [
                      createVNode("h4", { class: "card-title mb-0" }, [
                        createVNode("a", null, toDisplayString(event.title), 1)
                      ]),
                      createVNode("i", {
                        class: "fa fa-check-circle ms-1 text-success",
                        "data-bs-toggle": "tooltip",
                        "data-placement": "top",
                        title: "Claimed"
                      })
                    ]),
                    createVNode("p", { class: "card-text" }, toDisplayString(event.venue.venue_name) + ", " + toDisplayString(event.country.name), 1),
                    createVNode("ul", { class: "info-list mt-3" }, [
                      createVNode("li", null, [
                        createVNode("span", { class: "fal fa-link icon" }),
                        createVNode("a", {
                          target: "_blank",
                          href: event.website_link
                        }, toDisplayString(event.website_link), 9, ["href"])
                      ]),
                      createVNode("li", null, [
                        createVNode("span", { class: "fal fa-calendar icon" }),
                        createTextVNode(" " + toDisplayString(event.event_date_from), 1)
                      ]),
                      createVNode("li", null, [
                        createVNode("span", { class: "fal fa-watch icon" }),
                        createTextVNode(" " + toDisplayString(event.event_time_from), 1)
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><nav aria-label="Page navigation example" class="mt-5" data-v-3be0d3cb><ul class="pagination justify-content-center pagination-list" data-v-3be0d3cb><li class="${ssrRenderClass([{ disabled: !events.value.prev_page_url }, "page-item"])}" data-v-3be0d3cb><a class="page-link" aria-label="Previous" data-v-3be0d3cb><span aria-hidden="true" class="fal fa-angle-left" data-v-3be0d3cb></span><span class="sr-only" data-v-3be0d3cb>Previous</span></a></li><!--[-->`);
      ssrRenderList(unref(totalPages), (page) => {
        _push(`<li class="${ssrRenderClass([{ active: events.value.current_page === page }, "page-item"])}" data-v-3be0d3cb><a class="page-link" data-v-3be0d3cb>${ssrInterpolate(page)}</a></li>`);
      });
      _push(`<!--]--><li class="${ssrRenderClass([{ disabled: !events.value.next_page_url }, "page-item"])}" data-v-3be0d3cb><a class="page-link" aria-label="Next" data-v-3be0d3cb><span aria-hidden="true" class="fal fa-angle-right" data-v-3be0d3cb></span><span class="sr-only" data-v-3be0d3cb>Next</span></a></li></ul></nav></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3be0d3cb"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-C5Uj_HtB.js.map
