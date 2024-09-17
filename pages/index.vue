<template>   
<section class="hero-wrapper hero-bg-2">
      <div id="particles-js"></div>
      <div class="overlay"></div>
      <!-- end overlay -->
      <div class="container position-relative z-index-2">
        <div class="hero-heading text-center pt-4">
          <h2 class="sec__title text-white">What Your Plan Today?</h2>
          <p class="sec__desc text-white">
            All the top locations – from restaurants and clubs, to galleries,
            famous places and more...
          </p>
        </div>
       
        <div class="tab-content mt-4" id="myTabContent">
    
          <div
            class="tab-pane fade show active"
            id="events"
            role="tabpanel"
            aria-labelledby="events-tab"
          >
            <div class="card">
              <div class="card-body row pb-0">
                <div class="col-lg-3 pe-lg-0">
                  <div class="form-group">
                    <span class="fal fa-search form-icon"></span>
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </div>
                <!-- end col-lg-3 -->
                <div class="col-lg-3 pe-lg-0">
                  <div class="form-group">
                    <span class="fal fa-map-marker-alt form-icon"></span>
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-3 -->
                <div class="col-lg-2 pe-lg-0">
                  <div class="form-group select2-container-wrapper">
                    <select
                      class="select-picker"
                      data-width="100%"
                      data-size="5"
                    >
                      <option value>Select a Category</option>
                      <option value="1">Outdoor Activities</option>
                      <option value="2">Hotels</option>
                      <option value="2">Cinemas</option>
                      <option value="3">Nightlife</option>
                      <option value="4">Bars</option>
                      <option value="5">Clubs</option>
                      <option value="6">Salons</option>
                      <option value="7">Event</option>
                    </select>
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-2 -->
                <div class="col-lg-2 pe-lg-0">
                  <div class="form-group">
                    <span class="fal fa-calendar-alt form-icon"></span>
                    <input
                      class="form-control form--control date-picker"
                      type="text"
                      placeholder="Date"
                    />
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-2 -->
                <div class="col-lg-2">
                  <div class="form-group">
                    <button class="theme-btn border-0 w-100" type="submit">
                      Search
                    </button>
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-2 -->
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
          </div>
          <!-- end tab-pane -->
        
        </div>
        <!-- end tab-content -->
      </div>
      <!-- end container -->
    </section>  

   <section class="category-area bg-gray section--padding">
  <div class="container">
    <h2 class="sec__title text-center">What do you need to find?</h2>
    <div class="row mt-5">
      <div v-for="(category, index) in categories" :key="category.name" class="col-lg-2 col-md-4">
         <NuxtLink  :to="`/category/${category.id}`"  class="highlight-category highlight-category-3">
          <span :class="`fal ${category.icon} icon-element icon-element-bg-slim-${index + 1}  d-block mx-auto mb-2`"></span>
          <span class="highlight-cat-title">{{ category.name }}</span>
          <span class="badge badge-pill">{{ category.event_count }} Listings</span>
        </NuxtLink>
      </div>
    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
</section>

    <section class="card-area section-padding">
    <div class="container">
      <Swiper
        v-if="events.length > 0"
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
    
        <swiper-slide v-for="(event, index) in events" :key="index">
          <NuxtLink  :to="`/listing-details/${event.slug}`">
          <div class="card mb-0 hover-y">
            <a class="card-image">
              <img
                :src="`${$config.public.baseURL}/`+event.featured_photo"
                class="card-img-top"
                alt="Event Image"
              />
              <span class="badge  badge-pill"    :class="{
                      'text-bg-danger': event.event_type === 'online',
                      'text-bg-success': event.event_type === 'physical',
                      'text-bg-primary': event.event_type === 'hybrid'
      }">{{ event.event_type }}</span>
            </a>
             
            <div class="card-body position-relative">
              <a class="author-img">
                <img :src="`${$config.public.baseURL}/`+event.user.profile_image" alt="Author Image" />
              </a>
              <div class="category-container">
              
            <div  v-for="([id, category]) in Object.entries(event.category_names).slice(0, 2)":key="id" class="category-item">
              <NuxtLink  :to="`/category/${id}`"  class="card-cat">
                <span class="fal fa-tag icon-element icon-element-sm"></span>
                {{ category }}
              </NuxtLink>
            </div>
          </div>
              <div class="d-flex align-items-center mb-1">
                <h4 class="card-title mb-0">
                  <a>{{ event.title }}</a>
                </h4>
                <i
                  class="fa fa-check-circle ms-1 text-success"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Claimed"
                ></i>
              </div>
              <p class="card-text">{{ event.venue.venue_name }}, {{ event.country.name }}</p>
              <ul class="info-list mt-3">
                <!-- <li><span class="fal fa-phone icon"></span> {{ event.phone }}</li> -->
                <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li>
                <li>
                  <span class="fal fa-calendar icon"></span> {{ event.event_date_from }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ event.event_time_from }}</li>
              </ul>
            </div>
            <!-- end card-body -->
            <!-- <div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between">
              <div class="star-rating" :data-rating="event.rating">
                <div class="rating-counter">{{ event.reviews }} reviews</div>
              </div>
              <a
                href="#"
                class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Bookmark"
              >
                <i class="fal fa-bookmark"></i>
              </a>
            </div> -->
            <!-- end card-footer -->
          </div>
        </NuxtLink>
        </swiper-slide>
      </Swiper>
      <div v-else>
        <p>Loading events...</p>
      </div>
    </div>
  </section>

<section class="card-area section--padding bg-gray ">
      <div class="container">
        <div class="text-center">
          <h2 class="sec__title mb-3">Upcoming Events</h2>
      
        </div>
        <div class="row mt-5 d-flex ">
            
          <div class="col-lg-4 col-md-6" v-for="(event, index) in events" :key="index">
                <NuxtLink  :to="`/listing-details/${event.slug}`">
                  <div class="card mb-0 hover-y">
            <a class="card-image">
              <img
                :src="`${$config.public.baseURL}/`+event.featured_photo"
                class="card-img-top"
                alt="Event Image"
              />
              <span class="badge  badge-pill"    :class="{
                      'text-bg-danger': event.event_type === 'online',
                      'text-bg-success': event.event_type === 'physical',
                      'text-bg-primary': event.event_type === 'hybrid'
      }">{{ event.event_type }}</span>
            </a>
            <div class="card-body position-relative">
              <a class="author-img">
                <img :src="`${$config.public.baseURL}/`+event.user.profile_image" alt="Author Image" />
              </a>
              <div class="category-container">
                   
            <div  v-for="([id, category]) in Object.entries(event.category_names).slice(0, 2)":key="id" class="category-item">
              <NuxtLink  :to="`/category/${id}`"  class="card-cat">
                <span class="fal fa-tag icon-element icon-element-sm"></span>
                {{ category }}
              </NuxtLink>
            </div>
          </div>
              <div class="d-flex align-items-center mb-1">
                <h4 class="card-title mb-0">
                  <a>{{ event.title }}</a>
                </h4>
                <i
                  class="fa fa-check-circle ms-1 text-success"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Claimed"
                ></i>
              </div>
              <p class="card-text">{{ event.venue.venue_name }}, {{ event.country.name }}</p>
              <ul class="info-list mt-3">
                <!-- <li><span class="fal fa-phone icon"></span> {{ event.phone }}</li> -->
                <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li>
                <li>
                  <span class="fal fa-calendar icon"></span> {{ event.event_date_from }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ event.event_time_from }}</li>
              </ul>
            </div>
            <!-- end card-body -->
            <!-- <div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between">
              <div class="star-rating" :data-rating="event.rating">
                <div class="rating-counter">{{ event.reviews }} reviews</div>
              </div>
              <a
                href="#"
                class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Bookmark"
              >
                <i class="fal fa-bookmark"></i>
              </a>
            </div> -->
            <!-- end card-footer -->
          </div>
                  </NuxtLink>
          </div>
      
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
<section class="card-area section--padding">
      <div class="container">
        <div class="text-center">
          <h2 class="sec__title mb-3">Latests Events</h2>
      
        </div>
        <div class="row mt-5 d-flex ">
          <div class="col-lg-4 col-md-6" v-for="(event, index) in events" :key="index">
                <NuxtLink  :to="`/listing-details/${event.slug}`">
                  <div class="card mb-0 hover-y">
            <a class="card-image">
              <img
                :src="`${$config.public.baseURL}/`+event.featured_photo"
                class="card-img-top"
                alt="Event Image"
              />
              <span class="badge  badge-pill"    :class="{
                      'text-bg-danger': event.event_type === 'online',
                      'text-bg-success': event.event_type === 'physical',
                      'text-bg-primary': event.event_type === 'hybrid'
      }">{{ event.event_type }}</span>
            </a>
            <div class="card-body position-relative">
              <a class="author-img">
                <img :src="`${$config.public.baseURL}/`+event.user.profile_image" alt="Author Image" />
              </a>
              <div class="category-container">
                  
            <div  v-for="([id, category]) in Object.entries(event.category_names).slice(0, 2)":key="id" class="category-item">
              <NuxtLink  :to="`/category/${id}`"  class="card-cat">
                <span class="fal fa-tag icon-element icon-element-sm"></span>
                {{ category }}
              </NuxtLink>
            </div>
          </div>
              <div class="d-flex align-items-center mb-1">
                <h4 class="card-title mb-0">
                  <a>{{ event.title }}</a>
                </h4>
                <i
                  class="fa fa-check-circle ms-1 text-success"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Claimed"
                ></i>
              </div>
              <p class="card-text">{{ event.venue.venue_name }}, {{ event.country.name }}</p>
              <ul class="info-list mt-3">
                <!-- <li><span class="fal fa-phone icon"></span> {{ event.phone }}</li> -->
                <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li>
                <li>
                  <span class="fal fa-calendar icon"></span> {{ event.event_date_from }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ event.event_time_from }}</li>
              </ul>
            </div>
            <!-- end card-body -->
            <!-- <div class="card-footer bg-transparent border-top-gray d-flex align-items-center justify-content-between">
              <div class="star-rating" :data-rating="event.rating">
                <div class="rating-counter">{{ event.reviews }} reviews</div>
              </div>
              <a
                href="#"
                class="bookmark-btn icon-element icon-element-sm bg-white shadow-sm text-black"
                data-bs-toggle="tooltip"
                data-placement="top"
                title="Bookmark"
              >
                <i class="fal fa-bookmark"></i>
              </a>
            </div> -->
            <!-- end card-footer -->
          </div>
                  </NuxtLink>
          </div>
        
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </template>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { ref, onMounted } from 'vue'; // Import ref and onMounted from Vue
import eventService from '@/services/eventService'; // Adjust the path based on your project structure

const events = ref([]);
const categories = ref([]);

const getCategories = async () => {
  try {
    const data = await eventService.getHomePageCategories(); // Adjust this method if needed
    categories.value = data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    // Handle error as needed
  }
};
// Fetch events using eventService
const getEvents = async () => {
  try {
    const data = await eventService.getEvents();
    events.value = data;
  } catch (error) {
    console.error('Error fetching events:', error);
    // Handle error as needed
  }
};

// Fetch events when component is mounted
onMounted(() => {
  getEvents();
    getCategories();

});


</script>

<style scoped>
.category-container {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping to the next line if necessary */
  gap: 8px; /* Adds space between items */
}

.category-item {
  display: flex;
  align-items: center;
}

.card-cat {
  display: flex;
  align-items: center;
  padding: 8px;
  text-decoration: none;
  color: #333;
}

.icon-element {
  margin-right: 8px;
}
/* Add your custom styles here */
</style>