import { _ as __nuxt_component_0 } from './nuxt-link-COteDoP9.mjs';
import { ref, watch, computed, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { e as eventService } from './eventService-DD8DRnKe.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'sweetalert2';
import 'vue3-toastify';
import 'axios';

const _sfc_main = {
  __name: "search-results",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const events = ref({ data: [], prev_page_url: null, next_page_url: null, current_page: 1, last_page: 1 });
    const getSearchResults = async (page = 1) => {
      try {
        const params = {
          query: route.query.query,
          country: route.query.country,
          category: route.query.category,
          page
        };
        const data = await eventService.searchEvents(params);
        events.value = data.data;
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    watch(() => route.query.page, (newPage) => {
      getSearchResults(Number(newPage) || 1);
    });
    const totalPages = computed(() => {
      return Array.from({ length: events.value.last_page }, (_, i) => i + 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="breadcrumb-area bread-bg"><div class="overlay"></div><div class="container"><div class="breadcrumb-content text-center"><h2 class="sec__title text-white mb-3">Search Results</h2><ul class="bread-list"><li>`);
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
      _push(`</li><li>Search Results for &quot;${ssrInterpolate(_ctx.$route.query.query)}&quot;</li></ul></div></div></section><section class="card-area section--padding pt-0"><div class="container">`);
      if (events.value.data.length) {
        _push(`<div class="row mt-5 d-flex"><!--[-->`);
        ssrRenderList(events.value.data, (event, index) => {
          _push(`<div class="col-lg-4 col-md-6">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/listing-details/${event.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="card mb-0 hover-y"${_scopeId}><a class="card-image"${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top" alt="Event Image"${_scopeId}><span class="${ssrRenderClass([{
                  "text-bg-danger": event.event_type === "online",
                  "text-bg-success": event.event_type === "physical",
                  "text-bg-primary": event.event_type === "hybrid"
                }, "badge badge-pill"])}"${_scopeId}>${ssrInterpolate(event.event_type)}</span></a><div class="card-body position-relative"${_scopeId}><h4 class="card-title mb-0"${_scopeId}><a${_scopeId}>${ssrInterpolate(event.title)}</a></h4><p class="card-text"${_scopeId}>${ssrInterpolate(event.venue.venue_name)}, ${ssrInterpolate(event.country.name)}</p><ul class="info-list mt-3"${_scopeId}><li${_scopeId}><span class="fal fa-link icon"${_scopeId}></span><a target="_blank"${ssrRenderAttr("href", event.website_link)}${_scopeId}>${ssrInterpolate(event.website_link)}</a></li><li${_scopeId}><span class="fal fa-calendar icon"${_scopeId}></span> ${ssrInterpolate(event.event_date_from)}</li><li${_scopeId}><span class="fal fa-watch icon"${_scopeId}></span> ${ssrInterpolate(event.event_time_from)}</li></ul></div></div>`);
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
                      createVNode("h4", { class: "card-title mb-0" }, [
                        createVNode("a", null, toDisplayString(event.title), 1)
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
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav aria-label="Page navigation example" class="mt-5"><ul class="pagination justify-content-center pagination-list"><li class="${ssrRenderClass([{ disabled: !events.value.prev_page_url }, "page-item"])}"><a class="page-link" aria-label="Previous"><span aria-hidden="true" class="fal fa-angle-left"></span><span class="sr-only">Previous</span></a></li><!--[-->`);
      ssrRenderList(totalPages.value, (page) => {
        _push(`<li class="${ssrRenderClass([{ active: events.value.current_page === page }, "page-item"])}"><a class="page-link">${ssrInterpolate(page)}</a></li>`);
      });
      _push(`<!--]--><li class="${ssrRenderClass([{ disabled: !events.value.next_page_url }, "page-item"])}"><a class="page-link" aria-label="Next"><span aria-hidden="true" class="fal fa-angle-right"></span><span class="sr-only">Next</span></a></li></ul></nav></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search-results.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-results-DzejPa3_.mjs.map
