<template>   
<section class="hero-wrapper hero-bg-2">
      <div id="particles-js"></div>
      <div class="overlay"></div>
      <!-- end overlay -->
      <div class="container position-relative z-index-2">
        <div class="hero-heading text-center pt-4">
          <h3 class="sec__title text-white">Explore Global Events & Exhibitions in Expo Gazette</h3>
          <p class="sec__desc text-white">
            Please search exhibitions & events using name, country, and category to find the perfect match for your interests.
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
                      v-model="searchQuery"
                      type="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                </div>
                <!-- end col-lg-3 -->
                <div class="col-lg-2 pe-lg-0">
                  <div class="form-group">
                    <span class="fal fa-map-marker-alt form-icon"></span>
                 <select class="form-control form--control" v-model="selectedCountry">
                  <option value="" disabled>Select a Country</option>
                  <option v-for="country in countries" :key="country.id" :value="country.id">
                    {{ country.name }}
                  </option>
                </select>
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-3 -->
                <div class="col-lg-2 pe-lg-0">
                  <div class="form-group ">
                     <span class="fal fa-tag form-icon"></span>
                  <select class="form-control form--control" v-model="selectedCategory">
                  <option value="" disabled>Select a Category</option>
                  <option v-for="category in searchbarCategories" :key="category.id" :value="category.id">
                    {{ category.name }}
                  </option>
                </select>
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-2 -->
                <div class="col-lg-2 pe-lg-0 ">
                  <div class="form-group">
                    <span class="fal fa-calendar-alt form-icon"></span>
                    <select class="form-control form--control" v-model="selectedMonth">
                      <option value="" disabled>Select a Month</option>
                      <option v-for="month in months" :key="month.value" :value="month.value">
                        {{ month.name }}
                      </option>
                    </select>
                  
                  </div>
                  <!-- end form-group -->
                </div>
                <div class="col-lg-1 pe-lg-0 ">
                  <div class="form-group">
                    <!-- <span class="fal fa-calendar-alt form-icon"></span> -->
                    <select class="form-control form--control p-3" v-model="selectedYear">
                      <option value="" disabled>Year</option>

                      <option v-for="year in years" :key="year" :value="year">
                        {{ year }}
                      </option>
                    </select>
                  
                  </div>
                  <!-- end form-group -->
                </div>
                <!-- end col-lg-2 -->
                <div class="col-lg-2">
                  <div class="form-group">
                      <button class="theme-btn border-0 w-100" @click="handleSearch" type="button">
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
      <div v-for="(category, index) in categories" :key="category.name" class="col-lg-2 col-md-4 ">
         <NuxtLink  :to="`/category/${category.id}`"  class="highlight-category highlight-category-3">
          <span :class="`fal ${category.icon} icon-element icon-element-bg-slim-${index + 1}  d-block mx-auto mb-2`"></span>
          <span class="highlight-cat-title">{{ category.name }}</span>
          <span class="badge badge-pill">{{ category.event_count }} Listings</span>
        </NuxtLink>
      </div>
      <div class="text-center col-lg-2 col-md-4 " v-if="categories.length > 10">
        <NuxtLink  :to="`/all-categories`"  class="highlight-category highlight-category-3">
      <button  class="btn theme-btn mb-3 mt-3">
        {{ showMore ? 'Show Less' : 'Show More' }}
      </button>
    </NuxtLink>
    </div>
    </div>
    <!-- end row -->
  </div>
  <!-- end container -->
</section>

    <section class="card-area section-padding">
    <div class="container">
      <div class="text-center">
          <h2 class="sec__title mb-5">Featured Events</h2>
      
        </div>
      <Swiper
        v-if="featuredEvents.length > 0"
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
    
        <swiper-slide v-for="(event, index) in featuredEvents" :key="index">
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
              
            <div  v-for="([id, category]) in Object.entries(event.category_names).slice(0, 2)" :key="id" class="category-item">
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
                <!-- <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li> -->
                <li>
                  <span class="fal fa-calendar icon"></span> {{ $formatDate(event.event_date_from) }} ~ {{ $formatDate(event.event_date_to) }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ $formatTime(event.event_time_from) }} ~  {{ $formatTime(event.event_time_to) }}</li>
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
            
          <div class="col-lg-4 col-md-6 mt-5" v-for="(event, index) in upEvents" :key="index">
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
                   
            <div  v-for="([id, category]) in Object.entries(event.category_names).slice(0, 2)" :key="id" class="category-item">
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
                <!-- <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li> -->
                <li>
                  <span class="fal fa-calendar icon"></span> {{ $formatDate(event.event_date_from) }} ~ {{ $formatDate(event.event_date_to) }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ $formatTime(event.event_time_from) }} ~  {{ $formatTime(event.event_time_to) }}</li>
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
          <div class="col-lg-4 col-md-6 mt-5" v-for="(event, index) in events" :key="index">
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
                <!-- <li>
                  <span class="fal fa-link icon"></span>
                  <a target="_blank" :href="event.website_link">{{ event.website_link }}</a>
                </li> -->
                <li>
                  <span class="fal fa-calendar icon"></span> {{ $formatDate(event.event_date_from) }} ~ {{ $formatDate(event.event_date_to) }}
                </li>
                <li><span class="fal fa-watch icon"></span> {{ $formatTime(event.event_time_from) }} ~  {{ $formatTime(event.event_time_to) }}</li>
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
          <h2 class="sec__title mb-3">News & Articles</h2>
      
        </div>
        <div class="row mt-5 d-flex ">
          <div class="col-lg-4 col-md-6 mt-5" v-for="(blog, index) in blogs" :key="index">
                <NuxtLink  :to="`/blog-details/${blog.slug}`">
                  <div class="card mb-0 hover-y">
            <a class="card-image">
              <img
                :src="`${$config.public.baseURL}`+blog.featured_photo"
                class="card-img-top"
                alt="Blog Image"
              />
           
            </a>
            <div class="card-body position-relative">
             
         
              <div class="d-flex align-items-center mb-1">
                <h4 class="card-title mb-0">
                  <a>{{ blog.title }}</a>
                </h4>
                <i
                  class="fa fa-check-circle ms-1 text-success"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Claimed"
                ></i>
              </div>
            
         
            </div>
          
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
import { useRouter } from 'vue-router';

// const selectedMonth = ref(new Date().getMonth() + 1);
// const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref('');
const selectedYear = ref('');
const months = [
  { value: 1, name: 'January' },
  { value: 2, name: 'February' },
  { value: 3, name: 'March' },
  { value: 4, name: 'April' },
  { value: 5, name: 'May' },
  { value: 6, name: 'June' },
  { value: 7, name: 'July' },
  { value: 8, name: 'August' },
  { value: 9, name: 'September' },
  { value: 10, name: 'October' },
  { value: 11, name: 'November' },
  { value: 12, name: 'December' },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 11 }, (v, k) => currentYear + k); // 11 years: current year + next 10 years

const countries = ref([]);
const searchQuery = ref('');
const router = useRouter();
const events = ref([]);
const blogs = ref([]);
const upEvents = ref([]);
const featuredEvents = ref([]);
const categories = ref([]);
const searchbarCategories = ref([]);
const selectedCountry = ref('');
const selectedCategory = ref('');
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
const getUpcomingEvents = async () => {
  try {
    const data = await eventService.getUpcomingEvents();
    upEvents.value = data;
  } catch (error) {
    console.error('Error fetching events:', error);
    // Handle error as needed
  }
};
const getFeaturedEvents = async () => {
  try {
    const data = await eventService.getFeaturedEvents();
    featuredEvents.value = data;
  } catch (error) {
    console.error('Error fetching events:', error);
    // Handle error as needed
  }
};
// Fetch countries dynamically
const fetchCountries = async () => {
  try {
    countries.value = await eventService.getCountries();
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

const fetchBlog = async () => {
  try {
    blogs.value = await eventService.getBlogs();
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

// Fetch categories dynamically
const fetchSearchbarCategories = async () => {
  try {
    searchbarCategories.value = await eventService.getCategories();
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

const handleSearch = () => {
  const searchParams = {
    query: searchQuery.value,
    country: selectedCountry.value,
    category: selectedCategory.value,
    month: selectedMonth.value,
    year: selectedYear.value,
    page:1
  };
  
  router.push({ name: 'search-results', query: searchParams });
};
// Fetch events when component is mounted


onMounted(() => {
  getEvents();
    getCategories();
   fetchSearchbarCategories();
   fetchCountries();
   fetchBlog();
   getUpcomingEvents();
   getFeaturedEvents();

});


</script>

<style scoped>

/* Add your custom styles here */
</style>