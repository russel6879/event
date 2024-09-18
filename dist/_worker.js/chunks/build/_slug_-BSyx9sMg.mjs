import{_ as a,u as e}from"./server.mjs";import{b as c,a7 as t,a6 as s,a2 as l,ac as i,v as d}from"../routes/renderer.mjs";import"../runtime.mjs";import"node:async_hooks";import"../virtual/_commonjsHelpers.mjs";const n={__name:"[slug]",__ssrInlineRender:!0,setup(a){e();const d=c(null);return c(null),(a,e,c,n)=>{var v,f,o,r,m,p,g,h,u,b,k,w,x,y,$,_,z,B,P,F,j,C,R,A;e(`\x3c!--[--\x3e<section class="breadcrumb-area bread-bg" data-v-faec454c><div class="overlay opacity-8" data-v-faec454c></div><div class="container" data-v-faec454c><div class="breadcrumb-content" data-v-faec454c><h2 class="sec__title text-white mb-2" data-v-faec454c>${t(null==(f=d.value)?void 0:f.title)}</h2><p class="sec__desc text-white" data-v-faec454c><i class="fal fa-map-marker-alt me-1" data-v-faec454c></i> ${t(null==(o=d.value)?void 0:o.venue.venue_name)}, ${t(null==(r=d.value)?void 0:r.country.name)}</p><ul class="listing-info my-3" data-v-faec454c>\x3c!--[--\x3e`),s(null==(m=d.value)?void 0:m.category_names,((a,c)=>{e(`<li data-v-faec454c><span class="theme-btn theme-btn-sm listing-tag" data-v-faec454c><i class="fal fa-tag me-1 font-size-13" data-v-faec454c></i> ${t(a)}</span></li>`)})),e(`\x3c!--]--\x3e</ul></div></div><div class="bread-svg" data-v-faec454c><svg viewBox="0 0 500 150" preserveAspectRatio="none" data-v-faec454c><path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" data-v-faec454c></path></svg></div></section><section class="card-area padding-top-60px padding-bottom-90px" data-v-faec454c><div class="container" data-v-faec454c><div class="row" data-v-faec454c><div class="col-lg-8 mb-4" data-v-faec454c><div class="listing-wrapper" data-v-faec454c><div class="listing-single-panel mb-5" data-v-faec454c><h4 class="font-size-20 font-weight-semi-bold mb-3" data-v-faec454c> Description </h4><p data-v-faec454c>${null!=(v=null==(p=d.value)?void 0:p.description)?v:""}</p></div><div class="listing-single-panel mb-5" data-v-faec454c><h4 class="font-size-20 font-weight-semi-bold mb-3" data-v-faec454c>Photos</h4><img${l("src",`${a.$config.public.baseURL}/`+(null==(g=d.value)?void 0:g.featured_photo))} class="img-fluid" alt="gallery-image" data-v-faec454c></div><div class="listing-single-panel mb-5 d-none" data-v-faec454c><h4 class="font-size-20 font-weight-semi-bold mb-3" data-v-faec454c> Features </h4><div class="row" data-v-faec454c><div class="col-lg-4" data-v-faec454c><ul class="list-items" data-v-faec454c><li data-v-faec454c><i class="fal fa-check-circle me-1 text-success" data-v-faec454c></i> Instant Noodles </li><li data-v-faec454c><i class="fal fa-check-circle me-1 text-success" data-v-faec454c></i> Wireless Internet </li></ul></div><div class="col-lg-4" data-v-faec454c><ul class="list-items" data-v-faec454c><li data-v-faec454c><i class="fal fa-check-circle me-1 text-success" data-v-faec454c></i> Smoking Allowed </li><li data-v-faec454c><i class="fal fa-check-circle me-1 text-success" data-v-faec454c></i> Street Parking </li></ul></div><div class="col-lg-4" data-v-faec454c><ul class="list-items" data-v-faec454c><li data-v-faec454c><i class="fal fa-check-circle me-1 text-success" data-v-faec454c></i> Bike Parking </li><li data-v-faec454c><i class="fal fa-check-circle me-1 text-success" data-v-faec454c></i> Accepts Credit Cards </li></ul></div></div></div><div class="listing-single-panel mb-5" data-v-faec454c><h4 class="font-size-20 font-weight-semi-bold mb-3" data-v-faec454c>Video</h4><div class="video-box text-center position-relative" data-v-faec454c><div class="overlay z-index-0 rounded" data-v-faec454c></div><div class="video-content position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center" data-v-faec454c><div data-v-faec454c><a class="icon-element icon-element-lg text-white"${l("href",null==(h=d.value)?void 0:h.video_link)} data-fancybox="preview-video" title="Play Video" data-v-faec454c><span class="fas fa-play" data-v-faec454c></span></a><p class="text-white mt-2 font-size-18" data-v-faec454c>Watch video</p></div></div></div></div><div class="listing-single-panel mb-5" data-v-faec454c><h4 class="font-size-20 font-weight-semi-bold mb-3" data-v-faec454c> Location </h4><div id="map-single" class="w-100 height-300" data-v-faec454c><iframe${l("src",null==(u=d.value)?void 0:u.venue.google_map_link)} width="100%" height="450" style="${i({border:"0"})}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-faec454c></iframe></div></div></div></div><div class="col-lg-4" data-v-faec454c><div class="sidebar" data-v-faec454c><div class="author-verified bg-success p-3 rounded text-white text-center mb-4" data-bs-toggle="tooltip" data-placement="top" title="Listing has been verified and belongs the business owner or manager" data-v-faec454c><i class="far fa-check me-2" data-v-faec454c></i> Verified Listing </div><div class="card" data-v-faec454c><div class="card-body" data-v-faec454c><ul class="list-items mt-4" data-v-faec454c><li data-v-faec454c><span class="fal fa-map-marker-alt icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span> ${t(null==(b=d.value)?void 0:b.venue.venue_name)}, ${t(null==(k=d.value)?void 0:k.country.name)}</li><li data-v-faec454c><span class="fal fa-calendar icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span> ${t(null==(w=d.value)?void 0:w.event_date_from)} ~ ${t(null==(x=d.value)?void 0:x.event_date_to)}</li><li data-v-faec454c><span class="fal fa-watch icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span> ${t(null==(y=d.value)?void 0:y.event_time_from)} ~ ${t(null==($=d.value)?void 0:$.event_time_to)}</li><li data-v-faec454c><span class="fal fa-external-link icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span><a${l("href",null==(_=d.value)?void 0:_.website_link)} target="_blank" data-v-faec454c>${t(null==(z=d.value)?void 0:z.website_link)}</a></li></ul></div></div><div class="card" data-v-faec454c><div class="card-body" data-v-faec454c><h4 class="card-title mb-3" data-v-faec454c>Tags</h4><ul class="tag-list" data-v-faec454c><li data-v-faec454c><a href="#" data-v-faec454c>Restaurant</a></li><li data-v-faec454c><a href="#" data-v-faec454c>Hotel</a></li><li data-v-faec454c><a href="#" data-v-faec454c>Food</a></li><li data-v-faec454c><a href="#" data-v-faec454c>Bars</a></li><li data-v-faec454c><a href="#" data-v-faec454c>Salon</a></li><li data-v-faec454c><a href="#" data-v-faec454c>Cleaning</a></li><li data-v-faec454c><a href="#" data-v-faec454c>Fashion</a></li></ul></div></div><div class="card" data-v-faec454c><div class="card-body" data-v-faec454c><h4 class="card-title mb-3" data-v-faec454c>Hosted by</h4><div class="media mt-4" data-v-faec454c><img${l("src",`${a.$config.public.baseURL}/`+(null==(B=d.value)?void 0:B.user.profile_image))} alt="avatar" class="user-avatar flex-shrink-0 me-3" data-v-faec454c><div class="media-body align-self-center" data-v-faec454c><h4 class="font-size-18 font-weight-semi-bold mb-1" data-v-faec454c><a href="user-profile.html" class="btn-link text-black" data-v-faec454c>${t(null==(P=d.value)?void 0:P.user.name)}</a></h4><p class="font-size-14" data-v-faec454c>20 listing hosted</p></div></div><ul class="list-items mt-4" data-v-faec454c><li data-v-faec454c><span class="fal fa-envelope icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span><a${l("href","mailto:"+(null==(F=d.value)?void 0:F.user.email))} data-v-faec454c>${t(null==(j=d.value)?void 0:j.user.email)}</a></li><li data-v-faec454c><span class="fal fa-phone icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span> ${t(null==(C=d.value)?void 0:C.user.phone)}</li><li data-v-faec454c><span class="fal fa-external-link icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14" data-v-faec454c></span><a${l("href",null==(R=d.value)?void 0:R.website_link)} target="_blank" data-v-faec454c>${t(null==(A=d.value)?void 0:A.website_link)}</a></li></ul></div></div></div></div></div></div></section><section class="card-area bg-gray section-padding" data-v-faec454c><div class="container" data-v-faec454c><h4 class="font-size-25 font-weight-semi-bold" data-v-faec454c>People Also Viewed</h4><div class="card-carousel owl-carousel owl-theme mt-4 mx-lg-n2" data-v-faec454c><div class="card mb-0 hover-y" data-v-faec454c><a href="listing-details.html" class="card-image" data-v-faec454c><img${l("src","")} class="card-img-top" alt="card image" data-v-faec454c><span class="badge text-bg-success badge-pill" data-v-faec454c>Now open</span></a><div class="card-body position-relative" data-v-faec454c><a href="user-profile.html" class="author-img" data-v-faec454c><img${l("src","")} alt="author-img" data-v-faec454c></a><a href="#" class="card-cat mb-2" data-v-faec454c><span class="fal fa-utensils icon-element icon-element-sm" data-v-faec454c></span> Restaurant</a><div class="d-flex align-items-center mb-1" data-v-faec454c><h4 class="card-title mb-0" data-v-faec454c><a href="listing-details.html" data-v-faec454c>Favorite Place Food Bank</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-faec454c></i></div><p class="card-text" data-v-faec454c>Bishop Avenue, New York</p><ul class="info-list mt-3" data-v-faec454c><li data-v-faec454c><span class="fal fa-phone icon" data-v-faec454c></span> (416) 551-0589</li><li data-v-faec454c><span class="fal fa-link icon" data-v-faec454c></span><a href="#" data-v-faec454c>www.mysitelink.com</a></li><li data-v-faec454c><span class="fal fa-calendar icon" data-v-faec454c></span> Posted 1 month ago </li></ul></div><div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" data-v-faec454c><div class="star-rating" data-rating="4.5" data-v-faec454c><div class="rating-counter" data-v-faec454c>4.5</div></div><a href="#" class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black" data-bs-toggle="tooltip" data-placement="top" title="Bookmark" data-v-faec454c><i class="fal fa-bookmark" data-v-faec454c></i></a></div></div><div class="card mb-0 hover-y" data-v-faec454c><a href="listing-details.html" class="card-image" data-v-faec454c><img${l("src","")} class="card-img-top" alt="card image" data-v-faec454c><span class="badge text-bg-danger badge-pill" data-v-faec454c>Closed</span></a><div class="card-body position-relative" data-v-faec454c><a href="user-profile.html" class="author-img" data-v-faec454c><img${l("src","")} alt="author-img" data-v-faec454c></a><a href="#" class="card-cat mb-2" data-v-faec454c><span class="fal fa-utensils icon-element icon-element-sm" data-v-faec454c></span> Restaurant</a><div class="d-flex align-items-center mb-1" data-v-faec454c><h4 class="card-title mb-0" data-v-faec454c><a href="listing-details.html" data-v-faec454c>Favorite Place Food Bank</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-faec454c></i></div><p class="card-text" data-v-faec454c>Bishop Avenue, New York</p><ul class="info-list mt-3" data-v-faec454c><li data-v-faec454c><span class="fal fa-phone icon" data-v-faec454c></span> (416) 551-0589</li><li data-v-faec454c><span class="fal fa-link icon" data-v-faec454c></span><a href="#" data-v-faec454c>www.mysitelink.com</a></li><li data-v-faec454c><span class="fal fa-calendar icon" data-v-faec454c></span> Posted 1 month ago </li></ul></div><div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" data-v-faec454c><div class="star-rating" data-rating="4.5" data-v-faec454c><div class="rating-counter" data-v-faec454c>4.5</div></div><a href="#" class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black" data-bs-toggle="tooltip" data-placement="top" title="Bookmark" data-v-faec454c><i class="fal fa-bookmark" data-v-faec454c></i></a></div></div><div class="card mb-0 hover-y" data-v-faec454c><a href="listing-details.html" class="card-image" data-v-faec454c><img${l("src","")} class="card-img-top" alt="card image" data-v-faec454c><span class="badge text-bg-success badge-pill" data-v-faec454c>Now open</span></a><div class="card-body position-relative" data-v-faec454c><a href="user-profile.html" class="author-img" data-v-faec454c><img${l("src","")} alt="author-img" data-v-faec454c></a><a href="#" class="card-cat mb-2" data-v-faec454c><span class="fal fa-utensils icon-element icon-element-sm" data-v-faec454c></span> Restaurant</a><div class="d-flex align-items-center mb-1" data-v-faec454c><h4 class="card-title mb-0" data-v-faec454c><a href="listing-details.html" data-v-faec454c>Favorite Place Food Bank</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-faec454c></i></div><p class="card-text" data-v-faec454c>Bishop Avenue, New York</p><ul class="info-list mt-3" data-v-faec454c><li data-v-faec454c><span class="fal fa-phone icon" data-v-faec454c></span> (416) 551-0589</li><li data-v-faec454c><span class="fal fa-link icon" data-v-faec454c></span><a href="#" data-v-faec454c>www.mysitelink.com</a></li><li data-v-faec454c><span class="fal fa-calendar icon" data-v-faec454c></span> Posted 1 month ago </li></ul></div><div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" data-v-faec454c><div class="star-rating" data-rating="4.5" data-v-faec454c><div class="rating-counter" data-v-faec454c>4.5</div></div><a href="#" class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black" data-bs-toggle="tooltip" data-placement="top" title="Bookmark" data-v-faec454c><i class="fal fa-bookmark" data-v-faec454c></i></a></div></div><div class="card mb-0 hover-y" data-v-faec454c><a href="listing-details.html" class="card-image" data-v-faec454c><img${l("src","")} class="card-img-top" alt="card image" data-v-faec454c><span class="badge text-bg-success badge-pill" data-v-faec454c>Now open</span></a><div class="card-body position-relative" data-v-faec454c><a href="user-profile.html" class="author-img" data-v-faec454c><img${l("src","")} alt="author-img" data-v-faec454c></a><a href="#" class="card-cat mb-2" data-v-faec454c><span class="fal fa-utensils icon-element icon-element-sm" data-v-faec454c></span> Restaurant</a><div class="d-flex align-items-center mb-1" data-v-faec454c><h4 class="card-title mb-0" data-v-faec454c><a href="listing-details.html" data-v-faec454c>Favorite Place Food Bank</a></h4><i class="fa fa-check-circle ms-1 text-success" data-bs-toggle="tooltip" data-placement="top" title="Claimed" data-v-faec454c></i></div><p class="card-text" data-v-faec454c>Bishop Avenue, New York</p><ul class="info-list mt-3" data-v-faec454c><li data-v-faec454c><span class="fal fa-phone icon" data-v-faec454c></span> (416) 551-0589</li><li data-v-faec454c><span class="fal fa-link icon" data-v-faec454c></span><a href="#" data-v-faec454c>www.mysitelink.com</a></li><li data-v-faec454c><span class="fal fa-calendar icon" data-v-faec454c></span> Posted 1 month ago </li></ul></div><div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between" data-v-faec454c><div class="star-rating" data-rating="4.5" data-v-faec454c><div class="rating-counter" data-v-faec454c>4.5</div></div><a href="#" class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black" data-bs-toggle="tooltip" data-placement="top" title="Bookmark" data-v-faec454c><i class="fal fa-bookmark" data-v-faec454c></i></a></div></div></div></div></section>\x3c!--]--\x3e`)}}},v=n.setup;n.setup=(a,e)=>{const c=d();return(c.modules||(c.modules=new Set)).add("pages/listing-details/[slug].vue"),v?v(a,e):void 0};const f=a(n,[["__scopeId","data-v-faec454c"]]);export{f as default};
//# sourceMappingURL=_slug_-BSyx9sMg.mjs.map