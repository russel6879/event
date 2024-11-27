<template>
  <!-- ================================
         END HEADER AREA
================================= -->

    <!-- ================================
    START BREADCRUMB AREA
================================= -->
<section class="breadcrumb-area bread-bg">
      <div class="overlay opacity-8"></div>
      <!-- end overlay -->
      <div class="container">
        <div class="breadcrumb-content">
          <h2 class="sec__title text-white mb-2">{{event?.title}}</h2>
          <p class="sec__desc text-white">
            <i class="fal fa-map-marker-alt me-1"></i> {{event?.venue.venue_name}}, {{event?.country.name}}
          </p>
          <ul class="listing-info my-3">
           
            <li v-for="(category, id) in event?.category_names" :key="id">
              <NuxtLink  :to="`/category/${id}`" >
              <span class="theme-btn theme-btn-sm listing-tag"
                ><i class="fal fa-tag me-1 font-size-13"></i>      {{ category }}</span
              >
              </NuxtLink>
            </li>
          </ul>
  
        </div>
        <!-- end breadcrumb-content -->
      </div>
      <!-- end container -->
      <div class="bread-svg">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path
            d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z"
          ></path>
        </svg>
      </div>
      <!-- end bread-svg -->
    </section>
    <!-- end breadcrumb-area -->
    <!-- ================================
    END BREADCRUMB AREA
================================= -->

    <!-- ================================
    START CARD AREA
================================= -->
<!-- {{event?.user}} -->
    <section class="card-area padding-top-60px padding-bottom-90px">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-4">
            <div class="listing-wrapper">
              <div class="listing-single-panel mb-5">
                <h4 class="font-size-20 font-weight-semi-bold mb-3">
                  Description
                </h4>
                <p  v-html="event?.description"></p>
            
              </div>
              <!-- end listing-single-panel -->
              <div class="listing-single-panel mb-5">
                <h4 class="font-size-20 font-weight-semi-bold mb-3">Photos</h4>
                <img :src="`${$config.public.baseURL}/`+event?.featured_photo" class="img-fluid" alt="gallery-image" />
                <!-- <div class="gallery-carousel owl-carousel owl-theme">
                  <div class="gallery-item">
                    <img :src="`${$config.public.baseURL}/`+event?.featured_photo" alt="gallery-image" />
                  </div>
                 
                </div> -->
              </div>
              <!-- end listing-single-panel -->
              <div class="listing-single-panel mb-5 d-none">
                <h4 class="font-size-20 font-weight-semi-bold mb-3">
                  Features
                </h4>
                <div class="row">
                  <div class="col-lg-4">
                    <ul class="list-items">
                      <li>
                        <i class="fal fa-check-circle me-1 text-success"></i>
                        Instant Noodles
                      </li>
                      <li>
                        <i class="fal fa-check-circle me-1 text-success"></i>
                        Wireless Internet
                      </li>
                    </ul>
                  </div>
                  <!-- end col-lg-4 -->
                  <div class="col-lg-4">
                    <ul class="list-items">
                      <li>
                        <i class="fal fa-check-circle me-1 text-success"></i>
                        Smoking Allowed
                      </li>
                      <li>
                        <i class="fal fa-check-circle me-1 text-success"></i>
                        Street Parking
                      </li>
                    </ul>
                  </div>
                  <!-- end col-lg-4 -->
                  <div class="col-lg-4">
                    <ul class="list-items">
                      <li>
                        <i class="fal fa-check-circle me-1 text-success"></i>
                        Bike Parking
                      </li>
                      <li>
                        <i class="fal fa-check-circle me-1 text-success"></i>
                        Accepts Credit Cards
                      </li>
                    </ul>
                  </div>
                  <!-- end col-lg-4 -->
                </div>
                <!-- end row -->
              </div>
              <!-- end listing-single-panel -->
              <div class="listing-single-panel mb-5">
                <h4 class="font-size-20 font-weight-semi-bold mb-3">Video</h4>
                <div class="video-box text-center position-relative">
                  <div class="overlay z-index-0 rounded"></div>
                  <img
                    :src="`${$config.public.baseURL}/`+'video-poster.jpeg'"
                    :data-src="`${$config.public.baseURL}/`+'video-poster.jpeg'"
                    alt="video-image"
                    class="w-100 rounded lazy"
                  />
                  <div
                    class="video-content position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  >
                    <div>
                      <a
                        class="icon-element icon-element-lg text-white"
                        :href="event?.video_link"
                        data-fancybox="preview-video"
                        title="Play Video"
                      >
                        <span class="fas fa-play"></span>
                      </a>
                      <p class="text-white mt-2 font-size-18">Watch video</p>
                    </div>
                  </div>
                  <!-- end video__box-content -->
                </div>
              </div>
              <!-- end listing-single-panel -->
              <div class="listing-single-panel mb-5">
                <h4 class="font-size-20 font-weight-semi-bold mb-3">
                  Venue:   {{event?.venue.venue_name}}, {{event?.country.name}} 
                </h4>
                <div
                  id="map-single"
            
                  class="w-100 height-300"
                >
                <p class="mb-3">{{ event?.venue.description }}</p> 
               <iframe :src="event?.venue.google_map_link" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              
              </div>
          
          
              <!-- end listing-single-panel -->
            </div>
            <!-- end listing-wrapper -->
          </div>
          <!-- end col-lg-8 -->
          <div class="col-lg-4">
            <div class="sidebar">
              <div
                class="author-verified bg-success p-3 rounded text-white text-center mb-4"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Listing has been verified and belongs the business owner or manager"
              >
                <i class="far fa-check me-2"></i>
                Verified Listing
              </div>
              <div class="card">
                <div class="card-body">
                  <!-- <h4 class="card-title mb-3">Booking</h4> -->
                 <ul class="list-items mt-4">
                  <li>
                    <span
                      class="fal fa-map-marker-alt icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                    ></span>
                  {{event?.venue.venue_name}}, {{event?.country.name}}
                  </li>
                  <li>
                    <span
                      class="fal fa-calendar icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                    ></span
                    > {{ $formatDate(event?.event_date_from) }} ~ {{ $formatDate(event?.event_date_to) }}
                  </li>
                  <li>
                    <span
                      class="fal fa-watch icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                    ></span>
                    {{ $formatTime(event?.event_time_from) }} ~  {{ $formatTime(event?.event_time_to) }}
                  </li>
                  <li>
                    <span
                      class="fal fa-external-link icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                    ></span
                    ><a :href="event?.website_link" target="_blank">{{event?.website_link}}</a>
                  </li>
                </ul>
              
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->
              <!-- <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-3">Opening Hours</h4>
                  <ul class="list-items">
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Monday</span> 9am - 5pm
                    </li>
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Tuesday</span> 9am - 5pm
                    </li>
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Wednesday</span> 9am - 5pm
                    </li>
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Thursday</span> 9am - 5pm
                    </li>
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Friday</span> 9am - 5pm
                    </li>
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Sat</span> 9am - 5pm
                    </li>
                    <li
                      class="d-flex align-items-center justify-content-between"
                    >
                      <span class="text-black">Sun</span>
                      <span class="text-danger">Closed</span>
                    </li>
                  </ul>
                </div>
       
              </div> -->
              <!-- end card -->
              <div class="card d-none">
                <div class="card-body">
                  <h4 class="card-title mb-3">Tags</h4>
                  <ul class="tag-list">
                    <li><a href="#">Restaurant</a></li>
                    <li><a href="#">Hotel</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Bars</a></li>
                    <li><a href="#">Salon</a></li>
                    <li><a href="#">Cleaning</a></li>
                    <li><a href="#">Fashion</a></li>
                  </ul>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-3">Hosted by</h4>
                  <div class="media mt-4">
                    <img
                     :src="`${$config.public.baseURL}/`+event?.user.profile_image"
                      alt="avatar"
                      class="user-avatar flex-shrink-0 me-3"
                    />
                    <div class="media-body align-self-center">
                      <h4 class="font-size-18 font-weight-semi-bold mb-1">
                        <NuxtLink  :to="`/organizer-listings/${event?.user.id}`"  class="btn-link text-black"
                          >{{event?.user.name}}
                        </NuxtLink >
                      </h4>
                      <p class="font-size-14">{{ event?.user_event_count }} listing hosted</p>
                    </div>
                  </div>
                  <ul class="list-items mt-4">
                    <!-- <li>
                      <span
                        class="fal fa-envelope icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                      ></span
                      ><a :href="'mailto:'+event?.user.email">{{event?.user.email}}</a>
                    </li>
                    <li>
                      <span
                        class="fal fa-phone icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                      ></span>
                    {{event?.user.phone}}
                    </li> -->
                    <li v-if="event?.user.email">
                      <span
                        class="fal fa-envelope icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                      ></span
                      ><a :href="'mailto:'+event?.user.email">{{event?.user.email}}</a>
                    </li>
                    <li v-if="event?.user.website">
                      <span
                        class="fal fa-external-link icon-element icon-element-sm bg-white shadow-sm text-black me-2 font-size-14"
                      ></span
                      ><a :href="event?.user.website" target="_blank">{{event?.user.website}}</a>
                    </li>
                  </ul>
                </div>
                <!-- end card-body -->
              </div>
              <!-- end card -->
            </div>
            <!-- end sidebar -->
          </div>
          <!-- end col-lg-4 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end card-area -->
    <!-- ================================
    END CARD AREA
================================= -->

    <!-- ================================
    START CARD AREA
================================= -->
    <section class="card-area bg-gray section-padding">
      <div class="container">
        <h4 class="font-size-25 font-weight-semi-bold mb-5">People Also Viewed</h4>
     
        <Swiper
    v-if="relatedEvents.length > 0"
    :modules="[SwiperAutoplay, SwiperEffectCards, SwiperNavigation]"
    :slides-per-view="3"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: true }"
    :space-between="20"
    navigation
    :breakpoints="{
      300: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 3 }
    }"
  >
  
    <swiper-slide v-for="(relatedEvent, index) in relatedEvents" :key="index">
      <NuxtLink :to="`/listing-details/${relatedEvent.slug}`">
        <div class="card mb-0 hover-y">
          <a class="card-image">
            <img
              :src="`${$config.public.baseURL}/` + relatedEvent.featured_photo"
              class="card-img-top"
              alt="Event Image"
            />
            <span
              class="badge badge-pill"
              :class="{
                'text-bg-danger': relatedEvent.event_type === 'online',
                'text-bg-success': relatedEvent.event_type === 'physical',
                'text-bg-primary': relatedEvent.event_type === 'hybrid'
              }"
            >
              {{ relatedEvent.event_type }}
            </span>
          </a>

          <div class="card-body position-relative">
            <a class="author-img">
              <img
                :src="`${$config.public.baseURL}/` + relatedEvent.user.profile_image"
                alt="Author Image"
              />
            </a>
            <div class="category-container">
              <!-- <div
                v-for="([id, category]) in Object.entries(relatedEvent.category_names).slice(0, 2)"
                :key="id"
                class="category-item"
              >
                <NuxtLink :to="`/category/${id}`" class="card-cat">
                  <span class="fal fa-tag icon-element icon-element-sm"></span>
                  {{ category }}
                </NuxtLink>
              </div> -->
            </div>
            <div class="d-flex align-items-center mb-1">
              <h4 class="card-title mb-0">
                <a>{{ relatedEvent.title }}</a>
              </h4>
              <i
                class="fa fa-check-circle ms-1 text-success"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Claimed"
              ></i>
            </div>
            <p class="card-text">
              {{ relatedEvent.venue.venue_name }}, {{ relatedEvent.country.name }}
            </p>
            <ul class="info-list mt-3">
              <li>
                <span class="fal fa-calendar icon"></span>
                {{ $formatDate(relatedEvent.event_date_from) }} ~
                {{ $formatDate(relatedEvent.event_date_to) }}
              </li>
              <li>
                <span class="fal fa-watch icon"></span>
                {{ $formatTime(relatedEvent.event_time_from) }} ~
                {{ $formatTime(relatedEvent.event_time_to) }}
              </li>
            </ul>
          </div>
        </div>
      </NuxtLink>
    </swiper-slide>
  </Swiper>
        <!-- end card-carousel -->
      </div>
      <!-- end container -->
    </section>
    <!-- end card-area -->
    <!-- ================================
    END CARD AREA
================================= -->



</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
 import eventService from '~/services/eventService';

const route = useRoute();
const event = ref(null);
const error = ref(null);
const relatedEvents = ref([]);

const fetchEventDetails = async () => {
  try {
    const eventSlug = route.params.slug; // Get the event ID from the route parameters
    const data = await eventService.getEventDetails(eventSlug);

    event.value = data; // Assign fetched data to the reactive event object
        // Fetch related events
    const categoryIds = data.category; // Assuming category_ids is available
    const currentEventId = data.id; // Assuming category_ids is available
    const relatedData = await eventService.getRelatedEvents(categoryIds, currentEventId);
    relatedEvents.value = relatedData;
 console.log(relatedData)
 
  } catch (err) {
    error.value = err.message; // Handle any errors
    console.error('Error fetching event details:', err);
  }
};

onMounted(fetchEventDetails);
</script>

<style scoped>
/* Add any styling here */
</style>