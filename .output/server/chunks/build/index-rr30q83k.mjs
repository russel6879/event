import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { Autoplay, EffectCards, Navigation } from 'swiper/modules';
import { ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'sweetalert2';
import 'vue3-toastify';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const events = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="hero-wrapper hero-bg-2" data-v-db34405a><div id="particles-js" data-v-db34405a></div><div class="overlay" data-v-db34405a></div><div class="container position-relative z-index-2" data-v-db34405a><div class="hero-heading text-center pt-4" data-v-db34405a><h2 class="sec__title text-white" data-v-db34405a>What Your Plan Today?</h2><p class="sec__desc text-white" data-v-db34405a> All the top locations \u2013 from restaurants and clubs, to galleries, famous places and more... </p></div><ul class="nav nav-tabs my-tabs mt-5 justify-content-center" id="myTab" role="tablist" data-v-db34405a><li class="nav-item" role="presentation" data-v-db34405a><a class="nav-link active" id="places-tab" data-bs-toggle="tab" href="#places" role="tab" aria-controls="places" aria-selected="true" data-v-db34405a><i class="fal fa-map-marker-alt me-1" data-v-db34405a></i> Places </a></li><li class="nav-item" role="presentation" data-v-db34405a><a class="nav-link" id="events-tab" data-bs-toggle="tab" href="#events" role="tab" aria-controls="events" aria-selected="false" data-v-db34405a><i class="fal fa-music me-1" data-v-db34405a></i> Events </a></li><li class="nav-item" role="presentation" data-v-db34405a><a class="nav-link" id="jobs-tab" data-bs-toggle="tab" href="#jobs" role="tab" aria-controls="jobs" aria-selected="false" data-v-db34405a><i class="fal fa-search-plus me-1" data-v-db34405a></i> Jobs </a></li><li class="nav-item" role="presentation" data-v-db34405a><a class="nav-link" id="real-estate-tab" data-bs-toggle="tab" href="#real-estate" role="tab" aria-controls="real-estate" aria-selected="false" data-v-db34405a><i class="fal fa-home me-1" data-v-db34405a></i> Real Estate </a></li></ul><div class="tab-content mt-4" id="myTabContent" data-v-db34405a><div class="tab-pane fade show active" id="places" role="tabpanel" aria-labelledby="places-tab" data-v-db34405a><div class="card" data-v-db34405a><div class="card-body row pb-0" data-v-db34405a><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-search form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="What are you looking for?" data-v-db34405a></div></div><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-map-marker-alt form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="Location" data-v-db34405a></div></div><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group select2-container-wrapper" data-v-db34405a><select class="select-picker" data-width="100%" data-size="5" data-v-db34405a><option value data-v-db34405a>Select a Category</option><option value="1" data-v-db34405a>Shops</option><option value="2" data-v-db34405a>Hotels</option><option value="3" data-v-db34405a>Foods &amp; Restaurants</option><option value="4" data-v-db34405a>Fitness</option><option value="5" data-v-db34405a>Travel</option><option value="6" data-v-db34405a>Salons</option><option value="7" data-v-db34405a>Event</option><option value="8" data-v-db34405a>Business</option></select></div></div><div class="col-lg-3" data-v-db34405a><div class="form-group" data-v-db34405a><button class="theme-btn border-0 w-100" type="submit" data-v-db34405a> Search </button></div></div></div></div></div><div class="tab-pane fade" id="events" role="tabpanel" aria-labelledby="events-tab" data-v-db34405a><div class="card" data-v-db34405a><div class="card-body row pb-0" data-v-db34405a><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-search form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="What are you looking for?" data-v-db34405a></div></div><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-map-marker-alt form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="Location" data-v-db34405a></div></div><div class="col-lg-2 pe-lg-0" data-v-db34405a><div class="form-group select2-container-wrapper" data-v-db34405a><select class="select-picker" data-width="100%" data-size="5" data-v-db34405a><option value data-v-db34405a>Select a Category</option><option value="1" data-v-db34405a>Outdoor Activities</option><option value="2" data-v-db34405a>Hotels</option><option value="2" data-v-db34405a>Cinemas</option><option value="3" data-v-db34405a>Nightlife</option><option value="4" data-v-db34405a>Bars</option><option value="5" data-v-db34405a>Clubs</option><option value="6" data-v-db34405a>Salons</option><option value="7" data-v-db34405a>Event</option></select></div></div><div class="col-lg-2 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-calendar-alt form-icon" data-v-db34405a></span><input class="form-control form--control date-picker" type="text" placeholder="Date" data-v-db34405a></div></div><div class="col-lg-2" data-v-db34405a><div class="form-group" data-v-db34405a><button class="theme-btn border-0 w-100" type="submit" data-v-db34405a> Search </button></div></div></div></div></div><div class="tab-pane fade" id="jobs" role="tabpanel" aria-labelledby="jobs-tab" data-v-db34405a><div class="card" data-v-db34405a><div class="card-body row pb-0" data-v-db34405a><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-search form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="What are you looking for?" data-v-db34405a></div></div><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-map-marker-alt form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="Location" data-v-db34405a></div></div><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group select2-container-wrapper" data-v-db34405a><select class="select-picker" data-width="100%" data-size="5" data-v-db34405a><option value data-v-db34405a>Select a Category</option><option value="1" data-v-db34405a>Shops</option><option value="2" data-v-db34405a>Hotels</option><option value="3" data-v-db34405a>Foods &amp; Restaurants</option><option value="4" data-v-db34405a>Fitness</option><option value="5" data-v-db34405a>Travel</option><option value="6" data-v-db34405a>Salons</option><option value="7" data-v-db34405a>Event</option><option value="8" data-v-db34405a>Business</option></select></div></div><div class="col-lg-3" data-v-db34405a><div class="form-group" data-v-db34405a><button class="theme-btn border-0 w-100" type="submit" data-v-db34405a> Search </button></div></div></div></div></div><div class="tab-pane fade" id="real-estate" role="tabpanel" aria-labelledby="real-estate-tab" data-v-db34405a><div class="card" data-v-db34405a><div class="card-body row pb-0" data-v-db34405a><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-search form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="What are you looking for?" data-v-db34405a></div></div><div class="col-lg-3 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="fal fa-map-marker-alt form-icon" data-v-db34405a></span><input class="form-control form--control" type="text" placeholder="Location" data-v-db34405a></div></div><div class="col-lg-2 pe-lg-0" data-v-db34405a><div class="form-group select2-container-wrapper" data-v-db34405a><select class="select-picker" data-width="100%" data-size="5" data-v-db34405a><option value data-v-db34405a>Select a Category</option><option value="1" data-v-db34405a>Shops</option><option value="2" data-v-db34405a>Hotels</option><option value="3" data-v-db34405a>Foods &amp; Restaurants</option><option value="4" data-v-db34405a>Fitness</option><option value="5" data-v-db34405a>Travel</option><option value="6" data-v-db34405a>Salons</option><option value="7" data-v-db34405a>Event</option><option value="8" data-v-db34405a>Business</option></select></div></div><div class="col-lg-2 pe-lg-0" data-v-db34405a><div class="form-group" data-v-db34405a><span class="far fa-dollar-sign form-icon" data-v-db34405a></span><input class="form-control form--control" type="number" placeholder="Price" data-v-db34405a></div></div><div class="col-lg-2" data-v-db34405a><div class="form-group" data-v-db34405a><button class="theme-btn border-0 w-100" type="submit" data-v-db34405a> Search </button></div></div></div></div></div></div></div></section><section class="card-area section-padding" data-v-db34405a><div class="container" data-v-db34405a>`);
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
                            _push4(`<div class="card mb-0 hover-y" data-v-db34405a${_scopeId3}><a class="card-image" data-v-db34405a${_scopeId3}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} class="card-img-top" alt="Event Image" data-v-db34405a${_scopeId3}><span class="${ssrRenderClass([{
                              "text-bg-danger": event.event_type === "online",
                              "text-bg-success": event.event_type === "physical",
                              "text-bg-primary": event.event_type === "hybrid"
                            }, "badge badge-pill"])}" data-v-db34405a${_scopeId3}>${ssrInterpolate(event.event_type)}</span></a><div class="card-body position-relative" data-v-db34405a${_scopeId3}><a class="author-img" data-v-db34405a${_scopeId3}><img${ssrRenderAttr("src", `${_ctx.$config.public.baseURL}/` + event.featured_photo)} alt="Author Image" data-v-db34405a${_scopeId3}></a><div class="category-container" data-v-db34405a${_scopeId3}><!--[-->`);
                            ssrRenderList(event.category_names, (category, index22) => {
                              _push4(`<div class="category-item" data-v-db34405a${_scopeId3}><a href="#" class="card-cat" data-v-db34405a${_scopeId3}><span class="fal fa-utensils icon-element icon-element-sm" data-v-db34405a${_scopeId3}></span> ${ssrInterpolate(category)}</a></div>`);
                            });
                            _push4(`<!--]--></div><div class="d-flex align-items-center mb-1" data-v-db34405a${_scopeId3}><h4 class="card-title mb-0" data-v-db34405a${_scopeId3}><a data-v-db34405a${_scopeId3}>${ssrInterpolate(event.title)}</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-db34405a${_scopeId3}></i></div><p class="card-text" data-v-db34405a${_scopeId3}>${ssrInterpolate(event.venue)}, ${ssrInterpolate(event.country.name)}</p><ul class="info-list mt-3" data-v-db34405a${_scopeId3}><li data-v-db34405a${_scopeId3}><span class="fal fa-link icon" data-v-db34405a${_scopeId3}></span><a target="_blank"${ssrRenderAttr("href", event.website_link)} data-v-db34405a${_scopeId3}>${ssrInterpolate(event.website_link)}</a></li><li data-v-db34405a${_scopeId3}><span class="fal fa-calendar icon" data-v-db34405a${_scopeId3}></span> ${ssrInterpolate(event.event_date_from)}</li><li data-v-db34405a${_scopeId3}><span class="fal fa-watch icon" data-v-db34405a${_scopeId3}></span> ${ssrInterpolate(event.event_time_from)}</li></ul></div><div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" data-v-db34405a${_scopeId3}><div class="star-rating"${ssrRenderAttr("data-rating", event.rating)} data-v-db34405a${_scopeId3}><div class="rating-counter" data-v-db34405a${_scopeId3}>${ssrInterpolate(event.reviews)} reviews</div></div><a href="#" class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black" data-bs-toggle="tooltip" data-placement="top" title="Bookmark" data-v-db34405a${_scopeId3}><i class="fal fa-bookmark" data-v-db34405a${_scopeId3}></i></a></div></div>`);
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
                                      src: `${_ctx.$config.public.baseURL}/` + event.featured_photo,
                                      alt: "Author Image"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("div", { class: "category-container" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(event.category_names, (category, index22) => {
                                      return openBlock(), createBlock("div", {
                                        key: index22,
                                        class: "category-item"
                                      }, [
                                        createVNode("a", {
                                          href: "#",
                                          class: "card-cat"
                                        }, [
                                          createVNode("span", { class: "fal fa-utensils icon-element icon-element-sm" }),
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
                                  createVNode("p", { class: "card-text" }, toDisplayString(event.venue) + ", " + toDisplayString(event.country.name), 1),
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
                                ]),
                                createVNode("div", { class: "card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" }, [
                                  createVNode("div", {
                                    class: "star-rating",
                                    "data-rating": event.rating
                                  }, [
                                    createVNode("div", { class: "rating-counter" }, toDisplayString(event.reviews) + " reviews", 1)
                                  ], 8, ["data-rating"]),
                                  createVNode("a", {
                                    href: "#",
                                    class: "bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black",
                                    "data-bs-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "Bookmark"
                                  }, [
                                    createVNode("i", { class: "fal fa-bookmark" })
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
                                    src: `${_ctx.$config.public.baseURL}/` + event.featured_photo,
                                    alt: "Author Image"
                                  }, null, 8, ["src"])
                                ]),
                                createVNode("div", { class: "category-container" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(event.category_names, (category, index22) => {
                                    return openBlock(), createBlock("div", {
                                      key: index22,
                                      class: "category-item"
                                    }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "card-cat"
                                      }, [
                                        createVNode("span", { class: "fal fa-utensils icon-element icon-element-sm" }),
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
                                createVNode("p", { class: "card-text" }, toDisplayString(event.venue) + ", " + toDisplayString(event.country.name), 1),
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
                              ]),
                              createVNode("div", { class: "card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" }, [
                                createVNode("div", {
                                  class: "star-rating",
                                  "data-rating": event.rating
                                }, [
                                  createVNode("div", { class: "rating-counter" }, toDisplayString(event.reviews) + " reviews", 1)
                                ], 8, ["data-rating"]),
                                createVNode("a", {
                                  href: "#",
                                  class: "bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black",
                                  "data-bs-toggle": "tooltip",
                                  "data-placement": "top",
                                  title: "Bookmark"
                                }, [
                                  createVNode("i", { class: "fal fa-bookmark" })
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
                                  src: `${_ctx.$config.public.baseURL}/` + event.featured_photo,
                                  alt: "Author Image"
                                }, null, 8, ["src"])
                              ]),
                              createVNode("div", { class: "category-container" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(event.category_names, (category, index22) => {
                                  return openBlock(), createBlock("div", {
                                    key: index22,
                                    class: "category-item"
                                  }, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "card-cat"
                                    }, [
                                      createVNode("span", { class: "fal fa-utensils icon-element icon-element-sm" }),
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
                              createVNode("p", { class: "card-text" }, toDisplayString(event.venue) + ", " + toDisplayString(event.country.name), 1),
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
                            ]),
                            createVNode("div", { class: "card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" }, [
                              createVNode("div", {
                                class: "star-rating",
                                "data-rating": event.rating
                              }, [
                                createVNode("div", { class: "rating-counter" }, toDisplayString(event.reviews) + " reviews", 1)
                              ], 8, ["data-rating"]),
                              createVNode("a", {
                                href: "#",
                                class: "bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black",
                                "data-bs-toggle": "tooltip",
                                "data-placement": "top",
                                title: "Bookmark"
                              }, [
                                createVNode("i", { class: "fal fa-bookmark" })
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
        _push(`<div data-v-db34405a><p data-v-db34405a>Loading events...</p></div>`);
      }
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db34405a"]]);

export { index as default };
//# sourceMappingURL=index-rr30q83k.mjs.map
