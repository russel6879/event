import { _ as __nuxt_component_0 } from "./nuxt-link-COteDoP9.js";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import { ref, withCtx, createVNode, toDisplayString, unref, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { Swiper, SwiperSlide } from "swiper/vue";
import "./entry-styles-1.mjs-CRldIx4B.js";
import "./eventService-DD8DRnKe.js";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "axios";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const countries = ref([]);
    const searchQuery = ref("");
    useRouter();
    const events = ref([]);
    const categories = ref([]);
    const searchbarCategories = ref([]);
    const selectedCountry = ref("");
    const selectedCategory = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="hero-wrapper hero-bg-2" data-v-49bc0b5d><div id="particles-js" data-v-49bc0b5d></div><div class="overlay" data-v-49bc0b5d></div><div class="container position-relative z-index-2" data-v-49bc0b5d><div class="hero-heading text-center pt-4" data-v-49bc0b5d><h2 class="sec__title text-white" data-v-49bc0b5d>What Your Plan Today?</h2><p class="sec__desc text-white" data-v-49bc0b5d> All the top locations – from restaurants and clubs, to galleries, famous places and more... </p></div><div class="tab-content mt-4" id="myTabContent" data-v-49bc0b5d><div class="tab-pane fade show active" id="events" role="tabpanel" aria-labelledby="events-tab" data-v-49bc0b5d><div class="card" data-v-49bc0b5d><div class="card-body row pb-0" data-v-49bc0b5d><div class="col-lg-4 pe-lg-0" data-v-49bc0b5d><div class="form-group" data-v-49bc0b5d><span class="fal fa-search form-icon" data-v-49bc0b5d></span><input class="form-control form--control"${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="What are you looking for?" data-v-49bc0b5d></div></div><div class="col-lg-3 pe-lg-0" data-v-49bc0b5d><div class="form-group" data-v-49bc0b5d><span class="fal fa-map-marker-alt form-icon" data-v-49bc0b5d></span><select class="form-control form--control" data-v-49bc0b5d><option value="" disabled data-v-49bc0b5d${ssrIncludeBooleanAttr(Array.isArray(selectedCountry.value) ? ssrLooseContain(selectedCountry.value, "") : ssrLooseEqual(selectedCountry.value, "")) ? " selected" : ""}>Select a Country</option><!--[-->`);
      ssrRenderList(countries.value, (country) => {
        _push(`<option${ssrRenderAttr("value", country.id)} data-v-49bc0b5d>${ssrInterpolate(country.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-lg-3 pe-lg-0" data-v-49bc0b5d><div class="form-group" data-v-49bc0b5d><span class="fal fa-tag form-icon" data-v-49bc0b5d></span><select class="form-control form--control" data-v-49bc0b5d><option value="" disabled data-v-49bc0b5d${ssrIncludeBooleanAttr(Array.isArray(selectedCategory.value) ? ssrLooseContain(selectedCategory.value, "") : ssrLooseEqual(selectedCategory.value, "")) ? " selected" : ""}>Select a Category</option><!--[-->`);
      ssrRenderList(searchbarCategories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)} data-v-49bc0b5d>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="col-lg-3 pe-lg-0 d-none" data-v-49bc0b5d><div class="form-group" data-v-49bc0b5d><span class="fal fa-calendar-alt form-icon" data-v-49bc0b5d></span><input class="form-control form--control date-picker" type="date" placeholder="Date" data-v-49bc0b5d></div></div><div class="col-lg-2" data-v-49bc0b5d><div class="form-group" data-v-49bc0b5d><button class="theme-btn border-0 w-100" type="button" data-v-49bc0b5d> Search </button></div></div></div></div></div></div></div></section><section class="category-area bg-gray section--padding" data-v-49bc0b5d><div class="container" data-v-49bc0b5d><h2 class="sec__title text-center" data-v-49bc0b5d>What do you need to find?</h2><div class="row mt-5" data-v-49bc0b5d><!--[-->`);
      ssrRenderList(categories.value, (category, index2) => {
        _push(`<div class="col-lg-2 col-md-4" data-v-49bc0b5d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/category/${category.id}`,
          class: "highlight-category highlight-category-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="${ssrRenderClass(`fal ${category.icon} icon-element icon-element-bg-slim-${index2 + 1}  d-block mx-auto mb-2`)}" data-v-49bc0b5d${_scopeId}></span><span class="highlight-cat-title" data-v-49bc0b5d${_scopeId}>${ssrInterpolate(category.name)}</span><span class="badge badge-pill" data-v-49bc0b5d${_scopeId}>${ssrInterpolate(category.event_count)} Listings</span>`);
            } else {
              return [
                createVNode("span", {
                  class: `fal ${category.icon} icon-element icon-element-bg-slim-${index2 + 1}  d-block mx-auto mb-2`
                }, null, 2),
                createVNode("span", { class: "highlight-cat-title" }, toDisplayString(category.name), 1),
                createVNode("span", { class: "badge badge-pill" }, toDisplayString(category.event_count) + " Listings", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="card-area section-padding" data-v-49bc0b5d><div class="container" data-v-49bc0b5d>`);
      if (events.value.length > 0) {
        _push(ssrRenderComponent(unref(Swiper), {
          modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectCards" in _ctx ? _ctx.SwiperEffectCards : unref(EffectCards), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
          "slides-per-view": 3,
          loop: true,
          autoplay: { delay: 3e3, disableOnInteraction: true },
          "space-between": 20,
          navigation: "",
          breakpoints: {
            300: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(events.value, (event, index2) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: index2 }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/listing-details/${event.slug}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="card mb-0 hover-y" data-v-49bc0b5d${_scopeId3}><a class="card-image" data-v-49bc0b5d${_scopeId3}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top" alt="Event Image" data-v-49bc0b5d${_scopeId3}><span class="${ssrRenderClass([{
                              "text-bg-danger": event.event_type === "online",
                              "text-bg-success": event.event_type === "physical",
                              "text-bg-primary": event.event_type === "hybrid"
                            }, "badge badge-pill"])}" data-v-49bc0b5d${_scopeId3}>${ssrInterpolate(event.event_type)}</span></a><div class="card-body position-relative" data-v-49bc0b5d${_scopeId3}><a class="author-img" data-v-49bc0b5d${_scopeId3}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.user.profile_image)} alt="Author Image" data-v-49bc0b5d${_scopeId3}></a><div class="category-container" data-v-49bc0b5d${_scopeId3}><!--[-->`);
                            ssrRenderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                              _push4(`<div class="category-item" data-v-49bc0b5d${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_NuxtLink, {
                                to: `/category/${id}`,
                                class: "card-cat"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span class="fal fa-tag icon-element icon-element-sm" data-v-49bc0b5d${_scopeId4}></span> ${ssrInterpolate(category)}`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                                      createTextVNode(" " + toDisplayString(category), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            });
                            _push4(`<!--]--></div><div class="d-flex align-items-center mb-1" data-v-49bc0b5d${_scopeId3}><h4 class="card-title mb-0" data-v-49bc0b5d${_scopeId3}><a data-v-49bc0b5d${_scopeId3}>${ssrInterpolate(event.title)}</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-49bc0b5d${_scopeId3}></i></div><p class="card-text" data-v-49bc0b5d${_scopeId3}>${ssrInterpolate(event.venue.venue_name)}, ${ssrInterpolate(event.country.name)}</p><ul class="info-list mt-3" data-v-49bc0b5d${_scopeId3}><li data-v-49bc0b5d${_scopeId3}><span class="fal fa-link icon" data-v-49bc0b5d${_scopeId3}></span><a target="_blank"${ssrRenderAttr("href", event.website_link)} data-v-49bc0b5d${_scopeId3}>${ssrInterpolate(event.website_link)}</a></li><li data-v-49bc0b5d${_scopeId3}><span class="fal fa-calendar icon" data-v-49bc0b5d${_scopeId3}></span> ${ssrInterpolate(event.event_date_from)}</li><li data-v-49bc0b5d${_scopeId3}><span class="fal fa-watch icon" data-v-49bc0b5d${_scopeId3}></span> ${ssrInterpolate(event.event_time_from)}</li></ul></div></div>`);
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
                                    (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                                      return openBlock(), createBlock("div", {
                                        key: id,
                                        class: "category-item"
                                      }, [
                                        createVNode(_component_NuxtLink, {
                                          to: `/category/${id}`,
                                          class: "card-cat"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                                            createTextVNode(" " + toDisplayString(category), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
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
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtLink, {
                          to: `/listing-details/${event.slug}`
                        }, {
                          default: withCtx(() => [
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                                    return openBlock(), createBlock("div", {
                                      key: id,
                                      class: "category-item"
                                    }, [
                                      createVNode(_component_NuxtLink, {
                                        to: `/category/${id}`,
                                        class: "card-cat"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                                          createTextVNode(" " + toDisplayString(category), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
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
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(events.value, (event, index2) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { key: index2 }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: `/listing-details/${event.slug}`
                      }, {
                        default: withCtx(() => [
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
                                (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                                  return openBlock(), createBlock("div", {
                                    key: id,
                                    class: "category-item"
                                  }, [
                                    createVNode(_component_NuxtLink, {
                                      to: `/category/${id}`,
                                      class: "card-cat"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                                        createTextVNode(" " + toDisplayString(category), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
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
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div data-v-49bc0b5d><p data-v-49bc0b5d>Loading events...</p></div>`);
      }
      _push(`</div></section><section class="card-area section--padding bg-gray" data-v-49bc0b5d><div class="container" data-v-49bc0b5d><div class="text-center" data-v-49bc0b5d><h2 class="sec__title mb-3" data-v-49bc0b5d>Upcoming Events</h2></div><div class="row mt-5 d-flex" data-v-49bc0b5d><!--[-->`);
      ssrRenderList(events.value, (event, index2) => {
        _push(`<div class="col-lg-4 col-md-6" data-v-49bc0b5d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/listing-details/${event.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card mb-0 hover-y" data-v-49bc0b5d${_scopeId}><a class="card-image" data-v-49bc0b5d${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top" alt="Event Image" data-v-49bc0b5d${_scopeId}><span class="${ssrRenderClass([{
                "text-bg-danger": event.event_type === "online",
                "text-bg-success": event.event_type === "physical",
                "text-bg-primary": event.event_type === "hybrid"
              }, "badge badge-pill"])}" data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.event_type)}</span></a><div class="card-body position-relative" data-v-49bc0b5d${_scopeId}><a class="author-img" data-v-49bc0b5d${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.user.profile_image)} alt="Author Image" data-v-49bc0b5d${_scopeId}></a><div class="category-container" data-v-49bc0b5d${_scopeId}><!--[-->`);
              ssrRenderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                _push2(`<div class="category-item" data-v-49bc0b5d${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/category/${id}`,
                  class: "card-cat"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="fal fa-tag icon-element icon-element-sm" data-v-49bc0b5d${_scopeId2}></span> ${ssrInterpolate(category)}`);
                    } else {
                      return [
                        createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                        createTextVNode(" " + toDisplayString(category), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div><div class="d-flex align-items-center mb-1" data-v-49bc0b5d${_scopeId}><h4 class="card-title mb-0" data-v-49bc0b5d${_scopeId}><a data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.title)}</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-49bc0b5d${_scopeId}></i></div><p class="card-text" data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.venue.venue_name)}, ${ssrInterpolate(event.country.name)}</p><ul class="info-list mt-3" data-v-49bc0b5d${_scopeId}><li data-v-49bc0b5d${_scopeId}><span class="fal fa-link icon" data-v-49bc0b5d${_scopeId}></span><a target="_blank"${ssrRenderAttr("href", event.website_link)} data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.website_link)}</a></li><li data-v-49bc0b5d${_scopeId}><span class="fal fa-calendar icon" data-v-49bc0b5d${_scopeId}></span> ${ssrInterpolate(event.event_date_from)}</li><li data-v-49bc0b5d${_scopeId}><span class="fal fa-watch icon" data-v-49bc0b5d${_scopeId}></span> ${ssrInterpolate(event.event_time_from)}</li></ul></div></div>`);
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
                      (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                        return openBlock(), createBlock("div", {
                          key: id,
                          class: "category-item"
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: `/category/${id}`,
                            class: "card-cat"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                              createTextVNode(" " + toDisplayString(category), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
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
      _push(`<!--]--></div></div></section><section class="card-area section--padding" data-v-49bc0b5d><div class="container" data-v-49bc0b5d><div class="text-center" data-v-49bc0b5d><h2 class="sec__title mb-3" data-v-49bc0b5d>Latests Events</h2></div><div class="row mt-5 d-flex" data-v-49bc0b5d><!--[-->`);
      ssrRenderList(events.value, (event, index2) => {
        _push(`<div class="col-lg-4 col-md-6" data-v-49bc0b5d>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/listing-details/${event.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="card mb-0 hover-y" data-v-49bc0b5d${_scopeId}><a class="card-image" data-v-49bc0b5d${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top" alt="Event Image" data-v-49bc0b5d${_scopeId}><span class="${ssrRenderClass([{
                "text-bg-danger": event.event_type === "online",
                "text-bg-success": event.event_type === "physical",
                "text-bg-primary": event.event_type === "hybrid"
              }, "badge badge-pill"])}" data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.event_type)}</span></a><div class="card-body position-relative" data-v-49bc0b5d${_scopeId}><a class="author-img" data-v-49bc0b5d${_scopeId}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.user.profile_image)} alt="Author Image" data-v-49bc0b5d${_scopeId}></a><div class="category-container" data-v-49bc0b5d${_scopeId}><!--[-->`);
              ssrRenderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                _push2(`<div class="category-item" data-v-49bc0b5d${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/category/${id}`,
                  class: "card-cat"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="fal fa-tag icon-element icon-element-sm" data-v-49bc0b5d${_scopeId2}></span> ${ssrInterpolate(category)}`);
                    } else {
                      return [
                        createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                        createTextVNode(" " + toDisplayString(category), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div><div class="d-flex align-items-center mb-1" data-v-49bc0b5d${_scopeId}><h4 class="card-title mb-0" data-v-49bc0b5d${_scopeId}><a data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.title)}</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-49bc0b5d${_scopeId}></i></div><p class="card-text" data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.venue.venue_name)}, ${ssrInterpolate(event.country.name)}</p><ul class="info-list mt-3" data-v-49bc0b5d${_scopeId}><li data-v-49bc0b5d${_scopeId}><span class="fal fa-link icon" data-v-49bc0b5d${_scopeId}></span><a target="_blank"${ssrRenderAttr("href", event.website_link)} data-v-49bc0b5d${_scopeId}>${ssrInterpolate(event.website_link)}</a></li><li data-v-49bc0b5d${_scopeId}><span class="fal fa-calendar icon" data-v-49bc0b5d${_scopeId}></span> ${ssrInterpolate(event.event_date_from)}</li><li data-v-49bc0b5d${_scopeId}><span class="fal fa-watch icon" data-v-49bc0b5d${_scopeId}></span> ${ssrInterpolate(event.event_time_from)}</li></ul></div></div>`);
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
                      (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(event.category_names).slice(0, 2), ([id, category]) => {
                        return openBlock(), createBlock("div", {
                          key: id,
                          class: "category-item"
                        }, [
                          createVNode(_component_NuxtLink, {
                            to: `/category/${id}`,
                            class: "card-cat"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "fal fa-tag icon-element icon-element-sm" }),
                              createTextVNode(" " + toDisplayString(category), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
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
      _push(`<!--]--></div></div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49bc0b5d"]]);
export {
  index as default
};
//# sourceMappingURL=index-f3gTe48O.js.map
